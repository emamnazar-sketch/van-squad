# Day 06 — Colorado × Denver × ZIP 80210 × Mobile auto detailing

Researched 2026-10-18. Target: 6–9 qualifying businesses.
Result: **8 businesses written.** No ZIP expansion needed — all eight are Denver mobile operators stating they serve the Denver metro (which includes 80210) on their own websites / own booking pages. Every business's mobile / come-to-you service was confirmed on the business's own materials.

| # | Name | Phone | Category | City | Website | Published email (+ source) | Confidence |
|---|------|-------|----------|------|---------|----------------------------|------------|
| 1 | Forge Auto Studio | (720) 440-1960 | Mobile auto detailing | Denver | https://forgeautostudio.com/ | none published in readable form (site email is Cloudflare-masked) | High — own site: "100% mobile", "We Come to You", phone on own site |
| 2 | Euro Mile High 5280 Mobile Detail | (720) 816-3876 | Mobile auto detailing | Denver | https://www.euromilehigh5280.com/ | none published in readable form (site email is Cloudflare-masked) | High — own site: "Mobile Detailing at Your Doorstep / We Come to You", phone on own site |
| 3 | Klean Details LLC | (701) 659-1514 | Mobile auto detailing | Denver | https://www.klean-details.com/ | none published | High — own site: "Professional mobile detailing at your doorstep", "fully mobile", phone in own FAQ |
| 4 | Colorado Auto Spa | (720) 333-3578 | Mobile auto detailing | Denver | http://www.coloradoautospa.com/ | bill@coloradoautospa.com (source: http://www.coloradoautospa.com/) | High — own site: "mobile auto detailing", fully equipped mobile unit at home/office, phone + email on own site |
| 5 | 5280 Mobile Auto Shine | (970) 331-3704 | Mobile auto detailing | Denver | https://www.5280autoshine.com/ | none published | High — own site: mobile detailing at home/workplace, "We come to your home or workplace", phone on own site |
| 6 | Tier 1 Finish Car Detailing | (720) 436-9392 | Mobile auto detailing | Denver | https://oscartx72.setmore.com/ | tier1finish@gmail.com (source: https://oscartx72.setmore.com/) | High — own booking page: "professional mobile car detailing service that brings premium care directly to your doorstep", phone + email on that page |
| 7 | FB Mobile Auto Detailing | (720) 253-5383 | Mobile auto detailing | Denver | https://www.fbdetailingandcoating.com/ | fbautodetailz@gmail.com (source: https://www.fbdetailingandcoating.com/) | High — own site: mobile detailing in Denver bringing care "straight to your home or workplace", phone + email on own site |
| 8 | Mile High Shine | (720) 726-2145 | Mobile auto detailing | Denver | https://www.milehighshine.online/ | milehighshine@outlook.com (source: https://www.milehighshine.online/) | Medium — own site description: "premium mobile auto detailing services in Denver", detailers travel throughout Denver metro; site also lists a fixed Denver address (8201 E Pacific Pl) |

## Per-business notes

