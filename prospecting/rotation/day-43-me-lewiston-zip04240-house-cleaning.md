# Day 43 — ME / Lewiston / ZIP 04240 / House cleaning

- Cell: State=ME, City=Lewiston, ZIP=04240, Category="House cleaning" (exact label)
- Date: 2026-11-24
- Expansion note: EXPANSION USED — only 2 businesses qualified in 04240 (Lewiston), so the cell expanded to adjacent ZIP 04210 (Auburn), which added 2 more. Each business keeps its own city (Lewiston or Auburn).
- Service-ZIP note: service_zips = ["04240"] for the Lewiston businesses and ["04210"] for the Auburn expansion businesses. No business itself stated additional service-area ZIP codes in the materials checked (they stated towns/counties, not ZIPs), so no extra ZIPs were added — never invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| TVI Blessing Cleaning Services | (207) 481-0401 | House cleaning | Lewiston | https://www.tviblessingcleaning.com/ | tviblessclean@gmail.com — own website footer/contact: https://www.tviblessingcleaning.com/ | High — own site lists "Residential Cleaning" and "Home Cleaning" ("Elevate your home with our thorough and personalized residential cleaning services"), address 123 South Avenue, Lewiston, ME 04240, and phone 207 481 0401 printed on the site | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Nolan Ansel Cleaning Services, LLC | (207) 508-2858 | House cleaning | Lewiston | http://www.nolananselcleaningservices.com/ | contact@nolananselcleaningservices.com — own website: http://www.nolananselcleaningservices.com/ | High — own site: "delivering exceptional cleaning solutions for homes and businesses" with customized cleaning plans for "you, your family, and your employees"; address 168 Lisbon St, Ste 3A, Lewiston, ME 04240 and phone +1 207-508-2858 printed on the site | Business's own website | Grep for name and phone: no match |
| Sue's Residential Cleaning Service | (207) 212-0812 | House cleaning | Auburn |  | None published on the sources checked | Medium — Google listing in the business's own words: "I offer a variety of residential cleaning services" serving Androscoggin and neighbouring counties, address 94 Summer St, Auburn, ME; phone (207) 212-0812 on its Google listing; no own website found (the listing's website link is a Google dashboard URL, not a business site, so website is blank). Marked Medium because there is no own website and one third-party aggregator showed a different number, (207) 784-6193 — the Google-listing number was used | Google listing (business's own description + phone) | Grep for name and phone: no match |
| Collaborative Cleaners of Maine | (207) 713-1550 | House cleaning | Auburn |  | None published on the sources checked | Medium — the business's own Maine JobLink employer postings describe a "dedicated residential cleaning team" whose cleaners "transform homes into pristine, welcoming spaces" and list it among Auburn house cleaning & maid services; Google listing gives 71 Broad St Apt 4, Auburn, ME and phone +1 207-713-1550; no own website found, so website is blank. Marked Medium because residential confirmation comes from its job postings / listings rather than a website | Business's own Maine JobLink postings + Google listing for phone/address | Grep for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Merry Maids | (888) 410-3413 / https://www.merrymaids.com/ | National franchise chain — excluded per franchise-chain rule (Lewiston location listed with a toll-free number). |
| ServiceMaster Commercial Cleaning | (207) 783-0310 / https://www.servicemasterclean.com/ | National franchise and commercial cleaning — excluded as franchise / commercial-only. |
| SERVPRO of Lewiston / Auburn | (207) 783-2500 / https://www.servpro.com/ | National restoration franchise — excluded as franchise chain; focus is restoration, not regular house cleaning. |
| CleanCo Commercial Cleaning | (207) 577-3184 / http://www.cleancocare.com/ | Commercial-only by name and positioning — no residential house cleaning confirmed. |
| PJ Cleaning Services | (207) 600-7909 / https://pjcleaningservice.com/ | Own website contradicts the Lewiston listing: its site is titled "Home Cleaning Services in Portland", gives its address as 180 Pool St, Biddeford, ME 04005, and states no Lewiston service — not a Lewiston/Auburn operator for this cell. |
| Maine Cleaning Solutions LLC | (207) 329-1626 / https://mainecleaningsolutions.com/ | DEDUPE SKIP — same name and phone already included as a directory business in the Day-43 Portland 04101 house-cleaning batch (wave 1), even though its own site lists Auburn and Lewiston in its service area. Same name or phone = skip. |
| The Clean Estate | (207) 601-8525 / https://thecleanestate.com/ | Estate liquidation / house clean-outs and trash removal in Auburn — not regular residential house cleaning at customers' homes. |
| Sorted | (207) 520-3211 / https://sorted-1.ueniweb.com/ | Own site: "Best Commercial Cleaning in Auburn… commercial cleaning services to businesses" — commercial-only. |
| Keep America Clean | (727) 851-4191 / Instagram only | Lewiston Google listing with a non-Maine (727) phone and no own materials confirming residential house cleaning — residential service not confirmed from its own materials. |
| Shine Time Windows / Healthy Homes Carpet & Upholstery Cleaning | various | Window cleaning / carpet-and-upholstery only — not house cleaning. |
| Home Glow Cleaning Services / Hello Cleaners | (866) 563-3691 / (307) 263-5458 | National lead-gen / booking platforms with non-local call-centre numbers and no single local Lewiston/Auburn operator — excluded. |

## Leads summary

2 published emails collected (see matching -leads.json), both printed on the businesses' own websites: TVI Blessing Cleaning Services — tviblessclean@gmail.com; Nolan Ansel Cleaning Services, LLC — contact@nolananselcleaningservices.com. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 4 (2 Lewiston / 04240 + 2 Auburn / 04210 expansion)
- Listings: 4 (one per business)
- Email leads: 2
- Excluded / skipped: 11 entries above (including 1 dedupe skip)

## Coordinator insert decision (2026-11-24)
- Sue's Residential Cleaning Service was REMOVED before insert: no own website; residential service confirmed only from a Google listing, failing the own-materials gate. Collaborative Cleaners of Maine was kept (Medium): its own business-authored JobLink postings describe its residential cleaning team. Inserted from this cell: 3.
