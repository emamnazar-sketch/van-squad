# Rotation Day 7 — New Mexico: Rio Rancho × House cleaning × ZIP 87124

- Researched: 2026-10-18
- Cell: New Mexico × Rio Rancho × ZIP 87124 × "House cleaning"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Google place data). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 2 qualifying businesses.
- ZIP / expansion note: ZIP 87124 proper yielded only ONE qualifying business genuinely based in Rio Rancho (The Cleaning Code LLC). Per the cell rule, the cell was expanded ONCE, to the adjacent northern Rio Rancho ZIP 87144, which added Dependable Cleaning by Dani (based at 3621 Rancher Loop NE — Rancher Loop NE addresses are ZIP 87144 per Sandoval County property records). Even after expansion the cell totals 2 qualifiers, below the 3-business floor: Rio Rancho's house-cleaning market is overwhelmingly served by Albuquerque-based operators (see Excluded), and no further honest qualifiers could be verified in either ZIP. No ZIP was invented for any business: The Cleaning Code LLC carries service_zips = ["87124"] (its base street, Veja Baja Dr SE, is ZIP 87124 per property records) and Dependable Cleaning by Dani carries service_zips = ["87144"] (its base ZIP); neither publishes a ZIP-code service list.
- Sibling-cell note: Albuquerque house-cleaning cells (87110, 87121) were researched in parallel for Day 7. No business in this batch is Albuquerque-based, and no business captured in those cells is repeated here (see Dedupe and Excluded).

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| The Cleaning Code LLC | (505) 600-9570 | House cleaning | Rio Rancho | None found | None published on any source found | Medium — Google place listing: cleaning service based at 203 Veja Baja Dr SE, Rio Rancho (a residential address in the Corrales Heights subdivision, ZIP 87124 per property records; no storefront), phone published on the listing, hours Mon–Sat 6 AM–7 PM; home-based operator who cleans at customers' homes; no own website could be found to corroborate further, so Medium | Google place listing |
| Dependable Cleaning by Dani | (505) 259-7592 | House cleaning | Rio Rancho | None found | None published on any source found | Medium — Google place listing: cleaning service based at 3621 Rancher Loop NE, Rio Rancho (a residential address, ZIP 87144 per property records; no storefront), phone published on the listing, hours Mon–Sat 9 AM–5 PM; home-based operator who cleans at customers' homes; no own website could be found, so Medium. Included via the one-ZIP expansion to 87144 (see note above) | Google place listing |

## Dedupe
- Live directory check (public REST endpoint, businesses name + phone): the live directory currently returns 436 businesses. Neither batch name (The Cleaning Code LLC, Dependable Cleaning by Dani) and neither phone — (505) 600-9570, (505) 259-7592 — appears in the live directory. NO matches for this batch.
- Grep of every candidate name and phone against all files in ~/workspace/van-squad/prospecting/: no hits for either business or either phone in any prior batch, including the parallel Day 7 Albuquerque cells.
- The coordinator re-checks dedupe centrally at insert time.

