# Day 25 — Indiana × Evansville × ZIP 47715 × House cleaning

- **Cell:** IN | Evansville | 47715 | House cleaning (exact label, verified in `~/workspace/van-squad/js/data.js`)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 7 qualifying businesses found serving Evansville / 47715. No adjacent-ZIP expansion was required to reach ≥3.
- **Dedupe:** Every candidate name AND phone checked against (a) /tmp/day25-open.json (2,173 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. No name or phone matches for the 7 businesses below. Same-brand franchise locations already in the DB are different cities/operators with different phones (e.g. Merry Maids of Fort Wayne, Boise, Ann Arbor, etc.). A "Clean Suite" mention in a Day 15 Austin exclusion note is a different, unrelated Austin operation — not this Evansville business.
- **Phone rule:** All phones are Evansville local (812) numbers, verified on the business's own website where fetchable; none is toll-free-only. Where a Google listing differed from the business's own site, the own-site number was used (Merry Maids — see note).
- **Mobile/on-site:** House cleaning is performed inside the customer's home; each business's own materials confirm residential home cleaning in Evansville.
- **service_zips:** No business below publishes a ZIP list that could be copied verbatim. Daylight Cleaning states only "Every Indiana ZIP within 30 miles of Evansville" (not converted into ZIPs), Merry Maids lists city names only, and Dirt Finders lists counties only. All others get ["47715"] only — city/county service-area names were NOT converted into ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Dirt Finders Maid Service | (812) 402-3060 | House cleaning | Evansville | http://dirtfinders.net/ | — none published on its own site that could be verified | High — own site: "Local Family Owned & Operated Since 2009," "trusted name in house cleaning," residential cleaning / weekly maid / bi-weekly house-cleaning / deep / move-in-out in customers' homes, serving Vanderburgh/Warrick/Posey counties, footer "Evansville - (812) 402-3060, 708 Stanley Avenue Evansville, IN 47711" | http://dirtfinders.net/ |
| Merry Maids of Evansville | (812) 694-3599 | House cleaning | Evansville | https://merrymaids.com/home-cleaners-evansville-in | — none published on its own location page that could be verified | High — own Evansville page: business block "Merry Maids of Evansville," "For over 30 years, Merry Maids of SW Indiana has proudly served the residential cleaning needs of the tri-state area," routine and deep home cleaning, address 125 N Weinbach Ave Suite 530, Evansville, IN 47711, "Call 812.694.3599" — own-site number used over the differing Google-listing number (812) 407-2547 | https://merrymaids.com/home-cleaners-evansville-in |
| Clean Suite | (812) 424-9681 | House cleaning | Evansville | https://thecleansuite.com/residential-cleaning-services/ | — none published on its own site that could be verified | High — own residential page: "Clean Suite Residential," continuing Haller's Cleaning Service (serving Evansville Tri-State since 1977), "families throughout the Evansville Tri-State area have trusted Haller's Cleaning Service to keep their homes cleaner," recurring housekeeping, deep, move-in/out cleaning in homes, phone (812) 424-9681 printed on the page; Google listing for Haller's / Clean Suite at 315 SE 1st St, Evansville gives the same phone | https://thecleansuite.com/residential-cleaning-services/ |
| J & C Cleaning Service | (812) 604-8043 | House cleaning | Evansville | http://www.jandccleaningservice.com/ | — none published on its own site that could be verified | Medium — own site is janitorial-leaning but explicitly residential: "committed to quality contract cleaning services for commercial and residential facilities" and a "GENERAL CLEANING FOR OFFICE AND HOME" service, address "J & C Cleaning Service, 1167 Parrett Street, Evansville, IN 47713. 8126048043" printed on the site; graded Medium for the commercial lean | http://www.jandccleaningservice.com/ |
| Evansville Cleaning Services | (812) 401-4333 | House cleaning | Evansville | http://www.evansvillecleaningservices.com/ | — none published on its own site that could be verified | High — own site: "Home and business cleaning in Evansville, Indiana," "FOR YOUR HOME — Our residential cleaning helps keep your everyday spaces fresh," living spaces/kitchens/bathrooms, FAQ "Evansville Cleaning Services provides residential and commercial cleaning in Evansville, Indiana," "Call (812) 401-4333" printed repeatedly; run by an Evansville local, 20+ years | http://www.evansvillecleaningservices.com/ |
| Karcher Cleaners LLC | (812) 316-6340 | House cleaning | Evansville | http://karchercleaners.com/ | chelsey@karchercleaners.com — http://karchercleaners.com/ (own site contact block) | High — own site: woman-owned natural cleaning company based in Evansville, testimonials all about cleaning customers' houses ("She does an excellent job of cleaning my home," "Chelsey cleans our house"), recurring and move-in/out home cleans, footer "Karcher Cleaners, 714 Runnymede Avenue, Evansville, IN 47714-2008. 8123166340 / Email: chelsey@karchercleaners.com / Call or Text: 812.316.6340" | http://karchercleaners.com/ |
| Daylight Cleaning Co. | (812) 419-2463 | House cleaning | Evansville | https://daylightcleaningco.com/locations/evansville.html | hello@daylightcleaningco.com — https://daylightcleaningco.com/locations/evansville.html (own site contact block) | High — own Evansville page: "House Cleaning in Evansville, IN," "Does Daylight Cleaning clean homes in Evansville? Yes. Daylight Cleaning cleans homes anywhere in Evansville," standard house cleaning weekly/2-week/4-week plus deep and move-in/out cleans, "Every Indiana ZIP within 30 miles of Evansville" (covers 47715), contact block "812-419-2463, hello@daylightcleaningco.com, 214 Sycamore St, Evansville, IN 47708" | https://daylightcleaningco.com/locations/evansville.html |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Karcher Cleaners LLC | chelsey@karchercleaners.com | http://karchercleaners.com/ |
| Daylight Cleaning Co. | hello@daylightcleaningco.com | https://daylightcleaningco.com/locations/evansville.html |

2 leads — see `day-25-in-evansville-zip47715-house-cleaning-leads.json`.

## Excluded

- **Office Pride (Evansville)** — commercial office/facility cleaning only; no residential house cleaning.
- **Clean Team (Evansville)** — commercial only on its own Evansville page: corporate buildings, clients "ranging from 100-10,000 employees."
- **Executive Cleaning Services (Evansville)** — its own Evansville page states "We do not service residential properties at this time"; also a national 1-800 number.
- **Jani Clean / Jani-Clean Inc** — janitorial contractor; no residential house cleaning confirmed from its own materials.
- **Bilder's Cleaning Service, Inc.** — its own description is commercial janitorial, construction cleanup, and commercial/residential lawn care — not house cleaning.
- **Stanley Steemer (Evansville); Evansville Kwik Dry Total Cleaning** — carpet / upholstery / tile & grout / air-duct specialists, not general residential house cleaning.
- **Oud Cleaning Services** — Google snippet said commercial/residential, but its own site's mission is commercial janitorial founded from a medical setting, with a commercial page and no residential house cleaning confirmed there — own materials override, excluded.
- **Evergreen Clean LLC** — own website fetched with no phone and no residential house-cleaning confirmation (generic cleaning copy, a commercial-client carpet testimonial); the (812) 598-0168 number exists only on a Google listing — fails the own-materials gate, excluded.
- **Goodnight Cleaner's** — own website returned 404 on fetch; no verifiable residential confirmation from its own materials, excluded.
- **Christina's Cleaning Services; Best Klean Cleaning Service; Somebody's Cleaning Service; Maid It Shine LLC** — listing/social-only, no verifiable own website confirming residential house cleaning in Evansville, excluded.
- **Joe's Cleaning Service** — its own listing description states "We are a subsidiary of Angi's Leads and HomeAdvisor" — lead-gen, excluded by rule.
- **Homeaglow / Thumbtack / Angi marketplace pros** — national lead-gen marketplaces with no local operator identity; excluded by rule.

## Files

- `day-25-in-evansville-zip47715-house-cleaning.md` (this file)
- `day-25-in-evansville-zip47715-house-cleaning-inserts.json` — 7 businesses + 7 listings, validated with `python3 -m json.tool`
- `day-25-in-evansville-zip47715-house-cleaning-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
