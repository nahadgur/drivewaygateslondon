import { guideFeaturedImages } from './featuredImages';
import securityHub from './security-hub.json';

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
  useMetaTitle?: boolean;
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
  { ...securityHub, pillar: 'Safety & Compliance' },

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
  "readingMinutes": 3,
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
    },
    {
      "heading": "Compare running costs without confusing voltage and consumption",
      "body": "<p>A label such as 24 V describes a voltage, not the annual electricity bill. Compare the input energy used by the complete installation and its actual operating pattern. If you are replacing equipment, ask whether the quoted consumption includes the controller, receiver, intercom and any backup charging.</p><p>Keep fixed ownership costs separate from electricity. A useful annual worksheet has distinct lines for energy, scheduled maintenance, connectivity or app services, and a repair allowance chosen for your own budget. Mark which amounts are quotations and which are assumptions. Do not turn a small calculated electricity cost into a claim that the entrance costs almost nothing to own.</p><p>If your household changes how it uses the gate, revise the cycle count and movement time in the example. If new always-on equipment is added, revise the idle demand too. Ask a competent person for suitable consumption information; do not open a control cabinet or insert an unsuitable measuring device to obtain it.</p>"
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
  "updatedDate": "2026-10-13"
},

  {
  "slug": "automation-kit-installation-prices",
  "title": "The Cost of Automating Existing Driveway Gates",
  "metaTitle": "The Cost of Automating Existing Driveway Gates | Driveway Gates London",
  "metaDescription": "Build a retrofit budget that includes the gate assessment, supports, power, controls and completed-system checks.",
  "pillar": "Pricing & Costs",
  "excerpt": "Build a retrofit budget that includes the gate assessment, supports, power, controls and completed-system checks.",
  "readingMinutes": 7,
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
      "body": "<p>If repair and alteration costs are substantial, request a replacement option with equivalent appearance and controls. Compare the complete scope, disruption and upkeep rather than assuming retrofit must be cheaper.</p><p>Use the <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a> alongside our <a href=\"/services/gate-automation-kits/\">gate automation service</a>. Send photographs, approximate dimensions and known faults when you discuss your entrance.</p><p>Further reading: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\">HSE guidance on complete-system assessment</a>.</p>"
    },
    {
      "heading": "Compare surface-mounted and underground operators",
      "body": "<p>The operator type affects both the appearance of the gate and the installation work. Compare an above-ground linear or articulated-arm proposal with an underground proposal using the actual hinge and support arrangement. Ask for a drawing showing mounting positions, movement and access for servicing. Product names alone do not establish that either arrangement will fit.</p><div class=\"table-scroll\" role=\"region\" aria-label=\"Retrofit operator cost drivers\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Option</th><th scope=\"col\">Work to establish</th><th scope=\"col\">Questions for the quotation</th></tr></thead><tbody><tr><td>Above-ground linear arm</td><td>Mounting geometry on the leaf and support, brackets, cable route and movement clearance.</td><td>Can suitable fixings be made to the existing structure, and what alterations are included?</td></tr><tr><td>Above-ground articulated arm</td><td>Space for the linked arm and suitable mounting on the support and gate.</td><td>Where does the mechanism move, and how will the surrounding area be assessed?</td></tr><tr><td>Underground operator</td><td>Foundation box, hinge relationship, excavation, drainage, cables and access to covers.</td><td>Who provides drainage and reinstates the driveway, and what remains visible?</td></tr><tr><td>Existing sliding gate drive</td><td>Condition of the gate, running gear, supports and compatible drive arrangement.</td><td>Which existing parts can remain and what needs repair before automation?</td></tr></tbody></table></div><p>Above-ground equipment can still require groundworks for supports or cables. Underground equipment can still leave covers and release fittings visible. Compare the documented site work rather than treating one option as excavation-free or the other as completely invisible.</p>"
    },
    {
      "heading": "Identify what a motor kit actually includes",
      "body": "<p>Ask for a component list tied to the supplier and model numbers. Depending on the offer, a kit may include operators, a controller, receivers or selected accessories. It may exclude the equipment and work needed to make your particular entrance suitable. Have the installer mark supplied, retained and separately priced items on the same list.</p><p>A pair of existing manual gates also needs consideration as a structure and as a moving entrance. Photograph the hinges, supports and gate from safe positions, and send the approximate leaf dimensions. Tell the contractor about sagging, rubbing, repairs or occasions when wind moved a leaf unexpectedly.</p><p>Do not use a catalogue maximum weight as the only selection rule. Ask the contractor how the proposed equipment suits the gate dimensions, mounting geometry, infill, exposure and operating demand. The answer should identify the equipment being priced, not just promise a powerful motor.</p>"
    },
    {
      "heading": "Power routes and driveway work can change the budget",
      "body": "<p>Draw the approximate route from the entrance towards the available supply and flag finished paving, steps, walls, trees and inspection covers along it. The electrician and gate installer need to establish the actual electrical requirements and cable route. A photograph can help an initial discussion but cannot confirm the condition or suitability of the supply.</p><p>If you plan a new driveway, agree ducts, foundations and finished levels before the paving programme starts. Name who provides each part of the work and who checks the interfaces between trades. Include making good even where an existing route may be reusable; the quote should say what happens if inspection finds that it cannot be used.</p><p>For underground operators, request a specific drainage proposal for the site. Ask how covers remain accessible after resurfacing and how future equipment replacement would be approached. These are ownership questions as well as installation costs, because the cheapest initial arrangement may be inconvenient to maintain.</p>"
    },
    {
      "heading": "Use a quotation worksheet instead of a generic price band",
      "body": "<p>Create one row for each work package and one column for each proposal. Copy the contractor’s description and price into the worksheet without converting an allowance into a fixed amount. Leave an item marked not stated until the contractor clarifies it. That makes omissions visible before a deposit is agreed.</p><p>Separate the base installation from choices such as a different intercom, extra remotes or an additional pedestrian entrance. Record ongoing charges beside the features they support. A smartphone option may involve different ownership and connectivity arrangements from a fixed indoor answering point.</p><p>Check payment stages, quotation validity, VAT treatment and how variations require approval. Ask what happens if concealed damage or unsuitable foundations emerge after work starts. Avoid assuming an advertised equipment price includes fitting, electrical work, disposal or complete-system checks.</p><p>Where two proposals differ materially, ask for a comparable alternative rather than negotiating an unexplained total. A contractor who includes replacing damaged supports is pricing a different job from one who assumes that the existing supports can remain.</p>"
    },
    {
      "heading": "Three retrofit scopes to discuss with the installer",
      "body": "<p>For sound gates with suitable supports, the main question may be the operator arrangement and the work needed to connect, protect and commission the entrance. Ask the installer to confirm the condition and list retained components. Treat this as a possible scope, not an assurance that your own manual gates are ready.</p><p>For gates that sag or scrape, separate the repair proposal from automation. Ask what the repair would achieve, how the result would be assessed and whether further alterations remain necessary. A motor should not become the explanation for forcing a poorly moving gate through its travel.</p><p>For an entrance that needs major support work and new controls, compare a complete replacement using an equivalent design brief. Retaining the leaves may still be worthwhile for appearance or conservation reasons, but the quotation should show the cost and limitations of that choice.</p><p>These examples explain why a useful budget begins with a scope. Once the contractor has surveyed your gate, request a written proposal you can compare against the alternative, with the same finish, controls, safe operation and handover requirements.</p>"
    },
    {
      "heading": "Agree the changeover day",
      "body": "<p>Ask how long the entrance is expected to be unavailable and where vehicles should be parked during the work. Confirm access for residents, pedestrians and deliveries, especially if the gate is the only entrance. Programme electrical and driveway work around the installation rather than leaving responsibility unclear between contractors.</p><p>Before paying the final balance under your agreed terms, request the documented checks, user instructions and demonstration included in the quotation. Identify who will deal with any incomplete item and when it is expected to be resolved. Keep model numbers, settings records supplied for the owner and warranty documents together.</p><p>If the installer discovers work outside the agreed scope, request the reason, revised price and effect on the programme before authorising it. That is more useful than trying to compare an unexpectedly enlarged retrofit with an earlier equipment-only estimate.</p>"
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
  "updatedDate": "2026-10-13"
},

  {
  "slug": "aluminium-vs-wooden-driveway-gates",
  "title": "Aluminium vs Wooden Driveway Gates",
  "metaTitle": "Aluminium vs Wooden Driveway Gates | Driveway Gates London",
  "metaDescription": "Compare timber, painted aluminium and wood-effect finishes by appearance, construction, upkeep and complete installation scope.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare timber, painted aluminium and wood-effect finishes by appearance, construction, upkeep and complete installation scope.",
  "readingMinutes": 7,
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
      "body": "<p>Put the same opening dimensions, infill, finish, supports, automation and access controls into both quotations. Include removal of the old entrance, power, groundworks, VAT and reinstatement. This gives you a useful comparison without relying on a universal lifespan or percentage saving.</p><p>Explore <a href=\"/services/wooden-driveway-gates/\">wooden driveway gates</a> and <a href=\"/services/aluminium-driveway-gates/\">aluminium gates</a>. For modified timber, read our <a href=\"/blog/accoya-wood-gates-london/\">Accoya guide</a> and ask for the proposed product terms. Then discuss your entrance.</p>"
    },
    {
      "heading": "A practical material comparison",
      "body": "<div class=\"table-scroll\" role=\"region\" aria-label=\"Aluminium and timber gate comparison\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Decision</th><th scope=\"col\">Timber</th><th scope=\"col\">Aluminium</th></tr></thead><tbody><tr><td>Appearance</td><td>Natural grain and variation, with the chosen species, board pattern and finish.</td><td>Painted or wood-effect finish, with profiles and joints that vary by range.</td></tr><tr><td>Construction</td><td>Ask about the frame, joints, board fixing, moisture management and fittings.</td><td>Ask about frame sections, infill attachment, joints, coating and fittings.</td></tr><tr><td>Care</td><td>Obtain the specified cleaning and coating care for the wood and exposure.</td><td>Obtain cleaning, coating inspection and hardware care instructions.</td></tr><tr><td>Damage and repairs</td><td>Ask how damaged boards, joints and finishes could be repaired.</td><td>Ask whether panels can be replaced and how finish repairs are handled.</td></tr><tr><td>Automation</td><td>Assess the complete gate, dimensions, supports and operating geometry.</td><td>Apply the same complete-system assessment to the proposed design.</td></tr><tr><td>Warranty</td><td>Separate timber, fabrication, finish, fittings and installation terms.</td><td>Separate coating, fabrication, fittings and installation terms.</td></tr></tbody></table></div><p>Use the matrix to compare actual products. The terms wooden and aluminium cover many constructions and finishes. Neither material name gives a reliable installed price, security rating or guaranteed service life for the complete entrance.</p>"
    },
    {
      "heading": "Choose the board pattern before deciding on colour",
      "body": "<p>A full boarded surface, spaced slats and an open upper section give different views through the entrance. Look from the pavement towards the house and from the house towards approaching visitors. Decide what needs screening and where visibility remains useful. Compare the rear face too, because that is the view you may see most often.</p><p>Ask for a drawing showing board widths, spacing, frame edges and the relationship between the driveway gate and any pedestrian gate. A narrow side gate may use a different arrangement of boards even when the finish matches. Check whether those differences are acceptable before fabrication.</p><p>For wood-effect aluminium, request a sample large enough to reveal repeating grain and the treatment of corners and ends. For timber, ask what variation to expect between boards and what the selected finish will look like after weathering. A small online colour swatch cannot settle those decisions.</p><p>For a period property, start with its actual boundary details rather than a rule that every older house must have timber or ornate metalwork. Where controls apply, discuss the proposed material and appearance with the relevant adviser before ordering. A convincing timber effect does not itself establish planning acceptability.</p>"
    },
    {
      "heading": "Construction matters as much as the surface",
      "body": "<p>Ask the fabricator to explain how the frame supports the infill and where the hinges or running gear attach. Request the details that matter for your chosen width and height. If automation is proposed, have the gate supplier and installer agree the arrangement instead of treating a motor kit as an unrelated addition.</p><p>Discuss solid infill and wind exposure together. A gate made from a lighter material still presents a surface to the wind, and the supports and equipment need assessment for the actual design. Avoid substituting an assumed material advantage for a measured specification.</p><p>Look for a written approach to drainage and moisture around joints, board ends and fittings. Ask how the selected hardware suits the material and exterior location. These questions help compare the proposed workmanship without assuming that every gate from one material has the same construction.</p><p>If you want to keep existing posts or brick piers, include their assessment in both material quotations. A change of leaf material does not establish that the old supports or hinges are suitable for the new entrance.</p>"
    },
    {
      "heading": "Budget for the upkeep you can realistically provide",
      "body": "<p>Ask each supplier for a care sheet before you accept the quotation. It should identify the permitted cleaning products, coating inspections and any specialist work. Consider access to both faces of the gate, nearby planting and the time or contractor help you are willing to allow for upkeep.</p><p>Decide whether you want timber to retain a particular colour or are comfortable with the appearance allowed by the chosen finish system. Record that preference when discussing coatings. Do not rely on a universal recoating interval taken from another species, finish or exposure.</p><p>For a coated aluminium gate, ask how to deal with a scratch, damaged edge or impact. Establish whether the supplier offers repair materials, replacement boards or a refinishing service, and request terms rather than assuming those services are included. Hardware and automation still require their own care.</p><p>For both materials, keep cleaning and service records where the terms require them. Ask who deals with a problem involving more than one supplier, such as movement that damages a finish. A long material warranty and a practical route to resolving an installation problem are different things.</p>"
    },
    {
      "heading": "Compare three choices using the same entrance brief",
      "body": "<p>If your priority is natural grain and you accept the specified care, compare suitable timber constructions and finishes. Ask about species or modified timber by name and request a sample of the proposed product. Include the fabrication and coating scope so the choice is more precise than wood versus metal.</p><p>If you prefer a uniform painted appearance, compare aluminium ranges against a painted timber alternative. Keep the infill, opening layout and finish colour consistent. Ask what changes at the joints, frame edges and reverse face; those details can explain why two apparently similar gates look different in person.</p><p>If you want a timber appearance with a different care routine, put wood-effect aluminium beside a real timber sample at the property. Make the decision in daylight and shade. Check the proposed posts and pedestrian gate at the same time so you are comparing a complete frontage.</p><p>Write down the non-negotiable requirements before requesting prices: usable opening, privacy, pedestrian access, acceptable upkeep and operation. Then compare the complete installed cost and written terms. You can choose on those practical differences without relying on invented lifespan figures or promises that any material needs no maintenance.</p>"
    },
    {
      "heading": "Ask what happens after accidental damage",
      "body": "<p>Consider a vehicle scraping one panel or a fitting being damaged during building work. Ask whether an individual component can be replaced, whether the original finish can be matched and who would carry out the repair. Availability and matching depend on the actual product, so request a supported repair route rather than a guarantee that a later replacement will be invisible.</p><p>Keep the approved drawing, colour reference, sample details and invoice. These records help a repair contractor identify the supplied gate and give you a clearer comparison if you later replace a pedestrian gate or extend the adjoining fence.</p>"
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
  "updatedDate": "2026-10-13"
},

  {
  "slug": "swing-vs-sliding-gates",
  "title": "Swing vs Sliding Driveway Gates",
  "metaTitle": "Swing vs Sliding Driveway Gates | Driveway Gates London",
  "metaDescription": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "readingMinutes": 7,
  "publishDate": "2026-02-07",
  "featuredImage": "/images/guides/swing-vs-sliding-gates.webp",
  "intro": "Compare parking clearance, side space, slopes and everyday access before choosing how your driveway gate opens.",
  "sections": [
    {
      "heading": "Measure the space each leaf occupies",
      "body": "<p>A swing leaf travels around its hinge. For an illustrative pair of equal leaves across a 3.5 m opening, each leaf is about 1.75 m wide before allowing for gaps and fittings. Its free edge traces an arc with roughly that radius, rather than the full 3.5 m opening width.</p><p>That arithmetic is not a safe parking distance. Hinge position, opening angle, vehicle shape, pedestrian routes and protective clearances determine the usable space. Ask for a scaled plan showing the gate in motion and your car parked.</p><figure><img src=\"/images/guides/swing-clearance-example.svg\" alt=\"Illustrative plan: two approximately 1.75 metre swing leaves across a 3.5 metre opening, with each leaf sweeping its own arc.\" width=\"600\" height=\"580\" loading=\"lazy\" style=\"width:100%;height:auto\"><figcaption>Illustration only. Not a site design or a minimum safe clearance.</figcaption></figure>"
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
    },
    {
      "heading": "Compare the layouts on the same drawing",
      "body": "<p>Put both proposals on a plan showing the same opening, house, parking positions and boundary. Mark the gate closed, partway through its movement and fully open. Comparing only the open position can miss a conflict that occurs halfway through the cycle. Ask the surveyor to distinguish the structural opening from the clear space available to a vehicle after fittings and stops are installed.</p><div class=\"table-scroll\" role=\"region\" aria-label=\"Swing and sliding layout comparison\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Question</th><th scope=\"col\">Swing gates</th><th scope=\"col\">Sliding gates</th></tr></thead><tbody><tr><td>Where does the gate go?</td><td>Each leaf sweeps around its hinges into an agreed opening area.</td><td>The panel travels sideways into a run-back area beside the entrance.</td></tr><tr><td>What must remain clear?</td><td>The full arc, equipment and protective clearances, including when cars are parked.</td><td>The whole travel path, supports, drive and protected run-back zone.</td></tr><tr><td>What site work matters?</td><td>Suitable posts or piers, hinge geometry, levels and operator mounting.</td><td>Suitable foundations and guides, plus the specified track or cantilever support.</td></tr><tr><td>What can make it awkward?</td><td>A short parking bay, rising ground or a walking route through the swept area.</td><td>A return wall, bin store, tree or another entrance occupying the storage side.</td></tr><tr><td>What should the quote show?</td><td>Leaf sizes, opening direction, operator type and complete site work.</td><td>Panel length, stored position, support design and complete site work.</td></tr></tbody></table></div><p>Neither column supplies a minimum clearance. Use the table to identify the measurements that are missing from your quotation. A design that fits on an empty plan still needs checking against the way people actually use the property.</p>"
    },
    {
      "heading": "Three parking situations worth sketching",
      "body": "<p>For a short driveway with parking straight ahead, show the rear or front of the car nearest the gate, including a tow bar or other projection. A swing layout may work if the vehicle can park beyond the complete swept area; a sliding layout may be worth comparing if that position is impractical. Do not turn the illustrative leaf-radius calculation into a parking instruction.</p><p>For two cars parked side by side, draw both vehicles and their doors open. A gate that avoids one car can still obstruct access beside the other. Show how somebody gets from each parking space to the front door without stepping into the moving gate area. Include the position used when unloading shopping or helping a child out.</p><p>For a narrow approach or tight turn, include the vehicle arriving from the street as well as its final parking position. A wider gate opening may help one part of the manoeuvre while leaving another corner constrained. Ask the surveyor to assess your actual vehicle and approach; a catalogue gate width alone cannot settle the turning question.</p><p>These are layout examples rather than surveyed installations. Bring photographs of normal parking to the appointment so the drawing reflects everyday use instead of an unusually tidy, empty driveway.</p>"
    },
    {
      "heading": "Wind exposure, privacy and the gate design",
      "body": "<p>Discuss the amount of solid infill together with the location of the entrance. An exposed corner plot and a sheltered courtyard present different conditions. Give the installer information about strong gusts you have experienced, damage to earlier fittings and any planned removal of nearby screening. Ask how the proposed leaves, supports and operator suit that exposure.</p><p>Do not choose sliding solely because somebody calls it windproof, or fit a larger swing motor to compensate for unexplained resistance. The design needs to account for the complete assembly. A more open infill may deserve comparison where privacy requirements allow, but it still needs a site-specific assessment.</p><p>View the closed gate from inside and outside before committing to a privacy design. Consider visibility of visitors, headlights, the house frontage and any gap beside the stored sliding panel. Ask the drawing to show fencing or guarding required around the movement area, because those details also affect the finished appearance.</p>"
    },
    {
      "heading": "Plan walking access and breakdown arrangements",
      "body": "<p>Decide whether pedestrians will use the vehicle entrance or a separate gate. Mark the intercom or keypad where a visitor can reach it without standing in the gate path. Show the route for a pushchair, wheelchair, bicycle and wheelie bin where relevant. A convenient vehicle opening can still leave an awkward daily walking route.</p><p>Ask the installer to explain access during a power cut or a mechanical fault before choosing the layout. Record who can operate the documented release, where instructions and keys will be kept, and how a released leaf will be controlled. A battery option should come with a defined supported configuration and maintenance arrangements.</p><p>For shared driveways, agree these arrangements with the people using the entrance. Discuss how work and future servicing can happen while residents still need access. Keep the access-control choice separate from the physical gate layout until both parts of the proposal have been checked together.</p>"
    },
    {
      "heading": "Compare installation and ownership costs",
      "body": "<p>Ask both contractors to price an equivalent opening, finish and access-control brief. Separate gate fabrication, supports, operator equipment, power, excavation, drainage, protective measures and reinstatement. An inexpensive leaf can sit within a costly site project, while an existing suitable support or cable route may change the balance between proposals.</p><p>Record what each quotation excludes and which items remain allowances until inspection. Include waste removal, disruption to paving, access for installation equipment and any work by another trade. Ask who coordinates the finished levels if a driveway contractor is working at the same time.</p><p>Look beyond the initial total to the maintenance access, replacement-part support and finish care you are agreeing to. Request the service scope and written warranty terms for each proposal. There is no universal cost difference that makes one opening style the right choice for every London property.</p>"
    },
    {
      "heading": "Bring these details to a survey",
      "body": "<p>Prepare photographs looking towards the gate and along both sides of the boundary. Add approximate opening dimensions, the usual parking arrangement and any planned change to the driveway. Identify drains, inspection covers and entrances that must remain accessible. Tell the surveyor whether you need a matching pedestrian gate, particular privacy or retained brick piers.</p><p>Ask for the recommended layout and at least one feasible alternative, with the reasons for rejecting any option that will not fit. Keep the resulting plan with the quotation so changes in panel size, supports or opening direction receive another check before manufacture.</p>"
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
  "updatedDate": "2026-10-13"
},

  {
  "slug": "best-intercom-systems",
  "title": "Choosing an Intercom for Your Driveway Gate",
  "metaTitle": "Choosing an Intercom for Your Driveway Gate | Driveway Gates London",
  "metaDescription": "Compare audio, video, wired, IP and GSM gate intercoms, including retrofit compatibility, smartphone access, installation costs and handover checks.",
  "pillar": "Comparison & Buying",
  "excerpt": "Compare audio, video, wired, IP and GSM gate intercoms, including retrofit compatibility, smartphone access, installation costs and handover checks.",
  "readingMinutes": 7,
  "publishDate": "2026-02-14",
  "featuredImage": "/images/guides/best-intercom-systems.webp",
  "intro": "Compare audio, video, wired, IP and GSM gate intercoms, including retrofit compatibility, smartphone access, installation costs and handover checks.",
  "sections": [
    {
      "heading": "Decide where you want to answer visitors",
      "body": "<p>List who should receive a call and whether they need an indoor monitor, phone calls, an app or a combination. Include anyone who does not use a smartphone. Decide what happens if nobody answers and how a visitor can leave a delivery.</p><p>Ask for a demonstration of the actual sequence: call, identify the visitor, grant entry and confirm that the gate has finished moving. Seeing a video does not necessarily mean the app reports the gate’s physical position.</p><p>Place the intercom decision within your <a href=\"/guides/driveway-home-security/\">driveway and home security plan</a>, so identifying callers, controlling entry and protecting parked vehicles work together.</p>"
    },
    {
      "heading": "Audio or video: choose the visitor information you need",
      "body": "<p>An audio intercom lets you speak to the visitor. A video intercom adds a view from its camera. Decide whether a conversation is enough for your entrance or whether you need to see a caller before granting access. Consider household members who find a small screen, quiet speaker or app notification difficult to use.</p><p>For video, ask to see the view from the proposed mounting position. A camera aimed at a driver may not give the same view of someone on foot. Discuss lighting after dark, glare, weather exposure and the position of a caller using a wheelchair. A specification such as camera resolution cannot answer those layout questions.</p><p>Decide whether you want live viewing only or recordings, missed-call images and notifications. Have the supplier identify which features the proposed configuration provides and any storage or subscription requirements. Avoid assuming that video entry automatically includes recording or confirms the position of the gate.</p>"
    },
    {
      "heading": "Wired, IP and mobile intercoms: compare the whole route",
      "body": "<p>Separate the connection between gate and house from the method used to answer a call. A system can have wired components and still use an app for some functions. Conversely, a wireless call path does not remove the need to supply and connect the equipment at the entrance.</p><div class=\"table-scroll\" role=\"region\" aria-label=\"Intercom connection comparison\" tabindex=\"0\"><table><thead><tr><th>Option</th><th>When to consider it</th><th>Confirm before ordering</th></tr></thead><tbody><tr><td>Dedicated wired indoor answering</td><td>You want a fixed handset or monitor for use at home.</td><td>Cable condition and route, compatible indoor units and whether local calls need any network service.</td></tr><tr><td>IP or app-based answering</td><td>You want supported network features or calls on selected phones.</td><td>Network coverage, account ownership, app support and which functions depend on an internet or cloud service.</td></tr><tr><td>Mobile-network entry</td><td>A suitable cellular service offers a practical call path at the entrance.</td><td>Device and SIM compatibility, voice or data requirements, signal and recurring charges.</td></tr></tbody></table></div><p>Some products combine indoor answering with phone access. Have the installer explain the configuration, including what still works if one connection fails. Calling a system hardwired does not establish that all of its features operate without the internet.</p>"
    },
    {
      "heading": "Compare the connection paths",
      "body": "<p>A wired indoor system can suit a household that wants a dedicated answering point. An IP system needs the specified network and power arrangements. A mobile-network intercom needs suitable coverage, device support and a compatible SIM plan.</p><p>Test the connection at the proposed gate position. A strong indoor Wi-Fi signal or a phone signal from another network does not prove the intercom will work there. Discuss what remains available during a broadband, mobile-service or power failure.</p>"
    },
    {
      "heading": "Smartphone apps and smart-home integration",
      "body": "<p>Write down the devices your household uses and the actions you need: answer a visitor, view the entrance, request opening or receive a missed-call notification. Ask the installer to demonstrate those actions on the proposed equipment. Support for one action does not establish support for all the others.</p><p>The <a href=\"https://pro.comelitgroup.com/product/app-comelit\">Comelit app documentation</a>, for example, lists entrance-panel calls and gate release among its functions, with manuals for named video-entry devices. Ask which functions the quoted hardware supports. That is why a brand name or an app logo is not enough to confirm compatibility with an existing installation.</p><p>For Ring, Google Home, Control4 or another existing system, use our <a href=\"/blog/smart-gate-integration-ring-nest-control4/\">smart-home integration checklist</a> to define the exact functions and equipment. Confirm who supports the connection after an update and how account access transfers when you change phone or sell the property. Do not assume a general-purpose video doorbell includes a supported gate-release interface.</p>"
    },
    {
      "heading": "Retrofit an intercom without replacing the whole entrance",
      "body": "<p>Start with the controller, existing answering equipment and any cable records. Ask the contractor to inspect the available route, supply and release connection. Reusing a cable or indoor monitor may be possible with a compatible system, but the proposal should identify the equipment it intends to keep and any limitations.</p><p>Tell the contractor whether you need full vehicle entry, pedestrian access or a separate pedestrian gate. Describe how each entrance should respond rather than asking for an extra relay without explaining its purpose. The team needs to assess the command interface alongside the safe operation of the gates.</p><p>If the current intercom rings but the gate does not open, record that symptom before deciding to replace the intercom. The calling function and release function need separate assessment. Buying a new entrance panel may not resolve a fault elsewhere in the system. This buying guide cannot diagnose that fault from the ringing sound alone.</p>"
    },
    {
      "heading": "Get the exact equipment and account terms",
      "body": "<p>Request model numbers, the proposed release interface, supported monitors and app requirements. Confirm recording options, retention, subscriptions, SIM charges and which account owns the system. Ask how to remove a former resident or contractor.</p><p>Product families contain different devices. Compare named configurations rather than assuming a brand guarantees compatibility. Our <a href=\"/blog/video-intercom-comelit-vs-hikvision/\">Comelit and Hikvision comparison</a> shows why the component list matters.</p>"
    },
    {
      "heading": "Compare installation costs and ongoing commitments",
      "body": "<p>A useful quotation names the entrance panel, camera if required, indoor answering devices, power equipment and connection to the gate. It also describes cable work, mounting, network setup, configuration, testing and reinstatement. Ask whether VAT is included and which items depend on the site survey.</p><p>Compare recurring costs on the same basis. List SIM charges, subscriptions, recording or cloud-storage plans and any paid support. Confirm what happens to each function if a subscription ends. Ask the supplier to distinguish equipment warranty from installation workmanship and explain how future visits will be charged.</p><p>There is no sound universal fitted price for every London entrance. An existing usable cable route and a new route through finished paving involve different work. For a meaningful comparison, send each contractor the same brief and request the same answering points and access functions, rather than comparing only the price of the outdoor panel.</p>"
    },
    {
      "heading": "Shared entrances, recordings and control of accounts",
      "body": "<p>For flats or a shared driveway, specify which household receives each call and who manages changes when residents move. Ask how visitors find the right name and how delivery access will work. Confirm the proposed capacity, user permissions and any management charges for the particular configuration.</p><p>If recording is proposed, discuss the camera view, whether audio is recorded, who can view footage, where it is stored and how long it is retained. Avoid treating a camera as permission to record neighbouring property without considering privacy. Agree the appropriate arrangements for the actual site before enabling recording.</p><p>Keep the property owner or responsible managing agent in control of administrator access and recovery details. Ask for a demonstration of removing a former resident without disrupting everyone else. Include residents who prefer a fixed answering point or cannot rely on a smartphone in the requirements from the start.</p>"
    },
    {
      "heading": "Plan installation and support",
      "body": "<p>Include cable routes, power, camera position, lighting, accessibility and weather exposure in the survey. Confirm who commissions the connection to the gate controller and checks operation of the complete entrance.</p><p>Compare <a href=\"/services/access-control/video-intercoms/\">video intercoms</a> and <a href=\"/services/access-control/gsm-phone-entry/\">phone entry</a>. Check <a href=\"https://www.ofcom.org.uk/phones-and-broadband/coverage-and-speeds/3g-switch-off\">Ofcom’s network-retirement guidance</a> before buying mobile-network equipment.</p>"
    },
    {
      "heading": "A handover demonstration worth asking for",
      "body": "<p>Use the visitor journey to check the installation with the contractor: a person arrives at the intended calling position, selects the right household, makes contact and receives a response. Then confirm the authorised release action and how users should observe or verify the entrance. Keep people outside the movement area during the demonstration.</p><ul><li>Check conversation quality and, where fitted, the camera view in the agreed conditions.</li><li>Demonstrate calls to each specified monitor or phone, including the unanswered-call arrangement.</li><li>Explain which functions depend on power, broadband, mobile service or an active account.</li><li>Show user management and provide the correct equipment instructions.</li><li>Record support contacts, renewal responsibilities and the agreed fallback access.</li></ul><p>A successful video call does not prove the whole powered gate is safe. The installer needs to check the completed entrance and its protective measures. Ask for the handover records and maintenance advice, and keep them accessible to the person responsible for the property.</p>"
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
    },
    {
      "question": "Can I keep an indoor monitor and answer on my phone?",
      "answer": "Some compatible configurations provide both. Ask for the exact monitor, network or gateway equipment, app requirements and unanswered-call behaviour rather than assuming every product in a range supports them."
    },
    {
      "question": "Can an intercom be fitted to my existing gates?",
      "answer": "A contractor needs to assess the gate controller, command interface, power and cable arrangements. Existing components may be reusable, but a universal retrofit promise would not establish compatibility."
    },
    {
      "question": "Will a video intercom show whether the gate is closed?",
      "answer": "A camera view and a gate-position signal are different features. Ask how the proposed system establishes and displays the actual gate state; do not assume an opening command confirms movement."
    }
  ],
  "relatedServiceSlug": "automated-gate-systems",
  "relatedGuides": [],
  "featuredImageAlt": "Installer showing a homeowner several driveway-gate intercom systems",
  "updatedDate": "2026-10-13"
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
      "body": "<p>Manual release arrangements differ between operators. Find the user instructions for your installed system and the release training provided at handover. Check the model from records or an identification label only where you can see it safely.</p><p>This guide cannot supply a universal key direction, cover-opening sequence or release position. If the instructions or key are missing, contact the installer or a competent gate engineer before attempting to release the mechanism.</p><p>Prepare your fallback access arrangements as part of a wider <a href=\"/guides/driveway-home-security/\">driveway and home security plan</a>, including keys, authorised users and the household’s response to a fault.</p>"
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
  "updatedDate": "2026-10-13"
},

  {
  "slug": "winter-gate-maintenance",
  "title": "Winter Gate Maintenance for London Homes",
  "metaTitle": "Winter Gate Maintenance for London Homes | Driveway Gates London",
  "metaDescription": "Prepare your entrance for wet and cold weather with safe observations, the right service records and a clear fault plan.",
  "pillar": "Maintenance & Troubleshooting",
  "excerpt": "Prepare your entrance for wet and cold weather with safe observations, the right service records and a clear fault plan.",
  "readingMinutes": 7,
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
    },
    {
      "heading": "Separate routine observations from repair work",
      "body": "<div class=\"table-scroll\" role=\"region\" aria-label=\"Winter gate care responsibilities\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Situation</th><th scope=\"col\">Useful homeowner information</th><th scope=\"col\">Work to discuss with the engineer</th></tr></thead><tbody><tr><td>A new scraping sound</td><td>When it happens and whether the gate has changed position.</td><td>Mechanical condition, alignment and the cause of contact.</td></tr><tr><td>Water after rainfall</td><td>Where water collects and when it disappears, observed from a safe place.</td><td>Drainage, enclosures, connections and any affected equipment.</td></tr><tr><td>Intermittent opening</td><td>Which normal control was used and what response occurred.</td><td>The relevant control route and complete gate behaviour.</td></tr><tr><td>Visible damage</td><td>Photographs from outside the movement area and known impact history.</td><td>Stability, repairs and whether the gate should remain out of use.</td></tr><tr><td>Unknown service history</td><td>Available invoices, model details and handover documents.</td><td>An initial assessment and a maintenance plan for the installation.</td></tr></tbody></table></div><p>A checklist helps you describe changes; it is not permission to inspect moving parts. Keep observations brief and use what you have already noticed during normal use. If the gate is behaving dangerously, arrange help instead of collecting a better video of the fault.</p>"
    },
    {
      "heading": "Rain, leaves and underground equipment",
      "body": "<p>Look at the whole entrance when discussing water problems. Tell the contractor about recent paving, blocked surface-water routes, new planting or a change in driveway levels. Photographs taken after rain can help explain where water gathers, provided you can take them without approaching exposed equipment or entering the movement area.</p><p>An underground operator may be out of sight, but its cover and maintenance access need to remain identifiable. Do not cover the area with planters, stored materials or a new surface without consulting the installer. Ask the engineer to check the drainage arrangement and explain what the owner may observe or clean under the supplied instructions.</p><p>Do not lift motor-box covers or bail water around electrical equipment as a general seasonal task. Report standing water and the symptoms you have seen. If the gate stops working after rain, tell the contractor whether other outdoor electrical equipment was affected, but leave electrical investigation to the appropriate competent person.</p><p>For leaves and debris, ask the installer to mark the areas the owner may safely maintain and the isolation steps that apply. A clear-looking track does not establish the condition of rollers, supports or equipment beneath a cover.</p>"
    },
    {
      "heading": "Frost and changes in movement",
      "body": "<p>Report hesitation, unusual noise or a leaf that stops short instead of assuming cold weather explains it. Include the approximate weather conditions and whether the same behaviour occurred when the weather was milder. The engineer needs the actual model and condition to decide what to check.</p><p>Do not use boiling water, a blowtorch or another improvised heat source to free a gate. Avoid pulling on a powered leaf or repeatedly commanding it against ice or another obstruction. Follow the fault arrangements for the installation and keep people clear while access is restricted.</p><p>Ask for the specified care products and application points if the manufacturer permits owner lubrication. A general instruction to grease all hinges, tracks and racks ignores differences between systems. Keep the written instructions with the service record so a future owner does not inherit an unexplained bottle of lubricant and a guessed routine.</p>"
    },
    {
      "heading": "Book a service against an agreed scope",
      "body": "<p>Give the contractor a list of changes since the previous visit. Mention building work, a vehicle striking the gate, replacement controls and any periods when the equipment was disconnected. Send the previous report so the engineer can see outstanding recommendations and parts already replaced.</p><p>Ask whether the quoted visit covers inspection only, routine servicing, adjustments, testing or fault diagnosis. Establish how additional work will be authorised and whether a further visit might be required for parts. Request the findings in writing rather than treating a service sticker as the complete record.</p><p>The maintenance interval should reflect the installed equipment and its use. A heavily used shared entrance and a lightly used private driveway need discussion on their own terms. Ask the contractor to explain its recommended interval and any circumstances that should prompt an earlier assessment.</p><p>Keep a simple owner log with the date, observed symptom, contractor contacted and outcome. Do not record guesses as confirmed diagnoses. For example, write that the gate stopped after heavy rain rather than declaring that the motor flooded unless the engineer has confirmed it.</p>"
    },
    {
      "heading": "Prepare the household for an interrupted entrance",
      "body": "<p>Before poor weather arrives, check who has the instructions and knows whom to call. Keep the correct release key accessible to authorised users without storing it where visitors can misuse it. Ask for a demonstration at a service visit if you do not understand the documented procedure for your gate.</p><p>Discuss practical alternatives for arriving home, leaving for work and receiving deliveries while the gate is unavailable. A separate usable entrance can make a breakdown less disruptive. Do not rely on a courier or neighbour to improvise a release because they have used a different model before.</p><p>If backup power is fitted, ask what it supports, how its condition is checked and what happens when its capacity is exhausted. Record any warning indication the user should recognise. A working phone app does not establish that the motors have power or that the gate can move safely.</p><p>After a repair, ask what caused the problem, what changed and whether there is any revised owner care. Keep the new information beside the existing instructions. Seasonal preparation is most useful when it leaves the household with a clear access plan and a contractor with a reliable fault history.</p>"
    },
    {
      "heading": "After a storm or an impact",
      "body": "<p>Check from a safe position whether the entrance looks different before returning to the usual routine. A fallen branch, leaning support or disturbed cable needs a report to the responsible contractor. Tell other household members about a restriction so somebody else does not operate the gate while you are arranging help.</p><p>Keep photographs and the timing of the event with the fault report. If another trade has been working nearby, share its description of the work with the gate engineer. Ask what must be repaired or checked before normal operation resumes, rather than assuming the absence of a visible obstruction resolves the problem.</p>"
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
  "updatedDate": "2026-10-13"
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
