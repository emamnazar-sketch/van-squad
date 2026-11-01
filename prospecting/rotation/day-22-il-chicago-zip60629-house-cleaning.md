# Day 22 — Illinois — Chicago — ZIP 60629 — House cleaning

- Date: 2026-11-01
- Cell: IL / Chicago / 60629 / House cleaning
- Sources used: businesses' own websites first, then Google Business listings (via public search results). No database insertion was performed by this worker; this is a prepared batch only.

## Businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| Karen's Green Maids | (773) 538-3031 | House cleaning | Chicago | https://karensgreenmaids.com/maid-service-garfield-ridge-chicago | hellocleaningservicescompany@gmail.com — https://karensgreenmaids.com/meet-the-team | High — own Garfield Ridge page says a house cleaner arrives at your house and explicitly lists ZIPs 60629, 60632, 60638, 60804; phone and email published on its own site | Own website (Garfield Ridge page + About/Contact) |
| Companion Maids | (773) 346-6714 | House cleaning | Chicago | https://companionmaids.com/ | staff@companionmaids.com — https://companionmaids.com/ | High — own site lists House cleaning service, Chicago address (500 N Michigan Ave UNIT 600, Chicago, IL 60611), phone and email; Chicago-based, family-owned, serves Chicago metro homes | Own website |
| Flawless Cleaning | (773) 780-8648 | House cleaning | Chicago | http://www.flawlesshousecleaning.com/ | None published found | Medium — own site confirms full-service residential house cleaning for Chicago and surrounding metro; phone from its Google listing (6040 S Meade Ave, Chicago) with In-Home Service category, not shown on the site homepage fetched | Own website + Google Business listing |
| Lidia's Cleaning Service | (773) 494-7514 | House cleaning | Chicago |  | None published found | Medium — Google listing at 6748 S Karlov Ave, Chicago (in 60629), categorized In-Home Service; its own listing description presents a registered, insured cleaning company serving homes | Google Business listing |
| Victoria's cleaning services | (708) 856-7748 | House cleaning | Chicago |  | None published found | Medium — Google listing at 3547 W 71st St, Chicago, In-Home Service; its own listing description says "We are located in southwest Chicago. We can travel any distance to you" — explicit travel-to-customer | Google Business listing |
| Vero's Cleaning Company | (312) 721-3078 | House cleaning | Chicago |  | None published found | Medium — Google listing at 6143 S Melvina Ave, Chicago (adjacent 60638, serving this cell); its own listing specialty services explicitly include Homes and Move In / Move Outs | Google Business listing |

## Dedupe

- Grepped all of ~/workspace/van-squad/prospecting/ for every candidate name and phone: no inserted match for any of the six.
  - Karen's Green Maids / (773) 538-3031 appears only in the Day 22 Evanston and Skokie batch files, where it was EXCLUDED for not being local to those suburbs and was never inserted. It qualifies here: it is Chicago-based and its own Garfield Ridge page explicitly covers 60629.
  - "Vero's Cleaning" in a Day 9 South Dakota file is a different, out-of-area South Dakota business with a different phone — not this Chicago business.
- Live DB check per phone (vs_rest.py get businesses?phone=eq.<phone>) on 2026-11-01: all six returned HTTP 200 with an empty array — (773) 538-3031, (773) 346-6714, (773) 780-8648, (773) 494-7514, (708) 856-7748, (312) 721-3078. No same-name or same-phone duplicate in the live database or in tonight's other Day 22 files on disk.

## Excluded

- King of Maids — conflicting public phones: Google listing (773) 328-8709 vs. (800) 921-4334 toll-free published elsewhere; also a national booking platform model. Excluded per conflicting-phone / toll-free rules.
- Spotless 2000 Corporation (6332 S Archer Ave, (773) 619-3514) — commercial cleaning & maintenance / janitorial only; no residential house cleaning confirmed. Excluded.
- Eve and Vic Cleaning Service (5770 S Archer Ave, (773) 582-7400) — its listed website eveandviccleaning.com now resolves to a domain-for-sale page; website not verifiable and residential service not confirmed from its own live materials. Excluded.
- Miracle Clean ((708) 244-1570) — its own Wix site gives a Justice, IL address and says it serves the Justice area, conflicting with the Chicago Google listing address; not a Chicago business. Excluded.
- Lores Cleaning (3824 W 63rd St, (773) 691-7902) — Google listing shows only a generic "Cleaning Service" category with no residential / in-home confirmation from its own materials. Excluded as insufficiently verified.
- Deluxe cleaning inc (4059 W Marquette Rd, (708) 979-3800) — only a generic "Cleaning Service" listing; a different Chicago "Deluxe Cleaning Services" publishes a different phone, so residential service and identity could not be cleanly verified. Excluded.
- Clean Service the Building Company ((872) 214-5251) — toll-free-style number and building/commercial focus. Excluded.
- House Cleaning Services ((773) 302-8706) — already inserted in tonight's Day 22 Chicago 60614 batch. Duplicate, excluded.
- Detailed Cleaning ((224) 422-6095) — already inserted in tonight's Day 22 Chicago 60614 batch. Duplicate, excluded.
- Handy / Homeaglow / Check Maid / SERVPRO / Kalco Laundry / Green Team Carpet Cleaning / ClearView Window & Gutter — platform lead-gen, restoration, laundry, carpet-only, or window-only; not house cleaning operators for this cell. Excluded.

## ZIP note

No expansion beyond the cell was needed to reach 3+ qualifying businesses: four of the six are in or directly serving 60629 (including two Chicago-wide operators whose own sites cover Chicago / Garfield Ridge), and Vero's Cleaning Company and Flawless Cleaning are based in the immediately adjacent 60638 (Garfield Ridge) area serving this cell. Service ZIPs in the inserts file are ["60629"] for every business except Karen's Green Maids, whose own Garfield Ridge page itself states 60629, 60632, 60638, and 60804 — those four are listed for that business only.
