# Rotation Day 2 — Arizona: Phoenix × Pool cleaning & maintenance × ZIP 85032

- Researched: 2026-10-15 (nightly rotation, Day 2 of Rotation 1)
- Cell note: Phoenix is Arizona's largest city. Pool cleaning & maintenance was picked because Phoenix has the strongest local supply for it — pools are serviced weekly at the customer's home, so on-site service is the business model itself — and ZIP 85032 (Paradise Valley Village, North Phoenix) is a populous residential ZIP with dense local pool-service supply. No category had been done for Phoenix before.
- Sources: each business's own website first, then public listings (Google Business, Yelp, Birdeye, Chamber of Commerce, DexKnows, Groupon service-area page). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: INSERTED 2026-10-15 via the stored Supabase connector (vs_rest.py) — 8 businesses + 8 listings, HTTP 201 on both posts, verified with a follow-up query (see run report and rotation state file).

| Name | Phone | Category | City | Website | Confidence | Source |
|---|---|---|---|---|---|---|
| AZ Mobile Pool Service | (602) 595-4586 | Pool cleaning & maintenance | Phoenix | https://azmobilepoolservice.com/ | High — own site: weekly pool & spa cleaning service, address on the site is 4041 E Hartford Ave, Phoenix, AZ 85032, phone on the site | Business's own website |
| State 48 Pool & Fence LLC | (623) 267-6400 | Pool cleaning & maintenance | Phoenix | https://www.state48poolfence.com | High — own site: weekly pool service offered, address on the site is 15202 North 42nd Street, Phoenix, AZ 85032, phone on the site | Business's own website |
| AAA Pool Services | (602) 413-9306 | Pool cleaning & maintenance | Phoenix | http://3apools.com/ | High — own site: flat-rate weekly pool service in North Phoenix, phone on the site ("not a call center"); its Groupon service-area page lists 85032 as a served ZIP and a CityOf listing gives a Phoenix, AZ 85032 address | Business's own website + Groupon service-area page + CityOf listing |
| Pathfinder Pools | (602) 314-5375 | Pool cleaning & maintenance | Phoenix | http://www.pathfinderpools.com/ | Medium — Chamber of Commerce and NAICS listings place it at 3218 E Bell Rd, Phoenix, AZ 85032; Google/Birdeye listings list it as a pool service & cleaner with this phone and the business describes itself as a pool service and cleaning company; its own website was down at check time (server PHP error) | Google Business listing, Birdeye, Chamber of Commerce |
| R & R Everclear Pool Services | (480) 502-2890 | Pool cleaning & maintenance | Phoenix | http://www.rreverclear.com/ | Medium — own site: weekly service, "we cover the entire valley," Phoenix named, and its own contact pages give this phone (Phoenix, AZ 85024 base); weekly cleaning confirmed, 85032 covered by its valleywide Phoenix service claim rather than a ZIP list | Business's own website |
| Hydrobright Pools | (623) 323-9159 | Pool cleaning & maintenance | Phoenix | https://phoenixpoolcleaningservice.com/ | Medium — own site page is titled for pool cleaning service in Phoenix, AZ 85032 and lists weekly pool service with this phone on the page; template-style site and the same page lists a Phoenix, AZ 85024 base | Business's own website |
| Bamboo Pools Service and Repair | (602) 349-1515 | Pool cleaning & maintenance | Phoenix |  | Medium — owner-claimed Yelp listing: address 18202 N 41st St, Ste 102, Phoenix, AZ 85032, service locations include Phoenix, AZ 85032, pool cleaning (net, vacuum, brush, chemistry) in its own service description, header phone as listed; note the owner's bio text on the same page mentions a second number (480-521-6156), so the header phone should be re-verified when the business claims its profile; no own website found | Yelp (owner-claimed listing) |
| Just Swim LLC | (602) 499-3998 | Pool cleaning & maintenance | Phoenix |  | Medium — DexKnows listing: 15430 N 25th St, Phoenix, AZ 85032, phone as listed, and its listing describes weekly or bi-weekly pool service and maintenance (cleaning, skimming, vacuuming, brushing, chemical balancing); no own website found | DexKnows |

## Dedupe
- Live database (Supabase REST via the stored connector, checked 2026-10-15 before insertion): 35 active businesses, all in the Sacramento area (batch 1 = 25, Day 1 = 8, plus Brothers Mobile Bike Shop and AFG Handyman Service). No name or phone overlap with this batch.
- All prior prospecting files (seeded-batch-1, Day 1 rotation files, Sacramento prospect and outreach lists): grep for every name and phone in this batch returned no matches.

## Excluded (checked, did not pass the gates)
- Hollywood Pools (Phoenix) — EXCLUDED for this cell: own site verifies weekly pool service and phone (602) 733-7304, but its stated service areas are Phoenix / Moon Valley / Paradise Valley with a Moon Valley (85022) base — 85032 coverage could not be confirmed from its own materials.
- Pool Troopers (Phoenix page) — EXCLUDED: multi-state pool-service chain; its Phoenix page lists 85032, but no local Phoenix operator phone could be verified (national booking route).
- America's Swimming Pool Company of North Phoenix (ASP) — EXCLUDED: national franchise; 85032 coverage not confirmed on its North Phoenix page.
- Discount Pool Service Phoenix (2625 E Greenway Pkwy, 85032) — EXCLUDED: its Google listing shows "Permanently Closed."
- Pool Daddy Az — EXCLUDED: listings give a consistent phone and weekly service, but the business's current own website is a remodeling/plastering template with conflicting location text and a second phone number, so a clean public phone + weekly-cleaning confirmation from its own materials could not be established.
- Crystal Blue Enterprises (2802 E Greenway Rd, 85032) — EXCLUDED: listings classify it mainly as a swimming pool supply store; weekly at-home pool cleaning could not be confirmed from its own materials.
- Pool Renew LLC — EXCLUDED for this cell: own site places it in Phoenix, AZ 85022 and its own materials focus on tile/calcium cleaning; weekly pool cleaning for 85032 not confirmed.
- Phx Pool Solutions — EXCLUDED for this cell: phone confirmed on its own site, but 85032 coverage not confirmed in its own materials (Greenway / 7th Ave area base).
- Abe's Pools and Spas and Leslie's (Cave Creek Rd) — EXCLUDED: storefront pool-supply stores; not mobile-first operators for this directory cell.
- Copper Leaf Pools — EXCLUDED: pool design-build / remodel contractor, not a weekly cleaning & maintenance operator.
- Kindred Spirit Pool Service and Repair — EXCLUDED: a Google listing shows it in Phoenix with phone (602) 461-5417, but its own website (kindredspiritpoolservice.com) did not resolve at check time — DNS failure confirmed by both a text fetch and a live-browser visit — so weekly cleaning and 85032 service could not be verified from its own materials.

## ZIP note
- 85032 is new to ZIP_NAMES in js/data.js. Added: 85032 (Paradise Valley Village, Phoenix), plus the evidenced service ZIPs used in this batch — 85022 (Moon Valley, Phoenix), 85024 (Desert Ridge, Phoenix), 85027 (Deer Valley, Phoenix), 85254 (North Scottsdale / Phoenix). Asset version bumped and pushed with this batch (see run report).
