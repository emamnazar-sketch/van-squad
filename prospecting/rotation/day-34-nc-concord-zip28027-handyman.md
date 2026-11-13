# Rotation Day 34 — North Carolina: Concord × Handyman × ZIP 28027

- Researched: 2026-11-13 (nightly rotation, Day 34, Wave 2)
- Cell: Concord, NC — ZIP 28027 — Category "Handyman" (exact label, verified in ~/workspace/van-squad/js/data.js)
- Sources: each business's own website first, then public listings (Google Business). Public information only.
- All entries are UNVERIFIED / UNCLAIMED seed data. Phones taken from public sources; never invented.
- Status: PREPARED — batch files only, NOT inserted (coordinator inserts centrally).
- Expansion note: No expansion needed — 6 qualifying businesses are based in Concord itself; Mike's Home Repairs & Remodeling is addressed in 28027 itself.

| Name | Phone | Category | City | Website | Published email + source | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Mike's Home Repairs & Remodeling | (704) 661-3937 | Handyman | Concord | https://mikesrepairs.com/ | info@mikesrepairs.com — own website https://mikesrepairs.com/ | High — own site: address 2631 Danbury Circle NW, Concord, NC 28027 (the target ZIP itself), phone (704) 661-3937 and email on site; "provides handyman services... throughout Concord, Charlotte, and surrounding North Carolina communities"; repairs done at customers' homes | Business's own website + Google listing |
| Primetime Creations Handyman Services | (704) 396-3730 | Handyman | Concord | http://primetimecreation.com/ | primetimecreations7@gmail.com — own website http://primetimecreation.com/ | High — own site: title "Primetime Creations Handyman Services \| Concord, NC", "Serving Concord & Greater Charlotte, NC", "Call (704) 396-3730", email on site, "locally owned home improvement business proudly serving Concord"; general home repairs / odd jobs at customers' homes | Business's own website + Google listing |
| Cabco Handyman Services | (704) 918-5512 | Handyman | Concord | http://cabcohandyman.com/ | — none found (contact form only; contact page invites email for photos but publishes no readable address) | High — own site: phone 704-918-5512 on homepage, "We're based out of Concord, North Carolina and serve all of Cabarrus County"; interior/exterior handyman work at customers' homes | Business's own website + Google listing |
| D. Moore General Maintenance | (980) 234-8242 | Handyman | Concord | http://www.dmoorepro.com/ | d.mooregeneralmaintenancellc@gmail.com — own website http://www.dmoorepro.com/ | High — own site: address 57 Union Street South, Concord, NC 28025, phone (980) 234-8242 and email on site; services list explicitly includes "Handyman Services" for residential properties in Concord | Business's own website + Google listing |
| A N J Construction | (704) 609-4445 | Handyman | Concord | http://anjcarpentry.com/ | — none found (contact form only) | High — own site: "A 'N' J Construction Inc. is a licensed General Contractor in North Carolina providing handyman and light construction services... located in the Concord/Charlotte, North Carolina area", "Call A 'N' J Construction at 704-609-4445"; repairs and remodels "in any part of your home, or business" | Business's own website + Google listing |
| Volcom Construction | (704) 707-4298 | Handyman | Concord | http://www.volcomconstruction.com/ | — none found | Medium — own site: "Volcom Construction, PO Box 252, Concord, NC 28026", "Phone: (704) 707-4298" on site; "residential and commercial projects can include more simple handyman level jobs or the more complex repairs/restorations", service areas include Cabarrus County; broader construction firm, handyman is one part of its work | Business's own website + Google listing |

## Dedupe
- Live DB (/tmp/vs_active_day34_w2.json, 3,149 rows): checked every name and phone-digit string above — no matches. Near name match "Mike's Home Maintenance" (901) 690-6577, Memphis ZIP 38119, is a different business/phone, not a dupe. No Concord or NC businesses existed in the DB snapshot.
- Prior prospecting files in ~/workspace/van-squad/prospecting/ (incl. all day-34 files): grep for every phone (7046613937, 7043963730, 7049185512, 9802348242, 7046094445, 7047074298), and for Primetime Creations, Cabco Handyman, Volcom Construction, D. Moore General, anjcarpentry, mikesrepairs, primetimecreation returned no matches.

## Excluded (checked, did not pass the gates)
- Mr. Handyman of Mooresville, Lake Norman, Concord / Ace Handyman Services / Handyman Connection — national franchises / call-center model, excluded per gates.
- Concord Property Services (168 Virginia St SE, Concord; (704) 763-0643; concordhandyman.net) — EXCLUDED: its own website could not be fetched/verified in this run, so own-materials on-site confirmation was not completed; Google listing data alone not used.
- Repair After LLC, Concord ((866) 775-2552) — EXCLUDED: toll-free-only phone, no verifiable own website.
- MT's Home Repair, Greg's Home Solutions LLC, Wyatts handyman services (Kannapolis) — EXCLUDED: no verifiable own website found (listing/social only), own-materials confirmation not possible.
- Turch LLC Handyman (Huntersville), Handyman LKN (Cornelius), Kolivers&Tolivers (Charlotte), Handyman CLT (Charlotte — already seeded Day 34 Charlotte 28277) — EXCLUDED for this cell: not Concord-based and no explicit 28027/Concord service statement verified on their own sites for this cell.

## ZIP / service_zips note
- Target ZIP 28027 is first for every business. D. Moore General Maintenance also carries its own published base ZIP 28025 (its Concord address on its own site); Volcom Construction also carries its own published base ZIP 28026 (its Concord PO Box on its own site). All other service_zips are ["28027"] only — no other ZIPs added beyond the target and a business's own stated base.

## Email leads
- 3 published emails collected, all from the businesses' own websites: Mike's Home Repairs & Remodeling — info@mikesrepairs.com; Primetime Creations Handyman Services — primetimecreations7@gmail.com; D. Moore General Maintenance — d.mooregeneralmaintenancellc@gmail.com (see matching -leads.json). No other included business publishes a readable email on its own site.
