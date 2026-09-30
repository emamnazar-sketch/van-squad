# Van Squads Blog SOP

Customer-question posts that rank on Google/AI search and convert both sides of the marketplace.

## Topic selection
- Every post answers a REAL customer question — from 2026 Reddit threads, "people also ask," or actual customer messages. Never invent a topic.
- Record per post: source thread link + confidence level (High/Medium/Low + one-line reason).
- One question per post. If a second question appears, it becomes its own post.

## Draft (Amam reviews before build)
- Write the draft as markdown in `blog/drafts/<slug>.md` with frontmatter: title, slug, date, category, audience (`customers`), status (`draft` → `built-pending-review`).
- Amam reviews the draft. Nothing is built into `js/blog.js` until he approves the words.
- STANDING RULES: every post is **max 5 minutes read** (≤1,000 words at 200 wpm — trim, don't pad) and has **at least 2–3 visual images** (see Images below).

## Post structure (every post, in order)
1. **Eyebrow:** category · publish date · read time.
2. **H1:** the customer's question, word for word.
3. **"The short answer" box:** 2–3 sentences, direct answer with the key numbers. This is what AI search quotes.
4. **Body:** answer the question fully — price tables, comparisons, what drives cost, what to watch for. Question-formatted H2/H3s; the direct answer goes in the first 1–2 sentences under each heading.
5. **Dual CTA block** (rendered by `postCta()` in `js/app.js`, shared across posts — do not hand-write per post):
   - *For customers:* ZIP-code search → `#/browse?zip=XXXXX`, plus a "Create a free account" line.
   - *For business owners:* free-listing pitch → `#/join`.
6. **FAQ section:** 5 questions + direct answers, visible on the page (required for FAQPage schema).
7. **Disclosure:** "Van Squads is a directory, not the service provider. Service and payment terms are arranged directly between customer and business owner."
8. **Sources:** every price/fact claim gets its 2026 source link.

## SEO / AI-search (automatic per post)
- `blogSeo()` sets: `<title>`, meta description (≤160 chars, written per post in `metaDescription`), canonical URL, Open Graph + Twitter Card tags (og:title, og:description, og:image from the post's hero image, article:published_time), and JSON-LD for Article + FAQPage + BreadcrumbList.
- Share tags reset to the homepage defaults on every route change (`resetShareTags()`), so post metadata never leaks onto other pages.
- The blog listing card shows the post's hero image as a thumbnail.
- Add the post's `#/blog/<slug>` URL to `sitemap.xml`.
- Internal links: every post links to its category browse page and its service guide (`#/services/<slug>`) where one exists.

## CTA rules
- One primary action per audience, never more. Customer = ZIP search. Business owner = list business.
- Customer pitch speaks to outcome ("services that come to you", "skip the phone tag"), never to the directory itself.
- Business pitch leads with free: "No listing fees, no commissions — you keep every dollar." (Verified true on the join page.)
- Never add a third CTA (no newsletter, no social asks) — two audiences, two actions.

## Images
- Every post ships with 2–3 images, generated via the media pipeline (photorealistic, no text/logos — license-safe) into `images/blog/<slug>-<name>.jpg`.
- Register them in the post's `images` array: `{ src, alt, caption }` — alt text describes the image for SEO/accessibility, caption adds context.
- Place with `{{img:0}}`, `{{img:1}}`, … markers in the body HTML; `viewPost()` renders them as `<figure>` with lazy loading.
- Suggested placement: hero right after the short-answer box, one mid-article (after the main table/data), one before the final section.
- Optimize every image before commit: max 1600px wide, quality ~78, progressive JPEG (target ≤300KB each).

## Images in the draft
- Note the planned images in the draft markdown (filenames + captions) so Amam reviews them with the words.

## Build & publish
- New post = one object in `POSTS` in `js/blog.js` (slug, title, date, category, excerpt, metaDescription, readTime, updated, tldr, faq[5], body HTML). Keep body markup to the shared classes: `.tldr`, `.price-table`, `.check-list`, `.num-list`, `.disclosure`.
- Render-test in Node (viewPost output: CTA present, 5 FAQs, no broken markup) before committing.
- Visual check in the browser before any push.
- Publishing rides the normal deploy — never push a post alone on Netlify (credit freeze); posts go live with the Cloudflare migration push after Oct 3.
