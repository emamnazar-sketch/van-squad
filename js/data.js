/* Van Squad — seed data + static content.
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

  var CATEGORIES = [
    { name: 'Car care', icon: 'car', live: true,
      blurb: 'Washes, detailing and auto care at your curb.' },
    { name: 'Pet care', icon: 'paw', live: true,
      blurb: 'Grooming and pet services at your door.' },
    { name: 'Home cleaning', icon: 'sparkle', live: true,
      blurb: 'Cleans that fit your space and schedule.' },
    { name: 'Handyman', icon: 'wrench', live: true,
      blurb: 'Fixes, installs and odd jobs at your door.' },
    { name: 'Electrician', icon: 'bolt', live: true,
      blurb: 'Wiring, lighting and panel work at your home.' },
    { name: 'Beauty & wellness', icon: 'scissors', live: false,
      blurb: 'Coming soon to the directory.' }
  ];

  /* Six sample businesses, copied from the design preview. */
  var SEED_BUSINESSES = [
    {
      id: 'seed-shine', slug: 'shine', isSample: true,
      name: 'Shine On Mobile Detailing', category: 'Car care',
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
      name: 'Fresh Nest Home Cleaning', category: 'Home cleaning',
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
      name: 'Tail Trail Grooming', category: 'Pet care',
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
      name: 'Happy Paws Mobile Grooming', category: 'Pet care',
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
      name: 'Spark & Go Auto Care', category: 'Car care',
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
      name: 'Tidy Together Cleaning', category: 'Home cleaning',
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
    }
  ];

  var GUIDES = {
    'mobile-car-detailing': {
      slug: 'mobile-car-detailing', category: 'Car care',
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
      note: 'Sample packages on Van Squad start around $144–$149 for a full interior & exterior detail, travel included.'
    },
    'mobile-pet-grooming': {
      slug: 'mobile-pet-grooming', category: 'Pet care',
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
      note: 'Sample small-dog bath & tidy packages on Van Squad run about $105–$110, travel included.'
    },
    'home-cleaning': {
      slug: 'home-cleaning', category: 'Home cleaning',
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
      note: 'A sample two-bedroom standard clean on Van Squad is $120, travel included.'
    }
  };

  var FAQS = [
    {
      q: 'What is Van Squad?',
      a: 'Van Squad is a directory of local businesses that travel to customers. Businesses do not need to use a van — if you travel to your customers, you belong here.'
    },
    {
      q: 'Can I pay through Van Squad?',
      a: 'No. Online payments are not part of Van Squad. Agree service and payment terms directly with the business.'
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
    CATEGORIES: CATEGORIES, SEED_BUSINESSES: SEED_BUSINESSES,
    GUIDES: GUIDES, FAQS: FAQS, HOW_STEPS: HOW_STEPS
  };
})();
