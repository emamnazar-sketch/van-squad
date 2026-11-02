# Day 23 — Mississippi, Hattiesburg, ZIP 39402 — House cleaning

Cell: MS × Hattiesburg × 39402 × "House cleaning"
Researched: 2026-11-02 (public information only; business's own website first, then Google Business / public listings)

ZIP note: No expansion was needed — the cell yielded 4 qualifying businesses, above the 3-business floor. All four are Hattiesburg city-wide operators (county / city-wide service stated in their own materials), so they serve 39402 homes; none publishes an explicit service-ZIP list, so `service_zips` in the inserts file is ["39402"] only for every business — no ZIP was invented or inferred from a neighboring city name.

## Qualifying businesses (4)

| Name | Phone | Category | City | Website | Published email + source URL | Confidence + one-line reason | Source URL (phone) | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|---|
| Molly Maid of Hattiesburg | (601) 453-4742 | House cleaning | Hattiesburg | https://www.mollymaid.com/locations/hattiesburg/?cid=LSTL_MLY000192 | — none published that could be verified | High — locally owned franchise (1513 Hardy St, Hattiesburg, 39401) whose own location description says it cleans customers' homes on a 44-point checklist with free in-home estimates, serving Jones / Lamar / Forrest counties | https://www.mollymaid.com/locations/hattiesburg/?cid=LSTL_MLY000192 (Google listing phone + location.com certified listing showing (601) 453-4742); own location page itself was blocked by the fetcher, phone corroborated on two public listings | No match on name or phone in dedupe-open.json (1,910 names/phones) or any file in ~/workspace/van-squad/prospecting/ — earlier Molly Maid mentions are different franchise locations (Boise, Albuquerque, Sioux Falls, etc.) with different names/phones |
| Mama Fer | (601) 602-5013 | House cleaning | Hattiesburg | http://mamafer.com/ | — none published that could be verified | High — own website's maid-service page is titled "Residential cleaning in Hattiesburg, Sumrall, Oak Grove, & Petal" and says "House cleaning is what we do," cleaning customers' homes; own homepage prints the phone | http://mamafer.com/ (own homepage: "Phone: +16016025013"; business is Mama Fer LLC, Residential and Commercial Cleaning Services, 610 Adeline St, Hattiesburg) | No match on name or phone in dedupe-open.json or any prospecting file |
| VIP Cleaning Service of Hattiesburg MS | (601) 577-1411 | House cleaning | Hattiesburg | http://viphousecleaningservices.com/ | vipcleaningservice26@gmail.com — source: http://viphousecleaningservices.com/ (printed on its own homepage) | High — own website says "Reliable residential and commercial cleaning in Hattiesburg MS. Book deep cleaning, move-out cleaning…" and its Google description says "Home cleaning / Specialized cleaning for residential…" in Hattiesburg / Lamar & Jones counties; phone printed on own site | http://viphousecleaningservices.com/ (own homepage prints (601) 577-1411 and the email) | No match on name or phone in dedupe-open.json or any prospecting file |
| Cleanovation Services | (601) 436-5665 | House cleaning | Hattiesburg | — none found | — none published that could be verified | Medium — local Hattiesburg operator (7 Professional Pkwy) whose own Google Business self-description reads "Commercial & Residential Cleaning. We are located in the great beautiful city of Hattiesburg, MS"; residential cleaning at customers' homes is stated there, but no standalone website could be found to corroborate further | Google Business listing for Cleanovation Services, Hattiesburg (phone +16014365665) — surfaced via https://www.instagram.com/explore/locations/247682821761336 search result | No match on name or phone in dedupe-open.json or any prospecting file |

All phones are Mississippi local numbers (601 area code); none is toll-free-only. No phone, ZIP, hour, price, review, credential, or email was invented — the only email above is printed verbatim on the business's own website.

## EXCLUDED

- **SERVPRO of Hattiesburg** — (601) 544-0512 on its own site (Google listing shows a conflicting (601) 769-9535). EXCLUDED per standing precedent in prior cells (Day 5 Great Falls, Day 6 Casper, Day 7 Farmington/Hobbs, Day 8 Fargo/Minot, Day 10 Omaha/Bellevue): a fire/water damage-restoration franchise whose "general cleaning / Residential Home Cleaning Services" page on servpro.com is a restoration adjunct (heavy-duty / disaster cleaning, carpet/upholstery, post-renovation), not a regular house-cleaning service.
- **ServiceMaster Clean / ServiceMaster of Hattiesburg** — (601) 582-0101 / (601) 374-5925, Petal address. EXCLUDED: restoration / carpet-and-janitorial franchise, not regular house cleaning (same precedent as SERVPRO above).
- **Lindsey Cleaning Co LLC** — (601) 336-0838, Hattiesburg Google listing only. EXCLUDED: no own website or own materials found confirming residential/home cleaning — a bare listing with a category label is not confirmation from the business's own materials.
- **Dot's Cleaning Services** — (601) 773-7426, 121 W Park Dr, Hattiesburg, Google listing only. EXCLUDED: same reason as Lindsey — no own materials confirming house cleaning at customers' homes.
- **Shepherd's Cleaning** — Hattiesburg listing with hours but NO phone published. EXCLUDED: no verifiable public phone.
- **Eagle Service Corporation** — (601) 544-7667, http://www.eagleservices.com. EXCLUDED: janitorial / environmental services (commercial), not house cleaning.
- **Jani-King (Southeast Mississippi)** — (601) 579-4984. EXCLUDED: commercial janitorial franchise only, no residential house cleaning.
- **Cintas — Hattiesburg** — (601) 602-8323. EXCLUDED: commercial restroom cleaning for facilities only, not homes.
- **Hub City Pressure Washing** (601) 520-0402, **D&B Power Washing** (601) 434-2759, **Diamond Pressure Was** (601) 336-2162 — EXCLUDED: exterior pressure washing only, not interior house cleaning.
- **Expert Hood Cleaning LLC** — (601) 320-4650, Petal. EXCLUDED: commercial kitchen hood cleaning only.
- **Gracefully Clean** and **Legendary Cleaning Services LLC** — appear only as HomeAdvisor profiles serving Hattiesburg with no public phone outside the lead-gen platform. EXCLUDED: no verifiable public phone (platform hides it); Legendary's reviews/business history could not be tied to a Hattiesburg operator with its own materials.
- **Homeaglow (Hattiesburg Maid Services)** — EXCLUDED: national lead-gen marketplace with no local operator and no local phone.
- **Merry Maids** — nearest location is Jackson/Ridgeland, MS ((601) 975-4012); **Two Maids** — nearest locations are Jackson/Ridgeland and Columbus, MS. EXCLUDED for this cell: no Hattiesburg location and no Hattiesburg service confirmed from their own materials.
- **Connie's Custom Cleaning** — Southaven, MS ((901) 650-5823). EXCLUDED: not a Hattiesburg business; a "best of Mississippi" listicle mention does not place it in Hattiesburg.

## Dedupe method

Checked programmatically against ~/workspace/goals/van-squad-directory-website/hidden_files/day23-work/dedupe-open.json (1,910 names / 1,910 phones) and by grep against every file in ~/workspace/van-squad/prospecting/ (including tonight's day-23 files): no qualifying business shares a name or a phone with any existing entry. Franchise near-names (other Molly Maid locations) are different businesses with different local names and phones, noted in the table above.
