# Day 28 — Alabama — Vestavia Hills — ZIP 35243 — Pool cleaning & maintenance

Cell: Vestavia Hills, AL × 35243 × "Pool cleaning & maintenance" (label verified verbatim in ~/workspace/van-squad/js/data.js).
Date researched: 2026-11-07. **3 businesses qualified**, all confirming recurring pool cleaning/maintenance at customers' homes from their own materials and all confirming service to Vestavia Hills / ZIP 35243. No expansion to an adjacent ZIP was needed (3 ≥ 3 minimum). Birmingham is the pool-service hub for this suburb — two qualifiers are Birmingham-based operators whose own sites name Vestavia Hills on their weekly routes, and one qualifier is based in 35243 itself.

## Businesses

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|------|-------|----------|------|---------|--------------------------|---------------------|--------|
| 1 | Clear Swim Pool Care | (205) 598-6771 | Pool cleaning & maintenance | Birmingham | https://www.clearswim.net/ | info@clearswimllc.com — published on its own homepage https://www.clearswim.net/ | **High** — own site: weekly pool cleaning/maintenance (skimming, vacuuming, brushing, chemical balancing), "We proudly serve Birmingham, Alabama and the surrounding communities of Hoover, Vestavia Hills, and Mountain Brook"; phone (205) 598-6771 and address 1500 1st Ave N, Birmingham, AL 35203 on own homepage; licensed PCCR & CPI certified per own site | Own website |
| 2 | Elite Pool Services | (205) 490-1385 | Pool cleaning & maintenance | Birmingham | https://elitepoolservices.com/ | info@elitepoolservices.com — published on its own homepage https://elitepoolservices.com/ | **High** — own site: "Custom Pool Construction, Renovations, Weekly Cleaning & Equipment Repair across Central Alabama", weekly pool service details (skim, brush, vacuum, empty baskets, test and balance — every week), and "Weekly service routes run through Hoover, Vestavia, Mountain Brook, Homewood, Pelham, Alabaster and Trussville"; phone (205) 490-1385 and address 801 5th Ave N, Birmingham, AL 35203 on own site; family-owned, also services pools it did not build | Own website |
| 3 | Swimrite Pool Services | (205) 873-3272 | Pool cleaning & maintenance | Vestavia Hills | https://swimritenow.com/ | none published found | **Medium** — own site: "Swimrite Pool Services specializes in maintaining both residential and commercial swimming pools" as a Birmingham, Alabama pool service company; business is based at 2504 Rocky Ridge Rd, Vestavia Hills — Rocky Ridge addresses in that block are ZIP 35243 (e.g. 2461 and 2517 Rocky Ridge Rd are 35243), so it is based inside the target ZIP itself; phone is from its Google Business listing only — it was not visible in the fetched own-site text | Own website; Google Business listing (2504 Rocky Ridge Rd, Vestavia Hills) |

Notes:
- service_zips for all three = ["35243"] only — none of the businesses publish a ZIP list on their own materials (city/area names only), so no ZIPs were inferred beyond the target ZIP each one confirms serving.
- City field is each business's own base city: Clear Swim Pool Care and Elite Pool Services are Birmingham-based and serve Vestavia Hills; Swimrite Pool Services is based in Vestavia Hills itself.
- Listing title used (one per business): "Pool cleaning & maintenance at your location".

## Dedupe notes
- Every candidate name AND phone checked against (a) the Day-28 live-DB dump ~/workspace/goals/van-squad-directory-website/hidden_files/day28-open-dump.json (2,432 rows) and (b) `grep -r` across all of ~/workspace/van-squad/prospecting/. No name or phone match for any of the 3 businesses above.
- Two dedupe-driven skips were found and are listed under Exclusions: Puddle Pool Services (same name already in DB) and Swimming Pool Services (same name already in DB).
- No duplicates within this cell: all three names and phones are distinct.

