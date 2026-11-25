# Day 44 — MA / Cambridge / ZIP 02139 / House cleaning

- Cell: State=MA, City=Cambridge, ZIP=02139, Category=House cleaning (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-25
- Note: 02139 Handyman was already covered (Pann Home Services, in the 02138 Handyman cell) — this is House cleaning, a different category, allowed.
- Expansion note: No qualifying business was found based in 02139 proper with its own materials. The cell expanded to adjacent Cambridge ZIPs as instructed: BraBos is based in 02141 (1035 Cambridge St), Cambridge Clean Co and Cleanadora are based in 02138. All three publish 02139 / all-Cambridge service on their own sites. No expansion outside Cambridge was used.
- Service-ZIP notes: service_zips = [02139] plus only ZIPs the business itself publishes. BraBos's own maid-service page states "We serve every Cambridge ZIP: 02138, 02139, 02140, 02141, 02142." Cambridge Clean Co and Cleanadora publish Cambridge-wide service and a Cambridge 02138 base, with no ZIP list, so only 02138 was added. No ZIPs were invented.
- Method: Public information only; business's own website first, then public listings (Google/Expertise). House cleaning at the customer's home had to be confirmed from the business's OWN materials. Bare listings with no own materials did not qualify.
- Territory note: Cambridge is thin for independent house cleaners with their own websites — most results are national franchises (MaidPro, Merry Maids, The Maids), multi-city booking/referral platforms, dry cleaners, or cleaners based in Boston/Somerville/Brighton/Medford/Malden/Waltham. 3 businesses qualified; quality was kept over the 5–9 target.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| BraBos Cleaning Services | (617) 380-4281 | House cleaning | Cambridge | https://braboscleaning.com/ | info@braboscleaning.com — https://braboscleaning.com/cleaning-services-in-cambridge-ma/house-cleaning-cambridge/ (own Cambridge house-cleaning page footer/contact block, with the Cambridge address and 617-380-4281) | High — Own Cambridge page: "Local, owner-operated — not a franchise" (founders Adriano and Lu; cleaners hired/trained directly, no subcontracting), house cleaning across every Cambridge neighborhood, team based locally at 1035 Cambridge St, Suite 3, Cambridge, MA 02141, with the Cambridge phone printed on the page; Google listing matches name, address and phone | Own website; Google listing corroborates | Checked /tmp/vs_dump.json (3,949 rows) by name + phone and grep of ~/workspace/van-squad/prospecting/ for name and phone (380-4281 / 3804281): no match. Note: a different BraBos number, (617) 992-4107, appears in some site footers/Expertise — the Cambridge location's own page number (617) 380-4281, matching its Google listing, was used |
| Cambridge Clean Co | (617) 201-1302 | House cleaning | Cambridge | https://cambridgecleanco.com/ | None collected — email on its own site is behind address-protection masking and not readable, so it was not guessed or recorded | High — Own residential-cleaning Cambridge page confirms professional cleaning for homes/apartments/condos across Cambridge ("We bring all the supplies… Our professional home cleaners arrive on time"), with phone (617) 201-1302 and address 10 Concord Avenue, #10, Cambridge, MA 02138 printed on the page; its own privacy policy (Cambridge Clean Co, LLC) repeats the same phone and address; Google listing matches | Own website; Google listing corroborates | Dump + prospecting grep for name and phone (201-1302 / 2011302): no match |
| Cleanadora | (857) 229-0422 | House cleaning | Cambridge | https://cleanadora.com/ | contact@cleanadora.com — https://cleanadora.com/services/house-cleaning-cambridge-ma/ (business block on its own Cambridge house-cleaning page, with phone) | Medium — Own Cambridge house-cleaning page says "Cleanadora is a local cleaning company serving Cambridge with trained, insured professionals," cleaners bring all tools/supplies to the home, and its business block prints One Mifflin Pl Suite 400, Cambridge, MA 02138, phone (857) 229-0422 and the email; FLAGS: One Mifflin Place is a shared/Harvard Square office address (possible virtual office), and the Day-44 Brookline cell file notes Cleanadora's Brookline page prints a second number, (401) 271-0408 — the Cambridge page itself consistently prints only (857) 229-0422, but the coordinator may drop this one if a single-phone / non-virtual-office standard is applied | Own website https://cleanadora.com/services/house-cleaning-cambridge-ma/ | Dump + prospecting grep for name and phone (229-0422 / 2290422): no insertion match — the only prospecting hit is the Brookline cell's exclusion note above, not a seeded business |

## Excluded

| Name | Reason |
|---|---|
| Maid Cleaning Service Cambridge / Maid Cleaning Boston (19 Pleasant St, Cambridge 02139, (857) 855-3795) | Same operation already excluded in the Day-44 Boston 02118 cell: its own site contradicts a local operator ("based in New York City" / "Maid in New York" template text) — multi-city template site, not a verifiable Cambridge operator |
| Spotless Clean by Peter / SC by Peter (scbypeter.com) | Fort Lauderdale-based multi-city operation (NYC, Boston, Miami, Tampa, Orlando) on its own materials — not a Cambridge local operator |
| AirRestore (130 Bishop Allen Dr, Cambridge, (207) 831-1219) | Own website could not be verified as a residential house-cleaning service (site root returned 404 on fetch; listing phone is a Maine 207 number) — house cleaning at homes not confirmed from its own materials |
| Alexandra Cleaning Services (55 Columbia St, Cambridge, (617) 412-0289) | Google listing only; no own website/materials found — house cleaning cannot be confirmed from its own materials |
| Champelysees Cleaning Company (536 Cambridge St, Cambridge, (617) 272-6312) | Google listing only; no own website found |
| R and R Cleaning Services (Cambridge, (617) 949-0240) | Google listing only; no verifiable own website for this Cambridge operator found (same-name sites found belong to other states) |
| Outstanding Cleaning Inc. ((774) 417-3167) | Genuine house cleaner on its own site, but its own site gives its base as 27 Church St, Somerville, MA 02143 — a Somerville business, outside this cell's city (available for a Somerville cell) |
| House Bliss Cleaning ((617) 780-6831), DMaidsPro ((857) 300-8800), Onix Cleaning Services ((617) 766-1835), Flying Prince House Cleaning (Brighton) | Based in Boston/Brighton on their own sites; serve Cambridge but are not Cambridge businesses — outside this cell's city |
| Lucia's Green Cleaning (Somerville), Eni's Cleaning (Medford), Val's Cleaning (Malden), PQ Cleaning & Organizing (Medford), Wash'em Clean (Waltham), Style's Cleaning (Brookline) | Based outside Cambridge on the Expertise Cambridge list / their own materials — outside this cell's city |
| MaidPro Boston, Merry Maids, The Maids of Boston | National franchise systems — excluded per rules |
| Tidy Here, Homeaglow, Handy Circle | Multi-city booking/referral platforms, no direct local operator — excluded (Tidy Here also excluded in earlier Boston/Philadelphia cells) |
| Cambridge Nature's Way Dry Cleaners, Golden Touch Cleaners, City Express Cleaners, Mid Cambridge Alterations | Dry cleaners / laundry storefronts, not house cleaning |
| Total Shine (totalshineboston.com) and Boston House Cleaning Maid (bostonhousecleaningmaid.com) | Listed as "Cambridge, MA" by Expertise, but their own sites could not be fetched/verified in this run (fetch failures) — no phone or Cambridge base could be confirmed from their own materials, so held out on quality rather than guessed |

## Leads summary

2 published emails collected, both from the businesses' own websites:
- BraBos Cleaning Services — info@braboscleaning.com — https://braboscleaning.com/cleaning-services-in-cambridge-ma/house-cleaning-cambridge/
- Cleanadora — contact@cleanadora.com — https://cleanadora.com/services/house-cleaning-cambridge-ma/

No emails were guessed. Cambridge Clean Co's email is masked on its own site, so it contributes no lead.

## Counts

- Qualifying businesses: 3 (02139 proper: 0 based; adjacent-ZIP expansion within Cambridge: 02141 ×1 — BraBos; 02138 ×2 — Cambridge Clean Co, Cleanadora; all publish 02139 service)
- Inserts: 3 businesses + 3 listings
- Leads: 2
- Excluded considered: 20+
- Duplicates skipped: 0 (all name/phone checks against /tmp/vs_dump.json and grep of ~/workspace/van-squad/prospecting/ returned no insertion matches)
