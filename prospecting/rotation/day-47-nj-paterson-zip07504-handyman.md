# Day 47 — NJ, Paterson, ZIP 07504, Handyman

Cell: State=NJ, City=Paterson, ZIP=07504, Category="Handyman" (exact label)
Date researched: 2026-11-28

**ZIP expansion note:** ZIP 07504 itself yielded only 1 qualifying business with its own materials confirming at-home service (DRight.FIT, 627 E 27th St, Paterson). The cell was therefore expanded to adjacent Paterson-area operators whose own websites explicitly confirm service to Paterson or to Passaic County (Paterson is the Passaic County seat) — Tri-State Odd Jobs and Handyman Improvements LLC are based in nearby Clifton, and Home Pros Handyman LLC states service across New Jersey — to reach 4 qualifying businesses, per the batch rules. All other Paterson-address handyman listings found were listing-only with no own website/materials (see Excluded).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| DRight.FIT | (973) 931-9312 | Handyman | Paterson | http://dright.fit/ | — none found | Medium — own site's Home section lists HVAC, water systems, landscaping and repairs at homes (plus mobile wash), and its public listing gives the Paterson address 627 E 27th St with Handyman as primary category; phone comes from that public listing rather than the fetched site text | Own website (dright.fit) + public listing | Grep of ~/workspace/van-squad/prospecting/ and day47-dedupe-baseline.json for name and phone: no match |
| Tri-State Odd Jobs | (862) 281-8729 | Handyman | Paterson | https://www.tristateoddjobs.com/contact/ | — none found | High — own site is a Clifton-based handyman whose service pages repeatedly state "Serving Clifton, Wayne, Passaic, Paterson, Totowa, Little Falls, Nutley…" for work at customers' properties, and its contact page shows the same phone | Own website (tristateoddjobs.com, contact + service pages) | Grep of prospecting/ and baseline for name and phone: no match. Expansion operator — own site explicitly names Paterson in its core service area |
| Handyman Improvements LLC | (973) 634-1736 | Handyman | Paterson | http://www.handymanimprovementsllc.com/ | — none found | Medium — own site says it is a licensed/insured handyman company in Clifton, NJ servicing parts of Bergen, Passaic, Essex & Morris counties (Paterson is in Passaic County) and shows the same phone; public listing gives Clifton address 18 Lockwood Dr | Own website (handymanimprovementsllc.com) + public listing | Grep of prospecting/ and baseline for name and phone: no match. Expansion operator — Paterson not named on the site, only its county |
| Home Pros Handyman LLC | (862) 248-4837 | Handyman | Paterson | https://callhomeproshandyman.com/ | richardbarnish3@gmail.com — https://callhomeproshandyman.com/ (footer "Email Richard" contact) | Medium — own site is an owner-operated NJ handyman (Richard) offering home repairs, drywall, painting and tile in customers' homes, states it serves customers across New Jersey, and shows the same phone and email; Paterson is not named specifically, only statewide service | Own website (callhomeproshandyman.com) | Grep of prospecting/ and baseline for name, phone, and email: no match. Expansion operator — statewide NJ service stated, no Paterson-specific page |

## Excluded

- AP Handy ((551) 556-8256, aphandy.com) — DUPLICATE SKIP: already included in tonight's Day 47 Jersey City ZIP 07306 Handyman cell (same name and phone in day-47-nj-jersey-city-zip07306-handyman files), even though it also markets service in the Clifton/Paterson area.
- Alta Gama Multiservices LLC ((862) 352-7654, 190 Carroll St, Paterson), Joker Handyman ((347) 257-0949, 120 Danforth Ave, Paterson), Industrial Handyman Installation ((862) 438-1603, 251 Pacific St, Paterson), Bathroom Backsplash ((917) 724-5311, 7 Garfield Ave, Paterson), Quinteros Qandyman LLC ((973) 931-8521, Haledon) — excluded: found only as public listings with no own website/materials confirming on-site home service in this run; insufficient verification under the own-materials gate.
- Csz construction ((973) 715-3414, 399 McLean Blvd, Paterson) — excluded: only a HomeAdvisor profile (lead-gen platform page listed as its "website"), no own website/materials; primary identity is a construction company.
- Handyman Moving LLC ((201) 283-4742, 384 15th Ave, Paterson) — excluded: primary category is a transportation/moving service, not handyman work at homes.
- Slavo Home Services / Slavo Handyman ((201) 647-7711, slavohandyman.com, Elmwood Park) — excluded for this cell: own site limits its stated area to "Bergen County and surrounding areas" with no explicit Paterson or Passaic County service confirmation.
- Unique Multiservices ((551) 444-2556, uniquemultiservice.square.site, Clifton) — excluded: its Square site is a sparse appointments page with no handyman services or service-area confirmation in its own materials.
- Mr. Handyman Tri-County ((973) 323-2543, Wayne) — excluded: national franchise.
- Bridgepoint Maintenance ((855) 910-9090) — excluded: national US/Canada commercial property-maintenance dispatch/coordinator, not a local residential handyman operator.

## Leads summary

- Home Pros Handyman LLC — richardbarnish3@gmail.com — source: https://callhomeproshandyman.com/
- DRight.FIT, Tri-State Odd Jobs, and Handyman Improvements LLC publish no email on the sources found.

## Counts

- Qualifying businesses found: 4
- Businesses in inserts.json: 4
- Listings in inserts.json: 4
- Email leads in leads.json: 1
- Duplicates skipped: 1 (AP Handy — already in tonight's Jersey City 07306 Handyman cell)
- Exact-ZIP (07504) businesses: 1; adjacent-area expansion businesses serving Paterson: 3
