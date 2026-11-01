# Rotation Day 22 — Illinois: Schaumburg × Mobile auto detailing × ZIP 60173

- Date: 2026-11-01
- Cell: Schaumburg, IL 60173. Category label: "Mobile auto detailing" (verified in ~/workspace/van-squad/js/data.js).
- Sources: each business's own website first (fetched and read 2026-11-01), then public Places/Google listings for corroboration of phone, address, and Schaumburg service.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
- Result: 6 businesses qualify. 2 published lead emails verified at their source pages.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Velvaire Auto Detail | (847) 347-6928 | Mobile auto detailing | Schaumburg | https://velvaire.co/ | rishabbshankar@velvaire.co — https://velvaire.co/ | High — own site: mobile interior detailing studio, "We come to you — the studio, at your own driveway," restored at your home or office; its Where We Travel list names Schaumburg; phone and email both on its own site | Business's own website |
| Premiere Mobile Car Detailing | (224) 642-7019 | Mobile auto detailing | Schaumburg | https://premierecardetailingchicagoland.com/ | PremiereMobileCarDetailing@gmail.com — https://premierecardetailingchicagoland.com/ | Medium — own site: "Showroom shine. Zero hassle. We come to you," fully-equipped van to driveway/office/curb, service-area list names Schaumburg, phone and email on its own site; Medium because its Schaumburg Google listing shows a different number — see phone-conflict note | Business's own website + Places listing for its Schaumburg location (1334 Basswood Rd) |
| Tailored Touch Detailing | (847) 767-0170 | Mobile auto detailing | Schaumburg | https://tailoredtouchdetailing.com/ | — none published on own site | Medium — own site is titled Mobile Auto Detailing Services, promises "vehicle detailing at your location," and gives its location as Schaumburg, IL, USA with phone 8477670170 (same digits, unformatted); thin GoDaddy site keeps this at Medium | Business's own website |
| C4 Mobile Car Detailing | (224) 288-4977 | Mobile auto detailing | Schaumburg | http://c4mobiledetail.com/ | — none published on own site | High — own site headline "Professional Mobile Car Detailing at Home," names Schaumburg in its service headline, "car care brought directly to you anywhere… We go anywhere," testimonials describe it arriving at customers' homes; phone 224.288.4977 shown twice on its own site and corroborated by its Schaumburg Places listing (560 S Roselle Rd). Site also brands it "C4 Auto Detailing" | Business's own website + Places listing |
| Premier Detail | (708) 580-8759 | Mobile auto detailing | Schaumburg | https://www.premier-detail.com/ | — none published as text on own site | Medium — own site: "#1 Rated Mobile Car Detailing Professionals," service at your home/apartment/office, "Currently Available in" list names Schaumburg, and body copy repeatedly says call/text 708-580-8759 (corroborated by its Places listing); Medium because the site footer shows a second number — see phone-conflict note. Distinct business from Premiere Mobile Car Detailing above (different name spelling, site, and phone) | Business's own website + Places listing |
| 4kDetailers - Mobile Local Detailing Service | (224) 566-1474 | Mobile auto detailing | Schaumburg | — none verifiable | — none published | Medium — public Places listing at 1031 Lunt Ave, Schaumburg, IL names the business "4kDetailers - Mobile Local Detailing Service" (mobile in its own listing name) and publishes the phone; no website or fuller own-materials description could be found, so mobile confirmation rests on the listing itself | Public Places/Google listing |

## Phone-conflict notes (coordinator)

- **Premiere Mobile Car Detailing:** the file phone (224) 642-7019 is the number its own website publishes in its contact block. Its Schaumburg Places listing (1334 Basswood Rd) shows (224) 268-8306, and sibling Places listings (Algonquin, Wheeling) each show yet another number — a per-location call-tracking pattern. The own-site number was used per the prefer-own-site rule; both numbers were DB-checked and neither is in the live DB.
- **Premier Detail:** the file phone (708) 580-8759 appears repeatedly in its own site's body copy ("call or text 708-580-8759") and in its Places listing (+17085808759). The site footer/structured block shows a second number, (708) 580-6076. The repeatedly published and externally corroborated number was used.

## Dedupe

