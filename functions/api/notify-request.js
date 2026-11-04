/* Van Squads — notify a business about a new quote request.
   Cloudflare Pages Function. POST /api/notify-request  { request_id }
   Auth: Bearer <supabase user JWT> of the customer who created the request.
   Called fire-and-forget by the frontend right after a request is inserted.
   Anti-abuse: only notifies when the JWT user owns the request AND the
   request was created within the last 15 minutes; anything else is skipped.
   Channel: unclaimed (verified=false) businesses get a Twilio SMS with the
   claim link (customer contact details are never in the text); claimed
   (verified=true) businesses get a Resend email alert.
   Opt-in: when the customer ticks "Also send this to up to two similar
   businesses nearby" on the booking form, the frontend passes
   also_send:true and the same request is also copied to up to two
   similar businesses (same category, serving the customer's ZIP), each
   notified through the same channels — see pickSimilarBusinesses.
   Never returns a 500 after auth — a failed notification must not break the
   customer's booking flow. Failures are logged and reported as sent:'none'. */

const NOTIFY_WINDOW_MS = 15 * 60 * 1000;

function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

function sbHeaders(env, key) {
  return { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' };
}

async function authedUser(request, env) {
  const h = request.headers.get('authorization') || '';
  const m = h.match(/^Bearer (.+)$/);
  if (!m) return null;
  const res = await fetch(env.SUPABASE_URL + '/auth/v1/user', {
    headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + m[1] }
  });
  if (!res.ok) return null;
  const user = await res.json();
  return (user && user.id) ? user : null;
}

// US numbers only for now: 10 digits -> +1, 11 starting with 1 -> +.
function toE164(phone) {
  const d = String(phone || '').replace(/\D/g, '');
  if (d.length === 10) return '+1' + d;
  if (d.length === 11 && d[0] === '1') return '+' + d;
  return null;
}

function twilioAuth(env) {
  return 'Basic ' + btoa(env.TWILIO_ACCOUNT_SID + ':' + env.TWILIO_AUTH_TOKEN);
}

let cachedFromNumber = null;
async function twilioFromNumber(env) {
  if (cachedFromNumber) return cachedFromNumber;
  const acct = 'https://api.twilio.com/2010-04-01/Accounts/' + env.TWILIO_ACCOUNT_SID;
  const res = await fetch(acct + '/IncomingPhoneNumbers.json?PageSize=1', {
    headers: { Authorization: twilioAuth(env) }
  });
  if (!res.ok) throw new Error('twilio-numbers-' + res.status);
  const j = await res.json();
  const nums = (j && j.incoming_phone_numbers) || [];
  if (nums.length && nums[0].phone_number) {
    cachedFromNumber = nums[0].phone_number;
    return cachedFromNumber;
  }
  /* No sender number exists (the account was set up for Verify codes
     only). Provision one Sacramento (916) number from the account's
     trial credit so lead alerts can be sent. Releasable in the Twilio
     console at any time. */
  const avail = await fetch(acct + '/AvailablePhoneNumbers/US/Local.json?AreaCode=916&SmsEnabled=true&PageSize=1', {
    headers: { Authorization: twilioAuth(env) }
  });
  if (!avail.ok) throw new Error('twilio-avail-' + avail.status);
  const aj = await avail.json();
  const cand = (aj && aj.available_phone_numbers) || [];
  if (!cand.length || !cand[0].phone_number) throw new Error('twilio-no-number-available');
  const buy = await fetch(acct + '/IncomingPhoneNumbers.json', {
    method: 'POST',
    headers: { Authorization: twilioAuth(env), 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ PhoneNumber: cand[0].phone_number }).toString()
  });
  if (!buy.ok) { const bj = await buy.json().catch(() => null); const err = new Error('twilio-buy-failed'); err.detail = bj; throw err; }
  const bought = await buy.json();
  cachedFromNumber = bought.phone_number;
  console.log('notify: provisioned Twilio sender number', cachedFromNumber);
  return cachedFromNumber;
}

async function twilioSendSms(env, to, body) {
  const from = await twilioFromNumber(env);
  const res = await fetch('https://api.twilio.com/2010-04-01/Accounts/' + env.TWILIO_ACCOUNT_SID + '/Messages.json', {
    method: 'POST',
    headers: {
      Authorization: twilioAuth(env),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }).toString()
  });
  let j = null;
  try { j = await res.json(); } catch (e) { /* ignore */ }
  if (!res.ok) { const err = new Error('twilio-error'); err.detail = j; throw err; }
  return j;
}

