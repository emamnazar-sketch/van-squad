# Day 14 — Texas | Houston | ZIP 77089 | Mobile auto detailing

Cell: TX × Houston × 77089 (Sagemont / South Belt area, bordering Pearland) × "Mobile auto detailing" (label verified verbatim in ~/workspace/van-squad/js/data.js).
Result: **6 businesses written.** No ZIP expansion needed — the cell plus its immediate Pearland/Pasadena border (same continuous residential area, all recorded with city Houston per the cell) yielded 6 qualifying mobile operators. Every business's mobile/on-site service was confirmed on the business's own website or its own booking page, except IB5 Auto Spa (see its flag).

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | The Detail Lab Mobile Detailing | (832) 981-3297 | Mobile auto detailing | Houston | http://www.thedetaillabhtx.com/ | thedetaillabhtx@gmail.com — own site Contact block, http://www.thedetaillabhtx.com/ | High — own site lists its address IN the target ZIP: "The Detail Lab - Mobile Detailing, 2750 Dixie Farm Rd, Houston, TX 77089"; Contact block publishes (832) 981-3297 (same number on its Google listing); mobile detailing + ceramic across Pearland/Houston area | Own website |
| 2 | EZ Detailers Mobile Detailing | (713) 367-4022 | Mobile auto detailing | Houston | http://www.ezdetailers.com/ | ezdetailerstx@gmail.com — own site "Get in touch", http://www.ezdetailers.com/ | High — own site: "We come to you so you don't have to!!!", "family owned and operated mobile detail company in Houston", "Mobile Detailing in Pearland, TX and surrounding areas"; phone (713)-367-4022 on own site; Google listing address 11307 Sageview Dr, Houston (77089/Sagemont area) | Own website |
| 3 | Kings Mobile Car Detailing | (832) 689-6966 | Mobile auto detailing | Houston | https://kingsmobilecardetailing.com/ | — none published on site found — | Medium — own site: "full-service mobile car detailing company… we bring convenience… directly to your doorstep", "proudly service all of Houston and the greater Houston area"; downgraded to Medium for a phone variance on its own site (see flag) | Own website |
| 4 | Veritas Mobile Car Detailing | (832) 662-9673 | Mobile auto detailing | Houston | https://veritasdetailing.site/detailing/pearland | concierge@veritasdetailing.site — own Pearland page, https://veritasdetailing.site/detailing/pearland | High — own Pearland page: "Studio-level car care brought to your… driveway", "straight to your Pearland front door", "Mobile service — Houston, Texas"; phone 832-662-9673 and email published on the page; Pearland borders 77089 directly | Own website |
| 5 | Pure Spec Mobile Detail | (281) 942-0886 | Mobile auto detailing | Houston | https://purespecdetail.com/ | — none published on site found — | Medium — own site: "We Come to You… at your home, office, or anywhere convenient", "brought directly to your driveway", serves "Baytown, Lake City, Pasadena, Houston, and surrounding Texas areas" (Pasadena/Houston border the 77089 area); phone (281) 942-0886 on own site; downgraded to Medium because no ZIP-level service list is published | Own website |
| 6 | IB5 Auto Spa | (832) 225-8013 | Mobile auto detailing | Houston | http://www.ib5autospamobile.com/ | — none published on site found — | Medium — Google listing: Pearland address 17820A County Rd 127, Pearland, phone (832) 225-8013; its own booking-app terms state "As a mobile service" and its published description says "We are 100% mobile"; downgraded to Medium because its own homepage could not be fetched in this run (see flag) | Google Business listing + own booking page |

## Per-business notes

### 1. The Detail Lab Mobile Detailing — (832) 981-3297
- 77089 basis: Its own site prints "The Detail Lab - Mobile Detailing, 2750 Dixie Farm Rd, Houston, TX 77089" — Dixie Farm Rd is in ZIP 77089. A second address/number line on the same page reads "+1-832-728-8801" paired with that address; the Contact block number (832) 981-3297 is the one recorded because it is repeated in the Contact section AND matches its Google Business listing (18500 Pearland Sites Rd listing also uses 832-981-3297). FLAG for coordinator: two numbers appear on the own site; (832) 981-3297 is the corroborated one.
- Email: thedetaillabhtx@gmail.com published in its own site's Contact block — in the leads file.

### 2. EZ Detailers Mobile Detailing — (713) 367-4022
- Phone and email both published on its own homepage ("Phone: (713)-367-4022", "Email: ezdetailerstx@gmail.com").
- Email is in the leads file.

