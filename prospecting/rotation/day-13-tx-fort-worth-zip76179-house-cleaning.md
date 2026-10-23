# Rotation Day 13 — Texas: Fort Worth × House cleaning × ZIP 76179

- Researched: 2026-10-23 (nightly rotation, Day 13)
- Cell: TX | Fort Worth | 76179 | House cleaning — category label verified verbatim in ~/workspace/van-squad/js/data.js ("House cleaning", Cleaning group).
- Cell note: ZIP 76179 is the Saginaw / north Fort Worth postal area (addresses there read "Fort Worth, TX 76179" / "Saginaw, TX 76179"); city is recorded as "Fort Worth" for every business per the cell brief. House cleaning is done inside the customer's home by definition, so in-home service is the business model itself. Two businesses below (The Mop & Broom, Organically Maid) name ZIP 76179 explicitly on their own sites; the other three state Fort Worth (and, for Maid Clean, Saginaw by name) service on their own sites.
- Adjacent-ZIP note: no expansion was needed — 5 qualifying businesses were found serving Fort Worth including the 76179 area.
- Sources: each business's own website first, then public listings (Google Business / BBB). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| The Mop & Broom | (817) 585-8622 | House cleaning | Fort Worth | https://www.themopandbroom.com/ | Support@themopandbroom.com — https://themopandbroom.com/locations/saginaw (business's own website, Saginaw page contact block: "Support@themopandbroom.com Call Us: (817) 585-8622") | High — own Saginaw page lists ZIP codes 76106, 76131 and 76179 and details regular/deep/move-in-out house cleaning in Saginaw homes; phone and email are printed on the site (its Google listing shows a different number, (817) 646-0408 — the own-site number was used) | Business's own website + Google Business listing |
| Organically Maid | (817) 781-8407 | House cleaning | Fort Worth | https://www.organicallymaidcleaning.com/service-area/fort-worth-cleaning-company | hello@organicallymaidcleaning.com — https://www.organicallymaidcleaning.com/service-area/fort-worth-cleaning-company (business's own website, contact block on its Fort Worth page) | Medium — own Fort Worth page details non-toxic in-home house cleaning and states "We serve homes across Fort Worth, including zip codes … 76137, 76140, 76177, and 76179", and its FAQ names Saginaw in its service area; marked Medium because the site prints several phone numbers — (817) 781-8407 was used because it is the number in the page's Business block and is corroborated exactly by its Google listing (5751 Kroger Dr #201, Fort Worth) | Business's own website + Google Business listing |
| Maid Clean | (817) 402-4400 | House cleaning | Fort Worth | https://maidcleantx.com/ | info@maidcleantx.com — https://maidcleantx.com/ (business's own website, "Hours & Info" block: "(817)402-4400, info@maidcleantx.com") | Medium — own site: Keller-based home cleaning company whose own Service Area list names Fort Worth and Saginaw ("Serving Bedford, Colleyville, Euless, Fort Worth, Grapevine, Haslet, Hurst, Justin, Keller, North Richland Hills, Northlake, Roanoke, Saginaw, Southlake, Watauga, & Westlake"), with weekly/bi-weekly/monthly in-home cleanings; marked Medium because service is stated by city name only, with no ZIP list | Business's own website |
| Jenn's Cleaning Service | (817) 721-3588 | House cleaning | Fort Worth | https://jennscleaning.services/ | Jennscleaningservice777@gmail.com — https://jennscleaning.services/contact-us (business's own website, contact page: "8177213588 / Jennscleaningservice777@gmail.com") | Medium — own site is titled "House Cleaning, Maid Service, Home Cleaning" and details residential deep cleaning and ongoing rotation cleaning in customers' homes, bonded & insured, Fort Worth address printed on the site; phone and email are printed on the site; marked Medium because its own site gives a west Fort Worth address (8205 Camp Bowie West Blvd, 76116) with no ZIP service list — its Google listing places it at 530 Aviator Dr, Fort Worth, in the north Fort Worth / 76179 area | Business's own website + Google Business listing |
| Maid Masters TX | (817) 609-7374 | House cleaning | Fort Worth | https://maidmasterstx.com/fort-worth-house-cleaning/ | maidmasterstx@gmail.com — https://maidmasterstx.com/fort-worth-house-cleaning/ (business's own website, "Get In Touch" block: "maidmasterstx@gmail.com, +1 (817) 609 7374") | Medium — own site has a dedicated Fort Worth house cleaning page (recurring, deep and move-in/move-out cleaning in Fort Worth homes, local team) and prints the phone and email on the site; marked Medium because service is stated for Fort Worth at city level only, with no Saginaw- or 76179-specific statement | Business's own website |