## Exclusions (researched, not included)
- **Puddle Pool Services — DEDUPE SKIP (same name already in DB).** Its own Birmingham page is otherwise a strong fit — weekly cleaning routes "including Mountain Brook, Homewood, Vestavia Hills, Highland Park and Hoover", local phone 205-236-0823 on that page — but the live DB already contains a business with the exact name "Puddle Pool Services" (Katy, TX location, phone (346) 680-2181, Day-14 batch). Same name = skip under the cell rule, despite the different city and phone. Its national homepage also shows a toll-free 1-888 number, but the Birmingham page's local number was not the reason for exclusion — dedupe was.
- **Swimming Pool Services (Birmingham, swimmingpoolservices.net) — DEDUPE SKIP + weak Vestavia confirmation.** Own site confirms regular/routine pool maintenance and cleaning in Birmingham, phone (205) 601-3385 and email info@swimmingpoolservices.net on own site, base at 400 Doug Baker Blvd Suite 100, Birmingham, AL 35242 — but the exact name "Swimming Pool Services" is already in the DB (a Wisconsin business, phone (262) 544-5500, Day-21 batch), and its own site does not name Vestavia Hills / 35243.
- **Shoemaker Pool Service Inc / Shoemaker Pools (shoemakerpools.com)** — own homepage confirms Birmingham service and general maintenance ("From design to maintenance, we handle it all"), phone (205) 967-1644 and email Shoemakerpools@gmail.com on own homepage, but its own fetched materials do not confirm recurring/weekly pool cleaning or Vestavia Hills service; the weekly-service and Vestavia Hills details found were on a third-party aggregator (bestimprovers.com), not its own site. Excluded under the own-materials rule.
- **Southern Pool Pros LLC (southernpoolpros.net)** — own site confirms weekly + biweekly maintenance and publishes phone (205) 645-5513 and email info@southernpoolpros.net, but its own service-area list is "Alabaster, Pelham, Helena, Hoover, and surrounding cities" — Vestavia Hills / 35243 is not confirmed on its own materials. Excluded.
- **Alabama Aquarium & Pond Services, Inc. (alabamaaquarium.com)** — own site offers weekly pool maintenance (skimming, brushing, vacuuming, chemical balancing), phone (205) 663-6888, and mentions Vestavia Hills for its aquarium/water-garden work, but its pool-specific pages frame weekly pool service as a Lake Martin expansion for Birmingham families generally and do not confirm pool cleaning service to Vestavia Hills / 35243. Excluded as not pool-specific for this cell.
- **Aquabama Pool Spa & Patio (aquabama.com)** — own homepage confirms "Pool Service & Repair" serving Central Alabama, phone 205-424-4450, Hoover base, but no recurring cleaning/maintenance detail and no Vestavia Hills / 35243 confirmation in the fetched own materials. Excluded.
- **Hollywood Pool & Spa, Inc. / Hollywood Outdoor Living (Vestavia Hills, 35216)** — retail storefront (pools, spas, grills, furniture); the weekly-cleaning description found was on a third-party list (Clear Swim's blog), with no verifiable own website confirming a cleaning route. Excluded as storefront / unconfirmed from own materials.
- **Blue Haven Pools and Spas (Birmingham)** — own materials position it as a custom design/build pool company; no recurring cleaning route confirmed. Excluded as builder-only.
- **Mancha Hardscapes Pool & Spas, Premier Pools & Spas of Birmingham, AllStar Pool & Spa** — builders / retail and installation-focused in their own materials; no recurring home pool-cleaning route serving Vestavia Hills confirmed from own materials. Excluded.
- **Pool Scouts of Huntsville** — Huntsville territory only (Cullman to Tennessee line per its own site); no Birmingham/Vestavia operation. Excluded.
- **Penguin Pool Service LLC** — weekly service described only on a Google Forms page; no verifiable website, public phone, or Vestavia Hills service area found. Excluded as unverifiable.

## Leads summary
**2 published emails collected** (see day-28-al-vestavia-hills-zip35243-pool-cleaning-maintenance-leads.json):
- Clear Swim Pool Care — info@clearswimllc.com — source https://www.clearswim.net/ (own homepage), city Birmingham
- Elite Pool Services — info@elitepoolservices.com — source https://elitepoolservices.com/ (own homepage), city Birmingham
- Swimrite Pool Services publishes no business email that could be verified — none collected.
- Emails seen only on excluded businesses (e.g. Shoemaker Pools, Southern Pool Pros, Swimming Pool Services) were not collected, since those businesses are not being added.

## Files
- Inserts: day-28-al-vestavia-hills-zip35243-pool-cleaning-maintenance-inserts.json — 3 businesses + 3 listings.
- Leads: day-28-al-vestavia-hills-zip35243-pool-cleaning-maintenance-leads.json — 2 published emails.
