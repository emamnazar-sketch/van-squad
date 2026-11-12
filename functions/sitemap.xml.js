/* Van Squads — automatic sitemap.
   Static pages + one URL per active business, generated from Supabase,
   so every business the nightly rotation adds appears here on its own. */

function slugify(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Metro table — mirrors tools/metro-map.mjs (keep in sync). A metro is keyed
   by the 3-digit ZIP prefix of a business's service ZIPs. */
var PREFIX_METRO = {
  '500': 'Des Moines', '501': 'Des Moines', '502': 'Des Moines', '503': 'Des Moines',
  '507': 'Waterloo', '522': 'Iowa City', '524': 'Cedar Rapids', '528': 'Davenport',
  '530': 'Milwaukee', '531': 'Milwaukee', '532': 'Milwaukee', '534': 'Racine',
  '537': 'Madison', '543': 'Green Bay', '549': 'Appleton',
  '551': 'Saint Paul', '553': 'Minneapolis', '554': 'Minneapolis', '558': 'Duluth',
  '559': 'Rochester', '565': 'Moorhead', '567': 'Grand Forks',
  '570': 'Sioux Falls', '571': 'Sioux Falls', '573': 'Mitchell', '574': 'Aberdeen',
  '575': 'Pierre', '577': 'Rapid City', '580': 'Fargo', '581': 'Fargo',
  '582': 'Grand Forks', '584': 'Jamestown', '585': 'Bismarck', '586': 'Dickinson',
  '587': 'Minot', '588': 'Williston',
  '590': 'Livingston', '591': 'Billings', '594': 'Great Falls', '596': 'Helena',
  '597': 'Bozeman', '598': 'Missoula', '599': 'Kalispell',
  '630': 'St. Louis', '631': 'St. Louis', '633': 'St. Louis',
  '640': 'Kansas City', '641': 'Kansas City', '652': 'Columbia', '658': 'Springfield',
  '660': 'Lawrence', '661': 'Kansas City', '662': 'Kansas City', '665': 'Manhattan',
  '666': 'Topeka', '670': 'Wichita', '671': 'Wichita', '672': 'Wichita',
  '680': 'Omaha', '681': 'Omaha', '685': 'Lincoln', '687': 'Norfolk', '688': 'Grand Island',
  '700': 'New Orleans', '701': 'New Orleans', '704': 'New Orleans', '705': 'Lafayette',
  '708': 'Baton Rouge',
  '720': 'Little Rock', '721': 'Little Rock', '722': 'Little Rock', '724': 'Jonesboro',
  '727': 'Fayetteville', '729': 'Fort Smith',
  '730': 'Oklahoma City', '731': 'Oklahoma City', '740': 'Tulsa', '741': 'Tulsa',
  '750': 'Dallas\u2013Fort Worth', '751': 'Dallas\u2013Fort Worth', '752': 'Dallas\u2013Fort Worth',
  '760': 'Dallas\u2013Fort Worth', '761': 'Dallas\u2013Fort Worth', '762': 'Dallas\u2013Fort Worth',
  '765': 'Jarrell',
  '770': 'Houston', '773': 'Houston', '774': 'Houston', '775': 'Houston',
  '780': 'San Antonio', '782': 'San Antonio', '786': 'Austin', '787': 'Austin',
  '800': 'Denver', '802': 'Denver', '803': 'Boulder', '805': 'Fort Collins',
  '809': 'Colorado Springs', '820': 'Cheyenne', '826': 'Casper',
  '836': 'Boise', '837': 'Boise',
  '840': 'Salt Lake City', '841': 'Salt Lake City', '844': 'Ogden', '846': 'Provo',
  '850': 'Phoenix', '852': 'Phoenix', '853': 'Phoenix',
  '871': 'Albuquerque', '874': 'Farmington', '875': 'Santa Fe', '880': 'Las Cruces',
  '881': 'Clovis', '882': 'Roswell', '883': 'Alamogordo',
  '890': 'Las Vegas', '891': 'Las Vegas',
  '956': 'Sacramento', '957': 'Sacramento', '958': 'Sacramento',
  '970': 'Portland', '971': 'Portland', '972': 'Portland',
  '980': 'Seattle', '981': 'Seattle', '984': 'Tacoma'
};
function xmlEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var STATIC_URLS = [
  ['https://vansquads.com/', 'daily', '1.0'],
  ['https://vansquads.com/blog/', 'weekly', '0.8'],
  ['https://vansquads.com/blog/mobile-car-detailing-cost-2026/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/mobile-dog-grooming-cost-vs-salon/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/deep-clean-cost-2026/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-to-tip-mobile-car-detailer/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-per-hour/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-do-you-pay-for-regular-house-cleaning/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-an-electrician-cost-per-hour/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/can-i-stay-and-watch-my-dog-during-mobile-grooming/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-sacramento/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-sacramento/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-sacramento/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-sacramento/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pool-cleaning-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-albuquerque/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-albuquerque/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-albuquerque/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-oklahoma-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-albuquerque/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pool-cleaning-cost-in-albuquerque/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pool-cleaning-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-dallas-fort-worth/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-boise/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-boise/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-boise/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-boise/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-boise/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-omaha/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-omaha/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-omaha/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-omaha/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-omaha/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-sioux-falls/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-sioux-falls/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-sioux-falls/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-portland/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-portland/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-portland/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-denver/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-denver/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-denver/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-denver/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-salt-lake-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-salt-lake-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-salt-lake-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-portland/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-sioux-falls/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-salt-lake-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-salt-lake-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-tulsa/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-fargo/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-fargo/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-fargo/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/services/mobile-car-detailing/', 'monthly', '0.7'],
  ['https://vansquads.com/services/mobile-pet-grooming/', 'monthly', '0.7'],
  ['https://vansquads.com/services/home-cleaning/', 'monthly', '0.7']
];

export async function onRequest({ env }) {
  var urls = STATIC_URLS.map(function (u) {
    return '  <url><loc>' + u[0] + '</loc><changefreq>' + u[1] + '</changefreq><priority>' + u[2] + '</priority></url>';
  });
  try {
    /* Supabase REST caps every response at 1,000 rows — page through ALL active
       businesses or every profile past the first 1,000 is missing from the sitemap.
       Mirrors the pagination in functions/business/[slug].js (fixed 2026-10-24). */
    var rows = [], offset = 0;
    while (offset < 10000) {
      var res = await fetch(env.SUPABASE_URL + '/rest/v1/businesses?status=eq.active&select=id,name,created_at,category,service_zips&order=created_at.asc&limit=1000&offset=' + offset,
        { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + env.SUPABASE_ANON_KEY } });
      if (!res.ok) break;
      var page = await res.json();
      rows = rows.concat(page);
      if (page.length < 1000) break;
      offset += 1000;
    }
    if (rows.length) {
      /* City x category landing pages: one URL per metro x category cell with
         >= 3 active businesses (same rule as tools/build-landing-pages.mjs). */
      var cellCounts = {};
      rows.forEach(function (b) {
        var metros = {};
        (b.service_zips || []).forEach(function (z) {
          var mn = PREFIX_METRO[String(z).slice(0, 3)];
          if (mn) metros[slugify(mn)] = 1;
        });
        Object.keys(metros).forEach(function (ms) {
          var key = ms + '|' + slugify(b.category);
          cellCounts[key] = (cellCounts[key] || 0) + 1;
        });
      });
      Object.keys(cellCounts).sort().forEach(function (key) {
        if (cellCounts[key] < 3) return;
        var parts = key.split('|');
        urls.push('  <url><loc>https://vansquads.com/' + parts[1] + '/' + parts[0] + '/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>');
      });
      var seen = {};
      rows.forEach(function (b) {
        var s = slugify(b.name) || b.id;
        if (seen[s]) s = s + '-' + String(b.id).slice(0, 6);
        seen[s] = 1;
        urls.push('  <url><loc>https://vansquads.com/business/' + xmlEsc(s) + '</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>');
      });
    }
  } catch (e) { /* static URLs still go out; businesses retry next crawl */ }
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.join('\n') + '\n</urlset>';
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=3600' }
  });
}
