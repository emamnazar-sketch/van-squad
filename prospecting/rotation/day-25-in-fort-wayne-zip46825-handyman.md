# Day 25 — Indiana × Fort Wayne × ZIP 46825 × Handyman

- **Cell:** IN | Fort Wayne | 46825 | Handyman (exact label, verified in js/data.js)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 6 qualifying businesses found. Deece Home Services is based in the cell ZIP itself (8549 N Clinton St, Fort Wayne — the 46825 north-Clinton corridor, printed on its own site); the other five are Fort Wayne operators whose own sites explicitly confirm Fort Wayne service (Trusted Home Solutions: Fort Wayne + a 20-mile radius "right to your door"; Heartland: "Serving … Fort Wayne"; A.D. Does It All: "Based in Fort Wayne, Indiana"; FwMrfixit: Fort Wayne address on its own site; Ace Summit City: "Located in Fort Wayne, Indiana" / "Local Handyman Services in Fort Wayne, IN").
- **Dedupe:** Every candidate name AND phone checked against (a) /tmp/day25-open.json (2,173 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 6 businesses below. Other Ace Handyman Services locations already in the DB (Roseville Rocklin, Colorado Springs, Albuquerque, Fargo, Sioux Falls, Omaha, Wichita, Grand Rapids, Hamilton County IN, etc.) are different cities/operators with different phones — Ace Handyman Services Summit City is the distinct Fort Wayne office.
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["46825"] only. City/neighborhood service-area names and street addresses were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials confirm handyman work performed at the customer's home (repairs, installs and maintenance inside/outside the house; Trusted Home Solutions states it delivers service "right to your door" within a 20-mile radius; Deece states it "does it all inside or outside of your home").

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Deece Home Services | (260) 999-1327 | Handyman | Fort Wayne | http://www.deecehomeservices.com/ | deece@deecehomeservices.com — http://www.deecehomeservices.com/ (own site business block) | High — own site: "DHS - Your Trusted Remodeling & Handyman Experts", "DHS does it all inside or outside of your home", "Call or Text: (260) 999-1327" printed on the site, business block "Deece Home Services, 8549 North Clinton Street, Fort Wayne, IN, USA, 260-999-1327, deece@deecehomeservices.com" — the 8549 N Clinton St address is in the cell ZIP 46825 | http://www.deecehomeservices.com/ |
| Trusted Home Solutions LLC | (260) 408-5215 | Handyman | Fort Wayne | https://www.trustedhomesolutionsfw.com/ | ths.ftwayne@gmail.com — https://www.trustedhomesolutionsfw.com/ (own site business block) | High — own site: "Proudly Servicing your Handyman, Plumbing, Electrical, Doors, and General Contractor needs in Fort Wayne and the surrounding areas", "Areas We Serve … within a 20-mile radius … deliver reliable and professional service right to your door", business block prints Phone: (260) 408-5215 and ths.ftwayne@gmail.com; Google listing address 4029 Sheratan Dr, Fort Wayne (north Fort Wayne, ~1.4 mi from the 46825 query point) | https://www.trustedhomesolutionsfw.com/ |
| Heartland Handyman Services | (260) 205-2561 | Handyman | Fort Wayne | https://www.heartlandhandymanindiana.com/ | Info@heartlandhandymanindiana.com — https://www.heartlandhandymanindiana.com/ (own site business block) | High — own site titled "Fort Wayne Handyman & Remodeling | Heartland Handyman Services": "Home repairs and remodeling … Serving Van Buren, Marion, Huntington, Wabash & Fort Wayne", "HANDYMAN SERVICES", business block "Phone: +1-260-205-2561" and the email, established January 2017, work by appointment at the home; Google listing address 3020 Parnell Ave, Fort Wayne | https://www.heartlandhandymanindiana.com/ |
| A.D. Does It All LLC | (260) 467-9455 | Handyman | Fort Wayne | https://www.ad-doesitall.com/ | Info@ad-doesitall.com — https://www.ad-doesitall.com/ (own site Get In Touch block) | High — own site: "Based in Fort Wayne, Indiana, A.D. Does It All, LLC was founded to provide honest, reliable, and high-quality handyman solutions to local homeowners", veteran-owned, general repairs / TV mounting / light electrical & plumbing in homes, Get In Touch block prints "Email: Info@ad-doesitall.com, Phone: 260-467-9455"; Google listing address 656 5th St, Fort Wayne | https://www.ad-doesitall.com/ |
| FwMrfixit | (260) 312-9920 | Handyman | Fort Wayne | https://fwmrfixit.com/ | — none published on its own site that could be verified | Medium — own site titled "Handy Man, Contractor in Fort Wayne - FwMrfixit": "Licensed Professional Contractor with 20 plus years in the field! Licensed and insured", home repairs and fixture/appliance installation, contact block "FwMrfixit, 449 W Paulding Rd, Fort Wayne, IN 46807, (260) 312-9920" printed on the site; graded Medium because its own site also leans into larger contractor work (roofing, kitchen & bath renovation) alongside handyman repairs | https://fwmrfixit.com/ |
| Ace Handyman Services Summit City | (260) 287-0970 | Handyman | Fort Wayne | https://www.acehandymanservices.com/offices/summit-city | — none published on its own local office page that could be verified | Medium — own local office page: "Ace Handyman Services Summit City, Located in Fort Wayne, Indiana", "Locally Owned and Independently Operated", "Local Handyman Services in Fort Wayne, IN" for homes, craftsmen come to the home, footer "Ace Handyman Services Summit City, 5728 Coventry Ln Suite 100, Fort Wayne, IN 46804, (260) 287-0970" printed on that page; graded Medium because it is a franchise office (locally owned/operated, following the Day 25 Fishers cell treatment of Ace Handyman Services Hamilton County) | https://www.acehandymanservices.com/offices/summit-city |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Deece Home Services | deece@deecehomeservices.com | http://www.deecehomeservices.com/ |
| Trusted Home Solutions LLC | ths.ftwayne@gmail.com | https://www.trustedhomesolutionsfw.com/ |
| Heartland Handyman Services | Info@heartlandhandymanindiana.com | https://www.heartlandhandymanindiana.com/ |
| A.D. Does It All LLC | Info@ad-doesitall.com | https://www.ad-doesitall.com/ |

4 leads — see `day-25-in-fort-wayne-zip46825-handyman-leads.json`.

## Excluded

- **Handyman Fort Wayne (handymanfortwayne.net, (260) 468-7070)** — EXCLUDED as a lead-gen/network listing: its own site says "Our network of handymen do all kinds of work" and cross-links to other city lead-gen sites (e.g. gutter-cleaning-indianapolis.com), with no named local operator or local address — no local operator identity to verify.
- **Pete's Handyman Services ((260) 482-4161)** — EXCLUDED: found only on an aggregator directory (repairhomeexperts.com), with no own website or own materials confirming current Fort Wayne on-site handyman service.
- **Emerald Knight Ltd ((260) 760-2877)** — EXCLUDED for this category: its own listing categories are property management first; not a residential handyman operator.
- **Miracle Contracting Inc. ((260) 483-8108)** — EXCLUDED for this category: own site is a general contractor for kitchen/bath/whole-house remodeling, roofing and decks, with no handyman / small-repairs service.
- **House Doctors (Fort Wayne mentions on Angi/HomeAdvisor only)** — national franchise; no Fort Wayne local-operator page with a verifiable local phone could be verified from its own materials for this cell.
- **1 Time Handyman Services ((260) 418-9944), 1 and Done Maintenance ((260) 372-8388), Hoos-Yer Helper ((260) 241-4461), Sparkys Repairs LLC ((260) 222-1604), Blaine Miller Services ((260) 480-0289), 3 Guys Handyman ((260) 275-7500)** — listing/social-only records with no own website materials that could be verified confirming on-site handyman service for this cell (3 Guys' only web link found is an unrelated contact page).
- **Simple Essential Solutions ((720) 683-1888) and Harris handyman ((765) 532-0539)** — listing-only with non-Fort Wayne (720 / 765) phone numbers and no own materials; excluded.
- **Angi / Thumbtack / HomeAdvisor / InstaService marketplace pros** — national lead-gen marketplaces with no local operator identity; excluded by rule.

## Files

- `day-25-in-fort-wayne-zip46825-handyman.md` (this file)
- `day-25-in-fort-wayne-zip46825-handyman-inserts.json` — 6 businesses + 6 listings, validated with `python3 -m json.tool`
- `day-25-in-fort-wayne-zip46825-handyman-leads.json` — 4 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
