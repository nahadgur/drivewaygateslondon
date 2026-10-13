import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import ts from 'typescript';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const hub=read('data/security-hub.json');
const pages=read('data/showcase/pages.json');
const ledger=read('docs/source-reviews/security-hub-2026-10-13.json');
const plan=read('docs/editorial/security-hub-plan.json');
const route=`/guides/${hub.slug}/`;
const main=pages[route].main;
assert.equal(ledger.verdict,'PASS');
assert(ledger.primary_sources.length>=7&&ledger.primary_sources.every(s=>s.verdict==='PASS'));
const words=hub.sections.map(s=>s.body).join(' ').replace(/<[^>]+>/g,' ').match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu).length;
assert(words>=1200);
assert(main.includes(hub.takeaway)&&main.indexOf(hub.takeaway)<main.indexOf('<figure'));
assert(existsSync('public'+hub.featuredImage));
assert.equal((main.match(/class="quote-band"/g)||[]).length,1);
assert.equal((main.match(/href="\/contact\/"/g)||[]).length,1);
assert.equal((main.match(/<h1>/g)||[]).length,1);
for(const s of hub.sections)assert(main.includes(s.body),`Stale hub snapshot: ${s.id}`);
const bodyLinks=[...main.matchAll(/href="([^"#]+)"/g)].map(m=>m[1]);
assert.equal(new Set(bodyLinks).size,bodyLinks.length,'Repeated hub destination');
const domains=bodyLinks.filter(x=>x.startsWith('https:')).map(x=>new URL(x).hostname.replace(/^www\./,''));
assert.equal(domains.length,new Set(domains).size,'Repeated external domain');
for(const p of ledger.backlinks){
 assert.equal(pages[p].main.split(`href="${route}"`).length-1,1,`Missing/repeated return link on ${p}`);
 assert(bodyLinks.includes(p),`Missing outgoing link to ${p}`);
}
assert(pages['/guides/'].main.includes(`href="${route}"`));
assert.equal(plan.requested_topic_coverage.length,20);
const js=ts.transpileModule(readFileSync('lib/prepared-article-links.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const mod={exports:{}};new Function('module','exports',js)(mod,mod.exports);
const apply=mod.exports.applyPublicationLinks;
const live=read('data/repair-articles.json').filter(a=>!a.draft);
const prepared=read('data/showcase/repair-articles.json');
assert.equal(apply(main,hub.publicationLinks,[]),main,'Drafts must not become links');
for(const link of hub.publicationLinks){
 assert.equal(main.split(link.text).length-1,1,`Ambiguous anchor: ${link.text}`);
 const linked=apply(main,hub.publicationLinks,[{slug:link.targetSlug}]);
 assert.equal(linked.split(`href="/blog/${link.targetSlug}/"`).length-1,1);
 assert(plan.topics.some(p=>p.route===`/blog/${link.targetSlug}/`&&p.backlink_required));
 if(live.some(a=>a.slug===link.targetSlug)){
  const spoke=prepared[`/blog/${link.targetSlug}/`]||pages[`/blog/${link.targetSlug}/`];
  assert(spoke?.main.includes(`href="${route}"`),`Published spoke needs hub return link: ${link.targetSlug}`);
 }
}
console.log(`Security hub PASS: ${words} body words; 20 topic intents; ${ledger.backlinks.length} reciprocal article links; ${hub.publicationLinks.length} draft-safe future links; sources and snapshot verified.`);
