// Van Squads — metro definitions shared by the landing-page generator.
// A "metro" is the city area a blog City Visibility post targets. It is keyed
// by the 3-digit ZIP prefix of a business's service ZIPs: businesses are
// seeded metro by metro, and the blog's own metro counts (e.g. 21 house
// cleaning businesses in Boise) match this prefix grouping exactly.
// KEEP IN SYNC: the same PREFIX_METRO table is embedded in
// functions/business/[slug].js and functions/sitemap.xml.js (Cloudflare
// Pages functions cannot import from tools/).

export const PREFIX_METRO = {
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
  '945': 'Oakland', '948': 'Oakland',
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
