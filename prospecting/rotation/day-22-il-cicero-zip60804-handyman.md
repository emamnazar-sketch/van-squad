# Day 22 — Illinois — Cicero — ZIP 60804 — Handyman

Date: 2026-11-01
Cell: IL / Cicero / 60804 / Handyman
Sources: Business's own website first, then public listings (Google Business, BBB, Porch). No database insertion performed by this worker.

Cicero ran thin, as expected: only one qualifying business is based in Cicero itself, and the national franchises that dominate "handyman Cicero" search results were excluded. The cell was expanded to directly adjacent ZIPs/towns (Chicago 60623, Stickney 60402) and to Chicago-based operators whose own sites claim Chicago plus its neighboring/surrounding communities. All 5 included businesses are Medium confidence — none of them names Cicero explicitly on its own website, and that is stated plainly in each reason below rather than papered over.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Gamino's Handyman | (708) 539-9296 | Handyman | Cicero |  | None published verifiably | Medium — based in Cicero itself (3501 S Austin Blvd, Cicero, IL 60804) with primary Google category "Handyman" and Active status, so it serves 60804 by location; phone comes from its Google Business listing only and no own website was found | Google Business listing |
| Rocinante Repairs | (630) 562-6791 | Handyman | Cicero | https://rocinante-repairs.com/ | None published verifiably | Medium — own site confirms a Chicago-based repairs business doing repairs in-house at customers' properties ("running electrical conduit and even demo-ing concrete floors"); listing address 2401 S Karlov Ave, Chicago, IL 60623 directly borders Cicero 60804; phone from the listing only, single consistent number (own site publishes no phone) | https://rocinante-repairs.com/ (own site) + Google listing |
| AYG Home Service | (312) 285-6709 | Handyman | Cicero |  | None published verifiably | Medium — BBB A+-rated Handyman based in directly adjacent Stickney, IL (6905 Pershing Rd, Stickney, IL 60402) and shown on BBB's Cicero-area pages as serving Cicero, IL; phone (312) 285-6709 consistent across BBB and Porch listings; no own website was found (an unrelated AYG Heating and Cooling in Lake County is a different business) | BBB listing + Porch listing |
| Fix It People | (312) 898-9300 | Handyman | Cicero | https://www.fixitpeople.com/ | hello@fixitpeople.com — https://www.fixitpeople.com/ | Medium — own site publishes (312) 898-9300 and hello@fixitpeople.com and describes a Chicago handyman team that comes into your home ("We'll get a team into your home"); it serves Chicago and neighboring cities and Cicero borders Chicago, but Cicero is not named on its own site | https://www.fixitpeople.com/ (own site) |
| Samanco Construction | (773) 298-0620 | Handyman | Cicero | https://samanco.net/ | None published verifiably | Medium — own Handyman Services page publishes (773) 298-0620 and calls Samanco "a complete home improvement, remodeling and handyman service" serving "Chicago and the surrounding communities" (Cicero is a surrounding community bordering Chicago), with the owner coming out to give estimates; far-south Chicago base (11109 S St Louis Ave) and no Cicero-specific claim, hence Medium not High | https://samanco.net/category/handyman-services/ (own site) + Google listing |

