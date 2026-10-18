# Day 07 — Las Cruces, NM × ZIP 88005 × Mobile auto detailing

Researched 2026-10-18. Cell target: Las Cruces × 88005 × "Mobile auto detailing".
**Result: 10 qualifying businesses, 0 email leads, 13 exclusions. No ZIP expansion needed** — 88005 itself yielded well over the 3-business floor (two qualifiers are based in 88005; the rest are Las Cruces mobile operators whose own materials state they serve the whole city, which includes 88005).

Notes on service_zips: none of the ten publishes its own ZIP-code list (they publish city/area names only — "Las Cruces", "Las Cruces & surrounding areas", "within a certain radius"), so per the nothing-invented rule every record carries only the target ZIP ["88005"].

Dedupe: every name and phone checked against (a) all files in ~/workspace/van-squad/prospecting/ (grep — no hits; Day 07 so far is Albuquerque/Rio Rancho only) and (b) the live directory via the public REST endpoint (489 rows — no name or phone matches; no Las Cruces / (575) businesses existed in the directory).

## Businesses found

| Name | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Detailers of Las Cruces | (575) 694-6066 | Mobile auto detailing | Las Cruces | https://detailersoflascruces.com/ | none | High — own website headlines mobile detailing "completed at your home or workplace in Las Cruces" and prints the phone | Business's own website |
| Four Seasons Mobile Detailing | (575) 993-6179 | Mobile auto detailing | Las Cruces | http://fourseasonmobiledetail.com/ | none (email form only, no address published) | High — own site's FAQ explicitly confirms "mobile detailing services… we can come to your location"; phone printed across its own site. Based at 1011 W Picacho Ave (88007), serves Las Cruces within a radius | Business's own website (homepage + Rates & FAQ page) |
| Weaver's Auto Detailing LLC | (575) 449-1720 | Mobile auto detailing | Las Cruces | https://weaversautodetailingllc.square.site | none | High — business's own posts state "100% fully mobile, we come to you" / "We come directly to your home, work, or office" with the phone and its Square site link; Google listing agrees on phone | Business's own posts (syndicated on autoyas.com) + Google Business listing |
| Misfits Auto Detailing | (575) 652-9655 | Mobile auto detailing | Las Cruces | https://misfitsautodetailing.square.site/ | none | High — own website states "We are a mobile detailing service" and prints the phone | Business's own website |
| Splash Detailing | (575) 621-1380 | Mobile auto detailing | Las Cruces | http://splashdetail.com/ | none | High — own site's terms state "Being a mobile service we come to you" and the site prints the phone; also operates from 2403 S Main St (88005). Note: the site footer shows a placeholder "18475555555" template number — the real number recorded here is the one printed in the site's body and on its Google listing | Business's own website + Google Business listing |
| Outshine Auto Mobile Detail | (575) 249-8749 | Mobile auto detailing | Las Cruces | https://outshine-mobile-detailing.square.site/ | none | Medium — based in the target ZIP itself (440 S Main St, 88005); its own Square site brands it "Outshine Mobile Detailing" with at-location service packages, but the phone comes from its Google listing (not printed on the fetched site page) | Google Business listing + business's own Square site |
| A & R Mobile Detailing | (575) 288-7205 | Mobile auto detailing | Las Cruces | https://a-r-mobile-detailing.ueniweb.com/ | none (message form only) | Medium — the business's own UENI website carries "Mobile Detailing" in its own name, prints the phone, and lists areas covered "Las Cruces, El Paso" (base: 1910 N. Valley, 88007); page content is older, last crawled ~6 months ago | Business's own website |
| Adrian's Mobile Detailing Services LLC | (575) 644-0528 | Mobile auto detailing | Las Cruces | none found | none | Medium — Google Business listing only (2235 Desert Dr): the business's own registered name states mobile detailing and the phone is published there; no own website could be found (adriansmobiledetailing.com belongs to unrelated operators in TX/CA) | Google Business listing |
| Fresh Mobile Detailing | (575) 639-2570 | Mobile auto detailing | Las Cruces | none found | none | Medium — Google Business listing only: name states mobile detailing, phone published, Las Cruces service-area listing with 7-day hours; no own website found | Google Business listing |
| Shine mobile Detailing | (575) 312-3256 | Mobile auto detailing | Las Cruces | none found | none | Medium — Google Business listing only (2532 Moon River Loop): name states mobile detailing, phone published; no own website found. Name capitalization kept exactly as listed | Google Business listing |

## Email leads

**0.** None of the ten businesses publishes a business email address on its own website or Google listing (Four Seasons and A & R offer contact/message forms only). Nothing was guessed, so the leads file is an empty array.

## Exclusions (13)

1. **Squeaky Clean Mobile Detailing** — (575) 993-4460 — Google flags it "Possibly Temporarily Closed" and its website (squeakycleandetailers.com) no longer resolves; cannot verify it currently operates.
2. **Work Of Art Mobile Auto Detailing** — Las Cruces listing (88012) exists on a directory roundup, but no public phone or website could be verified anywhere — fails the published-phone gate.
3. **Butter-Up Detailing** — (575) 644-1685 — Google listing only, at an apartment address; no own materials anywhere confirming a mobile/on-site service.
4. **A&H Automotive Detailing** — (575) 323-2256 — fixed shop at 910 S Tornillo St; its website could not be fetched and no public source confirms a mobile service.
5. **The Exterior Auto Spa** — (575) 331-8111 — storefront detail shop / car wash at 940 N Valley Dr; no mobile service confirmed.
6. **Paragon Solutions Auto Detailing** — (619) 452-6969 — San Diego area-code phone; its own site shows detailing in Las Cruces but no mobile/on-site service and no verifiable local operator.
7. **StanceStarz auto detailing** — (253) 331-0413 — Tacoma, WA area-code phone; no mobile service confirmed from its own materials.
8. **Corner Lot** — (575) 527-2277 — detailing performed at a fixed used-car lot (902 W. Hadley Ave); not a mobile service.
9. **J and A Auto Detailing** — (575) 524-9255 — fixed shop at 500 W Boutz Rd ("Serving Las Cruces since 1997"), Facebook page only; no mobile service.
10. **Mister Car Wash** — (575) 525-9137 — national chain fixed car wash (543 Lujan St).
11. **LA Audio Detail** — 1000 E Amador Ave — car stereo/customization shop; no phone published on its listing and no mobile detailing service.
12. **Elite Finish LLC Mobile Detailing** — surfaced in search but is in Kent, WA — out of market.
13. **TJ's Pristine Mobile Detailing** — Alamogordo, NM — out of this cell's city.
