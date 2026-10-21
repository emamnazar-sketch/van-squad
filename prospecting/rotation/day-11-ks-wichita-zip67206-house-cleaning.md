# Day 11 — Wichita, KS · ZIP 67206 · House cleaning

Cell researched 2026-10-21 (Day 11 run). Insert-ready: **5 businesses**, **2 leads**.
Category label "House cleaning" verified in ~/workspace/van-squad/js/data.js (line 478).
No ZIP expansion needed — 5 qualifying Wichita operators serve 67206. None of the five publishes a ZIP-code service list (they list service areas by city name / radius only), so service_zips = ["67206"] for every insert — no ZIPs were invented.
Dedupe: checked against the live DB via vs_rest.py (795 active rows) AND grep of every file under ~/workspace/van-squad/prospecting/ — no name or phone collisions for any insert (no 316-area-code businesses existed in the DB before tonight), and no duplicates within the cell.

## Insert-ready

### High confidence

1. **Green Clean ICT** — (316) 727-6582 — House cleaning — Wichita — https://www.greencleanict.com/
   - Own site: "Professional Facility Janitorial & Residential Cleaning in Wichita, KS — Locally owned cleaning services for homes, offices, and commercial facilities"; "specializing in comprehensive residential and commercial cleaning within a 30-mile radius of Wichita, KS"; dedicated Residential Cleaning Services section (Regular Cleaning, One-Time, Move-In/Move-Out, Apartment Cleaning, Housekeeping room-by-room). Own site footer: "Green Clean ICT, 6446 East Central Avenue, Wichita, Kansas 67206. 316-727-6582" — the business is addressed inside the target ZIP itself. Phone on own site.
   - Published email: info@greencleanict.com — printed on its own website (https://www.greencleanict.com/). Lead recorded.
   - Confidence: High — phone, email, 67206 address, and residential offer all verified on the business's own website.
   - Sources: https://www.greencleanict.com/ ; Google Business listing for Green Clean ICT, Wichita.

2. **Jenny Maids** — (316) 210-1900 — House cleaning — Wichita — https://jennymaidsict.com/
   - Own site: "Jenny Maids provides professional house cleaning in Wichita, KS and surrounding areas including Andover, Augusta, Goddard, Derby, Maize, Park City, Valley Center…"; offers basic, deep, spring/fall, recurring (weekly/bi-weekly/monthly) cleaning; "We bring the supplies and tools"; contact page on own site prints phone (316) 210-1900. Google description: "Locally owned and trusted in Wichita for nearly 18 years! Jenny Maid's provides thorough house cleaning and disinfecting for homes throughout Wichita and surrounding areas."
   - Published email: hellojennymaids@gmail.com — printed on its own website contact section (https://jennymaidsict.com/). Lead recorded.
   - Confidence: High — phone, email, and residential house-cleaning offer all verified on the business's own website.
   - Sources: https://jennymaidsict.com/ ; Google Business listing for Jenny Maids, Wichita.

3. **Margaret McHenry Maids** — (316) 612-9300 — House cleaning — Wichita — http://margaretmchenrymaids.com/
   - Own site: "Margaret McHenry Maids is the leading provider of luxury house cleaning services in the Wichita, Kansas, area. Since our inception more than 20 years ago…"; "Contact Margaret McHenry Maids at (316) 612-9300"; corporate office 1200 E Central, Wichita, KS 67214. Google description: "an in-home cleaning service offering a variety of services." In-home residential service confirmed on own materials.
   - Published email: none found on the pages checked (site uses an estimate-request form). No lead.
   - Confidence: High — phone and luxury house-cleaning offer verified on the business's own website; Wichita-based.
   - Sources: http://margaretmchenrymaids.com/ ; Google Business listing for Margaret McHenry Maids, Wichita.

4. **Shine Bright Cleaning Services** — (316) 665-0326 — House cleaning — Wichita — https://shinebrightcs.com/
   - Own site: "Wichita's Leading Cleaning Service — Setting the Standard in Residential and Commercial Cleaning — Call us for a job quote: (316) 665-0326 — Serving the greater Wichita area…"; "Locally owned and operated"; dedicated "Residential Cleaning Services in Wichita" section: "Our residential cleaning service brings the mop and duster to you… keep your home sparkling clean." Phone repeated in own-site footer.
   - Published email: none recorded — the own site's Email Us link was masked in the fetched text, so no address was guessed. No lead.
   - Confidence: High — phone and residential offer verified on the business's own website; locally owned Wichita-area operator.
   - Sources: https://shinebrightcs.com/ ; Google Business listing for Shine Bright Cleaning Services, Wichita (737 Deer Haven Ct, Wichita).

5. **TJ's Pro Cleaners** — (316) 719-9618 — House cleaning — Wichita — https://tjproclean.com/
   - Own site: "TJ's Pro Cleaners provides professional, all-inclusive cleaning services for homes and businesses throughout Wichita and surrounding communities"; dedicated Residential Cleaning section ("Whether you need recurring service or a one-time deep clean, we help keep your home clean… move-in and move-out cleaning"); "We're locally owned and operated, and we've spent over 25 years building a reputation… in Wichita, KS"; "Call for Service Today (316) 719-9618" and footer "Call or Text: (316) 719-9618" on own site. Service area listed by city name only (greater Wichita incl. Valley Center, Andover, Derby, Maize — no ZIP list, so only 67206 recorded).
   - Published email: none found on the pages checked (site uses a quote/contact form). No lead.
   - Confidence: High — phone and residential offer verified on the business's own website; locally owned.
   - Sources: https://tjproclean.com/

## Leads (2)

- Green Clean ICT — info@greencleanict.com — source: https://www.greencleanict.com/
- Jenny Maids — hellojennymaids@gmail.com — source: https://jennymaidsict.com/

## Dedupe / exclusion notes

- **No duplicates among the inserts**: all five names/phones checked against the 795 live DB rows and all prior prospecting files with zero collisions, and all five are distinct within the cell.
- **AJS Pro Cleaning** — (316) 550-1599, 8406 E Harry St, Wichita, website ajsprocleaning.com/contact — its contact page could not be fetched this run, so no residential house-cleaning confirmation from the business's own materials could be verified. Excluded (unverified, not counted).
- **Molly Maid of Greater Wichita / Two Maids / Merry Maids-type franchises** — national franchise systems. Excluded per standing pattern.
- **ServiceMaster Quality Cleaning Wichita, City Wide Facility Solutions, Ramco Building Maintenance, McPherson Building Maintenance, Let's Fog, C & C Maintenance, D & A Services** — commercial/janitorial/restoration-focused on their own materials, no general residential house-cleaning offer verified. Excluded on category fit.
- **Christian Cleaning & Restoration** — restoration/janitorial focus. Excluded on category fit.
- **Ultra Clean Carpet Cleaning, Snow White Carpet Cleaning, AJS Carpet and Tile** — carpet-only specialists, not house cleaning. Excluded.
- **Declutter For Me** — (316) 330-7600 — decluttering/organizing service, not house cleaning. Excluded on category fit.
- **Neat Freaks, Wichita Cleaning Services, We Got This Cleaning Service, Oasis Cleaning, Three Maids and A Mop** — Google/meta listings only, no business-owned website/materials confirming residential service found this run. Excluded.
- **Moms Against Cleaning (Andover), The Perfect Clean (Andover, possibly temporarily closed)** — Andover-based, outside the Wichita cell focus; not needed, cell already reached 5. Not counted.

## Cell-result summary

KS × Wichita × 67206 × House cleaning: **5 insert-ready NEW businesses (5 High, 0 Medium), 2 email leads.** One business (Green Clean ICT) is addressed inside 67206 itself; the other four are Wichita-based / Wichita-serving local operators with residential cleaning confirmed on their own websites and phones on their own sites. No ZIP expansion was used.
