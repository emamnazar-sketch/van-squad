# Day 17 — Iowa | Cedar Rapids | ZIP 52402 | House cleaning

Cell: IA / Cedar Rapids / 52402 / "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
Date researched: 2026-10-27 (Day 17 rotation)
Status: PREPARED, NOT INSERTED
Method: Public information only — business's own website first, then public listings (Google Business). No insertion performed by this worker.

ZIP note: Target ZIP 52402 yielded 6 qualifying businesses, so no expansion to adjacent ZIP 52403 was needed. Several included businesses are addressed in 52402 itself (Absolutely Clean, 224 Collins Rd NE, Cedar Rapids, IA 52402; Pure Mean Clean, 1802 E Avenue Northeast, Cedar Rapids, Iowa 52402 on its own site) and all explicitly serve Cedar Rapids homes. No business published a ZIP-code service list, so service_zips is ["52402"] only for every entry.

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| CR Shine Services | (319) 990-7912 | House cleaning | Cedar Rapids | https://crshine.com/ | crshineservices@gmail.com — https://crshine.com/ | High — Own site offers "Home cleaning" ("Routine care and detail-focused cleans") for homes in Cedar Rapids and prints "Call 319-990-7912" and the email on the site | Own website https://crshine.com/ |
| The Master's Touch Cleaning Solution | (319) 249-9098 | House cleaning | Cedar Rapids | https://tmtcsolution.net/ | None published found | High — Own site lists RESIDENTIAL CLEANING (deep, sparkle, standard, move-in/move-out), says it is a family-owned business serving Cedar Rapids residents/homes, and prints (319)-249-9098 on the site | Own website https://tmtcsolution.net/ |
| Absolutely Clean | (319) 377-4404 | House cleaning | Cedar Rapids | http://absolutelyclean.org/ | info@absolutelyclean.org — http://absolutelyclean.org/ | High — Own site offers Residential Cleaning in Cedar Rapids ("a safe, clean house"), gives its Iowa location as 224 Collins Rd NE, Cedar Rapids, Iowa 52402, and prints (319) 377-4404 and the email on the site | Own website http://absolutelyclean.org/ |
| Pure Mean Clean | (319) 531-8402 | House cleaning | Cedar Rapids | https://puremeanclean.com/ | None published found | Medium — Own site says it takes care of "home or business cleaning" for the customer and gives its address as 1802 E Avenue Northeast, Cedar Rapids, Iowa 52402 in the site footer; phone from its Google listing, not in the fetched homepage text | Own website https://puremeanclean.com/ ; Google listing (phone) |
| Mj'S Pure Perfection Cleaners LLC | (319) 515-7458 | House cleaning | Cedar Rapids | https://pureperfectioncleanersllc.net/ | None published found | Medium — Google listing (1214 2nd Ave SE, Cedar Rapids) carries the business's own description "We're in the business to make your home, clean and clutter free" and In-Home Service category, with phone and website; direct fetch of the own site returned no extractable content in this run | Google listing quoting own description; website https://pureperfectioncleanersllc.net/ |
| H and B Supreme Cleaning | (319) 206-8617 | House cleaning | Cedar Rapids | https://www.hnbsupremecleaning.com/about-us | None published found | Medium — Google listing (231 11th St NW, Cedar Rapids) carries the business's own description "our service includes home and office cleaning (mopping, sweeping, dusting, windows, bathrooms, kitchens…)"; phone and website from the listing — the /about-us page returned 404 on direct fetch in this run | Google listing quoting own description; website https://www.hnbsupremecleaning.com/about-us |

## Dedupe

- Checked every candidate name AND phone against (1) ~/workspace/goals/van-squad-directory-website/hidden_files/day17-dedupe.txt and (2) grep of all files in ~/workspace/van-squad/prospecting/, including tonight's day-17-*.md files.
- Result: No matches for any included business by name or phone. Near-name hit checked and cleared: "A Master's Touch Cleaning" ((319) 415-6568, Waterloo, day-17 Waterloo cell, excluded there) is a different business with a different phone from The Master's Touch Cleaning Solution ((319) 249-9098). No duplicates skipped on dedupe grounds.

## Excluded

- The Cleaning Authority — (319) 313-2653 — national franchise; excluded per franchise rule. Molly Maid and MaidPro Cedar Rapids pages likewise excluded as national franchises.
- EZ Cleaning Pro — (319) 777-1260 — own site is titled "Commercial Janitorial Services" / commercial janitorial only; no residential house cleaning.
- Pat's Cleaning Service — (319) 393-8628 — own site says commercial cleaning for small-to-medium businesses / full janitorial only; no residential house cleaning.
- East Iowa Clean — (319) 540-2706 — own site is residential/commercial carpet, hardwood and upholstery cleaning plus commercial janitorial; carpet cleaning is the primary business, not house cleaning.
- Destiny cleaning llc — (319) 550-3896 — own/Google description is commercial cleaning services only.
- Captain Clean Ltd — (319) 362-2400 — own/Google description is industrial cleaning services only.
- A1 Serene Clean — (319) 531-4794 — public description confirms only trash removal / lot servicing additions; no own-materials confirmation of residential house cleaning in this run; not included rather than guessed.
- Cedar Cleaners LLC — (515) 975-0648 — own site is a vague multi-city (Cedar Rapids / Des Moines / Davenport) cleaning pitch with no phone and no explicit residential house-cleaning offer in the fetched text; insufficient own-materials confirmation.
- Pristine Perfection — conflicting public phones for the same Cedar Rapids address ((319) 486-1996 in the Google listing vs (319) 315-2572 in Cylex) and its own site could not be fetched/verified in this run; not included rather than guessed.
- LN's Cleaning Services, LLC — (319) 540-4053 — BBB lists it for House Cleaning in Cedar Rapids, but no verifiable own website was found in this run (only a third-party SEO-vendor PDF mentioning it); insufficient own-materials confirmation.
- Homeaglow, Care.com, Angi / HomeAdvisor and Thumbtack Cedar Rapids pages — national lead-gen / platform listings with no single local operator; excluded per instructions.
- Dry cleaners / laundromats surfaced in search (Nature's Way Cleaners, Citywide Cleaners, Dry Cleaning Plus, Klein Chem-Dry carpet cleaning) — storefront dry cleaning / carpet-only, not house cleaning.

## Count

- Included: 6 businesses (all House cleaning, Cedar Rapids, serving 52402)
- Leads (published emails): 2 (CR Shine Services, Absolutely Clean)
- Files: inserts.json (6 businesses + 6 listings), leads.json (2 entries)
- Status: PREPARED, NOT INSERTED
