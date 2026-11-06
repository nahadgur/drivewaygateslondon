import { priceBands } from '@/data/pricing';

// Rendered into editorial pages wherever the snapshot contains the
// <!-- price-bands --> marker, so the cost guide always shows the current
// owner-approved ranges from data/pricing.ts.
export const PRICE_BANDS_MARKER = '<!-- price-bands -->';

const serviceLinks: Record<string, string> = {
  'electric-sliding': '/services/electric-sliding-gates/',
  'electric-swing': '/services/electric-swing-gates/',
  'wooden-gates': '/services/wooden-driveway-gates/',
  'metal-gates': '/services/metal-driveway-gates/',
  'automation-retrofit': '/services/gate-automation-kits/',
  'gate-repair': '/services/gate-repair-and-maintenance/',
};

const gbp = (value: number) => `£${value.toLocaleString('en-GB')}`;

export function renderPriceBandTable(): string {
  const rows = priceBands.map(band => {
    const href = serviceLinks[band.slug];
    const label = href ? `<a href="${href}">${band.label}</a>` : band.label;
    return `<tr><td>${label}</td><td>${gbp(band.priceFrom)} to ${gbp(band.priceTo)}</td><td>${band.typicalDuration}</td><td>${band.includes}</td></tr>`;
  }).join('');
  return `<div class="table-scroll" role="region" aria-label="Typical installed price ranges" tabindex="0"><table><thead><tr><th>Gate or service</th><th>Typical price range</th><th>Typical time on site</th><th>Usually includes</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
