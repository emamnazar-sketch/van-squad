# Day 14 — Texas — Katy — ZIP 77494 — Pool cleaning & maintenance

Cell: Katy, TX × 77494 × "Pool cleaning & maintenance" (label verified verbatim in ~/workspace/van-squad/js/data.js, Home services & trades group).
Date researched: 2026-10-24. **8 businesses qualified**, all Katy-based or operating a Katy location/route and all confirming weekly pool cleaning/maintenance at customers' home pools from their own materials. No expansion to an adjacent ZIP was needed — every business below serves Katy / ZIP 77494 (Cinco Ranch / Falcon Landing area).

## Businesses

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|------|-------|----------|------|---------|--------------------------|---------------------|--------|
| 1 | Nabors Pools | (281) 236-8010 | Pool cleaning & maintenance | Katy | https://naborspools.com/ | none published (no email shown on its site) | **High** — own site: "Serving commercial & residential West Houston pools with reliable cleaning, maintenance" + "Weekly Pool Cleaning"; footer "Nabors Pools, LLC, Katy. +1 281 236 8010"; family owned since 2015 | Own website; Google Business listing (3103 Eula Morgan Rd, Katy) |
| 2 | Hang Ten Pool Service | (832) 802-9577 | Pool cleaning & maintenance | Katy | https://hangtenpoolservicetx.com/ | hangtenpools@gmail.com — published on its own website https://hangtenpoolservicetx.com/ ("email hangtenpools@gmail.com") | **High** — own site: "Pool Service & Maintenance in Katy & Fulshear, TX", weekly maintenance with skim/vacuum/brush/water testing; serves Cinco Ranch, Seven Meadows, Grand Lakes etc.; in Katy/Fulshear since 2016 | Own website; Google Business listing (23501 Cinco Ranch Blvd, Katy) |
| 3 | Top Pool Cleaning | (832) 250-7777 | Pool cleaning & maintenance | Katy | https://toppoolcleaningtx.com/ | info@toppoolcleaningtx.com — published on its own website https://toppoolcleaningtx.com/ ("email info@toppoolcleaningtx.com") | **High** — own site (Top Pool Cleaning LLC): locally owned weekly pool cleaning + scheduled maintenance plans, "we bring the gear... to your backyard", serving Houston, Katy and Cypress; phone (832) 250-7777 on site | Own website; Google Business listing (535 E Fernhurst Dr, Katy) |
| 4 | Unified Pool Solutions | (281) 799-9786 | Pool cleaning & maintenance | Katy | http://www.unifiedpoolsolutions.com/ | none published (no email shown on its site) | **High** — own site: "specializes in superior weekly pool service and equipment repair for residential pool and spa systems"; phone (281) 799-9786 on site | Own website; Google Business listing (23411 Fairbranch Dr, Katy) |
| 5 | Puddle Pool Services | (346) 680-2181 | Pool cleaning & maintenance | Katy | https://puddlepools.com/locations/katy-tx/ | katy@puddlepools.com — published on its own Katy page https://puddlepools.com/pool-cleaning-service-katy/ | **High** — own Katy location page: weekly pool service (skimming, brushing, vacuuming, chemical testing) at Katy homes, "Weekly service, same crew", 5.0 from 30 Google reviews in Katy; Katy address 801 FM 1463 STE 200-136, Katy, TX 77494 is inside the target ZIP | Own website (Katy location page) |
| 6 | Apex Pool Service | (281) 371-0017 | Pool cleaning & maintenance | Katy | https://apexpoolskaty.com/ | apexpoolskaty@yahoo.com — published on its own website https://apexpoolskaty.com/weeklyserviceagreement/ (contact block: apexpoolskaty@yahoo.com, (281-371-0017)) | **High** — own Weekly Service Agreement details weekly cleaning of the customer's pool (testing/adjusting, skim, brush, vacuum, tile, weekly equipment inspection) on a set service day at the home | Own website |
| 7 | The Pools Center | (346) 593-9798 | Pool cleaning & maintenance | Katy | https://www.thepoolscenter.com/ | none published (no email shown on its site) | **Medium** — own site details weekly pool cleaning (vacuum, brush, skim, chemical test/adjust, emailed photo report) and says it "proudly serves the Katy... areas"; FLAG: phone differs by source — own site publishes (346) 593-9798 (used here, per own-site preference) while its Google listing shows (346) 232-1386 | Own website; Google Business listing (3300 Falcon Landing Blvd, Katy) |
| 8 | Katy Fulshear Pools | (281) 638-7858 | Pool cleaning & maintenance | Katy | https://www.katyfulshearpools.com/ | none published (no email found on its site) | **Medium** — own site is titled "Pool Cleaning & Maintenance" ("We'll take care of your pool as if it's our own", 16+ years cleaning/maintaining/repairing pools); phone is from its Google Business listing only — it was not visible in the fetched homepage text | Own website; Google Business listing (29219 Sagewood Arbor Ln, Katy) |

