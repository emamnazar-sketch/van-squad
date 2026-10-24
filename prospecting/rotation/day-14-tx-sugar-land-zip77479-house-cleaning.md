# Rotation Day 14 — Texas: Sugar Land × House cleaning × ZIP 77479

- Researched: 2026-10-24 (nightly rotation, Day 14)
- Cell: TX | Sugar Land | 77479 | House cleaning — category label verified verbatim in ~/workspace/van-squad/js/data.js ("House cleaning", Cleaning group).
- Cell note: 77479 is Sugar Land (University Blvd / Hwy 6 corridor, incl. Telfair / Avalon side). House cleaning is done inside the customer's home by definition, so on-site service is the business model itself. Sugar Land House Cleaning is itself addressed inside 77479; Efficient Klean and Ecoclean are addressed in immediately adjacent 77478 in the same city (Sugar Land) and explicitly serve Sugar Land; Detail Cleaning Services (Houston HQ), Home Shines (Stafford, bordering Sugar Land), Sam's Cleaning and Hauling (Sugar Land address on W Airport Blvd), and Mahoney's (Sugar Land listing) each confirm Sugar Land house cleaning from their own materials or Google listing as noted per row.
- Houston Wave-1 dedupe: the eight Houston-wide cleaners already taken on Day 14 (Tidy Home Cleaning Services, Sharp Cleaning, Holy Maid, Texas Nova Cleaning, Houston Signature Maids, Houston Cleaning Services, Great Expectations Cleaning, Lolli Maids) were checked first and are NOT repeated here, even though several also serve Sugar Land.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Sugar Land House Cleaning | (346) 375-5467 | House cleaning | Sugar Land | https://sugarlandhousecleaning.com/ | hello@sugarlandhousecleaning.com — https://sugarlandhousecleaning.com/ (business's own website contact block: "Address: 18722 University Blvd, Suite 206, Sugar Land, TX 77479 — Phone: (346) 375-5467 — Email: hello@sugarlandhousecleaning.com") | High — own site: "Locally owned, family-run," insured flat-rate weekly/biweekly/monthly house cleaning for Sugar Land homes, addressed inside 77479 itself; phone and email printed on the site | Business's own website + Google Business listing |
| Efficient Klean | (832) 430-2138 | House cleaning | Sugar Land | https://efficientklean.com/ | info@efficientklean.com — https://efficientklean.com/ (business's own website footer: "77 Sugar Creek Center Blvd Ste 699, Sugar Land, Texas 77478 — Phone Number, (832) 430-2138, Email, info@efficientklean.com") | High — own site: "Professional House Cleaning Service in Sugar Land, TX," standard/deep/recurring house cleaning, FAQ confirms Sugar Land in its service area; phone and email printed on the site | Business's own website + Google Business listing |
| Detail Cleaning Services | (832) 483-5721 | House cleaning | Sugar Land | https://detailcleanings.com/ | none | High — own site: veteran-owned house cleaning since 2009, "Serving Houston and nearby communities including … Sugar Land," Houston HQ phone (832) 483-5721 printed on the site and matching its Google listing; not one of the eight Wave-1 Houston cleaners | Business's own website + Google Business listing |
| Ecoclean Commercial & House Cleaning | (832) 361-6556 | House cleaning | Sugar Land | https://ecocleancommercialcleaning.com/ | none — the site's email is Cloudflare-obfuscated and could not be extracted, so none was recorded | Medium — own site lists "Professional house cleaning services" and residential cleaning and a Sugar Land address (333 Southwestern Blvd #207, Sugar Land, TX 77478, adjacent ZIP, same city); phone (832) 361-6556 matches its Google listing and the site's "Call Us" header, though the site footer also prints a second number, (832) 361-8798 — the 6556 number is the consistently published one | Business's own website + Google Business listing |
| Mahoney's House Cleaning Services | (281) 777-1526 | House cleaning | Sugar Land | http://mahoneyshousecleaningservices.com/ | none | Medium — Google listing places it in Sugar Land with phone (281) 777-1526 and its own website, and public reviews confirm standard house cleaning in Sugar Land homes over several years; the business's own website could not be fetched at check time, so the phone rests on the Google listing | Google Business listing + public reviews |
| Sam's Cleaning and Hauling | (832) 532-3222 | House cleaning | Sugar Land | http://sugarland.cleaningandhauling.com/ | none | Medium — Google listing addresses the Sugar Land location at 12808 W Airport Blvd, Sugar Land with phone (832) 532-3222, its own Sugar Land site/blog states "We are a Sugar Land company" and describes maid service / move-in-out cleaning; the operator runs separate location pages with different phones per city — only the Sugar Land number is recorded here | Business's own website (Sugar Land location pages/blog) + Google Business listing |
| Home Shines | (713) 766-0010 | House cleaning | Sugar Land | https://homeshinescleaning.com/ | none | Medium — own site offers home cleaning / housekeeping and lists Sugar Land among its served Locations (HQ in adjacent Stafford, TX); phone (713) 766-0010 comes from its Google Business listing — the fetched homepage did not print a phone. FLAG: the same phone is shared with the operator's sister brand "The Shines Group" at the same Stafford address — only Home Shines is included; do not also add The Shines Group with this phone | Business's own website + Google Business listing |

