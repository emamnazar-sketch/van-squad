# Rotation Day 6 — Wyoming: Laramie × Handyman × ZIP 82070

- Researched: 2026-10-18 (Day 6)
- Cell: Wyoming × Laramie × ZIP 82070 × Handyman — THIN CELL: only 2 qualifying businesses inside 82070; the cell was expanded to adjacent Laramie ZIP 82072 for the third (see ZIP note).
- Sources: each business's own website first, then public listings (Google Business, HomeAdvisor). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED
- Honesty note: Laramie is a small market for this category. Several apparent candidates failed the gates (general contractors presenting as remodelers, a national lead-gen profile, a listing under a personal name with no corroboration, and a real local handyman with no verifiable phone). They are listed under Excluded rather than padded into the count. A HomeAdvisor profile for a "Honeydew Home Services" doing household chores could NOT be attributed to the Laramie business (a same-name handyman operates in Waunakee, WI), so it was not used as evidence for Honeydew Services LLC.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Honeydew Services LLC | (307) 314-5731 | Handyman | Laramie | https://honeydew-services-llc.quoteiq.site/ | — none found | Medium — Google Business listing gives 404 S Pine St, Laramie, phone (307) 314-5731, Handyman as its primary category, a link to the business's own site, and the business's own description ("We opened Honeydew with the idea to do small projects that were overlooked by bigger companies") — small-project work at customers' homes; the own site itself could not be fetched during this run (network/DNS failure in the fetch tool), so verification rests on the business's own Google listing | Google Business listing |
| Dawn's Handyman Services | (307) 343-0905 | Handyman | Laramie | — none found | — none found | Medium — Google Business listing gives E Clark St, Laramie, phone (307) 343-0905 and Handyman as its primary category; its business-supplied HomeAdvisor/Facebook profile ("Dawn's Handyman Services Facebook", serving Laramie, in business since 2017) describes workmanship for customers' projects "regardless of how large or small the job", confirming on-site home work | Google Business listing + HomeAdvisor profile |
| Little Tree Handyman Service | (307) 763-1068 | Handyman | Laramie | — none recorded (see reason) | — none found | Medium — ADJACENT-ZIP EXPANSION (82072): Google Business listing gives 2353 N 9th St A108, Laramie, phone (307) 763-1068 and Mon–Sat 7 AM–7 PM hours under the name "Little Tree Handyman Service"; the website linked on its listing (a business.site page) returned 404 during this run, so no website was recorded and verification rests on the business's own Google listing | Google Business listing |

## Dedupe
- Checked every name and phone in this batch against the live directory (vs_rest.py businesses name/phone pull, 327 active businesses) on 2026-10-18 — no matches for "Honeydew Services LLC", "Dawn's Handyman Services", "Little Tree Handyman Service", or the phones (307) 314-5731, (307) 343-0905, (307) 763-1068. The live directory contained no (307) Wyoming phones at all at check time.
- Grepped every name and phone against all files in ~/workspace/van-squad/prospecting/ on 2026-10-18 — no matches. No prior Wyoming prospecting files exist. No dedupe skips in this cell.
- Also checked the excluded candidates' names/phones (Highmark Construction Group / (307) 314-9711, Honey Tree Handyman, Hampton Enterprise LLC) against both sources — no matches, so none is a hidden duplicate of an existing listing.

## Excluded (checked, did not pass the gates)
- Highmark Construction Group (Google listing: 110 E Lyon St, Laramie; (307) 314-9711; own site http://www.highmarkconstructiongroup.com/) — EXCLUDED: its own website presents a Class B licensed design-build general contractor doing basement finishing, whole-home remodeling, additions and custom construction, with minimum project requirements — not a small-job handyman; the Google "Handyman" category does not override the business's own materials. Its own site does publish an email (info@hcgwyo.com), but it was NOT collected as a lead because the business is not included in this batch.
- Bustinduy Tom (Google listing: 420 E Ivinson Ave, Laramie; (307) 721-3878) — EXCLUDED: a single places listing under a personal name at a multi-tenant address shared with unrelated listings, with no website, no second public source, and no materials of its own confirming handyman work at customers' homes.
- Honey Tree Handyman (Laramie Home & Garden Show exhibitor list: "your 'You Name It Handyman Service' offering flooring, custom decks, fencing, painting/staining, yard makeover, junk removal, shed construction, home repair & maintenance", Facebook page only) — EXCLUDED: a real local handyman by its own show description, but no verifiable public phone could be found in any public source checked, so it fails the phone gate.
- Hampton Enterprise LLC (HomeAdvisor profile serving Laramie) — EXCLUDED: national lead-gen style profile listing dozens of cities across many states with Alabama (334) numbers and "just call and i will call back with a local number" — no local Laramie operator and no local phone.
- Handy Helpers (Google listing: 282 N Lincoln St, Laramie; (307) 761-2300) — EXCLUDED for this category: Google primary category is Cleaning Service (Contractor secondary), not a general handyman.
- Mountain Men Contractors, LLC (Porch listings: 1151 N McCue St, Laramie, WY 82072; (307) 277-7124) — EXCLUDED: a contractor / home-improvement company visible only on Porch lead-platform listings, with no own website or materials confirming small-job handyman service at customers' homes.
- Thatcher Home Services (Google listing: 265 N 7th St, Laramie; (307) 760-2217) — EXCLUDED for this category: primary category is Home Inspector, not a handyman.
- Hento's Building & Repair LLC (504 Hancock St, Laramie; (307) 343-0287) — EXCLUDED for this category: primary category is Concrete Contractor (concrete & stucco specialist), not a general handyman.
- Trade specialists appearing in the same searches (Eagle Plumbing and Heating, Curtright Plumbing & Heating LLC, Stonescape Steel Roofing) — not general handymen, not candidates for this category.

## ZIP note
- ZIP expansion WAS triggered: only 2 qualifying businesses were confirmed inside 82070 (Honeydew Services LLC, 404 S Pine St; Dawn's Handyman Services, E Clark St), below the cell minimum of 3, so the cell expanded to adjacent Laramie ZIP 82072, which added Little Tree Handyman Service (2353 N 9th St A108 — that address is in 82072, confirmed by Laramie property listings for 2353 N 9th St).
- Per the coordinator's batch shape, every business in this batch carries service_zips ["82070"] only: no business in the batch states any additional service-area ZIP of its own, so none was added or invented.
- Full set of ZIPs in this batch's service_zips: 82070. (82072 appears only as Little Tree Handyman Service's base ZIP in this note.)

## Email leads
- 0 published emails collected. None of the three included businesses publishes a readable email address on its own website or public listings, so the matching -leads.json is an empty array. (The one email found in this cell, info@hcgwyo.com on Highmark Construction Group's own site, belongs to an excluded business and was not collected.)
