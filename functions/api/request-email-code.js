/* Van Squads — send a 6-digit verification code to a business's contact email.
   Cloudflare Pages Function. POST /api/request-email-code  { businessId }
   Auth: Bearer <supabase user JWT>. Only the business owner may call it.
   Pure Web APIs only (fetch, WebCrypto) — no Node deps, edge-safe. */

const CODE_TTL_MS = 15 * 60 * 1000;
const RESEND_COOLDOWN_MS = 60 * 1000;

function json(status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function sha256hex(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
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

function validEmail(e) { return typeof e === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.trim()); }

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

    const bizRes = await fetch(base + '/businesses?select=id,owner_id,name,email,email_verified&id=eq.' + encodeURIComponent(body.businessId), {
      headers: { ...H, Accept: 'application/vnd.pgrst.object+json' }
    });
    const biz = bizRes.ok ? await bizRes.json() : null;
    if (!biz || biz.owner_id !== user.id) return json(403, { error: 'forbidden' });
    if (biz.email_verified) return json(200, { alreadyVerified: true });
    if (!validEmail(biz.email)) return json(400, { error: 'missing-email' });

    const exRes = await fetch(base + '/email_verification_codes?select=created_at&business_id=eq.' + encodeURIComponent(biz.id), { headers: H });
    const exRows = exRes.ok ? await exRes.json() : [];
    const existing = exRows[0];
    if (existing && Date.now() - new Date(existing.created_at).getTime() < RESEND_COOLDOWN_MS) {
      return json(429, { error: 'cooldown' });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    const codeHash = await sha256hex(code);
    const upRes = await fetch(base + '/email_verification_codes', {
      method: 'POST',
      headers: { ...H, Prefer: 'resolution=merge-duplicates' },
      body: JSON.stringify({
        business_id: biz.id,
        code_hash: codeHash,
        expires_at: new Date(Date.now() + CODE_TTL_MS).toISOString(),
        attempts: 0
      })
    });
    if (!upRes.ok) { console.error('code store failed', await upRes.text()); return json(500, { error: 'server-error' }); }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Van Squads <noreply@vansquads.com>',
        to: [biz.email.trim()],
        subject: 'Your Van Squads verification code',
        text: 'Hi ' + (biz.name || 'there') + ',\n\n' +
          'Your Van Squads verification code is:\n\n' + code + '\n\n' +
          'Enter it on vansquads.com within 15 minutes to verify your business email. ' +
          'Your listing goes public as soon as your email is verified.\n\n' +
          'If you did not request this, you can ignore this email.\n\n- Van Squads'
      })
    });
    if (!res.ok) { console.error('resend failed', await res.text()); return json(502, { error: 'send-failed' }); }
    return json(200, { sent: true });
  } catch (e) { console.error(e); return json(500, { error: 'server-error' }); }
}
