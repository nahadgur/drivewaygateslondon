import articleCtas from '@/data/article-ctas.json';

type ArticleCta = { heading: string; description: string };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]!));

// Shared by all template pages. Keep the service query when linking straight
// to the real contact form, and retain each page's reviewed banner copy.
export function ensureQuoteBanner(html: string): string {
  const banner = /<section class="([^"]*\b(?:quote-band|closing)\b[^"]*)">([\s\S]*?)<\/section>/g;
  if (!/<section class="[^"]*\b(?:quote-band|closing)\b/.test(html)) {
    html += '<section class="quote-band"><div><h2>Need help with your driveway gates?</h2><p>Tell us about your entrance and the installation, repair or access control work you need.</p></div><a class="button light" href="/contact/">Get a Free Quote</a></section>';
  }
  return html.replace(banner, (_, classes: string, content: string) => {
    const closing = classes.split(' ').includes('closing');
    const styling = closing ? classes : `${classes} editorial-quote lead-quote`;
    const linked = content.replace(/(<a\b[^>]*href=")(\/contact\/(?:\?[^"#]*)?)(?:#[^"]*)?("[^>]*>)[\s\S]*?<\/a>/g,
      '$1$2#quote-form$3Get a Free Quote</a>');
    return `<section class="${styling}" aria-label="Request a driveway gate quote">${linked}</section>`;
  });
}

export function placeArticleQuoteBanner(html: string, route: string): string {
  // Require an editorially reviewed offer for each article, including future
  // publications. Only the banner changes; the enquiry form stays untouched.
  const copy = (articleCtas as Record<string, ArticleCta>)[route];
  if (!copy?.heading || !copy.description) throw new Error(`Article CTA copy is missing: ${route}`);
  // Older templates held the introductory paragraph in the header. Move that
  // exact copy into the article before positioning the banner; do not duplicate it.
  let introduction = '';
  html = html.replace(/(<header class="article-header">[\s\S]*?)(<p class="lead">[\s\S]*?<\/p>)([\s\S]*?<\/header>)/,
    (_, before: string, lead: string, after: string) => { introduction = lead; return before + after; });
  let banner = '';
  html = html.replace(/<section class="[^"]*\blead-quote\b[^"]*"[^>]*>[\s\S]*?<\/section>/, match => {
    banner = match.replace(/href="\/contact\/[^\"]*"/, 'href="#article-enquiry"');
    banner = banner.replace(/<h2\b[^>]*>[\s\S]*?<\/h2>/, () => `<h2>${escapeHtml(copy.heading)}</h2>`)
      .replace(/<p\b[^>]*>[\s\S]*?<\/p>/, () => `<p>${escapeHtml(copy.description)}</p>`);
    return '';
  });
  if (!banner) throw new Error('Article quote banner is missing');
  return html.replace(/<article class="article-content">([\s\S]*?)<\/article>/, (_, body: string) => {
    body = introduction + body;
    const firstSection = body.search(/<(?:section|h2|details|figure)\b/);
    const position = firstSection < 0 ? body.length : firstSection;
    return `<article class="article-content">${body.slice(0, position)}${banner}${body.slice(position)}</article>`;
  });
}
