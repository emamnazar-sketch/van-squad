# Rotation Day 44 — Massachusetts: Boston (Jamaica Plain) × Pressure washing × ZIP 02130

- Researched: 2026-11-25 (nightly rotation, Day 44)
- Cell note: ZIP 02130 is Jamaica Plain, Boston. Pressure washing crews travel to the customer's home, so on-site service is the business model itself. No expansion was needed to reach 3+, but two included operators are based in adjacent Boston ZIPs (02122 Dorchester and 02131 Roslindale area listings) whose own published service areas explicitly name Jamaica Plain / Boston — noted per row.
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing".
- Sources: each business's own website first, then public listings (Google Business, Houzz, HomeAdvisor, BBB). Public information only. Phones never invented.
- Status: PREPARED, NOT INSERTED — batch files only; coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Pressure Wash Boston, Inc. | (617) 659-8826 | Pressure washing | Boston | http://pressurewashboston.com/ | info@pressurewashboston.com — published on its own website (footer, same URL) | High — own site: pressure/soft washing, house/roof/walkway/pool-deck/fence washing for family homes in "Boston and surrounding area", testimonials from Dorchester and Boston, phone and email on site; base shown on site as 958 Watertown Street, West Newton, MA 02465 | Business's own website |
| Windows Cleaning Expert | (781) 228-0963 | Pressure washing | Boston | https://windowscleaningexpert.com/in/jamaica-plain-02130/ | — none published on its own site | High — own site has a dedicated Jamaica Plain 02130 page: homes in the city get "windows, gutters, roofs, house washing and pressure washing", phone 781-228-0963 on the page; primary trade is window/gutter cleaning with pressure washing published as a service for 02130 | Business's own website |
| Kyle Dejoie-Wilson | (617) 308-7269 | Pressure washing | Boston | — none found | — none published | Medium — Houzz listing only (no own website found): "Based in Boston, we operate our pressure washing services throughout much of Massachusetts", specializing in siding, decks, driveways, concrete, brick; Areas Served explicitly lists Jamaica Plain; address 344 Bowdoin St, Boston, MA 02122 (adjacent ZIP); phone on Houzz listing | Houzz listing |
| Ultra Wash USA | (617) 512-8338 | Pressure washing | Boston | — none found (see flag) | — none published | Medium — HomeAdvisor listing based in Roslindale, MA (adjacent to Jamaica Plain): "locally owned and operated", services include Pressure Washing / Soft washing, phone 617-512-8338 in its own listing text; no own website verified — ultrawashpowerwash.com is a different business (301 area code) and was NOT used | HomeAdvisor listing |
| SKYREX Property Services | (617) 219-9664 | Pressure washing | Boston | https://skyrexpropertyservices.com/services/boston-soft-and-pressure-washing/ | info@skyrexpropertyservices.com — published on its own website (Boston contact page: https://skyrexpropertyservices.com/boston-contact/) | Medium — own site has a dedicated Boston soft & pressure washing page for driveways, patios, sidewalks, decks, fences, and its contact page explicitly lists Jamaica Plain among Boston neighborhoods served, base 205 Humboldt Ave, Boston, MA 02121; FLAG: multi-city cleaning company (also Canada/US locations) and pressure washing is one service among many — local Boston number (617) 219-9664 used here, published on its own contact page under "Call Us" alongside its (855) 496-2654 main line | Business's own website |
| 78-Clean | (617) 782-5326 | Pressure washing | Boston | https://www.78clean.com/power-washing | info@78clean.com — published on its own website (power-washing page, same URL) | Medium — own site: power washing crews service Greater Boston properties year-round (building exteriors, walkways, entries), serving list includes Boston, Allston, Brighton, Brookline, Cambridge, Newton; base 48 North Beacon Street, Boston, MA 02134, phone and email on site; FLAG: commercial focus (multifamily, offices, schools, religious institutions) rather than single-family residential | Business's own website |

## Dedupe
- Live DB dump (/tmp/vs_dump.json, 3,920 businesses): checked every name and phone above — no matches (the only substring hit was an unrelated Illinois cleaning business with a different name/phone).
- Prior prospecting files (~/workspace/van-squad/prospecting/): grep for every name and phone returned no matches.
- No name or phone repeated within this batch.

## Excluded (checked, did not pass the gates)
- Water Works Pressure & Soft Wash, Framingham (617) 816-2700 — EXCLUDED for this cell: its own site states service "across the South Shore of Massachusetts"; Boston / Jamaica Plain coverage not stated in its own materials.
- DaSilva Power Washing, Lowell (774) 279-5009 — EXCLUDED: Lowell-based, own site says Lowell "and beyond" with no Boston/Jamaica Plain coverage confirmed.
- Boston Pressure Washing, 470 W Broadway, Boston (781) 531-9022 — EXCLUDED: Google listing only, no verifiable own website found to confirm on-site service.
- Pressure Washing Service (roslindale-ma.pressurewashingservice.co, 877 number) — EXCLUDED: lead-generation-style network site, 877 call-center number, no local operator identity.
- Ned's Window Cleaning and Power Washing / Ned Stevens — EXCLUDED: national chain (60+ years, 112 cities), not a local operator for this cell.
- That 1 Painter Greater Boston, Perfection Painting — EXCLUDED for this cell: painting companies; pressure washing is prep/incidental, not their trade.
- Summit Home Solutions LLC — EXCLUDED: no verifiable phone or own website found (Angi/HomeAdvisor description only).

## ZIP note
- 02130 (Jamaica Plain, Boston) is the target ZIP for every business. Additional service ZIPs in inserts, each evidenced above: 02465 (West Newton — Pressure Wash Boston's own base address on its site), 02122 (Boston — Kyle Dejoie-Wilson's Houzz address), 02121 (Boston — SKYREX's own Boston address), 02134 (Boston — 78-Clean's own Boston address).

## Files
- Batch table: day-44-ma-boston-zip02130-pressure-washing.md (this file)
- Inserts: day-44-ma-boston-zip02130-pressure-washing-inserts.json — 6 businesses + 6 listings, day-02 shape
- Leads: day-44-ma-boston-zip02130-pressure-washing-leads.json — 3 published emails (Pressure Wash Boston, SKYREX, 78-Clean), each from the business's own website; leads are a separate store, never written into the businesses table
