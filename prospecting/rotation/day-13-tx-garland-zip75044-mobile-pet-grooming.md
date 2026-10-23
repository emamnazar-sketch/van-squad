# Day 13 — Garland, TX — ZIP 75044 — Mobile pet grooming

Cell: Texas | Garland | 75044 | Mobile pet grooming (exact label verified in ~/workspace/van-squad/js/data.js — Pet care group: "Mobile pet grooming")
City assigned: Garland
Date researched: 2026-10-23
Count: 3 businesses

**Expansion note:** No mobile groomer based in 75044 itself could be confirmed from its own materials — every groomer with a 75044-area address proved to be a salon/storefront or a home-based salon with no mobile service (see exclusions). Per the cell rule, the sweep expanded to operators in adjacent Garland ZIPs / the immediately adjacent city of Sachse whose own materials explicitly state Garland service: Bigfoot Pet Mobile Grooming (Sachse-based, names Garland first in its service list), Zoomin Groomin's Garland location page, and Zoomin Groomin Mesquite & South Garland (states Garland and adjacent Garland ZIP 75043). Two of the three are Zoomin Groomin franchise locations — they are DIFFERENT local operators (different local phones, different booking forms, different stated ZIP sets), and neither is the wave-1 business "Zoomin Groomin Mansfield/Arlington" (817) 901-3889. The coordinator may drop one franchise entry if only one Zoomin Groomin per cell is wanted, in which case the cell count is 2.

| # | Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|---|
| 1 | Bigfoot Pet Mobile Grooming | (972) 664-4662 | Mobile pet grooming | Garland | https://www.bigfootpet.com/ | — none verified on own site in retrieved text (see details) — | High — own homepage: "MOBILE PET GROOMING THAT COMES TO YOU… based in Sachse, Texas, proudly serving Garland, Rockwall, Royse City, Rowlett, Sachse, Wylie, Murphy"; fully equipped mobile unit / climate-controlled trailer; phone on own site | Own website https://www.bigfootpet.com/ and https://www.bigfootpet.com/mobile-cat-grooming-services |
| 2 | Zoomin Groomin Garland | (972) 833-6064 | Mobile pet grooming | Garland | https://www.zoomingroomin.com/locations/texas/garland/mobile-pet-salon-spa/ | — none published on its location page — | High — own Garland location page: "We bring a professional pet salon right to your door," "Our mobile grooming vans are fully self-contained," with the local Garland number 972-833-6064 on the page (not the national number) | Own location page https://www.zoomingroomin.com/locations/texas/garland/mobile-pet-salon-spa/ |
| 3 | Zoomin Groomin Mesquite & South Garland | (972) 999-9001 | Mobile pet grooming | Garland | https://www.zoomingroomin.com/locations/texas/mesquite-south-garland/ | Amber.Harsh@zoomingroomin.com — own location page, https://www.zoomingroomin.com/locations/texas/mesquite-south-garland/ | High — own location page: "bring the spa to you," "State-of-the-Art Vans," servicing ZIPs 75043 • 75088 • 75150 • 75182 and cities Garland • Mesquite • Rowlett • Sunnyvale, local number 972-999-9001 on the page | Own location page https://www.zoomingroomin.com/locations/texas/mesquite-south-garland/ |

## Per-business details

### 1. Bigfoot Pet Mobile Grooming — (972) 664-4662
- Mobile confirmation (own materials): Homepage headline "MOBILE PET GROOMING THAT COMES TO YOU"; "We bring the grooming experience directly to your doorstep"; services page describes a "fully equipped mobile grooming unit" and a "climate-controlled grooming trailer" that grooms "just steps from your home." Full grooms for dogs and cats (bath, haircut, brush-out, nail trim, ear/eye cleaning, de-shedding).
- Garland confirmation (own materials): Homepage: "a mobile pet grooming business based in Sachse, Texas, proudly serving Garland, Rockwall, Royse City, Rowlett, Sachse, Wylie, Murphy, and surrounding communities." Services page "Areas We Serve" lists Garland first.
- Phone: (972) 664-4662, published on its own homepage and services pages.
- Email: A search snippet of its About page showed a Gmail address in a photo-contest post, but that address did NOT appear in the page text as retrieved, so it was NOT collected (never recorded unverified).
- service_zips: ["75044"] only — the business names cities, not ZIPs.

### 2. Zoomin Groomin Garland — (972) 833-6064
- Mobile confirmation (own materials): Garland location page: "We bring a professional pet salon right to your door"; FAQ: "Our mobile grooming vans are fully self-contained with their own water supply and power system"; one-on-one, cage-free grooms (bath, brush-out, haircut, nail trim, ear cleaning).
- Garland confirmation (own materials): The page is the operator's dedicated Garland location page ("Choose the best pet groomer in Garland… our mobile grooming services in Garland").
- Phone: "Call 972-833-6064" on its own Garland page — a local number distinct from the Mansfield/Arlington operator (817) 901-3889 added in wave 1 and from every other Zoomin Groomin location in the DB.
- Email: No business email was found published on its Garland page — no lead recorded.
- service_zips: ["75044"] only — no ZIP list stated on the Garland page.

