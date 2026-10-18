-- Van Squads: owner-uploaded profile banner.
-- Run in the Supabase SQL editor (project: van-squad). Idempotent.
--
-- WHY THIS EXISTS
-- Owners who claim their business can upload their own profile logo
-- (stored in the existing logo_url column) and a wide banner shown
-- across the top of their public profile page. The banner needs its
-- own column; uploads themselves live in the existing public
-- `request-photos` storage bucket under the owner's <uid>/ folder
-- (owner-only write policies already cover that path pattern).

alter table public.businesses
  add column if not exists banner_url text;
