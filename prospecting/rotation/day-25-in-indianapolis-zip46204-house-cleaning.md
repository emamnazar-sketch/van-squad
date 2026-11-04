# Day 25 — Indiana | Indianapolis | ZIP 46204 | House cleaning

Cell: IN / Indianapolis / 46204 / "House cleaning" (exact label verified). Target ZIP 46204 is downtown Indianapolis. All 7 qualifying businesses were found serving 46204 itself — no adjacent-ZIP expansion was needed. Every business below was verified from its own website first (residential house cleaning performed at customers' homes + public phone on the site or a public listing), then deduped against the live DB dump at /tmp/day25-open.json (2,104 businesses) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone matches for any included business.

## Included (7)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| Housekeeping Maid Easy | (317) 579-1988 | House cleaning | Indianapolis | https://www.housekeepingmaideasy.com/ | None published (site invites email contact but shows no address) | High — independent woman-owned since 2006; own site lists Downtown (46204) explicitly and residential recurring/deep cleaning at homes; employees, not contractors | https://www.housekeepingmaideasy.com/deep-cleaning-indianapolis/ | No DB/prospecting match on name or phone. service_zips = 46204 + its own stated areas: 46203, 46220, 46202, 46208, 46219, 46032, 46037, 46077, 46123 |
| Indianapolis Cleaning Service | (463) 213-3374 | House cleaning | Indianapolis | https://indianapoliscleaningservice.com/ | support@indianapoliscleaningservice.com — own site footer/contact block | High — own site: house & apartment cleaning by local teams, address 120 E Market St Ste 611, Indianapolis, IN 46204; states "We're not a faceless national app" | https://indianapoliscleaningservice.com/ | No DB/prospecting match. Based in the target ZIP itself |
| DeluxeMaid | (317) 721-1105 | House cleaning | Indianapolis | https://www.deluxemaid.com/ | None published on contact page | Medium — Indianapolis-only house cleaning operator; own contact page lists 1308 Central Ave, Indianapolis, IN 46202 (adjacent to 46204) and "Professional house cleaning in Indianapolis and surrounding cities"; single-metro focus, but booking/partner-platform elements keep this at Medium | https://www.deluxemaid.com/contact-us/ | No DB/prospecting match. service_zips = 46204 + its own 46202 |
| Method Cleaning | (317) 993-9186 | House cleaning | Indianapolis | https://methodcleaningllc.com/ | info@methodcleaningllc.com — own site contact section | High — locally owned & operated since 2018; own site: residential cleaning, "Serving all of Marion County" (includes 46204), based Indianapolis, IN 46201; phone + email on own site | https://methodcleaningllc.com/ | No DB/prospecting match. service_zips = 46204 + its own 46201 |
| The Dust Devils | (317) 268-8639 | House cleaning | Indianapolis | https://indydustdevils.com/ | None usable — email on own site is Cloudflare-obfuscated in fetched text, so no address was recorded (never guessed) | High — own site: regular/deep house cleaning at homes, explicitly serves "downtown Indianapolis"; local Indianapolis company, 6433 E Washington St, Indianapolis, IN 46219 | https://indydustdevils.com/ | No DB/prospecting match. service_zips = 46204 + its own 46219 |
| Indy Clean Team | (317) 794-2499 | House cleaning | Indianapolis | https://www.indycleanteam.com/ | support@indycleanteam.com — own site footer/contact block | High — family-owned, "not a franchise," based in the Indy metro; own site: residential recurring/deep/move cleaning at homes, phone + email published | https://www.indycleanteam.com/ | No DB/prospecting match. No ZIP list published, so service_zips = [46204] only |
| Maid 2 Clean 317 | (812) 606-2196 | House cleaning | Indianapolis | https://maid2clean317.com/ | None published on own site | Medium — own site (Maid 2 Clean, 317 LLC): residential home cleaning, deep cleans and recurring cleans across Indianapolis & nearby communities with home-cleaning reviews; phone is an 812 number published on its own site and no ZIP-level service list is published, hence Medium | https://maid2clean317.com/ | No DB/prospecting match. service_zips = [46204] only (no other ZIPs stated) |

## Exclusions

- **Patriot Maids ((317) 765-0489, 49 W Maryland St, Indianapolis, IN 46204)** — EXCLUDED: multi-city cleaner-matching/booking platform ("connects clients with experienced, professional cleaners"; location pages for Boston, Raleigh, Charlotte, Austin, Dallas, Houston and many more). Consistent with prior Van Squads exclusions of Patriot Maids in Day 12 (Oklahoma City), Day 14 (Sugar Land) and Day 15 (San Antonio) cells — no independent local operator confirmed from its own materials.
- **Clean Indy LLC ((765) 553-4869)** — EXCLUDED: own site is commercial/medical/janitorial/floor-care only ("focus on growing your business," offices and medical facilities); no residential house cleaning offered.
- **Maryco Cleaning Service ((317) 652-2523)** — EXCLUDED: describes itself on its listing as "A commercial cleaning company based in Indianapolis"; no residential house cleaning confirmed from its own materials.
- **Home Resets ((317) 353-7539)** — EXCLUDED: own site centers on STR/Airbnb design, furnishing, staging and turnover cleans; general residential cleaning is only a side mention and no phone appears on its own site.
- **SERVPRO of Downtown Indianapolis / Team Miller ((317) 584-7220) and SERVPRO of Central and Downtown Indianapolis ((317) 243-0896)** — EXCLUDED: national restoration/specialty-cleaning chain (water/fire/mold), not a house cleaning service.
- **Christina's Complete Clean ((317) 455-4808)** — EXCLUDED for this cell: own site limits service to the northside of Indianapolis (Lawrence to Traders Point, Zionsville, Westfield); coverage of downtown 46204 not confirmed.
- **National franchises held as reserve, not used (cell filled with independents):** MaidPro Indianapolis ((317) 863-9590, locally owned franchise), The Cleaning Authority – Fishers ((317) 527-4573), Molly Maid of Greater Indianapolis ((317) 483-0391), Two Maids of Carmel ((463) 213-3889), The Maids (877 number, no local Indianapolis operator number confirmed).
- **Platinum Cleaning, SSI Services, Forte Surfaces, Maple Thread Cleaning, Clean Pro Gutter Cleaning** — EXCLUDED: janitorial/commercial, hard-surface restoration, or gutter-only services; no residential house cleaning confirmed.

## Leads

3 published emails collected (see matching -leads.json): Indianapolis Cleaning Service, Method Cleaning, Indy Clean Team. Emails are leads only — never written to business profiles.

## Files

- day-25-in-indianapolis-zip46204-house-cleaning-inserts.json — 7 businesses + 7 listings, exact coordinator shape.
- day-25-in-indianapolis-zip46204-house-cleaning-leads.json — 3 leads.
