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
  const banners = Array.from(main.matchAll(/<section class="[^"]*\b(?:quote-band|closing)\b[^"]*"[^>]*>([\s\S]*?)<\/section>/g));
  assert.equal(banners.length, 1, `${route}: expected one CTA banner`);
  const href = banners[0][1].match(/<a\b[^>]*href="([^"]+)"/)?.[1];
  assert(href && (/^\/contact\/(?:\?[^#]*)?#quote-form$/.test(href) || href === '#enquiry' || href === '#article-enquiry'), `${route}: CTA must lead directly to the enquiry form`);
  if (/^\/(guides|blog)\/[^/]+$/.test(route)) {
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
  assert(banners[0][1].includes('Get a Free Quote'), `${route}: quote CTA missing`);
  checked++;
}
assert(checked > 0, 'No marketing pages checked');
assert(fs.readFileSync('.next/server/app/contact.html', 'utf8').includes('id="quote-form"'), 'Contact form anchor missing');
console.log(`Quote banners PASS: ${checked} built marketing pages each have one banner linked directly to a lead form.`);
console.log(`Article CTA copy PASS: ${articleCount} guides and blogs have their reviewed topic-specific banner.`);
