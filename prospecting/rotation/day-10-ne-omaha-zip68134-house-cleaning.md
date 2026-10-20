# Day 10 — Omaha, NE · ZIP 68134 · House cleaning

Cell researched 2026-10-20 (Day 10 run). Insert-ready: **3 businesses**, **1 lead**.
Category label "House cleaning" verified in js/data.js. **Thin cell — reported honestly.** Omaha house cleaning was already swept twice (7 businesses for ZIP 68114 on Day 9, 7 more for ZIP 68116 on Day 10); all 14 known operators were skipped by name AND phone, and most remaining Omaha listings are franchises, commercial janitorial, window/carpet specialists, or operators already excluded in earlier cells for unverifiable phones or no residential confirmation from their own materials. Only 3 NEW operators qualified. No ZIP expansion was needed to reach these 3 — Grace Home Cleaning and Maids & More both market Omaha-wide including the northwest side (Elkhorn/Bennington testimonials and service lists), and Market Klean is based in Waterloo, immediately west of the 68134 corridor, serving Omaha & surrounding areas. None of the three publishes a ZIP-code service list, so service_zips = ["68134"] for every insert — no ZIPs were invented.
Dedupe: checked programmatically against /tmp/live-businesses.json (754 live rows) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ — no name or phone collisions for any insert, and no duplicates within the cell. The 14 already-live Omaha house cleaners (Daisy Fresh, Bright Delight Housekeeping, Pink Shoe Cleaning Crew, Cleaning Ninjas, Personal Housekeeping, Majestic Cleaning Omaha, Gopo Shine, Lynch Residential Cleaning, Nebraska Elite Cleaning, Gourley Industries, Huskins Services, Adalyn's Cleaning, Neil's Cleaning Service, Stone Creek Cleaning) were all skipped.

## Insert-ready

### High confidence

1. **Grace Home Cleaning** — (402) 769-0774 — House cleaning — Omaha — https://www.gracehomecleaning.com/
   - Own site's testimonials page: dozens of Omaha-area homeowners describe recurring in-home cleans ("clean our home every other week"-style recurring housekeeping, deep cleans before bringing a baby home, whole-house cleans), and the page states "We Proudly Service Omaha, Papillion, La Vista, Ralston, Bellevue, Gretna, Elkhorn, Bennington, Carter Lake (IA), Council Bluffs (IA)" — Elkhorn/Bennington are the northwest-Omaha communities adjoining 68134. The same page prints its address 5064 S. 107th St, Omaha, NE 68127 and phone (402) 769-0774; its own FAQ/policies pages repeat "call/text Grace Home Cleaning at (402) 769-0774" and describe its "Professional Home Cleaners" cleaning "your home." Phone agrees with its Google listing. Residential in-home service confirmed on the business's own site.
   - Published email: info@gracehomecleaning.com — printed on its own website's policies page ("please email us at info@gracehomecleaning.com"). Lead recorded. (The site also prints sales@gracehomecleaning.com on its FAQ pages; only one lead was recorded.)
   - Confidence: High — phone, email, and residential offer all verified on the business's own website.
   - Sources: https://www.gracehomecleaning.com/testimonials/ ; https://www.gracehomecleaning.com/our-policies-and-procedures/ ; Google Business listing for Grace Home Cleaning, Omaha.

2. **Maids & More** — (402) 572-6243 — House cleaning — Omaha — https://maidsandmore.com/
   - Own site: "Regular House Cleaning Services in Omaha — If you need someone to come in on a regular basis and clean your house from top to bottom… Maids & More in Omaha are the ones to call… weekly, bi-weekly or monthly housekeeping"; "Our house cleaning services extend throughout the Omaha metro area, including Elkhorn, Bellevue, Papillion, and Ralston." Own site prints "call (402) 572-6243" and address 2822 South 87th Street, Omaha, NE 68124. Its Google listing gives the same phone and describes it as family-owned and operated, serving Omaha homes for almost 20 years. Residential in-home service confirmed on the business's own site.
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — phone and residential house-cleaning offer verified on the business's own website, corroborated by its Google listing.
   - Sources: https://maidsandmore.com/ ; Google Business listing for Maids & More, Omaha.

