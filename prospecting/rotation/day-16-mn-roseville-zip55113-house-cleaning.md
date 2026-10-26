# Day 16 — Wave 3 — Minnesota | Roseville | ZIP 55113 | House cleaning

- Cell: MN × Roseville × 55113 × "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js, Cleaning group).
- Method: public information only; business's own website first, then Google Business listings.
- ZIP note: 55113 itself yielded 3 qualifying Roseville-based businesses (Supermaid2mn, Suite Cleaning Services, Sparklean Inc.). The remaining 4 are based in the brief's named adjacent north-metro cities — Falcon Heights (Tip Top, whose own contact page gives a 55113 mailing address), Little Canada, Shoreview, and Arden Hills — and each confirms service to Roseville/55113 from its own materials. No expansion beyond those named cities was needed.
- Count: 7 businesses.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Supermaid2mn | (612) 804-5420 | House cleaning | Roseville | https://www.supermaid2.com/ | None published found | High — Own site offers residential cleaning, says it has cleaned houses in Roseville, MN, and publishes phone 612-804-5420 on its own pages; Google listing address 1629 Skillman Ave W, Roseville | Own website https://www.supermaid2.com/ ; Google listing |
| Suite Cleaning Services | (651) 528-8661 | House cleaning | Roseville | https://suitecleaningservices.com/ | scs@suitecleaningservices.com — https://suitecleaningservices.com/ | High — Own site lists residential/home cleaning, phone and email, and its own address 2345 Rice Street Suite 200, Roseville, MN 55113 | Own website https://suitecleaningservices.com/ |
| Sparklean Inc. | (612) 400-3294 | House cleaning | Roseville | https://www.sparkleanmn.com/ | opsmanager@sparkleanMN.com — https://www.sparkleanmn.com/employee-handbook | Medium — Own homepage confirms home cleaning on a weekly/bi-weekly/monthly basis serving Roseville and its own handbook page (same site) gives its Roseville, MN 55113 address with owner phone and email; phone/email appear only on that page, not the main contact form, hence Medium | Own website https://www.sparkleanmn.com/ and https://www.sparkleanmn.com/employee-handbook |
| Tip Top Cleaning Service | (651) 248-4246 | House cleaning | Falcon Heights | http://www.tiptopcleaning.biz/ | jennifer@tiptopcleaning.biz — http://www.tiptopcleaning.biz/contact.htm | High — Own site says it has cleaned residential homes in the Twin Cities since 1997 as a small owner-involved company, and its contact page gives phone, email, and a Falcon Heights, MN 55113 mailing address | Own website http://www.tiptopcleaning.biz/ and /contact.htm |
| Squad Cleaners LLC | (651) 515-4518 | House cleaning | Little Canada | https://squadcleanersllc.com/ | squadcleaners123@gmail.com — https://squadcleanersllc.com/ | High — Own site has an explicit House Cleaning service, lists Roseville, MN among its service locations, and publishes phone and email on its own site; Google listing address 2688 Rice St, Little Canada | Own website https://squadcleanersllc.com/ ; Google listing |
| Home2Office Cleaning Services | (763) 568-0613 | House cleaning | Shoreview | http://home2officecleaners.com/ | home2officecleaning@gmail.com — http://home2officecleaners.com/contact | High — Own site confirms home cleaning (initial, routine, one-time, move-in/out) and its contact page publishes mobile phone and email plus a serving list that includes Roseville; Google listing address 3575 Owasso St, Shoreview | Own website http://home2officecleaners.com/ and /contact ; Google listing |
| Clean4you | (651) 757-5163 | House cleaning | Arden Hills | http://clean4youmn.com/ | None published found | Medium — Own site confirms family-owned home cleaning for Minneapolis, St. Paul and surrounding suburbs with over a decade of experience; phone and Arden Hills address (4621 Lisa Ct) come from its Google listing, not the fetched own-site text, hence Medium | Own website http://clean4youmn.com/ ; Google listing |

## Dedupe

- Every name and phone above was checked against (1) ~/workspace/goals/van-squad-directory-website/hidden_files/day16-dedupe.txt (1,313 live businesses — no Minnesota house-cleaning entries; the only "Roseville" entries there are unrelated California businesses with 916 phones) and (2) grep of ALL files in ~/workspace/van-squad/prospecting/, including tonight's day-16 files (Bloomington, Eden Prairie, Minneapolis 55419, and St. Louis Park cleaning batches).
- No matches: none of the 7 names or phones appears in either source. Near-name grep hits were unrelated out-of-state businesses (The Super Maids of Texas; Sparkle Squad Cleaners, Pflugerville TX; Metro Sparkle & Shine, Arlington TX) — different businesses, different phones, not duplicates.
- Dedupe skips tonight: none — no candidate in this cell duplicated a live or tonight-listed business.

## Excluded

- Two Maids, Shoreview (651) 728-5566 — national franchise; excluded per brief.
- SERVPRO of New Brighton, East Roseville — national restoration franchise, not a house-cleaning operator.
- Homeaglow — lead-gen platform, no local operator listing.
- Baseline Cleaning Services, Roseville (651) 239-0554 — EXCLUDED on the quality gate: its own website could not be fetched/verified in this run and only a Google janitorial listing was available; residential house cleaning could not be confirmed from the business's own materials.
- Surface Surgeons, Roseville — carpet/restoration and media restoration, not house cleaning.
- Bury's Oriental Rug Cleaning, Roseville — rug/dry-cleaning storefront, not in-home house cleaning.
- St Croix Cleaners, Arden Hills — dry-cleaner storefront chain, not house cleaning.
- Legacy Cleaning, Arden Hills — own description is commercial/janitorial only, no residential house cleaning.
- Town & Country Office Cleaning Company, Shoreview — office cleaning only.
- C and R Solutions, Roseville — no verifiable residential house-cleaning confirmation from its own materials (business.site listing only).

## Count

- Included: 7 (Roseville 3, Falcon Heights 1, Little Canada 1, Shoreview 1, Arden Hills 1)
- Published email leads: 5 (see -leads.json)
- Prepared, not inserted — coordinator inserts centrally.
