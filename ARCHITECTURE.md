# Van Squads — Architecture

One directory, one database, many front doors. The website today and the
Flutter app tomorrow read and write the **same** Supabase project, the
**same** Postgres database, the **same** login system, and the **same**
security rules. Nothing needs rebuilding when the app arrives.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Database | Postgres inside Supabase (project `van-squad`) | Relational data (businesses → listings → requests → reviews) is what Postgres is best at; hosted, backed up |
| API | Supabase REST (PostgREST), generated from the schema | No custom server to maintain; the same API serves web and app |
| Auth | Supabase Auth (email + Google) | Official SDKs for web (`supabase-js`) and Flutter (`supabase_flutter`) |
| Security | Postgres Row Level Security (RLS) | Rules live in the database, so every client — web, app, anything — is forced to obey them |
| Website | Static HTML/CSS/JS on Cloudflare Pages | Fast, cheap, no framework lock-in |
| Server logic | Cloudflare Pages Functions (plain JavaScript) in `functions/api/` | Only for secrets that must never reach the browser (Twilio keys) |
| Storage | Supabase Storage bucket `request-photos` | Customer photos on service requests |
| SMS codes | Twilio Verify | Claim + request verification codes |

## How the website connects to the database

There is **no server of ours in between** and the website never logs
into Postgres directly. `js/config.js` ships two public values:

- the project URL (`https://unsfsuzaybatkclfbnep.supabase.co`)
- the **anon key** — a public key, safe to be visible in the page

Every visitor's browser talks straight to Supabase's API with that key,
and RLS decides what the key is allowed to see and change. Think of the
anon key as a library card, not a master key.

Three access levels exist, and only three:

1. **Public (anon key)** — read active businesses/listings/reviews;
   nothing else. Enforced by RLS, not by hiding buttons.
2. **Signed-in users (Supabase Auth)** — login returns a personal
   token; RLS then lets a user edit only their own profile, business,
   listings, and requests (`owner_id = auth.uid()`).
3. **Admin (dashboard / service key)** — full access, used only by the
   owner for seeding and support. The service key is never stored in
   code or in this repo.

Direct Postgres access (database password, Supabase SQL editor) exists
for admin work and migrations only. The website and the app never use it.

## Data model

Five tables in `public` (see `schema.sql`): `profiles`, `businesses`,
`listings`, `requests`, `reviews`. Changes to the live database are
made **only** through migration files in `supabase/` (run in order);
`schema.sql` is the full from-scratch build and must stay in sync.

Key conventions:

- `businesses.service_zips` is a `text[]` of ZIP codes the business
  serves; search filters with array-contains (GIN-indexed).
- Seeded businesses are real businesses added from public info:
  `verified = false`, owned by the directory-owner profile until
  claimed. `verified = true` + the blue check are earned only through
  the claim flow.
- Verification = ownership proof, never a visibility gate. Public read
  is `status = 'active'` (see
  `supabase/migration-visibility-and-indexes.sql` for why).

## Server functions

`functions/api/` (Cloudflare Pages Functions, JavaScript):

- `claim-request-code` / `claim-verify-code` — a business owner proves
  they own the public phone number via a Twilio Verify SMS code; on
  success the business becomes theirs and `verified` flips on.
- `request-phone-code` / `verify-phone-code`,
  `request-email-code` / `verify-email-code` — customer contact
  verification for service requests.

These are deliberately thin: validate input, call Twilio or Supabase,
return JSON. If the app needs them, it calls the same URLs. If we ever
want all backend logic in one place, they port 1:1 to Supabase Edge
Functions (TypeScript/Deno) — same language family, no redesign.

## The future Flutter app (when we build it)

1. Add the `supabase_flutter` package.
2. Point it at the same project URL + anon key.
3. Reuse Supabase Auth — the same accounts work on web and app.
4. Query the same tables; RLS already enforces every rule.
5. Call the same `functions/api/` endpoints for claim/verification.

That is the whole integration. No API rewrite, no data migration,
no second login system.

## Rules for future changes

1. **Data rules live in the database** (RLS, constraints, indexes) —
   never only in page JavaScript. A rule that exists only in the
   website does not exist for the app.
2. **No business logic trapped in a single client.** If both web and
   app need it, it belongs in Postgres or in a shared API function.
3. **Every live-DB change is a migration file** in `supabase/`, and
   `schema.sql` is updated to match.
4. **Presentation data can stay in the client** (ZIP display names,
   category labels in `js/data.js`) — it is cosmetics, not truth.
   If the app needs categories as data, promote them to a table then.
5. **TypeScript/JavaScript is the server language** everywhere
   (Pages Functions today, Edge Functions if we consolidate). No
   second backend language without a written reason in this file.
