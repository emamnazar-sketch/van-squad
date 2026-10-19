# Day 8 — Williston, ND · ZIP 58801 · House cleaning

Run date: 2026-10-18. Cell yield: **10 insert-ready, 2 leads.** Williston is a small oil-country city; most cleaners are tiny operations whose only public footprint is a Google Business Profile. Per the cell brief, Google-profile-only businesses are included at **Medium** confidence; every phone below has no conflicting number anywhere found.

## Insert-ready (10)

| # | Business | Phone | Conf. | Evidence |
|---|---|---|---|---|
| 1 | Highline Cleaning Services | (701) 339-7924 | **High** | Own site (highlinecleaning.info, booking page) prints +1 701-339-7924 and its Williston address (912 2nd St W, 58801); Google profile agrees. Home cleaning services (recurring home cleans, deep cleans) sold on the site. A review-aggregator page (sotellus) shows a different number, (701) 334-0681 — own website wins per rule, and Google matches the site. |
| 2 | Dust Busters Cleaning Co. | (701) 510-8550 | **High** | Own site (dust-busters-cleaning-co.com) prints (701) 510-8550 and describes leveled home cleans + move-in/out; Google profile (listed there as "Johnson Family Co.") agrees on the number. Distinct business from Fargo's "Dust Busters House Cleaning Service" (different phone, different site). |
| 3 | American Maide Cleaning Company, LLC | (406) 213-9555 | **High** | Own site (americanmaidecleaning.com) prints 406-213-9555 twice and its address, 5754 133rd Ave NW, Williston, ND 58801; Google profile and bestprosintown.com agree. Site explicitly offers residential cleaning. 406 is a Montana area code — the business states it serves ND and MT; the Williston address and number are its published contacts. |
| 4 | Level Up Cleaning Services | (701) 987-3443 | Medium | Phone from Google Business Profile only. Own site (levelupcleaningnd.com) confirms Williston residential work: dedicated Residential page (Luxury House Cleaning, Deep Cleaning, Airbnb, post-construction); contact page is form-only, no phone/email published. |
| 5 | TruGrit Cleaning Service | (701) 484-1883 | Medium | Phone from Google Business Profile only. Own site (trugritcleaningservice.com) confirms house cleaning: "We specialize in house cleaning and office cleaning," Williston-based, 20+ years. No phone published on the site pages fetched. |
| 6 | Royal Cleaning Services | (701) 339-5113 | Medium | Phone from Google Business Profile only (3705 7th St W, Williston). HomeAdvisor business profile independently confirms "Residential and Commercial Cleaning," 91 reviews, 18 years — services corroborated, phone rests on Google. No own website. |
| 7 | Top Notch Cleaning Services | (701) 347-1015 | Medium | Phone from Google Business Profile only (103 22nd St W, Williston). Its web presence is its Facebook page (facebook.com/NDTopNotch, linked as the website on Google); the page is not readable logged-out, so the phone could not be independently confirmed there. No conflicting number found. |
| 8 | Platinum Plus Housekeeping and Cleaning Services | (701) 713-5131 | Medium | Google Business Profile only (3701 Prairie Commons St, Williston). "Housekeeping" is in the business name; profile category Cleaning Service with full weekly hours. Its listed "website" is an onbizmap scraper page, not an own site — website field left blank. |
| 9 | Triple9 Cleaning Services | (701) 770-8512 | Medium | Google Business Profile only (1412 42nd St W, a residential address in Williston); 7-day consumer hours. Its Google business.site is defunct (404 — Google discontinued those sites), so website field left blank. No commercial/janitorial signal and no conflicting number. |
| 10 | Squix Cleaning Services | (701) 609-5798 | Medium | Phone from Google Business Profile only (3106 University Ave, Williston). Independent corroboration the business operates: named as a hiring employer at a May 2024 Job Service North Dakota small-business hiring event in Williston, and its owner is publicly identified as a Williston-based Airbnb host whose work is "Squix cleaning" (residential turnover cleaning). No conflicting number. |

All 10: service_zips = ["58801"] only — none publishes a ZIP list; all are Williston-based, template travel radius 25 mi applies.

## Leads (2, leads file only)

- **Highline Cleaning Services** — highline.llc@outlook.com — published on its own website (http://www.highlinecleaning.info/).
- **American Maide Cleaning Company, LLC** — support@americanmaidecleaning.com — published on its own website (https://americanmaidecleaning.com/).

No other included business publishes an email (Level Up is form-only; the rest have no site or no email shown).

## Exclusions

- **Custom Clean** — (701) 580-4268 — NEAR-MISS. Phone rests on Google alone, Google categories lean janitorial (Cleaning Service + Janitorial Service), and residential house cleaning could not be confirmed — its own site (customcleanservices.com) failed to load with this run's tooling and was not retried per instructions. Same pattern as the Day-8 Minot exclusion "S&H Janitorial" (site unreachable + residential unconfirmed). Top re-check candidate if a future pass can load its site.
- **Service First Cleaning & Restoration** — phone verified (own site + Google agree, (701) 572-7767), but its cleaning menu is carpet & upholstery, tile & grout, air ducts, odor control plus fire/water restoration — specialty/restoration, not general house cleaning (Steamatic precedent from the Fargo cells).
- **Bossy Ladies Cleaning** — (701) 651-8281 — Google flags the profile "Possibly Temporarily Closed"; excluded per the FM Mobile Detailing precedent (Day 8 Wave 1).
- **Laid Right** — NEAR-MISS / likely defunct: only a Google profile, an Idaho (208) phone, and a website on webs.com, a platform shut down years ago; no current corroboration. Shares an address with Platinum Plus (3701 Prairie Commons St).
- **The Bakken Cleaners** — primarily a dry cleaner/laundry (Google secondary category Dry Cleaner); its domain bakkencleaners.com has been taken over by an unrelated gambling site, so no own-site verification is possible; house cleaning unconfirmed.
- **Model Dry Cleaners** — dry cleaner, not a house-cleaning service.
- **Bakken Carpet Cleaning** — carpet cleaning only.
- **Pure Clean** — carpet/tile/upholstery steam cleaning and flood cleanup only, per its own site.
- **Mr. Shine Residential & Commercial Cleaning Services** — HomeAdvisor-only; no public phone or presence outside the platform.
- **ND Cleaning Company** — HomeAdvisor-only; platform-only.
- **A&A Sparkle and Shine Cleaning LLC** — Angi/HomeAdvisor-only, no public phone (same finding as the Day-8 Minot cell).
- **Shelley's Cleaning and Painting Services** — HomeAdvisor-only, no public phone found.
- **Executive Cleaning Services** — national commercial chain; its own Williston page states "We do not service residential properties at this time."
- **Homeaglow, Care.com, InstaService** — booking platforms / individual-cleaner marketplaces, not businesses.
- **Fort Union Supply and Trading** — janitorial supply store, not a cleaning service. **Kaiser Oilfield Services** — industrial oilfield cleaning.

## Dedupe

All 10 names and phone numbers checked against /tmp/live-biz-d8b.json (575 live rows): no name matches, no phone matches. Note the directory already holds a Fargo business with a similar name, "Dust Busters House Cleaning Service" ((701) 388-7002) — the Williston "Dust Busters Cleaning Co." is a separate business (own site, own phone, Google profile under "Johnson Family Co.").
