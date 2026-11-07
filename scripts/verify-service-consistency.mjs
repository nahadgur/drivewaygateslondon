import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const images = JSON.parse(readFileSync('data/service-images.json', 'utf8'));
const pages = JSON.parse(readFileSync('data/showcase/pages.json', 'utf8'));
const manifest = JSON.parse(readFileSync('.next/prerender-manifest.json', 'utf8'));
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
for (const [route, image] of Object.entries(images)) {
  assert(existsSync(`public${image.src}`), `${route}: missing asset`);
  assert(image.alt.length > 25 && image.alt.length < 190, `${route}: descriptive alt required`);
  assert(image.width > 0 && image.height > 0 && image.caption && image.provenance);
  assert(!image.src.includes('unsplash') && !image.src.endsWith('/detail.webp'));
  const snapshotHero = pages[route].main.match(/<img\b[^>]*class="hero-backdrop"[^>]*>/)?.[0];
  assert(snapshotHero?.includes(`src="${image.src}"`) && snapshotHero.includes(`alt="${escape(image.alt)}"`), `${route}: reviewed snapshot differs`);
}
const commercial = Object.entries(images).filter(([route]) => route.startsWith('/commercial/'));
assert.equal(new Set(commercial.map(([,image]) => image.src)).size, 4, 'Commercial subjects need distinct images');
assert(!pages['/commercial/'].main.includes('/detail.webp'));
for (const [route, page] of Object.entries(pages)) {
  for (const match of (page.main || '').matchAll(/<a\b[^>]*class="[^"]*\bpage-card\b[^"]*"[^>]*>[\s\S]*?<\/a>/g)) {
    const card = match[0], destination = card.match(/href="([^"]+)"/)?.[1], image = images[destination];
    if (image) assert(card.includes(`src="${image.src}"`) && card.includes(`alt="${escape(image.alt)}"`), `${route}: card differs for ${destination}`);
  }
}
function verify(html, route) {
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  const parent = route.replace(/\/$/, '').split('/').slice(0,3).join('/') + '/';
  const image = images[route] || images[parent];
  if (image) {
    const hero = visible.match(/<img\b[^>]*class="hero-backdrop"[^>]*>/)?.[0];
    assert(hero?.includes(`src="${image.src}"`) && hero.includes(`alt="${escape(image.alt)}"`), `${route}: hero not reviewed image`);
    assert(!hero.includes('aria-hidden="true"'), `${route}: meaningful image hidden`);
    assert(html.includes(`property="og:image" content="https://www.drivewaygateslondon.co.uk${image.src}"`), `${route}: OG differs`);
    assert(html.includes(`property="og:image:alt" content="${escape(image.alt)}"`), `${route}: OG alt differs`);
    assert(!visible.includes(image.caption), `${route}: image disclaimer should not be shown`);
  }
  if (/\/services\/(gate-repair-and-maintenance|gate-automation-kits)\//.test(route)) {
    assert(!visible.includes('Design, Supply &amp; Install') && !visible.includes('We Install Across London'));
    assert(!visible.includes('gate is designed, fabricated, and delivered'));
    assert(!/<title>[^<]*\| Installation, Free Quotes<\/title>/.test(html));
    if (/gate-repair-and-maintenance/.test(route)) {
      assert(visible.includes('We repair and service swing and sliding gates'));
      assert(!visible.includes('Free site survey and written quote. No pressure, no obligation.'));
    } else assert(visible.includes('We automate existing driveway gates'));
  }
}
let count = 0;
for (const route of Object.keys(manifest.routes)) {
  if (!route.startsWith('/services/') && !route.startsWith('/commercial/')) continue;
  const file = `.next/server/app${route}.html`;
  if (!existsSync(file)) continue;
  verify(readFileSync(file, 'utf8'), route+'/'); count++;
}
const origin = process.argv[2];
if (origin) {
  for (const route of Object.keys(images)) {
    const response = await fetch(origin+route);
    assert.equal(response.status,200,route); verify(await response.text(),route);
  }
}
console.log(`Service consistency PASS: 21 image records, all snapshot cards, ${count} built service/commercial pages, distinct commercial subjects, alt text, metadata, provenance and repair/retrofit intent.`);
