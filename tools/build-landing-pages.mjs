// Van Squads — city × category landing pages.
// Run: node tools/build-landing-pages.mjs --businesses <dump.json> [--version 20261031d]
//   <dump.json> is a full active-businesses dump (id, name, category, phone,
//   website, service_zips, logo_url, created_at; ordered by created_at asc),
//   e.g. produced by paging vs_rest.py get calls. The generator is offline and
//   deterministic: same dump in, same pages out.
// Produces one static page per metro × category with >= 3 active businesses at
//   /<category-slug>/<metro-slug>/index.html
// following the approved Boise house-cleaning mock-up structure, refreshes the
// landing-pages section of llms.txt, and writes tools/landing-pages-manifest.json.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PREFIX_METRO, slugify, metroOfZip } from './metro-map.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
function arg(name, dflt) {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : dflt;
}
const dumpPath = arg('businesses', '');
const VERSION = arg('version', '20261031d');
if (!dumpPath) { console.error('Missing --businesses <dump.json>'); process.exit(2); }

const businesses = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));

// ZIP_NAMES from js/data.js (single source — same trick as prerender-blog.js).
const windowShim = {};
eval(fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8').replace(/window\.VS_DATA/g, 'windowShim.VS_DATA').replace(/\bwindow\b/g, 'windowShim'));
const ZIP_NAMES = windowShim.VS_DATA.ZIP_NAMES;

// Published blog posts (for cost bands + cross-links), keyed metroSlug|categorySlug.
eval(fs.readFileSync(path.join(ROOT, 'js/blog.js'), 'utf8').replace(/\bwindow\b/g, 'windowShim'));
const POSTS = windowShim.VS_BLOG.POSTS;
// Key city posts by metro + category parsed from the slug itself — two early
// posts carry category "Home cleaning" instead of the directory's
// "House cleaning", so the category field cannot be trusted as the key.
const TOPIC_TO_CATEGORY_SLUG = {
  'house-cleaning': 'house-cleaning',
  'a-handyman': 'handyman',
  'mobile-car-detailing': 'mobile-auto-detailing',
  'mobile-pet-grooming': 'mobile-pet-grooming',
  'pool-cleaning': 'pool-cleaning-maintenance',
  'pressure-washing': 'pressure-washing',
  'deep-cleaning': 'deep-cleaning'
};
const BLOG_BY_CELL = {};
POSTS.forEach((p) => {
  const m = /^how-much-does-(.+)-cost-in-([a-z-]+)$/.exec(p.slug);
  if (!m || !TOPIC_TO_CATEGORY_SLUG[m[1]]) return;
  BLOG_BY_CELL[m[2] + '|' + TOPIC_TO_CATEGORY_SLUG[m[1]]] = p;
});

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function businessSlugMap(rows) {
  const map = new Map();
  rows.forEach((b) => {
    let s = slugify(b.name) || b.id;
    if (map.has(s)) s = s + '-' + String(b.id).slice(0, 6);
    b._slug = s;
    map.set(s, b);
  });
  return map;
}
businessSlugMap(businesses);

const SERVICE_PHRASE = {
  'House cleaning': 'house cleaning',
  'Handyman': 'handyman work',
  'Mobile auto detailing': 'mobile car detailing',
  'Pressure washing': 'pressure washing',
  'Mobile pet grooming': 'mobile pet grooming',
  'Pool cleaning & maintenance': 'pool cleaning and upkeep',
  'Deep cleaning': 'deep cleaning',
  'Carpet & rug cleaning': 'carpet and rug cleaning',
  'E-bike repair': 'e-bike repair'
};
const PLURAL_NOUN = {
  'House cleaning': 'House cleaners',
  'Handyman': 'Handymen',
  'Mobile auto detailing': 'Mobile car detailers',
  'Pressure washing': 'Pressure washing companies',
  'Mobile pet grooming': 'Mobile pet groomers',
  'Pool cleaning & maintenance': 'Pool cleaning companies',
  'Deep cleaning': 'Deep cleaning companies',
  'Carpet & rug cleaning': 'Carpet cleaning companies',
  'E-bike repair': 'E-bike repair shops'
};
const phrase = (cat) => SERVICE_PHRASE[cat] || (cat.charAt(0).toLowerCase() + cat.slice(1));
const pluralNoun = (cat) => PLURAL_NOUN[cat] || (cat + ' companies');

function areasOf(b, metroSlugWanted) {
  const seen = new Set(); const out = [];
  (b.service_zips || []).forEach((z) => {
    const m = metroOfZip(z);
    if (metroSlugWanted && (!m || m.slug !== metroSlugWanted)) return;
    const label = ZIP_NAMES[z];
    if (label && !seen.has(label)) { seen.add(label); out.push(label); }
  });
  return out;
}
function metroZips(b, metroSlugWanted) {
  return (b.service_zips || []).filter((z) => {
    const m = metroOfZip(z);
    return m && m.slug === metroSlugWanted;
  });
}
function telHref(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length === 10) return 'tel:+1' + digits;
  if (digits.length === 11 && digits.startsWith('1')) return 'tel:+' + digits;
  return digits ? 'tel:' + digits : '';
}
function photoAbs(logo) {
  if (!logo) return '';
  return String(logo).startsWith('http') ? String(logo) : '/' + String(logo).replace(/^\//, '');
}
function monthYear(iso) {
  const d = new Date(String(iso) + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
function listJoin(items) {
  if (items.length <= 1) return items.join('');
  if (items.length === 2) return items[0] + ' and ' + items[1];
  return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
}

// Group businesses into cells: metro x category, any-ZIP membership.
const cells = new Map();
businesses.forEach((b) => {
  const metros = new Map();
  (b.service_zips || []).forEach((z) => {
    const m = metroOfZip(z);
    if (m) metros.set(m.slug, m);
  });
  metros.forEach((m) => {
    const key = m.slug + '|' + slugify(b.category);
    if (!cells.has(key)) cells.set(key, { metro: m, category: b.category, members: [] });
    cells.get(key).members.push(b);
  });
});

const CSS = `
.lp-crumbs{font-size:14.5px;color:var(--muted);padding:18px 0 0}
.lp-hero{padding:10px 0 8px}
.lp-hero h1{font-size:40px;line-height:1.12;letter-spacing:-.02em;margin:10px 0 12px;color:var(--navy)}
.lp-hero p{font-size:19px;color:var(--muted);max-width:720px;margin:0 0 18px}
.lp-hero p b{color:var(--ink)}
.lp-stats{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:8px}
.lp-stat{background:#F6F8FA;border:1px solid var(--line);border-radius:999px;padding:8px 16px;font-size:15.5px;font-weight:600;color:var(--navy)}
.lp-stat em{font-style:normal;color:var(--orange-dark)}
.lp-cost{background:#FFF0E6;border:1px solid #FFD9C2;border-radius:16px;padding:22px 24px;margin:26px 0 8px}
.lp-cost h2{margin:0 0 6px;font-size:24px;color:var(--navy)}
.lp-cost p{margin:0 0 12px;color:var(--muted);font-size:17px}
.lp-textlink{color:var(--orange-dark);font-weight:700;font-size:16.5px}
.lp-cardshead{display:flex;align-items:baseline;justify-content:space-between;margin:30px 0 14px}
.lp-cardshead h2{font-size:27px;color:var(--navy);margin:0}
.lp-cardshead span{color:var(--muted);font-size:15.5px}
.lp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.lp-card{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;box-shadow:var(--shadow)}
.lp-card img{width:100%;height:170px;object-fit:cover;display:block}
.lp-cardbody{padding:16px 18px 18px}
.lp-card h3{margin:0 0 4px;font-size:20px;line-height:1.25;color:var(--navy)}
.lp-card .lp-area{color:var(--muted);font-size:15.5px;margin:0 0 14px}
.lp-btns{display:flex;gap:10px}
.lp-btn{flex:1;text-align:center;padding:12px 8px;border-radius:12px;font-weight:700;font-size:16px;text-decoration:none}
.lp-btn-call{background:var(--orange);color:#fff}
.lp-btn-view{border:2px solid var(--navy);color:var(--navy)}
.lp-areas{background:#F6F8FA;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-top:36px;padding:30px 0}
.lp-areas h2{font-size:25px;color:var(--navy);margin:0 0 8px}
.lp-areas p{color:var(--muted);margin:0 0 14px;max-width:760px}
.lp-chips{display:flex;flex-wrap:wrap;gap:9px}
.lp-chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:7px 15px;font-size:15px;font-weight:600;color:#2B3B4F}
.lp-faq{padding:34px 0 6px}
.lp-faq h2{font-size:25px;color:var(--navy);margin:0 0 16px}
.lp-qa{border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-bottom:12px}
.lp-qa h3{margin:0 0 6px;font-size:18.5px;color:var(--navy)}
.lp-qa p{margin:0;color:var(--muted);font-size:16.5px}
.lp-bizcta{background:var(--navy);color:#fff;border-radius:16px;padding:30px 28px;margin:30px 0 40px}
.lp-bizcta h2{margin:0 0 8px;font-size:26px;color:#fff}
.lp-bizcta p{margin:0 0 18px;color:#C6D2DE;font-size:17px;max-width:640px}
.lp-bizcta a{background:var(--orange);color:#fff;font-weight:700;padding:14px 28px;border-radius:999px;display:inline-block;font-size:17px;text-decoration:none}
@media(max-width:820px){.lp-grid{grid-template-columns:1fr}.lp-hero h1{font-size:33px}.lp-hero p{font-size:18px}.lp-card img{height:200px}}
`;

function headerHtml(v) {
  return '<div class="top-strip">WELCOME &nbsp;·&nbsp; A real directory of mobile services. Service and payment terms are arranged directly between customer and business owner.</div>' +
    '<header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Van Squads home"><img class="brand-logo" src="/img/logo.png?v=' + v + '" alt="Van Squads"></a>' +
    '<nav class="main-nav" aria-label="Main"><a href="/">Home</a><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/#/about">About</a><a href="/blog/">Blog</a><a href="/#/join">List your business <span class="ext" aria-hidden="true">↗</span></a></nav>' +
    '<button class="menu-btn" id="menu-btn" aria-label="Open menu">☰</button></div><div class="mobile-nav" id="mobile-nav"><a href="/">Home</a><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/#/about">About</a><a href="/blog/">Blog</a><a href="/#/join">List your business</a></div></header>';
}
function footerHtml(v) {
  return '<footer class="site-footer"><div class="wrap footer-inner"><div class="footer-brand"><img class="footer-logo-img" src="/img/logo-icon.png?v=' + v + '" alt="" aria-hidden="true"><div><strong>Van Squads</strong><p>Local services. At your door.</p></div></div>' +
    '<nav class="footer-nav" aria-label="Footer"><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/blog/">Blog</a><a href="/#/join">List your business</a><a href="/#/about">About</a><a href="/#/contact">Contact</a><a href="/#/privacy">Privacy</a><a href="/#/terms">Terms</a></nav></div>' +
    '<div class="wrap footer-fine">Van Squads is a directory, not the service provider. Service and payment terms are arranged directly with each business.</div></footer>' +
    '<script>var b=document.getElementById("menu-btn"),n=document.getElementById("mobile-nav");if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o);});}</script>';
}

const manifest = [];
let generated = 0;

cells.forEach((cell) => {
  const members = cell.members;
  if (members.length < 3) return;
  const metro = cell.metro;
  const cat = cell.category;
  const catSlug = slugify(cat);
  const url = 'https://vansquads.com/' + catSlug + '/' + metro.slug + '/';
  const dir = path.join(ROOT, catSlug, metro.slug);
  const blog = BLOG_BY_CELL[metro.slug + '|' + catSlug] || null;

  const sorted = [...members].sort((a, b2) => {
    const d = metroZips(b2, metro.slug).length - metroZips(a, metro.slug).length;
    return d !== 0 ? d : a.name.localeCompare(b2.name);
  });
  const zipSet = new Set();
  members.forEach((b) => metroZips(b, metro.slug).forEach((z) => zipSet.add(z)));
  const zipList = [...zipSet].sort();
  const areaPairs = zipList.map((z) => ({ zip: z, label: ZIP_NAMES[z] || ('ZIP ' + z) }));
  const areaLabels = [...new Set(areaPairs.map((p) => p.label))];
  const topAreas = areaLabels.slice(0, 4);
  const n = members.length;
  const zcount = zipList.length;
  const ph = phrase(cat);

  const title = cat + ' in ' + metro.name + ' — ' + n + ' Local Companies That Come to You | Van Squads';
  const metaDesc = ('Compare ' + n + ' ' + ph + ' companies in ' + metro.name + ' — ' + listJoin(topAreas.slice(0, 3)) +
    '. Real phone numbers and service areas on every listing. They come to your home.').slice(0, 168);

  const cards = sorted.map((b) => {
    const bz = metroZips(b, metro.slug);
    const bAreas = areasOf(b, metro.slug);
    const areaLine = bz.length === 1
      ? (bAreas[0] || metro.name) + ' — ZIP ' + bz[0]
      : listJoin(bAreas.slice(0, 2)) + ' — ' + bz.length + ' ZIP codes';
    const img = photoAbs(b.logo_url)
      ? '<img src="' + esc(photoAbs(b.logo_url)) + '" alt="' + esc(b.name) + '" loading="lazy">'
      : '';
    const call = b.phone
      ? '<a class="lp-btn lp-btn-call" href="' + esc(telHref(b.phone)) + '">Call ' + esc(b.phone) + '</a>'
      : '';
    return '<article class="lp-card">' + img + '<div class="lp-cardbody"><h3>' + esc(b.name) + '</h3>' +
      '<p class="lp-area">' + esc(areaLine) + '</p><div class="lp-btns">' + call +
      '<a class="lp-btn lp-btn-view" href="/business/' + esc(b._slug) + '">View profile</a></div></div></article>';
  }).join('\n    ');

  const chips = areaPairs.slice(0, 30).map((p) => '<span class="lp-chip">' + esc(p.label) + ' ' + p.zip + '</span>').join('');
  const moreAreas = areaPairs.length > 30 ? '<p>Plus ' + (areaPairs.length - 30) + ' more ZIP codes across the ' + esc(metro.name) + ' area.</p>' : '';

  const faqs = [];
  faqs.push({
    q: 'How many ' + ph + ' companies are listed in ' + metro.name + '?',
    a: n + '. Together they cover ' + zcount + ' ZIP codes around ' + metro.name + ', including ' + listJoin(topAreas.slice(0, 3)) + '.',
    html: null
  });
  if (blog) {
    faqs.push({
      q: 'What does ' + ph + ' cost in ' + metro.name + '?',
      a: String(blog.tldr || blog.excerpt || ''),
      html: '<p>' + esc(blog.tldr || blog.excerpt || '') + '</p><p><a class="lp-textlink" href="/blog/' + blog.slug + '/">See the full ' + esc(metro.name) + ' price breakdown →</a></p>'
    });
  } else {
    faqs.push({
      q: 'How do I get a price for ' + ph + ' in ' + metro.name + '?',
      a: 'Prices are set by each business, not by Van Squads. Every listing on this page shows a real phone number — call, describe the job, and you get a quote from the business itself.',
      html: null
    });
  }
  faqs.push({
    q: 'Do these companies come to my home?',
    a: 'Yes. Van Squads only lists mobile services, so the work happens at your home — there is no shop to drive to. Open any profile to see the ZIP codes that company covers.',
    html: null
  });
  faqs.push({
    q: 'Which areas around ' + metro.name + ' are covered?',
    a: 'The companies on this page list ' + zcount + ' ZIP codes, including ' + listJoin(areaLabels.slice(0, 5)) + '. Open a profile to see that company\'s full list of ZIP codes before you call.',
    html: null
  });

  const costBand = blog
    ? '<section class="lp-cost"><h2>What ' + ph + ' costs in ' + esc(metro.name) + '</h2><p>' + esc(blog.tldr || blog.excerpt || '') + '</p>' +
      '<a class="lp-textlink" href="/blog/' + blog.slug + '/">See the full ' + esc(metro.name) + ' price breakdown →</a></section>'
    : '';

  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org', '@type': 'ItemList',
      name: cat + ' in ' + metro.name,
      numberOfItems: n,
      itemListElement: sorted.map((b, i) => ({
        '@type': 'ListItem', position: i + 1,
        item: { '@type': 'LocalBusiness', name: b.name, url: 'https://vansquads.com/business/' + b._slug, telephone: b.phone || undefined }
      }))
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vansquads.com/' },
        { '@type': 'ListItem', position: 2, name: metro.name, item: url },
        { '@type': 'ListItem', position: 3, name: cat, item: url }
      ]
    }
  ]).replace(/</g, '\\u003c');

  const body =
    '<div class="wrap"><div class="lp-crumbs"><a href="/">Home</a> &nbsp;›&nbsp; ' + esc(metro.name) + ' &nbsp;›&nbsp; <b>' + esc(cat) + '</b></div>' +
    '<section class="lp-hero"><h1>' + esc(cat) + ' in ' + esc(metro.name) + '</h1>' +
    '<p><b>' + n + ' local ' + esc(ph) + ' companies</b> that come to you — ' + esc(listJoin(topAreas)) + ' and the rest of the ' + esc(metro.name) + ' area. Every listing shows a real phone number and the ZIP codes it actually covers. No call centers, and no lead forms that sell your number.</p>' +
    '<div class="lp-stats"><div class="lp-stat"><em>' + n + '</em> companies listed</div><div class="lp-stat"><em>' + zcount + '</em> ZIP codes covered</div>' +
    (blog ? '<div class="lp-stat">Prices checked <em>' + esc(monthYear(blog.updated || blog.date)) + '</em></div>' : '') +
    '</div></section>' +
    costBand +
    '<div class="lp-cardshead"><h2>' + esc(pluralNoun(cat)) + ' in ' + esc(metro.name) + '</h2><span>Sorted by coverage</span></div>' +
    '<section class="lp-grid">\n    ' + cards + '\n  </section></div>' +
    '<section class="lp-areas"><div class="wrap"><h2>Areas covered around ' + esc(metro.name) + '</h2>' +
    '<p>These companies work across the ' + esc(metro.name) + ' area — ' + esc(listJoin(topAreas)) + ' and more. Open a profile to see the exact ZIP codes a company covers before you call.</p>' +
    '<div class="lp-chips">' + chips + '</div>' + moreAreas + '</div></section>' +
    '<div class="wrap"><section class="lp-faq"><h2>Questions ' + esc(metro.name) + ' customers ask</h2>' +
    faqs.map((f) => '<div class="lp-qa"><h3>' + esc(f.q) + '</h3>' + (f.html || '<p>' + esc(f.a) + '</p>') + '</div>').join('') +
    '</section>' +
    '<section class="lp-bizcta"><h2>Run a ' + esc(ph) + ' company in ' + esc(metro.name) + '?</h2>' +
    '<p>Your competitors are on this page. Claim your free profile to fix your details, add your real service area, and get found when ' + esc(metro.name) + ' customers search.</p>' +
    '<a href="/#/join">Claim your free profile</a></section></div>';

  const html =
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + esc(title) + '</title>\n<meta name="description" content="' + esc(metaDesc) + '">\n' +
    '<link rel="canonical" href="' + url + '">\n' +
    '<meta property="og:type" content="website">\n<meta property="og:title" content="' + esc(title) + '">\n' +
    '<meta property="og:description" content="' + esc(metaDesc) + '">\n<meta property="og:url" content="' + url + '">\n' +
    '<meta name="twitter:card" content="summary">\n' +
    '<script type="application/ld+json">\n' + jsonLd + '\n</script>\n' +
    '<link rel="stylesheet" href="/css/styles.css?v=' + VERSION + '">\n' +
    '<link rel="icon" type="image/png" href="/img/favicon-512.png?v=' + VERSION + '">\n' +
    '<link rel="apple-touch-icon" href="/img/apple-touch-icon.png?v=' + VERSION + '">\n' +
    '<style>' + CSS + '</style>\n' +
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-18RGRLMXXF"></script>\n' +
    '<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n  gtag(\'config\', \'G-18RGRLMXXF\');\n</script>\n</head>\n<body>\n' +
    headerHtml(VERSION) + '\n<main>' + body + '</main>\n' + footerHtml(VERSION) + '\n</body>\n</html>\n';

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  generated++;
  manifest.push({ url, metro: metro.name, metroSlug: metro.slug, category: cat, categorySlug: catSlug, count: n, zips: zcount, blog: blog ? blog.slug : null });
});

manifest.sort((a, b) => a.url.localeCompare(b.url));
fs.writeFileSync(path.join(ROOT, 'tools', 'landing-pages-manifest.json'), JSON.stringify(manifest, null, 1) + '\n');

// llms.txt — refresh the landing-pages section (idempotent).
const llmsPath = path.join(ROOT, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
const section = '## City & category landing pages\n\n' +
  'One page per city area and service with at least 3 listed companies — every company in that area, with phone numbers and service ZIPs:\n\n' +
  manifest.map((m) => '- ' + m.category + ' in ' + m.metro + ' (' + m.count + ' companies): ' + m.url).join('\n') + '\n\n';
const startMark = '## City & category landing pages';
const endMark = '## Service categories';
const si = llms.indexOf(startMark);
const ei = llms.indexOf(endMark);
if (si >= 0 && ei > si) llms = llms.slice(0, si) + section + llms.slice(ei);
else if (ei >= 0) llms = llms.slice(0, ei) + section + llms.slice(ei);
else llms = llms.trimEnd() + '\n\n' + section;
fs.writeFileSync(llmsPath, llms);

console.log('Generated ' + generated + ' landing pages; manifest entries: ' + manifest.length);
