# Rotation Day 13 — Texas: Dallas × House cleaning × ZIP 75214

- Researched: 2026-10-23 (nightly rotation, Day 13)
- Cell: TX | Dallas | 75214 | House cleaning — category label verified verbatim in ~/workspace/van-squad/js/data.js ("House cleaning", Cleaning group).
- Cell note: 75214 is East Dallas — Lakewood, Lower Greenville and the west shore of White Rock Lake. House cleaning is done inside the customer's home by definition, so on-site service is the business model itself. Every business below confirms Dallas service from its own materials, and six of the eight name Lakewood and/or Lower Greenville (the 75214 neighborhoods) on their own sites; A Hired Hand's own Lakewood page lists 75214 by number. No business publishes a ZIP-code service list beyond that, so service_zips is ["75214"] only — except A Hired Hand, whose own Lakewood page also names 75218, which was added. No ZIPs were invented.
- Adjacent-ZIP note: no expansion was needed — 8 qualifying businesses were found serving Dallas including the 75214 area.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Dallas Maids | (469) 487-6669 | House cleaning | Dallas | https://dallasmaids.com/ | service@dallasmaids.com — https://dallasmaids.com/terms-conditions/ (business's own website, Terms & Conditions contact block: "Phone: (469) 487-6669, Email: service@dallasmaids.com") | High — own site: family-owned house cleaning in Dallas since 2004; its own Locations page names Lakewood and Lower Greenville in its service area, and the phone and email are printed on the site | Business's own website + Google Business listing |
| Dallas Housemaids | (469) 277-7031 | House cleaning | Dallas | https://www.dallashousemaids.com/ | info@dallashousemaids.com — https://www.dallashousemaids.com/ (business's own website footer: "Dallas, TX (469) 277-7031 <info@dallashousemaids.com>") | High — own site: family-owned since 2018, general/deep house cleaning; its own Dallas house-cleaning page names "craftsman bungalows in Lakewood", and phone and email are printed on the site | Business's own website |
| Uptown Cleaning | (214) 733-2975 | House cleaning | Dallas | https://uptownc.com/ | hello@uptownc.com — https://uptownc.com/ (business's own website contact block: "214-733-2975 <hello@uptownc.com>", Dallas address 4141 Office Parkway Suite 102, Dallas, TX 75204) | High — own site headline: "Serving the Uptown, Park Cities, Lakewood and Surrounding Areas" with recurring/one-time residential house cleaning; phone and email printed on the site | Business's own website |
| Emily's Maids | (214) 556-6243 | House cleaning | Dallas | https://emilysmaids.com/ | none | High — own site: owner-run Dallas house cleaning and maid service ("Emily's Maids of Dallas, 8919 San Leandro Drive, Dallas, Texas 75218. +1 214-556-6243" printed on the site); Google description adds service to Lower Greenville and Lake Highlands | Business's own website + Google Business listing |
| Vella | (214) 334-7082 | House cleaning | Dallas | https://vellaclean.com/ | none | High — own site has a dedicated "Lake Highlands & Lakewood House Cleaning in Dallas" page (Basic/Deep/Moving cleans in those neighborhoods) and prints the contact phone 214.334.7082 on the site; Texas-local operator founded in Dallas, also serving Austin | Business's own website |
| Modern Maids | (469) 430-8860 | House cleaning | Dallas | https://modern-maids.com/ | none — an email link exists on the site but is obfuscated in the fetched page, so no address was recorded | High — own site: Dallas house cleaning / maid service whose own "Where We Clean" section lists "East Dallas: Lakewood · Lake Highlands · East Dallas · White Rock"; phone 469-430-8860 and Dallas address (2500 McKinney Ave) printed on the site | Business's own website |
| A Hired Hand | (469) 600-0120 | House cleaning | Dallas | https://ahiredhand.net/ | none | Medium — own site's Lakewood page explicitly states "Nearby ZIPs we frequently cover: 75214 and 75218" and details recurring/deep/move house cleaning there, but the site prints no phone; phone (469) 600-0120 and Dallas address (5657 Amesbury Dr) come from its Google Business listing only | Business's own website + Google Business listing |
| Sparkly Maids | (214) 903-0014 | House cleaning | Dallas | https://sparklymaids.com/ | none | Medium — own site: Dallas maid service / house cleaning (50+ point checklist, recurring and deep cleans), "Sparkly Maids, 2727 Welborn St Suite #2, Dallas, TX 75219. +1-214-903-0014" printed on the site and described as locally owned in the Dallas/Ft. Worth area; service area is stated at city level only, with no 75214-specific page | Business's own website + Google Business listing |

