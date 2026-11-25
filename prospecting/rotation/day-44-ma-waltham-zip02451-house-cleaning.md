# Day 44 — MA / Waltham / ZIP 02451 / House cleaning

- Cell: State=MA, City=Waltham, ZIP=02451, Category=House cleaning (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-25
- Expansion note: Adjacent Waltham ZIP 02452 was used where a business's own site gives a 02452 Waltham base (Self Maid Cleaning Services — 99 Linden St, Waltham, MA 02452; Wash'em Clean — 23 Summer Ave, Waltham, MA 02452). Both publish Waltham-wide / Greater Boston house cleaning, so 02451 is in service_zips for every business. No expansion outside Waltham was used.
- Service-ZIP rule: service_zips = [02451] plus only ZIPs the business itself publishes. Self Maid and Wash'em Clean publish their own 02452 addresses, so 02452 was added for those two only. No ZIPs were invented — the other three publish town lists, not ZIP lists.
- Method: Public information only; business's own website first, then Google listings. House cleaning at the customer's home had to be confirmed from the business's OWN materials. Bare listings with no own materials did not qualify.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Clarita's Cleaning | (857) 707-9558 | House cleaning | Waltham | https://www.claritascleaning.com/ | None collected — email on its own site is behind address-protection masking, not readable, so not guessed | High — Own site: "Professional, Eco-Friendly House Cleaning Services in Waltham, MA", "Based in Waltham, MA, we serve families and businesses throughout Middlesex County", trained background-checked cleaners arrive at the home with all supplies; own site prints phone (857) 707-9558; Google listing places it at 9 Gardner St, Waltham. FLAG: Google listing shows a different last digit, (857) 707-9537 — own-site phone was used per prefer-own-site rule | Own website; Google listing corroborates base | Checked /tmp/vs_dump.json (3,979 rows) by name + phone and grep of ~/workspace/van-squad/prospecting/ for name and both phone variants: no match |
| Boston Flawless Homes | (617) 991-4000 | House cleaning | Waltham | http://www.bostonflawlesshomes.com/ | catielly@bostonflawlesshomes.com — http://www.bostonflawlesshomes.com/ (own site contact block, with phone (617) 991-4000) | High — Own site: regular/deep/Airbnb/move-in-out home cleaning, trained cleaners clean homes, service-area list explicitly includes Waltham, and site prints phone + email; Google listing places it at 341 2nd Ave, Waltham, MA with the same phone. FLAG: own site generically says "Based in Boston, Massachusetts" in its About text, while its Google listing address is in Waltham — coordinator may re-check base if a strict own-site-address standard is applied | Own website; Google listing corroborates Waltham address + phone | Dump + prospecting grep for name and phone (991-4000): no match |
| Self Maid Cleaning Services | (857) 340-8713 | House cleaning | Waltham | https://www.selfmaidcleaning.com/ | contact@selfmaidcleaning.com — https://www.selfmaidcleaning.com/ (own site contact block) | High — Own site prints its full base "Self Maid Cleaning Services, 99 Linden Street, Waltham, MA, 02452", phone (857) 340-8713 and the email, and describes home/apartment/move-in-out cleaning done at the customer's place; Google/Yelp listings match name, Waltham address and phone | Own website; Google/Yelp corroborate | Dump + prospecting grep for name and phone (340-8713): no match |
| Wash'em Clean | (617) 874-0667 | House cleaning | Waltham | https://washem-clean.com/ | info.washemclean@gmail.com — https://washem-clean.com/ (own site business block — note the address is published in exactly this gmail form on its own site, copied verbatim, not corrected to a domain address) | Medium — Own site business block prints 23 Summer Ave, Waltham, MA 02452, phone 617-874-0667 and the email, and its homepage says it hires maids for house cleaning needs and offers "regular house cleaning" alongside its main restoration work. FLAG: this is a restoration-led company (water/fire/mold) — house cleaning is a secondary offer on its own materials, not its lead service; coordinator may drop it if a cleaning-first standard is applied | Own website | Dump + prospecting grep for name and phone (874-0667): no insertion match — only hit is the Day-44 Cambridge cell's excluded-list mention of Wash'em Clean as a Waltham-based business outside that cell's city, not a seeded business |
| Freshlar Cleaning Services | (857) 261-2937 | House cleaning | Waltham | https://www.freshlarcleaningservices.com/ | priscillaaraujow1@gmail.com — https://www.freshlarcleaningservices.com/ (own site "Request a Cleaning Quote" block: "call (857) 261-2937 or email <priscillaaraujow1@gmail.com>" — published by the business itself as its contact email, in personal-gmail form, copied verbatim) | Medium — Own site: "House cleaning services: Regular and one-time cleaning", team cleans homes throughout the Boston area and "operates at customer locations"; own site prints phone (857) 261-2937 matching its Google listing, which places it at 25 Parkers Ln Apt 1, Waltham, MA. FLAGS: (1) its own site's service-area list (Boston, Brookline, Lexington, Winchester, Belmont, Needham, Wellesley, Weston, Wayland, Allston) does NOT name Waltham, even though its Google listing address is in Waltham; (2) published email is a personal-style gmail | Own website; Google listing corroborates Waltham address + phone | Dump + prospecting grep for name and phone (261-2937): no match |

