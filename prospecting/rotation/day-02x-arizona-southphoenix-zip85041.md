# Rotation Day 2x (manual add-on) — Arizona: Phoenix (South Phoenix / Laveen) × Handyman × ZIP 85041

- Researched: 2026-10-15 (same-day follow-up at Amam's request: 3 more Arizona ZIPs in different niches alongside Day 2's 85032 pool batch)
- Cell note: ZIP 85041 covers the northern part of Laveen Village and South Phoenix (roughly south of the Salt River, along Baseline Rd / Southern Ave). Laveen Village straddles two ZIPs — 85041 (north Laveen) and 85339 (south Laveen) — so Laveen-based businesses whose own listings place them in 85339 but who operate as Laveen handymen are included with both ZIPs in service_zips and the base ZIP noted. Handyman work is on-site at the customer's home by definition.
- Sources: each business's own website first, then public listings (Google Business, BBB, Chamber of Commerce, Birdeye, Thumbtack, Superpages, LocalityBiz, Opendi). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED (per instructions for this add-on batch — insertion is the parent agent's step).

| Name | Phone | Category | City | Website | Confidence | Source |
|---|---|---|---|---|---|---|
| Brian's Handyman Service | (602) 309-0238 | Handyman | Phoenix | https://brianshandymanserviceazllc.com/ | High — based IN the cell: Chamber of Commerce and BBB (Laveen profile) both place "Brian's Handyman Service az llc" at 7412 S 30th Ln, Phoenix, AZ 85041 with this phone; the Chamber lists brianshandymanserviceazllc.com as its website (from its own Google profile); general home maintenance & repair services listed | Chamber of Commerce, BBB, Google Business listing |
| Handyman 1001uses LLC | (480) 667-3657 | Handyman | Phoenix | http://www.handyman1001uses.llc/ | High — its own business page states "We are based at 4001 W Southern Ave in Phoenix, Arizona, 85041," lists general handyman services first among its services, and gives this phone ("call or send a text"); 39 Google reviews; website is the domain on its Google listing | Business's own service page (dashpages.io) + Google Business listing + HomeAdvisor |
| Catchall Handyman Services | (480) 869-0677 | Handyman | Phoenix |  | Medium — Laveen Village operator: Birdeye places it in Laveen Village (5525 W Darrel Rd address) with this phone and 45 reviews, BBB's Laveen handyman profile gives the same phone, its Google listing address is 5045 W Baseline Rd Ste 481 (Laveen), and it is an active Laveen handyman pro on Thumbtack (hired 83 times); no own website found | Birdeye, BBB, Google Business listing, Thumbtack |
| Cortez Solution | (480) 274-2429 | Handyman | Phoenix | http://cortez-solution.business.site/ | Medium — Google Business listing classifies it as Handyman at 1520 W Moody Trail, Phoenix, AZ 85041 with this phone, and the LocalityBiz directory repeats the same 85041 address and phone; website is its Google business site; no other independent source found | Google Business listing, LocalityBiz |
| J J Mancillas Handyman | (602) 204-7900 | Handyman | Phoenix |  | Medium — Laveen-based: Superpages' Laveen handyman directory lists it at 5321 W Novak Way, Laveen, AZ 85339, and Opendi + a contractor directory repeat the same address with this phone; NOTE Superpages shows the number with a 623 area code while two other sources agree on 602 — re-verify when the business claims its profile; no own website found | Superpages, Opendi, constructioncompanies.com |
| Handyman Get it Done | (480) 826-4508 | Handyman | Phoenix |  | Medium — Google Business listing places it at 3912 W Hidalgo Ave, Phoenix (85041, Laveen side) with this phone and handyman services at customers' homes; single-source listing and Google classifies it as a construction company, so it should be re-verified when the business claims its profile; no own website found | Google Business listing |

## Dedupe
- Live database (Supabase REST, checked 2026-10-15 before writing): 43 active businesses (35 Sacramento-area + 8 Phoenix pool from Day 2). No name or phone overlap with this batch. In particular, neither "Mr. Handyman serving Arden Arcade" (916) 571-0814 nor "AFG Handyman Service" (916) 944-9618 — both Sacramento handymen already in the directory — collides with anything here.
- All prior prospecting files (seeded-batch-1, Day 1 rotation, Day 2 rotation, Sacramento prospect and outreach lists): grep for every name and phone in this batch returned no matches.

## Excluded (checked, did not pass the gates)
- Laveen Deck & Porch (8610 S 48th Ln, Laveen 85339; (480) 933-1522) — EXCLUDED: although Porch carries a secondary "handyman" profile for it, its own website (laveendeck.com) presents it purely as a deck construction specialist; not a general handyman.
- Beasley's Handyman Services (3318 W Buckeye Rd, Phoenix 85009; (602) 618-3852) — EXCLUDED for this cell: real Phoenix handyman with its own website, but Laveen / 85041 coverage could not be confirmed from its own materials.
- Perez Electric and Handyman Services (804 E Old Southern Ave, Phoenix 85040; (602) 471-4471) — EXCLUDED: based in adjacent 85040 with an electrician lean; 85041 service not confirmed, and no expansion was needed (6 qualifiers found in/around 85041).
- Golden Boys handyman LLC (8819 S 7th Ave, Phoenix; (480) 843-4424) — EXCLUDED: Google classifies it primarily as an electrician (specialist), despite the name.
- Tito's General Improvement (216 W Cody Dr, Phoenix; (323) 479-2186) — EXCLUDED: single listing with an out-of-state (Los Angeles) phone; local operation could not be corroborated.
- JEV's Handyman Services (3724 S 74th Dr, Tolleson; (602) 696-9277), Revive Handyman Services (4003 N 87th Dr, Phoenix; (480) 226-5113), We Do It Right Handyman Services (Tolleson; (480) 587-1384), AZ Honest Handyman (Tolleson/Avondale; (602) 774-4036) — EXCLUDED for this cell: west-valley bases; 85041 coverage not confirmed from their own materials.
- Jordan Isiah Services (bookwithjordan.com) — EXCLUDED: TV mounting/installation specialist with a county-level listing, not a general handyman.
- Kaminskiy Care and Repair (downtown Phoenix office) — EXCLUDED: multi-city handyman operation; 85041 coverage not confirmed from its materials.
- Jason the Plumber LLC (Laveen) and Home Services at The Home Depot (Laveen store) — EXCLUDED: plumbing specialist / national chain storefront, not independent mobile handymen.

## ZIP note
- ZIPs used in this batch's service_zips: 85041 (the cell ZIP) and 85339 (south Laveen — the listed base ZIP for Catchall Handyman Services' Laveen Village listings and J J Mancillas Handyman). Both are new to the directory's Phoenix coverage; the parent agent handles any ZIP_NAMES additions in js/data.js.
- No expansion beyond the Laveen ZIP pair was needed: 6 qualifying businesses found.
