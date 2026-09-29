-- ============================================================
-- Van Squad — Supabase / Postgres schema
-- Mobile service businesses that travel to customers
-- (car detailing, pet grooming, home cleaning)
--
-- Run this in the Supabase SQL editor. It is idempotent:
-- seed inserts use ON CONFLICT DO NOTHING.
-- ============================================================

-- 1. Extensions ------------------------------------------------
create extension if not exists "pgcrypto";

-- ============================================================
-- 2. Tables
-- ============================================================

-- One profile row per auth user.
-- profiles.id intentionally does NOT reference auth.users: the demo seed
-- below inserts a placeholder "Sample customer" profile row, and no
-- auth.users row can exist for it, so a foreign key would break the seed.
-- Real profile rows are upserted from auth users by the frontend on signup.
create table if not exists public.profiles (
  id           uuid        primary key,
  email        text,
  display_name text,
  role         text        not null default 'customer'
                           check (role in ('customer','business','admin')),
  avatar_url   text,
  home_zip     text,
  created_at   timestamptz not null default now()
);

create table if not exists public.businesses (
  id                 uuid        primary key default gen_random_uuid(),
  owner_id           uuid        not null references public.profiles(id),
  name               text        not null,
  category           text        not null,
  tagline            text,
  description        text,
  phone              text,
  email              text,
  website            text,
  service_zips       text[]      not null default '{}',
  travel_fee         numeric     not null default 0,
  travel_radius_miles int,
  travel_buffer_minutes int      not null default 30,
  earliest_opening   text,
  arrival_windows    text[]      not null default '{}',
  logo_url           text,
  verified           boolean     not null default false,
  is_sample          boolean     not null default false,
  status             text        not null default 'active'
                                check (status in ('active','paused','removed')),
  created_at         timestamptz not null default now()
);

create table if not exists public.listings (
  id                  uuid        primary key default gen_random_uuid(),
  business_id         uuid        not null references public.businesses(id) on delete cascade,
  title               text        not null,
  description         text,
  price               numeric,
  price_type          text        not null default 'fixed'
                                check (price_type in ('fixed','estimate','quote')),
  duration            text,
  includes            text[]      not null default '{}',
  before_visit        text[]      not null default '{}',
  cancellation_policy text,
  is_sample           boolean     not null default false,
  status              text        not null default 'active',
  created_at          timestamptz not null default now()
);

create table if not exists public.requests (
  id             uuid        primary key default gen_random_uuid(),
  customer_id    uuid        not null references public.profiles(id),
  listing_id     uuid        not null references public.listings(id),
  business_id    uuid        not null references public.businesses(id),
  message        text        not null,
  zip            text        not null,
  preferred_time text,
  photo_urls     text[]      not null default '{}',
  status         text        not null default 'pending'
                             check (status in ('pending','question','quoted','agreed','completed','cancelled')),
  business_note  text,
  created_at     timestamptz not null default now()
);

create table if not exists public.reviews (
  id          uuid        primary key default gen_random_uuid(),
  listing_id  uuid        not null references public.listings(id) on delete cascade,
  customer_id uuid        not null references public.profiles(id),
  business_id uuid        not null references public.businesses(id),
  rating      int         not null check (rating between 1 and 5),
  text        text,
  created_at  timestamptz not null default now(),
  unique (listing_id, customer_id)  -- one review per listing per customer
);

-- ============================================================
-- 3. Row Level Security
-- ============================================================

alter table public.profiles   enable row level security;
alter table public.businesses enable row level security;
alter table public.listings   enable row level security;
alter table public.requests   enable row level security;
alter table public.reviews    enable row level security;

-- Helper: ids of businesses owned by the current user
create or replace function public.own_business_ids()
returns setof uuid
language sql
security definer
stable
as $$
  select id from public.businesses where owner_id = auth.uid();
$$;

-- ---- profiles ----
create policy "profiles_public_read" on public.profiles
  for select to anon, authenticated using (true);

create policy "profiles_insert_self" on public.profiles
  for insert to authenticated with check (id = auth.uid());

create policy "profiles_update_self" on public.profiles
  for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- ---- businesses ----
create policy "businesses_public_read" on public.businesses
  for select to anon, authenticated
  using (status = 'active');

