# Rotation Day 39 — Pennsylvania: Philadelphia × Handyman × ZIP 19111

- Researched: 2026-11-20 (nightly rotation, Day 39)
- Cell: PA × Philadelphia × ZIP 19111 (Fox Chase / Rhawnhurst, Northeast Philadelphia) × category "Handyman" (exact label)
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources, preferring the business's own site; never invented.
- Status: PREPARED 2026-11-20 — batch files only, NOT inserted (coordinator inserts centrally).
- Expansion note: 19111 itself yielded Northeast Philly Handyman and Tony Fix (whose own site quotes a customer explicitly naming 19111 among its neighbor ZIPs). To reach a solid cell, the sweep expanded to adjacent Northeast Philadelphia ZIPs 19115, 19116 and 19124 for operators whose own sites confirm in-home handyman work across Philadelphia / Northeast Philadelphia — noted per row.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Northeast Philly Handyman | (215) 620-4270 | Handyman | Philadelphia | http://northeastphillyhandyman.com/ | — none found | High — own site shows "Call (215) 620-4270", licensed & insured, home repairs/painting/drywall at customers' homes, owner Scott Schneider; Google listing at 4145 Farmdale Rd, Philadelphia (Northeast, ~1.1 mi from 19111) with same phone | Own website + Google Business listing | Grep of ~/workspace/van-squad/prospecting/ for name/phone returned no match |
| Tony Fix | (267) 679-8533 | Handyman | Philadelphia | https://tony-fix.com/ | — none found | High — own site: "call or text (267) 679-8533 — you get me, not an answering service", one craftsman working in Philadelphia homes, licensed & insured, based in Northeast Philadelphia; a review reproduced on its own site explicitly names 19111 among the neighbor ZIPs it serves; Google listing at 805 Red Lion Rd, Philadelphia (19115, adjacent) with same phone | Own website + Google Business listing | Grep for name/phone returned no match |
| Flawless Home Services | (215) 948-4210 | Handyman | Philadelphia | http://www.flawlesshomeservice.com/ | flawlesshomeservicesllc@gmail.com — own website http://www.flawlesshomeservice.com/ | Medium — own site (Flawless Home Services LLC) lists phone (215) 948-4210 and the email, describes insured in-home installation/handyman work for Philadelphia homeowners with same-day service; Google listing at 11919 Stevens Rd, Philadelphia (19116, adjacent) lists a different phone (267-808-3576), so the own-site phone was used per brief | Own website + Google Business listing | Grep for name/phone/email returned no match |
| Infinity Trade Group | (267) 752-0558 | Handyman | Philadelphia | http://infinitytradegroupinc.com/contact.php | carlinfinity1maintenance@gmail.com — own website http://infinitytradegroupinc.com/contact.php | High — own contact page gives address 2111 President St, Philadelphia, PA 19115 (adjacent to 19111), "Office- 267-752-0558" and the email, and offers handyman services / quotes before work at the customer's property; Google listing category Handyman with same phone | Own website + Google Business listing | Grep for name/phone/email returned no match |
| Home Exchange | (215) 966-1660 | Handyman | Philadelphia | https://homexchangepa.com/ | info@homexchangepa.com — own website https://homexchangepa.com/ | Medium — own site: family-run handyman & remodeling team, office 4651 Frankford Ave, Philadelphia, PA 19124 (adjacent Northeast ZIP), phones (215) 966-1660 / (856) 813-9364 and the email on the site, works in homes across Philadelphia; Google listing (as HandyMan Services PRO) at same Frankford Ave address | Own website + Google Business listing | Grep for name/phone/email returned no match |

## Dedupe
- Grep of all prior files in ~/workspace/van-squad/prospecting/ for every name, phone and email in this batch returned no matches. No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- McCloy TV and Handyman (1901 Grant Ave, Philadelphia; (215) 698-0768) — NOT INCLUDED: its own website could not be fetched/read during this run, so own-materials verification was not completed; listing data alone was not used.
- Pro Assembly by Evgenii (10914 E Keswick Rd, Philadelphia; (267) 243-9883), Banes Handyman Care ((215) 977-4718), Tec handyman services ((267) 310-8416), All Set HandyPro Services LLC ((215) 552-6365) — NOT INCLUDED: no verifiable own website found in this run to confirm mobile/on-site work from their own materials.
- National franchises / marketplace-only listings (Mr. Handyman, Ace Handyman Services, Angi/Thumbtack profiles with no local operator site) — excluded per the gates, not individually listed.

## ZIP / expansion note
- Target ZIP 19111 first in every service_zips array.
- Additional ZIPs are only each business's own base ZIP where published: Tony Fix 19115, Flawless Home Services 19116, Infinity Trade Group 19115, Home Exchange 19124. Northeast Philly Handyman carries 19111 only (no other ZIP stated on its own site).

## Email leads
- 3 published emails collected, all from the businesses' own websites: Flawless Home Services — flawlesshomeservicesllc@gmail.com; Infinity Trade Group — carlinfinity1maintenance@gmail.com; Home Exchange — info@homexchangepa.com (see the matching -leads.json). No other business in this cell publishes a readable email on its own site.
