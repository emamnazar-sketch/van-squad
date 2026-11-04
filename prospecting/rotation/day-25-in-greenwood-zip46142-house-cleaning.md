# Day 25 — Indiana | Greenwood | ZIP 46142 | House cleaning

Cell: IN / Greenwood / 46142 / "House cleaning" (exact label verified in js/data.js). All 5 qualifying businesses serve 46142 itself — no adjacent-ZIP expansion was needed. Every business was verified from its own website first (residential cleaning at customers' homes + public phone on its own site), then deduped against /tmp/day25-open.json (2,135 rows) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone matches for any included business (same-brand franchises in other states/cells have different names/phones and are distinct local operators).

## Included (5)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Pristine House Cleaning | (317) 886-1033 | House cleaning | Greenwood | https://pristinehouseclean.com/greenwood-in | karen@pristinehouseclean.com — own Greenwood page footer: https://pristinehouseclean.com/greenwood-in | High — own Greenwood page: "serves Greenwood (46142/46143) with dependable house cleaning for busy households, apartments, and moves," recurring/one-time residential cleans at homes, Greenwood phone (317) 886-1033 and address 438 S Emerson Ave Suite 145, Greenwood, IN 46143 printed on the page; service_zips = 46142 + its own stated 46143 | Business's own website |
| Reed's Cleaning Solutions | (317) 358-9844 | House cleaning | Greenwood | https://www.reedscleaningsolutions.com/ | acleanerwayindy@gmail.com — own website contact block: https://www.reedscleaningsolutions.com/ | High — own site: local family-owned company founded 2020, "proudly served Greenwood, Indiana," mission includes residential cleaning, reviews describe cleaning customers' houses; phone and email printed on own site; no ZIP list published, so service_zips = [46142] only | Business's own website |
| The Cleaning Authority - Indianapolis South | (317) 494-7865 | House cleaning | Greenwood | https://www.thecleaningauthority.com/indianapolissouth | — none published on its own site | High — own Indianapolis South page headed "Greenwood House Cleaning," residential house/maid cleaning at homes, "proudly serve residents in Greenwood," and its own service-ZIP list includes 46142; phone (317) 494-7865 is the number on its own site (a different number, (317) 838-3055, appears on Google/third-party listings — own site used); service_zips = 46142 + its full own stated list | Business's own website |
| Merry Maids of South Indianapolis | (317) 659-8235 | House cleaning | Greenwood | https://merrymaids.com/home-cleaners-south-indianapolis-in | — none published on its own site | High — own South Indianapolis page: professional home cleaners, weekly/biweekly/monthly house cleaning at homes, "proudly provide house cleaning services throughout Indianapolis and the nearby communities of … Greenwood, and Center Grove"; phone 317.659.8235 printed on its own page (Google listing shows a different number — own site used); no ZIP list published, so service_zips = [46142] only | Business's own website |
| AJ's Picture Perfect Cleaning Inc. | (317) 530-8148 | House cleaning | Greenwood | http://ajsppc.com/ | ajspbc1026@gmail.com — own Services page (cancellation-policy contact): https://ajsppc.com/our-services | High — own Services page lists Greenwood in "The areas we cover," details residential cleans room-by-room (bedrooms, kitchens, bathrooms, making beds) and free home cleaning via Cleaning for a Reason; office phone 317-530-8148 on own site; based Whiteland (address ZIP 46184 printed on own site), so service_zips = 46142 + 46184 | Business's own website |

## Exclusions

- **Christina's Complete Clean ((317) 733-7751 / (317) 455-4808)** — EXCLUDED: own site limits residential service to Carmel and the northside of Indianapolis (Westfield, Zionsville, Fishers, Noblesville, Whitestown, Meridian-Kessler, Butler-Tarkington); no Greenwood/southside coverage.
- **Molly Maid of Greater Indianapolis ((317) 483-0391)** — EXCLUDED for this cell: its own site could not be fetched in this run (fetch blocked), so Greenwood coverage could not be confirmed from its own materials; it was also only a reserve (not inserted) in the Day 25 Indianapolis 46204 cell. Reserve if a future cell re-verifies it.
- **The Maids in Greenwood / Terre Haute (1-800-843-6243)** — EXCLUDED: only a national 1-800 number on its Greenwood page; no local operator phone confirmed.
- **Two Maids of Carmel ((463) 213-3889)** — EXCLUDED: own materials describe northside Indianapolis/Carmel/Noblesville service only; no Greenwood coverage.
- **Hard Working Moms Cleaning and Pet Service ((317) 658-0052, 199 W Pearl St, Greenwood, IN 46142, BBB listing)** — EXCLUDED: no verifiable own website found in this run and residential house cleaning could not be confirmed from the business's own materials (BBB listing alone is insufficient under the own-materials gate).
- **A Change Cleaning Services ((317) 960-6457, Greenwood)** — EXCLUDED: no own website found; residential service not confirmed from its own materials.
- **Ingram Janitorial LLC ((317) 668-8915), Executive Image Building Services ((317) 865-1366), American Facility Care, ServiceMaster Commercial Indianapolis, Indy Office Keepers, Maximum Effort** — EXCLUDED: janitorial/commercial-only from their own materials; no residential house cleaning.
- **Executive Window Cleaning, Shine of South Indianapolis, Rapid Flow Dryer Vent Co, Clean-N-Shine (carpet)** — EXCLUDED: window/dryer-vent/carpet specialties, not house cleaning.
- **Homeaglow, Thumbtack, Angi/HomeAdvisor listings** — EXCLUDED as sources/operators: national lead-gen/matching platforms with no local operator of their own.
- **Wish's Cleaning Services ((317) 446-6722)** — EXCLUDED for this cell: own site says Indianapolis and surrounding areas with no Greenwood-specific confirmation.

## Leads

3 published emails collected (see matching -leads.json): Pristine House Cleaning, Reed's Cleaning Solutions, AJ's Picture Perfect Cleaning Inc. Emails are leads only — never written to business profiles.

## Files

- day-25-in-greenwood-zip46142-house-cleaning-inserts.json — 5 businesses + 5 listings, exact coordinator shape.
- day-25-in-greenwood-zip46142-house-cleaning-leads.json — 3 leads.
