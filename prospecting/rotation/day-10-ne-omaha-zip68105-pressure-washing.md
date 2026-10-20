# Rotation Day 10 — Nebraska: Omaha × Pressure washing × ZIP 68105

- Researched: 2026-10-20 (nightly rotation, Day 10)
- Cell note: ZIP 68105 is south-central Omaha (residential). Pressure washing is inherently on-site at the customer's home; every included business confirms residential service at the customer's property from its own materials. The cell did NOT need to expand to an adjacent ZIP — 6 qualifying Omaha operators serving Omaha (Rolling Suds' own Omaha page explicitly lists 68105 among its serviced ZIPs) were found.
- Category label verified in ~/workspace/van-squad/js/data.js: "Pressure washing".
- Sources: each business's own website first, then public listings (Google Business, BBB, HomeAdvisor). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — batch files only; the coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Home Rescue Cleaning | (402) 215-9163 | Pressure washing | Omaha | https://homerescueexteriors.com/ | brandon@homerescuecleaning.com and chris@homerescuecleaning.com — both published on its own website (footer/contact, same URL) | High — own site: "pressure washing… Serving Omaha", "Locally Owned. Omaha Grown", residential and commercial, founded by an Omaha firefighter; phone and both emails on the site itself | Business's own website |
| No Pressure Power Washing | (402) 714-0998 | Pressure washing | Omaha | https://www.pressurewashingomaha.com/ | — none published on its own site | High — own site/blog: family business, residential soft-wash and pressure washing for homes throughout the Omaha metro (house, roof, driveway cleaning at the home); phone on its own site and BBB listing agree | Business's own website + BBB |
| Big Red Power Washing | (531) 255-5067 | Pressure washing | Omaha | https://bigredpowerwashing.com/ | — none published on its own site | High — own site: "Locally owned and operated in Omaha… exceptional pressure washing services", founded in Omaha, started as a single truck going to properties; phone shown on its own site ("Call (531) 255-5067") | Business's own website |
| Rolling Suds of Omaha | (402) 821-0438 | Pressure washing | Omaha | https://www.rollingsudspowerwashing.com/omaha-papillion/ | — none published for the Omaha location on its own site | Medium — own Omaha page: "locally owned" Omaha-Papillion team, residential house/driveway/deck washing, and its own serviced-ZIP list explicitly includes 68105; phone conflict noted below — the number used is the Contact number on its own Omaha page; its Google listing shows a different local number, (402) 732-2942, and the page also shows a national 866 number which was NOT used | Business's own website + Google Business listing |
| Window Genie of Omaha | (402) 509-4127 | Pressure washing | Omaha | https://www.windowgenie.com/locations/nebraska/elkhorn/pressure-washing/ | — none published on its own site | Medium — own location pages: "Business: Window Genie of Omaha" with this local phone, pressure washing for homes/driveways/patios in the Omaha area; franchise (Neighborly) with a named local Omaha operator, not a call-center listing | Business's own website |
| Window Hero Northwest Omaha | (402) 697-5700 | Pressure washing | Omaha | https://windowhero.com/locations/northwest-omaha/services/pressure-washing/ | — none published on its own site | Medium — own Northwest Omaha location page: pressure washing / soft washing for Northwest Omaha homes (driveways, sidewalks, concrete at the home) with this local phone on the page; franchise with a named local Omaha location | Business's own website |

## Dedupe
- Live DB (/tmp/live-businesses.json): checked every name and phone above — no matches.
- Every *-inserts.json under ~/workspace/van-squad/prospecting/: checked every name and phone — no matches.
- No name or phone repeated within this batch.
- Phone-conflict note: Rolling Suds of Omaha — own Omaha page Contact shows (402) 821-0438 (used here, per own-site-first rule); Google Business listing for "Rolling Suds Power Washing of Omaha-Papillion, 8901 J St, Omaha" shows (402) 732-2942. Flagged for the coordinator/verifier.

## Excluded (checked, did not pass the gates)
- Shack Shine Omaha — EXCLUDED: listing shows Permanently Closed; only a national 1-888 number.
- Aptera Douglas County pressure washing — EXCLUDED: lead-generation directory, no local operator phone published by a business itself.
- Loberg and Sons Pressure Washing Company, Omaha — EXCLUDED for this cell: Google listing phone (402) 340-0140, but its own website could not be verified for pressure-washing service (site returned not-found at check time) and its primary category is gutter cleaning — on-site pressure washing could not be confirmed from its own materials.
- Window Hero / Window Genie national pages without the Omaha location — not used; only the named Omaha location pages above were used.

## ZIP note
- Service ZIPs in inserts: ["68105"] for all. No additional ZIPs were added: Home Rescue, No Pressure and Big Red publish Omaha / Omaha-metro service by city name, not a ZIP list, so no ZIPs were invented. Rolling Suds publishes a very long serviced-ZIP list that includes 68105; only the target ZIP is recorded here.

## Cell result summary
- Insert-ready: 6 businesses + 6 listings
- Confidence: 3 High (Home Rescue Cleaning, No Pressure Power Washing, Big Red Power Washing), 3 Medium (Rolling Suds of Omaha — phone conflict, Window Genie of Omaha — franchise location page, Window Hero Northwest Omaha — franchise location page)
- Leads: 2 published emails, both for Home Rescue Cleaning, both from its own website
- Files: day-10-ne-omaha-zip68105-pressure-washing.md / -inserts.json / -leads.json
