// Van Squads — build the ZIP_COORDS + STATE_BY_PREFIX maps embedded in
// functions/business/[slug].js from the GeoNames US postal dataset.
//
// Run: node tools/build-zip-coords.mjs --businesses <dump.json> --geonames <US.txt> [--out <file>]
//   <dump.json>  JSON array of business rows (needs service_zips) — e.g. a
//                Supabase REST dump of active businesses.
//   <US.txt>     US.txt from https://download.geonames.org/export/zip/US.zip
// Output (default stdout): the two `var ... = {...};` blocks, ready to paste
// into functions/business/[slug].js in place of the previous maps.
// ZIP lat/lng source: GeoNames US postal code database (CC BY 4.0).
import fs from 'fs';

function arg(name, dflt) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
}
const bizPath = arg('businesses');
const geoPath = arg('geonames');
const outPath = arg('out');
if (!bizPath || !geoPath) {
  console.error('usage: node tools/build-zip-coords.mjs --businesses <dump.json> --geonames <US.txt> [--out <file>]');
  process.exit(2);
}
const biz = JSON.parse(fs.readFileSync(bizPath, 'utf8'));
const geo = {};
for (const ln of fs.readFileSync(geoPath, 'utf8').trim().split('\n')) {
  const p = ln.split('\t');
  geo[p[1]] = [parseFloat(p[9]), parseFloat(p[10]), p[3]]; // lat, lng, state name
}
const used = new Set();
biz.forEach((b) => (b.service_zips || []).forEach((z) => used.add(String(z))));
const missing = [...used].filter((z) => !geo[z]);
if (missing.length) console.error('WARNING: ZIPs missing from GeoNames:', missing.join(','));
const zips = [...used].filter((z) => geo[z]).sort();
const r4 = (n) => Math.round(n * 10000) / 10000;
let out = 'var ZIP_COORDS = {\n';
for (let i = 0; i < zips.length; i += 6) {
  out += '  ' + zips.slice(i, i + 6).map((z) => "'" + z + "':[" + r4(geo[z][0]) + ',' + r4(geo[z][1]) + ']').join(',') + ',\n';
}
out += '};\n';
const pref = {};
for (const z of zips) {
  const k = z.slice(0, 3);
  pref[k] = pref[k] || {};
  pref[k][geo[z][2]] = (pref[k][geo[z][2]] || 0) + 1;
}
const prefKeys = Object.keys(pref).sort();
out += 'var STATE_BY_PREFIX = {\n';
for (let i = 0; i < prefKeys.length; i += 6) {
  out += '  ' + prefKeys.slice(i, i + 6).map((k) => {
    const best = Object.entries(pref[k]).sort((a, b) => b[1] - a[1])[0][0];
    return "'" + k + "':'" + best.replace(/'/g, "\\'") + "'";
  }).join(',') + ',\n';
}
out += '};\n';
if (outPath) fs.writeFileSync(outPath, out); else process.stdout.write(out);
console.error('zips=' + zips.length + ' prefixes=' + prefKeys.length);
