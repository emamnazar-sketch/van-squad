# Day 24 — Michigan × Livonia × ZIP 48152 × House cleaning

- Cell: Michigan | Livonia | 48152 | House cleaning (exact label)
- Date: 2026-11-03 (Day 24 run)
- Expansion: No adjacent-ZIP expansion needed — 6 qualifying businesses serve / are based in Livonia including 48152. One qualifier (Cleaning the Mitten) is addressed at 17292 Farmington Rd, Livonia, MI 48152 on its own site.
- service_zips: ["48152"] for every business. No business in this batch publishes a ZIP list that was recorded beyond the target ZIP; city-level service claims were not converted into invented ZIPs. BloomBrite Cleaning does publish Livonia ZIPs 48150/48152/48154, but it was excluded as a duplicate (see Excluded).
- Dedupe: Every candidate name and phone was checked against (a) the live-DB snapshot at ~/workspace/goals/van-squad-directory-website/hidden_files/run-day24/dedupe-open.txt and (b) `grep -r` across every file in ~/workspace/van-squad/prospecting/, including tonight's Day-24 Michigan cells (Detroit, Royal Oak, Troy). No included business shares a name or phone with any prior file or the DB snapshot. Near-names checked and NOT duplicates: "Molly Maid of Western Wayne and Mid Oakland Counties" (this batch, (734) 389-8752) vs "Molly Maid of Boise and the Treasure Valley", "Molly Maid of Greater Albuquerque", "Molly Maid of Troy" (Day-24 Troy cell, different phone) and other Molly Maid franchise locations in the DB — different local operators, different phones. "Two Maids of Livonia" ((734) 786-4660) vs "Two Maids of Rochester Hills" (Day-24 Troy cell), "Two Maids of Albuquerque", "Two Maids of Summerlin" and other Two Maids locations — different franchise locations, different phones. "Maid Green" is not "Green Maids of Detroit" (Day-24 Detroit cell) — different businesses, different phones.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Cleaning the Mitten | (734) 655-0575 | House cleaning | Livonia | http://cleaningthemitten.com/ | — none published that could be verified | High — own site: "Professional Home Cleaning In Livonia Since 2013", family-owned, cleaners clean homes in Livonia; own contact block gives this phone and address 17292 Farmington Rd, Livonia, MI 48152 | http://cleaningthemitten.com/ |
| Mop N Broom Cleaning Services | (734) 679-6369 | House cleaning | Livonia | https://mopnbroom.com/ | support@mopnbroom.com — https://mopnbroom.com/ (business's own website, footer/contact block) | High — own site: cleaner is routed to your place, will return to your home to reclean; own site prints this phone, Livonia address 30614 Greenland St, Livonia, MI 48154, and the email | https://mopnbroom.com/ |
| Arbor Trail Cleaning Co | (734) 766-7792 | House cleaning | Livonia | https://www.arbortrailcleaningco.com/service-area/livonia-mi | support@arbortrailcleaningco.com — https://www.arbortrailcleaningco.com/service-area/livonia-mi (business's own Livonia page, contact block) | High — own Livonia page: home cleaning in Livonia, routine cleaning of customers' homes, locally owned; page prints this phone and email and lists Livonia address 17940 Farmington Rd Ste 140 in its Google listing | https://www.arbortrailcleaningco.com/service-area/livonia-mi |
| Maid Green | (734) 648-6243 | House cleaning | Livonia | https://maidgreenlivonia.com/ | info@maidgreenlivonia.com — https://maidgreenlivonia.com/ (business's own website, contact info block) | High — own site: "Eco-Friendly House Cleaning in Livonia, MI", team transforms your Livonia home, services include House cleaning; own site prints this phone (as 734-648-6243) and the email | https://maidgreenlivonia.com/ |
| Two Maids of Livonia | (734) 786-4660 | House cleaning | Livonia | https://twomaidscleaning.com/livonia/ | — none published on its own location page that could be verified | High — franchise's own Livonia location page: "Your Livonia Home Cleaning Expert", proudly serving Livonia, cleaners clean your home and supply everything; page prints this phone and address 36955 Schoolcraft Rd, Livonia, MI 48150 | https://twomaidscleaning.com/livonia/ |
| Molly Maid of Western Wayne and Mid Oakland Counties | (734) 389-8752 | House cleaning | Livonia | https://www.mollymaid.com/locations/western-wayne-mid-oakland-counties/?cid=LSTL_MLY000192 | — none counted; an email appeared only in a third-party job posting, not on its own contact page or Google listing, so it was not recorded | Medium — locally owned franchise in Livonia (36977 Amrhein Rd) per its Google listing description: cleans your home, in Livonia for over 40 years; phone from its Google listing, corroborated by Giftly for the same named location; corporate location page could not be fetched through available tools | Google Business listing for Molly Maid of Western Wayne and Mid Oakland Counties (via search results, phone +17343898752) |

## Email leads

Published emails, leads only — never written into business profiles:

| Business | Email | Source URL |
|---|---|---|
| Mop N Broom Cleaning Services | support@mopnbroom.com | https://mopnbroom.com/ |
| Arbor Trail Cleaning Co | support@arbortrailcleaningco.com | https://www.arbortrailcleaningco.com/service-area/livonia-mi |
| Maid Green | info@maidgreenlivonia.com | https://maidgreenlivonia.com/ |

Total leads in this cell: 3 (see -leads.json).

## Excluded

- BloomBrite Cleaning — (947) 465-4217, sales@bloombritecleaning.com — DUPLICATE tonight: already inserted in the Day-24 Troy ZIP 48084 house-cleaning cell (same name and same phone in day-24-mi-troy-zip48084-house-cleaning-inserts.json). Its own service-areas page does list Livonia ZIPs 48150, 48152, 48154, but same name/phone = skip per dedupe rule.
- Micsa Cleaning Services — (734) 425-2535, 14246 Blackburn St, Livonia — EXCLUDED: no own website found (Instagram location link only); residential house cleaning in customers' homes could not be confirmed from the business's own materials.
- Priceless Cleaning — (313) 722-5703, Livonia — EXCLUDED: no own website or own materials found confirming residential house cleaning; only a bare Google listing.
- Homeaglow (Livonia housekeeping/house cleaning pages) — EXCLUDED: national lead-gen / marketplace platform with no local operator, explicitly excluded by the brief.
- Spiffy Cleaners Group — (734) 956-3387 — EXCLUDED: dry cleaner / janitorial, storefront-based, not residential house cleaning.
- Clear Solution Services — (989) 350-8675 — EXCLUDED: window/glass service, not house cleaning.
- Xpress Maids — (269) 244-3424, Farmington Hills address — EXCLUDED: phone is not a Livonia/Detroit-metro local number for this operator as listed and no Livonia 48152 service was confirmed from its own materials in this check.
- Dry cleaners, window-cleaning, pressure-washing, and commercial-janitorial-only listings surfaced in search (A Cleaners, Prestige Cleaners, Enviro-Master, Fish Window Cleaning, Pro Tek Power Washing, E & S Power Washing, TurnoutManagement with a toll-free 866 number, etc.) — EXCLUDED on category / storefront / toll-free-only grounds.

## Files

- day-24-mi-livonia-zip48152-house-cleaning.md (this file)
- day-24-mi-livonia-zip48152-house-cleaning-inserts.json — 6 businesses + 6 listings, validated with python3 -m json.tool
- day-24-mi-livonia-zip48152-house-cleaning-leads.json — 3 leads, validated with python3 -m json.tool

No database inserting, no js/data.js editing, and no git actions were performed by this worker.
