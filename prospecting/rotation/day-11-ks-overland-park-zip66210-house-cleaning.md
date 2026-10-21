# Day 11 — Overland Park, KS · ZIP 66210 · House cleaning

Cell researched 2026-10-21 (Day 11 run). Insert-ready: **5 businesses**, **2 leads**.
Category label "House cleaning" verified in ~/workspace/van-squad/js/data.js (line 478). Overland Park (Johnson County, Kansas City metro) is NEW to the directory — no Kansas businesses and no (913)/(816) phones existed in the live DB before tonight's Day 11 Wichita cells, and none of tonight's Wichita cells overlap this metro. No ZIP expansion was needed: the cell yielded 5 qualifiers, above the 3-business floor. One qualifier (Tidyuppie Cleaning) is addressed inside ZIP 66210 itself; the other four are Overland Park operators whose own materials confirm they serve Overland Park, with their own address ZIPs added to service_zips only where the business itself prints that address.
Dedupe: checked against the live DB via vs_rest.py (821 active rows at check time) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (820 existing business names/phones), INCLUDING tonight's Day 11 Wichita files already on disk — no name or phone collisions for any insert, and no duplicates within the cell. Two same-name franchise collisions were found and skipped (see exclusions: Two Maids, The Cleaning Authority).

## Insert-ready

### High confidence

