# Rotation Day 45 — Rhode Island: Pawtucket × Handyman × ZIP 02860

- Researched: 2026-11-26 (nightly rotation, Day 45)
- Cell: RI | Pawtucket | 02860 | Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business via Meta places data). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).

## Expansion note
Only 1 qualifying Pawtucket handyman was verifiable in 02860 itself (HandymanRI, 94 S Union St, Pawtucket). Fewer than 3 qualified in 02860, so the cell expanded to the adjacent Pawtucket ZIP 02861 in the same city, as instructed: KC's Handyman Service (33 Kenyon Ave, Pawtucket, RI 02861 — ZIP confirmed via address records) and Touch of Class Painting and Handyman Service (51 Rosella Ave, Pawtucket, RI 02861 — ZIP confirmed via Zillow address record). City for all three is Pawtucket. Their service_zips carry 02860 first, plus their own 02861.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| HandymanRI | (401) 663-6910 | Handyman | Pawtucket | http://www.handymanri.info/ | handymanri@outlook.com — own website http://www.handymanri.info/ | High — own site says "professional home repair and renovation service... based out of Pawtucket, RI", licensed and insured, 25 years experience, and lists phone (401) 663-6910 and the email on the site; Google listing gives 94 S Union St, Pawtucket with same phone/website; home-repair work is at customers' homes | Business's own website + Google Business listing |
| KC's Handyman Service | (401) 365-9678 | Handyman | Pawtucket |  | — none found | Medium — Google Business listing: primary category Handyman, address 33 Kenyon Ave, Pawtucket, RI 02861, local 401 phone (401) 365-9678, regular Mon–Sat hours; handyman service is on-site at customers' homes by nature; no own website found to confirm further | Google Business listing |
| Touch of Class Painting and Handyman Service | (401) 771-9012 | Handyman | Pawtucket |  | — none found | Medium — Google Business listing: primary category Handyman (secondary Painter/Contractor/Carpenter), address 51 Rosella Ave, Pawtucket, RI 02861, local 401 phone (401) 771-9012, regular Mon–Sat hours; painting/handyman work is performed at customers' homes; no own website found | Google Business listing |

## Dedupe
- Grepped ~/workspace/van-squad/prospecting/ for every name, phone, and email in this batch (HandymanRI, KC's Handyman, Touch of Class Painting, 663-6910, 365-9678, 771-9012, handymanri@outlook.com) and for "Pawtucket" / "02860" generally on 2026-11-26: no matches. No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- CWS Handyman LLC (125 Read St, Seekonk, MA; (401) 252-6337; https://cwshandyman.com/) — EXCLUDED on city: own site confirms handyman work at homes and lists Pawtucket in its service area, and it publishes eric@cwshandyman.com, but the business is based in Seekonk, MA, not Pawtucket — this cell requires city=Pawtucket.
- Littlefix (111 Norfolk Ave, Pawtucket; (929) 484-0369) — EXCLUDED: Google listing only, phone is a 929 (New York City) number with no local Pawtucket operator evidence and no own website confirming on-site handyman work.
- Alternate handyman (Monticello Pl, Pawtucket; (401) 302-1867) — EXCLUDED: Google listing only with a garbled address ("3o Monticello Pl #3634"), vague/generic name, no own website and no second source confirming a current local operator.
- Abe Handyman LLC ((401) 771-5402) — EXCLUDED for this batch: found only in a permit-portal aggregator (projectdirect.org) noting contact info/address/reviews "Not verified", with no own website or Google/Yelp listing confirming current handyman service and phone.
- National franchises / marketplace-only listings (Mr. Handyman, Ace Handyman Services, Angi/HomeAdvisor/Thumbtack matches with no local operator) — excluded per the gates, not individually listed.

## Email leads
- 1 published email collected, from the business's own website: HandymanRI — handymanri@outlook.com (source http://www.handymanri.info/). See matching -leads.json. No other included business publishes an email on its own site or Google listing. CWS Handyman's published email was NOT collected as a lead because that business was excluded from this cell.
