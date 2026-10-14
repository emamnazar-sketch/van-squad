# Van Squads — Lead Notification Rules & Automation Plan

Set by Amam, 2026-10-14. Status: awaiting his final go to build.

## Hard rules (directory quality — no exceptions)

1. **No public phone number = never added.** Every business in the
   directory must have a publicly verifiable phone number. Applies to
   seeded adds, the nightly rotation, and manual adds.
2. **Not truly mobile = never added.** The business must come to the
   customer (mobile / on-site). Storefront-only businesses are excluded,
   even with a phone number.

(Both rules already govern batch 1, Day 1, and the nightly rotation's
quality gates; as of today they are permanent platform law.)

## What happens when a customer sends a quote request

### Flow A — business is seeded, NOT yet claimed
1. The request lands in the database (status: pending), as today.
2. **Automated Twilio SMS** to the business's public phone number:
   - Says a customer requested a quote for their service + the
     customer's ZIP (e.g. "a customer in 95814 requested mobile bike
     repair").
   - Includes the link to their profile's claim page.
   - **Never includes the customer's name, phone, or address** — those
     are revealed only after the business claims and verifies.
3. If still unclaimed after 48 hours: **one** reminder SMS. Then stop.
   Each new request earns one fresh notification.
4. The business taps the link → claims the profile → Twilio phone-code
   verification (already built) → the request appears in their Provider
   workspace → they contact the customer directly from there.

### Flow B — business is claimed and verified
1. The request lands in their Provider workspace (as today).
2. **Automated email alert** to the business: "New quote request on
   Van Squads" — service, ZIP, preferred date, and a button straight to
   the request in their workspace.
3. Email sending needs a sender wired for Van Squads (Resend, domain
   vansquads.com verified) — part of this build.

### Customer side
- Status lives under **My account** (already built): waiting →
  confirmed → messaging with the business.
- Optional add-on (not in v1 unless approved): email the customer when
  the business responds.

## Guardrails (trust + anti-spam)
- Max 1 SMS per request + 1 reminder (48h), capped per business per
  week. "Reply STOP to opt out" on every text; STOP is honored
  automatically by Twilio.
- SMS wording is factual and useful — a real lead, never marketing
  pressure. This protects the Van Squads name with local businesses.
- Customer contact details are the reward for claiming: hidden before,
  visible after. That is what makes the claim worth doing.

## Build shape
- Supabase database webhook on `requests` INSERT → Cloudflare Pages
  Function `/api/notify-request`.
- The function loads the business (service key): if `verified=false`
  and a public phone exists → Twilio SMS (Flow A). If `verified=true`
  → Resend email (Flow B).
- Log every notification (business, request, channel, time) so caps and
  reminders can be enforced and audited.

## Known blocker before live texting
- The Twilio account is on a **trial** ($15 credit). Trial accounts can
  only text verified numbers, so Flow A cannot text arbitrary
  businesses until the account is upgraded (paid; needs Amam's explicit
  approval, plus carrier A2P registration). The build can be completed
  and tested against our own numbers first; go-live waits on that
  decision.
- Email (Flow B) has no such blocker once the Resend domain is verified.
