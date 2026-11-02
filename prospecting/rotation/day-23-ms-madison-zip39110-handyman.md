# Day 23 — Mississippi — Madison — ZIP 39110 — Handyman

Date: 2026-11-02
Cell: MS / Madison / 39110 / Handyman
Sources: Business's own website first, then public listings (Google Business). No database insertion performed by this worker.

4 qualifying businesses found serving ZIP 39110. No expansion to adjacent ZIP 39130 was needed to reach the minimum (4 ≥ 3), and no business was claimed on a 39130 basis. Two of the four are based in Madison itself; the other two are nearby operators whose own websites explicitly list Madison, MS in their service areas. All service_zips are ["39110"] only — none of the businesses publish a ZIP-code service list, only city/area claims, and ZIPs were not invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Bailey Heat Air and Home Repair | (601) 506-6291 | Handyman | Madison | https://baileyheatairandhomerepair.com/ | michael@baileyheatairhr.com — https://baileyheatairandhomerepair.com/ | High — own site gives Madison, MS 39110 address (204 Oakside Trail), publishes the phone, and describes home repair / carpentry work at Madison homes; Google primary category is Handyman | https://baileyheatairandhomerepair.com/ (own site) |
| Maintenance Man for Seniors | (601) 201-1731 | Handyman | Madison |  | None published verifiably | Medium — Madison-based (93 Twin Oaks Dr, Madison, MS) with Google primary category Handyman and In-Home Service; owner-written listing description says owner Leland Sentell works as a maintenance technician in seniors' homes; phone is from the Google listing only and its named website could not be fetched/verified in this run, so website is left blank | Google Business listing (owner description) |
| Round 'Da House Home Repairs | (601) 983-8669 | Handyman | Madison | https://rounddahouse.com/ | None published on own site / Google listing (see note below) | High — own site publishes (601) 983-8669, calls itself a Handyman & Remodeling Service doing repairs in customers' homes, and its "Proudly Serving" list explicitly includes Madison; Ridgeland-based | https://rounddahouse.com/ (own site) |
| Daniel's Handyman Services | (601) 529-7691 | Handyman | Madison | https://danielhandymanservice.velvetsolutions.net/ | danielhandyman601@gmail.com — https://danielhandymanservice.velvetsolutions.net/ | High — own site publishes (601) 529-7691 and the email, describes owner-operated home repairs for homeowners, and its Service Areas list explicitly includes Madison, MS; Jackson office address | https://danielhandymanservice.velvetsolutions.net/ (own site) |

Notes:
- Bailey email is copied exactly as published on its own site: michael@baileyheatairhr.com (the email domain differs slightly from the website domain — that is how the business publishes it, not a typo introduced here).
- Round 'Da House: an address mikew@rounddahouse.com appears on a business estimate PDF hosted on documents.sparkplatform.com. That is not the business's own website or its Google listing, so it was NOT counted as a published lead under this cell's source rule.
- Maintenance Man for Seniors: its Google description names the website maintenancemanforseniors.com, but a fetch of that site failed in this run and was not retried, so no website is claimed in the inserts.

## Dedupe
- Checked every included name and phone (formatted and digit-only) against the live-DB snapshot at ~/workspace/goals/van-squad-directory-website/hidden_files/day23-work/dedupe-open.json (1,910 names / 1,910 phones): no matches for any of the 4 included businesses.
- Grepped all files in ~/workspace/van-squad/prospecting/ for every included name and phone: no matches.
- No included business shares a name or phone with another included business.

## EXCLUDED
- Ace Handyman Services Madison Flowood — (601) 202-1882, own site https://www.acehandymanservices.com/offices/madison-flowood explicitly serves Madison and says "Locally Owned and Independently Operated" — EXCLUDED as a national franchise chain (Ace), following the Day 22 precedent that excluded Ace Handyman and Mr. Handyman on franchise basis.
- Mr. Handyman of Jackson — (601) 345-2120, own site https://www.mrhandyman.com/jackson/ explicitly offers service in Madison — EXCLUDED as a national franchise chain (Neighborly / Mr. Handyman), same Day 22 precedent.
- The Handyman Guy — (601) 874-2942, 737 Hoy Rd, Madison, MS, Google primary category Handyman — EXCLUDED: no own website or own materials were found to confirm handyman work at customers' homes, as this cell requires; listing-only with no business description.
- SDMG Enterprises LLC — Jackson, MS — EXCLUDED: its only published phone is toll-free (866) 815-7569; toll-free-only rule.
- Hollya Jackson Handyman Services — 902 Robinson Springs Rd, Madison, MS, Google category Handyman — EXCLUDED: no phone published on its listing; no verifiable public phone.
- Rad Dad Designs, LLC — Madison, MS address, Google category Handyman — EXCLUDED: only phone found is (318) 537-1379 (Louisiana area code, not a Mississippi 601/662/228/769 number), no own website/materials confirming handyman service in Madison.
- Home repair&Paint Maranatha — Ridgeland, MS, (601) 500-4867, Google category Handyman — EXCLUDED: Google listing only, no own website/materials and no claim to serve Madison found.
- Southern Handyman Services — Jackson, MS, (601) 750-6437 — EXCLUDED: HomeAdvisor platform profile only, no own website/materials; its claim is "all Jackson MS and metro area" with no explicit Madison claim verified from its own materials.
- Call One Call Home Services — Morton, MS (~28 miles away), (601) 500-5458, https://callonecall.com/ — EXCLUDED: no Madison service claim found in its materials; outside this cell's area.
- Lowe's Home Improvement (Madison) and Pro Desk at The Home Depot (Madison) — EXCLUDED: storefront retail stores, not handyman businesses.
- Environment Masters — Madison, MS — EXCLUDED: plumbing/HVAC/electrical contractor, primary category Plumbing Service, not Handyman.
- Brent's Appliance Repair — Madison, MS — EXCLUDED: appliance repair only, not handyman; only phone is toll-free (833) 614-0118.
- HomeAdvisor / Angi / InstaService and similar Madison handyman pages — EXCLUDED: lead-gen / matching platforms, not businesses.
