# Day 11 — Lawrence, KS · ZIP 66044 · House cleaning

Cell researched 2026-10-21 (Day 11 run, Wave 3). Insert-ready: **7 businesses**, **2 leads**.
Category label "House cleaning" verified in ~/workspace/van-squad/js/data.js (line 478). Lawrence (Douglas County) is NEW to the directory — no Lawrence businesses and no (785) phones from this metro existed in the live DB before tonight. No ZIP expansion was needed: the cell yielded 7 qualifiers, above the 3-business floor. One qualifier (Marvelous Mom's Cleaning LLC) is addressed inside ZIP 66044 itself on its own website; the other six are Lawrence-area operators whose own materials confirm they serve Lawrence homes, with their own printed address ZIPs added to service_zips only where the business itself prints that address (MaidPro Lawrence and Merry Maids of Lawrence, both 66047).
Dedupe: checked against the live DB via vs_rest.py (852 active rows at check time) AND every file under ~/workspace/van-squad/prospecting/ INCLUDING all Day-11 files on disk — no name or phone collisions for any insert, and no duplicates within the cell. Franchise-name check: "MaidPro Lawrence" and "Merry Maids of Lawrence" are distinct location names, not the exact names of any existing row (prior cells used the same location-name pattern for MaidPro Beaverton/Seattle and Merry Maids of Boise/Wichita/etc.).

## Insert-ready

### High confidence

1. **Buckingham Palace Cleaning Services** — (785) 842-6264 — House cleaning — Lawrence — http://www.buckinghampalacecleaning.com/
   - Own site (titled "House Cleaning | Residential Cleaners | Lawrence, KS"): "contact the professionals at Buckingham Palace Cleaning Services… Cleaning Houses of All Sizes… From mansions with many rooms to single-bedroom houses"; "Call (785) 842-6264 for a FREE estimate on any of our residential cleaning services"; "We are a local, woman owned, small business and have been serving Lawrence for 40 years." Its Google listing gives the address 2441 W 6th St, Lawrence (street address only — no ZIP printed on the pages checked, so service_zips = ["66044"]).
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — phone and residential in-home offer verified on the business's own website; locally owned Lawrence operator.
   - Sources: http://www.buckinghampalacecleaning.com/ ; Google Business listing for Buckingham Palace Cleaning Services, Lawrence (same phone).

2. **Marvelous Mom's Cleaning LLC** — (785) 979-1525 — House cleaning — Lawrence — https://marvelousmomscleaning.com/
   - Own site (titled "House Cleaning in Lawrence, Kansas"): "Residential Services… expert Lawrence KS house cleaning services that help you maintain an organized and welcoming home"; plus Deep Clean, Event, and Move out/in cleaning for homes. Own site prints "Marvelousmomscleaning.com, 1414 W 6th St, Lawrence, KS 66044" — inside the target ZIP itself — and "you can reach out to us at 7859791525", matching its Google listing phone (785) 979-1525 (a second number, 785-615-7512, also appears in the site's footer line; the listing-matching number was used). Woman-owned and operated per its listing description.
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — residential offer, 66044 Lawrence address, and phone all verified on the business's own website.
   - Sources: https://marvelousmomscleaning.com/ ; Google Business listing for Marvelous Mom's Cleaning LLC, Lawrence (same phone).

3. **R&D Cleaning Co.** — (785) 371-3363 — House cleaning — Lawrence — https://rndcleaning.com/
   - Own site: "We're a family-owned cleaning company based in Lawrence, KS… Whether it's your home, office, or rental property, we show up…"; "we're not a franchise—we're your neighbors. Based right here in Lawrence, Kansas… family-built, locally owned"; its booking flow is for the customer's home ("Tell us about your home and cleaning needs… leaving your home spotless"); testimonials confirm house cleaning in homes. Own site CONTACT block prints "Phone : (785) 371-3363". Service areas are listed by city name only (Lawrence and Northeast Kansas region — no ZIP list, so service_zips = ["66044"]).
   - Published email: Cesar@rndcleaning.com — printed on its own website (https://rndcleaning.com/, CONTACT block). Lead recorded.
   - Confidence: High — phone, email, Lawrence base, and residential offer all verified on the business's own website.
   - Sources: https://rndcleaning.com/

4. **MaidPro Lawrence** — (785) 380-2284 — House cleaning — Lawrence — https://www.maidpro.com/lawrence/
   - Locally owned franchise location (includable per brief — local operator + local phone, noted here): its own location page states "Locally owned and operated by Casey Worcester, MaidPro Lawrence is the premier house cleaning company in Lawrence. Since 2012…", with full residential sections (weekly/biweekly/monthly house cleaning, deep cleaning, move-in/move-out, cleaning for seniors) and prints "MaidPro Lawrence, 2859 Four Wheel Drive, Suite 16F, Lawrence, KS 66047. (785) 380-2284" — so service_zips = ["66044", "66047"] (target ZIP plus its own printed address ZIP). Distinct location from MaidPro Overland Park / MaidPro Beaverton / MaidPro Seattle / MaidPro Salt Lake City in prior cells (different full names, owners, and phones).
   - Published email: an email appears in the location pages' "Connect with us" block but was redacted in the fetched text, so no exact address could be verified and none was recorded. No lead.
   - Confidence: High — local owner, address, phone, and residential offer all verified on the franchise's own Lawrence location page.
   - Sources: https://www.maidpro.com/lawrence/ ; Google Business listing for MaidPro Lawrence (same phone/address).

### Medium confidence

5. **Merry Maids of Lawrence** — (785) 508-3680 — House cleaning — Lawrence — https://merrymaids.com/home-cleaners-lawrence-ks
   - Locally owned franchise location (includable per brief — local operator + local phone, noted here): its own location page names the local owners ("Kim and Stanton Hinkly have been proud owners of Merry Maids franchises since May 2000"), describes premium home cleaning for Lawrence, and prints "Merry Maids of Lawrence KS, 2201 West 25th St, Suite D, Lawrence, KS 66047. 7855083680" — so service_zips = ["66044", "66047"], phone formatted (785) 508-3680 from the location page itself. Two Google listings for this location publish DIFFERENT phones ((785) 289-9916 and (785) 301-0821), neither matching the location page — hence Medium; the business's own location-page phone was used per the own-site-first rule. Coordinator may veto if the listing conflict is disqualifying.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — local owners, address, and residential offer verified on the franchise's own Lawrence location page; public listings publish conflicting phones.
   - Sources: https://merrymaids.com/home-cleaners-lawrence-ks ; Google Business listings for Merry Maids / Merry Maids of Lawrence (conflicting phones, noted above).

6. **A Polished Home** — (785) 380-3138 — House cleaning — Lawrence — http://apolishedhome.com/
   - Own site (titled "Weekly and Biweekly House Cleaning Services for Lawrence and Manhattan KS"): "Providing Recurring House Cleaning Services in Manhattan KS, Lawrence KS, and surrounding areas of each… We offer house cleaning services… in Lawrence, KS, Manhattan, KS… all of our maids are W-2 employees… fully insured and bonded"; "Call for your Free Estimate (785) 380-3138" repeated throughout. Its printed office address is in Manhattan, KS (3266 Kimball Ave — no ZIP printed), so it is a Manhattan-based operator whose own site explicitly sells recurring house cleaning in Lawrence — hence Medium, and service_zips = ["66044"] only (no Lawrence ZIP list printed; cities named only). A second phone (785-200-3646) appears once in a footer block; the consistently repeated (785) 380-3138 was used.
   - Published email: info@apolishedhome.com — printed on its own website (http://apolishedhome.com/, footer/contact block). Lead recorded.
   - Confidence: Medium — phone, email, and Lawrence residential offer verified on the business's own website; headquarters is in Manhattan, not Lawrence.
   - Sources: http://apolishedhome.com/

7. **Down to Earth Natural Cleaning** — (785) 218-0255 — House cleaning — Lawrence — http://www.downtoearthnaturalclean.com/
   - Own site: "Natural Solutions for a Beautifully Clean and Peaceful Home… Our Home Services… our home and office cleanings are tailored to your needs… Our move-in/move-out cleaning services… decluttering, organizing, and cleaning your home" — residential in-home service confirmed on the business's own site. The phone was not in the fetched homepage text; (785) 218-0255 rests on its Google Business listing (903 Hilltop Dr, Lawrence) and is corroborated by a Merc Co-op listing in the business's own words ("Down to Earth Natural Cleaning. Detailed, professional home cleaning… please call 785-218-0255") — hence Medium.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — residential offer verified on the business's own website; phone is from its Google Business profile with an independent corroboration, not its own site text this run.
   - Sources: http://www.downtoearthnaturalclean.com/ ; Google Business listing for Down to Earth Natural Cleaning, Lawrence.

## Leads (2)

- R&D Cleaning Co. — Cesar@rndcleaning.com — source: https://rndcleaning.com/
- A Polished Home — info@apolishedhome.com — source: http://apolishedhome.com/

## Dedupe / exclusion notes

- **No duplicates among the inserts**: all seven names/phones checked against the 852 live rows and all prior prospecting files (including tonight's Day 11 Wichita, Overland Park, Shawnee, Olathe, and Kansas City inserts) with zero collisions, and all seven are distinct within the cell.
- **Wheat State Cleaning** — (785) 592-3337, 3514 Clinton Parkway, Lawrence, wheatstatecleaning.com — its own website discloses a referral-agency / matching model ("Every independent cleaning provider matched through Wheat State Cleaning…", FAQ: "How does your referral agency model work? We vet the top independent cleaning professionals in the Lawrence area and match them to your job") — a lead-gen/matching platform with no direct local cleaning operator of its own. Excluded per the lead-gen rule.
- **JAN-PRO Cleaning & Disinfecting (Lawrence)** — (913) 303-0570, 810 Pennsylvania St, Lawrence — commercial janitorial/disinfecting franchise system; no residential house-cleaning offer confirmed. Excluded on category fit.
- **Elbow Grease** — (785) 691-5780, 1905 W 3rd St, Lawrence, cleanwithelbowgrease.com — Google listing only this run: the business's own website could not be fetched through the available tools, so no residential confirmation from the business's own materials could be verified. Excluded per the listing-only precedent; a future cell may re-check it.
- **Natural Cleaning Solutions By Vaci** — (785) 727-0117, 826 Kentucky St, Lawrence, vacicleaning.com — same gap: its own website could not be fetched this run and its listing alone does not confirm a residential house-cleaning offer from its own materials. Excluded this run; re-check candidate.
- **Dirt Busters LLC** — (785) 764-5645, 540 Perry St, Lawrence, dirtbusterslkn.com — listed as a janitorial service/contractor; its domain points to a Lake Norman operation and no Lawrence residential house-cleaning offer could be confirmed from its own materials. Excluded. (Not the same business as R&D Cleaning Co., which uses "Dust Busters" only as a tagline on its own Lawrence site.)
- **Aveena Natural Cleaning Services** — (785) 841-3133, 239 Elm St, Lawrence — listing only, no business-owned website or materials confirming residential house cleaning. Excluded.
- **Tinkbell's Cleaning Service** — (785) 856-0886, 2500 W 6th St, Lawrence — listing only, no website. Excluded.
- **Specialty / wrong-category** — The Window Guy and Hawk Wash Window Cleaning (windows), Heartland Pro Wash (pressure washing), HappyNest Laundry Service (laundry pickup), Scotch Fabric Care Services (dry cleaner). All excluded on category fit.
- **Platforms** — Homeaglow Lawrence and HomeAdvisor matching pages were not used; no lead-gen-only listings were counted.

## Cell-result summary

KS × Lawrence × 66044 × House cleaning: **7 insert-ready NEW businesses (4 High, 3 Medium), 2 email leads.** Notes: Lawrence has a deep local residential-cleaning bench, so no ZIP expansion was needed — one qualifier sits inside 66044 itself (Marvelous Mom's, 1414 W 6th St) and two franchise locations print 66047 addresses while serving all of Lawrence. One prominent Lawrence name was lost to the lead-gen rule (Wheat State Cleaning — its own site discloses a referral-agency model), two listing-only businesses (Elbow Grease, Vaci Cleaning) could not be confirmed from their own materials this run because their websites would not fetch, and Merry Maids of Lawrence carries a phone conflict between its own location page (used) and its Google listings (flagged Medium).
