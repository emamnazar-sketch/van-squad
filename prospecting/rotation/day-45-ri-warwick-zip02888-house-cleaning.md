# Day 45 — RI / Warwick / ZIP 02888 / House cleaning

- Cell: State=RI, City=Warwick, ZIP=02888, Category="House cleaning" (exact label as instructed)
- Date: 2026-11-26
- Expansion note: Only 2 qualifying operators explicitly name Warwick on their own sites (Life Maid Simple — Warwick in its own SERVICE AREAS list; BrightNest — Warwick, RI in its own service-area list). The cell was expanded to an adjacent-ZIP operator as instructed: Fitts Cleaning Services LLC is based in West Warwick (36 Crompton Ave, West Warwick, RI 02893 — adjacent to 02888) and confirms residential cleaning throughout Rhode Island on its own site. No business stated a ZIP-code list, so service_zips = ["02888"] for all three — no ZIPs invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|---|
| Life Maid Simple | (401) 533-8074 | House cleaning | Warwick | https://www.lifemaidsimple.us/east-greenwich.html | — none readable on its own site (email shown only in protected/obscured form; never guessed) | High — own East Greenwich page: "Not a Franchise! We are a private woman-owned business", "I need my house cleaned… Give us a call at (401) 533-8074", "Have us come for a one-time cleaning, or schedule us to come every week…" (cleaners come to the customer's home), HOUSE CLEANING service listed, and its own SERVICE AREAS list includes "Warwick, RI" by name; Google listing (2843 S County Trl, East Greenwich) matches the phone | Business's own website + Google listing (matching phone) | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| BrightNest Cleaning Services | (774) 247-0364 | House cleaning | Warwick | https://www.brightnestteam.com/ | brightt.nestt@gmail.com — own site: https://www.brightnestteam.com/ | Medium — own site: premium home cleaning (deep / recurring / move-in-out), "We Show Up, On Time… Our team shows up… with everything they need" at the customer's home, brings all supplies, and its own service-area list and FAQ name "Warwick, RI" explicitly; phone (774) 247-0364 and email brightt.nestt@gmail.com printed repeatedly on its own site. Medium because its Google listing for the Warwick/East Greenwich location (940 Quaker Ln, Warwick) shows a different number, (774) 479-4589 — the own-site number was used per the own-site-first rule | Business's own website + Google listing (address; phone differs, noted) | Grep of prospecting files for name and both phones: no match |
| Fitts Cleaning Services LLC | (508) 202-3766 | House cleaning | Warwick | https://fittscleaningservices.com/ | fittscleaningservices@gmail.com — own site: https://fittscleaningservices.com/ | Medium — own site: "premier choice for both residential and commercial cleaning services… throughout Rhode Island", "We clean so you don't have to" (cleaning performed in customers' homes), and its Rhode Island & Massachusetts contact block prints fittscleaningservices@gmail.com and Phone: 5082023766; Google listing (36 Crompton Ave, West Warwick, RI) matches the phone. Medium because its own site claims statewide RI service without naming Warwick specifically — adjacent-ZIP expansion business (see note above) | Business's own website + Google listing (matching phone/address) | Grep of prospecting files for name and phone: no match |

## Dedupe skips (already collected in tonight's other RI cells — same name/phone = dupe, not reused)