## Dedupe

- Live database checked first (Supabase businesses table via vs_rest.py, 1,000 rows returned this run): every name and phone in this batch (The Mop & Broom / 585-8622, Organically Maid / 781-8407, Maid Clean / 402-4400, Jenn's Cleaning Service / 721-3588, Maid Masters TX / 609-7374) was checked against all returned names/phones — no matches. The only 817/682 rows in the returned DB data are two unrelated Arlington-area pet-grooming businesses. Near names are different businesses with different phones: "Two Maids & A Mop of Tempe" ((480) 405-6596), "America Maid Clean" (Sacramento, (916) 207-0773), "Jenny Maids" (Wichita, (316) 210-1900). The returned list appears capped at 1,000 rows, so DB dedupe remains the coordinator's central check at insert time.
- All prior prospecting files in ~/workspace/van-squad/prospecting/ were grepped for every name, phone and domain in this batch before finalizing: "Mop & Broom", "585-8622", "Organically Maid", "781-8407", "402-4400", "Jenn's Cleaning", "721-3588", "Maid Masters", "609-7374", "themopandbroom", "organicallymaid", "maidcleantx", "jennscleaning", "maidmasterstx" — no matches ("Maid Clean" matched only the unrelated Sacramento "America Maid Clean" in seeded batch 1).
- Cross-cell duplicate avoided: Vella ((214) 334-7082) also markets Fort Worth service, but it was already used in tonight's Day-13 Dallas 75214 House cleaning cell — NOT reused here (same name/phone = skip).
- Day-13 wave-1 Fort Worth 76137 Handyman names (Blaster Handyman Services, Home Hero Handyman, HandymanPro Jim LLC, Perry's Handyman Services, HandyHawk) share no names or phones with this batch.
- Cross-check within tonight's batch: all five names and phones are distinct.

## Excluded (checked, did not pass the gates)

- Home Cleaning Centers of America – Fort Worth ((817) 395-1050, info@hccafortworth.com on its site) — EXCLUDED: national franchise network, even though its own Saginaw page explicitly lists 76106, 76131 and 76179.
- SERVPRO of North Fort Worth ((817) 232-3333, addressed in 76179 itself) — EXCLUDED: national franchise, and its offer is damage restoration / specialty cleaning, not standard residential house cleaning.
- Maid Brigade of Greater Fort Worth ((817) 263-6243), Molly Maid, Merry Maids, MaidPro and Maid Right locations — EXCLUDED: national franchises.
- SparkleSquad Texas Fossil Creek ((817) 518-4941) — EXCLUDED: Sparkle Squad franchise location.
- Superb Maids Fort Worth ((817) 676-0809 per its Google listing, Saginaw address) — EXCLUDED: multi-city chain (its own Fort Worth site links to sister Superb Maids sites for Los Angeles and Jacksonville, and the brand is Las Vegas-based), and no Fort Worth phone could be verified on its own site — the fetched homepage printed an unrelated (747) number.
- Sweet-Z-Clean, Saginaw ((682) 352-7371 per its Google listing) — NOT INCLUDED: its own website could not be fetched in this run, so residential house cleaning could not be confirmed from its own materials.
- Texan Sparkle Cleaners Summerfields, Saginaw ((817) 859-6614 per its Google listing) — NOT INCLUDED: its own website could not be resolved/fetched in this run, so house cleaning could not be confirmed from its own materials.
- House Cleaning / Maid Services Pros of Fort Worth ((469) 694-5216) — EXCLUDED: lead-gen-style listing, no local operator confirmed from own materials.
- Homeaglow and other national lead-gen/matching listings — EXCLUDED: no local operator.
- Window Wizards, Fort Worth Carpet and Tile Cleaning, duct-cleaning and window-only services — EXCLUDED: not house cleaning.

## ZIP note

- Target ZIP 76179 is first in every business's service_zips.
- The Mop & Broom: its own Saginaw page lists ZIP codes 76106, 76131 and 76179, so service_zips is ["76179", "76106", "76131"].
- Organically Maid: its own Fort Worth page states service to "zip codes 76102 to 76112, 76114 to 76116, 76119, 76120, 76123, 76126, 76129, 76131 to 76135, 76137, 76140, 76177, and 76179" — the ranges were expanded exactly as stated, with 76179 first.
- Maid Clean, Jenn's Cleaning Service and Maid Masters TX state their service areas by city name only (Fort Worth / Saginaw), never by ZIP, so their service_zips is ["76179"] only — no ZIPs were invented.

## Count

- 5 businesses, 5 listings, 5 published-email leads (see -leads.json).
