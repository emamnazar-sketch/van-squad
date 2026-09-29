# Van Squad — GO-LIVE plan (mirrors thefamilyground.com)

**Status:** Design approved by Amam 2026-09-29. Repo staged at `~/workspace/van-squad/`
(commit on local `main`). NOTHING live yet — wiring waits on the owner steps below.

## 1. How thefamilyground.com went live (the pattern)

| Piece | thefamilyground.com |
|---|---|
| Supabase | Project created by **Amam himself** in his dashboard — ref `ppukwdvmwrdhnlogfvax`, URL `https://ppukwdvmwrdhnlogfvax.supabase.co`. Anon key pasted into `js/config.js` (plain text in repo — standard client-side pattern). Auth health verified 200. |
| Schema | `schema.sql` run in the Supabase SQL Editor via a browser session (device-verification approval on his phone). His GitHub account has **no password sign-in — never retry passwords**. |
| Google OAuth | Google Cloud project "The Family Ground" + External OAuth consent screen + web OAuth client pointed at the Supabase callback `https://<ref>.supabase.co/auth/v1/callback`. Google provider enabled in Supabase Auth. Click-tested to Google's account chooser (full round-trip never completed). Redirect handling in Family Ground is **dynamic**: `window.location.origin + "/dashboard.html"`. |
| GitHub | Repo `emamnazar-sketch/the-family-ground` (public), created after GitHub **device-code approval** (one-time; `gh` CLI is still authenticated on this VM as `emamnazar-sketch`). `git push` to `main` = deploy trigger. |
| Netlify | Dashboard → Add new site → **Import an existing project** → pick the GitHub repo (GitHub integration, not manual deploys). No build command, publish = repo root. Auto-deploys every `main` push. Netlify login for Amam was messy (GitHub login rejected, Google stalled on iPhone verification) — expect friction; keep him on the phone. |
| DNS | GoDaddy: apex A → `75.2.60.5`, www CNAME → `gorgeous-queijadas-c91823.netlify.app`. Primary domain `thefamilyground.com` in Netlify, www redirects. Let's Encrypt cert auto-provisions. |
| Open gap (never documented) | **Supabase Auth → URL Configuration (Site URL / Redirect URLs allowlist).** Family Ground used a dynamic `redirectTo`, so both the netlify.app URL and the custom domain had to be allowlisted for Google OAuth to work. **Set this explicitly for van-squad — do not skip.** |

## 2. Van Squad specifics (differs from Family Ground)

- Single-file app: `index.html` + `css/` + `js/` + **hash routing** (`#/browse`, `#/business/shine`, `#/join`, `#/how-it-works`, `#/services/...`, `#/book/<id>`, `#/customer`, `#/dashboard`, `#/workspace`, `#/login`). No rewrites needed on Netlify.
- `js/config.js` ships with **empty** `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SITE_URL`. The app auto-switches from localStorage demo mode to Supabase the moment keys are present — no code changes.
- OAuth redirect in `js/store.js:337-338`: `redirectTo = cfg.SITE_URL || window.location.origin + window.location.pathname`. **Fill `SITE_URL` with the final Netlify URL** (or the custom domain later) so Google sign-in always returns to the live site.
- `netlify.toml` in repo root: publish `.`, no build command, security headers (X-Frame-Options DENY, nosniff, strict-origin-when-cross-origin), no-cache on index.html.
- `robots.txt`: blocks `#/customer`, `#/dashboard`, `#/workspace`, `#/book/` (private pages). `sitemap.xml` + `robots.txt` use `vansquad.example` — **replace with the real domain** before launch.
- No payments anywhere: service and payment terms are arranged directly with each business (by design).
- SEO: meta/OG tags, JSON-LD, sitemap, robots included.

## 3. Repo staged and ready (done by Atlas, no owner action)

- [x] `~/workspace/van-squad/` — git init, committed on `main` (commit "Van Squad directory site — design approved, ready to wire live")
- [x] `.gitignore`, `netlify.toml`, README deploy notes
- [x] `schema.sql` — businesses, listings, requests, reviews, profiles, RLS, `request-photos` storage bucket, 6 idempotent SAMPLE businesses + 1 sample review
- [x] App verified in local demo mode (localStorage) — signup flow, request flow, dashboards tested
- [ ] 13 page screenshots (QA pass — see §6)

