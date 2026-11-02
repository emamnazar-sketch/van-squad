# Day 23 — Mississippi, Meridian, ZIP 39301 — House cleaning

Cell: MS | Meridian | 39301 | House cleaning
Expansion note: Only 2 qualifying businesses are located in 39301 itself. The cell was expanded to adjacent Meridian ZIP 39305 for the third business (Rabbit's Cleaning Services, LLC, Meridian address in 39305, serving the Meridian area including 39301), as permitted when a ZIP yields fewer than 3 qualifying businesses.

## Qualifying businesses (3)

| Name | Phone | Category | City | Website | Published email + source URL | Confidence + one-line reason | Source URL | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|---|
| Southern Maids Housekeeping LLC | (601) 616-8810 | House cleaning | Meridian | https://southernmaidshousekeeping.com/ | southernmaidshousekeeping@gmail.com — https://www.southernmaidshousekeeping.com/blank-2 | High — phone and email published on its own contact page; own homepage gives its Meridian address as 5441 Fred Haguewood Road, Meridian, MS 39301-8413 and its listing description (business-supplied) says "Residential and Commercial Cleaning Service" | https://www.southernmaidshousekeeping.com/blank-2 (phone + email); https://southernmaidshousekeeping.com/ (address / housekeeping at clients' homes) | No name or phone match in dedupe-open.json (live DB snapshot) or any file in ~/workspace/van-squad/prospecting/ |
| Rabbit's Cleaning Services, LLC | (601) 513-4414 | House cleaning | Meridian | http://rabbitscleaningservices.com/ | harewalter@yahoo.com — http://rabbitscleaningservices.com/contact/ | High — own homepage offers "a thorough top-to-bottom deep cleaning service for your home, office, or commercial property"; phone and email published on its own contact page (Meridian, MS 39305 address) | http://rabbitscleaningservices.com/contact/ (phone + email); http://rabbitscleaningservices.com/ (home cleaning confirmation) | No name or phone match in dedupe-open.json or any prospecting file. Located in adjacent ZIP 39305 — see expansion note above. BBB also lists it under House Cleaning, (601) 513-4414, 11111 Suqualena Drive Ext, Meridian, MS 39305-8414 |
| SERVPRO of Meridian | (601) 693-7300 | House cleaning | Meridian | https://www.servpro.com/locations/ms/servpro-of-meridian | None published on its location pages found | Medium — locally owned franchise (owners named on its own site) at 329 Hawkins Crossing Road, Meridian, MS 39301; its own general-cleaning page offers residential home cleaning ("Your Residential Home Cleaning Services — Let our professional team provide a heavy-duty cleaning service to your home") and its location page footer describes "expert residential and commercial cleaning"; restoration is its primary trade, hence Medium | https://www.servpro.com/locations/ms/servpro-of-meridian/services/cleaning/general (phone (601) 693-7300, address, residential cleaning) | No name or phone match in dedupe-open.json or any prospecting file. Google listing shows a second number, (601) 769-0029; the number used here is the one published on the business's own site. Not a call-center listing: it has a local Meridian address, named local owners, and a local 601 phone |

## EXCLUDED

| Name | Phone seen | Reason excluded |
|---|---|---|
| Spiffy's Cleaning Crew | (769) 327-3060 | The website linked to the Meridian listing (spiffycleaningcrew.com) is a different business — Spiffy Cleaning Professionals in Morris County, NJ (Parsippany, NJ address, (908) 967-5161, serving NJ towns only). Website/phone mismatch; no own materials confirm home cleaning in Meridian, MS. |
| Suttles Cleaning Crew | (601) 490-3840 | Google listing only (category "Cleaning Service"); no website or other own materials found confirming cleaning at customers' homes. Fails the own-materials confirmation gate. |
| Glory Commercial and Residential Cleaning Services LLC | (769) 298-8477 | BBB lists it under House Cleaning serving Lauderdale County, but no own website or other own materials were found confirming home cleaning. Fails the own-materials confirmation gate (borderline — BBB-only evidence). |
| Quality Affordable Cleaning Service | (601) 880-1399 | BBB category is only "Cleaning Services" (8218 King Rd, Meridian, MS 39305); no own materials confirming house cleaning at homes. |
| Squeaky Clean Cleaning Service, LLC | (601) 480-4134 | BBB/Google category is janitorial / "Cleaning Services" only, and the website linked to the listing (squeakycleancleaning.weebly.com) is a Greenfield/Ware-area cleaner with a (413) phone — website mismatch; no own materials confirm Meridian home cleaning. |
| Long Cleaning Solutions LLC | (601) 934-9427 | Its own site shows it is an exterior power-washing business ("House Washing and Roof Cleaning") — exterior washing only, not interior house cleaning. |
| CLEANING WELL SO YOU CAN TELL | No public phone found | Its HomeAdvisor self-description confirms residential cleaning of houses in the Meridian area, but no verifiable public phone is published (HomeAdvisor hides it). Excluded: no verifiable public phone. |
| Godwin Facility Services | (251) 434-4188 | Sole phone is out-of-state (251, Alabama) — excluded under the MS area-code rule; also commercial janitorial / window / pressure washing, not house cleaning. |
| Gardner's Carpet Cleaning | (601) 483-1785 | Carpet, upholstery and floor cleaning specialist only — not general house cleaning. |
| Jazz's Korner | (601) 595-4718 | Listing category is Cleaning Service / Carpet Cleaner; no own materials confirming house cleaning. |
| The Work Dog Crew | (601) 416-2680 | BBB categories are commercial and estate cleaning only; no house-cleaning confirmation from own materials. |
| Clean Air Services | (601) 693-0371 | HVAC / air-duct environmental service, not house cleaning. |
| Imperial Cleaners & Laundry; Meridian Cleaners | (601) 485-3000; (601) 485-9244 | Storefront dry cleaners / laundromats — storefront-only, not home cleaning. |
| Nicole's Cleaning & Sanitation Services LLC | (662) 660-2044 | BBB lists House Cleaning, but the business is based in Philadelphia, MS (39350), not Meridian, and no Meridian service-area or own-materials confirmation was found for ZIP 39301. |

## Notes

- All phones are in Mississippi area codes (601) and were taken from the business's own website where one exists.
- No email was guessed: the two leads come verbatim from the businesses' own contact pages (see table).
- Dedupe was checked against ~/workspace/goals/van-squad-directory-website/hidden_files/day23-work/dedupe-open.json (names + phones) and by grep against every file in ~/workspace/van-squad/prospecting/, including tonight's day-23 files: no matches for any included name or phone.

## Coordinator note (2026-11-02, insert time)
SERVPRO of Meridian — EXCLUDED by the coordinator before insert. Standing precedent across prior days and tonight's Hattiesburg cell: SERVPRO is a restoration-first franchise whose general cleaning is a restoration adjunct, not a regular house-cleaning service. The other 2 businesses in this cell were inserted.
