# Day 22 — Illinois — Chicago — ZIP 60618 — Handyman

Date: 2026-11-01
Cell: IL / Chicago / 60618 / Handyman
Sources: Business's own website first, then public listings (Google Business / places listings, CityOf, BBB). No database insertion performed by this worker.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Chicago Handy | (773) 503-0500 | Handyman | Chicago | http://www.chicagohandy.com/ | None recorded — site email was masked in fetch, not guessed | High — own site lists 3203 N Ridgeway Ave Apt 3A, Chicago, IL 60618, phone (773) 503-0500, and in-home repair work | https://chicagohandy.com/ (own site) |
| Knowledgeable Handyman | (773) 461-8533 | Handyman | Chicago | https://knowledgeablehandyman.com/ | None published verifiably | High — own site shows phone +1-773-461-8533 and home repair services throughout Chicago; listing address 3943 N Mozart St, Chicago, IL 60618 | https://knowledgeablehandyman.com/ |
| Cutting Edge Property Solutions, LLC | (773) 234-2218 | Handyman | Chicago | https://cuttingedge-llc.com/ | None published verifiably | Medium — own site confirms handyman work at customers' homes in Chicagoland; phone/address (3300 W Belle Plaine Ave) from public listing only | https://cuttingedge-llc.com/ + public listing |
| BIG Helpers | (312) 757-4420 | Handyman | Chicago | https://www.bighelpers.com/ | info@bighelpers.com — https://www.bighelpers.com/ | High — own site headline shows (312) 757-4420, handyman services "In Your Home or Office"; listing address 4184 N Elston Ave, Chicago, IL 60618 | https://www.bighelpers.com/ |
| Master Handymen | (847) 287-0449 | Handyman | Chicago | http://www.masterhandymen.com/ | Gino@MasterHandymen.com — http://www.masterhandymen.com/ | High — own site shows Call: 847-287-0449 and email, licensed Chicago contractor serving Chicagoland homes since 2006 | http://www.masterhandymen.com/ |
| HandyBandi | (224) 486-3481 | Handyman | Chicago | https://handybandi.com/ | office@handybandi.com — https://handybandi.com/ | High — own site shows (224) 486-3481, office@handybandi.com, and explicitly serves Avondale and Irving Park (60618 neighborhoods) with on-site visits | https://handybandi.com/ |
| Chicago Handyman | (773) 982-5500 | Handyman | Chicago | https://chicagohandyman.net/ | info@chicagohandyman.net — https://chicagohandyman.net/ | High — own site shows (773) 982-5500 and info@chicagohandyman.net, on-site home repairs across Chicago including Irving Park | https://chicagohandyman.net/ |

## Dedupe
- Grepped all files in ~/workspace/van-squad/prospecting/ for every candidate name and phone (formatted and unformatted): no matches for any of the 7 included businesses.
- Live DB check via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` for all 7 phones: HTTP 200, empty result [] for every phone — no duplicates in the live database.
- Same name or same phone = skip rule applied; no included business shares a name or phone with another included business.

## Excluded (checked but failed gates)
- Ace Handyman Services Chicagoland — national franchise chain; PHONE CONFLICT: listings show both (773) 249-2668 and (773) 657-2516 for the same Belmont Ave location.
- Mr. Handyman of Lincoln Park — national franchise (Neighborly), excluded per brief example.
- Expert Fixer — (872) 901-9846 toll-free-style number only, no website / no local operator verification.
- Handyman Dennis — (872) 260-5355 toll-free-style number, lead-gen style site.
- Handy Bairak — (224) 443-3567, only a CityOf listing, no own website and no own-materials mobile confirmation.
- Just Screw It Handyman Services — (773) 701-7144 from listing only, no own website found; same LLC name appears in other states, local operator not confirmed from own materials.
- NESCO Construction — (312) 838-9699 listing only, no website / own materials found.
- Dad's Handyman Service, Inc. — BuildZoom shows Chicago license inactive/expired.
- Widlet Handy (widlethandy.com) — PHONE/ADDRESS CONFLICT: listing puts it at 3943 N Mozart St (same address as Knowledgeable Handyman) with a different phone (773) 600-7440; could not verify as a distinct business from its own site, excluded.

## ZIP note
- No expansion beyond 60618 was needed to reach 7 qualifying businesses. All 7 are based in or explicitly serve 60618 (Avondale / Irving Park / Albany Park area). service_zips in inserts.json is ["60618"] only for every business, because none of the businesses publish a specific ZIP list — neighborhoods/citywide service stated, ZIPs were not invented.
- Other phone conflicts noticed: Chicago Handyman's own site footer lists its address ZIP as 60614 while public listings list 60642 (same street address, same phone) — phone is consistent, included. Knowledgeable Handyman address conflict noted under Widlet Handy above.