### 3. Kings Mobile Car Detailing — (832) 689-6966
- FLAG — phone variance: its own site's page title/header promotes 346-641-0444, while its own footer/Google reviews line reads "Or (832) 689-6966" and its Google Business listing (10030 Blackhawk Blvd Suite 015, Houston — Blackhawk Blvd is in the 77089 area) publishes (832) 689-6966. The (832) number is recorded because it is corroborated by two sources (own footer + Google listing). Coordinator may wish to re-verify before outreach.
- Its own site also prints a second address (13338 Utica Street, Houston, TX 77015) in the footer; the Google-listed Blackhawk Blvd address is the one nearest this cell. No email published on the site found.

### 4. Veritas Mobile Car Detailing — (832) 662-9673
- Business name on its own site: "Veritas Mobile Car Detailing" (Google listing adds "of Pearland").
- Email concierge@veritasdetailing.site published on its own Pearland page — in the leads file.

### 5. Pure Spec Mobile Detail — (281) 942-0886
- No email published on its own site found (quote/booking form only).

### 6. IB5 Auto Spa — (832) 225-8013
- FLAG: browser fetch of http://www.ib5autospamobile.com/ failed in this run (no HTTP status returned), so the own homepage was not directly read. Mobile confirmation rests on (a) its own booking-app page terms ("WEATHER & MOBILE SERVICE CONDITIONS — As a mobile service") and (b) its published business description ("IB5 Auto Spa proudly offers auto detailing services to Pearland, TX… We are 100% mobile"). Phone is from its Google Business listing. Coordinator: re-verify the homepage before any outreach.

## Dedupe / exclusions

- Live DB checked via vs_rest.py: full active-business pull (1,000-row pages at offset 0 and offset 1000; 1,158 active businesses). None of the 6 names or phones above appears in the DB, and none appears in any prospecting file (grep of ~/workspace/van-squad/prospecting/ incl. all day-14 files).
- Tonight's already-taken Houston detailers (77041 + 77082 cells) — Barwash, Bubbly, Azul Auto Detailing, Huios Detailing, Southern Suds Mobile Detailing, Auto Doctor Detailing, Bee Deep Cleaning, Pop Mobile Auto Detailing and Wash, Ongowash Mobile Detailing, 45 Detailing, Prime Detailing, RG Master Detail, Houston Mobile Car Detailing, Bayou Buff — none reused here.
- **Every Detail (Pearland, (346) 429-5129)** — genuinely mobile (own site: mobile detailing across Pearland/Houston, appointments at an agreed customer location) BUT its exact name "Every Detail" is already in the live DB (a Bozeman, MT business, (406) 551-5677, day-05). Skipped per the same-name dedupe rule.
- **Houston Mobile Detailing (houstonmobiledetailing.net, (832) 479-2053 on own site)** — held out: its own Pearland page lists its service ZIPs as 77584, 77588, 77581 only (no 77089 coverage stated), and its name is near-identical to tonight's already-taken "Houston Mobile Car Detailing" — including it would invite a duplicate-profile confusion.
- **Elite Mobile Carwash and Detail ((832) 273-9764, Houston)** — held out: its own site (http://elitemobilecarwash.com/) could not be fetched in this run, so mobile service could not be confirmed from its own materials.
- **Clean Me Up Car Detailing (Pearland, (281) 672-9487)** — excluded: the only site found is a third-party directory aggregator page, with no own-site mobile confirmation.
- **Pearland Mission Ready Mobile Car Detailing ((713) 510-7037), Ready Set Detail ((832) 274-6646), M&P Galaxy Detailing ((281) 755-0056)** — excluded: no verifiable own website found (listings/social only), mobile service not confirmable from their own materials.
- Fixed-location car washes/detail shops around 77089/Pearland (Sparklez Express, WhiteWater Express, Mint Express, Texas Splish Splash, Timewise Soft Touch, Every-Detail-style storefronts) — excluded as storefront-only. National Detail Pros / Panda Hub — excluded as national lead-gen platforms with no local operator. 713 Steam — excluded: multi-state network whose published same-day number is an (833) number and which also runs a drop-off location; not a local 77089 operator. Heritage Automotive Care — excluded: only an (800) number published.

## Leads

3 published business emails collected (see matching -leads.json): The Detail Lab Mobile Detailing, EZ Detailers Mobile Detailing, Veritas Mobile Car Detailing — each taken from the business's own website. None guessed.
