# Day 47 — NJ, Jersey City, ZIP 07306, Handyman

Cell: State=NJ, City=Jersey City, ZIP=07306, Category="Handyman" (exact label)
Date researched: 2026-11-28

No expansion was needed: 4 qualifying businesses were confirmed for Jersey City / 07306 service.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Skillful Eli HandyMan | (201) 347-7548 | Handyman | Jersey City | http://www.elihandyman.com/ | — none found | High — own site confirms home handyman work (renovations, repairs, flooring, painting) and shows the same phone; public listing gives Jersey City address 132 Monticello Ave | Own website (elihandyman.com) + public listing | Grep of ~/workspace/van-squad/prospecting/ and day47-dedupe-baseline.json for name and phone: no match |
| RCT Handyman Services LLC | (347) 352-2790 | Handyman | Jersey City | https://www.rcthandyman.com/ | rcthandymanservices@gmail.com — https://www.rcthandyman.com/ (Contact Us section) | High — own site says based in Jersey City, serving homes across Hudson County/North Jersey, lists repairs/installs in homes, and shows the same phone and email | Own website (rcthandyman.com) | Grep of prospecting/ and baseline for name, phone, and email: no match |
| Nimax LLC | (201) 834-6464 | Handyman | Jersey City | http://handyman.gonimax.com/ | — none found | High — own site (NiMax Handyman) confirms in-home work (TV mounting, furniture assembly, artwork, smart locks, "treating your home with respect") and shows "Call us: (201) 834-6464"; public listing gives Jersey City address 35 Concord St | Own website (handyman.gonimax.com) + public listing | Grep of prospecting/ and baseline for name and phone: no match |
| AP Handy | (551) 556-8256 | Handyman | Jersey City | https://www.aphandy.com/ | apcontractor@live.com — https://www.aphandy.com/service-areas/jersey-city-nj/ | High — own Jersey City service-area page confirms handyman repairs/installs in Jersey City homes, apartments, and rental properties by local operator Al Perez, and publishes the same phone and email | Own website (aphandy.com Jersey City page) | Grep of prospecting/ and baseline for phone and email: no match. The string "AP Handy" appears in a Day 43 Portland file only as a substring of "Blackcap Handyman" — a different business with a different phone, not a duplicate |

## Excluded

- Tim Golden Hands / iHandyman (http://ihandyman.pro/, phone listed as (707) 518-6157) — excluded: iHandyman is a national lead-gen/marketplace platform connecting customers with member handymen, not this operator's own business site; no local operator confirmed from own materials.
- Kaminskiy Care + Repair — excluded: national chain; its own Jersey City page states it has no office in Jersey City and dispatches a local crew through a national line.
- One Mans Handywork ((551) 689-8566), Angels Handyman ((973) 563-0310), Ross Full Multiservices ((201) 552-4979), Green Work Handyman Services ((201) 878-0553), Alberto Home Improvement and Handyman Services ((929) 452-4627), Handyboys handyman services ((201) 284-1345) — excluded: found only as public listings with no own website/materials confirming on-site home service in this run; insufficient verification under the own-materials gate.
- 3 Guys (woodcutbeer.com) — excluded: website is for a different business (wood/beer), not a verifiable handyman own site.

## Leads summary

- RCT Handyman Services LLC — rcthandymanservices@gmail.com — source: https://www.rcthandyman.com/
- AP Handy — apcontractor@live.com — source: https://www.aphandy.com/service-areas/jersey-city-nj/
- Skillful Eli HandyMan and Nimax LLC publish no email on the sources found.

## Counts

- Qualifying businesses found: 4
- Businesses in inserts.json: 4
- Listings in inserts.json: 4
- Email leads in leads.json: 2
- Duplicates skipped: 0
