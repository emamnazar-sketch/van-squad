# Day 24 — Michigan × Detroit × ZIP 48219 × Handyman

- **Cell:** MI | Detroit | 48219 | Handyman (exact category label)
- **Date researched:** 2026-11-03 (night of Nov 2–3, Day 24 rotation)
- **Expansion:** None needed. Four qualifying businesses were confirmed for 48219 itself (target minimum of 3 met in-cell), so no adjacent-ZIP expansion was used.
- **Method:** Business's own website first, then public listings (Google Business). Mobile/on-site service (handyman travels to the customer's home) confirmed from each included business's own materials. Phones are Michigan local numbers, formatted (XXX) XXX-XXXX. No phone, ZIP, email, hour, price, review, or credential was invented.
- **Dedupe:** Every candidate name AND phone was checked against (a) the live-DB snapshot `dedupe-open.txt` (1,988 name|phone lines) and (b) every file in `~/workspace/van-squad/prospecting/` via grep. All four included businesses are clear on both name and phone. No duplicates were found among candidates for this cell.
- **service_zips rule applied:** Target ZIP 48219 plus only a business's own published service-area ZIPs. Only Michigan's Handyman publishes a ZIP list (its Wayne County list, which explicitly includes 48219); the other three publish no ZIP list, so their service_zips = ["48219"] only.
- **Published-email rule applied:** An email is collected only when the business itself publishes it on its own website/contact page or its Google listing. None of the four included businesses does so (see Email leads section), so the leads file is an empty array.

## Qualifying businesses (4)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Precision Handyman | (313) 918-2097 | Handyman | Detroit | http://www.precision-handyman.com/ | None published — no email on own site or Google listing | Medium — Own live site lists the phone ("Call or text us at 313 918-2097") and offers carpentry, plumbing, minor electrical, repair and home maintenance with a free consultation; Detroit-based on Lahser Rd (12918 Lahser Rd per its Google listing), minutes from 48219, Google category includes In-Home Service. No service-area/ZIP list is published, and a second Google entry at a near-identical Lahser address is marked permanently closed, so confidence is held at Medium. | http://www.precision-handyman.com/ |
| Michigan's Handyman | (248) 506-4000 | Handyman | Detroit | https://michiganshandyman.com/ | None collected — an email for this business appears only on a third-party aggregator (ThreeBestRated), not on its own site or Google listing, so it was not collected under the source rule | High — Own site explicitly lists Detroit in its Wayne County service area and publishes a Wayne County ZIP list that includes 48219; phone (248) 506-4000 is printed on its own site; licensed Michigan builder offering handyman work in customers' homes across the Detroit/Southeastern Michigan area. | https://michiganshandyman.com/ |
| Handyman Detroit | (313) 513-1185 | Handyman | Detroit | https://www.handymandetroit.com/ | None published — contact is by phone/text and a web form only | Medium — Own site (HandymanDetroit.com) repeatedly prints 313-513-1185 and states it provides handyman services "throughout Detroit," with the operator saying "I'll show up, assess it, and fix it fast" — on-site service confirmed. Held at Medium because a few specialty service pages on the same site show different numbers; 313-513-1185 is the consistent main number. The site's footer/legal name is "Home Repair Specialists"; the directory name uses the site's own brand name, Handyman Detroit. | https://www.handymandetroit.com/minor-emergencies/ |
| Detroit Handyman | (313) 241-6286 | Handyman | Detroit | http://www.detroithandyman.net/ | None published — no email on own site or Google listing | Medium — Own site confirms on-site handyman work for homes and businesses (basic handyman work by the hour, 24/7 emergency service "on-site within 3 hours"); Detroit-based (607 Shelby St Ste 1158 per its Google listing). Phone is from its Google listing — the number does not appear in the text of its own homepage — and no service-area/ZIP list is published. | http://www.detroithandyman.net/ (site, mobile confirmation); phone from its Google Business listing |

## Email leads

None. No included business publishes an email address on its own website/contact page or its Google listing, so `day-24-mi-detroit-zip48219-handyman-leads.json` is an empty array `[]`.

