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
    '66012': 'Bonner Springs',
    '66044': 'Lawrence',
    '66047': 'Lawrence',
    '66062': 'Olathe',
    '66102': 'Kansas City',
    '66103': 'Kansas City',
    '66104': 'Kansas City',
    '66106': 'Kansas City',
    '66202': 'Mission',
    '66203': 'Shawnee',
    '66210': 'Overland Park',
    '66212': 'Overland Park',
    '66214': 'Overland Park',
    '66215': 'Lenexa',
    '66223': 'Overland Park',
    '66502': 'Manhattan',
    '66606': 'Topeka',
    '66608': 'Topeka',
    '66610': 'Topeka',
    '66614': 'Topeka',
    '67002': 'Andover',
    '67017': 'Cheney',
    '67030': 'Halstead',
    '67037': 'Derby',
    '67052': 'Goddard',
    '67101': 'Wichita',
    '67110': 'Mulvane',
    '67133': 'Rose Hill',
    '67147': 'Newton',
    '67203': 'Riverside, Wichita',
    '67204': 'Wichita',
    '67205': 'Wichita',
    '67206': 'Wichita',
    '67207': 'Wichita',
    '67208': 'College Hill, Wichita',
    '67209': 'Wichita',
    '67211': 'Wichita',
    '67212': 'Wichita',
    '67213': 'Wichita',
    '67214': 'Wichita',
    '67215': 'Wichita',
    '67217': 'Wichita',
    '67218': 'Wichita',
    '67219': 'Wichita',
    '67220': 'Wichita',
    '67226': 'Wichita',
    '67228': 'Wichita',
    '67230': 'Wichita',
    '67232': 'Wichita',
    '67235': 'Wichita',
  
    '73003': 'Edmond',
    '73007': 'Arcadia',
    '73012': 'Edmond',
    '73013': 'Edmond',
    '73025': 'Edmond',
    '73034': 'Edmond',
    '73072': 'Norman',
    '73084': 'Spencer',
    '73106': 'Oklahoma City',
    '73114': 'Oklahoma City',
    '73116': 'Oklahoma City',
    '73117': 'Oklahoma City',
    '73118': 'Oklahoma City',
    '73120': 'Oklahoma City',
    '73127': 'Oklahoma City',
    '73132': 'Oklahoma City',
    '73139': 'Oklahoma City',
    '73160': 'Moore',
    '73162': 'Oklahoma City',
    '74012': 'Broken Arrow',
    '74105': 'Tulsa',
    '74112': 'Tulsa',
    '74114': 'Tulsa',
    '74133': 'Tulsa',
    '74135': 'Tulsa',
    '74136': 'Tulsa',
    '74137': 'Tulsa',
    '74145': 'Tulsa',
    '75023': 'Plano',
    '75024': 'Plano',
    '75025': 'Plano',
    '75034': 'Frisco',
    '75043': 'Garland',
    '75044': 'Garland',
    '75052': 'Grand Prairie',
    '75056': 'The Colony',
    '75061': 'Irving',
    '75067': 'Lewisville',
    '75071': 'McKinney',
    '75080': 'Richardson',
    '75088': 'Rowlett',
    '75093': 'Plano',
    '75094': 'Plano',
    '75150': 'Mesquite',
    '75182': 'Sunnyvale',
    '75206': 'Lower Greenville, Dallas',
    '75214': 'Lakewood, Dallas',
    '75218': 'White Rock, Dallas',
    '75243': 'Lake Highlands, Dallas',
    '76013': 'Arlington',
    '76018': 'Arlington',
    '76102': 'Downtown Fort Worth',
    '76103': 'Fort Worth',
    '76104': 'Near Southside, Fort Worth',
    '76105': 'Fort Worth',
    '76106': 'Northside, Fort Worth',
    '76107': 'West Fort Worth',
    '76108': 'Fort Worth',
    '76109': 'Fort Worth',
    '76110': 'Fort Worth',
    '76111': 'Fort Worth',
    '76112': 'East Fort Worth',
    '76114': 'Fort Worth',
    '76115': 'Fort Worth',
    '76116': 'West Fort Worth',
    '76119': 'Fort Worth',
    '76120': 'East Fort Worth',
    '76123': 'Fort Worth',
    '76126': 'Benbrook',
    '76129': 'Fort Worth',
    '76131': 'Saginaw',
    '76132': 'Southwest Fort Worth',
    '76133': 'Fort Worth',
    '76134': 'Fort Worth',
    '76135': 'Lake Worth',
    '76137': 'North Fort Worth',
    '76140': 'Kennedale',
    '76177': 'North Fort Worth',
    '76179': 'Saginaw',
    '76210': 'Denton',
    '76244': 'Keller',
    '77002': 'Downtown Houston',
    '77003': 'East Downtown, Houston',
    '77004': 'Third Ward, Houston',
    '77005': 'West University Place',
    '77006': 'Montrose, Houston',
    '77007': 'Washington Avenue, Houston',
    '77008': 'Houston Heights',
    '77009': 'Northside, Houston',
    '77011': 'East End, Houston',
    '77014': 'Northwest Houston',
    '77018': 'Garden Oaks, Houston',
    '77019': 'River Oaks, Houston',
    '77020': 'Fifth Ward, Houston',
    '77021': 'South Park, Houston',
    '77023': 'Eastwood, Houston',
    '77024': 'Memorial, Houston',
    '77025': 'South Main, Houston',
    '77027': 'Upper Kirby, Houston',
    '77030': 'Texas Medical Center, Houston',
    '77032': 'Aldine, Houston',
    '77035': 'Westbury, Houston',
    '77036': 'Sharpstown, Houston',
    '77038': 'North Houston',
    '77040': 'Northwest Houston',
    '77041': 'West Houston',
    '77042': 'Westchase, Houston',
    '77046': 'Greenway Plaza, Houston',
    '77054': 'Astrodome, Houston',
    '77055': 'Spring Branch, Houston',
    '77056': 'Galleria, Houston',
    '77057': 'Tanglewood, Houston',
    '77060': 'Greenspoint, Houston',
    '77063': 'Mid West, Houston',
    '77064': 'Champions, Houston',
    '77065': 'Cypress',
    '77066': 'Champions Forest, Houston',
    '77070': 'Willowbrook, Houston',
    '77071': 'Southwest Houston',
    '77074': 'Alief, Houston',
    '77077': 'Energy Corridor, Houston',
    '77079': 'Energy Corridor, Houston',
    '77080': 'Northwest Houston',
    '77081': 'Gulfton, Houston',
    '77082': 'West Houston',
    '77084': 'Copperfield, Houston',
    '77086': 'North Houston',
    '77087': 'Southeast Houston',
    '77089': 'Sagemont, Houston',
    '77091': 'Northline, Houston',
    '77092': 'Oak Forest, Houston',
    '77095': 'Northwest Houston',
    '77096': 'Meyerland, Houston',
    '77098': 'Montrose, Houston',
    '77338': 'Humble',
    '77345': 'Kingwood, Houston',
    '77379': 'Spring',
    '77401': 'Bellaire',
    '77410': 'Cypress',
    '77429': 'Cypress',
    '77433': 'Cypress',
    '77459': 'Missouri City',
    '77477': 'Stafford',
    '77478': 'Sugar Land',
    '77479': 'Sugar Land',
    '77489': 'Missouri City',
    '77494': 'Katy',
    '77498': 'Sugar Land',
    '77502': 'Pasadena',
    '77504': 'Pasadena',
    '77584': 'Pearland',
    '76537': 'Jarrell',
    '78023': 'Helotes',
    '78201': 'Monte Vista, San Antonio',
    '78204': 'King William, San Antonio',
    '78207': 'San Antonio',
    '78209': 'Alamo Heights, San Antonio',
    '78212': 'San Antonio',
    '78213': 'San Antonio',
    '78215': 'Downtown San Antonio',
    '78216': 'San Antonio',
    '78217': 'San Antonio',
    '78218': 'San Antonio',
    '78227': 'San Antonio',
    '78228': 'San Antonio',
    '78229': 'Medical Center, San Antonio',
    '78230': 'San Antonio',
    '78231': 'San Antonio',
    '78232': 'San Antonio',
    '78233': 'San Antonio',
    '78237': 'San Antonio',
    '78238': 'San Antonio',
    '78239': 'San Antonio',
    '78240': 'San Antonio',
    '78244': 'San Antonio',
    '78245': 'San Antonio',
    '78247': 'San Antonio',
    '78248': 'San Antonio',
    '78249': 'San Antonio',
    '78250': 'San Antonio',
    '78251': 'San Antonio',
    '78252': 'San Antonio',
    '78253': 'Alamo Ranch, San Antonio',
    '78254': 'San Antonio',
    '78256': 'San Antonio',
    '78257': 'San Antonio',
    '78258': 'Stone Oak, San Antonio',
    '78259': 'San Antonio',
    '78260': 'Timberwood Park, San Antonio',
    '78261': 'San Antonio',
    '78268': 'San Antonio',
    '78613': 'Cedar Park',
    '78626': 'Georgetown',
    '78628': 'Georgetown',
    '78634': 'Hutto',
    '78641': 'Leander',
    '78642': 'Liberty Hill',
    '78660': 'Pflugerville',
    '78664': 'Round Rock',
    '78665': 'Round Rock',
    '78681': 'Round Rock',
    '78701': 'Downtown Austin',
    '78702': 'East Austin',
    '78703': 'Austin',
    '78704': 'Zilker, Austin',
    '78705': 'Austin',
    '78717': 'Austin',
    '78721': 'East Austin',
    '78722': 'East Austin',
    '78723': 'Austin',
    '78724': 'East Austin',
    '78729': 'Austin',
    '78731': 'Austin',
    '78732': 'Steiner Ranch, Austin',
    '78733': 'Austin',
    '78734': 'Lakeway',
    '78735': 'Austin',
    '78736': 'Austin',
    '78737': 'Austin',
    '78738': 'Bee Cave',
    '78739': 'Austin',
    '78741': 'East Riverside, Austin',
    '78744': 'Austin',
    '78745': 'Austin',
    '78746': 'West Lake Hills',
    '78747': 'Austin',
    '78748': 'Austin',
    '78749': 'Austin',
    '78750': 'Austin',
    '78751': 'North Loop, Austin',
    '78752': 'Austin',
    '78753': 'Austin',
    '78754': 'Austin',
    '78756': 'Austin',
    '78757': 'Austin',
    '78758': 'Austin',
    '78759': 'Austin',
    '55104': 'Midway, Saint Paul',
    '55106': 'East Side, Saint Paul',
    '55109': 'Maplewood',
    '55113': 'Roseville',
    '55116': 'Highland Park, Saint Paul',
    '55337': 'Burnsville',
    '55344': 'Eden Prairie',
    '55407': 'South Minneapolis',
    '55413': 'Northeast Minneapolis',
    '55419': 'Southwest Minneapolis',
    '55423': 'Richfield',
    '55426': 'St. Louis Park',
    '55430': 'Brooklyn Center',
    '55431': 'Bloomington',
    '55447': 'Plymouth',
    '55811': 'Duluth',
    '55901': 'Rochester',
    '55904': 'Rochester',
  '50003': 'Adel',
  '50021': 'Ankeny',
  '50023': 'Ankeny',
  '50038': 'Booneville',
  '50039': 'Bouton',
  '50063': 'Dallas Center',
  '50069': 'De Soto',
  '50109': 'Granger',
  '50111': 'Grimes',
  '50131': 'Johnston',
  '50146': 'Linden',
  '50167': 'Minburn',
  '50211': 'Norwalk',
  '50220': 'Perry',
  '50233': 'Redfield',
  '50261': 'Van Meter',
  '50263': 'Waukee',
  '50265': 'West Des Moines',
  '50266': 'West Des Moines',
  '50310': 'Des Moines',
  '50311': 'Des Moines',
  '50312': 'Des Moines',
  '50314': 'Des Moines',
  '50317': 'Des Moines',
  '50322': 'Urbandale',
  '50323': 'Urbandale',
  '50325': 'Clive',
  '50701': 'Waterloo',
  '52240': 'Iowa City',
  '52402': 'Cedar Rapids',
  '52403': 'Cedar Rapids',
  '52404': 'Cedar Rapids',
  '52801': 'Davenport',
  '52802': 'Davenport',
  '63005': 'Chesterfield',

  '63011': 'Ellisville',

  '63017': 'Chesterfield',

  '63033': 'Florissant',

  '63034': 'Florissant',

  '63119': 'Webster Groves, St. Louis',

  '63122': 'Kirkwood, St. Louis',

  '63128': 'South County, St. Louis',

  '63146': 'Maryland Heights',

  '63301': 'St. Charles',

  '63304': 'Cottleville',

  '63385': 'Wentzville',

  '64015': 'Blue Springs',

  '64055': 'Independence',

  '64063': 'Lee\'s Summit',

  '64068': 'Liberty',

  '64086': 'Lee\'s Summit',

  '64111': 'Midtown, Kansas City',

  '64113': 'Brookside, Kansas City',

  '64114': 'Waldo, Kansas City',

  '64117': 'Kansas City',

  '64118': 'Gladstone',

  '64133': 'Raytown',

  '64151': 'Kansas City',

  '64157': 'Liberty',

  '65201': 'Columbia',

  '65202': 'Columbia',

  '65203': 'Columbia',

  '65804': 'Springfield',

  '65807': 'Springfield',

  '72015': 'Benton',

  '72023': 'Cabot',

  '72034': 'Conway',

  '72113': 'Maumelle',

  '72114': 'North Little Rock',

  '72120': 'Sherwood',

  '72150': 'Sheridan',

  '72204': 'Little Rock',

  '72205': 'Little Rock',

  '72209': 'Little Rock',

  '72211': 'Little Rock',

  '72212': 'Little Rock',

  '72223': 'Chenal Valley, Little Rock',

  '72401': 'Jonesboro',

  '72701': 'Fayetteville',

  '72703': 'Fayetteville',

  '72756': 'Rogers',

  '72762': 'Springdale',

  '72901': 'Fort Smith',
  '70001': 'Metairie',
  '70002': 'Metairie',
  '70005': 'Metairie',
  '70053': 'Gretna',
  '70062': 'Kenner',
  '70112': 'Downtown New Orleans',
  '70115': 'Uptown, New Orleans',
  '70119': 'Mid-City, New Orleans',
  '70122': 'Gentilly, New Orleans',
  '70127': 'New Orleans East',
  '70131': 'Algiers, New Orleans',
  '70458': 'Slidell',
  '70503': 'Lafayette',
  '70808': 'Baton Rouge',
  '70809': 'Baton Rouge',
  '70810': 'Baton Rouge',
  '70815': 'Baton Rouge',
  '70816': 'Baton Rouge',
  '53005': 'Brookfield',
  '53018': 'Hartford',
  '53029': 'Hartland',
  '53045': 'Jackson',
  '53051': 'Menomonee Falls',
  '53058': 'Nashotah',
  '53066': 'Oconomowoc',
  '53069': 'Oconomowoc',
  '53072': 'Pewaukee',
  '53089': 'Sussex',
  '53122': 'River Hills',
  '53132': 'Franklin',
  '53146': 'New Berlin',
  '53151': 'New Berlin',
  '53183': 'Wales',
  '53186': 'Waukesha',
  '53188': 'Waukesha',
  '53189': 'Waukesha',
  '53207': 'Bay View, Milwaukee',
  '53209': 'North Milwaukee',
  '53211': 'Shorewood, Milwaukee',
  '53213': 'Wauwatosa',
  '53214': 'West Allis',
  '53215': 'South Side, Milwaukee',
  '53219': 'Southwest Milwaukee',
  '53226': 'Wauwatosa',
  '53403': 'Racine',
  '53704': 'Madison',
  '53711': 'Madison',
  '53713': 'Madison',
  '53717': 'Madison',
  '54302': 'Green Bay',
  '54303': 'Green Bay',
  '54311': 'Green Bay',
  '54313': 'Green Bay',
  '54911': 'Appleton',
  '54913': 'Appleton',  '60004': 'Arlington Heights',
  '60015': 'Deerfield',
  '60069': 'Lincolnshire',
  '60076': 'Skokie',
  '60077': 'Skokie',
  '60173': 'Schaumburg',
  '60201': 'Evanston',
  '60202': 'Evanston',
  '60203': 'Evanston',
  '60204': 'Evanston',
  '60208': 'Evanston',
  '60302': 'Oak Park',
  '60435': 'Joliet',
  '60504': 'Aurora',
  '60515': 'Downers Grove',
  '60540': 'Naperville',
  '60559': 'Westmont',
  '60563': 'Naperville',
  '60607': 'Near West Side, Chicago',
  '60608': 'Pilsen, Chicago',
  '60610': 'Near North Side, Chicago',
  '60612': 'Near West Side, Chicago',
  '60614': 'Lincoln Park, Chicago',
  '60618': 'Irving Park, Chicago',
  '60622': 'Wicker Park, Chicago',
  '60623': 'North Lawndale, Chicago',
  '60624': 'East Garfield Park, Chicago',
  '60625': 'Lincoln Square, Chicago',
  '60629': 'Garfield Ridge, Chicago',
  '60632': 'Brighton Park, Chicago',
  '60634': 'Dunning, Chicago',
  '60638': 'Garfield Ridge, Chicago',
  '60639': 'Belmont Cragin, Chicago',
  '60641': 'Portage Park, Chicago',
  '60642': 'West Town, Chicago',
  '60644': 'Austin, Chicago',
  '60646': 'Edgebrook, Chicago',
  '60647': 'Logan Square, Chicago',
  '60651': 'Humboldt Park, Chicago',
  '60656': 'Norwood Park, Chicago',
  '60657': 'Lakeview, Chicago',
  '60804': 'Cicero',


    '38654': 'Olive Branch',
    '38671': 'Southaven',
    '38801': 'Tupelo',
    '38804': 'Tupelo',
    '39042': 'Brandon',
    '39047': 'Brandon',
    '39056': 'Clinton',
    '39110': 'Madison',
    '39157': 'Ridgeland',
    '39206': 'Jackson',
    '39208': 'Pearl',
    '39209': 'Jackson',
    '39211': 'Jackson',
    '39212': 'Jackson',
    '39232': 'Flowood',
    '39301': 'Meridian',
    '39305': 'Meridian',
    '39401': 'Hattiesburg',
    '39402': 'Hattiesburg',
    '39501': 'Gulfport',
    '39503': 'Gulfport',
    '39532': 'Biloxi',
    '39564': 'Ocean Springs',
  '48005': 'Armada',
  '48009': 'Birmingham',
  '48015': 'Center Line',
  '48017': 'Clawson',
  '48026': 'Fraser',
  '48035': 'Clinton Township',
  '48036': 'Clinton Township',
  '48038': 'Clinton Township',
  '48042': 'Macomb',
  '48043': 'Mount Clemens',
  '48044': 'Macomb',
  '48045': 'Harrison Township',
  '48047': 'New Baltimore',
  '48048': 'New Haven',
  '48050': 'New Haven',
  '48051': 'New Baltimore',
  '48062': 'Richmond',
  '48065': 'Romeo',
  '48066': 'Roseville',
  '48067': 'Royal Oak',
  '48069': 'Pleasant Ridge',
  '48070': 'Huntington Woods',
  '48072': 'Berkley',
  '48073': 'Royal Oak',
  '48080': 'Saint Clair Shores',
  '48081': 'Saint Clair Shores',
  '48082': 'Saint Clair Shores',
  '48083': 'Troy',
  '48084': 'Troy',
  '48085': 'Troy',
  '48089': 'Warren',
  '48091': 'Warren',
  '48092': 'Warren',
  '48093': 'Warren',
  '48094': 'Washington',
  '48095': 'Washington',
  '48096': 'Ray',
  '48098': 'Troy',
  '48101': 'Allen Park',
  '48103': 'Ann Arbor',
  '48104': 'Ann Arbor',
  '48105': 'Ann Arbor',
  '48108': 'Ann Arbor',
  '48111': 'Belleville',
  '48118': 'Chelsea',
  '48120': 'Dearborn',
  '48122': 'Melvindale',
  '48124': 'Dearborn',
  '48125': 'Dearborn Heights',
  '48126': 'Dearborn',
  '48127': 'Dearborn Heights',
  '48128': 'Dearborn',
  '48130': 'Dexter',
  '48134': 'Flat Rock',
  '48135': 'Garden City',
  '48138': 'Grosse Ile',
  '48141': 'Inkster',
  '48146': 'Lincoln Park',
  '48150': 'Livonia',
  '48152': 'Livonia',
  '48154': 'Livonia',
  '48160': 'Milan',
  '48164': 'New Boston',
  '48167': 'Northville',
  '48169': 'Pinckney',
  '48170': 'Plymouth',
  '48173': 'Rockwood',
  '48174': 'Romulus',
  '48176': 'Saline',
  '48180': 'Taylor',
  '48183': 'Trenton',
  '48184': 'Wayne',
  '48185': 'Westland',
  '48186': 'Westland',
  '48187': 'Canton',
  '48188': 'Canton',
  '48189': 'Whitmore Lake',
  '48191': 'Willis',
  '48192': 'Wyandotte',
  '48195': 'Southgate',
  '48197': 'Ypsilanti',
  '48198': 'Ypsilanti',
  '48201': 'Detroit',
  '48202': 'Detroit',
  '48203': 'Highland Park',
  '48204': 'Detroit',
  '48205': 'Detroit',
  '48206': 'Detroit',
  '48207': 'Detroit',
  '48208': 'Detroit',
  '48209': 'Detroit',
  '48210': 'Detroit',
  '48211': 'Detroit',
  '48212': 'Hamtramck',
  '48213': 'Detroit',
  '48214': 'Detroit',
  '48215': 'Detroit',
  '48216': 'Detroit',
  '48217': 'Detroit',
  '48218': 'River Rouge',
  '48219': 'Detroit',
  '48221': 'Detroit',
  '48223': 'Detroit',
  '48224': 'Detroit',
  '48225': 'Harper Woods',
  '48226': 'Detroit',
  '48227': 'Detroit',
  '48228': 'Detroit',
  '48229': 'Ecorse',
  '48230': 'Grosse Pointe',
  '48234': 'Detroit',
  '48235': 'Detroit',
  '48236': 'Grosse Pointe',
  '48238': 'Detroit',
  '48239': 'Redford',
  '48240': 'Redford',
  '48304': 'Bloomfield Hills',
  '48307': 'Rochester',
  '48310': 'Sterling Heights',
  '48312': 'Sterling Heights',
  '48313': 'Sterling Heights',
  '48314': 'Sterling Heights',
  '48315': 'Utica',
  '48316': 'Utica',
  '48317': 'Utica',
  '48507': 'Flint',
  '48911': 'Lansing',
  '49503': 'Grand Rapids',
  '49504': 'Grand Rapids',
  '49525': 'Grand Rapids',
};
/* --- Visibility build (2026-10-31): metros, primary city, blog cross-links.
   PREFIX_METRO mirrors tools/metro-map.mjs — keep the two in sync.
   A metro is keyed by the 3-digit ZIP prefix of a business's service ZIPs;
   the blog's metro counts match this grouping. BLOG_POSTS mirrors the City
   Visibility posts in js/blog.js, keyed "<metro slug>|<category slug>". */
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
var BLOG_POSTS = {
  "sacramento|house-cleaning": [
    "how-much-does-house-cleaning-cost-in-sacramento",
    "How Much Does House Cleaning Cost in Sacramento?"
  ],
  "oklahoma-city|house-cleaning": [
    "how-much-does-house-cleaning-cost-in-oklahoma-city",
    "How Much Does House Cleaning Cost in Oklahoma City?"
  ],
  "sacramento|handyman": [
    "how-much-does-a-handyman-cost-in-sacramento",
    "How Much Does a Handyman Cost in Sacramento?"
  ],
  "oklahoma-city|handyman": [
    "how-much-does-a-handyman-cost-in-oklahoma-city",
    "How Much Does a Handyman Cost in Oklahoma City?"
  ],
  "sacramento|mobile-auto-detailing": [
    "how-much-does-mobile-car-detailing-cost-in-sacramento",
    "How Much Does Mobile Car Detailing Cost in Sacramento?"
  ],
  "sacramento|mobile-pet-grooming": [
    "how-much-does-mobile-pet-grooming-cost-in-sacramento",
    "How Much Does Mobile Pet Grooming Cost in Sacramento?"
  ],
  "oklahoma-city|pool-cleaning-maintenance": [
    "how-much-does-pool-cleaning-cost-in-oklahoma-city",
    "How much does pool cleaning cost in Oklahoma City?"
  ],
  "oklahoma-city|mobile-auto-detailing": [
    "how-much-does-mobile-car-detailing-cost-in-oklahoma-city",
    "How much does mobile car detailing cost in Oklahoma City?"
  ],
  "oklahoma-city|mobile-pet-grooming": [
    "how-much-does-mobile-pet-grooming-cost-in-oklahoma-city",
    "How much does mobile pet grooming cost in Oklahoma City?"
  ],
  "oklahoma-city|pressure-washing": [
    "how-much-does-pressure-washing-cost-in-oklahoma-city",
    "How much does pressure washing cost in Oklahoma City?"
  ],
  "albuquerque|house-cleaning": [
    "how-much-does-house-cleaning-cost-in-albuquerque",
    "How much does house cleaning cost in Albuquerque?"
  ],
  "albuquerque|handyman": [
    "how-much-does-a-handyman-cost-in-albuquerque",
    "How much does a handyman cost in Albuquerque?"
  ],
  "albuquerque|mobile-pet-grooming": [
    "how-much-does-mobile-pet-grooming-cost-in-albuquerque",
    "How much does mobile pet grooming cost in Albuquerque?"
  ],
  "oklahoma-city|deep-cleaning": [
    "how-much-does-deep-cleaning-cost-in-oklahoma-city",
    "How much does deep cleaning cost in Oklahoma City?"
  ],
  "albuquerque|mobile-auto-detailing": [
    "how-much-does-mobile-car-detailing-cost-in-albuquerque",
    "How much does mobile car detailing cost in Albuquerque?"
  ],
  "albuquerque|pool-cleaning-maintenance": [
    "how-much-does-pool-cleaning-cost-in-albuquerque",
    "How much does pool cleaning cost in Albuquerque?"
  ],
  "dallas-fort-worth|pool-cleaning-maintenance": [
    "how-much-does-pool-cleaning-cost-in-dallas-fort-worth",
    "How much does pool cleaning cost in Dallas–Fort Worth?"
  ],
  "dallas-fort-worth|pressure-washing": [
    "how-much-does-pressure-washing-cost-in-dallas-fort-worth",
    "How much does pressure washing cost in Dallas–Fort Worth?"
  ],
  "dallas-fort-worth|house-cleaning": [
    "how-much-does-house-cleaning-cost-in-dallas-fort-worth",
    "How much does house cleaning cost in Dallas–Fort Worth?"
  ],
  "dallas-fort-worth|mobile-pet-grooming": [
    "how-much-does-mobile-pet-grooming-cost-in-dallas-fort-worth",
    "How much does mobile pet grooming cost in Dallas–Fort Worth?"
  ],
  "dallas-fort-worth|deep-cleaning": [
    "how-much-does-deep-cleaning-cost-in-dallas-fort-worth",
    "How much does deep cleaning cost in Dallas–Fort Worth?"
  ],
  "dallas-fort-worth|mobile-auto-detailing": [
    "how-much-does-mobile-car-detailing-cost-in-dallas-fort-worth",
    "How much does mobile car detailing cost in Dallas–Fort Worth?"
  ],
  "boise|house-cleaning": [
    "how-much-does-house-cleaning-cost-in-boise",
    "How much does house cleaning cost in Boise?"
  ],
  "boise|mobile-auto-detailing": [
    "how-much-does-mobile-car-detailing-cost-in-boise",
    "How much does mobile car detailing cost in Boise?"
  ],
  "boise|pressure-washing": [
    "how-much-does-pressure-washing-cost-in-boise",
    "How much does pressure washing cost in Boise?"
  ]
};
/* --- Profile upgrade rollout (2026-10-31): the upgraded profile layout,
   approved by Amam on the Scrub 'N Bubbles preview, now renders for EVERY
   business. The service-area marker sits at the centroid (mean lat/lng) of
   the business's service ZIPs. ZIP lat/lng source: GeoNames US postal code
   database (download.geonames.org/export/zip/US.zip), retrieved 2026-10-31.
   ZIP_COORDS covers every ZIP in use; regenerate both maps with
   tools/build-zip-coords.mjs when new ZIPs are added. When the businesses
   table gains lat/lng columns (supabase/migration-business-coordinates.sql)
   and they are backfilled, a stored pair wins over the computed centroid.
   A business with no resolvable ZIP renders without the map; every other
   section still shows. */