- Every candidate name and phone was grepped against all of ~/workspace/van-squad/prospecting/ (including tonight's day-22 files) and checked against the live DB via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` on 2026-11-01. All six file phones returned `[]` from the DB and no name/phone match in prospecting files.
- **Exquisite Service Solutions — SKIPPED as duplicate:** it has a dedicated Schaumburg page and would otherwise qualify, but it is already in tonight's day-22 Chicago ZIP 60657 batch (day-22-il-chicago-zip60657-mobile-auto-detailing-inserts.json) with the same phone (312) 487-1493. Same business, same phone = skip.
- **Shine It Up Detailing Specialist — SKIPPED as duplicate:** serves Chicagoland, but already in tonight's day-22 Chicago 60657 batch, phone (773) 543-1152.
- Similar-name check: "Premier Detail" (premier-detail.com, (708) 580-8759) and "Premiere Mobile Car Detailing" (premierecardetailingchicagoland.com, (224) 642-7019) are two different businesses — different sites, phones, and branding — both included deliberately. Unrelated same/similar names in other states' files (Premier Detail Xperience, Tigard OR; ProShine Mobile Car Detailing, Olathe KS) are different businesses with different phones and were not treated as duplicates.

## Excluded

- **M&M Auto Detailing** (Naperville; mmautomotivedetailing.com) — fully mobile and names Schaumburg on its own site, but its own site publishes NO phone (email and online booking only); search results conflate it with an unrelated Connecticut business of the same name. No verifiable public phone for the Illinois business = excluded.
- **Pure Luxury Mobile Detail Spa** (pureluxurydetail.com) — mobile and lists Schaumburg among its service areas, but the only phone published is toll-free (877) 247-4427. Toll-free-only = excluded.
- **LUSTR Auto Detail** (Schaumburg studio; lustrdetail.com) — own materials say it prefers all work at its Schaumburg studio; mobile/travel detailing is by special arrangement for collections, and no phone could be verified on its current site. Studio-first, not a mobile service = excluded.
- **Next LVL Auto Spa** (916 Lunt Ave, Schaumburg; (630) 999-6001) — fixed shop ("visit us / your local shop"), no mobile service claimed = excluded.
- **Automotive Aesthetics** (1425 Wright Blvd, Schaumburg), **Pretty Car Auto Detailing** (707 Remington Rd, Schaumburg), **Ghost Industries** (624 Estes Ave, Schaumburg), **Tint World Schaumburg** — fixed storefront detail shops with no mobile/on-site service found = excluded.
- **AutoShine Mobile Car Detailing** (Rolling Meadows; autoshine.pro) — own site names Naperville/Chicago/surrounding suburbs but never Schaumburg, and its Places phone (224) 315-9096 conflicts with its own site's (224) 804-2904 = excluded.
- **Xclusive Detailing Customs** (xdcustoms.com; (847) 501-0456) — genuinely mobile ("we will come right to your driveway"), but its own stated core service area is Crystal Lake / McHenry County and its city guides do not include Schaumburg = excluded for this cell.
- **GP Mobile Detailing** (Roselle Places listing; (224) 231-8943) — the apparent website, gpmobiledetail.com, belongs to a Charlotte, NC business with a different phone ((704) 201-3123); the Roselle listing alone could not tie the phone to a mobile Schaumburg service = excluded.
- **Proshine Mobile Detailing** (Roselle; (630) 283-6493) — its Google listing description says "We come to you!", so mobile is confirmed, but no source found states that it serves Schaumburg = held out rather than assumed.
- **Roselle Mobile Detailing** (book.roselle-mobile-detailing.workers.dev) — mobile, women-operated, neighboring Roselle, but no public phone published anywhere found (booking form and email only) = excluded.

## ZIP note

No expansion was needed: six businesses qualify for Schaumburg without leaving the cell — three are based in Schaumburg itself and the other three explicitly name Schaumburg in their own stated service areas. No business in this batch publishes its own served-ZIP list, so service_zips = ["60173"] rests on each business's stated Schaumburg service (the target ZIP is Schaumburg's central ZIP); no ZIPs were invented.

## Coordinator correction (2026-11-01, post-deploy)
Premier Detail's phone was restored to the file's verified (708) 580-8759 (its own site's FAQ and its Places listing) after an in-run "correction" to (708) 981-3351 proved unsupported — that number appears nowhere in connection with the business. Velvaire Auto Detail and Premiere Mobile Car Detailing remain excluded from the run; a later verifier passed their file versions — safe-direction exclusions, may be re-researched on a future night. 4kDetailers was kept: a Places listing confirms its exact name (which itself claims mobile service), phone, Schaumburg address, and category, consistent with listing-only inclusions elsewhere tonight.