Notes:
- Michigan's Handyman: `info@michiganshandyman.com` was seen only on the ThreeBestRated aggregator page. That is neither the business's own site nor its Google listing, so it was NOT collected.
- Emails seen on excluded businesses' own sites (e.g. Hearth & Home Handyman Services, Tri-Pups) were not collected, because those businesses are not in this cell.

## Excluded

- **CLR Handyman & Landscaping Service ((313) 377-4540, Detroit)** — EXCLUDED: its own website (clrhandymanlandscaping.com) is currently a Squarespace "Coming Soon / under construction" parking page, so mobile/on-site handyman service cannot be confirmed from the business's own materials.
- **With Theez Hands LLC ((313) 285-6123), Family Tiez LLC ((313) 588-1857), Ecosavvy Handyman / EcoSavvy Handyman LLC ((313) 918-5579), Phillips Repair ((313) 784-6833), SunnyRays LLC ((313) 285-6123), C & D Handyman Services ((734) 751-1377, Redford)** — EXCLUDED: listing-only records (Google/Thumbtack/BBB snippets) with no own website or other verifiable own materials confirming mobile handyman service. SunnyRays LLC also shares the same phone and street address as With Theez Hands LLC, so the pair could not be treated as two distinct verified operators.
- **The Fix It Friends ((248) 289-7955, Redford)** — EXCLUDED for this cell: its own site scopes its service to "Redford Charter Twp & Livonia, MI" (site title and contact page, Redford 48239 address) and does not name Detroit, so service to Detroit 48219 is not confirmed from its own materials.
- **Hearth & Home Handyman Services ((248) 514-7501, Royal Oak)** — EXCLUDED for this cell: its own site lists Royal Oak, Ferndale, Birmingham, Bloomfield Hills, West Bloomfield, Franklin, Troy, Clawson, Berkley, Huntington Woods, Oak Park, Northville and Novi plus a generic "surrounding Metro Detroit Area," but does not name the city of Detroit, so service to 48219 is not confirmed from its own materials.
- **Tri-Pups, Inc. ((248) 597-2929, Southfield)** — EXCLUDED for this cell: its own site describes an Oakland County company serving areas such as Royal Oak, Troy and Birmingham and invites contact from home or business owners "within Oakland County"; Detroit (Wayne County) service is not confirmed.
- **The Detroit Rehab Crew / handyman313.com** — EXCLUDED: the only published phone found is toll-free (866) 279-1133; no Michigan local number is published.
- **The Patch Boys (Oakland-Macomb, (248) 213-8444)** — EXCLUDED: national drywall-patch franchise; its own materials are drywall repair, not general handyman-at-your-home service for this cell.
- **Ace Handyman Services Bloomfield ((248) 278-1728), Mr. Handyman locations, Handyman Connection locations, HandyPro ((248) 516-1121), One Stop Property Maintenance ((313) 957-0070, Southfield property-management/janitorial)** — EXCLUDED: national franchise finder/local-office pages or property-management services whose own materials do not confirm general handyman-at-your-home service to Detroit 48219 specifically.
- **Jay's Handyman Services, Blessed Handyman (HomeAdvisor-only profiles), DetroitHandyDan (listing marked possibly temporarily closed, (313) 315-0304), Availability to Help Handyman ((586) 362-0071)** — EXCLUDED: marketplace/listing-only records with no own website confirming mobile service; DetroitHandyDan's listing also shows a possibly-closed status.

## Files

- `day-24-mi-detroit-zip48219-handyman.md` — this batch file.
- `day-24-mi-detroit-zip48219-handyman-inserts.json` — 4 businesses + 4 listings, in the exact day-02 inserts shape (status "active", is_sample false, verified false, email_verified false, phone_verified false, directory-owner placeholder owner_id, standard claim-it description, one "Handyman at your location" quote listing per business). No email field is written to any business record.
- `day-24-mi-detroit-zip48219-handyman-leads.json` — empty array `[]` (no qualifying published emails; see Email leads section).

No database inserting, no js/data.js edits, and no git actions were performed by this research worker.
