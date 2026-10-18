# Rotation Day 6 — Colorado: Aurora × Handyman × ZIP 80013

- Researched: 2026-10-18 (nightly rotation, Day 6)
- Cell note: ZIP 80013 is south/east Aurora (Seven Hills / Smoky Hill area). All seven businesses are Aurora-based operators whose own materials confirm handyman / home-repair work at customers' homes in Aurora; service to 80013 is within their stated Aurora service area. Handyman work is on-site at the customer's home by definition.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented.
- Status: PREPARED 2026-10-18 — batch files only, NOT inserted (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Grandma's Handyman Service | (303) 693-3003 | Handyman | Aurora | http://www.grandmashandyman.com/ | alison@grandmashandyman.com — own website http://www.grandmashandyman.com/ (mailto link on site) | High — own site: locally owned, address 319 Ivory Circle, Aurora, CO on site, phone 303-693-3003 repeated on site, handyman/home repair in Aurora homes | Business's own website |
| Seven Hills Home Maintenance | (303) 956-2051 | Handyman | Aurora | http://sevenhillshandyman.com/ | — none found | Medium — own site: owner/sole operator Bryan, licensed & insured handyman operating in Denver/Aurora metro, ceiling fans/TV mounting/faucets and small home jobs in homeowners' homes; phone and Aurora address (195 S Sable Blvd) from Google Business listing, not visible in fetched site text | Business's own website + Google Business listing |
| The Handy Dads | (833) 724-2639 | Handyman | Aurora | https://www.thehandydadsco.com/ | — none found | High — own site: phone +1 (833) 724-2639 on site, "handyman in Denver, Aurora", home repairs/maintenance at homes; Google listing address 19003 E Bates Ave, Aurora | Business's own website |
| Hire a Handyman | (303) 848-9377 | Handyman | Aurora | https://hireahandymanco.com/ | hireahandyman303@gmail.com — own website https://hireahandymanco.com/ | High — own site: Aurora, CO handyman + remodeler, phone (303) 848-9377 and email both on site, punch-list repairs and home work for Aurora homeowners (site footer also shows a second number (719) 259-3239 — the 303 number matching its Google listing was used) | Business's own website |
| OneDialPro Handyman & Property Services | (720) 287-7945 | Handyman | Aurora | https://onedialpro.com/ | — none found | High — own site: based in Aurora, address 14010 E Harvard Pl Ste 225, Aurora, CO 80014 and phone +1 720-287-7945 on site, handyman repairs/mounting/assembly in homes and rental properties | Business's own website |
| On the Way Masters | (720) 739-0789 | Handyman | Aurora | https://onthewaymasters.com/ | — none found | Medium — own site confirms handyman, installation, drywall, furniture assembly and repair/upkeep in customers' homes in Colorado; phone and Aurora address (4935 S Crystal St) from Google Business listing, phone not visible in fetched site text | Business's own website + Google Business listing |
| Paper Street Renovations | (720) 755-6995 | Handyman | Aurora | https://paperstreetrenovationsllc.godaddysites.com/ | — none found | Medium — own site (Paper Street Renovations LLC): repair & remodeling and maintenance/home services — "for anything your home might need", honey-do lists, painting/drywall/flooring; phone and Aurora address (1020 S Pitkin St) from Google Business listing | Business's own website + Google Business listing |

## Dedupe
- Live DB: checked via vs_rest.py get businesses?select=name,phone&status=eq.active (344 active rows, HTTP line stripped) on 2026-10-18 — no name or phone matches for any business in this batch.
- Prior prospecting files in ~/workspace/van-squad/prospecting/: grep for every name, phone and email in this batch returned no matches.

## Excluded (checked, did not pass the gates)
- Handyman Connection of South Aurora (15200 E Girard Ave, Aurora; (303) 386-7778) — EXCLUDED: national franchise chain, no independent local operator site verified.
- Ace Handyman Services — EXCLUDED: national franchise.
- A-Z Property Solutions (3079 S Bahama St, Aurora; (720) 841-5128; wegetitfixed.com) — NOT INCLUDED: its own website could not be fetched/read during this run, so own-materials verification was not completed; Google listing alone was not used.
- Joelles Handyman LLC (joelleshandyman.com; (720) 812-2479) — NOT INCLUDED: its own website could not be fetched/read during this run.
- A To Z Handyman Services (432 S Newark Way, Aurora; (303) 947-1212) — EXCLUDED: its website atozhandymanservices.com is an expired domain-for-sale page, so no own materials confirm a current operator.
- Madrils Maintenance — EXCLUDED: only an Angi/HomeAdvisor aggregator profile, no own website.
- Royal One Services (royaloneservices.com; (720) 449-4111) — EXCLUDED for this category: own site describes commercial building maintenance / day porter / building engineer work, not residential handyman work at customers' homes.
- Dypak Services, Frias Handyman Services, ADP Maintenance and Janitorial — NOT INCLUDED: only defunct Google business.site pages, own materials could not be verified.
- Helpful Friendly Neighborhood Handyman, Krenzke Home Improvements, AK Remodeling (listed as possibly temporarily closed) — NOT INCLUDED: no verifiable own website (Facebook/meta listing only).

## ZIP / expansion note
- No expansion beyond the cell was needed for count; all businesses are Aurora operators serving 80013. No business published its own stated service-area ZIP list, so every business carries service_zips ["80013"] only.

## Email leads
- 2 published emails collected, both from the businesses' own websites: Grandma's Handyman Service — alison@grandmashandyman.com, and Hire a Handyman — hireahandyman303@gmail.com (see the matching -leads.json). No other business in this cell publishes a readable email on its own site or Google listing.
