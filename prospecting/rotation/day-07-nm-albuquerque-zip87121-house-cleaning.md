# Rotation Day 7 — New Mexico: Albuquerque × House cleaning × ZIP 87121

- Researched: 2026-10-18
- Cell: New Mexico × Albuquerque × ZIP 87121 × "House cleaning"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Google place data). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 4 qualifying businesses.
- ZIP / service-area note: ZIP 87121 is southwest Albuquerque (Westgate / Atrisco / west mesa). All 4 businesses in this batch are based at residential addresses INSIDE 87121 and are home-based operators who clean at customers' homes (no storefronts). None of the 4 publishes a ZIP-code service list, so every business carries service_zips = ["87121"] only. NO ZIP expansion was needed — the cell yielded 4 qualifiers, above the 3-business floor. No other ZIP was invented for any business.
- Sibling-cell note: Albuquerque 87110 × House cleaning is being researched in parallel. No business in this batch is based in or centered on 87110; the one NE-side operator that surfaced repeatedly (Two Maids of Albuquerque, 2920 Stanford Dr NE = 87110) was left OUT of this batch for the sibling cell (see Excluded).

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Martha's House Cleaning | (505) 450-4105 | House cleaning | Albuquerque | https://sites.google.com/view/marthas-cleaning/faq | None published that could be read (her own site invites customers to "call or email" but no email address itself is readable on the public pages — NOT guessed) | High — her own website (Google Sites) was read directly: a small family business where the owner cleans customers' homes herself, with residential house-cleaning tasks listed and pet-friendly service; based at 1616 Brian Ave SW, Albuquerque 87121 per her Google listing, which also publishes the phone; on-site service at the customer's home confirmed from her own materials | Business's own website (FAQ page) + Google place listing |
| Miel Maid Services | (505) 304-3221 | House cleaning | Albuquerque | None found | None published on any source found | Medium — Google place listing: "Maid Services" (residential maid = house cleaning) at 723 Noah Ave SW, Albuquerque 87121, a residential address in the Westgate area — home-based operator, phone published on the listing; no own website could be found to corroborate further, so Medium | Google place listing |
| Diva Cleaning Services | (505) 836-3680 | House cleaning | Albuquerque | None found | None published on any source found | Medium — Google place listing: cleaning service based at 1204 Valley View Dr SW, Albuquerque 87121, a residential address (no storefront), phone published on the listing; no own website could be found, so Medium. NOTE: a different business, "Diva's Care Cleaning Service LLC" (divascarecleaning.com), appears in web results — it is NOT this Albuquerque listing and was not conflated with it | Google place listing |
| Too Good Cleaning | (505) 659-2631 | House cleaning | Albuquerque | None found | None published on any source found | Medium — Google place listing: cleaning service based at 9422 Jenny Ct SW, Albuquerque 87121, a residential address (no storefront), phone published on the listing; no own website could be found, so Medium | Google place listing |

## Dedupe
- Live directory check (public REST endpoint, businesses name + phone): the live directory currently returns 436 businesses, ZERO of them with a (505) phone — no New Mexico rows exist yet. None of this batch's 4 names (Martha's House Cleaning, Miel Maid Services, Diva Cleaning Services, Too Good Cleaning) and none of the 4 phones — (505) 450-4105, (505) 304-3221, (505) 836-3680, (505) 659-2631 — appears in the live directory. NO matches for this batch.
- Grep of every candidate name and phone against all files in ~/workspace/van-squad/prospecting/: no hits for any of the 4 businesses or their phones in any prior batch.
- The coordinator re-checks dedupe centrally at insert time (including against the parallel Albuquerque 87110 batch).

## Excluded (checked, did not pass the gates)
- Pristine Clean LLC, (505) 414-8555 — EXCLUDED for this cell: based at 1616 Las Glorietas SW, which is in the South Valley (ZIP 87105 per Census geography — Isleta Blvd / La Vega area, east of the river), not 87121. Only a Facebook page + Google listing. Since 87121 yielded 4 qualifiers, no adjacent-ZIP expansion was taken; candidate for a future 87105 cell.
- The Q Maids, (505) 514-2689, theqmaids.com — EXCLUDED for this cell: based downtown at 609 Gold Ave SW (87102); its own website could not be read through available tools, so 87121 could not be confirmed in its own stated service area — not claimed for this cell.
- The Cleaning Authority, (505) 273-2875 — EXCLUDED: NE-based franchise (2815 Broadbent Pkwy NE); its own materials list service ZIPs 87107 / 87109 / 87110 / 87111 / 87114 / 87120 / 87122 — 87121 is NOT among them.
- Two Maids of Albuquerque, (505) 477-4457 — EXCLUDED from this cell: based at 2920 Stanford Dr NE = ZIP 87110, the sibling cell being researched in parallel.
- Merry Maids, 9401 Menaul Blvd NE; Molly Maid of Greater Albuquerque, (505) 407-0704; The Maids (Albuquerque + Uptown locations, NE); Sandia Green Clean, (505) 404-3071, 4001 Ellison St NE; Maid O' Matic, (505) 379-3154, 2901 Juan Tabo Blvd NE (87112); Mini Maid of Albuquerque, 5715 Edith Blvd NE (87107); D'Aaron's Housekeeping Co, 3306 Shepard Pl NE; E&G Quality Cleaning Service LLC, 3321 Candelaria Rd NE — EXCLUDED from this cell: all based on Albuquerque's NE side / in other ZIPs, none based in or primarily serving 87121; several are national franchises' local pages.
- Rodriquez Cleaning, 7523 Corte Dorada NW; Rosys Cleaning Abq, 5509 57th Pl NW — EXCLUDED: based in NW Albuquerque, not 87121.
- Six J's Power Wash LLC, (505) 322-4870 — EXCLUDED: pressure washing, not house cleaning.
- SANIFLOORS, (505) 322-1722 — EXCLUDED: floor cleaning only.
- Sunshine Window Cleaning, (505) 273-8033; Acro Clean Window and Screen — EXCLUDED: window/screen cleaning only.
- Power Plus Carpet Cleaning, (505) 507-4001; Pristine Klean, (505) 261-4435 (9705 Bay Mare Ave SW) — EXCLUDED: carpet cleaning only.
- Absolut Floor Care, (505) 804-0721 — EXCLUDED: floor care only, and listed as temporarily closed.
- Ecotex Healthcare Laundry Services — EXCLUDED: commercial laundry, not house cleaning.
- Steamatic; Chem-Dry — EXCLUDED: restoration / carpet-cleaning franchises, not house cleaning.
- Outlaw Shine Mobile Detailing — EXCLUDED: auto detailing, not house cleaning.
- Walmart House Cleaning (Belen) — EXCLUDED: big-box marketplace listing in Belen, not an Albuquerque local operator.
- Homeaglow; Handy — EXCLUDED: national lead-gen / marketplace aggregators with no local operator (excluded by rule).
- Diva's Care Cleaning Service LLC (divascarecleaning.com) — EXCLUDED: a different business from the Albuquerque "Diva Cleaning Services" listing in this batch; no Albuquerque presence could be verified for it. Not conflated.

## Email leads
- 0 published emails found. None of the 4 businesses in this batch publishes a readable business email on its own website or Google listing (Martha's House Cleaning invites email contact on her own site but no address itself is readable on the public pages — never guessed). The matching -leads.json is therefore an empty array. No email was written into any business profile.
