# Rotation Day 6 — Wyoming: Casper × House cleaning × ZIP 82604

- Researched: 2026-10-18 (Day 6)
- Cell: Casper, WY 82604 (west Casper). House cleaning is done inside the customer's home by definition, so in-home service is the business model itself; each entry was confirmed from the business's own materials to clean residences in Casper.
- ZIP note: Only ONE qualifying business is addressed in 82604 itself (Blessings & Brooms LLC, 6943 Columbia River Rd per its Google listing). The other two are Casper-area operators addressed in adjacent Casper-area ZIPs (AA Super Klean in 82609 on its own site; Time To Shine in Bar Nunn, just north of Casper) whose own materials confirm Casper-wide residential service that includes 82604. This is the same adjacent-address pattern used in prior thin cells — no expansion beyond Casper was needed, and the batch reaches the 3-business floor. Casper is a small market (~58k) dominated by commercial janitorial, carpet-only, and window-only firms.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| AA Super Klean | (307) 237-0750 | House cleaning | Casper | https://www.aasuperklean.com/ | aasuper@aasuperklean.com — https://www.aasuperklean.com/ (business's own website, "EMAIL US" block, shown as AASUPER@AASUPERKLEAN.COM) | High — own site: "apartment & house cleaning" and "we now clean homes from top to bottom," Areas Covered lists Casper, and the site prints its address "104 South Beverly Street, Casper, WY 82609-2031" with phone 307-237-0750 | Business's own website |
| Time To Shine Cleaning Services, LLC | (307) 797-2791 | House cleaning | Casper | https://www.timetoshinecasper.com/ | — none published on its own site that could be verified | Medium — own site: Residential section lists "Routine house cleaning (monthly, bi-weekly, weekly, or even daily!)" plus deep cleans and move-in/out for Casper homes, founded 2022 by Kristy Jackson; phone and Bar Nunn address (4557 Trails End) come from its Google Business listing because the fetched own-site pages show no phone | Business's own website + Google Business listing |
| Blessings & Brooms LLC | (307) 690-5607 | House cleaning | Casper | https://www.blessingsandbrooms.com/ | — none published on its own site that could be verified | Medium — own site: "Residential Cleaning — Professional residential cleaning service" and "family-owned cleaning service based in Casper, Wyoming," plus Move-In/Out Cleaning; phone and 6943 Columbia River Rd, Casper address come from its Google Business listing because the fetched homepage shows no phone | Business's own website + Google Business listing |

## Dedupe
- Live directory (vs_rest.py get "businesses?select=name,phone&status=eq.active", run 2026-10-18 before writing): no Wyoming businesses and no (307) phone numbers in the live DB — no name or phone in this batch collides with a live row.
- All files under ~/workspace/van-squad/prospecting/ were grepped for "casper", "82604", "wyoming" and for every name/phone in this batch (237-0750, 797-2791, 690-5607): zero matches for these businesses (the only "307" hits in prior files were unrelated digit substrings in other states' numbers/ZIPs).

## Excluded (checked, did not pass the gates)
- Maid Co of Wyoming (341 E E St, Casper; (307) 234-9344 per Google listing) — EXCLUDED: its own website (maidcowyo.com) could not be resolved/fetched on either http or https, so residential house cleaning could not be confirmed from its own materials to the batch standard.
- A.L Cleaning Services (1033 N Jackson St, Casper; (307) 247-5706 per Google listing) — EXCLUDED: its only website (alcleaningservices.business.site) returns 404, leaving no own materials to confirm house cleaning.
- White Petals Cleaning Services (3442 Chaparral Dr, Casper; (307) 251-8166 per Google listing) — EXCLUDED: its only website (white-petals-cleaning-services-llc.business.site) returns 404, leaving no own materials to confirm house cleaning.
- Elite Cleaning Company (5160 Blackmore Rd #208, Casper; (307) 797-6169 per Google listing) — EXCLUDED: no website or own materials found; only a bare listing description ("residential and commercial"), insufficient verification for this cell.
- Taylored By You Cleaning Solutions, Iris Cleaning Services LLC, Sublime Home Cleaning LLC, Top Notch Cleaning Services (all Casper, Angi/HomeAdvisor only) — EXCLUDED: no verifiable public phone and no business website/own materials found; aggregator profiles only.
- ServiceMaster by TR / ServiceMaster Clean, SERVPRO of Casper — EXCLUDED on category fit: national restoration / carpet-and-upholstery franchises, not a house cleaning service.
- Americlean Of Casper LLC ((307) 234-8622) — EXCLUDED on category fit: its own materials describe residential/commercial carpet cleaning only, not house cleaning.
- Fish Window Cleaning, Invisible Windows — EXCLUDED on category fit: window cleaning only.
- Casper's Office Cleaning Professionals, Executive Cleaning Services (Casper page states "We do not service residential properties"), 1 Source Janitorial, Monson Janitorial Services Inc — EXCLUDED on category fit: commercial office/janitorial only, no residential house cleaning.
- Homeaglow Casper and other national matching platforms — EXCLUDED on the standing gate (national lead-gen, no local operator).

## ZIP note
- Target ZIP 82604 is in every business's service_zips.
- Additional service ZIP used only where the business itself published it: AA Super Klean carries 82609, its own published street-address ZIP on its own website. Time To Shine and Blessings & Brooms publish no ZIP lists on their own sites, so they carry ["82604"] alone — no ZIPs were invented.
- Count: 3 businesses, 3 listings, 1 published-email lead (see -leads.json).
