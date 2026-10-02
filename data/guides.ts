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
    slug: 'electric-gate-running-costs',
    title: 'How Much Electricity Does an Automated Gate Actually Use?',
    metaTitle: 'Electric Gate Running Costs UK | 2026 Energy Guide',
    metaDescription: 'Worried about energy bills? Discover the true running costs of electric gates in London, including standby electricity, servicing, and repairs.',
    pillar: 'Pricing & Costs',
    excerpt: 'Electric gate running costs are far lower than most homeowners expect — but the full annual picture includes electricity, servicing, and occasional repairs. Here is what you will actually pay.',
    readingMinutes: 7,
    publishDate: '2026-01-17',
    featuredImage: '/images/gates/gate-automation-intercom-evening-lighting.png',
    intro: 'One of the most common questions we hear from London homeowners considering an automated gate is how much it will add to their electricity bill. The answer is almost always: less than you think. Modern 24V gate motors are among the most efficient electrical devices in any household. This guide breaks down the real electric gate running costs so you can budget with confidence.',
    sections: [
      {
        heading: 'Standby Power vs Active Cycle Consumption',
        body: `An automated gate motor draws power in two very different modes. In standby — which is the vast majority of its operating life — a modern 24V residential gate motor consumes between 3 and 8 watts. This is comparable to an LED bulb and represents the power required to keep the control board active, the safety sensors live, and the system ready to receive a command.\n\nDuring an active opening or closing cycle, power consumption rises to between 60 and 150 watts for a typical single motor, lasting for the 10 to 20 seconds the gate takes to complete its travel. A pair of motors on a double swing gate draws proportionally more during the cycle, but the cycle duration is the same.\n\nOlder 230V AC motors — common on gates installed before 2015 — consume significantly more in both modes. Standby consumption on older units can reach 20 to 40 watts, and cycle consumption can exceed 300 watts per motor. If your gate was installed more than a decade ago, upgrading to a modern 24V DC system may be worth considering purely on energy efficiency grounds — our <a href="/services/automated-gate-systems/">automated gate installations in London</a> team can advise on what a system upgrade involves.`,
      },
      {
        heading: 'What Electric Gates Actually Add to Your Monthly Electricity Bill',
        body: `Let us do the maths for a typical London household with a modern 24V gate system opening and closing around 10 times per day — a reasonable assumption for a family home.\n\nStandby consumption: 5 watts x 24 hours x 365 days = 43.8 kWh per year. Active cycle consumption: 100 watts average x 20 seconds per cycle x 10 cycles per day x 365 days = 20.3 kWh per year. Total annual consumption: approximately 64 kWh.\n\nAt the current UK electricity unit rate — the <a href="https://energysavingtrust.org.uk/" target="_blank" rel="noopener noreferrer">Energy Saving Trust</a> reports the typical UK rate at around 24p per kWh as of 2026 — that works out to roughly £15 to £16 per year. Less than £1.50 per month.\n\nFor properties with a battery backup unit fitted alongside the motor — which stores charge and powers the gate during power cuts — add a small additional draw for the trickle-charging circuit, typically 1 to 3 watts constant. This adds no more than £2 to £3 per year to the running cost.`,
      },
      {
        heading: 'Annual Servicing and Maintenance Costs',
        body: `Electricity is the smallest element of the <a href="/guides/electric-driveway-gates-cost-london/">true annual running cost of an electric gate</a>. The more significant ongoing cost is servicing.\n\nA professional annual service from a London gate engineer typically costs between £120 and £200 for a standard residential system. This covers motor lubrication, safety sensor testing and calibration, hinge adjustment and greasing, track cleaning for sliding gates, intercom function test, battery backup check, and a general structural inspection. Skipping the annual service risks voiding manufacturer warranties and turning small problems into expensive failures.\n\nOver a 10-year period, a realistic total running cost budget for a London residential automated gate — electricity, annual servicing, and occasional minor repairs — is £2,000 to £3,500. Spread over the decade, that is £200 to £350 per year.`,
      },
      {
        heading: 'How Modern 24V Systems Compare to Older Motors',
        body: `If you have an older gate system installed before 2015, motor technology has advanced considerably. Modern 24V brushless DC motors are more energy-efficient, quieter, smoother, and significantly more reliable than the 230V AC motors that dominated the market a decade ago.\n\nThe efficiency gain translates directly to running costs: a modern system might cost £16 per year in electricity where an older 230V system on the same gate costs £45 to £60. Over 10 years, that is a saving of £300 to £450 in electricity alone, before accounting for the reduced repair frequency of modern motor technology.\n\nMany London homeowners with older gate systems are surprised to discover that a full motor and control board upgrade — fitting a modern 24V system to existing gates — costs far less than replacing the gate itself. If your current system is noisy, slow, or unreliable, this is often the most cost-effective route. Drop your phone number in the form above and our team will call back to discuss whether an upgrade makes financial sense for your system.`,
      },
    ],
    faqs: [
      { question: 'How much electricity does an electric gate use per year?', answer: 'A modern 24V residential gate motor uses approximately 60 to 70 kWh per year for a typical London household with around 10 gate cycles per day. At current UK electricity rates of around 24p per kWh, this works out to roughly £15 to £17 per year — well under £2 per month.' },
      { question: 'Does leaving the gate on standby use a lot of electricity?', answer: 'No. A modern gate motor in standby draws only 3 to 8 watts — comparable to a low-energy LED bulb. Even on standby continuously for a year, the cost would be under £10 at current electricity rates.' },
      { question: 'How often should electric gates be serviced?', answer: 'Once per year for residential systems. A standard annual service covers motor lubrication, safety sensor testing, hinge adjustment, intercom checks, and battery backup verification. It typically takes an hour and costs £120 to £200 in London.' },
      { question: 'Is it worth upgrading from an old 230V gate motor to a new 24V system?', answer: 'Usually yes, if the existing gate structure is sound. Modern 24V motors are more efficient, quieter, smoother, and more reliable. The upgrade typically costs £800 to £1,800 depending on gate type, and the energy and repair savings often recover this within 5 to 7 years.' },
    ],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['electric-driveway-gates-cost-london', 'automation-kit-installation-prices', 'winter-gate-maintenance'],
  },

  {
    slug: 'automation-kit-installation-prices',
    title: 'The Cost of Adding Automation to Existing Driveway Gates',
    metaTitle: 'Gate Automation Kit Installation Prices | London',
    metaDescription: 'Want to automate your existing manual gates? Learn the installation prices for underground and ram gate automation kits in London.',
    pillar: 'Pricing & Costs',
    excerpt: 'Already have manual gates and want to add motors? Here is a clear breakdown of gate automation kit installation prices in London — covering underground motors, ram-arm systems, and the site requirements that affect the final cost.',
    readingMinutes: 6,
    publishDate: '2026-01-24',
    featuredImage: '/images/gates/gate-aluminium-sliding-modern-dark-brick-2.png',
    intro: 'Retrofitting automation to existing manual driveway gates is one of the most popular gate upgrade projects in London. It avoids the cost and disruption of replacing structurally sound gates entirely, and modern motors can be fitted to almost any gate type — timber, steel, or wrought iron — provided the gate and its hanging hardware meet the minimum structural requirements.',
    sections: [
      {
        heading: 'Can Your Existing Gates Be Automated?',
        body: `Before any motor is specified, a site survey must establish whether your existing gates are suitable for automation. This is not a formality — it directly determines whether a retrofit is viable, and if so, which motor system is appropriate.\n\nThe critical factors are gate weight, hinge condition, and structural integrity. A pair of timber swing gates for a standard 3.5-metre opening typically weighs 80 to 150 kg total. Most modern residential swing gate motors can handle up to 300 kg per leaf, so weight is rarely the limiting factor for standard residential timber gates. Heavy bespoke wrought iron or steel gates are a different matter — very heavy designs may require commercial-grade motors or structural reinforcement of the posts.\n\nHinge condition matters because automation puts a continuous rotational load on hinges that manual operation does not. Worn, corroded, or loose hinges will fail quickly under motor load. Most retrofit projects include hinge replacement or upgrade as part of the specification. If you need <a href="/services/gate-automation-kits/">gate upgrades and maintenance in London</a>, we assess hinges as part of every survey.`,
      },
      {
        heading: 'Surface-Mounted Ram-Arm Motor Costs',
        body: `Ram-arm motors are the most affordable and straightforward automation option for swing gates. They mount on the back of the gate leaf and post, are visible when the gate is open, and require no excavation or groundwork beyond an electrical connection.\n\nFor supply and installation of a quality branded ram-arm motor system — from manufacturers such as <a href="https://www.bft-automation.com/en_GB/" target="_blank" rel="noopener noreferrer">BFT Automation</a>, CAME, or FAAC — expect to pay £1,200 to £2,200 for a pair of motors on double swing gates, fully installed and commissioned. This includes the control board, safety photocells, two remote controls, and basic programming.\n\nAdd-ons that most homeowners include at the same time: a basic audio intercom (£150 to £300), a GSM opener for phone-based gate control (£200 to £400), or a video intercom with smartphone app integration (£350 to £700 fitted). These are most cost-effectively added at the same time as the motor installation since the cable runs are already open.`,
      },
      {
        heading: 'Underground Motor Costs',
        body: `Underground motors are the premium option for swing gates. Mounted in a waterproof housing beneath the gate post cap, they are completely invisible when the gate is closed — only the gate itself is visible, with no external motor housings or arm linkages.\n\nThe cost premium over ram-arm systems reflects the hardware quality and the additional installation work. A pair of underground motors from a quality manufacturer typically costs £2,200 to £3,800 for supply and installation, depending on the motor specification and any groundwork required.\n\nA site survey is mandatory before any retrofit automation project is quoted. Retrofitting electric gates <a href="/guides/electric-driveway-gates-cost-london/">cost estimates</a> provided without a site visit are unreliable — ground conditions, cable routing distances, gate weight, and hinge condition all materially affect the final price. Leave your phone number in the form above and our team will arrange a fast callback to discuss your specific project and book a free survey.`,
      },
    ],
    faqs: [
      { question: 'How much does it cost to automate existing gates in London?', answer: 'Retrofitting a pair of existing swing gates with ram-arm motors, safety photocells, and remotes in London typically costs £1,200 to £2,200 fully installed. Underground motor systems cost £2,200 to £3,800 for the same gate configuration. Adding a video intercom at the same time typically adds £350 to £700.' },
      { question: 'Can any manual gate be automated?', answer: 'Most structurally sound manual gates can be automated. We assess gate weight, hinge condition, post integrity, and the available space for the motor system during the free site survey. Gates that are rotten, heavily corroded, or poorly hung will need repair or replacement before automation is practical.' },
      { question: 'Do I need planning permission to add automation to existing gates?', answer: 'Adding a motor to existing gates does not normally require planning permission — the gate already exists and its height and position are unchanged. Always check with your local planning authority if you are in a conservation area.' },
      { question: 'How long does a gate automation retrofit take?', answer: 'A standard retrofit — two motors, photocells, intercom, and remotes on an existing pair of swing gates — is a job we typically complete in one day.' },
    ],
    relatedServiceSlug: 'gate-automation-kits',
    relatedGuides: ['electric-driveway-gates-cost-london', 'electric-gate-running-costs'],
  },

  {
    slug: 'aluminium-vs-wooden-driveway-gates',
    title: 'Aluminium vs. Wooden Driveway Gates: Which is Best for Your London Home?',
    metaTitle: "Aluminium vs Wooden Driveway Gates | London Buyer's Guide",
    metaDescription: 'Choosing between aluminium and wooden driveway gates for your London home? Compare durability, maintenance, security, and costs.',
    pillar: 'Comparison & Buying',
    excerpt: 'Timber looks warmer. Aluminium lasts longer with zero maintenance. This guide gives you the full, honest comparison of aluminium vs wooden driveway gates so you can make the right call for your London property.',
    readingMinutes: 8,
    publishDate: '2026-01-31',
    featuredImage: '/images/gates/gate-wooden-oak-swing-cottage-garden.png',
    intro: 'The choice between aluminium and timber is the single most debated material decision in the London driveway gate market. Both materials have genuine strengths, and the right answer depends on your property style, how much time you want to spend on maintenance, and what your budget looks like over a 10-year horizon rather than just today.',
    sections: [
      {
        heading: 'The Classic Appeal of Hardwood Gates and What London Weather Does to Them',
        body: `Hardwood driveway gates have an authenticity that no manufactured material fully replicates. The grain, the warmth, the weight of a well-made oak or iroko gate closing is genuinely different from the click of an aluminium panel. For period London properties — Victorian terraces, Edwardian semis, Georgian townhouses — a quality hardwood gate is architecturally appropriate in a way that aluminium often is not.\n\nThe practical question is what London's climate does to that hardwood over time. London's combination of damp winters, intermittent frost, and significant diurnal temperature variation is genuinely hard on timber. Untreated or under-maintained hardwood gates will check, crack at the joints, and begin to warp within three to five years. Gate leaves that warp enough to bind on the frame or drag on the ground are a common repair call-out.\n\nFor properties where hardwood is the right choice — conservation areas, period homes, heritage settings — consider <a href="/blog/accoya-wood-gates-london/">premium modified timbers</a>. <a href="https://www.accoya.com/" target="_blank" rel="noopener noreferrer">Accoya</a> is a chemically modified radiata pine that is dimensionally extremely stable, carries a 50-year above-ground guarantee, and needs treatment only every three to five years. Our <a href="/services/wooden-driveway-gates/">bespoke wooden gates in London</a> include iroko, oak, and Accoya as standard options.`,
      },
      {
        heading: 'The Rise of Aluminium: Lightweight, Rust-Free, Zero Maintenance',
        body: `Aluminium driveway gates have moved from a niche product to the <a href="/blog/aluminium-vs-timber-gates-london/">dominant residential gate material in London</a> over the past seven years. The reasons are compelling. Aluminium does not rust. It does not warp. It does not need annual treatment. The powder coat finish is baked on at the factory and carries a manufacturer guarantee of 20 to 25 years.\n\nFor a London homeowner who wants a gate that looks excellent, performs reliably, and requires nothing beyond an occasional wash, aluminium is the straightforward answer. Low maintenance driveway gates in London — genuinely low maintenance — means aluminium.\n\nDesign options in aluminium have expanded considerably. Flat-face full-privacy panels, horizontal slat designs, vertical bar styles, and wood-effect textured finishes are all available. The wood-effect finishes — embossed surface texturing combined with RAL colours in oak, mahogany, or walnut — are increasingly popular for homeowners who want the warmth of timber aesthetics with the durability of aluminium.`,
      },
      {
        heading: 'Security and Lifespan: How the Two Materials Compare',
        body: `Both aluminium and hardwood gates provide equivalent security for residential applications when properly hung and fitted. The security of a gate is determined primarily by its locking hardware, hinge specification, post foundation, and motor dead-lock function — not by the material of the gate itself.\n\nFor lifespan, aluminium is the clear winner on a maintained basis. A quality aluminium gate with a 25-year powder coat guarantee should last 40 years or more without structural degradation. A hardwood gate — assuming excellent maintenance — might reach 25 to 30 years for premium iroko, or 15 to 20 years for good-quality oak.\n\nIf you are still unsure which material suits your specific property, design vision, and budget, our team can advise. Enter your phone number in the form above and one of our installation specialists will call back to discuss the options for your specific situation.`,
      },
    ],
    faqs: [
      { question: 'Are aluminium gates as strong as wooden gates?', answer: 'Yes. Modern aluminium gate profiles use hollow sections with internal reinforcement that match the rigidity of equivalent timber designs for residential applications. For security purposes, the hinge specification, locking hardware, and motor dead-lock function matter far more than the gate material itself.' },
      { question: 'How often do wooden gates need treating in London?', answer: 'Most hardwood gate manufacturers recommend oiling or re-staining every 12 to 24 months for London properties. Premium modified timbers such as Accoya need treatment only every three to five years.' },
      { question: 'Do aluminium gates look as good as wooden gates?', answer: 'Modern aluminium gates with wood-effect powder coat finishes are visually very close to real timber at normal viewing distances. For contemporary architectural styles, aluminium is often the superior aesthetic choice. For traditional period properties in conservation areas, authentic hardwood may be preferred by planning authorities.' },
      { question: 'Which is cheaper — aluminium or wooden gates?', answer: 'On initial supply cost, mid-range aluminium and good-quality hardwood gates are broadly comparable. Over a 10-year period, aluminium is typically cheaper when maintenance costs are included, as it requires no oiling, staining, or repainting.' },
    ],
    relatedServiceSlug: 'aluminium-driveway-gates',
    relatedGuides: ['swing-vs-sliding-gates', 'electric-driveway-gates-cost-london'],
  },

  {
    slug: 'swing-vs-sliding-gates',
    title: "Swing vs. Sliding Gates: The Ultimate Buyer's Guide",
    metaTitle: 'Swing vs Sliding Gates | Which is Best for London Driveways?',
    metaDescription: 'Short on space? Find out whether swing gates or sliding gates are better for your London property based on driveway size, slope, and security.',
    pillar: 'Comparison & Buying',
    excerpt: 'Swing gate or sliding gate? The answer depends on your driveway length, slope, available wall space, and budget. This guide covers every practical variable so you can make the right decision for your London property.',
    readingMinutes: 8,
    publishDate: '2026-02-07',
    featuredImage: '/images/gates/gate-aluminium-swing-open-luxury-garden.png',
    intro: 'The choice between swing and sliding gates is the single most important decision in a driveway gate project, and it is determined almost entirely by the physical characteristics of your driveway — not by aesthetic preference. This guide walks through every practical variable.',
    sections: [
      {
        heading: 'Space Requirements: Why London Driveways Often Favour Sliding',
        body: `The defining constraint for swing gates is clearance. A pair of swing gates opening inward onto a 3.5-metre driveway require each gate leaf to swing through a 90-degree arc — meaning the car on the driveway must be parked at least 3.5 metres back from the gate line for the gates to open fully. On a standard London terrace or semi-detached property with a 4 to 6 metre driveway, this can make swing gates impractical without precise parking discipline.\n\nSliding gates eliminate this problem entirely. A sliding gate moves laterally along the boundary wall or fence, opening a full-width passage <a href="/blog/telescopic-gates-space-saving-london/">without encroaching on the driveway space</a> at all. The trade-off is that you need clear, unobstructed wall space equal to the gate width alongside the opening.\n\nFor short London driveways, sliding is often the only viable mechanised option. The <a href="https://www.planningportal.co.uk/" target="_blank" rel="noopener noreferrer">UK Planning Portal</a> notes that many urban permitted development properties have restricted frontage dimensions that make swing gate clearance impractical. If you are considering <a href="/services/electric-sliding-gates/">electric sliding gates in London</a>, our team can assess whether your boundary wall configuration is suitable.`,
      },
      {
        heading: 'Wind Resistance: A Factor Many London Homeowners Overlook',
        body: `Wind loading is a genuine practical consideration for solid-panel driveway gates in London, and it affects swing and sliding designs very differently.\n\nA pair of solid swing gates on a corner plot or exposed position acts precisely as a sail when wind hits the panels broadside. The wind force is transmitted directly through the gate leaf to the hinges and posts. On a fully open gate in a 40 mph gust, the loading on hinge pins and post bases is substantial. Poorly specified posts or under-rated hinges will show the damage within one or two winters.\n\nSliding gates experience wind loading differently. When open, the gate is retracted along the boundary wall, where it is partially sheltered. When closed, wind loading is transmitted to the gate guide, track, and motor — systems designed to handle the loading in their rated specification. A well-specified sliding gate system is generally more resistant to wind damage than equivalent swing gates.`,
      },
      {
        heading: 'Slope, Cost, and the Final Decision',
        body: `Driveway slope is the third major variable. Swing gates opening inward on a driveway that slopes downward from the road must clear the rising driveway surface as they open. Swing gates with articulated arm motors can compensate for gradient better than underground motors.\n\nSliding gates have their own gradient challenge: the ground track must be level even if the driveway surface is not. Cantilever sliding systems — which suspend the gate above the ground without a surface track — eliminate this requirement entirely.\n\nOn cost, swing gates are consistently less expensive to install than sliding gates for equivalent openings. The absence of a ground track, simpler motor mounting, and lower groundwork requirements all contribute to a swing gate installation typically costing £800 to £2,000 less than a sliding gate of the same material and quality.\n\nA free site survey is the quickest route to a definitive recommendation. We will measure, assess, and advise on the right system for your specific driveway. Leave your number in the form above and we will arrange a survey at your convenience.`,
      },
    ],
    faqs: [
      { question: 'Can swing gates open outward onto the pavement in London?', answer: 'Generally no. UK regulations prevent gates from opening outward over a public footpath or highway. Swing gates on London residential properties almost always open inward. If inward opening is not possible due to driveway geometry, sliding gates or bi-folding gates are the practical alternative.' },
      { question: 'How much wall space do I need for a sliding gate?', answer: 'For a tracked sliding gate, you need clear wall or fence space equal to the gate width plus approximately 500mm on one side of the opening. For a 4-metre gate, that means approximately 4.5 metres of unobstructed boundary.' },
      { question: 'Are sliding gates more secure than swing gates?', answer: 'Both types offer equivalent security when properly specified. Sliding gates have one advantage: they cannot be forced inward by a vehicle ramming from outside, as the gate must travel laterally rather than hinging.' },
      { question: 'Which type of gate is cheaper to automate?', answer: 'Swing gates are generally less expensive to automate than sliding gates. A pair of swing gates with ram-arm motors typically costs £1,200 to £2,200 to automate. A sliding gate with rack-and-pinion motor and track typically costs £1,500 to £2,800, plus any groundwork for the track bed.' },
    ],
    relatedServiceSlug: 'electric-swing-gates',
    relatedGuides: ['aluminium-vs-wooden-driveway-gates', 'electric-driveway-gates-cost-london'],
  },

  {
    slug: 'best-intercom-systems',
    title: 'The Best Intercom Systems for Electric Driveway Gates',
    metaTitle: 'Best Intercom Systems for Electric Gates | 2026 Guide',
    metaDescription: 'Compare the best video, GSM, and keypad intercom systems for London driveway gates. Secure your home with smart access control.',
    pillar: 'Comparison & Buying',
    excerpt: 'Video, audio, GSM, or keypad — there are more intercom options than ever for London driveway gates. This guide compares the main systems so you can choose the right access control for your property and lifestyle.',
    readingMinutes: 8,
    publishDate: '2026-02-14',
    featuredImage: '/images/gates/gate-swing-open-night-gold-lighting-drive.png',
    intro: 'An automated gate without a good intercom is only half a solution. The intercom system determines how you, your family, and your visitors interact with the gate every single day. This guide compares the main options for London residential properties in 2026.',
    sections: [
      {
        heading: 'Video vs Audio-Only Intercoms',
        body: `Audio-only intercoms were the standard for residential gate installations throughout the 1990s and 2000s. They remain a viable budget option today, with basic wired audio intercom systems available from £100 to £200 supply and fit. You hear the visitor, they hear you, you press a button to open the gate.\n\nThe limitation is obvious: you cannot see who is at your gate. Video intercoms have dropped dramatically in price and now represent the clear value choice at any budget above £300 for supply and installation. A basic wired video intercom with a gate-side camera, an indoor monitor with colour display, and gate release button costs £250 to £500 fitted. Mid-range systems with HD cameras, night vision, and motion detection start from £400 to £700 fitted.\n\nFor <a href="/services/automated-gate-systems/">secure gate installations in London</a>, video intercoms have become the default specification — the question is now which system type, not whether to include video.`,
      },
      {
        heading: 'GSM Intercoms vs Hardwired Systems',
        body: `A <a href="/blog/gsm-gate-openers-london/">GSM gate intercom</a> uses a SIM card and the mobile network to connect gate visitors to your smartphone, wherever you are in the world. The caller presses the gate button, your phone rings with a notification or call, and you answer it to see the camera feed and press a button on your phone screen to open the gate. No hardwired connection between the gate post and the house is required beyond power to the gate post unit.\n\nHardwired systems connect the gate camera and button to an indoor monitor via a dedicated cable. They are independent of any network, mobile signal, or internet connection. If the power is on and the cable is intact, the system works.\n\nThe best of both approaches is a combined system: a hardwired video intercom for indoor use at home, paired with a GSM module that routes calls to smartphones when the indoor monitor is not answered. This is increasingly the standard specification for London residential properties and costs £500 to £900 fitted for a quality combined system.`,
      },
      {
        heading: 'Smart Home Integration: Ring, Google Home, and Control4',
        body: `Smart home integration has become a significant consideration for London homeowners who are already using smart home platforms. <a href="https://en-uk.ring.com/" target="_blank" rel="noopener noreferrer">Ring</a> Video Doorbell products include gate-specific models designed to mount at gate posts and integrate with the Ring app ecosystem. If you already use Ring cameras or doorbells, a Ring gate intercom offers seamless integration.\n\nFor Google Home users, several intercom manufacturers offer Google Assistant integration, allowing voice commands to check who is at the gate and open it via a connected speaker. Control4 and other dedicated smart home automation platforms support deep integration with commercial-grade gate intercom systems.\n\nAccess control can be upgraded at any time — you do not need to install the full intercom system at the same time as the gate if budget is a constraint. Leave your phone number in the form above and we will call you back within 24 hours to discuss which intercom system suits your gate setup and smart home platform.`,
      },
    ],
    faqs: [
      { question: 'What is the best intercom system for an electric gate in London?', answer: 'For most London homeowners, a combined hardwired video intercom with GSM backup offers the best of both worlds — reliable indoor answering when at home, with smartphone app access when away. Brands such as Comelit, Hikvision, and Urmet all produce quality systems in this category.' },
      { question: 'Can I add an intercom to an existing electric gate?', answer: 'Yes. Intercoms can be retrofitted to any existing automated gate. We connect the intercom control board to the gate motor relay input. A power supply at the gate post is required. Most retrofits are completed in a day.' },
      { question: 'Do I need WiFi at my gate post for a smart intercom?', answer: 'Not necessarily. GSM-based systems use the mobile network rather than WiFi, so they only require a power supply and a mobile signal at the gate post.' },
      { question: 'How much does a video intercom cost to install on a gate in London?', answer: 'A basic wired video intercom costs £250 to £500 fitted. Mid-range systems with HD camera and night vision cost £400 to £700 fitted. Combined hardwired and GSM smart systems cost £500 to £900 fitted.' },
    ],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['swing-vs-sliding-gates', 'automation-kit-installation-prices'],
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
    slug: 'winter-gate-maintenance',
    title: 'The Ultimate Winter Maintenance Guide for Electric Gates',
    metaTitle: 'Winter Gate Maintenance | Protect Electric Gates in Freezes',
    metaDescription: 'Stop your electric gates from freezing or breaking down this winter. Follow our expert winter maintenance checklist for London homeowners.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'London winters are damp and cold — and that combination is hard on gate motors, tracks, hinges, and timber finishes. This maintenance checklist covers what to do before the cold hits and what to watch for during it.',
    readingMinutes: 7,
    publishDate: '2026-03-07',
    featuredImage: '/images/gates/gate-wrought-iron-open-misty-morning-manor.png',
    intro: 'Winter is the season that separates properly maintained gate systems from neglected ones. In London, the combination of intermittent frost, persistent damp, and sudden temperature drops creates specific failure patterns that are almost entirely preventable with the right preparation.',
    sections: [
      {
        heading: 'Why Cold Weather Is Hard on Gate Motors and Hydraulic Systems',
        body: `Gate motors and their associated hydraulic systems are sensitive to temperature in ways that most homeowners do not realise until a failure occurs. Hydraulic gate motors — common on older underground systems and some commercial installations — use hydraulic fluid to generate the force that moves the gate. As temperatures drop toward and below freezing, that fluid thickens. A fluid rated for operation to minus 15 degrees C that has not been changed in five years may begin to thicken at plus 5 degrees C, because degraded hydraulic fluid loses its cold-weather additives over time.\n\nModern 24V DC gate motors do not use hydraulic fluid, but they are not immune to cold. The lubricating grease in the motor gearbox thickens at low temperatures, increasing the load the motor must overcome on every cycle.\n\nThe <a href="https://www.metoffice.gov.uk/" target="_blank" rel="noopener noreferrer">Met Office</a> issues severe weather warnings for London that specifically flag conditions — heavy frost, freezing fog, and rapid temperature drops — that create elevated risk of <a href="/blog/gate-motor-humming-not-moving/">gate system failures</a>. Checking their site before a cold snap gives you time to prepare your gate system.`,
      },
      {
        heading: 'Lubricating Hinges, Racks, and Tracks Correctly',
        body: `The most important and most neglected aspect of winter gate maintenance is lubrication. For swing gate hinges, use a lithium-based grease rated for temperatures down to at least minus 20 degrees C. Spray lubricants are convenient but evaporate quickly — a proper grease applied with a brush to each hinge pin, working it into the barrel, will last through an entire winter and beyond.\n\nFor sliding gate racks and pinions, use a dedicated rack grease rather than a general-purpose spray. Rack grease is formulated to stay in place on a horizontal surface at low temperatures, where lighter lubricants run off. Apply it along the full length of the rack with a brush, then cycle the gate through two or three full open-close cycles to distribute it into the pinion teeth.\n\nFor sliding gate bottom wheels and track, clean the track thoroughly first — compacted grit, leaf debris, and mud all hold moisture that accelerates ice formation. After cleaning, a thin application of silicone spray along the track channel reduces ice adhesion. For professional <a href="/services/gate-repair-and-maintenance/">gate servicing in London</a>, our engineers carry a full range of winter-grade lubricants and apply them to manufacturer specification.`,
      },
      {
        heading: 'Checking Underground Motor Boxes for Drainage and Ice Risk',
        body: `Underground gate motors live in a cavity below the gate post — which, in a London winter with persistent rain followed by a freeze, is a potential ice trap. Water pooling in the motor cavity and then freezing expands against the motor housing, seals, and cable entry points.\n\nCheck the drainage of every underground motor box at least once before winter. Lift the cover and inspect the base of the cavity. There should be no standing water. Most well-installed motor boxes include a drain point at the base — check that it is clear and unobstructed. If you find standing water, bail it out and identify the ingress source.\n\nWinter engineer call-outs in London command a premium — overtime rates, extended travel times, and the disruption of an inoperable gate in freezing conditions all combine to make January the most expensive month for gate repairs. A preventative <a href="/blog/annual-gate-service-checklist-london/">winter service</a> booked now costs far less. Leave your phone number in the form above and our team will arrange a fast callback to book you in before the cold arrives.`,
      },
    ],
    faqs: [
      { question: 'Why does my electric gate slow down or stop in cold weather?', answer: 'Cold thickens the lubricating grease in the motor gearbox and on the gate drive components, increasing the resistance the motor must overcome. If the gate also has stiff hinges or debris in the track, the combined resistance can exceed the motor output. Correct lubrication with winter-grade grease before the cold sets in prevents this in the majority of cases.' },
      { question: 'Can frost damage my gate motor permanently?', answer: 'Frost damage to gate motors is most common in underground motor installations where water has pooled in the motor cavity. Freezing water expands and can crack the motor housing, damage seals, and corrode the control board. Annual inspection and drainage checks before winter prevent most frost-related motor damage.' },
      { question: 'What lubricant should I use on my electric gate in winter?', answer: 'Use a lithium-based grease rated to at least minus 20 degrees C on hinge pins and pivot points. Use a dedicated rack grease on sliding gate racks. Silicone spray is suitable for sliding gate tracks and rubber seals. Avoid WD-40 or general-purpose light oils on structural moving parts.' },
      { question: 'How often should electric gates be serviced in London?', answer: 'Once per year minimum, ideally in autumn before the cold weather arrives. An annual service costs £120 to £200 in London and prevents the majority of cold-weather failures.' },
    ],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['electric-gate-running-costs'],
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
