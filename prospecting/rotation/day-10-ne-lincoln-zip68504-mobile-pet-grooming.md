# Day 10 — Lincoln, NE · ZIP 68504 · Mobile pet grooming

Cell researched 2026-10-20 (Day 10 run). Insert-ready: **3 businesses**, **1 lead**.
Category label "Mobile pet grooming" verified in js/data.js (Pet care group).
ZIP expansion note: no groomer is *based* in 68504 itself. The three qualifying businesses are Lincoln-based mobile operators based in adjacent Lincoln ZIPs (68507 / 68510) that serve Lincoln citywide with no published ZIP exclusion list, so 68504 is covered by their citywide service and is recorded as the target ZIP — no other ZIPs were claimed, because none of the three publishes a service-area ZIP list. This is a genuinely THIN cell: Lincoln's grooming market is overwhelmingly storefront salons, and two national mobile brands had to be excluded on dedupe / no-local-phone grounds (see notes).
Dedupe: checked programmatically against /tmp/live-businesses.json (754 live businesses) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (772 existing business names/phones) — no name or phone collisions for any of the 3 inserts, and no duplicates within the cell.

## Insert-ready

### Medium confidence

1. **Critter Clippers Mobile Grooming** — (402) 580-5588 — Mobile pet grooming — Lincoln — https://www.critterclippers.com/
   - Own site homepage (fetched directly): "Our new modern mobile grooming facilities and experienced professional pet stylists will be able to provide your pet with everything a salon can…", "From pet sitting in your house to mobile grooming in your driveway, Critter Clippers/Critter Sitters of Lincoln provides exceptional care…", "Located in Lincoln, Nebraska with new, modern mobile grooming facilities…". Mobile/at-your-driveway service is confirmed from the business's own website.
   - Phone: the own homepage publishes no phone in its fetched text, so the phone rests on its Google Business listing (+1 402-580-5588, address 3103 N 93rd St, Lincoln, NE 68507), corroborated by dogdog.org and petnetid.com, which agree exactly.
   - Published email: none found for this Lincoln business on the pages checked. (An email found for "Critter Clippers Pet Grooming" in South Sioux City, NE — a different business with a different phone and website, critterclipperspetgrooming.com — was NOT collected.) No lead.
   - Confidence: Medium — mobile service confirmed on the business's own website; phone verified on its Google listing rather than its own site.
   - Sources: https://www.critterclippers.com/ (own site, fetched directly); Google Business listing for Critter Clippers Mobile Grooming, Lincoln; https://www.dogdog.org/en/pet-groomer/critter-clippers-mobile-grooming-lincoln

