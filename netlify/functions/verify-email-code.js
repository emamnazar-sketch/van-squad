/* Van Squad — check a verification code and mark the business email verified.
   POST /.netlify/functions/verify-email-code  { businessId, code }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it. */
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const MAX_ATTEMPTS = 5;

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

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'method-not-allowed' });
  try {
    const user = await authedUser(event);
    if (!user) return json(401, { error: 'unauthorized' });

    let body = {};
    try { body = JSON.parse(event.body || '{}'); } catch (e) { return json(400, { error: 'bad-json' }); }
    const code = String(body.code || '').trim();
    if (!body.businessId || !/^\d{6}$/.test(code)) return json(400, { error: 'bad-request' });

    const svc = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

    const { data: biz } = await svc.from('businesses')
      .select('id, owner_id, email_verified').eq('id', body.businessId).single();
    if (!biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.email_verified) return json(200, { verified: true });

    const { data: row } = await svc.from('email_verification_codes')
      .select('*').eq('business_id', biz.id).maybeSingle();
    if (!row) return json(400, { error: 'no-code' });
    if (new Date(row.expires_at).getTime() < Date.now()) {
      await svc.from('email_verification_codes').delete().eq('business_id', biz.id);
      return json(410, { error: 'expired' });
    }
    if (row.attempts >= MAX_ATTEMPTS) {
      await svc.from('email_verification_codes').delete().eq('business_id', biz.id);
      return json(429, { error: 'too-many-attempts' });
    }

    const hash = crypto.createHash('sha256').update(code).digest('hex');
    // constant-time comparison
    const ok = hash.length === row.code_hash.length &&
      crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(row.code_hash));
    if (!ok) {
      await svc.from('email_verification_codes').update({ attempts: row.attempts + 1 }).eq('business_id', biz.id);
      return json(400, { error: 'invalid-code', attemptsLeft: MAX_ATTEMPTS - row.attempts - 1 });
    }

    await svc.from('businesses').update({ email_verified: true }).eq('id', biz.id);
    await svc.from('email_verification_codes').delete().eq('business_id', biz.id);
    return json(200, { verified: true });
  } catch (e) { console.error(e); return json(500, { error: 'server-error' }); }
};
