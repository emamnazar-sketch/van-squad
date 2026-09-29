/* Van Squad — send a phone verification code via Twilio Verify (SMS).
   POST /.netlify/functions/request-phone-code  { businessId }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it.
   Twilio Verify holds the code state; we store nothing locally. */
const { createClient } = require('@supabase/supabase-js');

function json(statusCode, body) {
  return { statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
}

async function authedUser(event) {
  const h = event.headers.authorization || event.headers.Authorization || '';
  const m = h.match(/^Bearer (.+)$/);
  if (!m) return null;
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
  const { data } = await sb.auth.getUser(m[1]);
  return (data && data.user) || null;
}

// US numbers only for now: 10 digits -> +1, 11 starting with 1 -> +.
function toE164(phone) {
  const d = String(phone || '').replace(/\D/g, '');
  if (d.length === 10) return '+1' + d;
  if (d.length === 11 && d[0] === '1') return '+' + d;
  return null;
}

async function twilioVerify(path, params) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const tok = process.env.TWILIO_AUTH_TOKEN;
  const svc = process.env.TWILIO_VERIFY_SID;
  if (!sid || !tok || !svc) {
    const e = new Error('twilio-not-configured');
    e.httpStatus = 500;
    throw e;
  }
  const creds = Buffer.from(sid + ':' + tok).toString('base64');
  const res = await fetch('https://verify.twilio.com/v2/Services/' + svc + path, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + creds,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(params).toString()
  });
  let j = null;
  try { j = await res.json(); } catch (e) { /* ignore */ }
  if (!res.ok) {
    const err = new Error('twilio-error');
    err.httpStatus = res.status;
    err.detail = j;
    throw err;
  }
  return j;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'method-not-allowed' });
  try {
    const user = await authedUser(event);
    if (!user) return json(401, { error: 'unauthorized' });

    let body = {};
    try { body = JSON.parse(event.body || '{}'); } catch (e) { return json(400, { error: 'bad-json' }); }
    if (!body.businessId) return json(400, { error: 'missing-business' });

    const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { data: biz, error: bizErr } = await admin.from('businesses')
      .select('id, owner_id, name, phone, phone_verified').eq('id', body.businessId).single();
    if (bizErr || !biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.phone_verified) return json(200, { alreadyVerified: true });

    const e164 = toE164(biz.phone);
    if (!e164) return json(400, { error: 'invalid-phone' });

    let j;
    try {
      j = await twilioVerify('/Verifications', { To: e164, Channel: 'sms' });
    } catch (e) {
      console.error('twilio verify create failed', e.detail || e.message);
      return json(502, { error: 'send-failed' });
    }
    if (!j || j.status !== 'pending') {
      console.error('twilio verify unexpected status', j);
      return json(502, { error: 'send-failed' });
    }
    return json(200, { sent: true });
  } catch (e) {
    console.error(e);
    return json(500, { error: 'server-error' });
  }
};
