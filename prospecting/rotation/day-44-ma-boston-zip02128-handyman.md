# Day 44 — MA / Boston (East Boston) / ZIP 02128 / Handyman

- Cell: State=MA, City=Boston, ZIP=02128, Category="Handyman" (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-25
- Expansion note: No qualifying independent handyman with a verifiable own website was found physically addressed in 02128 itself. The cell therefore used Boston / Greater Boston operators that explicitly serve East Boston (02128) or Boston as a whole, plus one adjacent Revere operator — this is the adjacent-area expansion for this cell, noted here. All six businesses have 02128 as their sole service_zip because none publishes a ZIP list (they publish city/neighborhood lists only — no ZIPs were invented).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Concierge Building Service | (857) 335-0188 | Handyman | Boston | https://conciergebuildingservice.com/ | None published on own site checked | High — own site: "Handyman Packages — One tech, one visit, your list knocked out", HVAC/electrical/carpentry/handyman at customers' homes, and its "What areas do you cover?" list explicitly includes East Boston; phone (857) 335-0188 and Everett address 131 Bucknam St on own site | Business's own website | Checked against /tmp/vs_dump.json and grep of ~/workspace/van-squad/prospecting/ for name and phone: no match |
| Handyman Boston | (617) 702-0222 | Handyman | Boston | https://www.handyman-boston.com/ | None published on own site checked | High — own site: "Skilled repair and maintenance for condos, brownstones, and historic homes throughout Greater Boston", 20+ years on Boston-area homes, bundle repairs into a single visit at the customer's home; phone (617) 702-0222 on own site | Business's own website | Dedupe check (DB dump + prospecting grep) for name and phone: no match |
| Best Handyman Boston | (857) 201-6083 | Handyman | Boston | https://besthandymanboston.com/ | info@besthandymancompany.com — own site: https://besthandymanboston.com/ | Medium — own site: "BOSTON'S AWARD-WINNING HANDYMAN SERVICE", repairs/maintenance at homes across Boston, service-area lists include Boston, Everett and Revere (all adjoining East Boston); phone (857) 201-6083 and email both on own site; FLAG: its published area lists name Boston generally, not East Boston by name | Business's own website | Dedupe check (DB dump + prospecting grep) for name and phone: no match |
| Pro Services Boston | (617) 804-2186 | Handyman | Boston | https://proservicesboston.com/ | None published on own site checked | Medium — own site lists handyman among its trades and its service-area answer explicitly includes East Boston, with work done on-site in units/buildings; phone (617) 804-2186 and Boston address 9 Winship St on own site; FLAG: its stated focus is condo associations, landlords and make-readys rather than general homeowner handyman work | Business's own website | Dedupe check (DB dump + prospecting grep) for name and phone: no match |
| Handyman Projects | (617) 913-0190 | Handyman | Boston | https://sites.google.com/handymanprojectssvs.com/handymanprojects/home | contact@handymanprojectssvs.com — own site: https://sites.google.com/handymanprojectssvs.com/handymanprojects/home | Medium — own Google Sites website: "professional repair, maintenance, and installation services for homes and businesses throughout Boston and surrounding areas", Boston, Massachusetts location, phone 617 913-0190 and email both printed on own site | Business's own website (Google Sites) | Dedupe check (DB dump + prospecting grep) for name and phone: no match |
| Whitney Home Service | (857) 445-3378 | Handyman | Boston | https://whitneyhomeservice.com/ | None published on own site checked | Medium — own site: "The professional and reliable handyman for all home repairs and installs", in-home consultation, work in private homes; phone (857) 445-3378 on own site; Google listing address 67 Leverett Ave, Revere, MA — Revere directly adjoins East Boston (02128); FLAGS: own site publishes no service-area list, and its footer also says "N Andover", so Boston service rests on the Revere Google listing + in-home framing | Business's own website + Google listing for Revere address | Dedupe check (DB dump + prospecting grep) for name and phone: no match |

## Excluded

| Name | Phone / Website checked | Reason |
|---|---|---|
| Marc The Handyman / Hands on Duty / Pann Home Services and Remodeling / Mr Home Guy | (617) 605-8581 / (617) 903-2411 / (617) 864-2625 / (617) 606-3668 | DEDUPE SKIP — all four are already in the live DB / Day 44 Cambridge 02138 handyman inserts (same name + same phone = skip), even though Hands on Duty and others also serve Boston. |
| FIXER | (781) 218-9426 / https://www.fixerhomeservices.com/ | DEDUPE / PRIOR-CELL SKIP — name and phone already appear in prospecting (Day 44 Cambridge handyman file, where it was noted as an Arlington business available for a future Arlington cell). Not reused here under the strict same-name/phone prospecting rule. Its own-site email fixerservicehelp@gmail.com was therefore not collected. |
| Kaminskiy Care + Repair (Boston) | (617) 606-4859 / https://careandrepair.com/ma/boston-local-handyman-services/ | National franchise / dispatched-crew model — own Boston page states "Kaminskiy has no office or address in Boston. The work is done by a local Boston crew that we dispatch through our national line." Excluded as national, not an independent local operator. |
| Mr. Handyman of Greater Newton / Boston | (617) 275-4893 / https://www.mrhandyman.com/ | National franchise system (Neighborly / Mr. Handyman), not an independent local operator. |
| FixItBos | No phone on own site / https://fixitbos.com/ | Own site publishes only a WhatsApp link and the email Bart@FixItBos.com, with no verifiable public phone number found on its own site or in the listings checked — fails the verifiable-phone gate. Email not collected because the business did not qualify. |
| Mr Kay Handyman Services | (617) 377-5204 / https://mrkayhandyman.com/ | Own website is firewall-blocked and could not be read, so on-site handyman service could not be confirmed from the business's own materials; Google/Angi descriptions alone were not held sufficient for this cell. Held out on quality, not counted. |
| A plus Assemblers | (774) 559-8157 / https://www.aplusassemblers.com/ | Own site is fitness-equipment assembly only (treadmills, racks, bikes), based in Fall River — not a general handyman service, despite a Google "Handyman" category. |
| Alex Handyman Services | (617) 543-0527 (Google listing, Everett) / http://www.alexhandymanservices.com/ | Own site's fetched pages publish no phone and no service-area confirming Boston / East Boston; phone rests on the Google listing alone and Everett service to 02128 was not confirmed from own materials. Held out on quality. |
| InstaService (East Boston) | https://www.instaservice.com/ | National booking / lead-gen platform connecting customers with independent pros — no local operator of its own. |

## Leads summary

2 published emails collected (see matching -leads.json): Best Handyman Boston — info@besthandymancompany.com (own website); Handyman Projects — contact@handymanprojectssvs.com (own website). Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses: 6
- Listings: 6 (one per business, title "Handyman in Boston")
- Email leads: 2
- Excluded / skipped: 9 entries above (including 4 dedupe skips already in the DB from the Cambridge cell, and FIXER skipped on the strict prospecting name/phone rule)
