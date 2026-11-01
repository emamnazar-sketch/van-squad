# Day 22 — Illinois — Evanston — ZIP 60201 — House cleaning

- Date: 2026-11-01
- Cell: IL / Evanston / 60201 / "House cleaning"
- Sources: each business's own website first (fetched and read 2026-11-01), cross-checked against Google Business listing data returned in search results and Birdeye for Evanston Cleaning Company. No phone, email, ZIP, or service claim was taken from a source that did not publish it.
- Result: 7 qualifying businesses. No ZIP expansion was needed (see ZIP note).

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Dial A Maid USA | (847) 869-6243 | House cleaning | Evanston | https://www.dialamaidusa.com/ | dialamaidusa@gmail.com — https://www.dialamaidusa.com/ | High — own site says "Headquartered in Evanston, IL", residential maid service, phone + email on the homepage | Own website; Google listing (909 Foster St, Evanston) |
| MaidPro Evanston | (847) 869-2005 | House cleaning | Evanston | https://www.maidpro.com/evanston/ | None published in readable form (site email is obfuscated) — no lead recorded | High — local franchise page with Evanston address (2506 Gross Point Road, Evanston, IL 60201), local phone, founded by a local resident in 2004; home cleaning in customers' homes | Own local website page |
| Fresh Tech Maid | (847) 392-0888 | House cleaning | Evanston | https://www.freshtechmaids.com/maid-service-evanston | info@freshtechmaids.com — https://www.freshtechmaids.com/maid-service-evanston | High — own Evanston page lists the ZIPs it serves (60201, 60202, 60203, 60204, 60208, 60076, 60077), an Evanston office address, phone + email on the page | Own website (Evanston service page) |
| The Maids in Northshore | (847) 328-0079 | House cleaning | Evanston | https://www.maids.com/92/ | None published — no lead recorded | High — local office at 1625 Payne St, Evanston, IL 60201; own Evanston page gives the local number 847-328-0079 for Evanston house cleaning (franchise with a verified local operator phone) | Own local website page; Google listing |
| Purify The Cleaning Company | (773) 747-7005 | House cleaning | Evanston | https://purifyil.com/ | info@purifyil.com — https://purifyil.com/ (displayed as "Info @purifyil.com") | High — own site lists Residential Cleaning and its address as 1880 Oak Ave Suite 301, Evanston, Illinois 60201, with phone + email on the homepage | Own website |
| Maries Maid Inc | (312) 473-5546 | House cleaning | Evanston | https://cleaningmariesmaidinc.com/ | None published — no lead recorded | Medium — own site confirms Residential Cleaning for homes and shows the phone; Evanston address (1603 Orrington Ave) comes from its Google listing, not the site itself | Own website; Google listing |
| Evanston Cleaning Company | (847) 440-1423 | House cleaning | Evanston | https://evanstoncleaningcompany.com/ | None published on the site — no lead recorded | High — own site: "Locally owned & operated", owner is an Evanston resident, House Cleaning Service for homes, phone on the homepage | Own website; Birdeye profile (231 Richmond St, Evanston) |

## Dedupe

- Live DB (vs_rest.py): phone lookup for all 7 phones returned `[]` (HTTP 200) — no existing business carries any of these numbers. Name lookups (ilike) for "Dial A Maid", "Evanston Cleaning", "Maries Maid", "Purify", "Fresh Tech", "MaidPro Evanston" also returned `[]`.
- Prospecting files: grep of all files in ~/workspace/van-squad/prospecting/ for each candidate phone (869-6243, 869-2005, 392-0888, 328-0079, 747-7005, 473-5546, 440-1423) — zero matches. Grep for "Dial A Maid", "Maries Maid", "Purify", "Evanston Cleaning", "Fresh Tech", and "Evanston" — zero matches. (Generic brand words "MaidPro" / "The Maids" appear in other states' files for different franchise locations with different phones — different local businesses, not duplicates.)
- No business was skipped as a duplicate.
- Phone conflict noticed (resolved): The Maids' own page footer shows the national 1-800-843-6243 number, but the same page's Evanston body text ("call our house cleaning services in Evanston at 847-328-0079") and its Google listing give the local (847) 328-0079 — the local number was used, per the local-operator rule.

## Excluded (checked, failed a gate)

- Karen's Green Maids — Evanston page, (773) 538-3031: Chicago-based operator running templated per-city SEO pages (its Evanston page reuses Palatine imagery); no Evanston address or verifiable Evanston-local operator — failed the local-operator gate.
- TIDY (tidy.com Evanston page): national AI-matching platform / lead-gen, no local operator phone — excluded.
- Reliable House Cleaning Services Evanston IL — (708) 854-1846: generic keyword name, no verifiable local operator evidence from its own materials — excluded as unverified.
- CMJ Cleaning Services — (224) 417-6501, Evanston listing: no website or own materials confirming residential house cleaning — insufficient verification.
- Lamp Cleaning services LLC — (224) 470-9887, Evanston listing: no website; residential house cleaning could not be confirmed from the business's own materials.
- Evanston Cleaning Service (805 Greenwood St): no verifiable public phone found — excluded.
- Merry Maids of Evanston & Skokie and Molly Maid: real in-home cleaners, but their listed locations are in Skokie, not Evanston — out of this cell (candidates for a Skokie cell, not counted here).
- Best Care Cleaners, Spotless Cleaners, Oakwood Cleaners, Lake City Cleaners, Zaka Cleaners: storefront dry cleaners/laundries, not house cleaning — excluded.
- SERVPRO of Evanston / ServiceMaster: restoration and industrial/commercial cleaning, not residential house cleaning — excluded.

## ZIP note

ZIP 60201 alone yielded 7 qualifying businesses (target 5–9), so no expansion was needed. One included business, Evanston Cleaning Company, is based at 231 Richmond St in adjacent Evanston ZIP 60202 but is an Evanston business serving all of Evanston including 60201; its service_zips therefore list 60201 + 60202. Fresh Tech Maid's service_zips are exactly the ZIP list its own Evanston page publishes. All other businesses carry only 60201 — no ZIP was invented for any business.
