export type GuidePillar =
  | 'Pricing & Costs'
  | 'Comparison & Buying'
  | 'Maintenance & Troubleshooting'
  | 'Safety & Compliance';

export interface GuideSection {
  heading: string;
  body: string; // plain prose paragraphs separated by \n\n
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  pillar: GuidePillar;
  excerpt: string;
  readingMinutes: number;
  publishDate: string;
  featuredImage: string;
  intro: string; // opening paragraph shown above TOC
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlug?: string; // links sidebar to a money page
  relatedGuides?: string[];    // slugs of related guides
}

export const guides: Guide[] = [
  // ── PRICING & COSTS ──────────────────────────────────────────────
  {
    slug: 'driveway-gate-costs-london',
    title: 'Driveway Gate Costs London 2025: Full Price Guide',
    metaTitle: 'Driveway Gate Costs London 2025 | Full Price Guide',
    metaDescription: 'How much do driveway gates cost in London? Full price breakdown covering gate types, materials, automation, installation, and ongoing costs. Updated 2025.',
    pillar: 'Pricing & Costs',
    excerpt: 'A full breakdown of what driveway gates cost in London in 2025 — from basic timber swing gates to automated aluminium sliding systems — including installation, automation, and ongoing maintenance.',
    readingMinutes: 9,
    publishDate: '2025-03-01',
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'electric-sliding-gates',
    relatedGuides: ['electric-gate-running-costs', 'automation-kit-installation-prices'],
  },
  {
    slug: 'electric-gate-running-costs',
    title: 'Electric Gate Running Costs: What You Actually Pay Per Year',
    metaTitle: 'Electric Gate Running Costs UK | Annual Cost Breakdown',
    metaDescription: 'What does it cost to run an electric driveway gate in the UK? Electricity, servicing, repairs, and hidden costs — all calculated. Updated 2025.',
    pillar: 'Pricing & Costs',
    excerpt: 'Electric gates use very little power day-to-day, but the annual running cost picture is more nuanced. Here is what you will actually pay in electricity, servicing, and maintenance.',
    readingMinutes: 7,
    publishDate: '2025-03-08',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['driveway-gate-costs-london', 'winter-gate-maintenance'],
  },
  {
    slug: 'automation-kit-installation-prices',
    title: 'Gate Automation Kit Prices: How Much to Automate Existing Gates?',
    metaTitle: 'Gate Automation Kit Prices UK | How Much to Automate Your Gates?',
    metaDescription: 'How much does it cost to add automation to existing manual gates in the UK? Motor types, intercom add-ons, and full installation price ranges explained.',
    pillar: 'Pricing & Costs',
    excerpt: 'Already have manual gates and want to add motors? Here is what automation kits cost in the UK, broken down by gate type, motor system, and any access control add-ons.',
    readingMinutes: 6,
    publishDate: '2025-03-15',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-automation-kits',
    relatedGuides: ['driveway-gate-costs-london', 'electric-gate-running-costs'],
  },

  // ── COMPARISON & BUYING ──────────────────────────────────────────
  {
    slug: 'swing-vs-sliding-gates',
    title: 'Swing vs Sliding Gates: Which is Right for Your London Driveway?',
    metaTitle: 'Swing vs Sliding Gates | Which is Right for Your London Driveway?',
    metaDescription: 'Swing gates vs sliding gates: a side-by-side comparison of space requirements, costs, aesthetics, and maintenance to help London homeowners choose.',
    pillar: 'Comparison & Buying',
    excerpt: 'The single biggest decision in any driveway gate project. Swing or sliding — and which suits your property, your driveway, and your budget.',
    readingMinutes: 8,
    publishDate: '2025-03-22',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'electric-swing-gates',
    relatedGuides: ['wood-vs-aluminium-gates', 'driveway-gate-costs-london'],
  },
  {
    slug: 'wood-vs-aluminium-gates',
    title: 'Wood vs Aluminium Gates: The Complete Comparison for London Homes',
    metaTitle: 'Wood vs Aluminium Driveway Gates | Full Comparison for London',
    metaDescription: 'Wood or aluminium for your London driveway gate? Compare costs, lifespan, maintenance, aesthetics, and planning considerations side by side.',
    pillar: 'Comparison & Buying',
    excerpt: 'Timber looks warmer. Aluminium lasts longer with zero maintenance. This guide gives you the full honest comparison so you can pick the right material for your London property.',
    readingMinutes: 7,
    publishDate: '2025-03-29',
    featuredImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'aluminium-driveway-gates',
    relatedGuides: ['swing-vs-sliding-gates', 'driveway-gate-costs-london'],
  },
  {
    slug: 'best-intercom-systems',
    title: 'Best Gate Intercom Systems for London Homes 2025',
    metaTitle: 'Best Gate Intercom Systems London 2025 | Buyer\'s Guide',
    metaDescription: 'Which gate intercom system is best for London homes in 2025? Comelit, Hikvision, Ring, and BPT compared — features, prices, and which works with your gate motor.',
    pillar: 'Comparison & Buying',
    excerpt: 'Video intercoms have become the standard gate access add-on. But Comelit, Hikvision, Ring, and BPT all claim to be the best. Here is how they actually compare for London residential use.',
    readingMinutes: 8,
    publishDate: '2025-04-05',
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['swing-vs-sliding-gates', 'automation-kit-installation-prices'],
  },

  // ── MAINTENANCE & TROUBLESHOOTING ────────────────────────────────
  {
    slug: 'how-to-manually-open-electric-gate',
    title: 'How to Manually Open an Electric Gate (Step-by-Step)',
    metaTitle: 'How to Manually Open an Electric Gate | Step-by-Step Guide',
    metaDescription: 'Electric gate stuck? How to manually release and open any automated driveway gate during a power cut or motor failure. Works for swing and sliding gates.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'Power cut, dead motor, or lost remote — here is the step-by-step process for manually releasing and opening any type of automated driveway gate safely.',
    readingMinutes: 5,
    publishDate: '2025-04-12',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['gate-motor-humming-fix', 'winter-gate-maintenance'],
  },
  {
    slug: 'gate-motor-humming-fix',
    title: 'Gate Motor Humming but Not Moving: Causes and Fixes',
    metaTitle: 'Gate Motor Humming But Not Moving | Causes & Fixes',
    metaDescription: 'Gate motor making a humming noise but the gate is not moving? Here are the most common causes and what to check before calling an engineer.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'A humming motor that does not move the gate is one of the most common call-outs London gate engineers attend. Most causes are diagnosable — and some are fixable — before you even pick up the phone.',
    readingMinutes: 6,
    publishDate: '2025-04-19',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['how-to-manually-open-electric-gate', 'winter-gate-maintenance'],
  },
  {
    slug: 'winter-gate-maintenance',
    title: 'Winter Gate Maintenance: Keeping Your Electric Gate Working in Cold Weather',
    metaTitle: 'Winter Gate Maintenance London | Prevent Electric Gate Failures',
    metaDescription: 'Cold weather is the leading cause of electric gate failures in London. This checklist covers what to do before and during winter to keep your gate working reliably.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'London winters are damp and cold — and that combination is hard on gate motors, tracks, hinges, and timber finishes. This maintenance checklist covers what to do before the cold hits and what to watch for during it.',
    readingMinutes: 7,
    publishDate: '2025-04-26',
    featuredImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['gate-motor-humming-fix', 'electric-gate-running-costs'],
  },

  // ── SAFETY & COMPLIANCE ──────────────────────────────────────────
  {
    slug: 'uk-gate-safety-laws',
    title: 'UK Gate Safety Laws: What Every Gate Owner Needs to Know',
    metaTitle: 'UK Gate Safety Laws | Legal Requirements for Automated Driveway Gates',
    metaDescription: 'What are the legal requirements for automated gates in the UK? BS EN 12453, CE marking, force testing, and installer obligations explained clearly.',
    pillar: 'Safety & Compliance',
    excerpt: 'Automated gates are powerful machines. UK law sets out specific safety requirements for their design, installation, and ongoing use. This guide explains what the law actually requires — in plain English.',
    readingMinutes: 9,
    publishDate: '2025-05-03',
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['force-testing-explained', 'photocells-vs-safety-edges'],
  },
  {
    slug: 'force-testing-explained',
    title: 'Gate Force Testing Explained: What Your Installer Must Do by Law',
    metaTitle: 'Gate Force Testing Explained | Legal Requirement for UK Installers',
    metaDescription: 'What is gate force testing? Why does UK law require it? How is it done? Everything you need to know about BS EN 12445 impact force measurement for automated gates.',
    pillar: 'Safety & Compliance',
    excerpt: 'Force testing is a legal requirement — not an optional extra — for every automated gate installation in the UK. If your installer did not do it, your gate may not be legally compliant.',
    readingMinutes: 6,
    publishDate: '2025-05-10',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['uk-gate-safety-laws', 'photocells-vs-safety-edges'],
  },
  {
    slug: 'photocells-vs-safety-edges',
    title: 'Photocells vs Safety Edges: Which Gate Safety System Do You Need?',
    metaTitle: 'Photocells vs Safety Edges | Gate Safety Systems Compared',
    metaDescription: 'Photocell beams or safety edges — or both? How the two main gate safety systems work, where each is required, and what the UK standards say.',
    pillar: 'Safety & Compliance',
    excerpt: 'Safety photocells and safety edges both prevent gate-related injuries — but they work differently and are required in different situations. Understanding the difference matters whether you are buying a new gate or checking an existing one.',
    readingMinutes: 7,
    publishDate: '2025-05-17',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['uk-gate-safety-laws', 'force-testing-explained'],
  },
];

export const GUIDE_PILLARS: GuidePillar[] = [
  'Pricing & Costs',
  'Comparison & Buying',
  'Maintenance & Troubleshooting',
  'Safety & Compliance',
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByPillar(pillar: GuidePillar): Guide[] {
  return guides.filter(g => g.pillar === pillar);
}
