# Day 07 — New Mexico × Albuquerque × ZIP 87111 × Mobile auto detailing

Researched: 2026-10-18
Result: **13 qualifying businesses** (all verified mobile/on-site from the business's own website; every phone published on a public source, own site preferred). 11 published-email leads.

Cell note: ZIP 87111 is Northeast Heights, Albuquerque. The metro sweep found far more than the 3-business minimum inside the 87111 service area, so **no ZIP expansion was needed**. All 13 businesses state their service areas by city/neighborhood name only (Albuquerque metro, Northeast Heights, Rio Rancho, etc.) — none publishes a ZIP list — so every `service_zips` is `["87111"]` only.

| # | Name | Phone | Category | City | Website | Published email (source) | Confidence |
|---|------|-------|----------|------|---------|--------------------------|------------|
| 1 | Mobile Detail Pros | (505) 280-2152 | Mobile auto detailing | Albuquerque | https://mobiledetailprosalbuquerque.com/ | mobiledetailpros1@gmail.com (own site) | High — own site: "mobile auto detailing that comes to your home or office", "Mobile-only service"; base address 5200 Eubank Blvd NE, 87111 |
| 2 | Albuquerque Detailing Pros | (505) 295-5375 | Mobile auto detailing | Albuquerque | https://www.albuquerquedetailing.com/ | info@abqdetailingpros.com (own site) | High — own site: "comes to your driveway, office, or job site", "Mobile-Only Service"; base 10400 Academy Rd NE, 87111 |
| 3 | Sandia Summit Mobile Detailing | (505) 535-5679 | Mobile auto detailing | Albuquerque | http://sandiasummitdetailing.com/ | info@sandiasummitdetailing.com (own site) | High — own site: "Our mobile service brings professional-level care right to you"; phone matches its Google listing |
| 4 | Platinum Mobile Detailing | (505) 307-8955 | Mobile auto detailing | Albuquerque | http://www.abqplatinumdetail.com/ | abqplatinumdetail@gmail.com (own site) | High — own site: "Mobile Service, Fully Equipped… directly to your driveway or workplace", "We are mobile!" |
| 5 | T and J Mobile Detailing | (505) 926-1252 | Mobile auto detailing | Albuquerque | http://www.tandjmobiledetailing.com/ | info@tandjmobiledetail.com (own site) | High — own site header + contact page carry the phone; "let us come to you" |
| 6 | Shine Superior Detailing | (505) 614-7791 | Mobile auto detailing | Albuquerque | https://www.shinesuperiordetailing.com/ | none found | High — own site: "family-owned mobile detailing service bringing professional, top-tier vehicle care directly to your doorstep in Albuquerque, Rio Rancho, Los Lunas, and Santa Fe" |
| 7 | Auto Therapy Mobile Detailing | (505) 550-9106 | Mobile auto detailing | Albuquerque | http://www.autotherapynm.net/ | none found | High — own site: "detailing or car wash service at your home or preferred location", "Skip the line, we come to you"; phone from its Google Business listing (own-site fetch showed no phone) |
| 8 | Masterwash Auto Detailing | (505) 737-2288 | Mobile auto detailing | Albuquerque | https://www.masterwashabq.com/ | masterwashabq@gmail.com (own site) | Medium — own site is unambiguous ("We will go directly to your location", "fully equipped mobile detailing unit with our own power and water", "At Your Home, Apartment or Office"), but the site publishes TWO numbers: (505) 737-2288 in the header next to the email (used here) and (505) 720-4985 in the footer "Get In touch" block |
| 9 | Vanity Auto Detailing | (505) 267-6534 | Mobile auto detailing | Albuquerque | https://vanityautodetailing.com/ | contact@vanityautodetailing.com (own site) | High — own site: "Mobile-Only Service", "We come to your home, office, or apartment — anywhere in the Albuquerque metro area", self-contained water & power |
| 10 | Sparkling Mobile Detailing | (505) 550-6435 | Mobile auto detailing | Albuquerque | http://sparklingmobiledetailing.com/ | info@sparklingmobiledetailing.com (own site) | High — own site: "100% self-contained mobile detailing rig… detail your vehicle at your home, office, or apartment driveway"; serves Northeast Heights; listed address 5801 Eubank Blvd NE, 87111 |
| 11 | Attention to Detail | (505) 377-7912 | Mobile auto detailing | Albuquerque | https://www.attentiontodetail3.com/ | attentiontodetail3@yahoo.com (own site) | High — own site: "Our maintenance detailing packages are performed on a fully mobile basis, covering the greater Albuquerque area", "We bring regular detailing to you" |
| 12 | DK Mobile Wash | (505) 604-8058 | Mobile auto detailing | Albuquerque | https://www.dkmobilewash.com/ | info@dkmobilewash.com (own site) | High — own site: "Mobile-Only Service", "We are 100% mobile and come directly to your preferred location anywhere in the Albuquerque metro area"; full detailing packages (not wash-only) |
| 13 | Apex Mobile Car Clean | (505) 305-9336 | Mobile auto detailing | Albuquerque | https://apexmobilecarclean.com/ | apexmobilecarclean@gmail.com (own site) | High — own site FAQ: "Mobile detailing simply means… We come to you"; service areas include Albuquerque and The Heights; full detailing incl. paint correction/ceramic |

## Per-business notes

1. **Mobile Detail Pros** — Mobile-only, self-contained water/power. In-ZIP base (5200 Eubank Blvd NE, 87111).
2. **Albuquerque Detailing Pros** — Mobile-only. In-ZIP base (10400 Academy Rd NE, 87111). **Template flag for the coordinator:** this site, Mobile Detail Pros (#1), Vanity Auto Detailing (#9) and DK Mobile Wash (#12) all use the same package names (Full Refresh / Gold Standard / Masterpiece) and near-identical copy — almost certainly one local web agency's template. Each business nevertheless has its own distinct name, phone, email, base address and Google presence, and no two share a phone, so all are listed (Day 5 precedent: dedupe on same operator + phone only).
3. **Sandia Summit Mobile Detailing** — Base 8109 Loma Del Norte Rd NE (87109). Caution: the site's quote-form block displays a second number (+1 505-985-2645); the Contact section and Google listing agree on (505) 535-5679, which is what is recorded.
4. **Platinum Mobile Detailing** — Base Wyoming Blvd NE (87113). Caution: a stray "(661) 762-3627" appears at the bottom of the fetched page — a template artifact (661 is a California area code); the business number (505) 307-8955 is the one repeated across its own site and listings.
5. **T and J Mobile Detailing** — Base 13170 Central Ave NE Ste. B #149 (87123). A second Google listing shows (505) 313-9760; the business's own site wins — (505) 926-1252 recorded.
6. **Shine Superior Detailing** — Base 412 Griegos Rd NW. No email found on the homepage; the site's /contact path returns 404, so no lead.
7. **Auto Therapy Mobile Detailing** — Base 5301 4th St NW (87107). Google description "We are 100% mobile", 4.8★/97 reviews. Phone is from its Google Business listing; no email published anywhere found.
8. **Masterwash Auto Detailing** — Local ABQ operator (140+ Google 5-star reviews claimed on its site). Its site copy contains a leftover "We service the Greater Houston area" line — a template copy error; everything else (domain, reviews, areas list: Albuquerque, Rio Rancho, Los Lunas, Belen, Bernalillo) is Albuquerque. Dual phone numbers as flagged in the table — coordinator may want to verify which is current before outreach.
9. **Vanity Auto Detailing** — Base 2420 Midtown Pl NE (87107); mobile-only, licensed & insured per its site.
10. **Sparkling Mobile Detailing** — One-operator business ("Cyrus"); site lists both a 87109 "Mobile Unit" line and the 5801 Eubank Blvd NE, 87111 address. Explicitly serves Northeast Heights.
11. **Attention to Detail** — Base 7300 Valle Cantero Ln NW (87114). IDA-certified per its site; maintenance-detailing focus but offers full detailing/paint correction/ceramic; fully mobile.
12. **DK Mobile Wash** — Despite the "Wash" name, its own site sells full mobile detailing packages (interior/exterior/full detail, ceramic, paint correction); mobile-only.
13. **Apex Mobile Car Clean** — Base 429 Pennsylvania St NE (87108). Hooks up to the customer's water/power rather than self-contained, but is a genuine come-to-you mobile detailer.

## Dedupe

- Live directory checked 2026-10-18 via the public REST endpoint (436 rows): **zero (505) phones and no Albuquerque businesses** — New Mexico is a new state in the directory. The only name-substring matches were unrelated out-of-state businesses (Sparkling Perfection, Portland OR; Gallatin Platinum Mobile Detailing, Bozeman MT; Platinum Pressure Washing, CO) — different names and phones, not duplicates.
- Every candidate name and phone fragment grep-checked against all files under `~/workspace/van-squad/prospecting/`: no matches. The three sibling Day-07 Albuquerque cells already on disk (87110 house cleaning, 87112 handyman, 87120 mobile pet grooming) share no name or phone with this cell.
- No two businesses in this cell share a phone number.

## Exclusions (6)

- **On The Spot Automotive** (otsdetailing.com) — fixed in-shop detailing studio at 103 Rio Rancho Blvd SE Suite A-6, Rio Rancho ("in-shop capabilities"); not a mobile service and not Albuquerque.
- **No-H2O Albuquerque** (noh2o.com) — national on-demand franchise/platform, not a local operator (same basis as the Day 6 No-H2O Denver exclusion).
- **Champion Xpress Carwash** — express tunnel car-wash chain, fixed location; not mobile detailing.
- **Streamline Mobile Detail** — (505) 900-7105; its domain mobiledetailabq.com is expired and parked for sale, so mobile service cannot be verified from the business's own materials.
- **Firestone Car Detailing** (surfaced listing) — national chain; the listing data returned was for Milford, CT, not Albuquerque.
- **Art Of Detail** — (505) 948-9457, 5901 4th St NW; fixed shop with posted shop hours, no mobile service claim found.

## Held out — could not verify from the business's own materials (15)

- **Tony's Mobile Auto Detailing** — (505) 348-7720; own website (tonysmobileautodetailingnm.com) could not be fetched, so mobile service is unconfirmed from its own materials.
- **Four Brothers Mobile Detailing** — (505) 810-8080; own website (fourbrothersmobilealbuquerque.com) could not be fetched.
- **Beautiful Reflections Auto Detailing** — (505) 347-4550, 9124 Comanche Rd NE (87111); own website could not be fetched (only a Google price slogan is visible publicly).
- **Thompson Mobile Detailing** — (505) 659-5858; its website is a discontinued Google business.site page (404) — no live own materials to verify.
- **Detail Society** — (505) 363-3515, 2440 Midtown Rd NE Ste A; website fetch timed out and the suite address suggests a fixed studio; mobile unconfirmed.
- **Metro Pro Cleaners** — (505) 206-1077; website returned 403; business type (cleaning vs. detailing) unverified.
- **B's Mobile Detailing** — (505) 373-6412; own website (bsdetail.com) could not be fetched.
- **CRL Mobile Detailing Service** — (575) 252-3389; own website could not be fetched.
- **Geesey Services** — (505) 405-7550; own website could not be fetched; multi-service business, mobile detailing unconfirmed.
- **X Auto Details** — (505) 312-3503; own website lists detailing packages and prices but states no mobile/come-to-you service and publishes no phone on the fetched pages.
- **Rough Terrain** — own homepage was fetched and does not state a mobile/come-to-you detailing service; mobile unconfirmed from its own materials.
- **RMRZ Details** — (505) 205-8908, 2005 Eubank Blvd NE; no website found to verify mobile service.
- **J's Mobile Detailing** — (505) 226-9222; no website found to verify.
- **JC's Auto Detail** — (505) 433-1820; only a Wix listing page found; mobile service unconfirmed.
- **Paris Detailing and Cleaning Houses** — mixed house-cleaning/detailing business on a negocio.site page; mobile auto detailing not verified from its own materials.

## ZIP / service_zips note

- No ZIP expansion: 13 qualifying businesses serve ZIP 87111 (≥3 required), all Albuquerque-based or Albuquerque-metro mobile operators.
- All 13 state service areas by city/neighborhood name only; per the standing rule, `service_zips` = `["87111"]` for every record — no ZIP was invented for any business.
