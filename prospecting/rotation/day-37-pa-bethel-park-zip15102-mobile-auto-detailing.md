# Day 37 — Pennsylvania × Bethel Park × ZIP 15102 × Mobile auto detailing

Cell: Bethel Park, PA 15102 (South Hills). Category label verified: "Mobile auto detailing".
Note: ZIP 15102 itself is dominated by shop-based detailers/car washes on Library Road and Transit Blvd. The three qualifying businesses below are mobile operators whose own materials confirm service to Bethel Park / the South Hills (15102): Shandra lists South Hills service and brings the shop to the driveway, Distinctive Shine lists Bethel Park among its own Locations and offers at-home mobile detailing, and Keystone serves Southwestern Pennsylvania (which includes Bethel Park) by mobile appointment — hence Medium for Keystone. No business publishes a numeric service-area ZIP list, so service_zips = ["15102"] only for each. No adjacent-ZIP expansion was needed to reach 3. All deduped against grep of ~/workspace/van-squad/prospecting/ (including Day 37 Waves 1–2 and Day 36) and day37_open_dump.json (3,420 rows) by name and phone — no matches.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|---|
| Shandra Mobile Detailing | (412) 212-8433 | Mobile auto detailing | Bethel Park | https://www.shandramobiledetailing.com/ | None published | High — Own homepage: "we Bring the Shop to Your Driveway… straight to your home or office — South Hills…", South Hills service list on site; phone (412) 212-8433 in site business info | https://www.shandramobiledetailing.com/ | No match by name or phone in prospecting files or DB dump |
| Distinctive Shine | (412) 352-9973 | Mobile auto detailing | Bethel Park | https://distinctiveshine.com/ | None published (sales@godetail.com on its terms page is the GoDetail platform address, not counted as this business's own published email) | High — Own site: "At Home or At Shop service available", "As a mobile car wash, we come to you… from the comfort of your home or office", Locations list includes Bethel Park; phone 412-352-9973 on own site | https://distinctiveshine.com/ | No match by name or phone in prospecting files or DB dump. Distinct from Distinctive Detailing, Lawrenceville (shop) |
| Keystone Mobile Solutions | (724) 769-7692 | Mobile auto detailing | Bethel Park | https://www.keystonemobilesolutionsllc.biz/ | None published | Medium — Own site: "Mobile auto detailing… brought directly to homes and businesses across Southwestern Pennsylvania", "We bring professional detailing… to your location", phone 724-769-7692 on site; Medium because service area is stated broadly as Southwestern PA with "call to confirm availability for your exact location" rather than naming Bethel Park | https://www.keystonemobilesolutionsllc.biz/ | No match by name or phone in prospecting files or DB dump |

## Exclusions
- CLYINZ (412-499-7496), Chuck's Mobile Car Detailing & Ceramic Coating Pittsburgh (412-726-6092), Victorious Details (412-312-4410), CXN Mobile Detailing (412-445-2232), Ride N Shine Auto Spa (724-624-2282) — EXCLUDED as duplicates: already batched Day 36 (15206 cell); CLYINZ and Chuck's explicitly serve Bethel Park.
- Mobile Wash and Lube (724-732-2175), Mobile Car Detailing Pittsburgh (412-266-1199), Steam Auto Spa (724-713-4508 — own areas page has a dedicated Bethel Park page), PGHDETAILING (412-292-9421), F1 Mobile Detailing (412-834-8167) — EXCLUDED as duplicates: already batched Day 37 Wave 1 (15232 cell).
- Pittsburgh Car Detail (412-290-0004), Attention2Detail Auto Care (724-822-8445), Renzo's Auto Spa (724-664-5645), Clean Fiend Detailing (412-716-6047) — EXCLUDED as duplicates: already batched Day 37 Wave 2 (15237 cell).
- Protrim (412-310-0285, 1000 Transit Blvd, Bethel Park), CarHut Detailing (412-600-9769, Library Rd), Adam's Auto Detailing / Buggy Bath House (412-595-7676, Library Rd), Dave's Auto Service and Detailing (412-595-7239, Industrial Blvd), Car Cleen Systems (412-831-3262, Transit Blvd), Mr. Magic Car Wash (412-343-3555, Library Rd / South Park Rd), Immaculate Auto Detailing (412-327-6762, Upper St. Clair shop), 412 Auto Detail (412-822-4177, Upper St. Clair shop) — EXCLUDED: storefront/shop or car-wash based in/near 15102, no mobile on-site service confirmed on own materials.
- Icon Detailing (412-228-0522, Bethel Park) — EXCLUDED: BBB profile states believed out of business; no business-owned website confirming mobile service.
- AM Mobile Auto Detailing (5902 Horseshoe Dr, Bethel Park, PA 15102, BBB listing) — EXCLUDED: no verifiable public phone or business-owned website found — fails the verifiable-phone / own-materials gate.
- Dominion Auto Detailing LLC (Carnegie, serving Allegheny County) — EXCLUDED: own site confirms mobile service to Allegheny County, but no public phone number could be found on its own site or in public listings — fails the verifiable-phone gate.
- Hands Detail Shop (412-752-8684) — NOT INCLUDED: held out consistent with all prior Pittsburgh cells (Arnold, PA-based multi-state operation).
- Hammer Auto Detail — EXCLUDED: no public phone on own site (same exclusion as prior cells).
- Dirt Daddys Detailing (412-616-1736, Bethel Park listing) — NOT INCLUDED: no business-owned website confirming mobile service; phone only on listing/Instagram surfaces.
- Mobile Auto Spa (724-900-0666, Zelienople, PA) — NOT INCLUDED: based in Zelienople, no service confirmation for Bethel Park / South Hills on own materials.

## Summary
- Businesses found and batched: 3 (2 High, 1 Medium confidence)
- Email leads collected: 0 (no included business publishes an email address as text on its own site)
- Inserts file: day-37-pa-bethel-park-zip15102-mobile-auto-detailing-inserts.json (3 businesses, 3 listings)
- Leads file: day-37-pa-bethel-park-zip15102-mobile-auto-detailing-leads.json (empty array)
- No database insertion, no js/data.js edit, no git, no images performed by this researcher.
