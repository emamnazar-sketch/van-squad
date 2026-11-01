# Van Squads — Day 22 Cell Research (SUPPLEMENT)

Researched 2026-11-01, Day 22
Cell: Illinois × Chicago × ZIP 60618 × Handyman — SUPPLEMENTARY pass (different search angles: neighborhood searches for Irving Park / Avondale / Logan Square, Yelp-style queries, own-website searches). The first pass on this cell found 4 businesses; this file adds only businesses that pass missed.
Status: PREPARED, NOT INSERTED — coordinator inserts centrally

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| BIG Helpers | (312) 757-4420 | Handyman | Chicago | https://www.bighelpers.com/ | info@bighelpers.com — https://www.bighelpers.com/ | High — phone and email on own site; own site lists handyman services performed "In Your Home or Office" (drywall, mounting, furniture assembly); Google listing address 4184 N Elston Ave, Chicago, IL 60618 | Own website; Google Business listing |
| Chicago Handy | (773) 503-0500 | Handyman | Chicago | http://www.chicagohandy.com/ | None recorded — the email link on the business's own site is cloaked in the page fetch, so no address could be verified verbatim and none was guessed | High — phone and address (3203 N Ridgeway Ave Apt 3A, Chicago, IL 60618) in own site's footer; own site and reviews describe the crew doing repair work inside customers' homes | Own website |
| Knowledgeable Handyman | (773) 461-8533 | Handyman | Chicago | https://knowledgeablehandyman.com/ | None found | High — phone shown on own site and matches its Google listing; own site describes professional handyman repairs/improvements in customers' homes across Chicago; Google listing address 3943 N Mozart St, Chicago, IL 60618 | Own website; Google Business listing |
| Cutting Edge Property Solutions, LLC | (773) 234-2218 | Handyman | Chicago | https://cuttingedge-llc.com/ | None found | Medium — phone from Google Business listing (not surfaced in the own-site homepage text fetch); own site confirms a Chicago handyman business whose testimonials describe in-home work (drywall, backsplash, TV mounting, closets); Google listing address 3300 W Belle Plaine Ave, Chicago, IL 60618 | Own website; Google Business listing |
| Carl & Josiah | (312) 561-6130 | Handyman | Chicago | https://carlandjosiahm.wixsite.com/carlandjosiahrepairs | carlandjosiahm@gmail.com — https://carlandjosiahm.wixsite.com/carlandjosiahrepairs | High — phone and email in own site's footer under "Carl and Josiah, LLC"; own site gives its address as 3334 North Harding Avenue, Chicago, IL 60618-5104 and offers a free in-home estimate for home repairs | Own website |
| Master Handymen | (847) 287-0449 | Handyman | Chicago | http://www.masterhandymen.com/ | Gino@MasterHandymen.com — http://www.masterhandymen.com/ | High — phone and email on own site ("Call: 847-287-0449"); own site describes a licensed Chicago general contractor doing small repairs and remodeling at customers' properties across Chicagoland since 2006; Google listing address 4728 N Rockwell St, Chicago (60625) | Own website; Google Business listing |

## Dedupe
- The 4 businesses from the first pass on this cell were excluded by name and phone: Handy Men & Mrs. Helper (312) 561-5615; Chicago Handyman (312) 874-0883; Handyman Connection of Lincoln Park (773) 937-8008; Punch List Pros LLC (773) 819-6161. None of the 6 above matches any of those names or phones.
- Note: "Chicago Handy" (this file) is a DIFFERENT business from the first pass's "Chicago Handyman" — different phone ((773) 503-0500 vs (312) 874-0883), different website (chicagohandy.com vs the other business's site), different address (3203 N Ridgeway Ave, 60618).
- All 6 names and phones were grepped across every file under ~/workspace/van-squad/prospecting/ — no matches.
- All 6 phones were checked individually against the live Supabase businesses table via vs_rest.py (phone=eq. queries) — all returned empty. A name sweep (name ilike %Chicago% returned no rows; the full "Handy" name list was reviewed) found none of the 6 names in the live DB.

## Excluded
- RC Home Improvement, (773) 627-4656 — its listed website domain (rchomehandymanservices.com) is parked and offered for sale, so the business could not be verified from its own materials.
- Ace Handyman Services Chicagoland, 3021 W Belmont Ave, Chicago, IL 60618 — national franchise; public sources also give CONFLICTING phones for this location ((773) 249-2668 vs (773) 657-2516).
- Mr. Handyman of Lincoln Park, (312) 585-7482 — national franchise / lead-gen pattern.
- Handyman Matters Chicago, (773) 235-0900 — franchise operation based at 5251 N Central Ave, Chicago, IL 60630, outside this cell.
- Genuine Handyman Services LLC — the only public phone found is a (650) California number; a local Chicago operator could not be verified from its own materials.
- Expert Fixer, (872) 901-9846 — listing/aggregator presence only; no verifiable own website found.
- Just Screw It Handyman Services, (773) 701-7144 — Google-listing-only candidate; no own website found to confirm mobile/on-site service from the business's own materials.
- ArgoPro LLC, (224) 285-4019 — social-media-only presence found; no verifiable own website or confirmed Google listing phone from the business's own materials.
- Yount2Services, (319) 389-7491 — Facebook-page-only presence; no own website, and the phone's 319 area code is not a Chicago code.
- Widleth Handy, (773) 600-7440, widlethandy.com — a separate listing sharing the 3943 N Mozart St address with Knowledgeable Handyman; NOT merged into Knowledgeable Handyman (whose own site and Google listing agree on (773) 461-8533) and not included, because which operation is current at that address could not be resolved from public sources.

## ZIP note
- 5 of the 6 businesses are based in ZIP 60618 itself (BIG Helpers — Elston Ave; Chicago Handy — Ridgeway Ave; Knowledgeable Handyman — Mozart St; Cutting Edge Property Solutions, LLC — Belle Plaine Ave; Carl & Josiah — Harding Ave, stated on its own site as 60618-5104).
- 1 business required the permitted adjacent-ZIP expansion: Master Handymen is based at 4728 N Rockwell St in adjacent ZIP 60625 (Lincoln Square) and states on its own site that it serves most of the Chicagoland area; its service_zips are ["60618", "60625"].
- No other service-area ZIPs were added: none of the other businesses' own materials state additional service-area ZIPs, so their service_zips are ["60618"] only — no ZIPs were invented.
