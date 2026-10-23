# Rotation Day 13 — Texas: Dallas × Mobile auto detailing × ZIP 75206

- Researched: 2026-10-23 (nightly rotation, Day 13)
- Cell: TX | Dallas | 75206 | Mobile auto detailing — category label verified verbatim in ~/workspace/van-squad/js/data.js ("Mobile auto detailing", Automotive group).
- Cell note: 75206 is the Lower Greenville / Lakewood / M Streets area of Dallas. Only detailers whose own materials confirm they come to the customer (home/office) were kept; fixed shop-only detailers and car washes in and around the ZIP were excluded (see below). No business below publishes a ZIP-code service list — service areas are stated by city/area name only (Dallas / DFW metroplex) — so service_zips is ["75206"] only for every business; no ZIPs were invented. AB Professional's own site prints a 75206 address (5706 E Mockingbird Ln), and Noble's Google listing address (5352 Ross Ave) is also in 75206.
- Adjacent-ZIP note: no expansion was needed — 5 qualifying businesses were found serving Dallas including the 75206 area.
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phone numbers were taken from public sources; never invented.
- Status: PREPARED, NOT INSERTED — coordinator inserts centrally.

| Name | Phone | Category | City | Website | Published email + source | Confidence + one-line reason | Source |
|---|---|---|---|---|---|---|---|
| Noble Mobile Car Detailing | (214) 239-0838 | Mobile auto detailing | Dallas | https://noblemobilecardetailing.com/ | info@noblemobilecardetailing.com — https://noblemobilecardetailing.com/ (business's own website, Contact Info block: "(214) 239-0838 info@noblemobilecardetailing.com") | High — own site: "Premium Mobile Car Detailing at Your Doorstep", "We Come To You — Fully equipped mobile units", "All services are performed at your location"; phone and email printed on the site, and its Google listing address (5352 Ross Ave) is in 75206 | Business's own website + Google Business listing |
| AB Professional Detailing and Ceramic Coating | (469) 922-6460 | Mobile auto detailing | Dallas | https://www.abprofessionaldetailing.com/ | info@abprofessionaldetailing.com — https://www.abprofessionaldetailing.com/ (business's own website, footer/contact block) | High — own site gives its address as "5706 E Mockingbird Ln #115, Dallas, TX 75206" (inside the target ZIP) and its FAQ states "We are fully mobile, and we come to your home or office in Dallas"; phone (469) 922-6460 and email printed on the site (site brands itself "AB Professional Car Detailing and Ceramic Coating Dallas") | Business's own website |
| Shine City Auto Detailing | (469) 960-5704 | Mobile auto detailing | Dallas | https://shinecitydetailing.com/ | none | Medium — own site: "Premium Mobile Car Detailing & Ceramic Coatings In Dallas, TX", "100% Mobile Convenience — We bring our own water, power, and professional-grade tools to your home or office", "We are 100% mobile"; phone (469) 960-5704 is printed twice on its own site, but its Google listing shows a different number ((469) 427-8162) — the site's number was used, hence Medium | Business's own website + Google Business listing |
| SHWASH Mobile Car Detailing Dallas TX | (469) 817-6518 | Mobile auto detailing | Dallas | https://www.shwash.co/dallas-tx | hello@shwash.co — https://www.shwash.co/dallas-tx (business's own website, Dallas page contact block: "(469)-817-6518 <hello@shwash.co>") | Medium — own Dallas page: "Premium mobile detailing at your home, office, or apartment. We bring the detail shop to you", "We come to you… No water or power hookup needed"; kept as Medium because SHWASH is a three-city operation (Austin, Dallas & Houston per its own site) and its numbers differ by source — Google listing (469) 707-4692, site FAQ booking line (512) 759-6337 — the site's Dallas contact-block number was used | Business's own website + Google Business listing (3001 Knox St, Dallas) |
| Max's Luxury Mobile Detailing | (903) 431-6819 | Mobile auto detailing | Dallas | https://www.maxluxurydetailing.com/ | none | Medium — own site: "MOBILE DETAILING", "WE COME TO YOU!", "We are mobile and travel the greater Dallas surroundings" (it notes certain ceramic/paint-correction work is done at its shop, but detailing itself is mobile); the site's homepage shows a quote form only, so the phone comes from its Google Business listing only, hence Medium | Business's own website + Google Business listing |

