# Day 43 — ME / Brunswick / ZIP 04011 / House cleaning

- Cell: State=ME, City=Brunswick, ZIP=04011, Category="House cleaning" (exact label)
- Date: 2026-11-24
- Expansion note: Only 2 businesses qualified in 04011 / Brunswick itself, so the cell expanded to adjacent 04032 Freeport (per instructions, 04252 Topsham was also checked — no qualifying regular residential house-cleaning business with a verifiable phone was found there; Topsham findings are in Excluded). Each expansion business keeps its own city (Freeport).
- Service-ZIP note: service_zips = ["04011"] for the Brunswick businesses. For the Freeport expansion businesses, service_zips = ["04011", "04032"] (04032 is the expansion ZIP for their own city). No other ZIPs were added — Coastline Cleaning states service towns (Brunswick, Topsham, Harpswell, Bath, West Bath, Woolwich, Freeport, Lisbon) on its own site, not ZIP codes, so no town was converted into an invented ZIP.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Coastline Cleaning | (207) 200-7303 | House cleaning | Brunswick | http://www.coastlineme.com/ | info@coastlineme.com — own website: http://www.coastlineme.com/ ("Email: info@coastlineme.com", "Text or Call: 207-200-7303") | High — own site: "Midcoast Maine's Locally Owned House Cleaning Service", "We specialize in Weekly, Biweekly, and Monthly recurring residential cleans"; Brunswick listed first among service towns; phone on own site and Google listing (136 Maine St Ste 1, Brunswick) | Business's own website + Google listing | Grep of ~/workspace/van-squad/prospecting/ for name and phone (207) 200-7303: no match (an unrelated "Coastline Cleaning Connections LLC" exclusion note in a Day-23 Gulfport file is a different business/phone) |
| Maine State Cleaning | (207) 886-4411 | House cleaning | Brunswick | https://www.mainestatecleaning.com/ | Mainestatecleaning@gmail.com — own contact page: https://mainestatecleaning.com/contact-us | High — own site title "Top Residential and Commercial Cleaning Services", "keeping your home or business clean"; contact page: "Fully registered and insured family owned and operated"; phone 207-886-4411 on own site and Google listing (8 Gurnet Rd Ste 7, Brunswick) | Business's own website + Google listing | Grep for name and phone (207) 886-4411: no match |
| High Standard Cleaning | (207) 650-3486 | House cleaning | Freeport | http://www.highstandardinc.com/ | None counted — own site shows two conflicting addresses (mailto info@highstandardcleaningllc.com vs displayed INFO@HIGHSTANDARDINC.COM), so no email was recorded rather than guessing which is correct | Medium — own site: "Quality cleaning services for homeowners and businesses along the Maine coast", construction cleanup to get a newly built/renovated home "ready for move-in day", and Freeport listed first among areas served; phone (207) 650-3486 on own site and Google listing (18 Dodge Estates, Freeport) | Business's own website + Google listing | Grep for name and phone (207) 650-3486: no match |
| Winships Cleaning Service | (207) 841-3898 | House cleaning | Freeport |  | None published found | Medium — Google listing published by the business describes move-in/move-out cleaning and post/pre-construction cleaning at homes, plus a variety of cleaning services; phone (207) 841-3898 on its Google listing (16 Prout Rd, Freeport); no verifiable own website, so website left blank | Google listing (business-published description) | Grep for name and phone (207) 841-3898: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| The Cleaning Authority - Greater Portland | (207) 518-7759 / https://www.thecleaningauthority.com/greater-portland (42 Mallett Dr, Freeport) | National franchise system (The Cleaning Authority Franchising SPE LLC) — excluded as franchise chain, even though the Freeport location is locally operated |
| Servpro Of Bath/Brunswick | (207) 956-0806 / servpro.com (28 Monument Pl, Topsham) | National franchise; damage restoration / post-construction focus, not regular residential house cleaning |
| Green Clean Maine | (207) 221-6600 / https://www.greencleanmaine.com/ | DEDUPE SKIP — already included in the Day-43 Portland wave-1 house-cleaning batch (same name and phone); it serves Freeport but was already captured tonight |
| Brunswick Key Cleaning Co. | https://www.brunswickkeycleaning.com/ (no phone published) | "Brunswick County" service routes — not Brunswick, ME; pre-opening (service beginning November 1, 2026) and no verifiable public phone |
| Live Better Home Care | (207) 720-0178 / https://www.livebettermaine.com/ (Brunswick) | Home health care / nursing service, not house cleaning |
| Mr. Suds | (207) 370-8831 (Brunswick) | Storefront laundromat — excluded as storefront-only, not in-home cleaning |
| As Remembered | (207) 837-7769 (19 Foreside Rd, Topsham) | Biological cleaning of stone/monuments and cemetery plot care — not house cleaning |
| Pine & Shine | (207) 713-7315 / https://pineandshineco.com/ | Lewiston-based; own site says primary focus is property management/commercial with only "select" residential projects — outside the Brunswick/Topsham/Freeport cell and residential not its confirmed core service |
| All-Stars Cleaning | (207) 200-8571 / http://www.allstarscleaningme.com/ | Based in Bridgton, ME — outside this cell and its named expansion ZIPs, despite HomeAdvisor pages saying it serves the Topsham area |
| LaBelle Cleaning | HomeAdvisor only | No verifiable public phone or own website found — only a HomeAdvisor lead-gen profile; excluded under the no-verifiable-phone rule |
| Homeaglow / Hello Cleaners | various | Lead-gen / marketplace platforms with no single local operator — excluded |

## Leads summary

2 published emails collected (see matching -leads.json):
1. Coastline Cleaning — info@coastlineme.com (own website)
2. Maine State Cleaning — Mainestatecleaning@gmail.com (own contact page)

High Standard Cleaning's email was NOT collected: its own site publishes two conflicting addresses, and guessing between them is not allowed. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 4 (2 in Brunswick 04011 + 2 in Freeport 04032 expansion)
- Listings: 4 (one per business)
- Email leads: 2
- Excluded / skipped: 11 entries above (including 1 dedupe skip)

## Coordinator insert decision (2026-11-24)
- Winships Cleaning Service was REMOVED before insert: no verifiable own website; service confirmed only from its Google listing, failing the own-materials gate. Inserted from this cell: 3.
