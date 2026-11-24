# Day 43 — ME / Augusta / ZIP 04330 / Handyman

- Cell: State=ME, City=Augusta, ZIP=04330, Category=Handyman (exact label)
- Date: 2026-11-24
- Expansion note: Only 1 business qualified in 04330 under the strict own-materials rule, so the cell expanded to adjacent 04345 (Gardiner) and 04364 (Winthrop) as instructed. Each business keeps its own city; expansion businesses carry both 04330 and their own ZIP in service_zips.
- Service-ZIP notes: No business published a multi-ZIP service-area list on its own materials. service_zips = [04330] for the Augusta business, and [04330 + own ZIP] for expansion businesses. No ZIPs were invented.
- Method: Public information only; business's own website first, then public listings. Handyman/small-job work at the customer's home had to be confirmed from the business's OWN materials (own website or business-authored page). Bare directory/Google listings with no own materials did not qualify.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|---|
| D&D Properties & Services, LLC | (207) 660-1663 | Handyman | Augusta | https://sites.google.com/view/dd-properties-services-llc/home | danddpropertiesandservices@gmail.com — https://sites.google.com/view/dd-properties-services-llc/home | Medium — Own Google Sites page says Central Maine contractor providing "home repairs and renovation services in Augusta" for homeowners throughout Augusta, with call/text phone and email on the page | Own website (Google Sites) via search index; Google listing corroborates Augusta service | Grep of ~/workspace/van-squad/prospecting/ for name and phone (660-1663 / 6601663): no match |
| Reliable Handyman Services of Maine | (207) 215-4040 | Handyman | Gardiner | http://reliablehandymanservicesofmaine.com/ | None published found — own site shows phone only (tel:2072154040) | High — Own site (owner Steve Barron, Gardiner) details handyman services for homeowners: screen repair, closet organizers, dryer vent cleaning, carpentry, painting, small renovation projects, night/weekend hours; phone on own site | Own website http://reliablehandymanservicesofmaine.com/ ; listing address 20 Cedar St, Gardiner, ME 04345 | Grep for name and phone (215-4040 / 2154040): no match |
| Roy's Carpentry & Property Maintenance | (207) 319-3422 | Handyman | Gardiner | http://www.rcpmmaine.com/ | Roy@rcpmmaine.com — http://www.rcpmmaine.com/ (contact section: "Email: Roy@rcpmmaine.com, Phone: 207-319-3422") | Medium — Own site confirms the carpentry & property-maintenance business in Gardiner with phone and email published; Google lists Handyman as a secondary category; thinner service detail on own site than the two High/Medium peers above | Own website http://www.rcpmmaine.com/ ; Google listing 52 Old Brunswick Rd, Gardiner, ME | Grep for name and phone (319-3422 / 3193422): no match |
| All Pro Services Of Maine | (207) 441-0859 | Handyman | Winthrop | http://allproservicesofmaine.com/ | None published found — own site shows phone only | Medium — Own site: "small family owned business in central Maine" helping with lite construction, flooring, drywall, interior/exterior painting, siding and deck-building at homes — small-job/general work, not major-construction-only; phone on own site as +1(207)-441-0859 | Own website http://allproservicesofmaine.com/ ; Google listing Winthrop, ME with Handyman secondary category | Grep for name and phone (441-0859 / 4410859): no match |

## Excluded

| Name | Reason |
|---|---|
| Our Family Handyman (Augusta, (207) 317-7882) | Own website ourfamilyhandyman.com is currently hijacked — it serves unrelated gambling/lottery content, so handyman-at-home service cannot be confirmed from the business's own materials |
| Ma and Pa Fix It All (Augusta, (207) 485-2412) | Only an Instagram link plus a directory description; no verifiable own website/materials confirming handyman details beyond the listing snippet — fails strict own-materials rule |
| HandyHands - Mobile RV Repair and Handyman Services (Augusta, (207) 558-3028) | No own website found; bare listing only |
| AJ's Handyman Services (Augusta, (207) 544-1966) | No own website; listing website link points to an unrelated wellness-center page — no own materials |
| C&R Commercial and Residential Services (Augusta) | No own website found; 800-number listing only |
| Finn Property Maintenance and Handyman Services (West Gardiner, (207) 712-6312) | Own site (maineguttercleaning.com) now presents only exterior cleaning and lighting services (Finn Property Services) — handyman/small-job service no longer confirmed from own materials |
| Granite Coast (Central Maine, (207) 616-8911) | Own site does confirm small-to-medium repairs and punch lists, but it publishes no base city/ZIP (only "Central Maine") — city cannot be assigned without inventing data |
| The Breathable Home (Augusta, (207) 512-2408) | Energy-efficiency / home-improvement contractor on own site, not a handyman small-job service |
| Home Improvements Of Augusta Maine (Augusta, (207) 248-2726) | Roofing/construction contractor — major-construction focus, not handyman small jobs |
| Mr. Handyman | National franchise chain — excluded per rules |

## Leads summary

2 published emails collected, both from the businesses' own websites:
- D&D Properties & Services, LLC — danddpropertiesandservices@gmail.com — https://sites.google.com/view/dd-properties-services-llc/home
- Roy's Carpentry & Property Maintenance — Roy@rcpmmaine.com — http://www.rcpmmaine.com/

No emails were guessed. Reliable Handyman Services of Maine and All Pro Services Of Maine publish phones on their own sites but no email was found, so they contribute no lead.

## Counts

- Qualifying businesses: 4 (Augusta 04330: 1; Gardiner 04345: 2; Winthrop 04364: 1)
- Inserts: 4 businesses + 4 listings
- Leads: 2
- Excluded considered: 10
- Duplicates skipped: 0 (all name/phone greps against ~/workspace/van-squad/prospecting/, including Day-43 files, returned no matches)
