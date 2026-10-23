# Rotation Day 13 — Texas: Richardson × Pressure washing × ZIP 75080

- Researched: 2026-10-23 (nightly rotation, Day 13)
- Cell: Texas × Richardson × ZIP 75080 × "Pressure washing"
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing"
- Sources: each business's own website first, then public listings (Google Business / search listings). Public information only.
- Status: PREPARED, NOT INSERTED

## ZIP note
- ZIP 75080 is central Richardson. Four qualifying businesses were found without expansion to an adjacent ZIP, so no expansion was needed. None of the four publishes a ZIP-level service list on its own materials; each explicitly names Richardson in its own service area, and the crew travels to the customer's home. Following the Day-12 precedent, service_zips records only the target ZIP: ["75080"] for all. No other ZIPs were invented or inferred.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Hogan's Pro Services | (469) 383-8945 | Pressure washing | Richardson | https://www.hogansproservices.com/pressure-washing | mike@hogansproservices.com — published on its own website https://www.hogansproservices.com/pressure-washing | High — own pressure-washing page: residential driveways, patios, siding and fences cleaned at the home, Richardson named throughout its areas-served list, phone and email in the site footer | Business's own website |
| HydroVibe | (214) 517-0515 | Pressure washing | Richardson | https://www.hydrovibetx.com/ | kyle@hydrovibetx.com — published on its own website https://www.hydrovibetx.com/ | High — own site: locally owned residential-only pressure washing (driveways, sidewalks, patios, vinyl fences) with a dedicated Richardson service section, phone and email on the site | Business's own website |
| Stanford Evans Property Services | (214) 404-3931 | Pressure washing | Richardson | https://stanfordevans.com/ | — none published on its own site | Medium — own site: local student-run DFW crew offering pressure washing at customers' homes, its own areas list explicitly includes Richardson, phone on the site; pressure washing is one of several home services rather than its sole trade | Business's own website |
| Lone Star Exterior LLC | (214) 433-0908 | Pressure washing | Richardson | https://lonestarexteriorllc.sintra.site/ | — none published on its own site | Medium — own site: house washing (soft wash), driveways & sidewalks, roofs and fences for Richardson homes, Richardson named as its home market, call/text phone on the site; it also offers commercial exterior cleaning, so it is not commercial-only | Business's own website |

## Dedupe
- Live DB: pulled all rows via vs_rest.py `businesses?select=name,phone` plus the `&offset=1000` pull on 2026-10-23 — no match for any name or phone above. The Day-13 Irving cell's additions (Dallas Power Wash (972) 972-9449, Burleson Power Washing, Dallas Paints, Kalina's Pressure Washing, Cooper's Power Washing Service LLC) are present in the DB and were NOT reused, per the brief.
- Prospecting files: grepped every name and phone above against all files in ~/workspace/van-squad/prospecting/ (grep -ri) on 2026-10-23: no matches for Hogan / 383-8945, HydroVibe / 517-0515, Stanford Evans / 404-3931, or Lone Star Exterior / 433-0908.
- No name or phone is repeated within this batch.

## Excluded (checked, did not pass the gates)
- Dallas Power Wash, Burleson Power Washing, Dallas Paints, Kalina's Pressure Washing, Cooper's Power Washing Service LLC — ALREADY IN DB from the Day-13 Irving cell; skipped per the brief's do-not-reuse instruction.
- Bestway Mobile Power Wash (Carrollton) — EXCLUDED: its own website could not be verified live in this research; the only sources found were a ~2015 brochure republication (Publitas/Calameo) stating Richardson service and the phone (972) 978-0708, which is too stale to verify as a current public phone from the business's own materials.
- Golden Power Washing & Line Striping LLC (goldenpowerwashing.com) — EXCLUDED: own site centres on commercial/airport line striping and parking-lot work with no verifiable public phone on the fetched site; residential washing is a minor mention.
- Richardson Property Services / Gorilla Property Services (gorillapropertyservices.com) — EXCLUDED: national franchise system's Richardson franchisee page; pressure washing is one item in a franchise catalog, excluded under the franchise rule.
- That 1 Painter Dallas (Richardson address, (214) 432-4636) — EXCLUDED: painting company; pressure washing is pre-paint preparation, not a dedicated pressure-washing operator.
- 1st Choice Soft Wash (1stchoicesoftwash.com Richardson page) — EXCLUDED: multi-city templated lead-generation style site with no verifiable local operator or public phone confirmed from its own materials in this research.
- HWC Systems (Richardson) — EXCLUDED: commercial janitorial/facilities contractor; no residential pressure-washing offer.
- Aptera / Thumbtack / HomeAdvisor Richardson pressure-washing pages — EXCLUDED: lead-gen aggregators, not businesses.

## Files
- Batch table: day-13-tx-richardson-zip75080-pressure-washing.md (this file)
- Inserts: day-13-tx-richardson-zip75080-pressure-washing-inserts.json — 4 businesses + 4 listings
- Leads: day-13-tx-richardson-zip75080-pressure-washing-leads.json — 2 published emails (Hogan's Pro Services, HydroVibe), each from the business's own website; leads are a separate store and are never written into the businesses table
