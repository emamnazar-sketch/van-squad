# Day 47 — NJ, New Brunswick, ZIP 08901, Handyman

Cell: State=NJ, City=New Brunswick, ZIP=08901, Category="Handyman" (exact label)
Date researched: 2026-11-28

No adjacent-ZIP expansion was needed: 4 qualifying businesses were confirmed for New Brunswick / 08901 service. Two are based in New Brunswick itself; two are nearby Central Jersey operators whose own sites explicitly cover New Brunswick or Middlesex County (which contains 08901).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Ace Handyman Services Central Jersey | (732) 201-6742 | Handyman | New Brunswick | https://www.acehandymanservices.com/offices/central-jersey | — none found | Medium — franchise location, but a distinct local operator: its own Central Jersey page is titled "Local Handyman Services in New Brunswick, NJ," prints the local address 317 George Street, Suite 320-2766, New Brunswick NJ 08901 and the same phone, and describes residential handyman work in customers' homes; not a call-center/lead-gen listing with no local operator | Own website (Central Jersey location page) + public listing (same phone/address) | Grep of ~/workspace/van-squad/prospecting/ and day47-dedupe-baseline.json for name and phone: no match. Other Ace locations in other states in the dedupe files are different local operators with different phones |
| CJ Handyman Services | (732) 210-7035 | Handyman | New Brunswick | https://cjhandymanservicescopy.com/ | — none found | Medium — own site confirms "Premium home maintenance and precision craftsmanship servicing New Jersey" (work done in customers' homes); public listing gives its New Brunswick address, 253 Livingston Ave, and the same phone | Own website + public listing | Grep of prospecting/ and baseline for name and phone: no match |
| JJB Handyman Service | (609) 672-5949 | Handyman | New Brunswick | https://www.jjbhandymanservice.com/ | — none found | High — own site carries a dedicated New Brunswick page ("Complete Home Improvement Services… in New Brunswick, NJ") describing residential improvement/repair work in New Brunswick homes, single-visit on-site work, and prints the same phone (609) 672-5949; based in East Windsor, NJ | Own website (New Brunswick page: https://www.jjbhandymanservice.com/complete-home-improvement-services-in-new-brunswick-for-every-budget) | Grep of prospecting/ and baseline for name and phone: no match |
| Henry's Improvements | (908) 902-2685 | Handyman | New Brunswick | https://www.henrysimprovements.com/ | — none found | Medium — own handyman page ("Handyman in Middlesex County, NJ") confirms in-home repairs/installs (doors, drywall, TV mounting, assembly) with the same phone (908) 902-2685 printed on it, and the business's own site shows work in New Brunswick (its flooring page lists New Brunswick); family-owned, Perth Amboy-based, serving homeowners across New Jersey | Own website (handyman page: https://www.henrysimprovements.com/handyman-services-nj) | Grep of prospecting/ and baseline for exact name and phone: no match ("Henry" substring hits in the baseline are unrelated businesses) |

## Excluded

- Lucky 17 Handyman Service (North Brunswick, (732) 718-4743) — excluded: its listed website (lucky17handymanserviceonline.vpweb.com) is dead — Webs.com has shut down — so no own materials confirm on-site home service.
- Lodi Handyman Pro (North Brunswick, (646) 959-8917) — excluded: own site confirms general in-home handyman work but never names New Brunswick or Middlesex County service, and the phone could not be verified on its own site in this run.
- Bme Handyman Services (North Brunswick, (440) 219-7141) — excluded: its Square site returns only a checkout/cart page; no own materials confirming on-site home service or New Brunswick coverage, and the phone is a non-NJ area code with no corroboration.
- East Brunswick Handyman / Central Jersey Home Services LLC ((609) 375-0098) — excluded for this cell: its own "Towns We Serve" list names East Brunswick, North Brunswick, Piscataway, Milltown and others but does NOT include New Brunswick.
- Handyman Near You NJ / Hanfude LLC ((609) 721-4564) — excluded for this cell: its own site lists South Brunswick, East Brunswick, Princeton, Plainsboro and other Central NJ towns but does not name New Brunswick. (It does publish info@handymannearyounj.com on its own site, but it is not in this batch, so it is not in leads.json.)
- On Demand Home Services, LLC (Kendall Park, (732) 201-2030) — excluded: own site confirms owner-operated in-home handyman work, but no New Brunswick / Middlesex County service area could be confirmed from its own materials in this run.
- Done Right Handyman Services LLC (Somerset, (973) 512-8522 per Houzz) — excluded: found only on listing platforms (Houzz) with no verifiable own website confirming on-site service; conflicting phone numbers across listings.
- Joshua's Handyman & Cleaning services LLC ((908) 285-7741), General Services ((732) 213-1556), Mario's Handyman ((747) 477-6257 — non-NJ area code), Residential Repair Service ((732) 548-8282), B&H Handyman Services ((732) 795-9208), DAMAHIS ((908) 308-9166) — excluded: public listings only, with no own website/materials confirming on-site home service in this run; insufficient verification under the own-materials gate.
- Mr. Handyman of N Monmouth and E Middlesex Counties — excluded: national franchise chain location based in Matawan; no New Brunswick-specific local operator confirmation.

## Leads summary

- No business in this batch publishes an email address on the sources found. Ace Handyman Services Central Jersey, CJ Handyman Services, JJB Handyman Service, and Henry's Improvements were each checked on their own websites/contact pages — no published business email.
- leads.json is therefore an empty array.

## Counts

- Qualifying businesses found: 4
- Businesses in inserts.json: 4
- Listings in inserts.json: 4
- Email leads in leads.json: 0
- Duplicates skipped: 0
