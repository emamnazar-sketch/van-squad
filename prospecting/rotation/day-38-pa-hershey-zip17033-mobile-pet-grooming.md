# Rotation Day 38 — Pennsylvania: Hershey × Mobile pet grooming × ZIP 17033

- Researched: 2026-11-19 (nightly rotation, Day 38)
- Cell note: Only ONE business (Furrytale) explicitly confirms Hershey / 17033 mobile service from its own materials, so per the brief the cell EXPANDED to the adjacent Hershey/Hummelstown area: Palmyra (Earth's Paw, ~4 mi east of Hershey), Jonestown (Eve's Elegant, north of Palmyra/Annville), and Lebanon/Cornwall (The Mobile DOGG). The three expanded entries are Medium confidence and flagged re-verify-on-claim for exact 17033 coverage — no service area was invented for any of them. Their service_zips contain only the target ZIP 17033.
- Sources: each business's own website first, then public listings (Google Business, Alignable, DogDog). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Furrytale Mobile Grooming LLC | (717) 820-2240 | Mobile pet grooming | Hershey | https://furrytalemobilegrooming.com/ | furrytalemobilegrooming@gmail.com — own site contact section: https://furrytalemobilegrooming.com/ | High — own site: family-owned, "servicing a ten mile radius within the Hershey/Elizabethtown Pennsylvania area… We bring our all-inclusive, climate-controlled, state-of-the-art grooming van to your home or office"; contact section lists Hershey, Hummelstown and Palmyra in its 20-minute radius and publishes Text (717) 820-2240 (existing clients) and the email for inquiries | Business's own website |
| Earth's Paw Mobile Pet Grooming | (717) 769-0034 | Mobile pet grooming | Hershey (base: Palmyra — adjacent-area expansion) |  | None found | Medium — Google listing places it active at 600 W Maple St, Palmyra, PA (immediately adjacent to Hershey; Palmyra is in the Hershey service cluster) with phone (717) 769-0034 and "Mobile Pet Grooming" in its own business name; no own website could be verified, so website is blank, and exact 17033 coverage rests on its Palmyra base — re-verify on claim | Google Business listing |
| Eve's Elegant Mobile Dog Grooming | (717) 769-8094 | Mobile pet grooming | Hershey (base: Jonestown — adjacent-area expansion) |  | None found | Medium — Google listing places it active at 373 Swatara Creek Dr, Jonestown, PA with phone (717) 769-8094, 5.0 stars / 28 reviews, "one on one personal attention," and "Mobile Dog Grooming" in its own business name; a 2017 news report records it travelling to a home in Palmyra (adjacent to Hershey) to groom — mobile house-call operation confirmed, exact 17033 coverage re-verify on claim; no own website verified, so website is blank | Google Business listing + DogDog + Gator Sports news report (2017 Palmyra house call) |
| The Mobile DOGG | (717) 300-0906 | Mobile pet grooming | Hershey (base: Lebanon/Cornwall — adjacent-area expansion) | http://themobiledogg.com/ | None found | Medium — Google listing places it active at 139 Rexmont Rd, Lebanon/Cornwall, PA with phone (717) 300-0906 and its own website themobiledogg.com (site returned 403 to the fetcher at check time); "Mobile" is in its own business name and DogDog describes it as a full-service pet grooming salon in Lebanon offering bathing, haircuts, nail trimming and ear cleaning; Lebanon County borders Hershey — exact 17033 coverage re-verify on claim | Google Business listing + DogDog |

## Dedupe
- Grep of ~/workspace/van-squad/prospecting/ for every name and phone in this batch (Furrytale, 717-820-2240, Earth's Paw, 717-769-0034, Eve's Elegant, 717-769-8094, Mobile DOGG, 717-300-0906, furrytalemobilegrooming@gmail.com) returned no matches.
- Live-database dedupe is the coordinator's central check at insert time (this subagent does not insert).

## Excluded (checked, did not pass the gates)
- Sunpatch Mobile Grooming LLC, 1625 Church Rd, Hershey, PA 17033, (717) 421-1055 — EXCLUDED: its Google listing is marked Permanently Closed (Alignable still describes its self-contained mobile spa, but a closed business cannot be seeded).
- Furry Land Mobile Groomers (Hummelstown/Hershey pages, 877-726-3345) — EXCLUDED: national franchise / call-center booking platform with no verifiable local Hershey operator, per the brief.
- Happy Hounds Mobile Pet Grooming, Carlisle, (717) 601-6176 — EXCLUDED for this cell: its own locations page limits service to ~15 miles from Carlisle (Carlisle, Mechanicsburg, Dillsburg, Camp Hill, Enola, Boiling Springs, Mt Holly Springs) — Hershey is outside that stated radius; a blog post mentioning Hershey route drives does not override its stated service area.
- Mobile Dog Grooming (mobiledoggroomingpa.com), (717) 539-4910 — EXCLUDED: own site confirms "we bring the salon to your door" but states only "throughout the PA area" with no town, base, or Hershey-area service confirmation — location unverifiable.
- Heather's Happy Hounds Mobile Dog Grooming (Weebly) — EXCLUDED: no location or Hershey-area service confirmation and no verifiable phone on its own site.
- Dog's Best Friend Mobile Grooming (Helene Cempa) — EXCLUDED: own site confirms a grooming truck since 2003, but its service area is Adams / select York County — not Hershey.
- Muddy Paws (mobilegroom.wixsite.com) — EXCLUDED: own contact page lists All of Adams County and select York County areas only — not Hershey.
- The Paw Spa Hershey, Chocolate Avenue Grooming Salon, Barking Bubbles Hummelstown, Sharon's Pet Styling, The Groom Room Pet Salon, Greenlin Pet Resorts Hershey, Hershey Veterinary Hospital grooming — EXCLUDED: storefront salons/facilities; no mobile/at-home service confirmed from their own materials.
- Zoomin Groomin / Aussie Pet Mobile / Woofie's — EXCLUDED: no Hershey/Harrisburg local operator page found (nearest Zoomin Groomin PA locations are Delaware Valley / Montco).

## ZIP note
- 17033 is the target ZIP for all four businesses. No business in this cell publishes a ZIP list, so every service_zips entry is only 17033 — no ZIP was invented.
- Email leads: only Furrytale Mobile Grooming LLC publishes an email (on its own website), so the matching leads file contains that one entry.
