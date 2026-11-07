# Rotation Day 28 — Alabama: Birmingham × Mobile pet grooming × ZIP 35215

- Researched: 2026-11-07 (nightly rotation, Day 28)
- Cell: Alabama × Birmingham × ZIP 35215 × "Mobile pet grooming" (exact label verified in ~/workspace/van-squad/js/data.js)
- Cell note: ZIP 35215 is northeast Birmingham (Center Point / Huffman / Roebuck side, Jefferson County). Mobile pet grooming supply that can be confirmed — from the operator's own materials — to serve this ZIP with a local (non-toll-free) phone is effectively zero tonight. Every candidate failed a hard gate (service area, toll-free-only phone, or name dedupe). **Result: 0 businesses qualify. No padding was done.**
- Expansion note: Because fewer than 3 businesses were confirmed for 35215, adjacent Birmingham ZIPs/areas were also swept (35235 Trussville/Center Point corridor, Pinson, Huffman). The adjacent sweep produced no additional qualifying operator: the only adjacent-area mobile operator found, Kontota (Trussville), publishes a service-area list that does not include Birmingham — see Exclusions.
- Sources: each business's own website first, then public listings (Google Business / Yelp-style results). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally. This cell inserts nothing.

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| — none — | | | | | | 0 businesses passed all gates for this cell | |

## Exclusions (checked, did not pass the gates)

- **Lucky Dog Mobile Groomers (Birmingham operation)** — (205) 895-6466, https://luckydogmobilegroomers.com/birmingham-al/ — EXCLUDED ON DEDUPE (name match). Its own Birmingham page genuinely confirms mobile grooming "throughout Birmingham and its surrounding communities," publishes the local Birmingham phone (205) 895-6466 and the email alabama@luckydogmobilegroomers.com. BUT the exact business name "Lucky Dog Mobile Groomers" is already in the live database (Denver operation, (303) 747-5555, inserted Day 6, Arvada CO cell — confirmed in day28-open-dump.json and in day-06 inserts). Per this cell's dedupe rule (name OR phone = skip) and the standing precedent applied on Days 10 and 16 (Omaha, Lincoln, Minneapolis, Plymouth all skipped this brand on the same name match), it was NOT re-added. Its email was therefore not recorded as a lead (same treatment as Day 10 Omaha).
- **Zoomin Groomin — Central & East Birmingham** — (205) 852-8064, https://www.zoomingroomin.com/locations/alabama/central-east-birmingham/mobile-pet-salon-spa/ — EXCLUDED on service area. Genuine local franchise location: its own page confirms fully self-contained mobile grooming vans brought to the customer's driveway and prints the local phone (205) 852-8064 and local email zgbham@zoomingroomin.com. However, its own areas-served page (https://www.zoomingroomin.com/locations/alabama/central-east-birmingham/areas-served/) defines its territory as **Homewood, Vestavia Hills, and Mountain Brook only** — all south-side suburbs. Center Point / Huffman / 35215 (northeast Birmingham) is not in its stated service area, so 35215 coverage could not be confirmed from its own materials. Same gate applied to Zoomin Groomin West Oakland in the Day 24 Detroit cell. Do not stretch a suburb-only list into 35215.
- **Shiny Paw Spa** — 833-439-7297 ("833-HeyPaws"), https://www.shinypawspa.com/contact — EXCLUDED: toll-free-only phone. Its own contact page confirms "Mobile in Greater Birmingham Area" / "Our Store Comes To You" and publishes hello@shinypawspa.com, but the only phone it publishes anywhere is the 833 toll-free number — no local Birmingham phone exists on its own materials. Fails this cell's NO toll-free-only rule.
- **Kontota Mobile Dog Grooming — Trussville, AL** — (256) 439-0127, https://kontota.com/mobile-dog-grooming-trussville-al/ — EXCLUDED on service area (adjacent-ZIP expansion candidate). Its own Trussville page confirms a mobile pet spa arriving at the home, but its own "Areas we serve" list is Riverside, Hoover, Pell City, Trussville, Leeds, Moody, Springville, Jacksonville, Gadsden, Anniston, North East Alabama, and Lincoln — Birmingham / Center Point / 35215 is not listed, and the (256) 439-0127 phone belongs to its Anniston, AL location. 35215 coverage could not be confirmed from its own materials.
- **Furry Land Mobile Grooming** — EXCLUDED: no Birmingham local operator exists. Only national SEO template pages for small Alabama towns (Moores Mill, Castleberry, Atmore, etc.) with the toll-free 877-726-3345 and placeholder ZIP lists could be found; no Birmingham location page, no local phone. National call-center pattern named in the brief.
- **Zoom to Groom / Grove Bark Inn** (Birmingham/Chelsea/Hoover/Mountain Brook) — EXCLUDED: mobile grooming at clients' homes is described only in a job posting; no verifiable own website or public phone for the grooming operation could be found, and its named areas are the south side (Chelsea/Hoover/Mountain Brook), not 35215.
- **Aussie Pet Mobile / Woofie's / Hydrodog / Barkbus** — EXCLUDED: no Birmingham, AL local operator with its own local phone and own materials could be verified (Woofie's Alabama location found serves West Huntsville / The Shoals; Hydrodog is a ZIP-lookup national site; Aussie Pet Mobile has no Birmingham location).
- **Comfort Grooming** (Pinson, (205) 623-7991), **A Pet's Day Out** (Grayson Valley, (205) 655-2870), **Ashley's Loving Touch Pet Grooming** ((256) 268-1818), **Scenthound Trussville** ((205) 578-1786), **Lucky Dog Grooming & Boutique** (storefront salon, (205) 582-9142 — a different business from Lucky Dog Mobile Groomers), **Gold Grooms**, **Rub-a-Dub-Dog Bathhouse and Spa**, **PetSmart / Petco Grooming (Trussville)**, **Baths Barks & Bubbles Pet Spa**, **Top Dog Birmingham**, **Humphrey's Dog Resort**, **Blind Dog Biscuit** — EXCLUDED: storefront salons / boarders / daycare; no mobile van or come-to-the-customer's-home grooming confirmed from their own materials.

