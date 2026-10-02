import { guideFeaturedImages } from './featuredImages';

export type GuidePillar =
  | 'Pricing & Costs'
  | 'Comparison & Buying'
  | 'Maintenance & Troubleshooting'
  | 'Safety & Compliance';

export interface GuideSection {
  heading: string;
  body: string;
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
  updatedDate?: string;
  featuredImage: string;
  featuredImageAlt?: string;
  intro: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlug?: string;
  relatedGuides?: string[];
}

const guideEntries: Guide[] = [

  {
  "slug": "electric-driveway-gates-cost-london",
  "title": "Electric Driveway Gate Costs in London",
  "metaTitle": "Electric Driveway Gates Cost London | Installed Quote Guide",
  "metaDescription": "Compare electric gate installation costs in London: gate supply, groundworks, power, controls, VAT and ongoing maintenance, with an itemised quote checklist.",
  "pillar": "Pricing & Costs",
  "excerpt": "Compare the full cost of an electric driveway gate, from supply and groundworks to power, access controls and ongoing care.",
  "readingMinutes": 8,
  "publishDate": "2026-01-10",
  "featuredImage": "/images/guides/electric-driveway-gates-cost-london.webp",
  "intro": "The cost of electric driveway gates depends on the entrance as well as the gate. A supply-only price leaves out work such as supports, electrical supply and installation. To set a useful budget, ask for a measured survey and an itemised quotation covering the complete job.",
  "sections": [
    {
      "heading": "Start with the complete installed cost",
      "body": "<p>A gate advertised at a particular price may include only the leaves or sliding panel. A motor-kit price may cover the motor and controller without the work needed to make the complete installation suitable for your site. Before comparing totals, establish whether each quotation covers the same opening, materials and work.</p><p>There is no single installed price that applies to every London driveway. Width and height, ground conditions, access for the installation team, existing pillars, the power route and your chosen entry controls can change the scope. A useful quotation identifies those items and states what remains subject to inspection.</p><p>For a new powered entrance, discuss <a href=\"/services/automated-gate-systems/\">a complete automated gate installation</a>. For gates you intend to keep, start with <a href=\"/services/gate-automation-kits/\">an assessment for automating existing gates</a>. The two projects need different quotations.</p>"
    },
    {
      "heading": "The items to include in your quotation",
      "body": "<div class=\"table-scroll\" role=\"region\" aria-label=\"Gate quotation checklist\" tabindex=\"0\"><table><thead><tr><th>Part of the job</th><th>Ask the quotation to identify</th></tr></thead><tbody><tr><td>Gate supply</td><td>Dimensions, material, construction, finish, delivery and fittings.</td></tr><tr><td>Supports and groundworks</td><td>Posts or pillar alterations, foundations, track or other support work, drainage and removal of waste.</td></tr><tr><td>Automation</td><td>Motor and controller models, installation, system-specific protective measures and commissioning.</td></tr><tr><td>Electrical work</td><td>Supply assessment, cable route, required work and who provides the relevant test records.</td></tr><tr><td>Access controls</td><td>Remotes, intercom, keypad or phone entry, connectivity and ongoing charges.</td></tr><tr><td>Finishing and handover</td><td>Reinstatement of paving or planting, removal of old equipment, user instructions and demonstration.</td></tr><tr><td>Price and terms</td><td>VAT treatment, exclusions, allowances, payment stages, warranty and maintenance conditions.</td></tr></tbody></table></div><p>Ask who supplies each item and who takes responsibility for the assembled installation. If separate trades are involved, agree the handover between them before work starts.</p>"
    },
    {
      "heading": "How gate material and opening layout affect the price",
      "body": "<p>Compare the specified product rather than assuming one material will always cost less. <a href=\"/services/aluminium-driveway-gates/\">Aluminium gates</a> vary in profile construction and finish. <a href=\"/services/composite-driveway-gates/\">Composite gates</a> need a defined board-and-frame specification. With <a href=\"/services/hardwood-driveway-gates/\">hardwood gates</a>, the timber, joinery and coating affect the work and future care.</p><p>Bespoke dimensions and decorative fabrication can change the cost of a gate. Request the drawing and finish reference that match the price. Include the posts, hinges, locks and visible hardware in the comparison.</p><p>Swing and sliding layouts involve different support and movement arrangements. A sliding quotation needs the proposed track or cantilever support and space along the boundary. A swing quotation needs adequate movement space and suitable supports. Let the measured layout guide the choice, then compare the cost of suitable options.</p>"
    },
    {
      "heading": "Groundworks, electrical supply and making good",
      "body": "<p>Ask the surveyor to trace the proposed power route and identify the surfaces that need to be lifted. A short route across a planted border and a route beneath finished paving involve different work. Agree who reinstates those surfaces and whether the quote includes matching materials or an allowance.</p><p>Existing pillars and foundations may need investigation before the installer can confirm that they are suitable. Discuss access for equipment, waste removal and any arrangements affecting neighbours or a shared driveway. Request a process for agreeing extra work if the team finds an issue after excavation.</p><p>Check planning or other permissions before committing to the work. Ask the relevant local authority about your particular boundary where restrictions may apply, and include any application or professional costs in your own budget. A contractor’s gate quotation does not automatically include these expenses.</p>"
    },
    {
      "heading": "New installation and retrofit: two different scopes",
      "body": "<p>The following are scope comparisons, not completed projects or quoted prices.</p><h3>A new gate and automated entrance</h3><p>Compare gate supply, new or adapted supports, groundworks, power, motors, controls and finishing as one project. Ask which parts of the work the named contractor will complete and which require another trade. A low gate-supply figure does not establish the final installed total.</p><h3>Automation added to existing gates</h3><p>Ask the installer to assess the condition, movement and supports of the retained gates before pricing the motors. Repairs, altered hinges, new supports or other changes may be needed. The quotation should say which parts remain, which change and how the completed system will be assessed and handed over.</p><p>HSE’s <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\" target=\"_blank\" rel=\"noopener noreferrer\">powered-gate safety guidance</a> explains why the gate, equipment and site need consideration together. Keep protective measures and commissioning in the scope when comparing prices.</p>"
    },
    {
      "heading": "VAT, exclusions and payment stages",
      "body": "<p>Ask for the amount payable, whether it includes VAT and the basis for any exception. GOV.UK states that <a href=\"https://www.gov.uk/vat-builders\" target=\"_blank\" rel=\"noopener noreferrer\">most building work on homes attracts the standard 20% rate</a>, with exceptions. That does not establish the VAT status of an individual supplier or the treatment of your project; get both confirmed on the quotation.</p><p>Check whether quoted sums are fixed items or allowances that can change once details are known. Ask the contractor to list exclusions such as power work, old-gate disposal, replacement paving, permits or subscriptions. Agree how variations need your approval.</p><p>Keep the payment schedule with the specification. Confirm what each stage covers, the expected lead time and the arrangements if the scope or delivery date changes. If you consider finance from any provider, compare the total repayable and fees; this guide does not assume that gate finance is available from us.</p>"
    },
    {
      "heading": "Budget for ownership as well as installation",
      "body": "<p>Keep separate lines for electricity, servicing, connectivity subscriptions and repairs. Ask for the installed equipment’s maintenance instructions and the proposed service scope. Visit charges, replacement parts and labour outside a service agreement can affect your later spending.</p><p>For electricity, obtain the standby power, operating demand and expected usage for the proposed equipment. Energy in kWh equals power in watts divided by 1,000, multiplied by hours of use. Calculate standby and active use separately and apply your own tariff without counting the same operating time twice. Include intercoms and other powered accessories if their demand is separate.</p><p>For a chosen ownership period, add installation, electricity, service visits, subscription charges and any repair allowances. Treat repair allowances as your planning assumptions rather than predictions. There is no reliable single annual cost for all gate systems.</p><p>Ask what each warranty covers, whether it includes labour and the conditions for making a claim. Gate material, coating, motors and workmanship may have different terms. Do not assume insurance discounts, resale gains or savings from a new system; check any relevant policy with your insurer and compare actual quotations. If an existing system is unreliable, request a <a href=\"/services/gate-repair-and-maintenance/\">repair assessment</a> before deciding to replace it.</p>"
    },
    {
      "heading": "Prepare an enquiry that helps us quote",
      "body": "<p>Send your area or postcode, photographs from both sides of the entrance and a description of how you want to use it. Include approximate dimensions if you have them, the current gate type, any known power supply and whether you want a pedestrian entrance. A survey is still needed to establish the final specification.</p><p>Tell us which matters most to you: privacy, appearance, vehicle access or easier daily use. Mention a budget if you have one so we can discuss the scope before developing a proposal.</p><p><a href=\"/contact/\">Request a gate quotation</a> and ask for the items above in writing. Keep the quotation, drawing, agreed changes, handover documents and maintenance instructions together for future reference.</p>"
    }
  ],
  "faqs": [
    {
      "question": "How much do electric driveway gates cost installed in London?",
      "answer": "The total depends on the measured entrance, gate specification, supports, groundworks, power and controls. Ask for a site-specific itemised quotation. A gate-only or motor-kit price is not a complete installed price."
    },
    {
      "question": "Is automating existing gates cheaper than replacing them?",
      "answer": "It depends on what can be retained. An assessment may identify repairs or changes to the gate and supports before automation. Compare a written retrofit scope with a replacement quotation rather than assuming that keeping the leaves makes the whole job cheaper."
    },
    {
      "question": "Should the quote include VAT?",
      "answer": "Ask the supplier to state whether VAT applies, the rate used and the final amount payable. Do not compare a VAT-exclusive figure with an inclusive total."
    },
    {
      "question": "What ongoing costs should I allow for?",
      "answer": "Allow for electricity, maintenance, any connectivity subscriptions and repairs outside warranty or service cover. Use the proposed equipment details, your tariff and written service terms instead of a generic annual estimate."
    },
    {
      "question": "Can you give a price from photographs?",
      "answer": "Photographs and approximate dimensions help us understand the enquiry. The measured opening, supports, power route and proposed scope still need assessment before a final quotation."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "London homeowner reviewing an electric driveway-gate quote with an installer",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "electric-gate-running-costs",
  "title": "Electric Gate Running Costs: Calculate Your Electricity Use",
  "metaTitle": "Electric Gate Running Costs: Calculate Your Electricity Use | Driveway Gates London",
  "metaDescription": "Estimate annual gate electricity use from movement time, standby demand and your own electricity tariff.",
  "pillar": "Pricing & Costs",
  "excerpt": "Estimate annual gate electricity use from movement time, standby demand and your own electricity tariff.",
  "readingMinutes": 2,
  "publishDate": "2026-01-17",
  "featuredImage": "/images/guides/electric-gate-running-costs.webp",
  "intro": "Estimate annual gate electricity use from movement time, standby demand and your own electricity tariff.",
  "sections": [
    {
      "heading": "Measure two different loads",
      "body": "<p>A gate uses electricity while moving and may also draw power while waiting. The controller, intercom, access receiver, network equipment and battery charger can contribute to that waiting load. Motor output ratings alone do not give the electricity drawn by the complete entrance.</p><p>Ask for measured input power or manufacturer consumption figures for the specified equipment. For two motors, use the combined demand. Record the total powered movement time for opening and closing, rather than treating an opening as a complete cycle.</p>"
    },
    {
      "heading": "A worked example with explicit units",
      "body": "<p>This is an illustration, not a typical installation or a current tariff quote. Assume the complete system draws 100 W while moving and 5 W while idle. It makes ten complete cycles per day, each with 20 seconds of total powered movement.</p><p>Annual movement time = 20 × 10 × 365 ÷ 3,600 = 20.28 hours. Movement electricity = 0.100 kW × 20.28 hours = 2.03 kWh.</p><p>A 365-day year contains 8,760 hours. Idle time = 8,760 − 20.28 = 8,739.72 hours. Idle electricity = 0.005 kW × 8,739.72 hours = 43.70 kWh. Total electricity = 45.73 kWh. At an example tariff of £0.30 per kWh, that is £13.72 per year.</p>"
    },
    {
      "heading": "Adapt the calculation to your gate",
      "body": "<p>Use annual kWh = (moving watts × moving hours + idle watts × idle hours) ÷ 1,000. Multiply the result by your unit tariff in pounds per kWh. Use 8,784 hours for a leap year.</p><p>The example treats moving power as the whole system demand during movement, so it subtracts movement time from idle time. If your motor figure is an additional load above a separately measured continuous baseline, calculate that baseline over the whole year instead. Do not count the same load twice.</p><p>If a cycle takes 40 seconds instead of 20, change the movement time before calculating both parts. Heaters, lighting and accessories that switch separately need their own power-and-time calculations.</p>"
    },
    {
      "heading": "Electricity is only part of ownership cost",
      "body": "<p>SIM plans, cloud subscriptions, servicing, replacement batteries and repairs are separate costs. Ask which apply to the proposed equipment and whether VAT is included. An existing household electricity standing charge is not usually an additional gate cost; a separate metered supply could introduce one.</p><p>Keep electricity estimates separate from maintenance budgets when using our <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a>. For a retrofit, compare the work described in our <a href=\"/guides/automation-kit-installation-prices/\">automation quotation guide</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Is 100 W for 20 seconds, ten times a day, 20.3 kWh per year?",
      "answer": "No. Under those assumptions it is about 2.03 kWh per year. Standby and other equipment must be calculated separately."
    },
    {
      "question": "Is the example my likely bill?",
      "answer": "No. Replace the sample power, operating time and tariff with figures for your own system."
    }
  ],
  "relatedServiceSlug": "gate-repair-and-maintenance",
  "relatedGuides": [],
  "featuredImageAlt": "Electrician measuring the power draw of an automated driveway-gate motor",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "automation-kit-installation-prices",
  "title": "The Cost of Automating Existing Driveway Gates",
  "metaTitle": "The Cost of Automating Existing Driveway Gates | Driveway Gates London",
  "metaDescription": "Build a retrofit budget that includes the gate assessment, supports, power, controls and completed-system checks.",
  "pillar": "Pricing & Costs",
  "excerpt": "Build a retrofit budget that includes the gate assessment, supports, power, controls and completed-system checks.",
  "readingMinutes": 2,
  "publishDate": "2026-01-24",
  "featuredImage": "/images/guides/automation-kit-installation-prices.webp",
  "intro": "Build a retrofit budget that includes the gate assessment, supports, power, controls and completed-system checks.",
  "sections": [
    {
      "heading": "Check whether the existing gate can be automated",
      "body": "<p>Start with the gate and supports, before choosing a motor kit. The survey should assess condition, hinges or running gear, movement, dimensions, exposure to wind and hazards around the opening. A manual gate that can be pushed by hand is not automatically ready for powered operation.</p><p>Ask whether the proposal needs repairs, altered supports, a different opening arrangement or replacement leaves. Include that work in the comparison with a new gate.</p>"
    },
    {
      "heading": "Separate the quotation into work packages",
      "body": "<p>Request separate descriptions for gate repairs, motor and controls, power supply, cable routes, groundworks and surface reinstatement. Include access equipment, protective measures and any work by other trades.</p><p>Record VAT, removal and disposal, appointments, permissions and exclusions. A kit price covers a different scope from an installed and checked entrance. The cheapest motor listing cannot establish the completed project cost.</p>"
    },
    {
      "heading": "Specify operation and handover",
      "body": "<p>Explain how often the gate operates, who uses it and whether you need pedestrian access, delivery entry or an intercom. Ask for the proposed product models and the basis for choosing them.</p><p>The quotation should identify completed-system checks, documentation, user instruction and manual-release training. Confirm maintenance, repair support and the separate equipment and installation warranty terms in writing.</p>"
    },
    {
      "heading": "Compare retrofit and replacement",
      "body": "<p>If repair and alteration costs are substantial, request a replacement option with equivalent appearance and controls. Compare the complete scope, disruption and upkeep rather than assuming retrofit must be cheaper.</p><p>Use the <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a> alongside our <a href=\"/services/gate-automation-kits/\">gate automation service</a>. Send photographs, approximate dimensions and known faults when you <a href=\"/contact/\">discuss your entrance</a>.</p><p>Further reading: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\">HSE guidance on complete-system assessment</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Can you give a fixed retrofit price from a motor model?",
      "answer": "A motor model does not identify the repairs, power, groundworks or protective measures needed. A site assessment establishes the complete scope."
    },
    {
      "question": "Can I keep my existing controls?",
      "answer": "Compatibility and condition need checking against the proposed equipment. Identify retained parts and any limitations in the quotation."
    }
  ],
  "relatedServiceSlug": "gate-automation-kits",
  "relatedGuides": [],
  "featuredImageAlt": "Engineers retrofitting automation to existing timber driveway gates",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "aluminium-vs-wooden-driveway-gates",
  "title": "Aluminium vs Wooden Driveway Gates",
  "metaTitle": "Aluminium vs Wooden Driveway Gates | Driveway Gates London",
  "metaDescription": "Compare timber, painted aluminium and wood-effect finishes by appearance, construction, upkeep and complete installation scope.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare timber, painted aluminium and wood-effect finishes by appearance, construction, upkeep and complete installation scope.",
  "readingMinutes": 2,
  "publishDate": "2026-01-31",
  "featuredImage": "/images/guides/aluminium-vs-wooden-driveway-gates.webp",
  "intro": "Compare timber, painted aluminium and wood-effect finishes by appearance, construction, upkeep and complete installation scope.",
  "sections": [
    {
      "heading": "Compare samples at your property",
      "body": "<p>Timber has natural grain and variation; painted aluminium gives a more uniform surface. Wood-effect aluminium offers a printed or applied timber appearance, but grain repetition, edges and the rear face can look different from real wood.</p><p>View samples beside your brickwork in daylight and shade. Ask to see the finish on a corner, joint and reverse face, rather than choosing from a small photograph. Check how the posts, pedestrian gate and fencing will match.</p>"
    },
    {
      "heading": "Look beyond the face of the gate",
      "body": "<p>For timber, ask for the species or modified-wood product, board construction, frame joints and finish specification. For aluminium, ask about the frame, infill, joints, coating and repair options. The material name alone does not establish stiffness, durability or suitability for automation.</p><p>Solid boards and open bars create different privacy and wind-exposure conditions. Discuss weight, dimensions, supports and movement with the installer. Compare the complete gate design instead of assuming that one material will suit every opening.</p>"
    },
    {
      "heading": "Plan the upkeep you will accept",
      "body": "<p>Timber coatings need care appropriate to the species, exposure and selected finish. Ask how to recognise when attention is due and whether you want the wood to retain its original colour. Aluminium still needs the specified cleaning, coating checks and maintenance of its fittings.</p><p>Separate the timber or coating warranty from the gate fabrication, installation and automation terms. Ask about exclusions, maintenance records and labour charges. A raw-material warranty does not promise that the complete gate will remain unchanged for that period.</p>"
    },
    {
      "heading": "Compare equivalent quotations",
      "body": "<p>Put the same opening dimensions, infill, finish, supports, automation and access controls into both quotations. Include removal of the old entrance, power, groundworks, VAT and reinstatement. This gives you a useful comparison without relying on a universal lifespan or percentage saving.</p><p>Explore <a href=\"/services/wooden-driveway-gates/\">wooden driveway gates</a> and <a href=\"/services/aluminium-driveway-gates/\">aluminium gates</a>. For modified timber, read our <a href=\"/blog/accoya-wood-gates-london/\">Accoya guide</a> and ask for the proposed product terms. Then <a href=\"/contact/\">discuss your entrance</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Is aluminium maintenance-free?",
      "answer": "No. Follow the cleaning and inspection instructions for the finish, hardware and automation."
    },
    {
      "question": "Does wood-effect aluminium look identical to timber?",
      "answer": "Compare full-size samples, joints and both faces in your own lighting. Finish systems differ and appearance is a personal choice."
    }
  ],
  "relatedServiceSlug": "aluminium-driveway-gates",
  "relatedGuides": [],
  "featuredImageAlt": "Homeowner comparing aluminium and wooden driveway-gate finishes",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "swing-vs-sliding-gates",
  "title": "Swing vs Sliding Driveway Gates",
  "metaTitle": "Swing vs Sliding Driveway Gates | Driveway Gates London",
  "metaDescription": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "readingMinutes": 2,
  "publishDate": "2026-02-07",
  "featuredImage": "/images/guides/swing-vs-sliding-gates.webp",
  "intro": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "sections": [
    {
      "heading": "Measure the space each leaf occupies",
      "body": "<p>A swing leaf travels around its hinge. For an illustrative pair of equal leaves across a 3.5 m opening, each leaf is about 1.75 m wide before allowing for gaps and fittings. Its free edge traces an arc with roughly that radius, rather than the full 3.5 m opening width.</p><p>That arithmetic is not a safe parking distance. Hinge position, opening angle, vehicle shape, pedestrian routes and protective clearances determine the usable space. Ask for a scaled plan showing the gate in motion and your car parked.</p><figure><img src=\"/images/guides/swing-clearance-example.svg\" alt=\"Illustrative plan: two approximately 1.75 metre swing leaves across a 3.5 metre opening, with each leaf sweeping its own arc.\" width=\"720\" height=\"340\" loading=\"lazy\" style=\"width:100%;height:auto\"><figcaption>Illustration only. Not a site design or a minimum safe clearance.</figcaption></figure>"
    },
    {
      "heading": "Allow for the full sliding arrangement",
      "body": "<p>A sliding gate moves beside the entrance. The gate needs room along that path, including its supporting arrangement and safe separation from walls, fences and people. Cantilever designs have a supporting tail; tracked and multi-panel systems have different space requirements.</p><p>A car may be able to park beyond the sliding path, but the survey still needs to consider turning, waiting and pedestrian access. Read about <a href=\"/blog/telescopic-gates-space-saving-london/\">telescopic options</a> if side space is limited.</p>"
    },
    {
      "heading": "Slopes and drainage can change the choice",
      "body": "<p>A rising driveway can obstruct a swing leaf. A sliding layout also needs a suitable travel path, supports and drainage. Neither layout becomes suitable simply by adding a stronger motor.</p><p>Share measured levels and any flooding history with the installer. Our <a href=\"/blog/automated-gates-sloping-driveways-london/\">sloping-driveway guide</a> explains the questions to resolve before ordering.</p>"
    },
    {
      "heading": "Choose around daily use",
      "body": "<p>Consider where visitors stop, how pedestrians enter, and how bins and deliveries pass the gate. Ask how you will operate the entrance during a power cut and what maintenance access the design needs.</p><p>Compare <a href=\"/services/electric-swing-gates/\">swing-gate installation</a> with <a href=\"/services/electric-sliding-gates/\">sliding-gate installation</a> using the same design and access requirements. Groundworks and the complete specification determine cost; there is no fixed percentage difference that applies to every site.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Does a pair of gates need the entire opening width behind it?",
      "answer": "Each leaf has its own swept arc. Use the actual leaf dimensions and a site drawing that also accounts for vehicles, people and protective clearances."
    },
    {
      "question": "Which is better for a short driveway?",
      "answer": "A sliding or folding design may help, but side space, supports, gradient and safe movement still need assessment."
    }
  ],
  "relatedServiceSlug": "electric-swing-gates",
  "relatedGuides": [],
  "featuredImageAlt": "Gate surveyor explaining a sliding-gate layout on a short London driveway",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "best-intercom-systems",
  "title": "Choosing an Intercom for Your Driveway Gate",
  "metaTitle": "Choosing an Intercom for Your Driveway Gate | Driveway Gates London",
  "metaDescription": "Compare wired, network and mobile intercom options around visitor calls, gate release and ongoing account costs.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare wired, network and mobile intercom options around visitor calls, gate release and ongoing account costs.",
  "readingMinutes": 2,
  "publishDate": "2026-02-14",
  "featuredImage": "/images/guides/best-intercom-systems.webp",
  "intro": "Compare wired, network and mobile intercom options around visitor calls, gate release and ongoing account costs.",
  "sections": [
    {
      "heading": "Decide where you want to answer visitors",
      "body": "<p>List who should receive a call and whether they need an indoor monitor, phone calls, an app or a combination. Include anyone who does not use a smartphone. Decide what happens if nobody answers and how a visitor can leave a delivery.</p><p>Ask for a demonstration of the actual sequence: call, identify the visitor, grant entry and confirm that the gate has finished moving. Seeing a video does not necessarily mean the app reports the gate’s physical position.</p>"
    },
    {
      "heading": "Compare the connection paths",
      "body": "<p>A wired indoor system can suit a household that wants a dedicated answering point. An IP system needs the specified network and power arrangements. A mobile-network intercom needs suitable coverage, device support and a compatible SIM plan.</p><p>Test the connection at the proposed gate position. A strong indoor Wi-Fi signal or a phone signal from another network does not prove the intercom will work there. Discuss what remains available during a broadband, mobile-service or power failure.</p>"
    },
    {
      "heading": "Get the exact equipment and account terms",
      "body": "<p>Request model numbers, the proposed release interface, supported monitors and app requirements. Confirm recording options, retention, subscriptions, SIM charges and which account owns the system. Ask how to remove a former resident or contractor.</p><p>Product families contain different devices. Compare named configurations rather than assuming a brand guarantees compatibility. Our <a href=\"/blog/video-intercom-comelit-vs-hikvision/\">Comelit and Hikvision comparison</a> shows why the component list matters.</p>"
    },
    {
      "heading": "Plan installation and support",
      "body": "<p>Include cable routes, power, camera position, lighting, accessibility and weather exposure in the survey. Confirm who commissions the connection to the gate controller and checks operation of the complete entrance.</p><p>Compare <a href=\"/services/access-control/video-intercoms/\">video intercoms</a> and <a href=\"/services/access-control/gsm-phone-entry/\">phone entry</a>. For an existing smart-home setup, use our <a href=\"/blog/smart-gate-integration-ring-nest-control4/\">integration checklist</a>. Check <a href=\"https://www.ofcom.org.uk/phones-and-broadband/coverage-and-speeds/3g-switch-off\">Ofcom’s network-retirement guidance</a> before buying mobile-network equipment.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Which brand is best?",
      "answer": "Compare the proposed models against your wiring, visitor workflow, network, account costs and support requirements. A brand ranking cannot establish compatibility."
    },
    {
      "question": "Does an app continue working during a power cut?",
      "answer": "That depends on backup power for the gate, intercom and network equipment, as well as the service connection. Ask for the actual failure arrangements."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "Installer showing a homeowner several driveway-gate intercom systems",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "how-to-manually-open-electric-gate",
  "title": "How to Manually Open an Electric Gate During a Power Cut",
  "metaTitle": "How to Manually Open an Electric Gate During a Power Cut | Driveway Gates London",
  "metaDescription": "Find the correct manual-release instructions for your gate and understand when to stop and ask for help instead of forcing it open.",
  "pillar": "Maintenance & Troubleshooting",
  "excerpt": "Find the correct manual-release instructions for your gate and understand when to stop and ask for help instead of forcing it open.",
  "readingMinutes": 3,
  "publishDate": "2026-02-28",
  "featuredImage": "/images/guides/how-to-manually-open-electric-gate.webp",
  "intro": "Find the correct manual-release instructions for your gate and understand when to stop and ask for help instead of forcing it open.",
  "sections": [
    {
      "heading": "Start with the instructions supplied for your gate",
      "body": "<p>Manual release arrangements differ between operators. Find the user instructions for your installed system and the release training provided at handover. Check the model from records or an identification label only where you can see it safely.</p><p>This guide cannot supply a universal key direction, cover-opening sequence or release position. If the instructions or key are missing, contact the installer or a competent gate engineer before attempting to release the mechanism.</p>"
    },
    {
      "heading": "Check whether releasing it could allow uncontrolled movement",
      "body": "<p>Keep people, pets and vehicles away from the gate’s movement area. A gate freed from its drive may move because of a slope, wind or its own weight. Damage to hinges, supports or running gear can make manual movement unsafe.</p><p>Do not release a leaning, derailed, damaged or unstable gate. If you cannot control and secure it using the supplied instructions, keep clear and seek assistance. If someone is trapped or faces immediate danger, call the emergency services.</p>"
    },
    {
      "heading": "Locate the release without dismantling the operator",
      "body": "<p>A surface-mounted operator may have a release on its housing. An underground swing-gate system may use a release arrangement near the gate or foundation box. A sliding system may have a release associated with its operator. The exact location and access method depend on the product.</p><p>Use the manufacturer’s diagram for your model. Do not open electrical enclosures, remove guards or disconnect drive components to search for a release. A key from another system may not fit or operate it correctly.</p>"
    },
    {
      "heading": "Follow the model-specific isolation and release sequence",
      "body": "<p>Follow the supplied instructions for isolating power and preventing automatic operation before release. A mains power cut does not establish that every part is unpowered: the installation may have a backup battery or another supply.</p><p>Only operate the release and move the gate if the instructions and conditions allow you to do so safely. Use the specified method of holding or securing it. Do not force a seized key, lever or gate. Stop if movement is uneven, unexpectedly heavy or uncontrolled.</p>"
    },
    {
      "heading": "Before returning to automatic operation",
      "body": "<p>Use the manufacturer’s instructions for securing the gate, re-engaging the drive and restoring operation. Keep the movement area clear. If the original problem was a mechanical fault rather than a power cut, restoring the supply does not resolve it.</p><p>If you are unsure whether the mechanism has re-engaged or the gate behaves differently, stop using it and arrange an assessment. Do not bypass sensors or repeatedly trigger the motor to make it reconnect.</p>"
    },
    {
      "heading": "Prepare for the next power interruption",
      "body": "<p>Keep the correct key accessible to authorised users and store the instructions where they can be found. Ask the installer to demonstrate release and explain when it must not be attempted. Agree how people can use the entrance during a fault.</p><p>Backup capacity depends on the product, battery condition, accessories and use. Ask for the actual specification rather than a fixed cycle count. For a stuck mechanism, request <a href=\"/services/gate-repair-and-maintenance/\">gate repair assistance</a>. See <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/responsibilities.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on responsibilities</a> for user information and release arrangements.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Where is the manual release on my gate?",
      "answer": "Check the user instructions for the exact operator. Surface, underground and sliding systems can have different release arrangements. Do not dismantle equipment to look for one."
    },
    {
      "question": "What if I have lost the release key?",
      "answer": "Contact the installer or a gate engineer with the safely obtained equipment details. Do not force the lock or assume that another model’s key is suitable."
    },
    {
      "question": "Will the gate work during a power cut?",
      "answer": "Only if the installed system has a suitable backup arrangement and it can support the required use. Runtime varies; check the actual specification and condition."
    },
    {
      "question": "The gate is hard to move after release. Should I push harder?",
      "answer": "No. Stop, keep the area clear and ask for assistance. Resistance or uncontrolled movement can indicate a mechanical or structural problem."
    }
  ],
  "relatedServiceSlug": "gate-repair-and-maintenance",
  "relatedGuides": [],
  "featuredImageAlt": "Homeowner using the manual release on an electric sliding-gate motor",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "winter-gate-maintenance",
  "title": "Winter Gate Maintenance for London Homes",
  "metaTitle": "Winter Gate Maintenance for London Homes | Driveway Gates London",
  "metaDescription": "Prepare your entrance for wet and cold weather with safe observations, the right service records and a clear fault plan.",
  "pillar": "Maintenance & Troubleshooting",
  "excerpt": "Prepare your entrance for wet and cold weather with safe observations, the right service records and a clear fault plan.",
  "readingMinutes": 2,
  "publishDate": "2026-03-07",
  "featuredImage": "/images/guides/winter-gate-maintenance.webp",
  "intro": "Prepare your entrance for wet and cold weather with safe observations, the right service records and a clear fault plan.",
  "sections": [
    {
      "heading": "Check the entrance before colder weather",
      "body": "<p>From outside the movement area, look for damaged fittings, a leaning leaf, unusual gaps, standing water or debris near tracks and drains. Note changes in noise or movement during normal use. Do not repeat a faulty movement to investigate it.</p><p>Keep the gate instructions, service records and installer contact details together. Arrange an assessment before winter if the gate scrapes, hesitates or behaves differently. Tell the engineer about flooding, impact damage or recent paving work.</p>"
    },
    {
      "heading": "Keep homeowner care within the instructions",
      "body": "<p>Carry out only the cleaning and care described for your installed system, using its stated isolation arrangements. Keep hands clear of hinges, rollers and trapping points. Do not remove electrical covers, change force settings or bypass sensors.</p><p>Lubricant type and application points depend on the equipment. Adding oil or grease to an unsuitable part can create problems. Ice, compacted debris and water in a motor enclosure need assessment; do not use force or improvised heat to restore operation.</p>"
    },
    {
      "heading": "What to discuss at a service visit",
      "body": "<p>Ask the engineer to inspect the mechanical condition, supports, drainage, cabling and protective measures relevant to your entrance. Discuss how weather exposure and use affect the maintenance schedule. Request a record of findings, remedial work and checks before return to use.</p><p>Confirm the visit charge and what it covers before booking. Ask how parts or additional work will be authorised. A seasonal checklist cannot replace the maintenance instructions or an assessment of the complete system.</p>"
    },
    {
      "heading": "Prepare for a power cut or breakdown",
      "body": "<p>Check that you have the correct user instructions and release key, and understand how the gate would be controlled and secured. Wind and gravity can move a released gate. Battery backup, where fitted, needs its own maintenance and capacity checks.</p><p>Read our <a href=\"/guides/how-to-manually-open-electric-gate/\">manual-release guide</a> before an emergency. If the motor hums without moving, stop repeated attempts and use our <a href=\"/blog/gate-motor-humming-not-moving/\">fault information checklist</a> when requesting <a href=\"/services/gate-repair-and-maintenance/\">a repair assessment</a>.</p><p>Further reading: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\">HSE powered-gate safety and maintenance guidance</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Should every gate be serviced once a year?",
      "answer": "Follow the system instructions and an engineer’s assessment of use, condition and exposure. A calendar interval alone does not establish that a gate is safe."
    },
    {
      "question": "Can I increase the motor force in cold weather?",
      "answer": "Do not change safety or force settings to overcome a fault. Stop using a gate that struggles and arrange assessment."
    }
  ],
  "relatedServiceSlug": "gate-repair-and-maintenance",
  "relatedGuides": [],
  "featuredImageAlt": "Engineer clearing wet leaves from a sliding-gate track in winter",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "uk-electric-gate-safety-laws",
  "title": "UK Electric Gate Safety: Responsibilities and Handover",
  "metaTitle": "UK Electric Gate Safety: Responsibilities and Handover | Driveway Gates London",
  "metaDescription": "Understand installer responsibilities, conformity documents and the difference between private-home and workplace gate maintenance duties.",
  "pillar": "Safety & Compliance",
  "excerpt": "Understand installer responsibilities, conformity documents and the difference between private-home and workplace gate maintenance duties.",
  "readingMinutes": 3,
  "publishDate": "2026-03-14",
  "featuredImage": "/images/guides/uk-electric-gate-safety-laws.webp",
  "intro": "Understand installer responsibilities, conformity documents and the difference between private-home and workplace gate maintenance duties.",
  "sections": [
    {
      "heading": "The completed entrance matters",
      "body": "<p>A powered gate is a machine. Its safety depends on the assembled gate, supports, drive, controls, protective measures and surroundings. A marked motor or a list of fitted sensors does not by itself demonstrate that the complete installation is safe.</p><p>A site assessment should consider the people who can encounter the gate, including visitors and children, and the places where movement could cause injury. The proposal and handover should explain how the identified risks are addressed.</p>"
    },
    {
      "heading": "Installer and manufacturer responsibilities",
      "body": "<p>HSE explains that the person assembling a powered gate from components can become the manufacturer of the completed machine. Converting an existing manual gate to power operation can also create these responsibilities.</p><p>Ask who will take responsibility for the completed installation. Request the Declaration of Conformity, user instructions and the recommended maintenance and safety checks at handover. A component manual or motor receipt is not a substitute for the documents for the assembled gate.</p>"
    },
    {
      "heading": "CE and UKCA marking in Great Britain",
      "body": "<p>Do not rely on the claim that CE marking stopped being accepted for gate equipment in January 2023. Current government guidance describes CE recognition alongside or in place of UKCA for relevant product regimes in Great Britain. The applicable rules depend on the product and market.</p><p>Ask the supplier to identify the conformity route and documents for the equipment and completed installation. See <a href=\"https://www.gov.uk/guidance/placing-ukca-or-ce-marked-products-on-the-market-in-great-britain\" target=\"_blank\" rel=\"noopener noreferrer\">GOV.UK guidance on UKCA or CE marked products</a>. Northern Ireland has separate arrangements.</p>"
    },
    {
      "heading": "Private homes, workplaces and landlords",
      "body": "<p>HSE distinguishes private domestic owners from people responsible for gates at work or as part of a work activity. Its guidance says health and safety law does not apply to owners of gates on privately owned domestic premises, while recommending regular checks. This does not remove product or installer obligations, or a householder’s potential liability for harm or damage.</p><p>Commercial owners, employers, landlords and managing agents can have duties to keep gates safe. If your entrance serves rented property, a shared development or a business, establish who is responsible for its operation, maintenance and records. Do not use advice for a single private home as the complete answer for those settings.</p>"
    },
    {
      "heading": "Testing, maintenance and changes",
      "body": "<p>The installer needs to assess and check the completed system before handover. Where force limitation forms part of the protection, its performance needs suitable verification. Read our <a href=\"/guides/force-testing-explained/\">force-testing explanation</a> for what a homeowner should ask.</p><p>Follow the installation’s instructions and maintenance recommendations. Do not assume that one annual visit or a generic device list proves continuing safety. Report damage, unexpected movement or failed protective functions and seek competent help. Significant modifications may require a new conformity assessment; straightforward servicing is not automatically the same situation.</p>"
    },
    {
      "heading": "A practical handover checklist",
      "body": "<p>Ask for the gate and equipment identification, operating instructions, manual-release training, isolation information, conformity documents and the recommended checking arrangements. Keep the responsible company’s contact details and agree what to do if a fault makes the entrance unsafe.</p><p>For an existing installation with missing records, request a <a href=\"/services/gate-repair-and-maintenance/\">gate assessment</a>. Agree what the visit can establish rather than expect a certificate from photographs. Source: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/responsibilities.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on responsibilities</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Is UKCA the only acceptable marking for gate equipment in Great Britain?",
      "answer": "No blanket statement applies to every product. Current government guidance recognises CE alongside or in place of UKCA for relevant regimes. Ask the supplier to confirm the applicable route and documentation."
    },
    {
      "question": "Must a private homeowner have an annual gate test by law?",
      "answer": "HSE distinguishes private domestic ownership from work and landlord responsibilities and recommends regular checks for domestic gates. Follow the installation instructions and obtain advice for your actual circumstances rather than assuming a universal annual legal rule."
    },
    {
      "question": "What should I receive at handover?",
      "answer": "Request the completed system’s conformity documents, user instructions, operating and release training, and recommendations for maintenance and safety checks."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "Gate installer explaining a completed safety inspection to a homeowner",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "force-testing-explained",
  "title": "Electric Gate Force Testing: What Homeowners Should Ask",
  "metaTitle": "Electric Gate Force Testing: What Homeowners Should Ask | Driveway Gates London",
  "metaDescription": "Understand what force testing can show, how it fits into a gate safety assessment and which records to request from a competent engineer.",
  "pillar": "Safety & Compliance",
  "excerpt": "Understand what force testing can show, how it fits into a gate safety assessment and which records to request from a competent engineer.",
  "readingMinutes": 3,
  "publishDate": "2026-03-21",
  "featuredImage": "/images/guides/force-testing-explained.webp",
  "intro": "Understand what force testing can show, how it fits into a gate safety assessment and which records to request from a competent engineer.",
  "sections": [
    {
      "heading": "What force testing measures",
      "body": "<p>Force testing measures forces produced when a moving gate encounters a test instrument under specified conditions. An engineer uses the results to assess the relevant protection and to establish a record for later checks. A person pushing against the gate cannot provide an equivalent measurement.</p><p>The appropriate procedure depends on the gate, its movement and the protective approach used. This guide explains the questions to ask; it does not provide a test procedure or a set of universal pass values.</p>"
    },
    {
      "heading": "Where testing fits into the safety assessment",
      "body": "<p>Force limitation is one possible part of a gate’s protective measures. Where the installation relies on it, the installer needs to verify its performance. Other risks can require different measures, and an acceptable reading at one test point does not establish that the whole entrance is safe.</p><p>The assessment also needs to consider trapping and shearing areas, access to moving parts, the people using the entrance and foreseeable behaviour. Read our <a href=\"/guides/photocells-vs-safety-edges/\">guide to photocells, edges and loops</a> to understand why devices have different roles.</p>"
    },
    {
      "heading": "Why one force number is not enough",
      "body": "<p>Force limits and test methods relate to defined conditions, positions and time periods. Presenting a number as a continuous safe pressure, or assuming the same value applies at every edge, loses that context. Do not use a simplified web table to approve an installation.</p><p>Ask the engineer which current standard or other technical approach supports the assessment, which risks the tests address and how the results will be recorded. They should have the competence and equipment for the work. Changes to force or sensitivity settings should not be a homeowner troubleshooting step.</p>"
    },
    {
      "heading": "What to request in the report",
      "body": "<p>Ask the report to identify the entrance and equipment, the date and person doing the work, the checks undertaken, any limitations, findings and required actions. Where force tests are relevant, request the recorded results and their assessment in context.</p><p>Keep these records with the user instructions and handover documents. A statement that the gate opens and closes is not a substitute for a safety assessment. If an unsafe condition is identified, ask how the entrance should be kept out of use and what must happen before it can operate again.</p>"
    },
    {
      "heading": "When to arrange an assessment",
      "body": "<p>Arrange advice after damage, unexpected movement, a suspected failure of a protective function or a change to the gate or drive. Follow the checking arrangements specified for your system. The requirements for a business or rented property may differ from those of a privately owned domestic entrance.</p><p>See our <a href=\"/guides/uk-electric-gate-safety-laws/\">responsibilities guide</a>. Avoid treating a fixed annual date as either a complete safety guarantee or a universal statutory requirement for all private homeowners.</p>"
    },
    {
      "heading": "Leave adjustments and powered tests to a competent person",
      "body": "<p>Do not test the closing force with your body, a pet, a vehicle or improvised objects. Keep people clear if you suspect a fault and follow the supplied instructions for taking the gate out of use, provided that can be done safely.</p><p>Request a <a href=\"/services/gate-repair-and-maintenance/\">gate assessment</a> and agree the inspection scope before booking. Sources: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on powered-gate safety</a> and <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/responsibilities.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on responsibilities</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Does one passing force reading mean the gate is safe?",
      "answer": "No. A reading relates to particular conditions and locations. The complete entrance and its other hazards and protective measures still need assessment."
    },
    {
      "question": "Can I test a gate by pushing against it?",
      "answer": "No. Do not use a person or improvised obstruction as a force-test instrument. Ask a competent engineer to carry out the appropriate assessment with suitable equipment."
    },
    {
      "question": "Do all powered gates use the same protection and test procedure?",
      "answer": "No. The gate, environment, foreseeable users and protective approach determine what must be assessed and verified. Where force limitation is used, its performance needs suitable verification."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "Technician carrying out a calibrated force test on an electric gate",
  "updatedDate": "2026-10-02"
},

  {
  "slug": "photocells-vs-safety-edges",
  "title": "Gate Safety Devices: Photocells, Safety Edges and Loops",
  "metaTitle": "Gate Safety Devices: Photocells, Safety Edges and Loops | Driveway Gates London",
  "metaDescription": "Understand the different roles and limits of gate photocells, safety edges and vehicle loops, and why the whole entrance needs assessment.",
  "pillar": "Safety & Compliance",
  "excerpt": "Understand the different roles and limits of gate photocells, safety edges and vehicle loops, and why the whole entrance needs assessment.",
  "readingMinutes": 3,
  "publishDate": "2026-03-28",
  "featuredImage": "/images/guides/photocells-vs-safety-edges.webp",
  "intro": "Understand the different roles and limits of gate photocells, safety edges and vehicle loops, and why the whole entrance needs assessment.",
  "sections": [
    {
      "heading": "Start with the hazards at the entrance",
      "body": "<p>Safety devices perform different functions. A gate can have several devices fitted and still present an unaddressed trapping or crushing risk. The installer needs to assess the complete gate, its movement, nearby structures and the people who may encounter it.</p><p>Ask the proposal to explain the risks identified and how the design addresses them. Do not treat a shopping list of sensors as a substitute for that assessment.</p>"
    },
    {
      "heading": "What photocells can detect",
      "body": "<p>A photocell arrangement detects interruption of a beam or detection path. The area it covers depends on its design and positioning. A single beam does not detect every person or object anywhere around the gate.</p><p>The control system’s response depends on the equipment and configuration. Do not assume every beam interruption always causes the same stop or reversal in every operating direction. Ask the installer to explain the intended response and user checks.</p>"
    },
    {
      "heading": "What safety edges do",
      "body": "<p>A suitable safety edge can detect contact along the area it protects and signal the control system. Selection, positioning, compatibility and the response of the complete system matter. Fitting an edge to one part of a gate does not establish protection at every other trapping point.</p><p>Ask which hazards the edges address and how their function will be verified. Damaged, loose or disconnected protection needs competent attention. Do not defeat a device to keep using the gate.</p>"
    },
    {
      "heading": "What vehicle loops do",
      "body": "<p>An inductive loop detects a change caused by a suitable vehicle within its detection area. Depending on the design, it may form part of an access-control or vehicle-presence arrangement.</p><p>Do not rely on a vehicle loop to detect a pedestrian or provide all necessary protection. The installer must consider people on foot, cyclists, visitors and others alongside vehicle use. A convenient opening trigger and a safety function are not automatically interchangeable.</p>"
    },
    {
      "heading": "Positioning and testing must suit the system",
      "body": "<p>There is no mounting height or device combination in this article that can approve every entrance. Gate geometry, surroundings, users and operating arrangements affect the specification. A competent installer needs to verify the proposed protective measures before handover.</p><p>Where force limitation is part of the protection, suitable verification is needed. Read our <a href=\"/guides/force-testing-explained/\">force-testing guide</a> rather than attempting a test with your body or an improvised obstacle.</p>"
    },
    {
      "heading": "What owners should do when something changes",
      "body": "<p>Follow the user instructions for routine checks and cleaning. Report visible damage, unexpected movement or a suspected failure of protection. Keep people clear and follow isolation instructions where you can do so safely.</p><p>Have a competent person assess faults and changes, including changes to the surrounding entrance. Keep records and ask when the gate can return to use. See <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on powered-gate safety</a>, or request a <a href=\"/services/gate-repair-and-maintenance/\">gate assessment</a>.</p>"
    }
  ],
  "faqs": [
    {
      "question": "Will photocells detect everyone around a gate?",
      "answer": "No. Detection is limited to the arrangement’s coverage and operating conditions. Other hazards and people outside that area still need to be considered in the assessment."
    },
    {
      "question": "Can a vehicle loop replace pedestrian protection?",
      "answer": "Do not assume that it can. A loop’s vehicle-detection function does not establish protection for people on foot. The complete entrance needs an appropriate safety assessment."
    },
    {
      "question": "Can I bypass a faulty sensor temporarily?",
      "answer": "No. Stop using the affected system and obtain competent assistance. A bypass can remove protection that the installation relies on."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "Installer showing gate photocells and safety edging to a homeowner",
  "updatedDate": "2026-10-02"
},

];

export const guides: Guide[] = guideEntries.map(guide => {
  const featured = guideFeaturedImages[guide.slug];
  return featured
    ? { ...guide, featuredImage: featured.src, featuredImageAlt: featured.alt }
    : guide;
});

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
