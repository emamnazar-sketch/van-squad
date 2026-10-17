# Rotation Day 5 — Montana: Helena × Mobile pet grooming × ZIP 59601

- Researched: 2026-10-17
- Cell: Montana × Helena × ZIP 59601 × "Mobile pet grooming"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Google/Yelp place data, Aussie Pet Mobile 2026 FDD). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 1 qualifying business (thin batch — expected for Helena: the metro's mobile grooming is dominated by ONE franchise operator, who is a dedupe skip here because he is already in the directory from the Missoula cell; every other groomer found is a storefront salon). Quality over count: the batch ships with 1 rather than padding with salons.
- ZIP / expansion note: 59601 itself produced NO qualifying independent mobile groomer, so per the thin-batch rule the sweep expanded to the adjacent Helena-metro ZIPs (59602, 59635 East Helena, plus citywide searches). The one qualifying business, Little's Pawfurmations, is based in adjacent East Helena (59635) and publishes a mobile service ("I come to you") priced by mileage rings (5–15 mi and 16–25 mi tiers) that cover Helena/59601. service_zips = ["59601", "59635"]: 59601 is the target cell ZIP (inside her published 5–15 mi tier, ~5 mi from her base); 59635 is her own base ZIP from her published address (9 Fiesta Ct, East Helena). She publishes mileage rings, not a ZIP list — no other ZIP was invented. travel_radius_miles = 25 matches her published 25-mile tier.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Little's Pawfurmations | (406) 438-0306 | Mobile pet grooming | Helena | https://littlespawfurmations.my.canva.site/ | littlespawfurmations406@gmail.com — own website ("Email: littlespawfurmations406@gmail.com"): https://littlespawfurmations.my.canva.site/ | High — own website has a dedicated "Mobile — I come to you" service with mileage-based travel fees (base $10; 5–15 mi and 16–25 mi tiers), phone (406) 438-0306 and email printed on the same page; solo local operator (Shania Osborn) based in East Helena serving the Helena metro | Business's own website + Google place listing (9 Fiesta Ct, East Helena, MT) |

## Dedupe
- Live directory check (vs_rest.py, businesses name + phone): (406) 438-0306 and the name "Little's Pawfurmations" appear NOWHERE in the live directory. NO match.
- Grep of the name and phone against all files in ~/workspace/van-squad/prospecting/: NO matches.
- **Aussie Pet Mobile of Missoula and Helena — SKIPPED as a duplicate operator (encountered, as warned):** the franchisor's own 2026 FDD lists "Aussie Pet Mobile of Missoula" (opened 5/1/2024) AND "Aussie Pet Mobile of Helena" (opened 1/16/2025), both owner Amir Akram Khan, both phone (406) 519-4719. Bark & Mane of Western Montana — already in the live directory at (406) 519-4719 from the Day 5 Missoula cell — publishes a Helena location (Helena, MT 59602, same phone) and its About page names founder Amir Khan. Same operator, same phone: NOT listed again from the Helena side.
- The coordinator re-checks dedupe centrally at insert time.

## Excluded (checked, did not pass the gates)
- PAWsitive Vibes Dog Grooming, (406) 475-0091, 1445 National Ave, Helena — EXCLUDED: storefront salon; its own website describes in-salon grooming in "a Safe, Calm Environment" and publishes no mobile/come-to-you service. (Its published email was therefore NOT collected — leads are recorded only for businesses in the batch.)
- Barking Mad Grooming and Bakery, (406) 438-5839, 1445 National Ave, Helena 59601 — EXCLUDED: storefront grooming salon + bakery; own website is reservation-at-the-salon only, no mobile service.
- Town & Country Grooming, (406) 449-6484, 11 W Placer Ave, Helena — EXCLUDED: drop-off salon ("call regarding drop off and pick up times"); no mobile service. (A similarly named "Town and Country Mobile Grooming Salon" website is a different business outside Montana.)
- Diggity Dog, (406) 465-2135; Helena Hounds Grooming, (719) 646-8567; Fluffy Makeover — all at 2828 Billings Ave, Helena — EXCLUDED: storefront salons at a fixed address; no mobile service.
- Mountain Mutts Salon, (406) 422-3007; Sittin' Pretty, (406) 475-1015; Little Bee's Pet Spa, (406) 916-6567; Pawsitively Perfect, (406) 594-7613 — all at 2125 Euclid Ave, Helena — EXCLUDED: salon-suite storefronts; no mobile service.
- The Canine Capital (Capital Sports), (406) 442-9963, 1116 Helena Ave — EXCLUDED: drop-off grooming ("AM Dropoff/Done by Noon") inside a sporting-goods store.
- In the Dog House, (406) 227-6101, 3706 E Old Hwy 12, East Helena — EXCLUDED: storefront salon; no mobile service.
- Petco Grooming, (406) 449-7461, 3215 Dredge Dr, Helena — EXCLUDED: national-chain storefront salon.
- Born to be Styled, (406) 437-2779, 1403 Birch St, Helena — EXCLUDED: fixed-address salon, flagged "possibly temporarily closed"; no mobile service.
- MoonStar Pet Spa (moonstarpetspa.com) — EXCLUDED: genuine in-home groomer, but based in Fort Myers, Florida (239 area code) — out of area.
- Zoomin Groomin Bitterroot, (406) 501-4281 — NOT a Helena candidate: already in the directory from the Missoula cell; its own published service area is the Bitterroot/Missoula area, which does not include Helena.

## Email leads
- 1 published email found: Little's Pawfurmations (its own website). It is in the matching -leads.json. No email was written into any business profile.
