# Rotation Day 46 — Connecticut: Enfield × Handyman × ZIP 06082

- Researched: 2026-11-27 (nightly rotation, Day 46)
- Cell: CT | Enfield | 06082 | Handyman (exact label verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business via Meta places data). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented. No toll-free numbers, no national lead-gen listings.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).

## Expansion note
No expansion was needed: 3 qualifying Enfield businesses were found for the 06082 cell. Note on sourcing: Enfield's local handyman trade is thin online — none of the three qualifying businesses runs its own website, so each is verified from its Google Business listing (primary category Handyman, an Enfield street address, and a local 860 phone). Handyman work is by nature performed at the customer's home, so none of these is storefront-only. No adjacent-ZIP businesses were added; every included business is in Enfield and its service_zips carry only the target ZIP 06082, because none of them publishes its own list of service-area ZIPs.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| J&L Handyman Services | (860) 836-3823 | Handyman | Enfield |  | — none found | Medium — Google Business listing: primary category Handyman, address 7 Eleanor Rd, Enfield, CT, local 860 phone (860) 836-3823; handyman work is performed at customers' homes; no own website found to confirm further | Google Business listing |
| Tiger Services LLC | (860) 745-2689 | Handyman | Enfield |  | — none found | Medium — Google Business listing: primary category Handyman (secondary Contractor), address 5 Nevins Ave, Enfield, CT, local 860 phone (860) 745-2689, Mon–Fri hours; handyman/contractor work is performed at customers' homes; no own website found to confirm further | Google Business listing |
| Enfield Handyman Services | (860) 749-3235 | Handyman | Enfield |  | — none found | Medium — Google Business listing: address 13 Spruceland Rd, Enfield, CT, local 860 phone (860) 749-3235, Mon–Fri hours, business name and trade are handyman services performed at customers' homes (listing's primary category is Contractor); no own website found to confirm further | Google Business listing |

## Dedupe
- Grepped ~/workspace/van-squad/prospecting/ (including tonight's Day-46 files) for every name, phone, and email in this batch (J&L Handyman, Tiger Services, Enfield Handyman, 836-3823, 745-2689, 749-3235) on 2026-11-27: no matches for any included business. No dedupe skips in this cell.
- Live-database dedupe is handled centrally by the coordinator at insert time.

## Excluded (checked, did not pass the gates)
- Mr. Handyman of Suffield, Enfield and Coventry (425 Hazard Ave, Enfield; (860) 398-6022) — EXCLUDED: national franchise (Neighborly) / national lead-gen pattern, per the gates, despite its Enfield address and own site confirming at-home work.
- Masoud Handyman (masoudhandyman.com; (413) 433-3874; publishes masoudaminidot83@gmail.com on its own site) — EXCLUDED on city: its own website brands it "Your Trusted Handyman in Springfield, MA" — it is based in Springfield, MA, not Enfield (it only ranks on an Enfield directory list as serving the city). Its email was therefore NOT collected as a lead for this cell.
- Garrett's Carpentry (9 Moody Rd Unit 2, Enfield; (860) 573-5003) — EXCLUDED: Google listing's primary category is Carpenter (Handyman only secondary), the business's own description leads with carpentry/snow plowing/concrete from a unit address, and no own website or second source confirms a handyman service performed at customers' homes.
- Don Tellier Home Improvement (9 Varno Ln, Enfield; (860) 741-2636) — EXCLUDED: Google category is Home Improvement, not Handyman, and its own website (homeimprovementswindsor.com) is a "Coming Soon / under construction" placeholder that confirms nothing about its services; people-search sites print conflicting personal numbers for the name, so no verifiable business phone stands up.
- JB Handyman (3 Ambleside Ct, Suffield; (860) 758-7783) — EXCLUDED on city: based in Suffield, not Enfield.
- National franchises / marketplace-only listings (Ace Handyman Services, Angi/HomeAdvisor/Thumbtack matches with no local operator) — excluded per the gates, not individually listed.

## Email leads
- 0 published emails collected. None of the three included businesses publishes an email on a website or Google listing that could be verified. (The only email found in this sweep belonged to the excluded Springfield-based Masoud Handyman and was not collected.) See matching -leads.json (empty array).

## Counts
- Included: 3 businesses (0 High confidence, 3 Medium), each with 1 listing in the -inserts.json.
- Email leads: 0.
- Excluded: 5 named businesses/groups above (plus generic national/marketplace listings as a class).
- Inserted: 0 — PREPARED only; the coordinator inserts centrally.
