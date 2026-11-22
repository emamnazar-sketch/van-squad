# Day 41 — Vermont × St. Albans × ZIP 05478 × House cleaning

Cell: VT | St. Albans | 05478 | House cleaning (exact label)
Date researched: 2026-11-22
Expansion note: Fewer than 3 businesses qualified in 05478, so the adjacent ZIP 05468 (Swanton) was also searched. Swanton yielded only Care.com individual housekeepers and the Homeaglow marketplace platform — no business with its own materials confirming in-home house cleaning plus a verifiable public phone — so no Swanton businesses were added and all service_zips below are ["05478"] only.

## Included businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Set Apart Cleaning LLC | (802) 827-0101 | House cleaning | St. Albans | https://www.setapartcleaning.com/ | Setapartcleaning2020@gmail.com — published on its own contact page: https://www.setapartcleaning.com/contact | High — Own website confirms Residential Cleaning (deep, one-time, move-in/move-out) and states "Serving Chittenden, Franklin & Grand Isle Counties" — St. Albans / 05478 is in Franklin County; phone and email are published on its own contact page | Business's own website: https://www.setapartcleaning.com/ (homepage: Residential Cleaning + Franklin County service area) and https://www.setapartcleaning.com/contact (phone + email); Google listing corroborates name, Milton, VT base, phone and website | Name (lowercased "set apart cleaning llc") checked against day41-dedupe-names.txt — not present. Phone digits 8028270101 checked against day41-dedupe-phones.txt — not present. Grep of ~/workspace/van-squad/prospecting/ for name and phone digits — no matches. Not a duplicate. |

## Exclusions / duplicates (not included)

| Business | Reason |
|---|---|
| Mansfield Services — (802) 777-3210 | Qualifies on its own materials (own St. Albans page lists "House Cleaning in St. Albans — Recurring, deep, and move-in/move-out cleaning", phone and info@mansfieldservicesvt.com on own site) BUT already included in tonight's Day-41 Essex Junction cell (day-41-vt-essex-junction-zip05452-house-cleaning) — same name and same phone found by prospecting grep = duplicate, skipped per dedupe rule |
| North Country Neat — (802) 274-5171 | Own site confirms residential cleaning in northern VT, BUT already included in tonight's Day-41 Barre cell (day-41-vt-barre-zip05641-house-cleaning) — same name and same phone found by prospecting grep = duplicate, skipped per dedupe rule |
| Sparkle Klean — (802) 524-3521, St. Albans | Local St. Albans cleaning business, but described in local press as a family *commercial* cleaning business and its listing offerings are commercial construction / janitorial — no own materials confirming in-home residential house cleaning. Excluded |
| Prime Cleaning Services LLC — (802) 735-6752, St. Albans (597 Brigham Rd) | Google listing only; no own website or own materials found confirming in-home / residential house cleaning. Excluded — fails own-materials gate |
| Limitless Cleaning LLC — (802) 793-6547, St. Albans (Lincoln Ave) | Google listing only; no own website or own materials found confirming in-home / residential house cleaning. Excluded — fails own-materials gate |
| All Seasons Janitorial — (802) 933-6512, St. Albans | Own materials describe a "Full Service Commercial Office Cleaning Company" — commercial only, no residential house cleaning. Excluded |
| Stonewall-Knox — (802) 752-9573, St. Albans | Property management / commercial cleaning and facilities maintenance on own site — no in-home house cleaning. Excluded |
| All Seasons Carpet & Upholstery Cleaning — (802) 655-2033, St. Albans | Carpet/upholstery cleaning only on own site — not house cleaning. Excluded |
| Conscious Cleaners Vermont — (802) 448-5050, Milton | Own site: "locally owned commercial and janitorial cleaning company" for offices/retail/medical — commercial only, no residential. Excluded |
| Daigle Cleaning Systems — (518) 712-6633 | Own Vermont page is commercial-focused (office, VCT floor, robotic cleaning); residential homes are mentioned only in passing with no house-cleaning service offered — Albany, NY-based regional chain, no Vermont house-cleaning confirmation. Excluded rather than padded |
| Cleaners Unit — (802) 735-0900, Burlington | BBB profile only (residential/commercial, Franklin County service area on BBB); no own website / own materials confirming in-home house cleaning for St. Albans. Excluded (same finding as tonight's South Burlington cell) |
| The Maids (Vermont) | National franchise whose Vermont page leads with a toll-free 1-800 number, and its Burlington location is listed as permanently closed; also "the maids" is present in day41-dedupe-names.txt. Excluded |
| Lime Maids — (802) 827-0971 | Already used in tonight's Day-41 Burlington cell; also a cleaner-matching platform ("connecting homes with cleaners"), no explicit St. Albans service statement. Excluded / duplicate |
| Green Vision Cleansing — Burlington | Own site publishes two conflicting phones (+1 (802) 992-8587 and 8028292903) and states Burlington + surrounding areas only — no single verifiable phone, no St. Albans statement. Excluded (same finding as tonight's Burlington/Essex cells) |
| Homeaglow / CleanSpace / Care.com listings for St. Albans & Swanton (05468) | Lead-gen / marketplace platforms and individual housekeeper profiles with no local business operator, no business phone on own materials. Excluded per rules |

## Summary

- Included: 1 business (Set Apart Cleaning LLC)
- Email leads: 1 (see -leads.json)
- Shortfall reason: St. Albans is a thin market — the only other own-site qualifiers serving 05478 (Mansfield Services, North Country Neat) were already taken by earlier Day-41 cells tonight and are duplicates here; the remaining St. Albans cleaners are commercial-only or listing-only with no own-materials residential confirmation.
