# Day 33 — South Carolina, Columbia, ZIP 29205 — Mobile auto detailing

Cell: SC | Columbia | 29205 | Mobile auto detailing
Research date: 2026-11-12
Target ZIP 29205 (Shandon / Rosewood / USC area, Columbia). All businesses below serve Columbia including 29205 from their own materials; no adjacent-ZIP expansion was needed — 7 businesses qualified in the Columbia service area for this ZIP.

## Businesses (7)

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | Code Blue Detailing | (803) 470-6696 | Mobile auto detailing | Columbia | https://www.codebluedetailing.com/ | — none published on its own site | High — own site: "Based in Columbia, SC, we are a mobile rapid response team", "100% Mobile: We come to your home, terminal, driveway, or RV park", fully self-contained unit with water and power; phone 803.470.6696 in the "Get in Touch" block on own site | Business's own website |
| 2 | Obsessive Car Detailing | (803) 814-4006 | Mobile auto detailing | Columbia | https://www.obsessivecardetailing.com/ | obsessivecardetailings@outlook.com — own website About page (https://www.obsessivecardetailing.com/about) and homepage | High — own site: "Columbia's top-rated mobile detailing service", "Mobile Convenience — No drop-offs, no waiting rooms. We come fully equipped to your home, office, or anywhere in the Columbia area"; phone (803) 814-4006 and email on own site; Columbia, SC based & operated | Business's own website |
| 3 | 3M's Mobile Auto Detailing | (803) 216-4162 | Mobile auto detailing | Columbia | https://3msmobileautodetailing.com/ | mindmoneymusclellc@gmail.com — own website contact block (https://3msmobileautodetailing.com/) | High — own site: "We provide mobile auto detailing, ceramic coating services and more in Columbia SC. Call or text 803-216-4162", "We detail all makes and models of vehicles right onsite at your home or work... we come to you!"; family owned and operated in Columbia SC; phone and email in own site's contact block | Business's own website |
| 4 | EF Professional Detailing | (803) 615-2283 | Mobile auto detailing | Columbia | https://www.efprodetail.com/ | efprodetail@gmail.com — own website footer (https://www.efprodetail.com/) | High — own site: "Columbia's Mobile Car Detailing Service", "We are a mobile detailing service. We come to you... we'll arrive with everything!", team arrives "with all equipment, water, and power to your location of choice"; phone (803) 615-2283 (footer + tel: link) and email in own site footer. Note: the site's structured metadata carries a different number (803-605-6979); the visible footer/tel number was used | Business's own website |
| 5 | Ultra Gloss Mobile Detailing | (803) 927-8400 | Mobile auto detailing | Columbia | https://ultragloss.shop/ | — none published on its own site | High — own site: "Premium Detailing. Delivered to Your Driveway... We bring the detail shop directly to you", "We Come to You — Fully Mobile Service", "Based in Columbia, SC — fully mobile"; phone (803) 927-8400 repeated in own site's call blocks; Google listing address 1131 Woodrow St, Columbia (29205 area) | Business's own website |
| 6 | Fenters Auto Detailing | (803) 748-2714 | Mobile auto detailing | Columbia | https://www.fentersautodetailing.com/columbia-sc-car-detailing | — none published on its own site | High — own Columbia SC page: "We are a mobile car detailing company based in Lexington but travel to Columbia SC!", "having us come right to you", own water and electricity on board, can detail at work; "CALL US: 803-748-2714" on that page | Business's own website (Columbia SC service page) |
| 7 | Mad Dog Mobile Detailing | (803) 580-9652 | Mobile auto detailing | Columbia | https://www.maddogdetailing.com/exterior-detailing | maddogmobiledetailing@gmail.com — own website contact block (https://www.maddogdetailing.com/exterior-detailing) | High — own site FAQ: "Do you offer mobile exterior detailing? Yes! ... book a mobile detail, and we'll come to you! We bring everything needed, including water, power, and supplies. Whether at home or work" in Columbia, SC; phone (803) 580-9652 and email on own site. It also offers a shop option, but mobile service is explicitly confirmed, so it is not shop-only | Business's own website |

4 published business emails collected (see matching -leads.json): Obsessive Car Detailing, 3M's Mobile Auto Detailing, EF Professional Detailing, Mad Dog Mobile Detailing. All taken from the businesses' own websites; none guessed.

## Dedupe notes

- Checked against the live DB dump /tmp/vs_active_day33_open.json (2,991 active businesses): no match on exact name or phone for any of the 7 businesses. A substring name search returned only "Mobile Auto Detailing" ((616) 217-1307, Michigan) — a generic-name business in another state, not a duplicate of any business here.
- Grepped ~/workspace/van-squad/prospecting/ for all 7 names and all 7 phone numbers: no prior batch contains any of them as a business. One name mention: "Ultra Gloss Mobile Detailing" appears in the day-31 Miami (33165) file's EXCLUSION notes for a different operator (7940 SW 21st Terrace, Miami, (786) 926-5267 on a listing, no own website found, never inserted) — a different business from the Columbia operator here ((803) 927-8400, own site ultragloss.shop, Columbia-based), kept with this distinction noted.
- Also checked tonight's other day-33 files (Charleston / Mount Pleasant / North Charleston cells): no overlap in names or phones.

## Exclusion notes

- Panda Hub (Columbia) — EXCLUDED: national lead-gen / marketplace platform, non-local (410) phone, no single local Columbia operator.
- Apex Auto Spa (809 Idlewilde Blvd, Columbia; (803) 728-1388 per Google listing) — EXCLUDED: its own website's fetched page carries a conflicting trailing number (910-797-1824) and a "NEW APEX SHOP" announcement, and no explicit come-to-you wording was verifiable on the fetched own-site page; phone could not be cleanly verified from its own materials.
- Details Count Professional Detailing / Details Count Elite (Columbia) — EXCLUDED: fetched own-site homepage confirms a fixed shop (9380 Two Notch Rd, phone 803-736-7272) with no mobile/on-site confirmation in its own materials; listings carry conflicting phones/addresses ((803) 661-7805, 1307 Calhoun St).
- Mobile Works Auto Detailing (West Columbia; (803) 661-5014 per listing) — EXCLUDED: its website domain now serves unrelated spam content, so mobile service and phone could not be verified from the business's own materials.
- Detailing With Roger (Columbia/Charlotte) — EXCLUDED: own site confirms free mobile service ("WE COME TO YOU!") but the fetched homepage publishes no phone number.
- Rosewood Car Wash / Rosewood Express Car Wash (1425/1350 Rosewood Dr, Columbia, 29205) — EXCLUDED: fixed-location self-serve/automatic car washes, storefront-only, no mobile service.
- 424 Pressure Wash LLC — EXCLUDED from this cell: primarily a pressure-washing business based around Florence, SC; detailing is a secondary line and no Columbia-based detailing operation was confirmed.

## Files

- day-33-sc-columbia-zip29205-mobile-auto-detailing.md (this file)
- day-33-sc-columbia-zip29205-mobile-auto-detailing-inserts.json — 7 businesses + 7 listings, service_zips ["29205"] only (no business published additional service-area ZIPs in a form treated as service ZIPs; address ZIPs were not treated as service ZIPs)
- day-33-sc-columbia-zip29205-mobile-auto-detailing-leads.json — 4 leads

Not inserted — coordinator inserts centrally.
