// London driveway gate pricing data (2025 market rates)

export interface PricingTier {
  treatment: string;
  slug: string;
  priceFrom: number;
  priceTo: number;
  typicalDuration: string;
  alignerSets: string;
  description: string;
}

export const pricingTiers: PricingTier[] = [
  {
    treatment: 'Electric Sliding Gates (Fully Installed)',
    slug: 'electric-sliding',
    priceFrom: 4500,
    priceTo: 12000,
    typicalDuration: '3 to 5 days',
    alignerSets: 'Gate + motor + track + remotes',
    description: 'Complete sliding gate package including gate fabrication, ground track, automation motor, two remote controls, and safety sensors. Ideal for driveways with limited swing clearance.',
  },
  {
    treatment: 'Electric Swing Gates (Fully Installed)',
    slug: 'electric-swing',
    priceFrom: 3500,
    priceTo: 10000,
    typicalDuration: '2 to 4 days',
    alignerSets: 'Gate + motor + posts + remotes',
    description: 'Double or single swing gate with underground or ram-arm automation, posts, remote controls, and safety features. The most popular choice for London residential driveways.',
  },
  {
    treatment: 'Wooden Driveway Gates (Installed)',
    slug: 'wooden-gates',
    priceFrom: 2500,
    priceTo: 8000,
    typicalDuration: '2 to 4 days',
    alignerSets: 'Bespoke timber + hardware',
    description: 'Handcrafted hardwood or treated softwood gates, hung on galvanised hinges with a locking system. Add automation from an additional £1,200. Price varies with timber species and design complexity.',
  },
  {
    treatment: 'Metal Driveway Gates (Installed)',
    slug: 'metal-gates',
    priceFrom: 2800,
    priceTo: 9500,
    typicalDuration: '2 to 4 days',
    alignerSets: 'Fabricated + galvanised + coated',
    description: 'Bespoke steel, aluminium, or wrought iron gates, hot-dip galvanised and powder coated. Includes posts, hinges, and lock. Automation available as an add-on from £1,200.',
  },
  {
    treatment: 'Gate Automation Retrofit',
    slug: 'automated-systems',
    priceFrom: 1200,
    priceTo: 3500,
    typicalDuration: '1 to 2 days',
    alignerSets: 'Motor + safety + remotes',
    description: 'Add electric automation to your existing manual gates. Includes motor, safety sensors, two remote controls, and optional intercom or keypad. Price depends on gate weight and type.',
  },
  {
    treatment: 'Gate Repair and Servicing',
    slug: 'gate-repair',
    priceFrom: 150,
    priceTo: 800,
    typicalDuration: 'Same day to 2 days',
    alignerSets: 'Callout + labour + parts',
    description: 'Diagnostic callout, motor repair or replacement, hinge adjustment, sensor recalibration, intercom fixes, and annual servicing packages.',
  },
];

// Service-specific pricing mapping
export const servicePricingMap: Record<string, string[]> = {
  'electric-sliding': ['electric-sliding'],
  'electric-swing': ['electric-swing'],
  'wooden-gates': ['wooden-gates', 'automated-systems'],
  'metal-gates': ['metal-gates', 'automated-systems'],
  'automated-systems': ['automated-systems'],
  'gate-repair': ['gate-repair'],
};

export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['electric-swing'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}

// What's included in a full installation
export const treatmentIncludes = [
  'Free site survey and measurement',
  'Bespoke gate design and fabrication',
  'All groundwork, posts, and foundations',
  'Automation motor, remotes, and safety sensors',
  'Intercom or keypad wiring (where specified)',
  'Full commissioning, testing, and handover',
];

// Finance options
export const financeInfo = {
  available: true,
  interestFree: true,
  monthlyFrom: 99,
  spreadOver: '6 to 36 months',
  description: 'Many of our London installers offer 0% finance on gate installations, letting you spread the cost from as little as £99 per month. Subject to status and approval.',
};
