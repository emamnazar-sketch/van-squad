# Day 47 — NJ, Edison, ZIP 08817, House cleaning

Cell: State=NJ | City=Edison | ZIP=08817 | Category="House cleaning" (exact label)
Date researched: 2026-11-28
Expansion note: No adjacent-ZIP expansion was needed — 4 qualifying businesses serving Edison / ZIP 08817 were verified. Three are based in neighboring Middlesex County towns but each explicitly lists Edison in its own published service area; one (True Shine Home Care) is based in Edison itself.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| True Shine Home Care | (732) 801-3319 | House cleaning | Edison | https://www.trueshinehomecare.com/ | info@trueshinehomecare.com — https://www.trueshinehomecare.com/contact | High — own site says "Professional residential cleaning services in Edison, NJ" and lists its Edison address and phone | Own website (home + contact pages); Google listing corroborates phone/address | No match in prospecting/ grep or day47-dedupe-baseline.json (name or phone). service_zips = 08817 + 08837 (08837 is the ZIP in the Edison address the business itself publishes) |
| Gart Cleaning Services | (848) 256-8219 | House cleaning | Edison | https://gartcleaningservices.com/ | gartcleaningservices@gmail.com — https://gartcleaningservices.com/ | High — own site: locally owned house cleaning serving homes throughout Middlesex County, with a dedicated Edison, NJ service-area page; phone and email on own site | Own website (home + service-areas pages) | No match in prospecting/ grep or day47-dedupe-baseline.json (name or phone). Based in South River area; Edison explicitly served |
| Smith Fresh & Clean | (908) 800-2040 | House cleaning | Edison | https://www.smithfreshclean.com/services/ | smithcleaning99@gmail.com — https://www.smithfreshclean.com/services/ | High — own services page offers "House Cleaning & Maid Service" for homes and lists "Serving the areas of: … Edison …"; phone and email on own site | Own website (services page) | No match in prospecting/ grep or day47-dedupe-baseline.json (name or phone). Based in Piscataway; Edison explicitly served |
| Daily Cleaning Services LLC | (908) 361-9964 | House cleaning | Edison | https://dailycleaningserv.com/ | None published in readable form (email on own site is masked in extraction — not guessed, not recorded) | High — family-owned; own site offers residential cleaning and states "We proudly serve Piscataway and surrounding areas within 10 miles: Edison, New Brunswick, South Plainfield, Metuchen, Highland Park…"; phone on own site | Own website (home page) | No match in prospecting/ grep or day47-dedupe-baseline.json (name or phone). Based in Piscataway; Edison explicitly served |

## Excluded

- Two Maids of Edison and Old Bridge — (848) 800-4874 — national franchise chain; excluded per franchise rule.
- eMaids of Middlesex County — (908) 624-8001 — national franchise (emaidsinc.com); excluded per franchise rule.
- MaidPro Edison / Molly Maid of Edison — national franchises; excluded per franchise rule.
- Neustiq Commercial Cleaning — (908) 466-8784, Edison 08817 — own website is commercial-only (offices, medical/dental, corporate facilities); no residential house cleaning offered on its own materials, despite a Google description mentioning homes. Excluded — not house cleaning. (Its published email info@neustiqclean.com was therefore NOT collected as a lead for this cell.)
- Antczak's Complete Service Company — (732) 821-4025, Edison — own site offers carpet, upholstery, air-duct, dryer-vent, chimney and tile/grout cleaning only; not general house cleaning. Excluded — wrong service.
- Time to Clean / Time 2 Clean — (732) 812-7929, Edison — own site's stated offers are commercial cleaning, post-construction, office maintenance, janitorial and estate clean-out; residential house cleaning not confirmed from its own materials. Excluded — house cleaning not verified.
- First Choice and Company Cleaning Service — (862) 210-0901, Edison — website could not be fetched/verified and no own-materials confirmation of residential house cleaning was found. Excluded — insufficient verification.
- Pristine Pro Cleaners — (347) 243-7538, Edison 08820 — Google listing shows "Permanently Closed." Excluded — closed.
- Happy Brooms Cleaning Service — (732) 543-9877, Metuchen — residential cleaning confirmed on own site, but Edison service is not explicitly stated on its own materials (Central NJ only). Excluded — Edison coverage not confirmed from own materials.
- DMC Cleaning Service — (732) 790-2535, East Brunswick — family-owned residential cleaning, 26+ Central NJ cities, but Edison is not explicitly named in its published service-area lists found. Excluded — Edison coverage not explicitly confirmed.
- WG Carpet and Rug Cleaning — (732) 592-6672, Edison — carpet/rug specialty only, not house cleaning. Excluded.
- Dynasty Customs Power Washing / Thompson Roof Cleaning & Power Washing — exterior/power washing only. Excluded — wrong category.

## Leads summary

3 published business emails collected (see -leads.json):
- True Shine Home Care — info@trueshinehomecare.com (own contact page)
- Gart Cleaning Services — gartcleaningservices@gmail.com (own homepage)
- Smith Fresh & Clean — smithcleaning99@gmail.com (own services page)
Daily Cleaning Services LLC publishes no readable email (masked on its site) — none recorded, none guessed.

## Counts

- Qualifying businesses found: 4
- Businesses in inserts.json: 4 (with 4 listings)
- Email leads: 3
- Dedupe matches skipped: 0 (no name/phone matches in ~/workspace/van-squad/prospecting/ or day47-dedupe-baseline.json)
- Excluded candidates reviewed: 12 (listed above)
