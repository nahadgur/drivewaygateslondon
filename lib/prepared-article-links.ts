import type { BlogArticle } from '@/data/blog';

export interface PublicationLink {
  text: string;
  targetSlug: string;
}

/** Only link to articles which this release actually makes routable. */
export function applyPublicationLinks(
  markup: string,
  links: PublicationLink[],
  published: Pick<BlogArticle, 'slug'>[],
): string {
  for (const link of links) {
    if (!published.some(article => article.slug === link.targetSlug)) continue;
    const href = `/blog/${link.targetSlug}/`;
    if (markup.includes(`href="${href}"`)) continue;
    // Inputs are reviewed repository-owned text and slug values, not user HTML.
    markup = markup.replace(link.text, `<a href="${href}">${link.text}</a>`);
  }
  return markup;
}

export function escapeArticleText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function preparedArticleCard(article: BlogArticle): string {
  const escape = escapeArticleText;
  return `<a class="page-card article-card" href="/blog/${escape(article.slug)}/" data-search="${escape(`${article.title} ${article.excerpt} ${article.category}`.toLowerCase())}" data-category="${escape(article.category)}"><div class="card-image"><img src="${escape(article.featuredImage)}" alt="${escape(article.featuredImageAlt || article.title)}" loading="lazy" decoding="async" width="${article.featuredImageWidth || 1536}" height="${article.featuredImageHeight || 1024}"></div><div class="card-copy"><span class="card-category">${escape(article.category)}</span><h3>${escape(article.title)}</h3><span class="card-action">Read article <span aria-hidden="true">→</span></span></div></a>`;
}
