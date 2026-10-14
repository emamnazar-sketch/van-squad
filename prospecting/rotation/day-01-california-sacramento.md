# Rotation Day 1 — California: Sacramento × Mobile pet grooming × ZIP 95758 (Elk Grove)

- Researched: 2026-10-14 (nightly rotation, Day 1 of Rotation 1)
- Cell note: Day 1 uses the flagship exception in the rotation state file — Sacramento metro, one populous residential ZIP. ZIP 95758 (Elk Grove) was picked over Natomas 95835 because it produced the strongest verified mobile-grooming supply; every business below confirms mobile/on-site service in Elk Grove.
- Sources: each business's own website first, then public listings (Superpages, MapQuest, DexKnows). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data for the Van Squads directory. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — no Supabase service key is available in the stored connector environment, so nothing was inserted this run.

| Name | Phone | Category | City | Website | Confidence | Source |
|---|---|---|---|---|---|---|
| Bark & Mane of Elk Grove and Rancho Cordova | (916) 252-3583 | Mobile pet grooming | Elk Grove | https://www.barkandmane.com/pet-groomers/elk-grove-rancho-cordova-ca/ | High — own site: Elk Grove location page, grooming van to your driveway, phone and Elk Grove, CA 95624 on the page | Business's own website |
| K9 Cosmetology | (916) 530-9993 | Mobile pet grooming | Sacramento | https://www.k9cosmetology.biz/ | High — own site: mobile grooming van, service area explicitly lists Elk Grove, phone on the site | Business's own website |
| Elk Grove Mobile Dog Grooming | (916) 897-1081 | Mobile pet grooming | Elk Grove | https://www.elkgrovedoggrooming.com/ | High — own site: on-demand mobile dog grooming for Elk Grove, phone on the homepage | Business's own website |
| Sacramento Mobile Pet Grooming | (916) 866-8995 | Mobile pet grooming | Sacramento | https://www.sacramentomobilepetgrooming.com/elk-grove | Medium — own site has a dedicated Elk Grove page (groomers come to your home) and lists the phone on the site; generic template-style brand site | Business's own website |
| Art Pet Grooming | (209) 554-6445 | Mobile pet grooming | Elk Grove | https://www.artpetgrooming.com/locations/elk-grove/ | Medium — own Elk Grove page describes its mobile van serving Elk Grove homes; phone is the "Sacramento & San Joaquin" line on the business's own contact page; multi-region brand, and the site refused a direct fetch (verified via its own indexed pages) | Business's own website (Elk Grove location page + contact page) |
| Alpha Grooming Pet Salon | (650) 271-4282 | Mobile pet grooming | Elk Grove | https://www.alphagroomingpetsalon.com/ca/elk-grove/ | Medium — own Elk Grove page: mobile grooming vans brought to Elk Grove homes; phone on that page is the company's Burlingame HQ line; multi-city brand | Business's own website |
| Pride Mobile Pet Grooming | (916) 912-7255 | Mobile pet grooming | Sacramento | https://pridemobilepetgrooming.com | Medium — public listings show it "Serving the Elk Grove Area" as a mobile groomer and recent reviews describe at-home visits; phone from its MapQuest/Giftly listings; Sacramento base (95826) | Superpages (Elk Grove mobile pet grooming list), MapQuest |
| All About Fur Mobile Pet Grooming | (916) 452-0800 | Mobile pet grooming | Sacramento |  | Medium — directory listings (18 years in business) show mobile grooming "Serving the Elk Grove Area"; phone consistent across Superpages/DexKnows/AllPages; no own website found | Superpages, DexKnows, AllPages |

## Dedupe
- Live database (Supabase REST, anon key, checked 2026-10-14): only 2 active businesses are visible — Brothers Mobile Bike Shop ((916) 234-3549) and AFG Handyman Service ((916) 944-9618). No name or phone overlap with this batch.
- Batch 1 (seeded-batch-1, 25 businesses: Handyman / House cleaning / Mobile auto detailing): no name or phone overlap.
- The 2026-09-30 outreach prospect list mentions K9 Cosmetology, Art Pet Grooming, Alpha Grooming Pet Salon and Pride Mobile Pet Grooming by name, but that file is an outreach list, not seeded directory rows — none of them were ever seeded, and none of their phones duplicate a seeded row. (Same precedent as batch 1, whose businesses also appeared on that prospect list.)

## Excluded (checked, did not pass the gates)
- Dog Gone Purrfect! Mobile Grooming and Pet Care (Elk Grove) — EXCLUDED: its own website (doggonepurrfect.net) does not load at all, and public sources conflict on its phone — (916) 683-0600 on its own site's cached text vs 916-956-3388 on Care.com. Unverifiable phone.
- Elk Grove Mobile Pets — EXCLUDED: public sources conflict on its phone (+1 916-345-4410 on a directory mirror of its Facebook page vs 916-519-3234 in its own Facebook posts), and its own website shows no phone and does not confirm mobile grooming (it also runs in-house boarding/daycare).
- Lodi Grooming — EXCLUDED for this cell: a groomer directory lists Elk Grove in its service area, but the business's own current Facebook service list (Lodi, Galt, Stockton, Lockeford, Acampo, Woodbridge) does not include Elk Grove.
- Barkbus and Groombuggy (Sacramento pages) — EXCLUDED: Elk Grove / 95758 coverage could not be confirmed from their own materials; Barkbus booking is via a national 1-800 line.
- Storefront-only groomers in 95758 (PetSmart, Woof Gang Bakery & Grooming Elk Grove, The Pet Spa At Laguna, Noah's Ark, salons) — EXCLUDED: no mobile/on-site service.
- Juan's Groom Room (Elk Grove) — EXCLUDED: home-based salon, customers come to it; not mobile.
- Carr's Mobile Pet Grooming, Laura's Mobile Grooming, Affordable Mobile Pet Grooming, R&B Mobile Grooming — EXCLUDED for this cell: mobile and Sacramento-area confirmed, but Elk Grove service not confirmed in their own materials.

## ZIP note
- 95758, 95624, 95757, 95814, 95816 and 95818 are all already present in ZIP_NAMES in js/data.js — no new ZIP names, no asset-version bump, and no commit/push were needed this run.

## Database note (important discrepancy)
- The rotation state file says 27 businesses were in the DB at engine start (25 batch 1 + 2). The live query this run returned only 2 active businesses. Batch 1's 25 rows exist as prepared files (seeded-batch-1-inserts.json / .sql) but are NOT visible in the live database, so they appear never to have been inserted. Totals in the run report use the verified live number.
