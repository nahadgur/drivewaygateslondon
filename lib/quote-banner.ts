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
