# Day 45 — RI / Providence / ZIP 02908 / Deep cleaning

- Cell: State=RI, City=Providence, ZIP=02908, Category="Deep cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-26
- Expansion note: EXPANDED beyond 02908, as instructed. No business based in 02908 itself qualified — the 02908-area listings with verifiable own websites either do not confirm deep cleaning of homes from their own materials (Bee Clean Housekeeping) or are listing-only with no own website (E&A Cleaning Service, Barbies housekeepers, Rise & Shine Cleaning Services). The 3 qualifiers below are: one operator based in adjacent Providence ZIP 02907 (New England Pro-Cleaners, 203 Harrison St), and two East Providence operators whose own sites explicitly serve Providence / all of Rhode Island (Home Clean Home INC — its Google listing description names Providence; COS Cleaning Services — "throughout Massachusetts and Rhode Island"). All three confirm deep cleaning at customers' homes on their own sites. No business stated a ZIP-code service list, so service_zips = ["02908"] for all three — no ZIPs invented.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| New England Pro-Cleaners | (401) 639-8756 | Deep cleaning | Providence | http://neprocleaners-ri.com/ | procleanersri@gmail.com — own site: http://neprocleaners-ri.com/ | High — own site: "Based in Providence, RI", head office 203 Harrison Street, Providence, RI 02907 (adjacent ZIP) printed with (401) 639-8756 and procleanersri@gmail.com; services list includes "Deep Cleaning: Perfect for move-ins, move-outs, or seasonal refreshes", plus monthly deep cleans and move-in/out "deep cleaning floors… sanitizing bathrooms and kitchens" in customers' homes; family-owned since 2005 | Business's own website + Google listing (matching phone/address) | Grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Home Clean Home INC | (401) 545-2527 | Deep cleaning | Providence | https://www.hcleanhomeservices.com/ | None published on own site checked | High — own site: "One-Time Deep Detailing Session — A comprehensive, luxury-level deep clean… full refresh" and "Fresh Start — Move-In / Move-Out Deep Cleaning" for homes, "We serve all Rhode Island and South Coast MA", phone (401) 545-2527 printed on own site (matches Google listing, 19 Bliss St, East Providence); its Google listing description says "No matter where you are in Rhode Island – Providence, Newport, or anywhere in between – we're here to make your home shine" — cleaners come to the customer's home | Business's own website + Google listing (matching phone/address; Providence named in listing description) | Phone grep: no match anywhere in prospecting. NAME-COLLISION FLAG for coordinator: a different business with the same name, "Home Clean Home Inc" of Brooklyn, NY (hchinc.net, (718) 627-5781), was seeded in the Day-40 Brooklyn house-cleaning cell — different phone, different website, different state; this RI business is not that company (precedent: Day-45 Woonsocket cell seeded Quality Maids Service LLC despite a different "Quality Maids" elsewhere, noted the same way). Coordinator may drop if a strict same-name rule is applied. |
| COS Cleaning Services | (401) 996-1610 | Deep cleaning | Providence | https://coscleaningservice.com/ | contact@coscleaningservice.com — own site: https://coscleaningservice.com/ | Medium — own site: "Whether you need a deep cleaning, a regular cleaning or help with post-construction… our friendly team will make sure your space is spotless", "one-time deep cleans" for homes, team "arrives on time, fully equipped" at the customer's home, serving "throughout Massachusetts and Rhode Island"; email contact@coscleaningservice.com printed on own site; Google listing (281 Taunton Ave, East Providence) phone (401) 996-1610 matches the "Phone:" line on its own site. Medium because its own site also prints two other numbers in call buttons/FAQ ((401) 992-6603, (401) 696-6425) — the listing-matching (401) 996-1610 is used, conflicts noted here | Business's own website + Google listing (matching phone/address) | Grep of prospecting files for name and all three phones: no match |

## Dedupe skips (already collected in tonight's other RI cells — same name/phone = dupe, not reused)

