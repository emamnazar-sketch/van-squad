# Rotation Day 5 — Montana: Great Falls × Handyman × ZIP 59401

- Researched: 2026-10-17 (owner-ordered live run, Day 5)
- Cell: Montana × Great Falls × ZIP 59401 × Handyman
- Sources: each business's own website first, then public listings (Google Business, HomeAdvisor). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Crafted Home Repairs | (406) 760-1500 | Handyman | Great Falls | https://www.craftedhomerepairs.com/ | hello@craftedhomerepairs.com — own website https://www.craftedhomerepairs.com/ | High — own site lists 202 2nd Ave S, Ste 201, Great Falls, MT 59401, phone (406) 760-1500 and email, and handyman small-job work ("No job is too little") done in customers' homes | Business's own website + Google Business listing |
| Great Falls Handyman | (406) 315-0711 | Handyman | Great Falls | http://thegfhandyman.com/ | — none found (own site shows a quote form only, no readable email address) | High — own site presents a licensed & insured local handyman (owner Daniel Emrich) serving Great Falls homes/rentals, big and small jobs, with phone (406) 315-0711 shown throughout the site; the Google listing shows a different number ((406) 781-3955), so the own-site number was used per the own-site-first rule | Business's own website + Google Business listing |
| Handyman Pros | (406) 217-6484 | Handyman | Great Falls | http://handymanprosmontana.com/ | — none found (own site shows a quote form only, no readable email address) | High — own site says "Call owner Allen Ocheltree today at 406-217-6484" and presents Great Falls / Cascade County handyman repairs, maintenance and installs for residential and commercial customers, "No job is too small"; Google listing (511 16th St N, Great Falls) shows the same phone | Business's own website + Google Business listing |

## Dedupe
- Checked every name and phone in this batch against the live directory (vs_rest.py businesses name/phone pull) on 2026-10-17 — no matches for "Crafted Home Repairs", "Great Falls Handyman", "Handyman Pros", or the phones (406) 760-1500, (406) 315-0711, (406) 781-3955, (406) 217-6484. No Montana businesses were in the directory yet.
- Grepped every name and phone against all files in ~/workspace/van-squad/prospecting/ on 2026-10-17 — the only near-name hit is "Your Handyman Pros" of West Valley City, UT (day-04-ut-westvalleycity batch), a different business with a different phone ((801) 949-2376); not a duplicate. No dedupe skips in this cell.

## Excluded (checked, did not pass the gates)
- JLP Labor Company (Google listing: 820 1st Ave SW #103, Great Falls; (406) 564-9334) — EXCLUDED: its only website (a Google business.site page) is dead (404), so no own materials could confirm mobile handyman work; it presents as a "labor company" with a secondary carpet-cleaning category.
- All The Trimmings (136 29th Ave NE, Great Falls; own site in ZIP 59404) — EXCLUDED: its own website presents a landscaping / tree-trimming company (with home repair as a side line), not a general handyman, and the Google listing identity conflicts with its own site (listing shows a chimney/dryer-vent business name and a different phone, (406) 604-0041, vs. own site's 406-781-0253).
- Pete's Construction LLC (HomeAdvisor profile: Great Falls; cell (406) 799-6872) — EXCLUDED: no own verifiable website found, and handyman work could not be confirmed from the business's own materials (construction company visible only on a lead-gen platform profile).
- Thomas' Tenant Improvement (4103 Ella Ave, Great Falls, MT 59405; (406) 781-9371) — NOT INCLUDED: its own site does confirm Great Falls general maintenance/handyman work, but it is based in adjacent ZIP 59405 and leans contractor/painting; the 59401 minimum (3) was met inside 59401, so the ZIP expansion was not triggered (see ZIP note).
- Reds handyman services (Google listing: 1500 Adams Blvd, Great Falls; (406) 899-9338) — EXCLUDED: categorized as a construction company, no website, and no own materials confirming handyman/small-job service.
- Tree service & Handyman (Google listing: 21 E Country Ln, Great Falls; (406) 590-6897) — EXCLUDED: primary category is tree cutting service, a specialist, not a general handyman.

## ZIP note
- No ZIP expansion: 3 qualifying businesses were confirmed for 59401, meeting the cell minimum inside the target ZIP, so no adjacent ZIP was opened.
- Crafted Home Repairs publishes its own 59401 address (202 2nd Ave S, Ste 201, Great Falls, MT 59401). Great Falls Handyman and Handyman Pros are Great Falls service-area handymen (neither publishes a base ZIP on its own site; Handyman Pros' Google listing address is 511 16th St N, Great Falls), so their service_zips carry 59401 only — no ZIPs were invented.
- Full set of ZIPs in this batch's service_zips: 59401.

## Email leads
- 1 published email collected, from the business's own website: Crafted Home Repairs — hello@craftedhomerepairs.com (see the matching -leads.json). The other two businesses in this cell publish no readable email on their own sites or listings (quote forms only), so none was recorded for them.
