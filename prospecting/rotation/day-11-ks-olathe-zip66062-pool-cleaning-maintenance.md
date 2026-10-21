# Day 11 — Olathe, KS · ZIP 66062 · Pool cleaning & maintenance

- Researched: 2026-10-21 (public web sources only)
- Cell target: Olathe, Kansas × ZIP 66062 × "Pool cleaning & maintenance" (label verified in ~/workspace/van-squad/js/data.js)
- Result: **5 qualifying businesses.** Olathe's pool market is dominated by
  builders, liner installers, and retail pool/spa stores; dedicated
  cleaning/maintenance route operators are a small set, mostly Johnson
  County operators based in Olathe or explicitly serving Olathe from
  adjacent Overland Park / the Kansas City metro. Five verified operators
  is the honest yield; no adjacent-ZIP expansion was needed (5 ≥ 3) —
  the target ZIP 66062 is used for every business below.

## Businesses (5)

| # | Business | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|----------|-------|----------|------|---------|--------------------------|------------|--------|
| 1 | Crystal Clear Pools KC | (913) 272-5442 | Pool cleaning & maintenance | Olathe | https://www.crystalclearpoolskc.com/ | none | Medium — Olathe-based (10750 S Cedar Niles Cir, Olathe); its Google listing's own description calls it "a full service pool cleaning & maintenance company" for in-ground pools, and its HomeAdvisor profile lists Swimming Pool Cleaning; phone from the listing — the website homepage itself returned 404 to the research tools, so this one is listing-verified, not own-site-verified | Google Business listing + HomeAdvisor profile |
| 2 | KC Pools | (913) 782-7777 | Pool cleaning & maintenance | Olathe | http://www.kcpools.com/ | none | Medium — own website prints its Olathe office (509 E Kansas City Rd, Olathe, KS 66061) and phone, and has a dedicated "Pool Repair, Service, and Maintenance" section (openings/closings, inspections, equipment service at customers' pools); builder-led company and no explicit weekly cleaning route on the site, so Medium not High | Own website |
| 3 | Country Club Pool & Spa | (913) 522-4489 | Pool cleaning & maintenance | Olathe | https://ccpoolandspa.com/ | chrisklyon@gmail.com (https://ccpoolandspa.com/) | High — own website advertises "Once Weekly to Daily Pool Service" (cleaning + chemical balancing at the customer's pool) and prints the phone and email on the site; based in adjacent Overland Park (10650 W 168th Ct) and listed as an Olathe-area pro with weekly/biweekly service on HomeAdvisor | Own website + HomeAdvisor Olathe listing |
| 4 | Banks Blue Valley Pool & Spa | (913) 897-9290 | Pool cleaning & maintenance | Olathe | https://www.bluevalleyaquatech.com/swimming-pool-maintenance-overland-park-ks | none | Medium — own maintenance page confirms scheduled residential pool cleaning (weekly skimming, brushing, vacuuming, chemistry balancing, basket/filter checks) and prints this phone (also on its Google listing); the page names Overland Park, Leawood, and "the greater Kansas City area" rather than Olathe explicitly — its shop at 8026 W 151st St, Overland Park sits on the Olathe border in Johnson County | Own website + Google Business listing |
| 5 | Aquaticare | (816) 331-3454 | Pool cleaning & maintenance | Olathe | http://www.aquaticarekc.com/ | none | Medium — own website's service-area list explicitly includes Olathe, states it serves residential pools, and its FAQ describes weekly home visits ("we come on the same day every week", "we will come to your house", vacuuming); phone from its Google listing (Belton, MO base address matches the site's footer) | Own website + Google Business listing |

Notes:
- service_zips = ["66062"] for all five — none of the businesses publish a
  ZIP-code list; coverage of the Olathe cell is by Olathe base address
  (Crystal Clear Pools KC, KC Pools), an explicit Olathe entry in the
  business's own service-area list (Aquaticare), an Olathe-area pro
  listing with weekly service (Country Club Pool & Spa), or a stated
  greater-Kansas-City / Johnson County service area from an
  Olathe-border shop (Banks Blue Valley Pool & Spa).
