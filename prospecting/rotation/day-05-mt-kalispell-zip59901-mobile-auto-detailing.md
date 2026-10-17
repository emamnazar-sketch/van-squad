# Day 05 — Montana × Kalispell × ZIP 59901 × Mobile auto detailing

Thin batch (target up to 5). Researched 2026-10-17. Cell result: **3 qualifying businesses**, all based in Kalispell / ZIP 59901. **No ZIP expansion used** (3+ qualified inside 59901).

## Businesses

### 1. Montana Detail Co.
- **Phone:** (406) 607-8899 (shown on their own website)
- **Category:** Mobile auto detailing
- **City:** Kalispell
- **Website:** https://www.mtdetailco.com/
- **Published email:** Info@mtdetailco.com — published in the contact block of their own website (source: https://www.mtdetailco.com/)
- **Confidence:** High — their own site headlines "Mobile Auto Detailing in Kalispell, Montana" and states "Fully Mobile - We Come to You" / "deliver showroom-level results directly to your driveway"; phone and email both published on the site itself. Legal name shown on site: Montana Detailing Co., LLC.
- **Service ZIPs used:** 59901 only — the site names service towns (Kalispell, Whitefish, Bigfork, Columbia Falls) but publishes no ZIP list, so no ZIPs were inferred.
- **Sources:** https://www.mtdetailco.com/ ; Google Business listing for MT Detail Co., Kalispell, MT

### 2. Pho Real Detailing
- **Phone:** (406) 499-5613 (their Google Business listing)
- **Category:** Mobile auto detailing
- **City:** Kalispell (3080 Elderberry Ave)
- **Website:** https://www.phorealdetailing.com/
- **Published email:** none published (no email shown on their website or listing)
- **Confidence:** High — their own website titles itself "Professional Mobile Auto Detailing" and states "MOBILE — We come to you! Your car will be detailed in the comfort of your driveway" and "currently servicing Kalispell & Flathead Valley, Montana" (veteran-owned); phone verified on their public Google Business listing.
- **Service ZIPs used:** 59901 only — site names Kalispell & Flathead Valley, no ZIP list published.
- **Sources:** https://www.phorealdetailing.com/ ; Google Business listing for Pho Real Detailing, Kalispell, MT

### 3. Flathead Valley Mobile Detailing
- **Phone:** (406) 314-1577 (their Google Business listing)
- **Category:** Mobile auto detailing
- **City:** Kalispell (730 10th Ave W)
- **Website:** https://flatheadvalleymobiledetailing.com/
- **Published email:** none published (none found on listing; site could not be fetched to check for one)
- **Confidence:** Medium — mobile service is stated in the business's own name and its Google Business listing (Kalispell address, local 406 phone, own website); the website itself could not be fetched during research to confirm "we come to you" wording first-hand, so this one rests on the listing + name rather than site copy.
- **Service ZIPs used:** 59901 only.
- **Sources:** Google Business listing for Flathead Valley Mobile Detailing, 730 10th Ave W, Kalispell, MT

## Dedupe checks
- All 3 names and phones checked against the live directory (316 businesses via vs_rest.py) — no name or phone matches. The directory's existing Montana detailers from the Billings cell (Little Details Mobile Detailing Service (406) 850-5131, Redline Detailing LLC (406) 794-6815, Stags Auto and Detailing (406) 812-4708) are different businesses with different phones.
- All 3 names and phones grepped against every file under ~/workspace/van-squad/prospecting/ — no matches (the only "Montana detail" hit was a dedupe note in the Bozeman day-05 file referring to the Billings businesses).

## Exclusions (considered and rejected)
- **National Detail Pros (nationaldetailpros.com)** — national lead-gen/call-center operation with an (800) help line and no local Kalispell operator. Excluded per rules.
- **Detail Doctor Montana** — own website places HQ in Bozeman (Gallatin Valley, 77260 Gallatin Rd, Bozeman; site phone (406) 333-6364); Kalispell is only one of several service cities, and its Kalispell listing shows a conflicting (704) number. Not a Kalispell local operator. Excluded.
- **Malloy's Mobile Detailing** — genuinely mobile-only ("We Are A Mobile Business Only", own site, (406) 249-5533) but based in Whitefish, MT 59937. Not included: this cell requires Kalispell businesses and 3 qualified inside 59901, so the adjacent-ZIP expansion was not triggered. Flagged for a future Whitefish cell.
- **MT Detail Pro** — own website could not be fetched; only a listing with a Maine (207) area-code phone for a Kalispell address. Mobile service not confirmable from the business's own materials. Excluded.
- **Donovan Detailing** — Booksy-only presence; booking page unreadable during research, mobile service not confirmable from own materials. Excluded.
- **Elevated Auto Detail** — Flathead Valley GoDaddy site with phone 406-249-5771, but its available site copy does not state mobile/on-site service. Excluded (mobile unverified).
- **Fixed shops and car washes** (no mobile service; excluded): Bumper To Bumper Detailing, 406 Auto Detailing, Reflection Automotive Spa, Grime2Shine Auto Glass and Detailing, Dallas Auto Spa and Detail, Shadow Enterprises (tint/accessories shop), Clean Car Wash, Superwash Montana, Pro Clean Carwash, Clean Getaway Car Wash, Blue Cow Car Wash.
- **Mobile not confirmable from own materials** (Facebook/social-only or listing-only): Flathead Auto Detailing, Automotive Aesthetics, Shine Sister's Detailing LLC, Premium Car Detaling, Apex Artistry Cerakote, Vibe's Iron Horse Detailing (motorcycle-focused). Excluded.
