# Rotation Day 24 — Michigan: Detroit × Mobile pet grooming × ZIP 48221

- Researched: 2026-11-03 (nightly rotation, Day 24)
- Cell: Michigan × Detroit × ZIP 48221 × "Mobile pet grooming" (exact label verified in js/data.js)
- Cell note: ZIP 48221 is northwest Detroit (University District / Green Acres area, along Livernois and W. McNichols, bordered by 8 Mile / Southfield-Oak Park to the north). Mobile pet grooming supply serving Detroit proper is thin — most metro operators are suburban-based and publish suburb-only service lists that do NOT name Detroit. Only two operators could be confirmed, from their own materials, to bring a grooming van to a customer's home in Detroit / 48221 with a Michigan local phone. No padding was done.
- Expansion note: Because fewer than 3 businesses were confirmed for 48221, adjacent Detroit ZIPs were also swept (notably 48219, 48235, 48237 area groomers). The adjacent-ZIP sweep produced no additional mobile operator: the closest find, Dawg U Fine Grooming in 48219, is a home-based spa at the groomer's own home (the customer travels to the groomer), not a mobile service — see Excluded. Suburban operators whose own materials list only suburbs (Woofie's of Farmington Hills, Zoomin Groomin West Oakland, CharlyLou's, Bark & Mane) were NOT imported into the Detroit cell — see Excluded.
- Sources: each business's own website first, then public listings (Google Business, ThreeBestRated). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Gabe's Mobile Pet Grooming | (734) 695-9481 | Mobile pet grooming | Detroit | https://gabesmobilepetgrooming.com/ | gabesmobilegrooming@gmail.com — published on the business's own website https://gabesmobilepetgrooming.com/ | High — own sites (Gabe's / Prestige Mobile Pet Grooming LLC) confirm a fully equipped grooming van parks right outside the customer's home, one-on-one and cage-free; its own FAQ page lists Detroit explicitly in a ~50-mile Metro Detroit service area (also Southfield, Farmington Hills, Warren, Troy, Royal Oak, Ferndale), and phone (734) 695-9481 is printed on its own sites | https://gabesmobilepetgrooming.com/ |
| Furry Land Mobile Grooming Detroit | (248) 230-9002 | Mobile pet grooming | Detroit | https://furryland.us/locations/detroit-mobile-pet-groomers/ | None counted — an address for this location appears only on a third-party directory (ThreeBestRated), not on the business's own website or Google listing, so it was not taken as a lead (see Notes) | High — Google Business listing names this exact local operator "Furry Land Mobile Grooming Detroit" with local phone (248) 230-9002, Farmington Hills base serving Southeast Michigan, described in its own listing as "We come to you!"; its own Detroit location page prints "Call 248-230-9002" and its own site's Oak Park / Ferndale service pages list ZIP 48221 explicitly among the ZIPs it covers; locally owned/operated Detroit franchise location, not a national call center — this is a genuinely different local operator from the Furry Land locations already in the DB for other states/cities (different name, different local phone) | https://furryland.us/locations/detroit-mobile-pet-groomers/ |

## Email leads

- Gabe's Mobile Pet Grooming — gabesmobilegrooming@gmail.com — source: https://gabesmobilepetgrooming.com/ (the business's own website)
- Total leads in this cell: 1 (see the matching -leads.json file; leads are kept separate from the directory and are never shown on a profile)

## Dedupe

- Live-DB snapshot (~/workspace/goals/van-squad-directory-website/hidden_files/run-day24/dedupe-open.txt, 1,988 lines): grep for "Gabe", "Gabes", "695-9481", "Furry Land Mobile Grooming Detroit", and "230-9002" — no match for either included business. Other Furry Land entries in the snapshot are different locations with different phones: Furry Land Albuquerque-Santa Fe (505) 807-7009, Furry Land Austin, TX (737) 249-6299, Furry Land Mobile Grooming Denver (303) 309-6258, Furry Land Mobile Grooming Oklahoma City (405) 666-5866, Furry Land Omaha (877) 726-3345. The Detroit operator's local phone (248) 230-9002 appears nowhere in the snapshot.
- All prior files in ~/workspace/van-squad/prospecting/ (grep -r): no match for "Gabe" / "695-9481" / "230-9002" / "gabesmobilegrooming@gmail.com". "Furry Land" appears in earlier cells only as other locations / exclusions, never with the Detroit name or the (248) 230-9002 phone.
- Within-batch dedupe: Gabe's operates several domains for the same business (gabesmobilepetgrooming.com, gabesmobilegrooming.site, gabesmobilegrooming.store, prestigemobilepetgrooming.site — all Prestige Mobile Pet Grooming LLC, same phone (734) 695-9481) — counted ONCE, under the name on its main .com site.

## Excluded (checked, did not pass the gates)

