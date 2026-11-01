# Day 22 — Illinois — Naperville — ZIP 60540 — House cleaning

Date: 2026-11-01
Cell: IL / Naperville / 60540 / House cleaning
Sources: each business's own website first, then Google Business listing data returned in search results. Phones prefer the business's own site where it publishes one.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source |
|---|---|---|---|---|---|---|---|
| MaidPro Naperville | (630) 353-1617 | House cleaning | Naperville | https://maidpro.com/naperville | None found published | High — own location page says "Locally owned and operated", address 50 S Main St Suite 200, Naperville, IL 60540, describes PROs coming to homes for recurring/one-time house cleaning, and prints Phone: 630-353-1617 | Own website https://maidpro.com/naperville |
| Ziggy's House Cleaning Service | (630) 922-9588 | House cleaning | Naperville | http://www.ziggycleaning.com/ | None found published | High — own site: family-owned Naperville-based house cleaning for 24 years, cleaners come to homes; footer gives "Ziggy's House Cleaning Service, 976 Sylvan Cir, Naperville, Illinois 60540. +16309229588" and "Call Us, (630)-922-9588" | Own website http://www.ziggycleaning.com/ |
| Crystal Klear Cleaning | (847) 722-9659 | House cleaning | Naperville | http://www.crystalklearcleaning.net/ | info@crystalklearcleaning.net — https://www.crystalklearcleaning.net/privacypolicy | High — own site offers weekly/biweekly/monthly residential house cleaning in homes, serving Naperville; footer "CONTACT US FOR A FREE CONSULTATION 847.722.9659"; own privacy policy gives company address 101 N Washington St, Naperville, IL 60540 and the published email | Own website http://www.crystalklearcleaning.net/ and own privacy policy |
| Simply Clean | (630) 517-0806 | House cleaning | Naperville | http://www.chicagosimplyclean.com/ | None found published | High — own site: "professional Naperville house cleaning service", team of Naperville maids providing recurring and one-time residential cleaning in homes; footer "Visit Us: 640 Melody Ln, Naperville, IL 60564 Call Us: 630-517-0806" and lists Naperville among cities served | Own website http://www.chicagosimplyclean.com/ |
| EuroMaids | (630) 737-1080 | House cleaning | Naperville | https://www.euro-maids.com/ | service@euro-maids.com — https://www.euro-maids.com/ | High — own site: locally owned Naperville house cleaning, "Certified cleaners come over and clean your place", phone (630) 737-1080 printed repeatedly on its own site and email published in its footer. NOTE: Google listing shows a different number, (630) 793-1054; the own-site number is used per own-site-first rule | Own website https://www.euro-maids.com/ |
| Fresh Day Cleaning Services | (630) 228-6005 | House cleaning | Naperville | https://www.myfreshday.com/ | None found published | High — own site: regular/deep/move-in-out house cleaning in customers' homes in "Wheaton, IL & Naperville, IL", Naperville in its service-area list, Naperville service-area address 1107 Vail Ct, Naperville, IL 60540, and "Call our manager at (630) 228-6005" | Own website https://www.myfreshday.com/ |

## Dedupe

- Grepped all of ~/workspace/van-squad/prospecting/ (all rotation files, including tonight's day-22 files on disk: Chicago 60614/60618/60622/60647/60657 and Evanston 60201) for every candidate name and phone. No match for any included name or phone. Near hits were unrelated: a Yankton, SD "Crystal Klear" window-only business with a different phone/site, and "Simply Clean of Columbia" (MO) with a different phone/site.
- Live DB checked per phone via vs_rest.py get `businesses?select=name,phone&phone=eq.<phone>` for all six included phones — all returned HTTP 200 with `[]` (no existing business with that phone).
- No Naperville day-22 batch existed on disk before this run.

## Excluded

- Maid Brigade (Naperville listing, (630) 579-6243) — EXCLUDED: conflicting public phones could not be resolved to one verified local number — Google Naperville listing (630) 579-6243, its own Naperville page lists (630) 231-6243 for existing customers, and Birdeye's West Chicago listing for the operator shows (630) 313-2997.
- Serene Home Services ((630) 984-8197, Google listing) — EXCLUDED: its own website returned no readable content in this pass, so residential house cleaning could not be confirmed from its own materials, and the name collides with an Arizona landscaping firm in review results.
- EcoFresh Cleaning ((630) 649-8336, Google listing) — EXCLUDED: its own website https://myecofreshclean.com/ is a parked "Coming Soon / We're under construction" page; no own materials confirm an operating house-cleaning service.
- Molly Maid of Aurora-Naperville Area — EXCLUDED: Aurora-based franchise listing, not a Naperville-local operator for this cell; cell filled with Naperville-based operators.
- Homeaglow / Thumbtack / HomeAdvisor Naperville pages — EXCLUDED: lead-gen / marketplace platforms, not local operators.
- Family Window Washing and Gutter Cleaning, Bubbles Window Washing & Gutter Cleaning, Powerhouse Window Cleaning & Power Washing — EXCLUDED: window/gutter/power-washing specialties only, not house cleaning.
- AuraClean Professional Cleaning, Lulu cleaning services, SH Cleaning Service, A Sparkling Solutions Cleaning Services — EXCLUDED: no verifiable own website confirming house cleaning in homes (social/meta or aggregator listings only) in this pass.

## ZIP note

No expansion beyond 60540 was needed — 6 qualifying businesses were verified in Naperville for the 60540 cell. All service_zips are ["60540"] only: no included business publishes a list of specific service-area ZIP codes on its own materials (they publish service-area cities / their Naperville addresses), so no additional ZIPs were invented. Simply Clean's own Naperville base address is in adjacent 60564 and EuroMaids' Naperville address is in 60565; both state they serve Naperville generally, which includes 60540.
