# Day 46 — CT / Hartford / ZIP 06103 / House cleaning

- Cell: State=CT, City=Hartford, ZIP=06103, Category="House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-27
- Expansion note: ZIP 06103 is downtown Hartford (mostly offices/commercial). Aguirre's Home Solutions is addressed in 06103 itself (777 Main St). Purposeful Cleaning LLC is based in adjacent Hartford ZIP 06106 (36 Russ St) and Cleaning Service Fairies' listing is on Blohm St, Hartford — both confirm Hartford house cleaning, so 06103 is in their service_zips; Purposeful also carries its own stated 06106. Raupp's Google listing address is 8 Hazel St, Hartford, and its own site says it serves Hartford County (its site branding/footer says West Hartford) — 06103 included on that stated county service area, no other ZIPs added. No business stated a ZIP list, so no extra ZIPs were invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Aguirre's Home Solutions | (860) 922-6889 | House cleaning | Hartford | https://www.aguirreshomesolutions.com/ | aguirrehomesolution2020@gmail.com — https://www.aguirreshomesolutions.com/ | High — own site: "professional house cleaning company… top-notch cleaning services for your home… one-time deep cleaning or regular maintenance", "Hartford Trusts us for a Cleaner Home"; phone and email printed on own site; Google listing (as Hartford Home Solutions) address 777 Main Street, Hartford, CT (in target ZIP 06103) | Business's own website + Google listing for address/name alias | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Raupp House Cleaning Services | (860) 773-0080 | House cleaning | Hartford | https://rauppcleaningservices.com/ | contact@rauppcleaning.com — https://rauppcleaningservices.com/ | High — own site (branded Raupp Cleaning Services): "Our house cleaning and maid services…", "Providing the Best House Cleaning Services in CT", "We serve Hartford County in Connecticut"; phone and email printed repeatedly on own site; Google listing address 8 Hazel St, Hartford, CT | Business's own website + Google listing for Hartford address | Grep of prospecting folder for name and phone: no match |
| Purposeful Cleaning LLC | (203) 864-7526 | House cleaning | Hartford | http://www.purposefulcleaning247.com/ | None published on own site checked | Medium — own site has a Residential Cleaning service (move-in/move-out cleanings, post-renovation cleanups, rental property turnovers for homeowners/landlords — cleaning at customers' homes), though the business is primarily commercial janitorial; own site prints address 36 Russ St, Hartford, CT 06106 (adjacent ZIP, expansion noted above) and phones including 203 864-7526, which matches its Google listing phone (site also lists a second number, 203 551-9976) | Business's own website + Google listing | Grep of prospecting folder for name and phone: no match |
| Cleaning Service Fairies | (203) 441-5050 | House cleaning | Hartford | http://www.mycleaningfairies.com/ | None published on own site checked | Medium — own site: "Professional House Cleaning in Connecticut… customized cleaning services… every home is unique… regular maintenance or a deep, detailed clean" at customers' homes; Google listing gives Hartford address (Blohm St, Hartford, CT) and phone (203) 441-5050 — phone comes from the listing, not seen in the fetched homepage text | Business's own website + Google listing for address/phone | Grep of prospecting folder for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Merry Maids (East Hartford) | (860) 222-7739 / https://www.merrymaids.com/east-hartford/ | National franchise system (Merry Maids), not an independent local operator — excluded per instruction to exclude national franchise systems |
| Bio-One Hartford | (203) 504-9979 / https://biooneinc.com/hartford-ct/ | Biohazard / trauma / hoarding cleanup franchise, not house cleaning |
| Lowe's Air Duct Cleaning | (860) 259-4833 / https://lowesair.com/connecticut/hartford/ | Air duct and dryer vent cleaning only, multi-location operation — not house cleaning |
| Clean My Space CT | (860) 539-8725 / https://www.cleanmyspacect.com/ | Own site locations are New Britain, Farmington and West Hartford and its own description lists New Britain, Farmington, West Hartford, Newington and Southington — Hartford house-cleaning service not confirmed from its own materials |
| Pristine Pro Cleaners | (203) 628-5873 / https://www.pristineprocleanersct.com/ | Own site confirms Connecticut residential cleaning but states no Hartford location or Hartford service area — Hartford not confirmed from its own materials |
| Q-P Cleaners / Mercury Cleaners / French Cleaners | various Hartford listings | Storefront dry cleaners / laundromats, not house cleaning at customers' homes |
| Sanchez Cleaning Service / E & Oliveira House Cleaning Services / A and B Cleaning Services / Nicas Cleaning LLC / Gazu Cleaning Service LLC / Sister Soldier Environmental Services / Pag Cleaning Service / Sibrian Cleaning Service / N&M Pristine Maids | various Hartford listings | No verifiable own website confirming residential house cleaning from their own materials — listing-only (Nicas' only "website" is a WhatsApp link) |

## Leads summary

2 published emails collected (see matching -leads.json): Aguirre's Home Solutions — aguirrehomesolution2020@gmail.com (own website); Raupp House Cleaning Services — contact@rauppcleaning.com (own website). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 4
- Listings: 4 (one per business, title "House cleaning in Hartford")
- Email leads: 2
- Excluded / skipped: 8 entries above; no dedupe skips (no name/phone matches in prospecting folder)
