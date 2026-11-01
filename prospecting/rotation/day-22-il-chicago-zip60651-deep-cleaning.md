# Rotation Day 22 — Illinois: Chicago × Deep cleaning × ZIP 60651

- Date: 2026-11-01
- Cell: Illinois — Chicago — ZIP 60651 (Austin / Humboldt Park, West Side) — category "Deep cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business / public listing aggregators) for cross-checks only.
- Result: 7 qualifying businesses. No ZIP expansion needed — 7 businesses were verified for 60651 itself (All Hours is based in 60651 and lists 60651 in its own service-ZIP list; the others explicitly serve Humboldt Park / Chicago residential homes from their own sites).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| All Hours Cleaning Services Chicago | (219) 946-5746 | Deep cleaning | Chicago | https://allhourscleaningchicago.com/ | — | High — phone, address 801 N Kilpatrick Ave, Chicago, IL 60651, and a service-ZIP list including 60651 all on own site; own site offers Deep Clean, Move-In/Move-Out and Post-Construction for homes | Own website |
| Always Green Cleaning Services Chicago | (872) 356-0166 | Deep cleaning | Chicago | https://alwaysgreencleaningserviceschicago.com/house-cleaning-services-humboldt-park | alwaysgreen.chicago@gmail.com (https://alwaysgreencleaningserviceschicago.com/house-cleaning-services-humboldt-park) | High — phone and email on own Humboldt Park page; that page says "We have standard cleaning, deep cleaning, move in/move out cleaning" for Humboldt Park homes (Humboldt Park includes 60651) | Own website |
| Clean Bean | (872) 221-1559 | Deep cleaning | Chicago | https://hellocleanbean.com/ | info@hellocleanbean.com (https://hellocleanbean.com/) | High — phone and email in own site's Contact block; own site offers Deep Cleaning, Move-In & Move-Out and Post-Construction, lists Humboldt Park among neighborhoods served, and says it is a small locally owned Chicago team, not a franchise/platform | Own website |
| Deep Cleaning Chicago | (224) 777-0083 | Deep cleaning | Chicago | https://www.deepcleaningchicago.net/domestic-cleaners | deepcleaningchicago@gmail.com (https://www.deepcleaningchicago.net/domestic-cleaners) | High — phone and email on own site; own site lists residential deep cleaning (baseboards, vents, out-of-reach), end-of-lease and post-construction cleaning for Chicago homes, with Chicago address 1309 W Fillmore St, Chicago, IL 60607 on the page | Own website |
| LizMarie Cleaning Services | (773) 798-2008 | Deep cleaning | Chicago | https://www.lizmariecleaningservices.com/cleaning-services | support@lizmariecleaningservices.com (https://www.lizmariecleaningservices.com/cleaning-services) | High — phone and email on own site; own site offers one-time deep cleaning, post-construction/post-renovation, and move-in/move-out cleaning for Chicago homes/apartments | Own website |
| Ramos Quality | (312) 522-3219 | Deep cleaning | Chicago | https://cleaningservicechicagoill.com/ | ramos@cleaningservicechicagoill.com (https://cleaningservicechicagoill.com/) | High — phone and email on own homepage; own site offers residential deep cleans, move-in/move-out and post-construction, and lists Humboldt Park in its service area ("works across … Humboldt Park") | Own website |
| Tidy Nest Services | (773) 419-3537 | Deep cleaning | Chicago | https://tidynestservice.com/ | info@tidynestservice.com (https://tidynestservice.com/contact/) | High — phone on own homepage and contact page, email on own contact page; homepage says "Move In/Outs & Deep Cleaning services" (residential), contact page address 1844 N. Humboldt Blvd., Chicago, IL 60647 (adjacent to 60651, Humboldt Park) | Own website |

## Dedupe

- Prospecting files: grep of ~/workspace/van-squad/prospecting/ for every candidate name and phone above returned no matches (including tonight's other day-22 files).
- Live DB: checked per phone against Supabase REST `businesses?select=name,phone&phone=eq.<phone>` — all 7 returned `[]` (no match): (219) 946-5746, (872) 356-0166, (773) 798-2008, (224) 777-0083, (312) 522-3219, (872) 221-1559, (773) 419-3537. Note: the stored-connector CLI (vs_rest.py) timed out / network-errored on its first attempts; the checks were completed via direct Supabase REST calls with the anon key from js/config.js (the (219) number needed one retry and then returned `[]`, HTTP 200).
- No same-name or same-phone duplicates within this cell.

## Excluded

- **Val's Services Cleaning — EXCLUDED (conflicting phone).** Own website (valsservices.com, incl. its recurring-cleaning page) publishes (312) 868-7822, while its public Google listing publishes a different number, (312) 741-9691. Conflicting-phone businesses are excluded per the brief. It otherwise offers Super Deep / move-in-out / post-construction cleaning in Chicago.
- **Pro Housekeepers (Chicago) — EXCLUDED.** Only phone is toll-free (844) 242-9464 and it describes itself as a professionally managed multi-market company — toll-free-only / national-style operator, no local Chicago phone.
- **Pink's Cleaning — EXCLUDED.** Google listing ties it to a Chicago address, but its own website says it serves Round Lake, IL and nearby Lake County communities only, and publishes a different phone (+1-312-307-2948) than the listing (+1 773-673-8138) — does not serve this cell on its own materials, plus a phone conflict.
- **Molina's Deep Cleaning LLC — EXCLUDED.** Found only as a place listing (phone +1 773-992-6365, no verifiable website found); no own materials confirming a residential deep-clean offer could be verified.
- **SERVPRO of Logan Square / Humboldt Park — EXCLUDED.** National restoration franchise; its cleaning page is general/janitorial and restoration-led, not a local residential deep-clean operator for this category.
- **Karen's Green Maids — NOT INCLUDED.** Chicago deep cleaning is offered on its site ((773) 538-3031), but it was not needed to reach the target and its many templated neighborhood pages were not individually re-verified for 60651/Humboldt Park service in this cell; left out rather than padded in.

## ZIP note

No expansion beyond 60651 was needed: 7 businesses qualify for the target ZIP. Service ZIPs in the inserts file: All Hours Cleaning Services Chicago lists its own stated service ZIPs (60651 plus 60607, 60608, 60610, 60612, 60614, 60618, 60622, 60623, 60624, 60634, 60639, 60641, 60644, 60647, exactly as published on its site). All other businesses state neighborhoods/city service, not a ZIP list, so their service_zips is ["60651"] only — no ZIPs were invented.
