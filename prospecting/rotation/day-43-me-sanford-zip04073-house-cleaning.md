# Day 43 — ME — Sanford — ZIP 04073 — House cleaning

- **Cell:** State=ME, City=Sanford, ZIP=04073, Category="House cleaning" (exact label verified in js/data.js)
- **Date:** 2026-11-24
- **Expansion note:** Only 1 business qualified in 04073 itself, so the cell was expanded to the adjacent ZIP 04090 (Wells) as instructed. ZIP 04002 (Alfred) was also swept — it yielded no qualifying business (see Excluded). Each included business keeps its own city (Sanford / Wells).
- **Service-ZIP notes:** service_zips contain only the target/expansion ZIP for each business plus ZIPs the business itself states. Neither included business publishes a ZIP-code service-area list in fetchable text, so no extra ZIPs were added — adding more would be inventing them. Danielle's Dusters gets [04073] (its Sanford address ZIP); Marina Cleaning Services, Inc gets [04090] (its own site prints "Po Box 855 | Wells | Me | 04090").

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Danielle's Dusters | (516) 343-8757 | House cleaning | Sanford | http://www.daniellesdusters.com/ | — none published on its own site (contact form / links only) | Medium — own website has a dedicated "Residential Cleaning" service (weekly/bi-weekly/monthly home cleanings, dusting, kitchen/bathroom, vacuuming/mopping) confirming cleaning at customers' homes; phone and Sanford address (8 Summer St) come from its public Google listing, not its own site, and the 516 area code is out-of-area — flagged for claim-time re-verification | Business's own website (residential service) + public Google listing (phone/address) | Grepped all of ~/workspace/van-squad/prospecting/ (incl. all Day-43 files) for name and phone: no match |
| Marina Cleaning Services, Inc | (207) 337-3315 | House cleaning | Wells | http://www.marinacleaning.com/ | — none published on its own site (contact form only; site mentions email contact generically but prints no address) | High — own website is titled "House Cleaning, Commercial Cleaning" and describes in-home residential work in detail (free walk-through of the home, initial deep cleaning, regular weekly/bi-weekly visits to the home, "Your home is your castle"); phone and Wells 04090 address printed on its own site; locally owned and operated | Business's own website | Grepped all of ~/workspace/van-squad/prospecting/ (incl. all Day-43 files) for name and phone: no match |

## Excluded

| Business | Phone / location | Reason excluded |
|---|---|---|
| Majik Cleaning Services (Wells, 04090) | (207) 289-5688 — own Wix site confirms service at clients' homes and businesses, Wells, ME 04090 | DEDUPE SKIP per the same-name rule: the exact name "Majik Cleaning Services" is already in the directory from Day 40 (New York, NY 10001, (212) 545-7830, majikservices.com). Different operator and different phone, but the task rule is same name OR same phone = skip, so it was not included and not renamed to evade the check |
| Wentworth Cleaning Co. (Sanford) | (207) 206-5492 | Own materials are only an Instagram bio offering generic scheduled cleaning / janitorial — it does not explicitly confirm residential cleaning at a customer's home, so it fails this cell's own-materials residential gate |
| Evergreen State Cleaners (Sanford) | (207) 849-2076 | Instagram / listing only; own description is generic cleaning + landscaping for York County, with no explicit residential in-home house cleaning confirmed from its own materials |
| Mrs Clean Cleaning Service (Sanford) | (207) 432-2889 | Bare directory/Google listing only — no own website or own materials found confirming residential cleaning at customers' homes |
| Postline Scrubbies (Sanford) | (207) 432-6461 | Bare directory listing only — no own materials found |
| Spotless Cleaning (Sanford) | (207) 490-1067 | Bare directory listing only — no own materials found; generic name |
| Rescue pro Cleaner (Sanford) | (207) 703-5107 | Bare directory listing only — no own materials found |
| Clean One Janitorial (Springvale / Sanford 04073) | (207) 490-2802 | Commercial-only: its own website heads itself "Southern Maine's Premier Janitorial Service" / "Complete Commercial Cleaning Services" for businesses and offices — no residential house cleaning offer |
| L & R Cleaning (Alfred, 04002) | (207) 324-7065 | Bare listing only, listed as a carpet cleaner / carpet & flooring store — no own materials confirming residential house cleaning; storefront element |
| Sweetly Clean (South Berwick area) | (603) 605-0210 | Its own website states its Maine service area is only South Berwick, Berwick, and North Berwick — it does not serve this cell's ZIPs (04073 / 04090 / 04002) |
| Merry Maids of Maine (Scarborough) | (207) 501-2256 | National franchise chain — excluded per the franchise-chain rule; also based in Scarborough, not this cell |
| SERVPRO of Southern York County (Springvale) | (207) 324-4400 | Franchise damage-restoration service, not house cleaning |
| Graves & Sons Carpet & Upholstery Cleaning (Sanford) | (207) 391-2290 | Carpet/upholstery specialty, not general house cleaning |
| Paul's Junk Hauling Services (Sanford) | (207) 206-0272 | Junk hauling, not house cleaning |
| Homeaglow / Hello Cleaners / CleanSpace (Sanford pages) | various | National lead-gen / marketplace platforms with no local operator of their own — excluded |

## Leads summary

- No included business publishes a business email address on its own website or public listing in fetchable text (both use contact forms only), so no leads were collected for this cell.
- Note: the excluded Wentworth Cleaning Co. publishes wentworthcleaningco@gmail.com in its Instagram bio, and the excluded Clean One Janitorial publishes info@cleanonejanitorial.com on its site — neither was recorded as a lead because neither business is in this cell.

## Counts

- Researched / considered: 17 named candidates
- Included (qualifying): **2** — Sanford (04073): 1; Wells (04090, expansion): 1; Alfred (04002, expansion): 0
- Excluded: 15 (including 1 dedupe skip — Majik Cleaning Services, Wells)
- Email leads collected: **0**
- Files: this .md, the matching -inserts.json (2 businesses + 2 listings), and the matching -leads.json (empty array)
- No insert, no data.js edit, and no git action were performed by this research task.
