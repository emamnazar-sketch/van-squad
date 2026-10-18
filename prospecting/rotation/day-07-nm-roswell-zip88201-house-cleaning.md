# Day 7 — Roswell, NM × ZIP 88201 × House cleaning

Researched fully. **3 qualifying businesses**, all in 88201 — **no ZIP expansion needed** (3 meets the floor). Roswell is a small market: every other cleaning name in the city is a carpet/restoration specialist, a dry cleaner, a home-health agency, a platform listing, or an out-of-state namesake.

## Businesses found

| Business | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Lore's Cleaning Service | (877) 313-7739 | House cleaning | Roswell | http://lorescleaningservicesllc.com/ | services@lorescleaningservicesllc.com (its own website) | Medium — its own website (linked from its Google profile) confirms a dedicated "Home Cleaning Service" and residential cleaning across Roswell, with testimonials from Roswell homeowners; the site is template-built with placeholder FAQ text, and see the phone note below | Own website + Google listing (310 N Richardson Ave) |
| Prim & Proper | (575) 208-0342 | House cleaning | Roswell | https://notouchclean.com/ | none | Medium — local LLC ("PRIM & PROPER LLC") at a Roswell residential address (309 Carrol Ave); its Google listing links its own site (No Touch Clean) and carries its own description; cleaning is performed at customers' homes. CAVEAT: the business's own website could not be fetched by my tools this pass, so confirmation rests on its listing — flagged for a possible later re-check | Google listing |
| Cupp's Cleaning Solutions | (575) 914-5663 | House cleaning | Roswell | (none — see note) | none | Medium — Google listing only (950 E College Blvd, 88201), Cleaning Service category, published phone, posted hours 7 days; home-based service business. Its Google-hosted business.site page is on Google's retired platform (404), so website recorded as "" per Day 7 precedent (same as Dom's Handyman Service, Santa Fe) | Google listing |

**Phone note — Lore's Cleaning Service (flag for the coordinator):** its own website prints (877) 313-7739 consistently as its contact/"Call Now" number, and that is the number recorded (own-site-first, same precedent as Merry Maids of Las Cruces and Ace Handyman Santa Fe). Its Google listing instead shows a local number, (575) 937-5295, and a slightly different address (310 N Richardson Ave vs the site's 325 N Richardson Ave, which the site itself labels 88203). If the coordinator prefers the local Google number, it is a one-field swap.

**Service ZIPs:** all three carry ["88201"] only. None of the three publishes a ZIP-code service list (Lore's names Roswell city-wide; the others publish no list), so nothing was added or invented.

## Leads: 1

- Lore's Cleaning Service — services@lorescleaningservicesllc.com — published in the contact section of its own website (http://lorescleaningservicesllc.com/). Prim & Proper and Cupp's publish no business email anywhere public — none guessed.

## Exclusions (15 documented)

1. **Ms. Missy's Cleaning** — (575) 317-0734, 603 Wooldridge Margaret Rd. No own website or own materials anywhere; its listing's website is HomeAdvisor (a lead-gen platform), and its focus on house cleaning at customers' homes cannot be confirmed from the business's own materials. Excluded on the own-materials gate.
2. **Silvias cleaning services** — listing at 300 W McGaffey St, but its website (silviacleaning.com) does not resolve and its published phone, (470) 684-3886, is a Georgia area code. No verifiable Roswell operator from own materials.
3. **Soap and Hope LLC** — (505) 610-7012, based at 3433 S Union Ave, which is **88203**, not the target ZIP; Google-listing-only with no own site. Not added — the cell met its floor inside 88201, so no expansion was triggered. Noted as a future 88203-cell candidate.
4. **Ebony Ruiz** — individual person's name on a listing (87 Lighthall Pl), no business name, website, or materials; unverifiable as a business.
5. **Pro Steamer** — its own site: IICRC fire & water damage restoration, mold remediation, and carpet cleaning — a restoration specialist, not a house-cleaning service.
6. **Carpet Clinic** — carpet cleaning specialist (truck-mounted steam carpet, tile & grout, air ducts).
7. **Desert Palms Carpet Cleaning and Restoration** — carpet cleaning + restoration specialist per its own description.
8. **All American Cleaners (Comet Cleaners)** — dry cleaner / laundromat storefront.
9. **Ariel's Cleaning ("Cleaning Services")** — janitorial listing flagged "Possibly Temporarily Closed."
10. **Maid Right of Roswell** (maidright.com) — that franchise location page and its (770) phone are for **Roswell, Georgia**, not New Mexico.
11. **Clean Grove** (cleangrove.com) — Atlanta-area company ((404) phone) with blog content about "Roswell homes"; no Roswell, NM operator.
12. **ecomaids** — national franchise; no Roswell, NM location or local phone exists on its site.
13. **Homeaglow** — lead-gen platform, excluded by rule.
14. **Clean Tech Systems** — mobile auto detailing / pressure washing (wrong category; its own materials say so).
15. **Agape Home Care / Visiting Angels** — home health-care agencies, not cleaning services.

## Dedupe

All three names and phones checked against (a) every file in ~/workspace/van-squad/prospecting/ (grep — zero hits; no prior Roswell cell exists) and (b) the live directory via the public REST endpoint (518 businesses — zero name or phone matches; New Mexico entries so far are Albuquerque/Santa Fe/Las Cruces/Farmington only).

## Files

- day-07-nm-roswell-zip88201-house-cleaning.md (this report)
- day-07-nm-roswell-zip88201-house-cleaning-inserts.json — 3 businesses + 3 listings; key sets mirror the Day 6 template exactly (validated programmatically), fresh UUIDs, listings linked 1:1, standard seeded description, owner placeholder, service_zips as above
- day-07-nm-roswell-zip88201-house-cleaning-leads.json — 1 lead

Nothing inserted into any database; no site files edited; no git run — ready for central verification/insert.
