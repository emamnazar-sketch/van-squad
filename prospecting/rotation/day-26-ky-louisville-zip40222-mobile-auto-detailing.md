# Day 26 — Kentucky × Louisville × ZIP 40222 × Mobile auto detailing

- **Cell:** KY | Louisville | 40222 | Mobile auto detailing (exact label)
- **Date:** 2026-11-05 (Day 26 run)
- **Expansion:** None needed — 7 qualifying businesses found serving Louisville / 40222 (40222 is the Lyndon / St. Matthews area; Advanced Mobile Detailing, Detail Dash, Evermint and Tweeked Rides name Lyndon, St. Matthews or Hurstbourne explicitly in their own service-area lists, the rest serve Louisville metro-wide). No adjacent-ZIP expansion.
- **Dedupe:** Every candidate name AND phone checked against (a) `~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json` (2,217 businesses) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. No name or phone matches for the 7 businesses below. Note: a distinct Utah business also called "Advanced Mobile Detailing" appears in a Day-04 prospecting note (different state, different phone, excluded there) — it is not the Louisville company below and not a duplicate.
- **Phone rule:** All phones are Louisville local (502) numbers, verified on the business's own website; none is toll-free-only.
- **Mobile/on-site:** Each business's own materials confirm detailing performed at the customer's home/driveway/office in Louisville (see reasons; Evermint, Tweeked Rides and Onyx are graded Medium for the caveats noted).
- **service_zips:** No business below publishes a ZIP list on its own site, so all get ["40222"] only — city/neighborhood service-area names were NOT converted into ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Advanced Mobile Detailing | (502) 398-4361 | Mobile auto detailing | Louisville | https://advancedmobile-detailing.com/ | — none published on its own site that could be verified | High — own site: "We pull into your driveway… We come to your home or work, bring everything with us," own water/power vans, "call or text (502) 398-4361," business block "Advanced Mobile Detailing LLC, 1302 N Pope Lick Rd, Louisville, KY 40299 · 502-398-4361," and its Locations list includes Lyndon, Hurstbourne and St. Matthews (the 40222 area); ceramic coating is shop-only by its own disclosure, its detailing services are mobile | https://advancedmobile-detailing.com/ |
| Detail Dash | (502) 321-7751 | Mobile auto detailing | Louisville | https://www.calldetaildash.com/ | calldetaildash@gmail.com — https://www.calldetaildash.com/ (own site Contact section) | High — own site: "Premium mobile & shop auto detailing serving Louisville… delivered to your door," "We Come To You — Home, work, or wherever you park," FAQ "Standard details can be completed at your home or workplace across the Louisville metro," service areas include St. Matthews, and "Phone: 502-321-7751" printed on the site with the email in its Contact block | https://www.calldetaildash.com/ |
| Evermint Detailing Co. | (502) 806-2444 | Mobile auto detailing | Louisville | https://evermintdetailing.com/ | Hello@EvermintDetailing.com — https://evermintdetailing.com/ (own site "Let's talk" block, shown on homepage and services page) | Medium — own site: "100% Mobile • We Come To You," "Every service is performed at your location, whether you're at home, the office, or anywhere in the Louisville area… right in your driveway," service areas include St. Matthews and Hurstbourne, and its "Let's talk" block prints 502-806-2444 with the email on both pages checked; graded Medium because the site's structured metadata also carries a different phone, +1 502-716-2230, which was NOT used — the human-readable "Let's talk" number was used instead | https://evermintdetailing.com/ |
| Derby City Auto Spa | (502) 215-8075 | Mobile auto detailing | Louisville | https://www.derbycityautospa.com/ | — none used (its site contact email is obfuscated / rendered as "[email protected]", so per rule it was NOT recorded) | High — own site: "Today we're a full-service mobile auto detailing operation — we come to you. Driveway, office parking lot, apartment building, anywhere your car is parked. We bring our own water, power, and pro-grade supplies," "STAY HOME. WE'LL COME TO YOU — Mobile detail service across Louisville, KY and surrounding areas," and "Phone: (502) 215-8075" printed on the site | https://www.derbycityautospa.com/about.php |
| Louisville Mobile Detail | (502) 792-0906 | Mobile auto detailing | Louisville | http://www.louisvillemobiledetail.com/ | — none used (its site email is Cloudflare-obfuscated, so per rule it was NOT recorded) | High — own site: "We are Louisville Mobile Detail (502.792.0906)… the leading mobile auto detailing company in Louisville Kentucky," "No matter where you're at we'll come to you and detail your car," "We're Mobile! We come to you, no matter the location (work, school, or home)," phone (502) 792-0906 repeated throughout, and its Google listing address is on S Hurstbourne Pkwy in Louisville | http://www.louisvillemobiledetail.com/ |
| Tweeked Rides Mobile Detailing | (502) 718-7057 | Mobile auto detailing | Louisville | https://www.tweekedrides.com/ | — none used (its site email is obfuscated in the readable page, so per rule it was NOT recorded, even though a search crawl suggested a Yahoo address) | Medium — own site: "We bring professional auto detailing directly to your home or office in Louisville and Southern Indiana," FAQ "our mobile detailing team comes fully equipped… to complete the job at your location," service areas include St Matthews, Prospect and Middletown, and phone (502) 718-7057 printed in its site footer; graded Medium because the phone appears only in that footer contact line and its email could not be read unobfuscated | https://www.tweekedrides.com/ |
| Onyx Auto Detailing | (502) 797-6021 | Mobile auto detailing | Louisville | https://onyxautowd.wixsite.com/onyxautodetailing | — none published on its own site that could be verified | Medium — own site: "We provide premium mobile detailing services, delivering showroom-quality results right to your doorstep," "We are a small-scale, professional mobile car detailing service based in Louisville, KY," and "Phone: 502-797-6021" printed on the site; graded Medium because the site does not publish a named service-area list confirming 40222 / St. Matthews specifically — Louisville-wide mobile service only | https://onyxautowd.wixsite.com/onyxautodetailing |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Detail Dash | calldetaildash@gmail.com | https://www.calldetaildash.com/ |
| Evermint Detailing Co. | Hello@EvermintDetailing.com | https://evermintdetailing.com/ |

