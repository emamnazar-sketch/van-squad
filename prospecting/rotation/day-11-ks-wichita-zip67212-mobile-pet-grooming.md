# Rotation Day 11 — Kansas: Wichita × Mobile pet grooming × ZIP 67212

- Researched: 2026-10-21 (nightly rotation, Day 11)
- Cell: Kansas × Wichita × ZIP 67212 (west Wichita) × "Mobile pet grooming" (exact label verified in ~/workspace/van-squad/js/data.js)
- Cell note: Wichita's mobile-grooming supply is THIN. Most Wichita groomers found are storefront salons with no mobile service (see Excluded). Only 2 businesses passed all gates. Both state Wichita / Wichita & surrounding areas service at city level, not ZIP lists — neither publishes 67212 (or any ZIP list), so service_zips = ["67212"] only; no ZIP was invented. No adjacent-ZIP expansion changes this count — the qualifying operators are citywide Wichita mobile operators, already counted here.
- Sources: each business's own website first, then public listings (Google Business, FindGlocal/Facebook mirror, Vetster). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| K9 Design Pet Salon and Mobile Grooming | (316) 322-5024 | Mobile pet grooming | Wichita | http://www.k9designwichita.com/ | None found — no email published on its own site or listings (see note below) | High — own site: "proud to serve Wichita, KS and surrounding areas with both our luxury pet salon and all-inclusive mobile grooming services", lists "Mobile Grooming: (316) 322-5024" separately from its salon line, service-area list includes Wichita, Goddard, Maize and surrounding areas; its mobile posts describe dogs walking into the van on a recurring mobile schedule | Business's own website + Google Business listing |
| QuickClips | (316) 573-7450 | Mobile pet grooming | Wichita | https://quickclipsict.square.site/ | None found | Medium — own Square site is titled "QuickClips Mobile Pet Services"; its own posts call it "my mobile grooming business", say clients welcome her into their homes / "right at your doorstep", "Wichita & surrounding areas", phone (316) 573-7450 on its public listing; CAVEAT: in late 2025–2026 posts she moved to a reduced pop-up / occasional schedule and paused recurring appointments — still operating (posts Sep 2026), re-verify availability on claim | Business's own Square site + FindGlocal (Facebook mirror) listing |

## Dedupe
- Live DB (795 active businesses via vs_rest.py): grep for "K9 Design", "QuickClips", "322-5024", "573-7450" — no matches. No (316) Wichita businesses in DB at all before Day 11.
- All prospecting files (~/workspace/van-squad/prospecting/, incl. Day-11 Wichita 67206 house-cleaning and 67207 detailing cells): same greps — no matches.
- Within-batch: no duplicates.

## Email note (important)
- A search result shows k9designgroomingsalon@gmail.com — that belongs to a DIFFERENT "K9 Design Grooming Salon LLC" in Tacoma/Spanaway, WA (phone 253-531-5850). It was NOT attributed to the Wichita business and is NOT in the leads file.
- Neither included business publishes an email, so the leads file is an empty array.

## Excluded (checked, did not pass the gates)
- Celestial Pet Spaw (9100 W Central Ave, 67212 area), Millie's Dog Grooming, Tiffany's Dog and Cat Grooming, Lavish Mutts LLC (6630 W Central Ave), Muttamorphosis, Pristine Paws LLC, The Hairy Sofa, Keep It Cute Grooming, Scenthound Wichita NW, Petco / Pet Supplies Plus grooming — storefront salons only; no mobile/at-home service confirmed from their own materials.
- Jocelyn's Haus of Fluff, (316) 512-1756 — "in-home environment" is the groomer's own home salon, not grooming at the customer's home/curb; no mobile-to-customer confirmation.
- Emily's Dog Grooming — home-based at groomer's College Hill home, not mobile to customer; also not accepting new clients.
- Spotless Groomers, (913) 608-4520 — mobile, but Kansas City metro (Overland Park/Olathe/Leawood), not Wichita.
- The Paw Spa Elite / VIP Mobile Grooming — Oklahoma (Moore/Mustang/Yukon), not Kansas.
- Zoomin Groomin / Aussie Pet Mobile / Woofie's — no Wichita location/phone verifiable; nearest Woofie's found was Lee's Summit–Kansas City South.
- Groomit (Goddard page) — national app/lead-gen booking platform, no local Wichita operator or local phone.
- Lucky Pup Grooming (pawstyle.org) — directory-style page with a placeholder-looking address and no verifiable public phone; not confirmed as a real local mobile operator.

## ZIP note
- Target ZIP 67212 for both businesses. Neither publishes a ZIP list; both publish city-level Wichita service. service_zips contains only 67212 — no ZIP invented.
- Email leads: 0.
