# Day 37 — Pennsylvania × Pittsburgh × ZIP 15235 × Pressure washing

Cell: Pittsburgh, PA 15235 (Penn Hills). Category label verified in js/data.js: "Pressure washing".
Note: 15235 is Penn Hills, immediately east of Pittsburgh. Businesses below are east-side / Pittsburgh operators whose own sites explicitly confirm on-site pressure washing at customers' homes in Penn Hills, the southeast Pittsburgh area, Monroeville/Trafford (adjacent to Penn Hills), or Pittsburgh-wide — so no adjacent-ZIP expansion was needed. No business publishes a numeric service-area ZIP list on its own site, so service_zips = ["15235"] only for each.

| Name | Phone | Category | City | Website | Published email + source | Confidence + reason | Source URL | Dedupe / exclusion notes |
|---|---|---|---|---|---|---|---|---|
| CC Pressure Washing | (412) 327-7411 | Pressure washing | Pittsburgh | http://pittsburghpw.com/ | ccpressurewashingpa@gmail.com — http://pittsburghpw.com/ | High — Own site: pressure washing in Pittsburgh area, "mainly south east of the city" (Penn Hills side), on-site at homes, phone + email on own site; also publishes dstonesbuisness@gmail.com in FAQ | http://pittsburghpw.com/ | No match by name or phone in prospecting/ grep or day37_open_dump.json (3,420 rows); not one of the 15216 cell businesses |
| Keystone Pressure Washing and Roof Cleaning | (412) 477-5431 | Pressure washing | Pittsburgh | https://www.keystonepressurewashing.com/ | None published on own site | High — Own site: HQ Trafford, PA (adjacent to Penn Hills), serves Monroeville / greater Pittsburgh metro homeowners on-site, phone (412) 477-5431 prominent on own site | https://www.keystonepressurewashing.com/ | No match by name or phone in prospecting/ grep or day37_open_dump.json |
| J&R Pressure Washing | (724) 813-0519 | Pressure washing | Pittsburgh | http://jrpressurewashingpgh.com/ | None published | Medium — Own site: Pittsburgh pressure washing for residential homes on-site, based 3610 Bethoven St, Pittsburgh, phone 724-813-0519 on site; Pittsburgh-wide service, Penn Hills not named individually | http://jrpressurewashingpgh.com/ | No match by name or phone in prospecting/ grep or day37_open_dump.json |
| Hudson United Enterprises | (412) 315-5735 | Pressure washing | Pittsburgh | https://hudsonunitedenterprises.com/ | Hudsonmarcus156@gmail.com — https://hudsonunitedenterprises.com/ | Medium — Own site explicitly lists Penn Hills in its 20-mile service area and has a dedicated Pressure Washing section (driveways, siding, decks at customer's home); multi-service crew (also junk removal/moving), phone + email on own site | https://hudsonunitedenterprises.com/ | No match by name or phone in prospecting/ grep or day37_open_dump.json |
| Squeegee Squad - East Pittsburgh, PA | (724) 819-4137 | Pressure washing | Pittsburgh | https://squeegeesquad.com/east-pittsburgh-pa/ | None published for this location | Medium — Own East Pittsburgh location page: locally owned/operated exterior cleaning, pressure & soft washing on-site, areas served includes Penn Hills, PA; phone (724) 819-4137 on own location/careers pages | https://squeegeesquad.com/east-pittsburgh-pa/ | No match by name or phone in day37_open_dump.json (other Squeegee Squad locations in other states are different businesses/phones); a secondary (724) 864-5429 appears in one footer snippet — the repeatedly published location phone above was used |

## Exclusions
- So Clean Solutions, 412 Wash & Restore, CleanView Property Services, Premier Power Cleaning, Beak Buster Window Cleaning — EXCLUDED as duplicates: already taken tonight in the 15216 pressure-washing cell.
- Reliable Window Washers of Pittsburgh ((412) 312-6246) — EXCLUDED: its own Penn Hills page is a franchise-recruitment page ("expanding into Penn Hills… seeking a motivated local operator"), i.e. no confirmed local Penn Hills operator yet; franchise/lead-gen risk.
- Rolling Suds Power Washing — EXCLUDED: national franchise system, Pittsburgh contact based in New Castle, no single verified local Penn Hills operator.
- Perfect Power Wash — EXCLUDED: large multi-state operator, toll-free numbers only, no local Pittsburgh phone.
- Grand Pressure Washing ((412) 583-4073) — EXCLUDED for this cell: own service-area list covers McKnight/north/west/south Pittsburgh communities, Penn Hills / east side not listed.
- Mr. Handyman of Pittsburgh East Suburbs and Greensburg ((724) 634-2033) — EXCLUDED for this cell: national handyman franchise, pressure washing is an incidental handyman line, and the business is already in the live DB under Handyman.
- Chapkis Pressure Washing and Contracting Services ((412) 452-3115, Old Frankstown Rd) — NOT INCLUDED: own website could not be fetched/verified in this run, so on-site service could not be confirmed from its own materials.
- Pressure Washer Systems ((412) 965-1516) — EXCLUDED: equipment sales/service storefront, not a mobile service to homes.
- Pressure Makes Perfect LLC ((412) 547-9600) — EXCLUDED: general remodeling contractor, pressure washing incidental.
- Family Pressure Wash, LLC (225 Alcoma Blvd, Penn Hills 15235) — NOT INCLUDED: entity listing only, no verifiable public phone or website found.

## Summary
- Businesses found and batched: 5
- Email leads collected: 2 (CC Pressure Washing, Hudson United Enterprises)
- Inserts file: day-37-pa-pittsburgh-zip15235-pressure-washing-inserts.json (5 businesses, 5 listings)
- Leads file: day-37-pa-pittsburgh-zip15235-pressure-washing-leads.json (2 entries)
- No database insertion, no js/data.js edit, no git, no images performed by this researcher.