## Dedupe
- Grepped all files in ~/workspace/van-squad/prospecting/ for every candidate name and phone (formatted and unformatted — Gamino, Rocinante, AYG Home, Fix It People, Samanco, and all five phones): no matches for any of the 5 included businesses.
- Live DB check via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` for all 5 phones: HTTP 200, empty result [] for every phone — no duplicates in the live database.
- No day-22 Cicero file existed on disk before this batch; no included business shares a name or phone with another included business.
- Businesses already inserted tonight in the Day 22 Oak Park 60302 and Chicago 60618 handyman cells (Near Me Handyman Services LLC, Moore Handyman Solutions LLC, The Oak Park HandyHuman, Inc., Andy Sjostrom Handyman Services, Chicago Handyman, Punch List Pros LLC, and the 60618 supplement businesses) were NOT reused here even where they serve the western suburbs — same name or same phone = skip rule applied throughout.

## Excluded (checked but failed gates)
- Mr. Handyman of Lincoln Park — explicitly serves Cicero, IL on its own site, phone (312) 585-7482 — national franchise chain (Neighborly), excluded following the Day 22 precedent for this brand.
- Ace Handyman Services (Oak Park / Chicagoland locations) — national franchise chain (Ace Hardware), excluded on the same franchise basis.
- Aguilar A+ Home Maintenance (Berwyn, 2512 Ridgeland Ave) — PHONE CONFLICT: its own website shows (708) 477-7743 while its Google listing shows (708) 500-8932, excluded (same conflict noted in the Day 22 Oak Park batch).
- Big City Home Repair LLC (Chicago) — PHONE CONFLICT on its own website, which shows both 708.937.2579 and 312.714.5244; the same site also carries template placeholder contact details (123-456-7890 / a San Francisco address), so no phone on it is trustworthy, excluded.
- HandiCo Inc. (2140 W Fulton, Chicago) — PHONE CONFLICT on its own website, which publishes both 773-862-6363 and 312-725-6635, excluded.
- Ford Handyman (Forest Park) — PHONE CONFLICT on its own website: the page shows both (708) 838-2182 and (708) 905-6054, excluded (also excluded in the Day 22 Oak Park batch).
- Top Notch Handyman (La Grange Park) — (708) 576-4395 on its own site, but its own published service-area list (Brookfield, North Riverside, Riverside, Westchester, etc.) does NOT include Cicero, so it cannot be claimed for 60804, excluded.
- fixitjoe (Berwyn, 7031 29th Pl) — (708) 749-2358 on a Google listing only; no own website or own materials found, and its only other trace is a TaskRabbit platform profile (platform listings excluded), so on-site handyman service could not be confirmed from the business's own materials, excluded.
- Romero's Remodeling (Cicero, 1600 S 55th Ct) — (773) 431-8858 on a Google listing only; primary category is Contractor with Handyman only a secondary category, and no own website/materials were found to confirm handyman work at customers' homes, excluded.
- FixBuddy Handyman (Brookfield, 4627 Eberly Ave) — (630) 780-7618 on its Google listing; its own website returned no verifiable content in this run and no claim to serve Cicero was found, excluded.
- Vince's Handy Services (Chicago, 1131 S Mayfield Ave) — (773) 680-4964, Google listing only, no own website/materials found, excluded.
- B.D.M.Y.A. handyman solutions (Chicago, 5065 W Gladys Ave) — (773) 600-3988, Google listing only, no own website/materials found, excluded.
- VIK's HVAC and Handyman (North Riverside) — (708) 698-6350, listing status "Possibly Temporarily Closed", excluded.
- Roman's Remodeling (Berwyn) — listing status "Permanently Closed", excluded.
- Handyman Jack LLC (Oak Park) — listing status "Possibly Temporarily Closed" and its website is a parked domain with conflicting toll-free numbers, excluded.
- E&M Renovation — only a Thumbtack platform listing (platform listings excluded).
- Town of Cicero Senior Services Handyman Program — a free municipal program for Cicero seniors, not a commercial business, excluded.
- San Marcos General Construction Corp (Cicero, 2404 S Laramie Ave, (708) 780-8007) — a licensed general contractor; no handyman service at customers' homes was confirmed from its materials, excluded.

## ZIP note
- Expansion was needed and is reported honestly: only 1 of the 5 included businesses (Gamino's Handyman) is based in ZIP 60804 itself. The rest come from directly adjacent areas — Chicago ZIP 60623 (Rocinante Repairs, on Cicero's eastern border), Stickney ZIP 60402 (AYG Home Service, directly south of Cicero) — plus two Chicago-based operators (Fix It People, Samanco Construction) whose own sites claim service across Chicago and its neighboring/surrounding communities, which includes Cicero.
- service_zips in inserts.json is ["60804"] only for every business, because none of the businesses publish a specific ZIP list — they publish city/area service claims, and ZIPs were not invented.
- Honest shortfall note: 5 qualifying businesses were found against a 4–8 target. Cicero's handyman market is dominated by national franchises (excluded), platform listings (excluded), and listing-only operators with no verifiable own materials (excluded above).
