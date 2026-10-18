# Day 07 — Hobbs, NM × ZIP 88240 × House cleaning

Researched fully 2026-10-18. Hobbs is a small market — honest yield is **2 qualifying businesses**. No ZIP expansion taken: adjacent 88242 (north Hobbs) was swept and produced no additional verifiable qualifier (its only candidate, Endless Clean LLC, is unconfirmable for house cleaning — see Exclusions). Nothing was padded.

## Included businesses

| Name | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Premium Cleaning Services LLC | (575) 390-9093 | House cleaning | Hobbs | http://premiumcleaningservicenm.com/ | services@premiumcleaningservicenm.com (own site CONTACT US section) — also publishes premiumcleaning.nm@gmail.com | **High** — own site confirms residential house cleaning in its own words ("Professional cleaning services tailored to your home", General Cleaning / Deep Cleaning / Move In-Move Out, "500+ Homes Cleaned", "TRUSTED BY HOMEOWNERS & BUSINESS IN HOBBS, NM") and prints its phone and address (212 East Dunnam Street, Hobbs, NM 88240-5838) in its own footer | Business's own website + Google listing (agrees on name/phone/address) |
| Community Maintenance LLC | (575) 393-6572 | House cleaning | Hobbs | https://hobbscleaningservice.com/ | none | **Medium** — own website prints the phone and its Hobbs 88240 address (110 W Taylor St); its own Google Business description lists "Maid services" (= house cleaning) among its services, though the company is primarily carpet/janitorial, so Medium | Business's own website (phone/address) + its own Google Business profile description (maid services) |

Notes:
- service_zips = ["88240"] for both. Premium Cleaning Services names its service areas by city only (Hobbs, Lovington, Eunice, Seminole) and publishes no ZIP list; Community Maintenance publishes no ZIP list. No ZIPs invented.
- Premium Cleaning Services LLC publishes TWO business emails on its own site (services@premiumcleaningservicenm.com and premiumcleaning.nm@gmail.com, both in its CONTACT US section). The leads file carries the own-domain address; the Gmail is recorded here.
- Data quirk noted for the coordinator: the Google listing for All American Cleaners (a dry cleaner, 201 W Dunnam St) shows the same phone, (575) 393-6572, as Community Maintenance. Community Maintenance's number is confirmed on its OWN website's contact section, so own-source wins; the dry cleaner is excluded on category regardless.

## Leads (1)

| Business | Email | Source URL | City | Category |
|---|---|---|---|---|
| Premium Cleaning Services LLC | services@premiumcleaningservicenm.com | http://premiumcleaningservicenm.com/ | Hobbs | House cleaning |

Community Maintenance publishes no email on its own site — no lead.

## Exclusions (14 entries)

1. **Happy Housekeepers (Hobbs Google listing, 1706 N Dal Paso St, (575) 393-7997)** — excluded on TWO grounds: (a) the name "Happy Housekeepers" is already in the live directory (a Boise, ID business, (208) 378-8700, inserted Day 4) — same-name dedupe rule; (b) the website on its Hobbs listing, thehappyhousekeepers.com, belongs to an unrelated Roanoke, VA company ((540) 774-4299, Starkey Rd, Roanoke) — the Hobbs operator has no verifiable materials of its own.
2. **Endless Clean LLC (3405 N Grimes St A, (575) 605-4766)** — Facebook-only presence; its Google category is the generic "Cleaning Service" and no public source in its own words confirms house cleaning (residential) work. Unverifiable for this category.
3. **SERVPRO of Carlsbad, Hobbs** — restoration/specialty-cleaning franchise (fire/water cleanup, packout), not regular house cleaning; excluded per standing precedent.
4. **Homeaglow (Hobbs page)** — national lead-gen platform, no local operator; excluded by rule.
5. **Handy (maid service page)** — national lead-gen platform; excluded by rule.
6. **You Bet You Glass (1906 N Dal Paso St, (575) 392-0628)** — window cleaning / pressure washing / house washing specialist, not house cleaning.
7. **Reliable Floor Care Plus (221 W Sanger St, (575) 942-2303)** — carpet/upholstery/tile specialist per its own site; no house cleaning.
8. **Dyna Clene (1526 N Denson Dr, (575) 318-6107)** — carpet/floor cleaning specialist per its own site; no house cleaning.
9. **J & M Mobile Pressure Wash (1416 N San Mateo Dr, (575) 964-5044)** — pressure washing only.
10. **UniFirst Facility Services (3015 W Marland Blvd)** — national commercial facility/janitorial chain, no residential house cleaning.
11. **Westwood Chimney Sweep and Air Duct Cleaning (917 W Iron Ave, (575) 749-1907)** — chimney/air-duct specialist.
12. **Dal Paso Laundry / Wash Away Laundry / Parkway Cleaners / All American Cleaners** — laundromats and dry-cleaner storefronts, not house cleaning.
13. **Care-A-Van (217 N Shipp St)** — home health care / veterinary services, not cleaning.
14. **Walmart Home Services (3800 N Lovington Hwy)** — big-box retail platform listing, not a local cleaning operator.

Also checked: no Merry Maids, Molly Maid, MaidPro, or Two Maids location exists in Hobbs (nearest Merry Maids are Santa Fe and Albuquerque, handled in their own cells).

## Dedupe

- All candidate names and phones grepped against every file in ~/workspace/van-squad/prospecting/ — no matches for the two included businesses (the only name hit anywhere was the unrelated Boise "Happy Housekeepers," handled above).
- Live directory checked via the public REST endpoint (518 businesses): neither included name nor any of the four candidate phones ((575) 393-6572, (575) 393-7997, (575) 390-9093, (575) 605-4766) appears. "Happy Housekeepers" exists only as the Boise business with phone (208) 378-8700.

## Totals

- Businesses found: **2** (1 High, 1 Medium)
- Leads: **1**
- Exclusions: **14 entries**
- ZIP expansion: **No** — 88242 swept, no additional verifiable qualifiers; honest shortfall reported rather than padded.
