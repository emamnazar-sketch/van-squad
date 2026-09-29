/* Van Squad — send a 6-digit verification code to a business's contact email.
   POST /.netlify/functions/request-email-code  { businessId }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it. */
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const CODE_TTL_MS = 15 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;

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

function validEmail(e) { return typeof e === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.trim()); }

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
      .select('id, owner_id, name, email, email_verified').eq('id', body.businessId).single();
    if (bizErr || !biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.email_verified) return json(200, { alreadyVerified: true });
    if (!validEmail(biz.email)) return json(400, { error: 'missing-email' });

    const { data: existing } = await admin.from('email_verification_codes')
      .select('created_at').eq('business_id', biz.id).maybeSingle();
    if (existing && Date.now() - new Date(existing.created_at).getTime() < RESEND_COOLDOWN_MS) {
      return json(429, { error: 'cooldown' });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const codeHash = crypto.createHash('sha256').update(code).digest('hex');
    const { error: upErr } = await admin.from('email_verification_codes').upsert({
      business_id: biz.id,
      code_hash: codeHash,
      expires_at: new Date(Date.now() + CODE_TTL_MS).toISOString(),
      attempts: 0
    }, { onConflict: 'business_id' });
    if (upErr) { console.error('code store failed', upErr); return json(500, { error: 'server-error' }); }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Van Squad <noreply@vansquads.com>',
        to: [biz.email.trim()],
        subject: 'Your Van Squad verification code',
        text: 'Hi ' + (biz.name || 'there') + ',\n\n' +
          'Your Van Squad verification code is:\n\n' + code + '\n\n' +
          'Enter it on vansquads.com within 15 minutes to verify your business email. ' +
          'Your listing goes public as soon as your email is verified.\n\n' +
          'If you did not request this, you can ignore this email.\n\n- Van Squad'
      })
    });
    if (!res.ok) { console.error('resend failed', await res.text()); return json(502, { error: 'send-failed' }); }
    return json(200, { sent: true });
  } catch (e) { console.error(e); return json(500, { error: 'server-error' }); }
};
