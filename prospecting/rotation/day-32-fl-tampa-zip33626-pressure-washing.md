# Rotation Day 32 — Florida: Tampa × Pressure washing × ZIP 33626

- Researched: 2026-11-11 (nightly rotation, Day 32)
- Cell: Florida | Tampa | ZIP 33626 (Westchase) | Category "Pressure washing" (exact label, verified in ~/workspace/van-squad/js/data.js)
- Count: 8 qualifying businesses
- Method: each business's own website first, then public listings. Public information only. Mobile/on-site pressure washing at the customer's home confirmed from the business's own materials for every included business.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented. No toll-free-only businesses included.
- Status: PREPARED NOT INSERTED — batch files only; the coordinator inserts centrally.
- Dedupe: checked every name AND phone against /tmp/vs_active.json (2,851 active businesses) and grep of every file in ~/workspace/van-squad/prospecting/ (including all Day-32 files from waves 1-2): no matches for any included business. See Dedupe section below.
- ZIP note: 33626 is Westchase. No expansion was needed — seven businesses explicitly list Westchase on their own sites, and the eighth (Washy Bear) covers adjacent Citrus Park (33625) plus surrounding communities. Additional service_zips are only a business's own stated base ZIP, per precedent.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| First Response Pressure Wash | (813) 600-8043 | Pressure washing | Tampa | https://www.firstresponsepressurewash.com/ | — none found | High — own site: locally owned/operated by a local firefighter, "CALL OR TEXT 813-600-8043", residential house/driveway/pool-deck washing at homes across Tampa Bay, own base 14027 Citrus Pointe Dr, Tampa, FL 33625 (adjacent ZIP) on site | Business's own website |
| Kyle's A1 Pressure Washing | (813) 294-2115 | Pressure washing | Tampa | https://kylesa1pressurewashing.com/areas-served/ | kylesa1pressurewashing@gmail.com — own website https://kylesa1pressurewashing.com/areas-served/ | High — own service-areas page: dedicated Westchase section, "All Hillsborough County Zip Codes We Serve" list explicitly includes 33626, phone (813) 294-2115 and email on site, house/driveway washing at homes | Business's own website |
| Tampa Home Wash | (656) 219-1566 | Pressure washing | Tampa | https://pressurewashingtampa.net/ | washingp66@gmail.com — own website https://pressurewashingtampa.net/ | High — own site: owner Ethan James ("when you call, you talk to me directly, not a call center"), phone (656) 219-1566, email and 7113 Causeway Blvd, Tampa, FL 33619 on site, area guides/list explicitly include Westchase, residential washing at Tampa homes | Business's own website |
| Pink Flamingo Power Wash | (813) 458-0864 | Pressure washing | Tampa | https://www.pinkflamingopowerwash.com/residential-pressure-washing-tampa/ | — none found | High — own site: local Tampa company led by Cliff, phone (813) 458-0864 and Tampa, FL 33618 address on site, residential washing across Tampa explicitly including Westchase and Citrus Park, cleans homes from roof to driveway on site | Business's own website |
| Blue Stream Roof Cleaning & Pressure Washing | (813) 748-0709 | Pressure washing | Tampa | https://bluestreamroofcleaning.com/ | bluestreamrc@gmail.com — own website https://bluestreamroofcleaning.com/ | High — own site: local Dover crew, Jose runs the work himself, phone (813) 748-0709 and email on site, service list explicitly includes Westchase and Odessa, house/driveway/pressure washing at homes and properties | Business's own website |
| Super Dave's Pressure Cleaning | (727) 433-1670 | Pressure washing | Tampa | https://superdavecleaning.com/ | david.fahari@gmail.com — own website https://superdavecleaning.com/ | High — own site: owner Dave, operating since 2005, "Call or text Dave at 727-433-1670" and email on site, Tampa & northern communities list explicitly includes Westchase, house/driveway/pool-deck washing at homes | Business's own website |
| Tampa Pressure Washing Pro | (813) 576-0938 | Pressure washing | Tampa | https://tampapressurewashingpro.com | — none found | High — own site: owner Alex, "We're a local Tampa business – not a franchise, not a call center", call/text 813-576-0938 on site, serving list explicitly includes Westchase, driveway/house/roof/pool-deck washing at properties with on-site walkthrough | Business's own website |
| Washy Bear Pressure Washing | (813) 921-2823 | Pressure washing | Tampa | https://www.washybear.com/pressure-washing-citrus-park-fl/ | info@washybear.com — own website https://www.washybear.com/pressure-washing-citrus-park-fl/ | Medium — own Citrus Park page: family-run, "Our own crew, no subcontractors, covering 33625, 33558, and the surrounding communities from the Veterans corridor out toward Keystone", phone 813-921-2823, email and Tampa, FL 33647 base on site; 33626 (Westchase) coverage rests on that adjacent-Citrus-Park + surrounding-communities claim, not a Westchase-specific page | Business's own website |