### 3. Zoomin Groomin Mesquite & South Garland — (972) 999-9001
- Mobile confirmation (own materials): "Our professional pet groomers in Mesquite and South Garland bring the spa to you"; "State-of-the-Art Vans"; "we bring calm, clean mobile pet grooming care to your curb."
- Garland confirmation (own materials): "Servicing The Following Zip Codes And Locations in Mesquite and South Garland: 75043 • 75088 • 75150 • 75182 — Garland • Mesquite • Rowlett • Sunnyvale." 75043 is the adjacent south-Garland ZIP (expansion ZIP for this cell).
- Phone: "Call: 972-999-9001" on its own location page — a third distinct local operator number.
- Email lead: Amber.Harsh@zoomingroomin.com appears as "Email:" on its own location page https://www.zoomingroomin.com/locations/texas/mesquite-south-garland/ — recorded in the -leads.json only, never on the profile.
- service_zips: ["75044", "75043", "75088", "75150", "75182"] — 75044 is the cell target; the rest are the ZIPs the business itself states.

## Dedupe notes
- Live DB checked via vs_rest.py: full name/phone pull plus targeted queries — phone (972) 664-4662: no match; phone (972) 833-6064: no match; phone (972) 999-9001: no match; name ilike "Bigfoot": no match. Name ilike "Zoomin" returns only other cities' locations (Las Vegas (702) 213-5755, Boise & Meridian, Bitterroot, Central Denver, Sioux Falls, Edmond, Mansfield/Arlington) — none is a Garland operator and none shares a phone with this cell's entries.
- Grepped all of ~/workspace/van-squad/prospecting/ for "bigfoot", all three phone numbers, and "Amber.Harsh" — no matches.
- Wave-1 Day-13 businesses that also serve Garland were NOT reused, per instructions: DFW Mobile Dog Grooming (469) 246-0616, Dallas Mobile Pet Groomers (214) 983-9663, Mobile Dog Grooming and Training (817) 320-2010, Zoomin Groomin Mansfield/Arlington (817) 901-3889 — all already in the DB.

## Exclusion notes
- Stefanie's In-home Dog Grooming — EXCLUDED on its own words: its site states "Services are offered within the comfort of MY HOME. No mobile services!" and announces a new location at 4429 Bowser Ave, Dallas — grooming at the groomer's home, not mobile.
- GroomIt (groomit.me Garland pages, 888-396-7170) — EXCLUDED: national platform, excluded by name in the cell rules.
- Furry Land Mobile Grooming — Garland pages (furryland.us) — EXCLUDED: only the national number 877-726-3345, no local operator phone; excluded by name in the cell rules (its stated ZIPs are 75040–75043 in any case).
- Woofie's — EXCLUDED: no Garland location or local operator phone found.
- Poochies Dallas Mobile Dog Grooming (469) 652-7911, Farmers Branch — EXCLUDED on service area: its own site lists Dallas, Park Cities, Preston Hollow, Lakewood, Lake Highlands, Richardson, Addison, Carrollton, Farmers Branch, and Plano — Garland is not named.
- Enredos pet grooming Mobile (469) 735-7888, 818 W Centerville Rd, Garland — EXCLUDED: only a Google listing carrying the word "Mobile"; a storefront address and no own website or own materials confirming grooming at the customer's home — insufficient verification.
- April's Grooming (972) 310-6598, 5418 Round Rock Rd, Garland — EXCLUDED: home-based salon ("every visit a pleasant retreat" per its PetsCare profile); no mobile/to-home service confirmed from its own materials (its own site could not be retrieved in this run, and no other own source claims mobile service).
- Rebecca's Grooming (469) 847-4319, 5525 Naaman Forest Blvd, Garland — EXCLUDED: salon at a fixed address; no mobile service confirmed from its own materials.
- K9's Paws 'n Claws (972) 530-8116, 4012 N Jupiter Rd, Garland — EXCLUDED: salon; its own Square site shows a shop ("CALL NOW!", product/checkout pages) with no mobile service claim.
- Other Garland salon/storefront groomers — EXCLUDED, salon-only: A Purr-Fect Dog Grooming & Day Care (214) 934-6239, Victor's Pet Grooming (469) 987-9534, Durango Pets Grooming #2 / Life Spa Pet Grooming (214) 422-3090), Gallery of Pets (972) 278-0072, The Dog House (972) 675-9769, Petco Grooming Garland, PetSmart Grooming Garland (national salons).
- Aussie Pet Mobile — EXCLUDED for this cell: no Garland / NE-Dallas local operator with a local phone found (the North Central Dallas territory surfaces only an 844 number).
- Barkbus — EXCLUDED: national platform, (800) 742-9255 only.
- America's Paw Spaw (940) 294-6717, Prosper — EXCLUDED: mobile groomer, but Garland service not confirmed from its own materials in this research.
- Hydrodog — EXCLUDED: no Garland operator or local phone found.
