# Day 13 — Arlington, TX — ZIP 76018 — Mobile pet grooming

Cell: Texas | Arlington | 76018 | Mobile pet grooming (exact label verified in ~/workspace/van-squad/js/data.js — Pet care group: "Mobile pet grooming")
City assigned: Arlington
Date researched: 2026-10-23
Count: 4 businesses

**Expansion note:** None needed — 4 qualifying mobile groomers explicitly serve Arlington (including 76018 in the wider Arlington service area) from their own materials. No business states its own ZIP list (they state city/area names only), so every service_zips is ["76018"] only.

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | DFW Mobile Dog Grooming | (469) 246-0616 | Mobile pet grooming | Arlington | https://dfwmobiledoggrooming.com/ | hello@dfwmobiledoggrooming.com — own website footer/contact block, https://dfwmobiledoggrooming.com/ | High — own site: "We drive a fully-equipped grooming van directly to your home or driveway," service-area FAQ explicitly lists Arlington, and a recent-jobs entry shows a groom in Arlington, TX; phone and email both on own site | Own website https://dfwmobiledoggrooming.com/ |
| 2 | Zoomin Groomin Mansfield/Arlington | (817) 901-3889 | Mobile pet grooming | Arlington | https://www.zoomingroomin.com/locations/texas/mansfield/areas-served/ | Mansfield@zoomingroomin.com — own location page, https://www.zoomingroomin.com/locations/texas/mansfield/areas-served/ | High — local franchise operator's own location page: "Our mobile grooming vans operate in Arlington, Grand Prairie, and Kennedale," "Your Groomer Comes to You — Right to your driveway," with the local Call number and location email on the page | Own location page https://www.zoomingroomin.com/locations/texas/mansfield/areas-served/ |
| 3 | Dallas Mobile Pet Groomers | (214) 983-9663 | Mobile pet grooming | Arlington | https://www.dallasmobilepetgroomers.com/ | info@dallasmobilepetgroomers.com — own website footer, https://www.dallasmobilepetgroomers.com/ | High — own site: "A fully equipped grooming salon is built into a van that parks at your home," service-area list and FAQ explicitly include Arlington; phone and email in own site footer | Own website https://www.dallasmobilepetgroomers.com/ |
| 4 | Mobile Dog Grooming and Training | (817) 320-2010 | Mobile pet grooming | Arlington | https://mobiledoggroomingandtraining.com/ | — none published on own site found — | Medium — own site offers mobile grooming ("Having your dog groomer come to you saves you time… Your pet does not have to wait in a cage") and its service-cities list names Arlington first, but the site also uses some salon/"bring in" language and is Mansfield-based, so the mobile model is confirmed but less purely van-based than the others | Own website https://mobiledoggroomingandtraining.com/ |

## Per-business details

### 1. DFW Mobile Dog Grooming — (469) 246-0616
- Mobile confirmation (own materials): "We Come to Your Driveway — All of DFW"; "Every service is performed in our custom-outfitted van, parked right in your DFW driveway. No salon." FAQ: "We drive a fully-equipped grooming van directly to your home or driveway."
- Arlington confirmation (own materials): FAQ service list includes Arlington; service-areas list includes Arlington; a "Recent Jobs" entry shows a full groom in Arlington, TX; a testimonial is from an Arlington, TX customer.
- Phone: (469) 246-0616 published repeatedly on its own site (footer, booking block, structured listing "+14692460616").
- Email lead: hello@dfwmobiledoggrooming.com appears in its own site footer/contact block https://dfwmobiledoggrooming.com/ — recorded in the -leads.json only, never on the profile.
- service_zips: ["76018"] only — the business names cities / a 40-mile radius, not ZIPs.

