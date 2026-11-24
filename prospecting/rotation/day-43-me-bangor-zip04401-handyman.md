# Day 43 — ME / Bangor / ZIP 04401 / Handyman

- Cell: State=ME, City=Bangor, ZIP=04401, Category=Handyman (exact label)
- Date: 2026-11-24
- Expansion note: No expansion to adjacent ZIP 04402 was needed — 3 qualifying businesses were found in 04401 itself.
- Service-ZIP notes: service_zips = ["04401"] for every included business. No business stated additional service-area ZIPs on its own materials (towns were named, ZIPs were not), so no extra ZIPs were added. North Star names Bangor, Brewer, Orono, Old Town, Hampden and Hermon (plus other valleys) by town only; 207 Property Maintenance names Bangor, Brewer, Hermon, Glenburn, Levant, Carmel, Old Town and Orono by town only; Hammer-All gives its own address as 413 Hammond St #7, Bangor, ME 04401.
- Phone note (207 Property Maintenance and More): its own website footer shows (207) 956-0247, which is used here per the own-site-first rule; its Google listing shows a different number, (207) 949-2839 — discrepancy noted, confidence lowered to Medium.
- Email note (207 Property Maintenance and More): its own website shows an email link behind Cloudflare email-protection (rendered only as "[email protected]"); the actual address could not be read verbatim, so no email was recorded and no lead was created — never guessed.

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| North Star Property Solutions LLC | (207) 745-5304 | Handyman | Bangor | https://nsps.services/ | None found | High — Own site, founded in Bangor, explicitly offers dependable handyman repairs (drywall, doors, windows, flooring, lighting, carpentry) at customers' homes, and phone matches its Google listing | Own website https://nsps.services/ ; Google listing (326 Forest Ave, Bangor, Handyman, phone +12077455304) | Grep of ~/workspace/van-squad/prospecting/ for name and phone found no match |
| 207 Property Maintenance and More | (207) 956-0247 | Handyman | Bangor | https://207pm.jobbersites.com/ | None recorded — email on own site is Cloudflare-obfuscated and could not be read verbatim (see header note) | Medium — Own site lists "Handyman Tasks" and "Home Repair" and names Bangor as its base area, but the phone on its own site differs from its Google listing phone | Own website https://207pm.jobbersites.com/ (footer phone (207) 956-0247; services list includes Handyman Tasks / Home Repair); Google listing (1185 Hammond St, Bangor, Handyman secondary category, phone +12079492839) | Grep of ~/workspace/van-squad/prospecting/ for name and both phones found no match |
| Hammer-All Home Improvement | (207) 745-7500 | Handyman | Bangor | https://www.hammer-all.com/ | None found | Medium — Business description on its listing (from the business) explicitly offers handyman services "from small projects" at homes and its own site confirms Bangor 04401 address and phone, but its site headline emphasizes general contracting / roofing / remodeling | Own website https://www.hammer-all.com/ (413 Hammond St #7, Bangor, ME 04401, (207) 745-7500); Google listing description stating handyman services and small projects | Grep of ~/workspace/van-squad/prospecting/ for name and phone found no match |

## Excluded

| Name | Reason |
|---|---|
| CR Home Improvements | Its website (crhomeimprovements.com) is C&R Home Improvement LLC of Monmouth County, NJ (remodeling, roofing, additions; NJ phone on site) — the Bangor listing does not match the business's own site, and the work is major remodeling, not handyman small jobs |
| One Stop Home Repair | Based in Orono (90 Stillwater Avenue, Orono, ME 04473), not Bangor — wrong city for this cell, despite a genuine handyman division serving Bangor; phone (207) 866-5690, email info@onestophomerepair.com published on its own site (not collected as a lead — business not included) |
| Penobscot Property Care, LLC | Based in Winterport (10 Hamor Lane), not Bangor — wrong city for this cell; phone (207) 944-1318 |
| Heath Enterprises | Based in Kenduskeag, not Bangor — wrong city; also surfaces mainly via HomeAdvisor lead-gen listings; phone (207) 745-4678 |
| The Maine Handyman / thehandymannetworkusa.com | Hermon address and a national handyman-network website — network/lead-gen pattern, not a verifiable Bangor local operator for this cell |
| Giffords Home Improvements | Hermon-based, no verifiable website found — wrong city for this cell |
| Mr. Handyman | National franchise; its Maine location serves the Greater Portland area, not Bangor — franchise chain with no Bangor local operator |
| General Mechanix, JMD Plumbing, Harley Plumbing & Heating Plus | Plumbing/heating specialists, not handyman services |
| Frank Webb Home - Bangor, Bath Fitter | Storefront showroom / national bath chain — storefront-only / chain, not a mobile handyman |
| LMC Home Remodeling | Hampden-based roofing/remodeling contractor — wrong city and major-construction focus |

## Leads summary

- Published emails collected: 0
- No included business published a readable email address on its own website or listing. 207 Property Maintenance and More shows only a Cloudflare-obfuscated email link, which was not decoded or guessed.
- Leads file is an empty array: day-43-me-bangor-zip04401-handyman-leads.json

## Counts

- Included: 3 (High: 1, Medium: 2)
- Excluded considered: 10 entries above
- Leads: 0
- Duplicates skipped: 0
- Files: day-43-me-bangor-zip04401-handyman.md, day-43-me-bangor-zip04401-handyman-inserts.json (3 businesses + 3 listings, JSON validated), day-43-me-bangor-zip04401-handyman-leads.json ([])
- No insert, no data.js edit, no git performed.
