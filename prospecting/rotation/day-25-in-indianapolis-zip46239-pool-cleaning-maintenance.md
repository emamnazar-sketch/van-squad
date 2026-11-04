# Day 25 — Indiana × Indianapolis × ZIP 46239 × Pool cleaning & maintenance

- **Cell:** IN | Indianapolis | 46239 | Pool cleaning & maintenance (exact label)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 6 qualifying businesses found for the target ZIP. No adjacent-ZIP expansion was required to reach 3+. Every business below is an Indianapolis / Marion County / Central Indiana operator whose own materials explicitly state Indianapolis service, which includes the 46239 area (southeast Indianapolis / Franklin Township). None publishes a ZIP-code list, so no ZIPs were invented.
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `/tmp/day25-open.json` (2,135 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 6 businesses below. One name match WAS found and excluded — see Excluded (Puddle Pool Services).
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["46239"] only. City-name service areas were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials confirm recurring pool cleaning/maintenance performed at the customer's home pool (weekly visits: skimming, brushing, vacuuming, chemical testing/balancing, basket/filter/equipment checks).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Pate's Pool & Spa | (317) 541-1300 | Pool cleaning & maintenance | Indianapolis | https://patespoolandspa.com | info@patespoolservice.com — published as "Info@patespoolservice.com" on its own service page https://patespoolandspa.com/pool-service-fishers-indiana/ | High — own site: "Pool Service for Indianapolis", weekly swimming pool service (blowing debris, emptying skimmers and pumps, testing pH), residential & commercial customers, serving Indianapolis since 1968, own address 5016 East 62nd Street, Indianapolis, IN 46220 and phone 317-541-1300 printed on the page | https://patespoolandspa.com/pool-service-fishers-indiana/ |
| Pyle's Pools | (317) 288-5317 | Pool cleaning & maintenance | Indianapolis | https://www.pylespools.com | sales@pylespools.com — published on its own homepage https://www.pylespools.com/ ("call our office at (317) 288-5317 or e-mail sales@pylespools.com"; contact block also shows Sales@PylesPools.com) | High — own site: residential pool service includes openings, closings, repairs and maintenance; "typical pool service includes skimming the surface, checking filters, cleaning filters and skimmer baskets, water chemistry maintenance, vacuuming pool floor, and cleaning walls"; full-service pool company located in Indianapolis, founded 2008 | https://www.pylespools.com/ |
| Pools of Fun | (463) 238-4131 | Pool cleaning & maintenance | Indianapolis | https://poolsoffun.com | — none published on its own site that could be verified verbatim | High — own services page: "Weekly Maintenance & Care Packages" (water testing & balancing, brushing & skimming, vacuuming, equipment checks), PHTA-certified service team, services pools it did not build, serving Indianapolis & Marion County for 40+ years; main phone 463-238-4131 printed across its own site. Not builders-only — weekly home maintenance is an explicit, standalone offer | https://poolsoffun.com/services/ |
| Perma Pools | (317) 782-9956 | Pool cleaning & maintenance | Indianapolis | https://www.permapools.com | — email link present on own site but the address was obfuscated/redacted in fetched text and could not be verified verbatim, so NOT counted as a lead | Medium — own site offers weekly service packages for Indianapolis homeowners (water testing and chemical balancing, skimming and debris removal, brushing walls and steps, emptying skimmer and pump baskets, equipment checks) and 37+ years servicing pools across Indianapolis/Central Indiana; based at 5245 Elmwood Ave, Indianapolis, IN 46203 with phone (317) 782-9956 on its own pages. Graded Medium because the company is primarily a pool builder and maintenance is a secondary line | https://www.permapools.com/pool-opening-checklist-for-indianapolis-homeowners-get-your-pool-ready-for-summer/ |
| ASP - America's Swimming Pool Company of North Indianapolis | (317) 886-3064 | Pool cleaning & maintenance | Indianapolis | https://www.asppoolco.com/northindianapolis/ | — none published on its own site that could be verified verbatim | Medium — own North Indianapolis location pages: weekly maintenance plans with same-day-each-week home visits (chemical checks, vacuuming, skimming, pump/filter inspection) and weekly digital reports; locally operated location at 8333 Stafford Ln., #238, Indianapolis, IN 46260, phone (317) 886-3064 on its own pages. Graded Medium because it is a franchise location; name and phone are distinct from the ASP Edmond / St. Paul / NW Oklahoma City rows already in the DB | https://www.asppoolco.com/northindianapolis/services/pool-cleaning/maintenance-plans/ |
| Dream Team Exterior Solutions | (317) 348-8292 | Pool cleaning & maintenance | Indianapolis | https://www.dreamteamexterior.com | — none published on its own site that could be verified verbatim | Medium — own pool-maintenance page: "Indianapolis's Trusted Pool Maintenance Cleaning", weekly maintenance for inground/above-ground residential pools (vacuuming, skimming, brushing, waterline tile cleaning, skimmer/pump basket washing, chemistry testing/balancing by Certified Pool Operators), phone (317) 348-8292 printed on its own pages; locally owned Indianapolis-area company (serving greater Indianapolis since 2021 per its own site). Graded Medium because pool care is one line of a broader exterior-services company and the page uses generic marketing copy | https://www.dreamteamexterior.com/pool-maintenance |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Pate's Pool & Spa | info@patespoolservice.com | https://patespoolandspa.com/pool-service-fishers-indiana/ |
| Pyle's Pools | sales@pylespools.com | https://www.pylespools.com/ |

2 leads — see `day-25-in-indianapolis-zip46239-pool-cleaning-maintenance-leads.json`.

## Excluded

- **Puddle Pool Services (Indianapolis location, (317) 961-3931, indianapolis@puddlepools.com)** — its own Indianapolis page fully confirms weekly residential pool cleaning, BUT the exact business name "Puddle Pool Services" is already in the live DB (Katy, TX location, (346) 680-2181, day-14 batch) — same name = skip under the dedupe rule. It is also a national franchise (a Day-18 cell excluded Puddle on franchise grounds). Not repeated here.
- **Sparkle Pool Service & Supply of Indiana (Indianapolis)** — weekly service is attested only by third-party directories (HomeAdvisor / an old IBJ directory listing, (317) 545-1980, sparklepoolindy.com); no live own website with verifiable phone and own-materials confirmation of home pool cleaning could be verified, so it fails the own-website-first gate.
- **Leslie's Pool Supplies (Indianapolis/Greenwood stores)** — retail storefront chain; in-store services only, no at-home weekly pool cleaning route.
- **Indianapolis Pool & Spa Co. Inc. ((317) 257-7907, indypoolandspa.com)** — surfaced only in an old IBJ directory listing; no current own-site materials confirming weekly home pool cleaning/maintenance could be verified.
- **Angi / HomeAdvisor / BestImprovers listings in general** — used only as discovery pointers; every included business was verified on its own website.
- **Pools of Fun store-specific numbers** (317-882-3943 Greenwood, 317-839-3199 Plainfield, 317-915-7526 Fishers, 317-843-0337 Noblesville, 317-852-3944 Brownsburg) — retail store lines for the same single business; only the main number published across its own site, (463) 238-4131, was used, and the business is listed once.

## Files

- Batch: `day-25-in-indianapolis-zip46239-pool-cleaning-maintenance.md` (this file)
- Inserts: `day-25-in-indianapolis-zip46239-pool-cleaning-maintenance-inserts.json` — 6 businesses + 6 listings
- Leads: `day-25-in-indianapolis-zip46239-pool-cleaning-maintenance-leads.json` — 2 published emails
