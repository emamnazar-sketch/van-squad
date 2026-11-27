# Day 46 — CT / Windsor / ZIP 06095 / House cleaning

- Cell: State=CT, City=Windsor, ZIP=06095, Category="House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-27
- Expansion note: No expansion to an adjacent ZIP was needed to reach 3 — 4 businesses qualify for 06095 itself. No business published a service-ZIP list, so service_zips = ["06095"] only for every business; no ZIPs were invented. Bases outside Windsor are noted per business (Belleza's is Tolland-based with Windsor named on its own site; Tidy & Clean is in Broad Brook / East Windsor, the town directly north of Windsor; Clever Cleaning and McCarthy Cleaning are in the adjacent Greater Hartford towns of West Hartford and Bloomfield).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Belleza's Home Services | (860) 790-9545 | House cleaning | Windsor | https://www.bellezashomeservices.net/house-cleaning-services-in-bloomfield-ct/ | ct@bellezashomeservices.net — https://www.bellezashomeservices.net/house-cleaning-services-in-bloomfield-ct/ | High — own house-cleaning page lists recurring/one-time/deep house cleaning at customers' homes and states "We also serve Windsor, West Hartford, Simsbury, Granby, and Avon on adjacent route days"; its own Windsor page likewise covers cleaning across all of Windsor; phone and email printed on own site | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name, phone and email: no match |
| Tidy & Clean | (860) 338-2629 | House cleaning | Windsor | https://www.tidyandcleanct.com/ | None published on own site checked | Medium — own site: "Professional Commercial and House Cleaning Services in Hartford & Tolland County", "Whether it's your home or business, we're here to make your space shine", with its address (1511 Canyon Ridge Drive, Broad Brook, CT 06016 — East Windsor, directly north of Windsor) and phone (860) 338-2629 printed on the site; Windsor (06095) is in Hartford County, but Windsor is not named town-by-town, hence Medium | Business's own website | Grep of prospecting folder for name and phone: no match |
| Clever Cleaning Enterprise | (860) 936-0377 | House cleaning | Windsor | http://www.clevercleaningct.com/ | None published on own site checked | Medium — own site: "LOCALLY OWNED IN WEST HARTFORD", "Professional Cleaning for Homes and Businesses", "Serving Greater Hartford & Surrounding Connecticut Communities", Residential / Recurring / Deep Cleaning, phone 8609360377 printed on the site; Windsor is a surrounding Greater Hartford community but is not named town-by-town, hence Medium | Business's own website | Grep of prospecting folder for name and phone: no match |
| McCarthy Cleaning LLC | (860) 502-5138 | House cleaning | Windsor | https://mccarthyscleaning.com/ | None published on own site checked | Medium — own site: "Professional residential cleaning… weekly, biweekly, monthly, one time, deep cleaning, or move in and move out", "Proudly serving Connecticut" / "Serving Connecticut", phone +1 (860) 502-5138 printed on the site (site also lists two other numbers); Google listing gives its Bloomfield address (19 Willow Ln, Bloomfield — Bloomfield borders Windsor) and the same phone; Connecticut-wide rather than Windsor-specific wording, hence Medium | Business's own website + Google listing for Bloomfield base/phone corroboration | Grep of prospecting folder for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Clean & Polished | (860) 249-1729 / https://www.cleanandpolishedct.com/ | DEDUPE SKIP — own site does name Windsor in its 12-town service-area list, but the same name + phone were already inserted in tonight's earlier Day 46 Manchester cell (day-46-ct-manchester-zip06040-house-cleaning) |
| Family Cleaners | (860) 356-9448 / https://familycleanersct.com/services/house-cleaning/ | DEDUPE SKIP — own site lists Windsor under "Also serving in Connecticut", but the same name + phone were already used in tonight's Day 46 Manchester house-cleaning cell and the West Hartford deep-cleaning cell |
| Raupp House Cleaning Services / Aguirre's Home Solutions / Purposeful Cleaning LLC / Cleaning Service Fairies | various Hartford listings | Already inserted in tonight's Day 46 Hartford house-cleaning cell — same name/phone dedupe skip if considered for Windsor |
| The Cleaning Authority - West Hartford | (860) 398-4102 / https://www.thecleaningauthority.com/west-hartford/areas-we-serve/windsor/ | National franchise system — excluded per instruction to exclude national franchise systems |
| The Maids | 1-800-843-6243 / https://www.maids.com/ct/windsor/ | National franchise system — excluded |
| Merry Maids / Two Maids / Coverall | various Windsor-area listings, incl. Coverall at 340 Broad St, Windsor, (860) 688-1200 | National franchise systems (Coverall is commercial janitorial franchising, not house cleaning) — excluded |
| Renew & Shine Cleaning Services | (860) 967-6400 / https://www.renewandshinecleaningservices.com/residential-cleaning | Own residential-cleaning page confirms house cleaning at customers' homes from a South Windsor base, but does not name Windsor (06095) or a Windsor service area in its own materials — Windsor not confirmed from own materials |
| Clean My Space CT | https://www.cleanmyspacect.com/ | Own site centres on New Britain, Farmington and West Hartford (also Newington / Southington in its text) — Windsor not confirmed from its own materials |
| Pristine Pro Cleaners | (203) 628-5873 / https://www.pristineprocleanersct.com/ | Own site confirms Connecticut residential cleaning and publishes phone + email, but states no Windsor location or Windsor service area — Windsor not confirmed from its own materials |
| Sparkle Cleaning Services (Cristina Arreola) | https://www.sparklecleaningsvs.com/services | Own services page confirms home cleaning at customers' homes, but no verifiable public phone and no Windsor / Connecticut location or service area could be verified from its own materials |
| TimeSaver Maids, LLC | (860) 321-8349 / http://www.timesavermaids.com/ | Google listing gives a Bloomfield address and that phone, and job ads describe cleaning homes/apartments, but the business's own website could not be fetched/verified in this run, so Windsor service and house cleaning could not be confirmed from its own materials |
| Crews By Cleaning | (860) 895-7576 / reputablecleaners.com listing | Only a third-party directory listing (reputablecleaners.com) could be verified, naming Windsor and residential services; no verifiable own website confirming it from its own materials |
| Pair A Dice Clean LLC | (860) 281-1558 (Google listing) / http://www.pairadiceclean.com/ | Own site describes a "preventive maintenance solution company" for homeowners/landlords/commercial owners and prints a different phone, (413) 342-1558 — house cleaning in Windsor not confirmed from its own materials, and the phone conflict is unresolved |
| Black Tie Cleaners | (860) 285-0435, 700 Poquonock Ave, Windsor | Storefront dry cleaner / laundromat in Windsor — not house cleaning at customers' homes |
| A to Z Power Washing LLC / Applyed Pressure LLC / New England Power Wash Inc / Connecticut Soft Wash | various Windsor / South Windsor listings | Exterior power/soft washing only — not house cleaning |
| CSC Services / Pero USA Cleaning Systems | South Windsor / Windsor listings | Duct cleaning / industrial cleaning systems and janitorial — not house cleaning at customers' homes |

## Leads summary

1 published email collected (see matching -leads.json): Belleza's Home Services — ct@bellezashomeservices.net (published on the business's own website). Emails are leads only — never written to business profiles. No email was published on the own sites checked for Tidy & Clean, Clever Cleaning Enterprise, or McCarthy Cleaning LLC.

## Counts

- Qualifying businesses: 4
- Listings: 4 (one per business, title "House cleaning in Windsor")
- Email leads: 1
- Excluded / skipped: 16 entries above, including 2 dedupe skips (Clean & Polished, Family Cleaners — both already used in tonight's earlier Day 46 cells) and the Hartford-cell businesses noted as dedupe skips
