# Day 25 — Indiana × Evansville × ZIP 47714 × Handyman

- **Cell:** IN | Evansville | 47714 | Handyman (exact label, verified in js/data.js)
- **Date:** 2026-11-04 (Day 25 run)
- **Expansion:** None needed — 5 qualifying businesses found in the Evansville metro serving 47714. No adjacent-ZIP expansion was required to reach 3+.
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `/tmp/day25-open.json` (2,173 rows) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 5 businesses below.
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["47714"] only. City-name service areas were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials / claimed listing confirm handyman work performed at the customer's home or property in Evansville.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Evansville's Best Handyman | (812) 585-3611 | Handyman | Evansville | http://www.evansvillesbesthandyman.com/ | — none published on its own site that could be verified | High — own site: "Your Trusted Handyman Partner with 20+ Years of Experience… dedicated service in residential maintenance", services are in-home repairs (faucets, toilets, doors, drywall, decks, fences, painting), "Call Now (812)-585-3611" printed on site | http://www.evansvillesbesthandyman.com/ |
| JC's Home Repair | (812) 760-2039 | Handyman | Evansville | https://j-c-s-home-repair.ueniweb.com/ | — none published (site offers a message form only) | High — own UENI site: "Best Handyman in Evansville… general home repairs, painting… we can take care of all of your Evansville property's needs", phone +18127602039 in text and business block (812) 760-2039, Evansville address on site | https://j-c-s-home-repair.ueniweb.com/ |
| AAA Handyman Company | (812) 471-9718 | Handyman | Evansville | http://www.aaahandymancompany.com/ | — own site states "The only way to contact us is by phone" and publishes no email | Medium — own site: storm/fire damage team "can quickly come to your home, clean up… cover all damaged areas… restore your home", Evansville addresses on its Google listing; graded Medium because its own site is storm-restoration focused and does not print the phone in fetched text, so the phone rests on the public Google listing | http://www.aaahandymancompany.com/ |
| The Service Brothers | (812) 213-0052 | Handyman | Evansville | — none verifiable | — none published that could be verified | Medium — claimed Yelp listing (owner-claimed, Evansville, IN 47711): Handyman, specialties "turning your house more into your home", founders did maintenance work and take home projects, service locations include Evansville; graded Medium because it has no own website, so phone/service rest on the Yelp listing alone | https://www.yelp.com/biz/the-service-brothers-evansville |
| A Plus Handy Services | (812) 431-2829 | Handyman | Evansville | — none verifiable | — none published that could be verified | Medium — Google listing, Evansville address (7147 Pinehurst Dr): Handyman / In-Home Service, business description "A+ Handy offers a variety of services beginning with general maintenance for your home and business to revamping your kitchen and bath, with 33+ years of experience"; graded Medium because it has no own website, so phone/service rest on the public listing alone | Google Business listing (search result) |

## Email leads

None — no business in this cell publishes an email address on its own website or claimed listing that could be verified verbatim. `day-25-in-evansville-zip47714-handyman-leads.json` is `[]`.

Note: Evansville Handyman (evansvillehandyman.com) does publish an email on its own site, but the business is excluded below, so its email was NOT collected as a lead.

## Excluded

- **Ace Handyman Services Evansville, (812) 717-3633** — national franchise network (Ace Hardware brand; its own job postings state "Ace Handyman Services is a franchise network of Independently Owned and Operated Franchises"); excluded as a national franchise / lead-gen style listing for this cell.
- **Evansville Handyman / Evansville Handyman LLC, (812) 480-2980** — own site (evansvillehandyman.com) now presents exclusively as "Evansville Commercial Handyman": mission is commercial repair/maintenance and its Places We Work are retail, restaurants, offices, medical facilities and warehouses — no residential/home service confirmed from its own current materials.
- **Lee's Handyman Services, 662-501-1919** — its own site footer gives its address as 1868 Old Pickens Rd, Carthage, MS 39051 (Mississippi business); the Evansville listing tie could not be verified from its own materials.
- **AAA Handyman Company "network" language** — noted, not excluded: its own site claims a network of licensed professionals, but it operates from Evansville addresses with a local phone and does home restoration on-site; kept at Medium with the caveat in the table.
- **Z&S Remodeling, (812) 802-9933** — own GoDaddy site is remodeling/tile ("everything from foundation to the roof"); handyman appears only as a secondary Google category, not confirmed as a handyman service from its own materials.
- **Heads Construction, (812) 474-1669** — own site is a roofing/exterior contractor ("#1 roofing company in the Evansville area"), not a handyman service.
- **Handyman 812, (812) 205-8447; Case Logic Maintenance and Handyman Services, (812) 456-9355; Rent A Man LLC, (812) 564-1397; K's Handy Neighbor, (812) 456-6013; Yard Guy Etc., (812) 473-0234; 3 Guys Handyman, (812) 889-8281; Bangaz Do-It-All Services, (702) 200-6519** — public-listing / social-page phone only (or, for Yard Guy, primarily yard/landscaping work and, for Bangaz, a non-local 702 number and a UENI page), with no own website or claimed listing materials that could be verified confirming on-site handyman service at Evansville homes for this cell.
- **Mission Ready Home Services** — BBB-listed near Evansville, but its own site says it primarily serves Hopkinsville / Oak Grove / Clarksville, KY-TN, phone (270) 228-0995; not an Evansville operator.
- **Handyman Connection / Mr. Handyman / Thumbtack / HomeAdvisor / Angi listings** — national lead-gen / marketplace listings with no local operator verified; never used as a source for a business.

## Files

- `day-25-in-evansville-zip47714-handyman.md` (this file)
- `day-25-in-evansville-zip47714-handyman-inserts.json` — 5 businesses + 5 listings, validated with `python3 -m json.tool`
- `day-25-in-evansville-zip47714-handyman-leads.json` — `[]` (0 leads), validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