var ZIP_COORDS = {
  '38654':[34.9441,-89.8544],'38671':[34.9771,-89.9992],'38801':[34.2538,-88.7209],'38804':[34.2823,-88.6715],'39042':[32.3038,-89.964],'39047':[32.3886,-89.9584],
  '39056':[32.3411,-90.3229],'39110':[32.4671,-90.1087],'39157':[32.4122,-90.1207],'39206':[32.37,-90.1738],'39208':[32.2604,-90.0897],'39209':[32.3184,-90.2446],
  '39211':[32.3739,-90.1293],'39212':[32.2435,-90.2612],'39232':[32.3299,-90.0915],'39301':[32.3574,-88.656],'39305':[32.4401,-88.6783],'39401':[31.3146,-89.3065],
  '39402':[31.3098,-89.3775],'39501':[30.3826,-89.0976],'39503':[30.4601,-89.0886],'39532':[30.511,-88.9681],'39564':[30.4404,-88.7801],'48005':[42.8409,-82.8899],
  '48009':[42.5444,-83.2133],'48015':[42.4788,-83.0248],'48017':[42.5365,-83.1503],'48026':[42.5423,-82.947],'48035':[42.5512,-82.9167],'48036':[42.5938,-82.9133],
  '48038':[42.6206,-82.9608],'48042':[42.6735,-82.9163],'48043':[42.5978,-82.8823],'48044':[42.6442,-82.8985],'48045':[42.5877,-82.8215],'48047':[42.673,-82.7753],
  '48048':[42.7443,-82.8042],'48050':[42.7859,-82.7979],'48051':[42.6938,-82.8207],'48062':[42.8389,-82.7996],'48065':[42.84,-83.0388],'48066':[42.5034,-82.9387],
  '48067':[42.4906,-83.1366],'48069':[42.471,-83.1438],'48070':[42.4825,-83.1749],'48072':[42.5028,-83.1887],'48073':[42.519,-83.157],'48080':[42.4706,-82.9022],
  '48081':[42.4941,-82.899],'48082':[42.5269,-82.8841],'48083':[42.5597,-83.1138],'48084':[42.5627,-83.1799],'48085':[42.6006,-83.1198],'48089':[42.4685,-82.9974],
  '48091':[42.4665,-83.0593],'48092':[42.5125,-83.0643],'48093':[42.5149,-82.9968],'48094':[42.7262,-83.0268],'48095':[42.7682,-83.0395],'48096':[42.754,-82.9163],
  '48098':[42.5991,-83.1789],'48101':[42.2522,-83.212],'48103':[42.2794,-83.784],'48104':[42.2694,-83.7282],'48105':[42.3042,-83.7068],'48108':[42.2328,-83.7015],
  '48111':[42.1949,-83.4854],'48118':[42.3207,-84.0334],'48120':[42.3223,-83.1763],'48122':[42.2812,-83.1826],'48124':[42.2941,-83.2536],'48125':[42.2768,-83.2606],
  '48126':[42.3349,-83.1801],'48127':[42.3353,-83.2864],'48128':[42.32,-83.2701],'48130':[42.3583,-83.9],'48134':[42.1055,-83.2795],'48135':[42.3242,-83.3402],
  '48138':[42.1352,-83.1561],'48141':[42.294,-83.3146],'48146':[42.2422,-83.1807],'48150':[42.3615,-83.3649],'48152':[42.4258,-83.3636],'48154':[42.3958,-83.3772],
  '48160':[42.0914,-83.6776],'48164':[42.1449,-83.3589],'48167':[42.4262,-83.4794],'48169':[42.4596,-83.9099],'48170':[42.3688,-83.4799],'48173':[42.0731,-83.2127],
  '48174':[42.2223,-83.3966],'48176':[42.1698,-83.7849],'48180':[42.2317,-83.2673],'48183':[42.1382,-83.2179],'48184':[42.2768,-83.3758],'48185':[42.3358,-83.3846],
  '48186':[42.289,-83.3686],'48187':[42.332,-83.4695],'48188':[42.291,-83.465],'48189':[42.4289,-83.7828],'48191':[42.1292,-83.5687],'48192':[42.2084,-83.1616],
  '48195':[42.2044,-83.1999],'48197':[42.2325,-83.6336],'48198':[42.2439,-83.583],'48201':[42.3474,-83.0604],'48202':[42.377,-83.0796],'48203':[42.4212,-83.1009],
  '48204':[42.3661,-83.1422],'48205':[42.4313,-82.9813],'48206':[42.3749,-83.1087],'48207':[42.3524,-83.0271],'48208':[42.3495,-83.0927],'48209':[42.3097,-83.1155],
  '48210':[42.3376,-83.1303],'48211':[42.3809,-83.0409],'48212':[42.4081,-83.0583],'48213':[42.3982,-82.9925],'48214':[42.3669,-82.9938],'48215':[42.3773,-82.9513],
  '48216':[42.3275,-83.0827],'48217':[42.2719,-83.1545],'48218':[42.2692,-83.1364],'48219':[42.426,-83.2495],'48221':[42.426,-83.15],'48223':[42.3945,-83.2454],
  '48224':[42.4098,-82.9441],'48225':[42.4377,-82.9289],'48226':[42.3333,-83.0484],'48227':[42.3883,-83.1937],'48228':[42.3547,-83.2168],'48229':[42.2519,-83.1489],
  '48230':[42.3847,-82.9244],'48234':[42.4337,-83.0434],'48235':[42.4261,-83.1951],'48236':[42.4274,-82.9002],'48238':[42.3959,-83.1411],'48239':[42.3756,-83.2889],
  '48240':[42.4264,-83.3017],'48304':[42.587,-83.2359],'48307':[42.6593,-83.1225],'48310':[42.5648,-83.0701],'48312':[42.5592,-83.0029],'48313':[42.6005,-82.9998],
  '48314':[42.6124,-83.0345],'48315':[42.671,-82.9988],'48316':[42.6885,-83.0548],'48317':[42.6413,-83.0504],'48507':[42.9821,-83.734],'48911':[42.6797,-84.5772],
  '49503':[42.9659,-85.6527],'49504':[42.9737,-85.7265],'49525':[43.0135,-85.6027],'50003':[41.6221,-94.038],'50021':[41.7212,-93.5682],'50023':[41.7194,-93.6266],
  '50038':[41.5242,-93.8838],'50039':[41.8284,-93.9963],'50063':[41.6862,-93.9707],'50069':[41.5208,-94.0303],'50109':[41.7611,-93.8244],'50111':[41.7018,-93.7821],
  '50131':[41.673,-93.7028],'50146':[41.6422,-94.2406],'50167':[41.7562,-94.015],'50211':[41.4861,-93.6573],'50220':[41.8397,-94.1022],'50233':[41.5873,-94.1897],
  '50261':[41.4699,-93.9207],'50263':[41.593,-93.8592],'50265':[41.5805,-93.7447],'50266':[41.5695,-93.7994],'50310':[41.6255,-93.6736],'50311':[41.601,-93.6729],
  '50312':[41.5855,-93.6719],'50314':[41.603,-93.633],'50317':[41.6122,-93.5296],'50322':[41.6295,-93.723],'50323':[41.6294,-93.7717],'50325':[41.6067,-93.7457],
  '50701':[42.4778,-92.3661],'52240':[41.6355,-91.5016],'52402':[42.0188,-91.6612],'52403':[41.9843,-91.6259],'52404':[41.9521,-91.6853],'52801':[41.5208,-90.5745],
  '52802':[41.5164,-90.6141],'53005':[43.0622,-88.098],'53018':[43.05,-88.3972],'53029':[43.1172,-88.3446],'53045':[43.0668,-88.1469],'53051':[43.1602,-88.1128],
  '53058':[43.1118,-88.4089],'53066':[43.1095,-88.4862],'53069':[43.113,-88.4323],'53072':[43.0788,-88.2729],'53089':[43.1441,-88.2271],'53122':[43.0479,-88.0854],
  '53132':[42.9017,-88.0086],'53146':[42.974,-88.1553],'53151':[42.9822,-88.0946],'53183':[43.0088,-88.3787],'53186':[42.9993,-88.2196],'53188':[43.0128,-88.2705],
  '53189':[42.9516,-88.2963],'53207':[42.9751,-87.8947],'53209':[43.1188,-87.9478],'53211':[43.082,-87.8895],'53213':[43.0488,-88.0015],'53214':[43.0215,-88.0176],
  '53215':[43.006,-87.9429],'53219':[42.9959,-87.9944],'53226':[43.0493,-88.0414],'53403':[42.706,-87.8014],'53704':[43.1205,-89.3523],'53711':[43.0356,-89.4526],
  '53713':[43.0372,-89.3971],'53717':[43.0736,-89.508],'54302':[44.5025,-87.9771],'54303':[44.5522,-88.0788],'54311':[44.4914,-87.9267],'54313':[44.5463,-88.1021],
  '54911':[44.2773,-88.3976],'54913':[44.3456,-88.4343],'55104':[44.9532,-93.158],'55106':[44.9684,-93.0488],'55109':[45.0132,-93.0297],'55113':[45.0139,-93.1571],
  '55116':[44.914,-93.1727],'55337':[44.7609,-93.2753],'55344':[44.8574,-93.4376],'55407':[44.9378,-93.2545],'55413':[44.998,-93.2552],'55419':[44.9026,-93.2886],
  '55423':[44.8756,-93.2553],'55426':[44.955,-93.3829],'55430':[45.0639,-93.3022],'55431':[44.8288,-93.3118],'55447':[45.0033,-93.4875],'55811':[46.8147,-92.1998],
  '55901':[44.0496,-92.4896],'55904':[44.0105,-92.3973],'56560':[46.8677,-96.7572],'56721':[47.9318,-97.0213],'57003':[43.7309,-96.7563],'57005':[43.5926,-96.586],
  '57013':[43.3038,-96.5938],'57020':[43.6669,-96.8221],'57022':[43.8228,-96.7223],'57032':[43.446,-96.6864],'57033':[43.6155,-96.9501],'57039':[43.3451,-96.8821],
  '57064':[43.4711,-96.8177],'57078':[42.8821,-97.3986],'57103':[43.5374,-96.6864],'57104':[43.5514,-96.7375],'57105':[43.524,-96.7341],'57106':[43.5179,-96.7924],
  '57107':[43.5566,-96.8028],'57108':[43.4775,-96.7041],'57110':[43.5486,-96.6332],'57117':[43.6746,-96.7913],'57301':[43.7094,-98.0298],'57401':[45.4661,-98.4856],
  '57501':[44.3695,-100.3211],'57701':[44.1415,-103.2052],'57702':[44.0036,-103.3589],'57703':[44.048,-103.1763],'57719':[44.1199,-103.0682],'57783':[44.4946,-103.865],
  '58047':[46.7101,-96.8851],'58078':[46.8907,-96.9258],'58102':[46.9209,-96.8318],'58103':[46.8564,-96.8123],'58104':[46.7932,-96.8397],'58105':[46.8954,-96.8078],
  '58201':[47.901,-97.0446],'58202':[47.9215,-97.0735],'58203':[47.9272,-97.0672],'58401':[46.921,-98.7455],'58501':[46.8083,-100.7837],'58502':[46.8887,-100.6819],
  '58503':[46.8394,-100.7843],'58504':[46.7231,-100.678],'58505':[46.8165,-100.7805],'58521':[46.9543,-100.7615],'58554':[46.8306,-100.9092],'58601':[46.8057,-102.7565],
  '58701':[48.2291,-101.2985],'58703':[48.3306,-101.3156],'58801':[48.2257,-103.649],'59011':[45.8283,-109.9631],'59047':[45.6546,-110.5609],'59101':[45.7745,-108.5005],
  '59102':[45.7813,-108.5727],'59105':[45.9497,-108.599],'59401':[47.5098,-111.2734],'59405':[47.495,-111.2502],'59414':[47.5262,-111.2764],'59601':[46.6131,-112.0213],
  '59635':[46.5973,-111.9051],'59714':[45.7801,-111.1439],'59715':[45.6693,-111.0431],'59716':[45.2847,-111.3683],'59718':[45.6681,-111.2404],'59729':[45.3545,-111.687],
  '59741':[45.798,-111.3146],'59752':[45.8811,-111.5436],'59801':[46.8563,-114.0252],'59802':[46.9006,-114.0027],'59803':[46.8224,-114.0265],'59804':[46.8467,-114.1698],
  '59808':[46.9776,-114.0619],'59812':[46.8721,-113.994],'59820':[46.9806,-114.4921],'59821':[47.186,-114.076],'59823':[46.8733,-113.8645],'59825':[46.7673,-113.7038],
  '59828':[46.3142,-114.096],'59833':[46.631,-114.0945],'59834':[47.0471,-114.2683],'59840':[46.2395,-114.1679],'59841':[46.3329,-114.2235],'59846':[47.066,-114.4219],
  '59847':[46.7585,-114.1097],'59870':[46.5267,-114.0478],'59872':[47.1721,-114.8885],'59875':[46.4005,-114.1665],'59901':[48.2028,-114.3039],'60004':[42.112,-87.9792],
  '60015':[42.1705,-87.859],'60069':[42.1976,-87.9261],'60076':[42.0362,-87.7328],'60077':[42.0345,-87.7541],'60173':[42.0581,-88.0482],'60201':[42.0546,-87.6943],
  '60202':[42.0302,-87.6865],'60203':[42.0485,-87.7176],'60204':[42.0411,-87.6901],'60208':[42.0586,-87.6845],'60302':[41.8925,-87.7895],'60435':[41.5454,-88.1299],
  '60504':[41.7523,-88.2453],'60515':[41.8034,-88.0138],'60540':[41.7662,-88.141],'60559':[41.7728,-87.9757],'60563':[41.7895,-88.169],'60607':[41.8721,-87.6578],
  '60608':[41.8515,-87.6694],'60610':[41.9033,-87.6336],'60612':[41.8805,-87.6873],'60614':[41.9229,-87.6483],'60618':[41.9464,-87.7042],'60622':[41.9019,-87.6779],
  '60623':[41.849,-87.7157],'60624':[41.8804,-87.7223],'60625':[41.9703,-87.7042],'60629':[41.7781,-87.7069],'60632':[41.8093,-87.7052],'60634':[41.9463,-87.8061],
  '60638':[41.7814,-87.7705],'60639':[41.9202,-87.7535],'60641':[41.9453,-87.7474],'60642':[41.9008,-87.6528],'60644':[41.8829,-87.7582],'60646':[41.993,-87.7596],
  '60647':[41.9209,-87.7043],'60651':[41.9025,-87.7393],'60656':[41.9735,-87.8658],'60657':[41.9399,-87.6528],'60804':[41.8378,-87.7602],'63005':[38.6318,-90.6142],
  '63011':[38.6091,-90.5598],'63017':[38.6491,-90.5358],'63033':[38.7947,-90.2831],'63034':[38.8338,-90.2936],'63119':[38.5893,-90.3481],'63122':[38.5781,-90.4256],
  '63128':[38.4915,-90.3772],'63146':[38.7033,-90.4618],'63301':[38.8014,-90.5065],'63304':[38.7378,-90.6234],'63385':[38.802,-90.8534],'64015':[39.015,-94.3118],
  '64055':[39.0545,-94.4039],'64063':[38.912,-94.3517],'64068':[39.2461,-94.4191],'64086':[38.944,-94.2881],'64111':[39.0565,-94.5929],'64113':[39.0123,-94.5938],
  '64114':[38.9621,-94.5959],'64117':[39.1651,-94.5256],'64118':[39.2133,-94.5743],'64133':[39.0323,-94.47],'64151':[39.2127,-94.6383],'64157':[39.2767,-94.4595],
  '65201':[38.9382,-92.3049],'65202':[38.995,-92.3112],'65203':[38.9348,-92.3639],'65804':[37.1654,-93.2522],'65807':[37.1668,-93.3085],'66012':[39.0672,-94.9227],
  '66044':[39.0289,-95.2086],'66047':[38.9407,-95.2779],'66062':[38.8733,-94.7752],'66102':[39.1132,-94.6693],'66103':[39.0668,-94.6282],'66104':[39.1375,-94.6792],
  '66106':[39.0694,-94.7178],'66202':[39.0278,-94.6558],'66203':[39.0417,-94.7202],'66210':[38.9273,-94.7143],'66212':[38.9568,-94.6832],'66214':[38.9649,-94.7209],
  '66215':[38.9536,-94.7336],'66223':[38.8619,-94.661],'66502':[39.1938,-96.5858],'66606':[39.0583,-95.7095],'66608':[39.0858,-95.6867],'66610':[38.9822,-95.7461],
  '66614':[39.0154,-95.7469],'67002':[37.6985,-97.1179],'67017':[37.7946,-97.0971],'67030':[37.7782,-97.5405],'67037':[37.553,-97.2549],'67052':[37.6597,-97.5753],
  '67101':[37.7747,-97.4689],'67110':[37.4764,-97.232],'67133':[37.5784,-97.1173],'67147':[37.8616,-97.2621],'67203':[37.7048,-97.3638],'67204':[37.7488,-97.3566],
  '67205':[37.7639,-97.4269],'67206':[37.7038,-97.2253],'67207':[37.671,-97.2179],'67208':[37.7024,-97.2811],'67209':[37.6779,-97.4235],'67211':[37.6662,-97.3165],
  '67212':[37.7007,-97.4383],'67213':[37.668,-97.3591],'67214':[37.7051,-97.3133],'67215':[37.6333,-97.425],'67217':[37.6266,-97.3581],'67218':[37.669,-97.2802],
  '67219':[37.7719,-97.3175],'67220':[37.7667,-97.2805],'67226':[37.7379,-97.2479],'67228':[37.7742,-97.1711],'67230':[37.6808,-97.1558],'67232':[37.6395,-97.1714],
  '67235':[37.7149,-97.499],'68005':[41.1497,-95.9099],'68102':[41.259,-95.9409],'68104':[41.2919,-95.9999],'68105':[41.2435,-95.9629],'68106':[41.2403,-95.998],
  '68108':[41.2382,-95.9336],'68114':[41.2656,-96.0493],'68116':[41.2879,-96.1495],'68122':[41.3333,-96.0458],'68124':[41.2338,-96.0495],'68132':[41.2657,-95.996],
  '68134':[41.2949,-96.0546],'68135':[41.2104,-96.1698],'68136':[41.1683,-96.2096],'68142':[41.3359,-96.0901],'68144':[41.2335,-96.1188],'68154':[41.2642,-96.1206],
  '68501':[40.8651,-96.8231],'68502':[40.7893,-96.6938],'68503':[40.8233,-96.6766],'68504':[40.8392,-96.6532],'68505':[40.8247,-96.6252],'68506':[40.7848,-96.6431],
  '68507':[40.8473,-96.6289],'68508':[40.8145,-96.7009],'68510':[40.8063,-96.6545],'68512':[40.7565,-96.6946],'68516':[40.7568,-96.6523],'68521':[40.851,-96.711],
  '68701':[42.0329,-97.4229],'68801':[40.9219,-98.3411],'68847':[40.7136,-99.0779],'70001':[29.9871,-90.1695],'70002':[30.0098,-90.163],'70005':[30.0005,-90.1331],
  '70053':[29.9108,-90.0531],'70062':[29.9912,-90.2479],'70112':[29.9605,-90.0753],'70115':[29.9289,-90.1005],'70119':[29.9746,-90.0852],'70122':[30.0056,-90.0644],
  '70127':[30.0313,-89.9758],'70131':[29.9168,-89.996],'70458':[30.2784,-89.7712],'70503':[30.1843,-92.0497],'70808':[30.4066,-91.1468],'70809':[30.4089,-91.0842],
  '70810':[30.3633,-91.0919],'70815':[30.4558,-91.0596],'70816':[30.4273,-91.0356],'72015':[34.4933,-92.5896],'72023':[34.9457,-92.0318],'72034':[35.0823,-92.4683],
  '72113':[34.8491,-92.4059],'72114':[34.7666,-92.2629],'72120':[34.8807,-92.2303],'72150':[34.3165,-92.3657],'72204':[34.7269,-92.344],'72205':[34.751,-92.3455],
  '72209':[34.6725,-92.3529],'72211':[34.7413,-92.4222],'72212':[34.7871,-92.4222],'72223':[34.7902,-92.5044],'72401':[35.833,-90.6965],'72701':[36.052,-94.1534],
  '72703':[36.0992,-94.1716],'72756':[36.3363,-94.1148],'72762':[36.1835,-94.1762],'72901':[35.3653,-94.411],'73003':[35.6748,-97.4997],'73007':[35.6543,-97.3243],
  '73012':[35.6215,-97.4733],'73013':[35.6215,-97.4733],'73025':[35.722,-97.5133],'73034':[35.6665,-97.4798],'73072':[35.199,-97.4841],'73084':[35.5183,-97.3488],
  '73106':[35.4853,-97.5372],'73114':[35.5704,-97.5257],'73116':[35.5463,-97.5642],'73117':[35.4797,-97.4722],'73118':[35.5136,-97.5319],'73120':[35.5835,-97.5638],
  '73127':[35.4834,-97.6299],'73132':[35.5583,-97.6375],'73139':[35.3792,-97.5362],'73160':[35.334,-97.4768],'73162':[35.5806,-97.6419],'74012':[36.0447,-95.8079],
  '74105':[36.0948,-95.9655],'74112':[36.147,-95.907],'74114':[36.1262,-95.9408],'74133':[36.0467,-95.8841],'74135':[36.0976,-95.9228],'74136':[36.0605,-95.9452],
  '74137':[36.0284,-95.9306],'74145':[36.0934,-95.8856],'75023':[33.055,-96.7365],'75024':[33.0752,-96.7843],'75025':[33.0784,-96.7291],'75034':[33.1499,-96.8241],
  '75043':[32.8565,-96.5999],'75044':[32.9522,-96.6654],'75052':[32.6605,-97.0311],'75056':[33.094,-96.8836],'75061':[32.8267,-96.9633],'75067':[33.0198,-96.9925],
  '75071':[33.1976,-96.6153],'75080':[32.966,-96.7452],'75088':[32.9031,-96.5472],'75093':[33.0299,-96.7889],'75094':[33.0148,-96.6189],'75150':[32.8154,-96.6307],
  '75182':[32.797,-96.5616],'75206':[32.831,-96.7692],'75214':[32.8248,-96.7498],'75218':[32.8463,-96.6972],'75243':[32.9103,-96.7285],'76013':[32.7199,-97.1442],
  '76018':[32.6548,-97.092],'76102':[32.7589,-97.328],'76103':[32.747,-97.2604],'76104':[32.7256,-97.3184],'76105':[32.7233,-97.269],'76106':[32.7968,-97.356],
  '76107':[32.7392,-97.3852],'76108':[32.7822,-97.4969],'76109':[32.7002,-97.3789],'76110':[32.7065,-97.3375],'76111':[32.7824,-97.3003],'76112':[32.7493,-97.2181],
  '76114':[32.7796,-97.3928],'76115':[32.6796,-97.3336],'76116':[32.723,-97.4483],'76119':[32.6914,-97.2675],'76120':[32.7639,-97.1781],'76123':[32.6254,-97.3658],
  '76126':[32.64,-97.5448],'76129':[32.7714,-97.2915],'76131':[32.8632,-97.3377],'76132':[32.6711,-97.4056],'76133':[32.6526,-97.3758],'76134':[32.6469,-97.3325],
  '76135':[32.8248,-97.4519],'76137':[32.8664,-97.2891],'76140':[32.6192,-97.2735],'76177':[32.9448,-97.3124],'76179':[32.9074,-97.4257],'76210':[33.1428,-97.0727],
  '76244':[32.931,-97.2843],'76537':[30.8119,-97.5942],'77002':[29.7594,-95.3594],'77003':[29.7489,-95.3391],'77004':[29.7247,-95.3625],'77005':[29.7179,-95.4263],
  '77006':[29.7409,-95.3923],'77007':[29.7736,-95.4034],'77008':[29.7991,-95.4118],'77009':[29.7936,-95.3675],'77011':[29.742,-95.3073],'77014':[29.9796,-95.4625],
  '77018':[29.8272,-95.4266],'77019':[29.7517,-95.4054],'77020':[29.7758,-95.3121],'77021':[29.6954,-95.3562],'77023':[29.7242,-95.3178],'77024':[29.7696,-95.5201],
  '77025':[29.6889,-95.4341],'77027':[29.7396,-95.446],'77030':[29.7041,-95.401],'77032':[29.9368,-95.3299],'77035':[29.6518,-95.4854],'77036':[29.6984,-95.5405],
  '77038':[29.9196,-95.4386],'77040':[29.8744,-95.5278],'77041':[29.8602,-95.5817],'77042':[29.7404,-95.5589],'77046':[29.733,-95.4306],'77054':[29.6852,-95.4017],
  '77055':[29.7971,-95.4958],'77056':[29.7446,-95.4683],'77057':[29.7422,-95.4903],'77060':[29.9335,-95.3981],'77063':[29.7348,-95.522],'77064':[29.919,-95.5569],
  '77065':[29.9319,-95.6106],'77066':[29.961,-95.4947],'77070':[29.9781,-95.5803],'77071':[29.6518,-95.5176],'77074':[29.6896,-95.5106],'77077':[29.7477,-95.603],
  '77079':[29.7738,-95.598],'77080':[29.8159,-95.523],'77081':[29.7119,-95.4845],'77082':[29.7223,-95.6285],'77084':[29.844,-95.6623],'77086':[29.9227,-95.4939],
  '77087':[29.6876,-95.3011],'77089':[29.594,-95.2218],'77091':[29.8534,-95.4435],'77092':[29.8324,-95.472],'77095':[29.8941,-95.6481],'77096':[29.6722,-95.4861],
  '77098':[29.735,-95.4118],'77338':[30.0041,-95.2825],'77345':[30.0336,-95.261],'77379':[30.0377,-95.5326],'77401':[29.7023,-95.4611],'77410':[29.9691,-95.6972],
  '77429':[29.9766,-95.6358],'77433':[29.8836,-95.7025],'77459':[29.5704,-95.5423],'77477':[29.6228,-95.5678],'77478':[29.6196,-95.607],'77479':[29.5785,-95.6066],
  '77489':[29.5962,-95.5115],'77494':[29.7404,-95.8304],'77498':[29.6396,-95.65],'77502':[29.6789,-95.1982],'77504':[29.6501,-95.1885],'77584':[29.5405,-95.3208],
  '78023':[29.6321,-98.7542],'78201':[29.4711,-98.5356],'78204':[29.4059,-98.5078],'78207':[29.4229,-98.526],'78209':[29.4821,-98.4554],'78212':[29.4388,-98.4935],
  '78213':[29.5234,-98.5273],'78215':[29.4413,-98.4793],'78216':[29.5334,-98.4975],'78217':[29.5395,-98.4194],'78218':[29.4969,-98.4032],'78227':[29.4027,-98.6433],
  '78228':[29.4589,-98.5699],'78229':[29.5042,-98.5697],'78230':[29.5407,-98.5521],'78231':[29.5714,-98.5414],'78232':[29.5863,-98.4769],'78233':[29.5563,-98.3643],
  '78237':[29.4208,-98.5645],'78238':[29.451,-98.6169],'78239':[29.5182,-98.3627],'78240':[29.5189,-98.6006],'78244':[29.4793,-98.3476],'78245':[29.4189,-98.6895],
  '78247':[29.5855,-98.4071],'78248':[29.5894,-98.5201],'78249':[29.5612,-98.6117],'78250':[29.5054,-98.6688],'78251':[29.4597,-98.6555],'78252':[29.346,-98.6464],
  '78253':[29.4599,-98.7479],'78254':[29.5551,-98.7442],'78256':[29.6169,-98.6252],'78257':[29.6495,-98.6137],'78258':[29.6562,-98.4967],'78259':[29.6283,-98.4445],
  '78260':[29.7026,-98.4759],'78261':[29.7055,-98.4191],'78268':[29.4375,-98.4616],'78613':[30.5052,-97.8203],'78626':[30.633,-97.6707],'78628':[30.6411,-97.7511],
  '78634':[30.5257,-97.5672],'78641':[30.5835,-97.8575],'78642':[30.663,-97.9316],'78660':[30.4421,-97.6299],'78664':[30.5145,-97.668],'78665':[30.5145,-97.668],
  '78681':[30.5083,-97.6789],'78701':[30.2713,-97.7426],'78702':[30.2638,-97.7166],'78703':[30.2907,-97.7648],'78704':[30.2428,-97.7658],'78705':[30.2896,-97.7396],
  '78717':[30.506,-97.7472],'78721':[30.2721,-97.6868],'78722':[30.2893,-97.715],'78723':[30.3085,-97.6849],'78724':[30.296,-97.6396],'78729':[30.4521,-97.7688],
  '78731':[30.3471,-97.7609],'78732':[30.3752,-97.9007],'78733':[30.3314,-97.8666],'78734':[30.3705,-97.9427],'78735':[30.249,-97.8414],'78736':[30.2444,-97.916],
  '78737':[30.2107,-97.9427],'78738':[30.3337,-97.9824],'78739':[30.172,-97.8784],'78741':[30.2315,-97.7223],'78744':[30.1876,-97.7472],'78745':[30.2063,-97.7956],
  '78746':[30.2971,-97.8181],'78747':[30.1204,-97.7433],'78748':[30.1743,-97.8225],'78749':[30.2166,-97.8508],'78750':[30.4224,-97.7967],'78751':[30.3093,-97.7242],
  '78752':[30.3316,-97.7004],'78753':[30.3649,-97.6827],'78754':[30.3423,-97.6673],'78756':[30.3223,-97.739],'78757':[30.3437,-97.7316],'78758':[30.3764,-97.7078],
  '78759':[30.4036,-97.7526],'80004':[39.8141,-105.1177],'80013':[39.6575,-104.7846],'80016':[39.6012,-104.7394],'80202':[39.7491,-104.9946],'80203':[39.7313,-104.9811],
  '80205':[39.759,-104.9661],'80209':[39.7074,-104.9686],'80210':[39.679,-104.9631],'80220':[39.7312,-104.9129],'80222':[39.671,-104.9279],'80224':[39.688,-104.9108],
  '80226':[39.7123,-105.0918],'80238':[39.7392,-104.9847],'80301':[40.0497,-105.2143],'80521':[40.5813,-105.1039],'80524':[40.5986,-105.0581],'80525':[40.5384,-105.0547],
  '80903':[38.8388,-104.8145],'80905':[38.8377,-104.837],'80907':[38.876,-104.817],'80909':[38.852,-104.7735],'80918':[38.9129,-104.7734],'80919':[38.9268,-104.8464],
  '80920':[38.9497,-104.767],'80921':[39.0487,-104.814],'82001':[41.1437,-104.7962],'82003':[41.2191,-104.6612],'82009':[41.1836,-104.8023],'82070':[41.439,-105.801],
  '82604':[42.8261,-106.3896],'82609':[42.8406,-106.2806],'83642':[43.615,-116.3975],'83646':[43.6498,-116.4306],'83651':[43.5834,-116.5848],'83702':[43.6322,-116.2052],
  '83703':[43.6601,-116.2524],'83704':[43.633,-116.2951],'83705':[43.5851,-116.2191],'83706':[43.5885,-116.191],'83709':[43.5741,-116.2941],'83712':[43.6023,-116.1649],
  '83713':[43.634,-116.3419],'83714':[43.7318,-116.2797],'83716':[43.5345,-115.9711],'84010':[40.8775,-111.8727],'84014':[40.9268,-111.877],'84020':[40.5046,-111.881],
  '84025':[40.9889,-111.8938],'84037':[41.0375,-111.9326],'84044':[40.7009,-112.0809],'84054':[40.8446,-111.9191],'84060':[40.6524,-111.5018],'84087':[40.8874,-111.9027],
  '84094':[40.5688,-111.8617],'84098':[40.7029,-111.5481],'84101':[40.7559,-111.8967],'84102':[40.76,-111.8627],'84103':[40.7776,-111.8749],'84104':[40.7499,-111.926],
  '84105':[40.7372,-111.8581],'84106':[40.7056,-111.8548],'84107':[40.6568,-111.8904],'84108':[40.7371,-111.8258],'84109':[40.7043,-111.8142],'84111':[40.7548,-111.881],
  '84112':[40.7659,-111.8403],'84113':[40.7658,-111.8364],'84115':[40.7145,-111.8931],'84116':[40.7857,-111.9291],'84119':[40.6916,-112.0011],'84120':[40.6916,-112.0011],
  '84124':[40.6772,-111.8133],'84128':[40.6916,-112.0011],'84404':[41.2627,-111.9837],'84601':[40.2319,-111.6755],'85003':[33.4511,-112.0774],'85004':[33.4557,-112.0686],
  '85006':[33.465,-112.0474],'85007':[33.4523,-112.0893],'85009':[33.4564,-112.1284],'85012':[33.5097,-112.0678],'85013':[33.5085,-112.0827],'85014':[33.5103,-112.0556],
  '85015':[33.5082,-112.1011],'85017':[33.5153,-112.1212],'85019':[33.5123,-112.1417],'85020':[33.5623,-112.0559],'85021':[33.56,-112.0927],'85022':[33.6315,-112.052],
  '85024':[33.6617,-112.037],'85027':[33.6819,-112.0996],'85029':[33.5961,-112.1199],'85032':[33.6238,-112.0044],'85034':[33.4413,-112.0421],'85040':[33.4061,-112.0265],
  '85041':[33.3889,-112.0954],'85042':[33.3794,-112.0283],'85051':[33.5591,-112.1332],'85250':[33.5218,-111.9049],'85251':[33.4936,-111.9167],'85254':[33.6165,-111.9554],
  '85257':[33.4669,-111.9151],'85260':[33.6013,-111.8867],'85281':[33.4227,-111.9261],'85282':[33.3917,-111.9249],'85287':[33.4285,-111.9349],'85288':[33.4419,-111.9236],
  '85339':[33.3436,-112.1716],'87102':[35.0818,-106.6482],'87104':[35.1038,-106.6712],'87105':[35.0448,-106.6893],'87106':[35.079,-106.6169],'87107':[35.1347,-106.6427],
  '87108':[35.0726,-106.5749],'87109':[35.1506,-106.569],'87110':[35.1104,-106.5781],'87111':[35.1347,-106.5222],'87112':[35.101,-106.5183],'87113':[35.1759,-106.6015],
  '87114':[35.1868,-106.6652],'87120':[35.1421,-106.7041],'87121':[35.0512,-106.7269],'87122':[35.1787,-106.5102],'87123':[35.0717,-106.509],'87124':[35.2493,-106.6818],
  '87144':[35.324,-106.7099],'87401':[36.7412,-108.1797],'87402':[36.7685,-108.1478],'87501':[35.6975,-105.9821],'87505':[35.6219,-105.8688],'87507':[35.6567,-106.0152],
  '88001':[32.2901,-106.7539],'88005':[32.3161,-106.7991],'88011':[32.3244,-106.6683],'88012':[32.5835,-106.7714],'88101':[34.4126,-103.2214],'88201':[33.6397,-104.3748],
  '88240':[32.7222,-103.1372],'88310':[32.8932,-105.9485],'89002':[36.0008,-114.9588],'89004':[36.0464,-115.4039],'89005':[35.9727,-114.8344],'89012':[36.0119,-115.0433],
  '89014':[36.0564,-115.078],'89019':[35.7368,-115.5405],'89044':[35.9025,-115.1789],'89046':[35.5132,-114.8866],'89052':[35.9878,-115.1167],'89054':[35.935,-115.2058],
  '89074':[36.0384,-115.0857],'89101':[36.1721,-115.1224],'89102':[36.1433,-115.2004],'89103':[36.1149,-115.2161],'89104':[36.152,-115.1092],'89106':[36.1847,-115.1617],
  '89107':[36.1705,-115.2176],'89108':[36.2044,-115.2233],'89109':[36.126,-115.1454],'89110':[36.173,-115.0669],'89113':[36.0854,-115.2566],'89117':[36.1302,-115.2755],
  '89118':[36.0811,-115.2169],'89119':[36.1008,-115.1365],'89120':[36.0914,-115.0885],'89121':[36.1232,-115.0902],'89123':[36.0383,-115.1462],'89128':[36.1968,-115.2644],
  '89129':[36.245,-115.2743],'89130':[36.2471,-115.221],'89131':[36.2956,-115.2419],'89134':[36.2092,-115.2941],'89135':[36.1378,-115.3261],'89138':[36.1666,-115.3613],
  '89139':[36.0129,-115.2118],'89141':[36.0104,-115.2073],'89144':[36.1781,-115.3183],'89145':[36.1693,-115.2828],'89146':[36.1424,-115.2242],'89147':[36.1128,-115.2801],
  '89148':[36.0588,-115.3104],'89149':[36.2765,-115.2885],'89166':[36.3265,-115.3398],'89169':[36.1234,-115.1429],'89178':[35.9977,-115.2861],'89179':[36.2542,-115.5269],
  '89183':[35.9959,-115.1576],'95605':[38.5927,-121.5325],'95610':[38.6946,-121.2692],'95621':[38.6952,-121.3075],'95624':[38.4232,-121.3599],'95630':[38.6709,-121.1529],
  '95648':[38.8942,-121.2908],'95661':[38.7346,-121.234],'95662':[38.6845,-121.2256],'95670':[38.6072,-121.2761],'95677':[38.7877,-121.2366],'95678':[38.7609,-121.2867],
  '95691':[38.5673,-121.5516],'95742':[38.5981,-121.2153],'95747':[38.7703,-121.3372],'95757':[38.4081,-121.4294],'95758':[38.4243,-121.437],'95762':[38.685,-121.068],
  '95765':[38.8136,-121.2677],'95814':[38.5804,-121.4922],'95816':[38.5728,-121.4675],'95818':[38.5568,-121.4929],'95821':[38.6239,-121.3837],'95825':[38.5892,-121.4057],
  '95843':[38.7159,-121.3648],'97005':[45.4963,-122.8001],'97006':[45.5201,-122.8604],'97008':[45.456,-122.7996],'97015':[45.415,-122.52],'97027':[45.3899,-122.5902],
  '97030':[45.5154,-122.4203],'97078':[45.452,-122.7893],'97080':[45.4817,-122.4156],'97086':[45.4446,-122.5372],'97123':[45.4984,-122.957],'97202':[45.484,-122.6365],
  '97204':[45.5181,-122.6745],'97206':[45.484,-122.5973],'97211':[45.5653,-122.6448],'97212':[45.5441,-122.6423],'97213':[45.5373,-122.5987],'97214':[45.5142,-122.6364],
  '97215':[45.5143,-122.599],'97216':[45.5137,-122.5569],'97218':[45.56,-122.6001],'97219':[45.458,-122.7074],'97220':[45.5411,-122.5566],'97222':[45.4373,-122.6147],
  '97223':[45.4403,-122.7793],'97224':[45.4094,-122.8014],'97229':[45.5483,-122.8276],'97230':[45.5472,-122.5001],'97232':[45.5287,-122.6363],'97233':[45.5142,-122.4985],
  '97236':[45.4887,-122.5091],'97266':[45.4762,-122.5596],'97267':[45.4021,-122.6144],'98004':[47.6155,-122.2072],'98005':[47.615,-122.1663],'98006':[47.5614,-122.1552],
  '98007':[47.6174,-122.1426],'98008':[47.6115,-122.1162],'98101':[47.6114,-122.3305],'98102':[47.6302,-122.321],'98103':[47.6733,-122.3426],'98104':[47.6036,-122.3256],
  '98105':[47.6633,-122.3022],'98107':[47.6701,-122.3763],'98109':[47.6339,-122.3476],'98112':[47.6301,-122.2972],'98115':[47.6849,-122.2968],'98117':[47.6873,-122.3772],
  '98118':[47.5412,-122.275],'98119':[47.6379,-122.3643],'98121':[47.6151,-122.3447],'98122':[47.6116,-122.3056],'98125':[47.717,-122.3015],'98133':[47.7377,-122.3431],
  '98155':[47.7559,-122.3003],'98177':[47.7467,-122.3686],'98199':[47.6488,-122.3964],'98402':[47.2545,-122.4405],'98404':[47.2113,-122.4126],'98405':[47.2484,-122.4643],
  '98409':[47.2038,-122.4825],'98465':[47.2491,-122.5273],
};
var STATE_BY_PREFIX = {
  '386':'Mississippi','388':'Mississippi','390':'Mississippi','391':'Mississippi','392':'Mississippi','393':'Mississippi',
  '394':'Mississippi','395':'Mississippi','480':'Michigan','481':'Michigan','482':'Michigan','483':'Michigan',
  '485':'Michigan','489':'Michigan','495':'Michigan','500':'Iowa','501':'Iowa','502':'Iowa',
  '503':'Iowa','507':'Iowa','522':'Iowa','524':'Iowa','528':'Iowa','530':'Wisconsin',
  '531':'Wisconsin','532':'Wisconsin','534':'Wisconsin','537':'Wisconsin','543':'Wisconsin','549':'Wisconsin',
  '551':'Minnesota','553':'Minnesota','554':'Minnesota','558':'Minnesota','559':'Minnesota','565':'Minnesota',
  '567':'Minnesota','570':'South Dakota','571':'South Dakota','573':'South Dakota','574':'South Dakota','575':'South Dakota',
  '577':'South Dakota','580':'North Dakota','581':'North Dakota','582':'North Dakota','584':'North Dakota','585':'North Dakota',
  '586':'North Dakota','587':'North Dakota','588':'North Dakota','590':'Montana','591':'Montana','594':'Montana',
  '596':'Montana','597':'Montana','598':'Montana','599':'Montana','600':'Illinois','601':'Illinois',
  '602':'Illinois','603':'Illinois','604':'Illinois','605':'Illinois','606':'Illinois','608':'Illinois',
  '630':'Missouri','631':'Missouri','633':'Missouri','640':'Missouri','641':'Missouri','652':'Missouri',
  '658':'Missouri','660':'Kansas','661':'Kansas','662':'Kansas','665':'Kansas','666':'Kansas',
  '670':'Kansas','671':'Kansas','672':'Kansas','680':'Nebraska','681':'Nebraska','685':'Nebraska',
  '687':'Nebraska','688':'Nebraska','700':'Louisiana','701':'Louisiana','704':'Louisiana','705':'Louisiana',
  '708':'Louisiana','720':'Arkansas','721':'Arkansas','722':'Arkansas','724':'Arkansas','727':'Arkansas',
  '729':'Arkansas','730':'Oklahoma','731':'Oklahoma','740':'Oklahoma','741':'Oklahoma','750':'Texas',
  '751':'Texas','752':'Texas','760':'Texas','761':'Texas','762':'Texas','765':'Texas',
  '770':'Texas','773':'Texas','774':'Texas','775':'Texas','780':'Texas','782':'Texas',
  '786':'Texas','787':'Texas','800':'Colorado','802':'Colorado','803':'Colorado','805':'Colorado',
  '809':'Colorado','820':'Wyoming','826':'Wyoming','836':'Idaho','837':'Idaho','840':'Utah',
  '841':'Utah','844':'Utah','846':'Utah','850':'Arizona','852':'Arizona','853':'Arizona',
  '871':'New Mexico','874':'New Mexico','875':'New Mexico','880':'New Mexico','881':'New Mexico','882':'New Mexico',
  '883':'New Mexico','890':'Nevada','891':'Nevada','956':'California','957':'California','958':'California',
  '970':'Oregon','971':'Oregon','972':'Oregon','980':'Washington','981':'Washington','984':'Washington',
};
function centroidOf(b) {
  var la = parseFloat(b.lat), lo = parseFloat(b.lng);
  if (isFinite(la) && isFinite(lo)) return [la, lo];
  var pts = [];
  (b.service_zips || []).forEach(function (z) { var c = ZIP_COORDS[z]; if (c) pts.push(c); });
  if (!pts.length) return null;
  var sla = 0, slo = 0;
  pts.forEach(function (p) { sla += p[0]; slo += p[1]; });
  return [Math.round(sla / pts.length * 10000) / 10000, Math.round(slo / pts.length * 10000) / 10000];
}
var CITY_SET = {};
Object.keys(ZIP_NAMES).forEach(function (z) {
  var l = String(ZIP_NAMES[z]);
  CITY_SET[l] = 1;
  var parts = l.split(', ');
  if (parts.length > 1) CITY_SET[parts[parts.length - 1]] = 1;
});
Object.keys(PREFIX_METRO).forEach(function (pk) { CITY_SET[PREFIX_METRO[pk]] = 1; });
var CITY_PREFIXES = ['Downtown ', 'Midtown ', 'Uptown ', 'East ', 'West ', 'North ', 'South ', 'Central ', 'Southeast ', 'Southwest ', 'Northeast ', 'Northwest ', 'Old Town '];
var CITY_SUFFIXES = [' Bench', ' East', ' West'];
/* A directional remainder ("Downtown Sacramento" -> "Sacramento") counts as a
   city when at least two labels point to it, so one-off place names like
   "West Allis" or "West Valley City" are never split apart. */
