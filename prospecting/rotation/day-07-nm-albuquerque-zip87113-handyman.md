# Rotation Day 7 — New Mexico: Albuquerque × Handyman × ZIP 87113

- Researched: 2026-10-18 (Day 7)
- Cell: New Mexico × Albuquerque × ZIP 87113 (North Albuquerque / North Valley–Alameda) × Handyman — researched fully
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Los Buffalos Handyman and Yard Services | (505) 385-3123 | Handyman | Albuquerque | none live — its Google profile links its own Google-hosted business.site page, a platform Google retired (the URL now returns 404), so no live website could be recorded | none | Medium — based IN the cell ZIP at 8401 Pan American West Fwy NE, Albuquerque, NM 87113 (a residential frontage address with no storefront; the Coronado Village community at the same address confirms 87113); its Google Business Profile lists Handyman as the primary category with phone (505) 385-3123 and posted Mon–Thu hours, and handyman/yard work is by nature performed at customers' properties; because its own website no longer resolves, the entry rests on its Google Business Profile — the same basis on which My Handy Neighbor was included in the 87112 cell | Google Business Profile |
| Home Maintenance Solutions | (505) 295-9195 | Handyman | Albuquerque | none live — its Google profile links its own Google-hosted business.site page ("a division of Shields"), which returns 404 since Google retired the platform, so no live website could be recorded | none | Medium — EXPANSION-ZIP business (see ZIP note): based at 6621 San Luis Obispo Ave NE in adjacent ZIP 87109, roughly 2 miles south of the cell; its Google Business Profile lists Handyman as the primary category plus an "In-Home Service" category, phone (505) 295-9195, and its own profile description lists "Handyman / Repair / Residential" work | Google Business Profile |

## Dedupe
- Both names and both phones were checked against the live directory (472 active businesses via the public Supabase REST endpoint) on 2026-10-18 — no name or phone matches for either business.
- Grepped both names and both phones against all files in ~/workspace/van-squad/prospecting/ on 2026-10-18 — no matches.
- The only live-directory match in this cell's candidate pool was The ABQ Handyman (see below) — already captured, not re-listed.

## Already captured — genuinely based in 87113, NOT re-listed
- The ABQ Handyman ((505) 289-1102) — its own website's footer prints "The ABQ Handyman, Albuquerque, NM 87113" and its Google address is 1028 Diamondback Dr NE (North Valley coordinates), so it IS genuinely based in this cell's ZIP — but it was already captured in the sibling 87112 cell and is already live in the directory (confirmed in the REST check above). It is therefore NOT listed again here. **Recommendation to the coordinator: add "87113" to The ABQ Handyman's service_zips**, since 87113 is its genuine base ZIP; its current record carries only 87112.

## Excluded (checked, did not pass the gates)
- ATown ProHandyman LLC (Google listing: 6624 San Luis Obispo Ave NE, 87109; (505) 288-9032) — EXCLUDED: Google profile only; no own website or other materials found to confirm its work — the same gate the 87112 cell applied to listing-only businesses. Revisit if it publishes its own materials.
- MB Handyman (6440 Edith Blvd NE; (505) 219-1630) — EXCLUDED: only an aggregator profile (installers.org) exists; no own website or materials. Already excluded on the same basis in the 87112 cell; the ZIP of its Edith Blvd address could not be verified either.
- MetroCo (7204 Deer Canyon Ave NE Ste A, 87113, per Porch; phone shown as 505-514-5489) — EXCLUDED: appears only on Porch lead-gen pages, which show CONFLICTING phone numbers for it across pages (505-514-5489 / 505-720-1696 / 505-930-1811) and categorize it as a remodeling contractor; no own website or Google profile found — a local handyman operator could not be verified.
- C&R Commercial and Residential Services (Google listing: 10600 Signal Ave NE; (937) 259-1620) — EXCLUDED: single listing with an out-of-state phone and no own website; already excluded in the 87112 cell.
- Mr Fix It Handyman Services (Google listing: 604 Willow Rd NE; (505) 730-7109) — EXCLUDED: Google listing only, no own website; already excluded in the 87112 cell; its North Valley address also sits south of this cell.
- N-Hance Wood Refinishing of Albuquerque (8023 Edith Blvd NE, 87113) — EXCLUDED: its address is inside the cell ZIP, but it is a wood-refinishing showroom specialist, not a general mobile handyman.
- Sinnergy Operating Solutions (5577 Wyoming Blvd NE, 87111; (505) 448-2601) — EXCLUDED: primarily computer/phone repair from an office suite; already excluded in the 87112 cell; also based in 87111, outside this cell.
- 3 Guys Handyman (3107 Eubank Blvd NE, 87111) and Handy Higgins (3810 Espejo St NE, 87111) — EXCLUDED from this cell: based in 87111; 3 Guys is additionally a referral platform per the 87112 cell's check of its own contact page.
- Not Just Handymen (notjusthandymen.com) — EXCLUDED: despite Albuquerque-targeted search presence, the business is actually in Brooklyn, NY.
- The Handiest Man, Ace Handyman Services Albuquerque North, Mr. Handyman of North Albuquerque, My Handy Neighbor — already captured in the 87112 cell; none is based in 87113.
- Marketplace/aggregator platforms appearing in the same searches (Angi/HomeAdvisor, Thumbtack, Porch, Handy.com) — EXCLUDED by design: lead-gen platforms, not businesses.

## ZIP note
- ZIP EXPANSION USED: ZIP 87113 itself produced exactly ONE new qualifying business (Los Buffalos Handyman and Yard Services). The one other operator genuinely based in 87113, The ABQ Handyman, was already captured in the 87112 cell. With fewer than 3 qualifying, the cell was expanded to ONE adjacent Albuquerque ZIP — **87109** (immediately south of 87113) — which added Home Maintenance Solutions.
- ATown ProHandyman LLC (also 87109) did not pass the own-materials gate, so the cell closes with **2 new businesses — an honest shortfall**; the gates were not bent to reach 3.
- Neither business published a list of service-area ZIP codes, so no ZIP was invented for them; both service_zips carry the cell ZIP 87113 only (the same convention as the 87112 cell). Home Maintenance Solutions' 87109 base is documented in its table row above.

## Leads note
- Neither business publishes a business email anywhere public that could be found: their Google-hosted websites are retired (404) and their Google profiles list no email. The leads file is therefore an empty array — no email was guessed or inferred.
