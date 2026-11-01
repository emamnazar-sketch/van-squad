# Day 22 — Illinois — Oak Park — ZIP 60302 — Handyman

Date: 2026-11-01
Cell: IL / Oak Park / 60302 / Handyman
Sources: Business's own website first, then public listings (Google Business / places listings, Oak Park–River Forest Chamber of Commerce). No database insertion performed by this worker.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| The Oak Park HandyHuman, Inc. | (708) 303-8615 | Handyman | Oak Park | https://www.theoakparkhandyhumaninc.com/ | info@theoakparkhandyhumaninc.com — https://www.theoakparkhandyhumaninc.com/ | High — own site shows 708.303.8615 and the email, lists home repairs/punch lists at customers' homes, and says "Serving Oak Park, River Forest, North Riverside, Forest Park and the western suburbs"; listing address 1015 S Kenilworth Ave, Oak Park | https://www.theoakparkhandyhumaninc.com/ (own site) + Google listing |
| Oak Park Handy Co. | (708) 512-4899 | Handyman | Oak Park | https://oakparkhandyco.com/ | info@oakparkhandyco.com — https://oakparkhandyco.com/ | High — own site shows +1-708-512-4899 and the email, family-owned team "living and working in Oak Park, River Forest, and Forest Park," small home repairs done in one visit, explicitly serves Oak Park | https://oakparkhandyco.com/ (own site) |
| Moore Handyman Solutions LLC | (630) 796-0978 | Handyman | Oak Park | https://www.moorehandymansolutions.com/ | renovate@moorehandymansolutions.com — https://www.moorehandymansolutions.com/ | High — own site shows (630) 796-0978 and the email, says "We are located in the Oak Park/Forest Park, Area," and gives its address as 7627 Lake Street, River Forest, IL 60305 (M.H.S Moore Handyman Solutions LLC in listings) | https://www.moorehandymansolutions.com/ (own site) |
| Andy Sjostrom Handyman Services | (708) 833-3830 | Handyman | Oak Park | http://www.sjoreno.com/ | None published verifiably | Medium — own site (Sjostrom Renovation) confirms handyman work at homes ("hanging artwork, replacing a faucet, or patching drywall… any home repair project"); phone and Oak Park address (1012 Clinton Ave) come from the public listing only, consistent across listings | https://sjoreno.com/handyman-services/ (own site) + public listing |
| Kraken Home Services | (312) 379-9255 | Handyman | Oak Park | https://www.krakenhomeservices.com/ | kris@krakenhomeservices.com — https://www.krakenhomeservices.com/ | Medium — own site publishes (312) 379-9255 and kris@krakenhomeservices.com with a project-contact invitation; public listing confirms Handyman category at 7627 Lake St, River Forest, in the Oak Park tri-village service area; own site does not spell out a service-area list | https://www.krakenhomeservices.com/ (own site) + public listing |
| Near Me Handyman Services LLC | (331) 240-9003 | Handyman | Oak Park | http://nearmehandymanservices.com/ | None published verifiably | Medium — own site shows (331) 240-9003 consistently, same-day repairs at the customer's door across Forest Park and the greater Chicagoland area (Forest Park directly borders Oak Park 60302); address 1040 Marengo Ave, Forest Park from its own site/listing | http://nearmehandymanservices.com/ (own site) |

## Dedupe
- Grepped all files in ~/workspace/van-squad/prospecting/ for every candidate name and phone (formatted and unformatted — HandyHuman, Oak Park Handy, Moore Handyman, Sjostrom, Kraken Home, Near Me Handyman, and all six phones): no matches for any of the 6 included businesses.
- Live DB check via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` for all 6 phones: HTTP 200, empty result [] for every phone — no duplicates in the live database.
- No day-22 Oak Park file existed on disk before this batch; no included business shares a name or phone with another included business.
- Same name or same phone = skip rule applied throughout.

## Excluded (checked but failed gates)
- Mr. Handyman of Oak Park and River Forest — (708) 247-5642, 1523 N Harlem Ave, Oak Park, IL 60302 — national franchise chain (Neighborly), excluded following the Day 22 Chicago 60618 precedent for this brand.
- Ace Handyman Services Oak Park — (708) 584-0086, 207 Harlem Ave, Oak Park — national franchise chain (Ace Hardware), locally owned franchise but a national brand network; excluded on the same franchise basis as Mr. Handyman.
- Kaminskiy Care and Repair — (708) 809-2577, own site lists an Oak Park, IL 60301 office address — national multi-state handyman company (listings in CA, WA and other states with different local numbers); no single local operator confirmed for Oak Park, excluded as a national operation.
- Handyman Jack LLC / op-handyman.com — listing says "Possibly Temporarily Closed" and its website is now a parked domain showing unrelated toll-free numbers ((888) 123-4567 / (877) 813-2829) that conflict with the listing phone (224) 715-0503 — PHONE CONFLICT + no verifiable own site, excluded.
- Ford Handyman (Forest Park) — PHONE CONFLICT on its own website: the page shows both (708) 838-2182 and (708) 905-6054; site is also largely template/lorem-ipsum content, excluded.
- Aguilar A+ Home Maintenance (Berwyn) — PHONE CONFLICT: own website and Birdeye show (708) 477-7743, while the Google/places listing shows (708) 500-8932 for the same 2512 Ridgeland Ave, Berwyn address, excluded.
- Abby's Handyman — (708) 848-0699, 320 S Taylor Ave, Oak Park — public listing only, no website or own materials found, so mobile/on-site service could not be confirmed from the business's own materials, excluded.

## ZIP note
- Expansion was needed: only two included businesses are based in Oak Park itself (HandyHuman at 1015 S Kenilworth Ave, Oak Park 60304, and Sjostrom at 1012 Clinton Ave, Oak Park 60304 — both adjacent Oak Park ZIP 60304), and the rest are tri-village businesses in directly adjacent River Forest (60305) / Forest Park (60130) whose own sites explicitly serve Oak Park. All six serve ZIP 60302.
- service_zips in inserts.json is ["60302"] only for every business, because none of the businesses publish a specific ZIP list — they publish city/area service names (Oak Park, River Forest, Forest Park, western suburbs / Chicagoland), and ZIPs were not invented.

## Coordinator correction (2026-11-01, post-deploy)
The Handyman Next Door was inserted on a report-only "PASS" that a later independent verifier and the coordinator's own searches contradicted — zero public trace of the name, phone, or domain. Its row (and listing) was set to status "removed" the same day. The cell's verified contribution is 4: The Oak Park HandyHuman Inc., Oak Park Handy Co., Moore Handyman Solutions LLC, Andy Sjostrom Handyman Services. Kraken Home Services and Near Me Handyman Services LLC remain excluded (verifiers disagreed on Near Me; exclusion is the safe direction).