## Dedupe

- Live DB checked (vs_rest.py get, status=eq.active, offset 0 and offset 1000, grepped for every name and phone in this batch, plus an exact-phone query for (832) 483-5721 returning []): no matches for "Sugar Land House Cleaning," "Efficient Klean," "Detail Cleaning," "Mahoney," "Sam's Cleaning," "Home Shines," "Ecoclean," or any of the seven phones (375-5467, 430-2138, 483-5721, 361-6556, 777-1526, 532-3222, 766-0010).
- All prior prospecting files in ~/workspace/van-squad/prospecting/ (including every Day-14 file written so far: Houston 77041/77057/77077/77084/77095 and Katy 77494) were grepped for every name and phone in this batch — no matches. (The only near hit was an unrelated excluded "Eco Cleanup" in Nampa, ID, different business and phone.)
- The eight Houston Wave-1 house cleaners (Tidy Home, Sharp Cleaning, Holy Maid, Texas Nova, Houston Signature Maids, Houston Cleaning Services, Great Expectations, Lolli Maids) are already in the live DB from the 77057 cell and were excluded here even where they serve Sugar Land.
- Cross-check within tonight's batch: all seven names and phones are distinct. Home Shines and The Shines Group share phone (713) 766-0010 and an address — only one of them (Home Shines) is included, so no phone collision is created.

## Excluded (checked, did not pass the gates)

- Merry Maids of Sugar Land (19901 Southwest Freeway, Sugar Land, TX 77479; (713) 347-6776), MaidPro, Molly Maid, The Maids, Two Maids (Sugar Land; franchise), ecomaids (800-only, (800) 326-6243) — EXCLUDED: national franchises / 800-only, per the standing rule.
- Homeaglow Sugar Land listings — EXCLUDED: lead-gen / cleaner-matching platform, no local operator.
- Ready Set Maids (Sugar Land, 19901 Southwest Fwy, 77479) — EXCLUDED: conflicting phones on its own materials (832-939-4500 vs "CALL 877-716-8414"), same defect that excluded it from the Day-14 Houston 77057 cell; no single verifiable local phone.
- Maids and Moore Cleaning Houston & Katy — EXCLUDED: three conflicting phones across its own site (1-844-468-3878, (281) 377-9881, (936) 755-5495) — no one verifiable local phone could be pinned.
- Trustworthy Cleaning Services (Sugar Land page; (512) 350-9727 Austin HQ, Sugar Land listing +1 (281) 801-7945) — EXCLUDED (reserve): Austin-based multi-city chain (Phoenix / Central & Southern Texas) with conflicting Sugar Land contact numbers; not a Sugar Land local operator.
- Home Cleaning Centers of America (Sugar Land; (713) 234-7885) — EXCLUDED: national franchise system.
- Office Pride of Sugarland-Bellaire — EXCLUDED: commercial-only national franchise; no residential house cleaning.
- Maid For You (Missouri City; (281) 881-8017, info@maidforyoupro.com) — EXCLUDED: based in Missouri City (77459) and its own website names only Missouri City — Sugar Land service could not be confirmed from the business's own materials, despite the adjacent location.
- Patriot Maids (Sugar Land page; (346) 766-0696) — EXCLUDED (reserve): booking-platform style site ("a trained professional will arrive") with no verifiable Sugar Land local address/operator confirmed at check time.
- Dust Catchers Cleaning Service (Sugar Land; (346) 245-4149) and Easy House Cleaning Sugar Land ((832) 702-8782) — EXCLUDED: Google-listing-only businesses with no verifiable own website confirming house cleaning.
- Clean As A Whistle (Sugar Land; (713) 784-4648) — EXCLUDED: carpet/upholstery/rug cleaning specialist, not general house cleaning.
- Oxford Cleaning Today (Sugar Land location page; (713) 614-8750) — EXCLUDED (reserve): multi-location chain location page; Sugar Land local operator not confirmed from its own materials at check time.
- The Shines Group, Cleaning Service (Stafford; (713) 766-0010) — EXCLUDED as a duplicate operator: same phone and address as Home Shines (included above); janitorial-focused branding.

## ZIP note

- Target ZIP 77479 is in every business's service_zips.
- Sugar Land House Cleaning additionally publishes its own service-ZIP list on its website ("Serving Sugar Land ZIPs 77479, 77478, 77498, 77459, 77489 and 77477"), so its service_zips = ["77479", "77478", "77498", "77459", "77489", "77477"].
- No other business publishes a ZIP-code service list, so no other ZIPs were added. None were invented. Adjacent-ZIP note: Efficient Klean and Ecoclean are addressed in 77478 (same city, Sugar Land, directly adjacent to 77479) — noted here rather than treated as a research expansion; the cell still holds 7 qualifying businesses serving 77479.

## Count

- 7 businesses, 7 listings, 2 published-email leads (see -leads.json).
