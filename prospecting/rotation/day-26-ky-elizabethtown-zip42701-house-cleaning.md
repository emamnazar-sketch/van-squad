# Day 26 — Kentucky | Elizabethtown | ZIP 42701 | House cleaning

Cell: KY / Elizabethtown / 42701 / "House cleaning" (exact label verified in js/data.js). Elizabethtown is a smaller market: 4 qualifying businesses found, all serving 42701 itself — no adjacent-ZIP expansion was needed and no weak listings were padded in. Every business was verified from its own website first (residential house cleaning at customers' homes), then deduped against ~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json (2,217 rows) and a grep of ~/workspace/van-squad/prospecting/ (including tonight's Day-26 files) — no name or phone matches for any included business (one near-name in Fort Worth, TX checked and cleared, noted below).

## Included (4)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| A Maidmasters | (270) 763-1287 | House cleaning | Elizabethtown | http://amaidmastershardincounty.com/ | None published (phone only on site) | High — locally-owned; own site: "Cleaning services for your home and office", "reliable, professional residential and commercial cleaning services", "$85 for house cleaning", "our service areas include Elizabethtown and Hodgenville", phone 270-763-1287 printed on the site; KY Secretary of State filing places Maid Masters, LLC at 131 Cecilianna Drive, Elizabethtown, KY 42701 | http://amaidmastershardincounty.com/ | No DB/prospecting match on name or phone. Near-name "Maid Masters TX" (Fort Worth, TX, (817) 609-7374) in Day-13 prospecting is a different business in a different state. Site names Elizabethtown + Hodgenville as service areas but publishes no ZIP list, so service_zips = [42701] |
| Mighty Mess Maid | (270) 370-2121 | House cleaning | Elizabethtown | http://www.mightymessmaids.com/ | None published on own site | Medium — own site: "set out to clean as many homes in Elizabethtown as I could", "Standard House or office cleaning" (recurring upkeep), deep cleaning / move-in-out for homes, a loyal bi-weekly home client in its reviews; phone is on its Google Business listing (514 Stewart St, Elizabethtown) but was not in the fetched own-site text, hence Medium | http://www.mightymessmaids.com/ | No DB/prospecting match on name or phone. Based in target ZIP itself per its listing address. service_zips = [42701] |
| Clarks Cleaners LLC | (270) 300-5019 | House cleaning | Elizabethtown | https://clarkscleanersllc.com/ | None published (contact form only) | Medium — small locally-owned business "started right here in Elizabethtown, Kentucky"; own site has a Residential Services section and says it can "tackle most any cleaning needs from commercial to residential", phone +12703005019 on the site; BBB profile (A+) categorizes it under House Cleaning and gives its address as 82 Deforest Ct, Elizabethtown, KY 42701-5372; marked Medium because its detailed residential menu leans specialty (carpet, hard floor, fogging) rather than standard whole-house cleaning | https://clarkscleanersllc.com/ | No DB/prospecting match on name or phone. Based in target ZIP itself. service_zips = [42701] |
| Round The Clock Kleaning | (270) 312-1908 | House cleaning | Elizabethtown | https://www.round-the-clock-kleaning.com/ | None published on own site | Medium — own site: "We provide Residential Kleaning services for all types of homes. Our services range from one-time deep clean to regular maintenance kleaning", "the best professional… kleaning services in the Elizabethtown, KY area", FAQ "We service Elizabethtown, KY and the surrounding areas", location given as Elizabethtown, KY, USA; phone is on its Google Business listing but was not in the fetched own-site text, hence Medium | https://www.round-the-clock-kleaning.com/ | No DB/prospecting match on name or phone. Its listing address is on Leitchfield Rd in neighboring Cecilia, KY, while its own site states Elizabethtown service/location — no ZIP list published, so service_zips = [42701] |

## Exclusions

- **Guardian Cleaners LLC ((270) 307-4589)** — EXCLUDED: commercial-only — own site states "Guardian Cleaners LLC is a local commercial cleaning company" serving commercial customers; no residential house cleaning.
- **Office Pride Commercial Cleaning Services ((270) 321-3556)** — EXCLUDED: commercial janitorial / office cleaning only.
- **Stanley Steemer of Elizabethtown ((270) 769-0257)** — EXCLUDED: carpet, upholstery and air-duct cleaning specialty only — not house cleaning; national chain location.
- **The Cleanin' Queenz ((270) 246-2246)** — EXCLUDED: location unconfirmed — its own UENI page titles itself "Domestic Cleaner in Brownsville" while its Google listing places it in Elizabethtown; conflicting location signals, and its testimonials date to 2019.
- **3 Of J's ((502) 365-6779 per Expertise.com)** — EXCLUDED: no verifiable own website found; home cleaning confirmed only by an aggregator (Expertise.com) listing, not from the business's own materials.
- **Mmm'Kays Cleaning Services & More ((270) 801-3773)** — EXCLUDED for this cell: based in Hudson, KY; its own site lists service only at county level (Hardin County among five counties) with no Elizabethtown-specific confirmation, and its own address line carries a garbled ZIP.
- **Maid for the Job ((270) 320-3274), AmbersAlwaysCleaning ((270) 401-8931), We Move & We Clean Industry ((270) 312-8741)** — EXCLUDED: no verifiable own website found; residential house cleaning not confirmed from their own materials (listing-only / janitorial signals).
- **Serenity Shine Cleaning, LLC** — EXCLUDED: profile exists only inside the Homeaglow platform; no own website and no public phone outside the lead-gen platform.
- **Leaving It Spotless Cleaning Services, LLC** — EXCLUDED: found only as a Kentucky Secretary of State registration (803 Paddy Ct, Elizabethtown, KY 42701); no public phone or website found.
- **Homeaglow and Maid 2 Clean** — EXCLUDED: cleaner-matching / lead-generation agencies, not local operators with their own local phone and site.

## Leads

0 published emails collected (see matching -leads.json): none of the 4 included businesses publishes a business email on its own website or listing (contact forms / phone only). Emails are leads only — never written to business profiles.

## Files

- day-26-ky-elizabethtown-zip42701-house-cleaning-inserts.json — 4 businesses + 4 listings, exact coordinator shape.
- day-26-ky-elizabethtown-zip42701-house-cleaning-leads.json — 0 leads (empty array).
