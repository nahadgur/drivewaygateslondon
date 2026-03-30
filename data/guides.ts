export type GuidePillar =
  | 'Pricing & Costs'
  | 'Comparison & Buying'
  | 'Maintenance & Troubleshooting'
  | 'Safety & Compliance';

export interface GuideSection {
  heading: string;
  body: string; // prose paragraphs separated by \n\n — may contain inline HTML <a> tags
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
  intro: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlug?: string;
  relatedGuides?: string[];
}

export const guides: Guide[] = [

  // ── PRICING & COSTS ─────────────────────────────────────────────

  {
    slug: 'electric-driveway-gates-cost-london',
    title: 'The True Cost of Electric Driveway Gates in London (2026 Guide)',
    metaTitle: 'Electric Driveway Gates Cost London | 2026 Price Guide',
    metaDescription: 'Wondering how much electric driveway gates cost in London? Read our 2026 pricing guide covering materials, automation kits, and running costs.',
    pillar: 'Pricing & Costs',
    excerpt: 'A full breakdown of what electric driveway gates cost in London in 2026 — from basic timber swing gates to fully automated aluminium sliding systems — including installation, automation, and hidden London costs.',
    readingMinutes: 9,
    publishDate: '2026-01-10',
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: 'Electric driveway gates are one of the highest-impact upgrades a London homeowner can make — but prices vary enormously depending on material, mechanism, automation system, and the specific challenges of your site. This guide gives you a clear, honest picture of what automated gate installation prices look like in 2026, with no fluff.',
    sections: [
      {
        heading: 'Average Base Costs by Gate Material',
        body: `The gate itself — before any automation — is where you first encounter a significant price split. Timber swing gates are the most affordable entry point, with a pair of treated softwood gates for a standard 3.5-metre driveway starting from around £800 to £1,400 supply-only. Hardwood options in iroko or European oak start from £1,500 and can reach £4,000 or more for bespoke joinery.

Aluminium gates occupy the mid-to-premium range and are increasingly the material of choice for London driveways. A standard aluminium sliding or swing gate for a 4-metre opening typically costs £1,800 to £3,500 supply-only, with premium powder-coated finishes in RAL colours adding little to the price. The key advantage — beyond aesthetics — is that aluminium requires no ongoing treatment, making the lifetime cost considerably lower than timber.

Mild steel and wrought iron gates sit at the premium end of the market, particularly when bespoke ornate designs are involved. Fabricated steel gates for a London period property can range from £2,500 to £8,000 or more supply-only, depending on the complexity of the scrollwork and finishing specification. If you are comparing specific materials in detail, our guide to <a href="/guides/aluminium-vs-wooden-driveway-gates/">aluminium vs wooden driveway gates</a> covers the trade-offs in depth.

For properties across London, finding reliable <a href="/services/wooden-driveway-gates/">driveway gate installers in London</a> who can advise on material selection for your specific street, planning constraints, and property style is the essential first step.`,
      },
      {
        heading: 'The Cost of Automation Kits',
        body: `Automation adds significantly to the total, but the type of motor system you choose has a large impact on both the upfront cost and the visual result. There are three main motor types for residential gates in London.

Underground motors are the premium choice for swing gates. Mounted beneath the gate post cap and completely invisible when the gate is closed, they cost between £600 and £1,200 per motor for a quality unit from brands such as FAAC or CAME. A pair of underground motors for double swing gates therefore adds £1,200 to £2,400 to your installation — before fitting labour.

Ram-arm motors are the more affordable swing gate option. They mount on the back of the gate leaf and post, are visible when the gate is open, and cost between £300 and £700 per motor for a reputable branded unit. Labour to fit a set of ram-arm motors is typically £300 to £600, making this the most budget-friendly automation route for swing gates.

Sliding gate motors use a rack-and-pinion drive system running along the bottom of the gate. A quality sliding gate motor for a residential property costs £500 to £900 for the unit alone, with installation adding a further £400 to £800 depending on track length and groundwork requirements. The total automated gate installation prices for a sliding system — gate, motor, track, and labour — typically start from £3,500 and can reach £8,000 or more for premium materials and wide openings.`,
      },
      {
        heading: 'Hidden Costs Specific to London Properties',
        body: `London properties come with installation challenges that are not always apparent from a quote based on photographs alone. These hidden costs can add substantially to the final bill if they are not identified at the survey stage.

Groundworks are the most common source of budget overruns. Old concrete, rubble, buried drainage pipes, and cable runs beneath the driveway surface are all common in London properties and can require breaking out and reinstating. Groundwork day rates for skilled tradespeople in London sit at the upper end of national averages — platforms like <a href="https://www.checkatrade.com/" target="_blank" rel="noopener noreferrer">Checkatrade</a> show London electricians and groundworkers regularly charging £300 to £500 per day, compared to £200 to £350 elsewhere in the UK.

Electrical routing is another frequent addition. If the gate post is more than 10 metres from the property's consumer unit, a dedicated armoured cable run is required. In London properties where the cable must run under a path, patio, or driveway, the cost of routing and reinstating the surface can add £400 to £1,200 to the electrical element alone.

Planning and conservation area work adds time and sometimes professional fees. Properties in conservation areas or subject to Article 4 directions may require a planning application before any gate installation. Application fees and any required planning consultant input add to the overall project cost.`,
      },
      {
        heading: 'What a Realistic Total Looks Like in 2026',
        body: `Bringing together gate supply, automation, and installation, here are realistic budget ranges for common project types in London in 2026.

A pair of mid-range aluminium swing gates (3.5-metre opening) with ram-arm motors, basic intercom, and standard installation on a straightforward site: £4,500 to £6,500 fully fitted.

A premium hardwood or mild steel swing gate pair with underground motors, video intercom, and keypad entry: £7,000 to £12,000 depending on gate design complexity.

An aluminium sliding gate system (4-metre opening) with rack-and-pinion motor, GSM intercom, and safety sensors on a site with minimal groundwork: £5,500 to £9,000 fully fitted.

A bespoke wrought iron gate pair with underground motors, video intercom, and ANPR: £12,000 to £20,000 and above for premium fabrication and full access control integration.

Every London driveway is different. Ground conditions, access, power supply routing, planning constraints, and the specific property style all affect the final cost. The most accurate price you will get is from a free, no-obligation site survey — where an experienced installer measures up, assesses the ground conditions, and provides a written quote. Enter your phone number in the form above and one of our vetted London installers will call you back within 15 minutes to arrange yours.`,
      },
    ],
    faqs: [
      { question: 'How much do electric driveway gates cost in London on average?', answer: 'A fully automated driveway gate installation in London typically costs between £4,500 and £10,000 for a standard residential property, depending on gate material, opening width, motor type, and site conditions. Budget projects using softwood gates and surface-mounted motors can come in below £4,000, while premium bespoke installations with wrought iron, underground motors, and full access control can exceed £20,000.' },
      { question: 'Are aluminium gates cheaper than wooden gates in London?', answer: 'On initial supply cost, aluminium and good-quality hardwood gates are broadly comparable. However, aluminium gates have a significantly lower lifetime cost because they require no annual treatment, oiling, or repainting. Over a 10-year period, the maintenance cost of hardwood gates in London can add several hundred pounds per year, making aluminium the more cost-effective choice for most homeowners.' },
      { question: 'Do I need planning permission for electric gates in London?', answer: 'Gates under 1 metre tall adjacent to a highway, or under 2 metres elsewhere, are generally permitted development. However, London has a high concentration of conservation areas and Article 4 directions that remove permitted development rights in specific streets and boroughs. Always check with your local planning authority before installation — our borough planning guides cover this in detail for each London borough.' },
      { question: 'How long does an electric gate installation take in London?', answer: 'A standard residential electric gate installation takes 2 to 4 days from start to finish. Day one covers groundwork and post installation. Day two handles the gate fitting and motor mounting. Days three and four (where needed) cover intercom wiring, safety sensor fitting, and commissioning. Complex sites, bespoke gates with long fabrication lead times, or properties requiring planning consent will take longer.' },
    ],
    relatedServiceSlug: 'electric-sliding-gates',
    relatedGuides: ['electric-gate-running-costs', 'automation-kit-installation-prices', 'aluminium-vs-wooden-driveway-gates'],
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
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    intro: 'One of the most common questions we hear from London homeowners considering an automated gate is: "How much will it add to my electricity bill?" The answer is almost always — less than you think. Modern 24V gate motors are among the most efficient electrical devices in any household. This guide breaks down the real electric gate running costs so you can budget with confidence.',
    sections: [
      {
        heading: 'Standby Power vs Active Cycle Consumption',
        body: `An automated gate motor draws power in two very different modes. In standby — which is the vast majority of its operating life — a modern 24V residential gate motor consumes between 3 and 8 watts. This is comparable to an LED bulb and represents the power required to keep the control board active, the safety sensors live, and the system ready to receive a command.

During an active opening or closing cycle, power consumption rises to between 60 and 150 watts for a typical single motor, lasting for the 10 to 20 seconds the gate takes to complete its travel. A pair of motors on a double swing gate draws proportionally more during the cycle, but the cycle duration is the same.

Older 230V AC motors — common on gates installed before 2015 — consume significantly more in both modes. Standby consumption on older units can reach 20 to 40 watts, and cycle consumption can exceed 300 watts per motor. If your gate was installed more than a decade ago, upgrading to a modern 24V DC system may be worth considering purely on energy efficiency grounds — and our <a href="/services/automated-gate-systems/">automated gate installations in London</a> team can advise on what a system upgrade involves.`,
      },
      {
        heading: 'What Electric Gates Actually Add to Your Monthly Electricity Bill',
        body: `Let us do the maths for a typical London household with a modern 24V gate system opening and closing around 10 times per day — a reasonable assumption for a family home.

Standby consumption: 5 watts × 24 hours × 365 days = 43.8 kWh per year.

Active cycle consumption: 100 watts average × 20 seconds per cycle × 10 cycles per day × 365 days = 20.3 kWh per year.

Total annual consumption: approximately 64 kWh. At the current UK electricity unit rate — the <a href="https://energysavingtrust.org.uk/" target="_blank" rel="noopener noreferrer">Energy Saving Trust</a> reports the typical UK rate at around 24p per kWh as of 2026 — that works out to roughly £15 to £16 per year. Less than £1.50 per month.

For properties with a battery backup unit fitted alongside the motor — which stores charge and powers the gate during power cuts — add a small additional draw for the trickle-charging circuit, typically 1 to 3 watts constant. This adds no more than £2 to £3 per year to the running cost.`,
      },
      {
        heading: 'Annual Servicing and Maintenance Costs',
        body: `Electricity is the smallest element of the true annual running cost of an electric gate. The more significant ongoing cost is servicing.

A professional annual service from a London gate engineer typically costs between £120 and £200 for a standard residential system. This covers motor lubrication, safety sensor testing and calibration, hinge adjustment and greasing, track cleaning for sliding gates, intercom function test, battery backup check, and a general structural inspection of the gate and posts. Skipping the annual service risks voiding manufacturer warranties and turning small problems into expensive failures.

Repairs are the variable element. Minor fixes — sensor recalibration, remote reprogramming, replacement of a worn gate wheel — typically cost £80 to £250 all in. Major repairs such as motor replacement or control board failure cost £300 to £700 depending on the motor brand and parts availability. A well-serviced gate system from a reputable manufacturer should need no major repairs in the first 7 to 10 years of operation.

Over a 10-year period, a realistic total running cost budget for a London residential automated gate — electricity, annual servicing, and occasional minor repairs — is £2,000 to £3,500. Spread over the decade, that is £200 to £350 per year, or roughly £4 to £7 per week.`,
      },
      {
        heading: 'How Modern 24V Systems Compare to Older Motors',
        body: `If you have an older gate system installed before 2015, it is worth knowing that motor technology has advanced considerably. Modern 24V brushless DC motors are not only more energy-efficient — they are also quieter, smoother, and significantly more reliable than the 230V AC motors that dominated the market a decade ago.

The efficiency gain translates directly to running costs: a modern system might cost £16 per year in electricity where an older 230V system on the same gate costs £45 to £60. Over 10 years, that is a saving of £300 to £450 in electricity alone, before accounting for the reduced repair frequency of modern motor technology.

Many London homeowners with older gate systems are surprised to discover that a full motor and control board upgrade — fitting a modern 24V system to existing gates — costs far less than replacing the gate itself. If your current system is noisy, slow, or unreliable, this is often the most cost-effective route. Drop your phone number in the form above and our team will call back to discuss whether an upgrade makes financial sense for your system.',
      },
    ],
    faqs: [
      { question: 'How much electricity does an electric gate use per year?', answer: 'A modern 24V residential gate motor uses approximately 60 to 70 kWh per year for a typical London household with around 10 gate cycles per day. At current UK electricity rates of around 24p per kWh, this works out to roughly £15 to £17 per year — well under £2 per month.' },
      { question: 'Does leaving the gate on standby use a lot of electricity?', answer: 'No. A modern gate motor in standby draws only 3 to 8 watts — comparable to a low-energy LED bulb. Even if the gate were on standby continuously for a year, the cost would be under £10 at current electricity rates. The active cycle during opening and closing uses more power per second, but cycles are short and infrequent.' },
      { question: 'How often should electric gates be serviced?', answer: 'Once per year for residential systems. A standard annual service covers motor lubrication, safety sensor testing, hinge adjustment, intercom checks, and battery backup verification. It typically takes an hour and costs £120 to £200 in London. Annual servicing also keeps manufacturer warranties valid.' },
      { question: 'Is it worth upgrading from an old 230V gate motor to a new 24V system?', answer: 'Usually yes, if the existing gate structure is sound. Modern 24V motors are more efficient, quieter, smoother, and more reliable. The upgrade typically costs £800 to £1,800 depending on gate type and what existing infrastructure can be reused, and the energy and repair savings often recover this within 5 to 7 years.' },
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
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: 'Retrofitting automation to existing manual driveway gates is one of the most popular gate upgrade projects in London. It avoids the cost and disruption of replacing structurally sound gates entirely, and modern motors can be fitted to almost any gate type — timber, steel, or wrought iron — provided the gate and its hanging hardware meet the minimum structural requirements. Here is what the process costs and what affects the price.',
    sections: [
      {
        heading: 'Can Your Existing Gates Be Automated?',
        body: `Before any motor is specified, a site survey must establish whether your existing gates are suitable for automation. This is not a formality — it directly determines whether a retrofit is viable, and if so, which motor system is appropriate.

The critical factors are gate weight, hinge condition, and structural integrity. A pair of timber swing gates for a standard 3.5-metre opening typically weighs 80 to 150 kg total. Most modern residential swing gate motors can handle up to 300 kg per leaf, so weight is rarely the limiting factor for standard residential timber gates. Heavy bespoke wrought iron or steel gates are a different matter — very heavy designs may require commercial-grade motors or structural reinforcement of the posts.

Hinge condition matters because automation puts a continuous rotational load on hinges that manual operation does not. Worn, corroded, or loose hinges will fail quickly under motor load. Most retrofit projects include hinge replacement or upgrade as part of the specification. If you need <a href="/services/gate-automation-kits/">gate upgrades and maintenance in London</a>, our network includes specialists who assess hinges as part of every survey.

For sliding gates, the track bed condition is the primary concern. The gate must travel smoothly along its full run without binding, and the track must be level and debris-free. Track remediation, if needed, adds to the project cost.`,
      },
      {
        heading: 'Surface-Mounted Ram-Arm Motor Costs',
        body: `Ram-arm (or articulated arm) motors are the most affordable and straightforward automation option for swing gates. They mount on the back of the gate leaf and post, are visible when the gate is open, and require no excavation or groundwork beyond an electrical connection.

For supply and installation of a quality branded ram-arm motor system — from manufacturers such as <a href="https://www.bft-automation.com/en_GB/" target="_blank" rel="noopener noreferrer">BFT Automation</a>, CAME, or FAAC — expect to pay £1,200 to £2,200 for a pair of motors on double swing gates, fully installed and commissioned. This includes the control board, safety photocells, two remote controls, and basic programming.

Add-ons that most homeowners include at the same time: a basic audio intercom (£150 to £300), a GSM opener for phone-based gate control (£200 to £400), or a video intercom with smartphone app integration (£350 to £700 fitted). These are most cost-effectively added at the same time as the motor installation since the cable runs are already open.

Gate automation kit installation prices for a single motor on a single swing gate are roughly half the above figures, typically £700 to £1,200 fully fitted.`,
      },
      {
        heading: 'Underground Motor Costs',
        body: `Underground motors are the premium option for swing gates. Mounted in a waterproof housing beneath the gate post cap, they are completely invisible when the gate is closed — only the gate itself is visible, with no external motor housings or arm linkages.

The cost premium over ram-arm systems reflects the hardware quality and the additional installation work. A pair of underground motors from a quality manufacturer typically costs £2,200 to £3,800 for supply and installation, depending on the motor specification and any groundwork required to install the motor housings correctly in the post foundation.

Site conditions significantly affect underground motor installation costs. If the existing posts are set in substantial concrete with no access to the foundation, the installer may need to break out and reform the post base around the motor housing. On straightforward sites with accessible post bases, this work adds £200 to £400. On difficult sites, it can add considerably more.

A site survey is mandatory before any retrofit automation project is quoted. Retrofitting electric gates cost estimates provided without a site visit are unreliable — ground conditions, cable routing distances, gate weight, and hinge condition all materially affect the final price. Leave your phone number in the form above and our team will arrange a fast callback to discuss your specific project and book a free survey.`,
      },
    ],
    faqs: [
      { question: 'How much does it cost to automate existing gates in London?', answer: 'Retrofitting a pair of existing swing gates with ram-arm motors, safety photocells, and remotes in London typically costs £1,200 to £2,200 fully installed. Underground motor systems cost £2,200 to £3,800 for the same gate configuration. Adding a video intercom at the same time typically adds £350 to £700 to either option.' },
      { question: 'Can any manual gate be automated?', answer: 'Most structurally sound manual gates can be automated. The installer assesses gate weight, hinge condition, post integrity, and the available space for the motor system during the site survey. Gates that are rotten, heavily corroded, or poorly hung will need repair or replacement before automation is practical.' },
      { question: 'Do I need planning permission to add automation to existing gates?', answer: 'Adding a motor to existing gates does not normally require planning permission in itself — the gate already exists and its height and position are unchanged. The exception is if the automation requires new posts or changes to the gate structure that alter its appearance. Always check with your local planning authority if you are in a conservation area.' },
      { question: 'How long does a gate automation retrofit take?', answer: 'A standard retrofit — two motors, photocells, intercom, and remotes on an existing pair of swing gates — is typically completed in one day by an experienced installer. Underground motor installations may take two days if groundwork around the post base is required.' },
    ],
    relatedServiceSlug: 'gate-automation-kits',
    relatedGuides: ['electric-driveway-gates-cost-london', 'electric-gate-running-costs'],
  },

  // ── COMPARISON & BUYING ─────────────────────────────────────────

  {
    slug: 'aluminium-vs-wooden-driveway-gates',
    title: 'Aluminium vs. Wooden Driveway Gates: Which is Best for Your London Home?',
    metaTitle: 'Aluminium vs Wooden Driveway Gates | London Buyer's Guide',
    metaDescription: 'Choosing between aluminium and wooden driveway gates for your London home? Compare durability, maintenance, security, and costs.',
    pillar: 'Comparison & Buying',
    excerpt: 'Timber looks warmer. Aluminium lasts longer with zero maintenance. This guide gives you the full, honest comparison of aluminium vs wooden driveway gates so you can make the right call for your London property.',
    readingMinutes: 8,
    publishDate: '2026-01-31',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop',
    intro: 'The choice between aluminium and timber is the single most debated material decision in the London driveway gate market. Both materials have genuine strengths, and the right answer depends on your property style, how much time you want to spend on maintenance, and what your budget looks like over a 10-year horizon rather than just today. This guide gives you the honest picture on both.',
    sections: [
      {
        heading: 'The Classic Appeal of Hardwood Gates — and What London Weather Does to Them',
        body: `Hardwood driveway gates have an authenticity that no manufactured material fully replicates. The grain, the warmth, the weight of a well-made oak or iroko gate closing is genuinely different from the click of an aluminium panel. For period London properties — Victorian terraces, Edwardian semis, Georgian townhouses — a quality hardwood gate is architecturally appropriate in a way that aluminium often is not.

The practical question is what London's climate does to that hardwood over time. London's combination of damp winters, intermittent frost, and significant diurnal temperature variation is genuinely hard on timber. Untreated or under-maintained hardwood gates will check, crack at the joints, and begin to warp within three to five years of installation. Gate leaves that have warped enough to bind on the frame or drag on the ground are a common repair call-out.

The maintenance requirement to prevent this is real: most hardwood gate manufacturers recommend oiling or re-staining every 12 to 24 months depending on the wood species and gate aspect. West- and south-facing gates in exposed positions will need more frequent attention than sheltered north-facing ones. Iroko is the most tolerant of London's climate due to its natural oil content, making it the recommended hardwood for most London installations.

For properties where hardwood is the right choice — conservation areas, period homes, heritage settings — consider premium modified timbers. <a href="https://www.accoya.com/" target="_blank" rel="noopener noreferrer">Accoya</a> is a chemically modified radiata pine that is dimensionally extremely stable, carries a 50-year above-ground guarantee, and needs treatment only every three to five years. It is the benchmark for low-maintenance timber in London's climate. Our <a href="/services/wooden-driveway-gates/">bespoke wooden gates in London</a> include iroko, oak, and Accoya as standard options.`,
      },
      {
        heading: 'The Rise of Aluminium: Lightweight, Rust-Free, Zero Maintenance',
        body: `Aluminium driveway gates have moved from a niche product to the dominant residential gate material in London over the past seven years. The reasons are compelling. Aluminium does not rust. It does not warp. It does not need annual treatment. The powder coat finish is baked on at the factory and carries a manufacturer's guarantee of 20 to 25 years.

For a London homeowner who wants a gate that looks excellent, performs reliably, and requires nothing beyond an occasional wash, aluminium is the straightforward answer. Low maintenance driveway gates in London — genuinely low maintenance, not just "lower than wrought iron" — means aluminium.

Design options in aluminium have expanded considerably. Flat-face full-privacy panels, horizontal slat designs with adjustable gap widths, vertical bar styles with raked or flat tops, and wood-effect textured finishes are all available. The wood-effect finishes — embossed surface texturing combined with RAL colours in oak, mahogany, or walnut — are increasingly popular for homeowners who want the warmth of timber aesthetics with the durability of aluminium. At normal viewing distances, the difference from real timber is minimal.

The weight advantage matters for automation. An aluminium gate that replaces an equivalent timber design might weigh 30 to 50 per cent less. This allows smaller motors, lighter hinges, less stress on posts, and lower long-term wear on all automated components.`,
      },
      {
        heading: 'Security and Lifespan: How the Two Materials Compare',
        body: `Both aluminium and hardwood gates provide equivalent security for residential applications when properly hung and fitted. The security of a gate is determined primarily by its locking hardware, hinge specification, post foundation, and motor dead-lock function — not by the material of the gate itself. A well-specified aluminium gate with a quality underground motor dead-lock is more secure than a poorly fitted hardwood gate with basic surface-mounted hardware.

For lifespan, aluminium is the clear winner on a like-for-like maintained basis. A quality aluminium gate with a 25-year powder coat guarantee, properly maintained automation, and sound post foundations should last 40 years or more without structural degradation. A hardwood gate on the same installation — assuming excellent maintenance — might reach 25 to 30 years for a premium iroko gate, or 15 to 20 years for good-quality oak.

The hidden lifespan consideration is automation compatibility. Motors evolve, and compatibility with control boards can be an issue after 15 to 20 years. This affects both gate materials equally — it is a system consideration rather than a gate material one. Choosing motors from established brands with long parts availability commitments (FAAC, CAME, BFT) addresses this concern regardless of whether your gate is aluminium or timber.

If you are still unsure which material suits your specific property, design vision, and budget, our team can advise. Enter your phone number in the form above and one of our installation specialists will call back to discuss the options for your specific situation.`,
      },
    ],
    faqs: [
      { question: 'Are aluminium gates as strong as wooden gates?', answer: 'Yes. Modern aluminium gate profiles use hollow sections with internal reinforcement that match the rigidity of equivalent timber designs for residential applications. For security purposes, the hinge specification, locking hardware, and motor dead-lock function matter far more than the gate material itself.' },
      { question: 'How often do wooden gates need treating in London?', answer: 'Most hardwood gate manufacturers recommend oiling or re-staining every 12 to 24 months for London properties. South- and west-facing gates in exposed positions may need annual treatment. Premium modified timbers such as Accoya need treatment only every three to five years due to their superior dimensional stability.' },
      { question: 'Do aluminium gates look as good as wooden gates?', answer: 'Modern aluminium gates with wood-effect powder coat finishes are visually very close to real timber at normal viewing distances. For contemporary and modern architectural styles, aluminium is arguably the superior aesthetic choice. For traditional period properties in conservation areas, authentic hardwood or wrought iron may be preferred by the planning authority.' },
      { question: 'Which is cheaper — aluminium or wooden gates?', answer: 'On initial supply cost, mid-range aluminium and good-quality hardwood gates are broadly comparable. Over a 10-year period, aluminium is typically cheaper when maintenance costs are included, as it requires no oiling, staining, or repainting. Premium modified timbers like Accoya close the maintenance gap considerably.' },
    ],
    relatedServiceSlug: 'aluminium-driveway-gates',
    relatedGuides: ['swing-vs-sliding-gates', 'electric-driveway-gates-cost-london'],
  },

  {
    slug: 'swing-vs-sliding-gates',
    title: 'Swing vs. Sliding Gates: The Ultimate Buyer's Guide',
    metaTitle: 'Swing vs Sliding Gates | Which is Best for London Driveways?',
    metaDescription: 'Short on space? Find out whether swing gates or sliding gates are better for your London property based on driveway size, slope, and security.',
    pillar: 'Comparison & Buying',
    excerpt: 'Swing gate or sliding gate? The answer depends on your driveway length, slope, available wall space, and budget. This guide covers every practical variable so you can make the right decision for your London property.',
    readingMinutes: 8,
    publishDate: '2026-02-07',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop',
    intro: 'The choice between swing and sliding gates is the single most important decision in a driveway gate project, and it is determined almost entirely by the physical characteristics of your driveway — not by aesthetic preference. Get this wrong and you either end up with a gate that cannot open safely, or one that costs significantly more than necessary. This guide walks through every practical variable.',
    sections: [
      {
        heading: 'Space Requirements: Why London Driveways Often Favour Sliding',
        body: `The defining constraint for swing gates is clearance. A pair of swing gates opening inward onto a 3.5-metre driveway require each gate leaf to swing through a 90-degree arc — meaning the car on the driveway must be parked at least 3.5 metres back from the gate line for the gates to open fully. On a standard London terrace or semi-detached property with a 4 to 6 metre driveway, this can make swing gates impractical without precise parking discipline from every driver in the household.

Sliding gates eliminate this problem entirely. A sliding gate moves laterally along the boundary wall or fence, opening a full-width passage without encroaching on the driveway space at all. The trade-off is that you need clear, unobstructed wall space equal to the gate width alongside the opening — if your driveway is 4 metres wide, you need approximately 4.5 metres of clear wall to one side for the gate to retract into.

For short London driveways — which <a href="https://www.planningportal.co.uk/" target="_blank" rel="noopener noreferrer">UK Planning Portal</a> guidance notes are common on permitted development properties in urban areas — sliding is often the only viable mechanised option. If you are considering <a href="/services/electric-sliding-gates/">electric sliding gates in London</a>, our team can assess whether your boundary wall configuration is suitable for a standard tracked or cantilever system.

Best gates for short driveways: sliding, without question, once the driveway depth drops below 3 metres or the wall space alongside the opening is readily available.`,
      },
      {
        heading: 'Wind Resistance: A Factor Many London Homeowners Overlook',
        body: `Wind loading is a genuine practical consideration for solid-panel driveway gates in London, and it affects swing and sliding designs very differently.

A pair of solid swing gates on a corner plot or exposed position acts precisely as a sail when wind hits the panels broadside. The wind force is transmitted directly through the gate leaf to the hinges and posts. On a fully open gate in a 40 mph gust, the loading on hinge pins and post bases is substantial. Poorly specified posts or under-rated hinges will show the damage within one or two winters.

Sliding gates experience wind loading differently. When open, the gate is retracted along the boundary wall, where it is partially sheltered. When closed, wind loading is transmitted to the gate guide, track, and motor — systems that are designed to handle the loading in their rated specification. A well-specified sliding gate system is generally more resistant to wind damage than equivalent swing gates because the force path through a sliding gate is better managed structurally.

For both gate types, timber and aluminium slat designs — with gaps between the slats that allow wind to pass through — are significantly more wind-tolerant than solid-panel designs. If your property is exposed or on a corner plot, a slatted design will impose considerably lower loads on the gate hardware regardless of whether it swings or slides.`,
      },
      {
        heading: 'Slope, Cost, and the Final Decision',
        body: `Driveway slope is the third major variable. Swing gates opening inward on a driveway that slopes downward from the road must clear the rising driveway surface as they open — which limits how low the gate can hang without dragging, and may require the gate to be set higher than aesthetically ideal. Swing gates with articulated arm motors can compensate for gradient better than underground motors, which work best on level ground.

Sliding gates have their own gradient challenge: the ground track must be level even if the driveway surface is not. This typically requires the installer to form a level concrete or block-paved track bed across the driveway entrance, which adds groundwork cost. Cantilever sliding systems — which suspend the gate above the ground without a surface track — eliminate this requirement entirely, at the cost of additional hardware complexity and price.

On cost, swing gates are consistently less expensive to install than sliding gates for equivalent openings. The absence of a ground track, the simpler motor mounting, and lower groundwork requirements all contribute to a swing gate installation typically costing £800 to £2,000 less than a sliding gate of the same material and quality level.

The right answer for your property depends on driveway depth, available wall space, gradient, and budget. A free site survey is the quickest route to a definitive recommendation — our installers will measure, assess, and advise on the right system for your specific driveway. Leave your number in the form above and we will arrange a survey at your convenience.`,
      },
    ],
    faqs: [
      { question: 'Can swing gates open outward onto the pavement in London?', answer: 'Generally no. UK regulations prevent gates from opening outward over a public footpath or highway. Swing gates on London residential properties almost always open inward onto the driveway. If inward opening is not possible due to driveway geometry, sliding gates or bi-folding gates are the practical alternative.' },
      { question: 'How much wall space do I need for a sliding gate?', answer: 'For a tracked sliding gate, you need clear wall or fence space equal to the gate width plus approximately 500mm on one side of the opening. For a 4-metre gate, that means approximately 4.5 metres of unobstructed boundary. Cantilever systems need slightly more space — around 1.2 times the gate width.' },
      { question: 'Are sliding gates more secure than swing gates?', answer: 'Both types offer equivalent security when properly specified. Sliding gates have one advantage: they cannot be forced inward by a vehicle ramming the gate from outside, as the gate must travel laterally rather than hinging. For anti-ram applications, a sliding gate on a quality track with a motor dead-lock is harder to force than an equivalent swing gate.' },
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
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: 'An automated gate without a good intercom is only half a solution. The intercom system determines how you, your family, and your visitors interact with the gate every single day. Choosing the right system means understanding how you actually use your gate — not just what features sound impressive on a spec sheet. This guide compares the main options for London residential properties in 2026.',
    sections: [
      {
        heading: 'Video vs Audio-Only Intercoms',
        body: `Audio-only intercoms were the standard for residential gate installations throughout the 1990s and 2000s. They remain a viable budget option today, with basic wired audio intercom systems available from £100 to £200 supply and fit. You hear the visitor, they hear you, you press a button to open the gate. Simple and reliable.

The limitation is obvious: you cannot see who is at your gate. For most London homeowners in 2026, this is a significant drawback. Video intercoms have dropped dramatically in price and now represent the clear value choice at any budget above £300 for supply and installation. A basic wired video intercom with a gate-side camera, an indoor monitor with colour display, and gate release button costs £250 to £500 fitted. Mid-range systems with HD cameras, night vision, and motion detection start from £400 to £700 fitted.

For properties where running a cable from the gate post to the house is impractical — long driveways, listed buildings where cable routes through walls are difficult — wireless video intercoms using encrypted 2.4GHz or 5GHz radio transmission are available. These systems cost slightly more and are more susceptible to interference, but eliminate the need for any cable beyond power at the gate post.

For <a href="/services/automated-gate-systems/">secure gate installations in London</a>, video intercoms have become the default specification — the question is now which system type, not whether to include video.`,
      },
      {
        heading: 'GSM Intercoms vs Hardwired Systems',
        body: `A GSM gate intercom uses a SIM card and the mobile network to connect gate visitors to your smartphone, wherever you are in the world. The caller presses the gate button, your phone rings with a notification or call, and you answer it to see the camera feed and press a button on your phone screen to open the gate. No hardwired connection between the gate post and the house is required beyond power to the gate post unit.

GSM systems are the best choice for properties where running a cable to the house is genuinely impractical, for homeowners who want global remote gate access, and as a backup system alongside a primary hardwired intercom. Their limitation is dependence on mobile signal at the gate post — a consideration for some London properties with metal boundaries or in basement-level driveway positions that may shadow the signal.

Hardwired systems connect the gate camera and button to an indoor monitor via a dedicated cable. They are independent of any network, mobile signal, or internet connection. If the power is on and the cable is intact, the system works — making them more reliably available for the daily use case of answering the gate at home. The limitation is that they do not provide remote access when you are away from the property.

The best of both approaches is a combined system: a hardwired video intercom for indoor use at home, paired with a GSM module that routes calls to smartphones when the indoor monitor is not answered within a set number of rings. This is increasingly the standard specification for London residential properties and costs £500 to £900 fitted for a quality combined system.`,
      },
      {
        heading: 'Smart Home Integration: Ring, Google Home, and Control4',
        body: `Smart home integration has become a significant consideration for London homeowners who are already using smart home platforms. The leading gate intercom brands have responded with app-connected systems and integration modules, but compatibility varies considerably.

<a href="https://en-uk.ring.com/" target="_blank" rel="noopener noreferrer">Ring</a> Video Doorbell products include gate-specific models designed to mount at gate posts and integrate with the Ring app ecosystem. If you already use Ring cameras or doorbells, a Ring gate intercom offers seamless integration — a single app manages all your video entry points. The limitation is that Ring is designed as a consumer product and the gate control integration requires the gate motor to have a compatible input — most do, but it is worth confirming at the survey stage.

For Google Home users, several intercom manufacturers offer Google Assistant integration, allowing voice commands to check who is at the gate and open it via a connected speaker. Amazon Alexa integration is similarly available from selected manufacturers.

Control4 and other dedicated smart home automation platforms support deep integration with commercial-grade gate intercom systems, allowing the gate to be controlled as part of whole-home automation scenes — opening automatically when your car's location sensor shows you arriving home, for example, or locking at a scheduled time each evening.

Access control can be upgraded at any time — you do not need to install the full intercom system at the same time as the gate if budget is a constraint. Leave your phone number in the form above and our team will call back quickly to discuss which intercom system suits your gate setup and smart home platform.`,
      },
    ],
    faqs: [
      { question: 'What is the best intercom system for an electric gate in London?', answer: 'For most London homeowners, a combined hardwired video intercom with GSM backup offers the best of both worlds — reliable indoor answering when at home, with smartphone app access when away. Brands such as Comelit, Hikvision, and Urmet all produce quality systems in this category. The right choice depends on your gate motor type, cable routing options, and any existing smart home platform.' },
      { question: 'Can I add an intercom to an existing electric gate?', answer: 'Yes. Intercoms can be retrofitted to any existing automated gate. The installer connects the intercom control board to the gate motor's relay input — the same connection used by the remote receiver. A power supply at the gate post is required. Most retrofits are completed in a day.' },
      { question: 'Do I need WiFi at my gate post for a smart intercom?', answer: 'Not necessarily. GSM-based systems use the mobile network rather than WiFi, so they only require a power supply and a mobile signal at the gate post. WiFi-based systems need a strong 2.4GHz or 5GHz signal at the gate location — which is possible with a suitable WiFi extender or mesh access point.' },
      { question: 'How much does a video intercom cost to install on a gate in London?', answer: 'A basic wired video intercom for a residential gate costs £250 to £500 fitted. Mid-range systems with HD camera, night vision, and motion detection cost £400 to £700 fitted. Combined hardwired and GSM smart intercom systems with smartphone app integration cost £500 to £900 fitted. Retrofit installation on an existing gate is priced similarly.' },
    ],
    relatedServiceSlug: 'automated-gate-systems',
    relatedGuides: ['swing-vs-sliding-gates', 'automation-kit-installation-prices'],
  },

  // ── MAINTENANCE & TROUBLESHOOTING ───────────────────────────────

  {
    slug: 'electric-gate-motor-humming-but-not-moving',
    title: 'Why Your Electric Gate is Humming But Not Moving (And How to Fix It)',
    metaTitle: 'Electric Gate Motor Humming But Not Moving? | Quick Fixes',
    metaDescription: 'Is your electric gate motor humming but not moving? Discover the top reasons why and how to safely troubleshoot the issue.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'An electric gate motor that hums but will not move is one of the most common gate failures in London. Here are the three most likely causes — and how to tell whether it is something you can fix yourself or a job for an engineer.',
    readingMinutes: 6,
    publishDate: '2026-02-21',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    intro: 'A humming sound from your gate motor when you press the remote is a symptom you should not ignore — and you certainly should not keep pressing the button hoping it will eventually move. A motor that is trying to run but cannot is drawing current into a stalled coil, which generates heat and can cause permanent damage if allowed to continue. Here is what to check, in order.',
    sections: [
      {
        heading: 'Safety First: What to Do Before Anything Else',
        body: `Before investigating the cause of the humming, take these immediate safety steps.

Stop triggering the motor. Every time you press the remote and the motor hums without moving, you are pushing current through a stalled motor. This heats the windings and can accelerate damage to both the motor and the control board. Put the remote down.

Use the manual release. Every automated gate has a manual release mechanism — a key-operated release that disconnects the motor from the gate and allows it to be pushed open by hand. For swing gates, this is typically a key barrel on the motor housing or post. For sliding gates, it is usually on the motor casing. Use this to operate the gate manually until the fault is diagnosed and resolved.

Do not force the gate with the motor engaged. If the gate is moving sluggishly rather than not at all — grinding, jerking, or moving at reduced speed — switch to manual release immediately. A partially moving gate under motor power with an underlying mechanical obstruction is likely to cause damage to the drive system.

The <a href="https://www.dhfonline.org.uk/" target="_blank" rel="noopener noreferrer">Door & Hardware Federation</a> recommends that any powered gate showing unusual operational behaviour be taken out of automated service until it has been inspected by a competent engineer.`,
      },
      {
        heading: 'The Three Most Common Causes of a Humming Gate Motor',
        body: `Once you have the gate operating manually and the motor is no longer being triggered, you can investigate the cause. These three faults account for the large majority of humming motor call-outs our engineers attend.

<strong>1. A physical obstruction in the gate travel path.</strong> The motor is running — it is receiving power and attempting to drive the gate — but something is stopping the gate from moving. Stones and debris in a sliding gate track, a branch or overgrown shrub against a swing gate leaf, frost-swollen timber gates binding against a stop post, or accumulated mud at the base of a sliding gate are all common culprits. Walk the full gate travel path and check for anything physical. Clear any obstruction, release and re-engage the motor, and test operation.

<strong>2. A blown motor start capacitor.</strong> Capacitors are the component that provides the initial burst of current needed to start the motor rotating. When a capacitor fails — which they do gradually with age, and more frequently when the motor has been overheated — the motor receives power but cannot generate the initial torque needed to begin moving. This produces exactly the humming-with-no-movement symptom. Capacitor replacement is a straightforward repair for a gate engineer and costs £80 to £150 including the part.

<strong>3. Seized or extremely stiff hinges on swing gates.</strong> If the gate hinges have seized through corrosion, lack of lubrication, or physical impact, the motor cannot overcome the static friction needed to start gate travel. This is particularly common after a cold snap in London — frozen lubricants and moisture-expanded timber can add enough resistance to stall a motor that normally operates without difficulty. Lubricating the hinge pins with a penetrating oil and manually working the gate through its full swing before re-engaging the motor often resolves this.`,
      },
      {
        heading: 'When to Stop Troubleshooting and Call a Professional',
        body: `Some causes of the humming-without-movement fault require professional diagnosis and repair. Call a gate engineer rather than continuing to investigate yourself if:

The gate was moving normally and then stopped suddenly with no obvious external cause. This pattern suggests an internal motor or control board failure rather than a mechanical obstruction.

You can see or smell evidence of burning around the motor housing. A burnt smell or discolouration on the motor casing indicates the motor has already overheated. Stop using it entirely.

The fault recurs after clearing an obstruction. If the gate moves normally for a day or two and then the humming returns with no new obstruction visible, there is an intermittent mechanical or electrical fault that requires professional diagnosis.

The manual release will not operate or the gate cannot be moved by hand. A gate that cannot be moved manually at all suggests a seized drive mechanism or a jammed motor that requires engineering assessment.

For <a href="/services/gate-repair-and-maintenance/">electric gate repairs in London</a>, our network covers all boroughs with engineers who attend most call-outs within 24 to 48 hours. Stop struggling with a heavy gate — leave your phone number in the form above and a London repair engineer will call you back immediately to assess the situation and get you booked in.`,
      },
    ],
    faqs: [
      { question: 'Why is my electric gate humming but not opening?', answer: 'The most common causes are a physical obstruction in the gate travel path, a blown motor start capacitor, or seized hinges that prevent the motor from overcoming initial static friction. Check the full gate path for debris or obstructions first. If none are found, a failed capacitor or seized mechanism requires a professional engineer.' },
      { question: 'Can I fix a humming gate motor myself?', answer: 'Clearing physical obstructions is safe to do yourself after engaging the manual release. Lubricating stiff hinges with penetrating oil is also DIY-appropriate. Capacitor replacement, control board diagnosis, and any electrical repair inside the motor housing should be carried out by a competent gate engineer.' },
      { question: 'How much does it cost to repair a humming gate motor in London?', answer: 'A capacitor replacement — the most common cause of the humming symptom — typically costs £80 to £150 including the part and the engineer's labour. A new motor if the existing one has burned out costs £250 to £500 fitted depending on motor type and brand. Control board replacement costs £150 to £350 depending on the system.' },
      { question: 'Is it safe to keep using my gate if the motor hums but still moves slowly?', answer: 'No. A motor that is running but struggling to move the gate is under abnormal load. Continued use risks burning out the motor coil and potentially the control board. Engage the manual release and operate the gate by hand until the fault has been diagnosed and repaired.' },
    ],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['how-to-manually-open-electric-gate', 'winter-gate-maintenance'],
  },

  {
    slug: 'how-to-manually-open-electric-gate',
    title: 'How to Manually Open an Electric Gate During a Power Cut',
    metaTitle: 'How to Manually Open an Electric Gate (During Power Cuts)',
    metaDescription: 'Power cut in London? Learn exactly how to manually open your electric gate using the manual release key. Step-by-step emergency guide.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'Power cut or motor failure — every automated gate has a manual release. This step-by-step guide covers how to find and use it for both swing gates and sliding gates, and what to do if it will not operate.',
    readingMinutes: 5,
    publishDate: '2026-02-28',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: 'Every automated driveway gate installed to UK standards includes a manual release mechanism. This is a legal requirement under BS EN 12453 — not an optional extra. The manual release allows you to open and close the gate by hand when the power is off or the motor fails. This guide explains exactly how to use it for different gate types.',
    sections: [
      {
        heading: 'Before You Start: Check if It's a Local or Area Power Cut',
        body: `Before reaching for the manual release key, quickly confirm whether the power cut is affecting just your gate or a wider area. Check that your property has power by looking at indoor lights or trying a socket. If the property has power but the gate does not respond, the fault is likely a tripped circuit breaker for the gate supply, a blown fuse at the gate control panel, or a motor fault rather than a general power cut.

If your property has no power, check whether the cut is local or area-wide. <a href="https://www.ukpowernetworks.co.uk/" target="_blank" rel="noopener noreferrer">UK Power Networks</a> operates the electricity distribution network for London and the South East and maintains a real-time outage map on their website. Checking this before calling your energy supplier will confirm whether the outage is in your street or whether it is an internal electrical issue at your property.

If the power cut is confirmed as an area outage, the manual release is your only option for gate operation until power is restored. Your gate should have a battery backup unit fitted — a charged battery that powers the gate motor for 20 to 50 cycles after mains power fails. If the battery backup is working, the gate may still operate normally via remote even during a power cut. Try the remote before using the manual release.`,
      },
      {
        heading: 'How to Manually Release a Ram-Arm (Surface-Mounted) Motor',
        body: `Ram-arm motors — the type with visible motor arms mounted on the back of the gate and post — have the simplest manual release mechanism. The process for most major brands (FAAC, CAME, BFT, Nice) is as follows.

Locate the manual release point on the motor body. On most ram-arm motors, this is a key barrel or lever on the side of the motor housing, typically covered by a weatherproof cap. The manual release key should have been supplied with the gate system at installation — if you do not have it, contact the installer.

Insert the key and turn it to the released position (usually a quarter or half turn). You will feel or hear a click as the motor disengages from the drive mechanism. On some motors, a coloured indicator moves from "auto" to "manual" to confirm the release.

The gate leaf is now free to be pushed by hand. Open and close it manually as needed. When power is restored or the fault is resolved, return the key to the engaged position to reconnect the motor drive before using the remote.

Do not attempt to force the gate if the release mechanism has not been fully engaged — pushing against an engaged motor risks bending the arm linkage.`,
      },
      {
        heading: 'How to Manually Release an Underground Motor',
        body: `Underground motors are mounted beneath the gate post cap and require a slightly different manual release procedure. The key barrel is typically located on the top of the post cap or on the side of the motor housing just below ground level, accessible through a small cover plate.

Insert the electric gate manual release key into the barrel and turn as indicated by the arrow or instruction label on the housing. The gate should immediately become free to be pushed by hand. Some underground motors require a longer hold on the key turn — consult your installation manual if the gate does not release immediately.

With the gate released, push it through its full swing to open. Resist the urge to pull — pushing the gate leaf from the side provides better leverage and avoids stressing the hinge pins.

For sliding gates, the manual release is usually located on the motor casing itself, accessible from the side facing the gate. Release the key barrel, then push the gate by hand along its travel path. Check that the track is clear of debris before pushing — if the gate has been stationary during a cold period, ice or frozen mud in the track may need to be cleared first.

If the manual release key will not turn, if the gate cannot be moved by hand after releasing the motor, or if the release mechanism appears damaged, do not force it. This situation requires an engineer immediately — contact us for <a href="/services/gate-repair-and-maintenance/">emergency electric gate repair in London</a> by leaving your phone number in the form above and our team will arrange rapid assistance.`,
      },
    ],
    faqs: [
      { question: 'Where is the manual release on my electric gate?', answer: 'For ram-arm (surface-mounted) motors, the manual release is a key barrel or lever on the motor housing itself, usually covered by a small weatherproof cap. For underground motors, it is accessed via a cover plate on the top of the post cap or on the upper side of the buried motor housing. Your installer should have shown you the location and supplied the release key at handover.' },
      { question: 'What do I do if I have lost the manual release key?', answer: 'Contact your gate installer or the motor manufacturer with your motor model details. Most manufacturers can supply replacement keys, as manual release keys are not unique security keys — they operate a standard barrel across all motors of the same model. A gate engineer can also supply and fit a replacement key barrel if the original is damaged.' },
      { question: 'Will my electric gate work during a power cut?', answer: 'If a battery backup unit was installed with your gate system, it will continue to power the motor for 20 to 50 cycles after mains power fails. After the battery is exhausted, or if no battery backup is fitted, the gate must be operated using the manual release. This is why having the manual release key accessible and knowing how to use it is essential for every gate owner.' },
      { question: 'My manual release will not turn — what should I do?', answer: 'Do not force it. A jammed manual release key barrel may indicate corrosion, physical damage to the mechanism, or ice ingress during cold weather. Apply a penetrating lubricant to the barrel and allow it to work for five minutes before trying again. If it still will not turn, call a gate engineer — forcing a seized mechanism risks breaking the release entirely and leaving the gate inoperable.' },
    ],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['electric-gate-motor-humming-but-not-moving', 'winter-gate-maintenance'],
  },

  // ── REMAINING STUBS ─────────────────────────────────────────────

  {
    slug: 'winter-gate-maintenance',
    title: 'Winter Gate Maintenance: Keeping Your Electric Gate Working in Cold Weather',
    metaTitle: 'Winter Gate Maintenance London | Prevent Electric Gate Failures',
    metaDescription: 'Cold weather is the leading cause of electric gate failures in London. This checklist covers what to do before and during winter to keep your gate working reliably.',
    pillar: 'Maintenance & Troubleshooting',
    excerpt: 'London winters are damp and cold — and that combination is hard on gate motors, tracks, hinges, and timber finishes. This maintenance checklist covers what to do before the cold hits and what to watch for during it.',
    readingMinutes: 7,
    publishDate: '2026-03-07',
    featuredImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop',
    intro: '',
    sections: [],
    faqs: [],
    relatedServiceSlug: 'gate-repair-and-maintenance',
    relatedGuides: ['electric-gate-motor-humming-but-not-moving', 'electric-gate-running-costs'],
  },

  {
    slug: 'uk-gate-safety-laws',
    title: 'UK Gate Safety Laws: What Every Gate Owner Needs to Know',
    metaTitle: 'UK Gate Safety Laws | Legal Requirements for Automated Driveway Gates',
    metaDescription: 'What are the legal requirements for automated gates in the UK? BS EN 12453, CE marking, force testing, and installer obligations explained clearly.',
    pillar: 'Safety & Compliance',
    excerpt: 'Automated gates are powerful machines. UK law sets out specific safety requirements for their design, installation, and ongoing use. This guide explains what the law actually requires — in plain English.',
    readingMinutes: 9,
    publishDate: '2026-03-14',
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
    publishDate: '2026-03-21',
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
    excerpt: 'Safety photocells and safety edges both prevent gate-related injuries — but they work differently and are required in different situations.',
    readingMinutes: 7,
    publishDate: '2026-03-28',
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