1. **Forge Auto Studio** — Own homepage: "Mobile Detailing & Dent Repair in Denver — We Come to You"; FAQ: "we're 100% mobile across Denver, Aurora, Arvada, Lakewood, Westminster, Thornton, Broomfield, Boulder, and the surrounding Front Range" and "mobile only, we come to you." Phone (720) 440-1960 printed repeatedly on own site. No readable email address published (masked). Source: https://forgeautostudio.com/
2. **Euro Mile High 5280 Mobile Detail** — Own site headline "Denver's Premier Mobile Detailing / Mobile Detailing at Your Doorstep"; "We bring our full professional setup directly to your location — home, office, or anywhere in the Denver metro." Phone 720-816-3876 in Contact Us on own site. Email on site is Cloudflare-masked, so no lead recorded. Source: https://www.euromilehigh5280.com/
3. **Klean Details LLC** — Own site: "Professional mobile detailing at your doorstep", "FAMILY OWNED • MOBILE SERVICE • FULLY INSURED"; FAQ: "We are fully mobile and able to service Homes, Apartments, and Offices" and "We cover the greater Denver area." Phone (701) 659-1514 printed three times in own FAQ (out-of-state area code is the business's own published number — used as published, not altered). Source: https://www.klean-details.com/
4. **Colorado Auto Spa** — Own site title "Mobile Auto Detailing & Ceramic Coating Denver CO"; copy: "our fully equipped mobile detailing unit arrives ready to work at your home or office. No drop-off, no hassle." Service area listed includes Denver. Phone (720) 333-3578 and email bill@coloradoautospa.com both in Contact Us on own site. Source: http://www.coloradoautospa.com/
5. **5280 Mobile Auto Shine** — Own site: "Professional interior and exterior mobile detailing at your home or workplace. We bring our own professional equipment and serve Denver and surrounding areas"; FAQ: "No. We come to your home or workplace." Phone +1-970-331-3704 on own site, recorded as (970) 331-3704. Areas listed: Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Commerce City (city names, not ZIPs, so service_zips stays ["80210"]). Source: https://www.5280autoshine.com/
6. **Tier 1 Finish Car Detailing** — Business's own Setmore booking page: "Tier 1 Finish is a professional mobile car detailing service that brings premium care directly to your doorstep… Located in Denver Co." Contact line on that page: (720) 436-9392, tier1finish@gmail.com. Source: https://oscartx72.setmore.com/
7. **FB Mobile Auto Detailing** — Own site: "we proudly offer professional mobile detailing in Denver, CO, bringing premium automotive care straight to your home or workplace" and "Our fully equipped detailing team comes directly to you." Footer contact on own site: 720 253 5383, recorded as (720) 253-5383, and fbautodetailz@gmail.com. Denver address on site: 7575 East Arkansas Avenue, Denver, CO 80231 (mobile service, not a walk-in detail shop presentation). Source: https://www.fbdetailingandcoating.com/
8. **Mile High Shine** — Own site additional-details description: "Mile High Shine provides premium mobile auto detailing services in Denver, Colorado"; body copy: "Our skilled team of detailers travels throughout the Denver metro area… for your convenience." Phone (720) 726-2145 and email milehighshine@outlook.com on own site. Marked Medium because the site also lists a fixed address (8201 E Pacific Pl, Denver, CO 80231) alongside the mobile/travel claim. Source: https://www.milehighshine.online/

## Dedupe

- All eight names and phones checked against the live directory (344 active businesses via vs_rest.py `businesses?select=name,phone&status=eq.active`) — no name or phone matches. ("Klean" substring matches only the unrelated AA Super Klean, (307) 237-0750, Casper WY — different business and phone.)
- Also grep-checked every name and phone fragment against every file under ~/workspace/van-squad/prospecting/ — no matches. No prior Denver/Colorado cell exists in prospecting.

## Exclusions / held out (with reasons)

- **Panda Hub (Denver)** — EXCLUDED: national booking platform / lead-gen marketplace, not a local operator; its own page lists 80210 in a platform-wide ZIP list.
- **ST6 Detailers / "Friendly Mobile Detailing" listing (st6detailers.com, (720) 331-1122)** — EXCLUDED for this cell: own site presents a 4-location fixed shop chain (Colorado Springs HQ/showroom, Golden base) with mobile crews as an adjunct; the Denver Google listing name ("Friendly Mobile Detailing") does not match the business's own site name, and no Denver phone was confirmed on its own site in the fetched pages.
- **Mile High Mobile Car Detailing (milehighmobiledetailing.com, (303) 981-6330)** — HELD OUT: own site confirms "We come to you" and the phone, but the service-area list shown is the Boulder / north-metro area (Erie, Lafayette, Broomfield, Louisville, Boulder, Superior, Longmont, Firestone, Niwot); Denver / 80210 service was not confirmed from its own materials.
- **Mobile Auto Detail Denver (mobileautodetaildenver.com, (720) 740-1001, Littleton base)** — HELD OUT: website could not be fetched for verification, so mobile service could not be confirmed from the business's own materials.
- **On The Go Auto Glow (otgag303.com, (720) 514-2775) and Aqua Sonic Mobile Cleaners (aquasonicmobilecl.com, (303) 520-6235)** — HELD OUT: websites could not be fetched for verification; mobile service unconfirmed from own materials.
- **Denver Shine Mobile Detailing ((303) 531-0435, 2240 S Clermont St, Denver)** — HELD OUT: no business website found (Instagram/Google listing only); mobile service could not be confirmed from the business's own materials.
- **No-H2O Denver ((303) 219-8698)** — EXCLUDED: national franchise / on-demand platform local operator page.
- **Waterworks Car Wash and Detail Center, Shiny Wheels LLC, 24/7 Auto Spa, Nice and Clean Car Services** — EXCLUDED: fixed-location car washes / detail shops; mobile service not offered/confirmed on their own materials.

## ZIP / service_zips note

None of the eight publishes a ZIP-code service list on its own site (areas are stated by city/region name). service_zips in the inserts = ["80210"] only for each business, per instructions (target ZIP plus the business's own stated ZIPs only).
