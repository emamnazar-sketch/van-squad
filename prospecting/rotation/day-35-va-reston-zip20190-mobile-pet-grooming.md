# Day 35 — Virginia / Reston / ZIP 20190 / Mobile pet grooming

Cell: VA / Reston / 20190 / "Mobile pet grooming" (exact label verified in ~/workspace/van-squad/js/data.js).

**Result: 2 qualifying businesses.** Reston is genuinely thin for this category. Fewer than 3 qualified in 20190, so the cell was expanded to adjacent Reston ZIP 20191 as instructed — Woofie's of Reston-Herndon-Sterling is based in 20191 (1897 Preston White Dr, Suite 102) and MobileDog states it serves all of Reston. Even after expansion, only 2 businesses pass every gate (see exclusions below). The 5–8 aim was not reached without padding with toll-free national platforms, storefront salons, out-of-area operators, or a DB duplicate — all forbidden by the brief.

Every business below was verified on its own website first (mobile van / groomer comes to the home + public local phone), then deduped against /tmp/db_existing.json (3,238 businesses) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone match for either included business.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| MobileDog | (571) 334-6486 | Mobile pet grooming | Reston | https://mobiledog.com/ | info@mobiledog.com — published in The Reston Letter profile of the business (https://www.therestonletter.com/post/sisters-on-the-move-mobile-dog-brings-expert-grooming-to-your-doorstep) | High — own Reston page: "Reston is where MobileDog starts every day. Our van is based here… Just a calm, one-on-one grooming session inside our fully equipped van, parked right outside your home"; "not a franchise… two sisters and third-generation groomers"; phone (571) 334-6486 printed on its own page; serves all of Reston plus Herndon, Sterling, Ashburn, Tysons, Vienna, McLean, Great Falls, Oakton | Business's own website (Reston service page) | No DB/prospecting match on name ("MobileDog") or phone. service_zips = 20190 target + 20191/20194 (all of Reston, as stated) + ZIPs of its other stated service cities (Herndon 20170/20171, Sterling 20164/20165, Ashburn 20147/20148, Great Falls 22066) |
| Woofie's of Reston-Herndon-Sterling | (703) 827-1665 | Mobile pet grooming | Reston | https://www.woofies.com/reston-herndon/ | petservices@woofiesrh.com — published on the location's own client manual contact page (https://woofiesrestonherndon.petssl.com/client-manual?show=all) | High — own location site: "Mobile Pet Spa, which brings pet pampering right to your doorstep," "mobile pet spa brings the premium grooming salon experience right to your front door"; local Reston location at 1897 Preston White Dr, Suite 102, Reston, VA 20191 with local phone (703) 827-1665 on its own pages; serves Reston, Herndon, Sterling, Vienna, Great Falls | Business's own website (Reston-Herndon location) | No DB/prospecting match on this location name or phone (other Woofie's territories in the DB are different locations with different phones). Based in adjacent 20191 — expansion ZIP, noted per brief. Its client-manual page also lists (703) 719-4170; the main location site's (703) 827-1665 is used. service_zips = 20190 target + 20191 base + 20194 + ZIPs of stated service cities (Herndon, Sterling, Vienna 22180/22182, Great Falls 22066) |

## Exclusions (checked, not included)

- **Lucky Dog Mobile Groomers** — (240) 898-2000, luckydogmobilegroomers.com/fairfax-county-va/ — DEDUPE SKIP: its own Fairfax County page does list Reston, but a business with the exact same name "Lucky Dog Mobile Groomers" is already in the live DB (Colorado, (303) 747-5555) — same name = skip per brief. Its Fairfax email is also Cloudflare-masked on its own page, so no verifiable address could be recorded.
- **Barkbus** — Reston page confirms mobile vans, but its only phone is (800) 742-9255 — toll-free national number, excluded per brief.
- **Groomit** — Reston pages confirm mobile service, but phones are +1 (888) 396-7170 / (646) 718-5360 — nationwide booking platform / toll-free, no local Reston operator, excluded.
- **Groombuggy** — Reston page confirms mobile vans, but contact numbers found are (800) 742-9255 / (925) 477-2627 (California) — national platform with no local operator phone, excluded.
- **Furry Land Mobile Pet Grooming** — Reston page on furryland.us, only phone 877-726-3345 — toll-free national, excluded.
- **Doggie's Mobile Day Spa** — (703) 966-8451, doggiesmobiledayspa.com — EXCLUDED on service area: its own site lists McLean, Tysons Corner, Falls Church, Annandale, Alexandria, Springfield, Arlington, Great Falls, Fair Oaks, Fair Lakes, Dunn Loring, Centreville, Chantilly, and Fairfax — Reston is not named in its own service-area materials.
- **All Around Town Mobile Pet Spa** — (703) 408-6027, allaroundtown.dog — EXCLUDED on service area: its own site serves only Prince William County (Gainesville, Haymarket, Manassas, Bristow, Nokesville), Fauquier County, and Stafford County — not Reston/Fairfax County.
- **Canine Carousel** (Herndon, (703) 709-8746) — storefront salon; its own site says its mobile grooming service is MobileDog (same operators Chrissy and Nikki) — already included above as MobileDog, not a separate business.
- **Scenthound Reston** (703) 665-6740, **Fur Factory** (703) 437-7794, **Giving Tree Pet Resort & Grooming** (571) 325-2994, **PetSmart Grooming Reston** (703) 796-0656, **Dog A Do** (Herndon) — storefront salons only, no mobile/at-home grooming confirmed, excluded.
- **Zoomin Groomin** — no Northern Virginia / Reston location found (Virginia locations are Virginia Beach, Hanover, Chesterfield areas), excluded.
- **Peachy Pooches Dog Spa & Grooming** (McLean) — storefront salon; no mobile service to Reston confirmed from its own materials, excluded.

## Leads

2 published emails collected (see -leads.json): info@mobiledog.com (MobileDog) and petservices@woofiesrh.com (Woofie's of Reston-Herndon-Sterling). No email was written into any business record.
