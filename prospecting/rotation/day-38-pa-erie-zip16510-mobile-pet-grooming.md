# Rotation Day 38 — Pennsylvania: Erie × Mobile pet grooming × ZIP 16510

- Researched: 2026-11-19 (nightly rotation, Day 38)
- Cell: PA | Erie | 16510 | Mobile pet grooming (exact category label verified in ~/workspace/van-squad/js/data.js)
- Result: **0 qualifying businesses** — honest low count, not padded.
- Expansion note: ZIP 16510 yielded fewer than 3 qualifying businesses (zero), so the search was expanded to adjacent Erie ZIPs and nearby communities — 16509, 16506, 16505, 16508, 16511, plus Harborcreek, Millcreek, Wesleyville, Edinboro, Girard, Fairview and North East, PA — with the same result. No qualifying mobile groomer with a verifiable public phone and a verifiable website serving Erie was found in any of those ZIPs.
- Sources: each candidate's own website first, then public listings (Google Business, Yelp, Birdeye, BBB, GoErie / Erie Times-News). Public information only.
- All entries would be UNVERIFIED / UNCLAIMED seed data. Phone numbers were never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally. This batch inserts nothing.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| — none qualifying — | | Mobile pet grooming | Erie | | | | |

## Dedupe
- Grep of ~/workspace/van-squad/prospecting/ for "16510", "Erie" (PA groomer names), "Vroom Vroom" and "Buczynski" returned no prior batch containing any candidate for this cell. No Erie cell had been covered before; prior PA cells were Pittsburgh, Allentown/Bethlehem and Harrisburg-area only.
- Within-batch dedupe: not applicable — no businesses qualified.
- Live-database dedupe is the coordinator's central check at insert time (this subagent does not insert).

## Excluded (checked, did not pass the gates)
- **Vroom Vroom Grooming** (Erie, owners Mark and Rachel Buczynski) — the one genuine Erie mobile groomer found: GoErie / Erie Times-News (2026-05-01) describes it explicitly as "a mobile pet grooming business in Erie." EXCLUDED under the phone/website gate: no verifiable public phone and no own website could be found in public sources (searches of its name, owners' names, and Erie listings returned only the GoErie article and its Facebook money-drop page; the similarly named vroomgrooms.com is Vroom Grooms LLC of Maumee / Northwest Ohio, phone 419-315-4989, a different business — that phone must NOT be used for the Erie business). Re-check on a future pass if a public phone/website appears.
- **Mobile Dog Grooming — mobiledoggroomingpa.com**, phone 717-539-4910 — EXCLUDED for this cell: own site says "We bring the salon to your door" but names no business location and no Erie / 16510 service area; 717 is a south-central PA (Harrisburg/Lancaster) area code, and Erie coverage could not be confirmed from its own materials.
- **BarkBath (barkbathmobile.com)**, phone 302-787-9274 — EXCLUDED: claims NJ/PA/DE service with a Delaware phone and a placeholder-looking California studio address; no Erie service area or local operator confirmed — treated as lead-gen / unverifiable for this cell.
- **Paws Up & Groom (pawsupngroom.com)**, (720) 725-2092, pawsupngroom@gmail.com — EXCLUDED: mobile van groomer on its own site, but 720 is a Colorado area code and the site states no Pennsylvania / Erie service area; Erie coverage not confirmed.
- **Muddy Mutts Grooming (muddymuttsgrooming.com)** — EXCLUDED: its own site confirms a mobile unit that "comes to your doorstep," but the business is in Milford, Ohio (6080 Branch Hill Guinea Pike, Milford, OH 45150, (513) 646-6167), not Erie, PA.
- **Vroom Grooms LLC (vroomgrooms.com)** — EXCLUDED: Maumee / Northwest Ohio mobile groomer; different business from Erie's Vroom Vroom Grooming (see above).
- **Jen's Mobile Paw Spa** (716-864-8002, Lockport, NY) and **Home Pawdicures** (716-289-6614, North Tonawanda, NY) — EXCLUDED: both serve Niagara County and Erie County, **New York** — not Erie, Pennsylvania.
- **Groomit (groomit.me)** and **Hydrodog / Zoomin Groomin / Woofie's / Aussie Pet Mobile** — EXCLUDED: national booking platforms / franchises; no Erie, PA location page, local operator, or local phone could be verified for 16510 (Zoomin Groomin's PA pages are Delaware Valley / Montco West only).
- **The Paw Pad Mobile (thepawpadmobile.com)** — EXCLUDED: house-call nail-trim service on its own site, but no location, service area, or public phone confirming Erie, PA could be verified; services are nail trims/trims only, not full mobile grooming.
- Storefront-only Erie groomers — EXCLUDED (no mobile/at-home service confirmed from their own materials): Paws Ability Boarding & Grooming (5063 Buffalo Rd, Erie, PA 16510, (814) 899-6941 — in the target ZIP but a boarding/salon facility), The Crate Escape, Mud Puppies, Wizard of Paws, Cooper Cuts Pet Grooming LLC, Posh Paws Dog Spa, Classy Canine Grooming, Grooming by Charlene, Wagging Tails Pet Salon, Just Four Paws Academy, ABC Grooming by Julie Baire, PetSmart / Petco / Pet Supplies Plus grooming salons.

## ZIP note
- Target ZIP 16510; adjacent-ZIP expansion (16509, 16506, 16505, 16508, 16511 and surrounding Erie County communities) was searched and is noted above, per the brief. No service_zips are recorded because no business qualified.
- Email leads: none — no qualifying business, and no Erie mobile groomer in this cell publishes an email on a verifiable own source, so the matching leads file is an empty array. (Emails seen for out-of-area businesses — e.g. pawsupngroom@gmail.com, Colorado — were NOT collected, as those businesses are not in this cell.)
