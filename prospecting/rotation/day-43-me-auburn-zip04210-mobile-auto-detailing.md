# Day 43 — ME Auburn ZIP 04210 — Mobile auto detailing

- Cell: State=ME | City=Auburn | ZIP=04210 | Category=Mobile auto detailing
- Date: 2026-11-24
- Expansion note: Only 1 qualifying business was found based in Auburn (04210) itself — Reflections Auto Care, whose own site lists mobile detailing among its services. Fewer than 3 qualified in 04210, so the cell expanded to adjacent ZIP 04240 (Lewiston) as instructed. The two Lewiston businesses keep their own city (Lewiston) in the city field. Lewiston is Auburn's twin city across the Androscoggin River (~2 miles), and both Lewiston operators serve the Lewiston-Auburn area.
- Service-ZIP note: service_zips follow the rule [target ZIP + only self-stated ZIPs]. Reflections Auto Care = ["04210"] (its own Auburn ZIP is the target ZIP). In and Out Mobile Detailing and Car Wash = ["04210", "04240"] — its own site states its address as 895 Lisbon Street, Lewiston, ME 04240-6126. H. J Mobile Detailing = ["04210", "04240"] — 04240 is the expansion ZIP for its Lewiston base (29 Moody St, Lewiston, per its Google listing). No business published a list of service-area ZIP codes, so no other ZIPs were added — ZIPs are never invented.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Reflections Auto Care | (207) 576-5389 | Mobile auto detailing | Auburn | https://www.reflectionsautocare.com/ | info@reflectionsautocare.com — https://www.reflectionsautocare.com/ | Medium — Own site lists "mobile detailing for ultimate convenience" among its services and prints phone (207) 576-5389 and email on the same site; based at 512 Washington St. North, Auburn — mobile is an additional service of a shop-based operator, so Medium not High | Own website https://www.reflectionsautocare.com/ ; Google listing (same phone/site/address) | Grepped prospecting/ for name, phone, and email — no match |
| In and Out Mobile Detailing and Car Wash | (207) 481-0243 | Mobile auto detailing | Lewiston | https://www.in-outdetailing.com/ | None published | High — Own site (branded "In & Out Detailing") headlines "Expert Detailing Services at Your Doorstep", "go-to solution for top-notch mobile detailing services" and "Trusted Mobile Detailing Service", with a mobile detailing van photo; phone (207) 481-0243 from its Google listing (own site uses a contact form, no phone printed in fetched text) | Own website https://www.in-outdetailing.com/ ; Google listing (phone, 895 Lisbon St, Lewiston) | Grepped prospecting/ for name and phone — no match; similar names in other states (In And Out Mobile Auto Cleaning, Ashburn VA, (800) 894-2950; In & Out Auto Detailing, Fargo ND, (701) 630-4348) are different businesses with different phones |
| H. J Mobile Detailing | (804) 205-0577 | Mobile auto detailing | Lewiston |  | None published | Medium — Its Google Business description, written by the business, says "Small mobile detailing that comes to you. We detail all motor vehicles and RVs" and prints "reach me at (804)205-0577"; no verifiable own website found (Instagram @hjmdetailing only), so Medium not High | Google Business listing (business-authored description + phone); Instagram https://www.instagram.com/hjmdetailing | Grepped prospecting/ for name and phone — no match |

## Excluded

| Name | Phone | Reason |
|---|---|---|
| Lee Auto Mall Auburn Detailing Center | (207) 241-2225 | Dealer detailing center at 809 Center St, Auburn — fixed shop only, no mobile service confirmed |
| DP detailing | (207) 740-4180 | Auburn listing (151 Manley Rd); no verifiable own website (Instagram only) and no mobile/come-to-you confirmation from its own materials — description is shop-style detailing/ceramic coat |
| Raymond's Reconditioning | (207) 713-0887 | Auburn listing (17 Temple St); no verifiable own website found, so mobile/on-site service could not be confirmed from the business's own materials |
| Pro Shine Auto Detail | (207) 240-3766 | Auburn listing (Turkey Ln); no verifiable own website found, so mobile/on-site service could not be confirmed from the business's own materials |
| Mike & Sons Detail | (207) 212-5453 | Lewiston (04240 expansion area); own site says "see us in person!" / "visit during normal business hours" at 1567 Lisbon St — fixed shop, no mobile service confirmed |
| Black Diamond Detailing | (207) 740-8963 | Lewiston (04240 expansion area); own Square site is appointment booking only ("Based in, Lewiston Maine 04240 — a local car detailing service") with no mobile/come-to-you confirmation from its own materials |
| F6 Detailing and Auto Service | (207) 240-8720 | Lewiston listing (132 Stetson Rd); no verifiable own website found, so mobile service could not be confirmed from its own materials |
| K&L Auto Detailing | (207) 376-5881 | Lewiston listing (1844 Lisbon St); its own description calls it "your One Stop Detailing Shop" — shop, no mobile confirmation; no verifiable own website (Instagram only) |
| Portland Performance - Auto Detailing & Ceramic Coatings | (207) 517-5555 | Lewiston location (1830 Lisbon St) of a shop-based detailing/ceramic-coating operation; no mobile service confirmed from its own materials |
| Splash N Go Car Wash / Mac's Supersonic Car Wash / Golden Nozzle Car Wash | various | Fixed-location car washes in Lewiston/Auburn — not mobile detailing operators |

## Leads summary

- 1 published email collected, from the business's own website (see leads JSON): Reflections Auto Care — info@reflectionsautocare.com (published on https://www.reflectionsautocare.com/).
- In and Out Mobile Detailing and Car Wash publishes no email on its site (contact form only).
- H. J Mobile Detailing publishes no email on its public listings.

## Counts

- Qualifying: 3 (1 in Auburn 04210 + 2 in Lewiston 04240 via expansion)
- Excluded: 10 entries checked and held out (7 named detailers + 1 dealer center + car-wash group)
- Leads: 1

## Coordinator insert decision (2026-11-24)
- H. J Mobile Detailing was REMOVED before insert: no verifiable own website; mobile confirmation rested on a listing description alone and its phone is an out-of-state (804) number — fails the own-materials gate. Inserted from this cell: 2.