| Name | Phone | Where already collected tonight |
|---|---|---|
| Avangelina's Cleaning Services | (401) 545-4786 | Day-45 Cranston 02910 and Providence 02903 house-cleaning cells — its own site lists Warwick, but it is already in tonight's files |
| Tavares Cleaning Services | (401) 461-4495 | Day-45 Cranston 02910 and Providence 02903 house-cleaning cells |
| Sun Pristine Maids | (401) 208-2045 | Day-45 Providence 02903 house-cleaning cell — its own site lists Warwick, but already collected tonight |
| América Braga Cleaning | (774) 248-4603 | Day-45 Cranston 02910 house-cleaning cell |
| Rhode Island Cleaning Service | (401) 402-0110 | Day-45 Cranston 02910 house-cleaning cell — its own site lists Warwick as a featured market, but already collected tonight |
| Ocean State Detail / Luxury Car Detailing / Randys Mobile Detailing | (401) 423-5311 / (401) 535-7501 / (401) 744-0297 | Day-45 Warwick 02886 mobile-auto-detailing cell — different category and no house cleaning; noted per instructions, no name/phone overlap with this cell's qualifiers |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Merry Maids (Warwick) | (401) 435-5150 listing / (401) 291-3797 own site / https://merrymaids.com/home-cleaners-east-providence-ri | National franchise system, not an independent local operator; phone also conflicts between listing and own site |
| The Cleaning Authority — Johnston | (401) 519-4287 / https://www.thecleaningauthority.com/cranston/areas-we-serve/warwick/housekeeping/ | National franchise system |
| The Maids (Warwick) | 1-800-843-6243 / https://www.maids.com/ri/warwick/ | National franchise; only a toll-free number published (task rule: no toll-free) |
| Homeglow Cleaning Services | (866) 563-3691 / https://homeglowcleaningservices.com/rhode-island/kent-county | Booking platform / lead-gen style multi-city template; only a toll-free number published |
| Homeaglow (Warwick) | https://www.homeaglow.com/us/ri/warwick/house-cleaning/ | Cleaner marketplace/platform, no local operator of its own |
| TotalCare Cleaning | https://www.totalcarecleaning.com/providence/ | Multi-city SEO template with future/planned framing ("will service"), no verifiable local Warwick operator or local phone confirmed (also excluded in tonight's Cranston cell) |
| Ever Clean Cleaning Services | https://www.evercleancleanersco.com/ | Own site confirms Warwick service and home cleaning and is owner-led, but no public phone number is published on its own site and none could be verified in public listings — excluded under the verifiable-phone gate (same outcome as tonight's Cranston cell) |
| Champion Cleaning Services | (401) 739-6565 / http://www.championservicesri.com/ | Own site is carpet cleaning only ("Best Carpet Cleaning Services in Rhode Island") — no house cleaning confirmed from its own materials, despite its Warwick address (25 Dewey Ave) |
| It's Time To Go Natural, LLC | https://www.itstimetogonatural.com/ | Sells natural cleaning PRODUCTS only — no cleaning service and no phone published on its own site |
| Mrs Clean | +1 (831) 435-6288 listing / https://mrsclean.godaddysites.com/ | Listing phone is an 831 (California) number inconsistent with a Warwick, RI operator and no RI phone could be verified on its own site |
| K Dansereau Cleaning / AMP Cleaning Services, LLC | (401) 480-9019 / (401) 965-8565, Warwick listings | Listing-only — no verifiable own website confirming residential house cleaning from their own materials |
| Bio-One of Providence | (401) 371-3150 / https://www.biooneprovidence.com/ | Biohazard/crime-scene cleanup franchise, not house cleaning |
| SERVPRO of East Greenwich / Warwick / Cranston | (401) 885-6200 | National franchise restoration chain; general cleaning is a sideline to restoration work |

## Leads summary

2 published emails collected (see matching -leads.json), both from the businesses' own websites: BrightNest Cleaning Services — brightt.nestt@gmail.com; Fitts Cleaning Services LLC — fittscleaningservices@gmail.com. Life Maid Simple publishes no readable email on its own site (protected form only — never guessed). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 3 (2 explicitly serving Warwick by name on their own sites; 1 adjacent-ZIP West Warwick expansion, noted above)
- Listings: 3 (one per business, title "House cleaning in Warwick")
- Email leads: 2
- Dedupe skips: 5 house-cleaning businesses already collected in tonight's other RI cells (plus 3 Warwick detailing businesses noted, different category)
- Excluded: 13 entries above
