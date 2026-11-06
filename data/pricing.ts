// Quotation scope, reviewed 2 October 2026. No owner-verified price schedule supplied.
export const quotationChecklist = [
  'Gate dimensions, material, finish and opening arrangement',
  'Posts, supports, foundations and any repairs to existing structures',
  'Automation, access controls, electrical work and protective measures where specified',
  'Removal, disposal, drainage and surface reinstatement',
  'Checks, commissioning, instructions and handover',
  'VAT treatment, exclusions, payment terms and proposed programme',
  'Product and workmanship warranty terms and aftercare arrangements',
];

// Guide price ranges restored 2 November 2026 at the owner's request. They are
// ranges only: the price is confirmed after a site survey. No finance offer.
// The cost guide table renders from this list automatically (lib/price-table.ts).
// The figures are also quoted in prose in the homepage FAQs (data/site.ts and the
// "/" snapshot) and the cost guide's first FAQ (data/guides.ts and its snapshot):
// update those answers when a range changes.
export interface PriceBand {
  slug: string;
  label: string;
  priceFrom: number;
  priceTo: number;
  typicalDuration: string;
  includes: string;
}

export const priceBands: PriceBand[] = [
  { slug: 'electric-sliding', label: 'Electric Sliding Gates (Fully Installed)', priceFrom: 4500, priceTo: 12000, typicalDuration: '3 to 5 days', includes: 'Gate, motor, track and remotes' },
  { slug: 'electric-swing', label: 'Electric Swing Gates (Fully Installed)', priceFrom: 3500, priceTo: 10000, typicalDuration: '2 to 4 days', includes: 'Gate, motor, posts and remotes' },
  { slug: 'wooden-gates', label: 'Wooden Driveway Gates (Installed)', priceFrom: 2500, priceTo: 8000, typicalDuration: '2 to 4 days', includes: 'Bespoke timber gate and hardware' },
  { slug: 'metal-gates', label: 'Metal Driveway Gates (Installed)', priceFrom: 2800, priceTo: 9500, typicalDuration: '2 to 4 days', includes: 'Fabricated, galvanised and coated gate' },
  { slug: 'automation-retrofit', label: 'Gate Automation Retrofit', priceFrom: 1200, priceTo: 3500, typicalDuration: '1 to 2 days', includes: 'Motor, safety devices and remotes' },
  { slug: 'gate-repair', label: 'Gate Repair and Servicing', priceFrom: 150, priceTo: 800, typicalDuration: 'Same day to 2 days', includes: 'Callout, labour and parts' },
];

// Services without a band of their own (composite, pedestrian side gates,
// commercial) show no price table until the owner supplies ranges.
const servicePriceBands: Record<string, string[]> = {
  'electric-sliding': ['electric-sliding'],
  'electric-swing': ['electric-swing'],
  'automated-systems': ['electric-sliding', 'electric-swing', 'automation-retrofit'],
  'wooden-gates': ['wooden-gates', 'automation-retrofit'],
  'hardwood-gates': ['wooden-gates', 'automation-retrofit'],
  'metal-gates': ['metal-gates', 'automation-retrofit'],
  'aluminium-gates': ['metal-gates', 'automation-retrofit'],
  'wrought-iron-gates': ['metal-gates', 'automation-retrofit'],
  'gate-automation-kits': ['automation-retrofit'],
  'gate-repair': ['gate-repair'],
};

export function getPriceBandsForService(serviceId: string): PriceBand[] {
  const slugs = servicePriceBands[serviceId] ?? [];
  return priceBands.filter(band => slugs.includes(band.slug));
}
