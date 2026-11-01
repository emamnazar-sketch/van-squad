# Day 22 — Illinois — Joliet — ZIP 60435 — House cleaning

- Date: 2026-11-01
- Cell: IL | Joliet | 60435 | House cleaning
- Sources: businesses' own websites first, then Google Business listings / Expertise.com Joliet house-cleaning list
- Category label verified in ~/workspace/van-squad/js/data.js: "House cleaning"

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Minute Maids Cleaning Service | (815) 710-6438 | House cleaning | Joliet | http://minutemaidscleaningservice.com/ | minutemaidscs1@gmail.com — own website (contact section) | High — own site gives Joliet, IL 60435 head-office address (North Raynor Ave), this phone, and residential home cleaning (standard/deep/one-time, teams clean customers' homes) | Own website + Google Business listing |
| Vibrant Home Services | (331) 244-0174 | House cleaning | Joliet | http://vibranthomeservicesllc.com/ | — none published that could be verified | High — own site offers in-home cleaning (bedrooms/kitchen/bathrooms), says professionals "come fully equipped to your appointment," and lists this phone; Google listing gives Joliet address 1131 Karen Dr | Own website + Google Business listing |
| Prime Polish & Co | (815) 200-9540 | House cleaning | Joliet | https://www.prime-polish.com/ | — none published that could be verified | Medium — own site is headed "Residential House Cleaning Services by Prime Polish" with this phone; Google listing gives Joliet address 1700 Corregidor St (site also references a Minooka location, hence Medium) | Own website + Google Business listing |
| It Looks So Amazing LLC | (779) 227-7878 | House cleaning | Joliet | — none verifiable | — none published that could be verified | Medium — Google listing (Joliet address 20654 Burl Ct Ste C) describes it in its own words as a residential cleaning service offering home cleaning and move-in/move-out cleaning in Will County; no standalone website could be verified, so website left blank | Google Business listing |
| Monae's Blessing Residential and Commercial Cleaning Services | (815) 909-8787 | House cleaning | Joliet | — none verifiable | — none published that could be verified | Medium — Google listing at 355 N Hickory St, Joliet; business name itself specifies residential cleaning services and the listing category is Cleaning Service with this phone; no website could be verified | Google Business listing |
| MaidPro Joliet | (708) 575-5117 | House cleaning | Joliet | https://www.maidpro.com/joliet | — none usable (site shows a masked email only) | High — MaidPro's own Joliet location page states it is locally owned and operated, offers house cleaning throughout the greater Joliet area, and lists this phone on the page | Own location page (maidpro.com/joliet) |
| Kesap Clean House Cleaning Service | (815) 609-4081 | House cleaning | Joliet | https://kesapclean.com/contact-us | apptrequest@kesapclean.com — own contact page (https://kesapclean.com/contact-us) | Medium — family-owned house cleaning service; its own materials/Google listing state it covers Joliet (base is nearby Plainfield) with recurring/deep/move-in-out cleaning in clients' homes; phone from its Google listing, email from its own contact page | Own website + Google Business listing |

## Dedupe
- Grepped all of ~/workspace/van-squad/prospecting/ for every candidate name and phone: no phone matches for any of the seven. Near-name notes only: "Minute Maids LLC" in the Day-12 Tulsa, OK batch is a different business (different exact name, different phone (918) 287-7878, different state/website) — not a duplicate of Minute Maids Cleaning Service of Joliet. "MaidPro Beaverton" in the Day-03 Oregon batch is a different franchise location (different phone/city) — not a duplicate of MaidPro Joliet.
- Live DB checked per phone via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` for all seven phones: all returned empty arrays — no duplicates in the live database, including tonight's other Day-22 files.

## Excluded
- All & Around Cleaning Services — own website describes janitorial/office cleaning for businesses only; commercial-janitorial-only.
- Global Hygiene Services — own materials describe commercial hygiene programs only.
- Clean It For A Cause — conflicting/unverifiable: Joliet listing carries a 970 (Colorado) phone and the name traces to a Summit County, Colorado promotion; residential Joliet operation could not be verified from its own materials.
- Top Tier House Cleaning — Google status "Possibly Temporarily Closed" and its website could not be fetched/verified.
- Spotless Cleaning Services (Joliet) — permanently closed per Google listing.
- P&D Cleaning Services — own description is window/gutter/pressure washing, not house cleaning.
- Merry Maids (Joliet/Rockdale listing) — national franchise listing with a 1-star local presence; not used where verified local operators were available.
- Dry cleaners (Country Club Cleaners, Central Cleaners, Mary's Cleaners, Swan Cleaners, KC Cleaners) — garment cleaning, not house cleaning.
- Homeaglow / Thumbtack / Care.com individual cleaners — lead-gen platforms / individuals, no local business operator with a verifiable public business phone.

## ZIP note
- All seven businesses are in, or explicitly serve, Joliet ZIP 60435; no expansion to an adjacent ZIP was needed. service_zips is ["60435"] for every business — no business itself published additional service-area ZIPs that could be verified, so none were added.
