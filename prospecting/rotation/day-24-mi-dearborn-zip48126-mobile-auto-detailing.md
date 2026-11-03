# Day 24 — Michigan × Dearborn × ZIP 48126 × Mobile auto detailing

- **Cell:** MI | Dearborn | 48126 | Mobile auto detailing (exact category label)
- **Date researched:** 2026-11-03
- **Expansion:** None needed — 4 qualifying businesses confirm service to Dearborn / Metro Detroit (which includes Dearborn) from their own materials. All service_zips are ["48126"] only: no included business publishes a ZIP list, so no ZIPs were invented.
- **Dedupe:** Every candidate name AND phone was checked against (a) the live-DB snapshot `dedupe-open.txt` (1,988 lines) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. All 4 included businesses are clear on both name and phone. The one "Denson" grep hit in prospecting was a street name (Denson Dr, Hobbs, NM), not this business. Businesses already used in tonight's Day-24 Detroit 48207 cell (MEHL's Mobile Detailing (734) 201-7518, 313 Mobile Car Wash (313) 488-5980, DetailXPerts, Exotic Detailing, Motor City Hand Wash, Marry Me Mobile Detail, Agape Mobile Detailing & Pressure Washing) were NOT repeated here even though several serve Metro Detroit.
- **Method:** Business's own website/booking page first for phone, mobile confirmation, service area, and any published email; public listings (Google/places data) used for discovery and for a business's Dearborn address where noted.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| AutoAllDetailing | (313) 699-1032 | Mobile auto detailing | Dearborn | https://autoalldetailing.setmore.com/ | — none published on own booking page | High — own booking page: "professional mobile detailing company dedicated to delivering top-quality results right to your doorstep," and its contact block reads "AutoAllDetailing, Dearborn, Michigan 48126. +13136991032" — based in the target ZIP itself | https://autoalldetailing.setmore.com/ |
| S&M Detailing | (313) 300-3304 | Mobile auto detailing | Dearborn | https://sandmdetailing.com/ | — none found on own site | High — own site: "Metro Detroit's Premier Mobile Car Detailing," "Professional detailing delivered to your door," "Mobile Service — We come to you," contact "Moe: (313) 300-3304, Metro Detroit, Michigan"; Dearborn is a core Metro Detroit / Wayne County city | https://sandmdetailing.com/ |
| Denson Auto Detail | (248) 214-6777 | Mobile auto detailing | Dearborn | http://densonautodetail.com/ | — none found on own site | High — own site headline: "Providing High-Quality Mobile Detailing Services" with "Phone: 248-214-6777" on the site; its public listing address is 6659 Schaefer Rd #1032, Dearborn, MI (in/near 48126) | http://densonautodetail.com/ |
| Jazzy Fresh Mobile Detailing | (734) 252-9210 | Mobile auto detailing | Dearborn | https://www.thejfexp.com/ | Thejfexp@gmail.com — https://www.thejfexp.com/auto-detailing-faqs | Medium — own site: fully mobile ("We are a fully mobile detailing company servicing Metro Detroit"), self-contained mobile van, and a mileage-fee policy covering areas not listed ("Don't see your area? … We can always get you taken care of"); Westland base is ~12 mi from Dearborn, but no Dearborn-specific page was found; phone and email printed in the site's CONTACT US block | https://www.thejfexp.com/auto-detailing-faqs |

## Email leads

1 published email collected (kept separate from the directory, in the -leads.json file only):

| Business | Email | Source URL |
|---|---|---|
| Jazzy Fresh Mobile Detailing | Thejfexp@gmail.com | https://www.thejfexp.com/auto-detailing-faqs |

## Excluded

