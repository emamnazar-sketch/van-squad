# Day 33 — South Carolina, Charleston, ZIP 29403 — Mobile auto detailing

Cell: SC | Charleston | 29403 | Mobile auto detailing
Research date: 2026-11-12
Target ZIP 29403 (downtown / North Central Charleston). All businesses below serve Charleston including 29403 from their own materials; no adjacent-ZIP expansion was needed — 7 businesses qualified in the Charleston service area for this ZIP.

## Businesses (7)

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | Palm Wash Mobile Car Detailing | (843) 779-9811 | Mobile auto detailing | Charleston | http://www.palmwash.com/ | PalmWashDetailing@gmail.com — own website footer (http://www.palmwash.com/) | High — own site: "Professional-grade mobile car detailing in Charleston, SC", team "brings years of detailing experience directly to your driveway or office" and "we'll come to you"; phone 843.779.9811 and email on own site; address 1856 Belgrade Ave, Charleston, SC 29407 on own site | Business's own website |
| 2 | PalmettoRevive Mobile Detailing | (843) 830-9896 | Mobile auto detailing | Charleston | http://palmettorevivedetailing.com/ | — none published on its own site | High — own site: "small local business mobile to Charleston and Surrounding areas", FAQ "Yes, we come to you! Water and Power Equipped" and "Give us a call or send us a text at (843) 830-9896" | Business's own website |
| 3 | PrimeShine Mobile Detailing | (843) 789-0767 | Mobile auto detailing | Charleston | https://www.primeshinedetailer.com/ | — none published on its own site | High — own site: "PrimeShine is a mobile detailing business based in West Ashley, serving the Charleston area", "Everything happens at your home... the equipment comes to the driveway", "Call or text (843) 789-0767"; owner-operated, no shop | Business's own website (https://www.primeshinedetailer.com/about-the-owner) |
| 4 | DI Mobile Car Wash | (843) 588-7433 | Mobile auto detailing | Charleston | https://danielislandmobilecarwash.co/ | dimobilecarwash@gmail.com — own website footer (https://danielislandmobilecarwash.co/) | High — own site: "Luxury Mobile Detailing — We Come to You", "certified techs arrive at your home or office", phone 843-588-7433 and email on own site; address 130 River Landing Dr, Charleston, SC 29492 on own site | Business's own website |
| 5 | Stono River Auto Spa | (843) 608-1707 | Mobile auto detailing | Charleston | https://stonoriverautospa.com/ | stonoriverautospa@gmail.com — own website contact block (https://stonoriverautospa.com/) | High — own site: "fully equipped mobile unit that comes to you across the Charleston metro", "let our self-contained mobile unit come to you within ~20 miles of Charleston", phone (843) 608-1707 and email on own site | Business's own website |
| 6 | Executive Auto Luxury & Exotic Detailing | (843) 273-6100 | Mobile auto detailing | Charleston | https://executiveautosc.com/ | msmalls@executiveautosc.com — own website services page (https://executiveautosc.com/services/) | High — own site: "professional mobile detailing services in Charleston SC... brings high-quality vehicle care directly to your home, office, or location", FAQ confirms service at home/workplace in Charleston; phone (843) 273-6100 and email on own site | Business's own website |
| 7 | Illustrious Mobile Detailing | (843) 410-3040 | Mobile auto detailing | Charleston | https://illustriousmobiledetailing.com/ | — none published on its own site | High — own site: "brings showroom-quality care straight to your doorstep", "We bring our top-tier auto detailing equipment straight to your home or office in Charleston and North Charleston", fully self-contained mobile units; phone (843) 410-3040 on own site; service areas include Downtown Charleston | Business's own website |

4 published business emails collected (see matching -leads.json): Palm Wash Mobile Car Detailing, DI Mobile Car Wash, Stono River Auto Spa, Executive Auto Luxury & Exotic Detailing. All taken from the businesses' own websites; none guessed.

## Dedupe notes

- Checked against the live DB dump /tmp/vs_active_day33_open.json (2,991 active businesses): no match on exact name or phone for any of the 7 businesses. A substring search for "di mobile" returned Lizardi Mobile Detailing (San Antonio, (210) 527-3544) — a different business, not a duplicate.
- Grepped ~/workspace/van-squad/prospecting/ for all 7 names and all 7 phone numbers: no prior batch contains any of them. The only "Executive" / "PrimeShine"-like hits were unrelated businesses in other states (Executive Automotive Detail, Bozeman MT — excluded shop; Prime-Shine Pressure Washing, St. Charles MO, different phone/category).

## Exclusion notes

- Monte's Mobile Detailing (Charleston; (843) 973-0080 per listing) — EXCLUDED: its own website is a "Launching Soon" placeholder with no phone and no mobile/on-site confirmation from its own materials.
- M&L Mobile Detailing LLC (Charleston; (786) 280-4260 per listing) — EXCLUDED: phone could not be verified on its own website in this check (fetched homepage carried no phone); listing phone uses a non-local area code.
- Washed By the Water Detailing (62 Brigade St, Charleston; (843) 810-9143 per listing) — EXCLUDED: no phone and no mobile/on-site confirmation found on its fetched homepage.
- In and Out Car Wash (Charleston) — EXCLUDED: fixed-location car wash operating since 1960; storefront-only, no mobile service confirmed.
- National Detail Pros — EXCLUDED: national lead-gen/call-center operation, toll-free (800) number only, no local Charleston operator.
- Washos Mobile Car Wash And Detailing — EXCLUDED: national chain, toll-free (855) number only.
- Ocean Gloss Auto Detailing (Mount Pleasant) — NOT INCLUDED in this cell: Mount Pleasant-based with two different call/text numbers published; left out to keep this cell to Charleston-centered operators — available for a future Mount Pleasant cell.

## Files

- day-33-sc-charleston-zip29403-mobile-auto-detailing.md (this file)
- day-33-sc-charleston-zip29403-mobile-auto-detailing-inserts.json — 7 businesses + 7 listings, service_zips ["29403"] only (no business published additional service-area ZIPs; address ZIPs were not treated as service ZIPs)
- day-33-sc-charleston-zip29403-mobile-auto-detailing-leads.json — 4 leads

Not inserted — coordinator inserts centrally.
