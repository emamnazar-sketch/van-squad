# Rotation Day 4 — Utah: Sandy × Pressure washing × ZIP 84094

- Researched: 2026-10-17 (nightly rotation, Day 4)
- Cell: Utah × Sandy × ZIP 84094 × "Pressure washing"
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing"
- Sources: each business's own website first, then public listings (Google Business / search listings). Public information only.
- Status: PREPARED, NOT INSERTED

## ZIP note
- ZIP 84094 yielded 5 qualifying businesses, so no expansion to an adjacent ZIP was needed. Every included business states Sandy in its own service area (Homey also gives its own Sandy address, in ZIP 84092, on its site). None publishes a service-area ZIP list on its own site, so service_zips in the inserts are ["84094"] only — no other ZIPs were invented or inferred, including from Homey's street address.
- Phone note for Homey: a Google listing shows a different number, (385) 993-4844; the number used here, (385) 246-3394, is the one published repeatedly on the business's own website, per the own-site-first rule.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Homey Window Cleaning & Pressure Washing | (385) 246-3394 | Pressure washing | Sandy | http://homey-services.com/ | info@homey-services.com — published on its own website http://homey-services.com/ | High — own site: dedicated Pressure Washing service (driveways, patios, decks, siding, fences) done at the home, service list includes Sandy, own Sandy address and phone/email on the site | Business's own website |
| SudBud Window Cleaning | (385) 463-4043 | Pressure washing | Sandy | https://sudbud.online/ | sudbudonline@icloud.com — published on its own website https://sudbud.online/ | High — own site: "concrete pressure washing" and house soft washing among its exterior services, service-area list and FAQ both name Sandy, local owner-operator, phone and email on the site | Business's own website |
| RinseOne Exterior Cleaning | (385) 491-2929 | Pressure washing | Sandy | https://www.rinseone.com/ | hello@rinseone.com — published on its own website https://www.rinseone.com/ | High — own site: dedicated pressure washing for homes (driveways and exterior surfaces), "Premium surface cleaning for homes and businesses across Salt Lake City, Sandy, Draper…", phone and email on the site | Business's own website |
| Impact Pressure Washing | (385) 598-3105 | Pressure washing | Sandy | https://www.impactutahpressurewashing.com/faq/ | — none published on the pages checked | High — own site: locally owned pressure washing across Salt Lake County, its service-areas page lists Sandy with a dedicated Sandy section, and its FAQ describes residential work performed at the property; phone on the site | Business's own website |
| Worried Bird Window Washing | (888) 216-2643 | Pressure washing | Sandy | https://worriedbird.com/salt-lake | — none published on its own site | Medium — own Salt Lake page lists Sandy in its service towns and offers Power Washing, and its main site's Exterior Washing service covers siding, driveways, patios and decks with pressure matched to the surface and a local owner per town; pressure washing is one service among several and the published phone is toll-free | Business's own website |

## Dedupe
- Grepped every name and phone above against all files in ~/workspace/van-squad/prospecting/ (grep -ri, including tonight's day-04-* files) on 2026-10-17: no matches for Homey / 246-3394 / 993-4844, SudBud / 463-4043, RinseOne / 491-2929, Impact Pressure / 598-3105, or Worried Bird / 216-2643.
- No name or phone is repeated within this batch. The coordinator still dedupes against the live database at insert time.

## Excluded (checked, did not pass the gates)
- Window Genie of Sandy — EXCLUDED: national franchise; pressure washing is a secondary add-on to window cleaning.
- Pink's Windows (East Salt Lake City) — EXCLUDED: national franchise; window cleaning is primary, power washing is an add-on service.
- Mr. Handyman — EXCLUDED: national franchise chain; pressure washing is incidental to handyman work.
- That 1 Painter (Salt Lake City) — EXCLUDED: painting company/franchise; its own page frames pressure washing mainly as pre-paint preparation.
- Pressure Washing Services Utah, LLC (powerwashingsaltlakecity.com) — EXCLUDED for this cell: its own website lists its service communities as Stansbury Park, Park City, Lake Point and Heber City — Sandy is not among them.
- Pressure Washing of Utah (PWofUtah) — EXCLUDED for this cell: its own site centres on commercial, post-construction and fleet/equipment washing statewide; residential service in Sandy could not be verified from its own materials.
- Wasatch Pressure Washing (Herriman) — EXCLUDED for this cell: dedicated pressure washer with phone (385) 499-9018 on its own site, but its own site states only a generic Utah service claim and does not name Sandy or Salt Lake County.
- Pressure's On — EXCLUDED for this cell: own site offers standalone pressure washing to "local Utah homeowners" with phone (435) 994-8993, but does not name Sandy in its service area on the pages checked; concrete sealing is its lead service.
- Wasatch WaterWorx — EXCLUDED: Google Business listing only (phone (949) 351-2737, a non-Utah area code), no own website verified to confirm service from its own materials.
- Montenegro Solutions (Sandy) — EXCLUDED: Google listing shows a Sandy address and phone (801) 500-1673, but pressure washing could not be verified from its own materials (its website could not be fetched in this research).
- Glow Home Services, LLC (Sandy) — EXCLUDED: HomeAdvisor listing only, describing pressure washing as an add-on for window-cleaning customers (phone 801-721-1673); no own website verified.
- Sandy Handyman Today — EXCLUDED: handyman business; its own homepage does not list pressure washing (a third-party painter roundup mentioned it, which is not its own materials).
- Emerald Gotcha Gutters — EXCLUDED: gutter cleaning/installation only on its own materials; no pressure washing service.
- Green Window Cleaning (Sandy) — EXCLUDED: window and solar panel cleaning only on its own site; no pressure washing service.
- C&S Cleaning Construction (Sandy) — EXCLUDED: construction cleaning company; no residential pressure washing service on its own site.
- Stone Pro Services (Sandy) — EXCLUDED: its own site now presents HVAC services (and dry-ice blasting testimonials), not residential pressure washing.

## Files
- Batch table: day-04-ut-sandy-zip84094-pressure-washing.md (this file)
- Inserts: day-04-ut-sandy-zip84094-pressure-washing-inserts.json — 5 businesses + 5 listings
- Leads: day-04-ut-sandy-zip84094-pressure-washing-leads.json — 3 published emails (Homey Window Cleaning & Pressure Washing, SudBud Window Cleaning, RinseOne Exterior Cleaning), each from the business's own website; leads are a separate store and are never written into the businesses table
