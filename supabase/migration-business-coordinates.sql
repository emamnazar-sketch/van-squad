-- Van Squads: stored map coordinates for business profiles.
-- Run in the Supabase SQL editor (project: van-squad). Idempotent.
--
-- WHY THIS EXISTS
-- The upgraded profile layout (rollout 2026-10-31) puts a service-area map
-- on every profile, with the marker at the centroid (mean lat/lng) of the
-- business's service ZIPs. Until these columns exist and are backfilled,
-- the profile function computes the same centroid at render time from the
-- GeoNames ZIP coordinates embedded in functions/business/[slug].js
-- (ZIP_COORDS, built by tools/build-zip-coords.mjs). Once the columns are
-- populated, a stored lat/lng pair wins over the computed centroid.
-- Backfill values for every active business (computed 2026-10-31 from
-- GeoNames US postal data): patch each businesses row with its lat/lng
-- via the service-key REST CLI (vs_rest.py patch "businesses?id=eq.<id>").

alter table public.businesses
  add column if not exists lat double precision;

alter table public.businesses
  add column if not exists lng double precision;
