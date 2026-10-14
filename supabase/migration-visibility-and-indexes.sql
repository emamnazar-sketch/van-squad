-- Van Squads: seeded-directory visibility + search indexes.
-- Run in the Supabase SQL editor (project: van-squad). Idempotent —
-- safe to run once; every statement guards itself.
--
-- WHY THIS EXISTS
-- The phone-verification migration gated public visibility behind
-- email_verified AND phone_verified. That fit self-serve signup, but it
-- conflicts with the seeded-directory strategy (approved 2026-10-11):
-- we seed real businesses from public info, they appear publicly as
-- unverified with an "Is this your business? Claim it" link, and
-- verification (Twilio phone OTP) is for CLAIMING ownership + the blue
-- check — not for visibility. This restores the base schema.sql rule:
-- public read = status = 'active'.
--
-- It also adds the indexes the directory search and dashboards need
-- (schema.sql shipped with none beyond primary keys).

-- 1) Public visibility: active rows are public, verified or not.
drop policy if exists "businesses_public_read" on public.businesses;
create policy "businesses_public_read" on public.businesses
  for select to anon, authenticated
  using (status = 'active');

drop policy if exists "listings_public_read" on public.listings;
create policy "listings_public_read" on public.listings
  for select to anon, authenticated
  using (status = 'active');

-- 2) Indexes for the queries the site (and the future app) actually run.
-- ZIP search: service_zips is a text[] filtered with "contains".
create index if not exists businesses_service_zips_gin
  on public.businesses using gin (service_zips);
-- Browse/filter by status and category.
create index if not exists businesses_status_idx
  on public.businesses (status);
create index if not exists businesses_category_idx
  on public.businesses (category);
-- Owner dashboard + the own_business_ids() RLS helper (runs per query).
create index if not exists businesses_owner_id_idx
  on public.businesses (owner_id);
-- Business detail pages join listings by business.
create index if not exists listings_business_id_idx
  on public.listings (business_id);
create index if not exists listings_status_idx
  on public.listings (status);
-- Customer + business dashboards list requests by owner and by business.
create index if not exists requests_customer_id_idx
  on public.requests (customer_id);
create index if not exists requests_business_id_idx
  on public.requests (business_id);
-- Reviews render on business/listing pages.
create index if not exists reviews_business_id_idx
  on public.reviews (business_id);
create index if not exists reviews_listing_id_idx
  on public.reviews (listing_id);
