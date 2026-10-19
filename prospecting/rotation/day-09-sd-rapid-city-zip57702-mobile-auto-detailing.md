# Day 9 — Rapid City, SD · ZIP 57702 · Mobile auto detailing

**Insert-ready: 2 businesses (+2 listings). Leads: 0.**

**ZIP expansion note:** ZIP 57702 alone yielded fewer than 3 qualifying businesses, so the cell was expanded per the brief to adjacent Rapid City ZIPs 57701/57703 and the immediately surrounding Rapid City metro (Piedmont, Box Elder, Black Hawk, Summerset) — the full Rapid City detailing market was swept. Even expanded, only 2 businesses pass every gate: Rapid City's detailing trade is dominated by fixed shops and tunnel car washes, and most of its genuinely mobile operators publish no phone or no mobile evidence (see near-misses). The shortfall is a thin-territory result, not a research shortcut: 15+ search passes were run across Google Business records, business websites, Yelp/Thumbtack-style queries, findglocal, and "we come to you" phrasing.

service_zips reasoning: neither business publishes a ZIP list; both market to Rapid City and nearby areas, so each row carries Rapid City's three geographic ZIPs (57702/57701/57703) with the target ZIP 57702 first, consistent with the Day-8/Day-9 Sioux Falls and Rapid City precedents (citywide claim → city ZIPs).

## Included

| # | Business | Phone | Category | City | Website | Published email + source | Confidence + reason | Sources |
|---|----------|-------|----------|------|---------|--------------------------|-----------------------|---------|
| 1 | Freedom Mobile Wash & Detail | (605) 415-6482 | Mobile auto detailing | Rapid City | http://www.freedommobilewash.com/ | None published (no email on own site or listing) | **High** — phone printed twice on its own website ("Call Us 605-415-6482") and the Google Business Profile agrees (+16054156482). Mobile confirmed repeatedly on its own site: "We bring the CLEAN to YOU!", "Let us come to you and make your car as good as new!", and its GBP description: "We are a mobile detailing service that brings the car wash right to you!" Based in Piedmont, SD (13402 Frontier Loop, ~10 mi NW of Rapid City) and serving the Rapid City area as a come-to-you service — listed under Rapid City per the Day-8 DoItBest precedent (outlying base, target-city service). NOT the same business as Freedom Mobile Detailing of Sioux Falls (Day 8, (605) 951-0751) — different name, phone, and city; see dedupe note. | Own site http://www.freedommobilewash.com/ ; GBP record via search |
| 2 | Fanntastic Detailing | (636) 875-2782 | Mobile auto detailing | Rapid City | https://fanntasticdetailing.com/ | None published (no email on own site or listing) | **Medium** — mobile confirmed in the business's own Google Business Profile description: "Fanntastic Detailing Mobile Detailing service serving Rapid City and nearby areas! … Let us Renew Your Ride!" Its own website confirms the detailing services (full interior detail packages). Phone is GBP-only (+16368752782) — it does not appear on the fetched homepage of its own site and no second source corroborates it, and the 636 area code (Missouri) appears to be a kept out-of-state number, on the Day-8 Olsen / Day-9 M&C precedent → Medium, not High. Based in Box Elder, SD (1052 Deadwood Lp), serving Rapid City. Coordinator may veto on the single-source phone. | GBP record via search ; own site https://fanntasticdetailing.com/ |

## Leads (0)

- Neither included business publishes a business email on its own website or public listings (both are call/form-only). Leads file is an empty array.
- An email WAS seen on an excluded business — Black Hills Auto Grooming publishes info@blackhillsag.com on its own site — but that business is a fixed car wash (see exclusions), so no lead was collected for it: leads are only collected for businesses in the cell.

## Dedupe

