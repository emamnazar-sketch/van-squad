# Day 05 — Montana × Bozeman × ZIP 59718 × Mobile auto detailing (THIN BATCH)

Researched 2026-10-17 (manual live run, Day 5). Target: up to 5 qualifying businesses.
Result: **5 businesses written.** No ZIP expansion needed — all five are Bozeman-based mobile operators serving the 59718 area (one, Every Detail, is based in 59718 itself). Every business's mobile/on-site service was confirmed on the business's own website or its own booking page.

| # | Name | Phone | Category | City | Website | Published email (+ source) | Confidence |
|---|------|-------|----------|------|---------|----------------------------|------------|
| 1 | Bridger Detail | (406) 201-9112 | Mobile auto detailing | Bozeman | http://bridgerdetail.com/ | none published (site mentions an email inbox but prints no address) | High |
| 2 | Proper Detailing | (406) 224-1211 | Mobile auto detailing | Bozeman | https://bznproperdetailing.com/ | none published | High |
| 3 | Hollow Top Detailing | (406) 209-9489 | Mobile auto detailing | Bozeman | https://www.hollowtopdetailing.com/ | rich@hollowtopdetailing.com (source: https://www.hollowtopdetailing.com/) | High |
| 4 | Every Detail | (406) 551-5677 | Mobile auto detailing | Bozeman | https://everydetail365.com/ | none published | High |
| 5 | Gallatin Platinum Mobile Detailing | (406) 600-9023 | Mobile auto detailing | Bozeman | https://gallatinplatinumdetailing.setmore.com/?source=qrcode | gallatinplatinum@gmail.com (source: https://gallatinplatinumdetailing.setmore.com/?source=qrcode) | High |

## Per-business notes

1. **Bridger Detail** — Own homepage headline: "Book your Mobile Detail Today!"; copy states "mobile car detailing in Bozeman, delivering … directly to your home, or job site" and "WE COME TO YOU!" Phone (406) 201-9112 printed on the site ("Call Us At"). Physical base address on site: 3012 Candy Ln, Bozeman, MT 59715; stated service area: Bozeman, Big Sky, Ennis, Three Forks. Confidence: High — mobile service and phone both confirmed on the business's own website. Sources: http://bridgerdetail.com/ ; Google listing (same phone).
2. **Proper Detailing** — Own site titled "Mobile Car Detailing Services in Bozeman, MT"; mission states "professional mobile auto detailing in Bozeman, MT" and "mobile auto detailing in Bozeman offers convenience right at your doorstep." Phone (406) 224-1211 shown on the site (tel:4062241211) and matches its Google listing. Stated service area: Belgrade, Big Sky, and the Gallatin Valley. Confidence: High — mobile service and phone confirmed on own website. Sources: https://bznproperdetailing.com/ ; Google listing (same phone).
3. **Hollow Top Detailing** (legal: Hollow Top Detailing LLC) — Own site headline: "Mobile Auto Detailing in Bozeman, MT"; copy states it "proudly serves Gallatin Valley and Madison County with mobile and in-shop services." Display phone (406) 209-9489 shown twice on the site ("Prefer to talk? Call (406) 209-9489" and Contact Us "406.209.9489") — used as the primary. Note: the site's footer structured data also lists a second number, 406-579-8037; not used. Published email rich@hollowtopdetailing.com appears in the site's Contact Us section. Stated service area: Bozeman, Belgrade, Ennis. Confidence: High — mobile service, phone, and published email all on the business's own website. Source: https://www.hollowtopdetailing.com/
4. **Every Detail** — Own homepage: "In-shop, Mobile Detailing, Overnight, Pick-Up & Drop-Off Service"; mobile service described as bringing "professional equipment directly to your location for convenient on-site care" (mobile offered seasonally Apr 1–Nov 15). Based IN the target ZIP: 877 Forest Glen Drive, Bozeman, MT 59718 (address + phone (406) 551-5677 printed together on the site). Note: the site also lists "Tel: (406) 213-8180"; the 551-5677 number paired with the 59718 address was used. Stated service area: Bozeman, Belgrade, Big Sky, Three Forks, Livingston. Confidence: High — mobile service and phone confirmed on own website; Bozeman 59718 base. Source: https://everydetail365.com/
5. **Gallatin Platinum Mobile Detailing** — Business's own booking page (Setmore): "I come to you home, work, wherever, fully equipped with my own water … and power." Phone (406) 600-9023 and published email gallatinplatinum@gmail.com both printed on that page; same phone on its Google listing (base address 2220 W Main St, Bozeman). Confidence: High — mobile service, phone, and published email confirmed on the business's own booking page. Sources: https://gallatinplatinumdetailing.setmore.com/?source=qrcode ; Google listing.

## Dedupe

- All five names and phones checked against the live directory (316 businesses via vs_rest.py `businesses?select=name,phone`) — no name or phone matches. Also grep-checked against every file under ~/workspace/van-squad/prospecting/ — no matches (the neighboring day-05 Bozeman 59715 house-cleaning cell contains none of these businesses).
- Existing Montana detailing businesses already in the directory from the Billings cell (Little Details Mobile Detailing Service, Redline Detailing LLC, Stags Auto and Detailing) are different businesses in a different city; no overlap with this cell.

## Exclusions / held out (with reasons)

- **AB Auto Detailing (Bozeman listing, (303) 495-9008)** — EXCLUDED: the website on the listing, abdetailing.co, is the business's own site and it is a Denver, CO operation ("AB Auto Detailing Denver… hundreds of customers across Denver"). No Bozeman local operator confirmed — fails the local-operator gate.
- **The Right Guys Mobile Detail ((406) 589-8938, 2812 W Villard St, Bozeman 59718)** — HELD OUT: appears in a Google listing with "Mobile" in the name, but no business website could be found, so mobile service could not be confirmed from the business's own materials. Not counted.
- **406 Detail (406detail.com, (406) 219-7566)** — HELD OUT: the business's website could not be fetched for verification, so mobile service is unconfirmed from its own materials.
- **Bighorn Auto Detailing (bighorn-auto.com, (406) 595-3607)** — HELD OUT: website unreachable for verification; mobile service unconfirmed from its own materials.
- **Wilde Side Detail (wildesidedetail.com)** — EXCLUDED: own site presents a ceramic-coating studio with no mobile/on-site claim and no phone on the site; mobile unconfirmed.
- **New Again Detailing, Rat Wax, Swissdetail Inc, Shines Autos Meticulously, Legendary Details, Executive Automotive Detail (Billion Auto Group dealership)** — EXCLUDED: fixed-location detail shops / dealership detail department (in-shop service); mobile service not offered/confirmed.

## ZIP-expansion note

None. Five qualifying mobile operators were confirmed within Bozeman serving ZIP 59718 without expanding to another ZIP. service_zips in the inserts = ["59718"] for each business (cell target ZIP, mirroring the day-04 template); each business's wider stated service area is recorded in the notes above.
