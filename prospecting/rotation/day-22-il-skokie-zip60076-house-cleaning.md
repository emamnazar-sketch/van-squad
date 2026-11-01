# Day 22 — Illinois — Skokie — ZIP 60076 — House cleaning

- Date: 2026-11-01
- Cell: IL / Skokie / 60076 / "House cleaning"
- Sources: each business's own website first (fetched and read 2026-11-01), cross-checked against Google Business listing data returned in search results and Houzz for Ravinia Maid Service. No phone, email, ZIP, or service claim was taken from a source that did not publish it.
- Result: 5 qualifying businesses. Two sit in adjacent Skokie ZIP 60077 on the same Main St corridor (see ZIP note) — the cell was not expanded beyond Skokie.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Skokie Maid and Cleaning Services | (847) 679-8548 | House cleaning | Skokie | http://www.skokiemaid.com/ | info@skokiemaid.com — http://www.skokiemaid.com/ | High — own site: "Residential Cleaning… house cleaning services", "CALL 847-679-8548", address 4836 W Main #201, Skokie, IL 60077, email on the page; cleaners are delivered to the customer's home | Own website; Google listing (4836 Main St, Skokie) |
| Ravinia Maid Service | (847) 679-0732 | House cleaning | Skokie | http://www.raviniamaid.com/ | None published — no lead recorded | High — own site: "Affordable maid delivered to your house", "CALL US 847-679-0732", home cleaning in Chicagoland for 25 years; Houzz profile lists House Cleaning, Skokie, IL 60077, same phone | Own website; Houzz profile; Google listing (4836 Main St #2594, Skokie) |
| The Green Maid, Inc. | (847) 329-8686 | House cleaning | Skokie | http://www.greenmaidinc.com/ | None published — no lead recorded | High — own site: "located in Skokie IL, established in 2007", residential services (Essentials, Move In/Move Out, Spring Cleaning), "Local Number: 847 329-8686" matching its Google listing | Own website; Google listing (8140 N McCormick Blvd, Skokie) |
| Merry Maids of Evanston & Skokie | (847) 449-6941 | House cleaning | Skokie | https://merrymaids.com/home-cleaners-skokie-il | None published — no lead recorded | High — own Skokie page: "Merry Maids of Skokie, 3356 Main Street, Skokie, IL 60076. 8474496941", professional house cleaning in customers' homes, independently owned and operated franchise | Own local website page; Google listing (3356 Main St, Skokie) |
| Molly Maid of Chicago North Shore | (847) 973-7343 | House cleaning | Skokie | https://www.mollymaid.com/locations/nw-chicago-nw-suburbs/?cid=LSTL_MLY000192 | None published — no lead recorded | High — Google listing at 3843 Oakton St, Skokie, with local phone; its own listing description says "Locally owned and operated… earning trust in Skokie for over 40 years" with free in-home estimates (franchise with a verified local operator phone) | Google Business listing; business's own location page (direct fetch blocked by tooling policy, listing data used) |

## Dedupe

- Live DB (vs_rest.py): phone lookup for all 5 phones returned `[]` (HTTP 200) — (847) 679-8548, (847) 679-0732, (847) 329-8686, (847) 449-6941, (847) 973-7343, plus the alternate Merry Maids number (847) 449-6950 — no existing business carries any of these numbers. Name lookups (ilike) for "Skokie Maid", "Ravinia Maid", "Merry Maids of Evanston", "Molly Maid of Chicago" also returned `[]`. The "Green Maid" name lookup returned only "Seattle Green Maids" (206) 736-4650 — a different business in a different state, not a duplicate.
- Prospecting files: grep of all files in ~/workspace/van-squad/prospecting/ for each candidate phone (679-8548, 679-0732, 329-8686, 449-6941, 449-6950, 973-7343) — zero matches. Grep for "Skokie Maid" and "Ravinia" — zero matches. Generic brand words "Merry Maids" / "Molly Maid" appear in other states' files for different franchise locations with different phones — different local businesses, not duplicates (same treatment as the Evanston batch).
- Known dupe excluded as instructed: Fresh Tech Maid (847) 392-0888 — already in tonight's Evanston batch (day-22-il-evanston-zip60201-house-cleaning); its own site also markets an "Evanston & Skokie" area, but it was NOT included here.
- Duplicate caught in tonight's files: Detailed Cleaning (224) 422-6095 — real house cleaner whose own site lists Skokie as a service area, but it is already in tonight's Chicago 60614 batch (day-22-il-chicago-zip60614-house-cleaning) — skipped here.
- No other business was skipped as a duplicate.
- Phone conflict noticed (resolved): Merry Maids' Google listing shows (847) 449-6950, but its own Skokie page gives 847.449.6941 twice, including in the address line "Merry Maids of Skokie, 3356 Main Street, Skokie, IL 60076. 8474496941" — the own-site local number was used, per the own-site-first rule (the page's 888.894.6174 is a national number and was not used).
- Related-premises note: Skokie Maid and Ravinia Maid Service share the 4836 Main St, Skokie premises and similar site copy, but they are separately listed businesses with distinct names, distinct phones ((847) 679-8548 vs (847) 679-0732), and distinct websites — both were kept, flagged here for the coordinator.