- All candidate name/phone pairs checked against every *-inserts.json in ~/workspace/van-squad/prospecting/rotation/ plus the other files in ~/workspace/van-squad/prospecting/ (692 existing businesses at write time, including all of today's Day-9 files): zero collisions by name or phone for either included business.
- Near-name flagged for the coordinator: **Freedom Mobile Wash & Detail** (this cell, Piedmont/Rapid City, (605) 415-6482) vs the already-inserted **Freedom Mobile Detailing** (Day 8, Sioux Falls, (605) 951-0751). Different exact name, different phone, different metro 350+ miles apart — treated as two distinct businesses, on the same reasoning as the Day-9 Rapid City house-cleaning batch's Maid To Clean LLC near-name note.
- No Rapid City mobile-auto-detailing cell existed before tonight (Day 9's other Rapid City cells were 57701 House cleaning and 57701 Handyman), so there are no same-cell duplicates.

## Near-misses (real businesses, excluded — mobile-to-customer unconfirmed and/or phone single-source)

- **Color Mystique** (402 Maple Ave, Rapid City; (605) 342-5828; http://www.colormystiquesd.com) — the strongest near-miss. Its own GBP description (the menu is headed "York's Detailing") says: "There are some services I cannot offer due to me not having a shop and working outside in the sun" — so it is NOT a storefront, but it never says it travels to the customer; outdoor work at its own Maple Ave base (customer drop-off) could not be ruled out, so mobile-to-customer is unconfirmed. Phone is also GBP-only, and the listing name (Color Mystique) does not match the operating name in its own menu (York's Detailing). Held for recheck — one explicit "we come to you" statement from the business would clear it.
- **Wash Wizard Detailing** (820 4th St, Rapid City; (605) 569-0689) — books through a DetailerMade booking page (a platform used by mobile detailers), but neither the GBP record nor the booking page itself states that it comes to the customer, and the phone is GBP-only → mobile unconfirmed, excluded on the Sioux Falls near-miss precedent.
- **Chelles Detailing LLC** (225 Omaha St, Rapid City; (605) 519-3070) — GBP-only listing, no website found, no mobile evidence anywhere → excluded.
- **The Car Custodian** (Meade County, SD; (605) 939-3907; https://thecarcustodian.com/) — GBP-only phone; its website could not be fetched in this run and no mobile/come-to-you evidence surfaced in search → mobile unconfirmed, excluded.
- **"Mobile Auto Detailing New Underwood SD"** (22661 161st Ave, New Underwood) and **"Full Service Auto Detailing Rapid City SD"** (829 Haines Ave) — generic GBP listings with no phone published at all → excluded (phone rule).

## Excluded (wrong model / unusable)

- Fixed shops/studios verified from their own materials: **Douglas Detail Works** (1141 Rand Rd Suite D, Rapid City 57702 — own site gives the suite address and "Right off of Deadwood Ave"; shop-based ceramic/detail studio), **T and T Auto Detailing** (901 E Philadelphia St — own site: "please stop by", "Vehicle must be left overnight", drop-off appointments), **The Detail Co.** (521 N Creek Dr), **Bulldog Auto Detailing** (4624 Creek Dr #3), **Unique Auto Grooming / Unique Auto Paint Technologies** (Black Hills Works shop enterprises, 111 Poplar Ave / 315 1st St), **Grime to Shine Detailing** (6211 Black Hawk Rd Unit 101, Black Hawk — shop suite), **Reflective Rides** (11810 Quaal Rd, Black Hawk — "Come check us out today"), **Rapid Detailers** (414 Americas Way Suite 2, Box Elder — shop), **All American Detailing** (Custer, SD — shop, and outside the Rapid City metro).
- Car washes (not detailing-at-customer businesses): Black Hills Auto Grooming (3465 Sturgis Rd, 57702 — own site: "Your Neighborhood Car Wash", valet mention only, no at-home detailing), Black Hills Auto Spa, Super Clean Tunnel Wash, Super Tunnel Car Wash, The Flying Pig Car Wash, Big D Car Wash, All Clean Auto Spa, Rapid Wash, Canyon Lake Car Wash, Black Hills Pro Wash.
- **Slick Mobile Detail Services** — namesake ruled out: it is a Billings, MT business (3847 Montana Ave; (406) 500-6181; slickmds.com now describes a walk-in hand-wash in Billings), not a Rapid City operator.
- **Nomad Mobile Detailing** — namesake ruled out: a Virginia business ("Rated 5 Stars by Virginia Car Owners"), not South Dakota.
- **Reflection Detailing** — Sioux Falls fixed shop already excluded on Day 8; its Rapid City history (a cargo van in the early 2000s) is narrative, not a current Rapid City mobile service.

## Cell-result summary

SD × Rapid City × 57702 × Mobile auto detailing: **2 insert-ready businesses (1 High, 1 Medium), 0 published-email leads**, ZIP expansion to 57701/57703 + the surrounding metro (Piedmont/Box Elder/Black Hawk/Summerset) applied and noted, 0 dedupe skips (1 near-name flagged), 2 strong near-misses held for recheck (Color Mystique — needs one explicit come-to-you statement; Wash Wizard Detailing — mobile unconfirmed), and a large fixed-shop/car-wash field excluded. Territory is genuinely thin for verified mobile detailers; the count was not padded.
