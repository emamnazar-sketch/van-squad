# Day 23 — Mississippi, Tupelo, ZIP 38801 — House cleaning

Cell: MS | Tupelo | 38801 | House cleaning
Date researched: 2026-11-02
Expansion note: No expansion to 38804 was needed — 5 qualifying businesses were found in 38801 (≥3 threshold).

## Included businesses

| Name | Phone | Category | City | Website | Published email + source URL | Confidence + reason | Source URL (phone) | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Top to Bottom Cleaning Services | (662) 388-5100 | House cleaning | Tupelo | http://topcleaner.pro/ | None published on own site — none | High — Own site is titled for Tupelo house cleaning, describes residential/home cleaning in detail, and prints the phone on the page | http://topcleaner.pro/ | Not in dedupe-open.json (name or phone); not in any prospecting file. Address in listings: 1508 W Main St, Tupelo, MS 38801. |
| Two Maids of Tupelo | (662) 350-8339 | House cleaning | Tupelo | https://www.twomaidscleaning.com/tupelo-ms/ | None published for the Tupelo location on its page — none | High — Own Tupelo location page offers home cleaning, lists a Tupelo street address (144 S. Industrial Rd, Tupelo, MS 38801), and prints the local phone | https://www.twomaidscleaning.com/tupelo-ms/ | Phone not in dedupe-open.json or prospecting files. Plain name "Two Maids" already exists in the live DB for a different location (Meridian, ID, different phone), so the location-qualified name "Two Maids of Tupelo" is used, following the directory precedent (Two Maids of Jackson, Two Maids of Albuquerque, etc.). Locally operated Tupelo franchise location, not a national call center — it has its own Tupelo address and local 662 phone. Service-area towns are named on the page, but no service-area ZIPs are stated, so service_zips = ["38801"] only. |
| Kayla's Cleaning Services LLC | (662) 308-7637 | House cleaning | Tupelo | https://kaylascleaningservicellc.com/ | None published on own site — none | High — Own site offers Residential Cleaning in Tupelo, MS and its FAQ says "Call us at 662-308-7637" | https://kaylascleaningservicellc.com/ | Not in dedupe-open.json (name or phone); not in any prospecting file. Own site uses the singular "Kayla's Cleaning Service" in its title; the Google listing name "Kayla's Cleaning Services LLC" is used here. Serves "Tupelo, MS, and surrounding areas" — no ZIPs stated, so service_zips = ["38801"] only. |
| Alyssa's Cleaning Service | (662) 397-5405 | House cleaning | Tupelo | https://alyssas-cleaning-service.ueniweb.com/ | None published on own site — none | High — Own site describes a domestic cleaner in Tupelo for family homes/apartments and prints the phone on the page | https://alyssas-cleaning-service.ueniweb.com/ | Not in dedupe-open.json (name or phone); not in any prospecting file. No service-area ZIPs stated, so service_zips = ["38801"] only. |
| Mr. Janitor Inc. | (662) 844-7713 | House cleaning | Tupelo | http://mrjanitortupelo.com/ | None included — an old third-party journal snippet showed a Yahoo address, but it was not on the business's own website or Google listing, so it was not recorded | Medium — Own site says it provides "residential, commercial and industrial cleaning services in Tupelo, Mississippi," but the business is broader janitorial work and the phone comes from its Google listing, not the extracted home-page text | http://mrjanitortupelo.com/ (Google listing for Mr. Janitor Inc., 627 E President Ave, Tupelo, MS, phone +16628447713) | Not in dedupe-open.json (name or phone); not in any prospecting file. No service-area ZIPs stated, so service_zips = ["38801"] only. |

## EXCLUDED

| Business | Phone seen | Reason excluded |
|---|---|---|
| Supreme Clean | (662) 269-4432 | Own site (supremecleanms.com) is a carpet / floor specialist — carpet cleaning, tile & grout, hardwood, upholstery, pressure washing — with no general house-cleaning service. Its published email supremekln.22@gmail.com was therefore not collected as a lead (excluded business). |
| Berry Janitorial Services | (662) 844-8892 | Own site describes commercial cleaning only (office, medical, window/carpet for businesses) — no residential house cleaning. |
| Mims Janitorial Services | (662) 633-3600 | Janitorial / carpet company in listings; no residential house cleaning confirmed from its own materials. |
| Spectacular Shine Cleaning Service | (662) 321-3012 | Website (spactacularshinecleaning.com) could not be fetched (DNS/connection failure) and the only listing text is "Appointments only" — residential house cleaning could not be confirmed from the business's own materials. |
| Clean Scene | (662) 300-4940 | Listing only, no own website found; residential house cleaning not confirmed from the business's own materials. |
| Cleanin' It Up | (662) 321-3124 | Listing only, no own website/materials found confirming house cleaning at customers' homes. |
| Tidy Cleanup Services | (662) 255-3675 | Listing only, no own website/materials found confirming house cleaning at customers' homes. |
| Cassiberry's Cleaning Service | (662) 321-2785 | Listing marked "Possibly Temporarily Closed"; no own materials confirming current house-cleaning service. |
| Clean Impressions | (662) 401-6017 | BBB profile only; address is an apartment in ZIP 38804, BBB service area shown as Itawamba County only, and no own materials confirming house cleaning in 38801. |
| Mighty Maids | +1 (425) 226-1614 in aggregator data | Data conflates a Washington-state company (mightymaidswa.com, Kent/Renton WA service area); the only phone found is an out-of-state 425 number, with no verifiable Mississippi-phone Tupelo operator. Fails the Mississippi area-code rule. |
| Merry Maids | — | No Tupelo location exists; nearest Mississippi locations are Olive Branch and Ridgeland — no local Tupelo operator for 38801. |
| ServiceMaster Commercial Cleaning Services Tupelo | (662) 339-8580 | Commercial cleaning franchise; its residential offer is floor cleaning only, not house cleaning. |
| American Air Clean | +1 (321) 609-5806 | Sole phone is out-of-state (321, not a Mississippi area code); also carpet/chimney specialty, not house cleaning. |
| Homeaglow / Thumbtack / HomeAdvisor listings | — | Lead-gen / matching platforms, not a local operator business itself. |
| Jt Window Cleaning; Rug Cleaning Plant of North Mississippi; Tupelo Chemical and Pressure; A-1 Chemical & Janitorial Products | various 662 | Window-only, rug-plant/storefront, chemical/pressure, and janitorial-supply businesses respectively — not house cleaning at customers' homes. |

## Leads

No included business publishes a business email on its own website/contact page or Google listing, so the leads file is an empty array `[]`.

## Verification

- All 5 included phones are Mississippi 662 numbers (not toll-free, not out-of-state).
- All 5 names and phones were checked against `dedupe-open.json` (1,941 names / 1,942 phones) and against every file in `~/workspace/van-squad/prospecting/` — no matches, except the plain-name "Two Maids" franchise collision handled above by using "Two Maids of Tupelo."
- No database insertion, no js/data.js edit, and no git action were performed by this researcher.
