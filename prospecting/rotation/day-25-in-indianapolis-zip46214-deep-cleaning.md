# Day 25 — Indiana | Indianapolis | ZIP 46214 | Deep cleaning

Cell: IN / Indianapolis / 46214 / "Deep cleaning" (exact label verified in ~/workspace/van-squad/js/data.js). Target ZIP 46214 is west Indianapolis (Eagle Creek / Speedway edge). All 6 qualifying businesses serve 46214 itself — no adjacent-ZIP expansion was needed. Every business was verified from its own website first (residential deep cleaning performed at customers' homes + public phone), then deduped against the live DB dump at /tmp/day25-open.json (2,135 rows) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone matches for any included business. Commercial-janitorial-only businesses were excluded.

**Critical dedupe rule applied:** a business already inserted as House cleaning must NOT be re-added as Deep cleaning. All 7 Wave 1 Indianapolis House cleaning businesses (ZIP 46204 cell, now present in the DB dump) were therefore skipped here even where they explicitly offer deep cleaning — see Dedupe section.

## Included (6)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL |
|---|---|---|---|---|---|---|---|
| The Cleaning Authority - Indianapolis | (317) 586-4573 | Deep cleaning | Indianapolis | https://www.thecleaningauthority.com/indianapolis | None published on own location page | High — own Indianapolis location page lists 46214 explicitly in its own service-ZIP list, uses its Detail-Clean Rotation System® to "deep clean each of your rooms," and gives its address as 5655 West 74th Street, Indianapolis, IN 46278 with this phone; distinct franchise location from The Cleaning Authority - Fishers (317) 527-4573 | https://www.thecleaningauthority.com/indianapolis |
| Orange Glow LLC | (754) 703-1101 | Deep cleaning | Indianapolis | https://www.tryorangeglow.com/ | None published on own site | Medium — own site lists 46214 explicitly in its "Indianapolis-area ZIP codes we serve" list and offers a named "Deep Clean" / "The Deep Glow" residential plan (inside appliances, grout, baseboards) as a residential-first service, with this phone on the site and Speedway/Traders Point in its areas; Medium because the business itself says it is new / "now welcoming early clients" and its phone is a 754 (Florida) number | https://www.tryorangeglow.com/ |
| Correa's Cleaning Service | (317) 650-8031 | Deep cleaning | Indianapolis | https://www.correascleaningservices.com/cleaning-services-in-indianapolis/ | correascleaningservices@gmail.com — https://pressadvantage.com/story/42879-correa-s-cleaning-service-now-serves-entire-indianapolis-area (contact block of the company's own press release, issued by Correa's Cleaning Service / Ana Correa; not found on its own website in fetched text, so coordinator may drop if applying a strict own-site-only lead rule) | Medium — own Indianapolis page has a detailed named "Deep Cleaning" section for homes (baseboards, full kitchen/bathroom cleanse), family-owned since 2018, "serving Indianapolis and the surrounding communities" / entire Indianapolis Metro, Indy Office phone on the same page; no ZIP-level list is published, so service_zips = [46214] only | https://www.correascleaningservices.com/cleaning-services-in-indianapolis/ |
| Becht Pride | (317) 783-2390 | Deep cleaning | Indianapolis | https://bechtpride.com/ | None published on own site | Medium — own site: residential cleaning at homes, own articles name "Deep Cleaning: An intensive cleaning session that covers every inch of the home," serves Marion, Hamilton, Johnson, Morgan, Shelby, Boone, Hancock and Hendricks counties (46214 is in Marion County), office at 2461 Directors Row Suite H, Indianapolis, IN 46241 (adjacent west-side ZIP) with this phone; no explicit 46214 ZIP list published | https://bechtpride.com/ |
| Maid Brigade of Indianapolis | (317) 781-6243 | Deep cleaning | Indianapolis | https://www.maidbrigade.com/in/indianapolis/ | None published on own location page | Medium — own Indianapolis location page: "offering regular cleaning, deep cleaning" for homes and lists Speedway, Avon, Brownsburg and Plainfield among areas served (Speedway borders 46214 to the south), local phone (317) 781-6243 printed on the same page for existing customers and matching its Google listing at 5230 Madison Ave; no explicit 46214 ZIP list published, so service_zips = [46214] only | https://www.maidbrigade.com/in/indianapolis/ |
| Molly Maid of Greater Indianapolis | (317) 483-0391 | Deep cleaning | Indianapolis | https://www.mollymaid.com/locations/greater-indianapolis/ | None published that could be verified | Medium — locally owned franchise per its own listing description ("customized and deep cleaning plans," 44-point checklist, in-home residential cleaning), territory described as North, South & West Indy, based at 2441 Production Dr Suite 109, Indianapolis, IN 46241 (adjacent west-side ZIP) with this phone; Medium because mollymaid.com was blocked for direct fetch, so phone/description were taken from its Google Business listing corroborated by TrustAnalytica, not read on the location page itself. This business was listed as a reserve (not inserted) in the Wave 1 46204 House cleaning cell | https://www.mollymaid.com/locations/greater-indianapolis/ |

## Dedupe — Wave 1 House cleaning duplicates SKIPPED (same name/phone rule)

All 7 are present in /tmp/day25-open.json as House cleaning and in day-25-in-indianapolis-zip46204-house-cleaning-inserts.json. None was re-added as Deep cleaning, and none of their leads was re-collected here:

- Housekeeping Maid Easy — (317) 579-1988 — explicitly offers deep cleaning in Indianapolis on its own site, but already inserted as House cleaning. SKIP.
- Indianapolis Cleaning Service — (463) 213-3374 — explicitly offers Deep Cleaning on its own site, but already inserted as House cleaning. SKIP.
- DeluxeMaid — (317) 721-1105 — already inserted as House cleaning. SKIP.
- Method Cleaning — (317) 993-9186 — already inserted as House cleaning. SKIP.
- The Dust Devils — (317) 268-8639 — offers deep house cleaning, but already inserted as House cleaning. SKIP.
- Indy Clean Team — (317) 794-2499 — offers deep cleans, but already inserted as House cleaning. SKIP.
- Maid 2 Clean 317 — (812) 606-2196 — offers deep cleans, but already inserted as House cleaning. SKIP.

Other DB checks: same-brand franchise locations in other cities/states (e.g., The Cleaning Authority - Boise, Molly Maid of Boise, Maid Brigade of Milwaukee) are different local operators with different names and phones — not duplicates of the Indianapolis locations above. No included name or phone appears anywhere else in ~/workspace/van-squad/prospecting/ as an insert; the only prior mention of Molly Maid of Greater Indianapolis / (317) 483-0391 and The Cleaning Authority - Fishers is as un-inserted reserves/exclusions in the Wave 1 file.

## Exclusions

- **Patriot Maids ((317) 765-0489)** — EXCLUDED: multi-city residential/commercial cleaning referral agency ("connects clients with experienced, professional cleaners"; self-described referral agency), same exclusion as Wave 1.
- **Indianapolis Elite Cleaners ((317) 967-9259)** — EXCLUDED: own site disclaimer states it "is not the employer of the house cleaner referred to you. We refer highly vetted cleaners" — referral model, no confirmed local operator of its own.
- **Christina's Complete Clean ((317) 455-4808)** — EXCLUDED for this cell: own site offers One-Time & Deep Cleaning, but limits service to the northside of Indianapolis (as far west as Traders Point, plus Carmel, Zionsville, Westfield, Fishers, Noblesville, Whitestown, Meridian-Kessler, Butler-Tarkington); coverage of 46214 itself was not confirmed from its own materials. Same reasoning as Wave 1.
- **The Cleaning Authority - Fishers ((317) 527-4573)** — NOT USED: a different franchise location from the included Indianapolis location; its own materials centre on Fishers/north-east suburbs. Including both brand locations for the same ZIP would double-count the brand, and only the Indianapolis location (317) 586-4573 publishes 46214 in its ZIP list.
- **Merry Maids of South Indianapolis ((317) 314-5467, 2450 Production Dr, Indianapolis)** — EXCLUDED for this cell: its own location is the south-Indianapolis territory (home-cleaners-south-indianapolis-in); one-time deep clean is offered, but service to west-side 46214 was not confirmed from its own materials.
- **Homeaglow, Thumbtack, Walmart House Cleaning Services** — EXCLUDED: national lead-gen / marketplace platforms with no local operator.
- **Bio-One of NW Indianapolis ((317) 435-1611) / Bio-One Marion County** — EXCLUDED: biohazard, trauma, hoarding and decontamination specialty cleaning, not general residential deep cleaning.
- **SERVPRO of Central / Downtown Indianapolis** — EXCLUDED: national restoration/specialty-cleaning chain (water/fire/mold), not a residential deep-cleaning service.
- **Clean Indy LLC ((765) 553-4869), Maryco Cleaning Service ((317) 652-2523), Level 10 Solutions ((317) 779-4239), Tidy Clean LLC** — EXCLUDED: commercial / janitorial / facility cleaning only on their own materials; no residential deep cleaning confirmed.
- **First Serve Cleaning and Restoration ((463) 304-9920)** — EXCLUDED: carpet, tile/grout, upholstery and water-damage restoration focus; residential house deep cleaning not confirmed from its own materials.

## Leads

1 published email collected (see matching -leads.json): Correa's Cleaning Service — correascleaningservices@gmail.com, source = contact block of the company's own Press Advantage press release (URL in the table above). Flag for coordinator: this email was NOT found on the business's own website in fetched text; if the strict own-website/Google-listing source rule is applied, drop this lead. No other included business published an email on its own site/location page that could be verified. Emails are leads only — never written to business profiles.

## Files

- day-25-in-indianapolis-zip46214-deep-cleaning-inserts.json — 6 businesses + 6 listings, exact coordinator shape (business fields only as specified, listings title "Deep cleaning at your location").
- day-25-in-indianapolis-zip46214-deep-cleaning-leads.json — 1 lead (with the source caveat above).

Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
