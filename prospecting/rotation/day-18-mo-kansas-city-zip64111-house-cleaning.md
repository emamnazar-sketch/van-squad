# Day 18 — Missouri / Kansas City / ZIP 64111 / House cleaning

Cell: MO | Kansas City | 64111 | "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
Date: 2026-10-28
Status: PREPARED, NOT INSERTED

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Two Gals & A Broom | (816) 472-4257 | House cleaning | Kansas City | https://twogalsandabroomkc.com/ | aderstler@twogalsandabroomkc.com — https://twogalsandabroomkc.com/privacy-policy/ | High — own site says "We specialize in residential house cleaning", "We clean homes throughout the Kansas City metro", and prints "please call (816) 472-4257" on the homepage; its privacy policy prints the same phone and the email; Google listing address 1315 Swift Ave, North Kansas City, MO | Own website https://twogalsandabroomkc.com/ and https://twogalsandabroomkc.com/privacy-policy/ ; Google listing |
| Sunflower Maids Service of Kansas City | (816) 839-6329 | House cleaning | Kansas City | https://sunflowermaids.com/ | hello@sunflowermaids.com — https://sunflowermaids.com/house-cleaning-services/kansas-city/ | High — own Kansas City page says "Sunflower Maids is a locally owned and operated cleaning company", offers House Cleaning / Maid Service for homes in Kansas City, says its expertise is "available throughout the Kansas City metro area", and prints "Kansas City phone: (816) 839-6329" and the email; Google listing address 420 Hardesty Ave, Kansas City, MO 64124 | Own website https://sunflowermaids.com/house-cleaning-services/kansas-city/ ; Google listing |
| Pro House Clean | (816) 446-2079 | House cleaning | Kansas City | http://www.prohouseclean.com/ | prohouseclean@me.com — http://www.prohouseclean.com/ | High — own site offers "Recurring House Cleaning" in Kansas City, MO, says "We proudly serve homeowners ... throughout the Kansas City Metro area" with Kansas City, MO first in its serving list, and prints 816-446-2079 and the email in its quote block; Google listing (as "Pro House Clean Maid Services") describes it as "a locally owned and operated family business specializing in residential cleaning", address 435 Nichols Rd, Kansas City, MO | Own website http://www.prohouseclean.com/ ; Google listing |
| KC Lustrous Cleaning LLC | (816) 469-0747 | House cleaning | Kansas City | https://kclustrouscleaningllc.com/ | None published found — the email on its own site is shown in protected/obscured form, so no readable address was recorded rather than guessed | High — own site offers "Residential Cleaning Services" "designed to keep your home fresh, organized, and spotless", says "15 Years Providing Reliable Residential & Commercial Cleaning Solutions in Kansas City", and prints +1 (816) 469 0747 and address 1511 NE Parvin Road, Kansas City, MO 64116 | Own website https://kclustrouscleaningllc.com/ ; Google listing |
| Als KC Cleaning | (816) 945-2460 | House cleaning | Kansas City | https://www.alskccleaning.com/ | alskccleaningllc@gmail.com — https://www.alskccleaning.com/about | High — own homepage headline is "RELIABLE RESIDENTIAL & COMMERCIAL CLEANING" with "Create a clean, healthy environment", and both its homepage and About page print 816-945-2460 and the email with "Book your consult or cleaning session today!" | Own website https://www.alskccleaning.com/ and https://www.alskccleaning.com/about |
| KC Metro Maids | (816) 745-1433 | House cleaning | Kansas City | https://kcmetromaids.com/ | info@kcmetromaids.com — https://kcmetromaids.com/ | High — own site says it "provides cleaning services across the Kansas City metro area, with options for homes, apartments, short-term rentals, and commercial spaces", lists Kansas City first in its "OUR AREAS" list, and prints 816-745-1433 and the email in its contact block | Own website https://kcmetromaids.com/ |

## Dedupe

- Checked every candidate name AND phone against ~/workspace/goals/van-squad-directory-website/hidden_files/day18-dedupe.txt (1,498 businesses) and grep of every file in ~/workspace/van-squad/prospecting/.
- No included business matches by name or phone in either source.
- Name-form notes: Google lists Pro House Clean as "Pro House Clean Maid Services"; its own website brands it "Pro House Clean", and the own-site form is used here (both forms were dedupe-checked). Google/site list Sunflower as "Sunflower Maids Service of Kansas City", the full form used here. Als KC Cleaning is styled "AL'S KC Cleaning" on its own homepage; the site-title form "Als KC Cleaning" is used here.

## Excluded

- Merry Maids, Molly Maid, MaidPro, The Maids, Two Maids, CottageCare, ecomaids — national franchise chains, excluded per brief.
- Homeaglow, Angi, Thumbtack, HomeAdvisor, Care.com — lead-gen platforms with no single local operator; excluded per brief.
- Pro Housekeepers (Kansas City page, (844) 242-9464) — national multi-city service headquartered outside Kansas City booking through a toll-free 844 number only; excluded per brief (toll-free-only / no local operator).
- Home Sweep Home Cleaning Service ((913) 782-2787 in its Google listing) — its own website footer prints a different phone, 913-228-3798, so no single verifiable phone could be recorded; also Johnson County / Olathe-focused in its own materials. Not included rather than guessed.
- Best Clean KC — sources conflict on its phone ((913) 318-4664 on its own blog vs. (913) 353-4364 in a listing paste), so no single verifiable phone could be recorded; not included rather than guessed.
- Alice Cleaning Company (7208 Wornall Rd, Kansas City, (816) 444-0464 in its Google listing) — its own website could not be fetched/verified in this run, so no own-materials confirmation of residential house cleaning could be obtained; not included rather than guessed.
- Clean Heart Maids (Lee's Summit, MO) — based in Lee's Summit with separate Missouri/Kansas/Arkansas numbers on its own site; Kansas City 64111 service was not confirmed from its own materials in this run, so not included.
- Metropoint Services and Tot Commercial Cleaning — commercial janitorial only from their own materials; no residential house cleaning.
- JoAnn's House Air Cleaning Service, Dave's Carpet & Window Services and the other 64111-area "cleaning service" listings with HVAC/duct descriptions — air-duct/HVAC cleaning, not house cleaning.
- The Mop Bucket (North Kansas City) — janitorial supply storefront, not an in-home cleaning service.

## ZIP note

Target ZIP 64111 yielded 6 qualifying businesses. All six confirm Kansas City, MO / Kansas City metro-wide residential service from their own materials — 64111 is central Kansas City (Midtown/Westport), inside every included business's stated Kansas City service area — and Pro House Clean's own Google listing address (435 Nichols Rd) is 1.4 miles from the 64111 query area. That is above the brief's 3-business floor, so no expansion to adjacent ZIPs was triggered. None of the six publishes a ZIP-code service list on its own site (they publish city/metro lists), so service_zips is ["64111"] for all entries.

## Count

- Qualifying businesses prepared: 6
- Email leads: 5 (Two Gals & A Broom — aderstler@twogalsandabroomkc.com; Sunflower Maids Service of Kansas City — hello@sunflowermaids.com; Pro House Clean — prohouseclean@me.com; Als KC Cleaning — alskccleaningllc@gmail.com; KC Metro Maids — info@kcmetromaids.com, each from the business's own website)
- Files: day-18-mo-kansas-city-zip64111-house-cleaning.md, -inserts.json (6 businesses + 6 listings), -leads.json (5 entries)
- Status: PREPARED, NOT INSERTED
