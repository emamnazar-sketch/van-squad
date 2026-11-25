# Day 44 — MA / Cambridge / ZIP 02138 / Handyman

- Cell: State=MA, City=Cambridge, ZIP=02138, Category=Handyman (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-25
- Expansion note: Only 2 businesses qualified in 02138 proper under the strict own-materials rule, so the cell expanded to adjacent Cambridge ZIP 02139 as instructed (Pann Home Services' Cambridge office is at 126 Inman St, 02139). No expansion to 02140 was needed beyond Hands on Duty's own published Cambridge ZIP list, which includes 02140.
- Service-ZIP notes: service_zips = [02138] plus only ZIPs the business itself publishes. Hands on Duty's own Cambridge page lists 02138, 02139, 02140, 02141 and 02142. Pann publishes its Cambridge office ZIP 02139 and states it serves all Cambridge neighborhoods. No ZIPs were invented.
- Method: Public information only; business's own website first, then public listings (Google). Handyman/small-job work at the customer's home had to be confirmed from the business's OWN materials. Bare directory/Google listings with no own materials did not qualify.
- Territory note: Cambridge is thin for independent handymen with their own websites — most search results are national franchises (Mr. Handyman, Ace Handyman), lead-gen platforms (Angi/Thumbtack), or bare Google listings with no own site. 4 businesses qualified; quality was kept over the 5–9 target.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Marc The Handyman | (617) 605-8581 | Handyman | Cambridge | http://hedgesmarc.wixsite.com/handyman | hedgesmarc@gmail.com — http://hedgesmarc.wixsite.com/handyman (Get In Touch section, with phone) | High — Own Wix site ("MARC THE HANDYMAN: HOME IMPROVEMENT PRO", fully insured) lists painting, drywall repairs, mounting, furniture assembly, minor home repairs and deck staining done at customers' homes; Google listing address is Aberdeen Ave, Cambridge (02138); phone and email both on own site | Own website; Google listing corroborates Cambridge/Aberdeen Ave | Checked /tmp/vs_dump.json (3,920 rows) by name + phone and grep of ~/workspace/van-squad/prospecting/ for name and phone (605-8581 / 6058581): no match |
| Hands on Duty | (617) 903-2411 | Handyman | Cambridge | https://handsonduty.com/ | info@handsonduty.com — https://handsonduty.com/cambridge-ma/ (contact block, with phone) | Medium — Own site's Cambridge page calls it "a Cambridge handyman team" and a "local handyman company in Cambridge," lists general handyman, drywall, carpentry, painting, furniture assembly and small plumbing/electrical at homes across 02138–02142, with phone and email on the page; FLAG: the contact block gives a Brighton, MA base address, so Cambridge is its stated service market rather than its base address | Own website https://handsonduty.com/cambridge-ma/ and https://handsonduty.com/handyman-in-cambridge-ma/ | Dump + prospecting grep for name and phone (903-2411 / 9032411): no match |
| Pann Home Services and Remodeling | (617) 864-2625 | Handyman | Cambridge | https://www.pannhomeservices.com/ | None published found — own site shows phones and a contact form, no email | Medium — Own handyman page confirms Cambridge handyman services (drywall, painting, fixture installation, TV mounting, door/window repairs, furniture assembly, deck/fence, minor plumbing/electrical) at homes, and the site publishes its Cambridge office at 126 Inman St, Cambridge, MA 02139 plus the local phone (617) 864-2625 in its footer (the page's headline number is a toll-free 800 number; the local number was used); larger family-owned multi-trade firm (since 1952), not a national lead-gen/call-center | Own website https://www.pannhomeservices.com/handyman-services/ | Dump + prospecting grep for name and phone (864-2625 / 8642625): no match |
| Mr Home Guy | (617) 606-3668 | Handyman | Cambridge | http://www.mrhomeguy.com/ | None published found — own site shows phone only | Medium — Google listing gives Cambridge, MA with Primary Category Handyman / In-Home Service, and its own site confirms at-home work in Cambridge (TV mounting, furniture assembly, curtains, shelves, artwork, apartment setup, since 2008, insured) with phone 617-606-3668 on the site; FLAGS: its own site's current focus is TV mounting / move-in setup rather than general repairs, and the site footer gives a Boston address (100 Cambridge Street, Boston, MA 02114) — coordinator may drop this one if a general-handyman-only or Cambridge-base-only standard is applied | Own website http://www.mrhomeguy.com/ ; Google listing (Cambridge, Handyman) | Dump + prospecting grep for name and phone (606-3668 / 6063668): no match |

## Excluded

| Name | Reason |
|---|---|
| Mr. Handyman of Greater Newton (serves Cambridge, (617) 275-4893) | National franchise chain — excluded per rules |
| Cambridge Handyman Services (Cambridge, (617) 420-7228) | Google listing only at 1090–1100 Massachusetts Ave; no own website/materials found — handyman-at-home service cannot be confirmed from its own materials |
| Independent Handyman ((617) 861-7177) | Bare listing only (15 Raymond St, listed as Boston); no own website found |
| The Cambridge Handyman | Directory listings only (HireLocal / Service Professionals Network), unclaimed, no phone and no own website found |
| New Chapter Home Improvement (Cambridge, (617) 299-2229) | Own site presents a woman-led remodeling firm — major remodeling/construction, not handyman small jobs |
| Homeowners Rehab Inc (Cambridge, (617) 868-4858) | Nonprofit home-improvement loan/assistance program, not a handyman service business |
| Lasky Homesmith (Brookline, (617) 383-4607) | Genuine handyman on its own site, but based in Brookline and its own materials do not state a Cambridge service area — outside this cell's city |
| FIXER (Arlington, (781) 218-9426) | Based in Arlington on its own site; serves Cambridge but is not a Cambridge business — outside this cell's city (available for a future Arlington cell) |
| Horgan Enterprises (Brighton, (617) 302-9499) | Brighton-based landscaping/cleaning/handyman mix on its own site; not a Cambridge business |

## Leads summary

2 published emails collected, both from the businesses' own websites:
- Marc The Handyman — hedgesmarc@gmail.com — http://hedgesmarc.wixsite.com/handyman
- Hands on Duty — info@handsonduty.com — https://handsonduty.com/cambridge-ma/

No emails were guessed. Pann Home Services and Remodeling and Mr Home Guy publish phones on their own sites but no email was found, so they contribute no lead.

## Counts

- Qualifying businesses: 4 (02138: 3 incl. service-area listings; 02139 expansion: 1 — Pann's Cambridge office)
- Inserts: 4 businesses + 4 listings
- Leads: 2
- Excluded considered: 9
- Duplicates skipped: 0 (all name/phone checks against /tmp/vs_dump.json and grep of ~/workspace/van-squad/prospecting/ returned no matches)