- Listing title used (one per business): "Pool cleaning & maintenance at
  your location". The inserts mirror the Day 10 Omaha pool template
  key-for-key; the exact category label "Pool cleaning & maintenance" is
  set on each business record.
- Banks Blue Valley's site also shows a second number, (913) 851-5809,
  in two FAQ/scheduling lines; (913) 897-9290 is used because it is the
  number in the site's main service text and on its Google listing.

## Email leads

**1 lead.** Country Club Pool & Spa publishes chrisklyon@gmail.com on
its own website (https://ccpoolandspa.com/) — collected in the matching
-leads.json. No other included business publishes a business email on
its own website or Google listing that could be verified (an email for
Banks Blue Valley appears only in redacted form on a PRWeb release, so
it was not collected).

## Dedupe

All five names and phones were checked against (a) the live directory
(821 active businesses via vs_rest.py) and (b) every file in
~/workspace/van-squad/prospecting/, including tonight's Day-11 Kansas
files (all Wichita cells). No name or phone matches — Kansas City-metro
pool operators are new territory for the directory. (The similarly named
Crystal Waters Pool Management and Crystal Clear Waters of Topeka are
different businesses; both were researched and excluded below, neither
is in the directory.)

## Exclusions (researched and rejected)

- **Swimfun / Swimfun Bullfrog Spas** — 11977 S Strang Line Rd, Olathe,
  (913) 780-4455 — retail pool/spa showroom in Olathe; its own materials
  describe retail sales and "we service what we sell" (liner/equipment
  installs), with no routine home-pool cleaning/maintenance route.
- **Commercial Aquatic Services** — 1542 E Spruce St, Olathe,
  (913) 764-6990 — serves the commercial pool and spa industry
  (equipment, supplies, chemicals); not residential home-pool cleaning.
- **River Pools Kansas City** — 19000 W 158th St, Olathe,
  (913) 513-0133 — fiberglass pool builder/installer; no
  cleaning/maintenance service in its materials.
- **SpaZoom** — Olathe, (833) 772-9666 — hot tub/spa service only.
- **Crystal Waters Pool Management** — (913) 318-8136 — Kansas City pool
  *management* company (staffing/management focus for community, HOA,
  and private pools); its site states only a general Kansas/Kansas City
  service area with no Olathe or home-pool cleaning-route confirmation.
- **Icon Pools, LLC** — Grandview/Belton, MO, (816) 331-8279 — weekly
  cleaning is real, but its own published service-area list (Belton,
  Raymore, Lee's Summit, Overland Park, Leawood, etc.) does not include
  Olathe.
- **ASP – America's Swimming Pool Company of Kansas City** —
  (816) 327-9028 — national franchise location; its Kansas City pages
  offer weekly maintenance but do not confirm Olathe coverage, and no
  Olathe-area listing could be verified.
- **Werth Water Works** — (913) 382-8489 — lists Olathe in its service
  area, but its own materials cover pool supplies, equipment, and
  construction/repair guidance; no cleaning/maintenance visit service
  confirmed.
- **Frontier Pools (frontierpools.godaddysites.com)** — genuine weekly
  cleaning menu, but its own site footer places it in Centerville,
  Minnesota, and it publishes no phone — wrong state, no verifiable
  phone.
- **Martin Pool Care** — weekly maintenance site with Florida client
  testimonials (Coral Gables/Pinecrest) and no phone or Kansas location
  anywhere in its materials.
- **KC Pool Services (kcpoolservices.com)** — despite the name, its own
  site states it is based in Walnut Creek, California.
- **Waterworks Pools & Spas (waterworkspools.com)** — the weekly
  maintenance packages belong to a Moncton, New Brunswick, Canada
  business.
- **Elite Pool Service** — Blue Springs, MO, (816) 220-1870 — no Olathe
  coverage confirmed.
- **The Pool Brothers, Inc.** — Overland Park, (913) 424-4455 —
  in-ground liner specialists; no cleaning/maintenance route.
- **Frontier Pool (City of Olathe)** — a municipal public pool, not a
  service business.
