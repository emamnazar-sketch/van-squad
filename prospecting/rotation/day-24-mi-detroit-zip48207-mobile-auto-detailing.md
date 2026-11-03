# Day 24 — Michigan × Detroit × ZIP 48207 × Mobile auto detailing

- **Cell:** MI | Detroit | 48207 | Mobile auto detailing (exact category label)
- **Date researched:** 2026-11-03
- **Expansion:** None needed — 7 qualifying businesses confirm service to Detroit / Metro Detroit (including the 48207 area) from their own materials. All service_zips are ["48207"] only: no included business publishes a ZIP list (city/region names only), so no ZIPs were invented.
- **Dedupe:** Every candidate name AND phone was checked against (a) the live-DB snapshot `dedupe-open.txt` (1,988 lines) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. All 7 included businesses are clear on both name and phone. One name collision was found and excluded (see Excluded: Drip Mobile Detailing).
- **Method:** Business's own website first for phone, mobile confirmation, service area, and any published email; public listings used only for discovery.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| DetailXPerts | (313) 924-9779 | Mobile auto detailing | Detroit | https://www.detailxperts.net/detroitdowntown/ | — none published on the Detroit location page | High — own Detroit Downtown location page says its detailers "will come to perform" the detail, mobile vans detail "at your home, workplace," and prints 313-924-9779 for Detroit | https://www.detailxperts.net/detroitdowntown/ |
| Exotic Detailing | (313) 942-9421 | Mobile auto detailing | Detroit | http://exotic-detailing.com | — none found on own site | High — own site is "Mobile Only · Detroit & Miami," "we come to your home or office — Detroit & Miami covered," Detroit phone (313) 942-9421 printed on the site | http://exotic-detailing.com |
| Motor City Hand Wash | (313) 623-0256 | Mobile auto detailing | Detroit | https://motorcityhandwash.com/ | — none found on own site | High — own site: "Mobile detailing • Metro Detroit," "Our mobile team brings vehicle care to your location," FAQ confirms mobile detailing, phone 313-623-0256 on the site | https://motorcityhandwash.com/ |
| MEHL's Mobile Detailing | (734) 201-7518 | Mobile auto detailing | Detroit | https://mehlsmobiledetailing.com/ | tyler@mehlsmobiledetailing.com — https://mehlsmobiledetailing.com/ | High — own site: fully mobile, "Tyler arrives at your location," Metro Detroit is its primary region and service is statewide in Michigan; phone and email printed in the site footer | https://mehlsmobiledetailing.com/ |
| 313 Mobile Car Wash | (313) 488-5980 | Mobile auto detailing | Detroit | https://detroitmobilecardetailing.bid/ | — none found on own site | High — own site: "We're fully mobile. We come to your home, apartment, or workplace," and its service-area list explicitly includes Detroit; phone (313) 488-5980 throughout the site | https://detroitmobilecardetailing.bid/ |
| Marry Me Mobile Detail | (313) 550-2722 | Mobile auto detailing | Detroit | https://marrymedetail.lovable.app/ | marrymemobiledetail@gmail.com — https://marrymedetail.lovable.app/ | High — own site: "Premium mobile auto detailing brought to you," "We bring our premium services directly to your home," Detroit Metro Area, phone and email in the contact section | https://marrymedetail.lovable.app/ |
| Agape Mobile Detailing & Pressure Washing | (313) 688-2359 | Mobile auto detailing | Detroit | https://www.agapedetail.net/ | info@agapedetail.net — https://www.agapedetail.net/ | High — own site: mobile detailing for Metro Detroit, address listed as "Wherever You Are," phone 313-688-2359 and email printed on the site | https://www.agapedetail.net/ |

## Email leads

3 published emails collected (kept separate from the directory, in the -leads.json file only):

| Business | Email | Source URL |
|---|---|---|
| MEHL's Mobile Detailing | tyler@mehlsmobiledetailing.com | https://mehlsmobiledetailing.com/ |
| Marry Me Mobile Detail | marrymemobiledetail@gmail.com | https://marrymedetail.lovable.app/ |
| Agape Mobile Detailing & Pressure Washing | info@agapedetail.net | https://www.agapedetail.net/ |

## Excluded

- **Dee's Auto Detailing** (Clinton Township / Metro Detroit) — mobile service confirmed on its own site and it explicitly serves Detroit, but its ONLY published phone is toll-free (800) 291-4027 — excluded under the toll-free-only rule.
- **Drip Mobile Detailing** (2610 E Vernor Hwy, Detroit; (248) 416-4056, Google listing only) — the name "Drip Mobile Detailing" already exists in the live DB for a different operator in Metairie, LA ((504) 270-3165); the Detroit listing has no website or own materials to confirm it is a genuinely distinct local operator or to confirm on-site service — skipped on dedupe/verification.
- **Axo Mobile Detailing** ((248) 275-7750) — own site's Wayne County service list covers only "Northern Detroit" and the Grosse Pointe border within a 20-mile radius of Shelby Township; service to 48207 is not confirmed.
- **Hutsell's Attention to Detail** ((586) 404-5456) — based in Warren; own site says Metro Detroit travel availability must be confirmed per address; Detroit/48207 service not explicitly confirmed.
- **Rob's Mobile Carwashing and Detailing** ((313) 717-5472) — Google listing only; no website or own materials found to confirm mobile/on-site service.
- **Pristine Auto Detailing Mobile** ((906) 613-3412) — Google listing only; 906 is a Michigan Upper Peninsula area code, no website, and no own materials confirming Detroit on-site service.
- **Mr. Pops Detail Shop** ((313) 877-9160) — fixed detail shop on E Jefferson Ave in Detroit; its own site shows shop service with no mobile/on-site offer — storefront-only.
- **National Detail Pros** ((800) 601-0626) — national lead-gen/call-center network with a toll-free number; no local Detroit operator.
- **Ts mobile detailing & transportation** ((866) 978-2126) — only published phone is toll-free.
- **Morales Mobile Auto Detailing** ((586) 864-0675) — Troy-based; its own materials do not confirm service to Detroit/48207 (researched as a metro candidate, not confirmed for this cell).
- **Downtown Auto Wash Inc / The Original Soft Cloth Car Wash / Drip Station Detailing Spa** — fixed car-wash/detail shops with no confirmed mobile service to the customer.

## Files

- `day-24-mi-detroit-zip48207-mobile-auto-detailing.md` — this batch file
- `day-24-mi-detroit-zip48207-mobile-auto-detailing-inserts.json` — 7 businesses + 7 listings (validated with python3 -m json.tool)
- `day-24-mi-detroit-zip48207-mobile-auto-detailing-leads.json` — 3 published-email leads (validated)

No database inserts were made; no files outside this batch were edited.
