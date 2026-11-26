/* Van Squads — automatic sitemap.
   Static pages + one URL per active business, generated from Supabase,
   so every business the nightly rotation adds appears here on its own. */

function slugify(name) {
  return String(name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Metro table — mirrors tools/metro-map.mjs (keep in sync). A metro is keyed
   by the 3-digit ZIP prefix of a business's service ZIPs. */
var PREFIX_METRO = {
  '015': 'Boston', '017': 'Boston', '018': 'Boston', '021': 'Boston',
  '022': 'Boston', '024': 'Boston', '028': 'Providence', '029': 'Providence',
  '030': 'Nashua', '031': 'Manchester',
  '032': 'Laconia', '033': 'Concord', '034': 'Keene', '037': 'Lebanon',
  '038': 'Portsmouth', '039': 'Boston', '040': 'Portland, Maine', '041': 'Portland, Maine',
  '042': 'Lewiston', '043': 'Augusta, Maine', '044': 'Bangor', '052': 'Bennington',
  '053': 'Brattleboro', '054': 'Burlington', '056': 'Montpelier', '057': 'Rutland',
  '100': 'New York', '101': 'New York', '102': 'New York', '103': 'New York',
  '104': 'New York', '105': 'New York', '106': 'New York', '107': 'New York',
  '108': 'New York', '111': 'New York', '112': 'New York', '113': 'New York',
  '114': 'New York', '115': 'New York', '151': 'Pittsburgh', '152': 'Pittsburgh',
  '165': 'Erie', '170': 'Harrisburg', '171': 'Harrisburg', '180': 'Bethlehem',
  '181': 'Allentown', '183': 'Bethlehem', '189': 'Philadelphia', '190': 'Philadelphia',
  '191': 'Philadelphia', '201': 'Northern Virginia', '208': 'Northern Virginia', '217': 'Martinsburg',
  '220': 'Northern Virginia', '221': 'Northern Virginia', '222': 'Northern Virginia', '223': 'Northern Virginia',
  '226': 'Martinsburg', '230': 'Richmond', '231': 'Richmond', '232': 'Richmond',
  '233': 'Chesapeake', '234': 'Virginia Beach', '235': 'Norfolk, Virginia', '253': 'Charleston, West Virginia',
  '254': 'Martinsburg', '257': 'Huntington', '258': 'Beckley', '259': 'Beckley',
  '260': 'Wheeling', '261': 'Parkersburg', '263': 'Clarksburg', '265': 'Morgantown',
  '271': 'Winston-Salem', '274': 'Greensboro', '275': 'Cary', '276': 'Raleigh',
  '277': 'Durham', '280': 'Charlotte', '282': 'Charlotte', '290': 'Columbia, South Carolina',
  '291': 'Columbia, South Carolina', '292': 'Columbia, South Carolina', '293': 'Spartanburg', '294': 'Charleston',
  '296': 'Greenville', '300': 'Atlanta', '301': 'Atlanta', '303': 'Atlanta',
  '305': 'Atlanta', '306': 'Athens', '307': 'Chattanooga', '308': 'Augusta',
  '309': 'Augusta', '314': 'Savannah', '322': 'Jacksonville', '327': 'Orlando',
  '328': 'Orlando', '330': 'Miami', '331': 'Miami', '333': 'Fort Lauderdale',
  '334': 'West Palm Beach', '335': 'Tampa', '336': 'Tampa', '337': 'St. Petersburg',
  '347': 'Orlando', '350': 'Birmingham', '351': 'Birmingham', '352': 'Birmingham',
  '354': 'Tuscaloosa', '356': 'Huntsville', '357': 'Huntsville', '358': 'Huntsville',
  '361': 'Montgomery', '365': 'Mobile', '366': 'Mobile', '368': 'Auburn',
  '370': 'Nashville', '371': 'Nashville', '372': 'Nashville', '373': 'Chattanooga',
  '374': 'Chattanooga', '377': 'Knoxville', '378': 'Knoxville', '379': 'Knoxville',
  '380': 'Memphis', '381': 'Memphis', '386': 'Memphis', '388': 'Tupelo',
  '390': 'Jackson', '391': 'Jackson', '392': 'Jackson', '393': 'Meridian',
  '394': 'Hattiesburg', '395': 'Gulfport', '400': 'Louisville', '402': 'Louisville',
  '403': 'Lexington', '405': 'Lexington', '410': 'Cincinnati', '421': 'Bowling Green',
  '423': 'Owensboro', '427': 'Elizabethtown', '430': 'Columbus', '431': 'Columbus',
  '432': 'Columbus', '436': 'Toledo', '440': 'Cleveland', '441': 'Cleveland',
  '450': 'Cincinnati', '451': 'Cincinnati', '452': 'Cincinnati', '454': 'Dayton',
  '460': 'Indianapolis', '461': 'Indianapolis', '462': 'Indianapolis', '463': 'Michigan City',
  '465': 'South Bend', '466': 'South Bend', '467': 'Fort Wayne', '468': 'Fort Wayne',
  '477': 'Evansville', '479': 'Lafayette, Indiana', '480': 'Detroit', '481': 'Ann Arbor',
  '482': 'Detroit', '483': 'Detroit', '485': 'Flint', '489': 'Lansing',
  '495': 'Grand Rapids',
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
  '600': 'Chicago', '601': 'Chicago', '602': 'Chicago', '603': 'Chicago',
  '604': 'Joliet', '605': 'Naperville', '606': 'Chicago', '608': 'Chicago',
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
  '945': 'Oakland', '948': 'Oakland',
  '956': 'Sacramento', '957': 'Sacramento', '958': 'Sacramento',
  '970': 'Portland', '971': 'Portland', '972': 'Portland',
  '980': 'Seattle', '981': 'Seattle', '984': 'Tacoma'
};
function xmlEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var STATIC_URLS = [
  ['https://vansquads.com/', 'daily', '1.0'],
  ['https://vansquads.com/what-it-costs/', 'monthly', '0.8'],
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
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pool-cleaning-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-kansas-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-phoenix/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pool-cleaning-cost-in-phoenix/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-phoenix/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-wichita/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-wichita/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-wichita/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-deep-cleaning-cost-in-wichita/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-las-vegas/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-las-vegas/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-las-vegas/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-lincoln/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-lincoln/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-lincoln/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-lincoln/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-lincoln/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-bismarck/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-bismarck/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-pet-grooming-cost-in-bismarck/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-rapid-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-rapid-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-pressure-washing-cost-in-rapid-city/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-seattle/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-tacoma/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-santa-fe/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-santa-fe/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-santa-fe/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-colorado-springs/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-las-cruces/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-a-handyman-cost-in-cheyenne/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-cheyenne/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-williston/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-house-cleaning-cost-in-grand-forks/', 'monthly', '0.7'],
  ['https://vansquads.com/blog/how-much-does-mobile-car-detailing-cost-in-grand-forks/', 'monthly', '0.7'],
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
