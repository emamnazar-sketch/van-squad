# Day 25 — Indiana × Fort Wayne × ZIP 46804 × Mobile auto detailing

- **Cell:** IN | Fort Wayne | 46804 | Mobile auto detailing (exact label)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 6 qualifying businesses found serving Fort Wayne / 46804. No adjacent-ZIP expansion.
- **Dedupe:** Every candidate name AND phone checked against (a) /tmp/day25-open.json (2,173 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. No name or phone matches for the 6 businesses below.
- **Phone rule:** All phones are Fort Wayne local (260) numbers, verified on the business's own website; none is toll-free-only.
- **Mobile/on-site:** Each business's own materials confirm detailing performed at the customer's home/work/location in Fort Wayne (see reasons; Clean A Ride and GlossLabs are graded Medium for the caveats noted).
- **service_zips:** No business below publishes a ZIP list on its own site, so all get ["46804"] only — city/neighborhood service-area names were NOT converted into ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Don't Sweat The Detail | (260) 312-7226 | Mobile auto detailing | Fort Wayne | https://detailingfortwayne.com/ | info@detailingfortwayne.com — https://detailingfortwayne.com/ (own site GET IN TOUCH block) | High — own site: "Mobile Car Detailing in Fort Wayne – We Bring the Shine to You," "we bring premium detailing services directly to you—at home, work…," "All services are performed at your location," "We're a mobile detailing service and come to you—no need to visit a shop," with phone 260-312-7226 and the email printed in the contact block | https://detailingfortwayne.com/ |
| Faithfully Fitted Auto Mobile Detailing | (260) 704-2959 | Mobile auto detailing | Fort Wayne | http://www.faithfullyfitteddetailing.com/ | — none published on its own site that could be verified | High — own site: "licensed, and insured mobile detailing business, dedicated to serving the Greater Fort Wayne area," "Providing front-door service at your home or business," mobile vehicles equipped with own water/electricity, and "please call 260-704-2959" printed on the site; BBB listing confirms the same phone/address in Fort Wayne | http://www.faithfullyfitteddetailing.com/ |
| Fort Wayne Auto Detailing | (260) 203-1744 | Mobile auto detailing | Fort Wayne | https://fortwaynemobile.us/ | — none used (see note below) | Medium — own site: Home of the "'We Come to You' mobile auto detailing service in Allen County, Indiana," phone 260-203-1744 at the top, owners named as Randy and Rachel, 7 years serving Allen County, "a mobile car detailing service that will come to your home or office"; graded Medium because the site's privacy page directs questions to a third-party network address (info@consumerselectonline.com), which was NOT treated as this business's email or used as a lead | https://fortwaynemobile.us/ |
| Cleanly | (260) 226-3419 | Mobile auto detailing | Fort Wayne | https://www.drivecleanly.com/ | — none published on its own site that could be verified (ryan@goshineauto.com was seen only on a third-party Trustindex page, so it was NOT used as a lead) | Medium — own site (business also listed on Google as "Cleanly Car Detailing Fort Wayne" / "Cleanly Detailing"): "As a mobile car wash, we come to you. Cleanly is a mobile car detailing service… from the comfort of your home or office," "At Home or At Shop service available," Fort Wayne address 1225 White Oak Dr and "Phone: 2602263419" printed on the site; graded Medium because the site also carries leftover template copy referring to an "Oregon Metropolitan Area" and the trading name varies by source | https://www.drivecleanly.com/ |
| Clean A Ride | (260) 300-0407 | Mobile auto detailing | Fort Wayne | https://cleanaride.com | — none published on its own site that could be verified | Medium — own site is titled "Mobile Detailing & Ceramic Coating in Fort Wayne, IN," its business description lists "mobile detailing" among its Fort Wayne services, and it prints address 12812 Braveheart Dr, Fort Wayne, IN 46814 and phone (260) 300-0407 repeatedly; graded Medium because the homepage body does not spell out a "we come to you" sentence as explicitly as the High/Medium peers above | https://cleanaride.com |
| GlossLabs LLC | (260) 445-9923 | Mobile auto detailing | Fort Wayne | https://glosslabs-detailing.wj2svjpvjk.chatgpt.site/ | GlossLabs2026@outlook.com — https://glosslabs-detailing.wj2svjpvjk.chatgpt.site/ (own site contact block) | Medium — own published site: "Mobile detailing at your home or work," "Do you come to me? Yes. Core interior and exterior detailing services are mobile in Fort Wayne and surrounding areas" (paint enhancement/ceramic are garage-only, disclosed on the site), business block "Name: GlossLabs LLC / 260-445-9923 / GlossLabs2026@outlook.com"; graded Medium because the site is hosted on a chatgpt.site subdomain rather than a custom domain | https://glosslabs-detailing.wj2svjpvjk.chatgpt.site/ |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Don't Sweat The Detail | info@detailingfortwayne.com | https://detailingfortwayne.com/ |
| GlossLabs LLC | GlossLabs2026@outlook.com | https://glosslabs-detailing.wj2svjpvjk.chatgpt.site/ |

2 leads — see `day-25-in-fort-wayne-zip46804-mobile-auto-detailing-leads.json`.

## Excluded

- **Pixel Perfect Detailing** — (260) 209-4530, 46804 on its own site, but its own FAQ says: "Headlight restoration is available as a mobile service — we come to you. All other services are performed at our location" and its exterior detail is listed "Where: Shop · 46804" — a fixed shop with only one minor mobile service, not mobile auto detailing; excluded by rule.
- **ProElement Mobile Detailing** — Google listing phone (260) 446-4299, but no own website could be found, so mobile service could not be confirmed from the business's own materials; excluded.
- **Big Ape Mobile Detailing** — Google/TikTok presence only, phone (260) 203-7819 on a listing, no own website found confirming mobile service from its own materials; excluded.
- **DD's Mobile Detailing** — Google listing phone (260) 413-2252 and social posts only, no verifiable own website for the Fort Wayne business; excluded.
- **Elite Mobile Detailing (Fort Wayne)** — conflicting records: one own-domain listing (elitemobiledetailingfw.com, (260) 264-7614) is marked Permanently Closed, while a directory page (maplenmain.com) gives a different phone, (260) 246-2251 — closed/conflicting, excluded.
- **Lusso Detail** — own site is a shop/Square storefront (lussodetail.com), no mobile/come-to-you service confirmed on its own materials; excluded as fixed shop.
- **TopLine Auto Salon; SweetCars** — Fort Wayne shops ("the Fort Wayne, IN shop drivers trust"; detailing department at a dealership address) with no mobile detailing confirmed; excluded as fixed shops.
- **Complete Detailing** — fully mobile, but its own site says it is based in / serving Garrett, IN, not Fort Wayne as its city; excluded for this Fort Wayne cell.
- **National Detail Pros; Fort Wayne Auto Detailing network pages other than the local operator above** — national lead-gen (800 number, nationwide detailer network) excluded by rule where it is the operator; the local Fort Wayne Auto Detailing operator is included separately above with its caveat noted.
- **Mike's Carwash; Ziebart; The Tube Car Wash** — fixed car-wash / shop chains, no mobile detailing; excluded.
- **Powerr Auto Detailing** — Wix site found, but its listing phone is a non-local (908) number and mobile service for Fort Wayne could not be confirmed from its own materials; excluded.
- **Shine Plus; R2 Automotive Detailing; Funks Detailing; Abors detailing; Jobtown Detailing; Next Level Detailing LLC; Witte Detail & Pristine Touch; M&C Car Detailing; Car Wash Mendoza** — listing/social-only, no verifiable own website confirming mobile detailing in Fort Wayne; excluded.

## Files

- `day-25-in-fort-wayne-zip46804-mobile-auto-detailing.md` (this file)
- `day-25-in-fort-wayne-zip46804-mobile-auto-detailing-inserts.json` — 6 businesses + 6 listings, validated with `python3 -m json.tool`
- `day-25-in-fort-wayne-zip46804-mobile-auto-detailing-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
