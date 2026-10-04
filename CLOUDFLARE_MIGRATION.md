# Cloudflare Migration Runbook — Van Squads (vansquads.com)

Planned execution date: **Oct 3, 2026** (after token reset). Do not start earlier.

## Why wait
Migration = port 4 functions + full retest + DNS cutover. Starting at 90% weekly
token usage risks stalling mid-cutover. Netlify credit burn is frozen until then
(no pushes; ZIP registry work on hold).

## Pre-flight (Amam)
- [ ] Cloudflare account created (free plan, no card) — Amam or Atlas via browser
- [x] Netlify billing confirmed: **$9/mo for 1,000 credits**, cycle resets **Oct 16**
  (cycle = 17th→16th). No pushes until migration = credit burn frozen at 75%.

## Step 1 — Cloudflare project
- New Pages project → connect GitHub repo `emamnazar-sketch/van-squad`, branch `master`
- Build: none needed (plain static). Output dir: repo root
- Do NOT add custom domain yet

## Step 2 — Port the 4 functions (Netlify → Pages Functions)
Source: `netlify/functions/`. Target: `functions/api/` in repo.
- `request-email-code.js` → `functions/api/request-email-code.js`
- `verify-email-code.js` → `functions/api/verify-email-code.js`
- `request-phone-code.js` → `functions/api/request-phone-code.js`
- `verify-phone-code.js` → `functions/api/verify-phone-code.js`

Porting notes:
- Netlify handler signature `(event, context)` → Workers `export async function onRequest(context)`
- `event.body` → `await request.json()` / `await request.text()`
- `process.env.X` → `context.env.X` (Pages Functions) — update all 7 vars
- Add `nodejs_compat` compatibility flag (Resend/Supabase fetch-based SDKs need it)
- **Twilio helper library: smoke-test before cutover** (known Workers edge-runtime risk)
- Stripe webhook signature verification via WebCrypto (no Node crypto)

## Step 3 — Environment variables (Cloudflare dashboard → Pages → Settings → Environment variables)
Transfer from Netlify (values never go in chat/files):
- `RESEND_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_VERIFY_SID`

## Step 4 — Test on temp URL (before touching DNS)
- [ ] Homepage loads on `*.pages.dev` URL
- [ ] Email code request → code arrives via Resend
- [ ] Email code verify → `email_verified=true` in Supabase
- [ ] Phone code request → SMS arrives via Twilio
- [ ] Phone code verify → `phone_verified=true`, warning clears
- [ ] Public browse shows verified listings only
- [ ] Banner wording: "Service and payment terms are arranged directly between customer and business owner."

## Step 5 — Supabase
- Auth → URL Configuration: add `https://vansquads.com` and `https://www.vansquads.com`
  (keep old Netlify URL until cutover confirmed, then remove)

## Step 6 — DNS cutover (GoDaddy) — only after Step 4 passes
- Add custom domain `vansquads.com` + `www.vansquads.com` in Cloudflare Pages
- GoDaddy: replace A `@ → 75.2.60.5` with Cloudflare's records (A @ → Cloudflare IPs
  shown in dashboard, or CNAME flattening), CNAME `www` → Cloudflare target
- Wait for SSL to provision, verify `https://vansquads.com` + `https://www.vansquads.com`

## Step 7 — Post-cutover verification (live domain)
- [ ] Full email verification E2E on live domain
- [ ] Full phone verification E2E on live domain (real SMS)
- [ ] Public listing visibility rules hold
- [ ] Banner wording correct on live domain

## Step 8 — Cleanup (APPROVED by Amam 2026-10-04; scheduled job `van-squad-netlify-rollback-reminder` fires Sat 2026-10-10 ~09:45 PDT)
- Keep Netlify site `gentle-daifuku-63c8ed` live for 7 days as rollback (until Oct 10)
- On Oct 10: disconnect Netlify ↔ GitHub auto-publishes (stop the credit burn for real), then cancel the $9/mo plan before the Oct 16 cycle reset

## Rollback
If anything fails at Step 6/7: revert GoDaddy DNS to Netlify values
(A `@ → 75.2.60.5`, CNAME `www` → Netlify site). Site is back in minutes.
