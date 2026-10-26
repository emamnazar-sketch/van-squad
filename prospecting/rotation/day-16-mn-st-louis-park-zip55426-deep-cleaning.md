# Day 16 — Minnesota | St. Louis Park / Minneapolis | ZIP 55426 | Deep cleaning

- Cell: MN / St. Louis Park–Minneapolis / 55426 / "Deep cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: business's own website first, then public Google Business listings
- Status: PREPARED, NOT INSERTED
- Date: 2026-10-26 (Day 16 rotation, Wave 2)
- City recorded is each business's own stated city (St. Louis Park or Minneapolis); each must serve the 55426 area.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Ivy Cleans | (612) 424-0391 | Deep cleaning | St. Louis Park | https://ivycleans.com/ | Support@ivycleans.com — https://ivycleans.com/ | High — own site lists a named "Deep Cleaning" package (beneath furniture/appliances, baseboards, window sills), phone and email on own site, local insured business with a St. Louis Park address (5821 Cedar Lake Rd S Ste 208) on its Google listing | Own website; Google listing |
| Pristine and Clean | (612) 419-6937 | Deep cleaning | Minneapolis | https://pristineandclean.org/ | — none published found | Medium — own site lists "Deep Clean: top-to-bottom detail: baseboards, inside appliances, grout, ceiling fans" for homes and Minneapolis address, but phone was verified on its Google listing only and no ZIP-level service list is published | Own website; Google listing |
| The Fresh Edit Cleaners | (612) 445-7009 | Deep cleaning | Minneapolis | https://thefresheditcleaners.com/ | — none published found | Medium — own site has a dedicated "Deep Cleans" section for residential homes and phone on own site; it states Minneapolis–St. Paul / Twin Cities service with nearby neighborhoods, but no explicit 55426/ZIP list is published | Own website |
| Two Bettys Green Cleaning Company | (612) 720-8768 | Deep cleaning | Minneapolis | https://www.twobettysclean.com/ | — none published found | Medium — locally owned Minneapolis company whose own business description says deep cleaning can be requested (under furniture, behind books, ceiling fans) and that it serves St. Louis Park explicitly; phone verified on Google listing, not seen on the current homepage | Own website / business description; Google listing |

## Dedupe
- Checked every included candidate name AND phone against (1) ~/workspace/goals/van-squad-directory-website/hidden_files/day16-dedupe.txt (1,313 live businesses) and (2) grep of ALL files in ~/workspace/van-squad/prospecting/, including tonight's Day-16 Wave 1 files — no matches for any included business by name or phone.
- Wave-1 duplicates deliberately NOT re-listed here even though they also offer deep cleaning: CertainClean (612) 306-9593, Happy Earth Cleaning Cooperative (612) 516-7112, Minneapolis House Cleaning, Swept Away MN, Dawns Household Services, House Cleaning Service by Bell LLC, Maid In Paradise, Ikedra's Special Touch Cleaning Services LLC — all already prepared in day-16-mn-minneapolis-zip55419-house-cleaning.

## Excluded
- CertainClean, Happy Earth Cleaning Cooperative and the other Wave-1 Minneapolis house-cleaning businesses above — duplicates of Wave 1, excluded per brief.
- EcoMaids (7600 W 27th St, St. Louis Park; (612) 216-0989) — national franchise chain, excluded per franchise rule.
- MaidThis Cleaning Minneapolis, MaidPro / Molly Maid / Merry Maids / The Maids / The Cleaning Authority / Homeaglow-type listings — national franchises / lead-gen platforms, excluded per brief.
- KimDall Cleaning Service LLC (7204 W 27th St, St. Louis Park 55426; (731) 879-8611) — own site is commercial-cleaning / janitorial and interior-demolition focused; no in-home deep-clean service confirmed from its own materials.
- SP Home and Cleaning Company (St. Louis Park; (612) 460-5096) — own website is image-only with no verifiable service text; deep cleaning could not be confirmed from its own materials.
- P&A Cleaning Services (cleaningservicesstlouispark.com) — generic location-keyword site; no deep-clean service confirmed from a real local operator's own materials, treated as lead-gen style and excluded.
- Collazo Cleaning (Edina listing; (651) 202-5309) — own site confirms residential/commercial cleaning (Savage-based, also Florida) but no deep-cleaning service was found on its own site.
- Deepers Cleaning LLC (Richfield; (612) 441-8951) — own site does confirm Deep Cleaning and Twin Cities service within 50 miles, but the business's own stated city is Richfield, outside this cell's St. Louis Park/Minneapolis scope, so it was left out rather than mis-cityed.
- Deep Clean Home Cleaning LLC (Burnsville; (612) 369-5786) — own website could not be fetched/verified in this run and no St. Louis Park service confirmation was found; not included rather than guessed.
- MN Neat Cleaning — only a toll-free (888) number and no clear local deep-clean confirmation; excluded (also excluded in Wave 1 for the same reason).

## ZIP note
- Target ZIP 55426 only; 4 qualifying businesses found, so no expansion to an adjacent ZIP was needed. No included business published a ZIP-level service-area list, so service_zips is ["55426"] for all, per instructions (city/Twin Cities-level service areas only were published).

## Count
- Count: 4 qualifying businesses prepared (1 St. Louis Park, 3 Minneapolis), 1 published-email lead (Ivy Cleans).
- Files: day-16-mn-st-louis-park-zip55426-deep-cleaning-inserts.json (4 businesses + 4 listings, JSON validated), day-16-mn-st-louis-park-zip55426-deep-cleaning-leads.json (1 entry).
