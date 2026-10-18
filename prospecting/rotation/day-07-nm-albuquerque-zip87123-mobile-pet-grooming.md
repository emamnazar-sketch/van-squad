# Day 7 — New Mexico — Albuquerque — ZIP 87123 — Mobile pet grooming

Researched 2026-10-18. Cell = Albuquerque (Four Hills / far-east side) × 87123 × "Mobile pet grooming".
Result: **1 qualifying business** (honest thin cell — see expansion note).

## Businesses

| Name | Phone | Category | City | Website | Published email (+ source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Filthy Gorgeous LLC | (505) 633-6711 | Mobile pet grooming | Albuquerque | https://www.filthygorgeousgroomingnm.com/ | none | High — own website headlines "Professional Mobile Dog Grooming … at your door" and prints the phone on the homepage; its listing states service to Albuquerque, Tijeras, Cedar Crest and Edgewood (the corridor directly east of 87123) | Own website + Google Business listing |

Notes on the included business:
- Solo mobile operator (owner Michelle, per The Daily Groomer's profile of the business), grooming from a mobile setup at the customer's door — not a salon with a mobile add-on.
- service_zips = ["87123"] only: the business states service *cities* (Albuquerque, Santa Fe, Tijeras, Cedar Crest, Edgewood), not ZIPs, so no extra ZIPs were added.
- No business email is published on its own website (intake form only) → no lead entry. Leads file is an empty array.
- Not in the live directory and not in any prior prospecting file (name + phone grepped across ~/workspace/van-squad/prospecting/ and checked against the live REST list).

## ZIP expansion (triggered, documented)

87123 yielded fewer than 3 qualifying businesses, so the sweep expanded to **one adjacent ZIP: 87112** (immediately west, Menaul/Juan Tabo corridor). The expansion produced **no additional qualifying businesses** — every groomer based in 87112 is a storefront salon (see exclusions), and Filthy Gorgeous' own Google listing address (11701 Menaul Blvd NE Ste B) sits in 87112 but the business is counted once, in this cell. The east-adjacent Tijeras / East Mountain corridor (87059) was also swept as part of verifying 87123's own service area: no mobile groomer is based there — Filthy Gorgeous is the operator that serves it (trainers, a vet, and a feed store only). Final cell total stays 1, reported honestly rather than padded.

## Dedupe skips (already captured — NOT listed again)

| Name | Phone | Why skipped |
|---|---|---|
| Wet Paws Mobile Pet Grooming | (505) 633-4300 | Already captured in sibling cell day-07 87120 and already in the live directory. **Coordinator flag:** its published address, 12999 Cochiti Rd SE (Four Hills), sits inside 87123 — ownership left with the 87120 cell to avoid a double insert. |
| Furry Land Albuquerque-Santa Fe | (505) 807-7009 | Already captured in sibling cell day-07 87120 / live directory. Its own Albuquerque pages list served ZIPs 87109, 87111, 87114, 87120 (not 87123). |
| Enchanted Paws Mobile Grooming | (505) 524-6773 | Already captured in sibling cell day-07 87120 / live directory. |
| Mad Dawgz Mobile Grooming | (505) 437-8355 | Already captured in sibling cell day-07 87120 / live directory (based in SW Albuquerque). |

## Exclusions

- **Patricia's Pretty Paws LLC** (505) 730-4396 — genuinely mobile, but its own website says it is based in Los Lunas and serves only Los Lunas, Belen, Rio Communities, Peralta and Bosque Farms — Albuquerque/87123 not served. Out of area.
- **Pin Up Pups Pet Salon** (7401 Menaul Blvd NE) — storefront salon.
- **WagginTails Dog Grooming** (1540 Tramway Blvd NE, 87112) — storefront salon ("salon located in Albuquerque" per its own description).
- **Lollipups Grooming** (9577 Osuna Rd NE) — storefront salon.
- **Pups N Suds Grooming** (12611 Montgomery Blvd NE, 87111) — storefront salon.
- **The Bark Factory** (7900 Carmel Ave NE) — storefront salon.
- **Furtastic Grooming** (3107 Eubank Blvd NE) — storefront facility.
- **Pretty Pets Grooming** (5850 Eubank Blvd NE, 87111) — storefront shop.
- **Doggie Doos** (2423 San Pedro Dr NE) — storefront shop.
- **Reigning Cats and Dogs** (301 San Pedro Dr SE) — storefront salon; its own site presents an on-site groomer team, no mobile service.
- **Studio Canine** (3901 Louisiana Blvd NE) — storefront salon.
- **Duke City Dog Spa and Lodge** (2301 Yale Blvd SE) — storefront spa/boarding/daycare.
- **ABQ Cat Grooming** (2217 Lead Ave SE) — storefront cat-only salon.
- **Route 66 Pet Salon** (Juan Tabo) — storefront salon.
- **Prairie Dog Grooming** (1408 Eubank Blvd NE) — storefront.
- **Golden Touch Pet Grooming** (5700 4th St NW) — storefront.
- **Petco Grooming** (10700 Lomas Blvd NE) and **PetSmart Grooming** (350 Eubank Blvd NE) — national chain storefronts.
- **Cuddles Pet Sitting** (1717 Singletary Dr NE) — pet-sitting business (primary category Pet Sitter); not a mobile grooming service. (Its site also could not be fetched during research.)
- **Desert Paws Mobile Grooming / Waggin' Tails Mobile Spa / ABQ Mobile Grooming** — named only in an unverified roundup article; no own website, public listing, or public phone could be verified for any of them in Albuquerque (the verifiable "Desert Paws Mobile Grooming" is in Scottsdale, AZ; the verifiable "Waggin Tails Mobile" is in Round Rock, TX). Excluded as unverifiable.
- **Aussie Pet Mobile / Woofie's / Zoomin Groomin** — franchise location searches returned other states or corporate pages only; no verifiable Albuquerque location with a local public phone. Excluded as unverifiable for this cell.
- **Furry Friends Pet Waste Removal** — waste removal service, not grooming.
