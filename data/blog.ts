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
  | { type: 'cta' };

export const blogArticles: BlogArticle[] = [
  // ─── ARTICLE 1 ───
  {
    slug: 'how-much-do-driveway-gates-cost-london',
    title: 'How Much Do Driveway Gates Cost in London? A Full 2026 Pricing Guide',
    metaTitle: 'Driveway Gate Costs London 2026 | Full Pricing Guide',
    metaDescription: 'Wondering what driveway gates cost in London? We break down prices for electric sliding gates, swing gates, wooden gates and more with real installer quotes.',
    category: 'Pricing',
    publishDate: '2026-02-10',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'London driveway gate prices vary enormously depending on material, automation, and design complexity. Here is what homeowners actually pay in 2026.',
    content: [
      { type: 'p', text: 'If you are researching driveway gates for your London property, the first question on your mind is probably "how much is this going to cost me?" The honest answer is that it depends on several factors, but we can give you a clear picture of what homeowners across London are actually paying in 2026.' },
      { type: 'p', text: 'We have collected pricing data from dozens of vetted installers across our network, covering everything from basic manual wooden gates to fully automated sliding systems with video intercoms and smart home integration. The numbers below reflect real quotes, not manufacturer list prices.' },

      { type: 'h2', text: 'Electric Sliding Gates: £4,500 to £12,000' },
      { type: 'p', text: 'Electric sliding gates are the most popular choice for London driveways where space is limited. They move horizontally along a track, so you do not need any swing clearance. A standard aluminium sliding gate with a reliable motor, two remotes, and safety photocells typically starts around £4,500 installed.' },
      { type: 'p', text: 'At the higher end, bespoke steel or wrought iron sliding gates with powder coating, video intercom, keypad entry, and smart phone control push toward £10,000 to £12,000. The biggest cost drivers are gate width (anything over 5 metres adds significantly), material weight, and the complexity of the automation package.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Modern sliding driveway gate on a London property' },

      { type: 'h2', text: 'Electric Swing Gates: £3,500 to £10,000' },
      { type: 'p', text: 'Swing gates are the classic choice and tend to be slightly cheaper than sliding because there is no ground track to install. A pair of timber or steel swing gates with underground motors starts around £3,500. Mid-range installations with intercom and bespoke design sit between £5,000 and £7,500.' },
      { type: 'p', text: 'Premium swing gate projects with hand-forged ironwork, hidden underground motors, video entry, and full smart home integration can reach £10,000 or more. If your driveway has a significant slope, expect to add £500 to £1,500 for the additional engineering required.' },

      { type: 'h2', text: 'Wooden Driveway Gates: £2,500 to £8,000' },
      { type: 'p', text: 'Timber gates offer the widest price range because the wood species makes a huge difference. Softwood gates (treated redwood or pine) start from around £2,500 installed. Hardwood options like iroko or European oak typically fall between £4,000 and £6,000. Accoya, the modified timber with a 50-year guarantee, pushes prices toward £6,000 to £8,000.' },
      { type: 'p', text: 'These prices include hanging and finishing but not automation. If you want electric operation, add £1,200 to £3,500 depending on the motor type and access control features you choose.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', alt: 'Wooden driveway gates on a period London home' },

      { type: 'h2', text: 'Metal Driveway Gates: £2,800 to £9,500' },
      { type: 'p', text: 'Steel and aluminium gates cover a broad spectrum. A simple flat-bar aluminium design with powder coating starts around £2,800. Bespoke mild steel gates with hot-dip galvanising, intricate laser-cut patterns, and RAL colour matching typically cost £4,500 to £7,000. Hand-forged wrought iron with traditional scrollwork and estate-style design can reach £9,500.' },
      { type: 'p', text: 'Metal gates offer the best long-term value because maintenance costs are virtually zero once the galvanising and powder coat are applied. No annual staining, no oiling, no repainting for 20 years or more.' },

      { type: 'h2', text: 'What Affects the Final Price?' },
      { type: 'list', items: [
        'Gate width: wider openings need larger, heavier gates and stronger motors',
        'Material choice: aluminium is lightest and cheapest, wrought iron is heaviest and most expensive',
        'Automation level: basic remote vs full intercom, keypad, and smart phone control',
        'Ground conditions: London clay, sloped driveways, and drainage issues add to groundwork costs',
        'Design complexity: off-the-shelf patterns cost less than fully bespoke designs',
        'Access logistics: tight streets, parking restrictions, and limited skip space in central London can add to labour costs',
      ]},
      { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop', alt: 'Gate installer measuring a London driveway entrance' },

      { type: 'h2', text: 'How to Get the Best Value' },
      { type: 'p', text: 'The single most effective way to get a fair price is to compare quotes from multiple experienced installers. Not three random firms from a directory, but three vetted specialists who have completed dozens of similar projects. That is exactly what our free matching service provides.' },
      { type: 'p', text: 'Every installer in our London network has completed 50 or more residential gate installations, carries full public liability insurance, and offers written warranties. They provide free site surveys with detailed, itemised quotes so you can compare like with like.' },
      { type: 'cta' },
      { type: 'p', text: 'One final tip: be cautious of quotes that seem unusually cheap. In gate installation, low prices often mean thinner steel, cheaper motors, missing safety features, or shortcuts in the groundwork. The difference between a gate that works flawlessly for 15 years and one that causes problems within 18 months often comes down to a few hundred pounds in material and labour quality.' },
    ],
  },

  // ─── ARTICLE 2 ───
  {
    slug: 'do-i-need-planning-permission-driveway-gates-london',
    title: 'Do I Need Planning Permission for Driveway Gates in London?',
    metaTitle: 'Planning Permission for Driveway Gates London | Rules Explained',
    metaDescription: 'Find out whether you need planning permission for driveway gates in London. We cover permitted development rules, conservation areas, and borough-specific guidelines.',
    category: 'Planning',
    publishDate: '2026-02-12',
    featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Most driveway gates in London fall under permitted development, but there are important exceptions. Here is what you need to know before you start.',
    content: [
      { type: 'p', text: 'Planning permission is one of the most common concerns London homeowners raise when considering driveway gates. The good news is that most residential gate installations do not require a formal planning application. However, there are specific situations where you will need permission, and getting it wrong can result in enforcement action and an expensive removal order.' },

      { type: 'h2', text: 'The Basic Rule: Permitted Development' },
      { type: 'p', text: 'Under England\'s permitted development rights, you can install a gate, fence, or wall without planning permission provided it does not exceed 2 metres in height. If your gate is adjacent to a highway used by vehicular traffic, the maximum height drops to 1 metre. For most London driveways, this means a standard gate of up to 2 metres is fine without any application.' },
      { type: 'p', text: 'The gate must also open inward onto your property, not outward onto the pavement or road. Outward-opening gates on a public highway would require planning permission regardless of height.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Residential driveway gates in a London suburb' },

      { type: 'h2', text: 'Conservation Areas and Listed Buildings' },
      { type: 'p', text: 'If your property is in a conservation area, permitted development rights may be restricted. Many London boroughs have Article 4 directions that remove certain permitted development rights in conservation areas. This means a gate that would be fine elsewhere might need a full planning application in a conservation zone.' },
      { type: 'p', text: 'Listed buildings have even stricter requirements. Any alteration that affects the character of a listed building, including new gates, walls, or pillars, requires listed building consent in addition to any planning permission.' },

      { type: 'h2', text: 'London Borough-Specific Rules' },
      { type: 'p', text: 'Some London boroughs have supplementary planning guidance that adds local requirements beyond the national rules. For example, certain boroughs in West and South London have design guidelines for front boundaries in specific streets or estate areas. Your installer should be familiar with the rules in your borough.' },
      { type: 'p', text: 'Boroughs with large conservation areas like Richmond, Kensington and Chelsea, Camden, and Westminster tend to have the most detailed guidance. If you live in one of these areas, it is worth checking with your local planning department before committing to a design.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop', alt: 'Period London property with ornate iron driveway gates' },

      { type: 'h2', text: 'Dropped Kerbs and Crossovers' },
      { type: 'p', text: 'If you are installing driveway gates on a new driveway, you will likely need a dropped kerb (also called a vehicle crossover) to legally drive across the pavement. This requires a separate application to your borough council and typically costs £1,500 to £3,000 in London. If you already have a dropped kerb, you are fine.' },
      { type: 'p', text: 'It is illegal to drive across a pavement without a dropped kerb, regardless of whether you have gates. If your property has an existing driveway with an established crossover, installing gates does not trigger any new crossover requirements.' },

      { type: 'h2', text: 'What Your Installer Should Handle' },
      { type: 'p', text: 'Any experienced London gate installer will check the planning position as part of their free site survey. They will know whether your property is in a conservation area, whether any Article 4 directions apply, and whether your proposed gate design complies with local guidelines. If a planning application is needed, most installers can handle the submission or recommend a planning consultant.' },
      { type: 'cta' },
      { type: 'p', text: 'The key takeaway is this: do not assume you need permission, but do not assume you are exempt either. A five-minute check during the site survey will confirm the position for your specific property and save potential headaches later.' },
    ],
  },

  // ─── ARTICLE 3 ───
  {
    slug: 'electric-sliding-vs-swing-gates-which-is-better',
    title: 'Electric Sliding vs Swing Gates: Which Is Better for Your London Driveway?',
    metaTitle: 'Sliding vs Swing Gates | Which Is Best for London Driveways?',
    metaDescription: 'Comparing electric sliding and swing gates for London homes. We cover space requirements, costs, aesthetics, and which works best for different driveway layouts.',
    category: 'Guides',
    publishDate: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'The sliding vs swing gate debate comes down to your driveway layout, budget, and personal style. Here is an honest comparison to help you decide.',
    content: [
      { type: 'p', text: 'This is the question every London homeowner asks when they start looking at driveway gates. Both options will secure your property, both can be fully automated, and both come in a huge range of materials and styles. The real difference is how they interact with your specific driveway layout.' },
      { type: 'p', text: 'After speaking with hundreds of London installers and homeowners, we have put together this honest comparison. There is no universally "better" option. The right choice depends entirely on your property.' },

      { type: 'h2', text: 'Space: The Deciding Factor' },
      { type: 'p', text: 'Swing gates need room to swing. A standard pair of 2-metre-wide leaves needs at least 2 metres of clear space behind the gate line for the arc. If your driveway is short and cars park close to the entrance, swing gates will not work because the leaves will hit the vehicle.' },
      { type: 'p', text: 'Sliding gates need lateral space instead. The gate slides along your boundary wall or fence, so you need clear space to one side equal to the gate width. If you have a wall or fence running alongside your driveway entrance, sliding is usually the better fit for tight London plots.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Electric sliding gate opening on a London driveway' },

      { type: 'h2', text: 'Cost Comparison' },
      { type: 'p', text: 'Swing gates are typically £500 to £2,000 cheaper than equivalent sliding systems. The saving comes from simpler groundwork (no track installation), lighter motor requirements, and less engineering complexity. For a standard 3.5-metre opening, expect to pay £3,500 to £7,000 for swing vs £4,500 to £9,000 for sliding.' },
      { type: 'p', text: 'However, if your driveway requires significant adaptation for swing gates (levelling a slope, building new pillars, extending the driveway to create swing clearance), the cost advantage can disappear. Sometimes sliding is actually cheaper when the site conditions suit it better.' },

      { type: 'h2', text: 'Slopes and Gradients' },
      { type: 'p', text: 'London has plenty of sloped driveways, especially in hilly areas like Highgate, Crystal Palace, Hampstead, and parts of South London. Swing gates struggle on slopes because the bottom of the gate can scrape the ground as it opens. The steeper the gradient, the worse this problem gets.' },
      { type: 'p', text: 'Sliding gates handle slopes much better because the track can be set level even when the driveway itself slopes. Cantilever sliding gates, which do not use a ground track at all, are the ultimate solution for steep driveways.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Driveway gate on a sloped London property' },

      { type: 'h2', text: 'Aesthetics and Style' },
      { type: 'p', text: 'Swing gates have the edge on traditional aesthetics. The symmetry of a pair of gates opening inward is a look that has worked for centuries and suits period properties perfectly. Underground motors can be completely hidden, leaving the gate and pillars as the only visible elements.' },
      { type: 'p', text: 'Sliding gates have a more contemporary feel. A single panel gliding smoothly along the boundary looks sleek and modern. They work particularly well with flat-bar metal designs, horizontal timber slats, and minimalist architectural styles.' },

      { type: 'h2', text: 'Reliability and Maintenance' },
      { type: 'p', text: 'Both types are highly reliable with modern motors. Sliding gates have a slight edge in windy conditions because the gate is always supported along its full length. Swing gates can catch wind gusts, which puts extra strain on the motors and hinges.' },
      { type: 'p', text: 'Sliding gate tracks need occasional cleaning to remove debris, leaves, and grit. Swing gate hinges need periodic lubrication. Neither requires significant maintenance if professionally installed.' },
      { type: 'cta' },

      { type: 'h2', text: 'Our Recommendation' },
      { type: 'p', text: 'If your driveway is long enough for swing clearance and relatively flat, swing gates are the default choice for most London homeowners. They cost less, look classic, and the motors can be hidden underground.' },
      { type: 'p', text: 'If your driveway is short, slopes significantly, or has a wide opening over 5 metres, sliding gates are almost certainly the better option. The extra cost is justified by the better fit with your space.' },
      { type: 'p', text: 'The best way to settle the question is a free site survey. An experienced installer will look at your driveway for 10 minutes and tell you definitively which type works better for your property.' },
    ],
  },

  // ─── ARTICLE 4 ───
  {
    slug: 'best-wood-for-driveway-gates-uk',
    title: 'The Best Wood for Driveway Gates in the UK: Iroko, Oak, Cedar, and Accoya Compared',
    metaTitle: 'Best Wood for Driveway Gates UK | Iroko vs Oak vs Cedar vs Accoya',
    metaDescription: 'Comparing the best timber species for driveway gates in the UK. We cover durability, maintenance, cost, and appearance for iroko, oak, cedar, and Accoya.',
    category: 'Materials',
    publishDate: '2026-02-17',
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Choosing the right timber for your driveway gates makes the difference between a gate that lasts 10 years and one that lasts 30. Here is how the main species compare.',
    content: [
      { type: 'p', text: 'Timber driveway gates remain one of the most popular choices for London homeowners, and for good reason. Wood offers warmth, character, and design flexibility that no other material can match. But not all wood is created equal, and the species you choose will determine how your gate looks, performs, and ages over the next 20 to 30 years.' },
      { type: 'p', text: 'Here is an honest comparison of the four most commonly used timbers for driveway gates in the UK, based on real-world performance in the British climate.' },

      { type: 'h2', text: 'Iroko: The All-Rounder' },
      { type: 'p', text: 'Iroko is the most popular hardwood for driveway gates in the UK and for good reason. It is naturally oily, which gives it excellent resistance to moisture, rot, and insect attack without heavy treatment. It machines well, takes a beautiful finish, and is significantly cheaper than oak.' },
      { type: 'p', text: 'Fresh iroko has a warm golden-brown colour that darkens slightly over time. If left untreated, it weathers to a silver-grey similar to teak. Most homeowners prefer to oil it annually to maintain the golden tone. Iroko gates typically last 25 to 30 years with basic maintenance.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop', alt: 'Close-up of hardwood timber grain suitable for gates' },

      { type: 'h2', text: 'European Oak: The Premium Choice' },
      { type: 'p', text: 'Oak is the traditional premium choice for gate joinery in the UK. It is exceptionally strong, dense, and durable with a grain pattern that many people find the most attractive of any timber. European oak (Quercus robur) is preferred over American white oak for exterior joinery because it has higher tannin content and better natural resistance to decay.' },
      { type: 'p', text: 'The downside is cost. Oak gates typically cost 30 to 50 percent more than equivalent iroko designs. Oak is also prone to tannin staining, where dark marks leach out when the wood gets wet. This is purely cosmetic and fades over time, but it can stain adjacent stonework or render during the first year or two.' },

      { type: 'h2', text: 'Western Red Cedar: Lightweight and Fragrant' },
      { type: 'p', text: 'Cedar is lighter than iroko or oak, which makes it a good choice for very large gates where weight is a concern. It has natural oils that resist rot and insects, and it has a distinctive warm reddish tone with a pleasant fragrance. Cedar is widely available and competitively priced.' },
      { type: 'p', text: 'The main limitation is strength. Cedar is softer than iroko or oak and more susceptible to dents and impact damage. For a driveway gate that may get knocked by car doors, shopping bags, or children playing, this is worth considering. Cedar gates are best suited to sheltered positions or properties where the gate is less likely to take physical knocks.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop', alt: 'Timber driveway gate with natural wood finish' },

      { type: 'h2', text: 'Accoya: The Modern Solution' },
      { type: 'p', text: 'Accoya is not a wood species but a modified timber product. Radiata pine is treated with an acetylation process that permanently changes the cell structure, making it exceptionally stable, rot-resistant, and dimensionally stable. The manufacturer offers a 50-year above-ground guarantee, which is the longest warranty available for any timber product.' },
      { type: 'p', text: 'Accoya machines and finishes like a high-quality softwood, takes paint and stain beautifully, and does not swell, shrink, or warp the way natural timber can. It is increasingly popular with London gate makers who want to offer a premium product with minimal maintenance requirements. The downside is price: Accoya gates cost roughly the same as oak.' },

      { type: 'h2', text: 'Which Should You Choose?' },
      { type: 'p', text: 'For most London homeowners, iroko offers the best balance of appearance, durability, and cost. If you want the absolute best natural timber and budget is not the primary concern, oak is the premium choice. Cedar works well for very large or lightweight gates in sheltered positions. Accoya is the smart choice if you want maximum lifespan with minimum maintenance and are happy to pay a premium for it.' },
      { type: 'cta' },
      { type: 'p', text: 'Your gate installer will have strong opinions on timber choice based on their experience, and it is worth listening to them. They see how different species perform in real London conditions year after year, and their recommendation is usually well-founded.' },
    ],
  },

  // ─── ARTICLE 5 ───
  {
    slug: 'how-to-automate-existing-manual-gates',
    title: 'How to Automate Your Existing Manual Gates: A Complete Guide',
    metaTitle: 'Automate Existing Manual Gates | Retrofit Guide for London Homes',
    metaDescription: 'Want to add electric automation to your existing manual driveway gates? Here is everything you need to know about retrofitting motors, intercoms, and smart controls.',
    category: 'Automation',
    publishDate: '2026-02-19',
    featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'You do not always need new gates to get electric convenience. Retrofitting automation to existing manual gates is faster and cheaper than most people expect.',
    content: [
      { type: 'p', text: 'Many London homeowners already have perfectly good manual driveway gates but are tired of getting out of the car every time they come home. If your gates are structurally sound and properly hung, adding electric automation is usually straightforward and far cheaper than replacing the entire gate.' },

      { type: 'h2', text: 'Is Your Gate Suitable for Automation?' },
      { type: 'p', text: 'Not every gate can be automated. Your installer will check several things during the site survey: the gate weight (motors have maximum load ratings), hinge condition (worn hinges cause alignment problems), post or pillar strength (the motor exerts significant force), and overall structural integrity.' },
      { type: 'p', text: 'As a rough guide, most swing gates under 300kg per leaf and most sliding gates under 600kg can be automated with standard residential motors. Very heavy wrought iron gates may need commercial-grade motors, which cost more but are still viable.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Manual driveway gates ready for automation retrofit' },

      { type: 'h2', text: 'Motor Types for Retrofit' },
      { type: 'p', text: 'For swing gates, you have two main options. Ram-arm motors mount on the back of the gate and post. They are the most common for retrofits because installation is simple and they work with most existing gate and post configurations. Underground motors are hidden beneath the post cap and offer a cleaner look, but they require excavation and are more expensive to fit.' },
      { type: 'p', text: 'For sliding gates, a rack-and-pinion motor mounts beside the gate opening and drives the gate along the track via a toothed rack bolted to the gate. If your existing sliding gate does not have a track, a new track will need to be installed or a cantilever system specified.' },

      { type: 'h2', text: 'What is Included in an Automation Package?' },
      { type: 'list', items: [
        'Motor unit (one per leaf for swing gates, one for sliding gates)',
        'Control board with adjustable speed, force, and travel settings',
        'Two or four remote handsets (additional remotes available)',
        'Safety photocells that detect objects in the gate path',
        'Manual release key for use during power failures',
        'Flashing warning light that activates during gate movement',
      ]},
      { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'Gate automation control box and motor' },

      { type: 'h2', text: 'Optional Extras Worth Considering' },
      { type: 'list', items: [
        'Video intercom: see and speak to visitors from inside the house or on your phone',
        'Keypad: allow trusted visitors to enter a PIN code without a remote',
        'Wi-Fi module: control the gate from a smart phone app anywhere in the world',
        'Battery backup: keeps the gate working through power cuts for 20 to 50 cycles',
        'Proximity reader: automatic opening when your car approaches (uses a tag or sensor)',
      ]},

      { type: 'h2', text: 'What Does It Cost?' },
      { type: 'p', text: 'A basic automation retrofit for a pair of swing gates, including two ram-arm motors, photocells, two remotes, and installation, typically costs £1,200 to £2,500 in London. Adding a video intercom pushes it to £2,000 to £3,500. A full package with intercom, keypad, Wi-Fi control, and battery backup can reach £3,000 to £4,500.' },
      { type: 'p', text: 'Sliding gate automation costs slightly more because the motor unit is larger and a toothed rack needs to be fitted to the gate. Expect £1,800 to £3,500 for a standard retrofit.' },
      { type: 'cta' },

      { type: 'h2', text: 'How Long Does Installation Take?' },
      { type: 'p', text: 'Most swing gate automation retrofits are completed in a single day. The installer fits the motors, runs cabling, installs the control board and safety devices, and programmes the system. Sliding gate retrofits may take a day and a half if new track work is needed.' },
      { type: 'p', text: 'There is minimal disruption to your property. The main requirement is a power supply near the gate. If one does not exist, the installer can run an armoured cable from your consumer unit, which adds a few hours to the job.' },
    ],
  },

  // ─── ARTICLE 6 ───
  {
    slug: 'driveway-gate-safety-features-explained',
    title: 'Driveway Gate Safety Features Explained: What Every London Homeowner Should Know',
    metaTitle: 'Driveway Gate Safety Features | Essential Guide for Homeowners',
    metaDescription: 'Understanding automated gate safety features including photocells, safety edges, auto-reverse, and compliance requirements for UK residential installations.',
    category: 'Safety',
    publishDate: '2026-02-22',
    featuredImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Automated gates must comply with safety regulations. Here is what every feature does, why it matters, and how to make sure your installation is compliant.',
    content: [
      { type: 'p', text: 'Automated driveway gates are powerful pieces of machinery. A typical residential gate weighs 100 to 400kg and the motor generates significant force to move it. Without proper safety features, an automated gate can cause serious injury to people, pets, and vehicles. This is not scaremongering. Gate safety incidents do happen, and almost all of them are preventable with correctly specified and installed safety equipment.' },

      { type: 'h2', text: 'Photocells: The First Line of Defence' },
      { type: 'p', text: 'Photocells are infrared sensors mounted on the gate posts that create an invisible beam across the gate opening. If anything breaks the beam while the gate is closing, the gate stops immediately and reverses. They are the most basic and most important safety feature on any automated gate.' },
      { type: 'p', text: 'A standard installation uses one pair of photocells at about 30cm above ground level. Better installations add a second pair at 60 to 80cm to catch objects that the lower pair might miss. Some London installers fit a third pair inside the gate to detect anything behind it when opening.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop', alt: 'Safety photocell mounted on a gate post' },

      { type: 'h2', text: 'Safety Edges: Contact Protection' },
      { type: 'p', text: 'Safety edges are pressure-sensitive strips fitted to the leading edge of the gate. If the gate makes contact with a person, pet, or object, the pressure triggers an immediate stop and reverse. They provide contact protection as a backup to the photocells, which rely on the beam being broken.' },
      { type: 'p', text: 'For sliding gates, safety edges are typically fitted to the leading edge and the closing post. For swing gates, they go on the leading edge of each leaf and, ideally, on the post that the gate closes against.' },

      { type: 'h2', text: 'Auto-Reverse and Force Limitation' },
      { type: 'p', text: 'Modern gate motors have built-in force sensing that detects resistance during travel. If the gate encounters an unexpected obstacle, the motor reverses automatically. The sensitivity can be adjusted during commissioning, but it should always be set low enough to detect a child or pet.' },
      { type: 'p', text: 'Force limitation is a legal requirement under the Machinery Directive. The maximum crushing force at any point of the gate travel must not exceed 150 Newtons over 5 seconds, or 400 Newtons peak. Your installer should test this during commissioning with a force measurement device.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Automated gate being tested for safety compliance' },

      { type: 'h2', text: 'Warning Lights and Signage' },
      { type: 'p', text: 'A flashing amber light should activate whenever the gate is in motion. This warns pedestrians, cyclists, and other road users that the gate is operating. In London, where pavement traffic is heavy, this is particularly important for gates that open onto or near a public footpath.' },
      { type: 'p', text: 'Warning signage is also recommended, though not strictly required for residential installations. A small sign saying "Caution: Automated Gate" on both sides of the gate is good practice.' },

      { type: 'h2', text: 'What UK Regulations Apply?' },
      { type: 'p', text: 'All automated gates in the UK must comply with the Machinery Directive (2006/42/EC, retained in UK law post-Brexit), the Supply of Machinery (Safety) Regulations 2008, and relevant British and European standards including BS EN 13241 for industrial, commercial, and garage doors and gates. Residential gates should also comply with BS EN 12453 for safety in use.' },
      { type: 'p', text: 'When your gate is installed, the installer should provide a Declaration of Incorporation or a Declaration of Conformity, confirm CE/UKCA marking, and hand over a technical file including a risk assessment. If your installer does not mention any of this, ask. It is a legal requirement, not optional.' },
      { type: 'cta' },

      { type: 'h2', text: 'How to Check Your Existing Gate' },
      { type: 'p', text: 'If you already have automated gates, it is worth checking that the safety features are working correctly. Test the photocells by placing an object in the beam while the gate is closing. Test the auto-reverse by applying gentle pressure to the gate during travel. Check that the warning light activates. If anything fails, book a service visit promptly.' },
    ],
  },

  // ─── ARTICLE 7 ───
  {
    slug: 'best-driveway-gate-materials-compared',
    title: 'Wood, Steel, Aluminium, or Wrought Iron? Choosing the Right Gate Material',
    metaTitle: 'Best Driveway Gate Materials Compared | Wood vs Steel vs Aluminium',
    metaDescription: 'A detailed comparison of driveway gate materials for London homes. We cover durability, maintenance, cost, weight, and style for every option.',
    category: 'Materials',
    publishDate: '2026-02-24',
    featuredImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Each gate material has strengths and trade-offs. This guide covers what really matters so you can make an informed decision.',
    content: [
      { type: 'p', text: 'The material you choose for your driveway gate affects everything: how it looks, how long it lasts, how much maintenance it needs, and how much it costs. There is no single "best" material. The right choice depends on your property style, your maintenance tolerance, your budget, and your priorities around security, privacy, and aesthetics.' },

      { type: 'h2', text: 'Hardwood Timber' },
      { type: 'p', text: 'Timber gates offer unmatched warmth and character. They suit period properties, garden-heavy front approaches, and homeowners who want a natural, organic look. Hardwoods like iroko and oak are strong, durable, and age beautifully. The main trade-off is maintenance: wooden gates need re-oiling or re-staining every 1 to 2 years to stay in top condition.' },
      { type: 'p', text: 'Timber is also the best material for privacy. A solid tongue-and-groove wooden gate blocks sightlines completely and provides some sound insulation from road noise. For London streets where properties are close together, this can make a real difference to how your front garden feels.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', alt: 'Hardwood timber driveway gate with natural finish' },

      { type: 'h2', text: 'Mild Steel' },
      { type: 'p', text: 'Steel is the most versatile metal for driveway gates. It can be fabricated into virtually any design, from simple flat-bar modern patterns to ornate traditional scrollwork. Steel gates are strong, secure, and when properly galvanised and powder coated, they last 25 years or more with almost zero maintenance.' },
      { type: 'p', text: 'The main consideration is weight. Steel gates are heavy, which means they need strong posts and appropriately rated motors. On the plus side, the weight adds to the security benefit because a heavy steel gate is a serious physical barrier.' },

      { type: 'h2', text: 'Aluminium' },
      { type: 'p', text: 'Aluminium is the lightweight alternative to steel. It does not rust at all, even without galvanising, which makes it the lowest-maintenance metal option. Aluminium gates are available in a wide range of styles and colours, and the lighter weight means smaller motors and less stress on posts and hinges.' },
      { type: 'p', text: 'The trade-off is strength. Aluminium is not as strong as steel, so it provides less physical security against forced entry. For most residential applications, this is not a practical concern, but if maximum security is your priority, steel is the better choice. Aluminium is also more expensive per kilogram than steel, though the lower installation costs often offset this.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', alt: 'Modern aluminium driveway gate with horizontal slats' },

      { type: 'h2', text: 'Wrought Iron' },
      { type: 'p', text: 'Hand-forged wrought iron is the premium choice for traditional properties. Each gate is individually crafted by a blacksmith, giving a level of detail and character that cannot be replicated by machine fabrication. Wrought iron gates suit Victorian, Edwardian, and Georgian properties perfectly and are often the preferred option in conservation areas where heritage aesthetics matter.' },
      { type: 'p', text: 'Wrought iron is the most expensive material for driveway gates and the longest to produce (6 to 10 weeks is typical). Like steel, it must be galvanised and powder coated for rust protection. The result is a gate that is both a functional security feature and a genuine piece of craftsmanship.' },

      { type: 'h2', text: 'Quick Comparison Summary' },
      { type: 'list', items: [
        'Best for warmth and privacy: Hardwood timber',
        'Best for design versatility and security: Mild steel',
        'Best for low maintenance and light weight: Aluminium',
        'Best for traditional heritage properties: Wrought iron',
        'Cheapest upfront: Timber (softwood) or aluminium',
        'Cheapest over 20 years: Aluminium or galvanised steel (minimal maintenance)',
      ]},
      { type: 'cta' },
      { type: 'p', text: 'The best advice is to discuss materials with your installer during the site survey. They can show you samples, explain how each material works on your specific property, and help you balance aesthetics, budget, and practicality.' },
    ],
  },

  // ─── ARTICLE 8 ───
  {
    slug: 'do-driveway-gates-add-property-value',
    title: 'Do Driveway Gates Add Property Value? What London Estate Agents Say',
    metaTitle: 'Do Driveway Gates Add Property Value in London? | Expert Insight',
    metaDescription: 'Find out how much value driveway gates add to London properties. We asked estate agents, surveyors, and homeowners for their real-world experience.',
    category: 'Property',
    publishDate: '2026-02-27',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Driveway gates are one of the few home improvements that consistently add more value than they cost. Here is the evidence from London property professionals.',
    content: [
      { type: 'p', text: 'Homeowners often justify driveway gates on security and convenience grounds, but the property value uplift is a powerful bonus that does not get enough attention. We spoke to London estate agents, RICS surveyors, and homeowners who have sold properties with gates to find out what the real impact is.' },

      { type: 'h2', text: 'The Numbers: What Agents Report' },
      { type: 'p', text: 'London estate agents consistently report that quality driveway gates add 3 to 5 percent to perceived property value. On a £750,000 London home, that is a potential uplift of £22,500 to £37,500 for a gate installation that typically costs £5,000 to £10,000. Few home improvements offer that kind of return on investment.' },
      { type: 'p', text: 'The key word is "quality." Agents emphasise that the uplift comes from well-designed, professionally installed gates that complement the property. A cheap gate badly fitted can actually detract from kerb appeal. The investment in a proper installation by an experienced specialist is what creates the value.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'High-value London property with electric driveway gates' },

      { type: 'h2', text: 'Why Gates Add Value' },
      { type: 'p', text: 'Security is the primary driver. In London, where property crime rates are higher than the national average, a secured driveway entrance is a tangible selling point that buyers specifically look for. Automated gates with intercom access signal that the property takes security seriously.' },
      { type: 'p', text: 'Kerb appeal is the secondary driver. Gates are the first thing a buyer sees. A well-designed gate frames the property, creates a sense of arrival, and suggests that the homeowner has invested in the property as a whole. First impressions matter enormously in property sales.' },

      { type: 'h2', text: 'Which Properties Benefit Most?' },
      { type: 'p', text: 'The value uplift is greatest on detached and semi-detached properties in suburban London boroughs like Barnet, Bromley, Richmond, Harrow, and Kingston. These are areas where driveways are common, property values are high, and buyers expect a certain standard of security and presentation.' },
      { type: 'p', text: 'In central London, where driveways are rare and front gardens are small, the impact is more variable. But where a driveway exists, gating it is almost always a net positive for value.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop', alt: 'Suburban London home with gated driveway' },

      { type: 'h2', text: 'The Insurance Angle' },
      { type: 'p', text: 'Several London insurance brokers have confirmed that automated driveway gates can reduce home insurance premiums by 5 to 15 percent, depending on the insurer and the area. Gates are classified as a physical security improvement, similar to burglar alarms and CCTV. Over the life of a policy, these savings add up.' },

      { type: 'h2', text: 'Making It Count' },
      { type: 'p', text: 'To maximise the value impact, choose a gate design that suits your property style, use quality materials that will age well, and make sure the installation is done by an experienced specialist. A gate that looks great on day one but develops rust spots or motor problems within a couple of years will hurt rather than help your property value.' },
      { type: 'cta' },
    ],
  },

  // ─── ARTICLE 9 ───
  {
    slug: 'gate-intercom-systems-guide-london',
    title: 'Gate Intercom Systems for London Homes: Video, Audio, and Smart Options Compared',
    metaTitle: 'Gate Intercom Systems Guide | Video, Audio & Smart Options',
    metaDescription: 'Choosing the right intercom for your driveway gates. We compare audio, video, Wi-Fi, and smart intercom systems with real pricing for London installations.',
    category: 'Automation',
    publishDate: '2026-03-01',
    featuredImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'An intercom turns your driveway gates from a security barrier into a complete access control system. Here is how to choose the right one.',
    content: [
      { type: 'p', text: 'A driveway gate without an intercom is like a front door without a doorbell. You know someone is there, but you cannot see who it is or talk to them without walking outside. For most London homeowners, adding an intercom to their gate automation is one of the best investments they can make in daily convenience and security.' },

      { type: 'h2', text: 'Audio Intercoms: The Basic Option' },
      { type: 'p', text: 'Audio-only intercoms are the simplest and cheapest option. A visitor presses a button at the gate, you hear their voice through a handset inside the house, and you can talk back and release the gate. Systems start from around £200 to £400 installed alongside a gate automation package.' },
      { type: 'p', text: 'The obvious limitation is that you cannot see who is there. If you are not expecting anyone, you are relying entirely on voice to identify the visitor. For this reason, most London homeowners prefer video.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop', alt: 'Gate intercom panel mounted on a brick pillar' },

      { type: 'h2', text: 'Video Intercoms: See Before You Open' },
      { type: 'p', text: 'Video intercoms add a camera to the gate panel so you can see the visitor on a screen inside the house. Modern systems use colour cameras with wide-angle lenses and infrared night vision. You can see clearly who is at the gate regardless of the time of day or weather conditions.' },
      { type: 'p', text: 'Wired video intercoms cost £400 to £800 installed. They are reliable, high quality, and do not depend on Wi-Fi signal reaching the gate. The indoor monitor can be wall-mounted or sit on a desk. Some systems support multiple monitors in different rooms.' },

      { type: 'h2', text: 'Wi-Fi and Smart Intercoms: Control From Anywhere' },
      { type: 'p', text: 'Smart intercoms connect to your home Wi-Fi and send a notification to your phone when someone presses the gate button. You can see the visitor on your phone camera feed, talk to them, and release the gate, all from anywhere in the world. If you are at work and a delivery driver rings, you can let them onto the driveway without being home.' },
      { type: 'p', text: 'Popular smart intercom brands include 2N, Hikvision, DoorBird, and Ring (with a compatible relay module for gate control). Prices range from £500 to £1,200 installed. The key requirement is reliable Wi-Fi signal at the gate location. If your router is at the back of the house and the gate is 30 metres away, you may need a Wi-Fi extender or mesh system.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', alt: 'Smart gate intercom with video screen' },

      { type: 'h2', text: 'Keypad and Card Access' },
      { type: 'p', text: 'Keypads allow trusted visitors, family members, cleaners, or gardeners to enter a PIN code to open the gate without a remote or phone. They are a practical addition that costs £150 to £300 on top of the intercom system. Most keypads support multiple codes, so you can give different people different PINs and track who used which code.' },
      { type: 'p', text: 'Proximity card readers work like hotel key cards. You hold a card or fob near the reader and the gate opens. They are popular in multi-household settings or properties with regular staff access.' },

      { type: 'h2', text: 'Our Recommendation for London Homes' },
      { type: 'p', text: 'For most London homeowners, a Wi-Fi video intercom with a keypad is the sweet spot. It gives you visual identification, remote access, and a backup entry method for trusted visitors. Budget around £600 to £1,000 for this combination installed alongside your gate automation.' },
      { type: 'cta' },
      { type: 'p', text: 'If you are on a tighter budget, a basic wired video intercom at £400 to £600 is still a significant step up from no intercom at all. You can always add Wi-Fi capability later with a retrofit module.' },
    ],
  },

  // ─── ARTICLE 10 ───
  {
    slug: 'annual-gate-maintenance-what-to-expect',
    title: 'Annual Gate Maintenance: What to Expect and Why It Matters',
    metaTitle: 'Gate Maintenance Guide | Annual Servicing for London Homeowners',
    metaDescription: 'What does annual gate maintenance involve? We explain what engineers check, what it costs, and why regular servicing prevents expensive repairs.',
    category: 'Maintenance',
    publishDate: '2026-03-03',
    featuredImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'A one-hour annual service prevents breakdowns, extends the life of your gate system, and keeps your warranty valid. Here is exactly what is involved.',
    content: [
      { type: 'p', text: 'Automated driveway gates are mechanical systems with moving parts, electrical components, and safety devices that all need periodic attention. Just like a boiler service or a car MOT, annual gate maintenance catches small problems before they become expensive failures. Most London gate engineers recommend servicing once a year, or twice a year for gates with very heavy use.' },

      { type: 'h2', text: 'What Does an Annual Service Include?' },
      { type: 'p', text: 'A thorough annual gate service covers mechanical, electrical, and safety checks. The engineer will inspect and lubricate all hinges, pivots, and bearing points. They will check the motor for unusual noise, vibration, or overheating. The drive mechanism (ram arm, underground unit, or rack and pinion) is inspected for wear and correct alignment.' },
      { type: 'p', text: 'For sliding gates, the track is cleaned of debris, leaves, and grit, and the wheels or rollers are checked for wear. The engineer also inspects the gate structure itself: looking for signs of rust on metal gates, checking timber for rot or splitting, and verifying that fixings and brackets are tight.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop', alt: 'Gate engineer performing annual maintenance service' },

      { type: 'h2', text: 'Safety System Testing' },
      { type: 'p', text: 'The most important part of any gate service is testing the safety systems. The engineer will check that photocells respond correctly by placing an object in the beam during gate travel. Safety edges are tested for pressure sensitivity. Auto-reverse function is verified by applying gentle resistance to the gate.' },
      { type: 'p', text: 'Force measurement may also be carried out to confirm that the gate does not exceed the maximum 400 Newton peak force at any point in its travel. This is a legal requirement and failure to comply can create liability if someone is injured.' },

      { type: 'h2', text: 'Electrical and Control Checks' },
      { type: 'p', text: 'The control board is inspected for loose connections, signs of moisture ingress, and component wear. Battery backup systems are tested. Remote handsets are checked for signal strength and range. If an intercom system is fitted, the camera, speaker, microphone, and gate release function are all tested.' },
      { type: 'p', text: 'The engineer will also check the manual release mechanism. This is the key-operated override that allows you to open the gate by hand during a power failure. If the manual release is stiff, corroded, or blocked, it will be freed up and lubricated.' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', alt: 'Gate control board being inspected during service' },

      { type: 'h2', text: 'How Much Does It Cost?' },
      { type: 'p', text: 'A standard annual service in London typically costs £150 to £250 for a single or double gate. This covers the engineer visit, all checks and adjustments, lubrication, and minor consumables. If parts need replacing, the engineer will quote separately before carrying out any additional work.' },
      { type: 'p', text: 'Many London gate companies offer annual maintenance contracts that include one or two service visits per year, priority callout rates for emergencies, and discounted parts. These contracts typically cost £200 to £400 per year and offer good value if your gate is used heavily.' },

      { type: 'h2', text: 'What Happens If You Skip Servicing?' },
      { type: 'p', text: 'The most common consequence of skipping annual servicing is a breakdown at an inconvenient moment. Motors that have not been lubricated wear out faster. Photocells that are dirty or misaligned may fail to detect objects. Hinges that have not been adjusted put extra strain on the motor, shortening its life.' },
      { type: 'p', text: 'Skipping servicing can also void your manufacturer warranty. Most motor manufacturers require annual professional servicing as a condition of the warranty. If a motor fails after 3 years and you have no service records, the warranty claim may be rejected.' },
      { type: 'cta' },
      { type: 'p', text: 'The bottom line is simple: a £200 annual service can prevent a £1,500 motor replacement. It takes about an hour, causes no disruption, and gives you peace of mind that everything is working safely and efficiently.' },
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map(a => a.slug);
}
