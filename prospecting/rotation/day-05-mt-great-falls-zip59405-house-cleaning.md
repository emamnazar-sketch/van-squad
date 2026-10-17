# Rotation Day 5 — Montana: Great Falls × House cleaning × ZIP 59405

- Researched: 2026-10-17 (Day 5, manual live run ordered by the owner — thin batch, up to 5 businesses)
- Cell note: ZIP 59405 is the east side of Great Falls. House cleaning is performed inside the customer's home by definition, so on-site residential service is the business model itself; each entry below was confirmed from the business's own website to clean residences in Great Falls (not commercial-only janitorial work).
- ZIP-expansion note: NO expansion was needed — 5 qualifying businesses were found serving Great Falls homes including ZIP 59405.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Grateful Homes Cleaning Services | (406) 791-8251 | House cleaning | Great Falls | https://gratefulhomescs.com/ | — none published (site shows an email contact icon, but no address appears in readable text, so none was recorded rather than guessed) | High — own site is a Great Falls home-cleaning business (initial, recurring, move in/out and listing cleans for homes), states it is locally owned and licensed/bonded/insured, and publishes this phone; matches its Google listing | Business's own website + Google Business listing |
| Queen's Maid Service | (406) 564-9638 | House cleaning | Great Falls | http://queensmaidservicesusa.net/ | — none published on its site | High — own site is based in Great Falls (312 Huffman Ave), has a dedicated Residential service page, and publishes this phone; residential work confirmed by its own service pages and client testimonials about cleaning their homes | Business's own website |
| Diamond Clean Pro | (406) 899-5112 | House cleaning | Great Falls | https://www.diamondcleanllc.com/ | Jeanoux@diamondcleanllc.com — https://www.diamondcleanllc.com/ (footer of business's own website) | High — own site has extensive residential cleaning content (standard, deep, recurring, move in/out cleaning for homes and apartments in Great Falls) and publishes this phone and email in its footer; business name as listed on Google is "Diamond Clean Pro" (site brands it "Diamond Clean") | Business's own website + Google Business listing |
| Mmkay Cleaning Services LLC | (406) 770-9092 | House cleaning | Great Falls | https://mmkays.com/ | office@mmkays.com — https://mmkays.com/ (contact block of business's own website) | High — own site: based in Great Falls, "specialize in high-detail residential cleaning, move-ins and move-outs, recurring upkeep," BBB accredited, and publishes this phone and email on its own page | Business's own website |
| Big Sky Cleaning & Laundry Services LLC | (801) 609-8724 | House cleaning | Great Falls | https://bigskyclsllc.com/ | — none published on its site | Medium — own site confirms a local, woman-owned business cleaning homes, apartments and rentals in Great Falls (deep cleans, move in/out, recurring, Airbnb), but the only phone it publishes carries an out-of-state 801 area code, so the local signal is slightly weaker; number recorded exactly as published | Business's own website |

## Dedupe
- Live directory check (vs_rest.py get "businesses?select=name,phone", 316 rows, run 2026-10-17 before writing): none of the five names or five phone numbers in this batch appears in the live directory.
- All files under ~/workspace/van-squad/prospecting/ were grepped for every name (Grateful Homes, Queen's Maid, Diamond Clean, Mmkay, Big Sky Cleaning & Laundry) and every phone number in this batch — no matches. The concurrently researched Great Falls handyman cell (59401) contains no house-cleaning businesses and no overlap with this batch.
- Note for the coordinator: "MT Cleaning LLC" ((406) 812-0327), a Great Falls-area cleaner, is ALREADY in the live directory from another cell — it was skipped here to avoid duplication.

## Excluded (checked, did not pass the gates)
- Big Sky Cleaners Corp (Great Falls; (406) 564-6822; bigskycleaners.com) — NOT INCLUDED in this thin batch: a mixed dry-cleaner/janitorial storefront operation; its own website could not be fetched for verification, and the five slots were filled by businesses verified directly on their own sites. (Distinct business from Big Sky Cleaning & Laundry Services LLC above despite the similar name.)
- Clean Family Homes (Great Falls; (406) 231-8414) — EXCLUDED: no website and no business description could be found anywhere to confirm residential house cleaning from its own materials; only a bare places listing with a phone.
- Culinary Cleaners (Great Falls; (406) 781-4462) — EXCLUDED: commercial-only by its own description ("your first choice for commercial cleaning").
- Priority Clean (Great Falls; (406) 590-1987) — EXCLUDED: commercial-only per its own description ("Commercial Cleaning Services").
- Biz Clean (Great Falls; (406) 452-8444) — EXCLUDED: commercial janitorial only, per its own description.
- Masco Janitorial (Great Falls; (406) 761-4475) — EXCLUDED: janitorial supplies company, not a home cleaning service.
- Right Now Cleaning and Restoration (Great Falls; (406) 781-5340) and Pro-Kleen Services (Great Falls; (406) 761-7700) — EXCLUDED on category fit: restoration / carpet-and-upholstery focused; general residential house cleaning is not their stated core service.
- ServiceMaster All Purpose Cleaning (Great Falls; (406) 359-6840) and Servpro of Helena & Great Falls ((406) 952-1001) — EXCLUDED: national franchise restoration/janitorial operations, not residential house-cleaning businesses.
- Under Pressure Power Washing (Great Falls) — EXCLUDED on category fit: pressure washing, not house cleaning.
- ZG and Keet (Great Falls; (406) 797-7421) and the Norwex consultant listings — EXCLUDED: no verifiable business website or service description (product-sales consultants, not cleaning service businesses).

## ZIP note
- Target ZIP 59405 heads every business's service_zips; all five state Great Falls-wide residential service, which includes 59405 homes.
- Additional service ZIPs were added ONLY where the business's own site names the service-area town; the ZIP used is that town's primary ZIP, stated here for transparency: Grateful Homes Cleaning Services' own site lists service areas "Great Falls, Montana / Black Eagle, MT / Cascade County & surrounding areas" — Black Eagle's primary ZIP is 59414, so its service_zips are ["59405", "59414"]. The other four publish no ZIP-level service area beyond Great Falls itself, so their service_zips are just ["59405"] — no ZIPs were invented.
- Some of these businesses are physically addressed in other Great Falls ZIPs (59401/59403); the cell is defined by the homes they serve, and all five confirm they clean homes across Great Falls.
- Count: 5 businesses, 5 listings, 2 published-email leads (see -leads.json).
