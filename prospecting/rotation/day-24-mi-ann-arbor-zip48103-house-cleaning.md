# Day 24 — Michigan × Ann Arbor × ZIP 48103 × House cleaning

- **Cell:** MI | Ann Arbor | 48103 | House cleaning (exact label)
- **Date:** 2026-11-03 (Day 24 run)
- **Expansion:** None needed — 10 qualifying businesses found serving 48103. No adjacent-ZIP expansion.
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `dedupe-open.txt` and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/` including tonight's Day-24 cells (Detroit, Livonia, Royal Oak, Troy, Warren). No name or phone matches for the 10 businesses below, except Arbor Trail (see Excluded). Franchise locations below use location-qualified names with their own Ann Arbor local phones, distinct from same-brand locations already in the DB (e.g. Two Maids of Summerlin/Tempe, The Cleaning Authority - Boise, Merry Maids of Boise, Molly Maid of Boise — different operators, different phones).
- **Phone rule:** All phones are Michigan local (734) numbers, verified on the business's own website where fetchable; none is toll-free-only.
- **Mobile/on-site:** House cleaning is performed inside the customer's home; each business's own materials confirm residential home cleaning in Ann Arbor.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Inside and Out Home Services | (734) 444-9509 | House cleaning | Ann Arbor | https://insideouthomeservices.com/ | info@insideouthomeservices.com — https://insideouthomeservices.com/ (own site contact block) | High — own site: "An Ann Arbor, MI Professional House Cleaning Service," residential cleaning in customers' homes across Ann Arbor/Washtenaw County, phone and email printed on the site; address 1900 W Stadium Blvd, Ann Arbor | https://insideouthomeservices.com/ |
| Pinnacle Maids | (734) 821-3991 | House cleaning | Ann Arbor | https://pinnaclemaids.com/ | — none published on its own site that could be verified | High — own site: "House Cleaning in Ann Arbor, MI," "Locally owned in Ann Arbor since 2017," in-home deep/recurring cleans, phone printed repeatedly; address 455 E Eisenhower Pkwy Ste 300, Ann Arbor | https://pinnaclemaids.com/ |
| Housekeeping Associates | (734) 741-8822 | House cleaning | Ann Arbor | https://housekeepingassociates.com/ | — none published on its own site that could be verified | High — own site: Ann Arbor house cleaning company, locally owned since 1990, residential cleaning customized to the home; Ann Arbor office 2200 South Industrial Hwy with phone 734.741.8822 printed on the site | https://housekeepingassociates.com/ |
| S&J Cleaning Service, LLC | (734) 477-0022 | House cleaning | Ann Arbor | https://sandjcleaningservice.com/ | — none published on its own site that could be verified | High — own site: "Residential & Commercial Cleaning Services in Ann Arbor, MI," family-owned, one-time and recurring house cleaning in customers' homes, "Dial (734) 477-0022" printed on the site | https://sandjcleaningservice.com/ |
| Arbor Maid | (734) 257-8080 | House cleaning | Ann Arbor | https://www.arbormaid.com/ | support@arbormaid.com — https://www.arbormaid.com/ (own site contact block) | High — own site: "Full-service residential cleaning by local, caring professional cleaners" in/around Ann Arbor, local woman-owned, phone 734-257-8080 and email printed on the site | https://www.arbormaid.com/ |
| Two Maids of Ann Arbor | (734) 492-5597 | House cleaning | Ann Arbor | https://www.twomaidscleaning.com/ann-arbor/ | — none published on its own location page that could be verified | High — franchise's own Ann Arbor location page: home cleaning in customers' homes, phone (734) 492-5597, and its own address inside the target ZIP — 526 S Maple Rd, Ann Arbor, MI 48103; page lists Ann Arbor among areas served | https://www.twomaidscleaning.com/ann-arbor/ |
| The Cleaning Authority - Ann Arbor | (734) 206-2091 | House cleaning | Ann Arbor | https://www.thecleaningauthority.com/annarbor | — none published on its own Ann Arbor page that could be verified (an Ann Arbor email seen only on a third-party roundup was not used) | High — own Ann Arbor page: house cleaning in customers' homes, phone (734) 206-2091 printed repeatedly, and a published served-ZIP list that explicitly includes 48103 (service_zips below copy that full published list) | https://www.thecleaningauthority.com/annarbor |
| Merry Maids of Ann Arbor | (734) 849-4041 | House cleaning | Ann Arbor | https://merrymaids.com/home-cleaners-ann-arbor-mi | — none published on its own location page that could be verified | High — own Ann Arbor location page: "Merry Maids® of Ann Arbor," professional house cleaning (weekly/bi-weekly/deep) in homes, address 2445 S Industrial Hwy #4, Ann Arbor, MI 48104, phone 734.849.4041 printed on the page (preferred over a differing Google-listing number) | https://merrymaids.com/home-cleaners-ann-arbor-mi |
| The Maids of Greater Ann Arbor | (734) 926-2640 | House cleaning | Ann Arbor | https://www.maids.com/374/ | — none published on its own location page that could be verified | High — own location page: "The Maids of Greater Ann Arbor," trusted house cleaning services in Ann Arbor homes, local owner, address 3820 Packard St Ste 170, Ann Arbor, phone 734-926-2640 printed on the page | https://www.maids.com/374/ |
| Molly Maid of Ann Arbor and Washtenaw County | (734) 890-5285 | House cleaning | Ann Arbor | https://www.mollymaid.com/locations/ann-arbor/?cid=LSTL_MLY000192 | — none published that could be verified | Medium — Google listing for this location: locally owned/operated Ann Arbor franchise ("earning trust in Ann Arbor for over 40 years"), home cleaning with a 44-point checklist, address 1954 S Industrial Hwy, Ann Arbor, phone (734) 890-5285 corroborated by multiple directories; graded Medium because the brand's own location page could not be fetched directly in this run | https://www.mollymaid.com/locations/ann-arbor/?cid=LSTL_MLY000192 |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Inside and Out Home Services | info@insideouthomeservices.com | https://insideouthomeservices.com/ |
| Arbor Maid | support@arbormaid.com | https://www.arbormaid.com/ |

2 leads — see `day-24-mi-ann-arbor-zip48103-house-cleaning-leads.json`.

## Excluded

- **Arbor Trail Cleaning Co** — DUPLICATE by name: already in tonight's Day-24 Livonia cell (`day-24-mi-livonia-zip48152-house-cleaning`, phone (734) 766-7792, same support@ email). Its Ann Arbor page prints a different number, (734) 822-9077, but it is the same operator/company, so skipped per the same-name dedupe rule.
- **Homeaglow (Ann Arbor)** — national lead-gen marketplace with no local operator; excluded by rule.
- **Shine of Ann Arbor** — window/pressure/gutter cleaning only, not house cleaning.
- **Advanced Enviro Clean** — environmental testing/remediation (asbestos/mold/lead), not residential house cleaning.
- **Nature Maid Green Cleaning Service** — only source found was a 2021 magazine article (phone 734-945-8408); no current verifiable own website/listing could be confirmed, so excluded as unverified.
- **Vesta Cleaning and Organizing; Shine like the Sun LLC; Zully's Cleaning Services** — no verifiable own website confirming residential house cleaning in Ann Arbor (listing-only / mismatched website), excluded.
- **Creating Healthy Homes with Mara (Norwex)** — product-sales page, not a house-cleaning service.

## Files

- `day-24-mi-ann-arbor-zip48103-house-cleaning.md` (this file)
- `day-24-mi-ann-arbor-zip48103-house-cleaning-inserts.json` — 10 businesses + 10 listings, validated with `python3 -m json.tool`
- `day-24-mi-ann-arbor-zip48103-house-cleaning-leads.json` — 2 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
