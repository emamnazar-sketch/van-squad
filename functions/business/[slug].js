/* Van Squads — real, indexable business profile pages.
   Serves /business/<slug> as server-rendered HTML built from Supabase data,
   so Google can index every business individually. The app itself is
   untouched; the "Request a quote" button hands off to the app flow. */

var ZIP_NAMES = {

  '85003': 'Downtown Phoenix',
  '85004': 'Downtown Phoenix',
  '85006': 'East Phoenix',
  '85007': 'South Phoenix',
  '85009': 'West Phoenix',
  '85012': 'Midtown Phoenix',
  '85013': 'Uptown Phoenix',
  '85014': 'Central Phoenix',
  '85015': 'Christown, Phoenix',
  '85017': 'Alhambra, Phoenix',
  '85019': 'Maryvale, Phoenix',
  '85020': 'Moon Valley, Phoenix',
  '85021': 'North Phoenix',
  '85022': 'Moon Valley, Phoenix',
  '85024': 'Desert Ridge, Phoenix',
  '85027': 'Deer Valley, Phoenix',
  '85029': 'North Phoenix',
  '85032': 'Paradise Valley Village, Phoenix',
  '85034': 'Downtown Phoenix',
  '85040': 'South Phoenix',
  '85041': 'Laveen Village, Phoenix',
  '85042': 'South Mountain, Phoenix',
  '85051': 'Metrocenter, Phoenix',
  '85250': 'South Scottsdale',
  '85251': 'Old Town Scottsdale',
  '85254': 'North Scottsdale / Phoenix',
  '85257': 'South Scottsdale',
  '85260': 'North Scottsdale',
  '85281': 'Tempe',
  '85282': 'Tempe',
  '85287': 'Tempe',
  '85288': 'Tempe',
  '85339': 'Laveen Village, Phoenix',
  '95814': 'Downtown Sacramento', '95816': 'Midtown Sacramento', '95818': 'Land Park',
  '95843': 'Antelope', '95678': 'Roseville', '95661': 'East Roseville', '95747': 'West Roseville',
  '95677': 'Rocklin', '95765': 'Rocklin', '95648': 'Lincoln', '95691': 'West Sacramento',
  '95605': 'West Sacramento', '95821': 'Arden-Arcade', '95825': 'Arden-Arcade',
  '95610': 'Citrus Heights', '95621': 'Citrus Heights', '95670': 'Rancho Cordova',
  '95742': 'Rancho Cordova', '95630': 'Folsom', '95762': 'Folsom', '95624': 'Elk Grove',
  '95757': 'Elk Grove', '95758': 'Elk Grove', '95662': 'Orangevale',
    '89002': 'Henderson',
    '89004': 'Henderson',
    '89005': 'Boulder City',
    '89012': 'Green Valley, Henderson',
    '89014': 'Green Valley, Henderson',
    '89019': 'Henderson',
    '89044': 'Henderson',
    '89046': 'Henderson',
    '89052': 'Henderson',
    '89054': 'Henderson',
    '89074': 'Green Valley Ranch, Henderson',
    '89101': 'Downtown Las Vegas',
    '89102': 'Las Vegas',
    '89103': 'Spring Valley, Las Vegas',
    '89104': 'Las Vegas',
    '89106': 'Las Vegas',
    '89107': 'Las Vegas',
    '89108': 'Las Vegas',
    '89109': 'The Strip, Las Vegas',
    '89110': 'East Las Vegas',
    '89113': 'Southwest Las Vegas',
    '89117': 'The Lakes, Las Vegas',
    '89118': 'Las Vegas',
    '89119': 'Paradise, Las Vegas',
    '89120': 'Paradise, Las Vegas',
    '89121': 'East Las Vegas',
    '89123': 'Silverado Ranch, Las Vegas',
    '89128': 'Summerlin, Las Vegas',
    '89129': 'Centennial Hills, Las Vegas',
    '89130': 'Northwest Las Vegas',
    '89131': 'Aliante, Las Vegas',
    '89134': 'Summerlin, Las Vegas',
    '89135': 'Summerlin, Las Vegas',
    '89138': 'Summerlin, Las Vegas',
    '89139': 'South Las Vegas',
    '89141': 'Southwest Las Vegas',
    '89144': 'Summerlin, Las Vegas',
    '89145': 'West Las Vegas',
    '89146': 'West Las Vegas',
    '89147': 'Spring Valley, Las Vegas',
    '89148': 'Rhodes Ranch, Las Vegas',
    '89149': 'Northwest Las Vegas',
    '89166': 'Las Vegas',
    '89169': 'Las Vegas',
    '89178': 'Mountain\'s Edge, Las Vegas',
    '89179': 'Las Vegas',
    '89183': 'Las Vegas',
    '97005': 'Beaverton',
    '97006': 'Beaverton',
    '97008': 'Beaverton',
    '97015': 'Clackamas',
    '97027': 'Gladstone',
    '97030': 'Gresham',
    '97078': 'Sherwood',
    '97080': 'Gresham',
    '97086': 'Happy Valley',
    '97123': 'Hillsboro',
    '97202': 'Sellwood, Portland',
    '97204': 'Downtown Portland',
    '97206': 'Foster-Powell, Portland',
    '97211': 'Alberta Arts District, Portland',
    '97212': 'Irvington, Portland',
    '97213': 'Rose City Park, Portland',
    '97214': 'Buckman, Portland',
    '97215': 'Laurelhurst, Portland',
    '97216': 'Mill Park, Portland',
    '97218': 'Cully, Portland',
    '97219': 'Southwest Portland',
    '97220': 'Parkrose, Portland',
    '97222': 'Milwaukie',
    '97223': 'Tigard',
    '97224': 'Tigard',
    '97229': 'Bethany, Portland',
    '97230': 'Rockwood, Portland',
    '97232': 'Kerns, Portland',
    '97233': 'Rockwood, Gresham',
    '97236': 'Powellhurst-Gilbert, Portland',
    '97266': 'Portland',
    '97267': 'Milwaukie',
    '98004': 'Downtown Bellevue',
    '98005': 'Bellevue',
    '98006': 'Bellevue',
    '98007': 'Bellevue',
    '98008': 'Bellevue',
    '98101': 'Downtown Seattle',
    '98102': 'Capitol Hill, Seattle',
    '98103': 'Fremont, Seattle',
    '98104': 'Downtown Seattle',
    '98105': 'University District, Seattle',
    '98107': 'Ballard, Seattle',
    '98109': 'South Lake Union, Seattle',
    '98112': 'Madison Park, Seattle',
    '98115': 'Wedgwood, Seattle',
    '98117': 'Ballard, Seattle',
    '98118': 'Rainier Valley, Seattle',
    '98119': 'Queen Anne, Seattle',
    '98121': 'Belltown, Seattle',
    '98122': 'Central District, Seattle',
    '98125': 'Lake City, Seattle',
    '98133': 'North Seattle',
    '98155': 'Lake Forest Park',
    '98177': 'Shoreline',
    '98199': 'Magnolia, Seattle',
    '98402': 'Downtown Tacoma',
    '98404': 'East Tacoma',
    '98405': 'Central Tacoma',
    '98409': 'South Tacoma',
    '98465': 'University Place',
  '83642': 'Meridian',
  '83646': 'Meridian',
  '83651': 'Nampa',
  '83702': 'Downtown Boise',
  '83703': 'North End, Boise',
  '83704': 'West Boise',
  '83705': 'Boise Bench',
  '83706': 'Southeast Boise',
  '83709': 'Southwest Boise',
  '83712': 'East Boise',
  '83713': 'West Boise',
  '83714': 'Garden City',
  '83716': 'Harris Ranch, Boise',
  '84010': 'Bountiful',
  '84014': 'Centerville',
  '84020': 'Draper',
  '84025': 'Farmington',
  '84037': 'Kaysville',
  '84044': 'Magna',
  '84054': 'North Salt Lake',
  '84060': 'Park City',
  '84087': 'Woods Cross',
  '84094': 'Sandy',
  '84098': 'Park City',
  '84101': 'Downtown Salt Lake City',
  '84102': 'Salt Lake City',
  '84103': 'The Avenues, Salt Lake City',
  '84104': 'Salt Lake City',
  '84105': 'Salt Lake City',
  '84106': 'Salt Lake City',
  '84107': 'Murray',
  '84108': 'Salt Lake City',
  '84109': 'Salt Lake City',
  '84111': 'Salt Lake City',
  '84112': 'Salt Lake City',
  '84113': 'Salt Lake City',
  '84115': 'Salt Lake City',
  '84116': 'Rose Park, Salt Lake City',
  '84119': 'West Valley City',
  '84120': 'West Valley City',
  '84124': 'Holladay',
  '84128': 'West Valley City',
  '84404': 'Ogden',
  '84601': 'Provo',
  '59011': 'Big Timber',
  '59047': 'Livingston',
  '59101': 'Billings',
  '59102': 'Billings',
  '59105': 'Billings',
  '59401': 'Great Falls',
  '59405': 'Great Falls',
  '59414': 'Black Eagle',
  '59601': 'Helena',
  '59635': 'East Helena',
  '59714': 'Belgrade',
  '59715': 'Bozeman',
  '59716': 'Big Sky',
  '59718': 'Bozeman',
  '59729': 'Ennis',
  '59741': 'Manhattan',
  '59752': 'Three Forks',
  '59801': 'Missoula',
  '59802': 'Missoula',
  '59803': 'Missoula',
  '59804': 'Missoula',
  '59808': 'Missoula',
  '59812': 'Missoula',
  '59820': 'Alberton',
  '59821': 'Arlee',
  '59823': 'Bonner',
  '59825': 'Clinton',
  '59828': 'Corvallis',
  '59833': 'Florence',
  '59834': 'Frenchtown',
  '59840': 'Hamilton',
  '59841': 'Pinesdale',
  '59846': 'Huson',
  '59847': 'Lolo',
  '59870': 'Stevensville',
  '59872': 'Superior',
  '59875': 'Victor',
  '59901': 'Kalispell',
  '80004': 'Arvada',
  '80013': 'Aurora',
  '80016': 'Saddle Rock, Aurora',
  '80202': 'Downtown Denver',
  '80203': 'Capitol Hill, Denver',
  '80205': 'Whittier, Denver',
  '80209': 'Washington Park, Denver',
  '80210': 'University Park, Denver',
  '80220': 'Hilltop, Denver',
  '80222': 'University Hills, Denver',
  '80224': 'Windsor Gardens, Denver',
  '80226': 'Lakewood',
  '80238': 'Central Park, Denver',
  '80301': 'Boulder',
  '80521': 'Fort Collins',
  '80524': 'Fort Collins',
  '80525': 'Fort Collins',
  '80903': 'Downtown Colorado Springs',
  '80905': 'Ivywild, Colorado Springs',
  '80907': 'Colorado Springs',
  '80909': 'Colorado Springs',
  '80918': 'North Colorado Springs',
  '80919': 'Rockrimmon, Colorado Springs',
  '80920': 'Briargate, Colorado Springs',
  '80921': 'Monument',
  '82001': 'Cheyenne',
  '82003': 'Cheyenne',
  '82009': 'Cheyenne',
  '82070': 'Laramie',
  '82604': 'Casper',
  '82609': 'Casper',
    '87102': 'Albuquerque',
    '87104': 'Albuquerque',
    '87105': 'Albuquerque',
    '87106': 'Albuquerque',
    '87107': 'Albuquerque',
    '87108': 'Albuquerque',
    '87109': 'Albuquerque',
    '87110': 'Albuquerque',
    '87111': 'Albuquerque',
    '87112': 'Albuquerque',
    '87113': 'Albuquerque',
    '87114': 'Albuquerque',
    '87120': 'Albuquerque',
    '87121': 'Albuquerque',
    '87122': 'Albuquerque',
    '87123': 'Albuquerque',
    '87124': 'Rio Rancho',
    '87144': 'Rio Rancho',
    '87401': 'Farmington',
    '87402': 'Farmington',
    '87501': 'Santa Fe',
    '87505': 'Santa Fe',
    '87507': 'Santa Fe',
    '88001': 'Las Cruces',
    '88005': 'Las Cruces',
    '88011': 'Las Cruces',
    '88012': 'Las Cruces',
    '88101': 'Clovis',
    '88201': 'Roswell',
    '88240': 'Hobbs',
    '88310': 'Alamogordo',
    '56560': 'Moorhead',
    '56721': 'East Grand Forks',
    '57005': 'Brandon',
    '57032': 'Harrisburg',
    '57064': 'Tea',
    '57103': 'Sioux Falls',
    '57104': 'Sioux Falls',
    '57105': 'Sioux Falls',
    '57106': 'Sioux Falls',
    '57107': 'Sioux Falls',
    '57108': 'Sioux Falls',
    '57110': 'Sioux Falls',
    '58047': 'Horace',
    '58078': 'West Fargo',
    '58102': 'Fargo',
    '58103': 'Fargo',
    '58104': 'Fargo',
    '58105': 'Fargo',
    '58201': 'Grand Forks',
    '58202': 'Grand Forks',
    '58203': 'Grand Forks',
    '58401': 'Jamestown',
    '58501': 'Bismarck',
    '58502': 'Bismarck',
    '58503': 'Bismarck',
    '58504': 'Bismarck',
    '58505': 'Bismarck',
    '58521': 'Baldwin',
    '58554': 'Mandan',
    '58601': 'Dickinson',
    '58701': 'Minot',
    '58703': 'Minot',
    '58801': 'Williston',
    '57117': 'Sioux Falls',
    '57003': 'Baltic',
    '57013': 'Canton',
    '57020': 'Crooks',
    '57022': 'Dell Rapids',
    '57033': 'Hartford',
    '57039': 'Lennox',
    '57078': 'Yankton',
    '57301': 'Mitchell',
    '57401': 'Aberdeen',
    '57501': 'Pierre',
    '57701': 'Rapid City',
    '57702': 'Rapid City',
    '57703': 'Rapid City',
    '57719': 'Piedmont',
    '57783': 'Spearfish',
    '68102': 'Omaha',
    '68108': 'Omaha',
    '68114': 'Omaha',
    '68122': 'Omaha',
    '68124': 'Omaha',
    '68132': 'Omaha',
    '68135': 'Omaha',
    '68144': 'Omaha',
    '68154': 'Omaha',
    '68005': 'Bellevue',
    '68104': 'North Omaha',
    '68105': 'Midtown Omaha',
    '68106': 'Omaha',
    '68116': 'Northwest Omaha',
    '68134': 'Northwest Omaha',
    '68136': 'Southwest Omaha',
    '68142': 'Northwest Omaha',
    '68501': 'Downtown Lincoln',
    '68502': 'Lincoln',
    '68503': 'Lincoln',
    '68504': 'Lincoln',
    '68505': 'Lincoln',
    '68506': 'Lincoln',
    '68507': 'Lincoln',
    '68508': 'Lincoln',
    '68510': 'Lincoln',
    '68512': 'Lincoln',
    '68516': 'Lincoln',
    '68521': 'Lincoln',
    '68701': 'Norfolk',
    '68801': 'Grand Island',
    '68847': 'Kearney',
  
};

