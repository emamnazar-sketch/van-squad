# Day 43 — Maine: Portland × Handyman × ZIP 04102

- Cell: State=ME, City=Portland, ZIP=04102, Category=Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-24
- Expansion note: Only one business was confirmed with an address in 04102 itself (Blackcap Handyman, 50 Glenridge Dr, Portland, ME 04102). To reach 3 qualifying businesses, the cell expanded to adjacent ZIP 04101 in the same city (Help ME Handyman Services, 400 Congress St, Portland, ME 04101) and included a Portland-serving operator whose own site explicitly names Portland in its service area (Sini's Handyman Services). All businesses are Portland, ME and perform handyman work at customers' homes.
- Sources: business's own website first, then public listings (Google Business listing data). Public information only. No data invented.
- Status: PREPARED only — not inserted, no js/data.js edit, no git (coordinator inserts centrally).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| Blackcap Handyman | (207) 619-4688 | Handyman | Portland | https://www.blackcaphandyman.com/ | — none found | Medium — own site/blog says "proudly serving the vibrant community of Portland, Maine" and describes its handyman work in homes; public listing gives address 50 Glenridge Dr, Portland, ME 04102 (in the cell ZIP) with phone (207) 619-4688; phone is from the listing, not the own site, so Medium not High | Own website (blackcaphandyman.com) + public listing | Grep of ~/workspace/van-squad/prospecting/ for name and phone on 2026-11-24: no match |
| Sini's Handyman Services | (207) 838-0134 | Handyman | Portland | http://www.sinihandyman.com/ | sini@sinihandyman.com — own website http://www.sinihandyman.com/ | High — own site lists "Call or text: 207-838-0134" and the email, offers home repairs, carpentry, door/window work and home maintenance at homeowners' homes, and says "Serving Falmouth, Portland, Yarmouth, Scarborough, Old Orchard Beach & surrounding Southern Maine communities" | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name, phone and email on 2026-11-24: no match |
| Help ME Handyman Services | (207) 888-4594 | Handyman | Portland | https://helpmehandymanservices.com/ | Mike@HelpMEHandymanServices.com — own website https://helpmehandymanservices.com/ | High — own site calls itself "a fully insured Portland handyman service," lists general handyman, drywall, TV mounting, assembly, painting and repairs done in customers' homes, prints phone (207) 888-4594 and the email, and gives its address as 400 Congress St #4594, Portland, ME 04101 (adjacent-ZIP expansion) | Business's own website | Grep of ~/workspace/van-squad/prospecting/ for name, phone and email on 2026-11-24: no match |

## Excluded

| Name | Phone / identifier | Reason excluded |
|---|---|---|
| Mr. Handyman of Greater Portland | (207) 209-1562 | National franchise chain (Neighborly / Mr. Handyman network) — excluded per national-operator gate, despite a local Portland address at 190 Riverside St |
| Ace Handyman Services (Southern Maine) | (207) 370-1577 | National franchise chain — excluded per national-operator gate; also based in South Portland, not Portland |
| GK Handyman LLC | (207) 331-1567 | Own website http://gkhandymanllc.com/ could not be fetched/read in this run, so handyman-at-home service could not be confirmed from its own materials; listing data alone was not used |
| Fix-It Man | (207) 771-0202 | No verifiable own website found; only a public listing (61 Sherman St, Portland) and an aggregator description — own-materials confirmation not completed |
| Brilliant Home Services | (207) 470-0379 | No own website found; only a public listing / Instagram presence — own-materials confirmation of handyman-at-home service not completed |
| Ganong and Sons Handyman Restoration | (843) 304-1450 | Public listing only, with a non-Maine (843) area-code phone and no verifiable own website confirming a local Portland operator |
| J Rose Home Repairs & Remodeling | (207) 807-7222 | Public listing only, no verifiable own website confirming handyman/small-job service at customers' homes |
| Portland Home Projects | (207) 835-1024 | Public listing marked "Possibly Temporarily Closed" — not a verified active operator |

## Leads summary

- 2 published emails collected, both from the businesses' own websites (see matching -leads.json):
  - Sini's Handyman Services — sini@sinihandyman.com — http://www.sinihandyman.com/
  - Help ME Handyman Services — Mike@HelpMEHandymanServices.com — https://helpmehandymanservices.com/
- Blackcap Handyman publishes no email on its own site or listing found in this run.
- Emails are leads only — never written to a business profile.

## Counts

- Qualifying businesses: 3
- Businesses in 04102 itself: 1 (Blackcap Handyman); adjacent-ZIP 04101 expansion: 1 (Help ME Handyman Services); Portland-serving with Portland named on own site: 1 (Sini's Handyman Services)
- Listings prepared: 3 (one per business)
- Email leads: 2
- Excluded checked: 8
- Dedupe skips: 0
