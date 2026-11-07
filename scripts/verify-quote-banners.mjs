import fs from 'node:fs';
import assert from 'node:assert/strict';

// Run after next build: check every generated marketing page, including each
// service/area combination, so a future template cannot silently lose its CTA.
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
const articleCtas = JSON.parse(fs.readFileSync('data/article-ctas.json', 'utf8'));
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]));
let checked = 0;
let articleCount = 0;
for (const route of Object.keys(manifest.routes)) {
  if (!/^\/(?:$|about$|our-work$|(?:guides|blog|services|commercial|location|local-regulations)(?:\/|$))/.test(route)) continue;
  const file = `.next/server/app/${route === '/' ? 'index' : route.slice(1)}.html`;
  const html = fs.readFileSync(file, 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main, `${route}: no main content`);
  // Every page carries its own enquiry form. Ordinary pages put their closing
  // copy in the green enquiry section; articles and location pages also keep
  // one banner, which must jump to the on-page form.
  assert(main.includes('id="quote-form"'), `${route}: no on-page enquiry form`);
  assert(!/class="[^"]*\beyebrow\b/.test(html), `${route}: eyebrow text is not used; fold it into the intro`);
  assert(!/href="\/contact\//.test(main), `${route}: quote links must use the on-page form, not /contact/`);
  const banners = Array.from(main.matchAll(/<section class="[^"]*\b(?:quote-band|closing)\b[^"]*"[^>]*>([\s\S]*?)<\/section>/g));
  assert(banners.length <= 1, `${route}: more than one CTA banner`);
  const href = banners[0]?.[1].match(/<a\b[^>]*href="([^"]+)"/)?.[1];
  if (banners.length) assert(href === '#enquiry' || href === '#article-enquiry', `${route}: CTA must lead directly to the on-page enquiry form`);
  else assert(main.includes('class="page-enquiry"'), `${route}: missing enquiry section`);
  if (/^\/(guides|blog)\/[^/]+$/.test(route)) {
    assert.equal(banners.length, 1, `${route}: expected one article CTA banner`);
    const article = main.match(/<article class="article-content">([\s\S]*?)<\/article>/)?.[1];
    assert(article && article.includes(banners[0][0]), `${route}: banner must be inside article`);
    const before = article.slice(0, article.indexOf(banners[0][0]));
    assert(before.includes('</p>') && !/<(?:h2|section|figure|details)\b/.test(before), `${route}: banner must follow introductory paragraphs before the first section`);
    assert.equal(href, '#article-enquiry', `${route}: article CTA must reach its own form`);
    assert(main.includes('id="article-enquiry"') && main.includes('id="quote-form"'), `${route}: missing article enquiry form`);
    const copy = articleCtas[`${route}/`];
    assert(copy?.heading && copy.description, `${route}: reviewed article-specific CTA missing`);
    assert(banners[0][1].includes(`<h2>${escapeHtml(copy.heading)}</h2>`) && banners[0][1].includes(`<p>${escapeHtml(copy.description)}</p>`), `${route}: article-specific CTA copy does not match`);
    articleCount++;
  }
  if (href === '#enquiry') {
    assert(main.includes('id="enquiry"') && main.includes('id="quote-form"'), `${route}: missing local enquiry form`);
  }
  if (banners.length) assert(banners[0][1].includes('Get a Free Quote'), `${route}: quote CTA missing`);
  checked++;
}
assert(checked > 0, 'No marketing pages checked');
assert(fs.readFileSync('.next/server/app/contact.html', 'utf8').includes('id="quote-form"'), 'Contact form anchor missing');
console.log(`Enquiry forms PASS: ${checked} built marketing pages each have an on-page enquiry form, and any banner links straight to it.`);
console.log(`Article CTA copy PASS: ${articleCount} guides and blogs have their reviewed topic-specific banner.`);
