# Rotation Day 45 — Rhode Island: East Providence × Pressure washing × ZIP 02914

- Researched: 2026-11-26 (nightly rotation, Day 45)
- Cell note: Two qualifying businesses are based in 02914 itself (Foley Pressure Washing; Alfa Painting, which states "East Providence, Rhode Island 02914" on its own site). A third East Providence operator, Sunset Pressure Washing, was skipped on the same-name dedupe rule (see Dedupe). Because that left fewer than 3, the cell expanded as instructed to the adjacent East Providence ZIP 02916 for LOPCO Contracting RI (310 Bourne Avenue, East Providence, RI 02916 on its own site).
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from the businesses' own sites; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED 2026-11-26 — batch files only, NOT inserted (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Foley Pressure Washing | (401) 648-7012 | Pressure washing | East Providence | http://foleypressurewashingri.com/ | foleypressurewashingri@gmail.com — own website http://foleypressurewashingri.com/ | High — own site: "Owner-operated pressure washing, house soft washing, roof washing, gutter cleaning, and window cleaning. Based in East Providence, serving Rhode Island and Southeastern Massachusetts" and "Based in East Providence. Serving RI & Southeastern MA"; phone 401-648-7012 and email printed on own site; work is done at customers' homes/businesses | Business's own website; Google listing (17 Grove Ave, East Providence) |
| Alfa Painting | (401) 771-4701 | Pressure washing | East Providence | https://www.alfapaintingco.com/services/power-washing/ | alfapainting2018@gmail.com — own website https://www.alfapaintingco.com/services/power-washing/ | Medium — own site has a dedicated "Power Washing in East Providence, RI" page: "Alfa Painting power washes siding, decks, patios, walkways, and fences" at customers' properties, and states "East Providence, Rhode Island 02914"; phone (401) 771-4701 and email on own site; Medium because painting is its primary trade and pressure washing is a secondary service | Business's own website |
| LOPCO Contracting RI | (401) 270-2664 | Pressure washing | East Providence | https://lopcocontracting.com/home-improvement-services/power-washing/ | — none published as a readable address on its own site ("Email Us Today" link only) | Medium — own site has a dedicated Power Washing page: "We power wash homes, buildings, deck areas, pool aprons" on-site at customers' properties, phone 401-270-2664 on that page, and its own footer gives "310 Bourne Avenue Building 68 East Providence, RI 02916"; Medium because contracting/painting is its primary trade and power washing is a secondary service, and its base ZIP is adjacent 02916 | Business's own website |

## Dedupe
- Grep of ~/workspace/van-squad/prospecting/ on 2026-11-26 for Foley Pressure Washing / 648-7012 / foleypressurewashingri@gmail.com, Alfa Painting / 771-4701 / alfapainting2018@gmail.com, and LOPCO / 270-2664 returned NO matches for the included businesses.
- Dedupe skip: Sunset Pressure Washing (360 Taunton Ave, East Providence, RI 02914; (401) 368-4361 on its own site https://sunsetpressurewashing.com/, which confirms on-site residential/commercial pressure washing based in East Providence) — SKIPPED ON DEDUPE: its exact name matches "Sunset Pressure Washing" already in the Day-33 Greenville, SC pressure-washing batch (different business, phone (864) 991-9192, website sunsetpressurewash.com). Per the same-name = skip rule it was not included, which triggered the adjacent-ZIP expansion to LOPCO.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- AR Powerstream / RI Power Washing (59 Ingraham St, East Providence; (401) 787-8515 on Google listing; website http://www.ripowerwashing.org/) — NOT INCLUDED: its own website could not be fetched/verified in this run, so own-materials on-site confirmation was not completed; listing data alone was not used.
- Sunset Auto Spa & Mobile Power Washing (360 Taunton Ave, East Providence; (401) 626-7094) — NOT INCLUDED: primarily a car wash / auto detailing storefront; its mobile power washing is a side line of the auto spa, and the dedicated pressure-washing business at the same address was the dedupe-skipped Sunset Pressure Washing above.
- SERVPRO of East Providence (2312 Pawtucket Ave, East Providence; (401) 589-5149) — EXCLUDED: national franchise / restoration chain, not a local pressure-washing operator.
- Blue Clean (25 Gurney St, East Providence; (401) 696-0062 on Google listing) — NOT INCLUDED: no own website found in this run, so own-materials pressure-washing/on-site confirmation was not completed.
- FPS Cleaning Services, Martins Maintenance Inc, Home Clean Home INC and other East Providence cleaning/maintenance listings — NOT INCLUDED: no dedicated pressure/power washing service confirmed from their own materials in this run.
- National marketplaces / lead-gen (Angi, Thumbtack, HomeAdvisor, Yelp best-of lists) — excluded per the gates, not individually listed.

## ZIP / expansion note
- In-ZIP (02914): Foley Pressure Washing (based in East Providence, serving RI & Southeastern MA per own site; no additional ZIPs published, so service_zips = ["02914"]) and Alfa Painting (own site states East Providence, RI 02914, so service_zips = ["02914"]).
- Expansion (triggered because the dedupe skip left fewer than 3 in 02914): adjacent East Providence ZIP 02916 — LOPCO Contracting RI, 310 Bourne Avenue, East Providence, RI 02916 on its own site; service_zips = ["02914", "02916"] (target ZIP plus its own published address ZIP). No other ZIPs were invented — none of the included businesses publishes a ZIP list.

## Email leads
- 2 published emails collected, both from the businesses' own websites: Foley Pressure Washing — foleypressurewashingri@gmail.com (http://foleypressurewashingri.com/), and Alfa Painting — alfapainting2018@gmail.com (https://www.alfapaintingco.com/services/power-washing/) — see the matching -leads.json. LOPCO Contracting RI publishes no readable email address on its own site.