create policy "businesses_owner_all" on public.businesses
  for all to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

-- ---- listings ----
create policy "listings_public_read" on public.listings
  for select to anon, authenticated
  using (status = 'active');

create policy "listings_owner_all" on public.listings
  for all to authenticated
  using (business_id in (select public.own_business_ids()))
  with check (business_id in (select public.own_business_ids()));

-- ---- requests ----
create policy "requests_customer_insert" on public.requests
  for insert to authenticated
  with check (customer_id = auth.uid());

create policy "requests_customer_read_own" on public.requests
  for select to authenticated
  using (customer_id = auth.uid()
     or business_id in (select public.own_business_ids()));

create policy "requests_customer_update_own" on public.requests
  for update to authenticated
  using (customer_id = auth.uid());

create policy "requests_owner_update" on public.requests
  for update to authenticated
  using (business_id in (select public.own_business_ids()));

-- ---- reviews ----
create policy "reviews_public_read" on public.reviews
  for select to anon, authenticated using (true);

create policy "reviews_customer_insert" on public.reviews
  for insert to authenticated
  with check (customer_id = auth.uid());

create policy "reviews_customer_update_own" on public.reviews
  for update to authenticated
  using (customer_id = auth.uid())
  with check (customer_id = auth.uid());

create policy "reviews_customer_delete_own" on public.reviews
  for delete to authenticated
  using (customer_id = auth.uid());

-- ============================================================
-- 4. Storage: request photos bucket (public read)
-- ============================================================

insert into storage.buckets (id, name, public)
values ('request-photos', 'request-photos', true)
on conflict (id) do nothing;

-- Public can view uploaded photos
create policy "request_photos_public_read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'request-photos');

-- Signed-in users can upload photos
create policy "request_photos_upload" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'request-photos');

-- Signed-in users can manage (replace/delete) their uploads
create policy "request_photos_update_delete" on storage.objects
  for update to authenticated
  using (bucket_id = 'request-photos');

create policy "request_photos_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'request-photos');

-- ============================================================
-- 5. Seed data (demo businesses, is_sample = true)
-- ============================================================

-- NOTE: the sample reviewer profile below uses a fixed placeholder
-- uuid. Real profile rows are created on signup via auth.users; a
-- placeholder row cannot live in auth.users, so the frontend treats
-- customer id 00000000-0000-0000-0000-000000000001 as the demo
-- "Sample customer" and never signs in as it.

-- Sample customer profile (placeholder)
insert into public.profiles (id, email, display_name, role, home_zip)
values ('00000000-0000-0000-0000-000000000001', 'sample.customer@example.com',
        'Sample customer', 'customer', '95814')
on conflict (id) do nothing;

-- a. Shine On Mobile Detailing (Car care)
insert into public.businesses (id, owner_id, name, category, tagline, description,
                               service_zips, travel_fee, is_sample, verified)
