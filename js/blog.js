/* Van Squads blog — customer-question posts.
   New post = add one object to POSTS (slug, title, date, category, excerpt, body).
   Body is an HTML string; keep it plain and customer-focused. */
(function () {
  'use strict';

  var POSTS = [
    {
      slug: 'mobile-car-detailing-cost-2026',
      title: 'How Much Does Mobile Car Detailing Cost in 2026?',
      date: '2026-09-29',
      category: 'Car Detailing',
      excerpt: 'Most mobile detailing jobs in 2026 run $99 to $350. Here is what each tier includes, what drives your quote up, and 5 questions to ask before you book.',
      metaDescription: 'Mobile car detailing costs $99–$350 in 2026 for most jobs. See the full price breakdown by package, what raises your quote, and 5 questions to ask before booking.',
      readTime: '4 min read',
      updated: '2026-09-29',
      related: ['mobile-dog-grooming-cost-vs-salon', 'deep-clean-cost-2026'],
      images: [
        { src: 'images/blog/detailing-hero.jpg', alt: 'Mobile detailing van with open side door showing professional equipment, worker foam-washing a sedan in a home driveway', caption: 'A mobile detailer brings the full setup to your driveway — no drop-off needed.' },
        { src: 'images/blog/detailing-polish.jpg', alt: 'Detailer using a dual-action polisher on a car\u2019s glossy paint', caption: 'Machine polishing is what separates a real detail from a fast wash.' },
        { src: 'images/blog/detailing-interior.jpg', alt: 'Detailer vacuuming car seats during an interior detail', caption: 'Full interior details include vacuum, steam clean, and shampoo — from $249.' }
      ],
      tldr: 'Most mobile detailing jobs in 2026 cost $99–$350. Expect $99+ for a wash &amp; wax, $249–$299 for a full interior or exterior detail, and $349–$499+ for a complete top-to-bottom detail. Vehicle size and condition are the two biggest price drivers.',
      faq: [
        { q: 'How much does mobile car detailing cost in 2026?', a: 'Most jobs run $99 to $350. A basic wash & wax starts around $99, an express detail around $149, a full interior or exterior detail runs $249 to $299, and a complete detail costs $349 to $499+.' },
        { q: 'Is mobile detailing more expensive than a car wash?', a: 'Per visit, yes — $99+ versus $15–$30 at an automated wash. But automated washes wear your paint with brushes and harsh chemicals, and fixing that damage with paint correction costs $500–$1,500, more than a year of proper detailing.' },
        { q: 'Is mobile detailing worth it compared to a detail shop?', a: 'A shop is usually $20–$40 cheaper for the same package, but you lose 2–3 hours driving there and waiting. If your time is worth anything, mobile wins on total cost.' },
        { q: 'Do I need to provide water or power for mobile detailing?', a: 'Usually not. A professional mobile setup is self-contained — the detailer brings their own water and power. They only need a safe parking space with access to your vehicle.' },
        { q: 'How often should I get my car detailed?', a: 'Most detailers recommend a full detail every 3 months, which works out to roughly $1,400–$1,600 per year — about what you would spend at car washes anyway, without the paint damage.' }
      ],
      body:
        '{{img:0}}' +
        '<p class="lede">Most mobile detailing jobs in 2026 run <strong>$99 to $350</strong>. A basic wash-and-wax starts around $99, a full interior or exterior detail lands between $249 and $299, and a complete top-to-bottom detail runs $349 to $499+.</p>' +
        '<p>Those are not guesses — they are pulled from 2026 pricing guides published by working mobile detailers this year (sources at the bottom).</p>' +
        '<h3>What each price tier actually gets you</h3>' +
        '<table class="price-table"><thead><tr><th>What you book</th><th>Typical 2026 price</th><th>What it includes</th></tr></thead><tbody>' +
        '<tr><td>Wash &amp; wax (maintenance)</td><td>from $99</td><td>Exterior wash, wheels, spray wax</td></tr>' +
        '<tr><td>Express detailing</td><td>from $149</td><td>Quick interior + exterior refresh</td></tr>' +
        '<tr><td>Full interior detail</td><td>from $249</td><td>Vacuum, steam clean, shampoo seats/carpets/mats</td></tr>' +
        '<tr><td>Exterior detail</td><td>from $299</td><td>Deep wash, clay treatment, polish, sealant</td></tr>' +
        '<tr><td>Complete detail</td><td>from $349</td><td>Full interior + full exterior</td></tr>' +
        '<tr><td>Premium detail</td><td>from $499</td><td>Everything above, plus paint correction or coating prep</td></tr>' +
        '</tbody></table>' +
        '<p>Budget operators advertise $60–$120, but at that price you are getting a fast wash with shiny dressings that hide dirt — not a real detail. The mid-tier ($150–$220) is where most honest, thorough work lives.</p>' +
        '{{img:1}}' +
        '<h3>What makes your quote go up (or down)</h3>' +
        '<ul class="check-list">' +
        '<li><strong>Vehicle size.</strong> A sedan costs less than a three-row SUV or truck. More surface, more time, more product.</li>' +
        '<li><strong>Condition.</strong> A car detailed every three months costs less per visit than one that has not been touched in five years. Heavy pet hair, sand, stains, and ground-in grime all add labor.</li>' +
        '<li><strong>What is included.</strong> A "$99 detail" and a "$249 detail" are different services with different names. Always compare the checklist, not the headline price. As one San Diego detailer put it this year: "Price only makes sense when you know what is included."</li>' +
        '</ul>' +
        '<h3>Mobile vs. car wash vs. shop: the honest math</h3>' +
        '<ul class="check-list">' +
        '<li><strong>Automated car wash:</strong> $15–$30 a visit, but the brushes and harsh chemicals wear your paint. Fixing that damage later with paint correction costs $500–$1,500 — more than a year of proper detailing.</li>' +
        '<li><strong>Detail shop:</strong> Usually $20–$40 cheaper than mobile for the same package. But you drive there, wait around, and drive back — 2 to 3 hours of your day gone.</li>' +
        '<li><strong>Mobile detailing:</strong> Costs a little more because the equipment comes to you. You book in five minutes, keep working from home, and the van handles the rest. If your time is worth anything at all, mobile wins on total cost.</li>' +
        '</ul>' +
        '<p>Most detailers recommend a full detail every 3 months, which puts the annual cost around $1,400–$1,600 — roughly what you would spend at car washes anyway, minus the paint damage.</p>' +
        '{{img:2}}' +
        '<h3>5 questions to ask before you book</h3>' +
        '<ol class="num-list">' +
        '<li><strong>What is included in this package, exactly?</strong> Get the checklist, not the sales pitch.</li>' +
        '<li><strong>Do you bring your own water and power?</strong> A real mobile setup is self-contained — you should not have to supply anything.</li>' +
        '<li><strong>Are you insured?</strong> If something gets scratched, you want an answer better than a shrug.</li>' +
        '<li><strong>Can I see before-and-after photos of your actual work?</strong> Not stock photos. Their work.</li>' +
        '<li><strong>What happens if I am not happy?</strong> A confident detailer has a clear answer.</li>' +
        '</ol>' +
        '<p>Not sure what to compare? Read our <a href="/services/mobile-car-detailing/">mobile car detailing guide</a>.</p>' +
        '<div class="disclosure"><strong>Sources (2026 pricing data).</strong> Fresh Layer, "2026 San Diego Mobile Detailing Prices" (fresh-layer.com); Fresh Layer, "Why Is Mobile Detailing More Expensive Than a Car Wash?" (fresh-layer.com); Apex Mobile Shine, "Mobile Detailing Cost in Honolulu (2026 Guide)" (apexmobileshine.com).</div>'
    },
    {
      slug: 'mobile-dog-grooming-cost-vs-salon',
      title: 'How Much Does Mobile Dog Grooming Cost Compared to a Salon?',
      date: '2026-10-04',
      category: 'Pet Grooming',
      excerpt: 'Mobile grooming costs 20–30% more than a salon in 2026: roughly $60–$90 for small dogs, $80–$130 for medium, $100–$160+ for large. Here is the full price table, what the premium buys, and 5 questions to ask before you book.',
      metaDescription: 'Mobile dog grooming runs 20–30% more than a salon in 2026. Full price table by dog size, what the premium buys you, and 5 questions to ask before booking.',
      readTime: '4 min read',
      updated: '2026-10-04',
      related: ['mobile-car-detailing-cost-2026', 'deep-clean-cost-2026'],
      images: [
        { src: 'images/blog/mobile-dog-grooming-cost-vs-salon-hero.jpg', alt: 'Mobile pet grooming van parked in a home driveway with groomer greeting a golden retriever at the open side door', caption: 'The van comes to your driveway — no drop-off, no pickup, no kennel time.' },
        { src: 'images/blog/mobile-dog-grooming-cost-vs-salon-van.jpg', alt: 'Groomer bathing a small fluffy dog in a raised tub inside a clean mobile grooming van', caption: 'One dog at a time, start to finish — that is what the premium pays for.' },
        { src: 'images/blog/mobile-dog-grooming-cost-vs-salon-happy.jpg', alt: 'Freshly groomed fluffy doodle dog sitting happily on a home porch', caption: 'A calm groom at home beats a stressful salon day for anxious dogs.' }
      ],
      tldr: 'Mobile dog grooming costs about 20–30% more than a salon in 2026: expect $60–$90 for a small dog, $80–$130 for a medium dog, and $100–$160+ for a large dog for a full groom. The premium covers the groomer\u2019s van, fuel, travel, and one-on-one time with no kennels. Book early — mobile groomers in most metro areas are weeks to months out.',
      faq: [
        { q: 'How much should I tip a mobile dog groomer?', a: '15–20% of the service price — the same standard as salons and hair stylists. Cash is preferred because it goes straight to the groomer.' },
        { q: 'Why is grooming a doodle so expensive?', a: 'Curly doodle coats mat fast and take 60–90 minutes of clipper work alone. A doodle groom runs $80–$150+ and takes 2–3 hours, which is why they are the priciest common breed to maintain.' },
        { q: 'How often should my dog be groomed?', a: 'Every 4–6 weeks for long or curly coats (doodles, Shih Tzus), every 8–10 weeks for heavy shedders like Huskies, and every 8–12 weeks for short-coated breeds.' },
        { q: 'Are mobile groomers really booked out for months?', a: 'In many metro areas, yes. Mobile is the fastest-growing grooming segment and demand has outrun supply — book early and keep a recurring slot once you have one.' },
        { q: 'Does a matted coat cost extra?', a: 'Almost always. Expect a $15–$50 de-matting surcharge; severe matting may require a full shave-down at additional cost.' }
      ],
      body:
        '{{img:0}}' +
        '<h3>What does mobile dog grooming cost in 2026?</h3>' +
        '<p>Here is what full-groom pricing looks like right now, side by side:</p>' +
        '<table class="price-table"><thead><tr><th>Dog size</th><th>Salon full groom</th><th>Mobile full groom</th></tr></thead><tbody>' +
        '<tr><td>Small (under 20 lbs)</td><td>$40–$80</td><td>$60–$90</td></tr>' +
        '<tr><td>Medium (20–50 lbs)</td><td>$65–$110</td><td>$80–$130</td></tr>' +
        '<tr><td>Large (50–80 lbs)</td><td>$90–$140</td><td>$100–$160</td></tr>' +
        '<tr><td>XL / giant (80+ lbs)</td><td>$120–$180+</td><td>$150–$220+</td></tr>' +
        '</tbody></table>' +
        '<p>A bath-only visit (no haircut) runs cheaper: about $25–$75 at a salon depending on size, versus $65–$110+ from a mobile groomer for small and medium dogs. Heavy-coated breeds like doodles sit at the top end — a full mobile groom for a doodle or XL breed can reach <strong>$190–$260+</strong>.</p>' +
        '<p>Two things move any quote up fast: a <strong>matted coat</strong> (typically a $15–$50 surcharge, since de-matting adds real time) and an <strong>anxious or difficult dog</strong> (more time, more care). When you ask for a quote, describe your dog\u2019s actual coat condition — not just the breed.</p>' +
        '{{img:1}}' +
        '<h3>Why does mobile grooming cost more than a salon?</h3>' +
        '<p>It is not markup for the sake of it. A mobile groomer runs a fully equipped van — water tanks, dryers, clippers, climate control — and drives it to your driveway. That means fuel, vehicle maintenance, insurance on the van, and unpaid travel time between appointments. A salon spreads those costs across many dogs per day; a mobile groomer does fewer appointments, one dog at a time.</p>' +
        '<p>What you are buying with the premium: your dog never sits in a kennel between stages, never deals with a loud salon full of strange dogs, and gets the groomer\u2019s undivided attention for the whole appointment. For many owners, that is the entire point.</p>' +
        '<h3>Is mobile grooming worth the extra cost?</h3>' +
        '<p>It depends on your dog — and your schedule. Mobile grooming earns its premium fastest in three situations:</p>' +
        '<ul class="check-list">' +
        '<li><strong>Anxious or reactive dogs.</strong> No car ride, no waiting in a cage, no other animals. For dogs that shake at the salon door, the calmer setting alone is worth it.</li>' +
        '<li><strong>Senior or special-needs dogs.</strong> Less handling, less waiting, no slippery salon floors for arthritic legs.</li>' +
        '<li><strong>Your own time.</strong> No drop-off, no pickup window, no sitting in the parking lot. The groomer texts you when they are done and your dog walks back inside.</li>' +
        '</ul>' +
        '<p>One honest trade-off: availability. Mobile groomers in most metro markets are <strong>booking weeks to months ahead</strong>, and some have closed their books to new clients entirely. If you find a good one with an opening, lock in a recurring slot.</p>' +
        '{{img:2}}' +
        '<h3>How can I pay less for mobile grooming?</h3>' +
        '<ul class="check-list">' +
        '<li><strong>Book on a regular schedule.</strong> Dogs groomed every 4–6 weeks take less time per visit — and many groomers discount standing appointments.</li>' +
        '<li><strong>Brush at home between visits.</strong> Daily brushing on a doodle or long-coated breed is the single cheapest way to avoid the $15–$50 matting surcharge.</li>' +
        '<li><strong>Ask about bundles.</strong> Bath, nail trim, and brushing booked together often costs less than adding services one by one.</li>' +
        '<li><strong>Compare local quotes.</strong> Prices vary a lot by market — in major metros, add 20–40% to national averages; in smaller towns, expect less.</li>' +
        '</ul>' +
        '<h3>What should I ask before booking a mobile groomer?</h3>' +
        '<ol class="num-list">' +
        '<li><strong>What is included in the base price — and what counts as an add-on?</strong> Get the checklist, not the sales pitch.</li>' +
        '<li><strong>How do you handle matted coats or anxious dogs, and what are the extra charges?</strong> Surprises at checkout are the #1 complaint.</li>' +
        '<li><strong>Is the van fully self-contained, or do you need anything from my home?</strong> Confirm at booking so there are no day-of surprises.</li>' +
        '<li><strong>Can I see recent reviews or before-and-after photos?</strong> Not stock photos. Their work.</li>' +
        '<li><strong>What is your cancellation policy?</strong> Mobile groomers lose real drive time on no-shows, so know the terms up front.</li>' +
        '</ol>' +
        '<p>Want the full picture on the service itself? Read our <a href="/services/mobile-pet-grooming/">mobile pet grooming guide</a>.</p>' +
        '<div class="disclosure"><strong>Sources (2026 pricing data).</strong> Bestie Paws Hospital, "How Much Does Dog Grooming Cost?" (bestiepaws.com); The Mobile Dog, "Mobile Dog Grooming Cost 2026" (themobiledog.com).</div>'
    },
    {
      slug: 'deep-clean-cost-2026',
      title: 'How Much Does a Deep Clean Cost?',
      date: '2026-10-04',
      category: 'Home cleaning',
      excerpt: 'A deep clean costs $260 on average in 2026, with most homeowners paying $180–$375. See the price table by home size, what drives your quote up, and 5 questions to ask before you book.',
      metaDescription: 'Deep cleaning costs $260 on average in 2026 ($180–$375). Price table by home size, what drives quotes up, and 5 questions to ask before booking.',
      readTime: '4 min read',
      updated: '2026-10-04',
      related: ['mobile-car-detailing-cost-2026', 'mobile-dog-grooming-cost-vs-salon'],
      images: [
        { src: 'images/blog/deep-clean-cost-2026-hero.jpg', alt: 'Professional cleaner deep-cleaning a bright modern kitchen stovetop with supplies nearby', caption: 'A deep clean goes after months of built-up grime — not just the visible stuff.' },
        { src: 'images/blog/deep-clean-cost-2026-detail.jpg', alt: 'Cleaner wiping a white baseboard with a microfiber cloth during detailed dusting', caption: 'Baseboards, window tracks, behind appliances — the detail work is what you are paying for.' },
        { src: 'images/blog/deep-clean-cost-2026-after.jpg', alt: 'Sparkling clean bright living room with sunlight through spotless windows after a deep clean', caption: 'Most homes need this level of reset every 3–6 months.' }
      ],
      tldr: 'A professional deep clean costs $260 on average in 2026, with most homeowners paying $180–$375. Cleaners charge $0.10–$0.30 per square foot or $25–$70 per hour, and home size is the biggest price driver. Decluttering first and booking recurring service are the two easiest ways to pay less.',
      faq: [
        { q: 'How much should I tip for a deep clean?', a: 'Tipping is customary but not required — 10–20% of the total is standard when you are pleased with the work. Check your invoice first; some companies include gratuity.' },
        { q: 'How often should I deep clean my house?', a: 'Every 3–6 months for most homes. Homes with pets, kids, allergy sufferers, or smokers may need it monthly or even biweekly.' },
        { q: 'What is usually not included in a deep clean?', a: 'Carpet and upholstery shampooing ($75–$200 per room), interior window washing ($3–$15 per window), and cleaning inside appliances ($10–$50 each) are typical add-ons — confirm before booking.' },
        { q: 'Why is my quote higher than the $260 average?', a: 'The average covers standard homes in average condition. Bigger homes, heavy buildup, metro-area labor rates, and add-ons like carpet or pet treatments all push quotes above it.' },
        { q: 'Do cleaners bring their own supplies?', a: 'Usually yes — standard products and equipment are included in the quote. Eco-friendly or specialty products can add $10–$100 per visit.' }
      ],
      body:
        '{{img:0}}' +
        '<h3>What does a deep clean cost in 2026?</h3>' +
        '<p>Here is how pricing breaks down by home size:</p>' +
        '<table class="price-table"><thead><tr><th>Home size</th><th>Typical 2026 price</th></tr></thead><tbody>' +
        '<tr><td>Up to 800 sq ft (apartment/condo)</td><td>$100–$200</td></tr>' +
        '<tr><td>800–1,500 sq ft (standard home)</td><td>$140–$320</td></tr>' +
        '<tr><td>1,500–2,500 sq ft (large home)</td><td>$245–$575</td></tr>' +
        '<tr><td>2,500+ sq ft (very large/estate)</td><td>$330–$900</td></tr>' +
        '</tbody></table>' +
        '<p>Those ranges cover a standard deep clean — the whole-home, top-to-bottom reset. Specialized deep cleans cost more: move-in/move-out runs $140–$500, allergen removal $210–$440, pet-focused treatments $190–$475, and post-construction cleanup $340–$800.</p>' +
        '<h3>What is the difference between a deep clean and a regular clean?</h3>' +
        '<p>A regular clean is maintenance — the visible stuff, done often. A deep clean goes after built-up grime: baseboards, behind and under appliances, light fixtures, window tracks, grout lines, and every surface that has been collecting dust for months. That is why it costs 2–3x a standard visit and takes much longer. Most homes need one every 3–6 months, with regular cleanings in between.</p>' +
        '{{img:1}}' +
        '<h3>What drives the price up or down?</h3>' +
        '<ul class="check-list">' +
        '<li><strong>Home size.</strong> The #1 factor. More square feet means more time, more product, more labor — most companies quote by square footage ($0.10–$0.30) or by room ($25–$60 per room).</li>' +
        '<li><strong>Type of deep clean.</strong> A standard whole-home deep clean ($180–$375) costs less than post-construction ($340–$800) or allergen removal ($210–$440), which need specialty equipment and products.</li>' +
        '<li><strong>Condition.</strong> A home that has not been deep cleaned in two years takes far longer than one done every six months. Heavy buildup, pet damage, and mold all add time — and cost.</li>' +
        '<li><strong>Location.</strong> Major metro areas run higher; small towns and suburbs cost less. Some cleaners add travel fees outside their standard service area, and many set a $100–$150 minimum.</li>' +
        '<li><strong>Add-ons.</strong> Carpet or upholstery cleaning ($75–$200 per room), interior windows ($3–$15 each), and inside-appliance cleaning ($10–$50 per appliance) are usually priced separately.</li>' +
        '</ul>' +
        '<h3>How can I pay less for a deep clean?</h3>' +
        '<ul class="check-list">' +
        '<li><strong>Declutter before they arrive.</strong> Every minute a cleaner spends tidying is a minute not spent deep cleaning — clear surfaces, gather laundry, and move small furniture.</li>' +
        '<li><strong>Book recurring service.</strong> Many companies discount repeat visits 10–30%. A deep clean twice a year plus regular maintenance often costs less over time than one rescue clean.</li>' +
        '<li><strong>Focus on what matters.</strong> Ask for high-traffic areas and problem rooms only, instead of the whole house, if budget is tight.</li>' +
        '<li><strong>Bundle services.</strong> Carpet cleaning, window washing, or organizing booked together often comes with package pricing.</li>' +
        '<li><strong>Compare multiple quotes.</strong> Prices vary widely between cleaners — get at least three and compare what is actually included, not just the headline number.</li>' +
        '</ul>' +
        '{{img:2}}' +
        '<h3>What should I ask before booking?</h3>' +
        '<ol class="num-list">' +
        '<li><strong>What is included in the base price — and what counts as an add-on?</strong> Get the room-by-room checklist, not the sales pitch.</li>' +
        '<li><strong>How do you price — square footage, hourly, or per room?</strong> Each method favors different homes; know which one you are getting.</li>' +
        '<li><strong>Do you bring your own supplies and equipment?</strong> Standard products are usually included; confirm before you buy anything yourself.</li>' +
        '<li><strong>What happens if I am not happy with the result?</strong> A confident cleaner has a clear re-clean policy.</li>' +
        '<li><strong>What is your cancellation policy?</strong> Deep cleans block out half a day — know the terms before you book.</li>' +
        '</ol>' +
        '<p>Want the full picture on the service itself? Read our <a href="/services/home-cleaning/">home cleaning guide</a>.</p>' +
        '<div class="disclosure"><strong>Sources (2026 pricing data).</strong> Angi, "How Much Does It Cost to Deep Clean a House? [2026 Data]" (angi.com).</div>'
    }
  ];

  function bySlug(slug) {
    for (var i = 0; i < POSTS.length; i++) {
      if (POSTS[i].slug === slug) return POSTS[i];
    }
    return null;
  }

  function fmtDate(iso) {
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  window.VS_BLOG = { POSTS: POSTS, bySlug: bySlug, fmtDate: fmtDate };
})();
