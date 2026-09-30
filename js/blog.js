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
        '<p>Not sure what to compare? Read our <a href="#/services/mobile-car-detailing">mobile car detailing guide</a>.</p>' +
        '<div class="disclosure"><strong>Sources (2026 pricing data).</strong> Fresh Layer, "2026 San Diego Mobile Detailing Prices" (fresh-layer.com); Fresh Layer, "Why Is Mobile Detailing More Expensive Than a Car Wash?" (fresh-layer.com); Apex Mobile Shine, "Mobile Detailing Cost in Honolulu (2026 Guide)" (apexmobileshine.com).</div>'
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