| Name | Phone | Where already collected tonight |
|---|---|---|
| Sun Pristine Maids | (401) 208-2045 | Day-45 Providence 02903 house-cleaning cell — its own site has a dedicated Deep Cleaning page for Providence, but it is already in tonight's files |
| Rhode Island Cleaning Service | (401) 402-0110 | Day-45 Cranston 02910 house-cleaning cell — own site lists Deep Cleaning and Providence as a featured market, but already collected tonight |
| Mirian Cleaning Services | (401) 450-5804 | Day-45 Woonsocket 02895 house-cleaning cell — own site lists Deep Cleaning, but already collected tonight |
| BrightNest Cleaning Services | (774) 247-0364 | Day-45 Warwick 02888 house-cleaning cell — own site lists deep cleaning, but already collected tonight |
| Avangelina's Cleaning Services / Tavares Cleaning Services / Ana's Team, LLC - Cleaning Services / América Braga Cleaning | (401) 545-4786 / (401) 461-4495 / (401) 867-1610 / (774) 248-4603 | Day-45 Providence 02903 and Cranston 02910 house-cleaning cells |
| Cleanadora | (401) 271-0408 (Cranston listing) | Seeded Day-44 in the Cambridge, MA house-cleaning cell as "Cleanadora" ((857) 229-0422) — same business/name, not reused; its Cranston pages are also multi-city templates |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Ever Clean Cleaning Services | https://www.evercleancleanersco.com/ | Own site confirms Deep Cleaning and lists Providence in its service areas, and it is owner-led — but NO public phone number is published on its own site and none could be verified in public listings — excluded under the verifiable-phone gate (same outcome as tonight's Cranston and Warwick cells) |
| Bee Clean Housekeeping | (401) 649-3521 listing / https://beeclean1979.weebly.com/ | Providence-based (108 Canton St) with own Weebly site, but its own site confirms only general home/office cleaning ("cleaning your home or office", "clean whatever you need") — no deep cleaning confirmed from its own materials |
| MaidPro Providence | (401) 723-4400 / https://www.maidpro.com/providence | National franchise system, not an independent local operator |
| Merry Maids | (401) 435-5150 / https://merrymaids.com/home-cleaners-east-providence-ri | National franchise system |
| The Cleaning Authority — Cranston | (401) 519-4287 / https://www.thecleaningauthority.com/cranston | National franchise system |
| RI Clean Co. | https://ricleanco.com/ | Booking/coordination platform that routes jobs to partner cleaners ("We match your job with a partner… No. RI Clean Co. is a booking and coordination platform") — lead-gen/platform, no local operator of its own |
| Lime Maids | https://limemaids.com/ri/ | Cleaner-matching platform ("connecting Rhode Island's homes with independent cleaners"), phone is a Vermont (802) number — no local operator of its own |
| TotalCare Cleaning | https://www.totalcarecleaning.com/providence/ | Multi-city SEO template with future/planned framing ("will service"), no verifiable local Providence operator or local phone confirmed (also excluded in tonight's Cranston/Warwick cells) |
| Cleanadora Cleaning Services of Cranston | (401) 271-0408 / https://cleanadora.com/ | See dedupe skips — already seeded tonight (Day-44 Cambridge); also a multi-city template operation (Cambridge, MA HQ address) |
| Providence Commercial Cleaning | (401) 406-8355 / https://www.providencecommercialcleaning.com/services/deep-cleaning/ | Commercial-facility deep cleaning only — no residential/home deep cleaning confirmed |
| Ruby's Cleaning and Painting | (401) 226-9034 / https://www.rubyscleaningandpainting.com/ | Own site address is 984 Charles St, North Providence, RI 02904 — not Providence; own site lists general/carpet cleaning only, no deep cleaning (also held out in tonight's 02903 cell) |
| Legacy Cleaning Services | (401) 351-2822 / http://www.legacycleaning.com/ | Own website returned an error page in tonight's earlier check, so residential deep cleaning could not be confirmed from its own materials; Google description frames it as janitorial/restoration |
| Mint Maintenance | (401) 264-8424 listing / http://www.mintmaintenance.co/ | Boston-based multi-city booking platform; phone conflicts with Providence listing, no local Providence operator confirmed |
| Clear View Service LLC | (401) 617-2354 / https://www.clearviewser.com/ | Window/gutter/pressure-washing and property care only — no house deep cleaning on its own site |
| J J Cleaning Services LLC | (401) 744-5522 / http://www.jj-cleaning-services.com/ | Own site's only "deep cleaning" is floor cleaning & waxing within a carpet/post-construction-led service list — no house deep cleaning service confirmed from its own materials |
| Bio-One of Providence | (401) 569-0169 / https://www.biooneprovidence.com/ | Biohazard/crime-scene cleanup franchise, not house deep cleaning |
| E&A Cleaning Service / Barbies housekeepers / Rise & Shine Cleaning Services / Jasmine's Cleaning Service / JB Cleaning Services / Unique Cleaning / Alisha B's Cleaning Services | various Providence listings | Listing-only — no verifiable own website confirming deep cleaning of homes from their own materials |
| Martins Maintenance Inc | (401) 435-0202 / https://www.martinsmaintenance.com | Own website could not be fetched in this run, so deep cleaning of homes could not be confirmed from its own materials |

## Leads summary

2 published emails collected (see matching -leads.json), both from the businesses' own websites: New England Pro-Cleaners — procleanersri@gmail.com; COS Cleaning Services — contact@coscleaningservice.com. Home Clean Home INC publishes no email on its own site checked. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 3 (1 based in adjacent Providence ZIP 02907; 2 East Providence operators explicitly serving Providence / all of Rhode Island — expansion noted above)
- Listings: 3 (one per business, title "Deep cleaning in Providence")
- Email leads: 2
- Dedupe skips: 7 entries above (businesses already collected in tonight's other RI/MA cells)
- Excluded: 18 entries above

## Coordinator notes (2026-11-26)
- EXCLUDED at insert: Home Clean Home INC — exact name already in the directory (Day-40 Brooklyn, NY business, different phone/website/state). Tonight's same-name rule was applied consistently by all cells (Sunset Pressure Washing, Maid For You, Mr. Nice Guy all skipped on it), so this business was removed from the inserts before posting; its listing was not posted. Cell inserted count: 2.
