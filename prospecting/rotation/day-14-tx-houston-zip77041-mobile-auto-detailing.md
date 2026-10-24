# Day 14 — TX | Houston | ZIP 77041 | Mobile auto detailing

Category label verified verbatim in ~/workspace/van-squad/js/data.js: "Mobile auto detailing".
Cell target ZIP 77041 (NW Houston / Brittmoore–Copperfield corridor). No expansion to an adjacent ZIP was needed — 7 qualifying businesses found for the 77041 cell (all Houston-based, mobile service covering Houston including the NW corridor). Count: **7 businesses**.

Dedupe: checked live DB via vs_rest.py (businesses?status=eq.active, offsets 0 and 1000, ~1,033 rows) and grep of all of ~/workspace/van-squad/prospecting/ for every name and phone below — no matches. No dupes skipped from tonight's list.

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / notes |
|---|------|-------|----------|------|---------|--------------------------|---------------------|--------|----------------|
| 1 | Barwash | (832) 278-2208 | Mobile auto detailing | Houston | https://www.thebarwash.com/ | — none published on site — | High — own site headlines "Premium mobile car detailing," phone on own site, and its own footer address is Brittmoore Road, Houston, TX 77041-5611 (inside the target ZIP) | Own website | Not in DB/prospecting. No email found on homepage. |
| 2 | Bubbly | (832) 929-8154 | Mobile auto detailing | Houston | http://www.bubblynow.com/ | contact@bubblynow.com — own site FAQ (http://www.bubblynow.com/) | High — own site: "Bubbly comes to you… our van arrives at your home or work"; phone in own-site footer; Houston address 2121 Brittmoore Rd | Own website | Not in DB/prospecting. On-demand model but Houston-based with own vans/washers, bonded — local operator, not a national lead-gen. |
| 3 | Azul Auto Detailing | (713) 386-9945 | Mobile auto detailing | Houston | https://azulautodetailing.com/ | — none published (email field blank on site) — | High — own site: mobile Full Detail "done where your car is parked," at home or office, brings own water/power/generator; phone on own site; mobile service throughout greater Houston | Own website (https://azulautodetailing.com/mobile-full-detail-houston/) | Not in DB/prospecting. |
| 4 | Huios Detailing | (512) 296-5051 | Mobile auto detailing | Houston | https://huios.i-a-m.pro/ | huiosdetailing@gmail.com — own site contact section (https://huios.i-a-m.pro/) | Medium — own site: "Fully mobile — Greater Houston area… We come to your home or office anywhere in Greater Houston," founder named (John McComas), phone + email on own site; downgraded to Medium because the phone carries a 512 (Austin) area code | Own website | Not in DB/prospecting. FLAG: 512 area code on a Houston business — number is published on its own Houston site, not toll-free. |
| 5 | Southern Suds Mobile Detailing | (713) 269-1708 | Mobile auto detailing | Houston | https://southernsudsmobiledetailing.com/ | southernsudsmd@gmail.com — own site contact section (https://southernsudsmobiledetailing.com/) | High — own site: "Fully Mobile Service… we come to your home or workplace," every package performed at customer's location; phone + email on own site; primary area Houston, secondary areas include Cypress and Jersey Village (NW corridor) | Own website | Not in DB/prospecting. FLAG: site still contains a few template placeholder notes in FAQ/disclaimer spots; business itself (owner story/photo, packages, booking) is real and operating. |
| 6 | Auto Doctor Detailing | (713) 456-9799 | Mobile auto detailing | Houston | https://www.autodoctordetail.com/ | pro.detailer@outlook.com — own site contact info (https://www.autodoctordetail.com/) | High — own site: "We are 100% Mobile - We Come to You!" bringing detailing to the driveway; phone + email on own site; service list includes Jersey Village, Willowbrook, Cypress, Katy, Houston | Own website | Not in DB/prospecting. |
| 7 | Bee Deep Cleaning | (346) 640-7141 | Mobile auto detailing | Houston | https://beedeepcleaning.com/ | — none published on site — | Medium — own site offers "service to your address in Houston and surrounding districts" and a client testimonial on its own site describes its mobile detailing; phone ("For Booking: 346 640-7141") on own site; downgraded to Medium because it also operates three fixed wash locations (mixed model) | Own website + Google listing (14223 Aston St, Houston) | Not in DB/prospecting. |

## Exclusions (researched, not counted)

- **Chow's Detailing / Chow's Mobile Detailing** (7235 Jackrabbit Rd, Houston 77095; (281) 705-3482) — own current site's process is "Bring the vehicle in" shop work (PPF/ceramic); mobile service NOT confirmed from its own materials. Excluded.
- **Cypress Mobile Car Detailing** ((281) 214-6028) — genuinely mobile and serves Copperfield, but based in Cypress, TX, not Houston — wrong city for this cell. Excluded.
- **Wyvern Wash** ((832) 998-2919) — mobile Houston detailer, but its own site says it serves "primarily within the local service radius around ZIP 77044" (east Houston); 77041 coverage not stated. Excluded for this cell.
- **FoamZone Mobile Detailing** ((832) 901-8586) and **Blue Planet Mobile Car Wash and Detailing** (12250 FM 529, Houston 77041; (979) 730-1092) — mobile in name with Google-listing phones, but no own website found, so mobile/on-site could not be confirmed from the businesses' own materials. Held out.
- **SupremeShineSquad Car Detailing** (10146 Hardison Ln, Houston; (832) 685-6287) — its website (supremeshinesquadcardetailing.shop) could not be fetched to confirm mobile service from its own materials. Held out.
- **Freedom Auto Spa, Auto Essence Detailing, Texas Touch Hand Car Wash, Premier Car Wash, Mister Car Wash (Copperfield), Quick Quack Car Wash** — fixed storefront shops/tunnels, no mobile service. Excluded.
- **Panda Hub, DetailNow, National Detail Pros, Houston Auto Detailing Pros** — national/platform lead-gen patterns with no verifiable single local operator. Excluded.
- **Shine Vehicle Care** — toll-free (877) number only. Excluded per rule.
- **GlossMasters Mobile Car Wash** — (305) Miami-area phone, no verifiable Houston local operator confirmation. Excluded.
- **Royal Auto Spa** — listed as possibly temporarily closed and tied to a fixed car wash. Excluded.

## Leads

4 published business emails collected (see matching -leads.json): Bubbly, Huios Detailing, Southern Suds Mobile Detailing, Auto Doctor Detailing. All taken from the businesses' own websites; none guessed.
