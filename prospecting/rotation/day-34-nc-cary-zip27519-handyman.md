# Rotation Day 34 — North Carolina: Cary × Handyman × ZIP 27519

- Researched: 2026-11-13 (nightly rotation, Day 34, Wave 2)
- Cell: Cary, NC — ZIP 27519 — Category "Handyman" (exact label)
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).
- Expansion note: No expansion needed — 6 qualifying businesses found in Cary / directly serving 27519. Gary The Handyman is based in 27519 itself; the others are Cary-based or explicitly name Cary in their own service-area copy.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Gary The Handyman | (919) 414-7941 | Handyman | Cary | https://garythehandyman-nc.com/ | gary@garythehandyman-nc.com — own website https://garythehandyman-nc.com/ | High — own site: address "1142 Alston Rdg Ct, Cary, NC 27519. 919-414-7941" and email on site; "FREE ON SITE ESTIMATE", work scheduled "to be done on your home", Cary listed first in service cities; 40+ years carpentry/handyman | Business's own website |
| Six A's Handyman Service | (919) 271-8229 | Handyman | Cary | http://sixashandyman.com/ | builtforutoc@yahoo.com — own website http://sixashandyman.com/ | High — own site titled "Cary Handyman, Six A's Handyman Service", phone (919) 271-8229 and email on site, Google listing address 6830 Crescent Moon Ct, Cary with same phone/website; crew works in customer's home ("safe and respectful presence in your home", cleans job site daily) | Business's own website + Google listing |
| You First Repairs LLC | (919) 283-1177 | Handyman | Cary | http://www.youfirstrepairs.com/ | — none found (form only) | Medium — own site: phone 9192831177 on site matching Google, "Locally Owned And Operated", "Servicing Apex, Cary, Clayton, Durham, Raleigh", "We'll be at your home on time"; Google category is Handyman and Google address is 150 Preston Executive Dr Ste 201, Cary — own site leans appliance repair / property maintenance, hence Medium for the Handyman label | Business's own website + Google listing |
| CRG Home Services | (919) 412-2272 | Handyman | Cary | https://crghomeservices.com/ | CRGHomeServicesInc@gmail.com — own website https://crghomeservices.com/ | Medium — own site footer: phone 919-412-2272 and email CRGHomeServicesInc@gmail.com on site, "employees are completely qualified and insured to perform work in your home", handyman/repair services listed; Google listing address 108 Ackworth Ct, Cary with same website but a DIFFERENT phone (919) 335-5531 — discrepancy noted, own-site phone used per prefer-own-site rule, hence Medium | Business's own website + Google listing |
| Handyman Warriors LLC | (919) 971-5217 | Handyman | Cary | https://www.handymanwarriors.com/ | — none found | Medium — own site: title "Local Experienced Handyman Cary, Apex, Raleigh, Durham, Holly Springs", service area "Raleigh - Cary - Morrisville - Apex...", family-owned, home repair at customers' homes; phone (919) 971-5217 and Cary address 1950 Grisdale Ln from Google listing only (own-site fetched footer shows an unrelated Glendale, CA template artifact, not used), hence Medium | Business's own website + Google listing |
| Craftsman Direct | (919) 612-9000 | Handyman | Cary | https://www.craftsmandirect.com/ | — none found | Medium — own site Morrisville handyman page: tel:919-612-9000 on site matching Google, "locally owned and operated handyman... company operating in North Carolina", residential home improvements/repair in Morrisville and surrounding area with a dedicated Cary page linked ("Home Improvement Cary NC"); based in Morrisville (10520 Chapel Hill Rd) serving Cary, not Cary-based, hence Medium | Business's own website + Google listing |

## Dedupe
- Live DB (/tmp/vs_active_day34_w2.json, 3,149 rows): checked every name and phone-digit string above — no matches. No business with service_zips containing 27519 exists in the file.
- Prior prospecting files in ~/workspace/van-squad/prospecting/ (incl. day-34 files): grep for every phone, email, and distinctive name (Gary The Handyman, Handyman Warriors, CRG Home, You First Repairs, Six A's, Craftsman Direct) returned no matches.

## Excluded (checked, did not pass the gates)
- Mr. Handyman (incl. Mr. Handyman of Western Wake County, (919) 626-3348) / Ace Handyman Services Durham Chapel Hill ((984) 343-0497) / Kaminskiy Care + Repair ((919) 585-1114) / Cransten Handyman and Remodeling — national franchises / multi-state chains, excluded per gates.
- RROG Home Repairs (Cary; (919) 656-8040 on Google) — EXCLUDED: own website https://rroghomerepairs.com/ is an empty WordPress "Hello world!" placeholder with no phone, services, or on-site confirmation from own materials.
- itsmadebykevin (Morrisville; https://www.itsmadebykevin.com/) — EXCLUDED: no phone published on own website or Google listing found; no verifiable public phone.
- DF Enterprise NC LLC (Morrisville; (786) 870-2116) — EXCLUDED: only phone is a 786 (Miami) number inconsistent with a local Cary operator; local presence not verifiable from own materials.
- Home Repairs Handyman / the-handyman-networkusa.com (Apex page; (866) 451-2346) — EXCLUDED: toll-free-only lead-gen network, no local operator.
- Andrews Landscape and Home Improvements (Cary; (919) 339-0151), Stu Dill Handyman Services (Cary; (919) 413-0031), Handyman Henshaw (Cary; (919) 239-5946, Houzz only) — EXCLUDED: no own website found to confirm current on-site handyman service from own materials.

## ZIP / service_zips note
- Target ZIP 27519 for every business: service_zips = ["27519"] only. No business publishes a ZIP-code service list on its own site (city lists only), so no additional ZIPs were added, per instructions. Gary The Handyman's own published address is in 27519 itself.

## Email leads
- 3 published emails collected, all from the businesses' own websites: Gary The Handyman — gary@garythehandyman-nc.com; Six A's Handyman Service — builtforutoc@yahoo.com; CRG Home Services — CRGHomeServicesInc@gmail.com (see matching -leads.json). No other included business publishes a readable email on its own site.
