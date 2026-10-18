# Day 7 — Farmington, NM × ZIP 87401 × House cleaning

 Researched 2026-10-18. Cell target ZIP 87401; expansion to adjacent ZIP 87402 was
 used (see note below) because 87401 alone yielded only 2 qualifying businesses.

## Businesses found (3)

| Name | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Epic Cleans LLC | (505) 427-2289 | House cleaning | Farmington | https://epiccleansllcfarmingtonnm.jobbersites.com/ | epiccleans4you@gmail.com (its own website — see lead note) | High — its own site is titled "Residential Cleaning Services in Farmington" and lists "Epic Professional Residential Cleaning"; phone printed on the site; based at 506 W Maple St, Farmington 87401 | Own website + Google listing |
| All the Way Cleaning | (505) 592-2146 | House cleaning | Farmington | https://www.allthewaycleaning.net/ | none — site has a contact form only (see note) | High — its own site headlines "Residential & Commercial Expert Cleaning Service" with a Residential section and house-cleaning testimonials; phone printed on the site; serves Farmington / San Juan County | Own website + its own Facebook posts |
| Pro Homemaking Services, LLC | (505) 402-3637 | House cleaning | Farmington | https://prohomemakingservices.com/ | none | High — its own site leads with home cleaning / maid service and a Residential service list; phone and address printed in its own site footer (5101 College Blvd, Farmington, NM 87402) | Own website + Google listing |

## ZIP expansion note

 ZIP 87401 yielded 2 qualifiers (Epic Cleans LLC, All the Way Cleaning), below the
 3-business floor, so the cell was expanded once to adjacent ZIP 87402, which added
 Pro Homemaking Services, LLC. Its own site confirms it cleans homes across
 Farmington; its service_zips are ["87401", "87402"] (cell ZIP + its own published
 address ZIP — it publishes no ZIP service list, so no other ZIPs were added).
 Epic Cleans states it serves "Farmington, Aztec New Mexico and surrounding areas"
 (city names only, no ZIP list) → service_zips ["87401"] only. All the Way Cleaning
 states it serves San Juan County / Farmington (no ZIP list, no street address
 published) → service_zips ["87401"] only.

## Lead notes

 - Epic Cleans LLC: the email is published on the business's own website behind
   Cloudflare email-protection; the address was decoded from the site's own
   mailto link (epiccleans4you@gmail.com). Recorded in the leads file only.
 - All the Way Cleaning: an email (alucer16@gmail.com) appears only in its
   Facebook hiring post asking for resumes — not published as a customer contact
   on its website or Google listing, so NO lead was recorded.
 - On The Spot Cleaning publishes sheldonpickering@yahoo.com on its site, but the
   business is excluded below, so no lead was recorded for it.

## Dedupe

 All three names and phones were checked against (a) every file in
 ~/workspace/van-squad/prospecting/ (grep — no hits) and (b) the live directory
 via the public REST endpoint (489 businesses — no name or phone matches;
 Farmington is new territory, all existing 505 entries are Albuquerque/Rio Rancho).

## Exclusions (17)

| Business | Phone | Why excluded |
|---|---|---|
| On The Spot Cleaning | (505) 327-0592 | Its own website's services are carpet cleaning and commercial janitorial (site title "Expert Janitorial Services"); house cleaning is not an offered service in its own materials — carpet/janitorial specialist, not a house-cleaning service |
| Elite Home Cleaning | (505) 860-9282 | Google listing only; the website on its listing serves an unrelated Singapore home-cleaning business, so nothing could be verified from the business's own materials |
| Five Star Cleaning Services | (505) 486-1931 | Its listed website returns 404 on both http and https; no verifiable residential house-cleaning evidence from its own materials (the similarly named "Five Stars House Cleaning LLC" in review sites is a different business) |
| Arrowhead Cleaning | (505) 590-9399 | No website (Instagram location page only); categories include janitorial; residential house cleaning not verifiable from its own materials |
| Amigos Cleaning | (505) 787-0044 | Primary category is janitorial service; its Google business.site page is dead (404); residential house cleaning not verified |
| White Glove Janitorial | (505) 402-8846 | Janitorial service; no website found; residential service not verified |
| Clean Sweep Services (Clean Sweep Janitorial, Inc.) | (505) 325-2111 | Its own description: commercial and industrial janitorial only |
| Clean Rite Janitorial Service | (505) 330-2392 | Its own description: commercial cleaning solutions for workplaces |
| SERVPRO of Farmington | (505) 750-9872 | Damage restoration franchise (fire/water cleanup), not house cleaning |
| Redemption Restoration and Cleaning | (505) 278-8118 | Primary category damage restoration service |
| Blindworks of the Four Corners | (505) 326-2549 | Blind cleaning specialty and blinds store — single-service specialist |
| Awesome Window Cleaning LLC | (505) 215-3710 | Window cleaning specialty — single-service specialist |
| AAB Continuous Gutters | (505) 632-2605 | Gutter company / gutter cleaning only |
| J and T Distributing | (505) 324-0570 | Janitorial supplies distributor — sells products, not a cleaning service |
| Links II, Inc Personal Care Services | (505) 326-5577 | In-home personal care / home health aides, not cleaning |
| HouseMaster Home Inspections | (505) 325-5020 | Home inspection service, not cleaning |
| Homeaglow (Farmington pages) | — | National lead-gen platform with no local operator — excluded by rule |

## Files

 - day-07-nm-farmington-zip87401-house-cleaning-inserts.json (3 businesses + 3 listings)
 - day-07-nm-farmington-zip87401-house-cleaning-leads.json (1 lead)
 - Nothing was inserted into any database; no site files edited; no git run.
