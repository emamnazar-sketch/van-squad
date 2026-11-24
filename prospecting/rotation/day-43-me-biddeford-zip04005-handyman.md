# Day 43 — Maine: Biddeford × Handyman × ZIP 04005

- Cell: State=ME, City=Biddeford, ZIP=04005, Category=Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-24
- Expansion note: No Biddeford-based handyman in 04005 could be confirmed from its own website/materials in this run — the Biddeford operators found (Superior Handyman Services, Southern Maine Handyman, Sims Services LLC) appear only on Instagram/Facebook/public listings with no verifiable own website. Per the cell brief, the cell therefore expanded to adjacent ZIP 04072 (Saco). All 3 qualifying businesses are based in Saco, keep Saco as their city, and confirm handyman/small-job work at customers' homes on their own websites; Jeremy's Handyman Services explicitly lists Biddeford among its areas covered, and Dirigo Handyman Services lists its service area as Greater Portland and Coastal Southern Maine.
- Service-ZIP note: service_zips for each business = target ZIP 04005 plus expansion ZIP 04072 (each business's own city ZIP). No other ZIPs were added — none of the three sites states additional ZIP codes.
- Coordinator instruction honored: "The Pool Man" of Biddeford, (207) 590-9566, was already inserted tonight in the Scarborough pool cell and is NOT included here, even though it also does handyman-type work.
- Sources: business's own website first, then public listings (Google Business listing data). Public information only. No data invented.
- Status: PREPARED only — not inserted, no js/data.js edit, no git (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Dirigo Handyman Services | (207) 423-5224 | Handyman | Saco | https://www.dirigohandymanservices.com/ | dirigohandyman@gmail.com — published on own website https://www.dirigohandymanservices.com/ (Contact section) | High — own site calls itself "your trusted local Maine handyman service," lists home repair & carpentry, general plumbing & electrical, painting and exterior work with "no task is too big or small," prints phone (207) 423-5224 and its address 128 Franklin St, Saco, ME 04072 | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone on 2026-11-24: no match |
| Ron Husser Residential Services | (207) 710-3591 | Handyman | Saco | https://ronnyhusser.wixsite.com/website | — none found | High — own site offers "Home Maintenance Services" for residential homes (general carpentry repairs, electrical repairs, wall/ceiling patching, painting, fixing doors and windows) "serving Southern Maine residential homes," and prints phone 1 207 710 3591 in its Contact section; public listing places it on Shadagee Rd, Saco, ME | Business's own website + public listing | Grep of ~/workspace/van-squad/prospecting/ for name and phone on 2026-11-24: no match |
| Jeremy's Handyman Services | (207) 815-6334 | Handyman | Saco | https://iladder49i.wixsite.com/jeremys-handyman-ser | jeremyshandymanservices2022@gmail.com — published on own website https://iladder49i.wixsite.com/jeremys-handyman-ser | High — own site ("Any job, we will fix it") lists carpentry, plumbing, electrical, painting and maintenance services, prints phone 207-815-6334, and lists areas covered as Saco, Biddeford and OOB (Old Orchard Beach); public listing gives its address as 1015 Portland Rd Unit 27, Saco, ME | Business's own website + public listing | Grep of ~/workspace/van-squad/prospecting/ for name and phone on 2026-11-24: no match (unrelated "Jeremy" mentions in other states' files are different businesses with different phones) |

## Excluded

| Name | Phone / identifier | Reason excluded |
|---|---|---|
| The Pool Man | (207) 590-9566 | Already inserted tonight in the Scarborough pool cell — excluded here per coordinator instruction, even if it also does handyman work |
| Mr. Handyman of Greater Portland | (207) 209-1562 | National franchise chain (Neighborly / Mr. Handyman network) — excluded per national-operator gate, despite serving Biddeford |
| Ace Handyman Services Southern Maine | (207) 370-1577 | National franchise chain — excluded per national-operator gate; also based in South Portland, not Biddeford/Saco |
| Superior Handyman Services | (207) 391-1771 | Biddeford (171 Guinea Rd) public listing / Instagram only — no verifiable own website, so handyman-at-home service could not be confirmed from its own materials (an unrelated same-name business in Milwaukee appears in earlier prospecting files; different business, different phone) |
| Southern Maine Handyman | (207) 387-0807 | Biddeford (8 Grateful Way) public listing only, website field points to an Instagram account — own-materials confirmation not completed |
| Sims Services LLC | (207) 468-5653 | Biddeford (Graham St) listing only; its only web presence found is a Facebook profile — own-materials confirmation of handyman-at-home service not completed |
| DS and P Handyman Services (DS&P Handyman Services) | (207) 939-7762 | Saco (44 Winter St) public listing / HomeAdvisor only — no verifiable own website confirming handyman-at-home service from its own materials |
| Labelle Home Maintenance | (207) 299-0129 | Saco (9 Bradley St) public listing only — no own website found, own-materials confirmation not completed |
| A and H Residential Repairs | (541) 419-2900 | Saco listing with a non-Maine (541) area-code phone, Instagram only, and a description focused on full bathroom remodels — no own website confirming a local handyman operator |
| Southern Maine Yard Pro | (207) 229-4442 | Biddeford business whose primary category is landscaping/yard work; handyman is only a secondary listing category — not a handyman business |
| Pinball and Jukebox Repair of Maine | (207) 332-1310 | Biddeford specialty repair of pinball machines and jukeboxes, not general handyman/small-job home service |
| PM Construction Co. Inc | (207) 282-7697 | Saco construction company — major construction only, not handyman/small-job service |

## Leads summary

- 2 published emails collected, both from the businesses' own websites (see matching -leads.json):
  - Dirigo Handyman Services — dirigohandyman@gmail.com — https://www.dirigohandymanservices.com/
  - Jeremy's Handyman Services — jeremyshandymanservices2022@gmail.com — https://iladder49i.wixsite.com/jeremys-handyman-ser
- Ron Husser Residential Services publishes no email on its own site found in this run.
- Emails are leads only — never written to a business profile.

## Counts

- Qualifying businesses: 3
- Businesses based in Biddeford / 04005 itself: 0 (none confirmable from own materials — see expansion note); adjacent-ZIP 04072 (Saco) expansion: 3
- Listings prepared: 3 (one per business)
- Email leads: 2
- Excluded checked: 12
- Dedupe skips: 0 (The Pool Man held out per coordinator instruction, counted under Excluded, not as a dedupe skip)
