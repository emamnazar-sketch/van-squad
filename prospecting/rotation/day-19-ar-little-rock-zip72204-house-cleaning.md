# Day 19 — Arkansas / Little Rock / ZIP 72204 / House cleaning

Cell: AR | Little Rock | 72204 | "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
Date: 2026-10-29
Status: PREPARED, NOT INSERTED

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Cleaning Dino Little Rock | (501) 680-3145 | House cleaning | Little Rock | https://www.cleaningdinolittlerock.com/ | contact@cleaningdino.com — https://www.cleaningdino.com/cleaning-policies | High — its own Little Rock site says "Proudly serving Little Rock, AR", "Locally Owned & Operated", lists home cleans (Busy Home Reset / Full Home Reset / Deep Home Reset / Move in Move Out — "No two homes are the same") and prints "Phone: 501-680-3145"; the parent business site's contact block repeats "LITTLE ROCK (501) 680-3145" alongside contact@cleaningdino.com and a Little Rock, Arkansas 72207 address. In-home residential cleaning confirmed from its own materials. NOTE: the parent brand also lists Bentonville, AR and St. George, UT markets on that contact page, each with its own local number — the Little Rock operation is separately branded, locally owned per its own site, and is not one of the brief's named franchises; recorded transparently for the coordinator. No ZIP list published, so service_zips = [72204] only. | Own websites https://www.cleaningdinolittlerock.com/ and https://www.cleaningdino.com/cleaning-policies ; Google listing agrees on name, 1405 N Pierce St Ste 100 address and phone |
| V&E Superior Cleaning | (501) 313-9180 | House cleaning | Little Rock | https://www.vesuperiorcleaning.com/ | None published found | Medium — its own site says "V&E SUPERIOR CLEANING specializes in providing high-quality cleaning services for houses, apartments, and new constructions" and lists "House — Residential Cleaning: We provide in-depth house cleaning services", confirming in-home residential cleaning from its own materials; its own homepage fetch printed no phone, but (501) 313-9180 is the phone on its Google listing (9023 Geyer Springs Rd, Little Rock, AR 72209) with no conflicting number found anywhere. No email published on the fetched site, so none recorded. No ZIP list published, so service_zips = [72204] only. | Own website https://www.vesuperiorcleaning.com/ ; Google listing |

## Dedupe

- Checked every candidate name AND phone against ~/workspace/goals/van-squad-directory-website/hidden_files/day19-dedupe.txt (1,586 businesses) and grep of every file in ~/workspace/van-squad/prospecting/.
- No included business matches by name or phone in either source.
- Near-name note: the dedupe file contains "Superior Cleaning Solutions" (Bismarck, ND, (701) 312-0337) — a different business in a different state with a different name and phone; V&E Superior Cleaning does not match it by name or phone.

## Excluded

- CottageCare Little Rock ((501) 219-2205), Merry Maids ((501) 427-4593), Molly Maid of Greater Little Rock ((501) 365-2607), Two Maids of Little Rock ((501) 451-3620) — national franchises, excluded per brief (CottageCare/Merry Maids/Molly Maid named explicitly; Two Maids is the same franchise class).
- Diana's Cleaning Service — EXCLUDED for conflicting phones: its own UENI site's About text and its Google listing give (501) 500-0119, while the same site's contact footer gives (501) 615-8299. No single verifiable phone could be recorded without guessing, per brief.
- Eliteness Cleaning Maid Service of Little Rock ((501) 500-5313, 6834 Cantrell Rd) — EXCLUDED: multi-state expansion brand — its own contact page lists locations in Athens GA, Macon GA, Lakeland FL, Memphis TN, Houston TX, Columbia SC, Charlotte NC, Atlanta GA and Orlando FL alongside a toll-free (855) 949-4401, and its published Little Rock email is malformed ("littleRock@ElitenessCleaning.comcom"); not a local-only operator.
- All Clean by Anabelle (Little Rock page, (501) 443-2129) — multi-state expansion brand (already excluded on the same grounds in the Day 18 Springfield cell); not a local-only operator.
- Amaze My Home ((501) 779-5671) — its own site is titled "Professional House Cleaning Services In North Little Rock, AR" and its address is in North Little Rock — wrong city for this Little Rock cell.
- Rock City Home Reset LLC ((501) 307-5785) — despite the name, its own site and Thumbtack profile say it serves Northwest Arkansas (Bella Vista / Rogers) — wrong region for this cell.
- Akins Janitorial Services ((501) 771-9966, 308 W Roosevelt Rd — in/near 72204) — EXCLUDED: janitorial by name, and its listed website akinsclean.com no longer serves the business (the domain fetch returned unrelated parked/spam content), so residential house cleaning could not be confirmed from its own materials.
- OJ's Commercial Cleaning, ServiceMaster Clean / SDS, Pro-Styl Commercial Cleaning Services, D & B Janitorial Services, TLS Janitorial Services, Maintenance of Arkansas — commercial/janitorial-only or franchise commercial cleaning; no residential house cleaning confirmed.
- Martinez Sister cleaning services ((501) 400-5813, 3209 Elam St, Little Rock — in 72204), So Fresh So Clean Cleaning Service ((501) 805-3856, 2305 S Summit St), Clean N Sharpe ((501) 772-4746, 1220 S Woodrow St — in 72204), Lpj cleaning services ((501) 274-7760), Assembly-1 Cleaning Service ((501) 503-7899) — EXCLUDED: each appears only as a bare Google listing with a generic "Cleaning Service" category; no own website or business-published description could be found confirming residential in-home house cleaning, so the mobile/on-site gate could not be met from their own materials.
- The Kleaning Kompany (North Little Rock) — toll-free-only phone (888-395-0280) and wrong city.
- Pro Cleaning (North Little Rock) — toll-free-only phone (800-735-5978) and wrong city.
- McCruels Carpet & Floor Care, Revive, Best Windows Cleaners, Fiber-Seal Systems, Renew Exteriors — carpet/window/exterior/fabric specialties, not house cleaning.
- Homeaglow / Angi / Thumbtack / HomeAdvisor listings — platforms/lead-gen, excluded per brief.

## ZIP note

Target ZIP 72204 is a largely residential/institutional pocket of Little Rock (John Barrow / 12th Street area) with very few cleaning businesses addressed inside it; the qualifying Little Rock operators found are addressed in adjacent Little Rock ZIPs (Cleaning Dino at 72207, V&E Superior Cleaning at 72209) and confirm Little Rock-wide in-home service from their own materials, so they were recorded against the target ZIP as the cell's service ZIP. The sweep was expanded across adjacent Little Rock ZIPs (72204 → 72205/72206/72207/72209 listings reviewed) and still yielded only 2 businesses that pass every gate — the rest of the metro's supply is franchises, commercial janitorial, multi-state expansion brands, or listing-only names with no own-materials confirmation. Neither included business publishes a ZIP-code service list, so service_zips is ["72204"] for both entries. This cell is honestly short of the 3-business floor; no weak listing was padded in to reach it.

## Count

- Qualifying businesses prepared: 2
- Email leads: 1 (Cleaning Dino Little Rock — contact@cleaningdino.com, from the business's own parent site contact block)
- Files: day-19-ar-little-rock-zip72204-house-cleaning.md, -inserts.json (2 businesses + 2 listings), -leads.json (1 entry)
- Status: PREPARED, NOT INSERTED
