# Rotation Day 5 — Montana: Missoula × Handyman × ZIP 59801

- Researched: 2026-10-17 (Day 5, manual live run)
- Cell: Montana × Missoula × ZIP 59801 × Handyman (thin batch — up to 5)
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Inside Out Handyman | (406) 214-7551 | Handyman | Missoula | https://www.insideouthandymanmt.com/ | — none published (own site shows an "Email" heading/contact form but no readable address, so none was guessed) | High — own site lists 1480 Renaissance Dr, Missoula, MT 59802 and phone 406-214-7551, presents a full-service handyman doing residential/commercial repairs at customers' properties across Missoula and surrounding areas; listed on Google as "Insideout Handyman" | Business's own website + Google Business listing |
| Steadfast Handyman MT | (406) 303-0127 | Handyman | Missoula | http://steadfasthandymanmt.com/ | — none found | Medium — Google Business listing gives 1011 S 6th St W, Missoula, MT, phone (406) 303-0127, Handyman primary category plus "In-Home Service" (on-site) category, and links the business's own website; the site itself could not be fetched during this run, so details rest on the business's own Google listing | Google Business listing |
| 406 Maintenance and Remodeling | (406) 493-8322 | Handyman | Missoula | https://406maintenanceandremodeling.com/ | — none published (own site offers a quote-request form only, no readable address) | Medium — own site lists phone (406) 493-8322 and Missoula base, and confirms maintenance/small-repair work at customers' homes (drywall, painting, patching holes, property-management turnovers) alongside remodeling; Google lists Handyman among its categories (address 2211 S 12th St W, Missoula) | Business's own website + Google Business listing |
| Rex Handyman Services LLC | (406) 285-1181 | Handyman | Missoula | — none found | — none found | Medium — Google Business listing gives 1406 Jackson St, Missoula, MT, phone (406) 285-1181 and Handyman as its primary category; no own website could be found, so verification rests on the business's own Google listing | Google Business listing |
| AAA Maintenance Co | (406) 541-9583 | Handyman | Missoula | — none found | — none found | Medium — Google Business listing gives Building M, 2935 Stockyard Rd, Missoula, MT, phone (406) 541-9583, weekday hours, and Handyman as its primary category; no own website could be found, so verification rests on the business's own Google listing | Google Business listing |

## Dedupe
- Every name and phone in this batch was checked against the live directory (297 businesses via the Supabase REST CLI) on 2026-10-17 — no name or phone matches.
- Grepped every name and phone against all files in ~/workspace/van-squad/prospecting/ on 2026-10-17 — no matches. No prior Montana prospecting files exist. No dedupe skips in this cell.

## Excluded (checked, did not pass the gates)
- Zootown Services LLC (Google listing: 5801 Skyview Dr, Missoula; (406) 239-9584) — EXCLUDED: the website on its own Google listing, zootownseo.com, is an SEO/web-design business (ZooTown SEO) showing a different phone, (406) 480-6676 — no handyman service could be verified from the business's own materials.
- Handyman Service Pros Missoula Montana (handymanserviceprosmissoula.com; 406-303-4360) — EXCLUDED: templated multi-city lead-generation-style site (generic copy, anonymous testimonials, no street address, no named local operator), so no local operator could be verified; its published email was therefore not collected as a lead.
- Pavitt Construction LLC (Google listing: 820 1/2 Montana Ave, Missoula; (907) 209-6987) — EXCLUDED: its only web presence is a Google business.site page and its published phone is an out-of-state (907, Alaska) number, so a local Missoula operator could not be verified from its own materials.
- Thorough Construction (Google listing: 315 W Sussex Ave, Missoula; (406) 240-5664) — EXCLUDED for this thin batch: Google listing only, presents as a construction company, and no own website or materials could be found to confirm handyman/small-job service at customers' homes.
- The Man That Can LLC (PO Box 1071, Missoula; (406) 274-7098 via Porch) — EXCLUDED for this thin batch: no own website or Google Business listing found; the only phone source is a lead platform (Porch), which also flags its license status as inactive.
- Trade specialists appearing in the same searches (406 Heating & Cooling, Hellgate Plumbing Heating and Cooling, Edison Electric) — not general handymen, not candidates for this category.

## ZIP note
- Cell ZIP is 59801; qualifying Missoula handymen were found without needing a full expansion.
- One qualifying business, Inside Out Handyman, publishes its base address in adjacent Missoula ZIP 59802 (1480 Renaissance Dr, Missoula, MT 59802 on its own site) and states it serves all of Missoula — so 59802 appears only in its service_zips, next to the cell ZIP 59801.
- No source stated a base ZIP for the other four businesses, so no ZIP was invented for them; their service_zips carry 59801 only.
- Full set of ZIPs in this batch's service_zips: 59801, 59802.

## Email leads
- 0 published emails collected. None of the five included businesses publishes a readable email address on its own website or Google listing (two use contact/quote forms only). The matching -leads.json is an empty array.
