# Day 40 — NY, White Plains, ZIP 10601, Handyman

- Cell: NY | White Plains | 10601 | Handyman (exact label)
- Date: 2026-11-21
- Status: PREPARED NOT INSERTED
- Sources: business's own website first, then public listings (Google Business). Public information only. Phones/emails never invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Mr. Handyman of Westchester County | (914) 344-5219 | Handyman | White Plains | https://www.mrhandyman.com/westchester-county/ | — none found | High — locally owned and operated franchise (allowed: own local phone + own location page); own White Plains page says it serves White Plains homeowners, address 901 N. Broadway Suite #19, White Plains, NY 10603, phone on page | Own location page + Google listing | No match in day40 dedupe names/phones or prospecting grep |
| Fix This Now! | (917) 885-1889 | Handyman | White Plains | https://www.fixthisnowbyrene.com/ | renealfani@gmail.com — own website https://www.fixthisnowbyrene.com/ | High — own site: "Handyman Services in Westchester, NY," servicing Southern Westchester since 1999, "any issues under your roof," small tasks welcome, phone and email on site, Hartsdale address adjacent to White Plains | Own website + Google listing | No dedupe match. Note: Google listing shows (914) 885-1889; own site shows (917) 885-1889 twice — own-site number used per prefer-own-site rule |
| Handyman of Westchester LLC | (914) 282-7146 | Handyman | White Plains | https://handymanofwestchesterllc.com/ | — none found | Medium — own site offers home repair/remodeling/maintenance in private homes across Westchester, phone in site footer; Google lists Mt Pleasant base | Own website + Google listing | No dedupe match. Note: Google listing shows (914) 512-7053; own-site footer number used per prefer-own-site rule — discrepancy is why Medium |
| Ace Handyman Services Westchester County and Greenwich | (914) 855-1882 | Handyman | White Plains | http://www.acehandymanservices.com/offices/westchester-county-and-greenwich | — none found | Medium — locally owned and independently operated franchise location (allowed: own local phone + own location page) in Mt. Kisco serving Westchester County homes; White Plains not named on the page, hence Medium | Own location page + Google listing | Other Ace locations exist in DB, but this Westchester location name/phone had no dedupe match |
| HomeSquare Pro | (914) 670-8100 | Handyman | White Plains | https://www.homsqr.com/ | — none found | Medium — own site lists "Handyman & Maintenance services" for projects around the house in Westchester & Putnam County, Westchester phone (914) 670-8100 and Pleasantville location on site; broader remodeling company, hence Medium | Own website + Google listing | No dedupe match. Note: a Google listing showed (914) 256-1477; own site's Westchester County line used |

## service_zips basis
Every business carries target ZIP 10601 first. Additional ZIPs are only ones the business itself states in its own published address: Mr. Handyman of Westchester County — 10603 (its White Plains address); Fix This Now! — 10530 (120 East Hartsdale Ave, Hartsdale, on its site); Ace Handyman Services Westchester County and Greenwich — 10549 (100 South Bedford Road Suite 340, Mt. Kisco, on its location page); HomeSquare Pro — 10570 (78 Washington Ave, Pleasantville, on its site). Handyman of Westchester LLC states no ZIP on its own site, so it carries 10601 only. No other service-area ZIPs were stated, so none were added.

## Excluded
- Kris Home Improvement MA — own website says it serves Massachusetts communities only (Quincy, MA base, (617) 721-1980); the White Plains listing address appears erroneous and its own materials do not confirm White Plains/Westchester service.
- W P Handyman (202 Mamaroneck Ave, White Plains; (914) 930-2894) and Capibara llc (11 Roosevelt St, White Plains; (914) 800-4540) — found only in listing/meta records with no own website or own materials, so on-site home service could not be confirmed from the business's own materials.
- Small Stuff Repair Inc. (Briarcliff Manor; (914) 762-9351) — own site is a furniture restoration/refinishing workshop, not general handyman work at customers' homes.
- Clean n' Handy (Scarsdale; (914) 613-7032) — own site is commercial cleaning and commercial handyman only; residential home service not confirmed.
- Honey Do Men Home Remodeling & Repair — Carmel Hamlet (Putnam County) remodeler, not a White Plains handyman; conflicting phones across sources (914-336-9271 / 914-214-1360 / 914-837-0411).
- Xanadu Home Concierge (Armonk) — home concierge/caretaking, handyman only a secondary listing category; not included.
- Taskrabbit / Angi / Thumbtack-only operators — excluded per gates (matching platforms, no local operator).

## Count
Count: 5 qualifying businesses prepared (2 High, 3 Medium), 1 published email lead. No expansion beyond 10601 was needed to reach 3+; adjacent-ZIP operators above are included only where their own materials confirm Westchester/White Plains-area home service, with their stated address ZIPs noted.
