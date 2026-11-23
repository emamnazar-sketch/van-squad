# Day 42 — NH, Concord, ZIP 03301, Handyman

Cell: State=NH | City=Concord | ZIP=03301 | Category=Handyman (exact label verified in js/data.js, line 2109)
Date: 2026-11-23
Expansion note: 4 businesses qualified in 03301, so no expansion to adjacent ZIP 03303 was needed.
Note: This is the Handyman cell for 03301 — separate from tonight's Concord 03301 House cleaning cell; no house-cleaning businesses are included.
Service ZIPs: no business below published a service-area ZIP list on its own materials (towns/state named only), so service_zips = ["03301"] for all.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Chippy's Handyman | (603) 592-1566 | Handyman | Concord | https://chippyshandyman.com/ | hello@chippyshandyman.com — https://chippyshandyman.com/services/ | High — own site: "Based right here in the Concord Area", handyman home repairs/installs at customers' homes, phone + email on own site | Own website https://chippyshandyman.com/ and https://chippyshandyman.com/services/ (fetched 2026-11-23) | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Visual Changes LLC | (603) 226-4607 | Handyman | Concord | https://visualchangesnh.com | None published | Medium — own site: Concord-based (5 Crosby St listing), "Interior/Exterior Home Repairs in Concord" — roof, window sash, deck and stair repairs at homes, phone on own site; larger home-improvement contractor, included for its published repair work | Own website https://visualchangesnh.com (fetched 2026-11-23); Google listing (5 Crosby St, Concord) | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Kon's Cutting | (603) 333-5505 | Handyman | Concord |  | None published | Medium — business's own Google description: "Kon's Cutting is a Handyman in Concord, NH 03301", primary category Handyman, phone on its Google listing and corroborated by Manta; no own website found, so no phone could be confirmed on a site of its own | Google Business listing (phone, Concord 03301 self-description); Manta Concord construction directory lists same phone | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Weste's Customz | (603) 568-4637 | Handyman | Concord |  | None published | Medium — Google listing at 71 Manchester St, Concord with primary category Handyman (furniture repair/upholstery secondary), phone on its Google listing; no own website found, so on-site work rests on the listing's own category/address | Google Business listing (71 Manchester St, Concord; phone (603) 568-4637) | Not in day42 dedupe names/phones; no match in prospecting/ grep |

## Excluded

| Business | Reason |
|---|---|
| Property Mend LLC — (800) 494-1356, propertymendllc.com | Only phone is toll-free (800) — toll-free numbers excluded by cell rules; its own description also centers on Greater Boston and Florida service. |
| Iron Oak Handyman Service — (774) 216-2153, ironoak-handyman.com | Boston-based operator (own homepage: "Why Boston Homeowners Trust Iron Oak", Massachusetts 774 number) with a templated Concord landing page — not a Concord local operator. Its published email was therefore not collected as a lead for this cell. |
| T-Build Handyman Services LLC — (603) 219-4572, tjtalbot84.wixsite.com/tbuildhandyman | Own site states it is based in Northwood, NH (03261); it serves Concord within a 30-mile radius but is not a Concord business — out of cell. Its published email TBuildHandyman@gmail.com was therefore not collected as a lead for this cell. |
| Fire Safe Home Services and Remodeling — (603) 370-2451 | Google/Instagram listing only; categories are home improvement / kitchen & bath remodeling — handyman service not confirmed from the business's own materials, and no own website found. |
| Jon The Builder — (603) 698-7106 | Google listing only, described as serving "Southern NH" with no Concord base or own website confirming Concord service. |
| Luk & Sons — (603) 435-8074 | Chichester, NH based handyman listing; not a Concord business and no own website confirming Concord service. |
| The Cat's Meow Home Improvement And Repairs | Thumbtack pro profile only; no verifiable public phone or own website found. |
| HomeAdvisor / Thumbtack / Angi Concord handyman results | Lead-gen matching platforms with no local operator of their own — excluded. |
| Rocky's Ace Hardware / Lowe's ProServices (Concord) | Storefront retail hardware stores, not handyman services. |

## Leads summary

- Leads collected: 1
- Chippy's Handyman — hello@chippyshandyman.com — source: https://chippyshandyman.com/services/
- Iron Oak Handyman Service and T-Build Handyman Services publish emails, but both were excluded from this cell (Boston-based / Northwood-based), so their addresses were NOT collected as leads.
- All other qualifying businesses publish no email (form/phone/listing only). No email was guessed; Iron Oak's site email is obfuscated in fetched text and was not recorded.

## Counts

- Found / qualifying: 4
- Excluded: 9 entries (listed above)
- Leads: 1
