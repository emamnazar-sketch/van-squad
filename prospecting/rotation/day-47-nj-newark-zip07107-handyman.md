# Day 47 — NJ · Newark · ZIP 07107 · Handyman

Cell: State=NJ, City=Newark, ZIP=07107, Category="Handyman" (exact label)

**ZIP expansion note:** ZIP 07107 itself yielded only 1 qualifying business with its own materials confirming at-home service (Handyman Construction LLC, 85 Littleton Ave, Newark 07107). The cell was therefore expanded to adjacent Newark ZIPs 07102 and 07108 and nearby North Newark (same city) to reach 4 qualifying businesses, per the batch rules.

## Qualifying businesses

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe/exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Handyman Construction LLC | (908) 906-8019 | Handyman | Newark | https://www.handymanl.com/en | handymanconstruction396@gmail.com — published on own website https://www.handymanl.com/en | High — own site lists exact address 85 Littleton Ave, Newark 07107, phone and email, and says maintenance/remodeling is "delivered right to your door" | Business's own website https://www.handymanl.com/en ; Google listing as "Handy Danny Construction Llc" at same address/phone | No name/phone/email match in ~/workspace/van-squad/prospecting/ or day47-dedupe-baseline.json. Site name used; Google listing uses the "Handy Danny Construction Llc" variant |
| Green Goblin Services | (862) 256-0849 | Handyman | Newark | https://www.greengoblinservices.com/ | None published (inquiry form only) | High — own site states it "provides mobile residential services," lists handyman-type services (furniture assembly, mounting, electrical/plumbing help) booked to homes, and prints phone + 8 East Kinney Street, Newark, NJ 07102 address | Business's own website https://www.greengoblinservices.com/ | No name/phone match in prospecting files or day47 baseline. Adjacent ZIP 07102 (see expansion note) |
| Upper Clinton Hill Handyman | (973) 370-9853 | Handyman | Newark | https://www.upperclintonhillhandyman.com/ | None published (phone contact only) | High — own site confirms work in Newark houses and apartments (drywall, TV mounting, doors, furniture assembly), phone printed throughout, address 508 Clinton Ave, Newark, NJ 07108 on site | Business's own website https://www.upperclintonhillhandyman.com/ | No name/phone match in prospecting files or day47 baseline. Adjacent ZIP 07108 (see expansion note) |
| Tip Top Carpentry, LLC | (862) 229-3825 | Handyman | Newark | http://www.tiptopcarpentry.net/ | None published | Medium — own site is titled "Handyman Carpentry, Fix and Repair of Houses…" confirming at-home repair work, but the phone appears on its Google listing (480 4th St, Newark) rather than in the fetched site text | Business's own website http://www.tiptopcarpentry.net/ ; Google listing (phone, 480 4th St, Newark address, Handyman category) | No name/phone match in prospecting files or day47 baseline |

## Excluded

- **Mr. Handyman** (973) 230-7463, mrhandyman.com — national franchise; excluded per franchise rule.
- **Astro Handyman Services** (201) 975-5537, 340 S 20th St, Newark — no own website or own materials found to confirm on-site service; only aggregator/Google listing data.
- **Master Handyman LLC** (973) 757-8630, 129 Oliver St, Newark — no own website; only an Instagram location page and Google listing, so on-site service could not be confirmed from the business's own materials.
- **Crystal Lake Home Improvement** (551) 264-4379, 144 Mapes Ave, Newark — no website or own materials found to confirm on-site handyman service.
- **3 Guys Handyman** (973) 755-0101, 95 Broadway, Newark — listed website resolves to an unrelated café contact page (viandcafe86.com); business identity/website unverifiable.
- **J&C Construction Group** (862) 452-6916, 88 Thomas St, Newark — primary category is construction company; handyman is only a secondary offering, not a handyman-focused operator.
- **TruDial Pro / Local Service Group** — lead-generation call services, not local operators; excluded.

## Leads summary

- 1 published business email collected: Handyman Construction LLC — handymanconstruction396@gmail.com (source: https://www.handymanl.com/en). Stored only in the -leads.json file, never in the businesses inserts.

## Counts

- Qualifying businesses found: 4
- Businesses in inserts file: 4 (with 4 listings)
- Email leads: 1
- Exact-ZIP (07107) businesses: 1; adjacent-ZIP Newark expansion businesses: 3
