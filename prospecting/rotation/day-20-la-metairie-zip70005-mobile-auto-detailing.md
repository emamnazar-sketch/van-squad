# Rotation Day 20 — Louisiana: Metairie × Mobile auto detailing × ZIP 70005

- Researched: 2026-10-30 (nightly rotation, Day 20)
- Cell: Metairie, LA 70005. Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| New Again Mobile Detailing Services | (504) 715-7842 | Mobile auto detailing | Metairie | https://newagainnola.com/ | NewAgainMobile@gmail.com — https://newagainnola.com/ | High — own site footer gives shop address 908 Veterans Memorial Blvd, Metairie, LA 70005, lists Metairie in its service areas, and its FAQ says "We are fully equipped… We come to your location"; phone and email on its own site | Business's own website |
| Drip Mobile Detailing | (504) 270-3165 | Mobile auto detailing | Metairie | https://dripmobiledetail.com/ | — none found on own site | High — own site lists "Mobile Detailing, mobile car detailing service", address "505 N Causeway Blvd, Metairie, LA" and phone "+1 504 270 3165"; Google listing describes service "right to your door step" | Business's own website; Google listing |
| CL Detailz Mobile Detailing & Pressure Washing | (504) 669-6875 | Mobile auto detailing | Metairie | http://cldetailz.com/ | — none found on own site | High — own site is titled "CL Detailz Mobile Detailing", says it provides services "throughout the New Orleans and Metairie area", and its footer gives "CL Detailz, Suite 1900 Galleria Boulevard, Metairie, LA 70001. 5046696875"; a public listing quoting the business says its mobile units have power and water on board and "We can service you at any location" around Metairie | Business's own website; public listing |
| High Definition Mobile Detailing | (504) 270-8363 | Mobile auto detailing | Metairie | http://www.highdefinitionautodetailing.com/ | — none found on own site | Medium — Google listing at 730 Papworth Ave, Metairie, LA 70005 describes it as "We Come to You!!" and lists the phone; own site lists full detailing packages, but the phone / come-to-you line were not visible in the fetched homepage text | Google listing; business's own website |
| Pro Purple Mobile Detailing | (504) 441-9580 | Mobile auto detailing | Metairie | https://propurplemobiledetailing.com/ | — none found on own site | High — own site says "100% mobile. We bring water, power… to your driveway, garage, condo lot, or office", lists Metairie in its service areas / FAQ, and lists phone (504) 441-9580 repeatedly; owner-operated, based in Kenner and serving Metairie | Business's own website |
| Sosa Details | (609) 498-8020 | Mobile auto detailing | Metairie | https://sosadetails.com/ | — none found on own site | Medium — own site says "Metairie's premier mobile detailing service. We bring the showroom shine directly to your doorstep" and "We come to you — home, office, or anywhere"; phone is from its Google listing only (609 area code, not toll-free) and was not visible in the fetched homepage text | Business's own website; Google listing |

## Dedupe / exclusion notes

- Dedupe: Checked against ~/workspace/van-squad/prospecting/rotation/day20-dedupe.txt and grepped all files in ~/workspace/van-squad/prospecting/ for every name and phone in this batch on 2026-10-30: no matches. The only grep hit was an unrelated "New Again Detailing" listed as an excluded shop in a Bozeman, MT batch — different business, different state.
- Cross-cell (Day 20 files present at finish): checked all other Day 20 inserts present at finish (day-20-la-metairie-zip70001-house-cleaning, day-20-la-new-orleans-zip70115-mobile-auto-detailing, day-20-la-new-orleans-zip70122-handyman, day-20-la-new-orleans-zip70127-mobile-pet-grooming) for same-phone matches. **⚠️ CROSS-CELL DUPLICATE FLAGGED: Pro Purple Mobile Detailing, (504) 441-9580, is ALSO included as a business in day-20-la-new-orleans-zip70115-mobile-auto-detailing (inserts + .md). Same business / same phone in two Day 20 cells — the coordinator must keep it in only one cell at insert time.** No other phone in this cell matches an included business in any other Day 20 file. CL Detailz (504) 669-6875 appears in the 70115 file only as an exclusion note, not as an included business, so that is not a duplicate inclusion.
- Excluded — Meticulous Auto Detailing, Metairie ((504) 521-6003, detailingmetairie.com): own site gives the phone but no mobile / come-to-you confirmation was found; appears shop-based.
- Excluded — Dapper Auto Salon, Metairie ((504) 275-9731): shop/salon operation; no mobile confirmation in its own materials.
- Excluded — Geaux Mobile Detail, New Orleans ((985) 503-8875): New Orleans address, Google listing marked "Possibly Temporarily Closed"; not a Metairie operator for this cell.
- Excluded — Slate Detail ((504) 249-6984) and MJ's Mobile Detailing ((504) 502-5226): both are mobile and say they serve Metairie on their own sites, but both are based in New Orleans (not Metairie) and the cell reached six Metairie-addressed / explicitly Metairie-serving operators without them; held as reserves, not used.
- Excluded — National Detail Pros and similar national lead-gen listings: national call-center model, toll-free (800) number, no local Metairie operator.
- Excluded — Byron Mobile Auto Detail and Carwash, Next Level Mobile Detailing, Accurate Mobile Detailing: no verifiable own website confirming phone + mobile service to the batch standard (social / listing-only presence).

## ZIP note

- Target ZIP 70005 (Metairie). Two businesses are addressed in 70005 itself: New Again Mobile Detailing Services (908 Veterans Memorial Blvd, Metairie, LA 70005, own site) and High Definition Mobile Detailing (730 Papworth Ave, Metairie, LA 70005, Google listing).
- Because 70005 alone yielded fewer than three fully qualifying businesses, the cell expanded to adjacent ZIPs in the same city of Metairie — Drip Mobile Detailing and CL Detailz Mobile Detailing & Pressure Washing are both Metairie-addressed in 70001 — plus Metairie-serving mobile operators whose own sites explicitly list Metairie (Pro Purple Mobile Detailing, Sosa Details). This expansion is noted here as required.
- All businesses carry service_zips = ["70005"] only: their own materials name served cities/areas (Metairie, New Orleans, Kenner) rather than additional ZIP codes, and no ZIPs were invented.

## Coordinator note (2026-10-30, at insert)
- Pro Purple Mobile Detailing removed from THIS cell before insert: same business + phone (504) 441-9580 was also included in the New Orleans 70115 detailing cell tonight; kept only there (Day-13/Day-16 cross-cell dedupe precedent). This cell inserts 5 businesses.
