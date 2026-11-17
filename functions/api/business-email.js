/* Van Squads — reveal a business's email to signed-in customers only.
   GET /api/business-email?id=<business uuid>   (or ?slug=<profile slug>)
   Auth: Bearer <supabase user JWT> (the site's Google sign-in session).
   The JWT is verified server-side against the project's GoTrue user
   endpoint — the same check functions/api/notify-request.js uses.
   Business emails live ONLY in the private business_leads table and are
   read here with the service-role key; they are never written into the
   businesses table, a static file, or any page source. Unauthenticated
   callers get 401 and no email anywhere in the response body.
   Added 2026-11-17 on Amam's order: signed-in customers may see the
   email and use the "Email for a quote" button; the login wall is the
   scraper protection. */

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
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

function slugify(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Resolve a profile slug to a business row (id + name). Mirrors the
   slug map in functions/business/[slug].js, including the -<id6>
   suffix used when two businesses slugify to the same string. */
async function businessBySlug(env, slug) {
  const H = sbHeaders(env, env.SUPABASE_SERVICE_ROLE_KEY);
  const base = env.SUPABASE_URL + '/rest/v1';
  let all = [], offset = 0;
  while (offset < 10000) {
    const r = await fetch(base + '/businesses?select=id,name&status=eq.active&order=created_at.asc&limit=1000&offset=' + offset, { headers: H });
    if (!r.ok) return null;
    const page = await r.json();
    all = all.concat(page);
    if (page.length < 1000) break;
    offset += 1000;
  }
  const seen = {};
  for (const b of all) {
    let s = slugify(b.name) || b.id;
    if (seen[s]) s = s + '-' + String(b.id).slice(0, 6);
    seen[s] = 1;
    if (s === slug) return b;
  }
  return null;
}

export async function onRequest({ request, env }) {
  if (request.method !== 'GET') return json(405, { error: 'method-not-allowed' });

  /* Auth first — nothing about the business or its email is looked up
     or returned for a caller without a valid session. */
  const user = await authedUser(request, env);
  if (!user) return json(401, { error: 'unauthorized' });

  const url = new URL(request.url);
  let id = String(url.searchParams.get('id') || '');
  const slug = String(url.searchParams.get('slug') || '');
  let bizName = '';

  const H = sbHeaders(env, env.SUPABASE_SERVICE_ROLE_KEY);
  const base = env.SUPABASE_URL + '/rest/v1';
  const obj = { ...H, Accept: 'application/vnd.pgrst.object+json' };

  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    if (!slug) return json(400, { error: 'missing-business' });
    const b = await businessBySlug(env, slug);
    if (!b) return json(404, { email: null, reason: 'business-not-found' });
    id = b.id;
    bizName = b.name || '';
  } else {
    try {
      const r = await fetch(base + '/businesses?select=id,name&id=eq.' + encodeURIComponent(id), { headers: obj });
      if (r.ok) { const b = await r.json(); if (b && b.name) bizName = b.name; }
    } catch (e) { /* name is only a fallback key for the lead lookup */ }
  }

  /* Lead lookup: by business_id first (the rotation stores it), then by
     exact business name for older lead rows collected before ids were
     recorded. */
  let email = null;
  try {
    const r = await fetch(base + '/business_leads?select=email&business_id=eq.' + encodeURIComponent(id) + '&limit=1', { headers: H });
    if (r.ok) {
      const rows = await r.json();
      if (Array.isArray(rows) && rows.length && rows[0].email) email = String(rows[0].email).trim();
    }
  } catch (e) { console.error('business-email: lead lookup by id failed', e.message); }
  if (!email && bizName) {
    try {
      const r = await fetch(base + '/business_leads?select=email&business_name=eq.' + encodeURIComponent(bizName) + '&limit=1', { headers: H });
      if (r.ok) {
        const rows = await r.json();
        if (Array.isArray(rows) && rows.length && rows[0].email) email = String(rows[0].email).trim();
      }
    } catch (e) { console.error('business-email: lead lookup by name failed', e.message); }
  }

  if (!email) return json(200, { email: null });
  return json(200, { email: email });
}
