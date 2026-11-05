# Day 26 — Kentucky × Bowling Green × ZIP 42104 × Mobile auto detailing

- **Cell:** KY | Bowling Green | 42104 | Mobile auto detailing (exact label)
- **Date:** 2026-11-05 (Day 26 run)
- **Expansion:** None needed — 3 qualifying businesses found serving Bowling Green / 42104. All three are Bowling Green city-wide mobile operators (Alchemy's studio is in 42103 and AMB Pro's shop is in 42101, but both confirm mobile service across Bowling Green from their own materials, and This Guy Mobile Details is based in Bowling Green with no fixed shop address); no business below publishes a ZIP list, so the adjacent-ZIP rule was not triggered as a separate sweep — the whole Bowling Green pool was researched.
- **Dedupe:** Every candidate name AND phone checked against (a) `~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json` (2,217 businesses) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/` (including tonight's Day-26 Lexington and Louisville files). No name or phone matches for the 3 businesses below; the dump contains no Bowling Green businesses and no (270) phones at all.
- **Phone rule:** All phones are Bowling Green local (270) numbers, verified on the business's own website; none is toll-free-only.
- **Mobile/on-site:** Each business's own materials confirm detailing performed at the customer's home/driveway/office in Bowling Green (see reasons; This Guy Mobile Details and Alchemy Detail Works are graded Medium for the caveats noted). Bowling Green is a thin market for this category — most local detailers are fixed shops or listing-only operators (see Excluded) — so 3 is the honest count; it was not padded.
- **service_zips:** No business below publishes a ZIP list on its own site, so all get ["42104"] only — city/neighborhood service-area names were NOT converted into ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| This Guy Mobile Details | (270) 990-7539 | Mobile auto detailing | Bowling Green | https://this-guy-mobile-details.ueniweb.com/ | — none published on its own site that could be verified (site offers a "Send a Message" form only; no readable address) | Medium — own site: business is named "This Guy Mobile Details," "We're a passionate team of auto detailers based in Bowling Green," offering interior and exterior vehicle cleaning with "All the tools to carry out interior and exterior vehicle cleaning," and "Call us today on +12709907539" / "(270) 990-7539" printed on the site; graded Medium because the homepage does not spell out a "we come to your home/driveway" sentence as explicitly as the High peer below — mobile is carried by the business name and its mobile-detailer presentation | https://this-guy-mobile-details.ueniweb.com/ |
| Alchemy Detail Works | (270) 299-5815 | Mobile auto detailing | Bowling Green | https://alchemydetailworks.com/home | — none used (its contact page email renders only as an obfuscated "[email protected]" placeholder, so per rule it was NOT recorded) | Medium — own site: "Visit our Bowling Green detailing studio or ask about select mobile detailing services," its contact page is titled "Contact Alchemy Detail Works \| Mobile Auto Detailing Kentucky," studio at 400 Red Squirrel St, Suite 300, Bowling Green, KY 42103, "serves most of Central Kentucky," and "(270) 299-5815" printed on the site; graded Medium because it is a studio-first business and its mobile offer covers only select services on request | https://alchemydetailworks.com/home |
| AMB Pro Detailing & Ceramic Coating | (270) 780-4793 | Mobile auto detailing | Bowling Green | http://ambprodetailing.org/ | info@ambprodetailing.org — http://ambprodetailing.org/ (own site footer / Legal block) | High — own site FAQ: "Do you offer mobile detailing in Bowling Green? Yes — we bring a fully self-contained mobile rig (water + power) to homes, offices, and fleet lots throughout Bowling Green and Warren County," shop at 2575 Louisville Rd, Unit 205, Bowling Green, KY 42101, "call/text (270) 780-4793 to book" with the phone and the email printed on the site | http://ambprodetailing.org/ |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| AMB Pro Detailing & Ceramic Coating | info@ambprodetailing.org | http://ambprodetailing.org/ |

1 lead — see `day-26-ky-bowling-green-zip42104-mobile-auto-detailing-leads.json`.

Note on Mobile Auto Pros LLC's email: its own site prints TheMobileBrakePros@protonmail.com, but the business itself was excluded for this cell (see below), so the address was NOT recorded as a lead.

## Excluded

- **D's Mobile Detailing and Pressure Washing** — Google listing phone (270) 901-7333 and "Mobile" in the name, but no own website could be found, so mobile service could not be confirmed from the business's own materials; excluded.
- **Law's Mobile Detailing** — Google listing only, no own website found, and its listing phone is a non-local (251) number; excluded.
- **Spray and Pray Auto Detailing** — Facebook-only presence, phone (270) 784-8375 on the listing, no verifiable own website confirming mobile service from its own materials; excluded.
- **Bowling Green Wash and Detail (BGWash)** — Facebook-only presence, phone (270) 791-7100 on a listing mirror, no own website and no mobile/come-to-you confirmation from its own materials; excluded.
- **Exquisite Detailing** — a local directory listing claims "mobile services that come to you" and its Instagram listing gives phone (270) 792-4151, but no own website for the Bowling Green business could be found (the same-named website found is a different business in Middletown, DE); excluded.
- **Magee's Mobile Detailing, L.L.C.** — Kentucky Secretary of State record puts it at 5002 Worth Way Apt E3, Bowling Green, KY 42101 (formed 2021), but no own website or verifiable public phone could be found; excluded — no verifiable public phone.
- **Mobile Auto Pros LLC** — own site (mobileautopros.netlify.app) is a fully mobile mechanic ("Expert Car Repair Brought Directly To You," phone (270) 943-7905), but its own service menu lists only brakes, diagnostics, oil/fluids, batteries and A/C — no auto detailing service is offered on its own site (detailing appears only in a third-party listing description); excluded for this detailing cell.
- **Elite Detailing** — own site (elite-detail.com, (270) 320-6176, 810 Old Morgantown Rd) is a fixed shop ("bring it back with no questions asked," garage photos) with no mobile/come-to-you service confirmed on its own materials; excluded as fixed shop.
- **Greenwood Auto Detail** — own site headline is "Auto Detailing Shop in Bowling Green, KY" (greenwoodautodetail.com, (270) 779-9330, 102 Corvette Dr); it offers pick-up and delivery of the vehicle, not detailing at the customer's location; excluded as fixed shop.
- **AMB Pro note / Type-One Auto Paint Protection** — Type-One (typeone661.wixsite.com, (270) 777-6055) shares the 2575 Louisville Rd address with the included AMB Pro but is a separate paint-protection shop listing with no mobile detailing confirmed on its own materials; excluded as fixed shop.
- **The Detail Shop / Cheetah Clean Auto Wash; Waterworks Auto Wash & Detail** — fixed car-wash chain locations in Bowling Green (2270 Scottsville Rd, (270) 842-0286), detailing done at the wash, no mobile detailing; excluded.
- **Lavish Detail; One Stop Auto Detailing; ASC Detailing** — fixed-shop detailers at street addresses in Bowling Green (2319 Russellville Rd Ste D; 1052 Searcy Way; 1046 Searcy Way C) with Instagram/listing-only presences and no mobile service confirmed from their own materials; excluded as fixed shops / listing-only.
- **The Design Lott** — own site (thedlott.com) is an auto paint/design shop with a non-local (407) phone and no detailing or mobile service; excluded.
- **Tint World #118 (Bowling Green)** — national chain storefront (416 US 31W Byp), detailing at the store, no mobile detailing; excluded as fixed chain shop.
- **Fast Freddy's Car Wash; Tommy's Express Car Wash; Magic Touch Car Wash** — fixed car-wash locations/chains, no mobile detailing; excluded.

## Files

- `day-26-ky-bowling-green-zip42104-mobile-auto-detailing.md` (this file)
- `day-26-ky-bowling-green-zip42104-mobile-auto-detailing-inserts.json` — 3 businesses + 3 listings, validated with `python3 -m json.tool`
- `day-26-ky-bowling-green-zip42104-mobile-auto-detailing-leads.json` — 1 lead, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
