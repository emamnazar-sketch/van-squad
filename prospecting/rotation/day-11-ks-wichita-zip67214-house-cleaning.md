# Day 11 — Wichita, KS · ZIP 67214 · House cleaning

Cell researched 2026-10-21 (Day 11 run). Insert-ready: **5 businesses**, **2 leads**.
Category label "House cleaning" verified in ~/workspace/van-squad/js/data.js (line 478).
No ZIP expansion needed — 5 qualifying Wichita operators serve 67214. None of the five publishes a ZIP-code service list (they state Wichita / greater-Wichita service by city name), so service_zips = ["67214"] for every insert — no ZIPs were invented.
Dedupe: checked against the live DB via vs_rest.py (795 active rows) AND grep of every file under ~/workspace/van-squad/prospecting/ — no name or phone collisions for any insert. Three strong candidates were found but are ALREADY in the parallel 67206 cell's inserts (see Dedupe section) and were excluded here.

All five inserts are CITY-WIDE Wichita operators (noted per cell brief): each states Wichita-wide / greater-Wichita residential service on its own website, which covers southeast Wichita / 67214. Coordinator: dedupe across waves by name/phone before inserting.

## Insert-ready

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Super Home Maid Cleaning Service | (316) 300-5422 | House cleaning | Wichita | https://www.superhomemaidcleaningservice.com/ | info@superhomemaid.com — own website | High — own site: deep cleaning, maid service and move in/out cleaning "throughout the greater Wichita, KS area," 16+ years in Wichita, phone and email printed on own site; base 530 E Harry St, Wichita 67211 (adjacent to 67214) | Business's own website |
| Air Capital Cleaning Co. | (316) 350-5252 | House cleaning | Wichita | https://aircapitalcleaning.com/ | none found on pages checked | High — own site: "locally owned and operated company based in Wichita, KS," serves homes with recurring/regular, one-time/deep and move-in/out cleanings, "No Travel Fees for Wichita Clients," phone/address (500 E Waterman St, Wichita 67202) on own site | Business's own website |
| Merry Maids of Wichita | (316) 320-8541 | House cleaning | Wichita | https://merrymaids.com/home-cleaners-wichita-ks | none found on pages checked | Medium — locally owned/operated franchise location at 425 E. Harry, Wichita 67211 on its own location page, offering recurring/one-time/deep/move-in-out home cleaning "throughout Wichita"; phone taken from own site (316.320.8541) — NOTE: its Google listing shows a different number, (316) 235-0335, so re-verify phone when the business claims its profile | Business's own website (Wichita location page) + Google Business listing |
| Mida's Maid Service | (316) 295-3513 | House cleaning | Wichita | https://midasmaidservice.com/ | info@midasmaidservice.com — own website | High — own site: started in Wichita, "every home… weekly refresh, a deep one-time clean," serves Wichita and surrounding areas, phone, email and address (2514 W Douglas Ave, Wichita 67203) printed on own site; BBB profile confirms residential + commercial cleaning, Wichita + 20-mile radius | Business's own website + BBB profile |
| Wichita Maid Service | (316) 477-0101 | House cleaning | Wichita | https://wichitamaidservice.com/ | none recorded — the only email seen (EZLocal) was malformed ("wichitamaidservice@gmail..com"), so no address was guessed | High — own site (schedule page fetched): "We Offer Commercial & Residential Cleaning Service," dedicated Residential Cleaning page, address 1020 East English Street Suite A1, Wichita, KS 67211 and phone (316) 477-0101 on own site; BBB/EZLocal confirm local family-owned Wichita metro operator (legal name Clean Maid USA Corp) | Business's own website + BBB profile + EZLocal |

## Leads (2)

- Super Home Maid Cleaning Service — info@superhomemaid.com — source: https://www.superhomemaidcleaningservice.com/
- Mida's Maid Service — info@midasmaidservice.com — source: https://midasmaidservice.com/

## Dedupe / exclusion notes

- **Already in the parallel 67206 cell (found here, excluded as duplicates vs prospecting files):**
  - **Margaret McHenry Maids** — (316) 612-9300 — own site confirms luxury house cleaning, phone on own site, and its corporate office is **1200 E Central, Wichita, KS 67214 — i.e. based inside THIS cell's ZIP** — but it is already in day-11-ks-wichita-zip67206-house-cleaning-inserts.json, so it is NOT repeated here. Coordinator: note its 67206 service_zips entry in that file may warrant adding 67214.
  - **Jenny Maids** — (316) 210-1900 — hellojennymaids@gmail.com on own site — already in the 67206 cell inserts + leads; not repeated.
  - **Shine Bright Cleaning Services** — (316) 665-0326 — own site confirms residential cleaning, greater Wichita, locally owned — already in the 67206 cell inserts; not repeated. (Its own-site email was masked in fetched text; no address guessed.)
- **The Cleaning Authority - Wichita** — EXCLUDED for this cell: its own Wichita page lists its served ZIPs explicitly (67204, 67205, 67206, 67207, 67208, 67209, 67211, 67212, 67215, 67218, 67219, 67220, 67226, 67228, 67230, 67232, 67235, plus surrounding towns) and **67214 is not among them**, so 67214 coverage could not be confirmed from its own materials. Also note its own-site phone is (316) 854-9592, not the (316) 733-7890 shown in listings.
- **Good To Be Clean** — EXCLUDED on category fit: based at 2903 E Central Ave #2, Wichita 67214 with phone (316) 320-6767 on its own site, but its own site's services are carpet cleaning, air-duct cleaning and water/mold/fire restoration — no general recurring house-cleaning offer.
- **Molly Maid of Greater Wichita** — EXCLUDED this run (verification gap): Google/location listings show a locally owned Greater Wichita operator, phone (316) 281-4941, but its own website (mollymaid.com) could not be fetched this run, so residential service + phone could not be verified from the business's own materials.
- **Independence Cleaning Services** — EXCLUDED: listings conflict (one shows Permanently Closed) and no residential house-cleaning confirmation from its own materials.
- **Ramco Building Maintenance, City Wide Facility Solutions, McPherson Building Maintenance, D & A Services, C & C Maintenance** — commercial/janitorial-focused on their own materials; no general residential house-cleaning offer verified. Excluded.
- **Snow White Carpet Cleaning, Stanley Steemer** — carpet/upholstery specialists, not house cleaning. Excluded.
- **Three Maids and A Mop Housekeeping Services, Yami Cleaning Services LLC, Tellez Cleaning services LLc** — public listings with phones but no business-owned website/materials found to confirm residential service. Excluded.
- **MaidPro Wichita, The Maids in Wichita** — Wichita franchise locations based on the west/north side; not counted — this cell was filled with closer, southeast/central Wichita operators. Not researched to insert standard this run.

## Cell-result summary

KS × Wichita × 67214 × House cleaning: **5 insert-ready NEW businesses (4 High, 1 Medium), 2 email leads.** All five are Wichita-based / Wichita-serving operators with in-home residential cleaning confirmed on their own websites and phones on their own sites; all are city-wide operators serving 67214 (none is addressed inside 67214 itself — the one 67214-based operator found, Margaret McHenry Maids, was already claimed by the parallel 67206 cell and is flagged above). No ZIP expansion was used.
