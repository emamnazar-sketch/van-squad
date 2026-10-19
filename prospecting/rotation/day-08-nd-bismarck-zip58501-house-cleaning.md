# Day 8 — North Dakota — Bismarck — ZIP 58501 — House cleaning

Researched Oct 18–19, 2026. Sources: Google Business Profiles (via search), businesses' own websites, HomeAdvisor/Angi, MerchantCircle.
Dedupe: all 12 names + phones checked against /tmp/live-biz-d8.json (549 rows) and /tmp/d8w1-biz.json (26 Fargo rows) — zero collisions (phones grep-verified absent from both files; the live DB has no Bismarck/58501 entries at all).

## Included — 12 insert-ready

### High confidence (own website + Google profile agree on phone)

1. **701 Cleaning** — (701) 498-2368 — https://701cleaning.com/
   - Phone appears on the site's header/footer (3 places) and matches the Google profile. Office: 233 W Broadway Ave, Bismarck, ND 58501. Site confirms residential house cleaning + commercial + move-in/out. Google description: "serving Bismarck/Mandan & surrounding areas" → zips 58501, 58554.
   - Quirk noted: the site's embedded "Additional Details" meta text carries a stray second number, (701) 989-5135 — looks like a template artifact. The displayed contact number and Google both say 498-2368, so 498-2368 was used.

2. **MaidThat Cleaning** — (701) 922-3088 — https://maidthatcleaning.com/
   - Own site footer: "Phone: 701-922-3088"; Google profile agrees. Locally owned (owner Rachel), based 3005 E Ave E, Bismarck. Site states service to Bismarck, Mandan, and Lincoln, ND in every service section → zips 58501, 58554, 58504. Site cites 4.9★ on Google / 100+ Bismarck homeowners.

3. **Superior Clean** — (701) 220-3114 — http://www.superiorcleannd.com/
   - Own site: "Phone: 701-220-3114"; Google profile agrees. Profile address 2100 Santa Barbara Dr, Bismarck. Site: "We serve Bismarck–Mandan, ND… someone to tidy up at your home" — genuine residential cleaning → zips 58501, 58554.
   - NOT the same business as Superior Cleaning Solutions below (different name styling, phone, address, profile).

### Medium confidence (Google-profile-only phone, per standing rule)

4. **Sunny Maids** — (701) 221-2084 — http://www.sunnymaidsnd.com/
   - Google profile: 1967 Frontier Dr, Bismarck; categories Cleaning Service / Maid & Butler / In-Home Service; own description: "Sunny Maids takes the time and effort out of keeping your home sparkling clean! Weekly, bi-weekly, or special event cleaning." 5.0★ (1 review). Website is listed on the profile but a direct fetch returned no readable content, so the phone rests on the profile.

5. **Divine Cleaning Services** — (701) 251-4305 — https://divinecleanservices.com/
   - Google profile: 1925 Lovett Ave, Bismarck; "We're a professional cleaning services specialized in residential and commercial cleaning services." Own website listed on the profile (fetch failed). Existence corroborated by a HomeAdvisor profile "Divine cleaning service llc," Bismarck — 4.8★, 11 reviews (no phone shown there). Beware same-name cleaners in Fargo, Dallas, etc. — this is the Bismarck one.

6. **Toy's House Cleaning** — (701) 955-4434 — http://toyshc.com/
   - Google profile: HQ 1500 7th Ave SE, Mandan, ND. Own site confirms "Reliable house cleaning serving Bismarck, ND" but the fetched site text shows no phone, and no independent directory corroboration was found → phone rests on the Google profile. Zips 58501 (serves) + 58554 (based).

7. **Kuhn's Cleaning Service** — (701) 471-4027 — no working website
   - Google profile: W Sweet Ave, Bismarck. Its linked website is a Google business.site address, which Google discontinued (404), so the website field is blank.

8. **Busy Mom Home Cleaning** — (701) 934-3914 — no website found
   - Google profile: 1345 S 12th St, Bismarck; category Cleaning Service. Note: a dunlap.today article about a "Busy Mom Cleaning Service" could not be tied to this business or town — not used as a source.

