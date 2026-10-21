# Rotation Day 11 — Kansas: Shawnee × Pressure washing × ZIP 66203

- Researched: 2026-10-21 (nightly rotation, Day 11)
- Cell note: ZIP 66203 is Shawnee, KS (Johnson County, Kansas City metro). Pressure washing is inherently on-site at the customer's home; every included business confirms residential pressure washing of driveways/siding at the customer's property from its own website, and each own website (or, for Manz, its own residential page plus its Shawnee expansion announcement) confirms Shawnee in its service area. The cell did NOT need to expand to an adjacent ZIP — 4 qualifying operators serving Shawnee were found.
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing".
- Sources: each business's own website first, then public listings. Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — batch files only; the coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Edwards Gutter Cleaning and Power Wash | (913) 359-7695 | Pressure washing | Shawnee | https://edwardsguttercleaning.com/ | — none published on its own site (contact form / "Send Email" only in press releases) | High — own site: "locally owned business" founded by Mason Edwards in Overland Park, offers pressure washing / house washing / soft washing, lists Shawnee explicitly in its service list ("We offer all our services in … Shawnee, Mission, Kansas City KS …"), and shows phone 913-359-7695 and address 8101 College Blvd #100, Overland Park, KS 66210 on the site itself; residential driveway/siding/house washing described on the site | Business's own website |
| KC Splash Pressure Washing | (816) 253-8462 | Pressure washing | Shawnee | https://kc-splash.com/residential-pressure-washing/ | daniel@kc-splash.com — published on its claimed Trustindex listing (https://www.trustindex.io/reviews/kc-splash.com), which shows the same phone and Kansas City address as its own site; no email was found on its own website | High — own residential page: residential pressure washing for roof, house/siding, driveway, deck and fence at the customer's home, FAQ states "We cover the entire Kansas City metro … Shawnee … If you are in the metro, we serve you", and phone (816) 253-8462 and address 5405 NW 93rd St, Kansas City, MO 64154 are on the page itself | Business's own website (residential page); email from its claimed Trustindex listing |
| Manz Line Striping & Pressure Washing | (913) 214-6282 | Pressure washing | Shawnee | https://manzstripeandwash.com/residential-pressure-washing-kansas-city/ | — none published on its own site | Medium — own site: locally owned and operated in the Kansas City area, dedicated Residential Pressure Washing page for driveways, patios, decks, siding and house wash at the customer's home, phone "Call 913-214-6282" on the site itself; Shawnee service confirmed by the company's own expansion announcement ("has expanded its concrete cleaning service area to Shawnee", July 1, 2024, linking its residential pressure-washing page), rather than a Shawnee list on its own site, so Medium rather than High | Business's own website + its Shawnee expansion announcement |
| Squids Pro Wash | (816) 708-4530 | Pressure washing | Shawnee | https://www.squidskc.com/residential-services/driveway-cleaning/ | — none published on its own site (quote form only) | High — own residential Driveway Cleaning page: expert driveway pressure washing at the customer's home, service-area list on the page includes Shawnee explicitly, FAQ confirms driveway pressure washing "throughout the Kansas City Metro, including … Shawnee", and the page footer shows "Business: Squids Pro Wash, 4 E Franklin Street, Liberty, Missouri 64068, (816) 708-4530" | Business's own website (residential services page) |

## Dedupe
- Live DB (vs_rest.py get businesses, status=active, 795 rows): checked every name and phone above — no matches. No Kansas City / Shawnee pressure-washing business with any of these names or phones exists in the live DB yet.
- Every file under ~/workspace/van-squad/prospecting/, including tonight's Day-11 files (all Wichita cells): grepped every candidate name and phone — no matches.
- No name or phone repeated within this batch.

## Excluded (checked, did not pass the gates)
- Shack Shine Olathe / Shack Shine Johnson County — EXCLUDED: franchise location pages list Shawnee and power washing for patios/driveways/siding, but the Olathe location page gives only the national customer-service number (888) 808-7751 and a separate Johnson County listing was flagged possibly temporarily closed, so no verifiable local-operator phone for Shawnee could be confirmed.
- Rolling Suds of Kansas City — EXCLUDED: franchise power-washing pages for the Kansas City area give national 866 numbers and a Nashville, TN PO box; no local Shawnee/Kansas City operator phone verified on its own location page.
- Window Hero — EXCLUDED: national exterior-cleaning franchise; pages found give only the national (877) 464-4766 number, with no verified Kansas City / Shawnee local location.
- CertaPro Painters of Shawnee Mission, Five Star Painting of Overland Park, and J and J Custom Painting — EXCLUDED: painting contractors whose primary category is painting; power/pressure washing is only a prep/secondary offering.
- Squids Pro Wash drive-thru page on its own — that page is commercial-only, so it was NOT used as the qualifying source; the business is included on the strength of its separate residential driveway-cleaning page (above).
- The Whale Spout Car Wash, Royal Shine Car Wash, GO Car Wash (Shawnee/Merriam) and Tidal Wave Auto Spa (Shawnee) — EXCLUDED: storefront car washes in Shawnee, not on-site residential pressure washing at a customer's home.

## ZIP note
- Service ZIPs in inserts: ["66203"] for all four. No additional ZIPs were added: none of the four publishes a ZIP-by-ZIP service list (they publish city service-area lists that include Shawnee), so no ZIPs were invented.

## Cell result summary
- Found: 4 qualifying pressure-washing businesses serving Shawnee, ZIP 66203
- Insert-ready: 4 businesses + 4 listings
- Confidence: 3 High (Edwards Gutter Cleaning and Power Wash, KC Splash Pressure Washing, Squids Pro Wash), 1 Medium (Manz Line Striping & Pressure Washing — Shawnee confirmed via its expansion announcement, not a list on its own site)
- Leads: 1 published email (KC Splash Pressure Washing — daniel@kc-splash.com, from its claimed Trustindex listing; no email found on its own website, and no published email found for the other three)
- Files: day-11-ks-shawnee-zip66203-pressure-washing.md / -inserts.json / -leads.json