values ('11111111-1111-1111-1111-111111111111',
        '00000000-0000-0000-0000-000000000001',
        'Shine On Mobile Detailing', 'Car care',
        'A fresh start for your daily drive.',
        'Interior & exterior detail that comes to your driveway.',
        array['95814','95816','95818','95843','95678','95661'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('11111111-1111-1111-1111-111111111112',
        '11111111-1111-1111-1111-111111111111',
        'Interior & exterior detail', null, 149, 'fixed', '2–3 hours',
        array['Exterior hand wash & wheel cleaning','Interior vacuum & surfaces','Windows in and out'],
        array['A safe parking space and vehicle access','Water and power supplied by the provider'],
        'Please give 24 hours notice to avoid a $25 late fee.', true)
on conflict (id) do nothing;

-- b. Fresh Nest Home Cleaning (Home cleaning)
insert into public.businesses (id, owner_id, name, category,
                               description, service_zips, travel_fee, is_sample, verified)
values ('22222222-2222-2222-2222-222222222222',
        '00000000-0000-0000-0000-000000000001',
        'Fresh Nest Home Cleaning', 'Home cleaning',
        'Two-bedroom standard clean, done at your place.',
        array['95814','95816','95818'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('22222222-2222-2222-2222-222222222223',
        '22222222-2222-2222-2222-222222222222',
        'Two-bedroom standard clean', null, 120, 'fixed', '2–3 hours',
        array['Whole-home dusting','Kitchen & bath detail','Floors vacuumed & mopped'],
        array['Tidy personal items so we can clean','Pets secured during the visit'],
        'Please give 24 hours notice to avoid a $25 late fee.', true)
on conflict (id) do nothing;

-- c. Tail Trail Grooming (Pet care)
insert into public.businesses (id, owner_id, name, category,
                               description, service_zips, travel_fee, is_sample, verified)
values ('33333333-3333-3333-3333-333333333333',
        '00000000-0000-0000-0000-000000000001',
        'Tail Trail Grooming', 'Pet care',
        'Small-dog bath & tidy at your curb.',
        array['95814','95843'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('33333333-3333-3333-3333-333333333334',
        '33333333-3333-3333-3333-333333333333',
        'Small-dog bath & tidy', null, 110, 'fixed', '1–2 hours',
        array['Warm bath & blow dry','Nail trim','Ear cleaning'],
        array['A flat parking spot near your door','Your dog on a leash at handoff'],
        'Please give 24 hours notice to avoid a $25 late fee.', true)
on conflict (id) do nothing;

-- d. Happy Paws Mobile Grooming (Pet care)
insert into public.businesses (id, owner_id, name, category,
                               description, service_zips, travel_fee, is_sample, verified)
values ('44444444-4444-4444-4444-444444444444',
        '00000000-0000-0000-0000-000000000001',
        'Happy Paws Mobile Grooming', 'Pet care',
        'Small-dog bath & tidy with your pet in mind.',
        array['95814','95816'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('44444444-4444-4444-4444-444444444445',
        '44444444-4444-4444-4444-444444444444',
        'Small-dog bath & tidy', null, 105, 'estimate', '1–2 hours',
        array['Warm bath & blow dry','Brush out & tidy trim','Nail trim'],
        array['A flat parking spot near your door'],
        'Please give 24 hours notice to avoid a $25 late fee.', true)
on conflict (id) do nothing;

-- One 5-star sample review for Happy Paws
insert into public.reviews (id, listing_id, customer_id, business_id, rating, text)
values ('44444444-4444-4444-4444-444444444446',
        '44444444-4444-4444-4444-444444444445',
        '00000000-0000-0000-0000-000000000001',
        '44444444-4444-4444-4444-444444444444',
        5,
        'They were so gentle with my nervous pup. Easiest groom ever.')
on conflict (id) do nothing;

-- e. Spark & Go Auto Care (Car care)
insert into public.businesses (id, owner_id, name, category,
                               description, service_zips, travel_fee, is_sample, verified)
values ('55555555-5555-5555-5555-555555555555',
        '00000000-0000-0000-0000-000000000001',
        'Spark & Go Auto Care', 'Car care',
        'Interior & exterior detail, on your schedule.',
        array['95814','95678'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('55555555-5555-5555-5555-555555555556',
        '55555555-5555-5555-5555-555555555555',
        'Interior & exterior detail', null, 144, 'estimate', '2–3 hours',
        array['Exterior wash & wax','Interior deep vacuum','Windows in and out'],
        array['A safe parking space and vehicle access'],
        'Please give 24 hours notice to avoid a $25 late fee.', true)
on conflict (id) do nothing;

-- f. Tidy Together Cleaning (Home cleaning)
insert into public.businesses (id, owner_id, name, category,
                               description, service_zips, travel_fee, is_sample, verified)
values ('66666666-6666-6666-6666-666666666666',
        '00000000-0000-0000-0000-000000000001',
        'Tidy Together Cleaning', 'Home cleaning',
        'Custom home cleaning, quoted to your space.',
        array['95814','95843','95678'],
        0, true, true)
on conflict (id) do nothing;

insert into public.listings (id, business_id, title, description, price, price_type,
                             duration, includes, before_visit, cancellation_policy, is_sample)
values ('66666666-6666-6666-6666-666666666667',
        '66666666-6666-6666-6666-666666666666',
        'Custom home cleaning', null, null, 'quote', 'Varies',
        array['Customized cleaning plan','Your checklist, our elbow grease'],
        array['Walk us through your priorities on arrival'],
        'Please give 24 hours notice to avoid a fee.', true)
on conflict (id) do nothing;
