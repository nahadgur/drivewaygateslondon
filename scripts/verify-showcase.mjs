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
  if(pathname.startsWith('/showcase/assets/')){if(!existsSync(resolve(root,'public','.'+pathname)))failures.push(pathname);}
  else if(!known.has(pathname.replace(/\/$/,'')||'/'))failures.push(pathname);
  checked++;
 }
}
assert.deepEqual([...new Set(failures)],[],'Broken production destinations');
console.log(`Verified ${Object.keys(pages).length} production templates and ${checked} internal links/assets against the built route manifest.`);
