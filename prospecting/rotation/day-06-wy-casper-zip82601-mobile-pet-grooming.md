# Rotation Day 6 — Wyoming: Casper × Mobile pet grooming × ZIP 82601

- Researched: 2026-10-18
- Cell: Wyoming × Casper × ZIP 82601 × "Mobile pet grooming"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Google/Yelp place data, dogdog.org, The Daily Groomer). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 0 qualifying businesses (honest zero — Casper's grooming market is almost entirely storefront salons; no operator in 82601, or in the expanded Casper-metro sweep, confirms a mobile / grooming-van / come-to-you service from its own materials with a verifiable public phone and a Casper location). Quality over count: the batch ships with 0 rather than padding with salons, out-of-area groomers, or aggregator-only listings.
- ZIP / expansion note: 82601 itself produced NO qualifying mobile groomer, so per the thin-batch rule the sweep expanded to the adjacent Casper ZIP 82604 and then citywide across the Casper metro (including Mills and Evansville listings that serve Casper addresses). The expansion found NO additional qualifying mobile groomer either — every Casper-area groomer found is a fixed salon (see Excluded), and the only genuinely mobile operators found are based outside the metro or cannot be tied to Casper from their own materials (see Near misses). service_zips for this cell would have been ["82601"] plus a business's own stated ZIPs only — no business qualified, so no ZIPs were assigned and none were invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| — none — | — | Mobile pet grooming | Casper | — | — | No business passed all gates (own-materials mobile confirmation + verifiable public phone + Casper location) | — |

## Dedupe
- Live directory check (vs_rest.py, businesses name + phone, 327 active businesses): NO business with a (307) phone exists in the live directory, and no name containing "Casper," "Heavenly," "FurBaby," or "DJ" appears. NO matches — there was nothing to skip as a duplicate; every candidate below failed a quality gate, not dedupe.
- Grep of every candidate name and phone in this file against all files in ~/workspace/van-squad/prospecting/: NO matches.
- The coordinator re-checks dedupe centrally at insert time (moot for a zero-yield batch, recorded for completeness).

## Near misses (checked closely, did not pass the gates)
- DJ's Groom and Board, (307) 315-6045, 128 Nichols Ave, Casper — EXCLUDED, mobile NOT confirmed: its own Facebook handle is "DJsGroomsOnTheGo," which hints at an on-the-go name, but a handle alone is not a mobile confirmation. Its current public description is "Full service dog grooming and Boarding" at a fixed address (the same 128 Nichols Ave address listed for Connie's Pet Palace), and no own website, van, trailer, or come-to-you wording could be verified from its own materials — the Facebook page fetch returned only the profile name and follower count. Fails the own-materials mobile gate; NOT listed on a guess.
- Heavenly Hounds Mobile Dog Grooming, (307) 401-3390 — EXCLUDED, Casper location NOT verifiable: the name says "Mobile" and the phone is a Wyoming (307) number, but the ONLY source found is a dogdog.org aggregator page whose text is the site's generic boilerplate (the same template text it publishes for ordinary salons, including "drop by in-person to meet the friendly staff" and "located in WY" with no city, no address, and no website). No business's-own website or own listing confirming Casper service was found, and a phone-number search returns only that aggregator page. (A separate, real "Heavenly Hounds Mobile Grooming" with its own website is in Jacksonville, FL — a different business.) Fails the own-materials and cell-location gates.
- Zoomies Pawsmetology, (814) 580-7332, https://www.zoomiespawsmetology.com/ — EXCLUDED, out of area / location unverifiable: its own website DOES confirm genuine mobile grooming ("certified and insured mobile dog groomer… I bring a peaceful grooming oasis directly to your doorstep," grooming trailer, in-home option), but the site states NO city or service area anywhere, its phone is an 814 (Pennsylvania) number, and no Casper or Wyoming tie could be found in any source. Fails the cell-location gate — not a Casper business on any verifiable evidence.
- FurBaby Holistic Mobile Grooming, (307) 409-0570, 129 N 3rd St #1282, Douglas, WY — EXCLUDED, out of cell: genuinely mobile by name and listing, but based in Douglas, roughly 50 miles from Casper, and no published Casper service area was found on its own materials or listings. A Douglas operator is not a Casper (82601/82604) listing.
- Fritzy's Pet Care Pros, (877) 374-8997, and Groomit (groomit.me Wyoming pages) — EXCLUDED: national lead-gen / platform listings reachable only via toll-free or app booking, with no Casper local operator, no local phone, and no Casper location page verified. National call-center / lead-gen exclusion applies.
- Aussie Pet Mobile, Zoomin Groomin, Woofie's, Bark & Mane — CHECKED, no Casper/Wyoming location exists in their own location listings found; Wyoming appears only as a state open for franchise inquiries (Aussie Pet Mobile), not as an operating Casper location. Nothing to list.

