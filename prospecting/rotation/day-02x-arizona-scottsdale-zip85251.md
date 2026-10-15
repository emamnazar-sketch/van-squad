# Rotation Day 2x (expansion) — Arizona: Scottsdale × Mobile auto detailing × ZIP 85251

- Researched: 2026-10-15 (same-day expansion batch requested by Amam — 3 more Arizona ZIPs in 3 different niches; this is the Scottsdale cell)
- Cell note: Scottsdale was picked as the second Arizona city because it is the state's premium detailing market; Mobile auto detailing is one of the site's proven categories (7 Sacramento detailers in batch 1), and ZIP 85251 (Old Town Scottsdale) is a dense, populous residential ZIP with the strongest cluster of mobile detailers in the city. No expansion beyond 85251 was needed — 9 businesses qualified inside the target ZIP's service area.
- Sources: each business's own website first, then public listings (Google Business, Yelp, Birdeye, Chamber of Commerce, BBB). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — batch files only, per instructions for this expansion run. Nothing was inserted into the database, and js/data.js was not touched.

| Name | Phone | Category | City | Website | Confidence | Source |
|---|---|---|---|---|---|---|
| AZ Mobile Detail | (480) 771-9111 | Mobile auto detailing | Scottsdale | https://azmobiledetailing.com/ | High — own site: mobile detailing, "we come to you," phone 480-771-9111 displayed prominently on the site and matching its Google listing; Scottsdale-based | Business's own website + Google Business listing |
| Detail Boys LLC | (866) 899-6241 | Mobile auto detailing | Scottsdale | http://www.detailboysaz.com/ | Medium — own site gives its address as 3234 N Scottsdale Rd, Scottsdale, AZ 85251 and runs mobile-detailing pages for Scottsdale; the phone is a toll-free number not printed on the site's homepage, but it is consistent across its Google Business and Chamber of Commerce listings | Business's own website + Google Business listing + Chamber of Commerce |
| Holy Smokes Auto Spa | (623) 223-3968 | Mobile auto detailing | Scottsdale | http://hsautospa.biz/ | Medium — its Google Business description, in the business's own words, states "we are a mobile detailing company," gives this office phone, and lists a Scottsdale, AZ 85251 address (3550 N Goldwater Blvd); its own website was inaccessible at check time (the business says it is being rebuilt) | Google Business listing (business's own description) |
| K Crown Mobile Car Detailing | (602) 641-3578 | Mobile auto detailing | Scottsdale | https://kcrowncleanings.lovable.app/ | Medium — own site: mobile detailing brought to the customer's home or office throughout Scottsdale with online booking; phone is from its Old Town Scottsdale Google listing — note its site footer and sister neighborhood listings show different numbers ((866) 318-0414, (602) 899-1117), so the phone should be re-verified when the business claims its profile | Business's own website + Google Business listing |
| Luxe Mobile Care | (402) 417-4072 | Mobile auto detailing | Scottsdale | https://luxemobilecare.com | Medium — own site: "100% mobile," detailing "directly to your home or office throughout Scottsdale," owner named on the site, and this call/text phone printed on the site; the (402) area code is Nebraska, likely the owner's cell | Business's own website |
| Savage Mobile Washing | (602) 888-7141 | Mobile auto detailing | Scottsdale | https://savagemobilewashing.com/ | Medium — own site: "family-owned, fully mobile auto detailing service" serving the Scottsdale area, phone on the site, Scottsdale, AZ 85257 base; note the site's Scottsdale page also carries a "Mint Auto Detailing" brand name, so the public identity should be re-verified when the business claims its profile | Business's own website + Yelp |
| AZ Auto Detailing | (480) 634-3072 | Mobile auto detailing | Scottsdale | https://azautodetailing.com | Medium — own site: Scottsdale mobile detailing pages ("as a mobile detailing service, we come to you") and phone on the site; it also runs a Scottsdale storefront (8361 E Evans Rd, 85260), so mobile is one of its two channels | Business's own website |
| Picture Perfect Detailing | (480) 467-5921 | Mobile auto detailing | Scottsdale | https://pictureperfectdetails.com | Medium — the company's own materials describe a "fully mobile vehicle detailing company serving customers throughout Scottsdale," and this phone appears in its own published contact blocks and its Google listing; note BBB's HQ profile lists a second number, (602) 492-8684 | Business's own website + company press releases + BBB |
| Scottsdale Auto Detailing | (480) 448-5243 | Mobile auto detailing | Scottsdale | https://scottsdaleazdetailing.com/ | Medium — own site: "A Mobile Car Detailer in Scottsdale," phone on the site, and customer reviews displayed on the site describe its mobile detailing service; its base address is 8220 E Vista Dr, Scottsdale, AZ 85250 | Business's own website |

