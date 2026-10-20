# Day 10 — Lincoln, NE · ZIP 68502 · Mobile auto detailing

**Insert-ready: 3 businesses (+3 listings). Leads: 1.**

**City note:** Lincoln is NEW to the directory — no Lincoln businesses existed before tonight, so no in-city duplicates were possible; the full dedupe sweep below still covered the live DB and every prior prospecting file.

**ZIP expansion note:** Not used. ZIP 68502 (downtown / near-south Lincoln) sits inside a city-wide mobile-detailing market: all three included businesses market Lincoln-wide mobile service from their own materials and cover 68502. Three qualifying businesses were found without expanding to an adjacent ZIP, so no expansion was needed.

service_zips reasoning: no included business publishes a ZIP list on its own materials; each claims Lincoln / greater-Lincoln mobile service (GP states a 35-mile radius around Lincoln), so per the task rule each row carries ONLY the target ZIP 68502 — no other ZIPs were added, because no business itself stated them.

## Included

| # | Business | Phone | Category | City | Website | Published email + source | Confidence + reason | Sources |
|---|----------|-------|----------|------|---------|--------------------------|-----------------------|---------|
| 1 | GP Mobile Car Wash & Detail | (402) 601-6929 | Mobile auto detailing | Lincoln | https://www.gpmobilecarwash.com/ | gpmobilecarwash@gmail.com — own website contact section, https://www.gpmobilecarwash.com/ | **Medium** — mobile confirmed extensively on its own site ("Mobile Car Wash & Detail. We Come to You!", "let us come straight to your driveway, office, or job site", "fully equipped mobile unit", 35-mile service area around Lincoln) and the phone is printed repeatedly on its own site — but its Google listing shows a different number, (402) 769-2723, so the own-site number is used and confidence is Medium, not High, until the discrepancy resolves. Shop/drop-off at 5901 Fremont St, Lincoln, NE 68507 is offered as an alternative; the mobile service itself is genuine come-to-you. | Own site https://www.gpmobilecarwash.com/ ; GBP record via search (conflicting phone noted) |
| 2 | Premium Shine | (402) 217-7573 | Mobile auto detailing | Lincoln | https://www.premiumshineusa.com/ | None published on its own site in the fetched content — no address recorded rather than guessed | **High** — phone printed on its own website contact section ("402-217-7573", shop 2004 SW 5th St Ste D, Lincoln, NE 68522) and the Google listing agrees (+14022177573). Mobile confirmed on its own site: title/header "mobile detail \| Lincoln, NE", "A mobile auto detailing company in Lincoln, NE", FAQ "Do you come to my location? Yes! We're mobile from mid-March through mid-November, weather permitting" and "Our mobile setup is completely self-contained. We bring everything we need — water, generator, pressure washer…". Scratch repair is in-shop only; the detailing packages themselves are mobile (seasonal, noted). | Own site https://www.premiumshineusa.com/ ; GBP record via search |
| 3 | Pretty Good Detailing | (402) 265-6444 | Mobile auto detailing | Lincoln | https://www.prettygooddetail.com/ | None published on its own site in the fetched content — no address recorded rather than guessed | **High** — phone printed on its own website ("Phone: +1-402-265-6444", "(402) 265-6444"). Mobile confirmed on its own site throughout: "Mobile Car Detailing in Lincoln, NE", "We bring the deep clean to your driveway", "We come to you — We arrive at your home or office with everything needed", "Based in Lincoln, NE and owner-operated, we specialize in premium mobile detailing at your home or office". | Own site https://www.prettygooddetail.com/ |

## Leads (1)

