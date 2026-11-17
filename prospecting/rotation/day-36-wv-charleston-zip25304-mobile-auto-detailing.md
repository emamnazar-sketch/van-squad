# Day 36 — West Virginia — Charleston — ZIP 25304 — Mobile auto detailing

Cell: WV | Charleston | 25304 | Mobile auto detailing. Researched 2026-11-16, public information only, business's own website first, then public listings (Google Business, finddetailing.com). Charleston's mobile-detailing territory is thin: only 2 businesses met every gate (mobile/on-site confirmed from the business's own materials + a verifiable non-toll-free public phone + Charleston service). Expansion to adjacent Charleston ZIPs was considered — the additional mobile candidates found sit in South Charleston (a different city) or had no verifiable phone, so no expansion business qualified; see Excluded. No padding was added to reach 3.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Appalachian Armor Mobile Detailing | (304) 935-0363 | Mobile auto detailing | Charleston | https://appalachianarmor.com/ | info@AppalachianArmor.com — own website FAQ/contact section (https://appalachianarmor.com/faq) | High — own site: "that's one of the best parts of mobile detailing. We can come to your home, office, or anywhere else"; phone and email both on own site; own service-area list explicitly includes Charleston (business is based in nearby Clendenin, WV and serves the Kanawha Valley including Charleston) | Own website (FAQ page fetched and read in full); Google search results confirming same phone/site | No match in /tmp/day36-dedupe.txt (3,360 rows, name + phone checked) or any prospecting file (name + phone grep clean) |
| Dirty Details | (304) 531-7401 | Mobile auto detailing | Charleston | http://dirtydetails304.com/ | None published found | Medium — business's own Google listing description: "Busy schedule? Your car still deserves the best. We come to your home and deliver a full professional detail."; finddetailing.com likewise describes it bringing detailing "to your driveway or chosen location in Charleston"; phone and Charleston address (22 Arney Dr) on its Google listing; own website exists but its fetch timed out in this pass, so mobile confirmation rests on the business's own listing description rather than its site | Google Business listing (name, phone, address, own description); finddetailing.com Charleston listing | No phone match in /tmp/day36-dedupe.txt (3,360 rows) or any prospecting file (phone grep clean); the words "Dirty Details" appear once in a day-35 Virginia Beach file as an excluded fixed-location car wash there — different business, no phone or address match |

## Excluded / held out

- **National Detail Pros (Charleston page), (800) 601-0626** — EXCLUDED: national lead-gen / call-center pattern with a toll-free 800 number and no local operator; toll-free numbers are excluded by this cell's brief.
- **AutoLabs304 Premium Detailing, Charleston** — EXCLUDED: own site (autolabs304.com) strongly confirms mobile service ("WE Travel to YOU!", "Service Area – We Come to You", based in Charleston) and publishes autolabs304@gmail.com, but NO verifiable public phone was found on its own site or in any public listing — fails the phone gate.
- **Out N About Mobile Spa, Charleston, (304) 988-6270** — EXCLUDED: Google listing only (Auto Detailing Service, Charleston); no website or other own materials found to confirm mobile/on-site detailing from the business itself.
- **304 Detailer, (304) 437-1541, 2201 7th Ave, Charleston** — EXCLUDED shop-only: own site (fetched and read in full) presents a fixed Charleston shop ("Our Location", shop hours) and never claims mobile/on-site service.
- **Meticulous Reflections LLC, (681) 214-5767, South Charleston** — EXCLUDED for this cell: its own Google description says "A Mobile detailing company", but the business is in South Charleston, WV — a different city from this cell's Charleston, and the adjacent-ZIP expansion applies to Charleston ZIPs; also no own website found.
- **Elk City Auto Spa, (304) 345-2007, Charleston; Dottie's Auto Spa, (304) 340-3545, Charleston; Capitol Car Wash, (304) 343-0566, Charleston; West Side Customz and Detailing, (681) 205-8070, Charleston; Kanawha City Clean Up, (304) 952-4644, Charleston** — EXCLUDED: fixed-location car wash / shop detailing facilities; no mobile/on-site confirmation from their own materials.
- **Stotties Mobile Auto Detailing, (240) 818-1857** — EXCLUDED: HQ is Hagerstown, MD; its "Charleston, WV" page is a location landing page for Charlestown/Eastern Panhandle service, not a Charleston (Kanawha County) operator.
- **Tony's Touch Auto Detailing, (540) 313-1560, Charles Town** — EXCLUDED: Charles Town, WV (Eastern Panhandle), not Charleston.
- **Full Circle Mobile Detailing, LLC, Fairmont, WV; Morgan Mobile Detailing, North Central WV; DC Detail Bros (dcdetailing.shop)** — EXCLUDED: not Charleston-area operators (Fairmont / North Central WV / location and phone unverifiable for DC Detail Bros — no phone found).

## Counts

- Qualifying businesses found and written to inserts: **2**
- Published business emails collected (leads): **1** (Appalachian Armor Mobile Detailing)
- Excluded / held out: 9 named entries above (plus 5 fixed-location Charleston shops grouped in one entry)
- Shortfall note: fewer than 3 qualified — Charleston 25304 and its adjacent Charleston ZIPs yielded no third business that passed all gates; the nearest additional mobile candidate (Meticulous Reflections LLC) is in South Charleston, a different city.

## Dedupe method

Checked every included name and phone against: (1) /tmp/day36-dedupe.txt (3,360 live-DB rows; name search + phone search — all clean), and (2) every file in ~/workspace/van-squad/prospecting/ via grep on names and phone formats (candidate phones: zero hits; the single name-word hit is the unrelated Virginia Beach "Dirty Details" noted in the table).