async function resendEmail(env, to, subject, text) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Van Squads <noreply@vansquads.com>',
      to: [to],
      subject: subject,
      text: text
    })
  });
  if (!res.ok) { const err = new Error('resend-error'); err.detail = await res.text(); throw err; }
  return res.json();
}

/* Notify ONE business about a request through the standard channels.
   info = { zip, preferredTime, service }. Returns { sent, reason? } —
   the same results the original inline Flow A / Flow B produced. */
async function notifyBusiness(env, base, H, biz, info) {
  /* ---- unclaimed business -> SMS with the claim link ---- */
  if (!biz.verified) {
    if (!biz.phone) return { sent: 'none', reason: 'no-phone' };
    const e164 = toE164(biz.phone);
    if (!e164) return { sent: 'none', reason: 'invalid-phone' };
    if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN) {
      return { sent: 'none', reason: 'twilio-not-configured' };
    }
    const text = 'Van Squads: A customer in ' + (info.zip || 'your area') +
      ' requested a quote for ' + info.service +
      '. See the request and claim your free profile: https://vansquads.com/#/claim/' + biz.id +
      ' Reply STOP to opt out.';
    try {
      await twilioSendSms(env, e164, text);
      return { sent: 'sms' };
    } catch (e) {
      console.error('notify: sms failed', e.detail || e.message);
      return { sent: 'none', reason: 'sms-failed' };
    }
  }

  /* ---- claimed business -> email alert ---- */
  let email = (typeof biz.email === 'string' && biz.email.trim()) ? biz.email.trim() : null;
  if (!email && biz.owner_id) {
    try {
      const obj = { ...H, Accept: 'application/vnd.pgrst.object+json' };
      const r = await fetch(base + '/profiles?select=email&id=eq.' + encodeURIComponent(biz.owner_id), { headers: obj });
      if (r.ok) { const p = await r.json(); if (p && typeof p.email === 'string' && p.email.trim()) email = p.email.trim(); }
    } catch (e) { console.error('notify: profile load failed', e.message); }
  }
  if (!email) return { sent: 'none', reason: 'no-email' };
  if (!env.RESEND_API_KEY) return { sent: 'none', reason: 'resend-not-configured' };

  const text = 'Hi ' + (biz.name || 'there') + ',\n\n' +
    'You have a new quote request on Van Squads.\n\n' +
    'Service: ' + info.service + '\n' +
    'Customer ZIP: ' + (info.zip || 'not provided') + '\n' +
    'Preferred time: ' + (info.preferredTime || 'not specified') + '\n\n' +
    'See the request and reply in your provider workspace:\n' +
    'https://vansquads.com/#/workspace\n\n' +
    '- Van Squads';
  try {
    await resendEmail(env, email, 'New quote request on Van Squads', text);
    return { sent: 'email' };
  } catch (e) {
    console.error('notify: email failed', e.detail || e.message);
    return { sent: 'none', reason: 'email-failed' };
  }
}

/* Pick up to two similar businesses for an opted-in request: same
   category, active, not sample, not the original business and not the
   customer's own business; serving the customer's ZIP (exact ZIP
   first, then the same ZIP3 area). A business is only picked when it
   has an active listing to attach the request to AND a working
   notification route (claimed: its own email or its owner's; unclaimed:
   a phone that parses). Claimed businesses sort first inside a tier —
   they can see the request and reply right away. */
