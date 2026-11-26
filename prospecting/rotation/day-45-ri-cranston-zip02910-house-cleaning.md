# Day 45 — RI / Cranston / ZIP 02910 / House cleaning

- Cell: State=RI, City=Cranston, ZIP=02910, Category="House cleaning" (exact label as instructed)
- Date: 2026-11-26
- Expansion note: Only 2 qualifying businesses are based in 02910 itself (Avangelina's Cleaning Services, 744 Park Ave #6, Cranston 02910; Ana's Team, 4 Pond Street, Cranston 02910 — both addresses printed on their own websites). The remaining 3 are nearby Rhode Island operators whose own websites explicitly list Cranston in their service area (Tavares — Providence 02907, adjacent to 02910; América Braga Cleaning and Rhode Island Cleaning Service — both list Cranston by name on their own sites). This is the adjacent-area expansion, noted here as instructed. No business stated a ZIP-code list, so service_zips = ["02910"] for all five — no ZIPs invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Avangelina's Cleaning Services | (401) 545-4786 | House cleaning | Cranston | https://avangelinascleaningservices.com/ | avangelinascleaning@gmail.com — own site: https://avangelinascleaningservices.com/ | High — own site: "Family-owned residential and commercial cleaning in Cranston, RI", founded 2018 in Cranston, address 744 Park Ave #6, Cranston, RI 02910 printed on own site, phone (401) 545-4786 and email on own site; team cleans customers' homes and brings its own supplies | Business's own website + Google listing (matching phone/address) | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Ana's Team, LLC - Cleaning Services | (401) 867-1610 | House cleaning | Cranston | https://anasteamcleaningservices.com/ | anasteam25@gmail.com — own site: https://anasteamcleaningservices.com/ | High — own site contact info: "4 Pond Street, Cranston Rhode Island, 02910", +1 (401) 867-1610 and anasteam25@gmail.com; own site lists a House Cleaning service and says "We work in houses, offices and Airbnb stays" / "Tell us about your home" — cleaners come to the customer's home | Business's own website + Google listing (matching phone/address) | Grep of prospecting files for name and phone: no match |
| Tavares Cleaning Services | (401) 461-4495 | House cleaning | Cranston | https://www.tavarescleaning.com/ | sales@tavarescleaning.com — own site: https://www.tavarescleaning.com/ | High — own site: family-owned, "Residential Cleaning — One-time and recurring cleaning services designed around your home and schedule", and its published Service Area list includes Cranston by name; header prints "Serving Rhode Island & Southern Massachusetts Call 401-461-4495" and sales@tavarescleaning.com; Google listing (1093 Elmwood Ave, Providence, RI 02907 — adjacent to 02910) matches the phone | Business's own website + Google listing for address | Grep of prospecting files for name and phone: no match |
| América Braga Cleaning | (774) 248-4603 | House cleaning | Cranston | https://americabragacleaning.me/ | americabragacleaning@gmail.com — own site: https://americabragacleaning.me/ | High — own site: "House cleaning in Rhode Island & Massachusetts", "Edna Braga and her team clean homes…", "not a franchise or an app… You deal with the owner and her crew directly. No call center"; its FAQ service-area answer lists Cranston in Rhode Island; phone (774) 248-4603 and email printed repeatedly on own site | Business's own website | Grep of prospecting files for name and phone: no match |
| Rhode Island Cleaning Service | (401) 402-0110 | House cleaning | Cranston | https://rhodeislandcleaningservice.com/ | support@rhodeislandcleaningservice.com — own site: https://rhodeislandcleaningservice.com/ | Medium — own site: "Owner-operated, not a call center", a dedicated "Residential Cleaning — Locally owned house cleaning for Rhode Island homes" service, and its FAQ featured markets include Cranston; phone (401) 402-0110 and email on own site. Medium because the company is commercial-led ("we also clean homes") and based in West Greenwich | Business's own website | Grep of prospecting files for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Micro Clean Professional Services, Inc. | (401) 946-0166 / https://microcleanri.com/ | Own site is commercial-only: "Professional Commercial Cleaning Services" for healthcare facilities, offices, dealerships and campuses — no residential house cleaning confirmed from its own materials, despite its Cranston (Reservoir Ave) address |
| The Cleaning Authority — Cranston | (401) 519-4287 / https://www.thecleaningauthority.com/cranston | National franchise system, not an independent local operator |
| DBS Building Solutions of Rhode Island | (401) 369-8780 / https://dbsbuildingsolutions.com/ | Commercial office/building cleaning only, multi-state operator — no residential house cleaning confirmed |
| Ever Clean Cleaning Services | https://www.evercleancleanersco.com/ | Own site confirms Cranston service and home cleaning, but no public phone number could be verified on its own site or in public listings checked — excluded under the verifiable-phone gate |
| All In One Cleaning Service | (401) 403-3270, 1615 Cranston St, Cranston | Google listing only — no verifiable own website or own materials confirming residential house cleaning |
| Teddy and Friends Cleaning Services | (401) 644-0018, 29 Community Dr, Cranston | Listing only — no verifiable own website confirming house cleaning from its own materials |
| TotalCare Cleaning | https://www.totalcarecleaning.com/providence/ | Multi-city SEO template framing ("House cleaning planned for Providence… TotalCare Cleaning will service…") — future/planned framing, no verifiable local Cranston operator or local phone confirmed |
| SERVPRO of Providence / SERVPRO of East Greenwich / Warwick / Cranston | (401) 941-5500 / (401) 885-6200 | National franchise restoration chain; general cleaning is a sideline to restoration work, not a house-cleaning operator |
| Clean-Tech Power Wash / Palmer Power Washing | (401) 943-1522 / (401) 328-9607 | Power washing only — not house cleaning |

## Leads summary

5 published emails collected (see matching -leads.json), all from the businesses' own websites: Avangelina's Cleaning Services — avangelinascleaning@gmail.com; Ana's Team, LLC - Cleaning Services — anasteam25@gmail.com; Tavares Cleaning Services — sales@tavarescleaning.com; América Braga Cleaning — americabragacleaning@gmail.com; Rhode Island Cleaning Service — support@rhodeislandcleaningservice.com. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 5 (2 based in 02910; 3 nearby operators explicitly serving Cranston — expansion noted above)
- Listings: 5 (one per business, title "House cleaning in Cranston")
- Email leads: 5
- Excluded: 9 entries above; dedupe skips: 0 (no name or phone matches in ~/workspace/van-squad/prospecting/)

## Coordinator notes (2026-11-26)
- Tavares Cleaning Services was researched in both this cell and the Providence 02903 cell; it is Providence-based, so it was kept only in the Providence cell and removed from this cell's inserts before posting. Cell inserted count: 4.