## Excluded (checked, did not pass the gates)
- Clearly Clean Janitorial Services, (505) 431-5050, clearlycleanjs.com — EXCLUDED: genuinely Rio Rancho-based (4140 Jackie Rd SE, 87124) with its own website, but its own published service list is commercial-only (day/night janitorial, commercial offices, medical facilities, government facilities, clean room/lab, pest control); a single generic sentence mentioning "homes" does not establish a house-cleaning service. Category mismatch. (Its published email info@ccjs.us was NOT taken as a lead because the business itself is excluded.)
- 505 Clean Queens, (505) 657-5880, 505cleanqueens.com — EXCLUDED from this cell: verified residential house cleaner with a Rio Rancho service page on its own site, but its own published address is 2225 Beryl Ct NW, Albuquerque, NM 87104 — Albuquerque-based, not genuinely based in Rio Rancho (sibling-cell rule).
- Jackelswell, LLC, (509) 254-3022 — EXCLUDED: the only public trace is a bare Google listing at 1505 33rd Cir SE, Rio Rancho, categorized only as a generic "Cleaning Service"; the listed phone carries an out-of-state (509) area code and no website, review, or second source anywhere confirms what it cleans or that it serves homes. Cannot verify = excluded.
- "Sharing", (505) 385-6132 — EXCLUDED: a Google listing at 2006 Virgin Wood Rd NE, Rio Rancho, under the single ambiguous word "Sharing"; no corroborating source identifies it as a house-cleaning business. Cannot verify = excluded.
- Purus Cleaning — EXCLUDED: appears only on HomeAdvisor/Angi lead-matching pages (serving the whole Albuquerque metro); no own website, no publicly published phone, and no verifiable Rio Rancho base could be found. Cannot verify = excluded.
- Rachel's Cleaning Services (Rio Rancho) — EXCLUDED: Thumbtack profile only; the platform publishes no phone number or website for the business, so the public-phone gate cannot be met.
- Homeaglow — EXCLUDED: national lead-gen / marketplace aggregator with no local operator (excluded by rule).
- Two Maids (Albuquerque/Rio Rancho service pages), (505) 477-4457 — EXCLUDED: based at 2920 Stanford Dr NE, Albuquerque; Rio Rancho is only a service area.
- Molly Maid of Greater Albuquerque / Molly Maid of Sandia and Rio Rancho; Maid Brigade of Albuquerque, (505) 266-1300, 1100 Alameda Blvd NW; MaidPro Albuquerque; The Maids of Albuquerque — EXCLUDED: Albuquerque-based franchises; Rio Rancho is only a service area for each.
- Sandia Green Clean, (505) 404-3071; green sweep, (505) 414-7887; The Maids of Albuquerque Uptown, (505) 296-3714; Merry Maids of Albuquerque, (505) 578-2106 — EXCLUDED from this cell: Albuquerque-based AND already captured in the Day 7 Albuquerque 87110 house-cleaning cell (dedupe).
- Adove Cleaning Services, LLC, (505) 391-4477 — EXCLUDED: Albuquerque-based (3001 2nd St NW / 3323 Gabaldon Pl NW, Albuquerque); Rio Rancho is only a service area.
- Celestials Cleaning, (505) 489-5407; Finely Finished Housekeeping, (505) 859-0157; Fresh Environments Cleaning Services, (505) 903-7153 — EXCLUDED: Albuquerque-based; Rio Rancho is only a service area.
- ServiceMaster Clean Team–Albuquerque; Zia Building Maintenance; JC Cleaning Services — EXCLUDED: commercial janitorial / carpet-focused Albuquerque operators, not Rio Rancho house cleaning.
- Bravo Carpet Care, (505) 292-7286, Rio Rancho; Rio Rancho Carpet & Upholstery Cleaning LLC, (505) 891-1188; Caring Carpet Care, (505) 585-2213 (Albuquerque) — EXCLUDED: carpet/upholstery cleaning only, not house cleaning.
- RKing Eco-Bin Cleaning — EXCLUDED: trash-bin cleaning, not house cleaning.
- Clarity Window Cleaning (Albuquerque) — EXCLUDED: window cleaning only.
- House Of Dry Cleaning, (505) 891-0277, Rio Rancho — EXCLUDED: dry cleaner, not house cleaning.
- CareBuilders at Home, (505) 814-1222, Rio Rancho — EXCLUDED: non-medical in-home senior care (light housekeeping is incidental to caregiving), not a house-cleaning business.
- Walmart Home Services (Rio Rancho stores) — EXCLUDED: big-box retail chain service desk, not a local house-cleaning operator.
- Dynamic Enterprises / Rainbow Cleaning System (Albuquerque) — EXCLUDED: vacuum-system distributor, not a cleaning service.

## Email leads
- 0 published emails found. Neither business in this batch publishes a business email on any public source found (both are Google-listing-only operators with no website). The matching -leads.json is therefore an empty array. No email was written into any business profile. (Clearly Clean Janitorial Services does publish info@ccjs.us on its own site, but the business was excluded on category grounds, so no lead was recorded for it.)
