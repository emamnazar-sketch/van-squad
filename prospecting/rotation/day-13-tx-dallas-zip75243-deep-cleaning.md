# Rotation Day 13 — Texas: Dallas × Deep cleaning × ZIP 75243

- Researched: 2026-10-23 (nightly rotation, Day 13)
- Cell: TX | Dallas | 75243 | Deep cleaning — category label verified verbatim in ~/workspace/van-squad/js/data.js ("Deep cleaning", Cleaning group: "Top-to-bottom one-time cleans.").
- Cell note: 75243 is North Dallas / Lake Highlands (Skillman St / N Central Expy corridor, south of Richardson). Deep cleaning is performed inside the customer's home, so on-site service is the business model itself. Every business below confirms a distinct deep / one-time top-to-bottom home cleaning service in its own materials and Dallas service; Maid 4 Dallas is itself addressed inside 75243, and Gmaids, Dallas Sunrise Maids and A Hired Hand-style Lake Highlands coverage is stated by neighborhood name (Lake Highlands / North Dallas) rather than ZIP. No business publishes a ZIP-code service list, so service_zips is ["75243"] only for every business — no ZIPs were invented.
- Adjacent-ZIP note: no expansion was needed — 5 qualifying businesses were found serving Dallas including the 75243 / Lake Highlands area.
- Sources: each business's own website first, then public listings (Google Business, Expertise.com). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Gmaids | (214) 997-6918 | Deep cleaning | Dallas | https://www.gmaids.com/ | support@gmaids.com — https://desk.gmaids.com/public/en/blog/12-terms-of-service (business's own Terms of Service page: "By emailing us at: support@gmaids.com") | High — own site: Dallas green-cleaning company founded 2004; homepage offers "deep cleaning" and its own deep-cleaning guide states it serves Lake Highlands among its Dallas neighborhoods; phone +1-214-997-6918 printed on the site | Business's own website |
| Triple O's Cleaning | (469) 938-3735 | Deep cleaning | Dallas | https://tripleoscleaning.com/ | hello@tripleoscleaning.com — https://tripleoscleaning.com/ (business's own website contact block: "469-938-3735 <hello@tripleoscleaning.com>") | High — own site: family-named DFW cleaner with a dedicated "Deep Cleaning" service ("A thorough top-to-bottom clean. Perfect for first visits or seasonal resets"); service area lists Dallas and Richardson; phone and email printed on the site | Business's own website |
| Dallas Sunrise Maids | (214) 971-1094 | Deep cleaning | Dallas | https://dallassunrisemaids.com/ | none published found on own site (an email appears only on a third-party review aggregator, so it was not recorded) | High — own Dallas page: family-owned husband-and-wife cleaner that "regularly cleans homes in North Dallas, Lake Highlands, Preston Hollow, and the Park Cities" and lists "One-Time Deep Cleaning: Ideal for seasonal cleaning, special events, or when you need a fresh start"; phone (214) 971-1094 printed on the page | Business's own website |
| Maid 4 Dallas | (469) 713-1207 | Deep cleaning | Dallas | https://maid4dallas.com/ | info@maid4dallas.com — https://maid4dallas.com/help/ (business's own website privacy/contact page: "469-713-1207, info@maid4dallas.com or 11411 N Central Expy, Dallas, TX 75243") | Medium — own site is addressed inside the target ZIP itself (11411 N Central Expy Suite D, Dallas, TX 75243) and its Google description states it provides "standard, deep, and move-in/out cleaning", but the deep-clean confirmation on its own site is in an informational article ("Deep cleaning service – More thorough cleaning service, reaching areas of your home such as shower and tubs, behind toilets") rather than a dedicated service page, so confidence is Medium | Business's own website + Google Business listing |
| Rover House Cleaners | (214) 396-6466 | Deep cleaning | Dallas | https://www.rovercleaners.com/ | none published found | High — own site: Dallas-based DFW cleaner (2323 N Field St STE 744, Dallas) stating "Our deep clean is a thorough, top-to-bottom cleaning of your house"; phone (214) 396-6466 printed on the site | Business's own website |

## Dedupe

- Live DB checked via vs_rest.py (businesses?select=name,phone, both pages — ~1,020 rows): no included name or phone matches any live row. In particular, none matches the Day-13 wave-1 Dallas businesses already in the DB: Dallas Maids ((469) 487-6669), Dallas Housemaids ((469) 277-7031), Uptown Cleaning ((214) 733-2975), Emily's Maids ((214) 556-6243), Vella ((214) 334-7082), Modern Maids ((469) 430-8860), A Hired Hand ((469) 600-0120), Sparkly Maids ((214) 903-0014) — all skipped here even where they also offer deep cleaning (Vella, Modern Maids, A Hired Hand and Sparkly Maids all confirm deep cleans in their own materials; same name/phone = skip).
- All files in ~/workspace/van-squad/prospecting/ were grepped for every included name and phone ("Ivory Maids"/"833-8822" aside, see Excluded): "Gmaids", "997-6918", "Triple O", "938-3735", "Sunrise Maids", "971-1094", "Maid 4 Dallas", "713-1207", "Rover House", "396-6466" — no matches in any prior batch (the only hits were for the unrelated "Amazing Maids" of Beaverton, OR).
- The other Day-13 Dallas cells on disk (75206 Mobile auto detailing, 75214 House cleaning) were read: no name or phone overlap with this cell.
- No duplicates within this cell: all five names and phones are distinct.

## Excluded (checked, did not pass the gates)

- Dallas Maids, Dallas Housemaids, Uptown Cleaning, Emily's Maids, Vella, Modern Maids, A Hired Hand, Sparkly Maids — SKIPPED AS DUPLICATES: already inserted in the Day-13 wave-1 Dallas 75214 House cleaning cell / live DB (see Dedupe), even though several also offer a distinct deep-clean service.
- Ivory Maids ((214) 833-8822, care@ivorymaids.com on its own site) — EXCLUDED: its own site does confirm deep cleaning and Lake Highlands service, but the sibling Day-13 75214 cell recorded its Google listing as flagged "Possibly Temporarily Closed" at its check time; not re-added here so the night's batches do not contradict each other on its active status.
- MaidPro, Merry Maids, Molly Maid, The Maids, Homeaglow — EXCLUDED: national franchises / call-center lead-gen with no local operator (per task brief).
- MoreHands Maid Service — EXCLUDED: Texas multi-city operation (Austin / Dallas / Houston); the address Expertise lists for its Richardson service (11411 N Central Expy, Dallas, TX 75243) is the same address Maid 4 Dallas publishes as its own, and no Dallas-specific public phone could be verified from its own materials (its published number is its Austin number, (512) 479-7978) — fails the verifiable-local-phone gate.
- Maid in Dallas Cleaning LLC (Expertise listing, 10342 Portrush Dr, Dallas, TX 75243) — EXCLUDED: directory listing only; no verifiable own website or public phone found.
- The SunScrubbers — EXCLUDED: window / roof / gutter / solar-panel cleaning only on its own site, not in-home deep cleaning.

## ZIP note

- Target ZIP 75243 is in every business's service_zips. No additional service ZIPs were added: every business states its service area by city/neighborhood name only (Dallas, Lake Highlands, North Dallas, Richardson, DFW), never by ZIP, so no ZIPs were invented. Maid 4 Dallas's own published address is inside 75243 itself.

## Count

- 5 businesses, 5 listings, 3 published-email leads (see -leads.json).