## Excluded (checked, failed a gate)

- Fresh Tech Maid — (847) 392-0888: duplicate of tonight's Evanston batch (see Dedupe) — excluded on the coordinator's explicit instruction.
- Detailed Cleaning — (224) 422-6095: duplicate of tonight's Chicago 60614 batch (see Dedupe) — excluded.
- The Maids in Northshore / The Maids Skokie page: the Skokie service page routes to the same Northshore office already inserted in tonight's Evanston batch as "The Maids in Northshore" (847) 328-0079, and the Skokie page itself publishes only the national 1-800-843-6243 number — duplicate operator + toll-free-only on the page — excluded.
- Karen's Green Maids — (773) 538-3031: Chicago-based operator (1309 W Fillmore St / 18 S Michigan Ave, Chicago) running templated per-city SEO pages; no Skokie address or verifiable Skokie-local operator — failed the local-operator gate (same business excluded in the Evanston batch).
- Maid Right of Evanston — (224) 651-8380: Evanston-named franchise with a Chicago address (400 N. McClung Court, Chicago, IL 60611) serving Skokie via a service-area page — not a Skokie business, out of this cell.
- Sparkly Maid Of North Shore — (224) 600-5487: Chicago-based (1536 West Fargo Avenue, Chicago, IL 60626) with a Skokie service-area page — not a Skokie business, out of this cell.
- Ruby Chicago Cleaning / Ruby Shines Chicago Cleaning Company — (847) 845-3759, 8400 Crawford Ave, Skokie: no website or own materials found confirming residential house cleaning (Google listing only, secondary category Janitorial Service) — insufficient verification.
- Crisof cleaning Services — (224) 488-7718, 8225 Knox Ave, Skokie: no website or own materials confirming residential house cleaning — insufficient verification.
- Clean Max Services Inc — (847) 763-9750, 5335 Galitz St, Skokie: no website; own description is generic "Quality Chicago Professional Cleaning Services" with a Janitorial Service category — residential house cleaning could not be confirmed from the business's own materials.
- SED Commercial Cleaning Services — (224) 348-7172, Skokie: commercial janitorial by name and category — excluded (commercial-janitorial-only).
- Homeaglow, TIDY-style platforms: national matching/lead-gen platforms with no local operator phone — excluded.
- Chem-Dry by Jeff (carpet cleaning), Nici Carpet Cleaning (carpet/rug only), American Home Power Wash (pressure washing), MDF Air Duct Cleaning (duct cleaning), Servpro of Winnetka/Wilmette/Skokie and PuroClean of Evanston (restoration, not house cleaning), Oil Eater (cleaning products manufacturer): wrong service or storefront/product businesses — excluded.

## ZIP note

ZIP 60076 is the anchor: Merry Maids of Evanston & Skokie publishes its own address as 3356 Main Street, Skokie, IL 60076 on its Skokie page, and the Molly Maid and Green Maid listings are Skokie addresses in the 60076 side of the village. Two included businesses — Skokie Maid (own site: 4836 W Main #201, Skokie, IL 60077) and Ravinia Maid Service (Houzz: Skokie, IL 60077) — sit in adjacent Skokie ZIP 60077 on the same Main St corridor, still inside Skokie; the cell therefore includes both Skokie ZIPs and did not expand to any other city. service_zips follow each business's own published address: the two 60077-based businesses carry ["60076", "60077"], the rest carry only "60076" — no ZIP was invented for any business, and no business published a wider ZIP list of its own.
