# Day 44 — MA | Medford | ZIP 02155 | Mobile auto detailing

Cell: Massachusetts, Medford, ZIP 02155, category "Mobile auto detailing" (exact label verified in js/data.js). Researched 2026-11-25. Public information only; each business's own website checked first, then Google listings.

Expansion / territory note: Medford's own detailing businesses are almost all shop-based (see exclusions). Fewer than 5 Medford-based mobile operators exist, so the cell was filled with mobile operators whose own sites explicitly list Medford in their service area (Lucky, UFO), plus mobile operators based in immediately adjacent Somerville/Malden ZIPs bordering 02155 (Pure Gleam, Rinse & Shine). Adjacent Medford ZIP 02153 was also swept — no additional qualifying mobile operator found there. Territory ran thin; no padding added. Count is 4, below the 5–9 target, reported honestly.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|---|
| Lucky Car Detailing | (774) 563-3777 | Mobile auto detailing | Medford | https://detailinglucky.com/ | detailinglucky@gmail.com — own site, e.g. https://detailinglucky.com/interior-exterior-detailing-boston/ | High — own site: fully mobile, "We come to your home, office, or apartment complex with everything needed"; its own service-area lists explicitly include "Mobile Car Detailing, Medford, MA"; phone + email printed on own site; base address published on own site: 171 Lexington St, Watertown, MA 02472 | Own website | No match in live DB dump (/tmp/vs_dump.json, 3,949 rows) or prospecting files by name or phone. It was noted (not included) in the Day 44 Boston cell file as Watertown-based; it was not inserted there. |
| UFO Detailing | (781) 226-4197 | Mobile auto detailing | Medford | https://www.ufodetailing.com/ | ufodetailing.ma@gmail.com — own site, https://www.ufodetailing.com/greater-boston-area | High — own Greater Boston page: "we bring professional mobile car detailing to Greater Boston… right at your doorstep", "fully equipped vans", "We come to your home, office, or parking lot"; its served-cities list explicitly includes Medford; phone + email printed on own site | Own website | No match in DB dump or prospecting files by name or phone |
| Pure Gleam Detailing | (617) 959-5222 | Mobile auto detailing | Medford | https://www.puregleamdetailing.com/ | Info@puregleamdetailing.com — own site contact block, https://www.puregleamdetailing.com/ | Medium — own site: "Car detailing directly to you", detailing "while you enjoy the comfort of your own surroundings", "right at your doorstep"; phone + email printed on own site; Google listing address 165 Middlesex Ave #1022, Somerville (immediately adjacent to 02155), but the fetched site does not name Medford explicitly, hence Medium | Own website; Google listing | No match in DB dump or prospecting files by name or phone |
| Rinse & Shine Mobile Detailing | (781) 850-5557 | Mobile auto detailing | Medford | https://rinseandshinemobieldetailing.glossgenius.com/ | — none published on its own booking site | Medium — own booking site: "professional mobile detailing. We come to you", serving its Massachusetts community; phone printed on own site; Google listing address 40 Eastern Ave, Malden (bordering Medford), but no explicit Medford mention and no standalone website beyond its booking page, hence Medium | Own booking website; Google listing | No match in DB dump or prospecting files by name or phone |

## Excluded

- Viper Car Detailing ((617) 468-8211) — genuinely mobile and lists a Medford address (170 Governors Ave), but ALREADY in the live DB and already included in the Day 44 Boston 02115 cell — dedupe skip (same name + same phone).
- Detail Delivery ((781) 474-2585), Massachusetts Mobile Detailing ((617) 758-8148), One Way Mobile Detailing, Carmob Detail — already in the live DB / Day 44 Wave-1 cells — dedupe skips.
- Top Notch Auto Detail (26 James St, Medford, 02155; (617) 488-9617) — own site says detailing is done "from our Medford shop"; storefront-only, no mobile at-customer-location service confirmed. Its published email contact@topnotchautodetailma.com was therefore NOT collected (business excluded).
- Legacy Carsmetics (24 James St, Medford; (781) 698-2400) — own site describes a "state-of-the-art facility"; storefront-only, no mobile service confirmed.
- Riverside Automobile Detail (504 Riverside Ave, Medford; (781) 219-4316) — own site testimonials describe customers bringing cars in; no mobile service or phone confirmed on its own site; storefront-style, excluded.
- The Detail Shop (183 Mystic Ave, Medford; (781) 975-6386) — shop-based detailing/PPF/ceramic, no mobile service confirmed from own materials.
- K Professional Auto Detailing (682 Mystic Ave, Somerville; (857) 234-8898) — own site invites customers to "one of our convenient location[s]"; location-based, not mobile.
- ScrubaDub Car Wash and Prestige Car Wash (Medford locations) — fixed car-wash chains, not mobile detailing.
- Auto Gleam Mobile Car Detailing ((617) 433-0492) — FLAG: its domain autogleamdetail.com no longer serves the business (it now serves unrelated gambling content), so mobile service could not be confirmed from the business's own current materials; excluded. Its old press-release email was NOT collected.
- JH Mobile Car Washing and Detailing (Stoneham; (857) 326-1205) — own website jhmobiledetail.com is stopped / "website not found", so mobile service could not be confirmed from its own current materials; excluded.
- Mobile Supreme Auto Detail (Malden; (857) 269-5118) — Google listing shows "Possibly Temporarily Closed" and no verifiable own website; excluded.
- Express Detailing Solution (86 Jerome St, Medford; (781) 866-2132) — listing only, no own website found, mobile service not confirmed from its own materials; excluded.
- Vapor Wash 91 (Malden; (617) 487-2813) — own site could not be fetched/verified; mobile detailing not confirmed from its own materials; excluded.

## Leads

- Lucky Car Detailing — detailinglucky@gmail.com — source: https://detailinglucky.com/ (own site)
- UFO Detailing — ufodetailing.ma@gmail.com — source: https://www.ufodetailing.com/greater-boston-area (own site)
- Pure Gleam Detailing — Info@puregleamdetailing.com — source: https://www.puregleamdetailing.com/ (own site)

## Notes

- service_zips: target ZIP 02155 for every business, plus only ZIPs the business itself publishes — Lucky's own published base address ZIP 02472 (Watertown). No other business published a specific service-ZIP list, so none was invented.
- Count: 4 businesses (2 High, 2 Medium), 4 listings, 3 published-email leads.
- FLAGS for coordinator: (1) count 4 is below the 5–9 target — Medford territory is thin for verified mobile detailers; (2) Auto Gleam's domain appears hijacked/repurposed — do not use it; (3) Pure Gleam and Rinse & Shine are Medium because their own sites confirm mobile service and adjacent bases but do not name Medford explicitly.
