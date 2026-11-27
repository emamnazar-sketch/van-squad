# Rotation Day 46 — Connecticut: West Hartford × Pressure washing × ZIP 06107

- Researched: 2026-11-27 (nightly rotation, Day 46)
- Cell note: ZIP 06107 is central West Hartford (Farmington Ave corridor). Pressure washing crews travel to the customer's home to wash siding, driveways, decks and walkways, so on-site service is the business model itself. The cell did NOT need to expand to an adjacent ZIP (06119 etc.): five qualifying operators confirm West Hartford service from their own materials — one is based in West Hartford itself and the others name West Hartford (or, for PALS, Hartford County, which includes West Hartford) in their own service-area materials. City column below is the cell city, West Hartford, per the batch brief; each business's actual base town is noted in its confidence line for transparency.
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing".
- Sources: each business's own website first, then public listings (Google Business, BBB, MapQuest, ContractorsRanked). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources, preferring the business's own site; never invented.
- Status: PREPARED, NOT INSERTED — batch files only; the coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Wicked Clean LLC | (860) 748-8655 | Pressure washing | West Hartford | https://www.wickedcleanct.com/ | — none collected (an info@ address appears only on a third-party review aggregator, not verified on its own site, so it was not collected) | High — own site: "Wicked Clean is based in West Hartford and works across Hartford County"; house washing, power washing, commercial pressure washing and concrete cleaning (driveways, walkways, patios) performed at the customer's property; phone (860) 748-8655 on its own site and in its press releases; owner David Cass named on its own site | Business's own website |
| K&R Power Washing | (860) 539-8280 | Pressure washing | West Hartford | http://krpowerwashing.org/ | — none published on its own site | High — own site title/headline: "Your Trusted Power Washing Company in Hartford, Glastonbury, West Hartford, CT"; its own service list names West Hartford explicitly; house wash, roof wash and driveway work at the customer's property; phone (860) 539-8280 on its own site. Base note: its own site footer/MapQuest listing base it at 81 Albert Ave, Wethersfield, CT 06109 — included because its own site names West Hartford as a served town | Business's own website + MapQuest listing |
| Eagle's Power Washing | (860) 507-9629 | Pressure washing | West Hartford | https://www.eaglespowerwash.com/ | eaglespowerwashing.ct@gmail.com — published on its own website (house washing page, same domain) | High — own site: house washing page lists "House washing in your town: Newington, West Hartford, Hartford, Glastonbury, Wethersfield, Rocky Hill, and New Britain"; soft wash for siding/roofs and controlled pressure for concrete/pavers at the customer's property; phone and email on its own site. Base note: its own site bases it at 159 Camp Ave, Newington, CT 06111 ("based in neighboring Newington, so West Hartford is a short drive") — included because its own site names West Hartford for this service | Business's own website |
| Elite House Wash LLC | (860) 940-0040 | Pressure washing | West Hartford | https://www.elitehousewash.com | info@elitehousewash.com — published on its own website (safety-protocol blog post, same domain) | High — own site: "Areas We Serve" list names West Hartford explicitly, and its services text names "roof cleaning in Bristol or West Hartford"; pressure/soft washing at the customer's home, owner-operated, no subcontractors; phone (860) 940-0040 on its own homepage. Phone note: older blog posts on its own site show (860) 770-5900 alongside the email — the current homepage call/text number (860) 940-0040 is used here | Business's own website |
| PALS Power Washing | (860) 919-8748 | Pressure washing | West Hartford | http://www.palspowerwashing.com/ | — none published on its own site | Medium — own site: "Pal's Power Washing has been providing residents and business owners in Hartford County with exterior cleaning services for more than 20 years" and "We provide Hartford County with the most competitive rates" — West Hartford is in Hartford County, but West Hartford is not named town-by-town on its own site, hence Medium; house washing, paver/concrete and fence cleaning at the customer's property, owner on-site every job; phone 860-919-8748 on its own site. Base note: its own site bases it in Southington, CT (41 Riverside Ct, Southington, CT 06489 per listings) | Business's own website + Google listing |

## Dedupe
- Prior prospecting files (all of ~/workspace/van-squad/prospecting/): grep for every name and phone in this batch returned no matches. The only "Wicked Clean" hit was an unrelated Boston laundromat, Wicked Clean Laundry, (617) 286-9119, in the Day 44 Boston deep-cleaning batch — different business, different phone.
- No name or phone is repeated within this batch. The coordinator still dedupes against the live database at insert time.

## Excluded (checked, did not pass the gates)
- Hartford Pressure Washing (hartfordpressurewashing.com, (860) 318-9322, 960 Main St, Hartford) — EXCLUDED: own site contains non-local template artifacts ("provincial workers' comp coverage") inconsistent with a Connecticut operator; no corroborating local listing could be verified, so local-operator status could not be confirmed from its own materials.
- Charlie the Power Washer LLC ((860) 840-0178 per BBB) — EXCLUDED: no verifiable own website found; sources conflict on its base (BBB lists Bristol, CT 06010; CB Insights lists 557 Prospect Ave, West Hartford) and West Hartford service could not be confirmed from the business's own materials.
- Spectrum Power Wash LLC — EXCLUDED: appears in a ranking list as serving West Hartford, but no own website or verifiable public phone could be found.
- Industrial Pressure Washers (942 New Britain Ave, West Hartford, (860) 608-6153) — EXCLUDED: single listing only, no own website found; appears to be an equipment/industrial listing and on-site residential service could not be confirmed from its own materials.
- West Hartford Carpet Cleaners (967 D Farmington Ave, West Hartford, CT 06107, (860) 556-2093) — EXCLUDED for this cell: a carpet-cleaning business whose own site presents pressure washing as a secondary exterior add-on, not a pressure-washing operator.
- Local Service Group / Hello Cleaners Hartford pressure-washing pages — EXCLUDED: national lead-generation / booking-network pages with 1-800 and out-of-state numbers, no local operator.
- HomeAdvisor / Angi West Hartford pressure-washing lists — EXCLUDED as sources for inclusion: lead-generation marketplaces, not businesses.

## Leads
- 2 published emails collected, each from the business's own website — see day-46-ct-west-hartford-zip06107-pressure-washing-leads.json:
  - Eagle's Power Washing — eaglespowerwashing.ct@gmail.com — https://www.eaglespowerwash.com/services/house-washing
  - Elite House Wash LLC — info@elitehousewash.com — https://www.elitehousewash.com/post/ensuring-comprehensive-safety-in-pressure-washing-protecting-property-and-the-environment
- Leads are a separate store and are never written into the businesses table or shown on a profile.

## Counts
- Included: 5 businesses + 5 listings (inserts.json)
- Leads: 2
- Excluded: 7 entries/groups listed above
- Service ZIPs: ["06107"] for every business — no business in this cell publishes its own service-area ZIP list on its own site, so no ZIPs were added beyond the target ZIP (town/county service areas only, as noted per business).

## Files
- Batch table: day-46-ct-west-hartford-zip06107-pressure-washing.md (this file)
- Inserts: day-46-ct-west-hartford-zip06107-pressure-washing-inserts.json — 5 businesses + 5 listings, exact specified shape (no extra keys, no city/email fields in businesses)
- Leads: day-46-ct-west-hartford-zip06107-pressure-washing-leads.json — 2 published emails