## Dedupe
- Live DB (/tmp/vs_active.json, 2,851 active businesses): python name + digit-normalised phone check for all 8 included businesses returned no matches.
- Prior prospecting files (all of ~/workspace/van-squad/prospecting/, including tonight's Day-32 waves 1-2 files): grep for every name and every phone above returned no matches.
- No name or phone is repeated within this batch.

## Exclusions / dedupe notes
- Local Service Group — Pressure Washing in Tampa (localservicegroup.com) — EXCLUDED: lead-gen style listing, only phone shown is 1-800-555-0100 (toll-free placeholder), no local operator verified.
- That 1 Painter Tampa Bay ((813) 413-1684) — EXCLUDED for this category: painting company; pressure washing is pre-paint prep only, not a dedicated pressure-washing business verified as such.
- Mark's Painting ((813) 452-4161) — EXCLUDED for this category: painting company, same reasoning as above.
- Cool Breeze Premier Pressure Washing ((727) 584-6622, Largo) — EXCLUDED: own Oldsmar page confirms quote requests for East Lake Woodlands, Safety Harbor, Palm Harbor and Odessa, but does not state Westchase / 33626 coverage.
- Xtreme Window Cleaning & Pressure Washing ((813) 410-0643, Tampa 33618, Houzz) — EXCLUDED: no own website could be verified; evidence was a Houzz listing only, so on-site service could not be confirmed from the business's own materials.
- Wild West Washing (Lutz/Odessa) — EXCLUDED: own materials state Lutz, Odessa and Land O' Lakes service, with no Westchase / 33626 coverage stated, and its site shows inconsistent phone numbers ((813) 957-1174 vs (813) 309-3428).
- National lead-gen / marketplace listings (Angi, Thumbtack, HomeAdvisor) — excluded per gates, not individually listed.

## ZIP / service-area note
- Target ZIP 33626 is first in every service_zips.
- Additional ZIPs, each a business's own stated base ZIP on its own site: 33625 (First Response Pressure Wash — 14027 Citrus Pointe Dr, Tampa, FL 33625), 33619 (Tampa Home Wash — 7113 Causeway Blvd, Tampa, FL 33619), 33618 (Pink Flamingo Power Wash — Tampa, FL 33618), 33647 (Washy Bear Pressure Washing — 5322 Primrose Lake Circle, Tampa, FL 33647). No other ZIPs were invented; Westchase service for the other businesses is confirmed by community name on their own sites.
- This batch did not edit js/data.js — the coordinator adds ZIP names centrally.

## Leads
- 5 published emails collected, each from the business's own website, in the separate -leads.json only (never in inserts): Kyle's A1 Pressure Washing — kylesa1pressurewashing@gmail.com; Tampa Home Wash — washingp66@gmail.com; Blue Stream Roof Cleaning & Pressure Washing — bluestreamrc@gmail.com; Super Dave's Pressure Cleaning — david.fahari@gmail.com; Washy Bear Pressure Washing — info@washybear.com.

## Files
- Batch table: day-32-fl-tampa-zip33626-pressure-washing.md (this file)
- Inserts: day-32-fl-tampa-zip33626-pressure-washing-inserts.json — 8 businesses + 8 listings
- Leads: day-32-fl-tampa-zip33626-pressure-washing-leads.json — 5 published emails
