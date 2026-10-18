# Day 7 — Alamogordo, NM × ZIP 88310 × House cleaning

Researched fully for the Van Squads directory. ZIP 88310 yielded 3 qualifying
businesses, so **no ZIP expansion was needed**. All three are Alamogordo-based,
residential, and clean at customers' homes (mobile/on-site by the nature of the
service, confirmed in each business's own words).

## Businesses found (3)

| Business | Phone | Category | City | Website | Published email (source) | Confidence | Source |
|---|---|---|---|---|---|---|---|
| Sally's House Cleaning Services | (575) 430-8730 | House cleaning | Alamogordo | none (its Google business.site page 404s — platform retired; recorded "" per Day-7 precedent) | none | **High** — its own Facebook posts (mirrored on findglocal) describe "professional cleaning and organization solutions… deep cleaning, move-in/move-out, weekly, bi-weekly & monthly" in Alamogordo/Holloman AFB/Tularosa and print this phone in its own hiring post; Google listing at 3006 Sunrise Ave carries Maid & Butler + In-Home Service categories | Google Business listing + business's own Facebook posts |
| Adriana's Cleaning Services | (915) 637-6797 | House cleaning | Alamogordo | none (only an Instagram location page, not its own site; recorded "") | none | **Medium** — Google listing only (621 Kingston Dr, residential address, no storefront); its own profile description confirms residential work in its own words: "Move in and Move out Cleaning Services." Flag: the published phone carries a 915 (El Paso) area code although the business is Alamogordo-based | Google Business listing |
| At Ease Cleaning Services | (575) 222-8699 | House cleaning | Alamogordo | https://ateasecleaningsvcs.com/ | hello@ateasecleaningsvcs.com (published in the Contact section of its own website — see leads file) | **High** — its own website headlines "house cleaning in Holloman and Alamogordo," lists recurring/deep/move-in-out home cleans, and prints phone + email on its own contact section; military family-owned local operator | Business's own website |

service_zips = ["88310"] for all three — none publishes a ZIP-code service
list (they name cities/areas only), so nothing was added or invented.

## Leads (1)

- At Ease Cleaning Services — hello@ateasecleaningsvcs.com — published by the
  business in the Contact section of its own website
  (https://ateasecleaningsvcs.com/). Recorded only in the leads file, never
  in the business record. Sally's and Adriana's publish no business email
  anywhere public — no lead entries for them; nothing guessed.

## Exclusions (18 entries)

1. **SL Cleaning Services** — (575) 415-4241, 204 W 10th St. Google-listing-only;
   its only category is a generic "Cleaning Service" with no description or own
   materials confirming residential house cleaning — unconfirmable (the only
   matching website belongs to a same-named Houston, TX company).
2. **Gizmo's Cleaning and Handyman Services** — (575) 551-6934, 606 Cactus Ct.
   Cleaning + handyman + janitorial mix; its own mappop site could not be
   fetched and nothing in its public materials confirms residential house
   cleaning specifically.
3. **E & E** — HomeAdvisor-only pro (in business since 2012); the platform
   masks its full name and phone — no public phone published anywhere.
4. **Sparkling Clean Services LLC** — HomeAdvisor-only (since 2022); no own
   website, Google listing, or public phone found.
5. **Walker Cleaning Services** — HomeAdvisor-only for Alamogordo; no public
   phone; same-name listings found belong to Cincinnati, OH and Renton, WA.
6. **Paseo Cleaning Services** — HomeAdvisor/Angi-only; its listings center on
   carpet/upholstery work; no public phone published.
7. **Spotless Solutions** — carpet and upholstery specialist (since 1996), not
   whole-house cleaning.
8. **Alamogordo Carpet Cleaning** — carpet-cleaning specialist.
9. **New Mexico Carpet Care** — carpet-cleaning specialist.
10. **Spot Free Cleaning** — Google category is Carpet Cleaner.
11. **Clarify Window Cleaning** — window-cleaning specialist.
12. **Comet Cleaners** — dry cleaner / laundromat storefront.
13. **Busy Bee Coin Laundry** — laundromat.
14. **Homeaglow** — national lead-gen platform, excluded by rule (its individual
    cleaners publish no business phone or materials of their own).
15. **Merry Maids of Ruidoso** and **Make Ready Cleaning Services** — based in
    Ruidoso, NM (88345); Merry Maids' own page limits its service area to
    Lincoln County — a different city's operators, not Alamogordo.
16. **Preferred Homecare, CareCo, At Home Personal Care Services, Rustic
    Health** — home health-care / caregiving agencies, not house cleaning.
17. **Walmart Home Services** — national chain platform listing, no local
    operator of its own.
18. **NVH Facility Solutions** — El Paso / Las Cruces commercial facility
    cleaning company (kitchen exhaust, post-construction); not an
    Alamogordo-based house-cleaning operator.

## Cross-checks

- Dedupe vs. every file in ~/workspace/van-squad/prospecting/ and the live
  directory (518 businesses via public REST): no name or phone matches. The
  Las Cruces cell file mentions Sally's only to note it is Alamogordo-based —
  the same name + phone, cross-confirming this cell's capture.
- Inserts mirror the Day-6 template key-for-key (validated programmatically),
  fresh UUIDs, one listing per business linked by business_id, standard
  seeded description, owner placeholder, logo_url "".
