# Rotation Day 46 — Connecticut: Meriden × Handyman × ZIP 06450

- Researched: 2026-11-27 (nightly rotation, Day 46)
- Cell: CT | Meriden | 06450 | Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business via Meta places data, the business's own Google Business site, Yelp). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).

## Expansion note
The 06450 cell itself yielded 3 qualifying Meriden businesses (Contento Development, LCB Home Improvements LLC, Charlotte Y Home Improvement). One further qualifying business, P.Q USA Construction, is based at 117 Foster St in the adjacent Meriden ZIP 06451, so the cell was expanded to that adjacent ZIP in the same city (Meriden) and that is noted here. No business publishes its own list of service-area ZIPs, so every included business's service_zips carry only the target ZIP 06450.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Contento Development | (203) 491-6967 | Handyman | Meriden | https://contentodevelopment.com/ | — none found | High — own website says it is a home improvement company "Family-owned and operated in Meriden CT" providing "customers home improvement services for roof, siding, window replacement, garage, gutter, painting and many more", with testimonials from Meriden CT customers describing work done at their homes (including a garage door opener replacement — classic handyman work), and prints the phone 203-491-6967 on the site; Google listing confirms 137 S Colony St, Meriden, the same phone and website, with Home Improvement as primary category — all of this work is performed at customers' homes, so it is not storefront-only | Business's own website + Google Business listing |
| P.Q USA Construction | (203) 694-2914 | Handyman | Meriden | https://pqusaconstruction.com/ | Pqusaconstruction@gmail.com — own website https://pqusaconstruction.com/ | Medium — own website headlines "WE TRANSFORM YOUR HOME WITH OUR RELIABLE & HIGH QUALITY SERVICES" and lists roofing, siding, gutters, chimney repair, decks, windows & doors, skylights and storm damage repair performed on customers' homes, and prints both the phone (203) 694-2914 and the email Pqusaconstruction@gmail.com in its footer; Google listing confirms 117 Foster St, Meriden (adjacent ZIP 06451), the same phone and website. Confidence is Medium, not High, because the own site presents the business as a home-improvement/construction company rather than using the word "handyman" — the fit is its repair and home-improvement work at customers' homes | Business's own website + Google Business listing |
| LCB Home Improvements LLC | (203) 443-9493 | Handyman | Meriden |  | — none found | Medium — the business's own Google Business site gives its location as 250 Liberty St, Meriden, CT 06450 (the target ZIP itself), its phone as (203) 443-9493, and its services as basement remodeling and bathroom remodeling; reviews posted on its own listing describe the owner renovating rooms, windows and flooring inside customers' homes (one reviewer left him a house key to renovate a room while away) — remodeling/repair work performed at customers' homes, so it is not storefront-only; no standalone website or published email found | Business's own Google Business site |
| Charlotte Y Home Improvement | (203) 666-1042 | Handyman | Meriden |  | — none found | Medium — Google Business listing: primary category Home Improvement, secondary category In-Home Service, address 35 Willow St, Meriden, local 203 phone (203) 666-1042, and the business's own listing description "We work in conneticut and Florida as well call us for any type of remodeling" — remodeling work is performed in customers' homes, so it is not storefront-only; its only web presence on the listing is its Facebook page, so website is blank and no email is published | Google Business listing |

## Dedupe
- Grepped ~/workspace/van-squad/prospecting/ (including all Day-46 files written so far tonight) for every name and phone in this batch (Contento, P.Q USA / pqusaconstruction, LCB Home, Charlotte Y, 491-6967, 694-2914, 443-9493, 666-1042, Pqusaconstruction@gmail.com) and for "Meriden" / "06450" on 2026-11-27: no matches for any included business (the only "Meriden" hit was a service-town mention in a Hartford mobile-pet-grooming batch, unrelated). No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Civale and Son Home Improvements (59 James St, Meriden; (203) 627-0584) — EXCLUDED: Google listing only with primary category Handyman, no own website, no published description and no In-Home Service category or second source confirming what work it performs at customers' homes — the same pattern excluded in earlier Day-46 cells.
- NailIt Handyman (250 Pomeroy Ave Ste 104, Meriden; (855) 562-4548) — EXCLUDED: the only phone is an 855 toll-free number, and its listed website nailithandyman.com now redirects to Angi's national lead-gen platform rather than any site of its own — no own materials confirm a local Meriden operator working at customers' homes.
- The Hardwood Guys (Meriden listing; (203) 290-1510) — EXCLUDED: its own website says it serves Stamford, Fairfield County and Westchester and does hardwood flooring only; the vague "Meriden, CT" Google listing is contradicted by its own materials, and flooring installation/refinishing is not this cell's handyman fit.
- CTHandiMan, Inc. ((860) 385-6655) — EXCLUDED on city: based in Southington/Milldale, CT, not Meriden — this cell requires city=Meriden.
- Mr. Handyman and other national franchises / marketplace-only listings (Angi, Thumbtack, HomeAdvisor matches with no local operator) — excluded per the gates, not individually listed.

## Email leads
- 1 published email collected, from the business's own website footer: P.Q USA Construction — Pqusaconstruction@gmail.com (source https://pqusaconstruction.com/). See matching -leads.json. No other included business publishes an email on its own site or Google listing.

## Counts
- Included: 4 businesses (1 High confidence, 3 Medium), each with 1 listing in the -inserts.json.
- Email leads: 1.
- Excluded: 4 named businesses/groups above (plus generic national/marketplace listings as a class).
- Inserted: 0 — PREPARED only; the coordinator inserts centrally.
