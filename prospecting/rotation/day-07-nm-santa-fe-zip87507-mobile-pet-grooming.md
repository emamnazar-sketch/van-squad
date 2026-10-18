# Rotation Day 7 — New Mexico: Santa Fe × Mobile pet grooming × ZIP 87507

- Researched: 2026-10-18
- Cell: New Mexico × Santa Fe × ZIP 87507 × "Mobile pet grooming"
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Sources: each business's own website first, then public listings (Google place data, Yelp, BringFido, Birdeye-style directories). Public information only. Phone numbers taken from public sources; never invented.
- Yield: 1 qualifying business. Santa Fe's pet-grooming market is overwhelmingly storefront salons; only two mobile operators serve the city, and one of them (Furry Land Albuquerque-Santa Fe) is already in the directory.
- ZIP / service-area note: ZIP EXPANSION USED — 87507 yielded only 1 qualifying business (below the 3-business floor), so the sweep was expanded to ONE adjacent Santa Fe ZIP, 87508 (Eldorado at Santa Fe / south Santa Fe). The expansion produced no additional qualifiers: the only groomer physically in 87508 is Eldorado Animal Clinic, a veterinary clinic (excluded below), and the only mobile operator covering 87508 is Furry Land, already listed. Four Paws' boutique is physically IN the target ZIP (1189 Parkway Dr Unit G2, Santa Fe, NM 87507, per its own website) and its own site states its mobile service covers "Santa Fe and the surrounding areas" by city name only — it publishes no ZIP-code service list — so its service_zips = ["87507"] only. No ZIP was invented. (For the record: Four Paws' own site footer also prints a mailing address of 57A Southfork, Santa Fe, NM 87508 for its mobile operation; that is noted here but not added to service_zips, because the business does not publish it as a service-area ZIP.)

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Four Paws Pup Boutique & Mobile Grooming | (505) 660-3444 | Mobile pet grooming | Santa Fe | http://fourpawssantafe.com/ | None published on its own site (homepage shows phone + address only; contact is by phone / intake form) | High — its OWN website confirms the mobile service in its own words: "Our mobile grooming service comes to you and we proudly offer service to Santa Fe and the surrounding areas" and "Four Paws Mobile Pet Grooming offers a full range of professional pet grooming services that come right to your door"; boutique located in the target ZIP 87507 per the same site; phone (505) 660-3444 is printed in the site's own footer and matches its Google listing; locally owned, family-run | Business's own website (homepage + pricing page) + Google place listing |

## Dedupe
- Live directory check (public REST, businesses name + phone, 489 rows read 2026-10-18): NO match for "Four Paws Pup Boutique & Mobile Grooming" or (505) 660-3444. The only other "Four Paws" rows anywhere are unrelated out-of-state businesses.
- Grep of the name and phone against all files in ~/workspace/van-squad/prospecting/: no prior batch carries this business (the only Santa Fe mentions in prior files are Furry Land service-area notes in the Albuquerque 87120 cell).
- Furry Land Albuquerque-Santa Fe, (505) 807-7009, IS already in the live directory (inserted Day 7, Albuquerque 87120 cell) — its own location page confirms Santa Fe is served by the same single Albuquerque-based unit with the same phone, so it is NOT re-listed here (see Excluded).
- The coordinator re-checks dedupe centrally at insert time.

