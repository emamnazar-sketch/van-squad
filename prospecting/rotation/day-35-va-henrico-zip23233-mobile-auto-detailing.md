# Day 35 — Virginia × Henrico × ZIP 23233 × Mobile auto detailing

Cell: VA | Henrico | 23233 | Mobile auto detailing
Date researched: 2026-11-15
Count qualifying: 7 (≥3 found serving 23233/Henrico, so no expansion to an adjacent ZIP was needed)

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| Nash Mobile Detailing | (804) 437-0651 | Mobile auto detailing | Henrico | https://www.nashmobiledetailing.com/ | None published found | Medium — own site: "Mobile — Service at your doorstep"; based in Henrico, VA 23233 (12927 Plaza Dr); phone from Google listing, not shown on crawled homepage | Business's own website + Google listing | No match in open-dump.json or prospecting/ by name/phone |
| What's Up Washes | (804) 409-0600 | Mobile auto detailing | Henrico | https://www.whatsupwashes.com/ | info@whatsupwashes.com — own site contact: https://www.whatsupwashes.com/ | High — own site: "We come to you", "Built around your driveway", ZIP codes served list includes 23233 and Henrico County, phone + email on site | Business's own website | No match in open-dump.json or prospecting/ by name/phone |
| Arvos Mobile Detailing LLC | (804) 220-0744 | Mobile auto detailing | Henrico | https://www.arvosdetailing.com/premium-hand-wash | arvosdetailing@gmail.com — own site: https://www.arvosdetailing.com/premium-hand-wash | High — own site: hand wash "done in your driveway or parking spot", "Locally owned mobile and drop-off car detailing for Richmond, Chesterfield and Henrico", phone + email on site | Business's own website | No match in open-dump.json or prospecting/ by name/phone |
| Driveway Detail RVA | (804) 634-7538 | Mobile auto detailing | Henrico | https://drivewaydetailrva.com/terms/ | info@drivewaydetailrva.com — own site: https://drivewaydetailrva.com/terms/ | High — own site: "mobile service only", "Mobile car detailing anywhere in Greater Richmond. We come to your home or office", areas include Henrico, phone + email on site | Business's own website | No match in open-dump.json or prospecting/ by name/phone |
| SprayRVA | (804) 302-2530 | Mobile auto detailing | Henrico | https://www.sprayrva.com/mobile-detailing-henrico-va | marshall@sprayrva.com — own site fleet page: https://www.sprayrva.com/post/who-details-fleet-vehicles-in-chesterfield-va | High — own Henrico page: "We come to your driveway seven days a week", details cars on site across Henrico County, phone on page | Business's own website | No match in open-dump.json or prospecting/ by name/phone |
| Quality Control Auto Detailing | (804) 300-6441 | Mobile auto detailing | Henrico | https://www.qcautodetailing.com/ | info@qcautodetailing.com — own site: https://www.qcautodetailing.com/ | High — own site: "Delivered to Your Driveway", "We Come To You", coverage includes Henrico and Short Pump, phone + email on site | Business's own website | No match in open-dump.json or prospecting/ by name/phone |
| A Tender Touch Mobile Detailing | (804) 324-6388 | Mobile auto detailing | Henrico | https://tendertouchdetailing.com/sitemap.html | None published found | High — own site: "Professional mobile auto detailing brought directly to your driveway, office, or anywhere in the Richmond, Henrico, Mechanicsville, and Chesterfield area", "We come fully equipped to your home", phone on site | Business's own website | No match in open-dump.json or prospecting/ by name/phone |

## Exclusions
- iShine For You Auto Detailing — shop-based in Williamsburg (5691 Mooretown Rd), no mobile-at-home confirmation from own materials for Henrico; excluded.
- Tommy's Express Car Wash, Capital Autobahnd, Safeguard Auto Salon — fixed-location / shop-only, no mobile confirmation.
- Wings Mobile Detailing (Richmond) — franchise location listing; excluded in favour of local operators with own-site mobile confirmation.
- Jr Car Detailing — Instagram-only, no verifiable own website confirming mobile service terms; not included rather than padding the count.

## Dedupe method
Checked ~/workspace/goals/van-squad-directory-website/hidden_files/run-2026-11-15/open-dump.json by exact name and normalized phone, and grepped all ~/workspace/van-squad/prospecting/ files (including existing day-35 files) for each candidate name and formatted phone — zero matches for all 7 included businesses.

## Notes
- service_zips: What's Up Washes lists its served ZIPs on its own site, so those are included with 23233 first in its stated list order (23233 is in its published list). All other businesses state service areas by city/county, not ZIP lists, so service_zips = ["23233"] only — no additional ZIPs invented. Nash Mobile Detailing's own address is in 23233.
- No expansion to an adjacent ZIP was required.
- Emails are leads only, in the -leads.json file; no email appears in -inserts.json.
