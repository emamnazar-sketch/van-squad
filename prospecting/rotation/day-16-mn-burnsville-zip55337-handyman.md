# Day 16 — Minnesota | Burnsville | ZIP 55337 | Handyman

- Cell: MN × Burnsville × 55337 × "Handyman" (exact site taxonomy label, verified in ~/workspace/van-squad/js/data.js)
- Researched: 2026-10-26 (Day 16 rotation, Wave 2)
- Method: public information only — business's own website first, then public listings (Google Business). No insertion performed by this worker; batch prepared for central insert.
- On-site gate: every included business performs handyman/repair work at the customer's home, confirmed from its own materials or its Google listing's Handyman / In-Home Service categorization.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| MN Helper | (320) 377-9969 | Handyman | Burnsville | https://mnhelper.com/ | None published | High — own site read directly: phone 320-377-9969 on the page, TV/general mounting and small home projects done in customers' homes; Google listing address 12550 Portland Ave, Burnsville | Own website (read directly); Google Business listing |
| Twin Cities Handywoman | (612) 440-3604 | Handyman | Burnsville | http://www.twincitieshandywoman.com/ | None published | High — own site read directly: lists "Twin Cities (and surrounding), MN 55337 USA" and phone 612-440-3604, licensed/insured solo handywoman doing painting, carpentry, drywall and fix-it work in customers' homes; Google address 1709 Commonwealth Dr, Burnsville | Own website (read directly); Google Business listing |
| Mosaic Services LLC | (612) 501-4158 | Handyman | Burnsville | http://mosaicservicesllc.com/ | None published | High — own site read directly: phone (612) 501-4158 on the page, dedicated Handyman Services section (repairs, maintenance, painting, carpentry), family-owned, free in-home estimates across the Twin Cities; Google address 800 Knob Hill Rd, Burnsville | Own website (read directly); Google Business listing |
| Soriano Handyman & Construction | (612) 385-6727 | Handyman | Burnsville | http://www.sorianohandyman.com/ | None published | Medium — Google listing gives Burnsville address (1500 McAndrews Rd W #222) and phone; own site confirms family-owned handyman/construction work in homes (painting, drywall, flooring, kitchen/bath updates, license BC740064) but the phone was not visible on the homepage read in this pass | Google Business listing; own website (read directly) |
| JJP Handyman Service | (612) 396-5914 | Handyman | Apple Valley | https://jjpservice.com/ | None published | Medium — Google listing categorizes it Handyman with its own website and public phone; based at 13814 Holyoke Ln, Apple Valley, ~2 miles from 55337 on the Burnsville border (adjacent south-metro); own site was not directly readable in this pass | Google Business listing |

## Dedupe

- Every candidate name AND phone checked against ~/workspace/goals/van-squad-directory-website/hidden_files/day16-dedupe.txt (1,313 live businesses) and grep of ALL files in ~/workspace/van-squad/prospecting/, including tonight's Day 16 Wave 1 files. Result: NO matches for any of the 5 included businesses — no name or phone collisions.
- Wave 1 Saint Paul handymen (Faschingbauer Services, AMC Services, Candor Services, St Paul Handy Man, C's Handyman Services, MattWorks LLC, Twin Cities Handyman Home Service LLC) were specifically re-checked: none is re-listed here. Note the similar names are different businesses: "Twin Cities Handywoman" (Burnsville, Samantha, 612-440-3604) is NOT "Twin Cities Handyman Home Service LLC" (Saint Paul, 763-354-8170).

## Excluded

- Precision Handyman Services, (612) 760-4560 — Google listing shows a Burnsville address (1609 County Rd 42 W), BUT its own website (precisionhandymanllc.com) states it is in Marinette, WI 54143 and serves Marinette, Oconto, and Brown Counties, Wisconsin. Own materials contradict Burnsville service — excluded (its published email dennis@precisionhandymanllc.com belongs to the Wisconsin business and was NOT collected as a lead).
- Mr. Handyman of Shakopee - Lakeville - Eagan, (952) 213-0808, Savage — franchise network, excluded per brief.
- Ace Handyman Services franchise locations — franchise network, excluded per brief.
- Handyman Connection franchise locations — franchise network, excluded per brief.
- HandymanTonyBLlc / Handyman Tony B, Savage, (763) 373-4039 — its listed website handymansouthside.com resolves to a Glasgow, UK handyman company; website/phone ownership could not be verified from the business's own materials — excluded.
- Handyman For Home LLC, Eagan, (612) 208-8208 — qualifying on its Google listing (Handyman + In-Home Service), but held out: its own website returned only a payment-methods page in this pass, so on-site work could not be confirmed from its own materials; JJP (closer to 55337) was taken as the adjacent-metro slot instead.
- Fix it by Jason, Savage — Google status "Possibly Temporarily Closed" — excluded.
- Inside Out Solutions, Prior Lake — Google status "Possibly Temporarily Closed" — excluded.
- City Wide Maintenance of MN (Bloomington) and Real(x) Strategies, LLC (Bloomington) — commercial/facilities focus, not residential in-home handyman operators — excluded.
- Angi / HomeAdvisor pros — lead-gen listings with no independent business source, excluded per brief.

## ZIP note

No expansion was needed to reach 3+ businesses: four businesses are Burnsville-based, three of them inside or directly tied to 55337 (Twin Cities Handywoman's own site publishes 55337; MN Helper at 12550 Portland Ave and Mosaic Services at 800 Knob Hill Rd are in the 55337 area). One adjacent south-metro business was added: JJP Handyman Service in Apple Valley (~2 miles from the cell, on the Burnsville border). No business published its own service-ZIP list, so service_zips = ["55337"] for all rows.

## Count

- Included: 5 businesses (3 High confidence, 2 Medium), 5 listings.
- Published email leads: 0 (none of the 5 publishes a business email on its own site or listing — see -leads.json, empty array).
- Files: day-16-mn-burnsville-zip55337-handyman.md / -inserts.json / -leads.json. Prepared only — NOT inserted.
