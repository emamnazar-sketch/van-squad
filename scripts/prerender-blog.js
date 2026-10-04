/* Prerender Van Squads blog posts to real static URLs (/blog/<slug>/).
   Run: node scripts/prerender-blog.js
   Why: Google and AI search do not reliably index #/fragment URLs, so each
   post gets a fully rendered static page with complete meta tags, JSON-LD,
   and semantic HTML. The SPA redirects old #/blog/<slug> links here. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://vansquads.com';

const window = {};
eval(fs.readFileSync(path.join(ROOT, 'js/blog.js'), 'utf8'));
const POSTS = window.VS_BLOG.POSTS;

function h(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderBody(p) {
  // {{img:N}} -> <figure>; in-body "#/..." links -> root-relative "/#/..." so they
  // keep working from the prerendered /blog/<slug>/ pages.
  return String(p.body)
    .replace(/\{\{img:(\d+)\}\}/g, (m, n) => {
      const im = (p.images || [])[Number(n)];
      if (!im) return '';
      return '<figure class="post-figure"><img src="/' + im.src + '" alt="' + h(im.alt) + '" loading="lazy">' +
        (im.caption ? '<figcaption>' + h(im.caption) + '</figcaption>' : '') + '</figure>';
    })
    .replace(/href="#\//g, 'href="/#/');
}

function relatedHtml(p) {
  const rel = (p.related || [])
    .map(slug => POSTS.find(x => x.slug === slug))
    .filter(Boolean);
  if (!rel.length) return '';
  const cards = rel.map(rp => {
    const thumb = rp.images && rp.images[0]
      ? '<img class="post-thumb" src="/' + rp.images[0].src + '" alt="' + h(rp.images[0].alt) + '" loading="lazy">'
      : '';
    return '<a class="post-card" href="/blog/' + rp.slug + '/">' + thumb +
      '<div class="post-meta"><span class="cat">' + h(rp.category) + '</span> · ' + fmtDate(rp.date) + '</div>' +
      '<h2>' + h(rp.title) + '</h2><p>' + h(rp.excerpt) + '</p>' +
      '<span class="back" style="color:var(--orange);font-weight:700">Read →</span></a>';
  }).join('');
  return '<h3>Keep reading</h3><div class="blog-list">' + cards + '</div>';
}

function faqHtml(p) {
  return p.faq.map(f =>
    '<div class="detail-sec"><h3>' + h(f.q) + '</h3><p class="muted">' + f.a + '</p></div>'
  ).join('');
}

function ctaHtml() {
  return '<div class="cta-duo">' +
    '<div class="cta-card"><p class="eyebrow">For customers</p><h3>Services that come to you</h3>' +
    '<p class="muted">Skip the phone tag. See verified mobile pros near you — upfront prices, real packages, requests sent in minutes.</p>' +
    '<a class="btn btn-primary" href="/#/browse">Find services →</a>' +
    '<p class="fine"><a href="/#/login">Create a free account</a> to send requests and track appointments.</p></div>' +
    '<div class="cta-card"><p class="eyebrow">For business owners</p><h3>Customers are searching for what you do</h3>' +
    '<p class="muted">List your mobile business on Van Squads free. Show up by ZIP, publish your packages with upfront pricing, and get booking requests straight to your inbox. No listing fees, no commissions — you keep every dollar.</p>' +
    '<a class="btn btn-navy" href="/#/join">List your business →</a>' +
    '<p class="fine">If you travel to your customers — a van, a car, or your own two feet — you belong here.</p></div>' +
  '</div>';
}

function headerHtml() {
  return '<div class="top-strip">WELCOME &nbsp;·&nbsp; A real directory of mobile services. Service and payment terms are arranged directly between customer and business owner.</div>' +
  '<header class="site-header"><div class="wrap header-inner">' +
    '<a class="brand" href="/" aria-label="Van Squads home">' +
    '<span class="logo" aria-hidden="true"><svg viewBox="0 0 64 64" width="36" height="36"><rect width="64" height="64" rx="14" fill="#FF6A2B"/><circle cx="32" cy="18" r="7" fill="#fff"/><path d="M18 30 L32 50 L46 30" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
    '<span class="wordmark">Van Squads</span></a>' +
    '<nav class="main-nav" aria-label="Main">' +
    '<a href="/#/browse">Explore services</a>' +
    '<a href="/#/how-it-works">How it works</a>' +
    '<a href="/#/blog">Blog</a>' +
    '<a href="/#/join">List your business <span class="ext" aria-hidden="true">↗</span></a>' +
    '</nav></div></header>';
}

function footerHtml() {
  return '<footer class="site-footer"><div class="wrap footer-inner">' +
    '<div class="footer-brand"><span class="logo" aria-hidden="true">' +
    '<svg viewBox="0 0 64 64" width="30" height="30"><rect width="64" height="64" rx="14" fill="#FF6A2B"/><circle cx="32" cy="18" r="7" fill="#fff"/><path d="M18 30 L32 50 L46 30" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
    '<div><strong>Van Squads</strong><p>Local services. At your door.</p></div></div>' +
    '<nav class="footer-nav" aria-label="Footer">' +
    '<a href="/#/browse">Explore services</a>' +
    '<a href="/#/how-it-works">How it works</a>' +
    '<a href="/#/blog">Blog</a>' +
    '<a href="/#/join">List your business</a>' +
    '<a href="/#/about">About</a>' +
    '<a href="/#/contact">Contact</a>' +
    '<a href="/#/privacy">Privacy</a>' +
    '<a href="/#/terms">Terms</a>' +
    '</nav></div>' +
    '<div class="wrap footer-fine">Van Squads is a directory, not the service provider. Service and payment terms are arranged directly with each business.</div></footer>';
}

function jsonLd(p, url, img) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': p.title,
      'description': p.metaDescription,
      'datePublished': p.date,
      'dateModified': p.updated || p.date,
      'author': { '@type': 'Organization', 'name': 'Van Squads', 'url': SITE + '/' },
      'publisher': { '@type': 'Organization', 'name': 'Van Squads', 'url': SITE + '/' },
      'image': img,
      'mainEntityOfPage': url,
      'speakableSpecification': { '@type': 'SpeakableSpecification', 'cssSelector': ['.tldr'] }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': p.faq.map(f => ({
        '@type': 'Question', 'name': f.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE + '/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': SITE + '/#/blog' },
        { '@type': 'ListItem', 'position': 3, 'name': p.title, 'item': url }
      ]
    }
  ];
}

function renderPost(p) {
  const url = SITE + '/blog/' + p.slug + '/';
  const img = p.images && p.images[0] ? SITE + '/' + p.images[0].src : SITE + '/images/og-default.jpg';
  const title = p.title + ' — Van Squads';
  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n' +
    '<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + h(title) + '</title>\n' +
    '<meta name="description" content="' + h(p.metaDescription) + '">\n' +
    '<link rel="canonical" href="' + url + '">\n' +
    '<meta property="og:type" content="article">\n' +
    '<meta property="og:title" content="' + h(title) + '">\n' +
    '<meta property="og:description" content="' + h(p.metaDescription) + '">\n' +
    '<meta property="og:image" content="' + img + '">\n' +
    '<meta property="og:url" content="' + url + '">\n' +
    '<meta property="article:published_time" content="' + p.date + '">\n' +
    '<meta property="article:modified_time" content="' + (p.updated || p.date) + '">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n' +
    '<meta name="twitter:title" content="' + h(title) + '">\n' +
    '<meta name="twitter:description" content="' + h(p.metaDescription) + '">\n' +
    '<meta name="twitter:image" content="' + img + '">\n' +
    '<script type="application/ld+json">\n' + JSON.stringify(jsonLd(p, url, img)) + '\n</script>\n' +
    '<link rel="stylesheet" href="/css/styles.css">\n' +
    '</head>\n<body>\n' +
    headerHtml() +
    '\n<main class="wrap"><div class="article">' +
    '<a class="back" href="/#/blog">← Back to blog</a>' +
    '<p class="eyebrow">' + h(p.category) + ' · ' + fmtDate(p.date) + ' · ' + h(p.readTime) + '</p>' +
    '<h1>' + h(p.title) + '</h1>' +
    '<div class="tldr"><strong>The short answer.</strong> ' + p.tldr + '</div>' +
    renderBody(p) +
    relatedHtml(p) +
    ctaHtml() +
    '<h3>Frequently asked questions</h3>' +
    faqHtml(p) +
    '<div class="disclosure"><strong>Van Squads is a directory, not the service provider.</strong> Service and payment terms are arranged directly between customer and business owner.</div>' +
    '</div></main>\n' +
    footerHtml() +
    '\n</body>\n</html>\n';
}

POSTS.forEach(p => {
  const dir = path.join(ROOT, 'blog', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), renderPost(p));
  console.log('wrote blog/' + p.slug + '/index.html');
});
