# Rotation Day 4 — Idaho: Meridian × Pressure washing × ZIP 83646

- Researched: 2026-10-17 (nightly rotation, Day 4)
- Cell: Idaho × Meridian × ZIP 83646 × "Pressure washing"
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing"
- Sources: each business's own website first, then public listings (Google Business / search listings). Public information only.
- Status: PREPARED, NOT INSERTED

## ZIP note
- ZIP 83646 (northwest Meridian) yielded 7 qualifying businesses, so no expansion to an adjacent ZIP was needed. All included businesses state Meridian in their own service area (or, for Sunshine, a Meridian address on its own pressure-washing page). None publishes a service-area ZIP list on its own site, so service_zips in the inserts are ["83646"] only — no other ZIPs were invented or inferred from addresses.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| HIGHLINE Exterior Co | (208) 260-0475 | Pressure washing | Meridian | https://highlineexteriorco.com/ | highline.exterior.co@gmail.com — published on its own website https://highlineexteriorco.com/ | High — own site lists Meridian first in its service area, "Meridian, ID", and pressure washing (house/siding, driveways, decks/fences) with phone and email on the site; local owner-operator who shows up on site | Business's own website |
| All Valley Mobile Detailing & Pressure Washing | (208) 297-0333 | Pressure washing | Meridian | https://allvalleymobiledetailing.com/ | allvalleymobiledetailing@gmail.com — published on its own website https://allvalleymobiledetailing.com/ | High — own site: "Professional mobile detailing and pressure washing serving Boise, Meridian, Nampa... at your home or office", "we come to you", pressure washing for homes/driveways/walkways, phone and email on the site | Business's own website |
| Idaho Hydro Wash | (208) 830-5980 | Pressure washing | Meridian | https://idahohydro.com/ | idahohydrowash@gmail.com — published on its own website https://idahohydro.com/ | High — own site: locally owned pressure washing / soft washing, house soft wash and driveway/concrete cleaning, "Fully mobile — we come to you", "Mobile across the Treasure Valley" (which includes Meridian), phone and email on the site | Business's own website |
| Epic Exterior Services | (208) 409-5528 | Pressure washing | Meridian | https://epicexteriorservices.com/ | — none published on its own site | High — own site: "window cleaning, gutter cleaning & pressure washing... Serving Boise, Meridian, Eagle, Nampa, Kuna, Star & the Treasure Valley", crews travel to homes, phone on the site | Business's own website |
| Premier Cleaning Pro | (208) 965-4285 | Pressure washing | Meridian | https://premiercleaningpro.com/ | — none published on its own site | High — own site: commercial pressure washing and residential soft washing, "Serving the Entire Treasure Valley... Boise, Meridian, Eagle, Nampa...", locally owned/not a franchise, and its own FAQ gives "Meridian, ID 83642. 208-965-4285" | Business's own website |
| All Purpose Cleaning & Pressure Washing | (208) 371-1583 | Pressure washing | Meridian | https://www.pressurewashingandcleaning.com/ | rboussatta@yahoo.com — published on its own website https://www.pressurewashingandcleaning.com/ | High — own site: "exterior cleaning for homeowners across Boise, Meridian, and Nampa", serving list includes Meridian, siding/driveway work at the property, phone and email on the site | Business's own website |
| Sunshine Window Cleaning | (208) 461-6985 | Pressure washing | Meridian | https://pleasecleanmywindows.com/pressure-washing/ | — none published on its own site (a third-party email-format site was not used) | Medium — own dedicated pressure-washing page: exterior house wash, flat-surface (driveway/patio/walkway) cleaning, hot-water pressure washing and graffiti removal, with its own Meridian address "202 W. Franklin Rd., Meridian, ID 83642" and phone 208-461-9685 on that page; pressure washing is one service alongside window cleaning | Business's own website |

## Dedupe
- Grepped every name and phone above against all files in ~/workspace/van-squad/prospecting/ (grep -ri) on 2026-10-17: no matches for HIGHLINE / 260-0475, All Valley Mobile / 297-0333, Idaho Hydro / 830-5980, Epic Exterior / 409-5528, Premier Cleaning Pro / 965-4285, All Purpose / 371-1583, or Sunshine Window / 461-6985.
- No name or phone is repeated within this batch. The coordinator still dedupes against the live database at insert time.

## Excluded (checked, did not pass the gates)
- Mr. Handyman of Boise, Meridian and Nampa — EXCLUDED: national franchise chain; pressure washing is incidental to handyman work, not a dedicated local pressure-washing operator for this cell.
- Window Genie of Meridian — EXCLUDED: national franchise; window cleaning is primary, pressure washing is a secondary add-on.
- That 1 Painter Treasure Valley — EXCLUDED: painting company/franchise; pressure washing is pre-paint preparation only.
- Poseidon Pressure Washing (Boise) — EXCLUDED for this cell: a public listing shows phone (208) 353-9112 and a Boise address, but Meridian service and on-site residential pressure washing could not be verified from its own materials in this research (its contact page could not be fetched).
- Anytime Shine — EXCLUDED: Google listing only describing commercial window cleaning / pressure washing, with phone (208) 999-6482; no own website verified to confirm pressure washing from its own materials.
- Pressure Washing Solutions (Caldwell) — EXCLUDED for this cell: own materials centre on mobile truck/fleet washing, not residential home pressure washing in Meridian.
- First Choice Pressure Washing (Boise) — EXCLUDED: listing marked possibly temporarily closed, no website, no verifiable ongoing service.

## Files
- Batch table: day-04-id-meridian-zip83646-pressure-washing.md (this file)
- Inserts: day-04-id-meridian-zip83646-pressure-washing-inserts.json — 7 businesses + 7 listings
- Leads: day-04-id-meridian-zip83646-pressure-washing-leads.json — 4 published emails (HIGHLINE Exterior Co, All Valley Mobile Detailing & Pressure Washing, Idaho Hydro Wash, All Purpose Cleaning & Pressure Washing), each from the business's own website; leads are a separate store and are never written into the businesses table
