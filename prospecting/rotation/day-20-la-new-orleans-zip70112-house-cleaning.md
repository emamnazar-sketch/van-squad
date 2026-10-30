# Day 20 — Louisiana / New Orleans / ZIP 70112 / House cleaning

Cell: LA | New Orleans | 70112 | "House cleaning" (exact label verified in ~/workspace/van-squad/js/data.js)
Date: 2026-10-30
Status: PREPARED, NOT INSERTED
Email leads: 1 published address collected (see leads file)

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Best Cleaning Nola | (504) 201-8616 | House cleaning | New Orleans | https://bestcleaningnola.com/ | manager@bestcleaningnola.com — published in the Contact Us section of its own website https://bestcleaningnola.com/ | High — its own site has a named "RESIDENTIAL CLEANING" section ("Our residential house cleaning services help homeowners maintain clean and comfortable living spaces") plus recurring maid service, deep cleaning and move-in/out for homes, prints "Tel: (504) 201 8616" and its address "Best Cleaning Nola, 1308 South Saratoga St, New Orleans, LA 70113" on its own pages — in-home residential cleaning, the local phone, and the New Orleans base all confirmed from the business's own materials. No ZIP list published (areas named as towns only), so service_zips = [70112] only. | Own website https://bestcleaningnola.com/ ; corroborated by its business-authored Houzz profile (same name, phone, and 1308 South Saratoga St, New Orleans, LA 70113 address) |
| Geaux Maids of New Orleans | (504) 475-4823 | House cleaning | New Orleans | https://geauxmaids.com/ | None published found | Medium — its own New Orleans page describes it as "a reliable residential house cleaning company" offering maid service, basic/deep cleaning and move in/out cleaning in homes, and prints the local number "(504) 475-4823" and its office "1116 Felicity Street, New Orleans, Louisiana 70130" on that page — a confirmed New Orleans operator with a local phone. Medium, not High, because Geaux Maids is a small multi-city Louisiana brand (Lafayette, Baton Rouge and Hammond offices are listed on the same page) and the page also carries a toll-free (877) number; the New Orleans office and its local (504) number are nevertheless confirmed on the business's own page. No email published on its site and no ZIP list published, so service_zips = [70112] only. | Own website https://geauxmaids.com/new-orleans-la/cleaning-services/ ; its Google Business listing (same name, category and Felicity St address) |
| The IMaids | (504) 331-3038 | House cleaning | New Orleans | https://www.theimaidsllc.com/ | None published found | Medium — its own site calls it "a locally owned and operated home and office cleaning service" in New Orleans ("Professional Cleaning Services For Homes & Offices Throughout Greater New Orleans", "We are locally owned and opporated so are you keeping your dollars in NOLA"), with customer reviews describing cleaning in their houses — residential in-home cleaning and the local operator confirmed from the business's own materials. Medium because its own site is quote-form-only and publishes no phone, so the phone comes from its Google Business listing, which also gives its New Orleans address, 7823 Birch St, New Orleans, LA 70118. No email published and no ZIP list published, so service_zips = [70112] only. | Own website https://www.theimaidsllc.com/ ; Google Business listing (phone + 7823 Birch St, New Orleans address); Expertise.com New Orleans house-cleaning list ("locally-owned and managed", same Birch St address) |

## Dedupe

- Checked every candidate name AND phone against ~/workspace/van-squad/prospecting/rotation/day20-dedupe.txt (live DB list, 1,647 rows — it contains no (504) numbers at all) and grep of every file in ~/workspace/van-squad/prospecting/, including tonight's earlier Day-20 cells.
- **504 Clean Dat ((504) 732-0007, support@504cleandat.com) — DEDUPE SKIP.** It passes every quality gate on its own merits (own site confirms local family-owned recurring/deep/move-out house cleaning in homes, phone and email on its own site), but it was already included TONIGHT in the Day-20 Metairie ZIP 70001 house-cleaning cell (same name + same phone), so it is NOT repeated here.
- Angie Nola Maids ((504) 518-2158), NOLA Maid Easy ((504) 315-8112) and The Maids of New Orleans ((504) 883-5000) were likewise already included in tonight's Metairie cell and are not repeated here; tonight's Metairie batch file itself noted Geaux Maids of New Orleans as "held for a New Orleans cell," which is this one.
- No included business matches any earlier batch or DB row by name or phone.

