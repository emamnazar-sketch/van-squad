# Day 26 — Kentucky | Louisville | ZIP 40206 | Deep cleaning

Cell: KY / Louisville / 40206 / "Deep cleaning" (exact label verified in ~/workspace/van-squad/js/data.js). Target ZIP 40206 is Clifton / Crescent Hill, Louisville. All 4 qualifying businesses serve Louisville including 40206 itself — no adjacent-ZIP expansion was needed. Every business was verified from its own website first (residential deep cleaning performed at customers' homes + public phone), then deduped against the live DB dump at ~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json (2,217 active businesses) and a grep of ~/workspace/van-squad/prospecting/ — no name or phone matches for any included business.

**Critical overlap rule applied:** all 8 businesses inserted earlier tonight in the Louisville 40207 House cleaning cell (day-26-ky-louisville-zip40207-house-cleaning-inserts.json) were SKIPPED here even where they explicitly offer deep cleaning and explicitly serve 40206 — see Dedupe section. That rule is the main reason this cell is smaller than the 40207 cell: Louisville's strongest deep-clean operators were already taken tonight.

## Included (4)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / notes |
|---|---|---|---|---|---|---|---|---|
| Red Feather Cleaning | (502) 281-0731 | Deep cleaning | Louisville | https://www.redfeathercleaning.com/ | info@redfeathercleaning.com — own site contact block ("Call or Text (502) 281-0731 Email info@redfeathercleaning.com") | High — locally owned Louisville operator; own site offers a named "Deep Cleaning" service (baseboards, blinds, ceiling fans) for homes, lists Crescent Hill among its Louisville service areas, and its own move-out page lists "40206 Clifton & Crescent Hill" explicitly; phone + email on own site | https://www.redfeathercleaning.com/ | No DB/prospecting match on name or phone. Only 40206 was published as an explicit ZIP, so service_zips = [40206] only |
| Golden Glow Cleaning Service | (502) 594-0738 | Deep cleaning | Louisville | https://sites.google.com/view/goldenglowcleaning | None published on own site | Medium — own site (Google Sites): "Locally owned and operated in Louisville, Kentucky," specializes in residential cleaning and named "Deep Cleaning Services" (baseboards, blinds, ceiling fans, inside appliances) at homes, serving Louisville, Shively, St. Matthews, Jeffersontown, Okolona and Valley Station, with phone (502) 594-0738 on the site; Medium because the site is a single Google Sites page with no ZIP-level list | https://sites.google.com/view/goldenglowcleaning | No DB/prospecting match. No ZIP list published, so service_zips = [40206] only |
| ShineBrite Solutions | (502) 799-5074 | Deep cleaning | Louisville | https://shinebritesolutions.net/ | None published on own site | Medium — own site: House Cleaning Services section for residential clients states "Our deep cleaning services guarantee that your home feels welcoming and relaxing," serving Louisville, KY and neighboring counties, with phone 5027995074 in its own site footer; Medium because the business also does commercial/Airbnb work and publishes no ZIP-level list | https://shinebritesolutions.net/ | No DB/prospecting match. service_zips = [40206] only |
| Super Cleaning Service Louisville | (502) 230-6735 | Deep cleaning | Louisville | https://supercleaningservicelouisville.com/ | None published on own site | Medium — own site has a dedicated "DEEP CLEANING" residential service (deep-cleaning page + repeated customer deep-clean reviews), offers standard/deep/one-time/move-in-out cleaning for Louisville homes, "Serving Greater Louisville," with phone (502) 230-6735 and address 8921 Stone Green Way, Louisville, KY 40220 on its own site; Medium because its named neighborhood list centres on south/east Louisville and no ZIP-level list is published | https://supercleaningservicelouisville.com/ | No DB match on name or phone. A different business named "Super Cleaning" in Fargo, ND ((701) 205-9849, Day 8) exists in prospecting — different city, phone and operator, not a duplicate. service_zips = 40206 + its own published address ZIP 40220 |

## Dedupe — tonight's 40207 House cleaning businesses SKIPPED (overlap rule)

All 8 are in day-26-ky-louisville-zip40207-house-cleaning-inserts.json. None was re-added as Deep cleaning, and none of their leads was re-collected here:

- Rocking Robins Maids LLC — (502) 488-8685 — explicitly offers Top-to-Bottom Deluxe Deep Cleaning and lists Crescent Hill + Clifton (40206) on its own site, but already inserted tonight as House cleaning. SKIP.
- Your Cleaning Krew — (502) 618-9964 — offers deep cleaning across Jefferson County, but already inserted tonight. SKIP.
- Maid in the Ville — (502) 553-9575 — offers one-time deep cleaning, but already inserted tonight. SKIP.
- Maids In Apron — (502) 202-7542 — offers a named Deep Cleaning service, but already inserted tonight. SKIP.
- The Cleaning Authority - Louisville — (502) 337-3518 — its own Louisville page lists 40206 explicitly in its service-ZIP list and deep-cleans via its Detail-Clean Rotation System, but already inserted tonight. SKIP.
- Merry Maids of Louisville — (502) 369-0887 — offers Deep Cleaning on its own Louisville page, but already inserted tonight. SKIP.
- MaidPro Louisville — (502) 254-9979 — offers one-time deep cleans, but already inserted tonight. SKIP.
- Kentucky Maid — (502) 520-5223 — its Google listing offers a named "Deep clean" service, but already inserted tonight. SKIP.

## Exclusions

- **The Maids in Southern Louisville ((502) 795-0110, 3411 Bardstown Rd)** — EXCLUDED for this cell: own location page offers one-time deep cleaning with a local phone, but its territory is explicitly Southern Louisville (Jeffersontown to West Point, Fern Creek); coverage of 40206 (Clifton / Crescent Hill) was not confirmed from its own materials.
- **Maid In Louisville ((502) 895-2067, 2027 Frankfort Ave, Louisville, KY 40206)** — EXCLUDED: the business sits in 40206 itself and its listing says it has cleaned Louisville homes for 25+ years, but a residential deep-cleaning offer could not be confirmed from its own materials (its website renders no readable service content) — deep cleaning not verified, per the cell brief.
- **Helping Devine (helpingdevine.com)** — EXCLUDED: own site clearly offers Deep Cleaning to Louisville Metro / Jefferson County homes and is family owned, but no public phone number could be found on its own site or in listings (contact form only) — no verifiable public phone.
- **Cleaning Louisville ((502) 690-0614)** — EXCLUDED: own site shows conflicting phone numbers ((502) 690-0614 in headings, (502) 224-6720 and (502) 310-5933 in its contact block) and markets "Detailed Cleaning Services" without a clearly named residential deep-cleaning offer — phone and service both unverified.
- **Sumak Wasi Cleaning LLC / Kentucky Style Cleaning ((502) 930-1635 listing / (502) 936-4408 BBB)** — EXCLUDED: conflicting phone numbers across sources, BBB categories are commercial cleaning only, and no residential deep cleaning was confirmed from its own materials (its own site renders broken/Spanish placeholder text).
- **Gladly Clean ((502) 419-3285)** — EXCLUDED: own website returns 404 (homepage and contact page); no own materials available to confirm residential deep cleaning.
- **The Maids in Saint Matthews (1-800-843-6243)** — EXCLUDED: toll-free-only number, same exclusion as the 40207 cell.
- **Two Maids (New Albany, IN — (812) 778-2755)** — EXCLUDED for this cell: nearest location is based in New Albany, Indiana with an Indiana phone; no Louisville, KY local operator for 40206 confirmed from its own materials.
- **MaidUp Louisville & Ventura ((502) 631-3717)** — EXCLUDED: multi-city California-centred operation; no Louisville deep-cleaning confirmation from its own materials, same reasoning as the 40207 cell.
- **SERVPRO of Downtown Louisville ((502) 785-0834), Louisville Biohazard / 360 Hazardous Cleanup ((502) 971-4028), Bluegrass Sanitizing ((502) 610-5211)** — EXCLUDED: restoration / biohazard / disinfection specialty cleaning, not general residential deep cleaning.
- **River City Clean ((888) 806-1644), Kingdom Pacesetters Janitorial, Tallon Industrial Services ((502) 883-0030), ShineBrite-adjacent commercial cleaners** — EXCLUDED: toll-free-only and/or commercial-janitorial/industrial only.
- **Homeaglow, Thumbtack, Masters' Guild, Angi/HomeAdvisor listings (incl. One Mom's Cleaning Service, Mama Bear Cleaning Services — platform profiles only, no own website/phone verified from own materials)** — EXCLUDED: national lead-gen / marketplace platforms with no confirmed local operator of their own.
- **Psycho Pro Cleaning Services LLC** — EXCLUDED: only web presence found is a temporary chatgpt.site page with an email but no verifiable public phone on a durable own website.

## Leads

1 published email collected (see matching -leads.json): Red Feather Cleaning — info@redfeathercleaning.com, published on its own website's contact block. No other included business published an email on its own site that could be verified (Golden Glow, ShineBrite and Super Cleaning publish phone/booking contact only). Emails are leads only — never written to business profiles.

## Files

- day-26-ky-louisville-zip40206-deep-cleaning-inserts.json — 4 businesses + 4 listings, exact coordinator shape (business fields only as specified, listings title "Deep cleaning at your location").
- day-26-ky-louisville-zip40206-deep-cleaning-leads.json — 1 lead.

Status: PREPARED, NOT INSERTED — coordinator inserts centrally.
