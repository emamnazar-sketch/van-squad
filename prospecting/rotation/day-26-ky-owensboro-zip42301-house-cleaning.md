# Day 26 — Kentucky | Owensboro | ZIP 42301 | House cleaning

Cell: KY / Owensboro / 42301 / "House cleaning" (exact label verified in js/data.js). All 3 qualifying businesses are based in Owensboro and serve 42301 itself — no adjacent-ZIP expansion was needed. Every business was verified from its own website first (residential house cleaning at customers' homes + public phone on the site), then deduped against ~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json (2,217 rows) and a grep of ~/workspace/van-squad/prospecting/ (including tonight's Day-26 files) — no name or phone matches for any included business. Note: the plain brand name "Merry Maids" is already in the DB dump (Fargo unit, (701) 847-4608), so the Owensboro franchise is city-qualified as "Merry Maids of Owensboro" per the brief.

## Included (3)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| Merry Maids of Owensboro | (270) 414-4853 | House cleaning | Owensboro | https://merrymaids.com/home-cleaners-owensboro-ky | None published on its location page | Medium — independently owned and operated franchise (page's own wording); own location page: "trusted name in residential cleaning" in Owensboro for 30+ years, weekly / one-time deep cleaning in homes, address 920 Frederica Street, Suite 107, Owensboro, KY 42301 (target ZIP itself) and this phone printed twice on the page; its Google listing shows a different number, (270) 518-2553, so own-site-first was applied and the discrepancy is documented here, hence Medium | https://merrymaids.com/home-cleaners-owensboro-ky | No DB/prospecting match on this name or either phone. Plain "Merry Maids" already in DB is the Fargo unit with a different phone — different franchise location. Own page lists service-area city names only (Calhoun, Corydon, Hawesville, Henderson, Owensboro), no ZIPs, so service_zips = [42301] |
| Happy House Cleaning Service | (270) 281-4502 | House cleaning | Owensboro | http://www.hhcsowensboro.com/ | None published on own site (phone / form only) | High — locally family-owned, woman-owned, veteran-owned since 1993; own site: transforming "your home," one-time detailed and regular maintenance cleaning, "Phone: (270) 281-4502" on site and FAQ page; KY Secretary of State filing gives principal office 2006 Griffith Pl E, Owensboro, KY 42301 (target ZIP itself); Greater Owensboro Chamber profile confirms homes + offices cleaning with the same phone | http://www.hhcsowensboro.com/ | No DB/prospecting match on name or phone. service_zips = [42301] — no ZIP list published beyond its 42301 office |
| Owensboro Cleaning Company | (270) 713-7181 | House cleaning | Owensboro | https://owensborocleaning.com/ | None published on own site (phone only) | High — locally owned and operated by Trey and Kaci Copeland; own site: "Offering residential and commercial cleaning," "all types of cleaning needs for your home or office," one-time and deep cleaning that "leaves your house sparkling clean," phone 270-713-7181 on site, address 1417 West 3rd Street, Owensboro, KY; Google listing confirms the same name variant ("Owensboro Cleaning"), address, and phone | https://owensborocleaning.com/ | No DB/prospecting match on name (either variant) or phone. Own site lists service-area place names only (Owensboro, Utica, Whitesville, Masonville, Knottsville, Sorgho, Stanley, Henderson, Evansville, Daviess County, Ohio County), no ZIPs, so service_zips = [42301] |

## Exclusions

- **Grime Stoppers ((270) 313-9844)** — EXCLUDED: own site (grimestop.com) is an exterior cleaning company only — pressure washing, soft washing, roof washing, window and gutter cleaning; no interior / residential house cleaning confirmed from its own materials. (Its published email info@grimestop.com was NOT collected as a lead because the business is excluded from this cell.)
- **Purus Clean Commercial Cleaning & Property Maintenance ((270) 240-1010)** — EXCLUDED: commercial-only — own site describes it as a "professional commercial cleaning and janitorial services company" for organizations; no residential house cleaning.
- **Office Pride Commercial Cleaning Services of Owensboro, KY–Rockport, IN ((270) 494-2204 listing / (270) 570-4595 own page)** — EXCLUDED: commercial janitorial only per its own location page; no residential house cleaning.
- **Clean Team Owensboro (cleanteamclean.com) and Executive Cleaning Services Owensboro (executive-clean.com)** — EXCLUDED: commercial / facility janitorial only; Executive Cleaning publishes only a toll-free 1-800 number.
- **Amanda's Affordable Housecleaning ((270) 316-9785), Adrienne's All Around Cleaning ((270) 485-4732), OBKY Cleaning Services ((270) 696-5739), Clean as a Whistle ((270) 570-1355), Horn's Commercial & Residential Services ((270) 485-4243), Green Property Solutions LLC ((270) 214-6017)** — EXCLUDED: listing-only (Google / social listings) with no verifiable own website or own materials confirming residential house cleaning at customers' homes.
- **C&D Cleaning Services ((812) 489-1846)** — EXCLUDED: listing-only with an out-of-area (812) phone and no verifiable own website confirming Owensboro residential house cleaning.
- **Clutter Cleaners ((270) 702-1556)** — EXCLUDED: junk removal / demolition per its own listing description, not house cleaning.
- **Owensboro Window Cleaning ((270) 683-5913) and J & B Exterior ((270) 993-0349)** — EXCLUDED: window / exterior cleaning only, not house cleaning.
- **Personal Touch Property Maintenance ((270) 925-1226)** — EXCLUDED: landscaping / handyman / property maintenance per its own site; house cleaning not confirmed.
- **Franchise sweep:** no Molly Maid, MaidPro, Two Maids, or The Maids location in Owensboro was found (nearest Merry Maids units in other cities are separate franchise locations, handled in their own cells).

## Leads

0 published emails collected (see matching -leads.json, empty array): none of the 3 included businesses publishes a business email on its own website or location page — all are phone / contact-form only. Unreadable = none was recorded; no address was guessed. Emails are leads only — never written to business profiles.

## Files

- day-26-ky-owensboro-zip42301-house-cleaning-inserts.json — 3 businesses + 3 listings, exact coordinator shape.
- day-26-ky-owensboro-zip42301-house-cleaning-leads.json — 0 leads (empty array).
