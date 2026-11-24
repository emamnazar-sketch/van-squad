# Day 43 — ME / Westbrook / ZIP 04092 / Pressure washing

- Cell: State=ME, City=Westbrook, ZIP=04092, Category="Pressure washing" (exact label verified in js/data.js)
- Date: 2026-11-24
- Expansion note: Only 2 qualifying businesses were found based in Westbrook (04092), fewer than 3, so the cell expanded to adjacent ZIP 04102 (Portland) as instructed. Portland businesses keep their own city (Portland) and service_zips ["04102"].

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| CleanME Exteriors | (207) 209-3799 | Pressure washing | Westbrook | https://cleanmeexteriors.com/ | hello@cleanmeexteriors.com — https://cleanmeexteriors.com/ (own site) | High — own site: "Based in Westbrook", family-owned pressure washing company; "We will come to your property and clean your home"; own-site footer gives 16 Dudley Way, Westbrook, ME 04092, phone and email | Business's own website | No match for name, phone, or email in ~/workspace/van-squad/prospecting/ |
| Crystal Clear Solutions | (207) 400-9100 | Pressure washing | Westbrook |  | none published found | Medium — public listing at 126 King St, Westbrook, ME with phone (207) 400-9100; its self-description: "a professional commercial and residential exterior pressure washing company serving Westbrook, Portland, South Portland, Cape Elizabeth and beyond" — work at customer's property. Medium because no own website was verifiable | Public listing (Google/place listing via search) | No match for name or phone in ~/workspace/van-squad/prospecting/ |
| Viking Power Wash | (207) 615-3161 | Pressure washing | Portland | https://vikingpowerwash.com/ | none published found | Medium — own site: "based in Portland, ME", residential and commercial pressure washing of siding, driveways, patios and decks at the customer's property; phone 207-615-3161 on own site. Medium because own site gives no street address/ZIP (expansion ZIP 04102 used) | Business's own website | Name differs from prior "Viking Power Washing" (Mason, OH, (513) 995-1800) in day-29 file — different business, different phone; no match for this name/phone in prospecting files |
| Pressure Washing Portland Maine | (207) 393-2121 | Pressure washing | Portland | https://pressurewashingportlandmaine.com/ | none published found | High — own site: "Portland is home base", free on-site estimates, soft/pressure washing of siding, roofs, decks, driveways and storefronts at the property; phone +1 207-393-2121 on own site | Business's own website | No match for name or phone in ~/workspace/van-squad/prospecting/ |

## Excluded

| Name | Reason |
|---|---|
| Eastern Drains | Statewide drain/plumbing company generating a templated power-washing page for every town; no Westbrook/Portland local pressure-washing operator identity established — excluded as non-local/templated lead-style listing |
| Southern Maine Power Wash, LLC | Own site confirms pressure washing serving Westbrook and phone (207) 543-3553, but its listing address is in Scarborough, ME — outside the target cell and the instructed 04102 Portland expansion; not counted in this cell |
| Britewash | Founded in Kittery, ME (1991) and serves ME/NH/MA regionally from outside the cell/expansion area; not a Westbrook or Portland-04102-based operator |
| Aptera / Local Service Group / HomeBlue | National lead-gen / cost-guide listings with no local operator — excluded per rules |
| Holistic Cleaners, Maine Cleaning Solutions, and other Westbrook cleaning services | House/janitorial cleaning only; no pressure washing confirmed from their own materials |

## Leads summary

1 published email collected (see -leads.json): CleanME Exteriors — hello@cleanmeexteriors.com, published on its own website https://cleanmeexteriors.com/. Crystal Clear Solutions, Viking Power Wash, and Pressure Washing Portland Maine publish no email on the sources checked — no lead, nothing guessed.

## Counts

- Qualifying: 4 (Westbrook 04092: 2; Portland 04102 expansion: 2)
- Leads: 1
- Excluded considered: 5 entries above

## Coordinator insert decision (2026-11-24)
- Crystal Clear Solutions was REMOVED before insert: it has no verifiable own website and its service was confirmed only from a public listing, failing the own-materials gate (same standard applied in prior nights). Inserted from this cell: 3.
