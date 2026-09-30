-- Van Squads: gate public listings behind verified business contact email.
-- Run in the Supabase SQL editor (project: van-squad).

-- 1) Flag on the business row
alter table public.businesses
  add column if not exists email_verified boolean not null default false;

-- 2) One-time codes (only the service_role backend touches this table)
create table if not exists public.email_verification_codes (
  business_id uuid primary key references public.businesses(id) on delete cascade,
  code_hash   text not null,
  expires_at  timestamptz not null,
  attempts    int not null default 0,
  created_at  timestamptz not null default now()
);
alter table public.email_verification_codes enable row level security;
-- Intentionally no policies: anon/authenticated cannot read or write rows.
-- The Netlify functions use the service_role key, which bypasses RLS.

-- 3) Existing sample listings stay public
update public.businesses set email_verified = true where is_sample = true;

-- 4) Public reads only see verified businesses (owners still see their own via businesses_owner_all)
drop policy if exists "businesses_public_read" on public.businesses;
create policy "businesses_public_read" on public.businesses
  for select to anon, authenticated
  using (status = 'active' and email_verified = true);

drop policy if exists "listings_public_read" on public.listings;
create policy "listings_public_read" on public.listings
  for select to anon, authenticated
  using (status = 'active' and business_id in (
    select id from public.businesses where status = 'active' and email_verified = true
  ));