(function () {
  var counts = {};
  var distinctLabels = {};
  Object.keys(ZIP_NAMES).forEach(function (z) { distinctLabels[String(ZIP_NAMES[z])] = 1; });
  Object.keys(distinctLabels).forEach(function (s) {
    if (s.indexOf(', ') >= 0 || s.indexOf(' / ') >= 0) return;
    CITY_PREFIXES.forEach(function (pre) {
      if (s.indexOf(pre) === 0) { var r = s.slice(pre.length); counts[r] = (counts[r] || 0) + 1; }
    });
    CITY_SUFFIXES.forEach(function (suf) {
      if (s.slice(-suf.length) === suf) { var r2 = s.slice(0, -suf.length); counts[r2] = (counts[r2] || 0) + 1; }
    });
  });
  Object.keys(counts).forEach(function (c) { if (counts[c] >= 2) CITY_SET[c] = 1; });
})();
function cityOfLabel(label) {
  if (!label) return '';
  var s = String(label);
  if (s.indexOf(' / ') >= 0) s = s.split(' / ').pop();
  if (s.indexOf(', ') >= 0) return s.split(', ').pop();
  for (var i = 0; i < CITY_PREFIXES.length; i++) {
    if (s.indexOf(CITY_PREFIXES[i]) === 0) {
      var rest = s.slice(CITY_PREFIXES[i].length);
      if (CITY_SET[rest]) return rest;
    }
  }
  for (var j = 0; j < CITY_SUFFIXES.length; j++) {
    var suf = CITY_SUFFIXES[j];
    if (s.slice(-suf.length) === suf) {
      var stem = s.slice(0, -suf.length);
      if (CITY_SET[stem]) return stem;
    }
  }
  return s;
}
function metroOfZip(zip) {
  var n = PREFIX_METRO[String(zip || '').slice(0, 3)];
  return n ? { name: n, slug: slugify(n) } : null;
}
function primaryMetroOf(b) {
  var zips = b.service_zips || [];
  return zips.length ? metroOfZip(zips[0]) : null;
}
function metroZipCount(b, metro) {
  return (b.service_zips || []).filter(function (z) {
    var m = metroOfZip(z);
    return m && m.slug === metro.slug;
  }).length;
}
function businessInMetro(b, metro) {
  return metroZipCount(b, metro) > 0;
}
function primaryCityOf(b) {
  var zips = b.service_zips || [];
  if (!zips.length) return '';
  var label = ZIP_NAMES[zips[0]];
  if (label) return cityOfLabel(label);
  var m = metroOfZip(zips[0]);
  return m ? m.name : '';
}

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
  /* Supabase REST caps every response at 1,000 rows — page through ALL active
     businesses or every profile past the first 1,000 (by created_at) 404s.
     Directory passed 1,000 rows on Day 13 (2026-10-23); fixed Day 14. */
  var select = 'id,name,category,description,phone,website,service_zips,verified,created_at,logo_url,banner_url,lat,lng';
  var all = [], offset = 0;
  while (offset < 10000) {
    var base = env.SUPABASE_URL + '/rest/v1/businesses?status=eq.active&order=created_at.asc&limit=1000&offset=' + offset;
    var res = await fetch(base + '&select=' + select, { headers: sbHeaders(env) });
    if (!res.ok && (select.indexOf(',lat,lng') >= 0 || select.indexOf('banner_url') >= 0)) {
      /* lat/lng arrive with the coordinates migration, banner_url with the
         2026-10-18 migration; strip columns the live schema does not have
         yet and retry, so a profile never 502s over a pending migration. */
      select = select.replace(',banner_url', '').replace(',lat,lng', '');
      res = await fetch(base + '&select=' + select, { headers: sbHeaders(env) });
    }
    if (!res.ok) return null;
    var page = await res.json();
    all = all.concat(page);
    if (page.length < 1000) break;
    offset += 1000;
  }
  return all;
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
function pageShell(title, metaDesc, canonical, body, jsonLd, ogImage, headExtra) {
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
    '<link rel="stylesheet" href="/css/styles.css?v=20261103c">\n' +
    (headExtra || '') +
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
    '</style>\n' +
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-18RGRLMXXF"></script>\n' +
    '<script>\n' +
    '  window.dataLayer = window.dataLayer || [];\n' +
    '  function gtag(){dataLayer.push(arguments);}\n' +
    "  gtag('js', new Date());\n" +
    "  gtag('config', 'G-18RGRLMXXF');\n" +
    '</script>\n</head>\n<body>\n' +
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
  var title = b.name + ' — ' + b.category + (primaryCityOf(b) ? ' in ' + primaryCityOf(b) : '') + ' | Van Squads';
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
    image: photoAbs || undefined,
  };
  var jsonLd = JSON.stringify(ld).replace(/</g, '\\u003c');

  var check = b.verified ? ' <span class="verified-check big" title="Verified business">✓</span>' : '';
  /* Internal links: the business's metro x category landing page, up to 6
     more businesses in the same category and metro, and the metro cost post
     when one is published. All computed from the rows already fetched. */
  var metro = primaryMetroOf(b);
  var relHtml = '';
  if (metro) {
    var myZips = {};
    (b.service_zips || []).forEach(function (z) { myZips[z] = 1; });
    var cellRows = rows.filter(function (r) { return r.category === b.category && businessInMetro(r, metro); });
    var others = cellRows.filter(function (r) { return r.id !== b.id; });
    others.sort(function (a, c) {
      var sharedA = (a.service_zips || []).filter(function (z) { return myZips[z]; }).length;
      var sharedC = (c.service_zips || []).filter(function (z) { return myZips[z]; }).length;
      if (sharedC !== sharedA) return sharedC - sharedA;
      return metroZipCount(c, metro) - metroZipCount(a, metro);
    });
    var catSlug = slugify(b.category);
    var parts = '';
    if (cellRows.length >= 3) {
      parts += '<p>See every listing on one page: <a href="/' + catSlug + '/' + metro.slug + '/">' +
        esc(b.category) + ' in ' + esc(metro.name) + '</a> — ' + cellRows.length + ' companies that come to you.</p>';
    }
    var blogEntry = BLOG_POSTS[metro.slug + '|' + catSlug];
    if (blogEntry) {
      parts += '<p>What does ' + esc(String(b.category).toLowerCase()) + ' cost in ' + esc(metro.name) +
        '? <a href="/blog/' + blogEntry[0] + '/">' + esc(blogEntry[1]) + '</a></p>';
    }
    if (others.length) {
      parts += '<div class="rel-grid">' + others.slice(0, 6).map(function (r) {
        return '<a href="/business/' + esc(r._slug) + '">' + esc(r.name) + '<span>' + esc(areasOf(r)[0] || '') + '</span></a>';
      }).join('') + '</div>';
    }
    if (parts) {
      relHtml = '<div class="prof-sec"><h2>More ' + esc(b.category) + ' near ' + esc(metro.name) + '</h2>' + parts + '</div>';
    }
  }
  if (!relHtml) {
    var related = rows.filter(function (r) { return r.id !== b.id && r.category === b.category; }).slice(0, 3);
    relHtml = related.length ?
      '<div class="prof-sec"><h2>More ' + esc(b.category) + ' businesses</h2><div class="rel-grid">' +
      related.map(function (r) {
        return '<a href="/business/' + esc(r._slug) + '">' + esc(r.name) + '<span>' + esc(areasOf(r)[0] || '') + '</span></a>';
      }).join('') + '</div></div>' : '';
  }

  /* --- Upgraded profile layout — every business (rollout 2026-10-31).
     Claimed businesses (verified, per the site claim flow) get no claim
     box and show "Claimed by the owner" in the details block instead. --- */
  var claimUrl = 'https://vansquads.com/#/claim/' + b.id;
  var pvCities = [], pvCitySeen = {};
  (b.service_zips || []).forEach(function (z) {
    var c = cityOfLabel(ZIP_NAMES[z] || '');
    if (c && !pvCitySeen[c]) { pvCitySeen[c] = 1; pvCities.push(c); }
  });
  var pvCityText = pvCities.length > 1
    ? pvCities.slice(0, -1).join(', ') + ' & ' + pvCities[pvCities.length - 1]
    : (pvCities[0] || '');
  var pvState = STATE_BY_PREFIX[String((b.service_zips || [])[0] || '').slice(0, 3)] || '';
  var pvCity = primaryCityOf(b);
  var pvDigits = String(b.phone || '').replace(/\D/g, '');
  if (pvDigits.length === 10) pvDigits = '1' + pvDigits;
  var pvTel = pvDigits ? 'tel:+' + pvDigits : '';
  var pvDomain = '';
  if (b.website) { try { pvDomain = new URL(b.website).hostname.replace(/^www\./, ''); } catch (e2) { pvDomain = ''; } }
  var pvCentroid = centroidOf(b);
  var pvZipChips = (b.service_zips || []).map(function (z) {
    return '<span class="pv-chip">' + esc(z) + '</span>';
  }).join('');
  var pvSvcChips = listings.map(function (l) {
    return '<span class="pv-chip">' + esc(l.title) + '</span>';
  }).join('') + '<span class="pv-chip">Mobile — comes to you</span>';
  var pvDetails =
    (b.phone ? '<div class="pv-cred"><span class="k">Phone</span><span class="v ok">' + esc(b.phone) + ' — on file</span></div>' : '') +
    (pvDomain ? '<div class="pv-cred"><span class="k">Website</span><span class="v ok">' + esc(pvDomain) + '</span></div>' : '') +
    '<div class="pv-cred"><span class="k">Profile claimed by owner</span><span class="v ' + (b.verified ? 'ok' : 'notyet') + '">' + (b.verified ? 'Claimed by the owner' : 'Not yet claimed') + '</span></div>' +
    '<div class="pv-cred"><span class="k">Owner photos</span><span class="v notyet">Not yet added</span></div>';
  var pvHead =
    (pvCentroid ? '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">\n' : '') +
    '<style>' +
    '.pv-crumbs{font-size:14.5px;color:var(--muted);padding:18px 0 0}.pv-crumbs b{color:var(--ink)}' +
    '.pv-pills{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 0}' +
    '.pv-pill{border-radius:999px;padding:6px 14px;font-size:14.5px;font-weight:700}' +
    '.pv-pill-unclaimed{background:#EDF1F5;color:#1F2B3A;border:1px solid #E2E8EE}' +
    '.pv-pill-cat{background:#FFF0E6;color:#E2571B;border:1px solid #FFD9C2}' +
    '.pv-h1{font-size:32px;line-height:1.15;margin:12px 0 6px;color:#1F2B3A}' +
    '.pv-tagline{font-size:19px;color:var(--muted);margin:0 0 6px}.pv-tagline b{color:var(--ink)}' +
    '.pv-claim{background:#FFF0E6;border:1.5px dashed #FF6A2B;border-radius:16px;padding:20px 22px;margin:20px 0}' +
    '.pv-claim h2{margin:0 0 6px;font-size:21px;color:#1F2B3A}' +
    '.pv-claim p{margin:0 0 14px;color:var(--muted);font-size:16.5px}' +
    '.pv-claim a{background:#FF6A2B;color:#fff;font-weight:700;padding:12px 22px;border-radius:999px;display:inline-block;font-size:16.5px;text-decoration:none}' +
    '.pv-cols{display:flex;flex-direction:column}' +
    '.pv-side{order:-1}' +
    '.pv-contact{border:1px solid #E2E8EE;border-radius:16px;box-shadow:0 6px 24px rgba(31,43,58,.08);padding:20px 22px;margin:20px 0;background:#fff}' +
    '.pv-contact h2{margin:0 0 12px;font-size:21px;color:#1F2B3A}' +
    '.pv-cbtns{display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap}' +
    '.pv-btn{flex:1;text-align:center;padding:13px 8px;border-radius:12px;font-weight:700;font-size:16.5px;white-space:nowrap;text-decoration:none}' +
    '.pv-call{background:#FF6A2B;color:#fff}' +
    '.pv-web{border:2px solid #1F2B3A;color:#1F2B3A}' +
    '.pv-quote{display:block;background:#1F2B3A;color:#fff}' +
    '.pv-straight{font-size:14.5px;color:var(--muted);margin:10px 0 0;text-align:center}' +
    '.pv-blk{margin:30px 0}.pv-blk h2{font-size:24px;color:#1F2B3A;margin:0 0 10px}.pv-blk p{color:var(--muted)}' +
    '.pv-chips{display:flex;flex-wrap:wrap;gap:9px}' +
    '.pv-chip{background:#F6F8FA;border:1px solid #E2E8EE;border-radius:999px;padding:7px 15px;font-size:15px;font-weight:600;color:#2B3B4F}' +
    '.pv-map{width:100%;height:320px;border-radius:16px;border:1px solid #E2E8EE;z-index:0}' +
    '.pv-pin{display:block;width:22px;height:22px;border-radius:50%;background:#FF6A2B;border:3px solid #fff;box-shadow:0 2px 8px rgba(31,43,58,.35)}' +
    '.pv-pin-wrap{background:none;border:none}' +
    '.pv-attr{font-size:13.5px;color:var(--muted);margin-top:8px}' +
    '.pv-creds{border:1px solid #E2E8EE;border-radius:16px;overflow:hidden}' +
    '.pv-cred{display:flex;justify-content:space-between;gap:14px;padding:14px 18px;border-bottom:1px solid #E2E8EE;font-size:16.5px;background:#fff}' +
    '.pv-cred:last-child{border-bottom:none}' +
    '.pv-cred .k{color:var(--muted)}.pv-cred .v{font-weight:700;color:#1F2B3A;text-align:right}' +
    '.pv-cred .v.ok{color:#177245}.pv-cred .v.notyet{color:#E2571B}' +
    '.pv-match{font-size:16px;line-height:1.55;color:#1F2B3A;background:#FFF0E6;border-left:4px solid #FF6A2B;border-radius:12px;padding:16px 18px;margin:-14px 0 30px}' +
    '@media(min-width:900px){.pv-cols{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:28px;align-items:start}.pv-side{order:0;position:sticky;top:20px}.pv-contact{margin:30px 0 20px}}' +
    '</style>\n';
  var pvBody =
    '<nav class="pv-crumbs" aria-label="Breadcrumb"><a href="/">Home</a>' +
    (pvState ? ' &nbsp;›&nbsp; ' + esc(pvState) : '') +
    (pvCity ? ' &nbsp;›&nbsp; ' + esc(pvCity) : '') +
    ' &nbsp;›&nbsp; ' + esc(b.category) +
    ' &nbsp;›&nbsp; <b>' + esc(b.name) + '</b></nav>' +
    '<div class="pv-pills"><span class="pv-pill pv-pill-unclaimed">' + (b.verified ? 'Claimed profile' : 'Unclaimed profile') + '</span>' +
    '<span class="pv-pill pv-pill-cat">' + esc(b.category) + '</span></div>' +
    '<h1 class="pv-h1">' + esc(b.name) + check + '</h1>' +
    '<p class="pv-tagline"><b>' + esc(b.category) + ' that comes to your home</b>' + (pvCityText ? ' — ' + esc(pvCityText) : '') + '.</p>' +
    hero +
    (b.verified ? '' : '<div class="pv-claim"><h2>Is this your business?</h2>' +
    '<p>Claim this listing for free to update your details, add your own photos, and get quote requests sent straight to you.</p>' +
    '<a href="' + esc(claimUrl) + '">Claim this free profile</a></div>') +
    '<div class="pv-cols"><div class="pv-main">' +
    (desc ? '<section class="pv-blk"><h2>About</h2><p>' + esc(desc) + '</p></section>' : '') +
    '<section class="pv-blk"><h2>Services</h2><div class="pv-chips">' + pvSvcChips + '</div></section>' +
    '<section class="pv-blk"><h2>Service area</h2>' +
    (pvCentroid ? '<div id="pv-map" class="pv-map" aria-label="Map of the service area"></div>' +
    '<p class="pv-attr">Map © OpenStreetMap contributors — the marker sits in the middle of the ZIP codes this business serves.</p>' : '') +
    (pvZipChips ? '<div class="pv-chips" style="margin-top:12px">' + pvZipChips + '</div>' : '') +
    '</section>' +
    '<section class="pv-blk"><h2>Business details</h2><div class="pv-creds">' + pvDetails + '</div></section>' +
    '<p class="pv-match">Van Squads is here to help you find the right service for your home — we match you with the best possible local businesses in your area, and you book directly with the one you choose.</p>' +
    relHtml +
    '</div>' +
    '<aside class="pv-side"><div class="pv-contact"><h2>Contact this business</h2>' +
    '<div class="pv-cbtns">' +
    (b.phone ? '<a class="pv-btn pv-call" href="' + esc(pvTel) + '">Call ' + esc(b.phone) + '</a>' : '') +
    (b.website ? '<a class="pv-btn pv-web" href="' + esc(b.website) + '" target="_blank" rel="noopener">Visit website</a>' : '') +
    '</div>' +
    '<a class="pv-btn pv-quote" href="' + esc(appLink) + '">Send quote request</a>' +
    '<p class="pv-straight">Goes straight to this business. No obligation, no spam calls.</p>' +
    '</div></aside></div>' +
    (pvCentroid ? '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>' +
    '<script>if(window.L){var pvMap=L.map("pv-map").setView([' + pvCentroid[0] + ',' + pvCentroid[1] + '],11);' +
    'L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(pvMap);' +
    'L.marker([' + pvCentroid[0] + ',' + pvCentroid[1] + '],{icon:L.divIcon({className:"pv-pin-wrap",html:"<span class=\\"pv-pin\\"></span>",iconSize:[22,22],iconAnchor:[11,11]})}).addTo(pvMap);}</script>' : '');
  return new Response(pageShell(title, metaDesc, canonical, pvBody, jsonLd, photoAbs, pvHead), {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300, s-maxage=3600' }
  });
}
