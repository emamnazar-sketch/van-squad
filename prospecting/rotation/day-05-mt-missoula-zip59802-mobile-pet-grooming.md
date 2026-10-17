# Rotation Day 5 — Montana: Missoula × Mobile pet grooming × ZIP 59802

- Researched: 2026-10-17
- Cell: Montana × Missoula × ZIP 59802 × "Mobile pet grooming"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Aussie Pet Mobile 2026 FDD, Google/Yelp place data, voofla). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 2 qualifying businesses (thin batch — mobile grooming in the Missoula metro is served almost entirely by two franchise operators; every other groomer found is a storefront salon). Quality over count: the batch ships with 2 rather than padding with salons.
- ZIP / expansion note: 59802 is west/central Missoula. Both qualifying operators state city-level (Missoula / Missoula County) service that includes 59802 — Zoomin Groomin Bitterroot's own page lists 59802 explicitly in its service-ZIP list. Because the yield is under 3, the sweep was extended across the adjacent Missoula ZIPs (59801, 59803, 59804) via citywide searches: NO additional qualifying mobile groomer exists anywhere in the Missoula metro — all other groomers found are storefront-only (see Excluded). No ZIP was invented for any business: Bark & Mane states served cities, not ZIPs, so its service_zips entry is only the target ZIP; Zoomin Groomin's service_zips are exactly the ZIPs its own page publishes.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Bark & Mane of Western Montana | (406) 519-4719 | Mobile pet grooming | Missoula | https://www.barkandmane.com/pet-groomers/western-montana/ | None published by the local business (its own location page shows phone + book-online only; the only emails on barkandmane.com are franchisor-corporate contacts on legal pages — info@ / operations@corp. — not this local operator's, so none recorded) | High — own Western Montana location page: "mobile pet grooming right at your doorstep," "We'll arrive on time in our full-service grooming van, right to your driveway," local phone (406) 519-4719 printed on the page, Cities Served includes Missoula; locally owned by Amir Khan (franchisee, per its own About page) | Business's own website (Western Montana location page + About page) |
| Zoomin Groomin Bitterroot | (406) 501-4281 | Mobile pet grooming | Missoula | https://www.zoomingroomin.com/locations/montana/bitterroot/ | bitterroot@zoomingroomin.com — own Bitterroot location page ("Email: bitterroot@zoomingroomin.com"): https://www.zoomingroomin.com/locations/montana/bitterroot/ | High — own Bitterroot location page: "we bring calm, clean mobile pet grooming care to your curb," state-of-the-art grooming vans, "Call: 406-501-4281" and the email printed on the page, service-ZIP list explicitly includes 59802 and served cities include Missoula; locally operated franchise location | Business's own website (Bitterroot location page) |

## Dedupe
- Live directory check (vs_rest.py, 297 businesses, name + phone): neither (406) 519-4719 nor (406) 501-4281 appears, and no name containing "Missoula," "Montana," or "Aussie" exists in the live directory. NO matches.
- Grep of every name and phone in this batch against all files in ~/workspace/van-squad/prospecting/: the two phones and the lead email returned NO matches anywhere; the names match only the pre-existing OTHER locations noted below.
- Bark & Mane: two different locations are already in the directory/files — "Bark & Mane of Boise" (208) 922-7500, ID (Day 4) and "Bark & Mane of Elk Grove and Rancho Cordova" (916) 252-3583, CA (Day 1) — different cities, states, phones, and local operators; the Western Montana location is a separate local operator, NOT a duplicate.
- Zoomin Groomin: the directory already holds "Zoomin Groomin" (702) 213-5755, NV and "Zoomin Groomin Boise & Meridian" (208) 470-2511, ID (Day 4) — different local operators and phones from this Bitterroot location (406) 501-4281, so this entry is location-qualified ("Zoomin Groomin Bitterroot") and is NOT a duplicate.
- Aussie Pet Mobile of Missoula and Helena — SKIPPED as a duplicate operator: the franchisor's own 2026 FDD lists "Aussie Pet Mobile of Missoula" (opened 5/1/2024) and "Aussie Pet Mobile of Helena," owner Amir Akram Khan, phone (406) 519-4719 — the SAME operator and the SAME phone as Bark & Mane of Western Montana (whose About page names founder Amir Khan). Bark & Mane is the franchisor's current brand (its 2026 FDD is titled "formerly APM"), so the operator is listed once only, under the current Bark & Mane name — the same treatment the Day 4 Boise batch gave the identical Boise rebrand. NOT listed separately.
- Live-database dedupe was re-run by this worker against the live directory (see first bullet); the coordinator re-checks centrally at insert time.

## Excluded (checked, did not pass the gates)
- Urban Bark, (406) 868-3197, 1120 E Broadway St, Missoula — EXCLUDED: storefront salon; no mobile service.
- 2 Barking Sisters Dog Spaw, (406) 531-2765, 450 W Broadway St, Missoula — EXCLUDED: "full service dog salon" at a fixed address; no mobile service.
- Showcase Pet Grooming and Supplies, (406) 543-1211, 2118 S Higgins Ave, Missoula — EXCLUDED: storefront salon + retail store; no mobile service.
- Bubble Bath Pet Grooming, (406) 214-2193, 710 S Orange St, Missoula — EXCLUDED: storefront salon; no mobile service.
- Fluff Pet Parlor, (509) 866-6140, Missoula — EXCLUDED: fixed-location parlor; no mobile/come-to-you service confirmed from its own materials.
- Doggie Do's Pet Grooming, (406) 542-3647, 510 E Spruce St, Missoula — EXCLUDED: storefront salon; no mobile service.
- Barks & Bubbles, (406) 728-6375, 2405 S 3rd St W, Missoula — EXCLUDED: storefront salon; no mobile service.
- Quick Paws Pet Care Services, (406) 721-1943, 1720 S 3rd St W, Missoula — EXCLUDED: its own site describes a fixed daycare/boarding facility with in-house groomers ("our state-of-the-art facility"); grooming is at the facility, not mobile.
- Zoomin' Grooming, (406) 327-7911, 715 Kensington Ave, Missoula — EXCLUDED: storefront grooming shop (drop-off), and reported permanently closed on Yelp. (Not related to Zoomin Groomin.)
- Katy's Petcare LLC, (530) 220-4812, 2200 Great Northern Ave, Missoula — EXCLUDED: pet sitting/dog walking business at a fixed address; no mobile or house-call grooming confirmed from its own materials.
- Tailored Loving Care, (406) 830-5080, 2401 Arcadia Dr, Missoula — EXCLUDED: Facebook-only groomer at a fixed address; no mobile service confirmed.
- The Devoted Paw (thedevotedpaw.biz) — EXCLUDED: genuine house-call grooming model, but no Missoula/Montana location and no public phone could be verified from its own site; fails the verifiable-phone and cell-location gates.
- MoonStar Pet Spa (moonstarpetspa.com) — EXCLUDED: in-home groomer, but in Southwest Florida (239 area code), not Montana.
- Fritzy's Pet Care Pros — EXCLUDED: national mobile-grooming franchise reachable only via a toll-free 877 number; no Missoula location or local operator found.

## Email leads
- 1 published email found: Zoomin Groomin Bitterroot (its own location page). It is in the matching -leads.json. No email was written into any business profile.
- Bark & Mane of Western Montana publishes no email for the local business (contact is phone / online booking only).
