# Day 25 — Indiana × Indianapolis × ZIP 46237 × Handyman

- **Cell:** IN | Indianapolis | 46237 | Handyman (exact label, verified in js/data.js)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 6 qualifying businesses found. No adjacent-ZIP expansion was required to reach 3+. Two businesses are south-side / Franklin Township local to the 46237 area (Foster Built LLC, described on its listing as "Franklin Township Handyman Services" at 7719 Shelbyville Rd, Indianapolis; Mohr Handyman Services at 6436 Brooks Bend Blvd, Indianapolis). The other four are Indianapolis-metro handyman operators whose own sites explicitly state Indianapolis service (Nick's lists Indianapolis, Beech Grove and Southport among its 19 cities; HomeHub lists Marion County / Indianapolis metro; IHP and Davidson list Indianapolis / Indianapolis Metro).
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `/tmp/day25-open.json` and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 6 businesses below.
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["46237"] only. City-name service areas were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials confirm handyman work performed at the customer's home (Foster Built states explicitly: "Our Handyman Service is mobile - we come to you").

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Foster Built LLC | (463) 800-8364 | Handyman | Indianapolis | https://fosterbuiltllcindianapolis.com/ | — email link present on own site but address was obfuscated in fetched text and could not be verified verbatim, so NOT counted as a lead | High — own site: "Trusted Handyman; Property Maintenance in Indianapolis, IN", FAQ "Our Handyman Service is mobile - we come to you for repairs, carpentry work, deck repair, drywall repair, and light electrical tasks", phone +1 (463) 800-8364 / (463) 800-8364 printed in business block; listing describes it as Franklin Township Handyman Services, 7719 Shelbyville Rd, Indianapolis | https://fosterbuiltllcindianapolis.com/ |
| Nick's Handyman Service, LLC | (317) 893-3717 | Handyman | Indianapolis | https://nhsindy.com/ | nicholas@nhsindy.com — https://nhsindy.com/ (own site owner block + FAQ: "Text photos … to (317) 893-3717 or email nicholas@nhsindy.com") | High — own site: licensed general contractor, insured, BBB A+, owner-operated since 2005, residential handyman across 19 Central Indiana cities including Indianapolis, Beech Grove and Southport, phone printed on site | https://nhsindy.com/ |
| HomeHub | (317) 669-6838 | Handyman | Indianapolis | https://myhomehub.us/ | info@myhomehub.us — https://myhomehub.us/ (own site: "Email us at info@myhomehub.us or call 317-669-6838") | High — own site: "Proactive home maintenance and trusted handyman service across Marion, Hamilton, Boone, Hancock, Madison, Delaware, and Tipton counties", a trusted technician visits the home monthly and works through the homeowner's to-do list / small repairs, phone and email printed on site, "Local team serving the Indianapolis metro" | https://myhomehub.us/ |
| IHP Indy Handyman Pros | (317) 696-6771 | Handyman | Indianapolis | https://ihppros.com/ | — none published on its own site that could be verified | Medium — own site: "Professional handyman, home repair, painting, drywall, fence repair, deck restoration, junk removal, TV mounting, and maintenance services throughout Fishers, Carmel, Noblesville, Westfield, Geist, and Indianapolis", business block phone 317-696-6771, one-time projects and scheduled home visits; graded Medium because its named service area leans to the north suburbs and its site also displays a placeholder (317) 555-0142 in one CTA (not used) | https://ihppros.com/ |
| Davidson Handyman Services | (317) 225-1913 | Handyman | Indianapolis | https://davidsonhandymanservices.com/ | — none published on its own site that could be verified | Medium — own site: "your trusted partner … in the Indianapolis Metro area", expert handyman services (deck repairs, interior painting, small and big tasks at the home), contact block "Phone: (317) 225-1913" printed on site; graded Medium because its named sub-areas are Plainfield, Zionsville, Carmel, Fishers and Lawrence rather than the south side | https://davidsonhandymanservices.com/ |
| Mohr Handyman Services | (317) 366-5861 | Handyman | Indianapolis | http://mohrhandymanservices.com/ | — none published that could be verified | Medium — Google Business listing: Handyman at 6436 Brooks Bend Blvd, Indianapolis, phone (317) 366-5861, description "privately owned company that specializes in home improvement and repair … we're here to get your home taken care of"; graded Medium because its own website is currently a Squarespace "Coming Soon" page with no phone, so the phone rests on the public listing alone | http://mohrhandymanservices.com/ |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Nick's Handyman Service, LLC | nicholas@nhsindy.com | https://nhsindy.com/ |
| HomeHub | info@myhomehub.us | https://myhomehub.us/ |

2 leads — see `day-25-in-indianapolis-zip46237-handyman-leads.json`.

## Excluded

- **Handyman Connection (Carmel/Fishers pages) / Mr. Handyman of Zionsville, Carmel and Fishers** — national franchise chains; no 46237 / south-Indianapolis local operator page verified for this cell.
- **A-Good Handyman Service** — Google listing only, phone (765) 631-2592 is a Muncie-area number, no own website or own materials confirming Indianapolis on-site service.
- **Oscar's Handyman Services; Kats Trades LLC; Todd & Sons Handyman Residential Services LLC; We Care Services The American Handyman; Hoosier Handy Help LLC; Masengale Home Services LLC; Day's Handyman Services** — public-listing / social-page phone only, with no own website materials that could be verified confirming on-site handyman service for this cell (Day's Square site returns only a cart/checkout page).
- **HALL Services** — own site is primarily lawn care / landscaping; handyman is a secondary line and no phone is printed on the fetched own site.
- **Crew Property Improvement Specialists** — own site states the business closed in 2010 and is "now reopening"; operating status and a phone on its own site could not be verified.
- **IHP placeholder number (317) 555-0142** — a 555 number shown in one CTA on ihppros.com; not a real business phone, not used.

## Files

- `day-25-in-indianapolis-zip46237-handyman.md` (this file)
- `day-25-in-indianapolis-zip46237-handyman-inserts.json` — 6 businesses + 6 listings, validated with `python3 -m json.tool`
- `day-25-in-indianapolis-zip46237-handyman-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
