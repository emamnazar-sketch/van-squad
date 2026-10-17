# Rotation Day 4 — Utah: West Valley City × Handyman × ZIP 84120

- Researched: 2026-10-17 (nightly rotation, Day 4)
- Cell: Utah × West Valley City × ZIP 84120 × category "Handyman" (exact label)
- Sources: each business's own website first, then public listings (Google Business records returned in search, BBB, Maven compendium). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED (coordinator inserts centrally)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Better Valley Handyman Services | (385) 800-1261 | Handyman | West Valley City | https://bettervalleyhandyman.com/ | — none found in readable plaintext | High — own site lists phone (385) 800-1261, says "When we're at your house…" / in-home repairs (drywall, painting, doors, TV mounting), and lists West Valley City in its service-area list; Google listing address 4453 S Red Cherry Cir, West Valley City, and BBB profile is for West Valley City | Business's own website + Google listing + BBB |
| As You Wish Handyman | (801) 923-3577 | Handyman | West Valley City | http://www.asuwishhandyman.com/ | — email link on own site is address-protected / not readable, so none recorded (never guessed) | High — own site lists phone (801) 923-3577 and "Any project or repairs — Give us a call… we can give you an estimate" for residential work; Google listing address 4964 W Janette Ave, West Valley City, described as maintenance/repair/remodeling of residential properties in the greater Salt Lake area | Business's own website + Google listing |
| Fix It Up Handyman Services | (801) 638-2823 | Handyman | West Valley City | https://www.fix-it-up-handyman.com/ | — none found | High — own site lists phone 801-638-2823 ("Call or text Brian"), describes affordable home repairs/installations/painting at customers' homes serving the Wasatch Front from Ogden to Provo; Google listing address 3523 W 3650 S, West Valley City with the same phone | Business's own website + Google listing |
| Fast Fair Friendly Handymen | (801) 486-4324 | Handyman | West Valley City | http://www.fff-contractors.com | info@fff-contractors.com — own website http://www.fff-contractors.com (contact page) | Medium — own site's contact page lists phone (801) 486-4324 and the email, and a "Handy Men" service section for building/repair jobs at the customer's location; Google listing for this business is at 2494 W 3965 S, West Valley City but shows a different local number, (801) 969-7397 — own-site phone used per prefer-own-site rule, discrepancy noted here; own site copyright is dated, hence Medium | Business's own website + Google listing |
| Su Casa Handyman | (385) 955-0608 | Handyman | West Valley City | https://sucasahandyman.com/ | — email link on own site is address-protected / not readable, so none recorded (never guessed) | High — own site lists phone (385) 955-0608, describes on-site evaluation and completing handyman work in customers' homes, and says it is based in Taylorsville (adjacent) and serves "from West Valley to Draper" / the whole Salt Lake Valley; Google listing phone matches | Business's own website + Google listing |
| Your Handyman Pros | (801) 949-2376 | Handyman | West Valley City | https://yourhandymanpros.com/ | — none found | High — own site's project article says "Call or text Mike at 801-949-2376" and "We work all over Sandy, Herriman, Riverton, West Valley City, Magna, and Bountiful"; another own-site article says it "proudly serves the entire Salt Lake Valley, including … West Valley City"; Google listing (Magna base, adjacent west) gives the same phone and In-Home Service category | Business's own website + Google listing |

## Dedupe
- Grepped every name, phone, website domain and email in this batch (e.g. "Better Valley", "800-1261", "As You Wish", "923-3577", "Fix It Up Handyman", "638-2823", "Fast Fair Friendly", "fff-contractors", "486-4324", "969-7397", "Su Casa Handyman", "955-0608", "Your Handyman Pros", "949-2376") against all files in ~/workspace/van-squad/prospecting/ on 2026-10-17: no matches. No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- A-1 Rehab Handyman Services LLC (3988 Mooregate Ave, West Valley City; (801) 414-2940) — EXCLUDED: its own website https://a1rehabhandyman.com/ returns "Website Suspended", so no own materials confirm a current local operator.
- Nabawi Handyman LLC (2112 W Big Splash Dr #103, West Valley City; (385) 770-0996) — NOT INCLUDED: its own website could not be fetched/read during this run, so own-materials verification of on-site work was not completed; Google listing alone was not used.
- TopHat Handyman (4009 S 4000 W, West Valley City; (801) 839-6882) — NOT INCLUDED: its own website could not be fetched/read during this run, so own-materials verification was not completed.
- Jacob's Handyman Service / Jacob's Remodeling & Handyman (2548 W Swasey Dr, Taylorsville; own site phones (385) 955-4364 / (801) 834-7408, email service@jacobshms.com on its own site) — EXCLUDED for this cell: its own site names Taylorsville, Murray, West Jordan, Kearns and Salt Lake City as its service areas but does not name West Valley City, so service to this cell is not confirmed from its own materials.
- Affordable Assistance LLC ((385) 522-9893), Murray General Construction ((385) 368-8517), Done right llc ((801) 870-2377) — NOT INCLUDED: only Google `business.site` website links (discontinued Google Business Sites) with no fetchable own website confirming on-site handyman work in own materials.
- Handyman and Yard Services Cesar O ((801) 548-6922), CLK handyman ((385) 434-9056), FAST Mobility ((801) 252-6970) — EXCLUDED: no own website / no verifiable own materials; listing-only records.
- Loc's All Maintenance ((385) 244-8686) — EXCLUDED: only a Handy.com marketplace profile, no local operator's own site.
- A-OK Handyman & Remodels ((435) 893-1795) — NOT INCLUDED: website on file is a bath-remodel company site (revivebathllc.com), not a general handyman own site confirming this business.
- Ace Handyman Services, Mr. Handyman, Handyman Connection, Angi / Thumbtack / HomeAdvisor marketplace-only listings — EXCLUDED per gates: national franchise / lead-gen with no local operator phone on an own site.

## ZIP note
- Target ZIP 84120 yielded at least 3 qualifying businesses in West Valley City itself (Better Valley Handyman Services, As You Wish Handyman, Fix It Up Handyman Services are West Valley City–based per their Google listings), so no expansion was required to reach the minimum.
- Adjacent-area operators included only where their own sites explicitly confirm West Valley City service: Su Casa Handyman (Taylorsville base, "from West Valley to Draper") and Your Handyman Pros (Magna base, own site explicitly lists West Valley City). Fast Fair Friendly Handymen's Google listing is in adjacent ZIP 84119 in the same city (West Valley City).
- service_zips in the inserts file is ["84120"] for every business, per the cell spec — no other ZIP was added because none of these businesses publishes a stated service-area ZIP list on its own site (they publish city/region service areas, not ZIP lists).

## Email leads
- 1 published email collected, from the business's own website: Fast Fair Friendly Handymen — info@fff-contractors.com (see the matching -leads.json).
- As You Wish Handyman and Su Casa Handyman show email links on their own sites, but the addresses are protected/not readable in the fetched pages, so they were NOT recorded — never guessed.