1. **Tidyuppie Cleaning** — (913) 871-5755 — House cleaning — Overland Park — http://www.tidyuppie.com/
   - Own site: "Tidyuppie is a trusted residential and commercial cleaning service provider that brings a sparkle to your home or office… recurring cleaning service or… one-time cleaning services"; "We Clean For You — Homes up to 3000 sq ft, Apartments…"; deep cleanings, move-in/move-out and post-construction for homes. Own site prints its address inside the target ZIP itself: "7300 W 110th St STE 700, Overland Park, KS 66210" and "Give us a call! (913) 871-5755". Residential in-home service confirmed on the business's own site.
   - Published email: bookings@tidyuppie.com — printed on its own website (http://www.tidyuppie.com/, "Shoot us an email!"). Lead recorded.
   - Confidence: High — phone, email, and 66210 Overland Park address all verified on the business's own website; residential offer confirmed there.
   - Sources: http://www.tidyuppie.com/ ; Google Business listing for Tidyuppie Cleaning, Overland Park (same phone/address).

2. **Best Clean KC** — (913) 318-4664 — House cleaning — Overland Park — https://bestcleankc.com/
   - Own site (titled "House Cleaning in Overland Park & Leawood"): "Keep your home consistently clean with our routine house cleaning services. Whether you need weekly, bi-weekly, or monthly cleaning…"; also Deep Home Cleaning and Move-In Move-Out Cleaning for homes. FAQ: "We specialize in residential house cleaning (weekly, bi-weekly, or monthly)…". Service areas are listed by city name only (Overland Park, Leawood, Prairie Village, Lenexa, Shawnee, Olathe, Kansas City, Lee's Summit, Independence, Blue Springs — no ZIP list). Own site footer prints "Best Clean KC, 10100 W 87th St #207, Overland Park, KS 66212. +1-913-318-4664" and "call or text us at 913-318-4664" — so service_zips = ["66210", "66212"] (target ZIP plus its own printed address ZIP; no other ZIPs invented). Google listing describes it as a second-generation, family-owned company serving Overland Park since 1985.
   - Published email: hello@bestcleankc.com — printed on its own website (https://bestcleankc.com/, contact block: "913-318-4664 <hello@bestcleankc.com>"). Lead recorded.
   - Confidence: High — phone, email, Overland Park address, and residential offer all verified on the business's own website.
   - Sources: https://bestcleankc.com/ ; Google Business listing for Best Clean KC, Overland Park.

3. **All Clean By Anabelle** — (913) 456-6873 — House cleaning — Overland Park — https://allcleanbyanabelle.com/
   - Own site (titled "House Cleaners serving Overland Park and Olathe, KS"): "All Clean By Anabelle provides professional house cleaning in Overland Park, KS… We offer flexible residential cleaning services designed around your home, schedule, and priorities"; services include "recurring house cleaning, deep cleaning, one-time cleaning, and move-in and move-out cleaning". "Proudly Serving Overland Park & Johnson County… including Leawood, Olathe, Shawnee, Lenexa, Prairie Village, and Mission Hills" (city names only — no ZIP list, so service_zips = ["66210"]). Own site footer prints "Eirene Group, LLC, | DBA All Clean By Anabelle | 913-456-6873". Its Google listing gives the Overland Park address 8826 W 87th St #208 and the same phone.
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — phone and residential offer verified on the business's own website; Overland Park address corroborated by its Google listing.
   - Sources: https://allcleanbyanabelle.com/ ; Google Business listing for All Clean By Anabelle, Overland Park.

4. **MaidPro Overland Park** — (913) 254-3290 — House cleaning — Overland Park — https://www.maidpro.com/overlandpark-central/
   - Locally owned franchise location (includable per brief — local operator + local phone, noted here): its own location page states "Locally owned and operated by Jill Crocket, MaidPro Overland Park is the premier house cleaning company in Overland Park. Since 2017…", with full residential sections (weekly/biweekly/monthly house cleaning, deep cleaning, move-in/move-out, cleaning for seniors) and prints "MaidPro Overland Park, 11720 W 95th St, Overland Park, KS 66214. (913) 254-3290" — so service_zips = ["66210", "66214"] (target ZIP plus its own printed address ZIP). Distinct franchise location from MaidPro Beaverton / MaidPro Seattle / MaidPro Salt Lake City in prior cells (different full names, owners, and phones — same near-name pattern those cells used).
   - Published email: an email appears in the location page's contact block but was redacted in the fetched text, so no exact address could be verified and none was recorded. No lead.
   - Confidence: High — local owner, address, phone, and residential offer all verified on the franchise's own Overland Park location page.
   - Sources: https://www.maidpro.com/overlandpark-central/ ; Google Business listing for MaidPro Overland Park (same phone/address).

### Medium confidence

5. **Lulu & Mimi's Cleaning** — (913) 649-6022 — House cleaning — Overland Park — https://www.luluandmimis.com/
   - Own site: "count on local and family-owned Lulu & Mimi's Cleaning to provide the residential cleaning services you need… A Clean Home Is a Happy Home"; services are Recurring Maintenance Cleaning, Top-to-Bottom Deep Cleaning, and Move-In and Move-Out Cleaning; "Bonded and Insured | Over 18 Years of Experience". Its Google Business listing gives the address 7520 Shawnee Mission Pkwy, Overland Park and the phone (913) 649-6022 (a directory corroboration prints "7520 Shawnee Mission Pkwy Ste B, Overland Park, KS 66202" with the same phone) — so service_zips = ["66210", "66202"]. The phone could not be found in the text of its own website this run, so the phone rests on the business's own Google profile — hence Medium. Coordinator may veto if own-site phone confirmation is required.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — residential offer and local family-owned status verified on the business's own website; phone and address ZIP are from its Google Business profile / corroborating listing only.
   - Sources: https://www.luluandmimis.com/ ; Google Business listing for Lulu & Mimi's Cleaning, Overland Park.

## Leads (2)

- Tidyuppie Cleaning — bookings@tidyuppie.com — source: http://www.tidyuppie.com/
- Best Clean KC — hello@bestcleankc.com — source: https://bestcleankc.com/

## Dedupe / exclusion notes

- **No duplicates among the inserts**: all five names/phones checked against the 821 live rows and all 820 prior insert records (including tonight's Day 11 Wichita inserts) with zero collisions, and all five are distinct within the cell.
- **Two Maids (Overland Park)** — (913) 624-9484, 10281 W 87th St Ste 101, Overland Park — residential franchise location, BUT the exact name "Two Maids" is already in the live directory from a prior cell — same name = skip under the dedupe rule. Excluded.
- **The Cleaning Authority (Lenexa location serving Overland Park)** — (913) 667-7132, Lenexa-based — the exact name "The Cleaning Authority" is already in the live directory — same name = skip. Excluded on dedupe and on being based outside Overland Park.
- **The Maids / The Maids in Johnson County** — (913) 648-7331 (and a second listing at (816) 384-0689), 7619 Metcalf Ave, Overland Park — national franchise; the brand name "The Maids" is already in the live directory, and its two Overland Park listings publish conflicting phones. Excluded.
- **Molly Maid of Greater Kansas City** — (913) 956-0340, 6315 W 110th St, Overland Park — national franchise booked through the corporate mollymaid.com platform; the cell filled with locally operated businesses, so the franchise location was not used (same pattern as the Day 3 Portland cell). Not a duplicate — its name/phone are unused.
- **CottageCare Leawood and Overland Park** — (913) 469-0220 — national system whose location is addressed in Kansas City, MO, not Overland Park. Excluded.
- **Ashby Cleaning Service** — (913) 634-6555, 8655 College Blvd, Overland Park, KS 66210 (inside the target ZIP) — its own site is commercial-only: "Commercial Cleaning You Can Count On… offices and churches to apartment communities and commercial facilities" (janitorial/facility cleaning, apartment common areas and move-out units for property managers — no residential house cleaning in homes). Excluded on category fit. Its site shows a redacted email; no lead recorded (leads are only kept for businesses in the cell).
- **Morales House Cleaning Service** — (913) 406-5725, 7575 W 106th St, Overland Park, website moraleshousecleaningserviceks.com — Google listing only this run: the business's own website could not be fetched through the available tools, so no residential confirmation from the business's own materials could be verified. Excluded per the listing-only precedent; a future cell may re-check it.
- **Green Clean KC** — (816) 674-4986, 8220 Travis St, Overland Park, website greencleankc.net — same gap: its own website could not be fetched this run and its listing alone does not confirm a residential house-cleaning offer from its own materials. Excluded this run; re-check candidate.
- **Tina Maids Of Kansas City** — (913) 318-5141 — based in Mission, KS, not Overland Park. Not counted for this cell.
- **Mini Maid** — 13100 W 95th St, Lenexa (family-owned since 1979, serves Overland Park per Expertise.com) — Lenexa-based, not an Overland Park operator. Not counted for this cell.
- **Cleaning Delfa Mendez** — (913) 433-4604, Overland Park — listing only, no business-owned website or materials confirming residential house cleaning. Excluded.
- **Specialty / wrong-category** — Shine of Overland Park (window/pressure/gutter), Brink Exteriors (windows), Blind Cleaning Specialist, Just-Right Guttering, Bin-Go Trash Bin Cleaning, Simply Sleek and Kansas City Valet Sanitation and APFM (commercial/janitorial/valet), Dustgard (contractor). All excluded on category fit.
- **Platforms** — Homeaglow-type cleaner marketplaces were not used; no lead-gen-only listings were counted.

## Cell-result summary

KS × Overland Park × 66210 × House cleaning: **5 insert-ready NEW businesses (4 High, 1 Medium), 2 email leads.** Notes: south Overland Park / Johnson County has a deep residential-cleaning bench, so no ZIP expansion was needed — one qualifier sits inside 66210 itself (Tidyuppie) and four more Overland Park operators serve it. Two otherwise-qualifying franchise locations were lost to the same-name dedupe rule (Two Maids, The Cleaning Authority), one 66210-addressed business failed category fit (Ashby — commercial-only), and two listing-only businesses (Morales, Green Clean KC) could not be confirmed from their own materials this run because their websites would not fetch.
