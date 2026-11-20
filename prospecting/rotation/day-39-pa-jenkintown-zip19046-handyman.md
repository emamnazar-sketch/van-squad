# Rotation Day 39 — Pennsylvania: Jenkintown × Handyman × ZIP 19046

- Researched: 2026-11-20 (nightly rotation, Day 39)
- Cell: PA × Jenkintown × ZIP 19046 (Jenkintown Borough, Montgomery County) × category "Handyman" (exact label)
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources, preferring the business's own site; never invented.
- Status: PREPARED 2026-11-20 — batch files only, NOT inserted (coordinator inserts centrally).
- Expansion note: 19046 itself yielded Fred Beese Builds (own site gives a Jenkintown 19046 address) and HandyManz Home Improvement Services (Google listing in Jenkintown). To reach a solid cell, the sweep expanded to adjacent ZIPs 19038 Glenside and the Abington/Glenside area for operators whose own sites confirm in-home handyman / home-repair work and service reaching Jenkintown — noted per row.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Fred Beese Builds | (323) 919-0741 | Handyman | Jenkintown | https://fredbeesebuilds.com/ | fred@fredbeesebuilds.com — own website https://fredbeesebuilds.com/ | High — own site lists a dedicated "Handyman Services" section (woodwork, electrical, lighting, finish carpentry in customers' homes), gives address "Fred Beese Builds, 723 Seminole Ave, Jenkintown, PA 19046. 323-919-0741", lists Jenkintown among the towns it serves, and publishes the email in its FAQ | Own website | Grep of ~/workspace/van-squad/prospecting/ for name/phone/email returned no match; not a Day-39 reuse |
| JE Home Service Group | (267) 296-5180 | Handyman | Jenkintown | http://www.jehomeservicegroup.com/ | jehomeservicegroup@gmail.com — own website http://www.jehomeservicegroup.com/ | High — own site shows phone 267-296-5180 and the email, describes a local family-owned Abington, PA business doing interior/exterior home maintenance and repairs in customers' homes across the Greater Philadelphia Area; Google listing at 1934 Susquehanna Rd, Abington (adjacent to Jenkintown) categorizes it Handyman / In-Home Service with the same phone | Own website + Google Business listing | Grep for name/phone/email returned no match |
| Philip D’Amore Handyman Services | (215) 778-7946 | Handyman | Jenkintown | https://philipdamorehandyman.com/ | — none found | High — own site is a handyman business by name, shows "Call or text 215-778-7946" on its pages, describes small in-home repairs (cabinet adjustments, caulking, door tuning, hardware, picture hanging) with on-site inspection, and states it "serves Glenside, Abington and nearby communities" (Jenkintown directly adjoins both) | Own website | Grep for name/phone returned no match |
| JDB Service Group | (215) 885-2544 | Handyman | Jenkintown | https://jdbservicegroup.com/ | info@jdbservicegroup.com — own website https://jdbservicegroup.com/glenside-pa/ | Medium — own site gives phone (215) 885-2544, the email, and office 442 N. Easton Rd, Glenside, PA 19038 (adjacent ZIP), is a registered PA Home Improvement Contractor (PA178194) doing renovation and repair for homeowners with a standard call-out charge for a repair visit, and its Glenside page explicitly lists "Jenkintown 19046" among the ZIPs it works in; marketed as property maintenance/construction rather than purely as a handyman, hence Medium | Own website | Grep for name/phone/email returned no match |
| HandyManz Home Improvement Services | (215) 941-4055 | Handyman | Jenkintown | http://priorityhomesllc.com/ | — none found | Medium — Google listing places HandyManz Home Improvement Services at 1657 Fairway, Jenkintown, PA with primary category Handyman and phone +1 215-941-4055, linked to priorityhomesllc.com; that own site (Priority Home Improvement LLC) confirms in-home renovation work (kitchens, bathrooms, basements, roofing) but publishes no phone on the fetched page and describes a Philadelphia base, so the phone rests on the Google listing — hence Medium | Own website + Google Business listing | Grep for name/phone returned no match |

## Dedupe
- Grep of all prior files in ~/workspace/van-squad/prospecting/ for every name, phone and email in this batch returned no matches. None of the Day-39 handymen named in the brief (Northeast Philly Handyman, Tony Fix, Flawless Home Services, Infinity Trade Group, Home Exchange, Ramsay Remodeling, Bear Service, Main Line Property Prep, Delco Turnover, J&M Labor, Delaware County Handyman) is reused.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Mathews Home Service (404 Meadowbrook Ln, Glenside; (215) 371-4402 per Google listing, category Handyman) — NOT INCLUDED: its own website domain (mathomeservice.com) no longer serves the business's site (it returns an unrelated page), so on-site work could not be confirmed from the business's own materials in this run.
- Steward Home & Commercial Maintenance (201 York Rd, Jenkintown; (267) 627-3094) — NOT INCLUDED: its own site presents it as an appliance repair and maintenance service, not a general handyman service.
- C.E. Hopkin Co. (100 Girard Ave, Glenside; (267) 997-3850) — NOT INCLUDED: its own site presents it as a roofing / historic restoration contractor, not a handyman service, and publishes no phone on the fetched page.
- Willow Grove Handyman (208 Easton Rd, Willow Grove; (215) 380-8056) — NOT INCLUDED: no verifiable own website found in this run to confirm on-site work from its own materials; listing data alone was not used.
- National franchises / marketplace-only listings (Mr. Handyman, Ace Handyman Services, Angi/Thumbtack/HomeAdvisor profiles with no local operator site) — excluded per the gates, not individually listed.

## ZIP / expansion note
- Target ZIP 19046 first in every service_zips array.
- The only additional ZIP used is JDB Service Group's own stated base ZIP 19038 (Glenside office), which its own site publishes. No other business publishes a ZIP list, so no other ZIP was added — no ZIP was invented. Expansion beyond 19046 (to 19038 Glenside / the Abington area) is documented in the cell note above.

## Email leads
- 3 published emails collected, all from the businesses' own websites: Fred Beese Builds — fred@fredbeesebuilds.com; JE Home Service Group — jehomeservicegroup@gmail.com; JDB Service Group — info@jdbservicegroup.com (see the matching -leads.json). No other business in this cell publishes a readable email on its own site.
