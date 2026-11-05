# Day 26 — Kentucky × Louisville × ZIP 40219 × Handyman

- **Cell:** KY | Louisville | 40219 | Handyman (exact label, verified in js/data.js)
- **Date:** 2026-11-05 (Day 26 run)
- **Expansion:** None needed — 5 qualifying businesses found in the Louisville metro serving 40219 (one, Tryumf Home Services, is addressed in 40219 itself). No adjacent-ZIP expansion was required to reach 3+.
- **Dedupe:** Every candidate name AND phone checked against (a) the Day-26 live-DB snapshot `~/workspace/goals/van-squad-directory-website/hidden_files/day26-open-dump.json` (2,217 rows — it contains zero (502) phones) and (b) `grep -r` across all of `~/workspace/van-squad/prospecting/`. Zero name or phone matches for the 5 businesses below. (Generic-name note: a differently-named "Professional Handyman Services" appears in other states' cells with different phones — a distinct business, not a match.)
- **service_zips:** No business below publishes a ZIP-code list, so every business gets ["40219"] only. City-name service areas and contact/base addresses in other ZIPs were NOT converted into ZIPs.
- **Mobile/on-site:** Each business's own materials (or, for the one Medium entry, its corroborated BBB listing) confirm handyman work performed at the customer's home in Louisville.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Professional Handyman | (502) 271-0090 | Handyman | Louisville | https://professionalhandymanky.com/ | textdoctor@hotmail.com — published in the Contact Us block of its own site, https://professionalhandymanky.com/ | High — own site: "Expert handyman Joshua Roark can provide prompt and reliable solutions for all your home repair needs. From fixing leaky faucets and patching drywall to installing new light fixtures", services are in-home repairs (carpentry, drywall, fixtures, painting, plumbing fixtures), phone "502-271-0090" printed in its own Contact Us block; same phone on its Google listing | https://professionalhandymanky.com/ |
| HomeWise Handyman | (502) 503-5050 | Handyman | Louisville | http://www.homewise.work/ | hello@homewise.work — published in the Get in Touch block of its own site, http://www.homewise.work/ | High — own site: "Your Go-To Handyman for Quality Remodeling… Whether you need small home repairs, custom renovations, or full-scale remodeling", Handyman listed as a service, "Your Reliable Home Improvement Partner in Louisville!", phone (502) 503-5050 printed on site and matching its Google listing | http://www.homewise.work/ |
| My Best Handyman | (502) 531-5744 | Handyman | Louisville | https://www.mybesthandyman.com/ | louisvillesbesthandyman@gmail.com — published on its own site, https://www.mybesthandyman.com/ | High — own site: "Professional home repairs across Louisville & surrounding areas", in-home work shown (faucet, ceiling fan, thermostat installs), "photos help us understand the job before we arrive", phone "502-531-5744" printed repeatedly on site ("call or text 502-531-5744") | https://www.mybesthandyman.com/ |
| First Step Fixin LLC | (502) 643-2759 | Handyman | Louisville | https://first-step-fixin-llc.b12sites.com/ | firststepfixin@gmail.com — published in the Contact block of its own site, https://first-step-fixin-llc.b12sites.com/ | High — own site: "Your locally owned and operated quality handyman services", "Local quality handyman services in Louisville… a handyman service founded in 2021… fix the problem right the first time", phone printed on site as +15026432759 | https://first-step-fixin-llc.b12sites.com/ |
| Tryumf Home Services | (502) 403-3498 | Handyman | Louisville | — none verifiable | — none published that could be verified | Medium — BBB listing (repeated across BBB Louisville-area Handyman/Remodeling category pages): categories "Remodeling, Painting Contractors, Handyman", address Louisville, KY 40219-2980 — in the target ZIP itself — phone (502) 403-3498; graded Medium because it has no own website that could be verified, so phone/service rest on the BBB listing alone | https://www.bbb.org/us/ky/louisville/category/handyman |

## Email leads

4 published addresses collected, all from the businesses' own websites (see table): textdoctor@hotmail.com (Professional Handyman), hello@homewise.work (HomeWise Handyman), louisvillesbesthandyman@gmail.com (My Best Handyman), firststepfixin@gmail.com (First Step Fixin LLC). Recorded in `day-26-ky-louisville-zip40219-handyman-leads.json`. Tryumf Home Services publishes no email that could be verified.

Note: Ben Tyler Building & Remodeling publishes info@bentyler.com on its own site, but the business is excluded below, so its email was NOT collected as a lead. The Professional Handyman email (textdoctor@hotmail.com) is reproduced exactly as printed on its own site.

## Excluded

- **Mr. Handyman of Louisville Northeast, (502) 804-2355** — locally owned franchise, but its own site states its team "serves Anchorage, Lake Forest, Douglas Hills, Indian Hill, Prospect, etc." and its enumerated service-area list is the northeast suburbs (office at 12200 Shelbyville Rd, Louisville, KY 40243); service to south Louisville / 40219 was not confirmed from its own materials.
- **Andy OnCall Handyman Services, (502) 473-7675** — franchise network location (2815 Taylorsville Rd); its own Louisville page could not be fetched/verified in this run, so on-site handyman service at Louisville homes could not be confirmed from its own materials — phone rests on the Google listing alone.
- **Ben Tyler Building & Remodeling / Ben Tyler's Handyman Plus, (502) 583-7252 on its own site** — own site presents the business as building/remodeling ("leader in quality remodeling and new home construction"); handyman appears only as a secondary "Handyman Plus" line in secondary summaries, not confirmed as its handyman service from its own current materials. Also a phone conflict: its Google listing shows (502) 583-4626 while its own site prints 502-583-7252.
- **Hometown Supplies LLC, https://hometownsuppliesky.com/** — its own site's text says it offers handyman services "to homeowners and businesses in Denver, Colorado" (templated/contradictory copy) and publishes no phone that could be verified; not a verifiable Louisville operator from its own materials.
- **Chapman Home Repairs, (502) 310-6227; Collards Home Improvement, (502) 835-7910; Handyman Tom, (502) 792-8692; Handyman Barabanov Services, (502) 438-8680; Thompson's Custom Builders, (502) 965-3718** — Google-listing phone only, with no own website, claimed listing, or corroborating BBB listing whose materials could be verified confirming on-site handyman service at Louisville homes for this cell.
- **Louisville Handyman / Louisville Handyman, Inc.** — older materials (2014) show phone 502-292-2727 and email jfrench@louhandyman.com, but no current own website or listing could be verified confirming it is still operating as a handyman service; stale/unverifiable.
- **Certified Handyman, LLC, (502) 553-5248** — BBB-listed at 3317 Stratford Ave, Louisville, KY 40218 with Jefferson County service, but no own website or claimed listing materials could be verified confirming handyman service for this cell beyond the BBB category line; held out in favour of the corroborated in-ZIP BBB entry (Tryumf).
- **Handyman Connection / Thumbtack / HomeAdvisor / Angi listings** — national lead-gen / marketplace listings with no local operator verified; never used as a source for a business.

## Files

- `day-26-ky-louisville-zip40219-handyman.md` (this file)
- `day-26-ky-louisville-zip40219-handyman-inserts.json` — 5 businesses + 5 listings, validated with `python3 -m json.tool`
- `day-26-ky-louisville-zip40219-handyman-leads.json` — 4 leads, validated with `python3 -m json.tool`

No database inserts were made; no files outside this cell's batch files were edited.
