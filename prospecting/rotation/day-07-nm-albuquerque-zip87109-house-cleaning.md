# Day 07 — New Mexico — Albuquerque — ZIP 87109 — House cleaning

Researched 2026-10-18. Public information only; each business's own website read first, then public listings (Google Business, BBB, HomeAdvisor). Nothing inserted — coordinator inserts centrally.

## Summary
- Yield: 6 qualifying businesses.
- ZIP / service-area note: ZIP 87109 is northeast Albuquerque (NE Heights — Academy / Eubank / Juan Tabo north). Only one qualifier is physically based inside 87109 (Advanced Green Cleaning, 7404 Gene Ave NE per its Google listing). The other five are Albuquerque operators whose own materials confirm they serve 87109 / the Northeast Heights: The Cleaning Authority publishes 87109 in its own service-ZIP list; Maid O' Matic states it cleans "throughout Albuquerque, including the Northeast Heights" within 15 driving miles of its 87112 office (87109 is inside that radius); 505 Clean Queens lists "Northeast Heights" in its published service areas; Two Maids of Albuquerque and Molly Maid of Greater Albuquerque serve all of Albuquerque from local offices. NO ZIP expansion was needed — the cell yielded 6 qualifiers, above the 3-business floor.
- Service ZIPs: only The Cleaning Authority publishes a ZIP list, so it carries exactly its own published list (87109 first). The other five publish cities/neighborhoods or a mileage radius, not ZIPs, so each carries service_zips = ["87109"] only. No ZIP was invented for any business.
- Sibling cells: 87110 × House cleaning (6 businesses) and 87121 × House cleaning (4 businesses) were captured in parallel batches. No business from those batches is repeated here (see Excluded — duplicates). The 87121 batch's own notes named Two Maids of Albuquerque, Molly Maid of Greater Albuquerque, and Maid O' Matic as NE-side operators left out of that cell; all three are verified and included here.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Maid O' Matic | (505) 379-3154 | House cleaning | Albuquerque | https://maid-o-matic.com/ | Info@maidomatic1.com — https://maid-o-matic.com/ | High — own website read directly: local company since 2005, W-2 crews clean customers' homes (routine / deep / move-in-out), office 2901 Juan Tabo Blvd NE #8 (87112), explicitly serves the Northeast Heights; phone and email both published on its own site | Business's own website |
| 505 Clean Queens | (505) 657-5880 | House cleaning | Albuquerque | https://www.505cleanqueens.com/ | queens@505cleanqueens.com — https://www.505cleanqueens.com/ | High — own website read directly: residential cleaning at customers' homes across Albuquerque / Rio Rancho / Corrales, its published service areas include Northeast Heights; phone and email published in its own site footer (its blog also shows (505) 594-9805 — the homepage footer number was used, own-site-first) | Business's own website (+ its blog's service-area list) |
| Advanced Green Cleaning | (505) 881-6243 | House cleaning | Albuquerque | https://www.advancedgreencleaning.com/ | none — contact form only, no email published | High — own website read directly: dedicated Residential Cleaning service by "professional house cleaners," locally owned, Albuquerque location at 7404 Gene Ave NE (87109) per its Google listing; its site publishes a separate Albuquerque phone, 505-881-MAID, distinct from its Santa Fe number (505-471-6243) — the Albuquerque number was used | Business's own website + Google place listing |
| Two Maids of Albuquerque | (505) 477-4457 | House cleaning | Albuquerque | https://www.twomaidscleaning.com/albuquerque/ | none published on its location page | High — its own Albuquerque location page was read directly: locally owned residential home-cleaning franchise, crews clean customers' homes, phone published on the page, office 2920 Stanford Dr NE per the page; serves Albuquerque and surrounding cities | Business's own website |
| The Cleaning Authority | (505) 273-2875 | House cleaning | Albuquerque | https://www.thecleaningauthority.com/albuquerque/ | none — estimate form only, no email published | High — its own Albuquerque page was read directly: locally owned residential house-cleaning franchise, phone published repeatedly on the page, and the page publishes its service ZIPs — 87107, 87109, 87110, 87111, 87112, 87113, 87114, 87120, 87122, 87123, 87124 — which are recorded verbatim in service_zips | Business's own website |
| Molly Maid of Greater Albuquerque | (505) 407-0704 | House cleaning | Albuquerque | https://www.mollymaid.com/locations/greater-albuquerque/?cid=LSTL_MLY000192 | none published that could be read | Medium — locally owned residential cleaning franchise serving greater Albuquerque from 1024 1st St NW; the corporate location page could not be fetched through available tools, so the phone comes from its Google listing, corroborated by the franchise's own local hiring postings showing (505) 407-0704; an older BBB complaint page shows (505) 830-0181 | Google place listing + franchise job postings (own site fetch blocked) |