## Excluded

| Name | Reason |
|---|---|
| Merry Maids (148 Lexington St, Waltham, (781) 201-3927) | National franchise system — excluded per rules |
| W&C General Services / WC General Services ((617) 202-8880 Google Waltham listing) | Own site now says "based in Billerica" (9 Bear Hill, Billerica, MA 01821) and prints a different phone, (857) 221-1717 — based outside Waltham on its own materials with a phone conflict; excluded for this cell |
| WL Cleaning Corp (20 Lexington Terrace, Waltham, (781) 975-0020) / WL Cleaning (wl-cleaning.com) | Conflicting identities could not be resolved: the Waltham Google listing points to wlcleaningcorp.com, which could not be verified in this run, while wl-cleaning.com says "Based in Milford", owner Washington Moreira, phone (774) 244-2585 — no single verifiable own-site phone/base for the Waltham listing, so held out rather than guessed |
| Suburban House Cleaning ((617) 335-7362) | Google Business profile only ("based out of Waltham, MA", residential deep cleanings in its Google description); no own website/materials found — house cleaning cannot be confirmed from its own materials |
| Clean Out Your House (1250 Main St, Waltham, (781) 996-0968) | Estate/junk cleanout service on its listing, not recurring residential house cleaning — category fit not confirmed from its own materials |
| New England Cleaning Services (26 Fox Rd, Waltham, (781) 890-2000), Mayflower Commercial Cleaning (42 Weston St, Waltham, (888) 884-4959), Empire Maintenance Services, Mr Dirt's Cleaning, SparkleMaidsWaltham, Vanessa Cleaning Services, Motivated Helpers, My Supreme Cleaning, Villa Maintenance And Cleaning | Commercial/janitorial-only on their listings, or Google-only listings with no verifiable own website confirming residential house cleaning from their own materials |
| Elenes Carpet Cleaning (460 Moody St, Waltham) | Carpet cleaning specialty, not house cleaning |

## Leads summary

4 published emails collected, all from the businesses' own websites:
- Boston Flawless Homes — catielly@bostonflawlesshomes.com — http://www.bostonflawlesshomes.com/
- Self Maid Cleaning Services — contact@selfmaidcleaning.com — https://www.selfmaidcleaning.com/
- Wash'em Clean — info.washemclean@gmail.com — https://washem-clean.com/
- Freshlar Cleaning Services — priscillaaraujow1@gmail.com — https://www.freshlarcleaningservices.com/

No emails were guessed. Clarita's Cleaning's email is masked on its own site, so it contributes no lead.

## Counts

- Qualifying businesses: 5 (target 5–9 met at the low end)
- Inserts: 5 businesses + 5 listings
- Leads: 4
- Duplicates skipped: 0 (all name/phone checks against /tmp/vs_dump.json, 3,979 rows, and grep of ~/workspace/van-squad/prospecting/ returned no insertion matches)
- Flags for coordinator: Clarita's Google-vs-own-site phone last-digit difference (own-site used); Boston Flawless own-site "Based in Boston" text vs Waltham Google address; Wash'em Clean is restoration-led with house cleaning as a secondary offer; Freshlar's own service-area list omits Waltham (Google address is Waltham) and its published email is a personal gmail