## Excluded

- Maid in NOLA (118 W Harrison Ave, New Orleans) — EXCLUDED on a phone conflict: its Google listing publishes (504) 919-1644 while its own website footer publishes (504) 324-3959; no third source resolves which number is current, so the verifiable-phone gate cannot be met. Its own site and listing do confirm family-owned residential cleaning in New Orleans — if the conflict ever resolves, it is a strong future add.
- Home Maid Cleaning and Property Management Services ((504) 517-6243, 201 St Charles Ave, New Orleans) — EXCLUDED as a specialty, not house cleaning: its own site says its services target "specifically AirBNB/VRBO hosts and commercial customers," and its whole residential menu is short-term-rental turnover, restocking and property management — no general homeowner house-cleaning offer.
- The Ready Maids ((504) 421-0504) — Metairie-based (2955 Ridgelake Dr, Metairie, with further locations in Mandeville and Waveland, MS), no New Orleans base; a second listing for the same business publishes a different phone, (504) 386-3240.
- Patriot USA LLC (608 Conti St, New Orleans listing, (504) 285-7446) — its own site is a commercial cleaning/janitorial and facilities company serving businesses nationwide, headquartered at 1016 Warrior Rd, Drexel Hill, Pennsylvania, and the only phone its own site publishes is the toll-free 877-575-1129; no residential house cleaning.
- New Orleans Cleaning Services ((504) 949-5578, 1706 Tchoupitoulas St) — its website domain is parked ("A Brand New Domain!"); bare Google listing only, no business-published materials confirming residential house cleaning.
- A Better Cleaning Service ((504) 265-4771, 701 Loyola Ave) — its own GoDaddy site is a bare contact form with no services text and no phone; no business-published confirmation of residential in-home house cleaning, so the own-materials gate fails.
- DCS Cleaning Services (Terrytown, LA 70056 per Expertise) — based in Terrytown, not New Orleans, and no verifiable public phone or own website could be found for it.
- Elite Cleaning Services New Orleans ((504) 296-4202, 1582 Magazine St) — bare listing only; no own website or business-published materials found confirming house cleaning.
- Tiger Wash ((504) 270-4925) — pressure washing specialty by its own description, not house cleaning.
- H&H Commercial Cleaning Service, Executive Cleaning Services New Orleans, Universal Facility Services, Southern Cleaning-Restoration — commercial janitorial / restoration only, no residential house cleaning confirmed.
- The Cleaning Authority – New Orleans, Molly Maid, Merry Maids, MaidPro, Two Maids, You've Got Maids — national franchises, excluded per brief.
- Homeaglow / Angi / Thumbtack / HomeGuide / House Fly listings — lead-gen platforms, excluded per brief.

## ZIP note

ZIP 70112 itself (downtown / CBD / French Quarter edge) is mostly commercial and holds almost no house-cleaning operators addressed inside it, so per the expansion rule the sweep covered adjacent ZIPs within the same city: the three included businesses are based in 70113 (S Saratoga St), 70130 (Felicity St) and 70118 (Birch St), all in New Orleans proper, and all serve the whole city including 70112. None of the three publishes a ZIP-code service list (service areas are named as towns/neighborhoods only), so service_zips is ["70112"] for all three — no town names were converted to ZIPs.

## Count

- Qualifying businesses prepared: 3
- Email leads: 1 (Best Cleaning Nola — manager@bestcleaningnola.com, published on its own website)
- Files: day-20-la-new-orleans-zip70112-house-cleaning.md, -inserts.json (3 businesses + 3 listings), -leads.json (1 entry)
- Status: PREPARED, NOT INSERTED