## Excluded — storefront salons and facilities (no mobile service)
- Sudsy Puppy Spa, (307) 267-3082, 420 N Elk St, Casper, WY 82601 — EXCLUDED: storefront salon; its own website says dogs "visits our salon" and prints the fixed 82601 salon address; no mobile/come-to-you service. (Its published email, printed on its own site, was therefore NOT collected — leads are recorded only for businesses in the batch.)
- Dolly Dog Co., (307) 337-7546, 2109 E 12th St, Casper — EXCLUDED: drop-off salon; its own site describes "Scheduled Drop-Offs" and pets staying at the salon until pickup; no mobile service.
- Connie's Pet Palace, (307) 237-8743, 128 Nichols Ave, Casper — EXCLUDED: fixed boarding/daycare/grooming facility ("Pet boarding, daycare, and grooming"); no mobile service.
- Dog World, (307) 237-7494, 331 W Yellowstone Hwy, Casper — EXCLUDED: storefront salon; no mobile service.
- Hair of the Dog, (307) 473-1110, 600 Antler Dr, Casper — EXCLUDED: storefront salon (grooming + self-bathing at the shop); no mobile service.
- Hot Dog Styling, (307) 439-6639, 711 N McKinley St, Casper — EXCLUDED: fixed-address salon; no mobile service confirmed from its own materials.
- Jen's Paw Spa, (307) 309-1962, 801 N Center St A, Casper — EXCLUDED: fixed-address salon; no mobile service.
- Fuzzy Button Grooming Palace, (307) 235-6579, 1109 E 12th St, Casper — EXCLUDED: storefront salon (listings describe drop-off and pick-up at the address); no mobile service.
- Wag & Wash Dog Grooming, (307) 315-1247, 2913 Belmont Rd, Casper — EXCLUDED: fixed-address grooming salon (booking site only); no mobile/come-to-you service confirmed.
- The Groomer, LLC, (307) 337-1571, 2315 E 12th St, Casper, WY 82609 — EXCLUDED: storefront salon; no mobile service.
- The Groom Room (Sunrise Pet Lodge), (307) 262-2685, 4700 S Valley Rd, Casper — EXCLUDED: its own description is "Full Service Pet Grooming Salon" inside a pet lodge; no mobile service.
- Creature Comforts, (307) 265-4452, Casper — EXCLUDED: full-service salon at a fixed location; no mobile service.
- Happy Paws Grooming, (307) 337-6244, 4661 Pontiac St, Mills — EXCLUDED: brick-and-mortar salon (The Daily Groomer classifies it "Brick & Mortar Salon"; its own history describes a converted-garage, then relocated, salon); no mobile service.
- DREAM Dog Grooming, (307) 259-2467, 895 Wyoming Blvd SW, Mills — EXCLUDED: fixed-address salon (booking page only); no mobile service.
- Sarah's Grooming / Dapper Dog Grooming, (307) 251-1644, 260 Crescent Dr, Mills — EXCLUDED: fixed-address salon; no mobile service.
- K-9 Corral, (307) 776-0903, 101 Rivercross Rd, Casper, and Urban Tails, (307) 776-7297, 430 N McKinley St, Casper — EXCLUDED: fixed daycare/lodging facilities; grooming, where offered, is at the facility, not mobile.
- Petco Grooming, (307) 265-0155, 4140 E 2nd St, Casper, and PetSmart Grooming, (307) 462-5782, 505 Newport Rd, Casper, WY 82609 — EXCLUDED: national-chain storefront salons.

## Email leads
- 0 published emails collected: no business qualified for the batch, and leads are recorded only for businesses in the batch. The matching -leads.json is an empty array. No email was written into any business profile.
