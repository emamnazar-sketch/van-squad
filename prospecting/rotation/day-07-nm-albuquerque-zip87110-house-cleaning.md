# Day 7 — New Mexico — Albuquerque — ZIP 87110 — House cleaning

Researched 2026-10-18. Cell target: Albuquerque, NM × 87110 × "House cleaning".
Yield: **6 qualifying businesses** (≥3, so no ZIP expansion was needed). All six confirmed
mobile/on-site (they clean in the customer's home) from their own materials, each with a
public phone published on its own website or its own location page.

| Name | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| D'Aaron's Housekeeping Co | (505) 514-8826 | House cleaning | Albuquerque | https://daaronshousekeeping.com/ | AtWinn2@gmail.com (https://daaronshousekeeping.com/) | High — family-owned since 2000, based in 87110 (3306 Shepard Pl NE); phone + email printed in its own site's contact block | Own website |
| Sandia Green Clean | (505) 404-3071 | House cleaning | Albuquerque | https://sandiagreenclean.com/ | hello@sandiagreenclean.com (https://sandiagreenclean.com/) | High — founded in Albuquerque 2017, HQ in the Northeast Heights; own site states it cleans every Albuquerque neighborhood and prints phone + email in the footer | Own website |
| Natures Cleaning Services LLC | (505) 267-6730 | House cleaning | Albuquerque | https://naturescleaningllc.com/ | none published on its homepage | High — locally owned; own site has a residential house-cleaning section and prints its phone; serves the whole Albuquerque metro | Own website |
| green sweep | (505) 414-7887 | House cleaning | Albuquerque | https://greensweepnm.com/ | none recorded — the address on its site is behind an obfuscation script, so it was not read or guessed | High — locally/woman-owned since 2008; own site prints the phone and lists Albuquerque in its service areas | Own website |
| The Maids of Albuquerque Uptown | (505) 296-3714 | House cleaning | Albuquerque | https://www.maids.com/349/ | none | Medium — franchise, but the location's own page gives its office inside 87110 (2301 San Pedro Dr NE Ste C) and its local phone | Own location page (maids.com/349) |
| Merry Maids of Albuquerque | (505) 578-2106 | House cleaning | Albuquerque | https://merrymaids.com/home-cleaners-albuquerque-nm | none | Medium — franchise, but the location's own page documents a family-owned local office since 1982 (9401 Menaul Blvd NE) serving the whole metro, and prints this phone; the Google listing shows a different number, (505) 622-3733 — own-site-first, page number used | Own location page (merrymaids.com) |

Service ZIPs: only 87110 recorded for each business. None of the six publishes a ZIP-code
list (they name cities/neighborhoods), so no service-area ZIPs were added — nothing invented.

## Dedupe

- Live directory (Supabase REST, 436 rows): no name or phone matches for any of the six.
- All files in ~/workspace/van-squad/prospecting/: no phone matches for any of the six.
  Other states' files mention *other* Merry Maids franchise locations (Tempe AZ, Beaverton OR,
  Boise ID) — different locations and phones; the Albuquerque location itself appears nowhere.
- No prior New Mexico cells exist (Day 7 opens the state).

## Exclusions (26)

- **Dana's Housekeeping** — Google's Albuquerque listing ((505) 275-8888, 1701 San Pedro Dr NE) points to
  danashousekeeping.com, which is a Southern California housekeeping *referral agency* (Inland Empire,
  Orange County, San Diego offices). No Albuquerque operator and no 505 number on its own site — local
  presence unverifiable from its own materials.
- **Reyna's House Cleaning** — two Google listings publish conflicting phones, (505) 907-9179 and
  (505) 967-6179, and its website could not be fetched to resolve which is correct.
- **Molly Maid of Greater Albuquerque** — franchise corporate domain could not be opened for
  verification, so the local operator and phone could not be confirmed from its own materials.
- **The Q Maids** (theqmaids.com) — site could not be fetched; the only page that surfaced was a
  coupons page; services and phone unverifiable from its own materials.
- **Anna's European Cleaning Service** — own website could not be fetched in this pass; listing-only
  evidence ((505) 881-7424), no own-materials confirmation.
- **Ann's Cleaning Service** — own website could not be fetched in this pass; listing-only evidence
  ((505) 296-1156).
- **Superstar Cleaning** — own website could not be fetched in this pass; its listing also shows
  carpet cleaning, so the house-cleaning scope is unconfirmed.
- **Xtreme Clean LLC** — carpet-cleaning specialist (its own site's title is "Carpet Cleaning
  Albuquerque NM"), not house cleaning. Its own site and Google also show different phones.
- **SaniCare** — carpet, rug, upholstery, tile and stone cleaning only, not house cleaning.
- **Power Clean Carpet Cleaning** — carpet cleaning, not house cleaning.
- **Cano Carpet Cleaning LLC** — carpet cleaning, not house cleaning.
- **Aquakleen** — carpet cleaning; no website to verify anything further.
- **Legacy Rayne** — website is a "Coming Soon" parked page; services unverifiable.
- **Christy's Maid 4D Movies** — website is a film-specials company; a house-cleaning operation
  cannot be verified from its own materials.
- **Quality Solutions Cleaning Service** — commercial janitorial only, per its own description.
- **FacilityCARE** — commercial facility cleaning, not residential house cleaning.
- **KD Cleaning LLC** — window-cleaning specialist per its own listing description.
- **Sandia Softwash LLC** — pressure washing.
- **Paige power washer services LLC** — pressure washing.
- **Run To Clean LLC** — listed as temporarily closed (also carpet cleaning).
- **Yoly's Housecleaner** — no website or own materials; listing phone only, mobile service
  unconfirmable.
- **Karens Keepers Inc** — no website found; cannot confirm from own materials.
- **The Cleaner Choice** — no website found; cannot confirm from own materials.
- **The Cleaning Professionals** — no website found; cannot confirm from own materials.
- **Honesty Cleaning** — no website found; cannot confirm from own materials.
- **Time To Clean** — no website found; cannot confirm from own materials.

## Notes for the coordinator

- Three fetch failures were upstream tool errors (Reyna's site, Anna's, Ann's, Superstar, Q Maids),
  not evidence the sites are down — those four businesses are excluded only because the
  own-materials gate could not be satisfied in this pass and may be worth a re-check in a later cell.
- Merry Maids' phone discrepancy (own page (505) 578-2106 vs Google (505) 622-3733) is documented
  above; own-site-first was applied, matching prior-run precedent.
