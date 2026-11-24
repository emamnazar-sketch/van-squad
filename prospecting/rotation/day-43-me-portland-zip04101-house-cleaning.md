# Day 43 — ME / Portland / ZIP 04101 / House cleaning

- Cell: State=ME, City=Portland, ZIP=04101, Category="House cleaning" (exact label)
- Date: 2026-11-24
- Expansion note: No expansion needed — 5 businesses qualified in 04101 / Portland service area, so adjacent ZIP 04102 was not used as a research expansion (one qualifying business is itself located in 04102, noted below).
- Service-ZIP note: service_zips = ["04101"] for every business. No business itself stated additional service-area ZIP codes in the materials checked (they stated towns/cities, not ZIPs), so no extra ZIPs were added — never invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Portland Cleaning Co | (207) 403-6043 | House cleaning | Portland | http://www.portlandcleaningcollective.com/ | None published on own site checked | High — own site: "Residential & Commercial Cleans" and home-cleaning testimonials; own footer gives 428 Fore Street, Portland, ME 04101-5108 and phone 207-403-6043 | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Green Clean Maine | (207) 221-6600 | House cleaning | Portland | https://www.greencleanmaine.com/ | None published on own site checked (email-format aggregators only — not counted) | High — own site: "local solution for professional house cleaning services… deliver exceptional cleaning services to your home"; phone (207) 221-6600 on Houzz and Google listing, HQ 583 Warren Ave, Portland, ME 04103 | Business's own website + Houzz / Google listing for phone | Grep for name and phone: no match (a 221-6600 hit in an Idaho file was a different Chicago number, (847) 221-6600) |
| Bee Friends Cleaners | (207) 483-5915 | House cleaning | Portland | https://beefriendscleaners.com/portland/ | hello@beefriendscleaners.com — own site footer/contact: https://beefriendscleaners.com/portland/ | High — own site: eco-friendly residential cleaning in Portland, address 63 Federal Street, Suite 1029, Portland, ME 04101, phone 207-483-5915 and email printed in footer; own-site phone used over older Google-listing number (207) 762-7151 | Business's own website | Grep for name and phone: no match |
| Clean Club Maine | (207) 669-0928 | House cleaning | Portland | https://www.cleanclubmaine.com/ | None published on own site checked | Medium — own site: "Serving Portland, South Portland, Cape Elizabeth, Falmouth and Scarborough", locally owned house cleaning at customers' homes; phone (207) 669-0928 only on its Google listing, not in own-site text fetched | Business's own website + Google listing for phone | Grep for name and phone: no match |
| Maine Cleaning Solutions LLC | (207) 329-1626 | House cleaning | Portland | https://mainecleaningsolutions.com/ | None counted — s.mainecleaning@gmail.com appeared only on third-party directory sites, not on its own website/contact page or Google listing checked, so it was not recorded as a lead | High — own site: "Professional House Cleaning Services in Southern Maine", residential homes / move-in-out, "Serving Scarborough, ME, Portland, ME, Westbrook, ME", phone 207-329-1626 on own site; based in Westbrook, serves Portland at customers' homes | Business's own website | Grep for name and phone: no match as a directory business (name only mentioned in a Day-43 Westbrook pressure-washing exclusion note, different category) |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Chick's Cleaning | (207) 772-2104 / http://chickscleaningme.net/ | Commercial-only on its own site: "Commercial Cleaning Company… office cleaning services… corporate offices, medical offices, banks" — no residential house cleaning. Its own-site email chickscleaning@yahoo.com was therefore not collected as a lead. |
| Alchemy Cleaning Services | (207) 206-4720 / https://alchemycleaningservices.com/contact | Own contact page frames service as commercial only: "every commercial situation has unique cleaning needs" — residential house cleaning not confirmed from its own materials. Located 56 Elizabeth Road, Portland, ME 04102. |
| Pristine House Cleaning | (207) 317-3810 / http://pristinecleaningme.com/ | DEDUPE SKIP — same name already in prospecting: Day-25 Greenwood, IN house-cleaning batch (different business, phone (317) 886-1033, pristinehouseclean.com). Per same-name = skip rule, the Maine business was not included despite qualifying residential service to Portland on its own site. |
| A Cleaner Way Inc. | (207) 805-0424 | Commercial / janitorial only per listing description ("Commercial Cleaning Company"); also listed as possibly temporarily closed. |
| Heavenly Cleaners | (207) 772-1574 | Listed as possibly temporarily closed; no verifiable own website confirming current residential service. |
| TotalCare Cleaning | https://www.totalcarecleaning.com/portland-me/ | No verifiable public phone found on its Portland page (page uses future "will service" language); excluded under no-phone rule. |
| The Cleaning Authority - Greater Portland | (207) 518-7759 | National franchise system (brand since 1977, franchising entity) based in Freeport — excluded as national franchise/lead system, not a local Portland operator for this cell. |
| Merry Maids of Maine | (207) 501-2256 | National franchise (Merry Maids SPC LLC), Scarborough branch — excluded as national franchise. |
| Hello Cleaners / CleanSpace | various non-local numbers | Lead-gen / marketplace platforms connecting independent cleaners, no single local operator with a local phone — excluded. |
| West End Property Preservation, The Cleaning Guys, Competition Cleaners | various | Property preservation / commercial-focused; residential house cleaning not confirmed from own materials. |

## Leads summary

1 published email collected (see matching -leads.json): Bee Friends Cleaners — hello@beefriendscleaners.com (own website). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 5
- Listings: 5 (one per business)
- Email leads: 1
- Excluded / skipped: 10 entries above (including 1 dedupe skip)
