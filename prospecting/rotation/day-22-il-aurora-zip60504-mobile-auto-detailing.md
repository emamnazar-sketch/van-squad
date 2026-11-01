# Van Squads — Day 22 Cell Research

- Date: 2026-11-01
- Cell: Illinois — Aurora — ZIP 60504 — Mobile auto detailing
- Sources: businesses' own websites first, then Google Business / Places listings and BBB. All mobile claims below are from the business's own materials unless noted.
- Count prepared: 5 businesses

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Platinum Mobile Detailing and Car Wash | (331) 226-7526 | Mobile auto detailing | Aurora | http://wedetailusa.com/ | none published | High — own site (WE Detail brand, same phone): "PROFESSIONAL MOBILE DETAILING — Premium mobile detailing brought directly to your driveway… Aurora, Illinois"; Google listing at 4209 Chesapeake Dr, Aurora with same phone | Own website + Google listing |
| VK Detailing | (331) 220-4109 | Mobile auto detailing | Aurora | http://vkdetail.com/ | info.vk.prime@gmail.com — http://vkdetail.com/ (Get in Touch) | High — own site: "Premium Mobile Detailing in Naperville & Aurora… We come to you… mobile service covering Naperville, Aurora"; phone on own site, matching listing at 4450 Fox Valley Center Dr, Aurora | Own website |
| Mavs Mobile Detailing | (708) 701-0333 | Mobile auto detailing | Aurora | https://www.mavs-mobile-detailing.com/ | none published | High — own site: "We Come To You — Home, office, or anywhere… We bring all equipment… to your location"; service area explicitly lists Aurora; phone on own site | Own website |
| Lux Tinting & Detailing | (331) 431-9772 | Mobile auto detailing | Aurora | https://luxtintingdetailing.com/ | luxdetailing8@gmail.com — https://luxtintingdetailing.com/ | Medium — Aurora shop (882 S Union St) whose own site repeatedly offers mobile detailing where water/electricity are accessible; phone and email on own site | Own website |
| South Side Detail | (708) 620-2411 | Mobile auto detailing | Aurora | http://southsidedetail.com/ | info@southsidedetail.com — http://southsidedetail.com/ | Medium — own site: premium mobile detailing, fully equipped van, "we come to you" (Plainfield base); BBB profile lists Aurora in its service area; phone and email on own site | Own website + BBB |

## Dedupe

- Grepped `~/workspace/van-squad/prospecting/` for every candidate name and phone: no matches for (331) 226-7526, (331) 220-4109, (708) 701-0333, (331) 431-9772, or (708) 620-2411, and no prior inserts for these five businesses. Similar names in other states (e.g. Platinum Mobile Detailing, Albuquerque NM, different phone) are different businesses.
- Live DB checked per phone via vs_rest.py `businesses?select=name,phone&phone=eq.<phone>` for all five phones (and for AutoShine's (224) 804-2904): every query returned HTTP 200 with `[]` — no duplicates in the live directory.
- Tonight's other Day-22 files checked: no Aurora 60504 detailing cell was previously worked; the Day-22 Schaumburg detailing file's AutoShine conflict note was applied here (see Excluded).

## Excluded

- **AutoShine (autoshine.pro, (224) 804-2904 on its own site)** — EXCLUDED, conflicting phone: tonight's Day-22 Schaumburg file notes its Places phone is (224) 315-9096, different from its own site's (224) 804-2904.
- **M&M Auto Detailing (mmautomotivedetailing.com)** — EXCLUDED, no verifiable public phone: its own site is fully mobile and serves Aurora, but publishes only an email (mmautodetailinggg@gmail.com) and online booking, no phone.
- **National Detail Pros (Aurora page)** — national lead-gen platform, toll-free (800) 601-0626 only, no local operator.
- **No-H2O South West Chicago ((630) 344-9788)** — franchise on-demand service performed largely at parking-lot pop-ups; not a distinct local home-mobile operator for this cell.
- **Caleb's Power Wash / Integrated Power Wash & Mobile Detail ((630) 253-9337)** — current own site is primarily pressure washing / fleet washing; no clear consumer mobile auto detailing at the customer's home confirmed from its own current materials.
- **Just The Details / Ceramic Pro Sycamore ((815) 991-9230)** — Sycamore shop; its Aurora "mobile" claim appears only on generic SEO city pages published for many towns.
- **C & J Auto Care, Fuller's Car Wash, Hope On Wheels, Deep Sea Detail Shop, Golden Hands Detailing and other Aurora detail shops** — storefront-only, no mobile service confirmed from their own materials.
- **Instant Detail ((331) 321-5283) and Taylor-Made Auto Detailing ((630) 201-1228)** — listings only; no own materials confirming mobile/on-site service found.

## ZIP note

All five businesses were verified for ZIP 60504 without expansion: two are Aurora-based (Platinum/WE Detail on Chesapeake Dr and VK Detailing on Fox Valley Center Dr, both in the 60504 area, plus Lux in Aurora), and Mavs and South Side Detail explicitly serve Aurora from their own materials / BBB service area. No adjacent-ZIP expansion was needed. `service_zips` is `["60504"]` for every business — no business itself published additional service ZIPs, so none were added.

## Leads

3 published emails collected (VK Detailing, Lux Tinting & Detailing, South Side Detail) — see the matching `-leads.json`. Emails are leads only; none were written into the businesses inserts.
