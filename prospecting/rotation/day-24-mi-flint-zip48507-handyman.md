# Day 24 — Michigan × Flint × ZIP 48507 × Handyman

- **Cell:** MI | Flint | 48507 | Handyman (exact category label, verified in `js/data.js`)
- **Date researched:** 2026-11-03 (night of Nov 2–3, Day 24 rotation)
- **Expansion:** The in-ZIP search ran thin, as Flint cells can. Only one Flint-based operator with its own website confirms service in 48507 itself, so the sweep expanded to operators in the immediately adjacent Grand Blanc area of the same Genesee County market whose own materials explicitly cover Genesee County (which includes Flint 48507). That expansion yielded one more qualifying business. Final count is an honest 2 — no padding.
- **Method:** Business's own website first, then public listings (Google Business, BBB). Mobile/on-site service (handyman travels to the customer's home) confirmed from each included business's own materials. Phones are Michigan local numbers, formatted (XXX) XXX-XXXX. No phone, ZIP, email, hour, price, review, or credential was invented.
- **Dedupe:** Every candidate name AND phone was checked against (a) the live-DB snapshot `dedupe-open.txt` and (b) every file in `~/workspace/van-squad/prospecting/` via grep, including tonight's other Day-24 cells. Both included businesses are clear on name and phone. (The snapshot contains an unrelated "Devin's Mobile Detailing," (773) 263-5713, Chicago — a different business and phone, not a duplicate.) No duplicates were found among candidates for this cell.
- **service_zips rule applied:** Target ZIP 48507 plus only a business's own published service-area ZIPs. Neither included business publishes a ZIP list — both publish county-level service areas — so service_zips = ["48507"] only for both.
- **Published-email rule applied:** An email is collected only when the business itself publishes it in full on its own website/contact page or its Google listing. Neither included business does so verifiably (see Email leads section), so the leads file is an empty array.

## Qualifying businesses (2)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL (phone) |
|---|---|---|---|---|---|---|---|
| Devin's Do It Right Services LLC | (517) 918-7267 | Handyman | Flint | https://devindoesitright.com/ | None published — no email on own site (homepage or services page) or Google listing | High — Own site prints the phone ("Phone: +1 517-918-7267"), offers "in-home consultations and quoting," and lists handyman work (door/window repair, carpentry, decks, drywall, small electrical, furniture assembly); it states "We operate primarily in Genesee and the surrounding counties," and its Google listing gives a Flint address (5072 Prestwood Dr, Flint, MI) with Handyman / In-Home Service categories. Flint 48507 is in Genesee County. | https://devindoesitright.com/ |
| TruBlue of Grand Blanc | (810) 243-1050 | Handyman | Flint | https://www.trublueally.com/grand-blanc/About-Us | None collected — an email for the local owners appears on the office's own pages only in truncated form in search extracts ("rkniss@trublueally.c…"), so the full address could not be verified without guessing; it was NOT collected | Medium — Locally owned and operated franchise office (co-owners Glenda and Bob Kniss, named on its own About page): its own Grand Blanc office pages print phone 810-243-1050, describe Tru-Pro technicians doing basic handyman services and home repairs inside and outside the home ("show up at your door"), and state its service area as "Genesee and Northern Oakland Counties" — Flint 48507 is in Genesee County. Held at Medium because it is a national-brand franchise office rather than an independent operator, and its own materials name the county rather than Flint itself. | https://www.trublueally.com/grand-blanc/About-Us |

## Email leads

None. No included business publishes a complete, verifiable email address on its own website/contact page or its Google listing, so `day-24-mi-flint-zip48507-handyman-leads.json` is an empty array `[]`.

Notes:
- TruBlue of Grand Blanc: the local owner's email is displayed behind an "Email Us" link on the office's pages; search extracts show it only truncated. Because the full address could not be read from the business's own page in this run, nothing was collected rather than guessed.
- An email on an excluded business's Google listing (Grand Blanc Handyman Services, handyman@michiganwebsitedesigns.com — a web-designer's address, for a business scoped to Grand Blanc only) was not collected, because that business is not in this cell.

