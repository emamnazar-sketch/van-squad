# Day 25 — Indiana × Fishers × ZIP 46038 × Handyman

- **Cell:** IN | Fishers | 46038 | Handyman (exact label, verified in js/data.js)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 6 qualifying businesses found with Fishers evidence in 46038 itself or explicit Fishers service-area statements on their own sites. Two businesses are based in Fishers 46038 itself (E.L. Smith, Inc. at 14505 Lansing Place, Fishers 46038; Ace Handyman Services Hamilton County at 12792 Ford Dr, Fishers IN 46038); Handy Indy Pro LLC is Fishers-based (10301 Cotton Blossom Dr, Fishers) and lists Fishers in its own served-areas list; the other three explicitly name Fishers in their own service areas (IBO: "Indianapolis • Carmel • Fishers • Noblesville…"; Alder Avenue: "Proudly Servicing: Hamilton County, Noblesville, Carmel, Fishers, Westfield, Cicero"; Noblesville Handyman: "we also serve Westfield, Carmel, Fishers and Cicero").
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `/tmp/day25-open.json` (2,135 rows incl. Wave 1) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 6 businesses below. In particular the Wave 1 Indianapolis handymen that also mention Fishers — IHP Indy Handyman Pros (317) 696-6771, Davidson Handyman Services (317) 225-1913, HomeHub (317) 669-6838, Nick's Handyman Service, LLC (317) 893-3717, Foster Built LLC, Mohr Handyman Services — were NOT reused here.
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["46038"] only. City-name service areas were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials confirm handyman work performed at the customer's home (repairs, installs and maintenance at the house; Alder Avenue offers "free on-site estimates" with the owner on every job; Noblesville Handyman's owner answers, quotes and does the work himself).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Handy Indy Pro LLC | (463) 701-2878 | Handyman | Fishers | https://handyindypro.com/ | — none published on its own site that could be verified (the "filler@godaddy.com" string on the fetched page is a GoDaddy sign-in artifact, not a business email — NOT collected) | High — own site: "HANDYMAN INDIANA, Fishers", "Let's make your house a home!", "My cell 463.701.2878 (Tom) TEXT PLEASE" printed on its own site and matching its Google listing (10301 Cotton Blossom Dr, Fishers); served-areas list includes FISHERS; handyman work around the house | https://handyindypro.com/ |
| E.L. Smith, Inc. | (317) 339-2418 | Handyman | Fishers | http://www.elsmithinc.com/ | — none published on its own site that could be verified (contact form only) | Medium — own site: owner-operated since 1998 doing "remodeling, construction, handyman services… kitchens, bathrooms, tile work" at homes, "Bonded, Licensed, Insured", 2-year labor warranty; based at 14505 Lansing Place, Fishers 46038; graded Medium because its own website prints no phone, so the phone rests on its Google listing alone | http://www.elsmithinc.com/ (own site, services) + Google listing (phone) |
| IBO Service Company | (260) 278-1136 | Handyman | Fishers | http://www.iboservicecompany.com/ | iboservicecompany@gmail.com — http://www.iboservicecompany.com/ (own website, Contact Us block) | High — own site: dedicated "Handyman Services — Reliable home repairs, maintenance, and improvement services", owner personally oversees every project for homeowners throughout the Greater Indianapolis area, service area printed on its own site as "Indianapolis • Carmel • Fishers • Noblesville • Westfield • Zionsville • Avon • Greenwood • Anderson", phone +1 (260) 278-1136 and email printed on its own site | http://www.iboservicecompany.com/ |
| Alder Avenue Home LLC | (317) 922-6778 | Handyman | Fishers | https://www.alderavehome.com/ | alderave@outlook.com — https://www.alderavehome.com/ (own website, contact block) | High — own site (titled Alder Avenue Homes; listing name Alder Avenue Home LLC): "located in Noblesville, IN, and we proudly service all of Hamilton County, including: Noblesville, Carmel, Fishers, Westfield, Cicero", family-owned, 20+ years fixing things around the house, "Free On-site Estimates", "Owner on Every Job", phone (317) 922-6778 and email printed on its own site | https://www.alderavehome.com/ |
| Noblesville Handyman | (317) 457-8052 | Handyman | Fishers | http://Noblesvillehandyman.com/ | — none published on its own site that could be verified (site says contact "by phone (the best way) or by e-mail" but prints no email address) | High — own site: owner Tim states "we also serve Westfield, Carmel, Fishers and Cicero", "When you call, I will answer the phone, I will also be the person who quotes you a price and does the work", tagline "No job to small or to odd", phone 317.457.8052 printed on its own site | http://Noblesvillehandyman.com/ |
| Ace Handyman Services Hamilton County | (317) 537-9641 | Handyman | Fishers | https://www.acehandymanservices.com/offices/hamilton-county | — none published on its own local office page that could be verified | Medium — own local office page: "Ace Handyman Services Hamilton County, 12792 Ford Dr, Fishers IN 46038", "Locally Owned and Independently Operated", "Proudly serving Fishers, Carmel, Westfield, and Castleton", craftsmen come to the home with a 1-year guarantee, phone (317) 537-9641 printed on that page; graded Medium because other sources show different numbers for this office (Google listing (317) 280-3792, BBB (317) 819-6696) — the own-page number was preferred per the brief | https://www.acehandymanservices.com/offices/hamilton-county |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| IBO Service Company | iboservicecompany@gmail.com | http://www.iboservicecompany.com/ |
| Alder Avenue Home LLC | alderave@outlook.com | https://www.alderavehome.com/ |

2 leads — see `day-25-in-fishers-zip46038-handyman-leads.json`.

## Excluded

- **Handyman Services (handymanservices.biz), Google listing at 7227 Fishers Landing Dr, Fishers, (317) 800-1887** — EXCLUDED: its own website serves Lake County, FLORIDA (Lady Lake, Fruitland Park, The Villages, Leesburg…) and prints a Florida phone, +1 (352) 630-5480 — its own materials contradict Fishers service.
- **Hoosier Heroes (317) 713-2911, office@hirehoosierheroes.com** — EXCLUDED for this cell: strong Indianapolis handyman on its own site (11216 Fall Creek Rd, Indianapolis 46256), but Fishers is not named anywhere in its own materials that could be verified, so Fishers coverage could not be confirmed from its own materials.
- **Handyman Connection of Fishers (317) 961-7339) / Mr. Handyman of Zionsville, Carmel and Fishers (317) 680-7088)** — national franchise chains, consistent with the Wave 1 46237 cell treatment.
- **Ameriserve LLC (317) 777-0267)** — own site is primarily a roofing / storm-restoration contractor; handyman is a secondary section and Fishers is not named in its own service materials.
- **Adam's Innovative Solutions (317) 728-8314)** — Thumbtack profile only, no own website materials confirming Fishers on-site handyman service.
- **KJ's Handyman Service (Arcadia), Matt's Handyman Service (Cicero), Indy Handy Pros (Indianapolis)** — no Fishers service statement verified on their own materials for this cell; weaker than the six included.
- **Wave 1 reuse candidates** — IHP Indy Handyman Pros, Davidson Handyman Services, HomeHub, Nick's Handyman Service, LLC, Foster Built LLC, Mohr Handyman Services: all already used in the Day 25 Indianapolis 46237 handyman cell; skipped on dedupe even though several name Fishers.

## Files

- `day-25-in-fishers-zip46038-handyman.md` (this file)
- `day-25-in-fishers-zip46038-handyman-inserts.json` — 6 businesses + 6 listings, validated with `python3 -m json.tool`
- `day-25-in-fishers-zip46038-handyman-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
