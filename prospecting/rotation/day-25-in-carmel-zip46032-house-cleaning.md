# Day 25 — Indiana | Carmel | ZIP 46032 | House cleaning

Cell: IN / Carmel / 46032 / "House cleaning" (exact label verified in js/data.js). All 5 qualifying businesses serve Carmel / 46032 itself — no adjacent-ZIP expansion was needed (Rosy's own address is in adjacent Carmel ZIP 46033, noted below). Every business was verified from its own website first (residential house cleaning at customers' homes + public phone on the site), then deduped against /tmp/day25-open.json (2,135 rows, incl. Wave 1 Indiana) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone matches for any included business.

## Included (5)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| The Preferred Cleaning Co. | (317) 548-6288 | House cleaning | Carmel | http://thepreferredcleaning.com/ | None published (contact form / phone only) | High — family-owned in Carmel; own site: "House Cleaning in Carmel, IN", recurring house cleaning at homes, W2 background-checked employees, office 38 W Main Street, Carmel, IN 46032, phone on site | http://thepreferredcleaning.com/ | No DB/prospecting match. Based in target ZIP itself. No ZIP list published beyond its 46032 office, so service_zips = [46032] |
| Christina's Complete Clean | (317) 733-7751 | House cleaning | Carmel | https://www.christinascompleteclean.com/ | None published on own site | High — locally woman-owned since 2006; own site: residential recurring/deep/move cleaning, "Carmel, IN 46032 \| (317) 733-7751" in footer, "They can be reached at our Carmel, IN, office", serves residential customers in and around Carmel. Note: this is the Carmel-office number; the Indianapolis-office number (317) 455-4808 on the same site was NOT used | https://www.christinascompleteclean.com/ | No DB/prospecting match on name or on either phone. Previously only an exclusion note in the 46204 cell (downtown coverage unconfirmed there) — Carmel coverage is explicit here. service_zips = [46032] |
| Rosy's Cleaning Service | (317) 938-7729 | House cleaning | Carmel | http://www.rosyscleaningservice.com/ | info@rosyscleaningservice.com — own site footer/contact block | High — own site: "Cleaning Company in Carmel, IN", 11 years serving Carmel residents, Google reviews on site confirm recurring biweekly home cleaning; phone + email on own site; own address 14500 Dublin Dr, Carmel, IN 46033 | http://www.rosyscleaningservice.com/ | No DB/prospecting match. service_zips = 46032 + its own stated 46033 |
| Well Done Services | (317) 575-9300 | House cleaning | Carmel | http://welldoneservices.net/ | None published on own site | Medium — own site headline: "Comprehensive Commercial and Residential Cleaning", address 513 Industrial Drive, Carmel, Indiana 46032 and phone 317-575-9300 on own site; Google listing adds Residential + Maid/Airbnb services, but the fetched own-site text is sparse, hence Medium | http://welldoneservices.net/ | No DB/prospecting match. Based in target ZIP itself. service_zips = [46032] |
| Executive Home Services | (317) 816-0960 | House cleaning | Carmel | https://exhs.com/ | swebb@exhs.com — own site contact block | Medium — own site: "Reliable Residential and Commercial Cleaning Services... providing our services to our clients in Carmel, IN since 1998", housecleaning testimonials, phone + email on site; Google listing gives a Carmel address (132 W Carmel Dr) while the site's contact address is Indianapolis, IN 46280, hence Medium | https://exhs.com/ | No DB/prospecting match. service_zips = [46032] |

## Exclusions

- **Housekeeping Maid Easy ((317) 579-1988)** — DUPLICATE / SKIP: already in the live DB from Wave 1 (Indianapolis 46204 cell), and 46032 is already in its service_zips. Same name + phone match in /tmp/day25-open.json.
- **Eco-Clean Indy ((317) 342-4890)** — EXCLUDED: its own domain (ecocleanindy.com) now serves unrelated gambling/spam content in fetched text; no verifiable cleaning business, phone, or residential service confirmed from its own materials.
- **Details Cleaning Solutions ((317) 587-1294)** — EXCLUDED: commercial-only — own site is titled "Commercial Cleaning Services Carmel IN" and focuses on offices / multi-tenant commercial buildings; no residential house cleaning confirmed.
- **The 2nd You ((317) 663-4887)** — EXCLUDED: own services page lists home management, culinary, and pet services only; house cleaning not confirmed from its own materials.
- **Mop It Like It's Hot ((317) 345-0045)** — EXCLUDED for this cell: own site bases it in Westfield, IN (586 Cyclamen Chase, Westfield, IN 46074) / Indianapolis and says "Indianapolis and surrounding areas" with no explicit Carmel service confirmation; conflicting addresses across listings.
- **Shine of Carmel ((317) 975-1773)** — EXCLUDED: window cleaning, gutter cleaning, pressure washing and holiday lights only — not house cleaning.
- **THI Cleaning Service ((317) 379-0391)** — EXCLUDED: listing shows "Possibly Temporarily Closed".
- **myMaid ((317) 732-5071) and PennyLuxe Housekeeping ((317) 379-6189)** — EXCLUDED: no verifiable own website found (Instagram / aggregator listings only).
- **NG Solutions Cleaning Indiana (cleaningbooknow.com)** — EXCLUDED: no public phone on its listing/site.
- **National franchises held as reserve, not used (cell filled with independents):** Molly Maid of Carmel, Fishers and Geist, MaidPro Carmel ((317) 401-9950), Two Maids of Carmel.

## Leads

2 published emails collected (see matching -leads.json): Rosy's Cleaning Service (info@rosyscleaningservice.com), Executive Home Services (swebb@exhs.com). Emails are leads only — never written to business profiles.

## Files

- day-25-in-carmel-zip46032-house-cleaning-inserts.json — 5 businesses + 5 listings, exact coordinator shape.
- day-25-in-carmel-zip46032-house-cleaning-leads.json — 2 leads.
