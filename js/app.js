/* Van Squad — single-page app: hash router + all views. */
(function () {
  'use strict';
  var D = window.VS_DATA;

  /* ---------- helpers ---------- */
  function h(s) {
    return String(s === null || s === undefined ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._tm); t._tm = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }
  function zipName(z) { return D.ZIP_NAMES[z] || ('ZIP ' + z); }
  function isValidZip(z) { return /^\d{5}$/.test(String(z || '').trim()); }

  /* Service-area ZIP picker: standard grid + removable custom-ZIP chips. */
  function zipGridHTML(selected) {
    selected = selected || [];
    var std = D.ALL_ZIPS.map(function (z) {
      var on = selected.indexOf(z) >= 0;
      return '<label class="zip-check' + (on ? ' on' : '') + '"><input type="checkbox" name="zips" value="' + z + '"' + (on ? ' checked' : '') + '> ' + z + ' · ' + h(zipName(z)) + '</label>';
    }).join('');
    var custom = selected.filter(function (z) { return D.ALL_ZIPS.indexOf(z) < 0; }).map(function (z) {
      return '<label class="zip-check on custom-zip"><input type="checkbox" name="zips" value="' + h(z) + '" checked> ' + h(z) + ' <button type="button" class="zip-x" title="Remove ZIP">\u00d7</button></label>';
    }).join('');
    return std + custom;
  }
  function customZipRowHTML() {
    return '<div class="zip-add"><input type="text" class="zip-add-input" inputmode="numeric" maxlength="5" placeholder="Add another ZIP \u2014 e.g. 95630" aria-label="Add another ZIP code">' +
      '<button type="button" class="btn btn-outline btn-sm zip-add-btn">Add</button></div>' +
      '<p class="hint zip-add-err" style="display:none;color:#8F2323"></p>';
  }
  function bindCustomZips(root) {
    var grid = root.querySelector('.zip-grid');
    var input = root.querySelector('.zip-add-input');
    var btn = root.querySelector('.zip-add-btn');
    var errEl = root.querySelector('.zip-add-err');
    if (!grid || !input || !btn) return;
    function showErr(m) { if (errEl) { errEl.textContent = m; errEl.style.display = m ? 'block' : 'none'; } }
    grid.addEventListener('click', function (e) {
      var x = e.target && e.target.closest ? e.target.closest('.zip-x') : null;
      if (x) { e.preventDefault(); var lab = x.closest('.zip-check'); if (lab) lab.remove(); }
    });
    grid.addEventListener('change', function (e) {
      var cb = e.target;
      if (cb && cb.name === 'zips') { var lab = cb.closest('.zip-check'); if (lab) lab.classList.toggle('on', cb.checked); }
    });
    function addZip() {
      var z = input.value.trim();
      showErr('');
      if (!isValidZip(z)) { showErr('Enter a valid 5-digit ZIP code.'); input.focus(); return; }
      if (root.querySelector('input[name="zips"][value="' + z + '"]')) { showErr('That ZIP is already in your list.'); return; }
      var lab = document.createElement('label');
      lab.className = 'zip-check on custom-zip';
      lab.innerHTML = '<input type="checkbox" name="zips" value="' + z + '" checked> ' + h(z) + ' <button type="button" class="zip-x" title="Remove ZIP">\u00d7</button>';
      grid.appendChild(lab);
      input.value = '';
      toast('ZIP ' + z + ' added to your service area.');
    }
    btn.addEventListener('click', addZip);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); addZip(); } });
  }

  var ICONS = {
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="3" y="11" width="18" height="6" rx="2"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/></svg>',
    paw: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round"><circle cx="7" cy="9" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 11c-3 0-5.5 2.2-5.5 4.6 0 1.6 1.2 2.9 2.9 2.9 1 0 1.8-.5 2.6-.5s1.6.5 2.6.5c1.7 0 2.9-1.3 2.9-2.9C17.5 13.2 15 11 12 11z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M12 13l1.2 2.6L16 16.8l-2.8 1.2L12 20.6l-1.2-2.6L8 16.8l2.8-1.2z"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5L20 19M8 16.5L20 5"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-2.5-2.5z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B3A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="#FF6A2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1E9E6A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>'
  };
  function catIcon(cat) {
    var c = null;
    D.CATEGORIES.forEach(function (x) { if (x.name === cat) c = x; });
    var key = c ? c.icon : 'sparkle';
    return ICONS[key] || ICONS.sparkle;
  }
  function catClass(cat) {
    return cat === 'Car care' ? 'car' : cat === 'Pet care' ? 'pet' : 'home';
  }
  function priceLabel(l) {
    if (!l || l.priceType === 'quote' || l.price === null || l.price === undefined) return 'Quote required';
    var p = '$' + Number(l.price);
    return l.priceType === 'estimate' ? p + ' est.' : p;
  }
  function starsHTML(b) {
    if (!b.reviewCount) return '<span class="stars"><span class="dim">☆</span> <span class="muted small">No published reviews yet</span></span>';
    var r = b.rating ? b.rating.toFixed(1) : '–';
    return '<span class="stars">★ ' + r + ' · <span class="muted small">' + b.reviewCount + (b.reviewCount === 1 ? ' review' : ' reviews') + '</span></span>';
  }
  function primaryListing(b) { return (b.listings && b.listings[0]) || {}; }

  /* ---------- shared components ---------- */
  function bizCard(b, opts) {
    opts = opts || {};
    var l = primaryListing(b);
    var zip = (opts.zip || (b.zips && b.zips[0]) || '');
    return '<article class="biz-card">' +
      '<div class="biz-photo ' + catClass(b.category) + '">' +
        (b.isSample ? '<span class="sample-badge">Sample</span>' : '') +
        catIcon(b.category) +
      '</div>' +
      '<div class="biz-body">' +
        '<div class="biz-cat">' + h(b.category) + '</div>' +
        '<h3 class="biz-name"><a href="#/business/' + h(b.slug || b.id) + '">' + h(b.name) + '</a></h3>' +
        starsHTML(b) +
        '<div class="biz-title">' + h(l.title || '') + '</div>' +
        (zip ? '<div class="biz-meta">Serves ZIP ' + h(zip) + '</div>' : '') +
        '<div class="biz-price">' + h(priceLabel(l)) +
          (l.priceType !== 'quote' ? ' <span class="per">· Includes travel · before tax</span>' : '') + '</div>' +
        (l.priceType === 'quote' ? '<div class="biz-meta">Ask the business for a quote.</div>' : '') +
        '<div class="biz-actions">' +
          '<a class="btn btn-primary btn-sm" href="#/book/' + h(b.slug || b.id) + '">Send request</a>' +
          '<a class="btn btn-outline btn-sm" href="#/business/' + h(b.slug || b.id) + '">View details</a>' +
        '</div>' +
        (opts.compare ? '<label class="compare-toggle"><input type="checkbox" data-compare="' + h(b.id) + '"' +
          (opts.compareSet && opts.compareSet[b.id] ? ' checked' : '') + '> Compare</label>' : '') +
      '</div></article>';
  }

  function faqHTML() {
    return '<div class="faq">' + D.FAQS.map(function (f) {
      return '<div class="faq-item"><button class="faq-q" type="button">' + h(f.q) +
        '<span class="chev">+</span></button><div class="faq-a">' + h(f.a) + '</div></div>';
    }).join('') + '</div>';
  }

  function guideCardsHTML() {
    var cards = [
      { slug: 'mobile-car-detailing', title: 'Mobile car detailing that comes to you', p: 'What to compare before you request.' },
      { slug: 'mobile-pet-grooming', title: 'Mobile pet grooming with your pet in mind', p: 'Calmer grooms for anxious pets.' },
      { slug: 'home-cleaning', title: 'Home cleaning that fits your space', p: 'Standard upkeep or a deep reset.' },
      { slug: null, title: 'How service requests work', p: 'From first search to confirmed visit.', how: true }
    ];
    return '<div class="guide-grid">' + cards.map(function (c) {
      var href = c.how ? '#/how-it-works' : '#/services/' + c.slug;
      return '<a class="guide-card" href="' + href + '"><h3>' + h(c.title) + '</h3><p>' +
        h(c.p) + '</p><span class="go">Read →</span></a>';
    }).join('') + '</div>';
  }

  /* ---------- header auth area ---------- */
  async function renderHeaderAuth() {
    var el = document.getElementById('header-cta');
    var mel = document.getElementById('mobile-cta');
    var user = null;
    try { user = await window.VS.store.currentUser(); } catch (e) {}
    var html;
    if (user) {
      var dash = user.role === 'business' ? '#/dashboard' : '#/customer';
      html = '<a class="btn btn-navy btn-sm" href="' + dash + '">Hi, ' + h(user.name) + '</a>' +
             '<button class="link-btn" id="logout-btn" type="button">Log out</button>';
    } else {
      html = '<a class="btn btn-outline btn-sm" href="#/login">Log in</a>' +
             '<a class="btn btn-primary btn-sm" href="#/join">List your business</a>';
    }
    el.innerHTML = html;
    mel.innerHTML = html;
    var lb = document.getElementById('logout-btn');
    if (lb) lb.addEventListener('click', async function () {
      await window.VS.store.logout();
      toast('Logged out.');
      renderHeaderAuth(); route();
    });
  }

  /* ---------- views ---------- */

  function viewHome() {
    var tryChips = ['Car wash', 'Dog grooming', 'House cleaning'].map(function (t) {
      return '<button type="button" data-try="' + h(t) + '">' + h(t) + '</button>';
    }).join(' · ');
    var cats = D.CATEGORIES.map(function (c) {
      var inner = '<div class="cat-ico">' + (ICONS[c.icon] || ICONS.sparkle) + '</div>' +
        '<h3>' + h(c.name) + '</h3><p>' + h(c.blurb) + '</p>' +
        (c.live ? '' : '<span class="soon">Coming soon</span>');
      return c.live
        ? '<a class="cat-card" href="#/browse?cat=' + encodeURIComponent(c.name) + '">' + inner + '</a>'
        : '<div class="cat-card disabled">' + inner + '</div>';
    }).join('');
    return '' +
    '<section class="hero"><div class="wrap">' +
      '<p class="eyebrow">Local services. At your door.</p>' +
      '<h1>What do you need help with?</h1>' +
      '<p class="lede">Find a business that comes to you.</p>' +
      '<form class="search-bar" id="hero-search">' +
        '<input type="text" id="hero-q" placeholder="Search for a service or business" aria-label="Search for a service or business">' +
        '<input type="text" class="zip" id="hero-zip" value="95814" maxlength="5" inputmode="numeric" aria-label="ZIP code">' +
        '<button class="btn btn-primary" type="submit">Search</button>' +
      '</form>' +
      '<div class="try-line">Try searching: ' + tryChips + '</div>' +
      '<div class="demo-locs">Serving: Sacramento, Antelope &amp; Roseville · Try ZIP 95814</div>' +
      '<div class="checks"><span>Compare service packages</span><span>See travel costs upfront</span><span>Request an appointment</span></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<p class="eyebrow">What can we take off your list?</p>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">' +
        '<h2 style="margin:0">Explore services</h2><a class="link-btn" href="#/browse">Explore all services ↗</a>' +
      '</div>' +
      '<div class="cat-grid">' + cats + '</div>' +
    '</div></section>' +

    '<section class="section band" id="home-samples"><div class="wrap">' +
      '<p class="eyebrow">Meet your next go-to.</p>' +
      '<h2>Good help, close to home.</h2>' +
      '<p class="lede">A look at the businesses you could discover on Van Squad.</p>' +
      '<div style="text-align:right"><a class="link-btn" href="#/browse">View all ↗</a></div>' +
      '<div class="list-grid" id="home-cards"><div class="empty">Loading…</div></div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<p class="eyebrow">Less searching. More living.</p>' +
      '<h2>Your to-do list, taken care of.</h2>' +
      '<div class="steps">' +
        '<div class="step"><div class="n">01</div><h3>FIND YOUR SERVICE</h3><p>Tell us what you need. Start with your service and location to find businesses that travel to you.</p></div>' +
        '<div class="step"><div class="n">02</div><h3>FIND YOUR FIT</h3><p>Choose your kind of pro. Compare packages, service details, and the total cost — including travel.</p></div>' +
        '<div class="step"><div class="n">03</div><h3>MAKE ROOM FOR LIFE</h3><p>They make the trip. Request a time that works for you. Your chosen business confirms the appointment.</p></div>' +
      '</div>' +
    '</div></section>' +

    '<section><div class="wrap"><div class="cta-band">' +
      '<div><p class="eyebrow">For businesses that go the extra mile.</p>' +
      '<h2>Help nearby customers find you.</h2>' +
      '<ul><li>A clear business profile.</li><li>One simple inbox for requests.</li></ul></div>' +
      '<div class="cta-actions"><a class="btn btn-primary" href="#/join">Join the squad ↗</a>' +
      '<a class="btn btn-outline" href="#/workspace" style="border-color:#3A4C61;color:#fff;background:transparent">Try the business account →</a></div>' +
    '</div></div></section>' +

    '<section class="section"><div class="wrap">' +
      '<p class="eyebrow">Service guides</p>' +
      '<h2>Find the right service for your job</h2>' +
      guideCardsHTML() +
    '</div></section>' +

    '<section class="section band"><div class="wrap">' +
      '<p class="eyebrow center">Before you request a service</p>' +
      '<h2 class="center">Questions, answered</h2>' +
      faqHTML() +
    '</div></section>';
  }

  async function afterHome() {
    var form = document.getElementById('hero-search');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = document.getElementById('hero-q').value.trim();
      var zip = document.getElementById('hero-zip').value.trim();
      location.hash = '#/browse?q=' + encodeURIComponent(q) + '&zip=' + encodeURIComponent(zip);
    });
    document.querySelectorAll('[data-try]').forEach(function (b) {
      b.addEventListener('click', function () {
        location.hash = '#/browse?q=' + encodeURIComponent(b.getAttribute('data-try')) + '&zip=95814';
      });
    });
    bindFaq();
    try {
      var all = await window.VS.store.listBusinesses();
      var pick = ['seed-shine', 'seed-happy-paws', 'seed-fresh-nest'].map(function (id) {
        for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
        return null;
      }).filter(Boolean);
      var wrap = document.getElementById('home-cards');
      if (wrap) wrap.innerHTML = pick.map(function (b) { return bizCard(b, { zip: '95814' }); }).join('');
    } catch (e) {
      var w = document.getElementById('home-cards');
      if (w) w.innerHTML = '<div class="empty">Could not load listings.</div>';
    }
  }

  function bindFaq() {
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () { q.parentElement.classList.toggle('open'); });
    });
  }

  /* ---------- browse / explore ---------- */
  var browseState = { q: '', zip: '95814', category: '', maxBudget: '', date: '', time: '', compareMode: false, compareSet: {} };

  function viewBrowse() {
    var pills = [{ name: '' , label: 'All services' }].concat(
      D.CATEGORIES.map(function (c) { return { name: c.name, label: c.name, live: c.live }; })
    ).map(function (p) {
      var soon = p.name && p.live === false;
      var on = browseState.category === p.name ? ' on' : '';
      return '<button type="button" class="pill' + on + (soon ? ' pill-soon' : '') + '" data-cat="' + h(p.name) + '"' +
        (soon ? ' title="Coming soon — no businesses listed here yet"' : '') + '>' + h(p.label) +
        (soon ? ' <span class="pill-soon-tag">Soon</span>' : '') + '</button>';
    }).join('');
    return '' +
    '<section class="explore-head"><div class="wrap">' +
      '<p class="eyebrow">Explore services</p>' +
      '<h1 id="browse-h1">Services in ' + h(zipName(browseState.zip) || 'your area') + '</h1>' +
      '<form class="search-bar" id="browse-search" style="max-width:760px">' +
        '<input type="text" id="b-q" placeholder="Search for a service or business" value="' + h(browseState.q) + '" aria-label="Search">' +
        '<input type="text" class="zip" id="b-zip" value="' + h(browseState.zip) + '" maxlength="5" inputmode="numeric" aria-label="ZIP code">' +
        '<button class="btn btn-primary" type="submit">Search</button>' +
      '</form>' +
      '<div class="filter-row">' + pills + '</div>' +
      '<div style="margin-top:10px"><button class="link-btn" id="more-filters-btn" type="button">More filters · date, time &amp; budget</button></div>' +
      '<div class="more-filters" id="more-filters">' +
        '<label>Preferred date<input type="date" id="b-date" value="' + h(browseState.date) + '"></label>' +
        '<label>Time of day<select id="b-time">' +
          ['Any time', 'Morning', 'Midday', 'Afternoon', 'Evening'].map(function (t) {
            return '<option' + (browseState.time === t ? ' selected' : '') + '>' + t + '</option>';
          }).join('') + '</select></label>' +
        '<label>Max budget ($)<input type="number" id="b-budget" min="0" placeholder="e.g. 150" value="' + h(browseState.maxBudget) + '"></label>' +
        '<label style="justify-content:flex-end"><span>&nbsp;</span><button class="btn btn-navy btn-sm" id="b-apply" type="button">Apply</button></label>' +
      '</div>' +
    '</div></section>' +
    '<section class="section" style="padding-top:30px"><div class="wrap">' +
      '<div class="filter-meta">' +
        '<span class="results-note" id="results-note"></span>' +
        '<span style="display:flex;gap:14px">' +
          '<button class="link-btn" id="compare-toggle" type="button">' + (browseState.compareMode ? 'Done comparing' : 'Compare businesses') + '</button>' +
          '<button class="link-btn" id="reset-filters" type="button">Reset filters</button>' +
        '</span>' +
      '</div>' +
      '<div class="list-grid" id="browse-cards"></div>' +
    '</div></section>' +
    '<div class="compare-bar" id="compare-bar"><span id="compare-count">0 selected</span><button class="btn btn-primary btn-sm" id="compare-go" type="button">Compare now</button></div>' +
    '<div class="modal-veil" id="compare-modal"><div class="modal"><button class="modal-close" id="compare-close" type="button">✕</button><h2>Compare businesses</h2><div id="compare-table-wrap"></div></div></div>';
  }

  async function runBrowse() {
    var res = await window.VS.store.searchBusinesses({
      q: browseState.q, zip: browseState.zip, category: browseState.category, maxBudget: browseState.maxBudget
    });
    var wrap = document.getElementById('browse-cards');
    var note = document.getElementById('results-note');
    if (!res.length) {
      var catSoon = null;
      for (var ci = 0; ci < D.CATEGORIES.length; ci++) {
        if (D.CATEGORIES[ci].name === browseState.category && D.CATEGORIES[ci].live === false) { catSoon = D.CATEGORIES[ci]; break; }
      }
      wrap.innerHTML = '<div class="empty" style="grid-column:1/-1">' +
        (catSoon
          ? '<h3 style="margin-top:0">No ' + h(catSoon.name) + ' businesses yet.</h3>' +
            '<p>We\u2019re bringing this category to ZIP ' + h(browseState.zip || '95814') + ' soon. Own a ' + h(catSoon.name.toLowerCase()) + ' business? Be the first listed.</p>' +
            '<a class="btn btn-primary" href="#/join" style="margin-top:12px">List your business \u2192</a>'
          : 'No businesses match those filters yet. Try a different ZIP or search \u2014 and check back soon, new businesses are joining.') +
        '</div>';
    } else {
      wrap.innerHTML = res.map(function (b) {
        return bizCard(b, { zip: browseState.zip, compare: browseState.compareMode, compareSet: browseState.compareSet });
      }).join('');
    }
    note.textContent = res.length + (res.length === 1 ? ' business' : ' businesses') +
      (browseState.zip ? ' serving ZIP ' + browseState.zip : '');
    document.getElementById('browse-h1').textContent =
      'Services in ' + (zipName(browseState.zip) || 'your area');
    bindCompareBoxes();
    updateCompareBar();
  }

  function bindCompareBoxes() {
    document.querySelectorAll('[data-compare]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = cb.getAttribute('data-compare');
        if (cb.checked) browseState.compareSet[id] = true; else delete browseState.compareSet[id];
        updateCompareBar();
      });
    });
  }
  function updateCompareBar() {
    var n = Object.keys(browseState.compareSet).length;
    var bar = document.getElementById('compare-bar');
    if (!bar) return;
    document.getElementById('compare-count').textContent = n + ' selected';
    bar.classList.toggle('show', browseState.compareMode && n > 0);
  }
  function openCompareModal() {
    var ids = Object.keys(browseState.compareSet);
    if (ids.length < 2) { toast('Select at least two businesses to compare.'); return; }
    window.VS.store.listBusinesses().then(function (all) {
      var sel = all.filter(function (b) { return browseState.compareSet[b.id]; });
      var rows = [
        ['Business', sel.map(function (b) { return '<strong>' + h(b.name) + '</strong><br><span class="muted small">' + h(b.category) + '</span>'; })],
        ['Rating', sel.map(function (b) { return b.reviewCount ? '★ ' + b.rating.toFixed(1) + ' (' + b.reviewCount + ')' : 'No reviews yet'; })],
        ['Package', sel.map(function (b) { return h(primaryListing(b).title || '—'); })],
        ['Price', sel.map(function (b) {
          var l = primaryListing(b);
          return h(priceLabel(l)) + '<br><span class="muted small">Includes travel · before tax</span>';
        })],
        ['Travel fee', sel.map(function (b) { return b.travelFee ? '$' + b.travelFee : 'Included'; })],
        ['Duration', sel.map(function (b) { return h(primaryListing(b).duration || '—'); })],
        ['Serves ZIPs', sel.map(function (b) { return b.zips.map(h).join(', '); })],
        ['Includes', sel.map(function (b) {
          return '<ul>' + (primaryListing(b).includes || []).map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul>';
        })],
        ['', sel.map(function (b) { return '<a class="btn btn-primary btn-sm" href="#/book/' + h(b.slug || b.id) + '">Send request</a>'; })]
      ];
      var html = '<table class="cmp-table"><tr><th></th>' +
        sel.map(function () { return '<th></th>'; }).join('') + '</tr>' +
        rows.map(function (r) {
          return '<tr><th>' + r[0] + '</th>' + r[1].map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
        }).join('') + '</table>';
      document.getElementById('compare-table-wrap').innerHTML = html;
      document.getElementById('compare-modal').classList.add('show');
    });
  }

  function afterBrowse() {
    document.getElementById('browse-search').addEventListener('submit', function (e) {
      e.preventDefault();
      browseState.q = document.getElementById('b-q').value.trim();
      browseState.zip = document.getElementById('b-zip').value.trim() || '95814';
      runBrowse();
    });
    document.querySelectorAll('[data-cat]').forEach(function (p) {
      p.addEventListener('click', function () {
        browseState.category = p.getAttribute('data-cat');
        document.querySelectorAll('[data-cat]').forEach(function (x) { x.classList.remove('on'); });
        p.classList.add('on');
        runBrowse();
      });
    });
    document.getElementById('more-filters-btn').addEventListener('click', function () {
      document.getElementById('more-filters').classList.toggle('open');
    });
    document.getElementById('b-apply').addEventListener('click', function () {
      browseState.date = document.getElementById('b-date').value;
      browseState.time = document.getElementById('b-time').value;
      browseState.maxBudget = document.getElementById('b-budget').value;
      runBrowse();
      toast('Filters applied.');
    });
    document.getElementById('reset-filters').addEventListener('click', function () {
      browseState = { q: '', zip: '95814', category: '', maxBudget: '', date: '', time: '', compareMode: false, compareSet: {} };
      route(true);
    });
    document.getElementById('compare-toggle').addEventListener('click', function () {
      browseState.compareMode = !browseState.compareMode;
      if (!browseState.compareMode) browseState.compareSet = {};
      route(true);
    });
    document.getElementById('compare-go').addEventListener('click', openCompareModal);
    document.getElementById('compare-close').addEventListener('click', function () {
      document.getElementById('compare-modal').classList.remove('show');
    });
    document.getElementById('compare-modal').addEventListener('click', function (e) {
      if (e.target.id === 'compare-modal') e.target.classList.remove('show');
    });
    runBrowse();
  }

  /* ---------- business detail ---------- */
  function viewBusinessDetail(b) {
    var l = primaryListing(b);
    var reviews = (b.reviews || []).map(function (r) {
      return '<div class="review"><span class="stars">' + '★'.repeat(r.rating) + '</span> ' +
        '<span class="who">' + h(r.customerName) + '</span> <span class="when">' +
        h((r.createdAt || '').slice(0, 10)) + '</span><p>' + h(r.text) + '</p></div>';
    }).join('');
    return '' +
    '<div class="wrap"><div class="detail-hero biz-photo ' + catClass(b.category) + '" style="height:260px">' +
      (b.isSample ? '<span class="sample-badge">Sample listing</span>' : '') +
      '<div style="transform:scale(1.6)">' + catIcon(b.category) + '</div>' +
    '</div></div>' +
    '<div class="wrap"><div class="detail-grid"><div class="detail-main">' +
      '<p class="eyebrow">' + h(b.category) + '</p>' +
      '<h1>' + h(b.name) + '</h1>' +
      starsHTML(b) +
      (b.tagline ? '<p class="lede" style="margin-top:10px">“' + h(b.tagline) + '”</p>' : '') +
      '<p>' + h(b.description) + '</p>' +
      '<div class="detail-sec"><h3>Service coverage</h3><div class="zip-chips">' +
        b.zips.map(function (z) { return '<span class="zip-chip">' + h(z) + ' · ' + h(zipName(z)) + '</span>'; }).join('') +
      '</div>' + (b.travelFee ? '<p class="small muted">Travel fee: $' + h(b.travelFee) + ' outside the core area.</p>' : '<p class="small muted">Travel included in the package price.</p>') + '</div>' +
      '<div class="detail-sec"><h3>What’s included</h3><ul class="check-list">' +
        (l.includes || []).map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="detail-sec"><h3>Before your visit</h3><ul class="check-list">' +
        (l.beforeVisit || []).map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul></div>' +
      (l.cancellation ? '<div class="detail-sec"><h3>Cancellation policy</h3><p class="muted">' + h(l.cancellation) + '</p></div>' : '') +
      '<div class="disclosure"><strong>Good to know.</strong> Van Squad is a directory, not the service provider. We don’t run background checks or verify licenses — review the business’s own credentials, and agree on service and payment terms directly with them before booking.</div>' +
      '<div class="detail-sec" id="reviews"><h3>Customer reviews</h3>' +
        (reviews || '<p class="muted">No reviews yet — be the first after your visit.</p>') +
        '<div id="review-form-wrap" style="margin-top:18px"></div>' +
      '</div>' +
    '</div>' +
    '<aside><div class="price-card">' +
      '<div class="pkg">Service package</div><h3>' + h(l.title || 'Service') + '</h3>' +
      '<div class="price-big">' + h(priceLabel(l)) + '</div>' +
      (l.priceType !== 'quote' ? '<div class="price-note">Includes travel · before tax</div>' : '<div class="price-note">Ask the business for a quote.</div>') +
      '<div class="price-rows">' +
        (l.duration ? '<div class="price-row"><span>Duration</span><strong>' + h(l.duration) + '</strong></div>' : '') +
        '<div class="price-row"><span>Travel fee</span><strong>' + (b.travelFee ? '$' + h(b.travelFee) : 'Included') + '</strong></div>' +
      '</div>' +
      '<div class="match-line">' + ICONS.check + ' Serves ZIP ' + h((b.zips && b.zips[0]) || '') + '</div>' +
      (b.earliestOpening ? '<p class="small muted">Earliest opening: ' + h(b.earliestOpening) + '</p>' : '') +
      '<a class="btn btn-primary btn-block" href="#/book/' + h(b.slug || b.id) + '">Send a request</a>' +
      '<p class="small muted" style="margin-top:12px">No online checkout — you’ll arrange service and payment directly with the business.</p>' +
    '</div></aside></div></div>';
  }

  async function afterBusinessDetail(b) {
    var wrap = document.getElementById('review-form-wrap');
    var user = null;
    try { user = await window.VS.store.currentUser(); } catch (e) {}
    if (user && wrap) {
      wrap.innerHTML = '<div class="form-card" style="padding:22px"><h3 style="margin-top:0">Leave a rating</h3>' +
        '<div class="stars-input" id="stars-input">' +
        [1, 2, 3, 4, 5].map(function (n) { return '<span data-star="' + n + '">★</span>'; }).join('') + '</div>' +
        '<div class="field" style="margin-top:10px"><label>Your review</label><textarea id="review-text" placeholder="How was the visit?"></textarea></div>' +
        '<button class="btn btn-navy btn-sm" id="review-submit" type="button" style="margin-top:10px">Post review</button></div>';
      var rating = 5;
      var stars = wrap.querySelectorAll('[data-star]');
      function paint() { stars.forEach(function (s) { s.classList.toggle('lit', Number(s.getAttribute('data-star')) <= rating); }); }
      stars.forEach(function (s) {
        s.addEventListener('click', function () { rating = Number(s.getAttribute('data-star')); paint(); });
      });
      paint();
      wrap.querySelector('#review-submit').addEventListener('click', async function () {
        var text = wrap.querySelector('#review-text').value.trim();
        if (!text) { toast('Write a few words about your visit.'); return; }
        var l = primaryListing(b);
        await window.VS.store.addReview({ businessId: b.id, listingId: l.id, rating: rating, text: text });
        toast('Thanks — your review is live.');
        route(true);
      });
    } else if (wrap) {
      wrap.innerHTML = '<p class="small"><a class="link-btn" href="#/login">Log in</a> <span class="muted">to leave a review.</span></p>';
    }
  }

  /* ---------- how it works ---------- */
  function viewHow() {
    var steps = D.HOW_STEPS.map(function (s) {
      return '<div class="step"><div class="n">' + s.n + '</div><h3>' + h(s.title) + '</h3><p>' + h(s.text) + '</p></div>';
    }).join('');
    return '' +
    '<section class="section"><div class="wrap">' +
      '<p class="eyebrow">How it works</p>' +
      '<h1>From search to confirmed visit.</h1>' +
      '<p class="lede">Van Squad is a directory of businesses that travel to you. Here is how a request works, step by step.</p>' +
      '<div class="steps four" style="margin-top:30px">' + steps + '</div>' +
      '<div class="disclosure" style="margin-top:34px"><strong>No online checkout.</strong> ' +
      'Online payments are not part of Van Squad. You agree on the service and payment terms directly with the business — the request just starts the conversation.</div>' +
    '</div></section>' +
    '<section class="section band"><div class="wrap">' +
      '<p class="eyebrow">Service guides</p><h2>Find the right service for your job</h2>' +
      guideCardsHTML() +
    '</div></section>';
  }

  /* ---------- service guide article ---------- */
  function viewGuide(g) {
    return '<div class="article">' +
      '<a class="back" href="#/browse?cat=' + encodeURIComponent(g.category) + '">← Back to ' + h(g.category) + '</a>' +
      '<p class="eyebrow">Service guide · ' + h(g.category) + '</p>' +
      '<h1>' + h(g.title) + '</h1>' +
      '<p class="lede">' + h(g.intro) + '</p>' +
      '<h3>' + h(g.compareTitle) + '</h3>' +
      '<ul class="check-list">' + g.compare.map(function (c) { return '<li>' + h(c) + '</li>'; }).join('') + '</ul>' +
      '<div class="detail-sec"><h3>' + h(g.question) + '</h3><p class="muted">' + h(g.answer) + '</p></div>' +
      '<div class="disclosure"><strong>Typical pricing.</strong> ' + h(g.note) + '</div>' +
      '<a class="btn btn-primary" href="#/browse?cat=' + encodeURIComponent(g.category) + '">Explore ' + h(g.category) + ' →</a>' +
    '</div>';
  }

  /* ---------- SEO for blog (title, meta description, structured data) ---------- */  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute('content', content);
  }
  function setMetaProp(prop, content) {
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }
  function setCanonical(href) {
    var el = document.querySelector('link[rel="canonical"]');
    if (el) el.setAttribute('href', href);
  }
  var HOME_SHARE = {
    'og:type': 'website', 'og:title': 'Van Squad — Local services. At your door.',
    'og:description': 'Find local service businesses that come to you. Compare packages, see travel costs upfront, request an appointment.',
    'og:image': 'https://vansquads.com/og-cover.png', 'og:url': 'https://vansquads.com/',
    'twitter:title': 'Van Squad — Local services. At your door.',
    'twitter:description': 'Find local service businesses that come to you.',
    'twitter:image': 'https://vansquads.com/og-cover.png', 'canonical': 'https://vansquads.com/'
  };
  function resetShareTags() {
    setMetaProp('og:type', HOME_SHARE['og:type']);
    setMetaProp('og:title', HOME_SHARE['og:title']);
    setMetaProp('og:description', HOME_SHARE['og:description']);
    setMetaProp('og:image', HOME_SHARE['og:image']);
    setMetaProp('og:url', HOME_SHARE['og:url']);
    setMeta('twitter:title', HOME_SHARE['twitter:title']);
    setMeta('twitter:description', HOME_SHARE['twitter:description']);
    setMeta('twitter:image', HOME_SHARE['twitter:image']);
    var apt = document.querySelector('meta[property="article:published_time"]');
    if (apt) apt.remove();
    setCanonical(HOME_SHARE['canonical']);
  }
  function setJsonLd(id, data) {
    var old = document.getElementById(id);
    if (old) old.remove();
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = id;
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }
  function clearBlogSeo() {
    var old = document.getElementById('vs-blog-jsonld');
    if (old) old.remove();
    resetShareTags();
  }
  function blogSeo(p) {
    var url = 'https://vansquads.com/#/blog/' + p.slug;
    var img = p.images && p.images[0] ? 'https://vansquads.com/' + p.images[0].src : HOME_SHARE['og:image'];
    document.title = p.title + ' — Van Squad';
    setMeta('description', p.metaDescription);
    setMetaProp('og:type', 'article');
    setMetaProp('og:title', p.title + ' — Van Squad');
    setMetaProp('og:description', p.metaDescription);
    setMetaProp('og:image', img);
    setMetaProp('og:url', url);
    setMetaProp('article:published_time', p.date);
    setMeta('twitter:title', p.title + ' — Van Squad');
    setMeta('twitter:description', p.metaDescription);
    setMeta('twitter:image', img);
    setCanonical(url);
    setJsonLd('vs-blog-jsonld', [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': p.title,
        'description': p.metaDescription,
        'datePublished': p.date,
        'dateModified': p.updated || p.date,
        'author': { '@type': 'Organization', 'name': 'Van Squad', 'url': 'https://vansquads.com/' },
        'publisher': { '@type': 'Organization', 'name': 'Van Squad', 'url': 'https://vansquads.com/' },
        'mainEntityOfPage': url
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': p.faq.map(function (f) {
          return { '@type': 'Question', 'name': f.q, 'acceptedAnswer': { '@type': 'Answer', 'text': f.a } };
        })
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://vansquads.com/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://vansquads.com/#/blog' },
          { '@type': 'ListItem', 'position': 3, 'name': p.title, 'item': url }
        ]
      }
    ]);
  }
  function blogListSeo() {
    document.title = 'Blog — Van Squad';
    setMeta('description', 'Straight answers to real customer questions about mobile services: pricing, what to compare, and what to watch for before you book.');
    clearBlogSeo();
  }
  /* ---------- blog dual CTA (customer + business owner) ---------- */
  function postCta() {
    return '<div class="cta-duo">' +
      '<div class="cta-card">' +
        '<p class="eyebrow">For customers</p>' +
        '<h3>Services that come to you</h3>' +
        '<p class="muted">Skip the phone tag. Enter your ZIP to see verified mobile pros near you — upfront prices, real packages, requests sent in minutes.</p>' +
        '<form id="cta-zip-form" class="cta-zip">' +
          '<input id="cta-zip" inputmode="numeric" maxlength="5" placeholder="Your ZIP code" aria-label="Your ZIP code">' +
          '<button class="btn btn-primary" type="submit">Find services →</button>' +
        '</form>' +
        '<p class="fine" id="cta-zip-err" style="display:none;color:#B3261E">Enter a valid 5-digit ZIP code.</p>' +
        '<p class="fine"><a href="#/login">Create a free account</a> to send requests and track appointments.</p>' +
      '</div>' +
      '<div class="cta-card">' +
        '<p class="eyebrow">For business owners</p>' +
        '<h3>Customers are searching for what you do</h3>' +
        '<p class="muted">List your mobile business on Van Squad free. Show up by ZIP, publish your packages with upfront pricing, and get booking requests straight to your inbox. No listing fees, no commissions — you keep every dollar.</p>' +
        '<a class="btn btn-navy" href="#/join">List your business →</a>' +
        '<p class="fine">If you travel to your customers — a van, a car, or your own two feet — you belong here.</p>' +
      '</div>' +
    '</div>';
  }
  function bindPostCta() {
    var form = document.getElementById('cta-zip-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var zip = document.getElementById('cta-zip').value.trim();
      var err = document.getElementById('cta-zip-err');
      if (!/^\d{5}$/.test(zip)) { err.style.display = 'block'; return; }
      err.style.display = 'none';
      location.hash = '#/browse?zip=' + zip;
    });
  }

  function viewBlog() {
    var cards = window.VS_BLOG.POSTS.map(function (p) {
      var thumb = p.images && p.images[0] ? '<img class="post-thumb" src="' + h(p.images[0].src) + '" alt="' + h(p.images[0].alt) + '" loading="lazy">' : '';
      return '<a class="post-card" href="#/blog/' + p.slug + '">' +
        thumb +
        '<div class="post-meta"><span class="cat">' + h(p.category) + '</span> · ' + window.VS_BLOG.fmtDate(p.date) + '</div>' +
        '<h2>' + h(p.title) + '</h2>' +
        '<p>' + h(p.excerpt) + '</p>' +
        '<span class="back" style="color:var(--orange);font-weight:700">Read →</span>' +
      '</a>';
    }).join('');
    return '<div class="blog-list">' +
      '<p class="eyebrow">Van Squad blog</p>' +
      '<h1 style="margin-top:0">Answers, not ads.</h1>' +
      '<p class="lede">Real questions customers ask about mobile services — pricing, what to compare, and what to watch for — answered straight.</p>' +
      cards +
    '</div>';
  }

  function viewPost(p) {
    var faqHtml = p.faq.map(function (f) {
      return '<div class="detail-sec"><h3>' + h(f.q) + '</h3><p class="muted">' + f.a + '</p></div>';
    }).join('');
    var body = String(p.body).replace(/\{\{img:(\d+)\}\}/g, function (m, n) {
      var im = (p.images || [])[Number(n)];
      if (!im) return '';
      return '<figure class="post-figure"><img src="' + h(im.src) + '" alt="' + h(im.alt) + '" loading="lazy">' +
        (im.caption ? '<figcaption>' + h(im.caption) + '</figcaption>' : '') + '</figure>';
    });
    return '<div class="article">' +
      '<a class="back" href="#/blog">← Back to blog</a>' +
      '<p class="eyebrow">' + h(p.category) + ' · ' + window.VS_BLOG.fmtDate(p.date) + ' · ' + h(p.readTime) + '</p>' +
      '<h1>' + h(p.title) + '</h1>' +
      '<div class="tldr"><strong>The short answer.</strong> ' + p.tldr + '</div>' +
      body +
      postCta() +
      '<h3>Frequently asked questions</h3>' +
      faqHtml +
      '<div class="disclosure"><strong>Van Squad is a directory, not the service provider.</strong> Service and payment terms are arranged directly between customer and business owner.</div>' +
    '</div>';
  }

  /* ---------- login gate ---------- */
  function viewGate(next) {
    var nextParam = next ? '?next=' + encodeURIComponent(next) : '';
    return '<div class="wrap"><div class="gate">' +
      '<span class="logo"><svg viewBox="0 0 64 64" width="52" height="52"><rect width="64" height="64" rx="14" fill="#FF6A2B"/><circle cx="32" cy="18" r="7" fill="#fff"/><path d="M18 30 L32 50 L46 30" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
      '<h1>Log in to access Van Squad</h1>' +
      '<p>Sign in to send requests, manage your business, and track appointments.</p>' +
      '<div id="gate-action" style="margin-top:22px"></div>' +
      '<p class="fine">Van Squad uses Google to securely log you in.</p>' +
    '</div></div>';
  }
  function viewLoginPage() { return viewGate(''); }

  async function afterGate(next) {
    var wrap = document.getElementById('gate-action');
    if (window.VS.isSupabase()) {
      wrap.innerHTML = '<button class="btn btn-navy btn-block" id="google-btn" type="button">' +
        '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M21.35 11.1H12v2.9h5.35c-.5 2.4-2.6 3.6-5.35 3.6a5.9 5.9 0 1 1 0-11.8c1.5 0 2.9.6 4 1.5l2-2A8.9 8.9 0 1 0 12 20.9c4.4 0 8.4-3 8.4-8.7 0-.4 0-.8-.05-1.1z"/></svg>' +
        ' Continue with Google</button>';
      document.getElementById('google-btn').addEventListener('click', function () { window.VS.loginWithGoogle(); });
    } else {
      wrap.innerHTML = '<form id="demo-login">' +
        '<div class="field" style="text-align:left"><label>Your name</label><input id="dl-name" placeholder="Alex Morgan" required></div>' +
        '<div class="field" style="text-align:left;margin-top:10px"><label>Email</label><input id="dl-email" type="email" placeholder="you@example.com" required></div>' +
        '<button class="btn btn-navy btn-block" type="submit" style="margin-top:14px">Continue</button>' +
        '<p class="fine">Local preview sign-in — no password needed. Google sign-in activates when the site is connected.</p></form>';
      document.getElementById('demo-login').addEventListener('submit', async function (e) {
        e.preventDefault();
        await window.VS.store.loginLocal(
          document.getElementById('dl-name').value.trim(),
          document.getElementById('dl-email').value.trim());
        toast('Welcome!');
        await renderHeaderAuth();
        location.hash = next || '#/customer';
      });
    }
  }

  /* ---------- join / business signup ---------- */
  function viewJoin() {
    var zipChecks = zipGridHTML(['95814']);
    var catOpts = D.CATEGORIES.filter(function (c) { return c.live; }).map(function (c) {
      return '<option>' + h(c.name) + '</option>';
    }).join('');
    return '' +
    '<section class="section"><div class="wrap">' +
      '<p class="eyebrow">List your business</p>' +
      '<h1>Join the squad.</h1>' +
      '<p class="lede">If you travel to your customers — a van, a car, or your own two feet — you belong here. Create your profile in minutes and start receiving requests.</p>' +
      '<div class="steps" style="margin-bottom:44px">' +
        '<div class="step"><div class="n">01</div><h3>CREATE YOUR PROFILE</h3><p>Tell customers who you are, what you do, and where you go.</p></div>' +
        '<div class="step"><div class="n">02</div><h3>SET AREA &amp; PRICES</h3><p>Pick your ZIPs, travel fee and one clear service package.</p></div>' +
        '<div class="step"><div class="n">03</div><h3>GET REQUESTS</h3><p>Customers send requests to one simple inbox. You confirm the visit.</p></div>' +
      '</div>' +
      '<form class="form-card" id="biz-signup" style="max-width:820px">' +
        '<div class="form-err" id="su-err"></div>' +
        '<div class="form-sec"><h3>Your business</h3><p>The basics customers see first.</p>' +
          '<div class="f-row"><div class="field"><label>Business name <span class="req">*</span></label><input name="name" required placeholder="Shine On Mobile Detailing"></div>' +
          '<div class="field"><label>Category <span class="req">*</span></label><select name="category">' + catOpts + '</select></div></div>' +
          '<div class="f-row single"><div class="field"><label>Tagline</label><input name="tagline" id="su-tagline" maxlength="80" placeholder="A fresh start for your daily drive."><span class="hint">One short line \u2014 what makes you the go-to? <span id="su-tagline-count" class="muted">0/80</span></span></div></div>' +
          '<div class="f-row single"><div class="field"><label>About your business <span class="req">*</span></label><textarea name="description" required placeholder="What do you do, and what is it like to book you?"></textarea></div></div>' +
          '<div class="f-row"><div class="field"><label>Phone <span class="req">*</span></label><input name="phone" required placeholder="(916) 555-0100"><span class="hint">We text a verification code here — your listing goes public after you verify it.</span></div>' +
          '<div class="field"><label>Business email <span class="req">*</span></label><input name="email" type="email" required placeholder="hello@yourbusiness.com"><span class="hint">We send a verification code here — your listing goes public after you verify it.</span></div></div>' +
          '<div class="f-row single"><div class="field"><label>Website (optional)</label><input name="website" placeholder="https://…"></div></div>' +
        '</div>' +
        '<div class="form-sec"><h3>Service area</h3><p>Where do you travel? Customers outside these ZIPs won’t see your listing.</p>' +
          '<div class="zip-grid">' + zipChecks + '</div>' + customZipRowHTML() +
          '<div class="f-row" style="margin-top:14px"><div class="field"><label>Travel radius (miles)</label><input name="travelRadius" type="number" min="0" value="15"></div>' +
          '<div class="field"><label>Travel fee ($) — 0 means included</label><input name="travelFee" type="number" min="0" value="0"></div></div>' +
        '</div>' +
        '<div class="form-sec"><h3>Your service package</h3><p>One clear package to start — you can add more later.</p>' +
          '<div class="f-row"><div class="field"><label>Package title <span class="req">*</span></label><input name="listingTitle" required placeholder="Interior & exterior detail"></div>' +
          '<div class="field"><label>Duration</label><input name="duration" placeholder="2–3 hours"></div></div>' +
          '<div class="f-row"><div class="field"><label>Price ($) <span class="req">*</span></label><input name="price" type="number" min="0" placeholder="149"><span class="hint">Leave blank for “quote required”.</span></div>' +
          '<div class="field"><label>Price type</label><div class="radio-row" style="margin-top:6px">' +
            '<label class="radio-pill on"><input type="radio" name="priceType" value="fixed" checked> Fixed</label>' +
            '<label class="radio-pill"><input type="radio" name="priceType" value="estimate"> Estimate</label>' +
            '<label class="radio-pill"><input type="radio" name="priceType" value="quote"> Quote</label>' +
          '</div></div></div>' +
          '<div class="f-row single"><div class="field"><label>What’s included <span class="req">*</span></label><textarea name="includes" required placeholder="One item per line, e.g.&#10;Exterior hand wash & wheel cleaning&#10;Interior vacuum & surfaces"></textarea></div></div>' +
          '<div class="f-row single"><div class="field"><label>Before your visit</label><textarea name="beforeVisit" placeholder="One item per line, e.g.&#10;A safe parking space and vehicle access"></textarea><span class="hint">Anything the customer should prepare.</span></div></div>' +
          '<div class="f-row single"><div class="field"><label>Cancellation policy</label><input name="cancellation" placeholder="Please give 24 hours notice to avoid a $25 late fee."></div></div>' +
        '</div>' +
        '<div class="form-sec"><h3>Your account</h3><p>This is how you’ll log in to manage requests.</p>' +
          '<div class="f-row"><div class="field"><label>Your name <span class="req">*</span></label><input name="ownerName" required placeholder="Alex Morgan"></div>' +
          '<div class="field"><label>Login email <span class="req">*</span></label><input name="ownerEmail" type="email" required placeholder="you@example.com"></div></div>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" type="submit" id="su-submit">Create my business listing →</button>' +
        '<p class="small muted" style="margin-top:12px">No fees to list. No online payments — you arrange service and payment terms directly with each customer.</p>' +
      '</form>' +
    '</div></section>';
  }

  function lines(v) {
    return String(v || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
  }

  async function afterJoin() {
    var joinForm = document.getElementById('biz-signup');
    if (joinForm) bindCustomZips(joinForm);
    var tagline = document.getElementById('su-tagline');
    var tagCount = document.getElementById('su-tagline-count');
    if (tagline && tagCount) {
      var updTag = function () { tagCount.textContent = tagline.value.length + '/80'; };
      tagline.addEventListener('input', updTag); updTag();
    }
    document.querySelectorAll('.radio-pill input').forEach(function (r) {
      r.addEventListener('change', function () {
        document.querySelectorAll('.radio-pill').forEach(function (p) { p.classList.remove('on'); });
        r.closest('.radio-pill').classList.add('on');
      });
    });
    var form = document.getElementById('biz-signup');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      var err = document.getElementById('su-err');
      err.style.display = 'none';
      var me = null;
      try { me = await window.VS.store.currentUser(); } catch (ign) { me = null; }
      if (!me && window.VS.isSupabase()) {
        err.innerHTML = 'Please <a href="#/login">log in with Google</a> first \u2014 your listing will be saved to your account.';
        err.style.display = 'block'; err.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      var fd = new FormData(form);
      var zips = [];
      form.querySelectorAll('input[name="zips"]:checked').forEach(function (c) { zips.push(c.value); });
      if (!zips.length) {
        err.textContent = 'Pick at least one ZIP code in your service area.';
        err.style.display = 'block'; err.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      var digits = String(fd.get('phone') || '').replace(/\D/g, '');
      if (digits.length < 7) {
        err.textContent = 'Please enter a valid phone number with at least 7 digits.';
        err.style.display = 'block'; err.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      var btn = document.getElementById('su-submit');
      btn.disabled = true; btn.textContent = 'Creating your listing…';
      try {
        var biz = await window.VS.store.signupBusiness({
          ownerName: fd.get('ownerName'), ownerEmail: fd.get('ownerEmail'),
          name: fd.get('name'), category: fd.get('category'), tagline: fd.get('tagline'),
          description: fd.get('description'), phone: fd.get('phone'),
          email: fd.get('email'), website: fd.get('website'),
          zips: zips, travelFee: fd.get('travelFee'), travelRadius: fd.get('travelRadius'),
          listingTitle: fd.get('listingTitle'), price: fd.get('price'), priceType: fd.get('priceType'),
          duration: fd.get('duration'), includes: lines(fd.get('includes')),
          beforeVisit: lines(fd.get('beforeVisit')), cancellation: fd.get('cancellation')
        });
        await renderHeaderAuth();
        if (biz.emailVerified) {
          toast('Your listing is live!');
          location.hash = '#/dashboard';
        } else {
          try { sessionStorage.setItem('vs_verify_biz', JSON.stringify({ id: biz.id, email: biz.email, phone: biz.phone, name: biz.name, phoneVerified: !!biz.phoneVerified })); } catch (e) {}
          location.hash = '#/verify-email';
        }
      } catch (ex) {
        err.textContent = 'Something went wrong creating your listing. Please try again.';
        err.style.display = 'block';
        btn.disabled = false; btn.textContent = 'Create my business listing →';
      }
    });
  }

  /* ---------- email verification ---------- */
  function viewVerifyEmail(pv) {
    return '<div class="wrap"><div class="article" style="padding-top:48px;max-width:560px">' +
      '<p class="eyebrow">One last step</p><h1>Check your email.</h1>' +
      '<p class="muted">We sent a 6-digit verification code to <strong>' + h(pv.email) + '</strong>. ' +
      'Enter it below — your listing goes public as soon as your email is verified.</p>' +
      '<div class="form-card"><div class="form-err" id="vf-err" style="display:none"></div>' +
      '<div class="field"><label>Verification code</label>' +
      '<input id="vf-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="••••••" ' +
      'style="font-size:24px;letter-spacing:8px;text-align:center"></div>' +
      '<button class="btn btn-primary btn-block" id="vf-submit" style="margin-top:14px">Verify my email →</button>' +
      '<p class="small" style="margin-top:12px;text-align:center"><span class="muted">Didn\'t get it?</span> ' +
      '<a href="#" id="vf-resend">Resend code</a> <span id="vf-cool" class="muted"></span></p></div></div></div>';
  }

  async function afterVerifyEmail(pv) {
    var err = document.getElementById('vf-err');
    function showErr(m) { err.textContent = m; err.style.display = m ? 'block' : 'none'; }
    var coolUntil = 0, coolTimer = null;
    function cooldown(sec) {
      coolUntil = Date.now() + sec * 1000;
      var cool = document.getElementById('vf-cool');
      clearInterval(coolTimer);
      coolTimer = setInterval(function () {
        var left = Math.ceil((coolUntil - Date.now()) / 1000);
        if (left <= 0) { clearInterval(coolTimer); cool.textContent = ''; }
        else { cool.textContent = '(wait ' + left + 's)'; }
      }, 500);
    }
    async function send() {
      showErr('');
      try {
        var r = await window.VS.store.requestEmailCode(pv.id);
        if (r && r.alreadyVerified) { location.hash = '#/dashboard'; return true; }
        toast('Code sent to ' + pv.email);
        cooldown(60);
        return true;
      } catch (e) {
        showErr(e && e.code === 'cooldown' ? 'Please wait a minute before requesting a new code.'
          : 'Could not send the code. Check your connection and try again.');
        return false;
      }
    }
    // Auto-send only once per session: re-rendering this page must not silently
    // invalidate a code the user already received by email.
    var sentKey = 'vs_code_sent_' + pv.id, wasSent = false;
    try { wasSent = !!sessionStorage.getItem(sentKey); } catch (e) {}
    if (!wasSent && await send()) { try { sessionStorage.setItem(sentKey, '1'); } catch (e) {} }
    document.getElementById('vf-resend').addEventListener('click', function (e) {
      e.preventDefault();
      if (Date.now() < coolUntil) return;
      send();
    });
    document.getElementById('vf-submit').addEventListener('click', async function () {
      var code = document.getElementById('vf-code').value.trim();
      showErr('');
      if (!/^\d{6}$/.test(code)) { showErr('Enter the 6-digit code from the email.'); return; }
      var btn = document.getElementById('vf-submit');
      btn.disabled = true; btn.textContent = 'Verifying…';
      try {
        var r = await window.VS.store.verifyEmailCode(pv.id, code);
        if (r && r.verified) {
          var pv2 = null;
          try { pv2 = JSON.parse(sessionStorage.getItem('vs_verify_biz') || 'null'); } catch (e) {}
          var needPhone = !pv2 || !pv2.phoneVerified;
          try { sessionStorage.removeItem('vs_verify_biz'); sessionStorage.removeItem('vs_code_sent_' + pv.id); } catch (e) {}
          if (needPhone) {
            try { sessionStorage.setItem('vs_verify_biz', JSON.stringify({ id: pv.id, phone: (pv2 && pv2.phone) || '', name: pv.name, phoneVerified: false })); } catch (e2) {}
            toast('Email verified — now verify your phone.');
            location.hash = '#/verify-phone';
          } else {
            toast('Email verified — your listing is live!');
            location.hash = '#/dashboard';
          }
        } else { throw new Error('verify-failed'); }
      } catch (e) {
        var m = 'That code didn\'t work. Try again.';
        if (e && e.code === 'expired') m = 'That code expired. Tap "Resend code" for a fresh one.';
        else if (e && e.code === 'too-many-attempts') m = 'Too many tries — tap "Resend code" for a fresh one.';
        else if (e && e.code === 'invalid-code') m = 'Wrong code — ' + (e.attemptsLeft > 0 ? e.attemptsLeft + ' tries left.' : 'no tries left, resend for a fresh code.');
        else if (e && e.code === 'no-code') m = 'No active code. Tap "Resend code" below.';
        showErr(m);
        btn.disabled = false; btn.textContent = 'Verify my email →';
      }
    });
  }

  /* ---------- phone verification ---------- */
  function viewVerifyPhone(pv) {
    return '<div class="wrap"><div class="article" style="padding-top:48px;max-width:560px">' +
      '<p class="eyebrow">One last step</p><h1>Check your texts.</h1>' +
      '<p class="muted">We texted a 6-digit verification code to <strong>' + h(pv.phone) + '</strong>. ' +
      'Enter it below — your listing goes public as soon as your phone is verified.</p>' +
      '<div class="form-card"><div class="form-err" id="vp-err" style="display:none"></div>' +
      '<div class="field"><label>Verification code</label>' +
      '<input id="vp-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="••••••" ' +
      'style="font-size:24px;letter-spacing:8px;text-align:center"></div>' +
      '<button class="btn btn-primary btn-block" id="vp-submit" style="margin-top:14px">Verify my phone →</button>' +
      '<p class="small" style="margin-top:12px;text-align:center"><span class="muted">Didn\'t get it?</span> ' +
      '<a href="#" id="vp-resend">Resend code</a> <span id="vp-cool" class="muted"></span></p></div></div></div>';
  }

  async function afterVerifyPhone(pv) {
    var err = document.getElementById('vp-err');
    function showErr(m) { err.textContent = m; err.style.display = m ? 'block' : 'none'; }
    var coolUntil = 0, coolTimer = null;
    function cooldown(sec) {
      coolUntil = Date.now() + sec * 1000;
      var cool = document.getElementById('vp-cool');
      clearInterval(coolTimer);
      coolTimer = setInterval(function () {
        var left = Math.ceil((coolUntil - Date.now()) / 1000);
        if (left <= 0) { clearInterval(coolTimer); cool.textContent = ''; }
        else { cool.textContent = '(wait ' + left + 's)'; }
      }, 500);
    }
    async function send() {
      showErr('');
      try {
        var r = await window.VS.store.requestPhoneCode(pv.id);
        if (r && r.alreadyVerified) { location.hash = '#/dashboard'; return true; }
        toast('Code sent to ' + pv.phone);
        cooldown(60);
        return true;
      } catch (e) {
        showErr(e && e.code === 'invalid-phone' ? 'That phone number looks invalid. Go back to the dashboard and fix it.'
          : 'Could not send the code. Check your connection and try again.');
        return false;
      }
    }
    // Auto-send only once per session: re-rendering this page must not silently
    // invalidate a code already texted (Twilio Verify replaces the pending code).
    var sentKey = 'vs_pcode_sent_' + pv.id, wasSent = false;
    try { wasSent = !!sessionStorage.getItem(sentKey); } catch (e) {}
    if (!wasSent && await send()) { try { sessionStorage.setItem(sentKey, '1'); } catch (e) {} }
    document.getElementById('vp-resend').addEventListener('click', function (e) {
      e.preventDefault();
      if (Date.now() < coolUntil) return;
      send();
    });
    document.getElementById('vp-submit').addEventListener('click', async function () {
      var code = document.getElementById('vp-code').value.trim();
      showErr('');
      if (!/^\d{6}$/.test(code)) { showErr('Enter the 6-digit code from the text.'); return; }
      var btn = document.getElementById('vp-submit');
      btn.disabled = true; btn.textContent = 'Verifying…';
      try {
        var r = await window.VS.store.verifyPhoneCode(pv.id, code);
        if (r && r.verified) {
          try { sessionStorage.removeItem('vs_verify_biz'); sessionStorage.removeItem('vs_pcode_sent_' + pv.id); } catch (e) {}
          toast('Phone verified — your listing is live!');
          location.hash = '#/dashboard';
        } else { throw new Error('verify-failed'); }
      } catch (e) {
        var m = 'That code didn\'t work. Try again.';
        if (e && e.code === 'expired') m = 'That code expired. Tap "Resend code" for a fresh one.';
        else if (e && e.code === 'no-code') m = 'No active code. Tap "Resend code" below.';
        else if (e && e.code === 'invalid-code') m = 'Wrong code — tap "Resend code" for a fresh one if needed.';
        showErr(m);
        btn.disabled = false; btn.textContent = 'Verify my phone →';
      }
    });
  }

  /* ---------- book / request flow ---------- */
  function viewBook(b) {
    var l = primaryListing(b);
    return '<div class="wrap"><div class="article" style="padding-top:40px">' +
      '<a class="back" href="#/business/' + h(b.slug || b.id) + '">← Back to ' + h(b.name) + '</a>' +
      '<p class="eyebrow">Send a request</p>' +
      '<h1>Tell them what you need.</h1>' +
      '<div class="req-card"><div class="req-top"><div><h3>' + h(b.name) + '</h3>' +
        '<div class="muted small">' + h(l.title || '') + ' · ' + h(priceLabel(l)) + ' · Includes travel · before tax</div></div></div></div>' +
      '<form class="form-card" id="book-form">' +
        '<div class="form-err" id="bk-err"></div>' +
        '<div class="f-row single"><div class="field"><label>What do you need? <span class="req">*</span></label>' +
          '<textarea name="message" required placeholder="Tell the business about the job — e.g. 4-door sedan, two kids, one dog. Needs a full interior detail before the weekend."></textarea></div></div>' +
        '<div class="f-row"><div class="field"><label>Service ZIP code <span class="req">*</span></label>' +
          '<input name="zip" required maxlength="5" inputmode="numeric" value="' + h(b.zips[0] || '95814') + '"></div>' +
          '<div class="field"><label>Preferred date &amp; time</label><input name="preferredTime" placeholder="e.g. Sat morning, or Oct 4 after 2pm"></div></div>' +
        '<div class="f-row single"><div class="field"><label>Photos <span class="muted">(optional, up to 5)</span></label>' +
          '<input type="file" id="bk-photos" accept="image/*" multiple>' +
          '<span class="hint">A photo of the car, the room, or your pet helps the business quote accurately.</span>' +
          '<div class="req-photos" id="bk-preview"></div></div></div>' +
        '<button class="btn btn-primary btn-block" type="submit" id="bk-submit">Send request →</button>' +
        '<p class="small muted" style="margin-top:12px">No online checkout — you’ll arrange service and payment terms directly with the business. They must confirm your appointment before it’s booked.</p>' +
      '</form></div></div>';
  }

  function readPhotos(input, max) {
    var files = Array.prototype.slice.call(input.files || []).slice(0, max || 5);
    return Promise.all(files.map(function (f) {
      return new Promise(function (resolve) {
        var r = new FileReader();
        r.onload = function () { resolve(r.result); };
        r.onerror = function () { resolve(null); };
        r.readAsDataURL(f);
      });
    })).then(function (arr) { return arr.filter(Boolean); });
  }

  async function afterBook(b) {
    var l = primaryListing(b);
    var input = document.getElementById('bk-photos');
    var prev = document.getElementById('bk-preview');
    input.addEventListener('change', async function () {
      var photos = await readPhotos(input, 5);
      prev.innerHTML = photos.map(function (p) { return '<img src="' + p + '" alt="Upload preview">'; }).join('');
      prev._photos = photos;
      if (input.files.length > 5) toast('Only the first 5 photos will be sent.');
    });
    document.getElementById('book-form').addEventListener('submit', async function (e) {
      e.preventDefault();
      var err = document.getElementById('bk-err');
      err.style.display = 'none';
      var fd = new FormData(e.target);
      var msg = String(fd.get('message') || '').trim();
      var zip = String(fd.get('zip') || '').trim();
      if (!msg) { err.textContent = 'Tell the business what you need first.'; err.style.display = 'block'; return; }
      if (!/^\d{5}$/.test(zip)) { err.textContent = 'Enter a valid 5-digit ZIP code.'; err.style.display = 'block'; return; }
      if (b.zips.indexOf(zip) < 0) {
        err.textContent = h(b.name) + ' doesn’t serve ZIP ' + h(zip) + ' yet. They serve: ' + b.zips.join(', ') + '.';
        err.style.display = 'block'; return;
      }
      var btn = document.getElementById('bk-submit');
      btn.disabled = true; btn.textContent = 'Sending…';
      try {
        var photos = prev._photos || await readPhotos(input, 5);
        await window.VS.store.createRequest({
          listingId: l.id, businessId: b.id, message: msg, zip: zip,
          preferredTime: String(fd.get('preferredTime') || '').trim(), photos: photos
        });
        document.querySelector('#app .article').innerHTML =
          '<p class="eyebrow">Request sent</p><h1>You’re on their list.</h1>' +
          '<p class="lede">Your request is with ' + h(b.name) + '. They’ll review your details and confirm a time — nothing is booked until they do.</p>' +
          '<div class="req-card"><div class="req-top"><h3>What happens next</h3><span class="status pending">Waiting for business</span></div>' +
          '<p class="muted">Watch your inbox here under <a class="link-btn" href="#/customer">My account</a>. No payment is due until you agree terms with the business directly.</p></div>' +
          '<a class="btn btn-outline" href="#/browse">Keep exploring</a>';
        window.scrollTo(0, 0);
      } catch (ex) {
        err.textContent = 'Could not send the request. Please try again.';
        err.style.display = 'block';
        btn.disabled = false; btn.textContent = 'Send request →';
      }
    });
  }

  /* ---------- customer dashboard ---------- */
  var STATUS_LABEL = { pending: 'Waiting for business', question: 'Question from business', quoted: 'Quote received', agreed: 'Visit agreed', completed: 'Completed', cancelled: 'Cancelled' };

  function viewCustomer(user) {
    return '<div class="wrap">' +
      '<div class="dash-head"><div><p class="eyebrow">My account</p><h1 style="margin:0">Welcome back, ' + h(user.name) + '.</h1></div></div>' +
      '<div class="tabs"><button class="tab on" data-tab="reqs" type="button">My requests</button>' +
      '<button class="tab" data-tab="profile" type="button">My profile</button></div>' +
      '<div id="cust-reqs"></div>' +
      '<div id="cust-profile" style="display:none"><div class="form-card" style="max-width:640px">' +
        '<div class="f-row"><div class="field"><label>Name</label><input id="pf-name" value="' + h(user.name || '') + '"></div>' +
        '<div class="field"><label>Home ZIP</label><input id="pf-zip" maxlength="5" value="' + h(user.homeZip || '') + '"></div></div>' +
        '<div class="field"><label>Email</label><input value="' + h(user.email || '') + '" disabled></div>' +
        '<button class="btn btn-navy" id="pf-save" type="button" style="margin-top:14px">Save profile</button>' +
      '</div></div>' +
    '</div>';
  }

  async function afterCustomer(user) {
    document.querySelectorAll('[data-tab]').forEach(function (t) {
      t.addEventListener('click', function () {
        document.querySelectorAll('[data-tab]').forEach(function (x) { x.classList.remove('on'); });
        t.classList.add('on');
        var reqs = t.getAttribute('data-tab') === 'reqs';
        document.getElementById('cust-reqs').style.display = reqs ? '' : 'none';
        document.getElementById('cust-profile').style.display = reqs ? 'none' : '';
      });
    });
    document.getElementById('pf-save').addEventListener('click', async function () {
      await window.VS.store.updateProfile({
        name: document.getElementById('pf-name').value.trim(),
        homeZip: document.getElementById('pf-zip').value.trim()
      });
      toast('Profile saved.'); renderHeaderAuth();
    });
    var wrap = document.getElementById('cust-reqs');
    wrap.innerHTML = '<div class="empty">Loading your requests…</div>';
    var reqs = await window.VS.store.myRequests();
    var bizById = {};
    try {
      var all = await window.VS.store.listBusinesses();
      all.forEach(function (b) { bizById[b.id] = b; });
    } catch (e) {}
    if (!reqs.length) {
      wrap.innerHTML = '<div class="empty"><h3 style="margin-top:0">No requests yet.</h3><p>Find a business that comes to you and send your first request.</p><a class="btn btn-primary" href="#/browse">Explore services</a></div>';
      return;
    }
    wrap.innerHTML = reqs.map(function (r) {
      var b = bizById[r.businessId] || bizById[r.business_id] || {};
      var bname = b.name || (r.businesses && r.businesses.name) || 'Business';
      var st = r.status || 'pending';
      var photos = (r.photos || r.photo_urls || []).map(function (p) { return '<img src="' + p + '" alt="Request photo">'; }).join('');
      return '<div class="req-card" data-req="' + h(r.id) + '"><div class="req-top"><div><h3>' + h(bname) + '</h3>' +
        '<div class="muted small">Sent ' + h((r.createdAt || r.created_at || '').slice(0, 10)) + ' · ZIP ' + h(r.zip) +
        (r.preferredTime || r.preferred_time ? ' · Prefers: ' + h(r.preferredTime || r.preferred_time) : '') + '</div></div>' +
        '<span class="status ' + st + '">' + h(STATUS_LABEL[st] || st) + '</span></div>' +
        '<div class="req-msg">' + h(r.message) + '</div>' +
        (photos ? '<div class="req-photos">' + photos + '</div>' : '') +
        ((r.businessNote || r.business_note) ? '<div class="req-note"><strong>From the business:</strong><br>' + h(r.businessNote || r.business_note) + '</div>' : '') +
        (st === 'completed'
          ? '<div style="margin-top:10px"><a class="btn btn-outline btn-sm" href="#/business/' + h(b.slug || b.id || '') + '#reviews">Leave a rating</a></div>'
          : (st === 'pending' || st === 'question' || st === 'quoted'
            ? '<div class="inline-form"><input placeholder="Send a follow-up message…" data-follow="' + h(r.id) + '">' +
              '<button class="btn btn-navy btn-sm" data-send-follow="' + h(r.id) + '" type="button">Send</button></div>'
            : '')) +
      '</div>';
    }).join('');
    wrap.querySelectorAll('[data-send-follow]').forEach(function (btn) {
      btn.addEventListener('click', async function () {
        var id = btn.getAttribute('data-send-follow');
        var inp = wrap.querySelector('[data-follow="' + id + '"]');
        var msg = inp.value.trim();
        if (!msg) return;
        await window.VS.store.updateRequest(id, { customerMessage: msg });
        toast('Message sent.'); route(true);
      });
    });
  }

  /* ---------- business dashboard ---------- */
  function viewBizDash(bizList, activeId) {
    var active = null;
    for (var i = 0; i < bizList.length; i++) { if (bizList[i].id === activeId) active = bizList[i]; }
    var tabs = bizList.length > 1
      ? '<div class="filter-row" style="margin-top:0">' + bizList.map(function (b) {
          return '<button type="button" class="pill' + (b.id === activeId ? ' on' : '') + '" data-switch-biz="' + h(b.id) + '">' + h(b.name) + '</button>';
        }).join('') + '</div>' : '';
    var verifyBanner = '';
    if (active && !active.emailVerified) {
      verifyBanner = '<div class="verify-banner"><div><strong>Verify your email to go public.</strong>' +
        '<div class="small muted">Your listing is hidden until you confirm ' + h(active.email || 'your business email') + '.</div></div>' +
        '<button class="btn btn-primary btn-sm" id="dash-verify-btn" type="button">Verify email</button></div>';
    } else if (active && !active.phoneVerified) {
      verifyBanner = '<div class="verify-banner"><div><strong>Verify your phone to go public.</strong>' +
        '<div class="small muted">Your listing is hidden until you confirm the code we text to ' + h(active.phone || 'your business phone') + '.</div></div>' +
        '<button class="btn btn-primary btn-sm" id="dash-verify-phone-btn" type="button">Verify phone</button></div>';
    }
    return '<div class="wrap">' +
      '<div class="dash-head"><div><p class="eyebrow">Business dashboard</p>' +
      '<h1 style="margin:0" id="dash-biz-name"></h1></div>' +
      '<a class="btn btn-outline btn-sm" href="#/workspace">Provider workspace →</a></div>' +
      tabs + verifyBanner +
      '<div class="tabs"><button class="tab on" data-tab="inbox" type="button">Inbox</button>' +
      '<button class="tab" data-tab="manage" type="button">Manage business</button></div>' +
      '<div id="dash-inbox"></div><div id="dash-manage" style="display:none"></div>' +
    '</div>';
  }

  async function afterBizDash(bizList, active) {
    document.getElementById('dash-biz-name').textContent = active.name;
    var dvb = document.getElementById('dash-verify-btn');
    if (dvb) dvb.addEventListener('click', function () {
      try { sessionStorage.setItem('vs_verify_biz', JSON.stringify({ id: active.id, email: active.email, phone: active.phone, name: active.name, phoneVerified: !!active.phoneVerified })); } catch (e) {}
      location.hash = '#/verify-email';
    });
    var dvpb = document.getElementById('dash-verify-phone-btn');
    if (dvpb) dvpb.addEventListener('click', function () {
      try { sessionStorage.setItem('vs_verify_biz', JSON.stringify({ id: active.id, phone: active.phone, name: active.name, phoneVerified: false })); } catch (e) {}
      location.hash = '#/verify-phone';
    });
    document.querySelectorAll('[data-switch-biz]').forEach(function (b) {
      b.addEventListener('click', function () {
        sessionStorage.setItem('vs_active_biz', b.getAttribute('data-switch-biz'));
        route(true);
      });
    });
    document.querySelectorAll('[data-tab]').forEach(function (t) {
      t.addEventListener('click', function () {
        document.querySelectorAll('[data-tab]').forEach(function (x) { x.classList.remove('on'); });
        t.classList.add('on');
        var inbox = t.getAttribute('data-tab') === 'inbox';
        document.getElementById('dash-inbox').style.display = inbox ? '' : 'none';
        document.getElementById('dash-manage').style.display = inbox ? 'none' : '';
      });
    });
    /* inbox */
    var inbox = document.getElementById('dash-inbox');
    inbox.innerHTML = '<div class="empty">Loading inbox…</div>';
    var reqs = await window.VS.store.businessRequests(active.id);
    if (!reqs.length) {
      inbox.innerHTML = '<div class="empty"><h3 style="margin-top:0">No requests yet.</h3><p>When customers send requests, they’ll land here. Share your listing link to get the word out.</p></div>';
    } else {
      inbox.innerHTML = reqs.map(function (r) {
        var st = r.status || 'pending';
        var photos = (r.photos || r.photo_urls || []).map(function (p) { return '<img src="' + p + '" alt="Request photo">'; }).join('');
        return '<div class="req-card"><div class="req-top"><div><h3>' + h(r.customerName || r.customer_name || 'Customer') + '</h3>' +
          '<div class="muted small">Sent ' + h((r.createdAt || r.created_at || '').slice(0, 10)) + ' · Service ZIP ' + h(r.zip) +
          (r.preferredTime || r.preferred_time ? ' · Prefers: ' + h(r.preferredTime || r.preferred_time) : '') + '</div></div>' +
          '<span class="status ' + st + '">' + h(STATUS_LABEL[st] || st) + '</span></div>' +
          '<div class="req-msg">' + h(r.message) + '</div>' +
          (photos ? '<div class="req-photos">' + photos + '</div>' : '') +
          ((r.businessNote || r.business_note) ? '<div class="req-note"><strong>Your reply:</strong><br>' + h(r.businessNote || r.business_note) + '</div>' : '') +
          '<div class="req-actions">' +
            '<button class="btn btn-outline btn-sm" data-act="question" data-id="' + h(r.id) + '" type="button">Ask a question</button>' +
            '<button class="btn btn-outline btn-sm" data-act="quoted" data-id="' + h(r.id) + '" type="button">Send a quote</button>' +
            '<button class="btn btn-outline btn-sm" data-act="suggest" data-id="' + h(r.id) + '" type="button">Suggest a time</button>' +
            '<button class="btn btn-navy btn-sm" data-act="agreed" data-id="' + h(r.id) + '" type="button">Mark visit agreed</button>' +
            '<button class="btn btn-ghost btn-sm" data-act="completed" data-id="' + h(r.id) + '" type="button">Mark completed</button>' +
          '</div>' +
          '<div class="inline-form" data-note-form="' + h(r.id) + '" style="display:none">' +
            '<input placeholder="Write your reply to the customer…" data-note-input="' + h(r.id) + '">' +
            '<button class="btn btn-primary btn-sm" data-note-send="' + h(r.id) + '" type="button">Send reply</button></div>' +
        '</div>';
      }).join('');
      var pendingAct = {};
      inbox.querySelectorAll('[data-act]').forEach(function (btn) {
        btn.addEventListener('click', async function () {
          var id = btn.getAttribute('data-act');
          var rid = btn.getAttribute('data-id');
          if (id === 'agreed' || id === 'completed') {
            await window.VS.store.updateRequest(rid, { status: id });
            toast(id === 'agreed' ? 'Visit marked as agreed.' : 'Marked completed.');
            route(true); return;
          }
          pendingAct[rid] = id;
          inbox.querySelectorAll('[data-note-form]').forEach(function (f) { f.style.display = 'none'; });
          var f = inbox.querySelector('[data-note-form="' + rid + '"]');
          f.style.display = 'flex';
          f.querySelector('input').focus();
        });
      });
      inbox.querySelectorAll('[data-note-send]').forEach(function (btn) {
        btn.addEventListener('click', async function () {
          var rid = btn.getAttribute('data-note-send');
          var msg = inbox.querySelector('[data-note-input="' + rid + '"]').value.trim();
          if (!msg) { toast('Write your reply first.'); return; }
          var act = pendingAct[rid] || 'question';
          var status = act === 'quoted' ? 'quoted' : act === 'suggest' ? 'agreed' : 'question';
          await window.VS.store.updateRequest(rid, { status: status, businessNote: msg });
          toast('Reply sent to the customer.');
          route(true);
        });
      });
    }
    /* manage */
    var l = primaryListing(active);
    var manage = document.getElementById('dash-manage');
    manage.innerHTML = '<form class="form-card" id="biz-edit" style="max-width:820px">' +
      '<div class="form-sec"><h3>Business profile</h3>' +
      '<div class="f-row"><div class="field"><label>Business name</label><input name="name" value="' + h(active.name) + '"></div>' +
      '<div class="field"><label>Phone</label><input name="phone" value="' + h(active.phone || '') + '"></div></div>' +
      '<div class="f-row single"><div class="field"><label>Tagline</label><input name="tagline" value="' + h(active.tagline || '') + '"></div></div>' +
      '<div class="f-row single"><div class="field"><label>About</label><textarea name="description">' + h(active.description || '') + '</textarea></div></div>' +
      '<div class="f-row"><div class="field"><label>Business email</label><input name="email" value="' + h(active.email || '') + '"></div>' +
      '<div class="field"><label>Website</label><input name="website" value="' + h(active.website || '') + '"></div></div></div>' +
      '<div class="form-sec"><h3>Service area & pricing</h3>' +
      '<div class="zip-grid">' + zipGridHTML(active.zips) + '</div>' + customZipRowHTML() +
      '<div class="f-row" style="margin-top:14px"><div class="field"><label>Travel fee ($)</label><input name="travelFee" type="number" min="0" value="' + h(active.travelFee || 0) + '"></div>' +
      '<div class="field"><label>Travel radius (miles)</label><input name="travelRadius" type="number" min="0" value="' + h(active.travelRadius || 0) + '"></div></div></div>' +
      '<div class="form-sec"><h3>Service package</h3>' +
      '<div class="f-row"><div class="field"><label>Package title</label><input name="listingTitle" value="' + h(l.title || '') + '"></div>' +
      '<div class="field"><label>Duration</label><input name="duration" value="' + h(l.duration || '') + '"></div></div>' +
      '<div class="f-row"><div class="field"><label>Price ($)</label><input name="price" type="number" min="0" value="' + (l.price === null || l.price === undefined ? '' : h(l.price)) + '"><span class="hint">Blank = quote required.</span></div>' +
      '<div class="field"><label>Price type</label><select name="priceType">' +
        ['fixed', 'estimate', 'quote'].map(function (t) {
          return '<option value="' + t + '"' + (l.priceType === t ? ' selected' : '') + '>' + t.charAt(0).toUpperCase() + t.slice(1) + '</option>';
        }).join('') + '</select></div></div>' +
      '<div class="f-row single"><div class="field"><label>What’s included (one per line)</label><textarea name="includes">' + h((l.includes || []).join('\n')) + '</textarea></div></div>' +
      '<div class="f-row single"><div class="field"><label>Before your visit (one per line)</label><textarea name="beforeVisit">' + h((l.beforeVisit || []).join('\n')) + '</textarea></div></div>' +
      '<div class="f-row single"><div class="field"><label>Cancellation policy</label><input name="cancellation" value="' + h(l.cancellation || '') + '"></div></div></div>' +
      '<button class="btn btn-primary" type="submit">Save changes</button> ' +
      '<a class="btn btn-outline" href="#/business/' + h(active.slug || active.id) + '">View public listing</a></form>';
    bindCustomZips(manage);
    document.getElementById('biz-edit').addEventListener('submit', async function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var zips = [];
      e.target.querySelectorAll('input[name="zips"]:checked').forEach(function (c) { zips.push(c.value); });
      var price = fd.get('price');
      var newEmail = String(fd.get('email') || '').trim();
      var emailChanged = newEmail && newEmail !== String(active.email || '').trim();
      var newPhone = String(fd.get('phone') || '').trim();
      var phoneChanged = newPhone && newPhone !== String(active.phone || '').trim();
      await window.VS.store.updateBusiness(active.id, {
        name: fd.get('name'), tagline: fd.get('tagline'), description: fd.get('description'),
        phone: fd.get('phone'), email: fd.get('email'), website: fd.get('website'),
        emailVerified: emailChanged ? false : undefined,
        phoneVerified: phoneChanged ? false : undefined,
        zips: zips, travelFee: Number(fd.get('travelFee')) || 0, travelRadius: Number(fd.get('travelRadius')) || 0,
        listing: { id: l.id, title: fd.get('listingTitle'), duration: fd.get('duration'),
          price: (price === '' || price === null) ? null : Number(price),
          priceType: fd.get('priceType'), includes: lines(fd.get('includes')),
          beforeVisit: lines(fd.get('beforeVisit')), cancellation: fd.get('cancellation') }
      });
      if (emailChanged || phoneChanged) {
        try { sessionStorage.setItem('vs_verify_biz', JSON.stringify({ id: active.id, email: newEmail || active.email, phone: newPhone || active.phone, name: fd.get('name'), phoneVerified: !phoneChanged })); } catch (e2) {}
        if (emailChanged && phoneChanged) {
          toast('Email and phone changed — please verify both.');
          location.hash = '#/verify-email';
        } else if (emailChanged) {
          toast('Email changed — please verify the new address.');
          location.hash = '#/verify-email';
        } else {
          toast('Phone changed — please verify the new number.');
          location.hash = '#/verify-phone';
        }
        return;
      }
      toast('Listing updated.');
      route(true);
    });
  }

  /* ---------- provider workspace ---------- */
  function viewWorkspace() {
    return '<div class="wrap">' +
      '<div class="dash-head"><div><p class="eyebrow">Provider workspace</p><h1 style="margin:0" id="ws-biz-name">Your business</h1></div>' +
      '<a class="btn btn-outline btn-sm" href="#/dashboard">← Back to dashboard</a></div>' +
      '<div id="ws-body"><div class="empty">Loading…</div></div>' +
    '</div>';
  }

  async function afterWorkspace(active) {
    document.getElementById('ws-biz-name').textContent = active.name;
    var l = primaryListing(active);
    var body = document.getElementById('ws-body');
    body.innerHTML =
      '<div class="summary-grid">' +
        '<div class="summary-card"><h4>Service areas</h4><div class="big">' + active.zips.length + ' ZIPs</div><div class="small muted">' + active.zips.map(h).join(', ') + '</div></div>' +
        '<div class="summary-card"><h4>Travel fee</h4><div class="big">' + (active.travelFee ? '$' + h(active.travelFee) : 'Included') + '</div><div class="small muted">Radius: ' + h(active.travelRadius || 0) + ' miles</div></div>' +
        '<div class="summary-card"><h4>Travel buffer</h4><div class="big">' + h(active.travelBuffer || 30) + ' min</div><div class="small muted">Between appointments</div></div>' +
        '<div class="summary-card"><h4>Package price</h4><div class="big">' + h(priceLabel(l)) + '</div><div class="small muted">' + h(l.title || '') + '</div></div>' +
      '</div>' +
      '<form class="form-card" id="ws-form" style="max-width:820px">' +
        '<div class="form-sec"><h3>Service area</h3><p>Tick every ZIP you travel to.</p><div class="zip-grid">' +
        zipGridHTML(active.zips) + '</div>' + customZipRowHTML() + '</div>' +
        '<div class="form-sec"><h3>Pricing & scheduling</h3>' +
        '<div class="f-row"><div class="field"><label>Package price ($)</label><input name="price" type="number" min="0" value="' + (l.price === null || l.price === undefined ? '' : h(l.price)) + '"></div>' +
        '<div class="field"><label>Travel fee ($)</label><input name="travelFee" type="number" min="0" value="' + h(active.travelFee || 0) + '"></div></div>' +
        '<div class="f-row"><div class="field"><label>Price type</label><select name="priceType">' +
          ['fixed', 'estimate', 'quote'].map(function (t) {
            return '<option value="' + t + '"' + (l.priceType === t ? ' selected' : '') + '>' + t.charAt(0).toUpperCase() + t.slice(1) + '</option>';
          }).join('') + '</select></div>' +
        '<div class="field"><label>Travel buffer (minutes)</label><input name="travelBuffer" type="number" min="0" value="' + h(active.travelBuffer || 30) + '"></div></div>' +
        '<div class="f-row"><div class="field"><label>Earliest opening</label><input name="earliestOpening" value="' + h(active.earliestOpening || '') + '" placeholder="e.g. Wed, Sep 30"></div>' +
        '<div class="field"><label>Arrival windows (one per line)</label><textarea name="arrivalWindows" style="min-height:70px">' + h((active.arrivalWindows || []).join('\n')) + '</textarea></div></div></div>' +
        '<button class="btn btn-primary" type="submit">Save settings</button></form>';
    bindCustomZips(body);
    document.getElementById('ws-form').addEventListener('submit', async function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      var zips = [];
      e.target.querySelectorAll('input[name="zips"]:checked').forEach(function (c) { zips.push(c.value); });
      var price = fd.get('price');
      await window.VS.store.updateBusiness(active.id, {
        zips: zips, travelFee: Number(fd.get('travelFee')) || 0,
        travelBuffer: Number(fd.get('travelBuffer')) || 30,
        earliestOpening: fd.get('earliestOpening'),
        arrivalWindows: lines(fd.get('arrivalWindows')),
        listing: { id: l.id, price: (price === '' || price === null) ? null : Number(price), priceType: fd.get('priceType') }
      });
      toast('Settings saved.');
      route(true);
    });
    body.insertAdjacentHTML('beforeend',
      '<div class="form-card" style="max-width:820px;margin-top:24px">' +
      '<h3 style="margin-top:0">Sample listings</h3>' +
      '<p>The directory ships with 6 marked sample listings so it never looks empty on day one. Remove them once real businesses join.</p>' +
      '<button class="btn btn-outline btn-sm" id="rm-samples" type="button">Remove sample listings</button></div>');
    document.getElementById('rm-samples').addEventListener('click', async function () {
      if (!confirm('Remove all sample listings? This cannot be undone.')) return;
      try {
        await window.VS.store.deleteSampleData();
        toast('Sample listings removed.');
        location.hash = '#/browse';
      } catch (e) {
        toast('Could not remove them here — delete the rows with is_sample = true in the Supabase dashboard instead.');
      }
    });
  }

  /* ---------- router ---------- */
  var app = document.getElementById('app');

  function parseHash() {
    var raw = location.hash.replace(/^#/, '') || '/';
    /* in-page fragment, e.g. #/business/shine#reviews -> path /business/shine, frag reviews */
    var frag = '';
    var fIdx = raw.indexOf('#');
    if (fIdx >= 0) { frag = raw.slice(fIdx + 1); raw = raw.slice(0, fIdx); }
    var qIdx = raw.indexOf('?');
    var path = qIdx >= 0 ? raw.slice(0, qIdx) : raw;
    var query = {};
    if (qIdx >= 0) {
      raw.slice(qIdx + 1).split('&').forEach(function (pair) {
        var kv = pair.split('=');
        if (kv[0]) query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || '');
      });
    }
    return { path: path, query: query, raw: raw, frag: frag };
  }

  function setNav(path) {
    var map = { '/browse': 'browse', '/how-it-works': 'how', '/join': 'join' };
    var key = map[path] || (path.indexOf('/blog') === 0 ? 'blog' : null);
    document.querySelectorAll('.main-nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === key);
    });
  }

  async function requireUser(next) {
    var user = null;
    try { user = await window.VS.store.currentUser(); } catch (e) {}
    if (!user) {
      app.innerHTML = viewGate(next);
      window.scrollTo(0, 0);
      afterGate(next);
      return null;
    }
    return user;
  }

  async function activeBusiness(user) {
    var list = await window.VS.store.myBusinesses();
    if (!list.length) return { list: [], active: null };
    var saved = sessionStorage.getItem('vs_active_biz');
    var act = list[0];
    if (saved) list.forEach(function (b) { if (b.id === saved) act = b; });
    return { list: list, active: act };
  }

  async function route(rerender) {
    var r = parseHash();
    var path = r.path;
    setNav(path);
    document.title = 'Van Squad — Local services. At your door.';
    setMeta('description', 'Van Squad is a directory of local mobile service businesses that travel to you — car detailing, pet grooming, home cleaning and more. If you travel to your customers, you belong here.');
    clearBlogSeo();
    document.getElementById('mobile-nav').classList.remove('open');
    var seg = path.split('/').filter(Boolean);

    try {
      if (path === '/' || path === '') {
        app.innerHTML = viewHome();
        afterHome();
      } else if (seg[0] === 'browse') {
        if (r.query.cat !== undefined) browseState.category = r.query.cat || '';
        if (r.query.q !== undefined) browseState.q = r.query.q || '';
        if (r.query.zip !== undefined) browseState.zip = r.query.zip || '95814';
        app.innerHTML = viewBrowse();
        afterBrowse();
      } else if (seg[0] === 'business' && seg[1]) {
        var b = await window.VS.store.getBusiness(seg[1]);
        if (!b) { app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3>Listing not found.</h3><a class="btn btn-primary" href="#/browse">Back to explore</a></div></div>'; }
        else { app.innerHTML = viewBusinessDetail(b); afterBusinessDetail(b); }
      } else if (seg[0] === 'how-it-works') {
        app.innerHTML = viewHow(); bindFaq();
      } else if (seg[0] === 'blog') {
        if (seg[1]) {
          var post = window.VS_BLOG.bySlug(seg[1]);
          if (!post) { clearBlogSeo(); app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3>Post not found.</h3><a class="btn btn-primary" href="#/blog">Back to blog</a></div></div>'; }
          else { app.innerHTML = viewPost(post); blogSeo(post); bindPostCta(); }
        } else {
          app.innerHTML = viewBlog(); blogListSeo();
        }
      } else if (seg[0] === 'services' && seg[1] && D.GUIDES[seg[1]]) {
        app.innerHTML = viewGuide(D.GUIDES[seg[1]]);
      } else if (seg[0] === 'join') {
        app.innerHTML = viewJoin(); afterJoin();
      } else if (seg[0] === 'verify-email') {
        var vuser = await requireUser('#/verify-email');
        if (!vuser) return;
        var pv = null;
        try { pv = JSON.parse(sessionStorage.getItem('vs_verify_biz') || 'null'); } catch (e) {}
        if (!pv || !pv.id) { location.hash = '#/dashboard'; return; }
        app.innerHTML = viewVerifyEmail(pv);
        afterVerifyEmail(pv);
      } else if (seg[0] === 'verify-phone') {
        var puser = await requireUser('#/verify-phone');
        if (!puser) return;
        var ppv = null;
        try { ppv = JSON.parse(sessionStorage.getItem('vs_verify_biz') || 'null'); } catch (e) {}
        if (!ppv || !ppv.id) { location.hash = '#/dashboard'; return; }
        app.innerHTML = viewVerifyPhone(ppv);
        afterVerifyPhone(ppv);
      } else if (seg[0] === 'login') {
        app.innerHTML = viewLoginPage(); afterGate('');
      } else if (seg[0] === 'book' && seg[1]) {
        var user = await requireUser('#/book/' + seg[1]);
        if (!user) return;
        var bb = await window.VS.store.getBusiness(seg[1]);
        if (!bb) { app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3>Listing not found.</h3></div></div>'; }
        else { app.innerHTML = viewBook(bb); afterBook(bb); }
      } else if (seg[0] === 'customer') {
        var cu = await requireUser('#/customer');
        if (!cu) return;
        app.innerHTML = viewCustomer(cu); afterCustomer(cu);
      } else if (seg[0] === 'dashboard' || seg[0] === 'workspace') {
        var bu = await requireUser('#/' + seg[0]);
        if (!bu) return;
        var ab = await activeBusiness(bu);
        if (!ab.active) {
          app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3 style="margin-top:0">No business yet.</h3><p>List your business to unlock the dashboard and workspace.</p><a class="btn btn-primary" href="#/join">List your business →</a></div></div>';
        } else if (seg[0] === 'dashboard') {
          app.innerHTML = viewBizDash(ab.list, ab.active.id); afterBizDash(ab.list, ab.active);
        } else {
          app.innerHTML = viewWorkspace(); afterWorkspace(ab.active);
        }
      } else {
        app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3>Page not found.</h3><a class="btn btn-primary" href="#/">Back home</a></div></div>';
      }
    } catch (err) {
      app.innerHTML = '<div class="wrap"><div class="empty" style="margin:60px 0"><h3>Something went wrong.</h3><p>' + h(err.message || err) + '</p><a class="btn btn-primary" href="#/">Back home</a></div></div>';
    }
    if (!rerender) {
      if (r.frag) {
        var fel = document.getElementById(r.frag);
        if (fel) { fel.scrollIntoView(); } else { window.scrollTo(0, 0); }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  /* ---------- boot ---------- */
  document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-nav').classList.toggle('open');
  });
  window.addEventListener('hashchange', function () { route(false); });
  renderHeaderAuth();
  /* surface OAuth failures that arrive as query params (e.g. expired state) */
  (function () {
    var m = /[?&]error=([^&]*)/.exec(location.search);
    if (m) {
      var code = /[?&]error_code=([^&]*)/.exec(location.search);
      var expired = code && /bad_oauth_state|expired/i.test(decodeURIComponent(code[1] || ''));
      toast(expired
        ? 'Your sign-in expired before it finished. Please try logging in again.'
        : 'Sign-in did not complete. Please try again.');
      if (window.history && history.replaceState) {
        history.replaceState(null, '', location.pathname + location.hash);
      }
    }
  })();
  route(false);
})();
