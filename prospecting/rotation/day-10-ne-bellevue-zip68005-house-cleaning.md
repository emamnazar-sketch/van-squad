# Day 10 — Bellevue, NE · ZIP 68005 · House cleaning

Cell researched 2026-10-20 (Day 10 run). Insert-ready: **2 businesses**, **1 lead**.
Category label "House cleaning" verified in js/data.js. Bellevue (Omaha metro, Sarpy County) is NEW to the directory — no Bellevue businesses existed before tonight. This is an honestly thin cell: Bellevue's independent residential-cleaning scene is small, and most Omaha-wide operators serving Bellevue were already added in the Day 9 Omaha cell and today's Omaha cells, so they were deduped rather than re-added. Both insert-ready businesses are themselves addressed inside ZIP 68005 in Bellevue. No ZIP expansion was used: the only other Bellevue ZIP, 68123, was excluded per instructions (treated as Omaha), and no Papillion/La Vista business was imported because the cell requires Bellevue-based operators. Neither business publishes a ZIP-code service list (Three Sisters lists service-area city names only), so service_zips = ["68005"] for every insert — no ZIPs were invented.
Dedupe: checked programmatically against /tmp/live-businesses.json (754 live rows) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (753 existing business names/phones) — no name or phone collisions for either insert, and no duplicates within the cell.

## Insert-ready

### High confidence