## Dedupe notes
- Live DB checked via vs_rest.py (`businesses?select=name,phone&status=eq.active`, offsets 0 and 1000; coordinator dump of 1,073 active rows cross-checked): no match for any candidate name or phone above.
- Grepped all of ~/workspace/van-squad/prospecting/ for every candidate name, domain and phone: no prior batch contains any of them. One hit only: Unified Pool Solutions appears in day-07-nm-albuquerque-zip87108-pool-cleaning-maintenance.md solely as an *exclusion note* there (correctly identified then as a Katy, TX business) — it was never inserted, so it is eligible here in its home city.
- No duplicates within this cell: all eight names and phones are distinct.
- No business stated a list of service ZIP codes on its own materials (city/neighborhood service areas only), so service_zips in the inserts is ["77494"] for every business — no ZIPs were inferred.

## Exclusions (researched, not included)
- **Leslie's** (two Katy stores) — national retail pool-supply storefront chain. Excluded as storefront-only.
- **Blue Science Pools** (Richmond page/address) — large multi-region chain, not a local Katy operator. Excluded.
- **PoolTec Pool and Spa Service and Repair / SPS Pool Care** (Katy page, listing phone (832) 271-0672) — national SPS platform; its press releases list a 914-area-code New York contact, not a local Katy operator. Excluded as platform/lead-gen style.
- **MD Pools** (Katy, Google listing phone (346) 213-0236, mdinkaty.com) — its own website could not be fetched/verified, so weekly cleaning could not be confirmed from the business's own materials. Excluded.
- **Pool Cleaning** (poolcleaningkaty.com, (713) 893-7099) and **Swimming Pool Maintenance Katy** (katypoolmaintenance.com, (281) 671-8668) — generic city-named sites that returned 403 on fetch; service could not be confirmed from their own materials. Excluded.
- **Weekly Katy Pool Service** (poolservicekaty.com) — Google listing marked Permanently Closed. Excluded.
- **Clear Blue Aquatics, Charlie's Signature Pools, Sahara Construction & Custom Pools, Omega Custom Pools, Sunset Pools, PoolsXtreme, Texas Southern Pools & Spas, AE Pool Builders** — own materials position them as pool builders/renovation contractors with no weekly cleaning/maintenance route confirmed. Excluded.
- **Houston Mobile Blasters** — sandblasting service, not a pool cleaning route. Excluded.
- **Tortuga Pools** (Katy, (346) 606-0005, tortuga_pools@yahoo.com) — weekly cleaning confirmed on its own site, but it states on that site it is new with reviews "coming soon"; held as an overflow/reserve candidate, not included, to keep the cell at the 8-business target maximum.

## Flags
- The Pools Center phone discrepancy (own site (346) 593-9798 vs Google (346) 232-1386) — own-site number used; coordinator may wish to re-verify before outreach.
- Katy Fulshear Pools phone comes from its Google listing only.
- Puddle Pool Services is a multi-location brand; the listing is its distinct Katy location (own Katy page, Katy address in 77494, Katy-specific phone/email/reviews), not the national homepage.

## Files
- Inserts: day-14-tx-katy-zip77494-pool-cleaning-maintenance-inserts.json — 8 businesses + 8 listings.
- Leads: day-14-tx-katy-zip77494-pool-cleaning-maintenance-leads.json — 4 published emails (Hang Ten Pool Service, Top Pool Cleaning, Puddle Pool Services, Apex Pool Service).
