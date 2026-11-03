# Day 24 — Michigan × Detroit × ZIP 48226 × House cleaning

- **Cell:** Michigan | Detroit | 48226 | House cleaning (exact category label verified in js/data.js)
- **Date:** 2026-11-03
- **Expansion:** None needed — 8 qualifying businesses serve 48226 / downtown Detroit. No adjacent-ZIP expansion used.
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `dedupe-open.txt` (1,988 lines) and (b) `grep -r` across all files in `~/workspace/van-squad/prospecting/`. No matches for any included business. Note: the snapshot contains unrelated "Karen's Green Maids" (Chicago, (773) 538-3031) and "Seattle Green Maids" ((206) 736-4650) — different businesses, different phones, not Green Maids of Detroit.
- **Service ZIPs:** All businesses get `service_zips = ["48226"]` only. None of them publishes a ZIP list on its own site — they publish city/county names only (Wayne County, Detroit, Metro Detroit, Downtown Detroit), so no ZIPs were added or invented.
- **Mobile/on-site:** House cleaning is performed in the customer's home for every business below, confirmed from the business's own website/materials.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Green Maids of Detroit | (313) 636-1233 | House cleaning | Detroit | https://www.greenmaidsofdetroit.com/ | None published on own site found | High — own site is "Your Detroit Home Cleaning Expert" with Residential Cleaning in Detroit; Google listing gives Detroit address (1420 Washington Blvd) and local 313 phone | https://www.greenmaidsofdetroit.com/ (Google listing for phone) |
| Dust Til' Dawn Cleaning | (313) 784-0550 | House cleaning | Detroit | https://dusttildawnmi.com/ | dusttildawn313@gmail.com — https://dusttildawnmi.com/ | High — own site: routine/deep/move-out house cleaning in homes across Wayne, Oakland and Macomb counties (Detroit is in Wayne County); phone and email on own site | https://dusttildawnmi.com/ |
| Metro Detroit Maids | (313) 307-3327 | House cleaning | Detroit | https://metrodetroitmaids.com/ | info@metrodetroitmaids.com — https://metrodetroitmaids.com/ | High — own site: house cleaning in Wayne, Oakland & Macomb County, cleaners come to the home; phone and email on own site | https://metrodetroitmaids.com/ |
| Deep Clean Kings | (313) 728-5432 | House cleaning | Detroit | https://deepcleankings.biz/ | info@deepcleankings.biz — https://deepcleankings.biz/ | High — own site: "Detroit's Premier Cleaning Service," residential cleaning tiers for homes in Detroit & Metro; phone and email on own site | https://deepcleankings.biz/ |
| MAID Detroit | (313) 889-8171 | House cleaning | Detroit | https://www.maiddetroit.com/ | None published on own site found | High — own site: Residential Services (one-time/biweekly home cleans, move-in/out) across the Detroit metro, "Detroit Grown"; phone in own-site footer | https://www.maiddetroit.com/ |
| BH Cleaning Service Metro Detroit | (248) 487-6646 | House cleaning | Detroit | https://bhcleaningservicesmetrodetroit.com/ | info@bhcleaningservicesmetrodetroit.com — https://bhcleaningservicesmetrodetroit.com/faq/ | High — own FAQ: homes across Metro Detroit / Wayne County within ~35 miles, "We come to you," residential standard/deep/recurring cleans; phone and email on own site | https://bhcleaningservicesmetrodetroit.com/faq/ |
| ProMaids Co | (586) 747-4578 | House cleaning | Detroit | https://promaidsco.com/ | None published on own site found | High — own site explicitly lists Detroit among its 49 served communities, with routine residential house cleaning; phone on own site | https://promaidsco.com/ |
| FreshSpace Cleaning Detroit | (313) 351-8501 | House cleaning | Detroit | https://freshspacecleaning.com/detroit | None published on own Detroit page found | Medium — multi-city company, but its own Detroit location page lists a Detroit address, a local 313 phone, home cleaning in Detroit homes, and Downtown Detroit in its service area | https://freshspacecleaning.com/detroit |

## Email leads

Published emails are leads only — never written to a business profile. 4 leads in the matching `-leads.json`:

| Business | Email | Source URL |
|---|---|---|
| Dust Til' Dawn Cleaning | dusttildawn313@gmail.com | https://dusttildawnmi.com/ |
| Metro Detroit Maids | info@metrodetroitmaids.com | https://metrodetroitmaids.com/ |
| Deep Clean Kings | info@deepcleankings.biz | https://deepcleankings.biz/ |
| BH Cleaning Service Metro Detroit | info@bhcleaningservicesmetrodetroit.com | https://bhcleaningservicesmetrodetroit.com/faq/ |

Note: ThreeBestRated lists a FreshSpace Detroit email (detroit@freshspacecleaning.com), but it was not found on the business's own site or Google listing, so it was NOT collected.

## Excluded

| Candidate | Reason |
|---|---|
| Homeaglow (Detroit) | National lead-gen / marketplace platform with no local operator — excluded per rules |
| Jones Cleaning Services / Jones Cleaning Group | Own site (cleanitgood.com) now presents only commercial facility, events, construction and restaurant cleaning — no residential house cleaning confirmed from its own materials |
| Pearls Cleaning | Listed website pearlscleaning.com is a parked domain for sale — no verifiable business website or house-cleaning service |
| Detroit Cleaning Pro | Own site is commercial cleaning & facility management only — no residential house cleaning |
| Blueface Cleaning Systems | Only published phone is toll-free (844) 423-7374 — toll-free-only excluded; also janitorial-focused |
| Eco-Clean Power Washing Solutions LLC | Exterior power washing, not house cleaning; primary published phone is toll-free |
| Top Hood Cleaners | Commercial kitchen hood cleaning, not house cleaning |
| Eastside Cleaning Group / SNK General Maintenance / Quality Solutions Services | Janitorial / commercial / general maintenance — no residential house cleaning confirmed from their own materials |
| Pure Michigan Cleaners | Own site confirms house cleaning and a 313 phone, but publishes no Detroit / Wayne County service area — service to 48226 not verified, so excluded from this cell rather than assumed |
| The Maids / Merry Maids / Molly Maid | No Detroit local operator with its own local phone verified for 48226 — only national / other-city locations and national numbers found |
| Detroit House Cleaning Services (detroithousecleaningservices.site) | Generic-named site with a 586 phone and no verifiable local operator identity — not confirmed as a genuine local business |

## Files

- `day-24-mi-detroit-zip48226-house-cleaning.md` — this file
- `day-24-mi-detroit-zip48226-house-cleaning-inserts.json` — 8 businesses + 8 listings, validated with `python3 -m json.tool`
- `day-24-mi-detroit-zip48226-house-cleaning-leads.json` — 4 email leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this batch were edited.