## Dedupe
- Live database (Supabase REST, checked 2026-10-15 before writing): 43 active businesses (35 Sacramento-area + 8 Phoenix pool services from Day 2). No name or phone overlap with this batch — grep of every candidate name and phone against the full DB list returned no matches.
- All prior prospecting files (seeded-batch-1 .md/.json/.sql, Day 1 and Day 2 rotation files, Sacramento prospect and outreach lists): grep for every name and phone in this batch returned no matches.
- No businesses were skipped as duplicates.

## Excluded (checked, did not pass the gates)
- 5 Star Mobile Car Detailing of Scottsdale — EXCLUDED: its website domain (5starmobilecardetailingaz.site) is parked / for sale, so mobile service could not be confirmed from its own materials; only a bare Google listing remains.
- Lux Mobile Car Detailing (luxdetailings.com) — EXCLUDED: own website unreachable at check time and its only listing shows a (971) Oregon number; mobile service not confirmable from its own materials.
- Dr. Detail (3007 N 73rd St, Scottsdale) — EXCLUDED: no website found, and searches surface several unrelated "Dr. Detail" businesses (Phoenix, Tucson, Chico CA, Gardena CA); mobile service for the Scottsdale listing could not be confirmed.
- B Tail Mobile Wash and Wax (7272 E Indian School Rd, 85251) — EXCLUDED (borderline): a Google listing with phone (602) 692-3183 and "Mobile" in the name, but no website or description anywhere confirming at-home detailing.
- Dirty Boy Mobile Detailing — EXCLUDED: conflicting public phones (Google listing (561) 254-8797 vs tellows (602) 284-6656), so a clean public phone could not be established; North Scottsdale (85260) base.
- Diamond Mobile Detailing And Ceramic Coating — EXCLUDED: no website found and a (702) Las Vegas number; mobile service not confirmed beyond the name.
- Arizona Mobile Car Detailing (arizonamobilecardetailing.com) — EXCLUDED: no verifiable public phone on its site (booking form only); generic metro-wide lead-gen pattern.
- North Scottsdale Mobile Detailing — EXCLUDED for this cell: real mobile operator, but its own materials brand it to North Scottsdale & Paradise Valley (airport-area 85260 base); 85251 coverage not evidenced.
- 3-D Mobile Detailing (Scottsdale 85255) and Slix Mobile Detailing (Scottsdale 85258) — EXCLUDED for this cell: mobile service confirmed generally, but 85251 coverage not evidenced in their own materials.
- MOB Detail Mobile Detailing (Mesa) — EXCLUDED for this cell: Scottsdale 85251 service not verified.
- Cobblestone Auto Spa, Super Star Car Wash — EXCLUDED: storefront express car washes, no mobile detailing.
- Nano Ceramic Pros, Quality Ceramic Coatings, The Scottsdale Detailing Co., Gower Enterprises Ltd, Premier Vinyl Car Wraps, Detail Boss — EXCLUDED: shop-based detailing / tint / wrap / coating studios; mobile at-home detailing not confirmed from their own materials.
- Valet Spa — EXCLUDED: parking-garage valet operation, listed as temporarily closed.

## ZIP note
- ZIPs used in this batch's service_zips: 85251 (target — Old Town Scottsdale), plus evidenced base ZIPs 85250 (Scottsdale Auto Detailing), 85257 (Savage Mobile Washing), 85260 (AZ Auto Detailing, Picture Perfect Detailing).
- Parent agent: 85251, 85250, 85257, 85260 are the ZIPs to check against ZIP_NAMES in js/data.js when this batch is inserted.