### Medium confidence

3. **Market Klean** — (402) 657-3413 — House cleaning — Omaha — http://marketklean.org/
   - Google Business profile (401 Washington St, Waterloo, NE — immediately west of northwest Omaha) gives phone (402) 657-3413, website marketklean.org, categories Cleaning Service / In-Home Service, and the business's own description: "We serve Omaha & surrounding areas with professional, courteous & timely domestic house cleaning that works around your schedule." Its own website could not be fetched this run (network/DNS error), so residential confirmation rests on the business's own Google profile description — hence Medium, on the same basis as Gopo Shine in the Day 9 cell. Coordinator may veto if own-site confirmation is required.
   - Published email: none found. No lead.
   - Confidence: Medium — residential offer and phone both from the business's own Google Business profile; website itself was unreachable this run.
   - Sources: Google Business listing for Market Klean, Waterloo/Omaha; http://marketklean.org/ (unreachable at fetch time).

## Leads (1)

- Grace Home Cleaning — info@gracehomecleaning.com — source: https://www.gracehomecleaning.com/our-policies-and-procedures/

## Dedupe / exclusion notes

- **All 14 already-live Omaha house cleaners skipped** by name and phone (list in the header) — no existing operator was re-added under the new ZIP.
- **A Greener Cleaner LLC** (531) 346-5300 — own site (agcllc402.com) could not be fetched this run and no residential house-cleaning confirmation from its own materials could be verified. Excluded, as in the Day 9 cell.
- **Clear Cleaning** (402) 431-2137 — own site returned no extractable content this run; Google categories remain Home Improvement / Carpet Cleaner, not general house cleaning. Excluded, as in the Day 9 cell.
- **Desired Cleaning Specialists** (402) 561-7716 and **Will McDonald's Cleaning Services** (531) 772-5844 — no residential house-cleaning confirmation from their own materials verified this run. Excluded, as in the Day 9 cell.
- **Total Cleaning Solutions** (402) 350-1414 — own About page frames it as business/venue cleaning ("Committed to Keeping Your Business and Venues Clean"); no residential house-cleaning offer confirmed. Excluded.
- **Premier Cleaning Services, La Vista** — conflicting phones across sources ((402) 960-4490 vs (402) 960-4491) and listings center on duct/carpet work; identity/phone not cleanly verifiable. Excluded.
- **National franchises not counted** — The Maids in Omaha, Merry Maids of Omaha, Molly Maid of Omaha, The Cleaning Authority (already in the directory under another cell), ecomaids of Greater Omaha (its category pages funnel to a national 800 number), Two Maids (Bellevue location; already in the directory), JAN-PRO and Anago of Nebraska (commercial janitorial; Anago is itself addressed in 68134 at 5421 N 103rd St but is commercial-only). Consistent with the Day 9/Day 10 Omaha cells, locally owned independents were prioritized.
- **Commercial-only / specialists** — Delmich Office Cleaning, Mega Cleaning Services, Mint Maintenance, FBG, Cintas (janitorial); Linden Cleaning, Window Genie, Fish Window Cleaning (windows/gutters); AAA Carpet Cleaning, Mark's Carpet Cleaning, Premier Carpet Cleaning (carpet only). All excluded.

## Cell-result summary

NE × Omaha × 68134 × House cleaning: **3 insert-ready NEW businesses (2 High, 1 Medium), 1 email lead.** Thin by design: Omaha's independent house-cleaning scene was largely captured by the 68114 and 68116 cells (14 operators), and the honest remainder for the northwest cell is two verified independents plus one Medium-confidence operator whose own site was unreachable this run.