async function pickSimilarBusinesses(base, H, origBiz, reqRow) {
  const zip = String(reqRow.zip || '');
  if (!origBiz.category || !zip) return [];
  let rows = [];
  try {
    const r = await fetch(base + '/businesses?select=id,name,category,phone,verified,owner_id,email,service_zips,is_sample' +
      '&category=eq.' + encodeURIComponent(origBiz.category) +
      '&status=eq.active&id=neq.' + encodeURIComponent(origBiz.id) +
      '&owner_id=neq.' + encodeURIComponent(reqRow.customer_id) + '&limit=200', { headers: H });
    if (r.ok) rows = await r.json();
  } catch (e) { console.error('notify: similar load failed', e.message); }
  if (!Array.isArray(rows)) return [];
  const zip3 = zip.slice(0, 3);
  const tierOf = function (b) {
    const zs = Array.isArray(b.service_zips) ? b.service_zips.map(String) : [];
    if (zs.indexOf(zip) >= 0) return 0;
    if (zs.some(function (z) { return z.slice(0, 3) === zip3; })) return 1;
    return -1;
  };
  const cands = [];
  rows.forEach(function (b) {
    if (!b || !b.id || b.is_sample) return;
    const t = tierOf(b);
    if (t >= 0) cands.push({ biz: b, tier: t });
  });
  if (!cands.length) return [];

  /* primary (earliest active) listing per candidate */
  const listingByBiz = {};
  try {
    const ids = cands.map(function (c) { return c.biz.id; }).join(',');
    const r = await fetch(base + '/listings?select=id,business_id,title&status=eq.active&business_id=in.(' + ids + ')&order=created_at.asc', { headers: H });
    if (r.ok) {
      const ls = await r.json();
      (ls || []).forEach(function (l) { if (l && !listingByBiz[l.business_id]) listingByBiz[l.business_id] = l; });
    }
  } catch (e) { console.error('notify: similar listings failed', e.message); }

  /* owner emails — the email route for claimed businesses that have no
     email of their own on the business row */
  const ownerEmail = {};
  try {
    const owners = [...new Set(cands.filter(function (c) {
      return c.biz.verified && !(typeof c.biz.email === 'string' && c.biz.email.trim()) && c.biz.owner_id;
    }).map(function (c) { return c.biz.owner_id; }))];
    if (owners.length) {
      const r = await fetch(base + '/profiles?select=id,email&id=in.(' + owners.join(',') + ')', { headers: H });
      if (r.ok) { const ps = await r.json(); (ps || []).forEach(function (p) { if (p && p.email) ownerEmail[p.id] = p.email; }); }
    }
  } catch (e) { console.error('notify: similar owners failed', e.message); }

  const routable = function (b) {
    if (b.verified) return !!((typeof b.email === 'string' && b.email.trim()) || ownerEmail[b.owner_id]);
    return !!toE164(b.phone);
  };
  const picked = cands.filter(function (c) { return listingByBiz[c.biz.id] && routable(c.biz); });
  picked.sort(function (a, b) {
    if (a.tier !== b.tier) return a.tier - b.tier;
    if (!!a.biz.verified !== !!b.biz.verified) return a.biz.verified ? -1 : 1;
    return String(a.biz.name || '').localeCompare(String(b.biz.name || ''));
  });
  return picked.slice(0, 2).map(function (c) { return { biz: c.biz, listing: listingByBiz[c.biz.id] }; });
}

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json(405, { error: 'method-not-allowed' });
  const user = await authedUser(request, env);
  if (!user) return json(401, { error: 'unauthorized' });

  let body = {};
  try { body = await request.json(); } catch (e) { return json(200, { sent: 'skipped', reason: 'bad-json' }); }
  if (!body.request_id) return json(200, { sent: 'skipped', reason: 'missing-request-id' });

  const H = sbHeaders(env, env.SUPABASE_SERVICE_ROLE_KEY);
  const base = env.SUPABASE_URL + '/rest/v1';
  const obj = { ...H, Accept: 'application/vnd.pgrst.object+json' };

  /* ---- load the request; only its own customer, only while fresh ---- */
  let reqRow = null;
  try {
    const r = await fetch(base + '/requests?select=id,customer_id,business_id,listing_id,message,zip,preferred_time,photo_urls,created_at&id=eq.' + encodeURIComponent(body.request_id), { headers: obj });
    if (r.ok) reqRow = await r.json();
  } catch (e) { console.error('notify: request load failed', e.message); }
  if (!reqRow || !reqRow.id) return json(200, { sent: 'skipped', reason: 'request-not-found' });
  if (reqRow.customer_id !== user.id) return json(200, { sent: 'skipped', reason: 'not-request-customer' });
  if (Date.now() - new Date(reqRow.created_at).getTime() > NOTIFY_WINDOW_MS) {
    return json(200, { sent: 'skipped', reason: 'request-too-old' });
  }

  /* ---- load the business + the listing title (service name) ---- */
  let biz = null;
  try {
    const r = await fetch(base + '/businesses?select=id,name,category,phone,verified,owner_id,email&id=eq.' + encodeURIComponent(reqRow.business_id), { headers: obj });
    if (r.ok) biz = await r.json();
  } catch (e) { console.error('notify: business load failed', e.message); }
  if (!biz || !biz.id) return json(200, { sent: 'none', reason: 'business-not-found' });

  let service = biz.category || 'your service';
  if (reqRow.listing_id) {
    try {
      const r = await fetch(base + '/listings?select=title&id=eq.' + encodeURIComponent(reqRow.listing_id), { headers: obj });
      if (r.ok) { const l = await r.json(); if (l && l.title) service = l.title; }
    } catch (e) { console.error('notify: listing load failed', e.message); }
  }

  /* ---- Admin alert: Amam sees every real customer request ----
     Copy to the Van Squads business inbox, added 2026-10-23 on Amam's
     order. Best-effort only: a failure here must never affect the
     business notification below. */
  if (env.RESEND_API_KEY) {
    try {
      const adminText = 'New customer quote request on Van Squads.\n\n' +
        'Business: ' + (biz.name || 'unknown') + (biz.verified ? ' (claimed)' : ' (unclaimed)') + '\n' +
        'Service: ' + service + '\n' +
        'Customer ZIP: ' + (reqRow.zip || 'not provided') + '\n' +
        'Preferred time: ' + (reqRow.preferred_time || 'not specified') + '\n\n' +
        'Business workspace: https://vansquads.com/#/workspace\n';
      await resendEmail(env, 'vansquadservices@gmail.com', 'New quote request on Van Squads (admin copy)', adminText);
    } catch (e) { console.error('notify: admin alert failed', e.detail || e.message); }
  }

  /* ---- notify the business this request was sent to ---- */
  const primary = await notifyBusiness(env, base, H, biz, {
    zip: reqRow.zip, preferredTime: reqRow.preferred_time, service: service
  });
  const out = { sent: primary.sent };
  if (primary.reason) out.reason = primary.reason;

  /* ---- customer opt-in: also send to up to two similar businesses ----
     Each extra business gets its own copy of the request (so it lands
     in their workspace like any request sent to them directly) and the
     standard notification for their claim status. Best-effort only:
     extras never change the primary result above. */
  if (body.also_send === true) {
    const alsoSent = [];
    try {
      const extras = await pickSimilarBusinesses(base, H, biz, reqRow);
      for (const ex of extras) {
        let copy = null;
        try {
          const r = await fetch(base + '/requests', {
            method: 'POST',
            headers: { ...H, Prefer: 'return=representation' },
            body: JSON.stringify({
              customer_id: reqRow.customer_id, listing_id: ex.listing.id, business_id: ex.biz.id,
              message: reqRow.message, zip: reqRow.zip, preferred_time: reqRow.preferred_time || '',
              photo_urls: reqRow.photo_urls || [], status: 'pending'
            })
          });
          if (r.ok) { const rows = await r.json(); copy = Array.isArray(rows) ? rows[0] : rows; }
        } catch (e) { console.error('notify: extra request insert failed', e.message); }
        if (!copy || !copy.id) {
          alsoSent.push({ business_id: ex.biz.id, name: ex.biz.name, sent: 'none', reason: 'copy-failed' });
          continue;
        }
        const res = await notifyBusiness(env, base, H, ex.biz, {
          zip: reqRow.zip, preferredTime: reqRow.preferred_time,
          service: ex.listing.title || ex.biz.category || service
        });
        const entry = { business_id: ex.biz.id, name: ex.biz.name, sent: res.sent };
        if (res.reason) entry.reason = res.reason;
        alsoSent.push(entry);
      }
    } catch (e) { console.error('notify: also-send failed', e.message); }
    out.also_sent = alsoSent;
    if (alsoSent.length && env.RESEND_API_KEY) {
      try {
        const lines = alsoSent.map(function (a) { return '- ' + (a.name || a.business_id) + ' (' + a.sent + ')'; }).join('\n');
        await resendEmail(env, 'vansquadservices@gmail.com', 'Request also sent to nearby businesses (customer opt-in)',
          'A customer ticked "Also send this to up to two similar businesses nearby" on a quote request.\n\n' +
          'Original business: ' + (biz.name || 'unknown') + '\n' +
          'Also sent to:\n' + lines + '\n');
      } catch (e) { console.error('notify: also-send admin note failed', e.detail || e.message); }
    }
  }

  return json(200, out);
}
