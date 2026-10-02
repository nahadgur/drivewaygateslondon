import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const read = name => JSON.parse(readFileSync(new URL('../' + name, import.meta.url), 'utf8'));
const ledger = read('docs/source-reviews/remaining-content-2026-10-02.json');
const pages = read('data/showcase/pages.json');
const revised = read('data/remaining-content-review.json');
const redirects = await require('../next.config.js').redirects();
const prefix = { blog: '/blog/', guide: '/guides/', service: '/services/', access: '/services/access-control/' };
for (const [old, destination] of Object.entries(ledger.merges)) {
  assert(!pages[old], `Retired snapshot remains: ${old}`);
  assert(pages[destination], `Missing merge destination: ${destination}`);
  assert(redirects.some(r => r.source === old && r.destination === destination && r.permanent));
  assert(!redirects.some(r => r.source === destination), `Redirect chain at ${destination}`);
  for (const [route, page] of Object.entries(pages)) {
    assert(!Object.values(page).join(' ').includes(`href="${old}"`), `Retired link on ${route}`);
  }
}
for (const [slug, revision] of Object.entries(revised)) {
  const route = prefix[revision.kind] + slug + '/';
  const main = pages[route]?.main;
  assert(main, `Missing reviewed snapshot: ${route}`);
  for (const [, body] of revision.sections) assert(main.includes(body), `Editorial body differs on ${route}`);
  assert(!main.includes('\u2014'), `Em dash on ${route}`);
}
const seconds = 20 * 10 * 365;
const movingHours = seconds / 3600;
const movingKWh = 100 * movingHours / 1000;
const idleKWh = 5 * (8760 - movingHours) / 1000;
const example = pages['/guides/electric-gate-running-costs/'].main;
for (const value of [movingKWh, idleKWh, movingKWh + idleKWh]) assert(example.includes(value.toFixed(2) + ' kWh'));
assert(example.includes('£' + ((movingKWh + idleKWh) * 0.30).toFixed(2)));
console.log('Verified four topic merges, direct destinations, editorial/snapshot agreement and the running-cost calculation.');
