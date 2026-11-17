# Day 36 — West Virginia × Charleston × ZIP 25314 × Handyman

Cell: Charleston, WV 25314 (4 qualifying businesses found serving 25314; no expansion needed — one business is addressed in 25314 itself, the others are Charleston-based and serve the area from adjacent Charleston ZIPs 25313/central Charleston)
Date: 2026-11-16
Category label verified: "Handyman" (exists in ~/workspace/van-squad/js/data.js)

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Handyman Of Charleston LLC | (304) 807-6002 | Handyman | Charleston | https://handymanofcharlestonllc.com/ | None published found | High — own site fetched: "Your Trusted Handyman Service in Charleston, WV… repairs, maintenance" at customers' homes, office "898 Kanawha State Forest Dr, Charleston, WV 25314" and phone (304) 807-6002 printed on own site | Own website; Google listing | No match by name or phone in live DB dump (/tmp/day36-dedupe.txt, 3,360 rows) or prior prospecting files; the "Handyman of Charleston" mention in the day-33 SC Charleston file is an unrelated South Carolina exclusion, different phone |
| 2 | Stow & Co., LLC | (304) 992-0437 | Handyman | Charleston | https://www.gowithstow.com/ | e.stow@gowithstow.com — published on own website https://www.gowithstow.com/ | High — own site fetched: "West Virginia's Trusted Handyman & Specialty Contractor… Home Repair & Maintenance" in Charleston, "our team travels directly to you", phone (304) 992-0437 and email on own site, Charleston WV 25313 address | Own website | No match by name or phone in DB dump or prior prospecting files ("Stow" hits in older files are the unrelated street name Edwinstowe) |
| 3 | Handy Randy Home Repair Services | (304) 513-1033 | Handyman | Charleston | https://handyrandywv.com/ | None published found | High — own site fetched: "local, veteran-owned handyman and home repair company serving Charleston, WV… drywall repair, painting, fixture installation, furniture assembly, TV mounting, or general home repairs" at homeowners' homes; phone (304) 513-1033 from Google listing (106 Mullins Rd, Charleston) — phone not visible in fetched homepage text | Own website; Google listing | No match by name or phone in DB dump or prior prospecting files |
| 4 | Dave's Home Improvements and Maintenance | (304) 371-4874 | Handyman | Charleston | https://daves-home-improvements.ueniweb.com/ | None published found | Medium — own site fetched: Charleston-based property/home maintenance doing repairs at clients' homes ("blocked pipe, a new kitchen installation, or simply an overflowing gutter"), business cell phone (304) 371-4874 printed on own site; listed primarily as property maintenance, not a pure handyman brand | Own website; Google listing | No match by name or phone in DB dump or prior prospecting files |

## Excluded
- Mr. Handyman of Kanawha Valley, 1877 Kanawha Two Mile Road, Charleston, WV 25312, (304) 907-2882 — EXCLUDED: national franchise (Neighborly) — prior cells excluded Mr. Handyman franchises; not a distinct standalone local operator for this cell.
- Ace Handyman Services Kanawha Valley, 7500 MacCorkle Ave SE, Charleston, WV, (304) 362-5067 — EXCLUDED: national franchise brand (Ace Handyman Services); other Ace locations already in the directory under their own cities.
- Greg's Handyman Service, 1179 Kanawha State Forest Dr, Charleston, WV 25314, (304) 744-0972 — EXCLUDED: only a BBB profile found, no own website/materials to confirm mobile/on-site handyman service from the business itself.
- TC Handyman Service, 1821 7th Ave, Charleston, WV, (304) 419-2697; Know It All Do It All Handyman Services, Charleston, WV, (304) 982-2784; Pro Plus Home Repair and Remodeling, 1533 Washington St E, Charleston, WV, (304) 308-2323; Larry Your Handyman, 1532 Virginia St E, Charleston, WV, (304) 345-2909; ADA Constructions LLC, 899 Alta Rd, Charleston, WV, (681) 205-8911 — EXCLUDED: only Instagram/Facebook/Google listing snippets found, no own website/materials to confirm mobile/on-site service from the business itself.
- Carolina Home Mender / Petrick Construction and other Charleston results with 843 area codes — EXCLUDED: Charleston, South Carolina, not Charleston, WV.
- Angi / Thumbtack / marketplace finder pages for Charleston, WV — EXCLUDED: national lead-gen with no local operator.

## Counts
- Found/included: 4
- Excluded: 9+ (see above)
- Leads (published emails): 1
- Service ZIPs: only target ZIP 25314 listed for each business — none of the included businesses published a specific ZIP-code service list on their own sites (they state city/county service areas), so no additional ZIPs were invented. Note: Stow & Co. is addressed in adjacent ZIP 25313 and Handyman Of Charleston LLC is addressed in 25314 itself; all serve Charleston including 25314.
- Dedupe: all 4 included businesses checked against live DB dump (/tmp/day36-dedupe.txt, 3,360 rows) and all prior files in ~/workspace/van-squad/prospecting/ by name and phone — no duplicates found.