function slugify(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function sbHeaders(env) {
  return { apikey: env.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + env.SUPABASE_ANON_KEY };
}
async function fetchActiveBusinesses(env) {
  var base = env.SUPABASE_URL + '/rest/v1/businesses?status=eq.active&order=created_at.asc&limit=1000';
  var res = await fetch(base + '&select=id,name,category,description,phone,website,service_zips,verified,created_at,logo_url,banner_url', { headers: sbHeaders(env) });
  if (!res.ok) {
    /* banner_url arrives with the 2026-10-18 migration; fall back gracefully */
    res = await fetch(base + '&select=id,name,category,description,phone,website,service_zips,verified,created_at,logo_url', { headers: sbHeaders(env) });
  }
  if (!res.ok) return null;
  return res.json();
}
function buildSlugMap(rows) {
  var map = new Map();
  rows.forEach(function (b) {
    var s = slugify(b.name) || b.id;
    if (map.has(s)) s = s + '-' + String(b.id).slice(0, 6);
    b._slug = s;
    map.set(s, b);
  });
  return map;
}
function areasOf(b) {
  var seen = {}, out = [];
  (b.service_zips || []).forEach(function (z) {
    var label = ZIP_NAMES[z] || ('ZIP ' + z);
    if (!seen[label]) { seen[label] = 1; out.push(label); }
  });
  return out;
}
function pageShell(title, metaDesc, canonical, body, jsonLd, ogImage) {
  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + esc(title) + '</title>\n' +
    '<meta name="description" content="' + esc(metaDesc) + '">\n' +
    '<link rel="canonical" href="' + esc(canonical) + '">\n' +
    '<meta property="og:title" content="' + esc(title) + '">\n' +
    '<meta property="og:description" content="' + esc(metaDesc) + '">\n' +
    '<meta property="og:url" content="' + esc(canonical) + '">\n' +
    '<meta property="og:type" content="website">\n' +
    '<meta property="og:image" content="' + esc(ogImage || 'https://vansquads.com/img/logo.png') + '">\n' +
    '<link rel="icon" type="image/png" href="/img/favicon-512.png">\n' +
    '<link rel="stylesheet" href="/css/styles.css?v=20261020a">\n' +
    (jsonLd ? '<script type="application/ld+json">' + jsonLd + '</script>\n' : '') +
    '<style>' +
    '.prof-head{padding:34px 0 6px}.p-hero{width:100%;height:300px;object-fit:cover;border-radius:18px;display:block;margin:22px 0 2px}.p-banner{width:100%;height:230px;object-fit:cover;border-radius:18px;display:block;margin:22px 0 -4px}.prof-cat{font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--orange)}' +
    '.prof-head h1{margin:6px 0 4px;font-size:34px}.prof-desc{font-size:17px;color:var(--ink);max-width:720px}' +
    '.prof-sec{margin:30px 0}.prof-sec h2{font-size:21px;margin:0 0 12px}' +
    '.svc-row{display:flex;justify-content:space-between;gap:14px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin-bottom:10px;box-shadow:var(--shadow)}' +
    '.svc-row .p{font-weight:800;color:var(--navy);white-space:nowrap}' +
    '.area-chips{display:flex;flex-wrap:wrap;gap:10px}.area-chips span{background:var(--band);border-radius:999px;padding:8px 14px;font-size:14px;font-weight:600}' +
    '.prof-cta{background:var(--navy);color:#fff;border-radius:20px;padding:30px 28px;margin:34px 0;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}' +
    '.prof-cta h2{color:#fff;margin:0 0 6px;font-size:24px}.prof-cta p{color:#C6D2DE;margin:0}' +
    '.rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.rel-grid a{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px 18px;text-decoration:none;box-shadow:var(--shadow);font-weight:700}' +
    '.rel-grid a span{display:block;color:var(--muted);font-weight:600;font-size:13.5px;margin-top:3px}' +
    '@media(max-width:760px){.rel-grid{grid-template-columns:1fr}.p-hero{height:200px}.p-banner{height:150px}}' +
    '</style>\n</head>\n<body>\n' +
    '<header class="site-header"><div class="wrap header-inner">' +
    '<a class="brand" href="/" aria-label="Van Squads home"><img class="brand-logo" src="/img/logo.png" alt="Van Squads"></a>' +
    '<nav class="main-nav" aria-label="Main"><a href="/#/">Home</a><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/#/about">About</a><a href="/blog/">Blog</a><a href="/#/join">List your business</a></nav>' +
    '<button class="menu-btn" id="menu-btn" aria-label="Open menu">☰</button></div><div class="mobile-nav" id="mobile-nav"><a href="/#/">Home</a><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/#/about">About</a><a href="/blog/">Blog</a><a href="/#/join">List your business</a></div></header>\n<main class="wrap">' + body + '</main>\n' +
    '<footer class="site-footer"><div class="wrap footer-inner"><div class="footer-brand">' +
    '<img class="footer-logo-img" src="/img/logo-icon.png" alt="" aria-hidden="true">' +
    '<div><strong>Van Squads</strong><p>Local services. At your door.</p></div></div>' +
    '<nav class="footer-nav" aria-label="Footer"><a href="/#/browse">Explore services</a><a href="/#/how-it-works">How it works</a><a href="/blog/">Blog</a><a href="/#/join">List your business</a><a href="/#/about">About</a><a href="/#/contact">Contact</a></nav>' +
    '</div></footer>\n<script>var b=document.getElementById("menu-btn"),n=document.getElementById("mobile-nav");if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o);});}</script>\n</body>\n</html>';
}

export async function onRequest({ request, env, params }) {
  var url = new URL(request.url);
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    return Response.redirect(url.origin + url.pathname.replace(/\/+$/, ''), 301);
  }
  var slug = String(params.slug || '');
  var rows = await fetchActiveBusinesses(env);
  if (!rows) {
    return new Response(pageShell('Van Squads', 'Local services. At your door.', 'https://vansquads.com/',
      '<div class="empty" style="margin:60px 0"><h3>Something went wrong loading this page.</h3><a class="btn btn-primary" href="/">Go to Van Squads</a></div>'),
      { status: 502, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  var map = buildSlugMap(rows);
  // Old app-style links carry the raw id — upgrade them to the pretty address.
  if (/^[0-9a-f-]{36}$/i.test(slug)) {
    var byId = rows.find(function (r) { return r.id === slug; });
    if (byId) return Response.redirect('https://vansquads.com/business/' + byId._slug, 301);
  }
  var b = map.get(slug);
  if (!b) {
    return new Response(pageShell('Business not found | Van Squads', 'This business is not listed on Van Squads.',
      'https://vansquads.com/business/' + slug,
      '<div class="empty" style="margin:60px 0"><h3>We could not find that business.</h3><p>It may have been removed, or the address is wrong.</p><a class="btn btn-primary" href="/#/browse">Explore services instead</a></div>'),
      { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' } });
  }

  var listings = [];
  try {
    var lres = await fetch(env.SUPABASE_URL + '/rest/v1/listings?business_id=eq.' + b.id +
      '&status=eq.active&select=title,description,price,price_type&order=created_at.asc&limit=20',
      { headers: sbHeaders(env) });
    if (lres.ok) listings = await lres.json();
  } catch (e) { /* listings are an enhancement, not a requirement */ }

  var areas = areasOf(b);
  var primary = areas[0] || '';
  var canonical = 'https://vansquads.com/business/' + b._slug;
  var appLink = 'https://vansquads.com/#/business/' + b.id;
  var photoAbs = b.logo_url ? (String(b.logo_url).indexOf('http') === 0 ? String(b.logo_url) : 'https://vansquads.com/' + String(b.logo_url).replace(/^\//, '')) : '';
  var hero = photoAbs ? '<img class="p-hero" src="' + esc(photoAbs) + '" alt="' + esc(b.name) + '">' : '';
  var bannerAbs = b.banner_url ? (String(b.banner_url).indexOf('http') === 0 ? String(b.banner_url) : 'https://vansquads.com/' + String(b.banner_url).replace(/^\//, '')) : '';
  var banner = bannerAbs ? '<img class="p-banner" src="' + esc(bannerAbs) + '" alt="">' : '';
  var title = b.name + ' — ' + b.category + (primary ? ' in ' + primary : '') + ' | Van Squads';
  var desc = (b.description || '').replace(/\s+/g, ' ').trim();
  var metaDesc = desc ? desc.slice(0, 158) :
    (b.name + ' offers mobile ' + String(b.category || 'services').toLowerCase() + ' that comes to you' +
     (primary ? ' in ' + primary : '') + '. Request a free quote on Van Squads — no middleman fees.');

  var ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: b.name,
    description: desc || metaDesc,
    url: canonical,
    telephone: b.phone || undefined,
    areaServed: areas.length ? areas : undefined,
    sameAs: b.website || undefined,
    image: photoAbs || undefined
  };
  var jsonLd = JSON.stringify(ld).replace(/</g, '\\u003c');

  var check = b.verified ? ' <span class="verified-check big" title="Verified business">✓</span>' : '';
  var claimLine = b.verified ? '' :
    '<p class="claim-line">Is this your business? <a href="' + esc(appLink) + '">Claim it →</a></p>';

  var svcRows = listings.map(function (l) {
    var price = (l.price_type === 'quote' || l.price == null) ? 'Quote on request' : ('$' + l.price);
    return '<div class="svc-row"><div><strong>' + esc(l.title) + '</strong>' +
      (l.description ? '<div class="muted" style="font-size:15px;margin-top:2px">' + esc(l.description) + '</div>' : '') +
      '</div><div class="p">' + esc(price) + '</div></div>';
  }).join('');

  var related = rows.filter(function (r) { return r.id !== b.id && r.category === b.category; }).slice(0, 3);
  var relHtml = related.length ?
    '<div class="prof-sec"><h2>More ' + esc(b.category) + ' businesses</h2><div class="rel-grid">' +
    related.map(function (r) {
      return '<a href="/business/' + esc(r._slug) + '">' + esc(r.name) + '<span>' + esc(areasOf(r)[0] || '') + '</span></a>';
    }).join('') + '</div></div>' : '';

  var body = banner + hero +
    '<div class="prof-head"><a class="back" href="/#/browse">← Explore services</a>' +
    '<p class="prof-cat" style="margin-top:16px">' + esc(b.category) + (primary ? ' · ' + esc(primary) : '') + '</p>' +
    '<h1>' + esc(b.name) + check + '</h1>' + claimLine +
    (desc ? '<p class="prof-desc">' + esc(desc) + '</p>' : '') +
    (b.phone ? '<p class="muted">Call: ' + esc(b.phone) + '</p>' : '') +
    (b.website ? '<p><a href="' + esc(b.website) + '" rel="noopener" target="_blank">Visit their website ↗</a></p>' : '') +
    '</div>' +
    (svcRows ? '<div class="prof-sec"><h2>Services</h2>' + svcRows + '</div>' : '') +
    (areas.length ? '<div class="prof-sec"><h2>Areas served</h2><div class="area-chips">' +
      areas.map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('') + '</div></div>' : '') +
    '<div class="prof-cta"><div><h2>Request a quote from ' + esc(b.name) + '</h2>' +
    '<p>Free to request. Your details go only to this business — never sold, never shared with a list of pros.</p></div>' +
    '<a class="btn btn-primary" href="' + esc(appLink) + '">Request a quote →</a></div>' +
    relHtml;

  return new Response(pageShell(title, metaDesc, canonical, body, jsonLd, photoAbs), {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300, s-maxage=3600' }
  });
}
