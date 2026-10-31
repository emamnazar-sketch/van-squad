# Van Squads — Day 21 Cell Research

- Researched: 2026-10-31
- Day: 21
- Cell: Wisconsin × Milwaukee × ZIP 53219 × Pressure washing
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally
- Sources: each business's own website first, then public listings (Google Business, BBB, Angi/HomeAdvisor). Public information only. No phones, ZIPs, or emails invented. All City values are Milwaukee per this cell's assignment; bases outside Milwaukee are noted in the confidence reason where they apply.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Vista Pro Exterior Cleaning | (262) 675-4102 | Pressure washing | Milwaukee | https://www.vistaprowi.com/ | info@vistaprowi.com — published on its own website, https://www.vistaprowi.com/ | High — own site: "Milwaukee's Highest Rated Pressure Washing Company," residential & commercial house/driveway/patio washing performed at the customer's property, "We proudly service all of Ozaukee, Sheboygan, Milwaukee, and Washington Counties"; phone and email on the site; family-owned, not a franchise (HQ Port Washington, service area covers Milwaukee incl. 53219) | Business's own website |
| DeMark's Window & Pressure Cleaning | (262) 894-2057 | Pressure washing | Milwaukee | https://www.demarks.com/ | office@DeMarks.com — published on its own website (footer/contact), https://www.demarks.com/ | High — own site: pressure washing of driveways, sidewalks, patios and decks by trained technicians who travel to the property, "served residential and commercial customers in Madison, Waukesha, and the greater Milwaukee area" since 2007; phone and email in the site footer (base 1421 Pearl St, Waukesha, WI 53186) | Business's own website |
| Squeegee Squad of Milwaukee | (262) 437-0384 | Pressure washing | Milwaukee | https://squeegeesquad.com/milwaukee-wi/residential/pressure-soft-washing/ | — none published (quote form only) | Medium — own Milwaukee location page: pressure/soft washing of siding, patios, driveways and decks at Milwaukee homes, phone (262) 437-0384 on the page, location footer "310 W Wisconsin Ave, Milwaukee, WI 53203"; franchised brand but a named local Milwaukee operator with a local phone, not a national call-center listing | Business's own Milwaukee location page |
| Moxie Pressure Washing LLC | (414) 852-9992 | Pressure washing | Milwaukee | http://www.moxiepressurewashing.com/ | — none found on a public source | Medium — Google Business listing gives Milwaukee address 5244 N 124th St, Milwaukee, WI, this phone, and its own website; BBB category listing confirms it as a Milwaukee-area pressure washing / gutter cleaning / roof cleaning operator; pressure washing is performed on-site at the customer's property. Its own site was bot-blocked at check time, so confidence is Medium rather than High | Google Business listing + BBB listing |
| Midwest Fleet Wash | (414) 323-5610 | Pressure washing | Milwaukee | https://midwestfleetwash.com/ | — none collected (its own site shows an email link behind address protection, so the address itself could not be read and was not guessed) | Medium — own site: "Fleet and Pressure Washing Service in Wisconsin," premier fleet/pressure washing provider "in the greater Milwaukee area," a named "Mobile Fleet Washing" service plus graffiti removal and parking garage cleaning in Milwaukee performed at the customer's site; phone (414) 323-5610 and address 2401 West Mill Rd, Glendale, WI 53209 on the site itself. Fleet/commercial-weighted rather than residential, so Medium | Business's own website |

## Dedupe / exclusion notes

- Dedupe: every candidate name AND phone was checked against ~/workspace/van-squad/prospecting/rotation/day21-dedupe.txt (no Milwaukee/Wisconsin entries; no matches) and grep-searched across all files under ~/workspace/van-squad/prospecting/ — no name or phone matches for any of the five included businesses. Near-name check: other Squeegee Squad units already in the directory (Denver County CO (720) 408-0014, Fargo ND (701) 412-8633, Wichita KS (316) 202-6020) are different franchise units with different names and phones; the Milwaukee unit is distinct.
- No name or phone is repeated within this batch.
- Excluded — Wahlen Works (Milwaukee): own site confirms Milwaukee pressure washing, but the site itself publishes no phone (estimate form only) and the only phone in aggregator listings was an implausible out-of-state (619) number that could not be verified — fails the verifiable-public-phone gate.
- Excluded — Best View Cleaning (Milwaukee, (414) 384-4500 in older Angi magazine ads): its listed website bestviewcleaning.com now resolves to an unrelated window cleaner in Charlottetown, PEI, Canada, so pressure washing could not be confirmed from its current own materials.
- Excluded — Sparkle Wash East Wisconsin ((414) 397-8047, Lomira, WI): own site verifies pressure washing and the phone, but its own service pages center on Sheboygan / West Bend / Waukesha and do not state Milwaukee coverage; held out of this Milwaukee cell rather than assumed.
- Excluded — Power Wash Store Milwaukee ((414) 236-5460): storefront equipment sales/rentals/repairs in Menomonee Falls, not an on-site pressure washing service.
- Excluded — Milwaukee Pressure Wash Inc (Pewaukee, Angi-listed): no own website and no verifiable public phone could be found on a public source.
- Excluded — Malie's Pressure Washing & Mobile Service LLC (Milwaukee, HomeAdvisor-listed): no own website and no verifiable public phone on a public source.
- Excluded — Masters' Guild / HomeAdvisor / Angi matching pages for Milwaukee: lead-generation platforms with no local operator phone published by a business itself.
- Excluded — Men In Kilts: only a national (888) number found for pressure washing; no Milwaukee local operator phone verified (toll-free-only exclusion).
- Excluded — Enviro-Master of Milwaukee: national franchise cleaning-chemical/restocking service; pressure washing is an add-on line, not a local pressure-washing operator for this cell.

## ZIP note

- Target ZIP 53219 (southwest Milwaukee / West Allis border) yielded no pressure-washing business based inside the ZIP itself with a verifiable phone and own materials, so the cell was filled with Milwaukee-area operators whose own materials state Milwaukee / Milwaukee County service covering 53219 — no expansion to a different target ZIP was needed, and the target ZIP was not changed.
- Service ZIPs in the inserts: ["53219"] for all five businesses. No additional service ZIPs were added: none of the five publishes a ZIP-by-ZIP service list naming other ZIPs (they state city/county-level service areas), so no ZIPs were invented. Bases noted for context only (not added as service ZIPs): Vista Pro — Port Washington 53074; DeMark's — Waukesha 53186; Squeegee Squad of Milwaukee — Milwaukee 53203; Moxie — Milwaukee (124th St); Midwest Fleet Wash — Glendale 53209.
- 53219 is for the coordinator to check against ZIP_NAMES in js/data.js centrally; this batch did not edit data.js.

## Files

- Batch table: day-21-wi-milwaukee-zip53219-pressure-washing.md (this file)
- Inserts: day-21-wi-milwaukee-zip53219-pressure-washing-inserts.json — 5 businesses + 5 listings
- Leads: day-21-wi-milwaukee-zip53219-pressure-washing-leads.json — 2 published emails (Vista Pro Exterior Cleaning, DeMark's Window & Pressure Cleaning), each taken from the business's own website; leads are a separate store and are never written into the businesses table
