import fs from 'node:fs';
import assert from 'node:assert/strict';

// Run after next build: check every generated marketing page, including each
// service/area combination, so a future template cannot silently lose its CTA.
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
let checked = 0;
for (const route of Object.keys(manifest.routes)) {
  if (!/^\/(?:$|about$|(?:guides|blog|services|commercial|location|local-regulations)(?:\/|$))/.test(route)) continue;
  const file = `.next/server/app/${route === '/' ? 'index' : route.slice(1)}.html`;
  const html = fs.readFileSync(file, 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main, `${route}: no main content`);
  const banners = Array.from(main.matchAll(/<section class="[^"]*\b(?:quote-band|closing)\b[^"]*"[^>]*>([\s\S]*?)<\/section>/g));
  assert.equal(banners.length, 1, `${route}: expected one closing CTA banner`);
  const href = banners[0][1].match(/<a\b[^>]*href="([^"]+)"/)?.[1];
  assert(href && (/^\/contact\/(?:\?[^#]*)?#quote-form$/.test(href) || href === '#enquiry'), `${route}: CTA must lead directly to the enquiry form`);
  if (href === '#enquiry') {
    assert(main.includes('id="enquiry"') && main.includes('id="quote-form"'), `${route}: missing local enquiry form`);
  }
  assert(banners[0][1].includes('Get a Free Quote'), `${route}: quote CTA missing`);
  checked++;
}
assert(checked > 0, 'No marketing pages checked');
assert(fs.readFileSync('.next/server/app/contact.html', 'utf8').includes('id="quote-form"'), 'Contact form anchor missing');
console.log(`Quote banners PASS: ${checked} built marketing pages each have one banner linked directly to a lead form.`);
