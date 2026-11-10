import { services } from '@/data/services';
import { priceBands, type PriceBand } from '@/data/pricing';
import { HOMEPAGE_FAQS, FAQS_LOCATION } from '@/data/site';

// Location pages carry the gate-type, price, repair and planning content that
// previously lived on separate service×location pages. Shared here so the
// page body and its FAQ structured data stay identical.

type Service = (typeof services)[number];

const bySlug = (slug: string) => {
  const service = services.find(s => s.slug === slug);
  if (!service) throw new Error(`Unknown service in location groups: ${slug}`);
  return service;
};

export const locationGateGroups: { id: string; title: (city: string) => string; intro: string; services: Service[] }[] = [
  {
    id: 'electric-gates',
    title: city => `Electric and automated gates in ${city}`,
    intro: 'Powered gates are planned around the opening, the space each leaf or panel needs to move, the power route and how everyone in the household gets in and out.',
    services: ['electric-sliding-gates', 'telescopic-sliding-gates', 'electric-swing-gates', 'automated-gate-systems', 'gate-automation-kits'].map(bySlug),
  },
  {
    id: 'gate-materials',
    title: city => `Driveway gate materials and styles in ${city}`,
    intro: 'Choose the material and design for the look you want and the upkeep you are happy with. Any of these can be manual or automated where the gate and supports suit powered operation.',
    services: ['aluminium-driveway-gates', 'wooden-driveway-gates', 'hardwood-driveway-gates', 'composite-driveway-gates', 'metal-driveway-gates', 'wrought-iron-gates', 'pedestrian-side-gates'].map(bySlug),
  },
];

// Only show a price on a gate-type card when the band is that service's own;
// shared bands are shown in the full price table instead.
const ownBand: Record<string, string> = {
  'electric-sliding': 'electric-sliding',
  'electric-swing': 'electric-swing',
  'wooden-gates': 'wooden-gates',
  'metal-gates': 'metal-gates',
  'gate-automation-kits': 'automation-retrofit',
  'gate-repair': 'gate-repair',
};

export function cardPriceBand(service: Service): PriceBand | undefined {
  const slug = ownBand[service.id];
  return slug ? priceBands.find(band => band.slug === slug) : undefined;
}

export const gbp = (value: number) => `£${value.toLocaleString('en-GB')}`;

const pick = (question: string) => {
  const faq = HOMEPAGE_FAQS.find(f => f.question === question);
  if (!faq) throw new Error(`Homepage FAQ missing: ${question}`);
  return faq;
};

export function locationFaqs(city: string) {
  return [
    { question: `How much do driveway gates cost in ${city}?`, answer: pick('How much do driveway gates cost in London?').answer },
    pick('How long does a driveway gate installation take?'),
    { question: `Do I need planning permission for driveway gates in ${city}?`, answer: pick('Do I need planning permission for driveway gates in London?').answer },
    pick('Can I automate my existing manual gates?'),
    FAQS_LOCATION[0],
    FAQS_LOCATION[2],
  ];
}
