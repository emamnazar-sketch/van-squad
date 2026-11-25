# Day 44 — MA / Malden / ZIP 02148 / Handyman

- Cell: State=MA, City=Malden, ZIP=02148, Category=Handyman (exact label, verified in ~/workspace/van-squad/js/data.js)
- Date: 2026-11-25
- Expansion note: Malden has only one ZIP (02148). Only 3 businesses qualified in 02148 proper under the strict own-materials rule, so the cell expanded to adjacent ZIPs as instructed: 02149 (Everett — Gille's Handyman Inc.) and 02155 (Medford — Mr Carl Handyman Services LLC). Both are immediately adjacent to Malden and do handyman work at customers' homes; Mr Carl's own site states a 50-mile Boston-area radius that covers Malden. Gille's own site does NOT name Malden explicitly — flagged below.
- Service-ZIP notes: service_zips = [02148] plus only the business's own base ZIP where the expansion applies (02149, 02155). No other ZIPs were invented — DeRose lists towns by name (no ZIPs) and the others publish no ZIP list.
- Method: Public information only; business's own website first, then public listings (Google). Handyman/small-job work at the customer's home had to be confirmed from the business's OWN materials. Bare directory/Google listings with no own materials did not qualify.
- Territory note: Malden is thin for independent handymen with their own websites — most search results are national franchises (Mr. Handyman, Ace Handyman Services), a matching platform (OpaPro), or bare Google listings with no own site. 5 businesses qualified.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe notes |
|---|---|---|---|---|---|---|---|---|
| DeRose Home Pros | (413) 949-2187 | Handyman | Malden | http://derosehomepros.com/ | info@derosehomepros.com — http://derosehomepros.com/ (contact block on own site, with phone and Malden address) | High — Own site ("Painter & Handyman in Malden, MA", licensed & insured) has a dedicated "handyman side": deck & porch repair, carpentry & trim, flooring installs, tile, door installs, fences, pre-listing repairs at homes, plus drywall/prep repair; based in Malden (45 Holyoke St per own site; Google lists 67 Holyoke St, Malden, Primary Category Handyman); phone and email both on own site | Own website; Google listing corroborates Malden/Handyman | Checked /tmp/vs_dump.json (3,979 rows) by name + phone and grep of ~/workspace/van-squad/prospecting/ for name, phone (949-2187) and domain: no match |
| Seaport Handyman & Renovation Corp. | (617) 982-9255 | Handyman | Malden | http://seaporthandyman.com/ | None published found — own site shows phone and a contact form, no email found | High — Own site (licensed & insured, HIC 218106) confirms handyman services at customers' homes: carpentry, plumbing, electrical and painting, minor repairs to renovations, founded by Marcio Freitas; phone +1 (617) 982 9255 on own site; Google listing under the name "Handyman Stop and Repair" gives 167 Kennedy Dr, Malden, Primary Category Handyman, and its on-site testimonials include Malden customers — FLAG: Google name differs from the own-site legal name used here | Own website; Google listing corroborates Malden address | Dump + prospecting grep for both names, phone (982-9255) and domain: no match |
| DT Painting & Services | (781) 866-6546 | Handyman | Malden | https://www.dtpaintingservices.com/ | teixeiradoug18@gmail.com — https://www.dtpaintingservices.com/ (Contact block on own site, with phone; address shown is the owner's Gmail, published by the business itself) | Medium — Own site gives its Malden address (7 Alcott Park, Malden, MA 02148) and phone, and confirms at-home repair work: deck repair ("Repairs welcome. No job too small"), carpentry, drywall and flooring work; FLAG: the business is painting/remodeling-led — handyman work is its small-repair side, not its headline trade; coordinator may drop it if a handyman-headline-only standard is applied | Own website; Google listing corroborates Malden address (Construction Company / Contractor) | Dump + prospecting grep for name, phone (866-6546), domain and email: no match |
| Gille's Handyman Inc. | (857) 346-5480 | Handyman | Malden (expansion — based Everett, 02149) | https://www.gillehandyman.com/ | None published found — own site shows phone and a booking/contact route, no email found | Medium — Own site confirms handyman work at homes ("From small repairs to major projects", HIC Registered, fully insured) and its HomeAdvisor profile lists general repairs, drywall, painting, flooring, carpentry, doors/trim and property maintenance; phone (857) 346-5480 on own site ("Call (857) 346-5480"); Google listing gives 232 Bucknam St, Everett, MA, Primary Category Handyman; FLAGS: Everett-based expansion business, and its own site does not explicitly name Malden in its service area | Own website; Google listing; HomeAdvisor profile | Dump + prospecting grep for name, phone (346-5480) and domain: no match |
| Mr Carl Handyman Services LLC | (978) 364-6757 | Handyman | Malden (expansion — based Medford, 02155) | http://www.carlhandymanservices.com/ | Carlytombmw@gmail.com — http://www.carlhandymanservices.com/ (contact block on own site, with phone; published by the business itself) | Medium — Own site ("SERVING BOSTON & 50 MILES AROUND") confirms assembly, home repairs and installations at homes and businesses within 50 miles of Boston, which covers Malden; phone 978-364-6757 and email both on own site; Google listing gives 123 Main St, Medford, MA, Primary Category Handyman; FLAGS: Medford-based expansion business, and its own-site focus leans to furniture/outdoor assembly plus repairs rather than general repair alone | Own website; Google listing corroborates Medford/Handyman | Dump check by phone (364-6757) and exact name and prospecting grep for name, phone, domain and email: no match (dump name hits for "Carl…" were unrelated businesses with different phones) |

## Excluded

| Name | Reason |
|---|---|
| Ace Handyman Services Metro Boston Melrose ((781) 222-3910, listed at 665 Salem St, Malden) | National franchise chain — excluded per rules |
| Mr. Handyman (serves Malden, (978) 290-4472, Peabody-based) | National franchise chain (Neighborly) — excluded per rules |
| OpaPro ((781) 692-2123, 93 Russell St, Malden) | Matching/lead platform on its own site — it matches customers to pros, communicates in-app and states the customer's number stays hidden; not a direct local handyman operator, and its own site publishes no phone — excluded as lead-gen/platform |
| Your House Care ((781) 436-2340, 40 Eastern Ave, Malden) | Google status "Possibly Temporarily Closed" and its own website could not be fetched/verified — on-site handyman work cannot be confirmed from its own materials |
| Concierge Building Service ((857) 335-0188, Everett) | DUPLICATE — already researched in the Day 44 Boston 02128 Handyman cell (day-44-ma-boston-zip02128-handyman) and already present in /tmp/vs_dump.json; skipped per dedupe rule |
| Alex Handyman Services ((617) 543-0527, Everett) | Own website's contact page extract shows no phone and no service list — handyman-at-home work and phone cannot be confirmed from its own materials |
| Big Bear Home Care Services (Melrose, (833) 687-2327) | Own website could not be fetched for verification and the only phone found is a toll-free 833 number — cannot confirm from its own materials |
| Home Project Gurus / Giro Painting / M T Handyman And Painter / Middlesex Handyman (Malden/Melrose) | Painter-led or bare Google listings with no own website found — handyman-at-home service cannot be confirmed from their own materials |

## Leads summary

3 published emails collected, all from the businesses' own websites:
- DeRose Home Pros — info@derosehomepros.com — http://derosehomepros.com/
- DT Painting & Services — teixeiradoug18@gmail.com — https://www.dtpaintingservices.com/
- Mr Carl Handyman Services LLC — Carlytombmw@gmail.com — http://www.carlhandymanservices.com/

No emails were guessed. Seaport Handyman & Renovation Corp. and Gille's Handyman Inc. publish phones on their own sites but no email was found, so they contribute no lead.

## Counts

- Qualifying businesses: 5 (02148 Malden proper: 3; expansion 02149 Everett: 1; expansion 02155 Medford: 1)
- Inserts: 5 businesses + 5 listings
- Leads: 3
- Excluded considered: 8 entries (incl. 1 duplicate skipped — Concierge Building Service)
- Duplicates skipped: 1 (Concierge Building Service — prior Day 44 cell + live dump)
