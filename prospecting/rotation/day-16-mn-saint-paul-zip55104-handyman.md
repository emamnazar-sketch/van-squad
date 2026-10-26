# Day 16 — Minnesota | Saint Paul | ZIP 55104 | Handyman

- Cell: MN × Saint Paul × 55104 × "Handyman" (exact site taxonomy label)
- Researched: 2026-10-26 (Day 16 rotation)
- Method: public information only — business's own website first, then public listings (Google Business, BBB, cityof.com). No insertion performed by this worker; batch prepared for central insert.
- On-site gate: every included business performs handyman/repair work at the customer's home, confirmed from its own materials or its Google listing's In-Home Service / Handyman categorization.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Faschingbauer Services | (651) 300-8119 | Handyman | Saint Paul | https://evanfaschingbauer.wixsite.com/faschingbauerservice | None published | High — address is 706 Minnehaha Ave W, Saint Paul, MN 55104 exactly; phone matches on Google listing, cityof.com, and its own Wix site describing general handyman/remodeling at homes | Google Business listing; cityof.com listing (55104 address); own Wix site |
| AMC Services | (651) 815-7469 | Handyman | Saint Paul | https://amcservicesmn.com/ | None published | Medium — 1571 Lafond Ave, Saint Paul (in 55104, ~1,200 ft from cell center) with Handyman category and own website on Google listing; own site homepage not directly readable in this pass | Google Business listing |
| Candor Services | (651) 336-5961 | Handyman | Saint Paul | http://candormn.com/ | None published | Medium — 243 Fuller Ave, Saint Paul; Google listing categorizes it Handyman + In-Home Service and its description is improving/remodeling/maintaining homes; own site listed but unreachable in this pass | Google Business listing |
| St Paul Handy Man | (651) 321-9272 | Handyman | Saint Paul | https://www.stpaulhandyman.net/ | Mystpaulhandyman@gmail.com — https://www.stpaulhandyman.net/ | High — own site read directly: phone and email on the page, drywall/painting/trim/door/flooring repairs done in Saint Paul homes, serves greater St. Paul metro | Own website (read directly) |
| C's Handyman Services | (612) 707-9711 | Handyman | Saint Paul | https://cs-handyman-services-llc.business.site/ | None published | Medium — 735 Victoria St S, Saint Paul; Google Handyman listing with its own Google business site and public phone | Google Business listing + business's Google site |
| MattWorks LLC | (612) 396-7762 | Handyman | Saint Paul |  | None published | Medium — 244 King St W, Saint Paul; Google listing categorizes it Handyman with a public phone; no website published | Google Business listing |
| Twin Cities Handyman Home Service LLC | (763) 354-8170 | Handyman | Saint Paul | https://www.twincitieshandymanmn.com/ | twincitieshandymanllc@gmail.com — https://www.twincitieshandymanmn.com/ | High — own site read directly: phone and email on the page, "Local & Independent," in-home repair list (drywall, painting, flooring, doors), and St. Paul named in its coverage area; based in West St. Paul | Own website (read directly) |

## Dedupe

- Every candidate name AND phone checked against ~/workspace/goals/van-squad-directory-website/hidden_files/day16-dedupe.txt (1,313 live businesses) and grep of all files in ~/workspace/van-squad/prospecting/. Result: NO matches for any of the 7 included businesses — no name or phone collisions.

## Excluded

- Mr. Handyman locations — franchise network, excluded per brief.
- Ace Handyman Services franchise locations — franchise network, excluded per brief.
- Handyman Connection — franchise network, excluded per brief.
- Angi / HomeAdvisor pros (e.g., Chuck Hecht) — lead-gen listings with no independent business source, excluded per brief.
- McGuire Commercial Handyman, 756 Vandalia St, Saint Paul, (651) 358-2091 — commercial-only focus; no residential in-home service confirmed.
- Klondike Handyman & Remodeling Services, (651) 246-2886 — its own website bases it at 3360 Klondike Ave N, Lake Elmo, MN, not Saint Paul (a conflicting Saint Paul listing exists); held out of the Saint Paul cell.
- Jay Freitag LLC — based in West St. Paul, not Saint Paul proper.
- Handyman Dave LLC (Mounds View), Handyman For Home LLC (Eagan), Cities Handyman Service and Dr. Fixit (Minneapolis) — outside the Saint Paul cell.
- Virnala's Home Repair Service Inc, (612) 210-7520 — considered (BBB A+, publishes 55104 in its service area) but held out: listed as construction/home repair rather than a handyman business, with phone sourced only from a BBB aggregator page.
- Fixer Minneapolis-St.Paul — multi-city platform service, not a local independent operator.

## ZIP note

No expansion beyond Saint Paul was needed. Two businesses sit inside 55104 itself (Faschingbauer Services at 706 Minnehaha Ave W, 55104; AMC Services at 1571 Lafond Ave, 55104) and the rest are Saint Paul–based or explicitly serve Saint Paul including the 55104 area. No business published its own service-ZIP list, so service_zips = ["55104"] for all rows.

## Count

- Included: 7 businesses (3 High confidence, 4 Medium), 7 listings.
- Published email leads: 2 (see -leads.json).
- Files: day-16-mn-saint-paul-zip55104-handyman.md / -inserts.json / -leads.json. Prepared only — NOT inserted.
