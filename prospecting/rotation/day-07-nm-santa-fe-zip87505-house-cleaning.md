# Day 07 — Santa Fe, NM × ZIP 87505 × House cleaning

Researched 2026-10-18. Public information only; each business's own website checked first, then public listings (Google Business). Nothing inserted — files only, for central verification.

**Result: 3 qualifying businesses, 1 email lead, 14 exclusions.**

**ZIP expansion: YES — one adjacent ZIP (87507).** ZIP 87505 itself produced only one fully verified operator (CL Cleaning, LLC). The other two 87505-address candidates could not be verified from their own materials (see Exclusions: Pure Green Clean, Clean it Green), so the cell was expanded once to adjacent 87507 (southwest Santa Fe), adding Green Choice Cleaning and Merry Maids of Santa Fe. Both serve Santa Fe homeowners citywide from their own materials. Two strong 87501 operators (Ana Valenzuela Cleaning, We Do Windows Santa Fe) were verified but NOT included — 87501 would be a second expansion ZIP; they are documented in Exclusions as candidates for a future 87501 cell.

| # | Business | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | CL Cleaning, LLC | (505) 690-8690 | House cleaning | Santa Fe | https://6a19f0ea1ed32.site123.me/ | clcleaningsantafe@gmail.com (own site contact section) | **High** — own site: founded 2021 in Santa Fe by Phillip & Raquel Varela, "residential and commercial services throughout the Santa Fe area," residential interior cleaning for homes; phone + email + address (1526 Cerrillos Rd, 87505) all on its own site | Own website |
| 2 | Green Choice Cleaning | (505) 316-2679 | House cleaning | Santa Fe | http://www.greenchoicecleaningllc.com/ | none | **High** — own site: eco-friendly cleaning "in every home," testimonial for a house in Santa Fe, phone printed on its own site ("Contact Green Choice today 505-316-2679"); based 3900 Paseo del Sol (87507, expansion ZIP) | Own website |
| 3 | Merry Maids of Santa Fe | (505) 578-8213 | House cleaning | Santa Fe | https://merrymaids.com/home-cleaners-santa-fe-nm | none | **Medium** — independently owned local franchise (own location page: "Merry Maids of Santa Fe, 3220 Richards Lane, Suite B, Santa Fe, NM 87507"); own page confirms house cleaning for Santa Fe families. Phone taken from its own location page (printed twice); its Google listing shows a different number, (505) 636-3479 — own-site-first applied per precedent, discrepancy flagged for the coordinator | Own location page + Google listing |

## Email leads (1)

- CL Cleaning, LLC — clcleaningsantafe@gmail.com — published in the Contact section of its own website (https://6a19f0ea1ed32.site123.me/). Recorded only in the leads file, never in the business record.
- Green Choice Cleaning and Merry Maids of Santa Fe publish no business email on their own pages — no lead entries.

## Dedupe

- All 3 names and phones checked against the live directory via the public REST endpoint (489 businesses) and against every file in ~/workspace/van-squad/prospecting/ — no name or phone matches. Santa Fe is new territory for the directory except two sibling Day-07 cells (87501 Handyman, 87507 Mobile pet grooming), which contain no house cleaners.
- Watch-out handled: green sweep and Sandia Green Clean both market to Santa Fe but are the same Albuquerque businesses already in the directory (same phones) — excluded below, not re-listed.

## Exclusions (14)

1. **green sweep (Santa Fe)** — same company/operator as the Albuquerque "green sweep" already in the directory: its own Santa Fe page is a waitlist ("Eco-friendly house cleaning is coming to Santa Fe… opening this October… Join the waitlist"), lists the Albuquerque HQ address and the same phone (505) 414-7887 already in the directory. Not yet operating in Santa Fe and no distinct local operator. (A Google listing at 546 Harkle Rd shows a conflicting (505) 375-6220 that its own page does not use.)
2. **Sandia Green Clean** — already in the directory (Albuquerque HQ, (505) 404-3071); its own site lists Santa Fe in its service area, but it is the same business and phone — duplicate.
3. **Pure Green Clean** — 1012 Marquez Pl (87505), but the only published phone is a toll-free (866) 757-7501 and its own website could not be verified in this pass; a local operator and residential service cannot be confirmed from its own materials.
4. **Clean it Green** — 1807 2nd St (87505), phone (505) 220-0706 on its Google listing, but its own website could not be verified in this pass and no listing description confirms residential house cleaning (generic "Cleaning Service" category only). Possible later re-check.
5. **Ana Valenzuela Cleaning** — verified on its own site (residential house cleaning for Santa Fe homeowners, (505) 401-4032, email housecare@anavalenzuela.com published) but based in 87501 (332 Camino Del Monte Sol) — outside the single expansion ZIP (87507) used for this cell. Strong candidate for a future 87501 cell, lead included there.
6. **We Do Windows Santa Fe** — own site confirms professional home cleaning (deep, recurring, move-in/out) and phone (505) 577-4979, but based in 87501 (227 E Palace Ave) and primarily a window-cleaning brand — outside the single expansion ZIP used for this cell. Candidate for a future 87501 cell. (Its site email is behind an obfuscation script and could not be read — not guessed, no lead.)
7. **John's Steam Cleaning Service** — carpet/steam-cleaning specialist (own site + listings), not general house cleaning.
8. **Pro Bright Window Cleaning & Estate Services LLC** — window-cleaning specialist; no own website.
9. **Magic Cleaning Services** — its domain (magiccleaning.net) now resolves to an unrelated Toronto commercial-kitchen cleaning company; the Santa Fe residential business cannot be verified.
10. **Martinizing Dry Cleaning (Santa Fe)** — dry-cleaning storefront, not house cleaning.
11. **O&M Deepcleaning** — no own website; listing-only entry with no description confirming residential service from its own materials.
12. **American Green Cleaning** — no own website; listing-only entry, residential service not confirmable from its own materials.
13. **Sun Green Cleaner** — commercial/facility cleaning focus (gyms, offices); no verified Santa Fe residential operation or local phone.
14. **Homeaglow (Santa Fe)** — national lead-gen/call-center platform with no local operator; excluded per rules.

## Files

- day-07-nm-santa-fe-zip87505-house-cleaning.md (this report)
- day-07-nm-santa-fe-zip87505-house-cleaning-inserts.json — 3 businesses + 3 listings; key sets mirror the day-06 template field for field; fresh UUIDs; each listing's business_id matches a business in the same file; service_zips = target ZIP plus the business's own base ZIP for the two 87507 operators (neither publishes a ZIP list, so nothing further was added)
- day-07-nm-santa-fe-zip87505-house-cleaning-leads.json — 1 lead
