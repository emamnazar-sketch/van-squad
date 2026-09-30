-- Van Squads: gate public listings behind verified business phone as well.
-- Run in the Supabase SQL editor (project: van-squad).
-- Twilio Verify holds the code state; we only store the verified flag.

-- 1) Flag on the business row
alter table public.businesses
  add column if not exists phone_verified boolean not null default false;

-- 2) Existing sample listings stay public
update public.businesses set phone_verified = true where is_sample = true;

-- 3) Public reads only see businesses verified on BOTH email and phone
--    (owners still see their own via businesses_owner_all)
drop policy if exists "businesses_public_read" on public.businesses;
create policy "businesses_public_read" on public.businesses
  for select to anon, authenticated
  using (status = 'active' and email_verified = true and phone_verified = true);

drop policy if exists "listings_public_read" on public.listings;
create policy "listings_public_read" on public.listings
  for select to anon, authenticated
  using (status = 'active' and business_id in (
    select id from public.businesses
    where status = 'active' and email_verified = true and phone_verified = true
  ));
