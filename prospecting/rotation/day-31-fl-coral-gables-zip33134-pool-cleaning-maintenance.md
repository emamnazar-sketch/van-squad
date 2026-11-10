# Rotation Day 31 — Florida: Coral Gables × Pool cleaning & maintenance × ZIP 33134

- Researched: 2026-11-10 (nightly rotation, Day 31)
- Cell note: Coral Gables (ZIP 33134) is a dense residential Miami-Dade city of home pools. Pool cleaning & maintenance is serviced weekly at the customer's home pool, so on-site service is the business model itself. No expansion to an adjacent ZIP was needed — 7 qualifying businesses explicitly serve Coral Gables / 33134 or Miami-Dade (which includes Coral Gables). City column below is each business's actual base city (per the task instruction); every business below serves the target cell, and service_zips in the inserts file include 33134 for all of them.
- Sources: each business's own website first, then public listings (Expertise.com, Yelp, Houzz). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented. No toll-free-only numbers.
- Status: PREPARED, NOT INSERTED — batch files only (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Sapphire Pool Service | (786) 233-9292 | Pool cleaning & maintenance | Miami | https://www.sapphirepools.co/ | contact@sapphirepools.co — https://www.sapphirepools.co/ | High — own site is titled "Coral Gables Pool Service": weekly pool cleaning and maintenance in Coral Gables, Coconut Grove and nearby Miami, phone and email on the site; terms page gives a Miami, FL address | Business's own website |
| Alligator Pools | (305) 255-7946 | Pool cleaning & maintenance | Miami | https://alligatorpools.com/ | sales@alligatorpools.com — https://alligatorpools.com/pricing/ | High — own pricing page: weekly pool maintenance packages, service area list explicitly includes Coral Gables, phone and email on the page; residential weekly cleaning confirmed on its Yelp about text | Business's own website + Yelp |
| Reef Tropical Pools | (305) 367-2005 | Pool cleaning & maintenance | Florida City | https://reeftropical.com/ | — none published on the site pages checked — | High — own site: "Pool Cleaning & Maintenance" section (skimming, brushing, vacuuming, filter and chemical care for homes), service-area list explicitly includes Coral Gables, phone in the site footer (base 100 N Krome Ave, Florida City, FL 33034) | Business's own website |
| M&M Pool & Spa Services Corp. | (786) 972-8875 | Pool cleaning & maintenance | Miami | https://mmpoolspaservicescorp.com/ | — no email address published on the site pages checked (site says "email us" with no address shown) — | High — own site: weekly pool cleaning for residential pools, "Locations we Serve" list explicitly includes Coral Gables and its FAQ offers free estimates in Coral Gables, phone on the site (HQ 15075 SW 137th St #17, Miami, FL 33196) | Business's own website |
| Sapphire Pool Cleaners | (754) 239-4111 | Pool cleaning & maintenance | Miami | https://sapphirepoolcleaners.pro/ | — none published on the site pages checked — | Medium — own site: weekly home pool maintenance routes, and its published ZIP list explicitly includes 33134 plus 19 other Miami ZIPs (all carried into service_zips); phone on the site (base 4501 NW 2nd Ave, Miami, FL 33127); template-style site, so marked Medium | Business's own website |
| Blue Ocean Pool Service | (786) 356-6989 | Pool cleaning & maintenance | Miami | https://blueoceanpoolservice.net/ | blueoceanpoolservice@gmail.com — https://blueoceanpoolservice.net/ | Medium — own site: weekly pool cleaning and maintenance, "proudly serving Miami-Dade since 2006" (Coral Gables is in Miami-Dade; Coral Gables is not named individually on the site), phone and email on the site | Business's own website |
| Sunny Blue Pool Service, LLC | (305) 699-4080 | Pool cleaning & maintenance | Miami |  | — none found — | Medium — Expertise.com Miami pool cleaners listing: weekly pool cleaning for residential pools, "delivers cleaning services for pool owners in Pinecrest, Coral Gables, and Kendall," address 2538 Southwest 18th Street, Miami, FL 33145 and this phone in its compare table; no own website found | Expertise.com listing |

## Dedupe
- Live database (/tmp/vs_active.json, 2,717 active businesses, checked 2026-11-10): name and phone check for every business above returned no matches.
- All prior prospecting files (~/workspace/van-squad/prospecting/, grep for every name and phone in this batch): no matches.
- Two name collisions WERE found in the live DB and those candidates were excluded (see below): Anchor Pool Service and Puddle Pool Services.

## Excluded (checked, did not pass the gates)
- Puddle Pool Services (Miami) — EXCLUDED on dedupe: own site verifies weekly service in Coral Gables with phone (786) 952-5169, but the live DB already has a business with the exact name "Puddle Pool Services" (Texas, phone (346) 680-2181) — same name = skip under the dedupe rule.
- Anchor Pool Service │ Pool Maintenance (Miami) — EXCLUDED on dedupe: Houzz listing verifies weekly full service, areas served include Coral Gables, phone (786) 286-0855, but the live DB already has a business with the exact name "Anchor Pool Service" (Texas, phone (972) 530-7170) — same name = skip.
- Sermatek / Miami Pool Cleaning Service (250 Catalonia Ave, Coral Gables) — EXCLUDED: listing phone (786) 485-0821, but its own website (miamipoolcleaningservice.com) is now a GoDaddy domain-for-sale page, so at-home cleaning could not be confirmed from the business's own materials.
- Southern Blue Pools (4100 Salzedo St, Coral Gables) — EXCLUDED: own site presents it as a pool builder ("We are straightforward builders"; residential/commercial/municipal pool construction pages) with no cleaning/maintenance service confirmed — builder-only for this category. (Its site does publish a personal Gmail and phone (305) 606-0894; not collected as a lead because the business is excluded.)
- ForeverPools (2655 S Le Jeune Rd, Coral Gables) — EXCLUDED: pool construction only, per its own description.
- Ocean Pool Cleaning Services (1624 Granada Blvd, Coral Gables) — EXCLUDED this run: listing phone (754) 310-5850, but its own website (oceanpoolservices.homes) could not be fetched (403), so weekly at-home cleaning could not be verified from its own materials.
- Blue Science (Miami) — EXCLUDED: multi-city / multi-state pool-service operation (29 cities in the region, one central office number (786) 605-7500) — national/regional call-center pattern, no distinct local Coral Gables operator.
- Pinch A Penny Pool Patio Spa (Miami, 833 SW 29th Ave) and Freddy's Pool Supply (Miami) — EXCLUDED: storefront pool-supply retail stores.
- Venetian Pool / The Biltmore Pool Cabanas (Coral Gables) — EXCLUDED: public/hotel pools, not home pool service businesses; Biltmore number is also toll-free-only.
- Smart Aquatics (Miami) — EXCLUDED: aquatic design/engineering/consulting firm, not a home pool cleaning operator.

## ZIP note
- Target ZIP 33134 (Coral Gables) is in every business's service_zips. Sapphire Pool Cleaners additionally carries the 19 other Miami ZIPs its own site publishes for its weekly routes. No other service ZIPs were stated by the included businesses (they state cities, not ZIPs), so none were invented.
- Email leads: 3 published addresses collected (see the matching -leads.json) — Sapphire Pool Service, Alligator Pools, and Blue Ocean Pool Service, each with its source URL.
