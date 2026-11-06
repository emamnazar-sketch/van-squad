# Rotation Day 27 — Tennessee: Chattanooga × Mobile auto detailing × ZIP 37415

- Researched: 2026-11-06 (nightly rotation, Day 27)
- Cell: Chattanooga, TN 37415 (Red Bank / Northgate area, Hamilton County). Category label verified in ~/workspace/van-squad/js/data.js: "Mobile auto detailing".
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Big Dog Detail | (423) 203-0833 | Mobile auto detailing | Chattanooga | https://www.bigdogdetailtn.com/ | Info@BigDogDetailTN.com — https://www.bigdogdetailtn.com/pricing | High — own site: "brings full mobile detailing right to your Hixson driveway", self-contained with own water/power, service-areas list includes Red Bank (37415); phone and email on own site (also has a shop for ceramic/paint correction, but mobile is confirmed) | Business's own website |
| Dixie Detail | (423) 380-9120 | Mobile auto detailing | Chattanooga | https://www.dixiedetail.com/ | — none found on own site | Medium — own site: "We come to your driveway", "You’ll get a time at your home, work, or wherever is convenient", Hamilton County list includes Chattanooga, Hixson and Red Bank explicitly; phone on own site; base is Calhoun, outside the city | Business's own website |
| Driven Detail Chattanooga | (423) 250-6171 | Mobile auto detailing | Chattanooga | https://www.drivendetailchattanooga.com/ | — none found on own site | High — own site: "Professional detailing at your location. We bring everything needed", "We Come to You", self-contained with own water and power, at home or at work, owner-operated in Chattanooga; phone 4232506171 on own site | Business's own website |
| Chattanooga Mobile Detailing | (423) 777-6319 | Mobile auto detailing | Chattanooga | https://www.chattanoogamobiledetailing.com/ | — none found on own site | Medium — own site is headed "Mobile Car Detailing In Chattanooga" with hand wash / full detail services; phone (423) 777-6319 is from its Google Business listing, not seen on the fetched homepage | Business's own website + Google Business listing |
| Pace Car Services | (423) 605-3486 | Mobile auto detailing | Chattanooga | https://c8d89cb5.godaddysites.com/contact | pacemaclain@gmail.com — https://c8d89cb5.godaddysites.com/contact | Medium — own contact page: "Convenient Mobile Car Detailing — Experience professional car detailing right at your doorstep with our mobile services", address Chattanooga TN; phone and email on own site; no service-area list beyond Chattanooga | Business's own website |

## Dedupe
- Checked against the live DB dump ~/workspace/goals/van-squad-directory-website/hidden_files/day27-open-dump.json (2,308 active businesses) and grepped ALL files in ~/workspace/van-squad/prospecting/ for every included name and phone: no matches for the 5 businesses above.
- Dedupe skip (same name already on record — see Exclusions): DetailXPerts.

## Exclusions
- DetailXPerts (651 E 4th St #200, Chattanooga; (423) 390-0523, plus toll-free 877-317-9737 on its Chattanooga page) — EXCLUDED: national franchise with branches across the nation (its own description), i.e. a national operation, AND SKIPPED ON DEDUPE — the exact name "DetailXPerts" is already in the live DB (Detroit, MI, (313) 924-9779) and in prior prospecting.
- Panda Hub (pandahub.com/car-detailing/chattanooga-tn; (615) 257-9540) — EXCLUDED: national matching / lead-gen platform, no local Chattanooga operator of its own.
- Prestige Auto Detailing (5225 TN-153 / 2335 Rossville Blvd, Chattanooga; (423) 424-8318 on own site, a second listing shows a different number) — EXCLUDED: own site says it began as a mobile van service in 2013 but now operates a physical shop; current come-to-you mobile detailing is not confirmed from its own materials — fixed shop for this cell.
- Pacific Coast Detailing (4520 Green Shanty Rd, Ooltewah; (951) 847-1435; pacificcoastdetailing@gmail.com on own site) — EXCLUDED for this cell: fully mobile and Chattanooga-branded on its own site, but its own location pages cover east Hamilton County only (East Brainerd, Harrison, Collegedale, Apison, Lookout Mountain); coverage of Red Bank / ZIP 37415 is not confirmed from its own materials — its email was therefore NOT collected as a lead.
- Oscar's Mobile Detailing (mobile-detailing-chattanooga.com; Google listing (423) 401-8166, Soddy-Daisy) — EXCLUDED: its own site gives conflicting phones — (423) 661-1015 in its contact block, a (423) 555-0147 "Book now" template number, and a footer business name "O.G Mobile Detailing" that does not match — no single verifiable public phone to the batch standard.
- Walnut Mobile Detailing / Chattanooga Mobile Car Wash ((423) 558-3847, listing only) — EXCLUDED: its listed website domain now serves unrelated Vietnamese web-development content, so no verifiable own materials confirm mobile service or phone.
- Ridgeline Auto Detailing (ridgelineautodetail.site) — EXCLUDED: premium mobile service in Chattanooga is confirmed on its own site ("We come to you, wherever you are in the Scenic City"), but no public phone number appears on its own site or in the public listings found — no verifiable public phone.
- Peak Shine Detailing (peakshinedetailing.com; (423) 589-1682) — EXCLUDED for this cell: own pages reviewed focus on fleet detailing at business facilities/lots and general Chattanooga pricing; residential mobile detailing at a customer's home in 37415 is not confirmed from its own materials.
- Finishing Touch Mobile Detailing ((423) 682-0366), Silver Mobile Detailing ((423) 250-3235), Buffit Auto Detail ((423) 413-7256), Bodi's Mobile Detailing ((423) 704-4947) — EXCLUDED: public listings only, no verifiable own website/materials to confirm mobile service and phone to the batch standard.
- Snap Mobile Detailing ((423) 704-6131) — EXCLUDED: its public listing is marked Permanently Closed.
- Scenic Suds Car Wash Express (1051 Ashland Terrace, Chattanooga; (423) 760-3000), Highland Hand Detail Shop (3640 Hixson Pike; (423) 870-9399), Chattanooga Auto Spa (910 Creekside Rd; (423) 400-5606), ModWash (Hixson; (423) 485-0005) — EXCLUDED: fixed storefront car wash / detail shops in or near the target ZIP; mobile/on-site detailing at the customer's location not confirmed.

## ZIP note
- Target ZIP 37415 (Red Bank, Chattanooga). No expansion to an adjacent ZIP was needed — 5 qualifying businesses were found. Two included operators (Big Dog Detail, Dixie Detail) name Red Bank explicitly in their own service-area materials; the other three confirm mobile service across Chattanooga, which includes 37415.
- All businesses carry service_zips = ["37415"] only, because their own materials name served cities/areas (Chattanooga, Red Bank, Hixson, Hamilton County) rather than additional ZIP codes; no ZIPs were invented.

## Leads
- 2 published business emails collected in the matching -leads.json: Big Dog Detail (Info@BigDogDetailTN.com) and Pace Car Services (pacemaclain@gmail.com). Dixie Detail, Driven Detail Chattanooga and Chattanooga Mobile Detailing publish no email on their own sites that was found.