### 2. Zoomin Groomin Mansfield/Arlington — (817) 901-3889
- Mobile confirmation (own materials): Location page headline "Professional pet groomer and dog clipping services in Arlington, Grand Prairie, and Kennedale… we provide stress-free, one-on-one care right to your door"; "State-of-the-Art Mobile Pet Spas — Our mobile grooming vans operate in Arlington, Grand Prairie, and Kennedale"; How it Works: "Your Groomer Comes to You — Right to your driveway."
- Phone: "Call: 817-901-3889" on its own location page — the local operator number for the Mansfield/Arlington franchise (distinct from the Zoomin Groomin locations already in the directory, each with its own local number).
- Email lead: Mansfield@zoomingroomin.com appears on its own location page https://www.zoomingroomin.com/locations/texas/mansfield/areas-served/ — recorded in the -leads.json only, never on the profile.
- Naming note: listed as "Zoomin Groomin Mansfield/Arlington" (the operator's own job postings use "Zoomin Groomin Mansfield/Arlington TX") to distinguish it from the plain "Zoomin Groomin" Las Vegas entry and the other city-suffixed Zoomin Groomin entries already in the DB.
- service_zips: ["76018"] only — the business names cities, not ZIPs.

### 3. Dallas Mobile Pet Groomers — (214) 983-9663
- Mobile confirmation (own materials): "A fully equipped grooming van pulls into your driveway, and your dog is bathed, dried, trimmed, and back inside… No drop-off, no kennel wait, one dog at a time." Van is self-contained (own water tank, heater, power).
- Arlington confirmation (own materials): City list includes an Arlington, TX service page; FAQ: "Dallas proper plus most of the surrounding metroplex — … Arlington, Fort Worth … and dozens more."
- Phone: 214-983-9663 in its own site footer ("Dallas Mobile Pet Groomers … 214-983-9663") and "Call 214-983-9663" CTA.
- Email lead: info@dallasmobilepetgroomers.com appears in its own site footer https://www.dallasmobilepetgroomers.com/ — recorded in the -leads.json only, never on the profile.
- service_zips: ["76018"] only — the business names cities/counties, not ZIPs.

### 4. Mobile Dog Grooming and Training — (817) 320-2010
- Mobile confirmation (own materials): "Mobile Dog Grooming offers several benefits over in shop pet grooming. Having your dog groomer come to you saves you time and places less stress on your pet. Your pet does not have to wait in a cage, and is given 100% attention of the groomer."
- Arlington confirmation (own materials): "Our mobile Dog Grooming services are available in the following cities and surrounding areas: Arlington, Burleson, Cleburn, Crowley, … Mansfield, …" — Arlington is named first.
- Caveat: Established 1995, Mansfield-based solo groomer; the site mixes mobile come-to-you language with some "bring in your pet" salon phrasing, hence Medium confidence. Phone (817) 320-2010 is the "Call or Text us today in Mansfield, Texas" number on its own site and matches its public listing.
- Email: No business email was found published on its own site in this research — no lead recorded.
- service_zips: ["76018"] only — the business names cities, not ZIPs.

## Dedupe notes
- Checked the live DB via vs_rest.py (989 businesses at research time) and grepped all of ~/workspace/van-squad/prospecting/ for names and phones (raw, dashed, and formatted forms).
- DFW Mobile Dog Grooming / 4692460616 — no prior name or phone match. Not a duplicate.
- Zoomin Groomin Mansfield/Arlington / 8179013889 — no prior phone match. The DB holds other Zoomin Groomin franchise locations (Las Vegas (702) 213-5755, Boise & Meridian, Bitterroot, Central Denver, Sioux Falls, Edmond (405) 384-1003) — each is a separate local operator with its own number; this Arlington/Mansfield operator and number are new, and the name is city-suffixed like the existing entries to avoid a name collision with the plain "Zoomin Groomin" entry.
- Dallas Mobile Pet Groomers / 2149839663 — no prior name or phone match. Not a duplicate.
- Mobile Dog Grooming and Training / 8173202010 — no prior name or phone match. Not a duplicate.

## Exclusion notes
- Furry Land Mobile Grooming (Arlington page, furryland.us) — EXCLUDED: its Arlington pages do explicitly list East Arlington ZIP 76018, but the only phone published is the national 877-726-3345 number with no local Arlington operator phone — national call-center pattern per cell rules. (Other Furry Land franchise locations with local numbers exist in the DB from other cells; no local-number Arlington operator was found.)
- GroomIt (groomit.me, Arlington page) — EXCLUDED: nationwide booking platform / lead-gen with no local Arlington operator or local phone on its Arlington page.
- Aussie Pet Mobile of Westoplex — (817) 757-4103, petgroomingwestoplex.com — EXCLUDED on service area: its own site is titled for Weatherford, TX (west Fort Worth / Parker County "Westoplex") and does not claim Arlington service in its own materials.
- Woofie's North Fort Worth — (817) 934-7664 — EXCLUDED on service area: its own mobile-grooming page states it serves North Fort Worth ZIPs 76244, 76052, and 76177 — Arlington is not in its stated area.
- Aussie Pet Mobile (national) — EXCLUDED for this cell: no Arlington, TX local operator found (search surfaced only other states/areas and the national 1-800-PET-MOBILE number).
- All Arlington salon/storefront groomers — EXCLUDED, salon-only with no mobile service confirmed from their own materials, including: Scrub A Pup (817-617-2824, self-serve wash shop), Simbas Dog Grooming (945-269-6033), VIP Grooming and Dog Wash (817-461-1007, "pet grooming shop"), Dog Grooming Shop (817-459-4343, "family-owned salon"), All Paws Grooming and Petsitting (817-276-0300, storefront + boarding/daycare), Shear Heaven Pet Spa (817-277-8433), Bow Wow Billie's (817-800-1005), PetSmart Grooming Arlington incl. the 76018 store at 203 E Interstate 20 (817-466-1437, national salon).
