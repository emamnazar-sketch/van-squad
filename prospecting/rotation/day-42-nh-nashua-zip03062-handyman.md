# Day 42 — NH, Nashua, ZIP 03062, Handyman

Cell: State=NH | City=Nashua | ZIP=03062 | Category=Handyman (exact label verified in js/data.js, line 2109)
Date researched: 2026-11-23
Found: 4 qualifying businesses. No expansion to adjacent ZIP 03060 was needed (≥3 qualified in the Nashua / 03062 cell). All four are Nashua-based handyman operators serving customers at their homes; none publishes a specific service-ZIP list, so service_zips = ["03062"] only.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| A-Z Property Repair, LLC | (603) 288-0877 | Handyman | Nashua | https://www.a-zpropertyrepair.com/ | a2zpropertyrepair@gmail.com — https://www.a-zpropertyrepair.com/ (Contact section of own site) | High — phone and email both on own site; own site offers home repair services at customers' homes | Own website (fetched 2026-11-23: shows 603-288-0877 and the email); Google listing corroborates same phone | No match in day42-dedupe-names.txt / day42-dedupe-phones.txt or anywhere in ~/workspace/van-squad/prospecting/. Note: own site also shows a secondary 1-617-465-6592 number; the Nashua 603 number matching the Google listing was used. |
| Jays Odd Jobs LLC | (603) 438-3986 | Handyman | Nashua | https://jaysoddjobs.com/ | None published | High — phone on own site; own site lists "Handyman tasks" and Nashua-based residential/commercial repair at customers' properties | Own website (fetched 2026-11-23: "CALL NOW 603-438-3986", services list includes Handyman tasks) | No dedupe match (name/phone checked against day-42 dedupe files and full prospecting grep). |
| WJM Handyman Company | (603) 233-9643 | Handyman | Nashua | http://wjmhandyman.com/ | None published | Medium — own site confirms on-site handyman work ("serve all of Southern NH", "general handyman services", free estimates) but the fetched homepage did not display the phone; phone is from its public Google listing | Own website http://wjmhandyman.com/ (fetched 2026-11-23) for service confirmation; Google listing for phone (603) 233-9643 and Nashua address (44 Thornton Rd) | No dedupe match. Listing name appears as "Wjm Handyman Co. LLC"; own-site name "WJM Handyman Company" used. |
| SUN Handy Services | (603) 321-1411 | Handyman | Nashua | https://sunhandy.com/ | None published | Medium — business's own Google description confirms on-site handyman work ("We offer a variety of handyman services in Nashua NH and surrounding areas. We're fully insured"); phone from its Google listing; its own website currently shows a "Coming Soon" placeholder, so no phone could be confirmed on the site itself | Google Business listing (phone, Nashua address 8 Indian Fern Dr, self-description); own domain https://sunhandy.com/contact-us/ resolves but is under construction (fetched 2026-11-23) | No dedupe match. Flagged Medium for the coordinator: re-verify phone if the site relaunches. |

## Excluded

- BasementSelfSolve (Nashua, 304 Amherst St) — excluded: only phone is toll-free (866) 967-5814; toll-free numbers are excluded by cell rules, and no local number or own website was verifiable.
- MG Contracting and Handyman Service (Nashua, (603) 233-2290) — excluded: no own website or own published materials found to confirm on-site service; only a bare listing entry.
- E&R Handyman Services (Nashua, (603) 557-1259) — excluded: no own website; only an Instagram/listing presence, so on-site service could not be confirmed from the business's own materials.
- Schroeder's Handyman Service (Nashua, (978) 967-0069) — excluded: no own website or own materials found to confirm on-site service; only a bare listing entry.
- Ace Handyman Services Goffstown / Mr. Handyman of Lowell, Andover and Haverhill — excluded: franchise locations based outside Nashua (Goffstown NH / Lowell MA area), not Nashua operators for this cell; Ace Goffstown's published number is also a toll-free (833) number.
- Angels Upholstery, Right Computer Solutions, Portland Glass of Nashua, Southern NH Tree & Landscape — excluded: not handyman businesses (upholstery / computer repair / glass / tree service).

## Leads summary

1 published email collected tonight:
- A-Z Property Repair, LLC — a2zpropertyrepair@gmail.com — source https://www.a-zpropertyrepair.com/

No emails were guessed; the other three businesses publish no email on their own site or listing.
