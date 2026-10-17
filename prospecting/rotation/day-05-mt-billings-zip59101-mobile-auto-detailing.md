# Rotation Day 5 — Montana: Billings × Mobile auto detailing × ZIP 59101

- Researched: 2026-10-17 (Day 5, manual live run)
- Cell: Billings, MT 59101 (downtown / south Billings). Thin batch — up to 5 qualifying businesses. Only one fully verified mobile operator is based in 59101, so the cell was expanded to ONE adjacent Billings ZIP (59105, Billings Heights) per the thin-batch rule — see the ZIP note. All businesses below are Billings operators whose own materials confirm mobile, come-to-the-customer detailing serving Billings including 59101.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Little Details Mobile Detailing Service | (406) 850-5131 | Mobile auto detailing | Billings | http://littledetailsbillings.square.site/ | — none published on own site | High — own site: "Convenient Mobile Service — I bring professional-level detailing directly to your home or workplace"; owner states he closed his shop and went back to mobile detailing only, serving within Billings; phone printed on its own site ("text me at (406) 850-5131") and matches its Google listing; based at 580 Jackson St, Billings (59101) | Business's own website |
| Redline Detailing LLC | (406) 794-6815 | Mobile auto detailing | Billings | https://www.redlinedetailingco.shop/index.html | redlinedetailingmt@gmail.com — https://www.redlinedetailingco.shop/index.html | Medium — own site: "Mobile Detailing in Billings, MT… Precision interior and exterior care, brought to you," lists "Mobile service," prints "Call or text (406) 794-6815" and its email, service area "Billings, Montana & nearby," owner-operated by a Billings native; site content verified via search-engine crawl of the site itself (crawled 2026-10-14) after a direct fetch hit a network error | Business's own website (via search crawl) |
| Stags Auto and Detailing | (406) 812-4708 | Mobile auto detailing | Billings | https://www.stagsdetail.com/ | Jaidyn.Somers@Gmail.com — https://www.stagsdetail.com/blog | Medium — own-site blog explicitly offers "mobile detailing and pickup/delivery options… Whether you're at home, work, or on the go, they'll come to you" and prints "Phone: (406) 812-4708" and its email; phone matches its Google listing; based in Billings Heights (59105) — see ZIP expansion note | Business's own website (blog) + Google listing |

## Dedupe
- Checked every name and phone above against (a) the live directory (vs_rest.py businesses name+phone pull, 297 rows, 2026-10-17): no matches — no Montana businesses were in the directory at all; and (b) a grep of ALL files in ~/workspace/van-squad/prospecting/ (seeded batch 1, Sacramento prospects/outreach, Days 1–4 rotation cells): no matches for any name or phone in this batch.

## Excluded (checked, did not pass the gates)
- Slick Mobile Detail Services (Billings, (406) 500-6181 per its own site) — EXCLUDED for this cell: despite the name, a mobile description on its Google listing, and a July 2025 job post mentioning mobile work, its own current website markets a fixed pull-through hand-wash location (lanes, wash pad, walk-in memberships, "Visit us," AJ Way / Montana Ave addresses) and presents no current come-to-you detailing offer — mobile service not confirmed from its own current materials.
- FCS Auto Detailing (Billings, (406) 208-5220) — EXCLUDED: its own site is explicit that it is a shop ("every vehicle leaves our shop," "customers drive to us from across the region," "Visit The Shop"); no mobile service.
- Big Sky Detailing (Billings, (406) 969-1499) — EXCLUDED: fixed shop at 315 S 26th St; its own site describes in-shop interior/exterior detailing with no mobile or come-to-you offer.
- Diamond Detail (Billings, (406) 850-2922 per Google listing) — EXCLUDED: listing description describes shop services with no mobile mention, and the website on its listing (mydiamondautospa.com) resolves to a different business in Gainesville, GA, so nothing could be verified from its own materials.
- Deluxe Auto Detailing LLC (Billings, (406) 679-2717) — EXCLUDED: fixed shop address (3120 1st Ave S); no mobile/come-to-you confirmation in its own materials (thin GoDaddy site; listing description mentions no mobile service).
- A's Auto Detailing (Billings, (406) 661-3581 per Google listing) — EXCLUDED for this cell: its own website could not be fetched, so mobile/on-site service could not be confirmed from its own materials to the batch standard.
- Billings Mobile Detailing (Billings, (406) 670-7414 per Google listing) — EXCLUDED for this cell: its own website's homepage returns 404, so mobile service and phone could not be verified from its own materials.
- Scott's Auto Detailing (Billings, (406) 647-5024 per listing) — EXCLUDED: no website; mobile service not confirmed from any of the business's own materials.
- LoveTap Customs and Performance (Billings, (406) 696-5519) — EXCLUDED: customs/performance shop; no mobile detailing offer in its materials.
- Waters Edge Mobile Washing LLC (Billings, (406) 860-8284) — EXCLUDED: category mismatch — its own site specializes in federal forestry washing, heavy equipment, fleet washing and pressure washing, not consumer auto detailing.
- MARS of Billings, Don's Car Wash, Bubble Bath Car Wash, MasterLube Hand Car Wash, Big Sky Express Wash, Shiny Ride Car Wash (all Billings) — EXCLUDED: fixed shop / car-wash operations; no mobile come-to-you detailing confirmed from their own materials.

## ZIP note
- Target ZIP 59101 (Billings). Only ONE fully verified mobile operator is based in 59101 (Little Details Mobile Detailing Service, 580 Jackson St), so the cell was expanded to ONE adjacent Billings ZIP: **59105 (Billings Heights, directly across the Yellowstone River)**, which added Stags Auto and Detailing (own published addresses: 932 Dixon Street and 1209 Mossman Dr, both Billings 59105).
- Redline Detailing LLC is a mobile-only Billings operator — it publishes no street address; its own site states its service area as "Billings, Montana & nearby," which includes 59101.
- Service ZIPs: Little Details ["59101"] and Redline ["59101"] (citywide Billings service stated; no ZIP lists published, none invented). Stags ["59101", "59105"] — 59105 is its own published base ZIP; it serves Billings including the 59101 cell.
- Honest yield: 3 qualifying businesses. Billings' detailing market is dominated by fixed shops and car washes; the remaining mobile-named operators (Slick, Billings Mobile Detailing, A's) could not be confirmed as mobile from their own current materials and were excluded rather than padded in.
