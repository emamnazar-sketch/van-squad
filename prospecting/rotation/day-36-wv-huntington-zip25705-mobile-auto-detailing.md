# Day 36 — West Virginia — Huntington — ZIP 25705 — Mobile auto detailing

Cell: WV | Huntington | 25705 | Mobile auto detailing. Researched 2026-11-16, public information only, business's own website first, then public listings (Google Business). ZIP 25705 proper (east Huntington / US Route 60 corridor) yielded no qualifying mobile detailer with its own materials — it is mostly fixed car washes, dealers, and collision shops — so the search was expanded across adjacent Huntington ZIPs (25701–25704) in the same city, as noted per the brief. 3 qualifying Huntington businesses found. No toll-free (800/888) numbers are used.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Felder Auto Detailing LLC | (304) 730-6556 | Mobile auto detailing | Huntington | https://www.felderdetailingllc.com/ | felderamari51@gmail.com — own website footer / Get in Touch section: https://www.felderdetailingllc.com/ | High — own site: "Premium Mobile Detailing", "We bring premium detailing directly to you" / "We Come to You", "Mobile Service"; service area explicitly lists Huntington, WV (Tri-State: Ashland, KY / Huntington, WV / Ironton, OH); phone and email both on own site | Own website | No match in /tmp/day36-dedupe.txt (3,360-row live DB dump, name+phone checked) or any prospecting file (name/phone grep clean) |
| Buff Bro's Mobile Detailing | (606) 922-0500 | Mobile auto detailing | Huntington | None verifiable found | None published found | Medium — the business's own Google listing name itself is "Buff Bro's Mobile Detailing" (mobile is the business's chosen name, not a directory label); listing address 108 Midvale Dr, Huntington, WV; phone from its Google listing; no own website could be definitively tied to this Huntington business (a "Buff Bros Car Detailing" Google Sites page carries no location or phone, so it was not assigned) | Google Business listing (business-supplied name, address, phone) | No match in /tmp/day36-dedupe.txt or prospecting files (name+phone grep clean); unrelated "Buff Bros" detailers in San Pedro, CA and Hertfordshire, UK are different businesses with different phones |
| Just2Kuzzin Mobile Detailing | (304) 544-7486 | Mobile auto detailing | Huntington | None verifiable found | None published found | Medium — the business's own Google listing name itself is "Just2Kuzzin Mobile Detailing" (mobile is the business's chosen name); listing address 1320 17th St, Huntington, WV; phone from its Google listing; no own website found | Google Business listing (business-supplied name, address, phone) | No match in /tmp/day36-dedupe.txt or prospecting files (name+phone grep clean) |

## Excluded / held out

- **Detail Masters, (681) 204-5554, 651 Adams Ave, Huntington** — EXCLUDED shop-only: its own site states plainly "Detail Masters is not currently a mobile detailing service" and "Every service is completed at the Detail Masters facility" — it offers free valet pickup to its shop, which is not detailing at the customer's location.
- **Hudnall mobile detailing, (304) 840-8882, 4931 Spring Rd, Huntington** — EXCLUDED / FLAGGED: its Google listing is marked "Possibly Temporarily Closed" and its own GoSite website (hudnallmobiledetailing.gosite.com) is dead ("Website is no longer in service"), so active mobile service cannot be verified from live own materials. Its listing self-description did say "Mobile detailing…", so it is the first re-check candidate if it reopens.
- **Semper Shine, (859) 652-4729, 224 Forestview Dr, Huntington** — EXCLUDED: no mobile/on-site confirmation found in its own materials; its only web presence is a Facebook page that could not be fetched in this pass, and neither its name nor its listing states mobile service.
- **National Detail Pros — Huntington page, (800) 601-0626** — EXCLUDED: national lead-gen platform with no local operator, and a toll-free number (excluded by the brief).
- **Exclusive Mobile Details, Huntington** — EXCLUDED: appears only in job-board postings hiring "Mobile Car Detailers" in Huntington and other cities (e.g. Charleston, WV) — a hiring platform pattern, with no verifiable public phone or own website found.
- **EJ auto detailing, (304) 962-5107, 1905 Foster Ave, Huntington** and **Executive Detailing and Car Wash, (304) 617-9701, 1501 7th Ave, Huntington** — EXCLUDED: Google listings only, no own website or own materials confirming mobile/on-site service.
- **Bridge Street Auto, (304) 690-4325, 503 Bridge St, Huntington** — EXCLUDED: fixed detail/car-wash shop; its own description offers pick-up/drop-off to the shop, not detailing at the customer's location.
- **House Of Shine Autoworks, (304) 549-7071, Barboursville, WV** — EXCLUDED: fixed shop (ceramic coating / tint / PPF), no mobile service claimed, and Barboursville is a different city from this cell.
- **New Again Detailing, Huntington** — EXCLUDED: own site describes a detailing shop ("West Virginia's Elite Detailing Shop"), no mobile service claimed and no phone published on its site.
- **University Car Wash, (304) 962-2910; Pea Ridge Auto Wash, (304) 360-8291 (4316 US Route 60, Huntington, WV 25705); Thoroughbred Express Auto Wash, (800) 625-0203** — EXCLUDED: fixed-location car washes in/near 25705, not mobile detailing.
- **A Gentle Touch Detailing & Maintenance, (689) 284-5763** — EXCLUDED from this cell: its own site confirms mobile detailing, but it states no Huntington or West Virginia location/service area and uses a Florida (689) number — not verifiable as a Huntington operator.
- **Appalachian Armor Mobile Detailing, (304) 935-0363** — EXCLUDED from this cell: own site says it is based in Clendenin, WV and serves the Kanawha Valley / Charleston area, not Huntington.
- **Morgan Mobile Detailing, (304) 694-4621** — EXCLUDED from this cell: own site serves North Central West Virginia; no Huntington service stated.
- **Savage Auto Spa / Savage Auto Pro, (919) 614-6009** — EXCLUDED: North Carolina phone, no Huntington, WV address or mobile confirmation on its site despite a "Huntington" page title.

## Dedupe method

Checked every included name and phone against: (1) /tmp/day36-dedupe.txt (3,360-row live DB dump; exact name search + phone search in both digit and formatted forms — all clean), and (2) every file in ~/workspace/van-squad/prospecting/ via grep on names and phone formats (all candidate names and phones: zero hits).

## Counts

- Qualifying businesses included: 3 (1 High, 2 Medium)
- Published email leads collected: 1 (Felder Auto Detailing LLC)
- Excluded / held out: 14 entries/groups listed above, including 1 flagged re-check candidate (Hudnall mobile detailing — possibly temporarily closed, website dead)
- service_zips in inserts = ["25705"] only for each business: none of the three publishes a ZIP-level service-area list, so no additional ZIPs were invented. Felder explicitly names Huntington, WV in its own stated service area; the other two are Huntington-addressed businesses.
