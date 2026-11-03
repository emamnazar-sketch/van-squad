# Day 24 — Michigan × Warren × ZIP 48091 × Mobile auto detailing

- **Cell:** MI | Warren | 48091 | Mobile auto detailing (exact category label)
- **Date researched:** 2026-11-03
- **Expansion:** None needed — 6 qualifying businesses confirm service to Warren (including the 48091 area) from their own materials. All service_zips are ["48091"] only: no included business publishes a ZIP list (city/region names only), so no ZIPs were invented.
- **Dedupe:** Every candidate name AND phone was checked against (a) the live-DB snapshot `dedupe-open.txt` (1,988 lines) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. All 6 included businesses are clear on both name and phone in the live DB and were NOT inserted in any earlier batch. Two included businesses (Hutsell's Attention to Detail and Axo Mobile Detailing) appear only as *excluded-candidate notes* in tonight's Detroit 48207 batch file — they were researched there, excluded for Detroit-specific service-area reasons, and never inserted — so they are not duplicates; both explicitly confirm Warren service on their own sites, which is this cell. Tonight's inserted Detroit businesses (DetailXPerts, Exotic Detailing, Motor City Hand Wash, MEHL's Mobile Detailing, 313 Mobile Car Wash, Marry Me Mobile Detail, Agape Mobile Detailing & Pressure Washing) were NOT repeated here, even where a statewide/Metro Detroit claim might have reached Warren.
- **Method:** Business's own website first for phone, mobile confirmation, service area, and any published email; public listings used only for discovery.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Hutsell's Attention to Detail | (586) 404-5456 | Mobile auto detailing | Warren | https://hutsellsdetail.com/ | — none found on own site | High — own site: "Based in Warren. Mobile throughout Metro Detroit," "Professional mobile auto detailing • We come to you," completed at home or workplace; phone (586) 404-5456 printed on the site | https://hutsellsdetail.com/ |
| Axo Mobile Detailing | (248) 275-7750 | Mobile auto detailing | Warren | https://www.axodetailing.com/ | — none found on own site | High — own site: "Metro Detroit's Mobile Car Detailing. We Come to You," detailing "directly to your driveway," and its Macomb County service list explicitly includes Warren; phone 2482757750 on the site | https://www.axodetailing.com/ |
| Dripp Detailing | (810) 569-8010 | Mobile auto detailing | Warren | https://drippdetailing.us/ | — none found on own site | High — own site: mobile detailing that brings equipment "straight to your driveway, office or shop," Macomb County areas served explicitly include Warren; phone (810) 569-8010 on the site | https://drippdetailing.us/ |
| YurCar Detailing | (586) 217-8422 | Mobile auto detailing | Warren | https://yurcardetailing.com/ | — none found on own site | High — own site: "Mobile detailing across Macomb County," "We Come to You — our mobile team arrives at your home or workplace," primary service communities explicitly include Warren; phone +1-586-217-8422 on the site | https://yurcardetailing.com/ |
| R Premium Detailing | (586) 489-3930 | Mobile auto detailing | Warren | https://r-premium-detailing-pi.vercel.app/ | — none published on own site (Instagram handle only) | High — own site: "Metro Detroit's mobile detailing unit — Serving Sterling Heights, Troy, Rochester & Warren," "Every package is completed at your location"; phone (586) 489-3930 on the site | https://r-premium-detailing-pi.vercel.app/ |
| Vickie V's Mobile Detailing | (313) 398-0354 | Mobile auto detailing | Warren | https://vickie-vs-detailing.com/ | — none found on own site | Medium — own site is "Vickie V's Mobile Detailing," says it provides quality services to Metro Detroit and prints 313-398-0354; its public listing places it at a Warren address, but its own site does not name Warren explicitly | https://vickie-vs-detailing.com/ |

## Email leads

0 published emails collected — none of the 6 included businesses publishes an email address on its own website or listing, so the -leads.json file is an empty array. No addresses were guessed.

## Excluded

- **OmniJoy Detailing** ((800) 738-9578) — own site confirms a self-contained mobile unit serving Warren, but its ONLY published phone numbers are toll-free ((800) 738-9578 to call, (844) 871-7200 to text) — excluded under the toll-free-only rule. Its published email was therefore not collected as a lead.
- **Sterling Heights Car Detailing** (sterlingheightscardetailing.com) — own site confirms mobile service to Warren, but no phone number is published anywhere on its site (online appointment request only) — excluded, no verifiable public phone.
- **MEHL's Mobile Detailing** ((734) 201-7518) — serves Michigan statewide and would reach Warren, but it was already inserted tonight in the Detroit 48207 cell — not repeated, per tonight's dedupe rule.
- **Cramys Mobile Detailing** ((586) 219-9945, Warren address on its public listing) — Instagram/Google listing only; no own website or own materials found to confirm on-site service beyond the name.
- **Timeless Garage & Mobile Detailing** ((313) 288-6152, Warren address on its public listing) — Instagram/Google listing only; no own website or own materials found to confirm on-site service beyond the name.
- **Morales Mobile Auto Detailing** ((586) 864-0675) — Troy-based; its own materials do not explicitly confirm service to Warren/48091.
- **DZEN — Mobile Detailing** ((818) 923-7568) — own site says its service area is Greater Los Angeles, CA; not a Michigan operator.
- **DetailXPerts / Exotic Detailing / Motor City Hand Wash / 313 Mobile Car Wash / Marry Me Mobile Detail / Agape Mobile Detailing & Pressure Washing** — Detroit/Metro Detroit mobile detailers already inserted tonight in the Detroit 48207 cell — not repeated in this cell.
- **National Detail Pros** ((800) 601-0626) — national lead-gen/call-center network with a toll-free number; no local Warren operator.
- **Ts mobile detailing & transportation** ((866) 978-2126) — only published phone is toll-free.
- **VP Pro Detailing, J&J's Auto Detailing, Defined Detail Studio, Detail City, Wrap Starz Customization, Kelly Car Wash, Shocar Detailing** — fixed shop/car-wash detailers in or near Warren with no confirmed mobile/on-site offer in their own materials — storefront-only.

## Files

- `day-24-mi-warren-zip48091-mobile-auto-detailing.md` — this batch file
- `day-24-mi-warren-zip48091-mobile-auto-detailing-inserts.json` — 6 businesses + 6 listings (validated with python3 -m json.tool)
- `day-24-mi-warren-zip48091-mobile-auto-detailing-leads.json` — 0 published-email leads, empty array (validated)

No database inserts were made; no files outside this batch were edited.
