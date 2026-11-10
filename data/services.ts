export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  /** Page title-tag phrase when it differs from the card title. */
  headline?: string;
  slug: string;
  description: string;
  /** Shorter search-result description when `description` exceeds ~160 characters. */
  metaDescription?: string;
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
  "metaDescription": "Electric sliding gates in London: tracked, cantilever and telescopic gates for short or sloping drives, side-space checks, safety, motors and typical costs.",
  "description": "Electric sliding gates designed around your London driveway, side space, supports and access requirements.",
  "image": "/showcase/assets/content/gate-aluminium-sliding-modern-dark-brick-553aa55.webp",
  "icon": "Zap",
  "color": "amber",
  "faqs": [
    {
      "question": "How much side space does a sliding gate need?",
      "answer": "For a tracked gate, roughly the width of the opening plus a few hundred millimetres. For a cantilever gate, about one and a half times the opening. A telescopic gate needs about half the opening plus the overlap. We measure it precisely at survey."
    },
    {
      "question": "Can a sliding gate work on a sloping drive?",
      "answer": "Usually, yes. A drive that slopes up from the road is often the reason people choose a sliding gate. What needs to be level is the ground along the gate line and the run-back, not the drive itself. A gate sliding along a slope needs a stepped or raked design and careful engineering."
    },
    {
      "question": "Swing or sliding?",
      "answer": "Sliding if your drive is short, you park close to the gate, or the drive rises behind it. Swing if you lack side space or want the lower cost. Our swing vs sliding guide compares them, and electric swing gates covers the alternative."
    },
    {
      "question": "Will a tracked gate work on a gravel drive?",
      "answer": "Not well, because stones get into the track and jam the wheels. A cantilever gate is the better choice on gravel."
    },
    {
      "question": "How long will installation take?",
      "answer": "Two to three days for most tracked gates. Cantilever gates take two visits about a week apart. Larger groundworks or new power supplies add time."
    },
    {
      "question": "Do I need planning permission?",
      "answer": "Gates next to a road or footpath can usually be up to 1 metre high under permitted development rules. Taller gates, conservation areas and listed buildings need checking. See our borough planning guides."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-13"
},
  {
  "id": "telescopic-sliding",
  "title": "Telescopic Sliding Gates",
  "slug": "telescopic-sliding-gates",
  "metaDescription": "Telescopic sliding gates in London: stacking panels that need about half the side space of a standard sliding gate, for tight plots. Space, safety and costs.",
  "description": "Sliding gates with two or more panels that stack as they open, needing about half the side space of a standard sliding gate.",
  "image": "/showcase/assets/content/telescopic-gates-space-saving-london-33a333a.webp",
  "icon": "Layers",
  "color": "teal",
  "faqs": [
    {
      "question": "How much side space does a telescopic gate need?",
      "answer": "For a two-panel gate, roughly half the opening plus a few hundred millimetres. For three panels, about a third of the opening plus the overlaps. The survey gives exact figures."
    },
    {
      "question": "Are telescopic gates reliable?",
      "answer": "Yes, when they’re well built and serviced. The extra wheels and the linking mechanism need a little more attention than a single-panel gate, which is why an annual service matters."
    },
    {
      "question": "Telescopic sliding gate or bi-folding gate?",
      "answer": "Both save space. A telescopic gate needs side space but almost no depth. A bi-folding gate folds back into the drive, so it needs depth but no side space. Which works better depends on where your spare room is."
    },
    {
      "question": "Can I convert my existing sliding gate to telescopic?",
      "answer": "Rarely. The panels, tracks and running gear are designed as a system, so it’s normally a new gate. The motor and access control can sometimes be reused."
    },
    {
      "question": "Do I need planning permission?",
      "answer": "The same rules apply as for any gate. Usually up to 1 metre high next to a road or footpath without permission, with stricter rules in conservation areas and for listed buildings. See our borough planning guides."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-11-08"
},
  {
  "id": "electric-swing",
  "title": "Electric Swing Gates",
  "slug": "electric-swing-gates",
  "metaDescription": "Electric swing gates in London: space and slope checks, ram, articulated arm and underground motors, safety testing, power and typical costs.",
  "description": "Single and paired electric swing gates planned around your opening, parking space and everyday access.",
  "image": "/showcase/assets/content/gate-aluminium-swing-open-luxury-garden-fd599ef.webp",
  "icon": "Shield",
  "color": "emerald",
  "faqs": [
    {
      "question": "Should swing gates open inward?",
      "answer": "Almost always, if the gate is on the boundary with a public pavement or road. Outward opening is only possible over private land, and the arc still needs to be kept clear of anywhere people walk."
    },
    {
      "question": "What width should I choose?",
      "answer": "At least 3 metres for a car, and 3.5 to 4 metres if you’re turning in from a narrow street. Make sure there’s space behind the gates for the leaves to open with your car parked beyond them."
    },
    {
      "question": "Are swing gates cheaper than sliding gates?",
      "answer": "Usually, because they need less groundwork. But a swing gate on a slope or tight drive can need costly workarounds, and then a sliding gate can cost about the same."
    },
    {
      "question": "Can you automate my existing gates?",
      "answer": "Often, yes, if the gates are rigid, the hinges are sound and the piers are strong enough. See gate automation retrofits."
    },
    {
      "question": "What happens in a power cut?",
      "answer": "24V systems can run on battery backup for a number of cycles. Otherwise, each leaf can be released with a key and opened by hand."
    },
    {
      "question": "How long do the gates take to open?",
      "answer": "Typically 15 to 25 seconds, depending on leaf length and motor type."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "wooden-gates",
  "title": "Wooden Driveway Gates",
  "slug": "wooden-driveway-gates",
  "metaDescription": "Wooden driveway gates in London: softwood, oak, iroko, cedar and Accoya, properly jointed and finished, manual or automated, with planning advice and costs.",
  "description": "Timber driveway gates for London homes, with the species, construction, finish and upkeep agreed before ordering.",
  "image": "/showcase/assets/content/gate-wooden-oak-swing-cottage-garden-d00f4c0.webp",
  "icon": "Sparkles",
  "color": "amber",
  "faqs": [
    {
      "question": "How long do wooden gates last?",
      "answer": "It depends mostly on the timber and how well it’s looked after. Treated softwood typically lasts 10 to 15 years with regular painting. Good hardwood and Accoya gates commonly last 25 years or more. Joinery quality and how well the end grain is sealed matter as much as the species."
    },
    {
      "question": "Can wooden gates be automated?",
      "answer": "Yes, if the gate is rigid and the motor is sized for its weight and wind load. Heavy solid gates and wide leaves need more powerful motors, and gates with a weak frame should be rebuilt before they’re automated."
    },
    {
      "question": "Which timber should I choose?",
      "answer": "For a painted gate you want to stay straight with minimal fuss, choose Accoya. For a traditional natural look on a period property, oak or iroko. For a lighter contemporary slatted gate, cedar or iroko. On a tight budget, treated softwood is the sensible choice. We bring samples to the survey so you can see each one against your house."
    },
    {
      "question": "Will my wooden gate warp?",
      "answer": "All timber moves a little with the seasons, so boards may show small gaps in summer and tighten in winter. Proper joinery, stable timbers and laminated stiles keep that movement from becoming warping or sagging."
    },
    {
      "question": "Wood or aluminium?",
      "answer": "Aluminium is lighter, needs almost no maintenance and is available in convincing wood-effect finishes. Real timber looks and feels better on many period homes. Our wooden and aluminium comparison covers the trade-offs, and our hardwood gates page goes deeper on oak and iroko."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "metal-gates",
  "title": "Metal Driveway Gates",
  "slug": "metal-driveway-gates",
  "metaDescription": "Metal driveway gates in London: made-to-measure steel and aluminium, galvanised and powder-coated, traditional or modern, manual or automated, with costs.",
  "description": "Compare metal driveway gate designs, fabrication and finish options for your London entrance.",
  "image": "/showcase/assets/content/gate-wrought-iron-ornate-daytime-manor-e16af31.webp",
  "icon": "Globe",
  "color": "sky",
  "faqs": [
    {
      "question": "Are all metal gates galvanised?",
      "answer": "No, and many cheaper gates aren’t. Ask whether the gate is hot-dip galvanised after fabrication, then powder-coated. That combination is what keeps rust away for decades."
    },
    {
      "question": "Is a “wrought iron” gate really wrought iron?",
      "answer": "Almost certainly not, unless it’s antique. Modern iron-style gates are mild steel, which is just as good-looking and easier to repair."
    },
    {
      "question": "Steel or aluminium?",
      "answer": "Steel is stronger, heavier and better for intricate traditional ironwork. Aluminium is lighter, can’t rust, and is better for wide gates, weak piers and sliding gates. Both can be made in traditional or modern styles."
    },
    {
      "question": "Can you restore an existing iron gate?",
      "answer": "Usually, yes. We check whether it’s steel, wrought iron or cast iron and how much corrosion there is, then advise whether restoration or replacement makes more sense."
    },
    {
      "question": "Are metal gates maintenance-free?",
      "answer": "Not quite, but close if they’re galvanised and powder-coated. An occasional wash, touching up chips and greasing the hinges once a year is usually all they need."
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
    metaDescription: "Plan an automated driveway gate system in London: gates, motors, controls and protective measures, for new installations or upgrades after assessment.",
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
    headline: 'Electric Gate Repair and Servicing in London',
    metaDescription: "Electric gate repair and servicing in London for all main brands, including gates we didn't install. Common faults, what a service includes and typical costs.",
    slug: 'gate-repair-and-maintenance',
    description: "Electric gate fault diagnosis, repairs and maintenance in London. Discuss the fault, existing equipment and inspection scope before arranging work.",
    image: '/images/gates/gate-swing-open-night-stone-pillars-drive.png',
    icon: 'Users',
    color: 'rose',
    reviewedFaqs: true,
    updatedDate: '2026-11-07',
    faqs: [
      {
            "question": "Can you repair a gate another company installed?",
            "answer": "Yes. Gates from the mainstream manufacturers are straightforward to work on. Unbranded or discontinued systems can be harder to get parts for. In that case we’ll tell you which parts can still be repaired and which need replacing."
      },
      {
            "question": "How quickly can you come out?",
            "answer": "We prioritise gates that are stuck open or trapping a car in or out. Tell us when you call if that’s your situation."
      },
      {
            "question": "How long does a repair take?",
            "answer": "Most faults are fixed in a single visit of one to three hours. If a specific part has to be ordered, the gate can usually be left safely in manual mode while you wait, typically a few working days."
      },
      {
            "question": "My gate is making a grinding noise. Should I keep using it?",
            "answer": "No. Stop using it on automatic and book a repair. Grinding usually means worn gears or a misaligned drive, and running it on tends to turn a part replacement into a new motor."
      },
      {
            "question": "What warranty do repairs carry?",
            "answer": "New parts carry the manufacturer’s warranty and our workmanship is guaranteed in writing. Parts of the system we haven’t replaced aren’t covered by that guarantee, and the report will say which those are."
      }
],
  },

  {
    id: 'gate-automation-kits',
    title: 'Gate Automation (Retrofit)',
    headline: 'Gate Automation for Existing Gates in London',
    slug: 'gate-automation-kits',
    description: "Explore automation for existing driveway gates in London. A site assessment determines whether the gates, supports and surrounding layout are suitable for powered operation.",
    image: '/images/gates/gate-aluminium-sliding-modern-dark-brick-2.png',
    icon: 'Zap',
    color: 'indigo',
    reviewedFaqs: true,
    updatedDate: '2026-11-07',
    faqs: [
      {
            "question": "Can any manual gate be automated?",
            "answer": "Many can, but not all. The gates need to be straight, move freely by hand and hang on hinges and posts strong enough for a motor. We check this on the survey and tell you what needs repairing first."
      },
      {
            "question": "How much does it cost to automate existing gates?",
            "answer": "Typically £1,200 to £3,500 for the motors, safety devices and remotes. Structural repairs, long cable runs, underground motors and access control add to that. You get a fixed written price after the survey."
      },
      {
            "question": "How long does the installation take?",
            "answer": "Usually one to two days on site once the parts are in. If groundwork or repairs are needed first, we set out the programme in the quote."
      },
      {
            "question": "Can I keep my existing intercom or keypad?",
            "answer": "Often, if it can trigger the new control panel. We check the model on the survey and tell you what can stay and what needs replacing."
      },
      {
            "question": "What happens in a power cut?",
            "answer": "Every gate we automate has a manual release, and we show you how to use it at handover. Many 24V motors can also run on battery backup for a limited number of cycles."
      }
],
  },
  {
  "id": "commercial-gates",
  "title": "Commercial Gates",
  "slug": "commercial-gates",
  "description": "Commercial gate and access-control installation in London. Plan vehicle movement, pedestrian access, operating frequency and maintenance around how your site works.",
  "metaDescription": "Commercial gate and access-control installation in London, planned around vehicle movement, pedestrian access, operating frequency and maintenance.",
  "image": "/images/services/industrial-security-gates-illustration.webp",
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
  "metaDescription": "Aluminium driveway gates designed, supplied and installed across London, with the finish, opening layout, installation scope and aftercare agreed in writing.",
  "image": "/showcase/assets/content/gate-aluminium-sliding-vertical-bar-modern-c49a8a8.webp",
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
  "metaDescription": "Composite driveway gates in London: capped boards on aluminium frames, no painting or staining, manual or automated swing and sliding gates, with costs.",
  "description": "Composite driveway gates supplied and fitted in London. Compare board finishes, frame construction, opening options and the upkeep your chosen product needs.",
  "image": "/images/services/composite-driveway-gates-illustration.webp",
  "icon": "Globe",
  "color": "amber",
  "faqs": [
    {
      "question": "Do composite gates need maintenance?",
      "answer": "Very little. A wash once or twice a year, plus annual hinge greasing, keeps them looking right. They never need painting or staining. Automated gates also need regular servicing of the motors and safety devices."
    },
    {
      "question": "Will composite fade?",
      "answer": "Capped boards fade very little, though all outdoor materials soften slightly in colour over time. Uncapped boards lighten much more noticeably, which is why we recommend capped boards for gates."
    },
    {
      "question": "Can a composite gate be automated?",
      "answer": "Yes. On an aluminium frame it’s lighter than most hardwood gates. The motor has to be matched to the gate’s size and wind exposure, especially for solid boarded designs."
    },
    {
      "question": "How much do composite gates cost?",
      "answer": "Typically £2,500 to £5,000 for a manual pair supplied and fitted, with automation on top. We give a fixed itemised price after a free survey."
    },
    {
      "question": "Can a damaged board be replaced?",
      "answer": "Yes. On a slot-in frame, a single board can be removed and replaced without taking the gate apart. That’s one reason to choose a proper gate system rather than fence boards fixed to a frame."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "hardwood-gates",
  "title": "Hardwood Driveway Gates",
  "slug": "hardwood-driveway-gates",
  "metaDescription": "Hardwood driveway gates in London: kiln-dried oak, iroko and sapele, properly jointed and hung, oiled or left to silver, manual or automated, with costs.",
  "description": "Hardwood driveway gates for London homes, with the timber, construction, finish and installation details agreed for your entrance.",
  "image": "/showcase/assets/content/gate-wooden-oak-swing-cottage-flowers-92bd35f.webp",
  "icon": "Medal",
  "color": "amber",
  "faqs": [
    {
      "question": "How long will a hardwood gate last?",
      "answer": "A well-built oak or iroko gate commonly lasts 30 years or more. The joinery, how well the end grain is sealed and how the gate is hung matter as much as the species. Cheap hardwood gates with screwed joints fail far sooner."
    },
    {
      "question": "Oak or iroko?",
      "answer": "Oak for a traditional look on a period property and the classic silvered finish if left unfinished. Iroko for better stability, a warmer colour and usually a lower price. We bring samples of both to the survey."
    },
    {
      "question": "Can hardwood gates be automated?",
      "answer": "Yes, with motors sized for their weight and wind load, and a frame rigid enough not to sag. Through-bolted brackets and an electric lock are good practice on heavy leaves."
    },
    {
      "question": "Will I need to stain the gates every year?",
      "answer": "Only if you want to keep the original colour, and even then exposed gates typically need re-coating every one to two years, sheltered ones less often. If you’re happy for the timber to turn silver, it needs no staining at all."
    },
    {
      "question": "Why has my new oak gate left dark marks on the paving?",
      "answer": "That’s tannin washing out of fresh oak. It eases off after the first few months. Rinsing the gate and paving a few times early on, and using stainless fixings, keeps it to a minimum."
    },
    {
      "question": "Wood or aluminium?",
      "answer": "See our wooden and aluminium comparison for the trade-offs."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "wrought-iron-gates",
  "title": "Wrought Iron Gates",
  "slug": "wrought-iron-gates",
  "metaDescription": "Wrought iron gates in London: new hand-forged or traditional steel gates and railings, restoration of original ironwork, conservation advice and costs.",
  "description": "Traditional-style metal driveway gates in London, with the actual metal, decorative details, protective finish and opening system specified in your quote.",
  "image": "/showcase/assets/content/gate-wrought-iron-open-manor-spring-gardens-57dd35f.webp",
  "icon": "Shield",
  "color": "sky",
  "faqs": [
    {
      "question": "Are new wrought iron gates actually made of wrought iron?",
      "answer": "Almost never. New iron-style gates are mild steel, often with cast details. True wrought iron is only available as reclaimed material, and it’s mostly used in restoring historic work."
    },
    {
      "question": "How can I tell if my old gate is wrought iron or cast iron?",
      "answer": "Wrought iron has a fibrous, grainy texture where it’s corroded and often flakes in layers. Its joints are riveted or hand-welded. Cast iron has crisp, moulded ornament, often with faint casting lines, and breaks cleanly rather than bending. We can identify it at survey."
    },
    {
      "question": "Is it worth restoring my original gates?",
      "answer": "Usually, if they’re genuine wrought or cast iron and the frame is mostly sound. On a listed building, it may be expected. If the gate is later mild steel that’s badly corroded, replacement often makes more sense."
    },
    {
      "question": "Do I need permission to replace iron gates?",
      "answer": "On a listed building, almost certainly. In a conservation area, possibly, depending on the design and the council. Anywhere, if the gate is over 1 metre high next to a road. Check before ordering."
    },
    {
      "question": "Does a protective coating mean no maintenance?",
      "answer": "No. A galvanised and coated gate needs very little upkeep, but it should still be washed and touched up when chipped. Traditionally painted ironwork needs repainting every few years."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-02"
},
  {
  "id": "pedestrian-side-gates",
  "title": "Pedestrian and Side Gates",
  "slug": "pedestrian-side-gates",
  "metaDescription": "Pedestrian and side gates in London: secure side passage gates, matching front gates, locks, closers and electric entry, sized for bins, bikes and buggies.",
  "description": "Pedestrian and side gates for London properties. Plan a usable walking route with the opening, lock, privacy and fitting details suited to your entrance.",
  "image": "/images/projects/metal-pedestrian-gate-side-passage.webp",
  "icon": "Users",
  "color": "emerald",
  "faqs": [
    {
      "question": "Can the pedestrian gate match my driveway gates?",
      "answer": "Yes. Made at the same time, it can match the material, colour, infill pattern and details exactly. Matching an older gate is usually possible too, though weathered timber and historic ironwork can take more work."
    },
    {
      "question": "What width should a pedestrian gate be?",
      "answer": "Usually 900 mm to 1 metre for a front path gate, with at least 850 mm of clear opening if wheelchair users need access. Side passage gates benefit from 1 metre or more for bins and bikes."
    },
    {
      "question": "Can I use an intercom or keypad with a side gate?",
      "answer": "Yes, with an electric lock. Choose a lock type that suits what should happen in a power cut, and make sure there’s always an easy way to open the gate from inside."
    },
    {
      "question": "How tall should a side gate be for security?",
      "answer": "At least 1.8 metres, with no climbable rails on the outside, and fitted as close to the front of the house as possible."
    },
    {
      "question": "Should I choose a separate gate or a wicket in the driveway gate?",
      "answer": "A separate gate if there’s room. It gives a level, independent walking route. A wicket is a good fallback where space is tight, but expect a threshold to step over and a narrower opening."
    }
  ],
  "reviewedFaqs": true,
  "updatedDate": "2026-10-13"
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
