# Rotation Day 38 — Pennsylvania: Erie × Handyman × ZIP 16504

- Researched: 2026-11-19 (nightly rotation, Day 38)
- Cell note: ZIP 16504 is Erie, Erie County, PA. No qualifying business with a verifiable own website was found based inside 16504 itself, so the cell was expanded to adjacent Erie ZIPs in the same city (see ZIP note below) — all four included businesses are Erie operators whose own materials explicitly state Erie / Erie County service, and handyman work is performed on-site at the customer's home.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED 2026-11-19 — batch files only, NOT inserted (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Mr. Fix it Handyman | (814) 823-9908 | Handyman | Erie | http://www.mrfixithandyman.co/ | — none found | High — own site: "We Serve Erie, PA & Surrounding Areas", "Call us at (814) 823-9908 to speak with a local handyman", family/locally owned, licensed and insured, residential and commercial handyman services at customers' homes; own footer address 2904 Pittsburgh Avenue, Erie, PA 16508; Google listing agrees on phone/website | Business's own website |
| FIXED Home Handyman Services | (814) 434-2628 | Handyman | Erie | http://fixedhhs.com/ | — none published (site has a signup form, no readable address) | High — own site: "Handyman Services in Erie, Mercer & Crawford County, PA", "We do all the small jobs", technicians arrive at the customer's home; own How It Works page: "Call 814-434-2628", "Yes, we are local to Erie and Crawford counties… 30+ years in Erie, PA"; Google listing agrees (5107 Henderson Rd, Millcreek Twp) | Business's own website |
| Crucial Dynamics LLC | (814) 844-2970 | Handyman | Erie | https://sites.google.com/view/crucialdynamicsllc/home | — none found | Medium — own Google Sites page: family-owned small business offering "home repair, remodeling, general contracting, and handyman services" with a detailed handyman list (general repairs, carpentry, drywall, fixtures, minor plumbing/electrical) performed at customers' homes, PA 146470; phone is from its Google Business listing (1033 Guetner Ave, Erie), not printed on the fetched site page | Business's own website + Google Business listing |
| Perfectcutz LLC | (814) 315-0180 | Handyman | Erie | https://perfectcutzllc2020.wixsite.com/perfectcutzllccom | — none found | Medium — own site: "Based in Erie, PA, we proudly serve the local community" and lists a dedicated "Handyman" service among its property services performed at clients' properties; phone is from its Google Business listing (949 W 6th St, Erie, primary category Handyman), not printed on the fetched homepage; handyman is a stated service alongside landscaping/property maintenance | Business's own website + Google Business listing |

## Dedupe
- Grep of ~/workspace/van-squad/prospecting/ on 2026-11-19 for every included name and phone (Mr. Fix it Handyman / 823-9908, FIXED Home Handyman Services / 434-2628, Crucial Dynamics / 844-2970, Perfectcutz / 315-0180) returned no matches. Similar names in earlier files are different businesses with different phones (e.g. Mr. Fix It, Kenner LA, (504) 302-1436; Aaron's Mr. Fix It, Humble TX).
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Benjamin Handyman Service (Erie Google listing, (814) 450-5490) — EXCLUDED: its own website now presents a San Francisco Bay Area interior-painting business with a different phone, (801) 800-1349, and Bay Area service cities — the Erie listing could not be confirmed from the business's own materials.
- Tinkering Toolbox, LLC (Erie, tinkeringtoolbox.com) — EXCLUDED: conflicting public phones — Google listing (814) 840-1491 vs Trustindex/Google-reviews page +1 814-840-1488 — and no phone printed on its fetched own site, so no single phone could be verified.
- Lake City Handyman / handymanerie.com ((814) 841-3818) — EXCLUDED: generic template site with archived call links and no verifiable local operator identity; treated as lead-gen style listing per the gates.
- American Handyman Erie ((814) 923-7321), Erie County Handyman Services ((814) 897-6075), Erie PA Handyman ((814) 572-3186), Bob's Home Repair ((814) 455-2558) — EXCLUDED: no verifiable own website (listing/social only; Bob's listing points to verizon.com).
- Handyman Tech Repair LLC and Handley Services — EXCLUDED: computer/phone repair, not home handyman work.
- National franchise / lead-gen listings (Mr. Handyman, Ace Handyman, Angi, Thumbtack, InstaService profiles with no local operator site) — excluded per the gates, not individually listed.

## ZIP / expansion note
- Expansion WAS used: 16504 itself yielded no qualifying operator with a verifiable own website, so the cell expanded to adjacent Erie ZIPs in the same city. Mr. Fix it Handyman's own site gives its Erie address as 16508 (included in its service_zips). The other three businesses state Erie / Erie County service by city/county name only and publish no ZIP list, so they carry 16504 only.
- Full set of ZIPs in this batch's service_zips: 16504, 16508.

## Email leads
- 0 published emails collected — none of the four businesses publishes a readable email on its own website or Google listing (matching -leads.json is an empty array).