- Furry Land (national / generic pages, 877-726-3345) — the toll-free number alone would have failed the gate; the business was included ONLY through its distinct Detroit location (above), which publishes its own local number (248) 230-9002 on its own location page and Google listing. The generic national listing was not listed separately.
- Woofie's of Farmington Hills, (248) 996-1404 — EXCLUDED for this cell: genuine local mobile operator (own location page confirms a self-contained mobile spa coming to the driveway, phone on its own page), but its own materials name its area as Farmington Hills and nearby communities like Bloomfield Hills, Farmington, Franklin, and Novi; Detroit / 48221 coverage could not be confirmed from its own materials. Do not stretch a suburb-only list into Detroit.
- Zoomin Groomin — West Oakland (Farmington Hills / West Bloomfield / Southfield), (248) 864-0016, westoakland@zoomingroomin.com — EXCLUDED for this cell: its own location page lists only Farmington Hills, West Bloomfield, and Southfield; Detroit / 48221 is not in its stated service area, so 48221 coverage could not be confirmed from its own materials. (Other Zoomin Groomin Michigan locations are farther away still: Clinton Township / Sterling Heights, (586) 248-4774, and Rochester Hills / Troy, (248) 665-8475 — same reason.)
- Bark & Mane of Birmingham, Troy and Rochester Hills (formerly Aussie Pet Mobile) — EXCLUDED: its own groomers page lists its Michigan area as Berkley, Birmingham, Clawson, Royal Oak (no Detroit), its site's only published phone is the toll-free (800) 738-6624, and its own hiring posts describe it as launching its first van in November 2026 in Birmingham — no confirmed operating Detroit service with a local phone.
- LC'S Detroit Pet Salon & LC'S Mobile Pet Spa, (313) 639-1187, Detroit — EXCLUDED: its own listing states "Mobile Grooming is paused until further notice" — currently a storefront salon only.
- Peticured - Pet Nail Specialists, (248) 633-3199 — EXCLUDED: its own website describes nail-trimming only, delivered through a "PetiQueue" at set locations across five counties; it is not a full mobile pet grooming service and no grooming van coming to the customer's home is confirmed from its own materials.
- CharlyLou's Mobile Pet Grooming, (248) 563-7141, Sterling Heights — EXCLUDED for this cell: its own website says it is "accepting new clients throughout Macomb County" and brings the salon to driveways there; Detroit (Wayne County) / 48221 coverage is not claimed in its own materials.
- Lucky Dog Mobile Grooming Spa, (586) 224-8119, Rochester / Washington Township — EXCLUDED for this cell: its own materials say it services Washington Township and the surrounding communities (~25 miles northeast of 48221); Detroit coverage could not be confirmed.
- Dawg U Fine Grooming, (248) 846-1992, Detroit 48219 (adjacent ZIP) — EXCLUDED: its own website calls it a "Home-Based Dawg Spa" in West Detroit — grooming happens at the groomer's home, so the customer travels to the groomer; not a mobile/on-site service at the customer's home.
- Aussie Pet Mobile — Plymouth, MI listing, (734) 730-2242 — EXCLUDED: listing shows Permanently Closed; no active Detroit operator with a local phone could be verified.
- Hydrodog — EXCLUDED: franchise-availability materials list the states it is accepting inquiries in and Michigan is not among them; no Michigan operator or local phone could be verified.
- Barkbus, (800) 742-9255 — EXCLUDED: national concierge booking with a toll-free number only, no local Detroit operator phone verifiable, and no Detroit service area confirmed.
- Groomit — EXCLUDED: national booking platform (New York (646) number), no local Detroit operator.
- Canine To Five, (313) 831-3647, Detroit; All Paw Spa, Ferndale; Chets Pets / Chet's Dog Grooming, Detroit (14900 Southfield Rd — in the 48221 area); Walton's Pet Parlor, Detroit; Puppy Cutz, Detroit; Hot Rods Car and Dog Wash, Detroit (8038 Puritan Ave, near 48221) — EXCLUDED: storefront / facility groomers; no mobile van or come-to-the-customer's-home service confirmed from their own materials.

## ZIP note

- 48221 is the target ZIP for both businesses. Neither publishes a single coherent ZIP list for its Detroit service: Gabe's publishes a city list (Detroit named) plus a ~50-mile radius, and Furry Land's own site lists 48221 explicitly on neighboring-area pages but publishes inconsistent SEO ZIP lists across pages — so both businesses carry service_zips = ["48221"] only. No ZIP was invented for any business.
- Notes on the Furry Land email: ThreeBestRated's Detroit grooming page lists detroit@furryland.us for this location, but that is a third-party directory, not the business's own website or its Google listing, so under the published-email rule it was NOT counted as a lead and does not appear in the leads file.

## Files

- day-24-mi-detroit-zip48221-mobile-pet-grooming.md (this file)
- day-24-mi-detroit-zip48221-mobile-pet-grooming-inserts.json (2 businesses + 2 listings)
- day-24-mi-detroit-zip48221-mobile-pet-grooming-leads.json (1 lead)
