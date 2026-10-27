# Day 17 — Iowa | Des Moines | ZIP 50310 | House cleaning

Cell: IA / Des Moines / 50310 / "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
Date researched: 2026-10-27 (Day 17 rotation)
Status: PREPARED, NOT INSERTED
Method: Public information only — business's own website first, then public listings (Google Business). No insertion performed by this worker.

ZIP note: Target ZIP 50310 yielded 7 qualifying businesses, so no expansion to an adjacent ZIP was needed. 50310 is the Beaverdale / northwest Des Moines area; several included businesses are addressed in or immediately next to 50310 and all explicitly serve Des Moines homes. No business published a ZIP-code service list, so service_zips is ["50310"] only for every entry. Note on phClean: its Des Moines-area office is in West Des Moines (9250 University Ave, Suite 116) and it explicitly serves Des Moines under the name "phClean of Des Moines" — included on service-area grounds, marked Medium.

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Des Moines Elite Cleaning | (515) 525-9933 | House cleaning | Des Moines | https://www.desmoineselitecleaning.com/ | None published found | Medium — Own site is titled "House Cleaning Services in Des Moines, Iowa" and offers regular house cleaning and deep cleans in customers' homes; phone from its Google listing (1325 56th St, Des Moines), not in the fetched homepage text | Own website https://www.desmoineselitecleaning.com/ ; Google listing (phone + address) |
| Paragon Commercial & Residential Cleaning | (515) 868-3491 | House cleaning | Des Moines | https://pcrcleaningservices.com/ | None published found | High — Own site says "Your Number 1 Choice For Residential & Commercial Cleaning in Des Moines," offers scheduled home cleaning, and prints phone 515-868-3491 and office 3701 Ingersoll Ave, Des Moines, IA 50312 on the site | Own website https://pcrcleaningservices.com/ |
| Al and Kim's Cleaning Services | (515) 331-1679 | House cleaning | Des Moines | http://www.alandkimscleaningservice.com/ | None published found | Medium — Google listing (3511 54th St, Des Moines) quotes the business's own site: "our Des Moines professional cleaners will come to you"; phone from the Google listing — direct fetch of the own site failed in this run, so verification rests on the listing quoting its own materials | Google listing quoting own website http://www.alandkimscleaningservice.com/ |
| Comfort Cleaning | (515) 318-7572 | House cleaning | Des Moines | https://comfortcleanco.com/ | None published found | Medium — Own site says it is a local small business offering light, standard, and deep cleaning of homes for homeowners and renters; phone and Des Moines address (1949 Francis Ave) from its Google listing, not in the fetched homepage text | Own website https://comfortcleanco.com/ ; Google listing (phone + address) |
| Shine Housekeeping | (515) 490-8184 | House cleaning | Des Moines | https://shinehousekeeping.com/ | contact@shinehousekeeping.com — https://shinehousekeeping.com/ | High — Own site is titled "Residential Cleaning Services in Des Moines," offers cleaning plans for homes/families, and prints phone (515) 490-8184 and the email on the site (a second address, hello@shinehousekeeping.com, is also published there) | Own website https://shinehousekeeping.com/ |
| Capitol Cleaning LLC | (515) 639-1222 | House cleaning | Des Moines | https://capitolcleaningllc.com/ | c.olmedo83@icloud.com — https://capitolcleaningllc.com/ | High — Own site says locally owned, offers Residential Cleaning ("Thorough house cleaning") across the Des Moines metro, and prints phone (515) 639-1222 and this email as its contact address on the site | Own website https://capitolcleaningllc.com/ |
| phClean | (515) 985-2929 | House cleaning | Des Moines | https://www.phclean.net/ | care@phclean.net — https://www.phclean.net/terms-of-service-agreement/ | Medium — Own site offers house cleaning / residential cleaning in Des Moines and prints the Des Moines-area office phone (515) 985-2929 and the email on its own pages; independent local company (its own materials state "not a franchise"), but the office itself sits in West Des Moines | Own website https://www.phclean.net/ and https://www.phclean.net/about/ ; own Terms page (email) |

## Dedupe

- Checked every candidate name AND phone against (1) ~/workspace/goals/van-squad-directory-website/hidden_files/day17-dedupe.txt (1,406 live businesses) and (2) grep of all files in ~/workspace/van-squad/prospecting/.
- Result: No matches for any included business by name or phone. Near-name hits checked and cleared: "Nebraska Elite Cleaning" ((402) 810-8689, Omaha) and "Paragon Solutions Auto Detailing" ((619) 452-6969, Las Cruces detailing) are different businesses with different phones. No duplicates skipped on dedupe grounds.

## Excluded

- Merry Maids of Des Moines — (515) 412-0469 — national franchise; excluded per franchise rule.
- MaidPro of Des Moines — (515) 505-3996 — national franchise; excluded per franchise rule.
- Agent Clean of Des Moines — (515) 329-0003 — multi-location "find a location" exterior-cleaning operation; no interior house-cleaning offer confirmed from its own materials.
- Superior Cleaning Services of Iowa — (515) 333-6662, 3520 Beaver Ave, Des Moines — only a slogan in its Google listing; direct fetch of its own site failed in this run and no own-materials confirmation of residential house cleaning could be obtained; not included rather than guessed.
- Earth Made Clean — (515) 710-6416 — no service description found in public listings and direct fetch of its own site failed in this run; insufficient own-materials confirmation.
- KLEAN — (515) 664-5185, 2901 High St, Des Moines — only a Google listing found; no own-site content verifiable in this run; insufficient confirmation.
- Clean Des Moines — (515) 251-3952 — own description is a commercial janitorial management company only; no residential house cleaning.
- ZZ Clean LLC and Mid-Iowa Commercial Cleaning — commercial cleaning and/or listed as possibly temporarily closed; not residential house cleaning.
- Larry's Window Service — (515) 244-0560 — window cleaning is the primary business; maid service is only a secondary line, not a house-cleaning company.
- Homeaglow, Care.com, Taskrabbit, and The CoBuilders Des Moines pages — national lead-gen / platform listings with no single local operator; excluded per instructions.

## Count

- Included: 7 businesses (all House cleaning, Des Moines, serving 50310)
- Leads (published emails): 3 (Shine Housekeeping, Capitol Cleaning LLC, phClean)
- Files: inserts.json (7 businesses + 7 listings), leads.json (3 entries)
- Status: PREPARED, NOT INSERTED