## Dedupe

- Live DB checked via vs_rest.py get "businesses?select=name,phone" (HTTP 200, 989 rows): "Noble", "239-0838", "AB Professional", "922-6460", "Shine City", "960-5704", "427-8162", "SHWASH", "817-6518", "707-4692", "Max's Luxury", "431-6819" — no matches.
- All prior prospecting files in ~/workspace/van-squad/prospecting/ were grepped for every name and phone in this batch — no matches (the only "shwash" substring hit is "Posh Wash Auto", a Tulsa Day-12 business, unrelated).
- Cross-cell check: Michie Auto (Day-12 Oklahoma City 73139 cell, (405) 295-5189) also markets Dallas service, and Detail Daddy OKC (live DB, (214) 250-4789, a Dallas area code) is an Oklahoma City business — neither was reused here.
- Cross-check within tonight's batch: all five names and phones are distinct.

## Excluded (checked, did not pass the gates)

- Super Star Car Wash (4616 Greenville Ave, (623) 536-5956), Carnation Auto Spa (6140 E Mockingbird Ln), Sparkle Car Wash (5010 Ross Ave), Zips Car Wash (5021 Ross Ave), $5 Wash — EXCLUDED: fixed-site car washes, no mobile service.
- Lakewood Auto Detail (6365 Belmont Ave, (214) 865-9274) — EXCLUDED: fixed shop ("COME BY AND SEE WHAT OUR SERVICES CAN OFFER YOU"); no mobile/on-site service confirmed from its own materials.
- Signature Paint Protection Film (4144 N Central Expy) — EXCLUDED: shop-based paint-protection-film work; no mobile detailing offer confirmed.
- Centertown Detail (2727 N Harwood St, (214) 850-4960) — EXCLUDED for this cell (conservative): a fixed high-end shop whose own description limits on-site work to specialized airplane/boat/RV details and weekend home/office service — standard mobile auto detailing is not its core confirmed offer.
- Prismatic Car Care / Google listing "Ride and Shine Mobile Detailing" (4514 Cole Ave, (214) 926-5573) — EXCLUDED: the listing name does not match the website's business (Prismatic Car Care), whose own site centres on its staffed Forney studio for ceramic coating/PPF/tint with mobile detailing as a side offer; phone and email (Detailpro289@gmail.com) appear only in the site's embedded Google info block.
- North Texas Mobile Auto Detailing ((469) 291-0837, Google listing) — EXCLUDED: its own Dallas page is generic informational text with no phone and no first-person confirmation that it comes to the customer, so mobile service could not be confirmed from its own materials.
- Essential Mobile Car Detailing Dallas (letusdetail.com, (972) 800-0469, Google listing) — EXCLUDED: its own website could not be fetched at check time, so mobile service could not be confirmed from its own materials.
- Robinson Wash & Detail (6047 Mercedes Ave, (972) 839-6340, Google listing) — EXCLUDED: its own website could not be fetched at check time, so mobile service could not be confirmed from its own materials.
- Hidden Mobile Car Detailing Dallas / Richardson (hiddencardetailingtx.site) — EXCLUDED: one website fronting two listings with two different phones ((214) 761-6410 / (214) 730-5905) — lead-gen-style duplicate listings, no single verifiable local operator.
- USA Mobile Detailing Services ((469) 924-1138), Metroplex Mobile Detailing ((251) 514-2316), OnTheGo Auto Spa ((603) 275-5185), A&D Auto Detailing and Powerwashing ((844) 881-6397), Brandon & Brandon ((239) 426-7986), Rocki's Detailing ((315) 560-2817), Spotless Drive Detailing ((828) 815-4361) — EXCLUDED: Google/social listings only (several with out-of-state or toll-free numbers), no verifiable own website confirming mobile service from the business's own materials.

## ZIP note

- Target ZIP 75206 is in every business's service_zips. No additional service ZIPs were added: every business states its service area by city/area name only (Dallas / DFW metroplex), never by ZIP, so no ZIPs were invented.

## Count

- 5 businesses, 5 listings, 3 published-email leads (see -leads.json).
