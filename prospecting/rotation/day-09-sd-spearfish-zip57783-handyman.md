# Day 9 — Spearfish, SD · ZIP 57783 · Handyman

Cell researched 2026-10-19 (Day 9 run). Insert-ready: **4 businesses**, **0 leads**.

Cell anchor: ZIP 57783 (all of Spearfish). Spearfish is small (~13k, northern
Black Hills), and the honest qualifying count is 4 — nothing was padded in.
No business below publishes its own service-ZIP list, so service_zips =
["57783"] for every row (57799 is the BHSU/PO-Box ZIP and was not added
without evidence). No business in this cell publishes a business email in
any source checked, so the leads file is an empty array.

Dedupe: all 4 names and phones were checked programmatically against every
*-inserts.json in ~/workspace/van-squad/prospecting/rotation/ (670 businesses,
Days 1–9, including today's Rapid City handyman cell) — zero name collisions,
zero phone collisions. No duplicates within the cell.

## Included — Medium confidence (all four rest on Google profiles; see notes)

1. **Anderson Handyman Services** — (605) 340-4544 — Spearfish
   - Category: Handyman · Website: http://www.mandersonhandyman.com/
   - Google profile: primary category Handyman, 322 Lariat Dr, Spearfish, SD,
     active, Mon–Fri 7 AM–7 PM; profile lists the business's own website
     above and phone (605) 340-4544. A Spearfish-address handyman operating
     from a residential address — work is performed at customers' homes.
   - Fetch gap (disclosed): the business's own website could not be fetched
     this session (browser.open source-fetch failure), so the phone rests on
     the Google profile alone — same Medium treatment the Day-9 Rapid City
     cell gave businesses whose own sites could not be fetched.
   - Email: none published in any source checked.
   - Confidence: Medium — Spearfish-based Handyman confirmed on Google
     profile with its own website listed; own-site phone confirmation is a gap.
   - Source: Google Business profile via search (mandersonhandyman.com).

2. **Ace Handyman Services Spearfish** — (605) 791-4791 — Spearfish
   - Category: Handyman · Website: https://www.acehandymanservices.com/
   - Google profile: primary category Handyman, 311 E Colorado Blvd #10,
     Spearfish, SD (inside 57783), active, phone (605) 791-4791. The chain's
     own site (fetched) confirms every Ace Handyman location is locally owned
     and operated and that its craftsmen do repairs, maintenance and
     improvements in customers' homes — on-site service confirmed.
   - Cross-reference note (disclosed): the Day-9 Rapid City cell recorded
     that Ace Rapid City's Google profile lists this same (605) 791-4791
     number. The Spearfish unit is a separate listing with its own Spearfish
     address and its own name, and neither its name nor this phone appears
     in any inserted row (Ace Rapid City was inserted with its own-site
     number, (605) 423-0813) — so there is no name/phone duplicate. It is
     counted here because it is genuinely based in Spearfish.
   - Email: none published in fetched page text.
   - Confidence: Medium — real local franchise unit at a Spearfish address;
     phone is Google-profile-only and is cross-listed on the sister unit's
     Google profile.
   - Sources: Google Business profile via search; https://www.acehandymanservices.com/ (fetched).

3. **Black Hills Home Medic** — (605) 600-2355 — Spearfish
   - Category: Handyman · Website: https://www.facebook.com/profile.php?id=100088486484452 (its Facebook page, as listed on its Google profile)
   - Google profile: primary category Handyman (secondary: Carpet Cleaner),
     514 Mason St, Spearfish, SD, active, Mon–Fri 8 AM–5 PM, phone
     (605) 600-2355. "Home Medic" handyman work is by nature performed in
     customers' homes; Spearfish residential address.
   - Not the Rapid City cell's "Black Hills Handyman" ((605) 791-1599) —
     different name, different phone, different city.
   - Email: none published in any source checked.
   - Confidence: Medium — Google profile only; no standalone website found.
   - Source: Google Business profile via search.

4. **The Handy Man** — (605) 645-4257 — Spearfish
   - Category: Handyman · Website: (none found — website field left "")
   - Google profile: 1606 North Ave, Spearfish, SD (residential address),
     active, Mon–Fri 8 AM–4 PM, phone (605) 645-4257. Google lists its
     primary category as Contractor; the business name itself is explicitly
     a handyman operation, and a solo operator working from a Spearfish home
     address performs the work at customers' homes.
   - Email: none found.
   - Confidence: Medium — Google profile only, and Google's category is
     Contractor rather than Handyman; included on the strength of the
     business name and local residential base, flagged for the coordinator.
   - Source: Google Business profile via search.

## Leads (0)

None — none of the four qualifying businesses publishes a business email
on its own website, Facebook page, or Google profile in any source checked.
The leads file is an empty array.

## Exclusions / near-misses

- **Roots Construction** (Spearfish) — Google profile claims Handyman,
  Spearfish, phone (605) 645-2271, website roots-construction.com. EXCLUDED:
  that website provably belongs to a different business — Roots Construction
  LLC of East Cleveland, OH (15617 Hazel Road; phone (216) 496-7366;
  owner Wendell Lovelace; "Northeast Ohio" throughout, fetched and read).
  The Spearfish phone appears in no other source found (a number search
  returned no local corroboration), and a Manta listing names a Roots
  Construction in Spearfish 57783 with no phone. With its only website link
  conflated with an unrelated Ohio firm, the listing fails verification —
  same treatment the Day-9 Rapid City cell gave a business with a bogus
  unrelated website. Coordinator may re-check if a real Spearfish Roots
  site/phone surfaces.
- **HandyCare** — 845 N 3rd St, Spearfish; phone (605) 366-9874; Facebook
  page HandyCareLLC. Google categories are Contractor / Kitchen & Bath
  Contractor / Concrete Contractor — no handyman service confirmed from
  its own materials. Excluded as a specialty contractor, not a general
  handyman.
- **I Like To Be Helpful** (Lead, SD) — Google lists it at 515 W Main St,
  Lead, as a Gutter Cleaning Service, phone (605) 920-0493, website
  iliketobehelpful.com. EXCLUDED: that domain now serves Big Sky
  Gutterworks of Billings, MT (phone 406-652-1872, fetched and read) —
  gutter work in Montana, not a Lead/Spearfish handyman; the listing's
  website is conflated and its category is gutter cleaning, not handyman.
- **Odd Jobs Handyman Service** (Belle Fourche, SD) — real handyman,
  phone (605) 569-1686, but based in Belle Fourche — outside the
  Spearfish/Lead/Deadwood home-base area for this cell. Excluded on the
  cell's city rule; candidate for a Belle Fourche cell.
- **Handy Helper** (Blackhawk, SD) and **Done Right Maintenance**,
  **Revision Pros**, **Handyman Al** (all Rapid City) — Rapid City–based;
  Done Right, Revision Pros and Handyman Al were already inserted in
  today's Day-9 Rapid City handyman cell, so they are duplicates here
  under the brief's rule even though they serve the wider Black Hills.
- **Baruch Construction Inc.** (Spearfish address, (605) 519-0105) — its
  own site's text describes a Denver/Littleton, CO roofing and restoration
  company (720 number) — conflated listing, and roofing is not handyman.
  Excluded.
- **Built Wright Homes, Wegner Roofing and Solar, Spearfish Roofing,
  MJ Plumbing INC** — Spearfish-based but roofing/plumbing specialists
  or builders, not general handymen. Excluded.
- **Ace Hardware / hardware stores** — storefront retail, not a mobile
  handyman service. Excluded.
- **HomeAdvisor/Angi Spearfish profiles** (unnamed solo pros, e.g.
  "Matthew Gray", "Joseph Westbrook") — platform-only listings with no
  business name, no public phone, and no own website. Excluded
  (lead-gen route only, no verifiable public phone).

## Cell-result summary

SD × Spearfish × 57783 × Handyman: **4 insert-ready businesses (0 High,
4 Medium), 0 published-email leads, 9 exclusions noted.** Territory is
genuinely thin, as expected for a ~13k town: every included business is
Spearfish-based with a verifiable public phone; all four phones rest on
Google profiles (Anderson's own site and the Facebook pages could not be
fetched this session), which is disclosed per business above. One listing
(Roots Construction) was rejected because its website resolves to an
unrelated Ohio company and its phone is uncorroborated anywhere else.