## Email leads (2)
Published business emails are recorded ONLY in day-07-nm-albuquerque-zip87109-house-cleaning-leads.json — never in the business records above:
- Maid O' Matic — Info@maidomatic1.com (own website)
- 505 Clean Queens — queens@505cleanqueens.com (own website)

## Excluded (28)
Duplicates — already in the live directory / sibling batches (same name or same phone = skip):
- Sandia Green Clean, (505) 404-3071 — captured in the 87110 cell and live in the directory. NOTE for the coordinator: its own website lists its HQ at 4001 Ellison St NE, Albuquerque, NM 87109 — it is genuinely based in this ZIP; it is NOT re-listed here to avoid a duplicate record, but 87109 could be added to its existing service_zips.
- Merry Maids of Albuquerque, (505) 578-2106 — captured in the 87110 cell and live in the directory (a Google result also shows a (505) 622-3733 number for the same franchise — same business, not a second listing).
- D'Aaron's Housekeeping Co, (505) 514-8826 — captured in the 87110 cell and live in the directory.
- green sweep, (505) 414-7887 — captured in the 87110 cell and live in the directory.
- The Maids of Albuquerque Uptown, (505) 296-3714 — captured in the 87110 cell and live in the directory; a second listing ("The Maids in Albuquerque," maids.com/38) publishes the same phone — same operator, not a second business.

Not house cleaning / wrong service type:
- Panoptic Clean, (505) 907-3629, 7001 Hensch Ave NE (in 87109) — its own website: janitorial and commercial cleaning for workplaces only; no residential house-cleaning service.
- Albuquerque Janitorial — commercial janitorial only.
- QMI New Mexico — its own description: cleaning maintenance for commercial facilities only.
- Maintenance Service Systems Inc; CCS Facility Services; Cintas Facility Services; Enviro-Master; Emerald Commercial Cleaning; ABM (Albuquerque office) — commercial janitorial / facility-services firms, no residential house cleaning.
- Four Seasons Cleaning, 5600 McLeod Rd NE — storefront dry cleaner / laundromat, not in-home house cleaning.
- SERVPRO of NE Albuquerque — fire/water damage restoration franchise, not house cleaning.
- PuroClean of Albuquerque — water/fire/mold damage restoration, not house cleaning.
- Bio-One Albuquerque — biohazard / trauma-scene cleanup, not house cleaning.
- Dryer Vent Clean Pro — dryer-vent cleaning only.
- Roadrunner Trash Bin Cleaning Services Co. — trash-bin cleaning only.
- Christy's Maid 4D Movies — film-location cleaning outfit based in SE Albuquerque; not a residential house-cleaning business.

Could not be verified from the business's own materials:
- Mini Maid of Albuquerque, 5715 Edith Blvd NE (87107) — its own website (minimaidabq.com) has been hijacked and now serves gambling-spam content, and published phone numbers conflict ((505) 881-8233 in a company press release vs (505) 881-9233 in an older BBB roundup); nothing current could be confirmed from its own materials.
- Reyna's House Cleaning — two Google listings publish conflicting phones, (505) 907-9179 and (505) 967-6179, and its website could not be fetched to resolve them (also excluded on the same grounds in the 87110 cell).
- Anna's European Cleaning Service — own website could not be fetched in this pass; listing-only presence (also noted in the 87110 cell).
- The Q Maids, (505) 514-2689 — based downtown at 609 Gold Ave SW (87102); its own website could not be read to confirm 87109 is in its stated service area.
- Maid Brigade of Albuquerque, (505) 266-1300 — residential franchise based in NW Albuquerque (1100 Alameda Blvd NW, 87114); its own location materials could not be read in this pass to confirm 87109 in its service area.
- Homeaglow — national lead-generation platform with no local operator; excluded per standing rules.
- Hethr's House Cleaning — Google listing shows "Permanently Closed."

## Dedupe method
Every candidate was checked against (a) all files under ~/workspace/van-squad/prospecting/ (name + phone greps — the five included franchises appear in sibling files only as exclusion notes, never as inserts), and (b) the live directory via the public REST endpoint (name, phone — 472 rows read 2026-10-18). Same name or same phone = skipped and noted above. Inserts/leads JSON key sets mirror day-06-co-arvada-zip80004-mobile-pet-grooming-inserts.json exactly (validated programmatically); listing titles follow the sibling pattern "House cleaning at your location."
