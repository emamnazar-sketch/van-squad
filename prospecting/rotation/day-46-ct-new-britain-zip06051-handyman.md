# Rotation Day 46 — Connecticut: New Britain × Handyman × ZIP 06051

- Researched: 2026-11-27 (nightly rotation, Day 46)
- Cell: CT | New Britain | 06051 | Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business via Meta places data, Porch, HomeAdvisor). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).

## Expansion note
No expansion was needed: 3 qualifying New Britain businesses were found for the 06051 cell (1 verified from its own website, 2 from their Google listings with In-Home Service categories). No adjacent-ZIP businesses were added; every included business is in New Britain and its service_zips carry only the target ZIP 06051, because none of them publishes its own list of service-area ZIPs (Jack of All Trades CT says only "We serve all of Connecticut" on its own site, which is not a ZIP list).

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Jack of All Trades CT | (860) 223-3344 | Handyman | New Britain | https://www.jackofalltradesct.com/ | danny@jackofalltradesct.com — own website https://www.jackofalltradesct.com/ | High — own site gives its address as "Jack of all Trades, 361 South Main Street, New Britain, CT 06051-3513", describes a "locally owned family business" father-son team serving the community, says "We serve all of Connecticut", is licensed/insured (HIC. 0540399), and prints both the phone (860) 223-3344 and the email danny@jackofalltradesct.com; Google listing confirms the same New Britain address, phone and website with Handyman as a secondary category, and its HomeAdvisor profile describes "General Contracting/Handyman svc." — home building/repair work performed at customers' homes | Business's own website + Google Business listing + HomeAdvisor |
| Assemblit Pro | (860) 964-0145 | Handyman | New Britain |  | — none found | Medium — Google Business listing: primary category Handyman, secondary category In-Home Service, address 71 Fairview St, New Britain, local 860 phone (860) 964-0145; its Porch business description says "Assemblit Pro Furniture Assembly Services offers a wide variety of assembly and installation services. We work with a number of residential and commercial clients, including homeowners, furniture retailers..." — assembly/installation is performed in customers' homes, so it is not storefront-only; no own website found to confirm further | Google Business listing + Porch |
| Sunrise Handyman Service | (860) 224-8525 | Handyman | New Britain |  | — none found | Medium — Google Business listing: primary category Handyman, secondary categories include In-Home Service, address 304 Maple St, New Britain, local 860 phone (860) 224-8525, and the business's own listing description "Kitchen and Baths Handyman service" — kitchen/bath handyman work is performed at customers' homes, so it is not storefront-only; no own website found to confirm further | Google Business listing |

## Dedupe
- Grepped ~/workspace/van-squad/prospecting/ for every name and phone in this batch (Jack of All Trades CT / jackofalltradesct, Assemblit, Sunrise Handyman, 223-3344, 964-0145, 224-8525, danny@jackofalltradesct.com) and for "New Britain" / "06051" on 2026-11-27: no matches for any included business (the only "New Britain" hits were street-name mentions — New Britain Ave in West Hartford/Hartford batches — and an unrelated Texas "Jack Of All Trades" business, JOAT LLC in Humble, with a different phone/website). No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Ejds handyman Services LLC (421 Columbus Blvd, New Britain; (203) 694-2609) — EXCLUDED: Google listing only with primary category Handyman and no secondary in-home category, no own website, no published description or second source confirming what handyman work it performs at customers' homes.
- Brothers Handyman (85 Booth St, New Britain; (929) 213-4691) — EXCLUDED: the website on its listing is an unrelated legal-services site (blackcreditlegalgroup.com), the phone is a New York City 929 number, and no own materials confirm a local New Britain handyman operator.
- Mr. Handyman of Greater Hartford / Mr. Handyman in New Britain — EXCLUDED: national franchise, per the gates.
- Gibson Cellar Door and Window (202 New Britain Rd, Berlin; (860) 628-4400) and Handyman Paul LLC (Newington; (860) 518-0445) — EXCLUDED on city: each is based in Berlin / Newington, not New Britain — this cell requires city=New Britain.
- National franchises / marketplace-only listings (Ace Handyman Services, LoadUp, InstaService, Angi/HomeAdvisor/Thumbtack matches with no local operator) — excluded per the gates, not individually listed.

## Email leads
- 1 published email collected, from the business's own website: Jack of All Trades CT — danny@jackofalltradesct.com (source https://www.jackofalltradesct.com/). See matching -leads.json. No other included business publishes an email on its own site or Google listing.

## Counts
- Included: 3 businesses (1 High confidence, 2 Medium), each with 1 listing in the -inserts.json.
- Email leads: 1.
- Excluded: 5 named businesses/groups above (plus generic national/marketplace listings as a class).
- Inserted: 0 — PREPARED only; the coordinator inserts centrally.
