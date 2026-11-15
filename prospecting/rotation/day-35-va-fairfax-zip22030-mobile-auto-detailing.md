# Day 35 — Virginia × Fairfax × ZIP 22030 × Mobile auto detailing

Cell: VA | Fairfax | 22030 | Mobile auto detailing
Date researched: 2026-11-14
Count qualifying: 9 (≥3 found in 22030/Fairfax, so no expansion to 22031 was needed)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Caribbean Mobile Detailing LLC | (571) 299-9504 | Mobile auto detailing | Fairfax | https://www.caribbeanmobiledetailingllc.com/services | None published found | High — own site: "all performed on-location, at your home or office", "We come to you", serves Fairfax, phone (571) 299-9504 on site | Business's own website | No match in /tmp/db_existing.json or prospecting/ by name/phone |
| Autodetail DMV | (703) 307-2337 | Mobile auto detailing | Fairfax | https://autodetaildmv.com/ | None used — site email is masked in extraction, not guessed | High — own site: "mobile based detailing company", "He came right to my house", address 3307 Willow Crescent Dr, Fairfax, VA 22030, phone on site | Business's own website (About page) | No match in DB or prospecting/ |
| Nova Gloss Detailing | (571) 703-7616 | Mobile auto detailing | Fairfax | https://novaglossdetailing.com/ | None published found | High — own site: "Hand detailing in your driveway", "We come to you", "within about 25 minutes of Fairfax", phone +15717037616 in site structured data | Business's own website | No match in DB or prospecting/ |
| MOD Mobile Detailing | (571) 598-5095 | Mobile auto detailing | Fairfax | https://modmobiledetailing.com/ | None published found | High — own site: "detailing delivered to your driveway", "We Come to You", serves Fairfax listed, phone 571-598-5095 on site | Business's own website | No match in DB or prospecting/ |
| C&S Car Detailing | (703) 344-6817 | Mobile auto detailing | Fairfax | https://www.cscardetailing.com/ | csdetailinginfo@gmail.com — own contact section: https://www.cscardetailing.com/ | High — own site: "we bring professional car care directly to you", "right at your doorstep", Fairfax, VA; site also lists second phone (703) 283-6122, first phone used | Business's own website | No match in DB or prospecting/ |
| Ecosteamobile | (703) 705-8811 | Mobile auto detailing | Fairfax | https://ecosteamobile.com/ | None used — site email is masked in extraction, not guessed | Medium — own site: "Steam Car Detailing That Comes to You", "We Detail at Your Home, Office or Garage", mobile service incl. Fairfax; own-site footer phone (703) 705-8811 used (Google listing shows a different number, (703) 452-4921) | Business's own website | No match in DB or prospecting/ by either phone |
| JR Mobile Auto Detailing | (571) 244-5163 | Mobile auto detailing | Fairfax | http://www.jrmobileautodetailing.com/ | None published found | High — own site: "mobile detailing services that come directly to your home or workplace", family-owned, Northern Virginia, phone 571-244-5163 on site; Google listing address in Fairfax | Business's own website | No match in DB or prospecting/ |
| Rana Mobile Car Detailing & Interior Cleaning | (703) 474-0265 | Mobile auto detailing | Fairfax | https://ranacardetailing.com/ | None published found | High — own site: "We come to you. We detail your car right where it's parked", phone 703-474-0265 on site; Google listing address 9605 Fairfax Blvd, Fairfax | Business's own website | No match in DB or prospecting/ |
| Catoctin AutoEdge | (301) 524-6761 | Mobile auto detailing | Fairfax | https://catoctinautoedge.com/ | Catoctinautoedge@gmail.com — own contact section: https://catoctinautoedge.com/ | Medium — own site: "We come to you, bringing professional detailing directly to your home or workplace", serves "Loudoun and Fairfax counties in Northern Virginia", phone 301-524-6761 on site; HQ is in Maryland, Fairfax is an explicitly stated service area | Business's own website | No match in DB or prospecting/ |

## Exclusions
- Detail Authority, Flagship Carwash, Think Eco (Fair Oaks Mall) — fixed-location / shop-only, no mobile confirmation from own materials.
- Primary auto detail, Luxe auto detailing, Tays Mobile Detailing LLC, Adroit Mobile Detailing Services — no verifiable own website confirming mobile service (listing-only); not included rather than padding the count.
- National lead-gen / call-center listings — none used.

## Dedupe method
Grepped ~/workspace/van-squad/prospecting/ for each candidate name and phone, and checked /tmp/db_existing.json (3,238 records) by normalized phone and name substring — zero matches for all 9 included businesses.

## Notes
- service_zips in inserts = ["22030"] only for each business: the businesses state service areas by city/county on their own sites, not by ZIP lists, so no additional ZIPs were invented. Autodetail DMV's own address is in 22030.
- No expansion to 22031 was required.
