# Day 43 — ME / Bangor / ZIP 04401 / House cleaning

- Cell: State=ME, City=Bangor, ZIP=04401, Category="House cleaning" (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-24
- Expansion note: No expansion needed — 6 businesses qualified in 04401 / the Bangor service area, so adjacent ZIP 04402 was not used as a research expansion. (One qualifying business, Cyr Green Cleaning Service, lists a mailing P.O. Box in 04402; that is a mailing address, not a stated service-area ZIP, so it was not added to service_zips.)
- Service-ZIP note: service_zips = ["04401"] for every business. No business itself stated additional service-area ZIP codes in the materials checked (they stated towns/cities, not ZIPs), so no extra ZIPs were added — never invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| On Deck Cleaning Co | (207) 401-0149 | House cleaning | Bangor | http://www.ondeckcleaningco.com/ | None published on own site checked | High — own site: "House Cleaning Bangor ME", recurring/deep house cleaning for homes, address 82 Columbia St, Suite 304, Bangor, ME 04401 and phone (207) 401-0149 printed on own site | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Cyr Green Cleaning Service | (207) 356-2259 | House cleaning | Bangor | https://cyrgreencleaning.com/ | cyrgreencleaning@gmail.com — own site: https://cyrgreencleaning.com/ | High — own site: "Residential Cleaning" and customized house cleaning service, phone 207-356-2259 and address 499 Hammond St, Bangor, ME 04401 on own site; legal name on own site "Cyr Green Cleaning Service L.L.C." | Business's own website | Grep for name and phone: no match |
| Green Clean Bangor | (207) 974-7849 | House cleaning | Bangor | https://www.greencleanbangor.com/ | None published on own site checked | Medium — own site: "regularly scheduled housekeeping… Come home to a clean house", residential housekeeping and deep cleanings; phone (207) 974-7849 only on its Google listing, not in own-site text fetched; listed in Brewer (6 State St), serves Bangor at customers' homes | Business's own website + Google listing for phone | Grep for name and phone: no match |
| Sweep and Slate | (207) 356-4416 | House cleaning | Bangor | http://www.sweepandslate.com/ | None published on own site checked | High — own site title: "Sweep and Slate Residential & Commercial Cleaning Bangor, Maine", own footer gives 4 Union Street, Bangor, ME 04401 and phone 2073564416, matching the Google listing's (207) 356-4416 | Business's own website | Grep for name and phone: no match |
| Bloom In Clean | (207) 659-2869 | House cleaning | Bangor | https://bloominclean.com/test/ | bloominclean@outlook.com — owner's own page: https://www.doterra.com/US/en/site/bloominclean (owner Erika Bloom Payson prints phone, email and www.bloominclean.com there) | Medium — owner's own page: "Bloom in Clean provides our customers with residential cleaning services"; own-site walk-through form is built around cleaning a customer's home (location of home, bedrooms/bathrooms, cleaning frequency); phone (207) 659-2869 on Google listing and on owner's page; Google listing address 42 Gilman Rd, Bangor | Business's own website / owner's own page + Google listing | Grep for name and phone: no match |
| Your Best Nest | (207) 735-6843 | House cleaning | Bangor | https://clienthub.getjobber.com/booking/3f57fc1f-257c-4bad-9324-0c92bd4ba78c | None published on sources checked | Medium — business's own Alignable profile: "We offer residential cleaning in the greater Bangor area… deep cleaning, regular recurring cleanings, apartment and rental turnovers", started 2021, based in Hermon (101 Wendy Acres Dr, in ZIP 04401) serving Bangor homes; phone (207) 735-6843 only on its Google listing; website is its Jobber booking page linked from that listing | Business's Alignable profile + Google listing for phone/booking link | Grep for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| RC Cleaning Service | (207) 573-9658 / https://www.rccleaning207.com/ | Commercial-only framing: its Google description calls it "a family owned and operated Commercial Cleaning Service… Commercial Cleaning, Office Cleaning, Janitorial Services", and its own site fetched shows no residential house-cleaning offer — residential service not confirmed from its own materials. Its own-site email info@RCCleaning207.com was therefore not collected as a lead. |
| Clean Out Property Services | (207) 745-2492 / https://cleanoutpropertyservices.com/about-us/ | Property clean-outs / clean-ups only per its own description ("residential clean ups and clean outs in the greater Bangor area") — not regular residential house cleaning at a customer's home. |
| Clean Scene Inc | (207) 835-4515 / https://cleanscene.com/ | Commercial-only on its own site: "professional, reliable commercial cleaning services… janitorial solutions for offices, clinics, and commercial spaces" — no residential house cleaning. |
| CMC & Maintenance | (207) 830-9573 / https://www.cmcusa.net/ | Janitorial / business-consulting framing in listings; residential house cleaning not confirmed from its own materials. |
| 207 Professional Cleaners | (207) 659-6798 | No verifiable own website or own materials confirming residential house cleaning — Google listing only, with no service description found. |
| Avos Cleaning and Closet Design | (207) 852-5775 | No verifiable own website or own materials confirming residential house cleaning — listing only. |
| Stanley Steemer | 1-800 number / https://www.stanleysteemer.com/locations/ME/Bangor/928 | National chain (since 1947, nationwide) and carpet/upholstery-focused — excluded as a national chain, not a local Bangor house-cleaning operator. |
| SERVPRO of Bangor / Ellsworth | (207) 947-0400 | National franchise system; restoration/specialty cleaning, not regular residential house cleaning. |
| CleanSpace / Homeaglow | various | Lead-gen / marketplace platforms connecting independent cleaners, no single local operator with a local phone — excluded. |

## Leads summary

2 published emails collected (see matching -leads.json): Cyr Green Cleaning Service — cyrgreencleaning@gmail.com (own website); Bloom In Clean — bloominclean@outlook.com (owner's own page). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 6
- Listings: 6 (one per business)
- Email leads: 2
- Excluded / skipped: 9 entries above (0 dedupe skips — no name or phone matched anything in ~/workspace/van-squad/prospecting/)
