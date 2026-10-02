import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root=process.cwd();
const pages=JSON.parse(readFileSync(join(root,'data/showcase/pages.json'),'utf8'));
const shared=JSON.parse(readFileSync(join(root,'data/showcase/shared.json'),'utf8'));
const manifest=JSON.parse(readFileSync(join(root,'.next/prerender-manifest.json'),'utf8'));
const known=new Set(Object.keys(manifest.routes).map(route=>route.replace(/\/$/,'')||'/'));
const preview=process.argv[2];
// Existing fallback routes, such as commercial-gates, render on demand.
for(const route of Object.keys(pages)){
 const normalized=route.replace(/\/$/,'')||'/';
 if(known.has(normalized))continue;
 assert(preview,`Pass a running production URL to verify on-demand route ${route}`);
 const response=await fetch(new URL(route,preview));
 assert.equal(response.status,200,`${route} must render successfully`);
 known.add(normalized);
}
const failures=[];let checked=0;
for(const [route,page] of Object.entries(pages)){
 const html=Object.values(page).join('\n');
 assert(!/Design preview|Review enquiry|hello@drivewaygateslondon|127\.0\.0\.1|file:\/\//.test(html),route+' contains preview-only content');
 assert(known.has(route.replace(/\/$/,'')||'/'),route+' not prerendered');
}
for(const html of [...Object.values(pages).map(page=>Object.values(page).join('\n')),...Object.values(shared)]){
 for(const match of html.matchAll(/(?:href|src|srcset)="([^" ]+)"/g)){
  const href=match[1].replaceAll('&amp;','&');
  if(!href.startsWith('/')||href.startsWith('//'))continue;
  const pathname=decodeURIComponent(new URL(href,'https://www.drivewaygateslondon.co.uk').pathname);
  if(pathname.startsWith('/showcase/assets/') || pathname.startsWith('/images/')){if(!existsSync(resolve(root,'public','.'+pathname)))failures.push(pathname);}
  else if(!known.has(pathname.replace(/\/$/,'')||'/'))failures.push(pathname);
  checked++;
 }
}
assert.deepEqual([...new Set(failures)],[],'Broken production destinations');
console.log(`Verified ${Object.keys(pages).length} production templates and ${checked} internal links/assets against the built route manifest.`);

// The service/location matrix is rendered by React, not by pages.json. Check
// its actual generated HTML so a legacy template cannot escape this audit.
const areaRoutes=Object.entries(manifest.routes).filter(([,entry])=>entry.srcRoute==='/services/[serviceSlug]/[locationSlug]');
assert(areaRoutes.length>0,'No generated service-area pages found');
function verifyArea(html,route){
 const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 assert(/class="showcase-page subpage [^"]*service-area-page"/.test(visible),`${route}: missing new design wrapper`);
 const hero=visible.match(/<img[^>]*class="hero-backdrop"[^>]*src="([^"]+)"/);
 assert(hero,`${route}: missing hero photograph`);
 assert(existsSync(resolve(root,'public','.'+hero[1])),`${route}: missing hero asset`);
 assert.equal((visible.match(/<h1\b/g)||[]).length,1,`${route}: expected one H1`);
 assert(visible.includes('id="quote-form"')&&visible.includes('WC1B 3HH'),`${route}: missing enquiry or footer`);
 assert(visible.includes(`href="https://www.drivewaygateslondon.co.uk${route}/"`),`${route}: missing canonical`);
 for(const [,href] of visible.matchAll(/<a\b[^>]*href="(\/[^"?#]*)/g)){
  const path=href.replace(/\/$/,'')||'/';
  assert(known.has(path)||existsSync(resolve(root,'public','.'+href)),`${route}: unknown link ${href}`);
 }
 const faq=Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),m=>JSON.parse(m[1])).find(s=>s['@type']==='FAQPage');
 const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');
 for(const question of faq?.mainEntity||[]){
  assert(visible.includes(escape(question.name))&&visible.includes(escape(question.acceptedAnswer.text)),`${route}: FAQ differs from schema`);
 }
}
for(const [route] of areaRoutes)verifyArea(readFileSync(join(root,'.next/server/app',route+'.html'),'utf8'),route);
if(preview){
 const route='/services/commercial-gates/hornchurch';
 const response=await fetch(new URL(route+'/',preview));
 assert.equal(response.status,200,route);
 verifyArea(await response.text(),route);
}
const privacy=readFileSync(join(root,'.next/server/app/privacy.html'),'utf8');
assert(privacy.includes('showcase-page subpage tone-forest privacy-page')&&privacy.includes('hero-backdrop'),'Privacy page must use the new design');
console.log(`Verified new design, hero assets, internal destinations, canonicals and FAQ consistency across ${areaRoutes.length} generated service-area pages, plus privacy and the on-demand commercial route.`);
