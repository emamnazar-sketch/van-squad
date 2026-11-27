# Day 46 — Connecticut, Middletown, ZIP 06457 — House cleaning

Cell: CT | Middletown | 06457 | House cleaning (exact label verified in ~/workspace/van-squad/js/data.js)
Date: 2026-11-27
Count: 3 qualifying businesses. No expansion needed — exactly 3 qualified in 06457 itself (≥3 threshold met in the target ZIP, so no adjacent-ZIP expansion was used).

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| B&H Property Maintenance LLC | (860) 620-2125 | House cleaning | Middletown | https://bhpropertymaintenancellc.com/ | bbruno@bhpropertymaintenance.com — own site: https://bhpropertymaintenancellc.com/ (Contact Info block prints "PHONE, 860-620-2125, EMAIL, bbruno@bhpropertymaintenance.com" and address 434 Smith St, Middletown, CT 06457) | High — own site: professional cleaners mind "the tidiness of your home and business," a customer review on its own site describes hiring them "to clean my house biweekly" after a move-in house clean, and its address is in 06457; phone (860) 620-2125 printed repeatedly on its own site — cleaning performed in the customer's home | Business's own website | Grep of ~/workspace/van-squad/prospecting/ (incl. Day-46 files) for name and phone: no match |
| Doe Clean & Haul LLC | (347) 484-1044 | House cleaning | Middletown | http://cleanctpros.net/ | — none published found on its own site | High — own site (branded CleanCT Pros, footer "Business: Doe Clean & Haul LLC, Phone: 3474841044") is titled "Commercial Cleaning | Cleanct Pros – Middletown, CT," offers a named "Residential Cleaning" service ("A comprehensive clean for your sanctuary"), and describes "We Arrive & Shine" / "Come home to a refreshed and healthy environment" — cleaners come to the customer's home in Middletown (Google listing address 300 Old Mill Rd, Middletown, CT matches name and phone) | Business's own website + Google listing (matching phone/website) | Grep of prospecting files for name and phone: no match |
| Courtney's Cleaning Services LLC | (860) 301-2745 | House cleaning | Middletown | — none verifiable | — none published found | Medium — BBB profile for this business at 10 Cooley Ave, Middletown, CT 06457-3805 prints phone (860) 301-2745 and its business description states "Courtney's Cleaning & Moving Services offers residential and commercial cleaning and moving services" — residential cleaning performed in customers' homes, based in the target ZIP; Google listing (363 Main St #401, Middletown) matches name and phone. Medium because no own website could be verified, so confirmation rests on its BBB/Google listing descriptions rather than an own site | BBB profile + Google listing | Grep of prospecting files for name and phone: no match |

## Excluded

- Clean My Space CT — (860) 539-8725, info@cleanmyspacect.com, https://www.cleanmyspacect.com/house-cleaning-middletown/ — DEDUPE SKIP: its own Middletown page does confirm house cleaning in Middletown, BUT the same business (same website and same published email info@cleanmyspacect.com) was already collected tonight in the Day-46 West Hartford 06119 deep-cleaning cell as "Clean My Space CT of West Hartford" (phone (203) 674-9497, one of the three numbers on its own site). Not re-inserted under a different phone/name variant.
- K&K Cleaning Services — (860) 759-2524, 30 Ferry St #1d, Middletown: Google listing shows only a generic "Cleaning Service" category with no house-cleaning-at-home confirmation; the similarly named "K&K Cleaning Company" Square booking page found in search shows a different phone, (201) 279-5129, so it could not be verified as this Middletown business's own materials. Excluded — house cleaning not confirmed from its own materials.
- Fountain & Sons Cleaning — (860) 754-7131, 85 Trolley Crossing Ln, Middletown: generic cleaning-service listing only; no own website and no confirmation of residential house cleaning in customers' homes. Excluded.
- Ultimate Maintenance Concepts — (860) 347-8346, http://www.umcofct.com/: own site states it specializes in commercial office / medical / dental cleaning in Middletown — commercial only, not house cleaning. Excluded (wrong niche).
- Spectrum Residential Cleaning Services — (860) 834-9644, https://spectrumresidentialcleaningservicesct.com/: own site confirms residential cleaning, but it is Wethersfield/Cromwell-based and Middletown service is not confirmed from its own materials. Excluded for this cell.
- Brinkcleaning — (860) 951-2811, Cromwell (49 Midway Dr): Google description mentions professional house cleaning and an In-Home Service category, but it is Cromwell-based, has no verifiable own website, and Middletown service is not confirmed from its own materials. Excluded for this cell.
- CT Duct Work — (475) 414-5444: duct cleaning only, not house cleaning. Excluded (wrong niche).
- B and H / janitorial-only listings, SERVPRO of Middletown/New Britain — (860) 826-5169: national franchise, restoration/specialty cleaning, not regular house cleaning. Excluded.
- Molly Maid of Farmington and Greater Hartford — (860) 856-6691, Cromwell: national franchise system. Excluded per rules.
- MaidPro / The Maids / The Cleaning Authority / Merry Maids (Middletown-area pages): national franchise systems. Excluded per rules.
- Paula's Cleaning Services — (858) 375-1060 / (860) 560-1660, paulascleanings.com: multi-state operation based in Lowell, MA serving 35+ cities across MA/NH/CT/FL — no local Middletown operator confirmed. Excluded as national/lead-gen style.
- Homeaglow — national lead-gen marketplace, no local operator. Excluded.
- Exterior Home Detailing — (860) 559-0215: exterior home detailing, not interior house cleaning. Excluded (wrong niche).

## Leads

- 1 published email collected (see matching -leads.json), published by the business itself on its own website: B&H Property Maintenance LLC — bbruno@bhpropertymaintenance.com (source: https://bhpropertymaintenancellc.com/). Doe Clean & Haul LLC and Courtney's Cleaning Services LLC publish no email that could be verified — none guessed. Emails are leads only — never written to business profiles.

## Counts

- Qualifying businesses in this batch: 3
- Listings: 3 (one per business, title "House cleaning in Middletown", price_type "quote")
- Published email leads: 1
- Images: none (coordinator handles centrally)
- Prepared only — NOT inserted, no js/data.js edits, no git.

## Notes

- No business stated a ZIP-code list, so service_zips = ["06457"] for all three — no ZIPs invented.
- Phone rule followed: own-site numbers used where a site exists (B&H, Doe Clean & Haul LLC); Courtney's phone is from its BBB profile / Google listing for its 06457 address.
