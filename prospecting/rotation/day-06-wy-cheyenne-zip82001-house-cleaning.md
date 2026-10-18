# Rotation Day 6 — Wyoming: Cheyenne × House cleaning × ZIP 82001

- Researched: 2026-10-18 (Day 6)
- Cell note: ZIP 82001 is central/downtown Cheyenne. House cleaning is done inside the customer's home by definition, so on-site service is the business model itself. Four qualifying businesses were found serving Cheyenne homes, two of them addressed in 82001 itself on their own sites. No adjacent-ZIP expansion was needed — the batch reaches 4 qualifying businesses, above the 3-business floor.
- Sources: each business's own website first, then public listings (Google Business, Yelp, Birdeye). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Little Joe Company LLC | (307) 634-5203 | House cleaning | Cheyenne | https://www.littlejoeco.com/ | info@littlejoeco.com — https://www.littlejoeco.com/ (business's own website, contact information block) | High — own site: "Residential Maid Service" / residential clients in Cheyenne, phone and email printed on the site, and its own location printed as "1101 Logan Ave, Cheyenne, WY 82001" — in the target ZIP itself | Business's own website + Google Business listing |
| 307 Maid | (307) 316-7009 | House cleaning | Cheyenne | https://307maid.com/ | hello@307maid.com — https://307maid.com/help/ (business's own website, Contact Us / footer) | High — own site: local family-owned house cleaning in Cheyenne, WY; Standard/Deep home cleans detailed, phone and email printed on the site, and its Help page lists Cheyenne first among areas served | Business's own website |
| Cleaning and Things | (307) 256-8639 | House cleaning | Cheyenne | https://www.cleaningandthingswy.com/ | — none published on its own site that could be verified | High — own site: owner-operated general, deep, and move-in/move-out cleaning based in Cheyenne, WY, phone printed on the site, and its own footer address printed as "Pioneer Ave, Cheyenne, WY 82001" — in the target ZIP itself | Business's own website + Google Business listing |
| That Extra Touch Professional Cleaning Services | (307) 421-3131 | House cleaning | Cheyenne | http://www.thatextratouchwest.com/ | — none published on its own site that could be verified | Medium — own site: "professional house cleaning … serving customers in Cheyenne, Wyoming," including move-in/move-out cleaning for homes; phone comes from its Google Business / Birdeye listing because the fetched homepage shows no phone | Business's own website (service description) + Google Business / Birdeye listing |

## Dedupe
- Live directory (Supabase businesses table, name + phone pull, 2026-10-18): Wyoming is new territory — the live DB contains no Cheyenne businesses and no (307) Wyoming phone numbers in this batch's set (the only "307" substring hits were unrelated (480) 634-3072 and (206) 307-2270 rows), so no name or phone in this batch collides with a live row.
- All prior prospecting files in ~/workspace/van-squad/prospecting/ were grepped for every name ("Little Joe", "307 Maid", "Cleaning and Things", "That Extra Touch") and every phone (634-5203, 316-7009, 256-8639, 421-3131) in this batch before finalizing: zero matches.

## Excluded (checked, did not pass the gates)
- Custom Cleaning & Lawn Care (4715 Long Branch Loop, Cheyenne; (307) 632-0312 on its own site) — EXCLUDED on category fit: its own website positions it entirely as a commercial janitorial / commercial lawn care company for offices and storefronts, with no residential house cleaning offer.
- Busy Bees Housekeeping (505 Williams St, Cheyenne; (307) 220-7338 per Google listing) — EXCLUDED: its own website (busybeeshousekeeping.com) could not be fetched/verified at check time, so residential house cleaning could not be confirmed from its own materials — listing-only evidence is not enough.
- Mary's Cleaning Service (Cheyenne; 307-631-5790 / maryscleaning48@yahoo.com on its accessibility page) — EXCLUDED: its own site is ambiguous — the same fetched page also prints a conflicting "Phone: 612-220-3963", and a second similarly named domain could not be reconciled as the same operator, so the public phone could not be verified cleanly.
- Steampower / All Star Carpet Cleaning (Cheyenne; (307) 227-2006 / (307) 632-4308) — EXCLUDED on category fit: carpet cleaning only, not house cleaning.
- Fish Window Cleaning, Cheyenne ((307) 317-0900) — EXCLUDED on category fit: window cleaning only, a national franchise location page.
- Cheyoming Facility Cleaning (1651 Carey Ave, Cheyenne; (307) 365-1978) — EXCLUDED on category fit: facility / commercial-industrial cleaning by name and listing category, no residential house cleaning confirmed from its own materials.
- Griselda's Cleaning (1764 Newton Dr, Cheyenne; (702) 610-5388 per Google listing) — EXCLUDED: the only public phone found is an out-of-state (702) number and residential service could not be verified from its own website at check time.
- Homeaglow and other national matching / lead-gen platforms serving Cheyenne — EXCLUDED on the standing gate (national lead-gen, no local operator).

## ZIP note
- Target ZIP 82001 is in every business's service_zips. No additional service ZIPs were added: Little Joe Company LLC's own site and Cleaning and Things' own site both print Cheyenne, WY 82001 addresses; 307 Maid lists Cheyenne as a served city on its own site but publishes no service-area ZIPs, so none were invented; That Extra Touch serves Cheyenne per its own site but publishes no ZIPs, so it carries 82001 alone.
- Count: 4 businesses, 4 listings, 2 published-email leads (see -leads.json).
