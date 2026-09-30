import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import ts from 'typescript';

const articles = JSON.parse(readFileSync('data/repair-articles.json', 'utf8'));
const templates = JSON.parse(readFileSync('data/showcase/repair-articles.json', 'utf8'));
const reviewed = JSON.parse(readFileSync('docs/source-reviews/repair-articles-1-3.json', 'utf8'));
// Load the pure TypeScript helpers without adding a runtime dependency or runner.
const js = ts.transpileModule(readFileSync('lib/prepared-article-links.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const mod = { exports: {} };
new Function('module', 'exports', 'require', js)(mod, mod.exports, createRequire(import.meta.url));
const { applyPublicationLinks, preparedArticleCard } = mod.exports;

for (const [index, article] of articles.entries()) {
  const route = `/blog/${article.slug}/`;
  const page = templates[route];
  assert(page, `${route}: snapshot missing`);
  assert(article.useMetaTitle && article.metaTitle && article.metaDescription);
  assert(article.featuredImageWidth === 1672 && article.featuredImageHeight === 941);
  assert(existsSync(`public${article.featuredImage}`), `${route}: hero missing`);
  assert(reviewed.some(row => row.article_priority === index + 1), `${route}: source ledger missing`);
  const prose = article.content.filter(block => block.type !== 'h2').flatMap(block => block.items || [block.text]).join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
  const words = prose.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu).length;
  assert(words >= 1200, `${route}: ${words} body words`);
  assert.equal((page.main.match(/<h1>/g) || []).length, 1);
  assert.equal((page.main.match(/<img /g) || []).length, 1);
  assert.equal((page.main.match(/class="quote-band"/g) || []).length, 1);
  assert(!/sidebar-quote|related-reading|noindex|localhost/.test(page.main));
  assert(page.main.includes('Images illustrate styles and are not verified customer installations.'));
  const draftCopy = applyPublicationLinks(page.main, page.publicationLinks, []);
  assert.equal(draftCopy, page.main, 'Unpublished destinations must stay plain text');
  const firstRelease = applyPublicationLinks(page.main, page.publicationLinks, [articles[0]]);
  assert(!firstRelease.includes('href="/blog/electric-gates-keep-breaking-down-repair-or-replace/"'), 'First release must not link to article 3');
  const allLive = applyPublicationLinks(page.main, page.publicationLinks, articles);
  const links = [...allLive.matchAll(/href="(\/[^"#]+)"/g)].map(match => match[1]);
  assert.equal(new Set(links).size, links.length, `${route}: repeated internal destination`);
  for (const link of page.publicationLinks) {
    assert.equal(allLive.includes(`href="/blog/${link.targetSlug}/"`), articles.some(a => a.slug === link.targetSlug));
  }
  const card = preparedArticleCard(article);
  assert(card.includes(`href="${route}"`) && card.includes(article.featuredImage));
  console.log(`${article.slug}: ${words} body words; metadata, asset and release-link checks passed`);
}

const origin = process.argv[2];
if (origin) {
  const hub = await (await fetch(`${origin}/blog/`)).text();
  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  for (const article of articles) {
    const path = `/blog/${article.slug}/`;
    const response = await fetch(`${origin}${path}`, { redirect: 'manual' });
    if (article.draft) {
      assert.equal(response.status, 404, `${path}: draft must 404`);
      assert(!hub.includes(`href="${path}"`), `${path}: draft in hub`);
      assert(!sitemap.includes(path), `${path}: draft in sitemap`);
    } else {
      assert.equal(response.status, 200, `${path}: published route`);
      const markup = await response.text();
      assert(markup.includes(`<title>${article.metaTitle.replace(/&/g, '&amp;')}</title>`), `${path}: exact meta title`);
      assert(markup.includes('name="description"') && markup.includes(article.metaDescription));
      assert(markup.includes(`href="https://www.drivewaygateslondon.co.uk${path}"`));
      assert(markup.includes(`datetime="${article.publishDate}"`));
      assert(markup.includes(article.featuredImage));
      assert(hub.includes(`href="${path}"`) && sitemap.includes(path));
      assert(!markup.includes('name="robots" content="noindex'));
    }
  }
  console.log('HTTP article visibility, hub and sitemap checks passed.');
}
