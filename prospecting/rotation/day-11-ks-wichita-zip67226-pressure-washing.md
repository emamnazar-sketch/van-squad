# Rotation Day 11 — Kansas: Wichita × Pressure washing × ZIP 67226

- Researched: 2026-10-21 (nightly rotation, Day 11)
- Cell note: ZIP 67226 is east Wichita (residential, College Hill / east side). Pressure washing is inherently on-site at the customer's home; every included business confirms residential pressure washing of driveways/siding at the customer's property from its own website or its own Wichita location page. The cell did NOT need to expand to an adjacent ZIP — 4 qualifying Wichita operators were found, and one of them (Squeegee Squad of Wichita) lists Wichita, KS 67226 itself on its own page.
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing".
- Sources: each business's own website first, then public listings (Google Business, BBB). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — batch files only; the coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Paradise Power Washing | (316) 733-1911 | Pressure washing | Wichita | http://www.paradisepowerwashing.com/ | — none published on its own site | High — own site: "Local Veteran Owned and Operated", owners Scott & Tara Fessler, "Wichita's leading pressure washing company", address 1845 N Ohio Ave, Wichita, KS 67214 and phone 316-733-1911 both on the site itself; its service materials describe residential house washing and driveway/sidewalk/siding cleaning at the customer's home | Business's own website |
| Squeegee Squad of Wichita | (316) 202-6020 | Pressure washing | Wichita | https://squeegeesquad.com/wichita-ks/residential/pressure-soft-washing/ | — none published (quote form only) | Medium — its own Wichita location page: pressure washing / soft washing for siding, patios, driveways and decks "tailored to the unique needs of Wichita, KS homeowners", phone (316) 202-6020 on the page, and the page itself lists "Wichita, KS 67226"; franchise location page, so Medium rather than High | Business's own Wichita location page |
| Outshine Professional Window Cleaning | (316) 554-4052 | Pressure washing | Wichita | https://www.outshinepwc.com/ | OutshinePWC@gmail.com — published on its own website (same URL) | High — own site: owner-operated by Brock Voth in Wichita ("No subcontractors, no call center"), Pressure Washing is one of its four listed services — "Driveways, siding, walkways, and patios stripped of grime, mildew, and years of buildup"; phone and email both on the site itself | Business's own website |
| Window Genie of Wichita | (316) 234-2432 | Pressure washing | Wichita | https://www.windowgenie.com/locations/kansas/wichita/pressure-washing/ | — none published (quote form only) | Medium — its own Wichita location page: pressure washing service for "siding, driveways, sidewalks, fences, decks, and more" for homes and businesses, described as locally owned and operated, with local address 2815 N Tyler Rd, Wichita KS, 67205 and phone (316) 234-2432 on the page; national franchise location page, so Medium rather than High | Business's own Wichita location page |

## Dedupe
- Live DB (vs_rest.py get businesses, status=active, 795 rows): checked every name and phone above — no matches. No Wichita (316) pressure-washing business exists in the live DB yet; the only similar names are other cities' franchises (Window Genie of Sioux Falls, Window Genie of Omaha, Squeegee Squad of Fargo) with different phones.
- Every file under ~/workspace/van-squad/prospecting/: grepped every candidate name and phone — no matches. Note: "Outshine Auto Mobile Detail" in Las Cruces, NM (phone (575) 249-8749, Mobile auto detailing) is a different business from Outshine Professional Window Cleaning in Wichita — different full name and different phone, so it is NOT a duplicate.
- No name or phone repeated within this batch.

## Excluded (checked, did not pass the gates)
- Clean Rite Pressure Washing, Wichita ((316) 655-5665) — EXCLUDED: its own website frames its pressure washing entirely around "commercial, retail, municipal or industrial property" (parking lots, garages, building/warehouse cleaning); no residential driveway/siding service at a customer's home is confirmed from its own materials.
- Power Washers Unlimited, Wichita ((316) 262-9274, pwuofkansas.com) — EXCLUDED: its own website could not be verified (site returns 404 on fetch), so on-site residential pressure washing could not be confirmed from the business's own materials; only a Google listing category was available.
- Surface Therapy Wood Staining & Pressure Washing, Wichita — EXCLUDED: its website domain (surfacetherapy.com) is now a parked domain-for-sale page, so no verifiable business website or on-site service confirmation exists.
- Superior Service Company, Wichita — EXCLUDED: pressure washer equipment sales, rentals, parts and detergents ("The Pressure Washer People") — storefront equipment supplier, not an on-site washing crew.
- Shine On Pressure Washing (owner-operator Andy, Wichita) and Super Squirts Pressure Washing and H2Glow Wichita LLC — EXCLUDED: found only as HomeAdvisor/Angi profile text with no verifiable own website and no public phone published by the business itself.
- Aptera Sedgwick County pressure washing — EXCLUDED: lead-generation directory, no local operator phone published by a business itself.
- db Painting & Exteriors, CertaPro Painters of Wichita East, and Mr. Handyman of Wichita Metro Area — EXCLUDED: painting / handyman contractors whose primary category is not pressure washing; power washing is only a prep/secondary offering.

## ZIP note
- Service ZIPs in inserts: ["67226"] for all four. No additional ZIPs were added: none of the four publishes a ZIP-by-ZIP service list (Squeegee Squad's own Wichita page lists 67226, which is the target ZIP itself), so no ZIPs were invented.

## Cell result summary
- Found: 4 qualifying Wichita pressure-washing businesses
- Insert-ready: 4 businesses + 4 listings
- Confidence: 2 High (Paradise Power Washing, Outshine Professional Window Cleaning), 2 Medium (Squeegee Squad of Wichita, Window Genie of Wichita — both locally operated franchise location pages)
- Leads: 1 published email (Outshine Professional Window Cleaning), from its own website.
- Files: day-11-ks-wichita-zip67226-pressure-washing.md / -inserts.json / -leads.json