- **MEHL's Mobile Detailing** ((734) 201-7518), **313 Mobile Car Wash** ((313) 488-5980), **Marry Me Mobile Detail** ((313) 550-2722), **Motor City Hand Wash** ((313) 623-0256), **DetailXPerts** ((313) 924-9779), **Exotic Detailing** ((313) 942-9421), **Agape Mobile Detailing & Pressure Washing** ((313) 688-2359) — all serve Metro Detroit, but all were already used in tonight's Day-24 Detroit 48207 cell — skipped on dedupe against tonight's earlier waves.
- **Dee's Auto Detailing** (Clinton Township) — own site explicitly lists Dearborn in its service areas and confirms mobile/on-site service, but its ONLY published phone is toll-free (800) 291-4027 — excluded under the toll-free-only rule (its published email was therefore not collected as a lead).
- **National Detail Pros** ((800) 601-0626) — national lead-gen/call-center network with a toll-free number; no local Dearborn operator.
- **Chrome & Clean Mobile Detailing** (4210 Jonathon St, Dearborn; (313) 960-2039, places listing) — the name itself says mobile and the phone is local, but the business's only linked booking page (Housecall Pro) now opens as a different company ("Welcome to Custom Klimates"), so mobile/on-site service could not be confirmed from the business's own current materials — skipped on verification.
- **Dirt To Diamonds Mobile Detailing Service** (24626 Cherry Hill St, Dearborn; (313) 608-4416) — name and places listing say mobile and the phone is local, but its only web presence found is an Instagram profile with no accessible own materials confirming on-site service or the phone — skipped on verification.
- **C63 mobile detailing** (Dearborn; (313) 310-8686) — places listing only; no website or own materials found to confirm mobile/on-site service.
- **Jays Auto Detailing** (Maple St, Dearborn; (313) 888-3041) — places listing only; no own materials confirming mobile/on-site service.
- **Wings Mobile Detailing** (Fraser location; (313) 572-4352) — genuinely mobile franchise location with its own local phone, but its own Fraser page's service-area list (Fraser, Clinton Township, Roseville, Sterling Heights, St. Clair Shores, Warren, Mount Clemens, Eastpointe, Harrison Township, Grosse Pointe Woods) does not include Dearborn, ~25 mi away — service to 48126 not confirmed.
- **Axo Mobile Detailing** ((248) 275-7750) — own site's Wayne County coverage is only the Grosse Pointe border / Northern Detroit within 20 miles of Shelby Township; Dearborn not covered.
- **Hutsell's Attention to Detail** ((586) 404-5456) — Warren-based; own site says Metro Detroit travel availability must be confirmed per address; Dearborn service not explicitly confirmed.
- **Quality Mobile Wash** (Romulus; (734) 727-0700) — BBB lists Dearborn in its service areas, but its own site is pressure washing / fleet washing / building cleaning, with no consumer auto detailing service — not this category.
- **Yousefs Shine & Go** (https://yousefshinengo.pro/) — own site confirms 100% mobile service but publishes no phone and no Michigan/Dearborn location — excluded (no verifiable public phone).
- **Wenta Detailing** ((616) 836-5278) — mobile on its own site, but 616 is a Grand Rapids / West Michigan number and no Dearborn or Metro Detroit service was confirmed.
- **Greenfield Auto Spa** ((313) 429-9449, 4892 Greenfield Rd, Dearborn 48126), **Lux Auto Detailing** ((313) 200-1873), **Superior Auto Accents** ((734) 858-6578), **Fairlane Hand Wash & Detail / Fairlane Car Wash / Fast Splash Car Wash / Westborn Car Wash / Les Stanford Detail Center / Ziebart Dearborn** — fixed shops/car washes in or near Dearborn with no confirmed mobile/on-site service — storefront-only.

## Files

- `day-24-mi-dearborn-zip48126-mobile-auto-detailing.md` — this batch file
- `day-24-mi-dearborn-zip48126-mobile-auto-detailing-inserts.json` — 4 businesses + 4 listings (validated with python3 -m json.tool)
- `day-24-mi-dearborn-zip48126-mobile-auto-detailing-leads.json` — 1 published-email lead (validated)

No database inserts were made; no files outside this batch were edited.
