/* Van Squads — seed data + static content.
   Mirrors schema.sql seed rows. isSample listings are flagged in the UI
   and can be removed by the owner at any time. */
(function () {
  'use strict';

  var ZIP_NAMES = {
    '95814': 'Downtown Sacramento',
    '95816': 'Midtown Sacramento',
    '95818': 'Land Park',
    '95843': 'Antelope',
    '95678': 'Roseville',
    '95661': 'East Roseville',
    '95747': 'West Roseville',
    '95677': 'Rocklin',
    '95765': 'Rocklin',
    '95648': 'Lincoln'
  };
  var ALL_ZIPS = Object.keys(ZIP_NAMES);

  var SERVICE_GROUPS = [
    { id: 'automotive', name: 'Automotive', cover: 'images/categories/group-automotive.jpg', tagline: 'Cars, bikes, boats and RVs — serviced where they are parked.',
      categories: [
        { name: 'Mobile auto detailing', icon: 'car', blurb: 'Full interior and exterior detailing at your driveway.', cover: 'images/categories/car-care.jpg' },
        { name: 'Mobile car wash', icon: 'car', blurb: 'Waterless wash at your home or office.', cover: 'images/categories/mobile-car-wash.jpg' },
        { name: 'Mobile mechanic', icon: 'car', blurb: 'Repairs and maintenance at your home or office.', cover: 'images/categories/mobile-mechanic.jpg' },
        { name: 'Mobile oil change', icon: 'car', blurb: 'Oil changes at your home or fleet lot.', cover: 'images/categories/mobile-oil-change.jpg' },
        { name: 'Mobile tire service', icon: 'car', blurb: 'Tires sold and mounted at your curb.', cover: 'images/categories/mobile-tire-service.jpg' },
        { name: 'Mobile windshield repair', icon: 'car', blurb: 'Chip repair and glass replacement on-site.', cover: 'images/categories/mobile-windshield-repair.jpg' },
        { name: 'Mobile battery service', icon: 'car', blurb: 'Testing, jump-starts and replacement on-site.', cover: 'images/categories/mobile-battery-service.jpg' },
        { name: 'Paintless dent repair', icon: 'car', blurb: 'Dent removal at your location.', cover: 'images/categories/paintless-dent-repair.jpg' },
        { name: 'Mobile auto locksmith', icon: 'car', blurb: 'Car key replacement and lockouts.', cover: 'images/categories/mobile-auto-locksmith.jpg' },
        { name: 'Mobile window tinting', icon: 'car', blurb: 'Window tint installed at your home or office.', cover: 'images/categories/mobile-window-tinting.jpg' },
        { name: 'Mobile RV repair', icon: 'car', blurb: 'Motorhome and trailer repairs on-site.', cover: 'images/categories/mobile-rv-repair.jpg' },
        { name: 'Mobile boat & marine service', icon: 'car', blurb: 'Detailing and mechanical work at the dock.', cover: 'images/categories/mobile-boat-marine-service.jpg' },
        { name: 'Mobile fleet washing', icon: 'car', blurb: 'Washing for semis and vehicle fleets.', cover: 'images/categories/mobile-fleet-washing.jpg' },
        { name: 'Mobile vehicle inspection', icon: 'car', blurb: 'Pre-purchase inspections at the seller\u2019s location.', cover: 'images/categories/mobile-vehicle-inspection.jpg' },
        { name: 'Mobile fuel delivery', icon: 'car', blurb: 'Gasoline and diesel delivered to parked vehicles.', cover: 'images/categories/mobile-fuel-delivery.jpg' },
        { name: 'Mobile EV charging', icon: 'bolt', blurb: 'On-demand charging for electric vehicles.', cover: 'images/categories/mobile-ev-charging.jpg' },
        { name: 'Roadside assistance & towing', icon: 'car', blurb: 'Help dispatched to your location.', cover: 'images/categories/roadside-assistance-towing.jpg' },
        { name: 'Mobile small-engine repair', icon: 'wrench', blurb: 'Mowers, generators and power equipment at home.', cover: 'images/categories/mobile-small-engine-repair.jpg' },
        { name: 'E-bike repair', icon: 'bike', blurb: 'Mobile e-bike service and repair at your door.', cover: 'images/categories/e-bike-repair-cover.jpg' }
      ] },
    { id: 'home-trades', name: 'Home services & trades', cover: 'images/categories/group-home-trades.jpg', tagline: 'Repairs, installs and projects — done at your home.',
      categories: [
        { name: 'Handyman', icon: 'wrench', blurb: 'Small repairs and odd jobs at your door.', cover: 'images/categories/handyman.jpg' },
        { name: 'Plumbing', icon: 'wrench', blurb: 'Repairs, installs and drain cleaning.', cover: 'images/categories/plumbing.jpg' },
        { name: 'Electrician', icon: 'bolt', blurb: 'Repairs, panel upgrades and lighting.', cover: 'images/categories/electrician.jpg' },
        { name: 'HVAC', icon: 'wrench', blurb: 'Heating and cooling repair and tune-ups.', cover: 'images/categories/hvac.jpg' },
        { name: 'Appliance repair', icon: 'wrench', blurb: 'In-home diagnosis and repair.', cover: 'images/categories/appliance-repair.jpg' },
        { name: 'Garage door repair', icon: 'wrench', blurb: 'Springs, openers and installation.', cover: 'images/categories/garage-door-repair.jpg' },
        { name: 'Residential locksmith', icon: 'wrench', blurb: 'Lockouts, rekeying and lock installs.', cover: 'images/categories/residential-locksmith.jpg' },
        { name: 'Home inspection', icon: 'doc', blurb: 'Pre-purchase property inspections.', cover: 'images/categories/home-inspection.jpg' },
        { name: 'Pest control', icon: 'sparkle', blurb: 'Extermination and prevention.', cover: 'images/categories/pest-control.jpg' },
        { name: 'Termite treatment', icon: 'sparkle', blurb: 'Inspections and treatment plans.', cover: 'images/categories/termite-treatment.jpg' },
        { name: 'Lawn care & mowing', icon: 'sparkle', blurb: 'Recurring mowing and fertilization.', cover: 'images/categories/lawn-care-mowing.jpg' },
        { name: 'Landscaping', icon: 'sparkle', blurb: 'Design, planting, mulch and beds.', cover: 'images/categories/landscaping.jpg' },
        { name: 'Tree trimming & removal', icon: 'wrench', blurb: 'Trimming, removal and stump grinding.', cover: 'images/categories/tree-trimming-removal.jpg' },
        { name: 'Sprinkler & irrigation', icon: 'wrench', blurb: 'Sprinkler installation and repair.', cover: 'images/categories/sprinkler-irrigation.jpg' },
        { name: 'Gutter cleaning', icon: 'sparkle', blurb: 'Cleaning, guards and replacement.', cover: 'images/categories/gutter-cleaning.jpg' },
        { name: 'Pressure washing', icon: 'sparkle', blurb: 'Driveways, siding and decks.', cover: 'images/categories/pressure-washing.jpg' },
        { name: 'Roofing', icon: 'wrench', blurb: 'Roof repair and replacement.', cover: 'images/categories/roofing.jpg' },
        { name: 'Interior & exterior painting', icon: 'sparkle', blurb: 'Full-home painting services.', cover: 'images/categories/interior-exterior-painting.jpg' },
        { name: 'Drywall repair', icon: 'wrench', blurb: 'Patching and finishing.', cover: 'images/categories/drywall-repair.jpg' },
        { name: 'Flooring installation', icon: 'wrench', blurb: 'Install and refinishing, carpet to hardwood.', cover: 'images/categories/flooring-installation.jpg' },
        { name: 'Window treatments', icon: 'sparkle', blurb: 'Blinds and shades measured and installed.', cover: 'images/categories/window-treatments.jpg' },
        { name: 'Fence installation & repair', icon: 'wrench', blurb: 'New fences and repairs.', cover: 'images/categories/fence-installation-repair.jpg' },
        { name: 'Deck & patio building', icon: 'wrench', blurb: 'Decks and patios built on-site.', cover: 'images/categories/deck-patio-building.jpg' },
        { name: 'Concrete & masonry', icon: 'wrench', blurb: 'Concrete repair and masonry work.', cover: 'images/categories/concrete-masonry.jpg' },
        { name: 'Pool cleaning & maintenance', icon: 'sparkle', blurb: 'Weekly pool cleaning and care.', cover: 'images/categories/pool-cleaning-maintenance.jpg' },
        { name: 'Hot tub & spa service', icon: 'sparkle', blurb: 'Hot tub cleaning and repairs.', cover: 'images/categories/hot-tub-spa-service.jpg' },
        { name: 'Holiday lighting', icon: 'sparkle', blurb: 'Holiday lights installed and removed.', cover: 'images/categories/holiday-lighting.jpg' },
        { name: 'TV wall mounting', icon: 'chip', blurb: 'TVs mounted safely on any wall.', cover: 'images/categories/tv-wall-mounting.jpg' },
        { name: 'Home theater installation', icon: 'chip', blurb: 'Sound and screen setup at home.', cover: 'images/categories/home-theater-installation.jpg' },
        { name: 'Smart-home installation', icon: 'chip', blurb: 'Thermostats, doorbells and automation.', cover: 'images/categories/smart-home-installation.jpg' },
        { name: 'Home security installation', icon: 'chip', blurb: 'Cameras and alarm systems.', cover: 'images/categories/home-security-installation.jpg' },
        { name: 'Solar panel installation', icon: 'bolt', blurb: 'From site survey through install.', cover: 'images/categories/solar-panel-installation.jpg' },
        { name: 'Furniture assembly', icon: 'wrench', blurb: 'Flat-pack and furniture assembly.', cover: 'images/categories/furniture-assembly.jpg' },
        { name: 'Local moving services', icon: 'car', blurb: 'Movers for local relocations.', cover: 'images/categories/local-moving-services.jpg' },
        { name: 'Piano moving', icon: 'car', blurb: 'Specialty piano movers.', cover: 'images/categories/piano-moving.jpg' },
        { name: 'Junk removal', icon: 'car', blurb: 'Hauling and junk removal.', cover: 'images/categories/junk-removal.jpg' },
        { name: 'Portable storage', icon: 'car', blurb: 'Storage containers dropped at your driveway.', cover: 'images/categories/portable-storage.jpg' },
        { name: 'Mobile welding', icon: 'wrench', blurb: 'On-site metal repair and fabrication.', cover: 'images/categories/mobile-welding.jpg' },
        { name: 'Snow removal', icon: 'sparkle', blurb: 'Driveway and walkway snow clearing.', cover: 'images/categories/snow-removal.jpg' },
        { name: 'Chimney sweep', icon: 'sparkle', blurb: 'Chimney cleaning and inspection.', cover: 'images/categories/chimney-sweep.jpg' },
        { name: 'Septic service', icon: 'wrench', blurb: 'Septic pumping and service.', cover: 'images/categories/septic-service.jpg' },
        { name: 'Mold remediation', icon: 'sparkle', blurb: 'Mold inspection and removal.', cover: 'images/categories/mold-remediation.jpg' },
        { name: 'Water & fire restoration', icon: 'wrench', blurb: 'Damage cleanup and restoration.', cover: 'images/categories/water-fire-restoration.jpg' },
        { name: 'Air duct cleaning', icon: 'sparkle', blurb: 'Duct and dryer-vent cleaning.', cover: 'images/categories/air-duct-cleaning.jpg' },
        { name: 'Radon testing', icon: 'doc', blurb: 'Radon testing and mitigation.', cover: 'images/categories/radon-testing.jpg' },
        { name: 'Water softener service', icon: 'wrench', blurb: 'Softeners installed and serviced.', cover: 'images/categories/water-softener-service.jpg' },
        { name: 'Generator installation', icon: 'bolt', blurb: 'Standby generators installed and serviced.', cover: 'images/categories/generator-installation.jpg' }
      ] },
    { id: 'cleaning', name: 'Cleaning', cover: 'images/categories/group-cleaning.jpg', tagline: 'Sparkling homes and rentals, cleaned on your schedule.',
      categories: [
        { name: 'House cleaning', icon: 'sparkle', blurb: 'Recurring home cleaning.', cover: 'images/categories/home-cleaning.jpg' },
        { name: 'Deep cleaning', icon: 'sparkle', blurb: 'Top-to-bottom one-time cleans.', cover: 'images/categories/deep-cleaning.jpg' },
        { name: 'Move-in/move-out cleaning', icon: 'sparkle', blurb: 'Empty-home deep cleans.', cover: 'images/categories/move-in-move-out-cleaning.jpg' },
        { name: 'Post-construction cleaning', icon: 'sparkle', blurb: 'Dust and debris after remodels.', cover: 'images/categories/post-construction-cleaning.jpg' },
        { name: 'Vacation-rental turnover', icon: 'sparkle', blurb: 'Cleans between guests.', cover: 'images/categories/vacation-rental-turnover.jpg' },
        { name: 'Carpet & rug cleaning', icon: 'sparkle', blurb: 'In-home carpet and rug cleaning.', cover: 'images/categories/carpet-rug-cleaning.jpg' },
        { name: 'Upholstery cleaning', icon: 'sparkle', blurb: 'Sofas and chairs cleaned in place.', cover: 'images/categories/upholstery-cleaning.jpg' },
        { name: 'Tile & grout cleaning', icon: 'sparkle', blurb: 'Deep tile and grout scrubbing.', cover: 'images/categories/tile-grout-cleaning.jpg' },
        { name: 'Residential window cleaning', icon: 'sparkle', blurb: 'Streak-free windows, inside and out.', cover: 'images/categories/residential-window-cleaning.jpg' },
        { name: 'Trash bin cleaning', icon: 'sparkle', blurb: 'Curbside can washing.', cover: 'images/categories/trash-bin-cleaning.jpg' },
        { name: 'Hoarding & estate cleanout', icon: 'sparkle', blurb: 'Compassionate whole-home cleanouts.', cover: 'images/categories/hoarding-estate-cleanout.jpg' },
        { name: 'Biohazard cleanup', icon: 'sparkle', blurb: 'Certified biohazard cleanup crews.', cover: 'images/categories/biohazard-cleanup.jpg' },
        { name: 'Commercial janitorial', icon: 'sparkle', blurb: 'On-site office cleaning.', cover: 'images/categories/commercial-janitorial.jpg' }
      ] },
    { id: 'pet-care', name: 'Pet care', cover: 'images/categories/group-pet-care.jpg', tagline: 'Grooming, sitting and vet care without the car ride.',
      categories: [
        { name: 'Mobile pet grooming', icon: 'paw', blurb: 'A salon van at your curb.', cover: 'images/categories/pet-care.jpg' },
        { name: 'In-home pet sitting', icon: 'paw', blurb: 'A sitter stays at your home.', cover: 'images/categories/in-home-pet-sitting.jpg' },
        { name: 'Dog walking', icon: 'paw', blurb: 'Daily walks around your block.', cover: 'images/categories/dog-walking.jpg' },
        { name: 'Mobile veterinarian', icon: 'paw', blurb: 'House-call vet care.', cover: 'images/categories/mobile-veterinarian.jpg' },
        { name: 'In-home pet euthanasia', icon: 'paw', blurb: 'Compassionate end-of-life care at home.', cover: 'images/categories/in-home-pet-euthanasia.jpg' },
        { name: 'In-home dog training', icon: 'paw', blurb: 'Training sessions at your home.', cover: 'images/categories/in-home-dog-training.jpg' },
        { name: 'Pet waste removal', icon: 'paw', blurb: 'Yard scooping on a route.', cover: 'images/categories/pet-waste-removal.jpg' },
        { name: 'Pet taxi', icon: 'paw', blurb: 'Rides for your pets.', cover: 'images/categories/pet-taxi.jpg' },
        { name: 'Mobile pet photography', icon: 'paw', blurb: 'Portraits at your home or park.', cover: 'images/categories/mobile-pet-photography.jpg' },
        { name: 'Aquarium maintenance', icon: 'paw', blurb: 'In-home tank servicing.', cover: 'images/categories/aquarium-maintenance.jpg' },
        { name: 'Mobile farrier', icon: 'paw', blurb: 'Horseshoeing at the barn.', cover: 'images/categories/mobile-farrier.jpg' },
        { name: 'Dog hiking services', icon: 'paw', blurb: 'Group trail outings for dogs.', cover: 'images/categories/dog-hiking-services.jpg' }
      ] },
    { id: 'beauty-wellness', name: 'Beauty & wellness', cover: 'images/categories/group-beauty-wellness.jpg', tagline: 'Salon and spa treatments at your home.',
      categories: [
        { name: 'Mobile hairstylist', icon: 'scissors', blurb: 'Cuts and color at home.', cover: 'images/categories/mobile-hairstylist.jpg' },
        { name: 'Mobile barber', icon: 'scissors', blurb: 'Clipper cuts at home or office.', cover: 'images/categories/mobile-barber.jpg' },
        { name: 'Mobile makeup artist', icon: 'scissors', blurb: 'Event and bridal makeup on location.', cover: 'images/categories/mobile-makeup-artist.jpg' },
        { name: 'Mobile nail technician', icon: 'scissors', blurb: 'Manicures and pedicures at home.', cover: 'images/categories/mobile-nail-technician.jpg' },
        { name: 'Mobile spray tanning', icon: 'sparkle', blurb: 'Airbrush tans at home.', cover: 'images/categories/mobile-spray-tanning.jpg' },
        { name: 'Mobile lash & brow', icon: 'scissors', blurb: 'Lash and brow services at home.', cover: 'images/categories/mobile-lash-brow.jpg' },
        { name: 'Mobile esthetician', icon: 'sparkle', blurb: 'Facials and skincare at home.', cover: 'images/categories/mobile-esthetician.jpg' },
        { name: 'Mobile waxing', icon: 'sparkle', blurb: 'Waxing services at home.', cover: 'images/categories/mobile-waxing.jpg' },
        { name: 'In-home massage', icon: 'heart', blurb: 'Massage therapy at your home.', cover: 'images/categories/in-home-massage.jpg' },
        { name: 'Mobile spa parties', icon: 'heart', blurb: 'Group spa experiences at home.', cover: 'images/categories/beauty-wellness.jpg' },
        { name: 'Mobile teeth whitening', icon: 'sparkle', blurb: 'Whitening treatments at home.', cover: 'images/categories/mobile-teeth-whitening.jpg' },
        { name: 'Mobile tattoo artist', icon: 'scissors', blurb: 'Licensed artists working on-site.', cover: 'images/categories/mobile-tattoo-artist.jpg' },
        { name: 'Mobile piercing', icon: 'scissors', blurb: 'Piercing services at your location.', cover: 'images/categories/mobile-piercing.jpg' },
        { name: 'Mobile sauna rental', icon: 'heart', blurb: 'Sauna trailers delivered to your driveway.', cover: 'images/categories/mobile-sauna-rental.jpg' }
      ] },
    { id: 'health-medical', name: 'Health & medical', cover: 'images/categories/group-health-medical.jpg', tagline: 'Care that comes to your door.',
      categories: [
        { name: 'In-home senior care', icon: 'users', blurb: 'Companionship and daily-living help.', cover: 'images/categories/in-home-senior-care.jpg' },
        { name: 'Home health nursing', icon: 'heart', blurb: 'Skilled nursing visits at home.', cover: 'images/categories/home-health-nursing.jpg' },
        { name: 'In-home physical therapy', icon: 'heart', blurb: 'Physical therapy at home.', cover: 'images/categories/in-home-physical-therapy.jpg' },
        { name: 'In-home occupational therapy', icon: 'heart', blurb: 'Occupational therapy at home.', cover: 'images/categories/in-home-occupational-therapy.jpg' },
        { name: 'In-home speech therapy', icon: 'heart', blurb: 'Speech therapy at home.', cover: 'images/categories/in-home-speech-therapy.jpg' },
        { name: 'In-home ABA therapy', icon: 'heart', blurb: 'Autism behavioral therapy at home.', cover: 'images/categories/in-home-aba-therapy.jpg' },
        { name: 'Mobile phlebotomy', icon: 'heart', blurb: 'Blood draws at your home.', cover: 'images/categories/mobile-phlebotomy.jpg' },
        { name: 'Mobile diagnostic imaging', icon: 'heart', blurb: 'Portable ultrasound and X-ray.', cover: 'images/categories/mobile-diagnostic-imaging.jpg' },
        { name: 'Mobile mammography', icon: 'heart', blurb: 'Screening at workplaces and events.', cover: 'images/categories/mobile-mammography.jpg' },
        { name: 'Mobile dental', icon: 'heart', blurb: 'Dental vans and pop-up clinics.', cover: 'images/categories/mobile-dental.jpg' },
        { name: 'Mobile optometry', icon: 'heart', blurb: 'Eye exams plus eyewear, on-site.', cover: 'images/categories/mobile-optometry.jpg' },
        { name: 'Mobile podiatry', icon: 'heart', blurb: 'Foot care at home.', cover: 'images/categories/mobile-podiatry.jpg' },
        { name: 'Mobile chiropractic', icon: 'heart', blurb: 'Adjustments at your home.', cover: 'images/categories/mobile-chiropractic.jpg' },
        { name: 'Mobile IV therapy', icon: 'heart', blurb: 'IV hydration therapy at home.', cover: 'images/categories/mobile-iv-therapy.jpg' },
        { name: 'Mobile med-spa', icon: 'sparkle', blurb: 'Aesthetic treatments at home.', cover: 'images/categories/mobile-med-spa.jpg' },
        { name: 'Mobile hearing testing', icon: 'heart', blurb: 'Tests and hearing-aid fitting.', cover: 'images/categories/mobile-hearing-testing.jpg' },
        { name: 'Mobile drug testing', icon: 'doc', blurb: 'Workplace and on-site testing.', cover: 'images/categories/mobile-drug-testing.jpg' },
        { name: 'Mobile vaccination clinics', icon: 'heart', blurb: 'Flu-shot clinics at offices and events.', cover: 'images/categories/mobile-vaccination-clinics.jpg' },
        { name: 'In-home counseling', icon: 'heart', blurb: 'Mental-health counseling at home.', cover: 'images/categories/in-home-counseling.jpg' },
        { name: 'Mobile dietitian', icon: 'heart', blurb: 'Nutrition guidance at home.', cover: 'images/categories/mobile-dietitian.jpg' },
        { name: 'Mobile lactation consultant', icon: 'heart', blurb: 'Breastfeeding support at home.', cover: 'images/categories/mobile-lactation-consultant.jpg' },
        { name: 'Mobile CPR training', icon: 'doc', blurb: 'First-aid classes at your office.', cover: 'images/categories/mobile-cpr-training.jpg' },
        { name: 'House-call physicians', icon: 'heart', blurb: 'Doctors who visit your home.', cover: 'images/categories/house-call-physicians.jpg' }
      ] },
    { id: 'fitness-lessons', name: 'Fitness, lessons & coaching', cover: 'images/categories/group-fitness-lessons.jpg', tagline: 'Trainers, tutors and teachers at your home.',
      categories: [
        { name: 'In-home personal training', icon: 'dumbbell', blurb: 'Workouts with a trainer at home.', cover: 'images/categories/in-home-personal-training.jpg' },
        { name: 'Mobile yoga & Pilates', icon: 'dumbbell', blurb: 'Private sessions at your home.', cover: 'images/categories/mobile-yoga-pilates.jpg' },
        { name: 'At-home swim lessons', icon: 'dumbbell', blurb: 'Swim lessons in your pool.', cover: 'images/categories/at-home-swim-lessons.jpg' },
        { name: 'In-home music lessons', icon: 'dumbbell', blurb: 'Instrument lessons at home.', cover: 'images/categories/in-home-music-lessons.jpg' },
        { name: 'In-home tutoring', icon: 'doc', blurb: 'Tutoring and test prep at home.', cover: 'images/categories/in-home-tutoring.jpg' },
        { name: 'In-home art lessons', icon: 'sparkle', blurb: 'Art instruction at home.', cover: 'images/categories/in-home-art-lessons.jpg' },
        { name: 'In-home cooking lessons', icon: 'sparkle', blurb: 'Cooking classes in your kitchen.', cover: 'images/categories/in-home-cooking-lessons.jpg' },
        { name: 'In-home dance lessons', icon: 'dumbbell', blurb: 'Dance instruction at home.', cover: 'images/categories/in-home-dance-lessons.jpg' },
        { name: 'Golf instruction', icon: 'dumbbell', blurb: 'Lessons at your club or range.', cover: 'images/categories/golf-instruction.jpg' },
        { name: 'Tennis instruction', icon: 'dumbbell', blurb: 'Lessons at your home court.', cover: 'images/categories/tennis-instruction.jpg' },
        { name: 'Martial arts instruction', icon: 'dumbbell', blurb: 'Self-defense training at home.', cover: 'images/categories/martial-arts-instruction.jpg' },
        { name: 'Life & wellness coaching', icon: 'heart', blurb: 'Coaching sessions at home.', cover: 'images/categories/life-wellness-coaching.jpg' }
      ] },
    { id: 'tech', name: 'Tech & electronics', cover: 'images/categories/group-tech.jpg', tagline: 'Repairs and setup, done at your place.',
      categories: [
        { name: 'On-site computer repair', icon: 'chip', blurb: 'Computer fixes at your home or office.', cover: 'images/categories/on-site-computer-repair.jpg' },
        { name: 'Mobile phone repair', icon: 'chip', blurb: 'Screen and battery repair that comes to you.', cover: 'images/categories/mobile-phone-repair.jpg' },
        { name: 'On-site business IT support', icon: 'chip', blurb: 'IT support at your office.', cover: 'images/categories/on-site-business-it-support.jpg' },
        { name: 'In-home tech help', icon: 'chip', blurb: 'Device setup help at home.', cover: 'images/categories/in-home-tech-help.jpg' },
        { name: 'Home Wi-Fi setup', icon: 'chip', blurb: 'Wi-Fi and network setup.', cover: 'images/categories/home-wi-fi-setup.jpg' },
        { name: 'Mobile data recovery', icon: 'chip', blurb: 'Data recovery at your location.', cover: 'images/categories/mobile-data-recovery.jpg' },
        { name: 'Drone photography', icon: 'chip', blurb: 'Aerial photos for real estate and events.', cover: 'images/categories/drone-photography.jpg' }
      ] },
    { id: 'events', name: 'Events & entertainment', cover: 'images/categories/group-events.jpg', tagline: 'The party comes to you.',
      categories: [
        { name: 'Mobile DJ', icon: 'party', blurb: 'DJs with full setup at your venue.', cover: 'images/categories/mobile-dj.jpg' },
        { name: 'Photo booth rental', icon: 'party', blurb: 'Booths delivered, set up and staffed.', cover: 'images/categories/photo-booth-rental.jpg' },
        { name: 'Mobile bartending', icon: 'party', blurb: 'Bartenders plus mobile bar for events.', cover: 'images/categories/mobile-bartending.jpg' },
        { name: 'Mobile catering', icon: 'party', blurb: 'Caterers cooking and serving on-site.', cover: 'images/categories/mobile-catering.jpg' },
        { name: 'Food truck catering', icon: 'party', blurb: 'Food trucks serving at your event.', cover: 'images/categories/food-truck-catering.jpg' },
        { name: 'Mobile coffee cart', icon: 'party', blurb: 'Espresso carts for events.', cover: 'images/categories/mobile-coffee-cart.jpg' },
        { name: 'Mobile pizza catering', icon: 'party', blurb: 'Wood-fired pizza at your event.', cover: 'images/categories/mobile-pizza-catering.jpg' },
        { name: 'Mobile karaoke', icon: 'party', blurb: 'Karaoke hosts with equipment.', cover: 'images/categories/mobile-karaoke.jpg' },
        { name: 'Mobile casino parties', icon: 'party', blurb: 'Casino tables and dealers.', cover: 'images/categories/mobile-casino-parties.jpg' },
        { name: 'Mobile escape room', icon: 'party', blurb: 'Escape-room trailers at your party.', cover: 'images/categories/mobile-escape-room.jpg' },
        { name: 'Mobile axe throwing', icon: 'party', blurb: 'Portable axe-throwing lanes.', cover: 'images/categories/mobile-axe-throwing.jpg' },
        { name: 'Mobile laser tag', icon: 'party', blurb: 'Laser tag setups at your venue.', cover: 'images/categories/mobile-laser-tag.jpg' },
        { name: 'Video game truck', icon: 'party', blurb: 'Gaming trucks for parties.', cover: 'images/categories/video-game-truck.jpg' },
        { name: 'Outdoor movie nights', icon: 'party', blurb: 'Inflatable screen and projector service.', cover: 'images/categories/outdoor-movie-nights.jpg' },
        { name: 'Bounce house rentals', icon: 'party', blurb: 'Delivered, set up and picked up.', cover: 'images/categories/bounce-house-rentals.jpg' },
        { name: 'Mobile petting zoo', icon: 'party', blurb: 'Petting zoos and pony rides.', cover: 'images/categories/mobile-petting-zoo.jpg' },
        { name: 'Balloon décor & styling', icon: 'party', blurb: 'Event décor installed on-site.', cover: 'images/categories/balloon-decor-styling.jpg' },
        { name: 'Wedding officiant', icon: 'party', blurb: 'Ceremonies at your venue.', cover: 'images/categories/wedding-officiant.jpg' },
        { name: 'Wedding day-of coordination', icon: 'party', blurb: 'Coordinators for your big day.', cover: 'images/categories/wedding-day-of-coordination.jpg' },
        { name: 'Live event painter', icon: 'party', blurb: 'Wedding portraits painted live.', cover: 'images/categories/live-event-painter.jpg' },
        { name: 'Face painting', icon: 'party', blurb: 'Face painters for parties.', cover: 'images/categories/face-painting.jpg' },
        { name: 'Children\u2019s entertainers', icon: 'party', blurb: 'Magicians and characters at home.', cover: 'images/categories/childrens-entertainers.jpg' },
        { name: 'Mobile florist', icon: 'party', blurb: 'Event florals designed on-site.', cover: 'images/categories/mobile-florist.jpg' }
      ] },
    { id: 'pro-services', name: 'Professional & personal services', cover: 'images/categories/group-pro-services.jpg', tagline: 'Pros who travel to you.',
      categories: [
        { name: 'Mobile notary', icon: 'doc', blurb: 'Documents notarized at home or office.', cover: 'images/categories/mobile-notary.jpg' },
        { name: 'Mobile fingerprinting', icon: 'doc', blurb: 'Ink and live-scan prints on-site.', cover: 'images/categories/mobile-fingerprinting.jpg' },
        { name: 'Mobile document shredding', icon: 'doc', blurb: 'Shred trucks at your office.', cover: 'images/categories/mobile-document-shredding.jpg' },
        { name: 'In-home tax preparation', icon: 'doc', blurb: 'Tax prep at your kitchen table.', cover: 'images/categories/in-home-tax-preparation.jpg' },
        { name: 'Real-estate photography', icon: 'chip', blurb: 'Photo shoots at the listing.', cover: 'images/categories/real-estate-photography.jpg' },
        { name: 'Mobile home staging', icon: 'sparkle', blurb: 'Stagers furnish your listing.', cover: 'images/categories/mobile-home-staging.jpg' },
        { name: 'Home organizing', icon: 'sparkle', blurb: 'Organizers declutter on-site.', cover: 'images/categories/home-organizing.jpg' },
        { name: 'Senior move management', icon: 'car', blurb: 'Downsizing and relocation help.', cover: 'images/categories/senior-move-management.jpg' },
        { name: 'Estate sale services', icon: 'doc', blurb: 'Sales run from the home.', cover: 'images/categories/estate-sale-services.jpg' },
        { name: 'Mobile billboard advertising', icon: 'car', blurb: 'LED truck ads on the move.', cover: 'images/categories/mobile-billboard-advertising.jpg' },
        { name: 'Errand & concierge', icon: 'users', blurb: 'Errands run for you.', cover: 'images/categories/errand-concierge.jpg' },
        { name: 'Laundry pickup & delivery', icon: 'sparkle', blurb: 'Wash-and-fold collected at your door.', cover: 'images/categories/laundry-pickup-delivery.jpg' },
        { name: 'Mobile tailoring', icon: 'scissors', blurb: 'Fittings and alterations at home.', cover: 'images/categories/mobile-tailoring.jpg' },
        { name: 'Mobile shoe repair', icon: 'wrench', blurb: 'Shoe repair at your location.', cover: 'images/categories/mobile-shoe-repair.jpg' },
        { name: 'Mobile knife sharpening', icon: 'wrench', blurb: 'Knives sharpened at your door.', cover: 'images/categories/mobile-knife-sharpening.jpg' },
        { name: 'Mobile bicycle repair', icon: 'bike', blurb: 'Bike repairs at your home.', cover: 'images/categories/mobile-bicycle-repair.jpg' },
        { name: 'Piano tuning', icon: 'wrench', blurb: 'Pianos tuned in your home.', cover: 'images/categories/piano-tuning.jpg' },
        { name: 'Watch & jewelry repair', icon: 'wrench', blurb: 'Repairs done at your location.', cover: 'images/categories/watch-jewelry-repair.jpg' }
      ] },
    { id: 'family-care', name: 'Child & family care', cover: 'images/categories/group-family-care.jpg', tagline: 'Trusted help at home.',
      categories: [
        { name: 'In-home nanny & babysitting', icon: 'users', blurb: 'Childcare at your home.', cover: 'images/categories/in-home-nanny-babysitting.jpg' },
        { name: 'Night nanny', icon: 'users', blurb: 'Overnight newborn care.', cover: 'images/categories/night-nanny.jpg' },
        { name: 'Mobile doula', icon: 'users', blurb: 'Birth support at your home.', cover: 'images/categories/mobile-doula.jpg' },
        { name: 'Sleep consultant', icon: 'users', blurb: 'In-home baby sleep coaching.', cover: 'images/categories/sleep-consultant.jpg' },
        { name: 'House sitting', icon: 'users', blurb: 'Property checks while you are away.', cover: 'images/categories/house-sitting.jpg' }
      ] }
  ];
  var CATEGORIES = [];
  SERVICE_GROUPS.forEach(function (g) {
    g.categories.forEach(function (c) { CATEGORIES.push(c); });
  });

  /* Seed businesses. isSample listings are flagged in the UI.
     Businesses without isSample are real listings. */
  var SEED_BUSINESSES = [
    {
      id: 'seed-shine', slug: 'shine', isSample: true,
      name: 'Shine On Mobile Detailing', category: 'Mobile auto detailing',
      tagline: 'A fresh start for your daily drive.',
      description: 'Interior and exterior detailing that comes to your driveway. We bring the water, the power and the shine — you keep your keys.',
      phone: '(916) 555-0114', email: 'hello@shineon.example', website: '',
      zips: ['95814', '95816', '95818', '95843', '95678', '95661'],
      travelFee: 0, travelRadius: 25, travelBuffer: 30,
      earliestOpening: 'Wed, Sep 30', arrivalWindows: ['8–11 AM', '12–3 PM', '3–6 PM'],
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'seed-listing-shine', title: 'Interior & exterior detail',
        price: 149, priceType: 'fixed', duration: '2–3 hours',
        includes: ['Exterior hand wash & wheel cleaning', 'Interior vacuum & surfaces', 'Windows in and out'],
        beforeVisit: ['A safe parking space and vehicle access', 'Water and power supplied by the provider'],
        cancellation: 'Please give 24 hours notice to avoid a $25 late fee.'
      }]
    },
    {
      id: 'seed-fresh-nest', slug: 'fresh-nest', isSample: true,
      name: 'Fresh Nest Home Cleaning', category: 'House cleaning',
      tagline: 'A reset button for your home.',
      description: 'Two-bedroom standard clean, done at your place while you get on with your day.',
      phone: '(916) 555-0132', email: 'hello@freshnest.example', website: '',
      zips: ['95814', '95816', '95818'],
      travelFee: 0, travelRadius: 15, travelBuffer: 30,
      earliestOpening: 'Thu, Oct 1', arrivalWindows: ['9–12 PM', '1–4 PM'],
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'seed-listing-fresh-nest', title: 'Two-bedroom standard clean',
        price: 120, priceType: 'fixed', duration: '2–3 hours',
        includes: ['Whole-home dusting', 'Kitchen & bath detail', 'Floors vacuumed & mopped'],
        beforeVisit: ['Tidy personal items so we can clean', 'Pets secured during the visit'],
        cancellation: 'Please give 24 hours notice to avoid a $25 late fee.'
      }]
    },
    {
      id: 'seed-tail-trail', slug: 'tail-trail', isSample: true,
      name: 'Tail Trail Grooming', category: 'Mobile pet grooming',
      tagline: 'The groomer that comes to your curb.',
      description: 'Small-dog bath and tidy in our fully equipped mobile salon, parked right outside.',
      phone: '(916) 555-0177', email: 'hello@tailtrail.example', website: '',
      zips: ['95814', '95843'],
      travelFee: 10, travelRadius: 20, travelBuffer: 20,
      earliestOpening: 'Wed, Sep 30', arrivalWindows: ['9–12 PM', '12–3 PM'],
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'seed-listing-tail-trail', title: 'Small-dog bath & tidy',
        price: 110, priceType: 'fixed', duration: '1–2 hours',
        includes: ['Warm bath & blow dry', 'Nail trim', 'Ear cleaning'],
        beforeVisit: ['A flat parking spot near your door', 'Your dog on a leash at handoff'],
        cancellation: 'Please give 24 hours notice to avoid a $25 late fee.'
      }]
    },
    {
      id: 'seed-happy-paws', slug: 'happy-paws', isSample: true,
      name: 'Happy Paws Mobile Grooming', category: 'Mobile pet grooming',
      tagline: 'Grooming with your pet in mind.',
      description: 'Gentle, one-on-one grooming for small dogs. Nervous pups welcome — we go at their pace.',
      phone: '(916) 555-0148', email: 'hello@happypaws.example', website: '',
      zips: ['95814', '95816'],
      travelFee: 0, travelRadius: 12, travelBuffer: 20,
      earliestOpening: 'Fri, Oct 2', arrivalWindows: ['9–12 PM', '1–4 PM'],
      rating: 5, reviewCount: 1,
      reviews: [{
        id: 'seed-review-1', customerName: 'Sample customer', rating: 5,
        text: 'They were so gentle with my nervous pup. Easiest groom ever.',
        createdAt: '2026-09-20T10:00:00Z'
      }],
      listings: [{
        id: 'seed-listing-happy-paws', title: 'Small-dog bath & tidy',
        price: 105, priceType: 'estimate', duration: '1–2 hours',
        includes: ['Warm bath & blow dry', 'Brush out & tidy trim', 'Nail trim'],
        beforeVisit: ['A flat parking spot near your door'],
        cancellation: 'Please give 24 hours notice to avoid a $25 late fee.'
      }]
    },
    {
      id: 'seed-spark-go', slug: 'spark-go', isSample: true,
      name: 'Spark & Go Auto Care', category: 'Mobile auto detailing',
      tagline: 'Detailing on your schedule.',
      description: 'Interior and exterior detail with evening and weekend slots for busy driveways.',
      phone: '(916) 555-0191', email: 'hello@sparkandgo.example', website: '',
      zips: ['95814', '95678'],
      travelFee: 15, travelRadius: 30, travelBuffer: 30,
      earliestOpening: 'Sat, Oct 3', arrivalWindows: ['8–11 AM', '12–3 PM', '4–7 PM'],
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'seed-listing-spark-go', title: 'Interior & exterior detail',
        price: 144, priceType: 'estimate', duration: '2–3 hours',
        includes: ['Exterior wash & wax', 'Interior deep vacuum', 'Windows in and out'],
        beforeVisit: ['A safe parking space and vehicle access'],
        cancellation: 'Please give 24 hours notice to avoid a $25 late fee.'
      }]
    },
    {
      id: 'seed-tidy-together', slug: 'tidy-together', isSample: true,
      name: 'Tidy Together Cleaning', category: 'House cleaning',
      tagline: 'Cleaning, quoted to your space.',
      description: 'Custom home cleaning built around your checklist — tell us what matters, we handle the rest.',
      phone: '(916) 555-0120', email: 'hello@tidytogether.example', website: '',
      zips: ['95814', '95843', '95678'],
      travelFee: 0, travelRadius: 20, travelBuffer: 30,
      earliestOpening: 'Thu, Oct 1', arrivalWindows: ['9–12 PM', '1–4 PM'],
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'seed-listing-tidy-together', title: 'Custom home cleaning',
        price: null, priceType: 'quote', duration: 'Varies',
        includes: ['Customized cleaning plan', 'Your checklist, our elbow grease'],
        beforeVisit: ['Walk us through your priorities on arrival'],
        cancellation: 'Please give 24 hours notice to avoid a fee.'
      }]
    },
    {
      /* Real business — spotted on a billboard on Sunrise Blvd, Sacramento (Oct 2026).
         Only billboard facts are listed: name, service, phone. No invented details. */
      id: 'biz-brothers-mobile-bike-shop', slug: 'brothers-mobile-bike-shop',
      name: 'Brothers Mobile Bike Shop', category: 'E-bike repair',
      tagline: 'E-bike service & repair — we come to you!',
      description: 'Mobile e-bike service and repair in Sacramento. They come to you — call (916) 234-3549 to book.',
      phone: '(916) 234-3549', email: '', website: '',
      photo: 'images/categories/e-bike-repair-cover.jpg',
      zips: ['95814', '95816', '95818'],
      travelFee: 0, travelRadius: 25, travelBuffer: 30,
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'biz-listing-brothers', title: 'E-bike service & repair visit',
        price: null, priceType: 'quote', duration: 'Varies',
        includes: ['E-bike service & repair at your location'],
        beforeVisit: ['Have your e-bike and charger accessible'],
        cancellation: ''
      }]
    },
    {
      /* Real business — spotted in a TikTok video by Satar Jamshid (Oct 2026).
         Satar Jamshid is the likely owner/contact (video posted from his account).
         Only on-screen facts are listed: name, phone. No invented details. */
      id: 'biz-afg-handyman-service', slug: 'afg-handyman-service',
      name: 'AFG Handyman Service', category: 'Handyman',
      tagline: '',
      description: 'Handyman service in the Sacramento area. Call (916) 944-9618 to book.',
      phone: '(916) 944-9618', email: '', website: '',
      photo: 'images/categories/handyman.jpg',
      zips: ['95814', '95816', '95818', '95843', '95678', '95661', '95747', '95677', '95765', '95648'],
      travelFee: 0, travelRadius: 25, travelBuffer: 30,
      rating: 0, reviewCount: 0,
      listings: [{
        id: 'biz-listing-afg', title: 'Handyman service visit',
        price: null, priceType: 'quote', duration: 'Varies',
        includes: ['Handyman repairs and installs at your location'],
        beforeVisit: ['Describe the job when you call'],
        cancellation: ''
      }]
    }
  ];

  var GUIDES = {
    'mobile-car-detailing': {
      slug: 'mobile-car-detailing', category: 'Mobile auto detailing',
      title: 'Mobile car detailing that comes to you',
      intro: 'A mobile detailer brings the wash to your driveway — no drop-off, no waiting room. Here is what to compare before you request.',
      compareTitle: 'What to compare',
      compare: [
        'What is covered: exterior wash, interior vacuum, wheels, windows — check each line, not just the headline.',
        'Vehicle size and dirt level: SUVs and pet hair usually cost more. Say what you drive up front.',
        'Water, power and parking: most mobile detailers bring their own, but they need a safe parking space and vehicle access.'
      ],
      question: 'Do I need to provide water or power?',
      answer: 'Usually not — most mobile detailers carry their own water and power. They do need a parking space they can work around safely.',
      note: 'Sample packages on Van Squads start around $144–$149 for a full interior & exterior detail, travel included.'
    },
    'mobile-pet-grooming': {
      slug: 'mobile-pet-grooming', category: 'Mobile pet grooming',
      title: 'Mobile pet grooming with your pet in mind',
      intro: 'One-on-one grooming in a van outside your home — calmer for anxious pets, easier for you. What to check first:',
      compareTitle: 'What to compare',
      compare: [
        'Pet size, temperament and health: groomers price by size and coat, and need to know about anxiety or medical issues.',
        'Temperament policy: ask how they handle nervous pets and what happens if a groom cannot be finished safely.',
        'Where the grooming happens: a fully equipped van, your bathroom, or the driveway — each has trade-offs.'
      ],
      question: 'Is mobile grooming good for nervous dogs?',
      answer: 'Often yes — there is no noisy salon, no cages and no other animals. Tell the groomer about triggers when you request.',
      note: 'Sample small-dog bath & tidy packages on Van Squads run about $105–$110, travel included.'
    },
    'home-cleaning': {
      slug: 'home-cleaning', category: 'House cleaning',
      title: 'Home cleaning that fits your space',
      intro: 'Standard upkeep or a deep reset — mobile cleaners come to you. Compare on scope, not just price.',
      compareTitle: 'What to compare',
      compare: [
        'Home size and task list: bedrooms, baths and extras like inside the oven change the job — list them.',
        'Supplies and pets: ask whether they bring supplies, and secure pets before the visit.',
        'Standard vs deep clean: a first visit is often deeper (and priced higher) than recurring upkeep.'
      ],
      question: 'Do I need to be home during the clean?',
      answer: 'Not necessarily — many customers hand over a key or code. Agree access and your priority rooms directly with the cleaner.',
      note: 'A sample two-bedroom standard clean on Van Squads is $120, travel included.'
    }
  };

  var FAQS = [
    {
      q: 'What is Van Squads?',
      a: 'Van Squads is a directory of local businesses that travel to customers. Businesses do not need to use a van — if you travel to your customers, you belong here.'
    },
    {
      q: 'Can I pay through Van Squads?',
      a: 'No. Online payments are not part of Van Squads. Agree service and payment terms directly with the business.'
    },
    {
      q: 'Is a requested time confirmed?',
      a: 'No. The business must review your job details, service address, and availability before confirming an appointment.'
    },
    {
      q: 'Which locations can I try?',
      a: 'We are starting with Sacramento, Antelope, and Roseville. Try ZIP 95814, 95843, or 95678.'
    }
  ];

  var HOW_STEPS = [
    { n: '01', title: 'CHOOSE YOUR SERVICE & ZIP', text: 'Tell us what you need. Start with your service and location to find businesses that travel to you.' },
    { n: '02', title: 'COMPARE PACKAGES', text: 'Choose your kind of pro. Compare packages, service details, and the total cost — including travel.' },
    { n: '03', title: 'SHARE YOUR JOB DETAILS', text: 'Send a request with your job details, ZIP code and a photo or two. No account needed to look around.' },
    { n: '04', title: 'WAIT FOR CONFIRMATION', text: 'The business reviews your details, service address and availability, then confirms your appointment.' }
  ];

  window.VS_DATA = {
    ZIP_NAMES: ZIP_NAMES, ALL_ZIPS: ALL_ZIPS,
    CATEGORIES: CATEGORIES, SERVICE_GROUPS: SERVICE_GROUPS, SEED_BUSINESSES: SEED_BUSINESSES,
    GUIDES: GUIDES, FAQS: FAQS, HOW_STEPS: HOW_STEPS
  };
})();
