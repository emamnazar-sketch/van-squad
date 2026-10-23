# Day 13 — Texas — Plano — ZIP 75023 — Pool cleaning & maintenance

Cell: Plano, TX × 75023 × "Pool cleaning & maintenance" (label verified in ~/workspace/van-squad/js/data.js, Home services & trades group).
Date researched: 2026-10-23. **5 businesses qualified**, all in Plano and all confirming residential pool cleaning/maintenance at customers' homes from their own materials. No expansion beyond 75023 was needed — every business below is Plano-based or operates a Plano office and explicitly serves Plano.

## Businesses

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|------|-------|----------|------|---------|--------------------------|---------------------|--------|
| 1 | Aqua Clean Pool Service | (972) 527-2782 | Pool cleaning & maintenance | Plano | http://www.aquacleanpoolservice.com/ | aquacleanpoolservice@live.com — published in the footer of its own website http://www.aquacleanpoolservice.com/ | **High** — own site offers "quality weekly pool service and pool repair" in Plano (named in its service-area list), family owned since 1997; Google listing address 7020 Sanders Ln, Plano | Own website; Google Business listing |
| 2 | Clear Choice Pool Care | (469) 451-0222 | Pool cleaning & maintenance | Plano | https://clearchoicepoolcaretx.com/ | info@clearchoicepoolcaretx.com — published on its own website https://clearchoicepoolcaretx.com/ ("email us at info@clearchoicepoolcaretx.com") | **High** — own site details weekly pool maintenance (testing, balancing, skimming, brushing, vacuuming) for homeowners and lists a Plano office at 8105 Rasor Boulevard Suite 281, Plano, TX 75024 (adjacent ZIP, same city), with Plano in its service-area list | Own website; Google Business listing |
| 3 | Custom Pool Care | (972) 690-0410 | Pool cleaning & maintenance | Plano | https://custompoolcare.com/ | mail@custompoolcare.com — published on its own website https://custompoolcare.com/ (Location block) | **High** — own site is a locally owned residential/commercial pool cleaning, maintenance and repair company addressed at 2010 G Avenue #914, Plano, TX 75074, naming Plano in its North Texas service area | Own website |
| 4 | Anchor Pool Service | (972) 530-7170 | Pool cleaning & maintenance | Plano | http://www.anchorpoolservice.com/ | none published (no email address shown on its site) | **High** — own site: "Serving the Plano area since 1990," with a Clean menu of weekly maintenance, weekly chems+ and one-time cleans performed by the licensed owner-operator himself; Google listing address in Plano | Own website; Google Business listing |
| 5 | Aquaman Pool Service | (972) 991-9619 | Pool cleaning & maintenance | Plano | http://www.aquamanservice.com/ | none published (no email address shown on its site) | **Medium** — own site confirms regularly scheduled cleaning and "all your weekly pool needs" by licensed technicians across the Dallas metroplex; its Plano base (1111 Summit Ave, Plano) comes from its Google Business listing rather than the site itself. Phone taken from its own site (972.991.9619); the different number on the Google listing was not used | Own website; Google Business listing |

## Dedupe notes
- Live DB checked via vs_rest.py (`businesses?select=name,phone`, 989 businesses): no match for any candidate name or phone above.
- Grepped all of ~/workspace/van-squad/prospecting/ for every candidate name, domain and phone: no matches — Plano and ZIP 75023 appear in no prior prospecting file.
- No duplicates within this cell: all five names and phones are distinct.
- No business stated a list of service ZIP codes on its own materials (city-level service areas only), so service_zips in the inserts is ["75023"] for every business — no ZIPs were inferred.

## Exclusions (researched, not included)
- **Starfish Pool Service** (Plano, Google listing phone (972) 422-8266) — its website domain is parked ("registered via IONOS and is not yet connected"), so no cleaning/maintenance service could be confirmed from the business's own materials. Excluded.
- **SAG Pool Service** (Allen, (945) 237-0171) — own website fails to load (server error page) and the business is Allen-based with no verifiable Plano confirmation from its own materials. Excluded.
- **Next Wave Pool Care** (Frisco, (903) 776-4642) — own site presents it as a Frisco pool cleaning company and does not name Plano in its service materials. Excluded.
- **Blue Science Pools** (Plano page, bluescience.com) — large multi-region chain (DFW, Houston, Tampa); its Plano Google listing phone (254) 637-0900 is inconsistent with the DFW office number its own pages publish, and it is not a local Plano operator. Excluded.
- **Pinch A Penny Pool Patio Spa, McKinney** — retail pool-supply storefront chain. Excluded as storefront-only.
- **Leak-Tech Pool Repair** (Plano) and **FG Pools LLC** (Plano) — own materials position them as leak detection / repair / remodel and renovation contractors, with no weekly pool cleaning/maintenance route service. Excluded.
- **Living Water Custom Pools** (Plano) — custom pool builder ("A Premier Lifestyle Builder"); no cleaning/maintenance service confirmed. Excluded.
- Aggregator/lead-gen style results ignored (city-named "Weekly Pool Cleaners" template sites for Murphy/Richardson/Allen with no Plano operator confirmed).

## Files
- Inserts: day-13-tx-plano-zip75023-pool-cleaning-maintenance-inserts.json — 5 businesses + 5 listings.
- Leads: day-13-tx-plano-zip75023-pool-cleaning-maintenance-leads.json — 3 published emails (Aqua Clean Pool Service, Clear Choice Pool Care, Custom Pool Care).
