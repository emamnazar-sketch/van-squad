# Day 43 — ME / Westbrook / ZIP 04092 / House cleaning

- Cell: State=ME, City=Westbrook, ZIP=04092, Category="House cleaning" (exact label verified in js/data.js)
- Date: 2026-11-24
- Expansion note: Only 2 businesses qualified in 04092 (Westbrook), fewer than 3, so the cell expanded to adjacent ZIP 04038 (Gorham) as instructed (04038 chosen over 04102 Portland, whose qualifying locals were already covered in the Day-43 Portland cells). Gorham businesses keep their own city (Gorham) and service_zips ["04038"].
- Service-ZIP note: service_zips = the business's own ZIP only — ["04092"] for the Westbrook businesses, ["04038"] for the Gorham expansion businesses. No business itself stated additional service-area ZIP codes in the materials checked (they stated towns/counties, not ZIPs), so no extra ZIPs were added — never invented.
- Dedupe instruction honoured: Maine Cleaning Solutions LLC is Westbrook-based but was already inserted tonight in the Portland 04101 cell — skipped here (see Excluded).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Clean Craft Services | (207) 752-2481 | House cleaning | Westbrook | https://cleancraft.services/ | None published on own site checked | High — own site: "Clean Craft Services is based in Westbrook, Maine", "recurring home cleaning, a one-time deep clean", "inviting someone into your home"; own homepage gives Westbrook, Maine 04092 and phone (207) 752-2481 | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match. Note: a different "Clean Craft Services" in CitySquares with phone (207) 358-9777 was NOT used — phone used is the one on the business's own site |
| Best Cleaners LLC | (207) 437-5659 | House cleaning | Westbrook | https://www.besthomeofficecleanersinmaine.com/ | support@besthomeofficecleanersinmaine.com — own site: https://www.besthomeofficecleanersinmaine.com/ | High — own site: "keeping your home and office spaces sparkling clean", "From weekly house cleaning to specialized one-time deep cleanings"; own footer gives (207) 437-5659 and 100 Larrabee Road-113, Suite 150, Westbrook, Maine 04092 (own page also shows 207-450-8893 for a free estimate; footer/Google-consistent number used) | Business's own website | Grep for exact name and phone: no match (grep hits for the words "best cleaners" were unrelated MaidThis entries in Florida files, different businesses/phones) |
| Maide For You | (207) 653-1837 | House cleaning | Gorham | http://www.maideforyou.com/ | None published on own site checked | Medium — own site: "Let us provide a clean house to come home to!", services list includes "✓ Residential", "Southern Maine Cleaning Provider for a Safe, Healthy and Welcoming Home"; phone (207) 653-1837 only on its Google listing (220 Narragansett St, Gorham, ME 04038), not in own-site text fetched | Business's own website + Google listing for phone | Grep for name and phone: no match |
| Kateryna's Cleaning Solutions LLC | (207) 603-6367 | House cleaning | Gorham | https://pluscleaningsolutions.com/ | None counted — own site has an "Email for an immediate quote" link but no address was published in the text fetched, so nothing was guessed/recorded | Medium — own site: "House Cleaning Services - Gorham, Maine", "Locally owned & based in Gorham", "Standard Residential Cleaning (one-time, weekly, biweekly, monthly)" for houses/apartments; phone (207) 603-6367 from its Google listing (179 Gray Rd, Gorham). Medium because its own site displays the number with a 205 area code (205-603-6367), apparently a typo — the 207 number from its own Google listing was used and the discrepancy is recorded here, not hidden | Business's own website + Google listing for phone | Grep for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Maine Cleaning Solutions LLC | (207) 329-1626 / https://mainecleaningsolutions.com/ | DEDUPE SKIP per instruction — Westbrook-based (49 Teri Cir, Westbrook, ME 04092) and residential on its own site, but already inserted tonight in the Day-43 Portland 04101 house-cleaning cell; same name and phone = skip |
| Southern Maine Cleaning | (207) 591-6757 / https://www.southernmainecleaningme.com/ | Commercial-only on its own site: "Southern Maine's Most Trusted Commercial Cleaning Company", "Professional janitorial, carpet, and floor cleaning services for offices and commercial buildings" — no residential house cleaning |
| Consistency Cleaning LLC | (207) 487-1057 / http://www.consistencycleaningllc.com/ | Commercial-only on its own site: "Commercial cleaning in Southern Maine", offices/restaurants/shared commercial spaces — no residential house cleaning. Portland 04102, considered in expansion screening |
| Holistic Cleaners, LLC | (207) 615-8512 / https://holisticcleaners207.com/ | Residential house cleaning NOT confirmed from its own materials — own site fetched carried only the tagline "Purify Your Space Naturally" and a contact form, with secondary listing categories Dry Cleaner / Janitorial Service; excluded under the own-materials rule |
| Personal Touch Cleaning Co. | (207) 331-0328 (listing only) | Bare listing only — the website named in its listing description (personaltouchcleaningco.com) could not be fetched/verified, so residential service could not be confirmed from the business's own materials; excluded |
| FKL Cleaning Services; Dani's Sweeping Beauties; Magic Cleaning D &N; The Final Touch; Towwer Cleaning & Services; Cleaning Genies; Joecana Enterprises | various listing phones | No verifiable own website/materials found — bare directory/Google listings only, which do not qualify under this cell's rules |
| Bouchard Cleaning & Restoration DKI | (207) 536-7220 (Westbrook office) | Restoration / specialty cleaning (floor care, duct, biohazard, post-construction) from its own site — general residential house cleaning not its confirmed service |
| A-Vent-Full Dryer Vent Cleaning Company | (207) 272-9075 | Dryer-vent cleaning only — not house cleaning |
| CleanME Exteriors / Crystal Clear Solutions | — | Exterior pressure washing only (already covered in the Day-43 Westbrook pressure-washing cell) — no house cleaning confirmed |
| Merry Maids of Maine; The Cleaning Authority - Greater Portland | (207) 501-2256; (207) 518-7759 | National franchise systems — excluded as national franchise/lead systems |
| Hello Cleaners; CleanSpace | — | Lead-gen / marketplace platforms connecting independent cleaners, no single local operator — excluded |

## Leads summary

1 published email collected (see matching -leads.json): Best Cleaners LLC — support@besthomeofficecleanersinmaine.com, published on its own website https://www.besthomeofficecleanersinmaine.com/. Clean Craft Services, Maide For You, and Kateryna's Cleaning Solutions LLC publish no email on the sources checked — no lead, nothing guessed. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 4 (Westbrook 04092: 2; Gorham 04038 expansion: 2)
- Listings: 4 (one per business)
- Email leads: 1
- Excluded / skipped: 11 entries above (including 1 dedupe skip)
