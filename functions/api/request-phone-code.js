/* Van Squads — send a phone verification code via Twilio Verify (SMS).
   Cloudflare Pages Function. POST /api/request-phone-code  { businessId }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it.
   Twilio Verify holds the code state; we store nothing locally.
   Twilio REST called via raw fetch (no helper library) — edge-safe. */

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

async function twilioVerifyCreate(env, e164) {
  const sid = env.TWILIO_ACCOUNT_SID, tok = env.TWILIO_AUTH_TOKEN, svc = env.TWILIO_VERIFY_SID;
  if (!sid || !tok || !svc) { const e = new Error('twilio-not-configured'); e.httpStatus = 500; throw e; }
  const res = await fetch('https://verify.twilio.com/v2/Services/' + svc + '/Verifications', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + btoa(sid + ':' + tok),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ To: e164, Channel: 'sms' }).toString()
  });
  let j = null;
  try { j = await res.json(); } catch (e) { /* ignore */ }
  if (!res.ok) { const err = new Error('twilio-error'); err.httpStatus = res.status; err.detail = j; throw err; }
  return j;
}

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json(405, { error: 'method-not-allowed' });
  try {
    const user = await authedUser(request, env);
    if (!user) return json(401, { error: 'unauthorized' });

    let body = {};
    try { body = await request.json(); } catch (e) { return json(400, { error: 'bad-json' }); }
    if (!body.businessId) return json(400, { error: 'missing-business' });

    const H = sbHeaders(env, env.SUPABASE_SERVICE_ROLE_KEY);
    const base = env.SUPABASE_URL + '/rest/v1';

    const bizRes = await fetch(base + '/businesses?select=id,owner_id,name,phone,phone_verified&id=eq.' + encodeURIComponent(body.businessId), {
      headers: { ...H, Accept: 'application/vnd.pgrst.object+json' }
    });
    const biz = bizRes.ok ? await bizRes.json() : null;
    if (!biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.phone_verified) return json(200, { alreadyVerified: true });

    const e164 = toE164(biz.phone);
    if (!e164) return json(400, { error: 'invalid-phone' });

    let j;
    try {
      j = await twilioVerifyCreate(env, e164);
    } catch (e) {
      console.error('twilio verify create failed', e.detail || e.message);
      return json(502, { error: 'send-failed' });
    }
    if (!j || j.status !== 'pending') {
      console.error('twilio verify unexpected status', j);
      return json(502, { error: 'send-failed' });
    }
    return json(200, { sent: true });
  } catch (e) { console.error(e); return json(500, { error: 'server-error' }); }
}
