# Day 25 — Indiana × Fort Wayne × ZIP 46815 × House cleaning

- **Cell:** IN | Fort Wayne | 46815 | House cleaning (exact label)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 10 qualifying businesses found serving Fort Wayne / 46815. No adjacent-ZIP expansion.
- **Dedupe:** Every candidate name AND phone checked against (a) /tmp/day25-open.json (2,135 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. No name or phone matches for the 10 businesses below. Same-brand franchise locations already in the DB are different cities/operators with different phones (e.g. MaidPro Beaverton/Seattle/Chicago, Merry Maids of Ann Arbor/Boise, The Cleaning Authority - Boise/Ann Arbor/Troy, CottageCare Menomonee Falls). A DB business named simply "Spring Cleaning" is not Sullivan's Spring Cleaning (different name and phone). "Maid Perfect" and "Maids Perfect Clean" are two distinct businesses — different phones, different websites, different operators — not a duplicate pair.
- **Phone rule:** All phones are Fort Wayne local (260) numbers, verified on the business's own website where fetchable; none is toll-free-only. Where a Google listing differed from the business's own site, the own-site number was used (Hoosier Maids, Merry Maids — see notes).
- **Mobile/on-site:** House cleaning is performed inside the customer's home; each business's own materials confirm residential home cleaning in Fort Wayne.
- **service_zips:** Only The Cleaning Authority - Fort Wayne publishes a ZIP list (copied in full, 46815 first). All others get ["46815"] only — city/neighborhood service-area names were NOT converted into ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Sullivan's Spring Cleaning | (260) 424-1414 | House cleaning | Fort Wayne | https://residentialcleaningfortwayne.com | — none published that could be verified | Medium — business name and its own domain (residentialcleaningfortwayne.com) are explicitly residential cleaning in Fort Wayne; Google listing gives address 3030 Lake Ave Ste 16, Fort Wayne and this phone; graded Medium because the business's own site could not be fetched directly in this run | https://residentialcleaningfortwayne.com (via its Google listing) |
| Spot On Clean, LLC | (260) 403-5372 | House cleaning | Fort Wayne | https://www.fortwaynecleaninglady.com/ | — none published on its own site that could be verified | Medium — own site prints "Phone: 260-403-5372" and shows residential living-room/bathroom cleaning; its Google listing describes it as Fort Wayne's home and business cleaning service that leaves "your home clean" on weekly/bi-weekly/monthly visits; graded Medium because the fetched homepage copy is thin | https://www.fortwaynecleaninglady.com/ |
| Hoosier Maids | (260) 440-8695 | House cleaning | Fort Wayne | https://hoosiermaids.com/ | — none published on its own site that could be verified (support@hoosiermaids.com was seen only on a third-party presentation upload, so it was NOT used as a lead) | High — own site: "Fort Wayne House Cleaning Company," "Locally Owned and Operated," "Residential Cleaning — Cleaning your home is our specialty," recurring/deep/move-in-out cleans in customers' homes, service areas include Maplecrest (the 46815 area), and footer "Hoosier Maids - Cleaning Services, 4605 Weatherside Run, Fort Wayne, IN 46804. +1 260-440-8695 / Call (260) 440-8695" — own-site number used over an older Google-listing number, (260) 487-6243 | https://hoosiermaids.com/ |
| Maid Perfect | (260) 484-8040 | House cleaning | Fort Wayne | http://www.maidperfect.com/ | — none published on its own site that could be verified | High — own site: "Your House isn't clean until its... Maid Perfect Clean!", residential home-cleaning testimonials from Indiana homeowners, "Maid Perfect, 6055 Stoney Creek Drive, Fort Wayne, IN 46825. (260)484-8040" printed on the site; Expertise notes it is locally owned, serving Fort Wayne since 1988, with one-time and recurring cleaning for residential clients | http://www.maidperfect.com/ |
| Purely Fort Wayne Cleaners | (260) 254-8006 | House cleaning | Fort Wayne | http://www.purelyfortwaynecleaners.com/ | info@purelyfortwaynecleaners.com — http://www.purelyfortwaynecleaners.com/ (own site contact block) | High — own site: "Veteran-owned residential and commercial cleaning company serving Fort Wayne and Allen County," dedicated House Cleaning / Routine / Deep services "For Homes," address 5534 Saint Joe Road, Fort Wayne, IN 46835, phone +1 260-254-8006 and email printed repeatedly on the site | http://www.purelyfortwaynecleaners.com/ |
| MaidPro Fort Wayne | (260) 527-3065 | House cleaning | Fort Wayne | https://www.maidpro.com/fort-wayne/ | — none published on its own location page that could be verified | High — own Fort Wayne location page: "MaidPro Fort Wayne is proudly locally owned and operated," premier house cleaning in customers' homes with a 49-Point Checklist, address 2612 W. State Blvd, Fort Wayne, IN 46808, phone (260) 527-3065 printed on the page | https://www.maidpro.com/fort-wayne/ |
| Maids Perfect Clean | (260) 229-7467 | House cleaning | Fort Wayne | https://www.maidsperfectclean.com/ | khearld0@gmail.com — https://www.maidsperfectclean.com/ (own site contact block) | High — own site: "family-owned, dependable cleaning across Fort Wayne," "Standard residential cleaning" plus deep and move-in/out cleans in homes, "We proudly serve residential and light commercial customers throughout Fort Wayne," contact block prints (260)2297467 / 260-229-7467 and the email. Distinct from Maid Perfect above (different operator, phone, and site) | https://www.maidsperfectclean.com/ |
| Mel's Helpful Hand Cleaning Co. | (260) 417-4491 | House cleaning | Fort Wayne | https://melshelpfulhand.com/ | helpfulhandcleaningco@gmail.com — https://melshelpfulhand.com/about/ (own site business block) | High — own About page: "Business: Mel's Helpful Hand Cleaning Co. / Phone: +1-260-417-4491 / Email helpfulhandcleaningco@gmail.com / Description: Thoughtful residential cleaning for Fort Wayne and a 40 mile radius" — a 40-mile radius from Fort Wayne covers 46815; solo local owner cleaning in customers' homes | https://melshelpfulhand.com/about/ |
| The Cleaning Authority - Fort Wayne | (260) 231-1262 | House cleaning | Fort Wayne | https://www.thecleaningauthority.com/fort-wayne/ | — none published on its own Fort Wayne page that could be verified | High — own Fort Wayne page: house cleaning / recurring residential cleaning in Fort Wayne homes, "call us at (260) 231-1262" printed repeatedly, address 2802 Congressional Parkway Suite H, Fort Wayne, IN 46808, and a published served-ZIP list that explicitly includes 46815 (service_zips below copy that full published list, 46815 first) | https://www.thecleaningauthority.com/fort-wayne/ |
| Merry Maids of Fort Wayne | (260) 412-0683 | House cleaning | Fort Wayne | https://merrymaids.com/home-cleaners-fort-wayne-in | — none published on its own location page that could be verified | High — own Fort Wayne location page: "Merry Maids® of Fort Wayne" (business block), professional home cleaning in customers' homes, address 7530 Disalle Blvd, Fort Wayne, IN 46825, "Call 260.412.0683" printed on the page — own-site number used over differing Google/BBB numbers, (260) 361-8711 / (260) 484-7920 | https://merrymaids.com/home-cleaners-fort-wayne-in |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Purely Fort Wayne Cleaners | info@purelyfortwaynecleaners.com | http://www.purelyfortwaynecleaners.com/ |
| Maids Perfect Clean | khearld0@gmail.com | https://www.maidsperfectclean.com/ |
| Mel's Helpful Hand Cleaning Co. | helpfulhandcleaningco@gmail.com | https://melshelpfulhand.com/about/ |

3 leads — see `day-25-in-fort-wayne-zip46815-house-cleaning-leads.json`.

## Excluded

- **CottageCare Ft. Wayne** — national chain whose own Ft. Wayne page (2793 Maplecrest Rd, Fort Wayne, IN 46815) splits contact across a national 1-800 number, a pricing line (260-483-9973), and a separate current-customer number (260-486-8844), with no single clear local-operator phone; excluded following the same CottageCare exclusions in prior cells (Day 6 Colorado Springs, Day 12 Oklahoma City).
- **Reliable Cleaning Service** — own description: "an established, Christian-focused commercial janitorial company" — commercial-only, no residential house cleaning.
- **Mid-American Cleaning Contractors** — commercial facilities/janitorial only (businesses, medical, schools, manufacturing); no residential service.
- **Referral Cleaning & Restoration; Distinctive Cleaning & Restoration; Ross Cleaning & Restoration** — carpet / upholstery / tile / restoration specialists, not general residential house cleaning.
- **Gabet Cleaning Services** — carpet & upholstery, air duct, water restoration and tile/grout only; not house cleaning.
- **My Main Maid (Janitorial Services)** — its own website prints no phone in the fetched pages; the only phone found is a Google-listing (574) number (South Bend area, not Fort Wayne local) — no verifiable local phone from its own materials, excluded.
- **Escobar Cleaning Services LLC** — Fort Wayne presence found only as a HomeAdvisor listing with no phone or own Fort Wayne website; the similarly named website found is a Virginia business — unverified for this cell, excluded.
- **D-Fresh Cleaning Services; Sparkling Cleaning Services; ALL Love Cleaning; Rose Cleaning LLC** — listing/social-only, no verifiable own website confirming residential house cleaning in Fort Wayne, excluded.
- **Homeaglow / Thumbtack / Angi marketplace pros** — national lead-gen marketplaces with no local operator identity; excluded by rule.

## Files

- `day-25-in-fort-wayne-zip46815-house-cleaning.md` (this file)
- `day-25-in-fort-wayne-zip46815-house-cleaning-inserts.json` — 10 businesses + 10 listings, validated with `python3 -m json.tool`
- `day-25-in-fort-wayne-zip46815-house-cleaning-leads.json` — 3 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