2. **Pampered Paws Mobile Grooming** — (402) 432-0267 — Mobile pet grooming — Lincoln — http://pamperedpawsmobilegrooming.com/
   - Its Google Business profile name is itself "Pampered Paws Mobile Grooming" (address 4015 N 67th St, Lincoln, NE), with phone (402) 432-0267 and website pamperedpawsmobilegrooming.com. The business's own website is live and linked from its Google profile, but its text could not be extracted this run (the fetch returned no extractable content), so the mobile confirmation rests on its Google-profile name — hence Medium. Coordinator may veto if own-site text confirmation is required.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — name, phone, Lincoln address and website all verified via the business's own Google Business profile; own-site text was unextractable this run.
   - Sources: Google Business listing for Pampered Paws Mobile Grooming, Lincoln (phone +1 402-432-0267; website http://pamperedpawsmobilegrooming.com/).

3. **Hydrodog Oswald** — (531) 229-8039 — Mobile pet grooming — Lincoln — http://hydrodog.com/Oswald
   - Unit name follows the Hydrodog pattern used on its own pages (the Lincoln unit's truck is named "Oswald"; cf. "Hydrodog Butterball" in the Omaha research). Mobile service is confirmed in owner Shane Patrick's own published statements in Lincoln's Strictly Business magazine: "we are a mobile service that provides bathing and grooming services for dogs at homes or businesses" and "Shane will drive HydroDog's one-of-a-kind grooming truck to your location… HydroDog Mobile Dog Grooming is a dog grooming service that drives right to customers' homes", with Lincoln service to "the city of Lincoln". Phone (531) 229-8039 is given there as the franchise owner's contact and agrees exactly with its Google Business listing (7641 Englewood Dr, Lincoln, NE 68510; website hydrodog.com/Oswald). Note: the hydrodog.com/Oswald page itself returned 404 this run, so the confirmation rests on the owner's published interviews plus the Google listing — hence Medium.
   - Published email: **Oswald@HydroDog.com** — published by the owner himself as his contact in his Strictly Business profile ("If our readers would like to contact you, how should they do so? – (531) 229-8039; Oswald@HydroDog.com; Hydrodog.com/Oswald"). Recorded as the cell's 1 lead with that source URL.
   - Confidence: Medium — mobile truck-to-your-home service and phone verified in the owner's own published statements, corroborated by its Google listing; its own location page was 404 this run.
   - Sources: https://strictly-business.com/star-city-six/shane-patrick-hydrodog/ ; https://strictly-business.com/news/business/services-from-hydrodog-mobile-dog-grooming-now-available-in-lincoln/ ; Google Business listing for HydroDog, Lincoln.

## Leads (1)

- **Hydrodog Oswald** — Oswald@HydroDog.com — source: https://strictly-business.com/star-city-six/shane-patrick-hydrodog/ (owner-published contact in his own business profile).

## Dedupe / exclusion notes

- **No duplicates among the inserts**: all 3 names/phones checked against the 754 live businesses and the 772 prior insert records with zero collisions, and all 3 are distinct within the cell.
- **Zoomin Groomin (Lincoln-area)** — real mobile units with Google profiles carrying the description "Our friendly mobile pet groomers come to you!", but EXCLUDED on two grounds: (1) the plain name "Zoomin Groomin" is ALREADY in the live database (Las Vegas operation, (702) 213-5755) — same name = skip under this run's dedupe rule, and no distinct Lincoln-qualified location name could be verified; (2) no verifiable Lincoln-specific public phone could be found this run (zoomingroomin.com location pages surfaced for other states only).
- **Lucky Dog Mobile Groomers** — its own Nebraska page is the Omaha page already researched on Day 10; the exact name "Lucky Dog Mobile Groomers" is ALREADY in the live database (Denver operation, (303) 747-5555) — same name = skip. No distinct Lincoln unit or Lincoln phone found.
- **Furry Land** — no Lincoln, NE location found: furryland.us "Lincoln" pages are Lincoln, VT and Lincoln, NH, and its Nebraska coverage near Lincoln (Ceresco, Plattsmouth) runs under the Omaha operation already in the directory as "Furry Land Omaha" ((877) 726-3345). No Lincoln insert.
- **Aussie Pet Mobile / Woofie's** — no Lincoln, NE location found in search (Aussie results were Arlington MA / Austin TX; Woofie's has no Lincoln location page).
- **Hydrodog Bluey** — (402) 217-4181 via a third-party directory (dogdog.org); an Omaha-area unit whose own hydrodog.com/bluey page could not be verified for Lincoln/68504 service this run. Excluded.
- **Zoom Groom** — (402) 499-2134, 7300 York Ln, Lincoln — EXCLUDED: fixed salon ("a full-service pet grooming salon located in Lincoln" per its listing description); not a mobile service, and a different business from Zoomin Groomin.
- **Storefront-only groomers excluded** — Tailored Grooming (402) 261-9349, 3939 N 48th St #106 — physically in 68504 but a fixed salon suite with no mobile service; Vanity Fur (402) 261-4596, own description "a dog grooming salon located in the heart of Lincoln"); Ty-D-Paws Express (402) 560-2269, "bringing in your feline or canine friend" facility grooming); Suds N' Scissors (402) 466-7517); The Groom Room Inc (402) 486-4486, "Bring your pet to our grooming shop"); Four Paws (402) 486-1377); Brandy's Pet Salon (402) 802-1302); Embark Pet Company (402) 325-9855); Urban Tailworks (402) 937-7012); The Kitty Groomer (402) 477-6605, owner-operated in-home salon — pets are brought to the groomer's home, not a mobile service to the customer); Zen Dog Pet Grooming (402) 610-1159, "home-based… grooming shop"); PetSmart Grooming and Petco Grooming (national-chain in-store salons).

## Cell-result summary

NE × Lincoln × 68504 × Mobile pet grooming: **3 insert-ready NEW businesses (0 High, 3 Medium), 1 email lead.** An honest thin cell — no mobile groomer is based in 68504 itself; the three inserts are Lincoln-wide mobile operators based in adjacent ZIPs (68507/68510) with no published ZIP list excluding 68504, after excluding a same-name duplicate with no local phone (Zoomin Groomin), a same-name duplicate (Lucky Dog), and the many fixed Lincoln salons. Two of the three carry a coordinator-veto note in their entries above (Pampered Paws: own-site text unextractable; Hydrodog Oswald: own location page 404, verified via owner-published interviews + Google listing).
