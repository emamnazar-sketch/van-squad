# Day 42 — NH, Concord, ZIP 03301, House cleaning

Cell: State=NH | City=Concord | ZIP=03301 | Category=House cleaning (exact label verified in js/data.js)
Date: 2026-11-23
Expansion note: 4 businesses qualified in 03301, so no expansion to adjacent ZIP 03303 was needed.
Service ZIPs: no business below published service-area ZIP codes on its own site (towns named only), so service_zips = ["03301"] for all.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Home in Hand Cleaning Service | (603) 717-1727 | House cleaning | Concord | https://homeinhandcleaning.com/ | None captured — site contact email is obfuscated/protected in fetched text, not guessed | High — own site: "Expert residential cleaning in Concord NH", complete home cleaning, Concord service area, phone on own site | Own website https://homeinhandcleaning.com/ ; Google listing (15 Green St, Concord) | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| She Rises LLC | (603) 842-2088 | House cleaning | Concord | https://www.sherisescleaning.com/ | SheRises2026@yahoo.com — https://www.sherisescleaning.com/ | High — own site titled "Residential Cleaning in Concord, New Hampshire", Concord-based, phone + email on own site | Own website https://www.sherisescleaning.com/ ; Google listing (107 N Main St, Concord) | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Paradise Cleanings | (603) 540-6469 | House cleaning | Concord | https://paradise-cleanings.ueniweb.com/ | None published | Medium — own site: "Best Domestic Cleaner in Concord", home cleaning + end-of-tenancy, phone on own site; template site carries some generic copy | Own website https://paradise-cleanings.ueniweb.com/ ; Google listing (Concord, NH) | Not in day42 dedupe names/phones; no match in prospecting/ grep |
| Maid You Look Residential Cleaning | (603) 757-6647 | House cleaning | Concord | https://maidyoulookresidentialcleaning.com/ | None published (contact form only) | High — own site: residential standard/deep/move-in-out cleaning, Concord listed first in service towns, phone on own site | Own website https://maidyoulookresidentialcleaning.com/services/deep-cleaning-concord and /contact | Not in day42 dedupe names/phones; no match in prospecting/ grep |

## Excluded

| Business | Reason |
|---|---|
| NH Cleaning Services — (603) 856-7260, nhclean.com | Own site is commercial only: office cleaning, janitorial, floor care for businesses/facilities; no residential house cleaning offered. |
| Kelly Cleaning Service — (603) 608-8128, kellycleaningservice.com | Own site is commercial office cleaning & janitorial only ("local office cleaning specialist"); no residential house cleaning. Its published email info@kellycleaningservice.com was therefore not collected as a lead for this cell. |
| EcoClean Earth Concord — (603) 736-7243 (listing) | No own Concord website verifying that phone; the chain's own location sites show a different number (603-736-7244) and the business is Lebanon-based/multi-location — phone not verifiable from its own materials for Concord. |
| Kimberly's Cleaning — (603) 223-0092 | Google listing only; no own website found and residential house cleaning not confirmed from the business's own materials. |
| B&K Cleaning — (603) 545-5617 | Listing only; no own website found and residential service not confirmed from own materials. |
| Homemaid Residential — (207) 200-7521 | Instagram/listing only, Maine (207) phone, no own website verifying Concord house-cleaning service. |
| SqueegeePros — (603) 406-0572 | Window cleaning business, not house cleaning. |
| North American Exterior Cleaning — (603) 828-2839 | Exterior only: window, power washing, gutter, snow — not house cleaning. |
| D & J Professional Image Janitorial — (603) 731-9963 | Commercial janitorial for buildings, not residential house cleaning. |
| CR Total Cleaning — (978) 699-9806 | Listing only, Massachusetts (978) phone, janitorial category, no own website confirming Concord residential cleaning. |
| Concord Commercial Cleaning — (603) 514-2207 | Commercial/gym cleaning only, not house cleaning. |
| ecomaids (Concord result) | National franchise / 800-number result that resolves to Concord, NC — not a Concord, NH local operator; toll-free numbers excluded. |

## Leads summary

- Leads collected: 1
- She Rises LLC — SheRises2026@yahoo.com — source: https://www.sherisescleaning.com/
- Home in Hand Cleaning Service publishes a contact email on its site but the address was obfuscated in the fetched page text; it was NOT guessed or recorded.
- All other qualifying businesses publish no email (form/phone only).

## Counts

- Found / qualifying: 4
- Excluded: 12 (listed above)
- Leads: 1
