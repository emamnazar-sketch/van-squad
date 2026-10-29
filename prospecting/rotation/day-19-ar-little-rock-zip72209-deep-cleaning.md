# Day 19 — AR, Little Rock, ZIP 72209, Deep cleaning

Researched 2026-10-29. Public information only; business's own website first, then Google Business / Yelp / Birdeye / Angi public listings. Category "Deep cleaning" verified in `js/data.js` (line 819).

## Result: 1 business qualifies (honest shortfall — see ZIP note)

### Included

1. **Marion Cleaning Services** — (501) 960-5705 — Little Rock, AR — https://marioncleaningservices.com/
   - Confidence: **Medium** — residential deep cleaning is confirmed in two business-published descriptions, but its own website is currently a parked "coming soon" page, so confirmation does not come from live site copy.
   - Evidence: its Google Business listing (6834 Cantrell Rd, Little Rock, AR) carries the business's own description: "Providing professional residential, apartment, AirBnb, move-out, office, and deep cleaning services. Licensed and insured." Its business-written Angi/HomeAdvisor profile says the same in its own words: "Whether you need a one-time deep clean, routine maintenance, or a move-in/move-out cleaning…" — deep cleaning of homes at the customer's home is explicit, not just standard cleaning.
   - Phone (501) 960-5705 is the local number published on its Google listing; no conflicting number was found anywhere. It is not a franchise, not commercial-only, and not a lead-gen listing (the business itself publishes the phone and description).
   - Caveat stated plainly: https://marioncleaningservices.com/ fetched 2026-10-29 returns only a Squarespace "Coming Soon / We're under construction" page — no phone, services, or email on the live site. The website URL itself is the one the business publishes on its Google listing.
   - No email is published by the business anywhere found → no lead.
   - Dedupe: name and phone absent from `day19-dedupe.txt`; grep of `~/workspace/van-squad/prospecting/` found the name only in two other Day-19 cells' *exclusion notes* (Benton 72015 — set aside there as Little Rock-based, i.e. this cell's city; Little Rock 72223 — set aside there as Angi-only, though its Google listing does publish the phone). It is in no inserts file. Not Cleaning Dino (680-3145) or V&E Superior (313-9180).

## Excluded (with reason)

