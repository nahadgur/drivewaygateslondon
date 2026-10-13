import shared from '@/data/showcase/shared.json';
import { businessHoursHtml } from '@/lib/business-profile';
import { siteConfig } from '@/data/site';
export function Footer({ home = false }: { home?: boolean } = {}) {
  const html = (home ? shared.footerHome : shared.footer)
    .replace('<div class="footer-address">', `${businessHoursHtml}<div class="footer-address">`)
    .replace('<p>We design, supply and install driveway gates for homeowners and businesses across every London borough.</p>', `<p>${siteConfig.businessDescription}</p>`);
  return <div className="footer-host" dangerouslySetInnerHTML={{ __html: html }} />;
}