2 leads — see `day-26-ky-louisville-zip40222-mobile-auto-detailing-leads.json`.

## Excluded

- **DJ's Auto Detailing LLC** — mobile + in-shop in Louisville's East End (40223) per its own press releases, but the releases conflict on phone — (502) 299-9334 in the contact block vs (502) 777-3125 as the "office" number — and its own website (djsautodetailing.com) could not be verified to settle it; excluded as conflicting/unverified.
- **JB Car Detailing** — own site (jbcardetailinglouisville.com) confirms "We are a mobile car detailing service… we will come to you" in Louisville, but no phone number is published on the readable site (contact form only); excluded — no verifiable public phone on its own materials.
- **iDetail Mobile Detailing / Derby City Detailing** — Google listing phone (502) 509-9947 with website derbycitydetailing.com, but that site could not be fetched/verified, so mobile service could not be confirmed from the business's own materials; excluded.
- **Lux Image Detail** — listing says "We are a Mobile Detailing Service based out of Louisville, KY," phone (502) 536-9245, 7900 Shelbyville Rd, but the listing status is "Possibly Temporarily Closed"; excluded as not reliably active.
- **Moby's Auto Spa** — six fixed car-wash locations in Louisville/Shepherdsville (609 Lyndon Ln and others), automatic wash bays, no mobile detailing; excluded as fixed shop/car wash.
- **A & K Auto Detailing** — fixed shop at 4121 Shelbyville Rd, Louisville; no mobile/come-to-you service confirmed on its own materials; excluded as fixed shop.
- **Oxmoor Detail Center / Oxmoor Mazda** — dealership detail center at 8014 Shelbyville Rd; fixed shop, no mobile service; excluded.
- **Diallo Detailing LLC; DetailNow 502** — Lyndon-area listings (732 Lyndon Ln; 8401 Shelbyville Rd) with phones on listings only and no verifiable own website confirming mobile service from their own materials; excluded.
- **DetailXPerts (Louisville)** — national franchise/lead-gen network listing (325 W Main St), not a confirmed local mobile operator for this cell; excluded by rule.
- **Austin's Clean Cars Auto Detailing** — mobile and serves Louisville, but based in Sellersburg, IN (8000 Hardy Way) — not a Louisville-city business for this Louisville cell; excluded for this cell.
- **Bluegrass Mobile Detailing; Car Wash Mobile and Detailers; A&M Detailing; Honor My Story Detailing** — social/Google-Sites-only presences with no verifiable own website confirming mobile detailing and a Louisville phone to the standard above (Bluegrass: Instagram/listing only, (502) 689-5725; A&M and Honor My Story: Google Sites pages with no phone found); excluded.

## Files

- `day-26-ky-louisville-zip40222-mobile-auto-detailing.md` (this file)
- `day-26-ky-louisville-zip40222-mobile-auto-detailing-inserts.json` — 7 businesses + 7 listings, validated with `python3 -m json.tool`
- `day-26-ky-louisville-zip40222-mobile-auto-detailing-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