- **Cleaning Dino** ((501) 680-3145) and **V&E Superior Cleaning** ((501) 313-9180) — both do offer deep cleans, but the brief excludes them: already in from Wave 1. Not repeated.
- **Clean Property Pros** ((501) 504-6123, 7512 Redwood Dr, Little Rock) — own site is junk hauling / trash removal only, not home deep cleaning.
- **ServiceMaster Twin Cities / ServiceMaster Clean** ((501) 290-4536, 6321 Forbing Road — inside 72209 itself) — national franchise, commercial cleaning only.
- **Merry Maids** (501) 427-4593, **Molly Maid of Greater Little Rock**, **Two Maids of Little Rock**, **CottageCare Little Rock** — national franchises.
- **Eliteness Cleaning Maid Service of Little Rock** ((501) 500-5313) — multi-state brand (GA, FL, TN, TX, SC, NC on its own contact page).
- **All Clean by Anabelle** — its Little Rock page is boilerplate; operator is Eirene Group, LLC with a Kansas (913) footer phone — multi-state expansion brand.
- **Diana's Cleaning Service** — conflicting phones, not guessed: (501) 500-0119 (own site About text + Google) vs. (501) 615-8299 (same site's contact footer); its own site also lists no explicit deep-cleaning service.
- **Amaze My Home** ((501) 779-5671, North Little Rock) — own site does list a "Deep Clean" option, but the business is North Little Rock by its own title and address — wrong city for this Little Rock cell.
- **Ro Ro Cleaning Service** ((501) 952-8793, North Little Rock) — own site is titled "Commercial Cleaning Services"; deep cleaning offered to businesses only, plus wrong city.
- **EJ's Cleaning Services** ((501) 951-1555, Little Rock) — own site: janitorial for companies and government agencies, commercial properties, multi-state (AR, LA, TX, MS, KY, TN).
- **Duty Calls Cleaning Services** ((501) 529-2011, Bryant) — own site is carpet / tile / upholstery / hardwood floor cleaning; no whole-home deep cleaning service, and Bryant-based.
- **Watson Cleaning Services Inc.** (Sherwood) — commercial-only on its own site, and three conflicting phones (888 toll-free, (501) 408-3698, (501) 834-1797).
- **Poly Adaptive LLC** ((501) 907-7117, Little Rock) — a NASA dust-shield nanotechnology company, not a cleaning service.
- **FBW Cleaning Services** — residential cleaning only for North Little Rock ZIPs 72130/72120, phone (470) 670-4514 (non-local).
- Commercial / janitorial only: Akins Janitorial Services, OJ's Commercial Cleaning, Pro-Styl Commercial Cleaning, D & B Janitorial, TLS Janitorial, 21CJS Janitorial, Stanley Steemer (franchise, carpet), Cintas (commercial facilities).
- Specialty, not house deep cleaning: McCruels Carpet & Floor Care, Revive (carpet/restoration), Ultra Clean of Arkansas (carpet, North Little Rock), BioClean Bins, A Perfect View (windows), SoMa Cleaners (dry cleaning).
- Listing-only names with no own website/materials confirming residential deep cleaning: So Fresh So Clean Cleaning Service, Martinez Sister cleaning services, Clean N Sharpe, Lpj cleaning services, Assembly-1 Cleaning Service, Blue Mule Professional Cleaning Systems, Union 24, A4GG Home Cleaning Services (NLR), BG cleaning service (NLR), Mr. Clean Services, Rangel Housecleaning (non-local 832 phone).
- Angi/HomeAdvisor-only, no verifiable public phone or own site outside the lead-gen platform: Katie's Southern Comfort Cleaning (profile does not claim deep cleaning), Holly's Spic n' Span Cleaning, DeeDee's Royal Cleaning (no explicit deep cleaning in its profile, no phone), Godeaux Glow, Avangeline Duhon (individual; profile does list deep cleaning but no business phone/site exists outside Angi).
- Lead-gen platforms themselves: Homeaglow, Angi/HomeAdvisor, Thumbtack.
- Toll-free only: Pro Cleaning, North Little Rock — (800) 735-5978.
- False hits surfaced by a Birdeye search, not Arkansas at all: Queen Bee Cleaning Service (Lincoln, NE and other states) and Cascade Fresh Cleaning Services (Grand Rapids, MI).

## Leads

None. No qualifying business publishes an email on its own site, contact page, or Google listing. (`-leads.json` is `[]`.)

## ZIP note

ZIP 72209 (southwest Little Rock) itself holds almost no independent residential deep-cleaning operators — inside the ZIP, the finds were a commercial franchise (ServiceMaster, Forbing Road) and Wave-1's already-included V&E Superior (Geyer Springs Rd). Per the brief, the cell was EXPANDED to adjacent Little Rock ZIPs (72204/72205/72207/72211/72212/72223) and the wider Little Rock city listings; the one qualifier, Marion Cleaning Services, is a Little Rock business (Cantrell Rd, 72207) that serves the city including 72209, so `service_zips` is ["72209"] (it publishes no ZIP list of its own). Adjacent metro towns (North Little Rock, Sherwood, Bryant, Benton, Maumelle) were also swept and produced no additional qualifier — their candidates were commercial-only, carpet/floor specialty, wrong-city, or non-local/conflicting phones. Even after full expansion only **1** business passes every gate; the Little Rock metro supply is dominated by national franchises, commercial janitorial firms, multi-state brands, and listing-only names. This cell is honestly short of the 3-business floor — no weak listing was padded in.
