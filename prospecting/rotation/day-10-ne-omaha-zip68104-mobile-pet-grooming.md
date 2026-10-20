# Day 10 — Omaha, NE · ZIP 68104 · Mobile pet grooming

Cell researched 2026-10-20 (Day 10 run). Insert-ready: **3 businesses**, **0 leads**.
Category label "Mobile pet grooming" verified in js/data.js. No ZIP expansion was needed — the cell reached the 3-business minimum, but this is a genuinely THIN cell: Omaha has very few true mobile groomers (most groomers are storefront salons), and two Omaha-wide mobile brands had to be excluded on dedupe / no-local-phone grounds (see notes). Only Furry Land Omaha publishes a ZIP-code service list that includes 68104; Blackdog and Clip N Go publish no ZIP list, so service_zips = ["68104"] for them — no ZIPs were invented.
Dedupe: checked programmatically against /tmp/live-businesses.json (723 live businesses) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (730 existing business names/phones) — no name or phone collisions for any of the 3 inserts, and no duplicates within the cell.

## Insert-ready

### High confidence

1. **Blackdog Mobile Pet Grooming** — (402) 898-4000 — Mobile pet grooming — Omaha — https://blackdogomaha.com/
   - Own site homepage: "We come right to you! Convenient and professional Mobile Pet Grooming in Omaha… Our groomers provide a full range of services right outside your door." Own contact page: "Call or Text 402.898.4000 FOR AN APPOINTMENT FOR YOUR PET", "WE'RE OPEN & ROLLIN'…", address 3129 N 93rd St, Omaha, NE 68134. Phone agrees across own site + Google listing, whose own description reads "Professional Grooming at your home or office for Curbside Convenience!" Note: the Google listing carried a "Possibly Temporarily Closed" flag this run, but the business's own live site says it is open and rolling and is actively taking appointments — the own site was trusted over the flag; coordinator may veto if the flag is disqualifying.
   - Published email: none found on the pages checked (the site invites email contact but publishes no address in the text fetched). No lead.
   - Confidence: High — phone and mobile/at-your-door offer both verified on the business's own website, corroborated by its Google listing.
   - Sources: https://blackdogomaha.com/ ; https://blackdogomaha.com/contact-us ; Google Business listing for Blackdog Mobile Pet Grooming, Omaha.

### Medium confidence

2. **Clip N Go Mobile Dog Grooming Company** — (402) 669-6876 — Mobile pet grooming — Omaha — https://clipandgo.carrd.co/
   - Its Google Business profile name is itself "Clip N Go Mobile Dog Grooming Company" (address 2005 N 71st St, Omaha), with phone (402) 669-6876 and website clipandgo.carrd.co. The business's own description, reproduced on localexpertfinder.com's Omaha groomer page: "Clip n' Go is a family-owned company based in Omaha, NE… Our skilled pet groomer will come to your office or home at your convenience… Whether it's your home or office, the skilled crew at Clip n' Go will be happy to come to you." Its current Carrd site fetches thin (an appointment-request form only, no phone or mobile text in the fetched text), so the phone rests on its Google listing and the mobile confirmation on its Google-profile name plus its own reproduced description — hence Medium. Coordinator may veto if own-site confirmation is required.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — mobile offer and phone verified via the business's own Google Business profile; its own website was form-only this run.
   - Sources: Google Business listing for Clip N Go Mobile Dog Grooming Company; https://clipandgo.carrd.co/ ; https://localexpertfinder.com/dog-groomer-omaha/ (reproduces the business's own description).

3. **Furry Land Omaha** — (877) 726-3345 — Mobile pet grooming — Omaha — https://furryland.us/pet-mobile-grooming-omaha-ne/
   - Location name "Furry Land Omaha" is the name its local operation hires under (WayUp: "Furry Land Omaha: Groomer… Furry Land Omaha is seeking skilled and enthusiastic Mobile Pet Groomers"). Its own Omaha pages: "Experience Furry Land Mobile Groomers, your premier destination for top-notch mobile pet grooming services in Omaha, NE… all in the comfort of our fully-equipped mobile grooming van", and its own Dog Grooming – Omaha page explicitly lists its service area by ZIP: "Benson (ZIP Code: 68104)" plus Downtown Omaha (68102), Dundee-Happy Hollow (68132), Aksarben-Elmwood Park (68106), and West Omaha (68135, 68136) — those six ZIPs are recorded in service_zips, none invented. The only phone its own Omaha pages publish is the toll-free 877-726-3345 — a local Omaha grooming team exists, but there is no local-area-code number, hence Medium.
   - Published email: none found on the pages checked. No lead.
   - Confidence: Medium — mobile van service and explicit 68104 coverage verified on the business's own Omaha pages; phone is toll-free rather than a local Omaha number.
   - Sources: https://furryland.us/pet-mobile-grooming-omaha-ne/ ; https://furryland.us/dog-grooming-omaha-ne/ ; WayUp job posting for Furry Land Omaha.

