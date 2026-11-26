# Day 45 — RI / Providence / ZIP 02903 / House cleaning

- Cell: State=RI, City=Providence, ZIP=02903, Category="House cleaning" (exact label)
- Date: 2026-11-26
- Expansion note: No adjacent-ZIP expansion was needed to reach 3 — 4 businesses qualified. Kendall Cleaning Service is addressed in 02903 itself; Sun Pristine Maids is based in adjacent Providence ZIP 02904 and Tavares in Providence, both confirming Providence house cleaning on their own sites; Avangelina's is Cranston-based and explicitly lists Providence in its own service areas. All clean at customers' homes in Providence, so 02903 is in every service_zips. No business stated a ZIP list, so no extra ZIPs were added (never invented).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Sun Pristine Maids | (401) 208-2045 | House cleaning | Providence | https://sunpristinemaids.com/ | hello@sunpristinemaids.com — https://sunpristinemaids.com/ | High — own site: "Family-Owned House Cleaning in Providence… serving homes… across Rhode Island", standard/deep/recurring cleaning at customer's home; phone and email printed on own site; address 555 N Main St #1030, Providence, RI 02904 | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Kendall Cleaning Service | (508) 718-7792 | House cleaning | Providence | http://kendallcleaningservice.com/ | None published on own site checked | High — own site: "Residential Cleaning Services… regularly scheduled service… help catching up on your home maintenance" for RI clients; own site prints address 10 Dorrance Street, Providence, RI 02903-2018 (in target ZIP) and "Call: (508) 718-7792" | Business's own website | Grep of prospecting folder for name and phone: no match |
| Tavares Cleaning Services | (401) 461-4495 | House cleaning | Providence | https://www.tavarescleaning.com/ | sales@tavarescleaning.com — https://www.tavarescleaning.com/ | High — own site: "Residential Cleaning — One-time and recurring cleaning services designed around your home", family-owned, service area lists Providence; phone and email printed on own site header/footer; Google listing address 1093 Elmwood Ave, Providence | Business's own website + Google listing for address | Grep of prospecting folder for name and phone: no match |
| Avangelina's Cleaning Services | (401) 545-4786 | House cleaning | Providence | https://avangelinascleaningservices.com/ | avangelinascleaning@gmail.com — https://avangelinascleaningservices.com/ | High — own site: family-owned residential cleaning, FAQ "What areas do you serve? We serve Cranston, Providence, Warwick…" and team cleans at customer's home; phone (401) 545-4786 and email printed on own site; based 744 Park Ave, Cranston | Business's own website | Grep of prospecting folder for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| MaidPro Providence | (401) 723-4400 / https://www.maidpro.com/providence | National franchise system (MaidPro), not an independent local operator |
| Legacy Cleaning Services | (401) 351-2822 / http://www.legacycleaning.com/ | Own website returned an error page when fetched, so residential house cleaning could not be confirmed from its own materials; Google description frames it as janitorial/restoration |
| Mint Maintenance | (401) 264-8424 listing / http://www.mintmaintenance.co/ | Own site is a Boston-based multi-city booking platform ("Boston's Leading Cleaning Service", tap-to-call 857-340-5945, cleaners must maintain rating to stay on team) — phone conflicts with Providence listing, no local Providence operator confirmed |
| Ruby's Cleaning and Painting | (401) 226-9034 / https://www.rubyscleaningandpainting.com/ | Own site address is 984 Charles St, North Providence, RI 02904 — not Providence; held out on city |
| GDS Cleaning Solutions Inc | (401) 474-6922 / http://www.gdscleaning.com/ | Own/listing description: full-service janitorial company, monthly janitorial contracts — no residential house cleaning confirmed |
| Bio-One of Providence | (401) 569-0169 / https://www.biooneprovidence.com/ | Biohazard/crime-scene cleanup franchise, not house cleaning |
| Jasmine's Cleaning Service / JB Cleaning Services / Unique Cleaning / Alisha B's Cleaning Services | various Providence listings | No verifiable own website confirming residential house cleaning from their own materials — listing-only |

## Leads summary

3 published emails collected (see matching -leads.json): Sun Pristine Maids — hello@sunpristinemaids.com (own website); Tavares Cleaning Services — sales@tavarescleaning.com (own website); Avangelina's Cleaning Services — avangelinascleaning@gmail.com (own website). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 4
- Listings: 4 (one per business, title "House cleaning in Providence")
- Email leads: 3
- Excluded / skipped: 7 entries above; no dedupe skips (no name/phone matches in prospecting folder)

## Coordinator notes (2026-11-26)
- Avangelina's Cleaning Services was researched in both this cell and the Cranston 02910 cell; it is Cranston-based (744 Park Ave, Cranston), so it was kept only in the Cranston cell and removed from this cell's inserts before posting. Cell inserted count: 3.