- GP Mobile Car Wash & Detail — gpmobilecarwash@gmail.com (own website contact section, https://www.gpmobilecarwash.com/)
- Premium Shine and Pretty Good Detailing publish no email address on their own sites in the fetched content, so no lead was collected for either — addresses were not guessed.

## Dedupe

- All candidate name/phone pairs checked by script against /tmp/live-businesses.json (723 live businesses) AND every *-inserts.json under ~/workspace/van-squad/prospecting/ (730 existing businesses, including seeded-batch-1): zero collisions by name or phone for all three included businesses.
- No Lincoln cell existed before tonight, and no duplicate exists within this cell (three distinct names, three distinct phones). GP's alternate GBP number (402) 769-2723 was also checked — no collision.

## Near-misses (real businesses, held — mobile-to-customer not confirmed from own materials, and/or Lincoln service not stated, and/or phone single-source)

- **Cassie's Extreme Detailing** (746 B St, Lincoln; (402) 413-1469; https://www.cassiesextremedetail.com/) — its Google description, in its own words, lists "Mobile Detailing, Drop off Detailing services… call/text Cassie (402)413-1469", but its own website could not be fetched in this run (fetch failed with no source HTTP status — that is a tool failure, not evidence the site is down), so no own-website mobile confirmation could be verified. Held for recheck — one fetchable own-site mobile statement clears it.
- **Icarus Mobile Detailing** (942 Juniper Ave, Crete, NE; (402) 418-1673; http://icarusmobiledetailing.godaddysites.com/) — mobile confirmed on its own site ("We're mobile. Most of our services can be completed in your own driveway or even a parking lot") and the phone is printed on its own site and agrees with its Google listing — but its own materials state no service area and no Lincoln service; it is based in Crete, ~19 miles from 68502. Held — listing it under Lincoln would invent a service area it does not claim.
- **Harambee Mobile Detailing** (Lincoln, NE; (402) 805-9394; http://www.harambeemobiledetailing.com/) — "Mobile" in the name and a Google listing, but its own website is currently a Squarespace "Coming Soon / under construction" parking page with no phone and no service description → held on the own-materials rule.
- **HiddenRebel Mobile Detailing** (4904 Madison Ave, Lincoln; (402) 310-5962) — Google description says "Mobile detailing means we bring the vehicle cleaning to you", but the listing is flagged "Possibly Temporarily Closed" and no fetchable own-site confirmation was established in this run → held.
- **Too Clean Detail** (3045 N 13th St, Lincoln; (402) 601-0738 per its Google description; https://toocleandetail402.com/) — its own fetched homepage shows interior/exterior services with no mobile or come-to-you claim and no phone in the fetched content → held as unconfirmed-mobile.
- **JPR Mobile Detailing** — surfaced in a reviews search, but it is a Long Beach, CA business (562 area code), not Nebraska → not a Lincoln candidate at all.

## Excluded (wrong model / unusable)

- Fixed shops verified from their own materials: **MC Auto Detailing** (2043 O St — own site states explicitly "Drop-off service only… Mobile detailing is not currently offered"), **Golden Auto Detailing** (122 S Antelope Valley Pkwy — own site: book, "Drop off at the studio", "photographed in our studio… bay"), **Shinetime Auto Detailing** (own Google description: "premium in-shop detailing in Lincoln, NE").
- Shop/detail listings with no mobile claim in their own materials in this run: Grime 2 Shine Auto Detailing, Midwest Auto Care & Detailing, Custom Auto Detailing, Zo's Auto Detail, DetailingKings, DeBoer Detailing and Deals, RCR Prestige Auto Detailing, DNA Detailing, Keep It Clean / Complete Detail (137 O St), Juarez Complete Auto Care LLC, ReNu Bedliners and Tints (tint/bedliner shop, not mobile detailing).
- Car washes and non-detailing listings in the search field (Soapatopia Express, Rain Dance Car Wash, Power Wash) → excluded.

## Cell-result summary

NE × Lincoln × 68502 × Mobile auto detailing: **3 insert-ready businesses (2 High, 1 Medium), 1 published-email lead**, no ZIP expansion needed (city-wide mobile market covers 68502; the 3-business threshold was met without padding), 0 dedupe skips, and 5 near-misses held for recheck (Cassie's — own site unfetchable in this run; Icarus — mobile confirmed but no Lincoln service claimed; Harambee — own site is a parking page; HiddenRebel — possibly temporarily closed; Too Clean — no mobile claim on own site). Lincoln's first cell for the directory; the count was not padded — Lincoln's true-mobile field is thinner than Omaha's.
