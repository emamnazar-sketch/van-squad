/* Van Squads — notify a business about a new quote request.
   Cloudflare Pages Function. POST /api/notify-request  { request_id }
   Auth: Bearer <supabase user JWT> of the customer who created the request.
   Called fire-and-forget by the frontend right after a request is inserted.
   Anti-abuse: only notifies when the JWT user owns the request AND the
   request was created within the last 15 minutes; anything else is skipped.
   Channel: unclaimed (verified=false) businesses get a Twilio SMS with the
   claim link (customer contact details are never in the text); claimed
   (verified=true) businesses get a Resend email alert.
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
    const r = await fetch(base + '/requests?select=id,customer_id,business_id,listing_id,zip,preferred_time,created_at&id=eq.' + encodeURIComponent(body.request_id), { headers: obj });
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

  /* ---- Flow A: unclaimed business -> SMS with the claim link ---- */
  if (!biz.verified) {
    if (!biz.phone) return json(200, { sent: 'none', reason: 'no-phone' });
    const e164 = toE164(biz.phone);
    if (!e164) return json(200, { sent: 'none', reason: 'invalid-phone' });
    if (!env.TWILIO_ACCOUNT_SID || !env.TWILIO_AUTH_TOKEN) {
      return json(200, { sent: 'none', reason: 'twilio-not-configured' });
    }
    const text = 'Van Squads: A customer in ' + (reqRow.zip || 'your area') +
      ' requested a quote for ' + service +
      '. See the request and claim your free profile: https://vansquads.com/#/claim/' + biz.id +
      ' Reply STOP to opt out.';
    try {
      await twilioSendSms(env, e164, text);
      return json(200, { sent: 'sms' });
    } catch (e) {
      console.error('notify: sms failed', e.detail || e.message);
      return json(200, { sent: 'none', reason: 'sms-failed' });
    }
  }

  /* ---- Flow B: claimed business -> email alert ---- */
  let email = (typeof biz.email === 'string' && biz.email.trim()) ? biz.email.trim() : null;
  if (!email && biz.owner_id) {
    try {
      const r = await fetch(base + '/profiles?select=email&id=eq.' + encodeURIComponent(biz.owner_id), { headers: obj });
      if (r.ok) { const p = await r.json(); if (p && typeof p.email === 'string' && p.email.trim()) email = p.email.trim(); }
    } catch (e) { console.error('notify: profile load failed', e.message); }
  }
  if (!email) return json(200, { sent: 'none', reason: 'no-email' });
  if (!env.RESEND_API_KEY) return json(200, { sent: 'none', reason: 'resend-not-configured' });

  const text = 'Hi ' + (biz.name || 'there') + ',\n\n' +
    'You have a new quote request on Van Squads.\n\n' +
    'Service: ' + service + '\n' +
    'Customer ZIP: ' + (reqRow.zip || 'not provided') + '\n' +
    'Preferred time: ' + (reqRow.preferred_time || 'not specified') + '\n\n' +
    'See the request and reply in your provider workspace:\n' +
    'https://vansquads.com/#/workspace\n\n' +
    '- Van Squads';
  try {
    await resendEmail(env, email, 'New quote request on Van Squads', text);
    return json(200, { sent: 'email' });
  } catch (e) {
    console.error('notify: email failed', e.detail || e.message);
    return json(200, { sent: 'none', reason: 'email-failed' });
  }
}
