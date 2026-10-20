# Day 10 — Omaha, NE · ZIP 68106 · Deep cleaning

Cell researched 2026-10-20 (Day 10 run). Insert-ready: **4 businesses**, **2 leads**.
Category label "Deep cleaning" verified in js/data.js ("Top-to-bottom one-time cleans"). No ZIP expansion was needed to reach 3: 4 qualifying NEW businesses serve the 68106 cell (all market Omaha-wide from their own sites; Ringo Cleaning is itself addressed in adjacent ZIP 68105 at 2521 S 25th St, Omaha — noted here, service still recorded under the target cell). None of the businesses publishes a ZIP-code service list (service areas are stated as Omaha / Omaha and surrounding areas / Omaha metro), so service_zips = ["68106"] for every insert — no ZIPs were invented.
Dedupe: checked programmatically against /tmp/live-businesses.json (754 live rows) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (760 existing business names/phones combined) — no name or phone collisions for any insert, and no duplicates within the cell. The 14 Omaha cleaners already live from the Day 9 (68114) and Day 10 (68116) House cleaning cells — Daisy Fresh, Bright Delight Housekeeping, Pink Shoe Cleaning Crew, Cleaning Ninjas, Personal Housekeeping, Majestic Cleaning Omaha, Gopo Shine Cleaning Services, Lynch Residential Cleaning, Nebraska Elite Cleaning, Gourley Industries Cleaning Services, Huskins Services LLC, Adalyn's Cleaning, Neil's Cleaning Service, Stone Creek Cleaning Services LLC — were all skipped by name/phone; several of them (e.g. Adalyn's, Nebraska Elite, Huskins, Stone Creek) do offer deep cleans but are already in the directory, so they do not count here. Every business below is a NEW operator whose own materials explicitly list a deep-clean service.

## Insert-ready

### High confidence

1. **Sweeping Beauty Cleaning Omaha, LLC** — (402) 707-6937 — Deep cleaning — Omaha — https://www.sweepingbeautyomaha.com/
   - Own site: "Every home begins with an hourly initial deep clean, allowing us to give your space the time and attention it needs to reach our Clean Slate Standard"; "Rainbow Vacuum deep cleans — Every initial clean uses our allergy- and asthma-certified Rainbow Vacuum"; its Residential Cleaning section: "Deep cleans, recurring visits, and move-in/move-out care for homes of every size." Own site footer prints "Business: Sweeping Beauty Cleaning Omaha, LLC … Phone: +1-402-707-6937" and describes it as "Locally-Owned & Operated" offering "Local, high-quality residential and commercial cleaning and organization." Residential in-home deep cleaning confirmed on the business's own site.
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — phone and explicit residential deep-clean offer both verified on the business's own website.
   - Sources: https://www.sweepingbeautyomaha.com/

2. **Hautch Cleaning LLC** — (402) 281-2733 — Deep cleaning — Omaha — http://hautch.com/
   - Own site is titled "Expert Omaha House Cleaning & Deep Cleaning Services." Its services list has a distinct Deep Cleaning section: "Our deep clean goes beyond the standard cleaning and includes appliance cleaning, baseboard cleaning, grout cleaning, and all the areas that get missed during a standard clean," alongside Standard House Cleaning ("Great for maintaining your home between deep cleans"). Own site prints Contact Info "(402) 281 2733" and "Hautch Cleaning LLC, Serving Omaha and surrounding areas," and states "Based in Omaha, Nebraska." Residential in-home service confirmed on the business's own site.
   - Published email: hello@hautch.com — printed in the Contact Info block on its own website (http://hautch.com/). Lead recorded.
   - Confidence: High — phone, email, and distinct deep-clean service all verified on the business's own website.
   - Sources: http://hautch.com/

3. **Ringo Cleaning** — (402) 213-3371 — Deep cleaning — Omaha — http://www.ringocleaning.com/
   - Own site lists DEEP CLEANING as a distinct featured service: "If you need a deep cleaning for your home or business, contact us right now, we will create a pleasant and clean environment…"; About section: "We are a company that provides services in Residential and Commercial Carpet Cleaning, Regular Cleaning, Office and Retail Cleaning, in and around the city of Omaha, NE." Own site prints "(402) 213-3371" (twice) and address 2521 S 25th, Omaha NE 68105 (adjacent ZIP, Omaha-wide service). Residential in-home deep cleaning confirmed on the business's own site.
   - Published email: ringocleaningomaha@gmail.com — printed on its own website (http://www.ringocleaning.com/). Lead recorded.
   - Confidence: High — phone, email, and distinct deep-cleaning service all verified on the business's own website.
   - Sources: http://www.ringocleaning.com/ ; Google Business listing for Ringo Cleaning, Omaha (same phone).

4. **Maids & More** — (402) 572-6243 — Deep cleaning — Omaha — https://maidsandmore.com/deep-cleaning-near-me-omaha-ne/
   - Own site has a dedicated Deep Cleaning Services in Omaha NE page: "Maids & More offers high-quality deep cleaning services that deliver an exceptionally thorough house cleaning service"; its Deep Cleaning vs. Regular Cleaning section lists scrubbing grout and tile, cleaning inside appliances, washing baseboards and trim, removing dust from vents and fans, and sanitizing high-touch areas; "our one-time deep cleaning service is here to deliver a revitalized space." The page prints "call (402) 572-6243 to schedule your deep cleaning estimate today," address 2822 South 87th Street, Omaha, NE 68124, and describes it as "a locally owned and operated business." Residential in-home deep cleaning confirmed on the business's own site.
   - Published email: none found on the pages checked. No lead.
   - Confidence: High — phone and dedicated residential deep-cleaning service verified on the business's own website.
   - Sources: https://maidsandmore.com/deep-cleaning-near-me-omaha-ne/

## Leads (2)

- Hautch Cleaning LLC — hello@hautch.com — source: http://hautch.com/
- Ringo Cleaning — ringocleaningomaha@gmail.com — source: http://www.ringocleaning.com/

## Dedupe / exclusion notes

- **Already-live Omaha cleaners skipped (14)**: Daisy Fresh (402) 733-5570, Bright Delight Housekeeping (531) 541-5635, Pink Shoe Cleaning Crew (402) 330-0930, Cleaning Ninjas (402) 483-0333, Personal Housekeeping (402) 699-9620, Majestic Cleaning Omaha (402) 707-9759, Gopo Shine Cleaning Services (402) 813-0532, Lynch Residential Cleaning (402) 591-9595, Nebraska Elite Cleaning (402) 810-8689, Gourley Industries Cleaning Services (402) 612-5322, Huskins Services LLC (402) 981-5495, Adalyn's Cleaning (402) 885-4266, Neil's Cleaning Service (531) 721-5097, Stone Creek Cleaning Services LLC (402) 933-8657 — all already in the directory under House cleaning; excluded by name/phone dedupe even where their own sites also list deep cleans. No duplicates among the 4 inserts: all names/phones checked against the 754 live rows + 760 prospecting insert records with zero collisions, and all 4 are distinct within the cell.
- **Executive Cleaning Services, Inc.** (402) 503-3015 on its own site; a second number, (402) 571-2720, appears on its Google listing — own site fetched this run: it is a specialty cleaning company (windows, carpet & upholstery, air ducts, dryer vents, gutters, power washing, tile & grout, blinds, chandeliers, ice dam removal). No general top-to-bottom house deep-cleaning service is listed among its own services. Excluded on category fit.
- **Omaha Cleaning Connection** — Expertise/HomeAdvisor describe deep cleaning and maid service, but the operator's own materials found this run frame it as "your premier carpet and air duct cleaning company in Omaha, NE"; no business-owned website confirming a residential deep-clean service could be verified, and no verifiable own-site phone. Excluded.
- **Desired Cleaning Specialists** (402) 561-7716 — its homepage returned 404 again this run (same result as Day 9/Day 10 house-cleaning cells); no own materials confirming a deep-clean service could be verified. Excluded.
- **Will McDonald's Cleaning Services** (531) 772-5844 — its own website could not be fetched this run (same result as Day 9/Day 10); no deep-clean confirmation from its own materials. Excluded.
- **A Greener Cleaner LLC** (531) 346-5300 — its own website (agcllc402.com) could not be fetched this run (same result as Day 9/Day 10); phone is listing-only with no deep-clean confirmation from its own materials. Excluded.
- **Midwest Cleaning Company** (402) 819-7192 — its own website (midwestcleanco.com) could not be fetched this run, so no deep-clean confirmation from its own materials could be verified. Excluded.
- **Angie's Cleaning Experience** (402) 320-8067 — its own website could not be fetched this run, so no deep-clean confirmation from its own materials could be verified. Excluded.
- **Price Cleaning Services Omaha** (402) 575-9272 per Expertise) — addressed in ZIP 68106 and its sister-company page lists "Move In Out Deep Cleaning" and "Pre-Sale Deep House Cleaning," but no business-owned website with a verifiable phone and deep-clean offer could be confirmed this run (the maidserviceomaha.com link is carried on a junk-removal sister site). Excluded — plausible, lost to verification, not quality.
- **Clean It / The Clean Bees** — Thumbtack profile describes top-to-bottom deep cleaning, but it is a platform listing only with no business-owned website publishing a phone (Day 9 also found conflicting phones for this operator). Excluded.
- **Bio-One of Omaha** (402) 521-4301 — its "deep cleaning" page is biohazard/trauma-scene cleanup (blood, death, crime-scene), a different category, and a national franchise funnel. Excluded on category fit.
- **MHC Cleaning** — search result with "deep clean transformation" copy, but its own site gives a Boulder, CO address (4665 Nautilus Ct S, Boulder, CO 80301) and a (720) number — not an Omaha operator. Excluded on city fit.
- **National franchise location pages not counted tonight** — Merry Maids of Omaha (its Omaha page explicitly lists Deep Cleaning), The Cleaning Authority - East Omaha (explicit Deep Cleaning page), ecomaids of Greater Omaha (402) 603-6142, The Maids in Omaha (402) 558-8600, Molly Maid of Omaha, and SERVPRO locations (restoration-led). Independent locally owned operators were prioritized for this cell, following the Day 9/Day 10 Omaha pattern; the franchises were not judged on quality.
- **Commercial-only / janitorial-led / specialists** — Mint Maintenance, Big O Clean (janitorial), KB Building Services, Anago of Omaha, City Wide Facility Solutions - Omaha, Mega Cleaning Services LLC (contract janitorial), UNO Cleaning Omaha (janitorial-led), Cleaned Up (janitorial listing only, no own-site deep-clean verification), Cintas Facility Services, Ameritex Services (hospital/hotel laundry), Sparkling Klean / Sparkling Clean (Cedar Rapids, IA HQ). All excluded.

## Cell-result summary

NE × Omaha × 68106 × Deep cleaning: **4 insert-ready NEW businesses (4 High, 0 Medium), 2 email leads.** No ZIP expansion needed (Ringo Cleaning is addressed in adjacent 68105 and markets Omaha-wide — noted above). Thin notes: Omaha's independent cleaning scene was already heavily harvested by the 68114 and 68116 House cleaning cells — 14 operators are live — so this cell's yield is the remaining deep-clean specialists; four more locally owned operators were verified on their own websites, each with an explicit, distinct deep-clean service. Five plausible operators (Desired Cleaning Specialists, Will McDonald's Cleaning Services, A Greener Cleaner LLC, Midwest Cleaning Company, Angie's Cleaning Experience) were lost to unfetchable/404 own websites, one (Price Cleaning Services Omaha, in-ZIP 68106) to the lack of a verifiable own site, and the national franchises that explicitly serve 68106 with deep cleaning were left uncounted by design, per the prior Omaha pattern.

## Coordinator note (2026-10-20, at insert)
Maids & More (402) 572-6243 was ALSO researched into the Omaha 68134 House cleaning cell in the same wave. One business = one directory entry: it is inserted under House cleaning (its core service) and REMOVED from this cell's inserts file before posting. This cell's inserted count is therefore 3, not 4.