## 4. Steps Atlas can do WITHOUT Amam (next, once he approves the taps)

1. Fill `SUPABASE_URL` / `SUPABASE_ANON_KEY` / `SITE_URL` in `js/config.js` from the values he supplies.
2. `gh repo create emamnazar-sketch/van-squad --public --source=. --push` (gh CLI already authenticated; no owner action expected).
3. Commit + push `main`.

## 5. Steps ONLY Amam can do (his phone, exact taps)

See §7 "Owner tap list" — Supabase project creation, SQL Editor run, Google OAuth enablement, Netlify import (his login), DNS (his registrar), final Google sign-in test.

## 6. QA pass (2026-09-29, 47/47 checks PASS, zero console errors)

- Headless Chromium harness tested all 13 routes: home, browse, business detail,
  how-it-works, service guide, join, login, book, customer dashboard, business
  dashboard, workspace, mobile home, mobile browse. Unknown slugs 404; login gates
  hold on all 4 protected routes.
- End-to-end flow verified in local demo mode: demo login → business signup →
  listing appears in search → request sent → inbox actions (ask/quote/time/agree/
  complete) → review posted (4.0 ★ renders).
- Fixes applied and verified: hash-fragment review links (`#/business/<slug>#reviews`),
  Supabase reviews retrieval, idempotent SQL policies (safe to re-run), customer
  update policy hardened, request-photos bucket policies tightened to
  owner-only writes under `<uid>/` paths.
- Schema parses clean (65 statements); seed data referentially sound
  (6 businesses, 6 listings, 1 review, 1 sample profile).
- Fresh screenshots in `screenshots/` (01–13). One non-blocker noted: browse
  filters are sticky when returning via `#/browse` without params (defensible UX).

## 7. Owner tap list (his iPhone — exact taps, in order)

Do these and nothing else is needed from you. Tell Atlas when each one is done.

**Step 1 — Create the Supabase project**
1. Open Safari → supabase.com → sign in (Google sign-in if asked).
2. Tap **New project** → name it exactly `van-squad` → create it (wait ~1 min).
3. In the new project, tap **⚙ Settings → API** → copy **Project URL** and
   **anon public** key → send both to Atlas.

**Step 2 — Run the database setup**
1. In the same project, tap **SQL Editor → New query**.
2. Paste the entire `schema.sql` file (Atlas will send you the text) → tap **Run**.
   If your phone asks to verify it's you, approve it.
3. Tell Atlas "schema done".

**Step 3 — Turn on Google login**
1. Supabase dashboard → **Authentication → Sign In → Google** → Enable.
2. It needs a Google Client ID + Secret from Google Cloud:
   - console.cloud.google.com → new project named **Van Squad** → **OAuth consent
     screen → External** → fill app name "Van Squad" → save.
   - **Credentials → Create Credentials → OAuth client ID → Web application** →
     add Authorized redirect URI: `https://<your-new-ref>.supabase.co/auth/v1/callback`
     (use the ref from Step 1) → Create → copy the Client ID and Client Secret.
3. Paste them into the Supabase Google provider screen → Save.
4. Same project → **Authentication → URL Configuration** → add the Netlify URL
   (Atlas gives it to you in Step 5) to **Site URL** and **Redirect URLs** → Save.
   *Why: without this, Google sign-in fails after the redirect.*

**Step 4 — Approve the repo (only if asked)**
- Atlas creates the GitHub repo himself. If your phone shows a **GitHub device
  approval**, tap Approve. Otherwise no action needed.

**Step 5 — Connect Netlify**
1. Safari → app.netlify.com → sign in (use Google login; approve the "Verify
   it's you" prompt on your phone if it appears).
2. **Add new site → Import an existing project** → choose
   **emamnazar-sketch/van-squad** → Deploy (leave build settings as-is).
3. Copy the site's `*.netlify.app` URL → send to Atlas (needed for Step 3.4).

**Step 6 — Final check (2 minutes)**
- Open the live `*.netlify.app` URL on your phone → tap **Log in → Continue
  with Google** → sign in. Tell Atlas if you land back on the site logged in.
  (Last time this final click was never tested — this time we do it.)

**Launch URL for now:** the `*.netlify.app` URL from Step 5. A custom domain
(like vansquad.com) is a separate later decision — nothing is bought here.
