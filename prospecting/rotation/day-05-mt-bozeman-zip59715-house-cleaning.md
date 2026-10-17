# Rotation Day 5 — Montana: Bozeman × House cleaning × ZIP 59715

- Researched: 2026-10-17 (Day 5, manual live run ordered by the owner — thin batch, up to 5 businesses)
- Cell note: ZIP 59715 is south Bozeman (MSU / Kagy Blvd area). House cleaning is done inside the customer's home by definition, so on-site residential service is the business model itself; each entry below was confirmed from the business's own materials to clean residences, not commercial-only janitorial work.
- ZIP-expansion note: NO expansion was needed — 5 qualifying businesses were found serving ZIP 59715 within Bozeman itself.
- Sources: each business's own website first, then public listings (Google Business / places listings). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Pro-Clean Services Montana | (406) 240-4062 | House cleaning | Bozeman | https://www.procleanmt.com/ | contacts@procleanmt.com — https://www.procleanmt.com/contact/ (business's own contact page) | High — own site has a dedicated Residential Cleaning service for homes, gives this phone on its home and contact pages, and a Bozeman, MT 59719 PO Box; Google listing address is 8 Sunlight Ave, Bozeman | Business's own website + Google Business listing |
| Madison River Cleaning | (406) 830-7741 | House cleaning | Bozeman | https://www.madisonrivercleaning.com/ | mrc@madisonrivercleaning.com — https://www.madisonrivercleaning.com/ (footer of business's own website) | High — own site offers Residential Cleaning for homes, and its footer gives its address as 13 S Willson Ave Ste 7, Bozeman, MT 59715 with this phone and email | Business's own website |
| Simple Living | (406) 404-6121 | House cleaning | Bozeman | http://simplelivingmt.com/ | simplelivingmt@gmail.com — http://simplelivingmt.com/ (footer of business's own website) | High — own site (Simple Living Bozeman) has a dedicated Home/residential cleaning service with in-home estimates, and its footer gives 601 Nikles Drive Suite 2J, Bozeman, MT 59715 with this phone and email | Business's own website |
| Shine and Bright | (406) 589-0766 | House cleaning | Bozeman | https://shineandbrightcleaning.com/ | — none published that could be verified | Medium — own site confirms Residential Cleaning for homes and names Bozeman first among its service areas (also Belgrade, Livingston, Big Sky, Manhattan), and its public listing gives a Bozeman address (142 Buffalo Orchard Trail) with this phone; the phone was not visible on the fetched homepage, so confidence is Medium | Business's own website + public places listing |
| Sunshine & Pine Cleaning LLC | (406) 313-3421 | House cleaning | Bozeman | http://sunshinepinecleaningllc.jobbersites.com | — none recorded (an email is shown on its site but was masked in the source view, so it was NOT recorded rather than guessed) | High — own site: locally owned and operated home cleaning service in Bozeman, serving Bozeman and Belgrade homes, and publishes this phone on its own page | Business's own website |

## Dedupe
- Live directory check (vs_rest.py get "businesses?select=name,phone", 297 rows, run 2026-10-17 before writing): none of the five names or five phone numbers in this batch appears in the live directory. The only fuzzy name hit was "Sunshine Window Cleaning" of Boise, ID ((208) 461-6985) — a different business (window cleaning, Idaho, different phone) from Sunshine & Pine Cleaning LLC of Bozeman; not a duplicate.
- All files under ~/workspace/van-squad/prospecting/ were grepped for every name (Pro-Clean / ProClean, Madison River, Simple Living, Shine and Bright, Sunshine & Pine) and every phone number in this batch — no matches.
- No skips for duplication were needed in this cell.

## Excluded (checked, did not pass the gates)
- GPS Commercial Cleaning (Bozeman; (406) 259-7071) — EXCLUDED: commercial-only cleaning/janitorial by its own name and listing; no residential house cleaning.
- Elite Commercial Cleaning (Bozeman; (406) 219-8439) — EXCLUDED: commercial-only — its own description is cleaning solutions for offices and commercial spaces.
- Doctor Clean LLC (Bozeman; (406) 581-4548) — EXCLUDED on category fit: its own site is a window washing, carpet, upholstery and rug cleaning specialist; general recurring house cleaning is not a stated core service.
- Dutch Clean (Bozeman; (406) 209-0661) and Clear View Professional Window Cleaning (Bozeman; (406) 599-5540) — EXCLUDED on category fit: window cleaning specialists, not house cleaning.
- The Green Glove Cleaning Services (Bozeman listing; thegreenglovecleaning.com) — EXCLUDED: its own site focuses on Airbnb / short-term-rental turnover cleans rather than homeowner house cleaning, and the phone on its own site (+1 406-920-9925) conflicts with the phone on its public listing ((406) 400-9756), so no single phone could be verified.
- Aloha Hale Cleaning (Bozeman listing, 333 Haggerty Ln; (406) 600-5568; alohacleaningmt.com) — NOT INCLUDED in this thin batch: the five slots were filled by stronger-verified businesses first, and this one also carries inconsistencies — its own website titles the business "Ohana House Cleaning Services" and shows a Three Forks, MT postal address. Held as a possible future candidate, not counted here.
- TGP Services (Bozeman; (406) 548-2532) — EXCLUDED: mixed cleaning / house painting / property services; residential house cleaning could not be confirmed as a stated service from its own materials.
- MC2 Auxiliary Services (Bozeman; (406) 539-1835) — EXCLUDED: general "auxiliary services" listing; residential house cleaning could not be confirmed from its own materials.
- Crystal Bright Cleaning Services (Bozeman; (406) 312-3973) — EXCLUDED: no verifiable business website found; phone appears only in aggregator data, insufficient verification for this cell.
- Rainbow International of Bozeman (Belgrade, MT) — EXCLUDED: national franchise restoration company (water/fire/mold damage), not a house cleaning service.

## ZIP note
- Target ZIP 59715 is in every business's service_zips.
- Additional service ZIPs were added ONLY where the business's own site names the service-area towns; the ZIPs used are those towns' primary ZIPs, stated here for transparency: Madison River Cleaning's own site names Bozeman, Belgrade (59714), Big Sky (59716), Livingston (59047), Ennis (59729), Big Timber (59011) and Three Forks (59752). Shine and Bright's own site names Bozeman, Belgrade (59714), Livingston (59047), Big Sky (59716) and Manhattan (59741). Sunshine & Pine Cleaning LLC's own site names Bozeman and Belgrade (59714). Pro-Clean Services Montana and Simple Living publish only a Bozeman base with no wider stated service area, so their service_zips are just ["59715"] — no ZIPs were invented.
- Count: 5 businesses, 5 listings, 3 published-email leads (see -leads.json).