9. **Fairy Maidz** — (701) 425-6083 — no website found
   - Google profile: 1216 Morningside St, Bismarck. Distinct from "Fairy Maids" (fairymaidscleaning.com), which is an Aurora, Illinois business.

10. **Morrell's Cleaning Service** — (701) 333-8491 — no website found
    - Google profile: 229 E Bismarck Expy, Bismarck; category Cleaning Service; weekday hours listed.

11. **Superior Cleaning Solutions** — (701) 312-0337 — no website found
    - Google profile: 1210 E Broadway Ave, Bismarck; category Cleaning Service. A same-name Wix site is a Georgia (470 area code) business — not this one.

12. **Star Bright Professional Cleaning Services** — (218) 731-9417 — https://starbrightprofessionalcleaningservices.com/
    - Own website footer confirms "109 Eastdale Dr Suite 23, Bismarck, ND 58501" and lists weekly/monthly/seasonal home cleaning, move-out, etc. The phone is a Minnesota (218) number: the same business runs a Fergus Falls, MN profile, and both Google profiles show the identical number (218) 731-9417. The phone itself appears only on the Google profiles (not in the fetched site text) → Medium.

## Leads — 0

No included business publishes a capturable email address (Superior Clean has an "Email Us!" button whose address wasn't extractable; nothing was invented). Leads file is `[]`.

## Excluded / near-misses

- **Sanda Enterprise LLC** — (701) 960-0736, 2304 E Broadway Ave Ste 2, Bismarck; own site + Google agree. EXCLUDED (borderline): primarily a commercial janitorial / facility-management contractor ("Your Premier Partner for Recurring Janitorial Services"; "trusted partner for facility management companies"). Its residential menu is carpet extraction, window cleaning, pressure washing, post-construction only — no routine house-cleaning service. It publishes info@sandaenterprisellc.com on its site; not captured as a lead because the business is excluded. Coordinator may flip this call.
- **Progressive Maintenance** (cleannd.com) — (701) 255-3194 — EXCLUDED: commercial janitorial & floor-care company (office cleaning, strip & wax, gym-floor recoating, carpet). Residential mentions on its site are generic/blog-level; no house-cleaning service is offered.
- **Lovebird Janitorial Service** — (701) 368-1906 — EXCLUDED: janitorial by name and by Google primary category; the only "homes" evidence is one truncated profile description line; website unfetchable; no verifiable house-cleaning offering.
- **JBContractCleaning LLC** — EXCLUDED: appears only on HomeAdvisor/Angi (5.0★, 3 reviews, since 2023) plus a self-published MerchantCircle blog post. No Google profile and no public phone anywhere → fails the public-phone rule (platform-only).
- **Spiffy Biffs** — (701) 224-0856 — portable-restroom / event & job-site services ("a clean, comfortable place to go"), not house cleaning.
- **Aftermath Services** — (877) 631-4642 — national biohazard/trauma cleanup, not house cleaning.
- **Aire-Master** — (701) 751-5055 — pest control is the primary business.
- **Carpet Cleaning Bismarck** — (701) 204-4470 — carpet cleaning only (different category).
- **No Fuss Carpet Cleaning** — (701) 425-0052 — carpet only; also flagged possibly temporarily closed.
- **Good Guys Carpet & Air Duct Cleaning** — (701) 380-4420 — carpet / air-duct only.
- **Advanced Cleaning & Restoration** — fire/water disaster restoration, not house cleaning.
- **The Maids (franchise)** — a content-farm listicle claims a Bismarck location, but no Google profile, franchise location page, or local phone exists → unverifiable, excluded.
- **Merry Maids** — no Bismarck unit exists (the Fargo unit is already in the directory; Grand Forks is a separate market).
- **Molly Maid / Two Maids / MaidPro / The Cleaning Authority** — no Bismarck locations found.
- **Platform-only pros** (HomeAdvisor/Angi/Thumbtack/Homeaglow listings with no independent presence or public phone): Jori's Cleaning Service, India Sparks Cleaning, BRANTLEY'S ALL N 1 Cleaning svc LLC, Mark Ward Cleaning, J&R, ProClean Carpet Care, One&Done, and Homeaglow's individual cleaners — excluded per rules.
