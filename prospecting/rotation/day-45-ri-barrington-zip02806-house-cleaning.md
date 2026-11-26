# Day 45 — RI / Barrington / ZIP 02806 / House cleaning

- Cell: State=RI, City=Barrington, ZIP=02806, Category="House cleaning" (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-26
- Expansion note: Barrington has only one ZIP (02806) and a thin local supply. Only 1 qualifying business is based in 02806 itself (Ocean State Cleaning, 44 Wood Ave Ste 2, Barrington, RI 02806 per its Google listing). The other 2 are nearby Rhode Island operators whose own websites confirm residential house cleaning across Rhode Island (Silky Pro Maids — "proudly serve all of Rhode Island" per its Google description and "across Rhode Island" on its own site, Johnston-based; Heavenly Homes By Nevaeh — "Serving homes in Rhode Island" on its own site). This is the adjacent-area expansion, noted as instructed. No business stated a ZIP-code list, so service_zips = ["02806"] for all three — no ZIPs invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Ocean State Cleaning | (401) 329-3279 | House cleaning | Barrington | https://oceanstatecleaning.co/ | — none published in readable form on its own site | High — own site: "Reliable and Professional House and Commercial Cleaning Services", "making homes and offices shine for over a decade", phone 4013293279 printed on own site; Google listing gives 44 Wood Ave Ste 2, Barrington, RI 02806 and matches phone/website; cleaners clean customers' homes | Business's own website + Google listing | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match. Distinct from Ocean State Cleaning Services (Saunderstown, (401) 205-8834, oceanstatecleaningservices.com) — different name, phone and site; not used here to avoid near-name confusion |
| Silky Pro Maids | (401) 830-0129 | House cleaning | Barrington | https://silkypromaids.com/ | — none readable on its own site ("Email us" link only; address not readable — never guessed) | Medium — own site: "Locally owned in Rhode Island", Residential cleaning ("Regular visits… keep your home warm, welcoming"), Deep cleaning and Move In/Move Out "across Rhode Island", phone +14018300129 printed on own site; Google listing (59 Putnam Pike, Johnston, RI) matches phone and says it proudly serves all of Rhode Island. Medium because Barrington is not named specifically — expansion business (see note) | Business's own website + Google listing | Grep of prospecting files for name and phone: no match |
| Heavenly Homes By Nevaeh | (401) 450-7118 | House cleaning | Barrington | https://sites.google.com/view/heavenlyhomesbynevaeh/home | heavenlyhomesbynevaeh@gmail.com — own site: https://sites.google.com/view/heavenlyhomesbynevaeh/home | Medium — own site (Google Sites): "Reliable, detailed, and affordable home cleaning service in Rhode Island", "Serving homes in Rhode Island", standard/deep cleaning in customers' homes, phone 401-450-7118 and email printed on own site. Medium because Barrington is not named specifically and the site is a small Google Sites page — expansion business (see note) | Business's own website | Grep of prospecting files for name, phone and email: no match |

## Dedupe skips (same name or phone already in prospecting — skipped, not reused)

| Name | Phone | Where already collected |
|---|---|---|
| Maid For You | (401) 246-0003 | Exact name "Maid For You" already used in Day-42 NH Manchester house-cleaning cell (different business, (603) 574-4878) — same-name rule = skip. Also noted: the Barrington business is based at 17 Anthony Rd, Barrington, RI 02806 with a Google Sites own page (sites.google.com/view/wearemaid4you) confirming full-service home cleaning, but its listed domain maid-for-you.com now resolves to a UK (Doncaster) cleaning site, so that website was not usable either |
| Sun Pristine Maids | (401) 208-2045 | Day-45 Providence 02903 house-cleaning cell — its own site lists Barrington among towns served, but already collected tonight |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Houra House Cleaning | (401) 213-5488, 47 Wood Ave, Barrington, RI 02806 | Google listing only (Cleaning Service / In-Home Service, "eco-conscious" description) plus an uploaded rates PDF on Cylex — no verifiable own website confirming residential house cleaning from its own materials |
| Atlantic Home Services | (401) 405-6798, Barrington | Exterior only on its own description: window cleaning, soft washing, roof/pressure washing, gutter cleaning — not house cleaning |
| All-Pro's No-Pressure Roof Cleaning Service | (401) 831-5300 / allproroofclean.com | Roof/siding/driveway exterior cleaning only — not house cleaning |
| Barrington Cleaning Service | 770-344-8702 / barringtoncleaningservice.com | Phone is a 770 (Georgia) number inconsistent with a Barrington, RI local operator; no local RI operator confirmed |
| System4 IPS (Barrington) | (401) 615-7043 / system4ips.com | Commercial janitorial / facility management only — no residential house cleaning |
| The Maids (Rhode Island) | 1-800-843-6243 / maids.com | National franchise; only a toll-free number published (task rule: no toll-free) |
| Homeaglow (Barrington) | homeaglow.com | Cleaner marketplace/platform, no local operator of its own |
| Choice 1 Cleaning | (401) 921-1516 / choice1cleaning.com | Family-owned RI maid service per HomeAdvisor, but its own website returned 403 and could not be fetched, so Barrington/statewide residential service could not be confirmed from its own materials in this run |
| Ever Clean Cleaning Services | evercleancleanersco.com | No public phone verified on its own site or listings checked — excluded under the verifiable-phone gate (same outcome as tonight's Cranston/Warwick cells) |
| Ocean State Cleaning Services | (401) 205-8834 / oceanstatecleaningservices.com | Qualifies on statewide RI house cleaning from its own site, but held out to avoid near-name confusion with Ocean State Cleaning (different business) in the same cell; its published email is shown only in obscured form on its own privacy page — never guessed |

## Leads summary

1 published email collected (see matching -leads.json), from the business's own website: Heavenly Homes By Nevaeh — heavenlyhomesbynevaeh@gmail.com. Ocean State Cleaning and Silky Pro Maids publish no readable email on their own sites. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 3 (1 based in 02806; 2 nearby statewide-RI operators — expansion noted above)
- Listings: 3 (one per business, title "House cleaning in Barrington")
- Email leads: 1
- Dedupe skips: 2 (Maid For You — same name; Sun Pristine Maids — already collected tonight)
- Excluded: 10 entries above
