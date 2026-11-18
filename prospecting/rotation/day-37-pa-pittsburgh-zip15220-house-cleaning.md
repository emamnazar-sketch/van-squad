# Day 37 — PA / Pittsburgh / ZIP 15220 / House cleaning

Cell: Pennsylvania × Pittsburgh × ZIP 15220 (Green Tree / Banksville / Crafton area) × "House cleaning" (exact label, verified in js/data.js).
No adjacent-ZIP expansion was needed — 5 qualifying businesses were found. Every included business was verified from its own website first (in-home residential cleaning + public phone on the site), then deduped against a grep of ~/workspace/van-squad/prospecting/ (including all Day 36 and Day 37 wave-1 files) and the live DB dump (day37_open_dump.json, 3,420 businesses) — no name or phone matches for any included business.
Service ZIPs: service_zips = ["15220"] only for all 5 — none publishes an explicit ZIP-code service list on the pages checked (they publish neighbourhood/city service areas), so no ZIPs were invented. Pittsburgh House Cleaning's own site explicitly lists Green Tree, Crafton and Dormont — the communities in/around 15220 — in its service areas.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Pittsburgh House Cleaning, LLC | (412) 912-4941 | House cleaning | Pittsburgh | https://pittsburghhousecleaning.net/ | info@pittsburghhousecleaning.net — https://pittsburghhousecleaning.net/ | High — own site is a dedicated house-cleaning service (recurring, deep, move-in/out) and its Service Areas list explicitly includes Green Tree, Crafton and Dormont (15220 area), with this phone and email on the site | https://pittsburghhousecleaning.net/ | No match in prospecting grep or live DB dump (name or phone) |
| Leslie'An Cleaning Service | (412) 291-0372 | House cleaning | Pittsburgh | https://leslieancleaning.com/ | andinollc12@gmail.com — https://leslieancleaning.com/contact/ | High — own site offers recurring/deep/move-in-out residential cleaning in "Pittsburgh City and surroundings", bonded and insured, with this phone and email on its own contact page | https://leslieancleaning.com/contact/ | No match in prospecting grep or live DB dump (name or phone). Name as published in public listings / site branding; site footer business slug is lesliescleaningservices |
| Hand It Over Cleaning & Painting | (412) 266-2242 | House cleaning | Pittsburgh | https://handitoverpgh.com/ | — none published on its own site that could be verified | Medium — local Pittsburgh operator; own site offers recurring, deep and move-in/out cleaning for houses, apartments and rentals in Pittsburgh homes, with "Call or text 412-266-2242" on the site; no 15220-specific area list, hence Medium | https://handitoverpgh.com/ | No match in prospecting grep or live DB dump (name or phone) |
| Yemima | (412) 736-9883 | House cleaning | Pittsburgh | https://yemimallc.com/ | — none published on its own site that could be verified | Medium — family-owned since 2019; own site offers routine, deep and move-in/out residential cleaning "exclusively in the Greater Pittsburgh area" with this phone on the site; also does commercial/staffing and no 15220-specific list, hence Medium. Site also lists a second phone (724) 470-8627; the first-listed (412) number is used. Business name on its own site is "Yemima" (Yemima Cleaning & Staffing / Yemima LLC) | https://yemimallc.com/ | No match in prospecting grep or live DB dump (name or phone) |
| LadyPro Home Cleaning Services | (412) 332-4952 | House cleaning | Pittsburgh | https://ladyprohomecleaning.com/ | — none published on its own site that could be verified | Medium — local family-owned Mt. Lebanon house cleaner (15228, immediately adjacent to 15220); own site offers deep, recurring and move-in/out in-home cleaning in "Mt. Lebanon and surrounding areas" with this phone throughout; no explicit Green Tree/15220 listing, hence Medium | https://ladyprohomecleaning.com/ | No match in prospecting grep or live DB dump (name or phone) |

## Exclusions

- Affordable Maids ((724) 933-6000), Mrs. Clean Pittsburgh ((412) 422-1100), Maid With Precision ((724) 412-6243) — all serve Green Tree on their own sites, but EXCLUDED as duplicates: already seeded Day 36 in the Pittsburgh 15201 House cleaning cell (same name + phone in the live DB dump).
- Strong Cleaning Pittsburgh, Steel City Shine, Maid On The Spot, Wexford Cleaning — EXCLUDED as duplicates: already seeded Day 37 wave 1 in the Pittsburgh 15217 House cleaning cell.
- MaidThis Cleaning of Pittsburgh ((412) 866-1764) — EXCLUDED: cleaner-matching platform, not a single local operator (same ground as prior Pittsburgh cells).
- Kleancor (1 (800) 988-6838) — EXCLUDED: 800-number-only operation, no local Pittsburgh operator phone verified.
- Polina's Cleaning (polinascleaningpgh.jimdofree.com) — EXCLUDED: explicitly serves Green Tree and Crafton for in-home walk-throughs, but its own site publishes NO public phone (form-only contact), so it fails the verifiable-phone gate.
- Mary's Cleaning Services LLC ((412) 557-1321, maryscleaningcompany.com) — EXCLUDED on dedupe caution: a similarly named business, "Mary's Cleaning Company, LLC" ((512) 679-1734, Pflugerville TX), is already in the live DB — name collision risk under the same-name = skip rule; not used.
- The Art of Clean ((412) 584-1881, Bellevue) — NOT INCLUDED: own site confirms domestic cleaning in Bellevue (15202) only, with no Pittsburgh-wide / 15220 service confirmation.
- Stratus Building Solutions ((412) 314-1900, Green Tree), System4 ((412) 875-5640, Green Tree), Nationwide Cleaning Services ((412) 580-2285, Green Tree), SERVPRO — EXCLUDED: commercial/janitorial or national franchise/restoration operations, not local residential house-cleaning operators.
- MaidPro — EXCLUDED: national franchise system, per the standing franchise gate.

## Summary
- Businesses found and batched: 5
- Email leads collected: 2 (Pittsburgh House Cleaning, LLC; Leslie'An Cleaning Service)
- Inserts file: day-37-pa-pittsburgh-zip15220-house-cleaning-inserts.json (5 businesses, 5 listings)
- Leads file: day-37-pa-pittsburgh-zip15220-house-cleaning-leads.json (2 entries)
- No database insertion, no js/data.js edit, no git, no images performed by this researcher.
