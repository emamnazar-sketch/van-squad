# Rotation Day 20 — Louisiana: Baton Rouge × Mobile pet grooming × ZIP 70810

- Researched: 2026-10-30 (nightly rotation, Day 20)
- Cell note: ZIP 70810 is south Baton Rouge (Perkins Road / Siegen Lane area). Mobile pet grooming supply in Baton Rouge is thin — only two operators passed all gates. Because 70810 yielded fewer than 3 qualifying businesses, the cell was expanded to adjacent ZIPs in the same city (70808 / 70809 and the wider Baton Rouge service area); the expansion produced no additional qualifying operator — both included businesses serve Baton Rouge citywide rather than a single ZIP, and no business publishes a ZIP list, so service_zips = ["70810"] only for both (no ZIP invented).
- Sources: each business's own website first, then public listings (Google Business, DogDog, PetBacker). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Bark & Mane of South Baton Rouge and Ascension | (225) 327-1032 | Mobile pet grooming | Baton Rouge | https://www.barkandmane.com/pet-groomers/south-baton-rouge-ascension-la/ | None found — own location page offers online booking / phone only; no email published for this location | High — own location page: "We'll arrive on time in our full-service grooming van, right to your driveway," stress-free grooming "right at your door," Cities Served includes Baton Rouge, and the page prints "Direct Line: (225) 327-1032" (a local number, not the national 1-800 line, which was not used); locally operated franchise location (formerly Aussie Pet Mobile of South Baton Rouge and Ascension, per its own page), not a national call center | Business's own website (location page, opened and read in full) |
| Smylie's Mobile Pet Grooming | (225) 802-1247 | Mobile pet grooming | Baton Rouge |  | None found | Medium — no standalone website could be verified (its old Google business.site address no longer resolves), so mobile confirmation rests on the business's own public profiles: its Google Business listing in Baton Rouge is named "Smylies mobile Pet grooming" with phone (225) 802-1247, and its own PetBacker groomer profile is "SmyliesMobileGrooming," recommended for Baton Rouge; name itself is the business's own mobile claim, with a local (225) phone and no storefront address — re-verify 70810 coverage and van operation when the business claims its profile | Google Business listing + DogDog listing (same name / phone / business.site address) + PetBacker groomer profile |

## Dedupe / exclusion notes

- Dedupe file checked: ~/workspace/van-squad/prospecting/rotation/day20-dedupe.txt — grep for "South Baton", "327-1032", "802-1247", "Smylie" returned no matches. The dedupe file contains other Bark & Mane locations (e.g. Elk Grove / Rancho Cordova, Western Montana, Boulder / Arvada, East Denver) — different operators, cities and phones; the South Baton Rouge and Ascension location is not among them.
- Full prospecting tree grep at finish (all of ~/workspace/van-squad/prospecting/, including every other day-20 file present): grep for "327-1032", "802-1247", "Smylie" and "South Baton Rouge" returned no matches outside this batch. No other day-20 Baton Rouge file existed at finish.
- Within-batch / rename dedupe: Aussie Pet Mobile of South Baton Rouge and Ascension is the SAME operator as Bark & Mane of South Baton Rouge and Ascension (its own page states the rename) — listed once only, under the current Bark & Mane name.

## Excluded (checked, did not pass the gates)

- Furry Land Mobile Grooming (Baton Rouge) — EXCLUDED: its own Baton Rouge pages do name 70810, but the only phone published is 877-726-3345, a toll-free number with no local Baton Rouge operator phone — toll-free-only fails the gate.
- Baton Rouge Dog Grooming / batonrougemobiledoggrooming.com, (225) 432-1364 — EXCLUDED: its own site states it is an "Independent referral website: We do not directly provide grooming services" — a lead-gen / referral site, not an operator. Its published admin@ email was therefore NOT collected as a lead (not a grooming business's own published contact for service).
- Kontota — EXCLUDED for this cell: national mobile-grooming franchise, but no Baton Rouge location or local operator phone could be verified (verified locations are in TX, AL, NJ, Houston and elsewhere).
- Zoomin Groomin / Woofie's / Hydrodog — EXCLUDED for this cell: national mobile-grooming brands with no Baton Rouge location or local phone found.
- DogGone Good Groomin', (225) 773-6791, Port Allen — EXCLUDED for this cell: its own Facebook description says "A mobile grooming service available in West Baton Rouge and surrounding parishes" with salon appointments at 876 N Jefferson Ave, Port Allen — based in Port Allen, not the city of Baton Rouge required for this cell, and Baton Rouge (70810) coverage is not stated in its own materials.
- Beverly's Grooming, 13520 Perkins Rd Ste E, Baton Rouge 70810, (225) 330-4918 — EXCLUDED: a storefront salon at that Perkins Road address (other listings describe drop-off / pick-up times and in-person visits there; it also absorbed Groomingdale's salon appointments at the same shop). One aggregator listing carries a one-line "Mobile pet groomer" description, but no website of its own confirms a van / come-to-home service — that does not pass the own-materials mobile gate.
- Groomed by Dani, (225) 888-5075 — EXCLUDED: its own website's policies describe clients arriving, drop-off windows and pick-up within an hour, plus boarding / daycare — a salon model, with no mobile / come-to-home service confirmed on its own site.
- Pawfect Shine, Baton Rouge — EXCLUDED: its own site describes an on-site salon (owners wait in a designated lounge area), publishes no phone on its site or listing, and confirms no mobile service — no-phone + storefront-only.
- Royal Treatment Pet Manor & Grooming Spa (190 Lee Dr), Petworks Dog Grooming, Splash and Dash, PetSuites Baton Rouge, PetSmart / Petco grooming, Nature's Groom, Di's Grooming, Paws N Tings, Janan's Dog Grooming, Best N Show Pet Salon, The Dog Stop — EXCLUDED: storefront salons / boarding facilities in Baton Rouge; no mobile / come-to-home service confirmed from their own materials.
- Groovy Grooming, Denham Springs — EXCLUDED: its own description states "No longer a mobile groomer, stationed in denham springs la" — no longer mobile, and a different city.

## ZIP note

- 70810 is the target ZIP for both businesses. Neither publishes a service-ZIP list: Bark & Mane lists cities served (Baton Rouge among them) and Smylie's lists Baton Rouge only, so service_zips contain only the target ZIP — no ZIP was invented for any business.
- Email leads: neither included business publishes an email address on its own site or listings, so the matching leads file is an empty array.
