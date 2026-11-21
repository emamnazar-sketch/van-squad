# Day 40 — NY × Brooklyn × ZIP 11226 × Deep cleaning

- Cell: State NY | City Brooklyn | ZIP 11226 (Flatbush / Ditmas Park area) | Category "Deep cleaning" (exact label)
- Date: 2026-11-21
- Status: PREPARED NOT INSERTED — coordinator inserts centrally. No js/data.js edits, no git.
- Sources: each business's own website first, then public listings (Google Business via search). Public information only.
- In-home confirmation: every business below names a deep-clean / deep-cleaning service for homes on its own materials; a business offering only regular cleaning with no deep-clean offer was not included.

**service_zips basis:** `["11226"]` (target ZIP only) for every business. None of the six publishes a residential ZIP-code service-area list on its own materials, so no ZIPs were added beyond the target ZIP they serve — adding more would be inventing them. Eco Cleaning Experts LLC additionally lists 11226 among its Brooklyn zip-code routes on its own commercial page and its Google listing address (240 E 18th St, Brooklyn) is in the Flatbush/Ditmas Park area adjoining 11226; only 11226 is recorded.

**Expansion note:** The cell is anchored on 11226. Brooklyn-wide operators whose own materials explicitly offer residential deep cleaning across Brooklyn (including Flatbush) are included, plus Maid First, whose own dedicated page serves Prospect Lefferts Gardens — the neighborhood immediately adjoining 11226 along Flatbush Avenue. No separate adjacent-ZIP expansion was needed to reach the target count.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Eco Cleaning Experts LLC | (929) 326-3201 | Deep cleaning | Brooklyn | https://ecoclean.nyc/service/home-deep-cleaning-in-nyc/ | — none published on its own site that could be verified | High — own dedicated Home Deep Cleaning page: top-to-bottom deep cleaning for homes/rentals across Brooklyn with room-by-room deep scope, and "Call Office: (929) 326-3201" printed on its own page | Business's own website (deep-cleaning page + homepage) | No name or phone match in day40 dedupe files or prospecting grep |
| Morris Empire Cleaning | (929) 266-3987 | Deep cleaning | Brooklyn | https://melcleaning.com/ | morrisempirellc@gmail.com — https://melcleaning.com/ (own site contact block: "Email MORRISEMPIRELLC@gmail.com") | High — own site: family-owned Brooklyn company with a named "Deep Clean" service ("Our most thorough deep cleaning in Brooklyn"), phone (929) 266-3987 printed repeatedly on its own site | Business's own website | No name or phone match in day40 dedupe files or prospecting grep |
| Deep Clean NYC | (347) 799-1944 | Deep cleaning | Brooklyn | http://deepcleannyc.com/ | — none published on its own site that could be verified | High — own site: Brooklyn-based (877 Grand Street, Brooklyn, NY 11211) company specializing in "Seasonal Deep Cleanings" and deep cleaning for homes, phone (347) 799-1944 printed on its own site | Business's own website | No name or phone match in day40 dedupe files or prospecting grep |
| HomeClean Cleaning Services | (212) 203-6095 | Deep cleaning | Brooklyn | https://homecleaningservice.nyc/our-services/cleaning-services-brooklyn/ | leads@homecleaningservice.nyc — https://homecleaningservice.nyc/our-services/cleaning-services-brooklyn/ (own Brooklyn page footer) | High — own Brooklyn page has a dedicated deep-cleaning section ("top-to-bottom cleaning of your place") for Brooklyn homes, with "Please call now: 212-203-6095" on the page | Business's own website (Brooklyn page) | Prospecting grep hit for "HomeClean" was "Home Clean Home By Maria" (Aberdeen, SD, Day 09) — a different business with a different phone; no match for this name/phone |
| Maid First | (212) 920-7872 | Deep cleaning | Brooklyn | https://www.maidfirst.com/locations/new-york-city/brooklyn/prospect-lefferts-gardens | support@maidfirst.com — https://www.maidfirst.com/locations/new-york-city/brooklyn/prospect-lefferts-gardens (own page: "Email, support@maidfirst.com, Call us, (212) 920-7872") | High — own Prospect Lefferts Gardens (adjoining 11226) page has a named "Deep Cleaning Service" / "Deep Cleaning Services" section with a full deep-clean checklist for homes, phone and email on the page | Business's own website (neighborhood page) | No name or phone match in day40 dedupe files or prospecting grep |
| Pure Touch Cleaning Services | (917) 618-9591 | Deep cleaning | Brooklyn | https://www.puretouchcleaningservices.com/ | — none published on its own site that could be verified | Medium — own contact page (81 Court Street, Brooklyn, NY 11201) prints "+1-917-618-9591" and describes the company as providing "residential deep cleaning"; deep clean is confirmed in its own materials but not via a dedicated deep-clean service page, so confidence is Medium | Business's own website (contact page) + Google Business listing via search | No name or phone match in day40 dedupe files or prospecting grep |

## Excluded

- **Diamond Maids / VMV Cleaning Solutions / Apex Cleaning / Home Clean Home Inc / eMaids / Maid Service Brooklyn / Clean Home NYC** — EXCLUDED as duplicates for tonight: already prepared in Day-40 wave 1 (Brooklyn 11201 House cleaning); a same business in a second category counts as a duplicate.
- **SqueeakyClean** (185 Ocean Avenue, Brooklyn; contact page lists weare@squeeakyclean.com and 917-975-8175) — EXCLUDED: its own homepage now serves an unrelated gambling site, so a residential deep-clean offer could not be confirmed from the business's own materials.
- **Deep Cleaning Services Brooklyn** ((929) 343-3917 per Google listing) — EXCLUDED: its own website could not be fetched/verified at check time, so in-home deep cleaning could not be confirmed from its own materials.
- **Spotless Domain** (1247 Flatbush Ave, Brooklyn; (929) 490-3320 per listing) and **Fully focused cleaning** ((917) 345-2607 per listing) — EXCLUDED: no own website could be verified, so in-home deep cleaning could not be confirmed from the business's own materials.
- **Johnson Cleaning Services** (402 Westminster Rd, Brooklyn) — EXCLUDED on category fit: its own materials describe janitorial, pressure washing and fleet detailing work, not residential deep cleaning.
- **CityFresh Cleaners** (377 Ocean Pkwy, Brooklyn) — EXCLUDED on category fit: couch/carpet and dry-cleaning operator; whole-home residential deep cleaning not confirmed from its own materials.
- **Deep Clean Us** ((844) 333-7872) — EXCLUDED: toll-free-only phone.
- **Squeaky Cleaning** ((800) 531-2810) — EXCLUDED: national multi-city operator with a toll-free-only phone; no local Brooklyn operator/phone verified.
- National lead-gen / matching platforms (Homeaglow, Angi/Thumbtack-only listings) — EXCLUDED on the standing gates.

## Count

6 businesses, 6 listings, 3 published-email leads (Morris Empire Cleaning — morrisempirellc@gmail.com; HomeClean Cleaning Services — leads@homecleaningservice.nyc; Maid First — support@maidfirst.com; see -leads.json).

Dedupe: every candidate name checked against day40-dedupe-names.txt (lowercased) and every phone against day40-dedupe-phones.txt (digit-only), plus grep of ~/workspace/van-squad/prospecting/ for name and phone digits — no matches for the 6 included businesses (the one "HomeClean" grep hit is the unrelated South Dakota business noted in the table).
