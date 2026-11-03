# Day 24 — Michigan × Lansing × ZIP 48911 × House cleaning

- **Cell:** MI | Lansing | 48911 | House cleaning (exact label)
- **Date:** 2026-11-03 (Day 24 run)
- **Expansion:** None needed — 9 qualifying businesses found serving Lansing / 48911. No adjacent-ZIP expansion. One business (Lively Sage) is itself addressed inside 48911; the rest confirm Lansing residential service on their own materials and are assigned the target ZIP only.
- **Dedupe:** Every candidate name AND phone checked against (a) the live-DB snapshot `dedupe-open.txt` and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/` including tonight's Day-24 cells (Ann Arbor, Dearborn, Detroit, Livonia, Royal Oak, Sterling Heights, Troy, Warren). No name or phone matches for the 9 businesses below, except Housekeeping Associates (see Excluded). Near-names checked and NOT duplicates: Queen Bee Cleaning Services in Nebraska ((402) 499-7867) is a different operator from Lansing's Queen Bee Cleaning LLC (excluded on verification, below); The Dazzle Cleaning Company in Seattle ((206) 424-9909) is a different operator from Dazzle Cleaning Service; Molly Maid of Lansing uses a location-qualified name with its own Lansing local phone, distinct from Molly Maid locations already in the DB (Boise, Albuquerque, Hattiesburg, NOLA, Sioux Falls, Ann Arbor).
- **Phone rule:** All phones are Michigan local numbers — eight (517) Lansing-area numbers and one (231) Michigan number (Dazzle, printed on its own site); none is toll-free-only.
- **Mobile/on-site:** House cleaning is performed inside the customer's home; each business's own materials confirm residential home cleaning in Lansing.
- **service_zips:** No business below publishes a ZIP-code service list (they publish city lists or no list), so service_zips = ["48911"] for every insert — no ZIPs were invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Lively Sage Natural Home Cleaning | (517) 515-2771 | House cleaning | Lansing | http://livelysagecleaning.com/ | livelysagehomecleaning@gmail.com — http://livelysagecleaning.com/ (own site contact block) | High — own site: eco-friendly housekeeping in customers' homes, office address inside the target ZIP (835 Louisa St Suite 104, Lansing, MI 48911), phone and email printed on the site | http://livelysagecleaning.com/ |
| My Chores Are Yours | (517) 374-0004 | House cleaning | Lansing | http://mychoresareyours.com/ | — none published on its own site that could be verified | High — own site: "Home Cleaning Lansing \| Residential Cleaning," "We thoroughly clean residential houses in the Lansing, MI area," weekly/bi-weekly/move-in-out cleans, phone (517) 374-0004 printed on the site | http://mychoresareyours.com/ |
| A to Zen | (517) 213-5230 | House cleaning | Lansing | https://cleanatozen.com/ | info@cleanatozen.com — https://cleanatozen.com/ (own site footer) | High — own site: "House Cleaning & Maid Services in Lansing & Okemos, MI," "Locally Owned Professional Cleaning Service," residential cleaning in customers' homes, phone and email printed in the site footer; Greater Lansing address 2199 Jolly Rd, Okemos | https://cleanatozen.com/ |
| St. Pete's Maids | (517) 319-0340 | House cleaning | Lansing | https://www.stpetesmaids.com/faq/ | support@stpetesmaids.com — https://www.stpetesmaids.com/faq/ (own site) | High — own FAQ: family-owned, Michigan-headquartered, "not a franchise," house cleaning in customers' homes, "We proudly serve several metro areas in Michigan, such as Detroit, Lansing…," phone 517-319-0340 and email printed on the page | https://www.stpetesmaids.com/faq/ |
| Dazzle Cleaning Service | (231) 920-9000 | House cleaning | Lansing | https://dazzlecleaningservice.com/ | info@dazzlecleaning.com — https://dazzlecleaningservice.com/ (own site contact block) | High — own site: "serves only the Lansing, Michigan area," family-owned since 1990, recurring/deep/move-in-out house cleaning, published served-city list includes Lansing, phone (231) 920-9000 and email printed repeatedly on the site | https://dazzlecleaningservice.com/ |
| KJ's Fresh Start Kleaning | (517) 204-9399 | House cleaning | Lansing | https://www.kjskleaning.com/ | kjscleaning2201@gmail.com — https://www.kjskleaning.com/ (own site footer) | High — own site: page title "House Cleaning Services Lansing MI," locally owned Michigan business grown from Holt (Lansing metro), recurring/deep/move-in-out residential cleaning in customers' homes, phone 517-204-9399 and email printed on the site | https://www.kjskleaning.com/ |
| Cleaning Services Lansing | (517) 816-9225 | House cleaning | Lansing | https://cleaningserviceslansing.com/ | info@cleaningserviceslansing.com — https://cleaningserviceslansing.com/ (own site footer) | High — own site: dedicated House Cleaning section for Lansing homes, "locally owned and operated right here in Lansing," address 212 E. Grand River Ave., Lansing, MI 48906, phone 517-816-9225 and email printed in the site footer | https://cleaningserviceslansing.com/ |
| Happy Clean, LLC | (517) 515-5336 | House cleaning | Lansing | http://www.happyclean.biz/ | — none published on its own site that could be verified | Medium — own site: "family owned and operated residential house cleaning service… servicing Lansing, Michigan," address 3310 Bardaville Drive, Lansing, one-time/weekly/bi-weekly cleans in homes; phone (517) 515-5336 is from its Google listing, not printed in the fetched own-site text, so graded Medium | http://www.happyclean.biz/ (residential confirmation); Google listing (phone) |
| Molly Maid of Lansing | (517) 366-2578 | House cleaning | Lansing | https://www.mollymaid.com/locations/lansing/?cid=LSTL_MLY000192 | — none published on its own location page that could be verified | Medium — Google listing for this location: locally owned and operated Lansing franchise, house cleaning in customers' homes with a 44-point checklist, address 3815 W St Joseph St, Lansing, phone (517) 366-2578 corroborated by directory mirrors of the listing; graded Medium because the brand's own location page could not be fetched directly in this run (domain blocked for the fetch tool) | https://www.mollymaid.com/locations/lansing/?cid=LSTL_MLY000192 |

## Email leads

Published emails only, from the business's own website — kept separate, never on profiles:

| Business | Email | Source URL |
|---|---|---|
| Lively Sage Natural Home Cleaning | livelysagehomecleaning@gmail.com | http://livelysagecleaning.com/ |
| A to Zen | info@cleanatozen.com | https://cleanatozen.com/ |
| St. Pete's Maids | support@stpetesmaids.com | https://www.stpetesmaids.com/faq/ |
| Dazzle Cleaning Service | info@dazzlecleaning.com | https://dazzlecleaningservice.com/ |
| KJ's Fresh Start Kleaning | kjscleaning2201@gmail.com | https://www.kjskleaning.com/ |
| Cleaning Services Lansing | info@cleaningserviceslansing.com | https://cleaningserviceslansing.com/ |

6 leads — see `day-24-mi-lansing-zip48911-house-cleaning-leads.json`.

## Excluded

- **Housekeeping Associates** — DUPLICATE by name: already in tonight's Day-24 Ann Arbor cell (`day-24-mi-ann-arbor-zip48103-house-cleaning`, phone (734) 741-8822). Its Ingham County page (phone (517) 336-8822, Okemos office) is the same company/operator with a second office, so skipped per the same-name dedupe rule.
- **Queen Bee Cleaning LLC** (Lansing) — woman-owned Lansing cleaner per Expertise/HomeAdvisor, but its own website (getcleanwiththequeen.com) could not be fetched/verified in this run and published phone sources conflict (Google listing (517) 881-8741, with no corroborating own-site print), so excluded as unverified rather than guessed.
- **Sophisticated Cleaning / 'SO'Phisticated Cleaners, LLC** — Google listing shows a Lansing address and phone (517) 894-3226, but the business's own website states it is "located in Atlanta, Georgia" and prints no Lansing phone; not a verifiable Lansing local operator, excluded.
- **Homeaglow / Angi / Expertise lead-gen listings** — national marketplaces with no local operator; excluded by rule (used only as discovery pointers, never as sources).
- **Torres Cleaning Of America** (Lansing, (517) 894-4798) — listing mixes cleaning with home-improvement/community categories and residential house cleaning in 48911 could not be confirmed from its own materials, excluded.
- **Swagart's Cleaning Services, S&N Cleaning Services, Dream Cleans L.L.C, Sally's Cleaning Services, Shannon Cleaning** — no verifiable own website confirming residential house cleaning in Lansing (social/listing-only presence), excluded.
- **Clean Investment Inc, Great Lakes Window Cleaning** — janitorial/window-only focus, not residential house cleaning, excluded.

## Files

- `day-24-mi-lansing-zip48911-house-cleaning.md` (this file)
- `day-24-mi-lansing-zip48911-house-cleaning-inserts.json` — 9 businesses + 9 listings, validated with `python3 -m json.tool`
- `day-24-mi-lansing-zip48911-house-cleaning-leads.json` — 6 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
