# Day 47 — NJ, Trenton, ZIP 08611, House cleaning

Cell: State=NJ | City=Trenton | ZIP=08611 | Category="House cleaning" (exact label)
Date researched: 2026-11-28

ZIP expansion note: The 08611 core yielded website/Google-verified candidates, and the sweep also drew on immediately adjacent Trenton ZIPs as permitted (08608 for Divine Cleaning Service LLC's own published Trenton address; other included businesses are listed at Trenton addresses in/around 08611). All included businesses are Trenton-based and clean at customers' homes. service_zips in the inserts file is ["08611"] for every business — no included business published its own stated service-area ZIP list, so no ZIPs were invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Nova's Cleaning | (609) 434-9866 | House cleaning | Trenton | http://www.novascleaning.com/ | None usable — own site shows only a spam-protected email placeholder, address not readable, so none recorded | High — own website confirms home cleaning ("ensuring your home is impeccably clean"; Regular/Deep/Move In-Out cleaning) and publishes the same phone | Own website http://www.novascleaning.com/ ; Google listing (26 Zoar Ave, Trenton; In-Home Service) | No name/phone match in prospecting/ or day47-dedupe-baseline.json |
| Priyana's Cleaning Service | (609) 533-3419 | House cleaning | Trenton | https://www.priyanascleaningservice.com/ | None published found | High — own website: "family-owned business dedicated to providing top-quality residential cleaning… every home we clean"; phone on own site matches Google listing (239 Grand St, Trenton) | Own website https://www.priyanascleaningservice.com/ | No name/phone match in prospecting/ or baseline (listing name is the concatenated "Priyanascleaningservicellc"; site name used) |
| Daisy Maid Cleaning Services | (609) 647-5765 | House cleaning | Trenton | http://deisymaidcleaningservices.com/ | None published found | Medium — own booking website says "LIFE IS TOO SHORT TO CLEAN YOUR OWN HOME… CALL 609-647-5765" with Regular Cleaning; phone matches Google listing (854 Plum St, Trenton); site itself does not display the business name in page text (name from Google listing / booking slug "daisymaidcleaningservices") | Own website http://deisymaidcleaningservices.com/ ; Google listing | No name/phone match in prospecting/ or baseline. Note spelling: domain is "deisy…", listing/booking name is "Daisy Maid Cleaning Services" |
| Divine Cleaning Service LLC | (609) 801-7270 | House cleaning | Trenton | http://www.divinecleaningserviceco.com/ | None published found | Medium — own website confirms residential cleaning for homes and lists its Trenton address (16 W Front St, Trenton, NJ 08608, adjacent ZIP); phone used is the one on its own site, which differs from the Google listing phone (609) 200-1519 — own site preferred per brief | Own website http://www.divinecleaningserviceco.com/ ; Google listing | No name/phone match (either phone) in prospecting/ or baseline. Phone discrepancy noted, not hidden |
| Martinez House Cleaning LLC | (914) 334-9606 | House cleaning | Trenton |  | None published found | Medium — Google listing at 362 Rusling St, Trenton carries In-Home Service category and the business's own listing description "House cleaning service"; no website found to further confirm | Google Business listing | No name/phone match in prospecting/ or baseline. Non-local (914) area code noted; number is the publicly listed one |
| Taylor Cleaning Services | (609) 433-0998 | House cleaning | Trenton |  | None published found | Medium — Google listing at 367 Walnut Ave, Trenton carries In-Home Service secondary category (business-submitted), indicating cleaning at customers' homes; no website found | Google Business listing | No name/phone match in prospecting/ or baseline |

## Excluded

- Victoria's Cleaning Services ((609) 672-1949, victoriascleaning.com) — EXCLUDED on dedupe/caution: a different "Victoria's cleaning services" (Chicago, different phone) already exists in prospecting/ (day-22 Chicago house-cleaning batch), so the name collides under the same-name rule; additionally its own website lists its office in Hamilton, NJ 08690 rather than Trenton. Its published email was therefore NOT collected as a lead for this cell.
- Top To Bottom Deep Cleaning Services — EXCLUDED: own website gives a Newark, NJ 07103 address and phone (862) 272-9353, conflicting with the Trenton listing phone (646) 577-5029 and generic listing names ("House cleaning service" / "Deep cleaning service"); not a verifiable Trenton local operator for this cell.
- ACCSES Clean — janitorial / building maintenance, not house cleaning at customers' homes.
- Glow Pro Cleaning — own description is training/marketing for cleaning-company owners, not a house-cleaning service.
- SERVPRO of Ewing, North Trenton — national franchise / damage restoration, not an independent local house cleaner.
- Victory Hood Cleaning — commercial kitchen hood cleaning, not house cleaning.
- My Twins Cleaning — listing marked "Possibly Temporarily Closed."
- Joseph's Cleaning Service, What It Take Services LLC, Yajos Cleaning Solutions, King Royal Clean, J&C Company, Affordable Cleaning Solutions, M and P Magic Hands Cleaning Service, Pro Quality Cleaning, The Maid Is Here — no website or own materials found confirming residential/house cleaning at customers' homes (generic "Cleaning Service" listing only, or contractor category); not enough verification under the quality gate.

## Leads summary

No included business publishes a readable business email. Nova's Cleaning's own site shows only a spam-protected email placeholder (address not readable — never guessed). Victoria's Cleaning Services publishes an email on its own site but was excluded from this cell (see above), so it is not recorded as a lead here. Leads file is an empty array.

## Counts

- Qualifying businesses found and prepared: 6 (High: 2, Medium: 4)
- Listings prepared: 6 (one per business)
- Published email leads collected: 0
- Excluded candidates reviewed: 15+ (see Excluded section)
- Dedupe: all 6 names and phones checked against ~/workspace/van-squad/prospecting/ and ~/workspace/goals/van-squad-directory-website/hidden_files/day47-dedupe-baseline.json — no matches.
- Nothing inserted into any database; no site files edited.