## Excluded

- **R.S. Handyman Services ((810) 422-5312, Flint)** — EXCLUDED: no own website (its Google listing's website field is its Twitter page). Its Google description does describe in-home work in Flint, but there are no verifiable own materials beyond the listing itself, so it fails this rotation's own-materials gate.
- **Happy Home Services ((810) 447-1066, Flint)** — EXCLUDED: its Google listing's website (myhomejobsearch.com) has no verifiable business content for this operator (the fetch returned no extractable content), so mobile/on-site handyman service cannot be confirmed from the business's own materials.
- **The Perfect Fit ((810) 241-4609, Grand Blanc Twp)** — EXCLUDED for this cell: based in Grand Blanc Township, its own website could not be verified in this run, and the only service statement found is a Google description ("local Handyman/home remodeler in Genesee County") with no in-home confirmation from its own materials.
- **Cantus Creations LLC ((810) 830-5561, Flint, MI 48507)** — EXCLUDED: BBB listing only (Handyman category, located in Flint 48507, serving Genesee County) with no own website or other verifiable own materials confirming mobile handyman service.
- **Handyman Mike and Son ((810) 969-5511, Flint), Reeves Home Improvements and Handyman Services ((810) 640-5643, Flint), Freddie Lee Fix It ((810) 233-5547, Flint), Odd Job Dom ((810) 458-3783, Flint), Handyman and A Van ((810) 249-4195, Flint), SLT ((810) 268-8495, Flint), Brother D ((810) 956-0455, Flint), HandierMan Solutions ((810) 733-3857, Flint), MI. Improvements LLC ((810) 302-1105, Flint)** — EXCLUDED: Google/listing-only records with no own website or other verifiable own materials confirming mobile handyman service. Shawdoitallllc (Flint) was also listing-only and publishes no phone at all.
- **Grand Blanc Handyman Services ((810) 593-8945, Grand Blanc)** — EXCLUDED for this cell: its own materials scope it explicitly and repeatedly to "the Grand Blanc Community" / Grand Blanc only; Flint service is not confirmed.
- **Invicta Group LLC ((810) 447-5243, Mundy Twp)** — EXCLUDED: large general-construction company (roofing, siding, framing, property management) whose own site says "Serving Detroit, Michigan & Surrounding Areas" — not a handyman-at-your-home service for Flint, and Flint service is not confirmed.
- **You Buy We Build ((810) 444-9470, Grand Blanc)** — EXCLUDED for this category: its own site is a furniture/fitness/gazebo assembly-only specialist serving Genesee County, not a general handyman service.
- **Hand in Hand Handyman ((517) 672-8543, Holly Twp)** — EXCLUDED: its Google listing is marked permanently closed.
- **Handyman Flint / handymanflint.com** — EXCLUDED: a free connection/lead-gen service that matches homeowners to an unnamed independent pro; no named local operator and no local phone published.
- **Affordable Mark's Handyman Services ((810) 444-5785, Burton)** — EXCLUDED: its published website is a handyman-network-usa.com lead-gen directory page, not the business's own site.
- **Mr. Handyman (Fenton)** — EXCLUDED: that location's listing is permanently closed and its only phone is toll-free (877) 685-1377. No Ace Handyman Services office serves the Flint/Genesee County area (nearest offices are in Oakland/Wayne counties).

## Files

- `day-24-mi-flint-zip48507-handyman.md` — this batch file.
- `day-24-mi-flint-zip48507-handyman-inserts.json` — 2 businesses + 2 listings, in the exact specified shape (status "active", is_sample false, verified false, email_verified false, phone_verified false, directory-owner placeholder owner_id, standard claim-it description, one "Handyman at your location" quote listing per business). No email field is written to any business record.
- `day-24-mi-flint-zip48507-handyman-leads.json` — empty array `[]` (no qualifying published emails; see Email leads section).

No database inserting, no js/data.js edits, and no git actions were performed by this research worker.
