# Day 38 — Pennsylvania, Erie, ZIP 16509, House cleaning

Cell: PA | Erie | 16509 | House cleaning
Date researched: 2026-11-19
Count: 5 qualifying businesses. No adjacent-ZIP expansion needed (≥3 found in/around the target cell; all serve Erie including the 16509 area from their own materials).

All businesses clean in customers' homes (mobile/on-site by nature, confirmed from each business's own materials). No email was written into any business profile; published emails are in the matching -leads.json only.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Erie House Cleaning Service | (814) 806-2553 | House cleaning | Erie | http://www.eriehousecleaning.net/ | — none published on its own site that could be verified | High — own site prints this phone twice, says "locally owned and operated" (not a franchise), providing house cleaning for over 22 years, servicing Erie, Millcreek, Harborcreek, Fairview, Edinboro and surrounding areas | Business's own website |
| Lunera Cleaners | (814) 240-0410 | House cleaning | Erie | https://www.luneracleaners.com/ | — none published on its own site that could be verified | High — own site prints this phone, offers routine residential upkeep / standard cleaning in customers' homes throughout Erie and neighboring communities (Millcreek, Harborcreek, Fairview, Lawrence Park, Summit Township) | Business's own website |
| Presque Isle Cleaning | (814) 218-4070 | House cleaning | Erie | http://www.presqueislecleaning.com/ | — none published on its own site that could be verified | Medium — own site: locally owned in Erie County, residential services available weekly, bi-weekly, monthly or one-time; phone from its Google Business listing, not in the fetched homepage text | Business's own website + Google Business listing |
| CleanCo, LLC | (814) 722-5906 | House cleaning | Erie | http://www.cleancoerie.com/ | — none published on its own site that could be verified | Medium — own site: based in Erie, PA, family-run since 2014, "We offer both residential and commercial janitorial services to ensure a healthy home"; Cleaning for a Reason confirms residential home cleanings in Erie/Fairview; phone from its Google Business listing, not in the fetched homepage text | Business's own website + Google Business listing + cleaningforareason.org |
| Millcreek A&N Cleaning Services LLC | (814) 737-8926 | House cleaning | Erie | https://www.millcreekancleaning.com/ | kovacevicnermina741@gmail.com — https://www.millcreekancleaning.com/ (business's own website, "Connect with us" block) | High — own site prints "Phone: 814-737-8926, Email: kovacevicnermina741@gmail.com, Location: Erie, pa" and describes regular house cleaning / residential cleaning throughout Erie, Millcreek, Fairview and surrounding communities; family-owned | Business's own website |

## Service ZIPs
No business above published a ZIP-code service list on its own site, so service_zips = ["16509"] (the target ZIP) for each, per the batch rules — no ZIPs were invented.

## Dedupe / exclusion notes
- Dedupe: grep of ~/workspace/van-squad/prospecting/ for each name, phone, and the Millcreek email found no match for any of the five (hits for the generic string "cleanco" were unrelated businesses in other states, e.g. Naturally Clean in Boise). No same-name or same-phone duplicates in prior prospecting files.
- Excluded — Flagship House Cleaning, Erie, (814) 230-6550: its listed website flagshiphousecleaning.com is a parked BlueHost placeholder page, so no verifiable business website / own-materials confirmation.
- Excluded — French Maids LLC / Two French Maids, Erie listing, (814) 602-9257: its listed domain twofrenchmaids.com now presents a Pickering, Ontario business, so the Erie business's own website could not be verified.
- Excluded — Affordable Quality Cleaning Services, Erie, (814) 866-2069: own site is a sparse coupon page with no phone or service detail in the fetched text, and its name is easily conflated with Erie House Cleaning Service's stated parent "Affordable House Cleaning of PA" — held out to avoid a duplicate/confused listing.
- Excluded — Stanley Steemer (Erie location): national franchise / call-center chain, not a local operator.
- Excluded — Erie Shores Cleaning Solutions: listing address is Vermilion, OH, not Erie, PA.
- Excluded — Erie Home Cleaning (eriehomecleaning.com), (814) 403-5546: own site confirms residential/commercial cleaning and Erie/Millcreek coverage, but no phone appeared in the fetched site text (phone only on its Google listing) and the crawl was stale — held as a reserve, not counted.
- Excluded — Advanced Cleaning Systems, Ultra Clean, Roto Services: primarily janitorial / window / carpet specialties, not house cleaning as their own materials present them.

## Leads
1 published email collected (see -leads.json): Millcreek A&N Cleaning Services LLC — kovacevicnermina741@gmail.com, published on its own website https://www.millcreekancleaning.com/
