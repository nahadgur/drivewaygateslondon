export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  faqs: FAQ[];
  /** Reviewed FAQs replace the legacy generic FAQ claims for this service. */
  reviewedFaqs?: boolean;
  updatedDate?: string;
}

export const services: Service[] = [
  {
  "id": "electric-sliding",
  "title": "Electric Sliding Gates",
  "slug": "electric-sliding-gates",
  "description": "Electric sliding gates designed around your London driveway, side space, supports and access requirements.",
  "image": "/images/gates/gate-aluminium-sliding-modern-dark-brick.png",
  "icon": "Zap",
  "color": "amber",
  "faqs": [
    {
      "question": "How much side space does a sliding gate need?",
      "answer": "The required space depends on the tracked, cantilever or multi-panel design, supporting structure and protective clearances. Request a drawing of the complete travel and stored position."
    },
    {
      "question": "Can a sliding gate work on a slope?",
      "answer": "A survey must assess the travel path, levels, drainage, supports and safe manual movement. A sloping driveway does not automatically favour a particular sliding design."
    },
    {
      "question": "How long will installation take?",
      "answer": "Agree a programme after the measured design and groundworks are known. Fabrication, power and reinstatement can affect the schedule."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "electric-swing",
  "title": "Electric Swing Gates",
  "slug": "electric-swing-gates",
  "description": "Single and paired electric swing gates planned around your opening, parking space and everyday access.",
  "image": "/images/gates/gate-aluminium-swing-open-luxury-garden.png",
  "icon": "Shield",
  "color": "emerald",
  "faqs": [
    {
      "question": "Should swing gates open inward?",
      "answer": "The site layout, boundary and highway requirements need checking. Do not let a proposed leaf sweep over a public pavement or road without resolving the legal and safety implications with the relevant authority."
    },
    {
      "question": "What width should I choose?",
      "answer": "Measure vehicle turning, the clear opening, supports and pedestrian use. A standard width cannot establish suitability for every driveway."
    },
    {
      "question": "Are swing gates always cheaper than sliding gates?",
      "answer": "Compare complete quotations for your entrance. Supports, groundworks, gate design and controls can change the relative cost."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "wooden-gates",
  "title": "Wooden Driveway Gates",
  "slug": "wooden-driveway-gates",
  "description": "Timber driveway gates for London homes, with the species, construction, finish and upkeep agreed before ordering.",
  "image": "/images/gates/gate-wooden-oak-swing-cottage-garden.png",
  "icon": "Sparkles",
  "color": "amber",
  "faqs": [
    {
      "question": "How long do wooden gates last?",
      "answer": "Condition over time depends on the timber, construction, finish, exposure and care. Request the proposed product specification and terms rather than relying on a universal number of years."
    },
    {
      "question": "Can wooden gates be automated?",
      "answer": "Potentially, after assessment of the complete gate, supports, geometry and hazards. Motor capacity alone does not establish suitability."
    },
    {
      "question": "Which timber should I choose?",
      "answer": "Compare samples, construction, finish care and the written terms for the available species or modified-wood product."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "metal-gates",
  "title": "Metal Driveway Gates",
  "slug": "metal-driveway-gates",
  "description": "Compare metal driveway gate designs, fabrication and finish options for your London entrance.",
  "image": "/images/gates/gate-wrought-iron-ornate-daytime-manor.png",
  "icon": "Globe",
  "color": "sky",
  "faqs": [
    {
      "question": "Are all metal gates galvanised?",
      "answer": "Do not assume so. Confirm the actual metal and preparation/coating system in the quotation."
    },
    {
      "question": "Can you restore an existing iron-style gate?",
      "answer": "A specialist needs to identify the material, condition and repair scope before advising whether restoration is suitable."
    },
    {
      "question": "Are metal gates maintenance-free?",
      "answer": "No. Follow the supplied care instructions for the finish, fittings and any automation."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
    id: 'automated-systems',
    title: 'Automated Gate Systems',
    slug: 'automated-gate-systems',
    description: "Plan an automated driveway gate system in London, including gates, motors, controls and site-specific protective measures. Compare new installations and suitable upgrades after assessment.",
    image: '/images/gates/gate-automation-intercom-evening-lighting.png',
    icon: 'Medal',
    color: 'indigo',
    reviewedFaqs: true,
    faqs: [
      {
            "question": "Can I automate existing driveway gates?",
            "answer": "Existing gates may be suitable, subject to assessment of their condition, supports, movement and the surrounding entrance. Ask the installer to identify required changes and explain how retained components fit into the proposed system."
      },
      {
            "question": "What happens during a power cut?",
            "answer": "The arrangements depend on the installed system. Ask for its specific shutdown and access instructions and a demonstration at handover. If battery backup is proposed, request the manufacturer specification for that equipment and operating conditions; do not assume a universal number of cycles."
      },
      {
            "question": "Can I control the gates from my phone?",
            "answer": "Phone or app control depends on the controller, access equipment and available connectivity. Ask the installer to confirm compatibility, account administration and any ongoing network or subscription costs for the proposed products."
      },
      {
            "question": "How much will the work cost?",
            "answer": "Request an itemised quotation after the installation has been assessed. Ask which parts, labour, electrical work, access controls and making-good work it includes. Agree any inspection charge and the process for approving additional work before booking."
      },
      {
            "question": "How long will the work take?",
            "answer": "Ask for a schedule based on the surveyed entrance, the proposed work and confirmed parts availability. Agree how you will manage access if the gates cannot return to service during the first visit."
      },
      {
            "question": "What warranty applies?",
            "answer": "Request the written warranty terms for the quoted equipment and workmanship before accepting. Check the duration, exclusions, attendance charges and any servicing conditions. Retained equipment may have different cover from newly fitted parts."
      }
],
  },
  {
    id: 'gate-repair',
    title: 'Gate Repair and Maintenance',
    slug: 'gate-repair-and-maintenance',
    description: "Electric gate fault diagnosis, repairs and maintenance in London. Discuss the fault, existing equipment and inspection scope before arranging work.",
    image: '/images/gates/gate-swing-open-night-stone-pillars-drive.png',
    icon: 'Users',
    color: 'rose',
    reviewedFaqs: true,
    faqs: [
      {
            "question": "How often should driveway gates be serviced?",
            "answer": "Follow the maintenance and inspection schedule for the installed system, taking account of its use, condition and environment. Ask a competent contractor to confirm the appropriate tasks and intervals. Keep service records and check the actual warranty conditions rather than assuming a fixed interval guarantees cover."
      },
      {
            "question": "My gate is making a grinding noise. What should I do?",
            "answer": "Stop using the faulty gate and keep people clear of its movement area. Describe the sound and behaviour to a competent gate contractor. Do not force the gate, open electrical enclosures or attempt a generic manual-release procedure; obtain instructions specific to the installation and its condition."
      },
      {
            "question": "Can another company repair my gates?",
            "answer": "A competent contractor may be able to assess equipment installed by another company. Acceptance depends on the installation, available records, parts support and the work required. Supply those details when enquiring and agree the inspection scope before booking."
      },
      {
            "question": "How much will the work cost?",
            "answer": "Request an itemised quotation after the installation has been assessed. Ask which parts, labour, electrical work, access controls and making-good work it includes. Agree any inspection charge and the process for approving additional work before booking."
      },
      {
            "question": "How long will the work take?",
            "answer": "Ask for a schedule based on the surveyed entrance, the proposed work and confirmed parts availability. Agree how you will manage access if the gates cannot return to service during the first visit."
      },
      {
            "question": "What warranty applies?",
            "answer": "Request the written warranty terms for the quoted equipment and workmanship before accepting. Check the duration, exclusions, attendance charges and any servicing conditions. Retained equipment may have different cover from newly fitted parts."
      }
],
  },

  {
    id: 'gate-automation-kits',
    title: 'Gate Automation (Retrofit)',
    slug: 'gate-automation-kits',
    description: "Explore automation for existing driveway gates in London. A site assessment determines whether the gates, supports and surrounding layout are suitable for powered operation.",
    image: '/images/gates/gate-aluminium-sliding-modern-dark-brick-2.png',
    icon: 'Zap',
    color: 'indigo',
    reviewedFaqs: true,
    faqs: [
      {
            "question": "Can any manual gate be automated?",
            "answer": "Suitability requires a site-specific assessment of the gates, supports, movement and surrounding layout. A motor cannot compensate for defective structures or an unsuitable design. Ask the installer to explain any repair, alteration or replacement needed before automation."
      },
      {
            "question": "What should the automation quotation include?",
            "answer": "Ask for the proposed motors, controls, access equipment and protective measures, together with necessary electrical and structural work. The specification should explain compatibility and the assessment of the complete powered gate. A standard kit or a pair of photocells alone does not establish that the finished installation is safe."
      },
      {
            "question": "Can I retain my existing intercom?",
            "answer": "Ask the installer to check the intercom model and its compatibility with the proposed controller. Establish which functions can be retained, what needs replacing and who will manage programming or account access."
      },
      {
            "question": "How much will the work cost?",
            "answer": "Request an itemised quotation after the installation has been assessed. Ask which parts, labour, electrical work, access controls and making-good work it includes. Agree any inspection charge and the process for approving additional work before booking."
      },
      {
            "question": "How long will the work take?",
            "answer": "Ask for a schedule based on the surveyed entrance, the proposed work and confirmed parts availability. Agree how you will manage access if the gates cannot return to service during the first visit."
      },
      {
            "question": "What warranty applies?",
            "answer": "Request the written warranty terms for the quoted equipment and workmanship before accepting. Check the duration, exclusions, attendance charges and any servicing conditions. Retained equipment may have different cover from newly fitted parts."
      }
],
  },
  {
  "id": "commercial-gates",
  "title": "Commercial Gates",
  "slug": "commercial-gates",
  "description": "Commercial gate and access-control installation in London. Plan vehicle movement, pedestrian access, operating frequency and maintenance around how your site works.",
  "image": "/images/gates/gate-wrought-iron-aerial-gold-trim-estate.png",
  "icon": "Shield",
  "color": "sky",
  "faqs": [
    {
      "question": "How do I choose a commercial gate system?",
      "answer": "Assess the vehicles, pedestrians, operating frequency, security needs, site layout and access arrangements together. Specify the equipment after that assessment rather than choosing by opening width alone."
    },
    {
      "question": "Can you include access controls?",
      "answer": "Discuss the required intercom, keypad, phone-entry or number-plate system alongside the gate. Confirm compatibility, power, connectivity and any subscription or administration requirements in the quotation."
    },
    {
      "question": "Who looks after the gate once installed?",
      "answer": "Agree a responsible person, handover records and maintenance arrangements before completion. Workplace gate owners and those responsible for the premises should understand their responsibilities and fault-reporting procedure."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},

  {
  "id": "aluminium-gates",
  "title": "Aluminium Driveway Gates",
  "slug": "aluminium-driveway-gates",
  "description": "Aluminium driveway gates designed, supplied and installed across London. Choose a finish and opening layout with the specification, installation scope and aftercare confirmed in writing.",
  "image": "/images/gates/gate-aluminium-sliding-vertical-bar-modern.png",
  "icon": "Sparkles",
  "color": "sky",
  "faqs": [
    {
      "question": "Are aluminium gates maintenance-free?",
      "answer": "No. Follow the manufacturer’s cleaning instructions and check the finish, fittings and moving parts. Automated gates also need maintenance appropriate to the installed system and its use."
    },
    {
      "question": "Can I choose any colour?",
      "answer": "Colour and finish availability depends on the selected manufacturer and range. Ask for a sample, colour reference, lead time and written finish specification before ordering."
    },
    {
      "question": "Do aluminium gates have a 25-year guarantee?",
      "answer": "There is no universal 25-year guarantee for aluminium gates. Product, coating, hardware, automation and installation cover can differ. The written quotation should identify the terms that apply to your chosen system."
    },
    {
      "question": "Are aluminium gates suitable for a windy driveway?",
      "answer": "Suitability depends on the gate size, amount of solid infill, supports, exposure and operating system. Ask the installer to assess the whole entrance before choosing the design."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "composite-gates",
  "title": "Composite Driveway Gates",
  "slug": "composite-driveway-gates",
  "description": "Composite driveway gates supplied and fitted in London. Compare board finishes, frame construction, opening options and the upkeep your chosen product needs.",
  "image": "/images/gates/gate-aluminium-swing-open-contemporary-mansion.png",
  "icon": "Globe",
  "color": "amber",
  "faqs": [
    {
      "question": "Do composite gates need maintenance?",
      "answer": "Yes. Follow the board manufacturer’s care instructions and maintain the frame, hinges, locks and any automation. The required work depends on the specified product and site conditions."
    },
    {
      "question": "Can a composite gate be automated?",
      "answer": "It may be suitable after assessment of the complete gate, its supports, movement, wind exposure and surrounding entrance. Compatibility cannot be established from the board material alone."
    },
    {
      "question": "How much do composite gates cost supplied and fitted?",
      "answer": "The price depends on the measured opening, boards, frame, finish, support work and manual or automated operation. Request an itemised site-specific quotation with VAT and exclusions stated."
    },
    {
      "question": "What warranty comes with a composite gate?",
      "answer": "The quoted products and installation determine the terms. Ask for the cover, exclusions, maintenance conditions and claims contact for each part of the system before ordering."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "hardwood-gates",
  "title": "Hardwood Driveway Gates",
  "slug": "hardwood-driveway-gates",
  "description": "Hardwood driveway gates for London homes, with the timber, construction, finish and installation details agreed for your entrance.",
  "image": "/images/gates/gate-wooden-oak-swing-cottage-flowers.png",
  "icon": "Medal",
  "color": "amber",
  "faqs": [
    {
      "question": "How long will a hardwood gate last?",
      "answer": "Species, construction, exposure, finish and maintenance all affect its condition over time. Ask for the specified timber and written warranty; we do not promise one lifespan for every hardwood gate."
    },
    {
      "question": "Can hardwood gates be automated?",
      "answer": "A suitable system requires assessment of the gate, supports, weight, movement and surrounding entrance. Ask for the proposed equipment and any structural changes in the quotation."
    },
    {
      "question": "Will I need to stain the gates every year?",
      "answer": "Use the care schedule for the selected timber and coating. Inspect the finish and follow that guidance rather than assuming the same annual schedule applies to every product."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "wrought-iron-gates",
  "title": "Wrought Iron Gates",
  "slug": "wrought-iron-gates",
  "description": "Traditional-style metal driveway gates in London, with the actual metal, decorative details, protective finish and opening system specified in your quote.",
  "image": "/images/gates/gate-wrought-iron-open-manor-spring-gardens.png",
  "icon": "Shield",
  "color": "sky",
  "faqs": [
    {
      "question": "Are new wrought-iron-style gates made from wrought iron?",
      "answer": "The name can describe an appearance. Ask the fabricator to identify the actual material and construction in writing, especially when comparing a new gate with an older iron gate."
    },
    {
      "question": "Can you assess an existing metal gate for repair?",
      "answer": "We offer gate repairs and maintenance. Share photographs and the problem you have noticed so we can discuss an assessment. The condition of the gate and supports determines the options."
    },
    {
      "question": "Does a protective coating remove the need for upkeep?",
      "answer": "No. Follow the coating supplier’s care instructions, inspect for damage and arrange appropriate repairs and system maintenance."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "pedestrian-side-gates",
  "title": "Pedestrian and Side Gates",
  "slug": "pedestrian-side-gates",
  "description": "Pedestrian and side gates for London properties. Plan a usable walking route with the opening, lock, privacy and fitting details suited to your entrance.",
  "image": "/images/gates/gate-wrought-iron-open-golden-hour-curved-drive.png",
  "icon": "Users",
  "color": "emerald",
  "faqs": [
    {
      "question": "Can the pedestrian gate match my driveway gate?",
      "answer": "Discuss the material, finish, infill and visible fittings together. Matching options depend on the chosen range and the space available for the pedestrian entrance."
    },
    {
      "question": "Can I use an intercom or keypad with a side gate?",
      "answer": "It depends on the lock, access-control equipment, power supply and exit arrangements. Confirm the proposed components and failure behaviour before ordering."
    },
    {
      "question": "What width should a pedestrian gate be?",
      "answer": "Start with the people and equipment using the route, then assess the clear opening after fitting, approach space and threshold. Ask the installer to confirm suitability for your site and any applicable requirements."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);

/* Curated down-links from each service pillar to its supporting guides and blog
   spokes (the silo "DOWN" links). Keyed by service slug. Slugs reference
   data/guides.ts and data/blog.ts; rendered as a "Guides and articles" block on
   each service page. */
export const serviceRelatedContent: Record<string, { guides: string[]; posts: string[] }> = {
  'electric-sliding-gates': {
    guides: ['swing-vs-sliding-gates', 'electric-driveway-gates-cost-london'],
    posts: ['bi-fold-vs-sliding-gates-london', 'telescopic-gates-space-saving-london', 'automated-gates-sloping-driveways-london'],
  },
  'electric-swing-gates': {
    guides: ['swing-vs-sliding-gates', 'electric-driveway-gates-cost-london'],
    posts: ['outward-swinging-gates-uk-rules', 'underground-gate-motors-london', 'driveway-gate-property-value-london'],
  },
  'wooden-driveway-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['accoya-wood-gates-london', 'heritage-gate-finishes-victorian-homes', 'driveway-gates-noise-reduction-london'],
  },
  'metal-driveway-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['aluminium-vs-timber-gates-london', 'minimalist-steel-slat-gates-london', 'anthracite-grey-gate-trends-london'],
  },
  'automated-gate-systems': {
    guides: ['electric-driveway-gates-cost-london', 'automation-kit-installation-prices', 'electric-gate-running-costs', 'best-intercom-systems'],
    posts: ['solar-powered-gate-automation-london', 'smart-gate-integration-ring-nest-control4'],
  },
  'gate-repair-and-maintenance': {
    guides: ['winter-gate-maintenance', 'how-to-manually-open-electric-gate'],
    posts: ['gate-motor-humming-not-moving', 'annual-gate-service-checklist-london', 'wrought-iron-gate-restoration-london'],
  },
  'gate-automation-kits': {
    guides: ['automation-kit-installation-prices', 'electric-gate-running-costs'],
    posts: ['gsm-gate-openers-london', 'solar-powered-gate-automation-london'],
  },
  'commercial-gates': {
    guides: ['uk-electric-gate-safety-laws', 'force-testing-explained'],
    posts: ['anpr-gate-entry-london', 'automated-gate-home-insurance', 'video-intercom-comelit-vs-hikvision'],
  },
  'aluminium-driveway-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['aluminium-vs-timber-gates-london', 'minimalist-steel-slat-gates-london', 'anthracite-grey-gate-trends-london'],
  },
  'composite-driveway-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['accoya-wood-gates-london', 'aluminium-vs-timber-gates-london', 'driveway-gates-noise-reduction-london'],
  },
  'hardwood-driveway-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['accoya-wood-gates-london', 'heritage-gate-finishes-victorian-homes', 'driveway-gates-noise-reduction-london'],
  },
  'wrought-iron-gates': {
    guides: ['aluminium-vs-wooden-driveway-gates'],
    posts: ['wrought-iron-gate-restoration-london', 'conservation-area-gate-planning-london', 'heritage-gate-finishes-victorian-homes'],
  },
  'pedestrian-side-gates': {
    guides: ['best-intercom-systems', 'photocells-vs-safety-edges'],
    posts: ['gsm-gate-openers-london', 'video-intercom-comelit-vs-hikvision'],
  },
};
