/* Van Squads — automatic sitemap.
   Static pages + one URL per active business, generated from Supabase,
   so every business the nightly rotation adds appears here on its own. */

function slugify(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
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
  ['https://vansquads.com/services/mobile-car-detailing/', 'monthly', '0.7'],
  ['https://vansquads.com/services/mobile-pet-grooming/', 'monthly', '0.7'],
  ['https://vansquads.com/services/home-cleaning/', 'monthly', '0.7']
];

export async function onRequest({ env }) {
  var urls = STATIC_URLS.map(function (u) {
    return '  <url><loc>' + u[0] + '</loc><changefreq>' + u[1] + '</changefreq><priority>' + u[2] + '</priority></url>';
  });
  try {
    var res = await fetch(env.SUPABASE_URL + '/rest/v1/businesses?status=eq.active&select=id,name,created_at&order=created_at.asc&limit=1000',
      { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: 'Bearer ' + env.SUPABASE_ANON_KEY } });
    if (res.ok) {
      var rows = await res.json();
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
