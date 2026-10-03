/* Van Squads — check a verification code and mark the business email verified.
   Cloudflare Pages Function. POST /api/verify-email-code  { businessId, code }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it.
   Pure Web APIs only (fetch, WebCrypto) — no Node deps, edge-safe. */

const MAX_ATTEMPTS = 5;

function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function sha256hex(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
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

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json(405, { error: 'method-not-allowed' });
  try {
    const user = await authedUser(request, env);
    if (!user) return json(401, { error: 'unauthorized' });

    let body = {};
    try { body = await request.json(); } catch (e) { return json(400, { error: 'bad-json' }); }
    const code = String(body.code || '').trim();
    if (!body.businessId || !/^\d{6}$/.test(code)) return json(400, { error: 'bad-request' });

    const H = sbHeaders(env, env.SUPABASE_SERVICE_ROLE_KEY);
    const base = env.SUPABASE_URL + '/rest/v1';
    const idEq = 'business_id=eq.' + encodeURIComponent(body.businessId);

    const bizRes = await fetch(base + '/businesses?select=id,owner_id,email_verified&id=eq.' + encodeURIComponent(body.businessId), {
      headers: { ...H, Accept: 'application/vnd.pgrst.object+json' }
    });
    const biz = bizRes.ok ? await bizRes.json() : null;
    if (!biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.email_verified) return json(200, { verified: true });

    const rowRes = await fetch(base + '/email_verification_codes?select=*' + '&' + idEq, { headers: H });
    const rows = rowRes.ok ? await rowRes.json() : [];
    const row = rows[0];
    if (!row) return json(400, { error: 'no-code' });
    if (new Date(row.expires_at).getTime() < Date.now()) {
      await fetch(base + '/email_verification_codes?' + idEq, { method: 'DELETE', headers: H });
      return json(410, { error: 'expired' });
    }
    if (row.attempts >= MAX_ATTEMPTS) {
      await fetch(base + '/email_verification_codes?' + idEq, { method: 'DELETE', headers: H });
      return json(429, { error: 'too-many-attempts' });
    }

    const hash = await sha256hex(code);
    if (!timingSafeEqual(hash, row.code_hash)) {
      await fetch(base + '/email_verification_codes?' + idEq, {
        method: 'PATCH', headers: H, body: JSON.stringify({ attempts: row.attempts + 1 })
      });
      return json(400, { error: 'invalid-code', attemptsLeft: MAX_ATTEMPTS - row.attempts - 1 });
    }

    await fetch(base + '/businesses?id=eq.' + encodeURIComponent(biz.id), {
      method: 'PATCH', headers: H, body: JSON.stringify({ email_verified: true })
    });
    await fetch(base + '/email_verification_codes?' + idEq, { method: 'DELETE', headers: H });
    return json(200, { verified: true });
  } catch (e) { console.error(e); return json(500, { error: 'server-error' }); }
}
