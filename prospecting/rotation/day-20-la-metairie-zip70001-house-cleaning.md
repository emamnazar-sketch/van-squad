# Day 20 — Louisiana | Metairie | ZIP 70001 | House cleaning

Date: 2026-10-30. Cell target ZIP 70001. All businesses verified from their own websites first; cleaning in customers' homes confirmed from the business's own materials. No business stated specific service-area ZIP codes on its own site, so service_zips is ["70001"] only for every entry. ZIP 70001 yielded 5 qualifying businesses, so no adjacent-ZIP expansion was needed.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| NOLA Maid Easy | (504) 315-8112 | House cleaning | Metairie | https://nolamaideasy.com/ | info@nolamaideasy.com — https://nolamaideasy.com/ | High — own site is a Metairie house-cleaning service (1400 Cleary Ave, Metairie, LA 70001 in its own footer), phone and email published on own site, same crew cleans customers' homes | Own website https://nolamaideasy.com/ |
| 504 Clean Dat | (504) 732-0007 | House cleaning | Metairie | https://www.504cleandat.com | support@504cleandat.com — https://www.504cleandat.com | High — own site offers recurring/deep/move-out house cleaning in homes across Metairie, local family-owned, phone and email in own site footer, Metairie address on its Google listing | Own website https://www.504cleandat.com |
| Angie Nola Maids | (504) 518-2158 | House cleaning | Metairie | http://www.angienolamaids.com/ | angieservice2017@gmail.com — http://www.angienolamaids.com/ | High — own site lists maid service / general housekeeping / deep and recurring cleaning for homes in Metairie, own address 4921 Zenith Street, Metairie, Louisiana 70001, phone and email published on own site | Own website http://www.angienolamaids.com/ |
| The Maids of New Orleans | (504) 883-5000 | House cleaning | Metairie | https://www.maids.com/273/ | None published | High — local franchise page gives its own Metairie address (4631 W Napoleon Ave Suite E 1, Metairie, Louisiana 70001) and local phone (504) 883-5000 on the page, and describes trusted house cleaning services in Metairie homes; distinct local operator, not a national call center | Own franchise page https://www.maids.com/273/ |
| Live Fresh Cleaning Service | (504) 326-5068 | House cleaning | Metairie | https://livefreshcleaningservices.com/ | livefreshcleaningservice@gmail.com — https://livefreshcleaningservices.com/ | High — own site says based in Metairie (3617 Elgin St, Metairie, LA 70001), residential house cleaning in customers' homes, phone and email published on own site | Own website https://livefreshcleaningservices.com/ |

## Dedupe / exclusion notes

- Deduped against ~/workspace/van-squad/prospecting/rotation/day20-dedupe.txt and a grep of all of ~/workspace/van-squad/prospecting/ for every included name and phone — no matches; no duplicates skipped.
- Cross-cell check (Day 20): checked the only other Day-20 Louisiana file present at finish, day-20-la-new-orleans-zip70122-handyman (phones (504) 360-9684, (504) 358-0399, (504) 505-9258, (504) 420-9300, (504) 290-2669, (225) 558-5506) — no same-phone match with any business in this cell.
- Excluded — 504 Maid, (855) 504-6243: only phone found is a toll-free 855 number — toll-free-only phones are excluded by rule.
- Excluded — Louisiana Maids Cleaning Services, (504) 701-9977: its listed website louisianamaids.com is a parked domain for sale on GoDaddy — no verifiable own website / own materials to confirm house cleaning.
- Excluded — Merry Maids (Metairie): Google listing shows Permanently Closed; a second listing gave a conflicting phone — not verified as operating.
- Excluded — Two Maids (Metairie, N Arnoult Rd): Google listing shows Permanently Closed.
- Excluded — Herl Cleaning Services LLC, (504) 351-0744: own site presents it as an Airbnb / short-term-rental, commercial office and post-construction specialist with no regular residential house-cleaning service — category fit failed on its own materials.
- Excluded — Nola Maid Cleaning LLC / NolaMaid Services LLC, (504) 517-0333: own site gives its address as 27 Forstall Ave, Kenner, LA 70065 — city is Kenner on its own materials, not Metairie, despite a Metairie listing address.
- Excluded — Maid in NOLA, (504) 919-1644, and Geaux Maids, (504) 475-4823: both are based in New Orleans on their own sites (they serve Metairie, but their city is New Orleans) — held for a New Orleans cell, not this Metairie cell.
- Excluded — Pelican Maids New Orleans, (504) 826-3278; Perfect Touch Maid Service, (504) 401-6137; House Cleaning Services by Vania, (504) 343-4275: no verifiable own website found to confirm mobile/on-site house cleaning from the business's own materials — listing-only.
- Excluded — SERVPRO of Metairie, A-1 Cajun Cleaning Services, and pressure-washing / dry-cleaner listings: restoration, janitorial, pressure-washing or dry-cleaning businesses, not house cleaning.
- No toll-free-only phones were included; all included phones are local (504) numbers published on the business's own site / franchise page.
