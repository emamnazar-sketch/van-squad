# Day 16 — Minnesota | Minneapolis | ZIP 55413 | Handyman

- Cell: MN × Minneapolis × 55413 (Northeast Minneapolis) × "Handyman" (exact site taxonomy label, verified in ~/workspace/van-squad/js/data.js)
- Researched: 2026-10-26 (Day 16 rotation, Wave 3)
- Method: public information only — business's own website first, then public listings (Google Business, Expertise). No insertion performed by this worker; batch prepared for central insert.
- On-site gate: every included business performs handyman/repair work at the customer's home, confirmed from its own materials or its Google listing's Handyman / In-Home Service categorization.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Muse Remodeling | (763) 807-6928 | Handyman | Minneapolis | http://muse-remodeling.com/ | None published | Medium — own site read directly has an explicit "Handyman services" section (door/storm door installation, general repairs, trim work in customers' homes) and gives its address as 2705 Pierce St NE, Minneapolis 55418, adjacent Northeast ZIP; owner is a Northeast Minneapolis resident; phone is from its Google listing, not visible on the homepage read | Own website (read directly); Google Business listing |
| Mission Handyman & Painting | (763) 710-6027 | Handyman | Minneapolis | http://mission-painting.jany.io/ | None published | Medium — its own site page confirms address 1324 5th St SE, Minneapolis, MN 55414 (adjacent ZIP just south of 55413) and phone +1 763-710-6027, describing residential handyman/garage-door/painting work at properties; Google listing categorizes it Handyman | Own website (read directly); Google Business listing |
| Home Service Handyman | (612) 385-2813 | Handyman | Minneapolis | http://home-service-handyman.com/ | Josh@Home-Service-Handyman.com — http://home-service-handyman.com/ | High — own site read directly: owners Josh & Tina Nelson, phone 612-385-2813 and email on the page, "Serving the Minneapolis Downtown and Metro Areas" (metro includes Northeast / 55413); Google listing categorizes it Handyman + In-Home Service | Own website (read directly) |
| Cities Handyman Service | (612) 431-9817 | Handyman | Minneapolis | https://www.citieshandyman.com/ | None published | High — own site read directly: phone 612-431-9817 on the page, Minneapolis handyman services for homeowners (painting, doors/windows, flooring, repairs) done in their homes, address 5604 S 32nd Ave, Minneapolis; Google listing categorizes it Handyman + In-Home Service | Own website (read directly); Google Business listing |
| Renaissance Works | (612) 208-7662 | Handyman | Minneapolis | http://www.renaissanceworksllc.com/ | None published | High — own site read directly (as Renaissance Works LLC): phone (612) 208-7662 on the page, interior/exterior home projects and repairs for homeowners, address 3731 North Morgan Avenue, Minneapolis, MN 55412 (adjacent north/west ZIP); Google listing categorizes it Handyman | Own website (read directly); Google Business listing |
| Shamrock Home Repair | (612) 619-1840 | Handyman | Minneapolis | http://shamrockhomerepair.com/ | None published | Medium — own site read directly confirms home repair/construction work treating clients' homes with care in Minneapolis; Google listing categorizes it Handyman, gives address 4739 1st Ave S, Minneapolis and phone (612) 619-1840, which was not visible on the homepage read | Own website (read directly); Google Business listing |

## Dedupe

- Every candidate name AND phone checked against ~/workspace/goals/van-squad-directory-website/hidden_files/day16-dedupe.txt (1,313 live businesses) and grep of ALL files in ~/workspace/van-squad/prospecting/, including tonight's Day 16 Wave 1–2 files. Result: NO matches for any of the 6 included businesses — no name or phone collisions.
- Wave 1–2 handymen specifically re-checked and NOT re-listed: Saint Paul — Faschingbauer Services, AMC Services, Candor Services, St Paul Handy Man, C's Handyman Services, MattWorks LLC, Twin Cities Handyman Home Service LLC; Burnsville — MN Helper, Twin Cities Handywoman, Mosaic Services LLC, Soriano Handyman & Construction, JJP Handyman Service.
- Note: Cities Handyman Service appears in the Saint Paul batch file only as an exclusion note ("outside the Saint Paul cell") — it was never listed/inserted there, so it is correctly placed in this Minneapolis cell.

## Excluded

- Ace Handyman Services Minneapolis Metro, (612) 400-9740 — franchise network, excluded per brief.
- Mr. Handyman locations — franchise network, excluded per brief.
- Handyman Connection — franchise network, excluded per brief.
- Four Seasons Handymen, (612) 991-9667 — Google listing exists, BUT its own website fourseasonshandymen.com now resolves to an unrelated online-gambling page; the business's own materials could not be verified — excluded.
- NorthStar Handyman Co. — its own site publishes phone (612) 555-0184, a 555 fictional-range number that cannot be verified as a real public phone — excluded.
- Dr. Fixit, (612) 202-9466 — verified own site, but it explicitly limits its service area to South Minneapolis, Richfield, Bloomington and Edina; it does not serve Northeast Minneapolis / 55413 — excluded from this cell.
- Ur Tech Handyman, (612) 405-7111 — own site is smart-device/tech tutoring for seniors, not home handyman repair work — not a category fit, excluded.
- Handy Rite, (763) 360-2271 — found only as an Angi/HomeAdvisor pro listing with no verifiable own website in this pass — lead-gen listing, excluded per brief.
- Fixer Minneapolis-St.Paul — multi-city platform service (50 employees, B-Corp platform), not a local independent operator — excluded (also excluded in the Saint Paul cell).
- Handyman Dave LLC, Mounds View — outside the Minneapolis cell (suburban base, ~7.5 miles north).
- Trusty Tony's / Walrod scrapping & handyman services / Liberty Handyman Services — landscaping/scrapping-leaning or no verifiable own website and on-site handyman work not confirmed from their own materials in this pass — excluded.

## ZIP note

55413 itself (Northeast Minneapolis) yielded few handyman businesses with their own verifiable materials, so the cell expanded to adjacent Minneapolis ZIPs as allowed: 55418 (Muse Remodeling, Pierce St NE — Northeast), 55414 (Mission Handyman & Painting, 5th St SE), 55412 (Renaissance Works, N Morgan Ave), plus Minneapolis-based operators whose own sites state Minneapolis-wide / metro service covering 55413 (Home Service Handyman, Cities Handyman Service, Shamrock Home Repair). No business published its own service-ZIP list, so service_zips = ["55413"] for all rows.

## Count

- Included: 6 businesses (3 High confidence, 3 Medium), 6 listings.
- Published email leads: 1 (see -leads.json).
- Files: day-16-mn-minneapolis-zip55413-handyman.md / -inserts.json / -leads.json. Prepared only — NOT inserted.
