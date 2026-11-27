# Rotation Day 46 — Connecticut: Hartford × Handyman × ZIP 06106

- Researched: 2026-11-27 (nightly rotation, Day 46)
- Cell: CT | Hartford | 06106 | Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business via Meta places data, Houzz). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).

## Expansion note
No expansion was needed: 3 qualifying Hartford businesses were found for the 06106 cell (2 verified from their own websites, 1 from its Google listing). No adjacent-ZIP businesses were added; every included business is in Hartford and its service_zips carry only the target ZIP 06106, because none of them publishes its own list of service-area ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Work at its Best LLC | (959) 278-9432 | Handyman | Hartford | https://workatitsbestllc.com/ | workatitsbestllc@gmail.com — own website https://workatitsbestllc.com/ | High — own site gives its address as "Work At Its Best LLC, 141 Montrose St, Hartford, CT 06106", lists "General Home Repairs" among its services plus painting, gutter cleaning and other work performed at customers' homes, and prints both the phone (959) 278-9432 and the email on the site (the site also lists a second number, 860-796-4758, as its "Business Phone"); Google listing confirms primary category Handyman, the same Hartford address, and phone (959) 278-9432 | Business's own website + Google Business listing |
| Build-All, LLC | (860) 213-3884 | Handyman | Hartford | http://www.build-all.net/ | — none found | High — own site (title: "Construction Hartford \| Build-All \| 860-213-3884") says it provides "professional home repair and general construction in Hartford" to "Connecticut residences and businesses", offers a "free on-site estimate", describes a true professional "CT handyman", and states it is licensed and insured in Connecticut — on-site work at customers' homes is confirmed in its own words; Google listing gives 483 Broad St, Hartford with the same phone/website, and Houzz gives the address as Hartford, CT 06106 with the same phone and says it "has provided CT handyman services to over 100 Connecticut residences and businesses". Note: the own site's body also prints (860) 888-8097 for on-site estimates; the batch uses (860) 213-3884 because it appears in the own site's title and is corroborated by both the Google listing and Houzz | Business's own website + Google Business listing + Houzz |
| Hartford Flooring & Handy Manny | (860) 232-1111 | Handyman | Hartford |  | — none found | Medium — Google Business listing: primary category Handyman, address 305 New Park Ave, Hartford, local 860 phone (860) 232-1111, Mon–Fri hours, and offerings including "Home repair and remodeling" and "Flooring installation" — installation and home-repair work is performed at customers' homes, so it is not storefront-only for those services (secondary category is Carpet & Flooring Store); no own website found to confirm further | Google Business listing |

## Dedupe
- Grepped ~/workspace/van-squad/prospecting/ for every name, phone, and email in this batch (Work at its Best, Build-All, Hartford Flooring, 278-9432, 796-4758, 213-3884, 232-1111, workatitsbestllc@gmail.com) and for "Hartford" generally on 2026-11-27: no matches for any included business (the only "Hartford" hits were unrelated street/place names in other states' batches). No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Steneth (1429 Park St #114, Hartford; (860) 214-8651) — EXCLUDED: Google listing only, vague one-word name, no own website and no second source confirming what handyman work it performs or that a current local operator stands behind the listing.
- Handyman (52 Crown St, Hartford; (860) 639-1274) — EXCLUDED: Google listing under the generic name "Handyman" only, secondary category Carpet Cleaner, no own website and no second source confirming a named local operator.
- The Handy Guys (40 South St, West Hartford; (860) 724-4444), Connecticut's Handyman (46 St Augustine St, West Hartford; (860) 750-9070), McNally's Modern Maintenance (70 Cherryfield Dr, West Hartford; (860) 561-9654), C&C Multi Services (15 Mitchell Pl, West Hartford; (860) 853-4417), Roux Home Improvement (204 S Highland St, West Hartford; (860) 922-0786) and Jims Handyman Services (26 Sparrowbush Rd, East Hartford; (860) 528-5331) — EXCLUDED on city: each is based in West Hartford or East Hartford, not Hartford — this cell requires city=Hartford.
- Spaces LLC (9 Garvan St, East Hartford; (860) 221-4144) — EXCLUDED on city: own site confirms Hartford-area home repair/improvement work, but the business is based in East Hartford, not Hartford.
- Mr. Handyman of Greater Hartford and Farmington Valley (131 Day St, Newington; (860) 200-1994) — EXCLUDED: national franchise / national lead-gen pattern and based in Newington, not Hartford.
- National franchises / marketplace-only listings (Ace Handyman Services, Angi/HomeAdvisor/Thumbtack matches with no local operator) — excluded per the gates, not individually listed.

## Email leads
- 1 published email collected, from the business's own website: Work at its Best LLC — workatitsbestllc@gmail.com (source https://workatitsbestllc.com/). See matching -leads.json. No other included business publishes an email on its own site or Google listing.

## Counts
- Included: 3 businesses (2 High confidence, 1 Medium), each with 1 listing in the -inserts.json.
- Email leads: 1.
- Excluded: 8 named businesses/groups above (plus generic national/marketplace listings as a class).
- Inserted: 0 — PREPARED only; the coordinator inserts centrally.