## Dedupe

- Live DB checked first (full dump via vs_rest.py, 989 businesses): every name and phone in this batch was checked against the full name/phone list — no matches. The DB's only two Dallas-area-code rows are unrelated businesses in other categories — "K9 Clip N Clean" ((972) 802-9388, pet grooming) and "Detail Daddy OKC" ((214) 250-4789, Oklahoma City detailing) — neither name nor phone collides with this batch. Nearest name, "Sparkly House Cleaning" (Seattle, WA, (206) 973-0216), is a different business from Dallas's Sparkly Maids — different name and different phone, so not a duplicate.
- All prior prospecting files in ~/workspace/van-squad/prospecting/ were grepped for every name and phone in this batch before finalizing: "Dallas Maids", "487-6669", "Dallas Housemaids", "277-7031", "Uptown Cleaning", "733-2975", "556-6243", "Vella", "334-7082", "Modern Maids", "430-8860", "Hired Hand", "600-0120", "903-0014" — no matches. "Emily" appears only as a person's first name in two unrelated files (an owner named Emily Sadler in a Day-04 Utah detailing batch; "Emily's Dog Grooming" in a Day-11 Kansas batch) — neither is Emily's Maids of Dallas. "Sparkly" appears only in the Day-03 Seattle files for the separate Seattle business noted above.
- No Day-13 files existed before this batch, so there are no same-night cross-cell duplicates to avoid. The word "Dallas" appears in a few older prospecting files only as passing references (Dallas, Oregon in a Day-03 Portland file; a Montana shop named Dallas Auto Spa; same-name warnings; Detail Daddy OKC's 214-area-code phone; a six-city operator excluded in a Day-12 Tulsa file) — none is a Dallas, TX house-cleaning listing and none matches any name or phone in this batch, as the targeted greps above confirm.
- Cross-check within tonight's batch: all eight names and phones are distinct.

## Excluded (checked, did not pass the gates)

- Valet Maids ((214) 438-4804 per its Google listing) — EXCLUDED: its own website, valetmaids.com, returned unrelated gambling content at check time (domain appears defaced/hijacked), so residential house cleaning could not be confirmed from the business's own materials.
- MaidPro Dallas ((214) 377-4799), Merry Maids of Dallas ((214) 644-3135), Molly Maid and The Maids locations — EXCLUDED: national franchises.
- Homeaglow and other national lead-gen/matching listings — EXCLUDED: no local operator.
- Ivory Maids ((214) 833-8822) — EXCLUDED: its Google listing was flagged "Possibly Temporarily Closed" at check time; active service could not be confirmed.
- Premier Dallas Cleaning Service ((469) 867-0488) — EXCLUDED: Google listing only, no verifiable own website found.
- Gaston Rug Cleaning, Park Cities Power Wash, Cooper's Power Washing Services, The SunScrubbers — EXCLUDED: rug/pressure/window cleaning only, not house cleaning.

## ZIP note

- Target ZIP 75214 is in every business's service_zips. One additional service ZIP was added: A Hired Hand's own Lakewood page states it frequently covers 75214 and 75218, so its service_zips is ["75214", "75218"]. Every other business states its service area by neighborhood or city name only (Lakewood, Lower Greenville, East Dallas, Dallas), never by ZIP, so no further ZIPs were added and none were invented.

## Count

- 8 businesses, 8 listings, 3 published-email leads (see -leads.json).