## Excluded (checked, did not pass the gates)
- Furry Land Albuquerque-Santa Fe, (505) 807-7009 — EXCLUDED (duplicate): genuinely mobile and serves Santa Fe (its own Santa Fe service page: "Furry Land delivers mobile pet grooming right to your doorstep in Santa Fe, NM"), but it is the SAME single franchise unit already in the directory — its own location page is one combined "Albuquerque-Santa Fe" page, HQ 4801 Lang Ave NE, Albuquerque, one local phone. Same operator + same phone counts once.
- Turquoise Tails, (505) 930-5909, 1624 Cerrillos Rd, Santa Fe (87507) — EXCLUDED: storefront salon; its own website describes pets coming in ("each time they come in... social interaction inside and out with our doggy patio") and its listing says "Stop by and see!" — no mobile/come-to-you service.
- Here Kitty Kitty Cat Grooming, (505) 660-6666, 2906 San Isidro Ct, Santa Fe (87507) — EXCLUDED: cat grooming performed in the groomer's own fixed space at that address; her own website invites owners to stay during the session or "run an errand and return to pick up" the cat — not a mobile service.
- Singing Scissors Pet Grooming, (505) 982-3429, 1908 Chamisa St, Santa Fe (87505) — EXCLUDED: storefront salon; its own grooming page says "Bring your dog or cat... to Singing Scissors Pet Grooming" at that address — no mobile service.
- Barks & Bubbles, (505) 820-2275, 1311 Calle Nava, Santa Fe — EXCLUDED: fixed full-service grooming/daycare/boarding facility ("a one-stop shop... in the heart of Santa Fe"); no mobile service.
- Corazon Canines Pet Spa, (505) 395-6434, 3600 Cerrillos Rd Ste 714G, Santa Fe (87507) — EXCLUDED: storefront spa suite; one-on-one grooming by appointment at its own location (MoeGo booking page); no come-to-you service stated.
- ENV Pet Spa & Grooming, (505) 428-0444, 1730 Camino Carlos Rey, Santa Fe (87507) — EXCLUDED: storefront salon ("Locally owned and operated Pet Spa located just minutes from the downtown area"); no mobile service.
- Z Pet Hotel & Spa, (505) 438-7777, 1196 Harrison Rd, Santa Fe (87507) — EXCLUDED: boarding hotel/kennel with on-site grooming at its facility; not a mobile grooming service.
- Lucky Dawg Dos Daycare, (505) 983-6670, 1124A Calle La Resolana, Santa Fe (87507) — EXCLUDED: dog day-care center at a fixed facility; not a mobile grooming service.
- Companions Grooming, (505) 982-7882, 239 Johnson St, Santa Fe (87501) — EXCLUDED: storefront salon; no mobile service in its materials.
- Happy Dog Grooming, (505) 983-6226, 839 Camino Sierra Vista #2, Santa Fe — EXCLUDED: storefront salon (its own description: "a full service holistic dog grooming salon"); no mobile service.
- Roots Dog Grooming, (505) 570-4940, 1312 Agua Fria St, Santa Fe — EXCLUDED: storefront salon; no mobile service.
- Talia's Pet Grooming, (505) 982-5800, 823 Columbia St, Santa Fe — EXCLUDED: storefront salon; no mobile service.
- The Dog Different, (505) 570-7431, 825 Early St, Santa Fe — EXCLUDED: storefront salon at a fixed address; no public source (listings/reviews) indicates any mobile service. (Its own website could not be fetched in this pass; exclusion rests on its fixed salon address + hours and the absence of any mobile claim anywhere public.)
- Royal Pets, (505) 203-0719, 1300 Luisa St #1, Santa Fe — EXCLUDED: storefront groomer at a fixed address; no mobile service confirmed.
- Dez'S Divine Canines, (575) 741-0507, 1210 Luisa St, Santa Fe — EXCLUDED: Facebook-page-only listing describing a "quiet setting" at a fixed address; no own website and no mobile/come-to-you service confirmed from its own materials.
- Pampered Paws Grooming Salon, (505) 461-4574, 430 Alta Vista St #5, Santa Fe — EXCLUDED: storefront salon (name and fixed address); no mobile service.
- Wags of Santa Fe, (505) 983-8671, 1005 S Saint Francis Dr, Santa Fe — EXCLUDED: fixed dog day-care/grooming facility; no mobile service.
- The Pampered Pet, (505) 204-1193, Santa Fe — EXCLUDED: pet sitting / dog walking, not a grooming business.
- Feather And Fur Pet Care, (505) 340-3738, Santa Fe — EXCLUDED: pet sitting / veterinary services, not a grooming business.
- Rollin' Paws Mobile Vet Service, (505) 954-1671, 1532 Cerrillos Rd Ste A, Santa Fe — EXCLUDED: genuinely mobile, but it is a mobile VETERINARY practice, not a pet grooming business.
- Eldorado Animal Clinic, (505) 391-5771, 20 N Chamisa Dr, Santa Fe (87508, expansion ZIP) — EXCLUDED: veterinary clinic/animal hospital, not a pet grooming business.
- GroomIt (groomit.me) — EXCLUDED: national booking platform / lead-gen with no verifiable local Santa Fe, NM operator or local phone (its "Santa Fe" page text refers to Santa Fe, Texas); no local business to list.
- Aussie Pet Mobile, Zoomin Groomin, Woofie's — EXCLUDED for this cell: no Santa Fe, NM location with a local operator phone could be verified (franchise material found was for other states only).
- Petco / PetSmart grooming, Santa Fe — EXCLUDED: national chain storefront salons; no mobile service.

## Email leads
- 0 published business emails found. Four Paws Pup Boutique & Mobile Grooming publishes no email address on its own website (phone and intake form only), and no email for it appears on its Google listing — nothing was guessed. The -leads.json for this cell is an empty array.
