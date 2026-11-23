# Day 42 — NH, Laconia, ZIP 03246, Handyman

Cell: State=NH | City=Laconia | ZIP=03246 | Category=Handyman (exact label verified in js/data.js, line 2109)
Date: 2026-11-23
Expansion note: 3 businesses qualified in 03246, so no expansion to adjacent Gilford ZIP 03249 was needed.
Service ZIPs: no business below published a service-area ZIP list on its own materials (towns named only), so service_zips = ["03246"] for all.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Tom's Handyman Service | (603) 273-7834 | Handyman | Laconia | http://www.tomshandymanservice.com/ | None published | High — own site: owner-operated, based in Laconia, painting/roofing/repairs/turnovers at customers' homes across Laconia & the Lakes Region, phone on own site | Own website http://www.tomshandymanservice.com/ (fetched 2026-11-23); Google listing (222 Hilliard Rd, Laconia) corroborates name/phone | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Dukettes Handyman Company | (603) 916-9519 | Handyman | Laconia | https://dukettes-handyman-company.ueniweb.com/ | None published | Medium — own site: "Situated in Laconia", handyman services (repairs, renovations, drywall, painting) at customers' properties, phone on own site; Google listing shows a different number (603) 333-4201, so the own-site number was used per prefer-own-site rule | Own website https://dukettes-handyman-company.ueniweb.com/ (fetched 2026-11-23); Google listing (45 Bay St, Laconia) | Not in day42 dedupe names/phones (neither number); no match in prospecting/ grep; phone discrepancy noted |
| 360 Property Solutions, LLC | (603) 726-0885 | Handyman | Laconia |  | None published | Medium — Google listing at 69 Valley St, Laconia with primary category Handyman and the business's own description ("dependable, no-nonsense handyman service... minor fixes to major renovations"), phone on its Google listing; listed website returned 404 so no website was recorded as verifiable | Google Business listing (69 Valley St, Laconia; phone (603) 726-0885) | Not in day42 dedupe names/phones; no match in prospecting/ grep |

## Excluded

| Business | Reason |
|---|---|
| White Birch Home Services — (603) 520-4985, whitebirchhomeservices.com | Own site states it is based in Meredith, NH; it serves Laconia within the Lakes Region but is not a Laconia business — out of cell. Its published email Kevin@whitebirchhomeservices.com was therefore not collected as a lead for this cell. |
| Max Effort Handyman — (603) 455-2652, Gilford (03249) | Gilford-based Google listing only, no own website found; expansion to 03249 was not needed because 3 businesses qualified in 03246 — out of cell for this batch. |
| HomeAdvisor / Thumbtack / Angi Laconia handyman results | Lead-gen matching platforms with no local operator of their own — excluded. |

## Leads summary

- Leads collected: 0
- No qualifying business publishes an email (Tom's and Dukettes use phone/message forms only; 360 Property Solutions publishes none on its listing). No email was guessed.
- White Birch Home Services publishes an email, but it was excluded from this cell (Meredith-based), so its address was NOT collected as a lead.

## Counts

- Found / qualifying: 3
- Excluded: 3 entries (listed above)
- Leads: 0
