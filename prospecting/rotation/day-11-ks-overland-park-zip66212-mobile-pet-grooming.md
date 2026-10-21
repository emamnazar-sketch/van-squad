# Rotation Day 11 — Kansas: Overland Park × Mobile pet grooming × ZIP 66212

- Researched: 2026-10-21 (nightly rotation, Day 11)
- Cell: Kansas × Overland Park × ZIP 66212 × "Mobile pet grooming" (exact label verified in ~/workspace/van-squad/js/data.js, Pet care group)
- Cell note: Overland Park / Johnson County has a real mobile-grooming market — 4 businesses passed all gates. All four confirm service to Overland Park at city level from their own materials; none publishes a ZIP-code list (except excluded Furry Land, below), so service_zips = ["66212"] only for every included business — no ZIP was invented. No adjacent-ZIP expansion was needed to reach 3+ (4 found in-cell by city-level service).
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Spotless Groomers | (913) 608-4520 | Mobile pet grooming | Overland Park | https://spotlessgroomers.com/ | None found — no email published on its own site (phone + booking form only) | High — own site: "Mobile Pet Grooming at Your Doorstep… fully equipped grooming van… across Overland Park, Leawood, Lenexa, Olathe, Shawnee, Mission & Prairie Village"; own FAQ: "Spotless Groomers serves Overland Park… Our primary service area", phone (913) 608-4520 on own homepage/FAQ | Business's own website |
| Bark & Mane of Overland Park | (913) 404-2125 | Mobile pet grooming | Overland Park | https://www.barkandmane.com/pet-groomers/overland-park/ | None published for the local business — only franchisor corporate contacts (info@ / accessibility@) on the national site, NOT attributed to this location | High — own location page: name "Bark & Mane of Overland Park", "Cities Served: Leawood, Overland Park", "full-service grooming van, right to your driveway", "Direct Line: (913) 404-2125"; page notes "Aussie Pet Mobile of Overland Park is now Bark & Mane of Overland Park" (same local operator, rebranded) | Business's own website (location page) |
| Johnson County Barking Club LLC | (913) 530-7053 | Mobile pet grooming | Overland Park | https://www.jocobarkingclub.com/ | smkc2010@gmail.com — https://www.jocobarkingclub.com/ (business's own homepage: "Call/Text: 913-530-7053 – Email: smkc2010@gmail.com") | High — own mobile-grooming page: "The mobile grooming van is available in Johnson County, Kansas City, Overland Park, Prairie Village, Leawood, Lenexa, Olathe… We have a fully equipped mobile grooming van… We come to you!", phone 913-530-7053 on that page; own homepage lists "mobile pet grooming in… Overland Park…" (site short name: Joco Barking Club) | Business's own website |
| Four Pretty Paws | (636) 400-7297 | Mobile pet grooming | Overland Park | https://fourprettypaws.com/kansas-city/ | pets@fourprettypaws.com — https://fourprettypaws.com/four-pretty-paws-mobile-pet-grooming-st-louis/ (business's own website: "email us at pets@fourprettypaws.com"; company-wide email published on its own site — see note) | Medium — own Kansas City page: "Since 2018, Four Pretty Paws Mobile Pet Spa has been bringing… grooming right to your doorstep… in the Kansas City area", served-city list includes Overland Park, Lenexa, Shawnee, Leawood, Olathe, Prairie Village, Merriam, phone "636.400.PAWS (7297)" on that page; own site: "state-of-the-art mobile grooming van comes to your door"; CAVEAT: the phone is the company-wide number shared with its St. Louis HQ — no distinct Kansas City local number is published | Business's own website (Kansas City location page) |

## Dedupe
- Live DB (821 active businesses via vs_rest.py at research time): grep for "Spotless Groomers", "608-4520", "Bark & Mane of Overland Park", "404-2125", "Barking Club", "530-7053", "Four Pretty Paws", "400-7297" — no matches. Name-similar DB rows are different businesses: Spotless Hounds (Boise, (208) 870-7944) and other Bark & Mane locations (Elk Grove / Boise / Western Montana / East Denver / Boulder-Arvada) all carry different local phones and city qualifiers.
- All prospecting files (~/workspace/van-squad/prospecting/, incl. tonight's Day-11 Wichita cells and Overland Park 66210 house-cleaning / 66223 detailing cells): same greps — no matches. Spotless Groomers appears only as an exclusion note in the Day-11 Wichita 67212 file ("mobile, but Kansas City metro, not Wichita") — it was never included in any prior batch, and this Overland Park cell is its correct home cell.
- Within-batch: no duplicates.

## Email notes
- Johnson County Barking Club LLC: smkc2010@gmail.com is published verbatim on its own homepage next to its phone — included in leads.
- Four Pretty Paws: pets@fourprettypaws.com is published on the business's own website (St. Louis page FAQ: "you can also call 618-400-7297 or email us at pets@fourprettypaws.com"). It is the company's published business email; the Kansas City page itself publishes phone + booking form only. Included in leads with its true source URL.
- Spotless Groomers: no email published on its own site that could be verified — not in leads.
- Bark & Mane of Overland Park: the national site publishes only franchisor corporate emails (info@barkandmane.com / accessibility@barkandmane.com, Aussie Pet Mobile, Inc., Irvine, CA). Those are NOT this local business's email and were NOT attributed to it — not in leads.

## Excluded (checked, did not pass the gates)
- Furry Land Mobile Grooming — Overland Park page (furryland.us) explicitly lists ZIP 66212 among served ZIPs (66204, 66207, 66212, 66213, 66214, 66215) and mobile service at the driveway — BUT the only phone it publishes is (877) 726-3345, which is identical to the existing live-DB entry Furry Land Omaha (877) 726-3345. Same phone = skip per the dedupe rule; no distinct local phone is published.
- Woofie's of Kansas City North, (816) 888-6689, and Woofie's of Lee's Summit-Kansas City South, (816) 287-4387 — both are Missouri-based mobile groomers; their own location pages do not verifiably list Overland Park, KS / 66212 in their service areas (Lee's Summit page's Areas/ZIP lists did not confirm it), so neither was counted for this Kansas cell.
- Zoomin Groomin — no Kansas City / Overland Park location page or local phone verifiable (locations found were FL, CA, IA, CO, MN, TX, NY); not counted.
- Hydrodog Kansas City — no distinct named local groomer with a verifiable local phone for Overland Park could be confirmed from its own materials; the (913) 744-1400 on the iPetsKC directory page is that directory publisher's own footer telephone (PO Box 23222, Overland Park, KS 66283), not attributable to a Hydrodog groomer, and the HydroDog Trooper listing is Kansas City, MO 64156 with no phone found.
- Paisley Paws Grooming, (828) 301-3126 — own site: "my home salon in downtown Overland Park KS" (7913 Lowell Ave, 66204) — grooming at the groomer's home, not mobile to the customer.
- The Groom Gallery Overland Park, Queen of Paws Boutique & Spa, Petco Grooming Overland Park, Woof Gang Bakery & Grooming Overland Park, U Wash Puppy — storefront salons only; no mobile/at-home service confirmed from their own materials.

## ZIP note
- Target ZIP 66212 for all four businesses. None of the four publishes a ZIP list; all publish city-level Overland Park service on their own sites. service_zips contains only 66212 — no ZIP invented.
- Email leads: 2.
