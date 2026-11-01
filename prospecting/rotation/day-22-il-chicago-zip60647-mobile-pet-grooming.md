# Day 22 — Illinois — Chicago — ZIP 60647 — Mobile pet grooming

- Date: 2026-11-01
- Cell: IL × Chicago × 60647 (Logan Square) × "Mobile pet grooming"
- Sources: each business's own website first (fetched and read 2026-11-01), then public listings (Google/Yelp aggregator records, PetWorks, Thumbtack) for cross-checks. No data was invented; phones, emails and service areas below are copied from the cited public sources.
- Qualifying businesses prepared: 3

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Pet Groomer Chicago | (312) 539-8988 | Mobile pet grooming | Chicago | https://www.petgroomerchicago.co/ | petgroomerchicago@gmail.com — own website FAQ/footer, https://www.petgroomerchicago.co/ | High — own site headlines "Convenient Mobile Grooming (We bring our services to your doorstep)" and "Local Chicagoland Mobile Dog Grooming – Right at Your Doorstep," with in-home grooming confirmed in its FAQ and the local 312 phone on the same page | Own website https://www.petgroomerchicago.co/ |
| What a Wonderful Woof | (773) 453-4414 | Mobile pet grooming | Chicago | https://www.whatawonderfulwoofchicago.com/ | info@whatawonderfulwoofchicago.com — own website contact block, https://www.whatawonderfulwoofchicago.com/ | Medium — own site confirms a fully equipped mobile grooming van ("every service … also available from our mobile grooming van, across Chicago's Northwest Side and nearby suburbs" / "at your door across Chicago"), but its named mobile neighborhoods/suburbs skew west of 60647 and it also runs a Belmont Ave salon, so 60647 coverage rests on its Chicago-wide wording | Own website https://www.whatawonderfulwoofchicago.com/ and https://www.whatawonderfulwoofchicago.com/services/ |
| Meeow Chicago | (773) 917-7848 | Mobile pet grooming | Chicago | https://www.meeowchicago.com/ | None published (no email on own site; none recorded) | Medium — own site lists "Mobile grooming for at-home comfort" / "Mobile Spa" and Yelp lists "Mobile Cat Grooming" as a specialty for the Lincoln Park location; cat-only groomer based in adjacent ZIP 60642 (1765 N Elston Ave #104, address/ZIP stated on its own site), ~2 miles from 60647, but its stated mobile areas are Lincoln Park and O'Hare, so 60647 coverage is by adjacency, not an explicit claim | Own website https://www.meeowchicago.com/ ; Yelp listing for Meeow Chicago - Lincoln Park |

## Dedupe

- Live DB (Supabase `businesses`, via vs_rest.py `get`): exact-phone queries for (312) 539-8988, (773) 453-4414, (773) 917-7848 — all returned `[]` (HTTP 200). Name searches `ilike` %Wonderful Woof%, %Meeow%, %Pet Groomer Chicago% — all returned `[]`.
- Prospecting files: `grep -ri` across all of ~/workspace/van-squad/prospecting/ for each candidate name and phone ("Pet Groomer Chicago"/539-8988, "Wonderful Woof"/453-4414, "Meeow"/917-7848) — no matches. (Unrelated prior hit only: Groombar West Des Moines, (515) 316-6838, Day 17 Iowa — different business and phone.)
- Within tonight's cell: no name or phone repeats among the 3 qualifying businesses.
- Phone-conflict note: Meeow Chicago operates two locations with two different phones — Lincoln Park (773) 917-7848 (used here; it is the number on the business's own homepage) and O'Hare/Schiller Park (224) 781-2138. Not a conflict with any other business; the Lincoln Park number was chosen because that location adjoins 60647.

## Excluded (checked, failed a gate)

- Groombar Chicago — (833) 734-7666 — genuinely mobile and explicitly serves Wicker Park/Chicago (own site), BUT the only public phone is a toll-free 833 number; no verified local-operator phone found. Excluded under the toll-free-only rule.
- Groomit (Logan Square / Chicago pages) — +1 (646) 718-5360 — national on-demand booking platform / lead-gen with a New York phone; no local Chicago operator. Excluded.
- Pawgo Chicago — (773) 850-3647 appears only on an aggregator (dogdog.org); Pawgo is a national platform (HQ Scottsdale, AZ) connecting independent groomers, and the Chicago phone could not be verified on Pawgo's own materials. Excluded as a lead-gen platform with no verified local operator on its own site.
- Zoomin Groomin — Southside Chicago — (312) 626-0429, sschicago@zoomingroomin.com — real local mobile franchise, but its own areas-served page covers only Oak Lawn, Orland Park and Blue Island (far South Side/suburbs); it does not serve 60647. Wrong territory for this cell. (A separate "Zoomin Groomin Chicago" hiring footprint around Oak Park/Evanston exists in job ads, but no verifiable public customer phone/location page for it was found.)
- Bark & Mane of NW Chicagoland (formerly Aussie Pet Mobile) — (847) 516-7810 — mobile, but its own service-area list is far NW suburbs (McHenry, Crystal Lake, Schaumburg, Waukegan, etc.); Chicago/60647 not served. Excluded.
- Woofie's of Evanston-North Shore — (847) 243-6100 — mobile pet spa, but its territory is Evanston/North Shore, not Chicago 60647. Excluded.
- Clean Paws Mobile Grooming Salon — Gary, IN — (888) 648-7256 — Indiana business, toll-free-only phone, outside this cell. Excluded.
- SpaBARK! Mobile Grooming — (312) 850-2275, 1804 W Lake St, Chicago — own website spabark.com is now an "Under Construction" placeholder and a listing flags it "Possibly Temporarily Closed"; mobile service cannot be confirmed from the business's own current materials. Excluded.
- Pet-A-Cure — (773) 384-7666, 2949 W Diversey Ave (Logan Square) — salon/storefront only; no mobile service in its own materials. Excluded.
- Temple of The Dog Chicago — (773) 698-6508, 1953 N Campbell Ave (60647) — full-service salon/spa in Logan Square; no mobile service. Excluded.
- All 4 Dirty Paws — (773) 853-0783, 4232 N Cicero Ave — storefront groomer/boutique; no mobile service claimed. Excluded.
- Bucktown Bow & Meow — (773) 252-7500, 1823 W North Ave — cage-free salon + daycare; no mobile grooming. Excluded.

## ZIP note

ZIP 60647 itself yielded only one fully self-confirming Chicago-wide mobile operator based on its own materials (Pet Groomer Chicago, which publishes no service-ZIP list, so only 60647 was recorded for it). Per the cell rule, the cell expanded to adjacent Chicago ZIPs: 60634 (What a Wonderful Woof's own stated salon ZIP; its van claims Chicago-wide/Northwest Side service) and 60642 (Meeow Chicago's own stated Lincoln Park address ZIP, immediately east of 60647). Service ZIPs in the inserts include only the target ZIP plus ZIPs the business itself states (its own address ZIP); no ZIPs were inferred from named suburbs/neighborhoods. This category runs thin in Chicago — most groomers near 60647 are storefront salons, and the large mobile brands serving the area publish only toll-free or out-of-area phones.
