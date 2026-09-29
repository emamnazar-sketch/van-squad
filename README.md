# Van Squad — Local services. At your door.

A real, working directory of mobile service businesses (car care, pet care, home
cleaning) that travel to customers. Built as a preview of the ChatGPT design,
upgraded so real businesses can sign up, receive requests, and manage everything.

## What works right now (local demo mode)

Open the site with no backend configured and everything runs on your own
browser's localStorage:

- **Home** (`#/`) — hero search, categories, featured businesses, how-it-works
  strip, business CTA band, service guides, FAQ
- **Explore** (`#/browse`) — search by keyword, ZIP, category, date, time,
  budget; sort; business comparison (up to 3 side-by-side)
- **Business pages** (`#/business/<id>`) — service package card, coverage ZIPs,
  what's included, before-your-visit, cancellation policy, reviews
- **How it works** (`#/how-it-works`) and 3 **service guides**
  (`#/services/mobile-car-detailing`, `#/services/mobile-pet-grooming`,
  `#/services/home-cleaning`)
- **List your business** (`#/join`) — real multi-section signup form; the new
  listing goes live in search immediately
- **Login gate** (`#/login`) — local preview login for now; Google OAuth when
  Supabase is wired
- **Send a request** (`#/book/<business>`) — request form with ZIP validation,
  preferred time, optional photo uploads (up to 5)
- **Customer dashboard** (`#/customer`) — my requests with statuses, follow-up
  messages, profile editing, review flow after completion
- **Business dashboard** (`#/dashboard`) — request inbox with ask-a-question,
  send-a-quote, suggest-a-time, mark-agreed, mark-completed; full business and
  listing editor
- **Provider workspace** (`#/workspace`) — service-area ZIPs, pricing, travel
  buffer, arrival windows; one-click removal of the 6 sample listings

No online payments anywhere — service and payment terms are arranged directly
between customer and business, by design.

## Run it locally

Any static server works. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Or just double-click `index.html` (the app works from `file://` too).

## Go live (after the design is approved)

1. **Supabase** — create a NEW project (do not reuse other projects), open its
   SQL editor, and run `schema.sql` end to end. It is idempotent: tables
   (`profiles`, `businesses`, `listings`, `requests`, `reviews`), RLS policies,
   the `request-photos` storage bucket, and the 6 idempotent sample businesses
   plus one sample review.
2. **Auth** — enable Google OAuth in the Supabase project (the login page calls
   "Continue with Google" once Supabase is configured).
3. **Config** — fill in the three placeholders in `js/config.js`:
   `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SITE_URL`. The app auto-switches from
   localStorage demo mode to Supabase the moment the keys are present — no code
   changes needed.
4. **Deploy** — push this folder to GitHub and deploy on Netlify. Hash routing
   (`#/…`) means no server rewrites are required for navigation; `robots.txt`
   and `sitemap.xml` are included (replace `vansquad.example` with the real
   domain in both).

## Notes for the owner

- The 6 sample listings are clearly badged SAMPLE. Remove them any time from
  the provider workspace ("Remove sample listings") once real businesses join.
- Local demo data lives in your browser only (localStorage key `vansquad_v1`);
  clearing site data resets the demo.
- Screenshots of every major page are in `screenshots/` for design review.
