// Van Squads — metro definitions shared by the landing-page generator.
// A "metro" is the city area a blog City Visibility post targets. It is keyed
// by the 3-digit ZIP prefix of a business's service ZIPs: businesses are
// seeded metro by metro, and the blog's own metro counts (e.g. 21 house
// cleaning businesses in Boise) match this prefix grouping exactly.
// KEEP IN SYNC: the same PREFIX_METRO table is embedded in
// functions/business/[slug].js and functions/sitemap.xml.js (Cloudflare
// Pages functions cannot import from tools/).

export const PREFIX_METRO = {
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
  '750': 'Dallas–Fort Worth', '751': 'Dallas–Fort Worth', '752': 'Dallas–Fort Worth',
  '760': 'Dallas–Fort Worth', '761': 'Dallas–Fort Worth', '762': 'Dallas–Fort Worth',
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

// The five metros with a published City Visibility blog series — used to
// scope work that only applies to blog metros.
export const BLOG_METROS = {
  'Sacramento': ['956', '957', '958'],
  'Oklahoma City': ['730', '731'],
  'Albuquerque': ['871'],
  'Dallas–Fort Worth': ['750', '751', '752', '760', '761', '762'],
  'Boise': ['836', '837']
};

export function slugify(text) {
  return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function metroOfZip(zip) {
  const name = PREFIX_METRO[String(zip || '').slice(0, 3)];
  return name ? { name, slug: slugify(name) } : null;
}

// All distinct metros a business serves (any service ZIP in the metro).
export function metrosOfBusiness(business) {
  const seen = new Map();
  (business.service_zips || []).forEach((z) => {
    const m = metroOfZip(z);
    if (m && !seen.has(m.slug)) seen.set(m.slug, m);
  });
  return [...seen.values()];
}

// The business's primary metro: the metro of its first service ZIP.
export function primaryMetro(business) {
  const zips = business.service_zips || [];
  return zips.length ? metroOfZip(zips[0]) : null;
}
