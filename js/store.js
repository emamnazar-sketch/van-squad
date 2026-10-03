/* Van Squads — data layer.
   Two backends:
   - local: browser localStorage (works with zero setup — used for the preview build)
   - supabase: activated automatically when js/config.js has SUPABASE_URL + SUPABASE_ANON_KEY
   Both expose the same async API. */
(function () {
  'use strict';

  var LS_KEY = 'vansquad_v1';

  function uid(prefix) {
    return (prefix || 'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  /* ---------- local backend ---------- */

  function loadLocal() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    var state = {
      businesses: deepClone(window.VS_DATA.SEED_BUSINESSES),
      requests: [],
      profiles: [],
      sessionUserId: null
    };
    saveLocal(state);
    return state;
  }
  function saveLocal(state) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function local() { return loadLocal(); }

  function findBusiness(state, slugOrId) {
    slugOrId = String(slugOrId);
    for (var i = 0; i < state.businesses.length; i++) {
      var b = state.businesses[i];
      if (b.slug === slugOrId || b.id === slugOrId) return b;
    }
    return null;
  }

  var LocalBackend = {
    async listBusinesses() { return deepClone(local().businesses); },

    async getBusiness(slugOrId) {
      var b = findBusiness(local(), slugOrId);
      return b ? deepClone(b) : null;
    },

    async searchBusinesses(opts) {
      opts = opts || {};
      var q = (opts.q || '').toLowerCase().trim();
      var zip = (opts.zip || '').trim();
      var cat = opts.category || '';
      var maxBudget = opts.maxBudget ? Number(opts.maxBudget) : null;
      var out = local().businesses.filter(function (b) {
        if (cat && b.category !== cat) return false;
        if (zip && b.zips.indexOf(zip) < 0) return false;
        if (q) {
          var hay = (b.name + ' ' + b.tagline + ' ' + b.description + ' ' +
            b.listings.map(function (l) { return l.title; }).join(' ')).toLowerCase();
          if (hay.indexOf(q) < 0) return false;
        }
        if (maxBudget !== null) {
          var cheapest = null;
          b.listings.forEach(function (l) {
            if (l.price !== null && l.price !== undefined && (cheapest === null || l.price < cheapest)) cheapest = l.price;
          });
          if (cheapest === null || cheapest > maxBudget) return false;
        }
        return true;
      });
      return deepClone(out);
    },

    async currentUser() {
      var s = local();
      if (!s.sessionUserId) return null;
      for (var i = 0; i < s.profiles.length; i++) {
        if (s.profiles[i].id === s.sessionUserId) return deepClone(s.profiles[i]);
      }
      return null;
    },

    async loginLocal(name, email) {
      var s = local();
      email = String(email).toLowerCase().trim();
      var p = null;
      for (var i = 0; i < s.profiles.length; i++) {
        if (s.profiles[i].email === email) { p = s.profiles[i]; break; }
      }
      if (!p) {
        p = { id: uid('user'), name: name || email.split('@')[0], email: email,
              role: 'customer', homeZip: '95814', createdAt: new Date().toISOString() };
        s.profiles.push(p);
      } else if (name && !p.name) { p.name = name; }
      s.sessionUserId = p.id;
      saveLocal(s);
      return deepClone(p);
    },

    async logout() {
      var s = local(); s.sessionUserId = null; saveLocal(s);
    },

    async requestEmailCode() { return { sent: true, demo: true }; },
    async verifyEmailCode(businessId) {
      var s = local();
      for (var i = 0; i < s.businesses.length; i++) {
        if (s.businesses[i].id === businessId) s.businesses[i].emailVerified = true;
      }
      saveLocal(s);
      return { verified: true };
    },

    async requestPhoneCode() { return { sent: true, demo: true }; },
    async verifyPhoneCode(businessId) {
      var s = local();
      for (var i = 0; i < s.businesses.length; i++) {
        if (s.businesses[i].id === businessId) s.businesses[i].phoneVerified = true;
      }
      saveLocal(s);
      return { verified: true };
    },
    async updateProfile(patch) {
      var s = local();
      for (var i = 0; i < s.profiles.length; i++) {
        if (s.profiles[i].id === s.sessionUserId) {
          Object.assign(s.profiles[i], patch);
          saveLocal(s);
          return deepClone(s.profiles[i]);
        }
      }
      return null;
    },

    async signupBusiness(data) {
      /* data: {ownerName, ownerEmail, name, category, tagline, description,
         phone, email, website, zips[], travelFee, travelRadius, travelBuffer,
         listingTitle, price, priceType, duration, includes[], beforeVisit[], cancellation} */
      var s = local();
      var user = await this.currentUser();
      if (!user) user = await this.loginLocal(data.ownerName, data.ownerEmail);
      if (user.role !== 'business') {
        for (var i = 0; i < s.profiles.length; i++) {
          if (s.profiles[i].id === user.id) s.profiles[i].role = 'business';
        }
        user.role = 'business';
      }
      var base = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'business';
      var slug = base, n = 2;
      while (findBusiness(s, slug)) { slug = base + '-' + (n++); }
      var biz = {
        id: uid('biz'), slug: slug, isSample: false, ownerId: user.id, emailVerified: false,
        name: data.name, category: data.category, tagline: data.tagline || '',
        description: data.description || '', phone: data.phone || '',
        email: data.email || '', website: data.website || '',
        zips: data.zips || [], travelFee: Number(data.travelFee) || 0,
        travelRadius: Number(data.travelRadius) || 0, travelBuffer: Number(data.travelBuffer) || 30,
        earliestOpening: data.earliestOpening || '', arrivalWindows: data.arrivalWindows || [],
        rating: 0, reviewCount: 0, reviews: [],
        listings: [{
          id: uid('listing'), title: data.listingTitle || 'Standard service',
          price: (data.price === '' || data.price === null || data.price === undefined) ? null : Number(data.price),
          priceType: data.priceType || 'fixed', duration: data.duration || '',
          includes: data.includes || [], beforeVisit: data.beforeVisit || [],
          cancellation: data.cancellation || ''
        }]
      };
      s.businesses.push(biz);
      saveLocal(s);
      return deepClone(biz);
    },

    async myBusinesses() {
      var s = local();
      if (!s.sessionUserId) return [];
      return deepClone(s.businesses.filter(function (b) { return b.ownerId === s.sessionUserId; }));
    },

    async updateBusiness(id, patch) {
      var s = local();
      var b = findBusiness(s, id);
      if (!b) return null;
      ['name','tagline','description','phone','email','website','zips','travelFee',
       'travelRadius','travelBuffer','earliestOpening','arrivalWindows'].forEach(function (k) {
        if (patch[k] !== undefined) b[k] = patch[k];
      });
      if (patch.listing) Object.assign(b.listings[0], patch.listing);
      saveLocal(s);
      return deepClone(b);
    },

    async deleteSampleData() {
      var s = local();
      s.businesses = s.businesses.filter(function (b) { return !b.isSample; });
      saveLocal(s);
      return s.businesses.length;
    },

    async createRequest(data) {
      /* {listingId, businessId, message, zip, preferredTime, photos[]} */
      var s = local();
      var user = await this.currentUser();
      var r = {
        id: uid('req'), customerId: user ? user.id : null,
        customerName: user ? user.name : 'Guest',
        listingId: data.listingId, businessId: data.businessId,
        message: data.message, zip: data.zip, preferredTime: data.preferredTime || '',
        photos: data.photos || [], status: 'pending', businessNote: '',
        createdAt: new Date().toISOString()
      };
      s.requests.push(r);
      saveLocal(s);
      return deepClone(r);
    },

    async myRequests() {
      var s = local();
      if (!s.sessionUserId) return [];
      return deepClone(s.requests.filter(function (r) { return r.customerId === s.sessionUserId; })
        .sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); }));
    },

    async businessRequests(businessId) {
      var s = local();
      return deepClone(s.requests.filter(function (r) { return r.businessId === businessId; })
        .sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); }));
    },

    async updateRequest(id, patch) {
      var s = local();
      for (var i = 0; i < s.requests.length; i++) {
        if (s.requests[i].id === id) {
          if (patch.status !== undefined) s.requests[i].status = patch.status;
          if (patch.businessNote !== undefined) s.requests[i].businessNote = patch.businessNote;
          if (patch.customerMessage !== undefined) {
            s.requests[i].message += '\n\n— Follow-up from customer: ' + patch.customerMessage;
          }
          saveLocal(s);
          return deepClone(s.requests[i]);
        }
      }
      return null;
    },

    async addReview(data) {
      /* {businessId, rating, text} */
      var s = local();
      var user = await this.currentUser();
      var b = findBusiness(s, data.businessId);
      if (!b) return null;
      b.reviews = b.reviews || [];
      b.reviews.unshift({
        id: uid('rev'), customerName: user ? user.name : 'Customer',
        rating: Number(data.rating), text: data.text,
        createdAt: new Date().toISOString()
      });
      var sum = 0;
      b.reviews.forEach(function (r) { sum += r.rating; });
      b.reviewCount = b.reviews.length;
      b.rating = Math.round((sum / b.reviews.length) * 10) / 10;
      saveLocal(s);
      return deepClone(b);
    }
  };

  /* ---------- supabase backend (activated by config) ---------- */

  var sbClient = null;
  function supabaseReady() {
    var cfg = window.VS_CONFIG || {};
    return !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && cfg.SUPABASE_URL.indexOf('YOUR_') !== 0);
  }
  function loadSupabaseLib() {
    if (sbClient) return Promise.resolve(sbClient);
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
      s.onload = function () {
        var cfg = window.VS_CONFIG;
        sbClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
        resolve(sbClient);
      };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  function toBiz(row) {
    if (!row) return null;
    var b = {
      id: row.id, slug: row.id, isSample: !!row.is_sample, ownerId: row.owner_id,
      emailVerified: !!row.email_verified,
      phoneVerified: !!row.phone_verified,
      name: row.name, category: row.category, tagline: row.tagline || '',
      description: row.description || '', phone: row.phone || '', email: row.email || '',
      website: row.website || '', zips: row.service_zips || [],
      travelFee: Number(row.travel_fee) || 0, travelRadius: row.travel_radius_miles || 0,
      travelBuffer: row.travel_buffer_minutes || 30, earliestOpening: row.earliest_opening || '',
      arrivalWindows: row.arrival_windows || [],
      rating: Number(row.avg_rating) || 0, reviewCount: row.review_count || 0,
      reviews: (row.reviews || []).map(function (r) {
        return { id: r.id, customerName: r.customer_name || 'Customer', rating: r.rating,
                 text: r.text, createdAt: r.created_at };
      }),
      listings: (row.listings || []).map(function (l) {
        return { id: l.id, title: l.title, price: l.price === null ? null : Number(l.price),
                 priceType: l.price_type, duration: l.duration || '',
                 includes: l.includes || [], beforeVisit: l.before_visit || [],
                 cancellation: l.cancellation_policy || '' };
      })
    };
    return b;
  }
  var SupabaseBackend = {
    async _sb() { return loadSupabaseLib(); },
    async listBusinesses() {
      var sb = await this._sb();
      var res = await sb.from('businesses').select('*, listings(*), reviews(*)').eq('status', 'active').order('created_at');
      if (res.error) throw res.error;
      return res.data.map(toBiz);
    },
    async getBusiness(slugOrId) {
      var all = await this.listBusinesses();
      slugOrId = String(slugOrId);
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === slugOrId) return all[i];
      }
      return null;
    },
    async searchBusinesses(opts) {
      var all = await this.listBusinesses();
      opts = opts || {};
      var q = (opts.q || '').toLowerCase().trim();
      return all.filter(function (b) {
        if (opts.category && b.category !== opts.category) return false;
        if (opts.zip && b.zips.indexOf(opts.zip) < 0) return false;
        if (q && (b.name + ' ' + b.tagline + ' ' + b.description).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
    },
    async currentUser() {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) return null;
      var p = await sb.from('profiles').select('*').eq('id', u.id).single();
      if (p.error || !p.data) return { id: u.id, name: u.user_metadata.full_name || u.email, email: u.email, role: 'customer', homeZip: '95814' };
      return { id: p.data.id, name: p.data.display_name, email: p.data.email, role: p.data.role, homeZip: p.data.home_zip || '95814' };
    },
    async loginWithGoogle() {
      var sb = await this._sb();
      var cfg = window.VS_CONFIG;
      await sb.auth.signInWithOAuth({ provider: 'google',
        options: { redirectTo: cfg.SITE_URL || window.location.origin + window.location.pathname } });
    },
    async logout() { (await this._sb()).auth.signOut(); },
    async _token() {
      var sb = await this._sb();
      var s = await sb.auth.getSession();
      return (s.data.session && s.data.session.access_token) || null;
    },
    async requestEmailCode(businessId) {
      var t = await this._token();
      if (!t) throw new Error('not-logged-in');
      var r = await fetch('/api/request-email-code', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId: businessId })
      });
      var j = null;
      try { j = await r.json(); } catch (e) { j = {}; }
      if (!r.ok) { var e1 = new Error((j && j.error) || 'send-failed'); e1.code = j && j.error; throw e1; }
      return j || {};
    },
    async verifyEmailCode(businessId, code) {
      var t = await this._token();
      if (!t) throw new Error('not-logged-in');
      var r = await fetch('/api/verify-email-code', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId: businessId, code: code })
      });
      var j = null;
      try { j = await r.json(); } catch (e) { j = {}; }
      if (!r.ok) {
        var e2 = new Error((j && j.error) || 'verify-failed');
        e2.code = j && j.error; e2.attemptsLeft = j && j.attemptsLeft;
        throw e2;
      }
      return j || {};
    },
    async requestPhoneCode(businessId) {
      var t = await this._token();
      if (!t) throw new Error('not-logged-in');
      var r = await fetch('/api/request-phone-code', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId: businessId })
      });
      var j = null;
      try { j = await r.json(); } catch (e) { j = {}; }
      if (!r.ok) { var e3 = new Error((j && j.error) || 'send-failed'); e3.code = j && j.error; throw e3; }
      return j || {};
    },
    async verifyPhoneCode(businessId, code) {
      var t = await this._token();
      if (!t) throw new Error('not-logged-in');
      var r = await fetch('/api/verify-phone-code', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId: businessId, code: code })
      });
      var j = null;
      try { j = await r.json(); } catch (e) { j = {}; }
      if (!r.ok) {
        var e4 = new Error((j && j.error) || 'verify-failed'); e4.code = j && j.error;
        throw e4;
      }
      return j || {};
    },
    async updateProfile(patch) {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) return null;
      var db = {};
      if (patch.name !== undefined) db.display_name = patch.name;
      if (patch.homeZip !== undefined) db.home_zip = patch.homeZip;
      await sb.from('profiles').update(db).eq('id', u.id);
      return this.currentUser();
    },
    async signupBusiness(data) {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) throw new Error('not-logged-in');
      await sb.from('profiles').upsert({ id: u.id, email: u.email,
        display_name: data.ownerName || u.user_metadata.full_name, role: 'business' });
      var biz = await sb.from('businesses').insert({
        owner_id: u.id, name: data.name, category: data.category, tagline: data.tagline,
        description: data.description, phone: data.phone, email: data.email, website: data.website,
        service_zips: data.zips, travel_fee: data.travelFee || 0, travel_radius_miles: data.travelRadius || 0,
        is_sample: false, status: 'active'
      }).select().single();
      if (biz.error) throw biz.error;
      var lst = await sb.from('listings').insert({
        business_id: biz.data.id, title: data.listingTitle || 'Standard service',
        price: data.price === '' ? null : data.price, price_type: data.priceType || 'fixed',
        duration: data.duration, includes: data.includes, before_visit: data.beforeVisit,
        cancellation_policy: data.cancellation, is_sample: false, status: 'active'
      }).select().single();
      if (lst.error) throw lst.error;
      // NOTE: do not re-fetch via listBusinesses here — a fresh business is
      // email-unverified and therefore invisible to public reads by design.
      return toBiz(Object.assign({}, biz.data, { listings: [lst.data], reviews: [] }));
    },
    async myBusinesses() {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) return [];
      var res = await sb.from('businesses').select('*, listings(*), reviews(*)').eq('owner_id', u.id);
      if (res.error) return [];
      return res.data.map(toBiz);
    },
    async updateBusiness(id, patch) {
      var sb = await this._sb();
      var db = {};
      ['name','tagline','description','phone','email','website'].forEach(function (k) { if (patch[k] !== undefined) db[k] = patch[k]; });
      if (patch.emailVerified !== undefined) db.email_verified = !!patch.emailVerified;
      if (patch.phoneVerified !== undefined) db.phone_verified = !!patch.phoneVerified;
      if (patch.zips !== undefined) db.service_zips = patch.zips;
      if (patch.travelFee !== undefined) db.travel_fee = patch.travelFee;
      if (patch.travelRadius !== undefined) db.travel_radius_miles = patch.travelRadius;
      if (patch.travelBuffer !== undefined) db.travel_buffer_minutes = patch.travelBuffer;
      if (patch.earliestOpening !== undefined) db.earliest_opening = patch.earliestOpening;
      if (patch.arrivalWindows !== undefined) db.arrival_windows = patch.arrivalWindows;
      if (Object.keys(db).length) await sb.from('businesses').update(db).eq('id', id);
      if (patch.listing) {
        var l = patch.listing, ld = {};
        ['title','duration'].forEach(function (k) { if (l[k] !== undefined) ld[k] = l[k]; });
        if (l.price !== undefined) ld.price = l.price;
        if (l.priceType !== undefined) ld.price_type = l.priceType;
        if (l.includes !== undefined) ld.includes = l.includes;
        if (l.beforeVisit !== undefined) ld.before_visit = l.beforeVisit;
        if (l.cancellation !== undefined) ld.cancellation_policy = l.cancellation;
        if (Object.keys(ld).length) await sb.from('listings').update(ld).eq('id', l.id);
      }
      return this.getBusiness(id);
    },
    async deleteSampleData() {
      var sb = await this._sb();
      await sb.from('businesses').delete().eq('is_sample', true);
      return (await this.listBusinesses()).length;
    },
    async createRequest(data) {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) throw new Error('not-logged-in');
      /* upload request photos to the request-photos bucket, keep public URLs */
      var urls = [];
      var photos = (data.photos || []).slice(0, 5);
      for (var i = 0; i < photos.length; i++) {
        try {
          var blob = await (await fetch(photos[i])).blob();
          var path = u.id + '/' + Date.now() + '-' + i + '.jpg';
          var up = await sb.storage.from('request-photos').upload(path, blob, { contentType: 'image/jpeg', upsert: true });
          if (!up.error) {
            var pub = sb.storage.from('request-photos').getPublicUrl(path);
            if (pub.data && pub.data.publicUrl) urls.push(pub.data.publicUrl);
          }
        } catch (e) { /* skip a photo that fails to upload */ }
      }
      var res = await sb.from('requests').insert({
        customer_id: u.id, listing_id: data.listingId, business_id: data.businessId,
        message: data.message, zip: data.zip, preferred_time: data.preferredTime || '',
        photo_urls: urls, status: 'pending'
      }).select().single();
      if (res.error) throw res.error;
      return res.data;
    },
    async myRequests() {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) return [];
      var res = await sb.from('requests').select('*, businesses(name)').eq('customer_id', u.id).order('created_at', { ascending: false });
      return res.data || [];
    },
    async businessRequests(businessId) {
      var sb = await this._sb();
      var res = await sb.from('requests').select('*').eq('business_id', businessId).order('created_at', { ascending: false });
      return res.data || [];
    },
    async updateRequest(id, patch) {
      var sb = await this._sb();
      var db = {};
      if (patch.status !== undefined) db.status = patch.status;
      if (patch.businessNote !== undefined) db.business_note = patch.businessNote;
      await sb.from('requests').update(db).eq('id', id);
      return true;
    },
    async addReview(data) {
      var sb = await this._sb();
      var u = (await sb.auth.getUser()).data.user;
      if (!u) throw new Error('not-logged-in');
      var res = await sb.from('reviews').insert({
        listing_id: data.listingId, customer_id: u.id, business_id: data.businessId,
        rating: Number(data.rating), text: data.text });
      if (res.error) throw res.error;
      return true;
    }
  };

  /* ---------- public API: picks backend automatically ---------- */
  var backend = null;
  function Backend() {
    if (!backend) backend = supabaseReady() ? SupabaseBackend : LocalBackend;
    return backend;
  }

  window.VS = {
    store: new Proxy({}, { get: function (_, prop) {
      var b = Backend();
      var v = b[prop];
      return (typeof v === 'function') ? v.bind(b) : v;
    }}),
    isSupabase: supabaseReady,
    loginWithGoogle: function () {
      if (supabaseReady()) return SupabaseBackend.loginWithGoogle();
      window.location.hash = '#/login';
      return Promise.resolve();
    },
    uid: uid
  };
})();
