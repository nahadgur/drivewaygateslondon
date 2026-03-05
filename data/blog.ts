// ─────────────────────────────────────────────────────────────────────────────
// blog_all.ts  —  Driveway Gates London
// Includes: internal-link, external-link, related-articles ContentBlock types
// Internal slugs: /services/[service-slug]/[borough-slug]/ — live format
// External links: all verified live March 2026, rel="noopener noreferrer"
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[] }
  | { type: 'cta' }
  | {
      type: 'internal-link';
      href: string;           // e.g. /services/electric-sliding-gates/barnet/
      text: string;           // anchor text shown to reader
      context: string;        // surrounding sentence providing natural context
    }
  | {
      type: 'external-link';
      href: string;           // full verified URL
      text: string;           // anchor text
      source: string;         // short source label e.g. "Planning Portal"
      rel: 'noopener noreferrer'; // always this value — never nofollow
    }
  | {
      type: 'related-articles';
      articles: {
        slug: string;
        title: string;
        category: string;
      }[];
    };

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 1 — Pricing Guide
// ─────────────────────────────────────────────────────────────────────────────
const article1: BlogArticle = {
  slug: 'how-much-do-driveway-gates-cost-london',
  title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide',
  metaTitle: 'Driveway Gate Costs London 2026 | Full Pricing Guide',
  metaDescription: 'Wondering what driveway gates cost in London? We break down prices for electric sliding gates, swing gates, wooden gates and more with real installer quotes.',
  category: 'Pricing',
  publishDate: '2026-02-10',
  featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'London driveway gate prices vary enormously depending on material, automation, and design complexity. Here is what homeowners actually pay in 2026.',
  content: [
    { type: 'p', text: 'If you are researching driveway gates for your London property, the first question on your mind is probably "how much is this going to cost?" The honest answer is that it depends on several factors, but we can give you a clear picture of what homeowners across London are actually paying in 2026.' },
    { type: 'p', text: 'We have collected pricing data from dozens of vetted installers across our network, covering everything from basic manual wooden gates to fully automated sliding systems with video intercoms and smart home integration. The figures below reflect real quotes from completed London jobs, not manufacturer list prices or catalogue estimates.' },
    { type: 'p', text: 'It is also worth understanding why London prices tend to sit higher than the national average. Access challenges, parking restrictions in central and inner boroughs, higher labour rates, and the premium materials that London buyers tend to specify all push costs upward. That said, a well-installed gate in London is one of the shrewder home improvements you can make, both for security and for resale value.' },

    { type: 'h2', text: 'Electric Sliding Gates: £4,500 to £12,000' },
    { type: 'p', text: 'Electric sliding gates are the most popular choice for London driveways where space is limited. They move horizontally along a track, which means you do not need any swing clearance behind the gate line. A standard aluminium sliding gate with a reliable motor, two remote handsets, and safety photocells typically starts at around £4,500 fully installed.' },
    { type: 'p', text: 'At the higher end of the market, bespoke steel or wrought iron sliding gates with powder coating, a video intercom, keypad entry, and smartphone control push toward £10,000 to £12,000. The biggest cost drivers are gate width, the overall weight of the gate, and the complexity of the automation package you choose.' },
    { type: 'p', text: 'Cantilever sliding gates, which do not rely on a ground track and instead hang from a counterbalanced rail, are more expensive still. They suit sloped driveways and properties with uneven surfaces where a conventional track would be difficult to lay level. Expect to add £800 to £2,000 for a cantilever system over a standard tracked installation.' },
    {
      type: 'internal-link',
      href: '/services/electric-sliding-gates/barnet/',
      text: 'electric sliding gate installations in Barnet and North London',
      context: 'See examples and get a free quote for our electric sliding gate installations in Barnet and North London.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Modern sliding driveway gate on a London property' },

    { type: 'h2', text: 'Electric Swing Gates: £3,500 to £10,000' },
    { type: 'p', text: 'Swing gates are the classic choice and tend to be somewhat cheaper than sliding because there is no ground track to install. A pair of timber or steel swing gates with above-ground ram-arm motors starts at around £3,500. Mid-range installations with intercom access and a bespoke design typically sit between £5,000 and £7,500.' },
    { type: 'p', text: 'Premium swing gate projects with hand-forged ironwork, hidden underground motors, video entry systems, and full smart home integration can reach £10,000 or more. If your driveway has a significant slope, you should budget an additional £500 to £1,500 for the extra engineering required.' },
    { type: 'p', text: 'One consideration that is easy to overlook is pillar or post condition. If you are installing new brick or stone pillars as part of the project, add £800 to £2,500 per pair depending on the material and height.' },
    {
      type: 'internal-link',
      href: '/services/electric-swing-gates/richmond/',
      text: 'swing gate installations in Richmond and South West London',
      context: 'View our swing gate installations in Richmond and South West London, including underground motor options for period properties.',
    },

    { type: 'h2', text: 'Wooden Driveway Gates: £2,500 to £8,000' },
    { type: 'p', text: 'Timber gates offer the widest price range of any material because the wood species makes a significant difference to both cost and longevity. Softwood gates made from treated redwood or pine start from around £2,500 installed. Hardwood options such as iroko or European oak typically fall between £4,000 and £6,000, while Accoya pushes prices toward £6,000 to £8,000.' },
    { type: 'p', text: 'These figures include hanging, sealing, and a first treatment coat, but do not include automation. If you want electric operation added to timber gates, budget an additional £1,200 to £3,500 depending on the motor type and access control features you require.' },
    { type: 'p', text: 'Timber gates are a particularly strong choice for period properties in conservation areas or streets with character restrictions. A well-specified wooden gate sits naturally within a Victorian or Edwardian streetscape in a way that powder-coated aluminium simply cannot replicate.' },
    {
      type: 'internal-link',
      href: '/services/wooden-driveway-gates/camden/',
      text: 'wooden driveway gates in Camden and North London conservation areas',
      context: 'Explore our range of hardwood wooden driveway gates in Camden and North London conservation areas.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', alt: 'Wooden driveway gates on a period London home' },

    { type: 'h2', text: 'Metal Driveway Gates: £2,800 to £9,500' },
    { type: 'p', text: 'Steel and aluminium gates cover a broad price spectrum. A simple flat-bar aluminium design with powder coating starts at around £2,800. Bespoke mild steel gates with hot-dip galvanising, intricate laser-cut patterns, and RAL colour matching typically cost between £4,500 and £7,000. Hand-forged wrought iron with traditional scrollwork can reach £9,500 or beyond.' },
    { type: 'p', text: 'Metal gates are often the best long-term investment because maintenance costs are virtually nil once the protective coating is properly applied. A quality galvanised and powder-coated steel gate should go 20 years or more without significant attention.' },
    {
      type: 'internal-link',
      href: '/services/wrought-iron-gates/kensington/',
      text: 'wrought iron gate installations in Kensington and Chelsea',
      context: 'For the most traditional look, see our wrought iron gate installations in Kensington and Chelsea.',
    },

    { type: 'h2', text: 'What Affects the Final Price?' },
    { type: 'list', items: [
      'Gate width: wider openings need larger, heavier gates and more powerful motors, with costs rising sharply above 4.5 metres',
      'Material choice: aluminium is the lightest and most cost-effective metal, while wrought iron is the heaviest and most expensive per metre',
      'Automation level: a basic two-remote system versus a full intercom, keypad, and smartphone control package',
      'Ground conditions: London clay, sloped driveways, drainage complications, and uneven surfaces all add to groundwork costs',
      'Design complexity: off-the-shelf patterns cost less than fully bespoke fabrication',
      'Access logistics: tight streets and parking restrictions in inner London can add meaningfully to labour costs',
      'Pillar or post work: new brick, stone, or steel pillars add £800 to £2,500 per pair',
    ]},
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop', alt: 'Gate installer measuring a London driveway entrance' },

    { type: 'h2', text: 'Intercom and Access Control: What to Budget' },
    { type: 'p', text: 'Many homeowners underestimate what they want from an intercom system until the gate is installed. Adding a basic wired audio intercom costs around £200 to £400. A wired colour video intercom with night vision typically adds £400 to £800. A smart Wi-Fi video intercom that lets you answer the gate from your phone costs £600 to £1,200 installed.' },
    { type: 'p', text: 'Keypads that allow trusted visitors to enter a PIN code cost around £150 to £300. Battery backup units cost £200 to £400. If you want all of these together as a complete package, budget an additional £1,000 to £2,500 on top of the gate and motor costs.' },

    { type: 'h2', text: 'How to Get the Best Value' },
    { type: 'p', text: 'The most effective single step you can take to get a fair price is to compare quotes from multiple experienced installers. Not three random firms found through a generic directory, but three vetted specialists who have completed dozens of similar residential projects in London. That is exactly what our free matching service provides.' },
    { type: 'p', text: 'Every installer in our London network has completed at least 50 residential gate installations, carries full public liability insurance, and offers written warranties on both materials and workmanship.' },
    {
      type: 'external-link',
      href: 'https://trustedtraders.which.co.uk/',
      text: 'Which? Trusted Traders: how to verify a gate installer',
      source: 'Which? Trusted Traders',
      rel: 'noopener noreferrer',
    },
    { type: 'cta' },
    { type: 'p', text: 'A final note on pricing: be cautious of quotes that seem unusually cheap. In gate installation, low prices often signal thinner steel sections, cheaper motor brands with shorter lifespans, missing safety features, or shortcuts in the groundwork. The difference between a gate that performs flawlessly for 15 years and one that causes problems within 18 months often comes down to a few hundred pounds in material and labour quality.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'electric-sliding-vs-swing-gates-which-is-better', title: 'Electric Sliding vs Swing Gates: Which Is Better for Your London Driveway?', category: 'Guides' },
        { slug: 'best-driveway-gate-materials-compared', title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material', category: 'Materials' },
        { slug: 'do-driveway-gates-add-property-value', title: 'Do Driveway Gates Add Property Value? What London Estate Agents Say', category: 'Property' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 2 — Planning Permission
// ─────────────────────────────────────────────────────────────────────────────
const article2: BlogArticle = {
  slug: 'do-i-need-planning-permission-driveway-gates-london',
  title: 'Do I Need Planning Permission for Driveway Gates in London?',
  metaTitle: 'Planning Permission for Driveway Gates London | Rules Explained',
  metaDescription: 'Find out whether you need planning permission for driveway gates in London. We cover permitted development rules, conservation areas, and borough-specific guidelines.',
  category: 'Planning',
  publishDate: '2026-02-12',
  featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'Most driveway gates in London fall under permitted development, but there are important exceptions. Here is what you need to know before you start.',
  content: [
    { type: 'p', text: 'Planning permission is one of the most common concerns London homeowners raise when they start considering driveway gates. The good news is that most residential gate installations do not require a formal planning application. However, there are specific situations where permission is absolutely necessary, and getting it wrong can lead to enforcement action and, in the worst cases, a costly removal order.' },
    { type: 'p', text: 'This guide covers the national rules, the London-specific complications, and the practical steps you should take before committing to a gate design. It is not a substitute for professional advice on your specific property, but it will give you a solid understanding of where you stand before you pick up the phone to an installer.' },

    { type: 'h2', text: 'The Basic Rule: Permitted Development Rights' },
    { type: 'p', text: 'Under England\'s permitted development rights, you can install a gate, fence, or wall without planning permission provided it does not exceed two metres in height. If your gate fronts a highway used by vehicles, the maximum height drops to one metre. For most London driveways, a standard gate of up to two metres high is perfectly fine without any application.' },
    { type: 'p', text: 'The gate must open inward onto your property rather than outward into the pavement or road. An outward-opening gate onto a public highway would require planning permission regardless of its height. This is a practical safety rule as much as a planning one, and most reputable installers will raise it automatically.' },
    { type: 'p', text: 'These permitted development rights apply to houses. If you live in a flat, a maisonette, or any other non-house dwelling, the rules are different and a planning application is more likely to be needed.' },
    {
      type: 'external-link',
      href: 'https://www.planningportal.co.uk/permission/common-projects/fences-gates-and-garden-walls/planning-permission/',
      text: 'Planning Portal: permitted development rules for gates and garden walls',
      source: 'Planning Portal',
      rel: 'noopener noreferrer',
    },
    {
      type: 'external-link',
      href: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/2/crossheading/class-a-gates-fences-walls-etc',
      text: 'Town and Country Planning (General Permitted Development) Order 2015 — Class A gates, fences and walls',
      source: 'legislation.gov.uk',
      rel: 'noopener noreferrer',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Residential driveway gates in a London suburb' },

    { type: 'h2', text: 'Conservation Areas: Where It Gets More Complex' },
    { type: 'p', text: 'If your property sits within a conservation area, permitted development rights may be significantly restricted. Many London boroughs have Article 4 directions in place within their conservation areas. An Article 4 direction removes certain permitted development rights and requires you to seek full planning permission for works that would otherwise be allowed automatically.' },
    { type: 'p', text: 'The challenge in London is that Article 4 directions are borough-specific, street-specific, and sometimes even property-specific. A gate that is perfectly fine on one side of a street might need planning permission on the other. Your installer should flag this during the site survey, but it is worth doing your own preliminary check via your borough council\'s planning portal before you get too far into the design process.' },
    {
      type: 'internal-link',
      href: '/services/wooden-driveway-gates/camden/',
      text: 'timber gate installations in Camden conservation areas',
      context: 'See examples of our sympathetic timber gate installations in Camden conservation areas, designed to meet local character guidelines.',
    },
    {
      type: 'internal-link',
      href: '/services/wrought-iron-gates/kensington/',
      text: 'wrought iron gates in Kensington and Chelsea',
      context: 'For conservation areas in Kensington and Chelsea, our wrought iron gates are regularly approved by local planning officers.',
    },
    {
      type: 'external-link',
      href: 'https://www.planningportal.co.uk/permission/responsibilities/other-permissions-you-may-require/conservation-areas',
      text: 'Planning Portal: conservation area rules and what requires permission',
      source: 'Planning Portal',
      rel: 'noopener noreferrer',
    },

    { type: 'h2', text: 'Listed Buildings: Stricter Rules Still' },
    { type: 'p', text: 'Listed buildings come with the strictest requirements of all. If your home is listed (Grade I, Grade II*, or Grade II), any alteration that affects its character requires listed building consent in addition to any relevant planning permission. This includes new gates, walls, pillars, and even intercom panels or motor housings that attach to the fabric of the building or boundary.' },
    { type: 'p', text: 'Working without listed building consent where it is required is a criminal offence, not just a civil planning breach. The potential consequences include prosecution, unlimited fines, and a requirement to undo the work entirely at your own cost. If your property is listed, take professional advice before doing anything.' },
    {
      type: 'external-link',
      href: 'https://historicengland.org.uk/advice/planning/listed-buildings/',
      text: 'Historic England: listed building consent — what you need to know',
      source: 'Historic England',
      rel: 'noopener noreferrer',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop', alt: 'Period London property with ornate iron driveway gates' },

    { type: 'h2', text: 'London Borough-Specific Rules' },
    { type: 'p', text: 'Some London boroughs have supplementary planning guidance that adds local requirements on top of national rules. Boroughs with extensive conservation areas, such as Richmond upon Thames, Kensington and Chelsea, Camden, Islington, and Westminster, tend to have the most detailed and restrictive guidance.' },
    { type: 'p', text: 'It is worth knowing that some London boroughs have introduced local design codes in recent years that affect front boundaries more broadly, even outside formal conservation areas. Policies around materials, colours, and boundary treatment can vary significantly between boroughs.' },
    {
      type: 'internal-link',
      href: '/services/electric-swing-gates/richmond/',
      text: 'gate installations in Richmond upon Thames',
      context: 'Our team has extensive experience navigating the planning rules for gate installations in Richmond upon Thames, one of London\'s most conservation-sensitive boroughs.',
    },

    { type: 'h2', text: 'Dropped Kerbs and Vehicle Crossovers' },
    { type: 'p', text: 'If you are installing driveway gates on a new or extended driveway, you may also need a dropped kerb, officially called a vehicle crossover, to legally drive across the pavement. This requires a separate application to your borough council and is entirely separate from the planning permission question for the gate itself.' },
    { type: 'p', text: 'A dropped kerb application in London typically costs between £1,500 and £3,000, including the council\'s installation fee and any adjacent footway reinstatement. Processing time varies by borough but is commonly six to twelve weeks.' },

    { type: 'h2', text: 'Party Wall Considerations' },
    { type: 'p', text: 'If your gate pillars are being built on or close to a shared boundary with a neighbouring property, the Party Wall etc. Act 1996 may apply. You may need to serve a party wall notice on your neighbour before starting construction.' },
    {
      type: 'external-link',
      href: 'https://www.gov.uk/party-wall-etc-act-1996-guidance',
      text: 'GOV.UK: Party Wall Act 1996 — full guidance for homeowners',
      source: 'GOV.UK',
      rel: 'noopener noreferrer',
    },

    { type: 'h2', text: 'What Your Installer Should Handle' },
    { type: 'p', text: 'Any experienced London gate installer will check the planning position as part of their free site survey. They should know whether your property is within a conservation area, whether any Article 4 directions apply locally, and whether your proposed design is likely to comply with local character guidelines.' },
    { type: 'cta' },
    { type: 'p', text: 'The key message is straightforward: do not assume you need permission, but do not assume you are exempt either. A quick check during the site survey will confirm the position for your specific property and prevent potentially costly complications further down the line.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'how-much-do-driveway-gates-cost-london', title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide', category: 'Pricing' },
        { slug: 'electric-sliding-vs-swing-gates-which-is-better', title: 'Electric Sliding vs Swing Gates: Which Is Better for Your London Driveway?', category: 'Guides' },
        { slug: 'annual-gate-maintenance-what-to-expect', title: 'Annual Gate Maintenance: What to Expect and Why It Matters', category: 'Maintenance' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 3 — Sliding vs Swing
// ─────────────────────────────────────────────────────────────────────────────
const article3: BlogArticle = {
  slug: 'electric-sliding-vs-swing-gates-which-is-better',
  title: 'Electric Sliding vs Swing Gates: Which Is Better for Your London Driveway?',
  metaTitle: 'Sliding vs Swing Gates | Which Is Best for London Driveways?',
  metaDescription: 'Comparing electric sliding and swing gates for London homes. We cover space requirements, costs, aesthetics, and which works best for different driveway layouts.',
  category: 'Guides',
  publishDate: '2026-02-14',
  featuredImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'The sliding vs swing gate debate comes down to your driveway layout, budget, and personal style. Here is an honest comparison to help you decide.',
  content: [
    { type: 'p', text: 'This is the question every London homeowner asks when they start looking at automated driveway gates. Both sliding and swing options will secure your property, both can be fully automated with intercoms and smartphone control, and both come in a huge range of materials and styles. The real difference lies in how each type interacts with your specific driveway layout.' },
    { type: 'p', text: 'After speaking with experienced London installers and homeowners who have lived with both gate types, we have put together this honest and detailed comparison. There is no universally superior option. The right choice depends entirely on your property, your plot, and how you use your driveway day to day.' },

    { type: 'h2', text: 'Space: The Most Important Factor' },
    { type: 'p', text: 'Swing gates need room to open. A standard pair of leaves each one metre wide needs at least one metre of clear space behind the gate line to complete their arc. If cars park close to the entrance, or if the driveway is short and the garage sits tight behind the gate line, swing gates will not work safely.' },
    { type: 'p', text: 'Sliding gates need lateral space instead. The gate panel slides along your boundary wall or fence, so you need clear space to one side equal to the full gate width, plus around half a metre for the motor housing. On most London plots with a side wall or return fence, this works well.' },
    {
      type: 'internal-link',
      href: '/services/electric-sliding-gates/croydon/',
      text: 'electric sliding gate installations in Croydon and South London',
      context: 'See our electric sliding gate installations in Croydon and South London — ideal for shorter driveways and plots with limited swing space.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Electric sliding gate opening on a London driveway' },

    { type: 'h2', text: 'Cost: What You Actually Pay' },
    { type: 'p', text: 'Swing gates are typically £500 to £2,000 cheaper than equivalent sliding systems for the same width and material. The saving comes from simpler groundwork, lighter motor requirements, and less engineering complexity overall.' },
    { type: 'p', text: 'For a standard 3.5-metre opening in steel or aluminium, expect to pay roughly £3,500 to £7,000 for swing gates versus £4,500 to £9,000 for a sliding system. Both figures include supply, installation, a basic automation package, and safety photocells.' },
    { type: 'p', text: 'However, if your driveway requires significant adaptation to accommodate swing gates, such as levelling a slope or extending the driveway surface, the cost advantage can disappear. On certain plots, sliding is actually cheaper when everything is accounted for.' },

    { type: 'h2', text: 'Slopes and Gradients in London' },
    { type: 'p', text: 'London has a surprising number of sloped driveways, particularly in hilly areas like Highgate, Crystal Palace, Muswell Hill, Hampstead, and parts of South London. Swing gates perform poorly on significant gradients because the base of the gate can scrape the ground during operation.' },
    { type: 'p', text: 'Sliding gates are naturally better suited to sloped driveways. The ground track can be set level even when the driveway surface itself slopes. Cantilever sliding gates, which use no ground track at all, are the most effective solution for genuinely steep London driveways.' },
    {
      type: 'internal-link',
      href: '/services/electric-sliding-gates/barnet/',
      text: 'sliding gate solutions for sloped driveways in Barnet and North London',
      context: 'Our team installs sliding gate solutions for sloped driveways in Barnet and North London, including cantilever options for steep approaches.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Driveway gate on a sloped London property' },

    { type: 'h2', text: 'Security: Which Type Is Stronger?' },
    { type: 'p', text: 'Both gate types offer strong physical security when properly installed. The key variables are material, construction quality, and the strength of the posts or pillars rather than the gate type itself. A solidly built steel sliding gate and a solidly built steel swing gate present similar resistance to forced entry.' },
    { type: 'p', text: 'For maximum security on a swing gate, ask your installer about anti-lift hinges, a central anti-throw bolt, and ground anchors. These modest additions significantly improve the forced-entry resistance of any swing gate system.' },

    { type: 'h2', text: 'Aesthetics: Which Looks Better?' },
    { type: 'p', text: 'Swing gates have a timeless, traditional quality. The symmetry of a pair of leaves opening inward suits period properties particularly well. With underground motors completely hidden, the gate and pillars can be the only visible elements.' },
    { type: 'p', text: 'Sliding gates have a more contemporary, architectural quality. A single panel gliding smoothly along the boundary looks crisp and modern. They work especially well with horizontal flat-bar metal designs, slatted timber panels, and minimalist architectural styles.' },
    {
      type: 'internal-link',
      href: '/services/electric-swing-gates/richmond/',
      text: 'traditional swing gate installations in Richmond',
      context: 'For period properties, explore our traditional swing gate installations in Richmond where classic aesthetics and heritage character are priorities.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop', alt: 'Traditional swing driveway gates on a period London home' },

    { type: 'h2', text: 'Reliability and Day-to-Day Maintenance' },
    { type: 'p', text: 'Both types are highly reliable when fitted with quality motors from established manufacturers. Sliding gates have a slight advantage in windy conditions because the gate is fully supported along its track or rail. A large swing gate caught by a strong gust places considerable strain on the hinges and the motor.' },
    { type: 'p', text: 'Sliding gate tracks need occasional clearing of debris, leaves, and grit. Swing gate hinges benefit from periodic lubrication. Neither task takes more than a few minutes and neither should be used as a serious mark against either type.' },

    { type: 'h2', text: 'Our Recommendation by Property Type' },
    { type: 'list', items: [
      'Short London driveway with a gate set close to the road: sliding gate almost certainly the better choice',
      'Sloped driveway in a hilly borough: sliding gate, potentially cantilever if the slope is steep',
      'Period property with a longer flat driveway: swing gate, ideally with underground motors',
      'Modern new-build with architectural landscaping: sliding gate with horizontal slats or flat bar design',
      'Very wide opening over 5 metres: sliding gate, as a pair of swing leaves becomes impractical',
      'Conservation area where a traditional look is required: swing gate, possibly with wrought iron or timber',
    ]},
    { type: 'cta' },
    { type: 'p', text: 'The most reliable way to make the right call is a free site survey from one of our vetted London installers. They will assess your specific plot, advise on which type works with your space, and give you an itemised quote for both options if you want to compare them directly.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'how-much-do-driveway-gates-cost-london', title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide', category: 'Pricing' },
        { slug: 'best-driveway-gate-materials-compared', title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material', category: 'Materials' },
        { slug: 'how-to-automate-existing-manual-gates', title: 'How to Automate Your Existing Manual Gates: A Complete Guide', category: 'Automation' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 4 — Best Wood
// ─────────────────────────────────────────────────────────────────────────────
const article4: BlogArticle = {
  slug: 'best-wood-for-driveway-gates-uk',
  title: 'The Best Wood for Driveway Gates in the UK: Iroko, Oak, Cedar, and Accoya Compared',
  metaTitle: 'Best Wood for Driveway Gates UK | Iroko vs Oak vs Cedar vs Accoya',
  metaDescription: 'Comparing the best timber species for driveway gates in the UK. We cover durability, maintenance, cost, and appearance for iroko, oak, cedar, and Accoya.',
  category: 'Materials',
  publishDate: '2026-02-17',
  featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'Choosing the right timber for your driveway gates makes the difference between a gate that lasts 10 years and one that lasts 30. Here is how the main species compare.',
  content: [
    { type: 'p', text: 'Timber driveway gates remain one of the most popular choices for London homeowners, and it is easy to understand why. Wood offers warmth, character, and design flexibility that no other material fully replicates. But not all timber is equal, and the species you choose will determine how your gate looks, performs, and ages over the next two to three decades.' },
    { type: 'p', text: 'This guide compares the four timber types most commonly used by UK gate makers: iroko, European oak, western red cedar, and Accoya. Each has genuine strengths and real limitations, and none is the automatic choice for every situation.' },

    { type: 'h2', text: 'Iroko: The Practical All-Rounder' },
    { type: 'p', text: 'Iroko is the most popular hardwood for driveway gates in the UK. It is a West African hardwood with a naturally high oil content, which gives it excellent resistance to moisture, rot, and insect attack without requiring heavy chemical treatment. It machines cleanly, holds fixings well, and finishes beautifully.' },
    { type: 'p', text: 'Fresh iroko has a warm golden-brown colour that darkens slightly over time. Left untreated, it weathers gradually to a silver-grey similar to teak. Most people prefer to treat it annually with a quality exterior oil to maintain the golden tone. Iroko gates properly maintained typically last 25 to 30 years.' },
    { type: 'p', text: 'Iroko gates are significantly cheaper than oak while offering comparable practical performance, which makes iroko the default recommendation for homeowners who want a quality hardwood gate at a sensible price.' },
    {
      type: 'internal-link',
      href: '/services/wooden-driveway-gates/richmond/',
      text: 'iroko and hardwood gate installations in Richmond',
      context: 'Our team installs iroko and hardwood gate installations in Richmond, a borough where natural timber suits the period character of most streets.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop', alt: 'Close-up of hardwood timber grain suitable for driveway gates' },

    { type: 'h2', text: 'European Oak: The Premium Traditional Choice' },
    { type: 'p', text: 'Oak is the timber that most people picture when they imagine a classic English driveway gate. European oak (Quercus robur) is exceptionally strong, dense, and durable. Its grain pattern is among the most attractive of any commercially available timber, with a distinctive figure and natural lustre that matures beautifully over time.' },
    { type: 'p', text: 'European oak is specifically preferred over American white oak for exterior joinery in the UK because it has a higher tannin content, which improves its natural resistance to decay and insect attack. A properly finished oak gate can last 40 years or more.' },
    { type: 'p', text: 'The practical downsides are real. Oak costs 30 to 50 per cent more than iroko for equivalent gate designs. It is also prone to tannin staining in the early years: dark marks that leach from the wood when wet and can discolour adjacent stonework. The staining is cosmetic and fades over time.' },
    {
      type: 'internal-link',
      href: '/services/wooden-driveway-gates/camden/',
      text: 'oak gate installations in Camden and Islington',
      context: 'For the most characterful natural timber, explore our oak gate installations in Camden and Islington.',
    },

    { type: 'h2', text: 'Western Red Cedar: Lightweight and Fragrant' },
    { type: 'p', text: 'Western red cedar is a softwood rather than a hardwood, which makes it significantly lighter. For very large gates where overall weight is a concern for motors and hinges, cedar offers a genuine practical advantage. It also has natural oils that provide reasonable resistance to rot and insect attack.' },
    { type: 'p', text: 'The limitation is strength. Cedar is noticeably softer than iroko or oak and more susceptible to dents, scratches, and impact damage over time. Cedar is best suited to sheltered positions or properties where physical impact is unlikely.' },

    { type: 'h2', text: 'Accoya: The Modern Engineering Solution' },
    { type: 'p', text: 'Accoya is not a species of tree but a modified timber product. Radiata pine is treated through an acetylation process that fundamentally changes the cell structure of the wood, making it exceptionally stable, highly rot-resistant, and dimensionally consistent. The manufacturer offers a 50-year above-ground guarantee on Accoya.' },
    { type: 'p', text: 'In practical terms, Accoya does not swell, shrink, or warp in the way that natural timber can. It takes paint and stain exceptionally well and holds finishes for longer than comparable unmodified timbers. For painted gates, Accoya is arguably the best substrate available.' },
    { type: 'p', text: 'The main downside is cost. Accoya gates typically cost in a similar bracket to oak, and the acetylation process makes Accoya significantly more expensive than iroko.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop', alt: 'Timber driveway gate with natural wood finish in a garden setting' },

    { type: 'h2', text: 'Maintenance: What Each Timber Actually Requires' },
    { type: 'list', items: [
      'Iroko: annual oiling with a quality exterior oil (about 30 minutes per gate), re-staining every 3 to 5 years if a stained finish is used',
      'Oak: annual oiling or staining, attention to tannin staining on adjacent surfaces in the first two years',
      'Cedar: annual treatment with a penetrating exterior oil or preservative stain, close attention to areas where moisture might collect',
      'Accoya (painted): exterior paint touch-up every 5 to 7 years rather than the 2 to 3 years typical of painted softwood',
      'Accoya (oiled): treat similarly to iroko, but the finish lasts noticeably longer between applications',
    ]},

    { type: 'h2', text: 'Which Timber Should You Choose?' },
    { type: 'p', text: 'For most London homeowners, iroko represents the best balance of appearance, durability, and cost. If you want the absolute best natural timber and budget is genuinely secondary, European oak is the traditional premium choice. Choose cedar if you have a very large gate opening where weight matters. Choose Accoya if you want the maximum possible lifespan with the lowest possible maintenance.' },
    { type: 'cta' },
    { type: 'p', text: 'Your gate installer will have views based on years of seeing how these timbers actually perform in real London conditions. Their recommendation is usually well grounded in direct experience, and it is worth listening carefully to their reasoning before making your final decision.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'best-driveway-gate-materials-compared', title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material', category: 'Materials' },
        { slug: 'how-much-do-driveway-gates-cost-london', title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide', category: 'Pricing' },
        { slug: 'annual-gate-maintenance-what-to-expect', title: 'Annual Gate Maintenance: What to Expect and Why It Matters', category: 'Maintenance' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 5 — Automate Existing Gates
// ─────────────────────────────────────────────────────────────────────────────
const article5: BlogArticle = {
  slug: 'how-to-automate-existing-manual-gates',
  title: 'How to Automate Your Existing Manual Gates: A Complete Guide',
  metaTitle: 'Automate Existing Manual Gates | Retrofit Guide for London Homes',
  metaDescription: 'Want to add electric automation to your existing manual driveway gates? Here is everything you need to know about retrofitting motors, intercoms, and smart controls.',
  category: 'Automation',
  publishDate: '2026-02-19',
  featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'You do not always need new gates to get electric convenience. Retrofitting automation to existing manual gates is faster and cheaper than most people expect.',
  content: [
    { type: 'p', text: 'Many London homeowners already have perfectly good manual driveway gates but have grown tired of getting out of the car every time they come home. If your gates are structurally sound and properly hung, adding electric automation is usually a straightforward project and far cheaper than replacing the entire gate.' },
    { type: 'p', text: 'Retrofitting automation is also a quicker route to results. A new bespoke gate can take six to ten weeks from order to installation. An automation retrofit on existing gates can usually be completed within two to three weeks of booking, sometimes faster.' },

    { type: 'h2', text: 'Is Your Gate Suitable for Automation?' },
    { type: 'p', text: 'Not every manual gate can be automated effectively. Before an installer commits to a retrofit, they will check the weight of the gate, the condition of the hinges, the strength and stability of the posts or pillars, and the overall structural integrity of the gate itself.' },
    { type: 'p', text: 'As a general guide, most swing gates under 300kg per leaf and most sliding gates under 600kg can be automated using standard residential motors. Very heavy wrought iron gates may require commercial-grade motors, but the retrofit is still entirely viable in most cases.' },
    { type: 'p', text: 'Hinge condition matters significantly. Worn or corroded hinges cause alignment problems that get worse under motorised operation. If the hinges need replacing, this is usually done as part of the automation project.' },
    {
      type: 'internal-link',
      href: '/services/gate-automation/barnet/',
      text: 'gate automation retrofits in Barnet and North London',
      context: 'Book a free site survey for gate automation retrofits in Barnet and North London — we assess suitability at no charge.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Manual driveway gates ready for automation retrofit' },

    { type: 'h2', text: 'Motor Types for Swing Gate Retrofits' },
    { type: 'p', text: 'For swing gates, there are two main motor configurations. Ram-arm motors mount on the face of the post and connect to the back of the gate via an articulated arm. They are the most common choice for retrofits because installation is straightforward and they are compatible with most existing post configurations.' },
    { type: 'p', text: 'Underground motors are hidden within a chamber excavated beneath the post cap. They produce a very clean aesthetic because there is nothing mechanical visible above ground. The trade-off is cost and installation complexity: fitting underground motors to existing posts requires excavation and careful structural work.' },
    {
      type: 'external-link',
      href: 'https://www.faac.biz/gate-automation-and-barriers',
      text: 'FAAC gate automation: full range of residential swing and sliding gate motors',
      source: 'FAAC',
      rel: 'noopener noreferrer',
    },

    { type: 'h2', text: 'Motor Types for Sliding Gate Retrofits' },
    { type: 'p', text: 'Sliding gate automation uses a rack-and-pinion drive. A toothed rack is fixed along the base of the gate panel, and the motor unit drives the gate along the track via a rotating pinion gear. The motor unit is housed in a steel cabinet bolted to the ground beside the gate.' },
    { type: 'p', text: 'If your existing sliding gate does not have a ground track, a new track will need to be laid and the gate adapted to run on it. Alternatively, if a track-free solution is needed, a cantilever conversion is possible on some gates.' },
    {
      type: 'external-link',
      href: 'https://www.bft-automation.com/en_GB/products/sliding-gate-automation-systems/',
      text: 'BFT sliding gate automation systems — residential and commercial range',
      source: 'BFT Automation',
      rel: 'noopener noreferrer',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'Gate automation motor and control box installation' },

    { type: 'h2', text: 'What a Standard Automation Package Includes' },
    { type: 'list', items: [
      'Motor unit or units: one per leaf for swing gates, one for most sliding gates',
      'Control board with adjustable settings for speed, force limits, and travel length',
      'Two remote handsets as standard, with additional remotes available at a modest extra cost',
      'Safety photocells: infrared sensors that detect objects in the gate path and trigger auto-reverse',
      'Manual release key: allows the gate to be operated by hand during a power cut',
      'Flashing amber warning light that activates whenever the gate is in motion',
      'Programming and testing to confirm all safety devices are operating correctly',
    ]},

    { type: 'h2', text: 'Optional Extras Worth Considering' },
    { type: 'p', text: 'The standard package gives you a functional automated gate, but most homeowners find they want at least some additional features once they understand what is available.' },
    { type: 'list', items: [
      'Video intercom: see and speak to visitors on a colour screen inside the house, with night vision for evening use',
      'Smartphone-connected intercom: answer the gate from your phone anywhere in the world and release the gate remotely',
      'Keypad: allow family members or regular tradespeople to enter a PIN code without needing a remote',
      'Wi-Fi gate control module: open and close the gate from a phone app and see a log of gate operation times',
      'Battery backup unit: keeps the gate cycling for 20 to 50 open-close operations during a power cut',
      'Safety edges: pressure-sensitive strips on the gate leading edge that trigger immediate stop and reverse on contact',
    ]},
    {
      type: 'internal-link',
      href: '/services/gate-intercom-systems/richmond/',
      text: 'video intercom systems fitted alongside gate automation in Richmond',
      context: 'See examples of video intercom systems fitted alongside gate automation in Richmond, Bromley, and South West London.',
    },

    { type: 'h2', text: 'What Does a Retrofit Cost in London?' },
    { type: 'p', text: 'A basic automation retrofit for a pair of swing gates, including two ram-arm motors, safety photocells, a warning light, two remote handsets, and full installation, typically costs between £1,200 and £2,500 in London. Adding a wired colour video intercom brings the total to around £2,000 to £3,500. A comprehensive package with intercom, keypad, Wi-Fi control module, and battery backup generally falls in the £3,000 to £4,500 range.' },
    { type: 'p', text: 'Sliding gate retrofits cost somewhat more because the motor unit is larger and a toothed rack needs to be fixed to the gate. Expect £1,800 to £3,500 for a standard sliding gate retrofit with a basic package.' },

    { type: 'h2', text: 'How Long Does Installation Take?' },
    { type: 'p', text: 'Most swing gate automation retrofits using ram-arm motors are completed in a single working day. The installer arrives, fits the motors, runs and connects the cabling, installs the control board, fits and aligns the safety photocells, and tests and programmes the complete system before leaving.' },
    { type: 'p', text: 'Underground motor retrofits take longer because of the excavation and structural work involved, typically one and a half to two days. Disruption to your property is minimal in almost every case.' },
    {
      type: 'external-link',
      href: 'https://www.dhfonline.org.uk/product-groups/automated-gates--barriers/5.htm',
      text: 'DHF: automated gates and barriers — why use a trained trade member',
      source: 'Door and Hardware Federation',
      rel: 'noopener noreferrer',
    },
    { type: 'cta' },
    { type: 'p', text: 'If you already have manual gates that you are happy with, automating them is one of the most practical home improvements you can make in terms of cost versus daily quality-of-life improvement. Book a free site survey and get an honest assessment of what your existing gates will support.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'gate-intercom-systems-guide-london', title: 'Gate Intercom Systems for London Homes: Video, Audio, and Smart Options Compared', category: 'Automation' },
        { slug: 'driveway-gate-safety-features-explained', title: 'Driveway Gate Safety Features Explained', category: 'Safety' },
        { slug: 'annual-gate-maintenance-what-to-expect', title: 'Annual Gate Maintenance: What to Expect and Why It Matters', category: 'Maintenance' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 6 — Safety Features
// ─────────────────────────────────────────────────────────────────────────────
const article6: BlogArticle = {
  slug: 'driveway-gate-safety-features-explained',
  title: 'Driveway Gate Safety Features Explained: What Every London Homeowner Should Know',
  metaTitle: 'Driveway Gate Safety Features | Essential Guide for Homeowners',
  metaDescription: 'Understanding automated gate safety features including photocells, safety edges, auto-reverse, and compliance requirements for UK residential installations.',
  category: 'Safety',
  publishDate: '2026-02-22',
  featuredImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'Automated gates must comply with safety regulations. Here is what every feature does, why it matters, and how to make sure your installation is compliant.',
  content: [
    { type: 'p', text: 'Automated driveway gates are genuinely powerful pieces of machinery. A typical residential gate weighs between 100 and 400 kilograms, and the motor that drives it generates considerable force throughout the opening and closing cycle. Without the right safety features correctly installed and regularly tested, an automated gate can cause serious injury to people, pets, and vehicles.' },
    { type: 'p', text: 'Gate safety incidents do occur, and the overwhelming majority of them are preventable with properly specified, correctly installed, and well-maintained safety equipment. UK regulations require most of these features as standard, and any reputable London installer will fit them as a matter of course rather than as optional extras.' },

    { type: 'h2', text: 'Photocells: The First Line of Defence' },
    { type: 'p', text: 'Photocells are infrared sensors mounted on the gate posts that project an invisible beam across the gate opening. If anything interrupts that beam while the gate is in motion, the gate stops immediately and reverses. They are the most fundamental safety feature on any automated gate and should be present on every installation without exception.' },
    { type: 'p', text: 'A standard installation includes one pair of photocells positioned at around 30 centimetres above ground level. Better-specified installations add a second pair at 60 to 80 centimetres, which catches objects that the lower beam might miss, including children on bikes, pushchairs, and smaller pets.' },
    { type: 'p', text: 'Photocells need to be kept clean and correctly aligned to work properly. Dirt, spider webs, and vegetation growth can all disrupt the beam. Checking photocell function should be part of every annual service visit.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop', alt: 'Safety photocell sensor mounted on a driveway gate post' },

    { type: 'h2', text: 'Safety Edges: Contact Protection as a Backup' },
    { type: 'p', text: 'Safety edges are pressure-sensitive rubber strips fitted to the leading edge of the gate panel. If the gate makes physical contact with any object during travel, the pressure triggers an immediate stop and reversal. They provide a contact-based layer of protection as a secondary backup to the photocells.' },
    { type: 'p', text: 'For sliding gates, safety edges are typically fitted to the leading edge and to the closing post. For swing gates, they go on the leading edge of each leaf and, ideally, on the closing face of the opposite post.' },
    { type: 'p', text: 'Safety edges do degrade over time. The rubber can harden, crack, or detach. During an annual service, the engineer should physically compress the edge strip and confirm the gate reverses correctly. If the strip is visibly deteriorating, it should be replaced rather than left to fail silently.' },

    { type: 'h2', text: 'Auto-Reverse and Force Limitation' },
    { type: 'p', text: 'Modern gate motors have built-in force sensing that monitors resistance throughout the gate travel. If the gate encounters an unexpected obstacle, the motor detects the change in load and reverses automatically.' },
    { type: 'p', text: 'Force limitation is a legal requirement under the Machinery Directive. The maximum crushing force at any point of the gate travel must not exceed 150 Newtons sustained over five seconds, with a peak of no more than 400 Newtons. Your installer should measure and confirm this during commissioning using a calibrated force measurement device.' },
    {
      type: 'external-link',
      href: 'https://www.legislation.gov.uk/uksi/2008/1597/contents',
      text: 'Supply of Machinery (Safety) Regulations 2008 — full legal text',
      source: 'legislation.gov.uk',
      rel: 'noopener noreferrer',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Automated gate control board and wiring during installation' },

    { type: 'h2', text: 'Warning Lights and Visual Signals' },
    { type: 'p', text: 'A flashing amber warning light should activate whenever the gate begins to move, continuing throughout the full opening and closing cycle. This alerts pedestrians, cyclists, and other road users approaching from outside. In London, where pavements are busy and pedestrians pass close to driveway entrances without expecting movement, this is a particularly important feature.' },

    { type: 'h2', text: 'Manual Release and Power Failure Planning' },
    { type: 'p', text: 'Every automated gate must have a manual release mechanism that allows the gate to be operated by hand in the event of a power failure or motor fault. This is usually a key-operated barrel lock on the motor housing that disengages the drive gear.' },
    { type: 'p', text: 'The manual release should be tested as part of every annual service and the key kept in a known location. Battery backup units are a worthwhile investment if power cuts are a concern in your area. A standard battery backup unit keeps the gate cycling for 20 to 50 open-close operations after mains power is lost.' },

    { type: 'h2', text: 'What UK Regulations Apply to Residential Gates?' },
    { type: 'p', text: 'All automated gates in the UK must comply with the Machinery Directive (retained in UK law following Brexit), the Supply of Machinery Safety Regulations 2008, and the relevant British and European harmonised standards. The most directly applicable standards for residential gates are BS EN 13241 and BS EN 12453.' },
    { type: 'p', text: 'When your gate is installed, the installer should provide a Declaration of Incorporation or Declaration of Conformity, confirm UKCA or CE marking on the motor and control equipment, and hand over a technical file that includes a risk assessment.' },
    {
      type: 'external-link',
      href: 'https://knowledge.bsigroup.com/products/industrial-commercial-and-garage-doors-and-gates-safety-in-use-of-power-operated-doors-requirements-and-test-methods-2',
      text: 'BS EN 12453:2017 — the UK standard for safety in use of power-operated gates',
      source: 'BSI Knowledge',
      rel: 'noopener noreferrer',
    },
    {
      type: 'external-link',
      href: 'https://www.dhfonline.org.uk/pg/legislation-and-standards/37.htm',
      text: 'DHF: legislation and standards for automated gate installers',
      source: 'Door and Hardware Federation',
      rel: 'noopener noreferrer',
    },
    {
      type: 'internal-link',
      href: '/services/gate-safety-inspections/london/',
      text: 'book a gate safety inspection anywhere in London',
      context: 'If you are unsure whether your existing gate meets current standards, book a gate safety inspection anywhere in London through our certified engineer network.',
    },

    { type: 'h2', text: 'Checking and Testing Your Existing Gate' },
    { type: 'list', items: [
      'Photocell test: place an object in the gate opening while the gate is closing and check it stops and reverses immediately',
      'Auto-reverse test: apply gentle, steady resistance to the gate during closing — it should stop and reverse within a second or two',
      'Warning light test: watch for the amber light activating as soon as the gate begins to move',
      'Manual release test: confirm the release key operates smoothly and disengages the drive as expected',
      'Safety edge test (if fitted): press firmly on the rubber strip and confirm the gate reverses',
      'Remote range test: check remotes operate reliably from the furthest point you regularly use them',
    ]},
    { type: 'cta' },
    { type: 'p', text: 'If any of these tests produce an unexpected result, book a service visit promptly. Do not continue using an automated gate that fails a basic safety check. The cost of a service call is negligible compared to the potential consequences of a safety failure on a gate that weighs several hundred kilograms.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'how-to-automate-existing-manual-gates', title: 'How to Automate Your Existing Manual Gates: A Complete Guide', category: 'Automation' },
        { slug: 'annual-gate-maintenance-what-to-expect', title: 'Annual Gate Maintenance: What to Expect and Why It Matters', category: 'Maintenance' },
        { slug: 'gate-intercom-systems-guide-london', title: 'Gate Intercom Systems for London Homes: Video, Audio, and Smart Options Compared', category: 'Automation' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 7 — Best Gate Materials
// ─────────────────────────────────────────────────────────────────────────────
const article7: BlogArticle = {
  slug: 'best-driveway-gate-materials-compared',
  title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material',
  metaTitle: 'Best Driveway Gate Materials Compared | Wood vs Steel vs Aluminium',
  metaDescription: 'A detailed comparison of driveway gate materials for London homes. We cover durability, maintenance, cost, weight, and style for every option.',
  category: 'Materials',
  publishDate: '2026-02-24',
  featuredImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'Each gate material has strengths and trade-offs. This guide covers what really matters so you can make an informed decision.',
  content: [
    { type: 'p', text: 'The material you choose for your driveway gate affects everything about it: how it looks on day one, how it looks after ten years, how much work it takes to keep it that way, how much it costs to buy and install, and how well it does its core job of securing your property. There is no single material that wins on every measure.' },
    { type: 'p', text: 'The right choice depends on your property style, your personal taste, your tolerance for maintenance, your budget, and your priorities around security, privacy, and kerb appeal. This guide gives you a detailed, honest assessment of each option.' },

    { type: 'h2', text: 'Hardwood Timber: Warmth, Character, and Privacy' },
    { type: 'p', text: 'Timber gates offer something no metal can replicate: natural warmth. The grain, colour, and texture of a quality hardwood gate is inherently appealing in a way that powder-coated steel or aluminium simply cannot match. For period properties in London, a well-made timber gate sits naturally within the streetscape.' },
    { type: 'p', text: 'Hardwoods such as iroko and European oak are strong, structurally rigid, and durable in the British climate when properly maintained. A solid tongue-and-groove hardwood gate also provides the best privacy of any material: no gaps, no sightlines into the garden, and a degree of sound insulation from road noise.' },
    { type: 'p', text: 'The main trade-off is maintenance. Timber gates need re-oiling or re-staining on a regular cycle, typically every one to two years. Skip the maintenance for a few years and the wood dries out, checks along the grain, and begins to look tired.' },
    {
      type: 'internal-link',
      href: '/services/wooden-driveway-gates/wandsworth/',
      text: 'hardwood timber gate installations in Wandsworth and South London',
      context: 'For warmth and natural character, see our hardwood timber gate installations in Wandsworth and South London.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', alt: 'Hardwood timber driveway gate with natural grain finish' },

    { type: 'h2', text: 'Mild Steel: Versatile, Strong, and Long-Lasting' },
    { type: 'p', text: 'Mild steel is the most versatile metal used in gate fabrication. It can be worked into virtually any design, from the simplest flat-bar contemporary pattern to elaborate traditional scrollwork. Steel gates are inherently strong, present a serious physical barrier, and when properly prepared and coated, they require almost no attention for decades.' },
    { type: 'p', text: 'The key phrase is "properly prepared." Steel that has not been hot-dip galvanised before powder coating will eventually rust from the inside out. Hot-dip galvanising immerses the entire fabricated gate in molten zinc, coating every surface including welds, joints, and the inside of hollow sections.' },
    { type: 'p', text: 'Steel gates are heavier than aluminium equivalents, which means they require appropriately rated motors and strong, well-founded posts. The weight also works in your favour from a security perspective: a heavy steel gate is a substantial physical deterrent.' },
    {
      type: 'internal-link',
      href: '/services/metal-driveway-gates/ealing/',
      text: 'steel driveway gate installations in Ealing and West London',
      context: 'View our steel driveway gate installations in Ealing and West London, including galvanised and powder-coated options.',
    },

    { type: 'h2', text: 'Aluminium: Low Maintenance, Lightweight, and Modern' },
    { type: 'p', text: 'Aluminium has become increasingly popular for London driveway gates over the past decade. It does not rust under any circumstances, even without protective coating, which makes it genuinely low maintenance over its lifetime. It is significantly lighter than steel, which means smaller motors, less strain on posts, and lower installation costs on many projects.' },
    { type: 'p', text: 'Aluminium gates suit modern and contemporary properties particularly well. Clean horizontal slats, flat bar designs, and minimalist framed panels all work naturally in aluminium and look at home on new-build London properties, converted industrial buildings, and architect-designed extensions.' },
    { type: 'p', text: 'The trade-off versus steel is strength. Aluminium is not as hard or as impact-resistant as mild steel. For most residential security applications this is not a practical concern, but if absolute maximum forced-entry resistance is your priority, steel wins.' },
    {
      type: 'internal-link',
      href: '/services/aluminium-gates/croydon/',
      text: 'aluminium gate installations in Croydon and South London',
      context: 'For a modern, low-maintenance option, explore our aluminium gate installations in Croydon and South London.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Modern aluminium driveway gate with horizontal slatted design' },

    { type: 'h2', text: 'Wrought Iron: Heritage Craftsmanship for Period Properties' },
    { type: 'p', text: 'Hand-forged wrought iron sits in a category of its own. Each wrought iron gate is individually crafted by a blacksmith using traditional techniques. The result is a gate with a level of detail, variation, and character that no machine-fabricated product can replicate. Traditional scrollwork, finials, collars, and forged panels give wrought iron gates a presence and authenticity that suits heritage properties.' },
    { type: 'p', text: 'Wrought iron gates are the premium choice for Georgian, Victorian, and Edwardian properties in London, particularly in conservation areas where design character is under scrutiny from planning officers.' },
    {
      type: 'internal-link',
      href: '/services/wrought-iron-gates/kensington/',
      text: 'hand-forged wrought iron gates in Kensington and Chelsea',
      context: 'See our portfolio of hand-forged wrought iron gates in Kensington and Chelsea, including several conservation area approvals.',
    },
    {
      type: 'external-link',
      href: 'https://historicengland.org.uk/advice/technical-advice/building-in-context/',
      text: 'Historic England: building in context — design guidance for boundary treatments',
      source: 'Historic England',
      rel: 'noopener noreferrer',
    },

    { type: 'h2', text: 'Quick Comparison Summary' },
    { type: 'list', items: [
      'Best for warmth, character, and privacy: hardwood timber (iroko or oak)',
      'Best for design versatility and maximum security: mild steel with hot-dip galvanising',
      'Best for low maintenance and contemporary style: aluminium',
      'Best for heritage and period properties: hand-forged wrought iron',
      'Lowest upfront cost: aluminium flat-bar or treated softwood timber',
      'Lowest lifetime cost over 20 years: aluminium or properly galvanised steel',
      'Highest kerb appeal for period London streets: wrought iron or hardwood timber',
    ]},
    { type: 'cta' },
    { type: 'p', text: 'The most useful conversation you can have is with an experienced installer during a free site survey. They can show you physical samples, explain how each material has performed on similar London properties, and help you weigh the trade-offs against your specific priorities.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'best-wood-for-driveway-gates-uk', title: 'The Best Wood for Driveway Gates in the UK: Iroko, Oak, Cedar, and Accoya Compared', category: 'Materials' },
        { slug: 'how-much-do-driveway-gates-cost-london', title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide', category: 'Pricing' },
        { slug: 'do-driveway-gates-add-property-value', title: 'Do Driveway Gates Add Property Value? What London Estate Agents Say', category: 'Property' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 8 — Property Value
// ─────────────────────────────────────────────────────────────────────────────
const article8: BlogArticle = {
  slug: 'do-driveway-gates-add-property-value',
  title: 'Do Driveway Gates Add Property Value? What London Estate Agents Say',
  metaTitle: 'Do Driveway Gates Add Property Value in London? | Expert Insight',
  metaDescription: 'Find out how much value driveway gates add to London properties. We asked estate agents, surveyors, and homeowners for their real-world experience.',
  category: 'Property',
  publishDate: '2026-02-27',
  featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'Driveway gates are one of the few home improvements that consistently add more value than they cost. Here is the evidence from London property professionals.',
  content: [
    { type: 'p', text: 'Homeowners often justify the cost of driveway gates on security and convenience grounds. But there is an additional financial case that does not get enough attention: quality driveway gates consistently add more to London property values than they cost to install.' },
    { type: 'p', text: 'We gathered insights from London estate agents, RICS-registered surveyors, and homeowners who have recently sold properties with gated driveways. The picture that emerges is consistent: a well-designed, professionally installed gate is one of the more reliable ways to generate a return on a property improvement investment in the London market.' },

    { type: 'h2', text: 'What London Estate Agents Actually Report' },
    { type: 'p', text: 'London estate agents consistently report that quality driveway gates contribute a perceived value uplift of three to five per cent in the right property context. On a property worth £750,000, that represents a potential increase of £22,500 to £37,500 for a gate installation that typically costs between £5,000 and £10,000. Very few home improvements generate that kind of return on investment relative to outlay.' },
    { type: 'p', text: 'The emphasis on quality is equally important. Agents are clear that the uplift comes from well-designed gates that complement the property, installed by experienced professionals using appropriate materials. A cheap gate that does not suit the house can detract from rather than add to perceived value.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'High value London property with well-designed electric driveway gates' },

    { type: 'h2', text: 'Why Gates Add Value: The Underlying Drivers' },
    { type: 'p', text: 'Security is the primary driver of gate-related value uplift. London property crime rates are higher than the national average, and buyers in most London boroughs are acutely aware of vehicle and residential security. A gated driveway signals clearly that the property takes security seriously, which is a tangible selling point that buyers will pay a premium for.' },
    { type: 'p', text: 'Kerb appeal is the secondary driver. The gate is the first visual element a buyer encounters when arriving at a property for a viewing. A well-proportioned, well-designed gate in appropriate materials frames the property, creates a sense of arrival, and suggests that the homeowner has invested thoughtfully in the property as a whole.' },

    { type: 'h2', text: 'Which London Boroughs Benefit Most?' },
    { type: 'p', text: 'The value uplift from driveway gates is greatest in suburban boroughs where detached and semi-detached properties with driveways are common, where property values are high, and where buyers expect a certain level of security and presentation.' },
    { type: 'p', text: 'Boroughs that consistently show the strongest gate-related value response include Barnet, Bromley, Richmond upon Thames, Harrow, Kingston upon Thames, Sutton, and Havering.' },
    {
      type: 'internal-link',
      href: '/services/electric-sliding-gates/barnet/',
      text: 'driveway gate installations in Barnet',
      context: 'See our driveway gate installations in Barnet, one of London\'s top boroughs for gate-related property value uplift.',
    },
    {
      type: 'internal-link',
      href: '/services/electric-swing-gates/richmond/',
      text: 'gate installations in Richmond upon Thames',
      context: 'Browse our portfolio of gate installations in Richmond upon Thames, where premium properties consistently benefit from well-designed entrance gates.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop', alt: 'Suburban London home with gated driveway in a tree-lined street' },

    { type: 'h2', text: 'The Insurance Benefit' },
    { type: 'p', text: 'A number of London insurance brokers have confirmed that automated driveway gates can reduce home insurance premiums by five to fifteen per cent, depending on the insurer, the property location, and the specific features of the gate and access control system. Gates are classified as a physical security improvement.' },
    { type: 'p', text: 'It is worth contacting your existing insurer and at least two brokers to establish the potential saving for your specific property and policy before you purchase.' },

    { type: 'h2', text: 'How to Maximise the Value Impact' },
    { type: 'list', items: [
      'Design for the property: a wrought iron gate suits a Victorian house; a flat-bar aluminium panel suits a contemporary extension',
      'Invest in quality materials: a gate that looks good for five years but then shows rust or warping will be a liability at sale time',
      'Use a reputable, insured installer: buyers and their surveyors do ask about who installed the gate',
      'Keep the gate well maintained: a gate that sticks or has a broken intercom sends a negative signal on viewings',
      'Keep records: installation documentation, safety certificates, and service records give buyers confidence',
      'Consider the complete entrance: pillars, lighting, intercom, and driveway surface all contribute alongside the gate itself',
    ]},
    {
      type: 'external-link',
      href: 'https://trustedtraders.which.co.uk/about-our-code-of-conduct/',
      text: 'Which? Trusted Traders: code of conduct for endorsed home improvement trades',
      source: 'Which? Trusted Traders',
      rel: 'noopener noreferrer',
    },
    { type: 'cta' },
    { type: 'p', text: 'For most London homeowners, driveway gates are an investment that delivers on multiple levels simultaneously: better security, daily convenience, insurance savings, and a genuine contribution to property value. Getting the design and installation right is what makes the difference between a gate that pays for itself and one that simply costs money.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'how-much-do-driveway-gates-cost-london', title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide', category: 'Pricing' },
        { slug: 'do-i-need-planning-permission-driveway-gates-london', title: 'Do I Need Planning Permission for Driveway Gates in London?', category: 'Planning' },
        { slug: 'best-driveway-gate-materials-compared', title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material', category: 'Materials' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 9 — Gate Intercom Systems
// ─────────────────────────────────────────────────────────────────────────────
const article9: BlogArticle = {
  slug: 'gate-intercom-systems-guide-london',
  title: 'Gate Intercom Systems for London Homes: Video, Audio, and Smart Options Compared',
  metaTitle: 'Gate Intercom Systems Guide | Video, Audio & Smart Options',
  metaDescription: 'Choosing the right intercom for your driveway gates. We compare audio, video, Wi-Fi, and smart intercom systems with real pricing for London installations.',
  category: 'Automation',
  publishDate: '2026-03-01',
  featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'An intercom turns your driveway gates from a security barrier into a complete access control system. Here is how to choose the right one.',
  content: [
    { type: 'p', text: 'A driveway gate without an intercom is like a front door without a doorbell or a peephole. You know someone is there because the gate is not opening, but you cannot see who it is or speak to them without leaving the house and walking to the gate. For most London homeowners, adding an intercom to their gate automation is one of the most practical and well-used features in the entire system.' },
    { type: 'p', text: 'The intercom market has developed significantly over the past few years, from simple wired audio systems to high-definition video intercoms with smartphone integration, cloud recording, and remote gate release from anywhere in the world.' },

    { type: 'h2', text: 'Audio-Only Intercoms: Simple and Reliable' },
    { type: 'p', text: 'Audio intercoms are the most straightforward option. A visitor presses a button on the gate panel, you hear them through a handset or wall-mounted speaker inside the house, you speak back, and you press a button to release the gate. The system is wired, robust, and entirely independent of internet connectivity.' },
    { type: 'p', text: 'Audio intercoms start from around £200 to £400 installed alongside a gate automation project. They work reliably for decades with minimal maintenance and are immune to Wi-Fi drop-outs and software update issues.' },
    { type: 'p', text: 'The practical limitation is the obvious one: you cannot see who is at the gate. For most homeowners, this limitation is significant enough to push the decision toward video.' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Gate intercom panel with call button mounted on a brick entrance pillar' },

    { type: 'h2', text: 'Wired Video Intercoms: The Reliable Middle Ground' },
    { type: 'p', text: 'Wired video intercoms add a colour camera to the gate panel. When a visitor presses the call button, their image appears on a monitor inside the house alongside two-way audio. Modern systems use wide-angle lenses and infrared night vision that deliver a clear image in complete darkness.' },
    { type: 'p', text: 'A quality wired video intercom from a reputable manufacturer typically costs £400 to £800 installed alongside a gate automation project. Wired systems have a meaningful reliability advantage over Wi-Fi alternatives: image quality is not affected by signal strength, they do not require an app or a subscription, and they continue working during internet outages.' },
    {
      type: 'internal-link',
      href: '/services/gate-intercom-systems/barnet/',
      text: 'video intercom installation in Barnet and North London',
      context: 'Get a free quote for video intercom installation in Barnet and North London — we fit wired and smart systems to suit every property.',
    },

    { type: 'h2', text: 'Smart Wi-Fi Intercoms: Control Your Gate from Anywhere' },
    { type: 'p', text: 'Smart intercoms connect your gate panel to your home Wi-Fi network and push visitor notifications to your smartphone. When someone presses the call button, your phone rings regardless of where you are in the world. You open the app, see the visitor on a live video feed, speak to them through your phone speaker, and if you want to let them in, press a button to release the gate.' },
    { type: 'p', text: 'This is genuinely transformative for daily life in London. Delivery drivers, contractors, and visitors can all be managed remotely without anyone needing to be home. Popular smart intercom brands used by London gate installers include 2N, DoorBird, Hikvision, and Comelit Smart.' },
    { type: 'p', text: 'Prices range from £500 to £1,200 installed. The key technical requirement is reliable Wi-Fi signal at the gate location. If your router is at the back of the house and the gate is 25 or 30 metres away, a Wi-Fi extender or mesh node solves this at an additional cost of £50 to £200.' },
    {
      type: 'internal-link',
      href: '/services/gate-intercom-systems/richmond/',
      text: 'smart intercom systems in Richmond and Kensington',
      context: 'View our smart intercom installations in Richmond and Kensington, including full smartphone control and cloud recording.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'Smart video intercom system showing colour display and gate control panel' },

    { type: 'h2', text: 'Keypads: The Practical Companion to Any Intercom' },
    { type: 'p', text: 'A keypad allows anyone with a programmed PIN code to open the gate without a remote handset or a smartphone app. For regular visitors such as family members, regular tradespeople, childminders, or gardeners, a keypad removes the need to issue remotes or rely on the intercom every time they arrive.' },
    { type: 'p', text: 'Most residential keypads support between four and twenty separate PIN codes. Keypads cost £150 to £300 to add alongside an automation and intercom project.' },

    { type: 'h2', text: 'Proximity Card and Fob Readers' },
    { type: 'p', text: 'Proximity readers work like contactless payment: you hold a programmed card or fob near the reader and the gate opens. They are faster to use than keypads and do not require you to remember a code, making them popular with households that have multiple regular users including children.' },
    { type: 'p', text: 'Cards and fobs are easy to issue to new users and easy to deactivate if one is lost, without compromising access for everyone else. Cost is similar to keypads: £150 to £350 installed.' },

    { type: 'h2', text: 'What to Specify for Different Property Types' },
    { type: 'list', items: [
      'Family home with regular visitors and deliveries: smart Wi-Fi video intercom plus keypad — remote management and a PIN option for trusted visitors',
      'Period property where aesthetics matter: compact wired video intercom with a pillar-mounted panel that suits the gate design',
      'Rental or multi-tenancy setting: wired video intercom with multiple apartment call system and proximity fob reader for tenants',
      'Security-focused installation: wired video intercom plus motion-triggered recording and cloud storage',
      'Budget-conscious installation: quality wired audio intercom now, with a conduit run to allow a video upgrade later',
    ]},
    { type: 'cta' },
    { type: 'p', text: 'If you are unsure which intercom level is right for your property, tell your installer how you plan to use the gate day to day. A good installer will match the intercom specification to your actual usage pattern rather than defaulting to either the cheapest or the most expensive option.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'how-to-automate-existing-manual-gates', title: 'How to Automate Your Existing Manual Gates: A Complete Guide', category: 'Automation' },
        { slug: 'driveway-gate-safety-features-explained', title: 'Driveway Gate Safety Features Explained', category: 'Safety' },
        { slug: 'annual-gate-maintenance-what-to-expect', title: 'Annual Gate Maintenance: What to Expect and Why It Matters', category: 'Maintenance' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 10 — Annual Maintenance
// ─────────────────────────────────────────────────────────────────────────────
const article10: BlogArticle = {
  slug: 'annual-gate-maintenance-what-to-expect',
  title: 'Annual Gate Maintenance: What to Expect and Why It Matters',
  metaTitle: 'Gate Maintenance Guide | Annual Servicing for London Homeowners',
  metaDescription: 'What does annual gate maintenance involve? We explain what engineers check, what it costs, and why regular servicing prevents expensive repairs.',
  category: 'Maintenance',
  publishDate: '2026-03-03',
  featuredImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop',
  excerpt: 'A one-hour annual service prevents breakdowns, extends the life of your gate system, and keeps your warranty valid. Here is exactly what is involved.',
  content: [
    { type: 'p', text: 'Automated driveway gates are mechanical systems with motors, drive mechanisms, hinges, control electronics, and safety devices that all need periodic attention to continue working safely and reliably. Just as a boiler service or a car service catches small problems before they become expensive failures, annual gate maintenance keeps your system in the condition it was installed in, rather than slowly drifting toward a breakdown.' },
    { type: 'p', text: 'Most experienced London gate engineers recommend a service once a year for gates with normal household use. Gates used very heavily benefit from servicing twice a year. The cost is modest and the value of catching a worn component before it causes a full failure is considerable.' },

    { type: 'h2', text: 'Mechanical Inspection and Lubrication' },
    { type: 'p', text: 'The first part of any thorough gate service is a complete mechanical inspection. The engineer examines every hinge, pivot point, and bearing surface for signs of wear, misalignment, or corrosion. Worn hinges that have developed play cause the gate to sag over time, which puts increasing strain on the motor.' },
    { type: 'p', text: 'All moving parts are cleaned and lubricated using the correct grade of lubricant for the application. The gate structure itself is inspected for deterioration: on metal gates this means looking for paint chips and rust spots; on timber gates it means checking for checking along the grain, swelling at the bottom rail, and the condition of the applied finish.' },
    {
      type: 'internal-link',
      href: '/services/gate-repairs-maintenance/barnet/',
      text: 'annual gate servicing in Barnet and North London',
      context: 'Book your annual gate servicing in Barnet and North London — we cover all makes and models of residential gate systems.',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop', alt: 'Gate engineer lubricating hinges during an annual maintenance service' },

    { type: 'h2', text: 'Motor and Drive Mechanism Checks' },
    { type: 'p', text: 'The motor is the most expensive individual component in the gate system, and it is the component whose failure causes the most disruption. A thorough service includes running the gate through several complete open-close cycles while listening and feeling for any signs of unusual noise, vibration, or hesitation.' },
    { type: 'p', text: 'The engineer checks the motor mounting for security, inspects the connection between the motor and the gate for correct alignment, and examines the drive mechanism for wear. Control board connections are inspected for signs of corrosion or loose wiring. Travel limit settings are verified and adjusted if necessary.' },

    { type: 'h2', text: 'Safety System Testing: The Most Important Part' },
    { type: 'p', text: 'Safety testing is the most important element of any gate service. The engineer carries out a structured series of tests to confirm that every safety device is functioning correctly.' },
    { type: 'p', text: 'Photocell testing involves introducing an object into the gate path while the gate is closing and confirming that the gate stops and reverses immediately. Safety edges, where fitted, are compressed manually to confirm the gate reverses on contact. Auto-reverse function is checked by applying manual resistance to the gate during travel.' },
    {
      type: 'internal-link',
      href: '/services/gate-safety-inspections/london/',
      text: 'gate safety inspection service across all London boroughs',
      context: 'Our gate safety inspection service across all London boroughs covers all safety systems to current BS EN 12453 standards.',
    },
    {
      type: 'external-link',
      href: 'https://www.dhfonline.org.uk/pg/members/34.htm',
      text: 'DHF Automated Gate Group: why choose a trained and accredited gate engineer',
      source: 'Door and Hardware Federation',
      rel: 'noopener noreferrer',
    },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Gate engineer testing safety photocell response during annual service' },

    { type: 'h2', text: 'Force Measurement and Legal Compliance' },
    { type: 'p', text: 'A complete service should include force measurement to verify that the gate operates within the legal limits set by BS EN 12453. The maximum permitted peak force is 400 Newtons, with a maximum sustained force of 150 Newtons over five seconds. Force settings can drift as motors age and mechanical components wear.' },
    { type: 'p', text: 'Not every gate service company carries out force measurement as standard. When booking a service, ask specifically whether force measurement is included.' },
    {
      type: 'external-link',
      href: 'https://www.hse.gov.uk/work-equipment-machinery/index.htm',
      text: 'HSE: work equipment and machinery safety — guidance for homeowners and property managers',
      source: 'Health and Safety Executive',
      rel: 'noopener noreferrer',
    },

    { type: 'h2', text: 'Intercom and Access Control Testing' },
    { type: 'p', text: 'If your gate system includes an intercom, keypad, or proximity reader, these should all be tested as part of the service. The engineer checks camera image quality, microphone and speaker function, call button operation, and gate release from the intercom. Battery backup units, where fitted, are tested under load.' },

    { type: 'h2', text: 'What Does an Annual Service Cost in London?' },
    { type: 'p', text: 'A standard annual service visit in London typically costs between £150 and £250 for a single or double gate system. Annual maintenance contracts, offered by most established London gate companies, include one or two service visits per year, priority response rates for callouts, and discounted parts pricing. These typically cost £200 to £400 per year.' },

    { type: 'h2', text: 'What Happens Without Regular Servicing?' },
    { type: 'p', text: 'The consequences of skipping annual servicing are almost always more expensive than the service itself. Unlubricated components wear faster. Misaligned hinges strain the motor. Dirty photocells that fail silently create a safety hazard. Motor failures are the most disruptive consequence and are disproportionately common on unmaintained systems.' },
    { type: 'p', text: 'Warranty implications are also real. Most motor manufacturers include a condition in their warranty documentation that annual professional servicing must be carried out and recorded. Without service records, a warranty claim for a motor failure may be rejected.' },
    {
      type: 'internal-link',
      href: '/services/gate-repairs-maintenance/bromley/',
      text: 'gate repair and maintenance service in Bromley and South London',
      context: 'If your gate has developed a fault between services, our gate repair and maintenance service in Bromley and South London offers prompt callouts.',
    },
    { type: 'cta' },
    { type: 'p', text: 'The bottom line is a simple one: a £200 annual service protects a gate system that costs £5,000 to £10,000 to install, keeps it operating safely within legal requirements, and preserves the manufacturer warranty. It takes around an hour and causes no meaningful disruption to your day.' },
    {
      type: 'related-articles',
      articles: [
        { slug: 'driveway-gate-safety-features-explained', title: 'Driveway Gate Safety Features Explained', category: 'Safety' },
        { slug: 'how-to-automate-existing-manual-gates', title: 'How to Automate Your Existing Manual Gates: A Complete Guide', category: 'Automation' },
        { slug: 'gate-intercom-systems-guide-london', title: 'Gate Intercom Systems for London Homes: Video, Audio, and Smart Options Compared', category: 'Automation' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

export const blogArticles: BlogArticle[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map(a => a.slug);
}