## Dedupe

- Live-DB snapshot (~/workspace/goals/van-squad-directory-website/hidden_files/day28-open-dump.json, 2,432 businesses): contains **no** Birmingham or 35215 entry at all. Name/phone checks run for every candidate: "Lucky Dog Mobile Groomers" IS present — (303) 747-5555, Denver operation — which is the name-match that excludes the Birmingham operation (see Exclusions). No DB match for (205) 895-6466, (205) 852-8064, (256) 439-0127, or 833-439-7297. Other Zoomin Groomin DB entries are location-qualified operations in other states, none in Alabama.
- All prior files in ~/workspace/van-squad/prospecting/ (grep): no match for "895-6466", "852-8064", or "alabama@luckydogmobilegroomers.com". "Lucky Dog Mobile Groomers" appears in Day 6 (Arvada, inserted), Day 10 (Omaha/Lincoln, excluded on this same name dedupe), Day 14 (Houston, excluded), and Day 16 (Minneapolis/Plymouth, excluded on this same name dedupe) files — consistent treatment applied here.

## Leads summary

- Total leads in this cell: **0** (see the matching -leads.json file, an empty array).
- The only published email found on a qualifying-mobile operator's own Birmingham materials was alabama@luckydogmobilegroomers.com (Lucky Dog Mobile Groomers, own Birmingham page) — NOT recorded, because the business itself was excluded on name dedupe (Day 10 Omaha precedent). Shiny Paw Spa's hello@shinypawspa.com was likewise not recorded (business excluded, toll-free-only). Leads are kept separate from the directory and are never shown on a profile.

## ZIP note

- 35215 was the target ZIP. No business is carried in this cell, so no service_zips were assigned and no ZIP was invented for any business.

## Files

- day-28-al-birmingham-zip35215-mobile-pet-grooming.md (this file)
- day-28-al-birmingham-zip35215-mobile-pet-grooming-inserts.json (0 businesses + 0 listings)
- day-28-al-birmingham-zip35215-mobile-pet-grooming-leads.json (0 leads)