1. **Darn Dependable Services** — (402) 496-8890 — House cleaning — Bellevue — https://darndependableservices.com/
   - Own site: "Currently, Darn Dependable Services employs approximately 10 people, and their offices are in Bellevue, Nebraska"; "Darn Dependable Services is a woman-owned local company… in business for over twenty-five years," with experience in "commercial, residential, and post-construction cleaning." Its dedicated RESIDENTIAL CLEANING section: "We offer all types of services including weekly, every other week or monthly cleaning and one time deep or Spring-cleaning." Own site prints its address and phone together in the footer: "802 Fort Crook Rd S Bellevue, NE 68005 (402) 496-8890" — the business is addressed inside the target ZIP itself. Phone agrees with its Google listing. Residential in-home service confirmed on the business's own site.
   - Published email: sseefus@darndependableservices.com — printed on its own website (https://darndependableservices.com/). Lead recorded.
   - Confidence: High — phone, email, Bellevue (68005) address, and residential offer all verified on the business's own website.
   - Sources: https://darndependableservices.com/ ; Google Business listing for Darn Dependable Services, Bellevue.

### Medium confidence

2. **Three Sisters Cleaning Services** — (402) 800-6143 — House cleaning — Bellevue — http://www.3sisterscleaningllc.com/
   - Own site is titled "Professional Cleaning Services in Omaha & Bellevue": "Three Sisters Cleaning Services LLC was founded on strong family values… a trusted name in Nebraska"; "We proudly serve families, homeowners, apartments, offices, and businesses with customized cleaning plans"; its services include a dedicated RESIDENTIAL CLEANING service ("Weekly, bi-weekly, or one-time. We treat your home like it's our own"), plus Deep Cleaning and Move In / Move Out. Own site prints "CENTRAL OFFICE 555 Corn Husker Rd Suite #103, Bellevue NE 68005" — addressed inside the target ZIP — and lists service areas by city name only (Omaha, Bellevue, Elkhorn, Papillion, Bennington, Gretna, La Vista and more — no ZIP list, so only 68005 recorded). Its Google Business profile lists the services House Cleaning / Apartment Cleaning / Standard cleaning and the phone (402) 800-6143 at the same Bellevue address. The phone could not be found in the text of its own (Wix) website this run, so the phone rests on the business's own Google profile — hence Medium. Coordinator may veto if own-site phone confirmation is required.
   - Published email: none found on the pages checked (site uses an inquiry form). No lead.
   - Confidence: Medium — residential offer and Bellevue 68005 central office verified on the business's own website; phone is from its own Google Business profile only.
   - Sources: http://www.3sisterscleaningllc.com/ ; Google Business listing for Three Sisters Cleaning Services, Bellevue.

## Leads (1)

- Darn Dependable Services — sseefus@darndependableservices.com — source: https://darndependableservices.com/

## Dedupe / exclusion notes

- **No duplicates among the inserts**: both names/phones checked against the 754 live rows and all 753 prior insert records with zero collisions, and the two are distinct within the cell.
- **Omaha-wide operators already in the directory — deduped, not re-added**: Bright Delight Housekeeping (its own site lists Bellevue among its service-area cities) and the other Day 9 / Day 10 Omaha house-cleaning businesses (Daisy Fresh, Pink Shoe Cleaning Crew, Cleaning Ninjas, Personal Housekeeping, Majestic Cleaning Omaha, Lynch Residential Cleaning, Nebraska Elite Cleaning, etc.) already carry Omaha cells; they were not counted again for Bellevue.
- **Two Maids (Bellevue location)** — (402) 953-0277, 7511 S 36th St Ste 10, Bellevue — national franchise location page (its own site gives the location address as Bellevue, NE 68147, outside the 68005 cell), AND the name "Two Maids" is already in the directory from the Day 4 Meridian, ID house-cleaning cell — same name = skip under the dedupe rule. Excluded on both grounds.
- **Jovita's Cleaning** — (402) 779-5962, 7019 S 28th St, Bellevue — its listed website, cleaningbellevuene.com, now serves an unrelated gambling site (domain compromised/hijacked at fetch time), so no residential confirmation from the business's own materials could be verified. Excluded.
- **Linden Cleaning Service** — (402) 393-0723, lindencleaning@gmail.com published on its own site — own site shows it is a window & gutter cleaning specialist ("Omaha Window & Gutter Cleaning… residential window cleaning and commercial window cleaning"), not a general house cleaning service. Excluded on category fit despite publishing an email (no lead recorded — leads are only kept for businesses in the cell).
- **Captain Clean** — (402) 515-4452, Bellevue — own materials offer carpet, upholstery, and air/dryer-vent cleaning only, not house cleaning. Excluded on category fit.
- **IZSAM** — (402) 431-2890, Bellevue — own site: "We do construction cleaning and final clean!… construction clean up and related cleaning services for every construction site, business, and institution"; also a franchise system. No residential house-cleaning offer. Excluded.
- **Perfect homes cleaning services Llc** — (402) 212-1387, Bellevue — Google listing only, no business-owned website or materials confirming residential house cleaning. Excluded.
- **Nataly cleaning** — Bellevue listing with an out-of-state (732) phone and no website or own materials. Excluded.
- **Brand New Day Cleaning Service / All Day Cleaning / Yeily's Cleaning Service** — HomeAdvisor/Angi profiles only ("Serving Bellevue"), no business-owned website materials and no verifiable public phone outside the lead-gen platform. Excluded as lead-gen-only.
- **Commercial-only / restoration** — Select Commercial Cleaning and Anytime Commercial Cleaning (janitorial), All United Building Maintenance (commercial facilities), SERVPRO of Omaha Northeast / SERVPRO of Downtown Omaha, Sarpy County and Omaha East (fire/water restoration franchises, Bellevue address but not house cleaning), ServiceMaster Clean (commercial/medical). All excluded.
- **National franchises / platforms not counted** — Merry Maids (serving Bellevue), ecomaids of Greater Omaha (Omaha-based, already noted uncounted in Day 9), Homeaglow (cleaner marketplace platform). Excluded per the standing pattern.

## Cell-result summary

NE × Bellevue × 68005 × House cleaning: **2 insert-ready NEW businesses (1 High, 1 Medium), 1 email lead.** Thin notes: Bellevue is genuinely thin for independent, Bellevue-based residential cleaners with their own materials — only two operators are both addressed inside 68005 and verifiable; one further Bellevue operator (Jovita's) was lost to a hijacked website domain, two specialists (Linden, Captain Clean) failed category fit, the Bellevue franchise location (Two Maids) was blocked by the same-name dedupe rule, and every Omaha-wide cleaner serving Bellevue was already in the directory from the Omaha cells. No expansion into 68123 (Omaha) was made, per instructions.