## Leads (0)

- None. None of the three insert-ready businesses publishes an email address on the pages checked. (The one Omaha mobile groomer that does publish an email — Lucky Dog Mobile Groomers, nebraska@luckydogmobilegroomers.com on its Omaha page — was excluded on dedupe, below, so no lead was recorded for it.)

## Dedupe / exclusion notes

- **No duplicates among the inserts**: all 3 names/phones checked against the 723 live businesses and the 730 prior insert records with zero collisions, and all 3 are distinct within the cell. Franchise-location naming follows prior nights' pattern (cf. "Furry Land Mobile Grooming Denver", "Zoomin Groomin Central Denver" already in the directory).
- **Lucky Dog Mobile Groomers** — (402) 235-5555, nebraska@luckydogmobilegroomers.com on its own Omaha page (https://www.luckydogmobilegroomers.com/omaha-ne/: "Lucky Dog Mobile Groomers brings the spa to you"). Mobile offer and Omaha phone are genuine, but the exact business name "Lucky Dog Mobile Groomers" is ALREADY in the live database (Denver operation, (303) 747-5555, inserted Day 6). Same name = skip under this run's dedupe rule. Excluded and noted; its email was therefore not recorded as a lead.
- **Zoomin Groomin Omaha Central** — a real local mobile unit (Monster job posting: "Zoomin Groomin Omaha Central… Apply today to join our expanding Papillion service team"; Google profiles carry its own description "Our friendly mobile pet groomers come to you!"). No verifiable public phone for the Omaha unit could be found this run — the zoomingroomin.com location pages surfaced for other states only, and no Omaha phone appears on its Google profiles as fetched. Excluded on no verifiable public phone. (The plain name "Zoomin Groomin" is also already in the live database for Las Vegas.)
- **Hydrodog Butterball** — (402) 657-9735, Gretna, NE (BBB category: Mobile Pet Grooming; own page https://www.hydrodog.com/butterball). Its own page lists the ZIP codes it services — 68028, 68037, 68042, 68046, 68048, 68058, 68059, 68128, 68133, 68136, 68138, 68157, 68003 — and 68104 is NOT among them. Excluded: does not serve this cell on its own published list.
- **Hydrodog Bluey** — (402) 217-4181 via a third-party directory (dogdog.org); its own hydrodog.com/bluey page returned 404 this run, so no own materials confirming Omaha/68104 service could be verified. Excluded.
- **Waggin' Wheels Mobile Spa / Dashing Dogs Mobile Grooming** — named as Omaha mobile groomers only in a third-party blog round-up (doggoneproblems.com) with no verifiable Omaha phone or own Omaha website found this run (identically named businesses in other states dominate search results). Excluded on no verifiable public phone / own materials.
- **Storefront-only groomers excluded** — That Dog Wash (402) 614-5344, self-wash/retail shop), Buck and Stella's, Color Me Canine, Becky's Fur Babies Dog Grooming Salon, A One Grooming, Fur Goodness Sake Grooming, Nebraska Dog Wash (self-serve stations), Long Dog Fat Cat, Downtown Hound, PetSmart Grooming, and the other fixed-address salons in the search results: no mobile/at-home service confirmed from their own materials.

## Cell-result summary

NE × Omaha × 68104 × Mobile pet grooming: **3 insert-ready NEW businesses (1 High, 2 Medium), 0 email leads.** An honest thin cell — Omaha's grooming market is overwhelmingly storefront salons; only three mobile operators could be verified to the batch-1 standard for 68104, after excluding a same-name duplicate (Lucky Dog), a mobile unit with no findable local phone (Zoomin Groomin Omaha Central), and a Hydrodog unit whose own service-ZIP list omits 68104.
