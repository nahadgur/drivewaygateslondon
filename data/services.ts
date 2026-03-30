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
}

export const services: Service[] = [
  {
    id: 'electric-sliding',
    title: 'Electric Sliding Gates',
    slug: 'electric-sliding-gates',
    description: 'Space-saving automated gates that slide horizontally along your boundary wall. Perfect for driveways where a swinging gate would eat into parking space.',
    image: '/images/gates/gate-aluminium-sliding-modern-dark-brick.png',
    icon: 'Zap',
    color: 'amber',
    faqs: [
      { question: "How much space do I need for a sliding gate?", answer: "You need clear space along your boundary wall or fence equal to the width of the gate opening, plus about 500mm. So if your driveway entrance is 4 metres wide, you need roughly 4.5 metres of unobstructed wall to one side. Our installers will measure during the site survey and advise on any adjustments needed." },
      { question: "Can a sliding gate work on a sloped driveway?", answer: "Yes, but it takes careful planning. Sliding gates run on a ground track, so the track needs to be level even if the driveway itself slopes. Experienced installers can work with gradients by adjusting the track bed and using cantilever systems for steeper sites. This is something to discuss at the survey stage." },
      { question: "How long does a sliding gate installation take?", answer: "Most residential sliding gate installations in London take 2 to 4 days. Day one covers groundwork, track laying, and post installation. Day two is the gate itself and automation. Days three and four, if needed, handle finishing, intercom wiring, and final testing. Complex sites or bespoke designs may take a day or two longer." },
    ],
  },
  {
    id: 'electric-swing',
    title: 'Electric Swing Gates',
    slug: 'electric-swing-gates',
    description: 'Classic double or single swing gates with electric automation. The most popular choice for London driveways with enough clearance in front of or behind the gate.',
    image: '/images/gates/gate-aluminium-swing-open-luxury-garden.png',
    icon: 'Shield',
    color: 'emerald',
    faqs: [
      { question: "Should my swing gates open inward or outward?", answer: "In most cases, gates must open inward onto your property. UK planning rules generally prevent gates from opening outward over a public footpath or road. If your driveway slopes downward from the road, inward opening can be tricky, so your installer may recommend underground motors or articulated arm systems to manage the gradient." },
      { question: "How wide should swing gates be?", answer: "For a comfortable fit, most London driveways work well with a total opening of 3 to 4 metres for cars, or up to 5 metres if you need space for larger vehicles. Your installer will assess the driveway width, pillar positions, and turning angles during the survey. Double gates split the opening into two leaves for a balanced look." },
      { question: "Do swing gates need planning permission?", answer: "Generally no, provided the gate is under 2 metres tall (or under 1 metre if next to a highway) and your property is not listed or in a conservation area. Some London boroughs have additional guidelines, so your installer will advise on any local restrictions during the initial consultation." },
    ],
  },
  {
    id: 'wooden-gates',
    title: 'Wooden Driveway Gates',
    slug: 'wooden-driveway-gates',
    description: 'Handcrafted timber gates that bring warmth and character to your property. Available in hardwoods like iroko and oak, or treated softwoods for a more affordable option.',
    image: '/images/gates/gate-wooden-oak-swing-cottage-garden.png',
    icon: 'Sparkles',
    color: 'amber',
    faqs: [
      { question: "How long do wooden driveway gates last?", answer: "With proper treatment and maintenance, hardwood gates like iroko or oak can last 25 years or more. Treated softwood gates typically last 10 to 15 years. London's damp climate means regular re-staining or oiling is important. Most of our installers offer maintenance packages that include annual treatments to keep your gates looking and performing their best." },
      { question: "Can wooden gates be automated?", answer: "Absolutely. Wooden gates work perfectly with both underground swing motors and ram-arm automation systems. The key consideration is the weight of the gate. Hardwood gates are heavier, so the motor needs to be rated for the load. Your installer will specify the right motor for the timber type and gate size during planning." },
      { question: "What type of wood is best for London weather?", answer: "Iroko is the top choice for London because it is naturally resistant to moisture and does not warp easily. European oak is another excellent option with a more traditional look. Western red cedar is lighter and works well for smaller gates. Accoya, a modified wood with a 50-year guarantee, is gaining popularity for London properties that want maximum longevity." },
    ],
  },
  {
    id: 'metal-gates',
    title: 'Metal Driveway Gates',
    slug: 'metal-driveway-gates',
    description: 'Wrought iron, steel, and aluminium gates ranging from traditional ornate designs to sleek contemporary styles. Built to last and available in any colour.',
    image: '/images/gates/gate-wrought-iron-ornate-daytime-manor.png',
    icon: 'Globe',
    color: 'sky',
    faqs: [
      { question: "What is the difference between wrought iron, steel, and aluminium gates?", answer: "Wrought iron is hand-forged and gives a traditional, ornate look but needs regular rust protection. Mild steel is the most common choice for bespoke gates as it balances strength, design flexibility, and cost. Aluminium is lightweight, rust-proof, and ideal for automated systems, though it has a different aesthetic. Your installer will recommend the best metal for your design and budget." },
      { question: "Do metal gates rust in London?", answer: "Steel and iron gates will rust without proper protection. All reputable installers hot-dip galvanise metal gates before powder coating, which gives a minimum 20 years of protection. Aluminium gates do not rust at all. For London, where moisture and pollution are factors, galvanising plus powder coating is the standard specification." },
      { question: "Can I get a bespoke metal gate design?", answer: "Yes, and this is one of the biggest advantages of metal. Our London installers work with skilled fabricators who can create virtually any design, from traditional Victorian scrollwork to ultra-modern horizontal slat styles. Most will provide CAD drawings or 3D renders so you can visualise the gate on your property before committing to the build." },
    ],
  },
  {
    id: 'automated-systems',
    title: 'Automated Gate Systems',
    slug: 'automated-gate-systems',
    description: 'Full automation packages including motors, intercoms, keypads, remote controls, and smart home integration. Upgrade an existing gate or include with a new installation.',
    image: '/images/gates/gate-automation-intercom-evening-lighting.png',
    icon: 'Medal',
    color: 'indigo',
    faqs: [
      { question: "Can I automate my existing driveway gates?", answer: "In most cases, yes. If your existing gates are structurally sound and properly hung, a motor system can be retrofitted. The installer will check the gate weight, condition, and hinge alignment during a site visit. Wooden gates sometimes need hinge upgrades to handle the motor load, and older wrought iron gates may need reinforcing, but these are straightforward fixes." },
      { question: "What happens if there is a power cut?", answer: "Every automated gate system we install includes a manual release key so you can open the gates by hand during a power failure. Many systems also include battery backup that keeps the gate running for 20 to 50 cycles after the mains goes down. Solar-powered options are also available for properties where mains connection is difficult." },
      { question: "Can I control my gate from my phone?", answer: "Yes. Most modern gate motors are compatible with Wi-Fi modules or smart home systems. You can open your gate remotely via an app, set schedules, receive alerts when the gate opens, and integrate with Ring, Google Home, or Amazon Alexa. Your installer will set up the smart connectivity as part of the automation package." },
    ],
  },
  {
    id: 'gate-repair',
    title: 'Gate Repair and Maintenance',
    slug: 'gate-repair-and-maintenance',
    description: 'Keep your gates running smoothly with regular servicing, or fix problems fast with same-day repair callouts across London. Motors, hinges, intercoms, and safety systems.',
    image: '/images/gates/gate-swing-open-night-stone-pillars-drive.png',
    icon: 'Users',
    color: 'rose',
    faqs: [
      { question: "How often should driveway gates be serviced?", answer: "We recommend a full service every 12 months. This covers motor lubrication, safety sensor testing, hinge adjustment, track cleaning for sliding gates, intercom checks, and a general structural inspection. Annual servicing catches small problems before they become expensive repairs and keeps your manufacturer warranty valid." },
      { question: "My gate is making a grinding noise. What should I do?", answer: "A grinding noise usually indicates debris in the track (for sliding gates), worn motor gears, or misaligned hinges. Stop using the gate on auto mode until an engineer inspects it, as forcing a misaligned gate can damage the motor. Use the manual release to open and close it in the meantime. Most London engineers can attend within 24 to 48 hours." },
      { question: "How much does a gate repair callout cost?", answer: "Most London gate engineers charge a callout fee of £80 to £150 depending on the area, plus parts and labour. Common repairs like motor replacement, sensor realignment, or intercom fixes typically cost £200 to £600 all in. For older systems where parts are discontinued, upgrading the motor unit may be more cost-effective than sourcing rare spares." },
    ],
  },

  {
    id: 'gate-automation-kits',
    title: 'Gate Automation (Retrofit)',
    slug: 'gate-automation-kits',
    description: 'Already have manual gates? Add motors, intercoms, and smart access without replacing the gate itself. Retrofit automation works on most timber and metal swing or sliding gates.',
    image: '/images/gates/gate-aluminium-sliding-modern-dark-brick-2.png',
    icon: 'Zap',
    color: 'indigo',
    faqs: [
      { question: "Can any manual gate be automated?", answer: "Most structurally sound manual gates can be retrofitted with automation. The installer checks the gate weight, hinge condition, and overall structural integrity during the site survey. Timber gates sometimes need hinge upgrades to handle the load, and very heavy wrought iron gates may need reinforcing, but these are straightforward jobs. If your gates are rotten, badly warped, or corroded beyond repair, replacement is usually the better route." },
      { question: "What does a retrofit automation kit include?", answer: "A typical retrofit package includes the gate motor or motors (swing arm, underground, or sliding rack-and-pinion depending on your gate type), safety photocells, a control board, remotes, and a manual emergency release key. We also offer add-ons including video intercoms, GSM openers for phone control, keypads, and smart home integration with systems like Ring, Google Home, and Control4." },
      { question: "How much does it cost to automate existing gates in London?", answer: "Retrofit automation for a standard pair of residential swing gates in London typically costs between £1,200 and £2,500 all in, depending on motor type, gate weight, and any additional access control you want. Sliding gate automation with a rack-and-pinion motor generally runs £1,500 to £3,000. Underground motors cost more than ram-arm systems but give a cleaner aesthetic. Your installer will quote based on a site survey." },
    ],
  },
  {
    id: 'commercial-gates',
    title: 'Commercial Gates',
    slug: 'commercial-gates',
    description: 'Heavy-duty security gates for schools, industrial estates, office parks, car parks, and commercial premises across London. CCTV integration, access control, and LPS 1175 rated options.',
    image: '/images/gates/gate-wrought-iron-aerial-gold-trim-estate.png',
    icon: 'Shield',
    color: 'sky',
    faqs: [
      { question: "What types of commercial gate do you cover?", answer: "We cover the full range of commercial gate types: heavy-duty sliding security gates, bi-folding speed gates, rising arm barriers, full-height turnstiles, and traffic boom barriers. For industrial and warehousing sites we also handle vehicle access barriers rated for HGV traffic. All commercial gates are installed to BS EN 13241 and BS 8300 standards where applicable." },
      { question: "Do commercial gates need different planning permission to residential ones?", answer: "Generally yes. Commercial gate installations often require a formal planning application, particularly where the gate affects vehicular access from a public highway, changes the appearance of a listed building or conservation area, or exceeds 2 metres in height. Our network includes installers who handle the planning process on your behalf and are experienced with local authority requirements across all London boroughs." },
      { question: "What access control options are available for commercial sites?", answer: "Commercial sites typically use a combination of access control systems: proximity card or fob readers, PIN keypads, biometric readers, ANPR (automatic number plate recognition) for vehicle access, video intercoms with remote door release, and integration with site-wide CCTV and security management software. We can specify and install standalone systems or fully integrated solutions linked to existing on-site infrastructure." },
    ],
  },

  {
    id: 'aluminium-gates',
    title: 'Aluminium Driveway Gates',
    slug: 'aluminium-driveway-gates',
    description: 'Lightweight, rust-proof aluminium gates in any RAL colour. The fastest-growing gate material in London — zero maintenance, sharp modern aesthetics, and 25-year powder coat guarantees.',
    image: '/images/gates/gate-aluminium-sliding-vertical-bar-modern.png',
    icon: 'Sparkles',
    color: 'sky',
    faqs: [
      { question: "Why are aluminium gates becoming so popular in London?", answer: "Aluminium does not rust, never needs repainting, and is light enough for large gates to run on smaller, quieter motors. The powder coat finish is baked on at the factory and typically carries a 25-year guarantee. In London, where damp weather and pollution accelerate corrosion on steel and iron, aluminium has become the go-to for homeowners who want a premium gate without any maintenance burden." },
      { question: "Are aluminium gates as strong as steel?", answer: "For residential applications, yes. Modern aluminium gate profiles use hollow sections with internal reinforcement that match the rigidity of equivalent mild steel designs. The weight saving means less stress on hinges and motors, which actually increases the long-term reliability of the whole system. For very large commercial gates, steel is still preferable, but for residential driveways up to 6 metres wide, aluminium is perfectly adequate." },
      { question: "What colours are available for aluminium gates?", answer: "Any RAL colour. The standard palette runs to over 200 shades, but custom RAL matches are also available. The most popular choices in London currently are Anthracite Grey (RAL 7016), Jet Black (RAL 9005), and Slate Grey (RAL 7015). Dual-tone finishes, where the outer face is a different colour to the inner face, are also increasingly popular and add no significant cost." },
    ],
  },
  {
    id: 'composite-gates',
    title: 'Composite Driveway Gates',
    slug: 'composite-driveway-gates',
    description: 'The fastest-growing gate material in London. Composite gates give you the authentic timber look without rot, warping, or annual maintenance. Ideal for homeowners who want wood aesthetics with zero upkeep.',
    image: '/images/gates/gate-aluminium-swing-open-contemporary-mansion.png',
    icon: 'Globe',
    color: 'amber',
    faqs: [
      { question: "What exactly is a composite gate?", answer: "Composite gates use a structural aluminium or galvanised steel frame clad in composite boarding — a mixture of wood fibre and polymer that looks and feels like real timber but does not absorb moisture, rot, warp, or require annual treatment. The boards slot into the frame and are available in various wood-effect finishes including oak, mahogany, and driftwood grey. The result is a gate that looks like a bespoke hardwood design but needs nothing more than an occasional wash." },
      { question: "How long do composite gates last?", answer: "The structural frame is galvanised steel or aluminium, so it will outlast the house. The composite cladding typically comes with a 15 to 25 year warranty from the manufacturer against rot, splitting, and colour fade. In London's climate, composite outperforms both untreated softwood and many hardwoods when it comes to long-term durability with zero maintenance." },
      { question: "Are composite gates suitable for automation?", answer: "Yes, and they are well-suited to it. Because composite gates use a metal structural frame, the motor mounts are solid and the gate weight is predictable. The composite cladding does not swell in wet weather, which eliminates one of the most common automation problems with traditional timber gates. Our installers specify the motor to the gate weight and design during the site survey." },
    ],
  },
  {
    id: 'hardwood-gates',
    title: 'Hardwood Driveway Gates',
    slug: 'hardwood-driveway-gates',
    description: 'Premium iroko, European oak, and Accoya gates for heritage homes, conservation areas, and affluent London properties. Hand-crafted to match your property\'s character, with 25-year material guarantees.',
    image: '/images/gates/gate-wooden-oak-swing-cottage-flowers.png',
    icon: 'Medal',
    color: 'amber',
    faqs: [
      { question: "What is the best hardwood for London driveway gates?", answer: "Iroko is the most popular choice for London. It is naturally oily, resists moisture without heavy treatment, and does not warp easily in the damp-dry cycles of a London year. European oak is the premium alternative — it weathers to a beautiful silver-grey if left untreated, or can be oiled to maintain its golden colour. Accoya, a modified radiata pine with a 50-year above-ground guarantee, is the best choice for those who want maximum lifespan with the lowest maintenance burden." },
      { question: "Will my local council approve hardwood gates in a conservation area?", answer: "Generally yes, and in many cases hardwood gates are preferred over metal alternatives in conservation areas because they maintain the historic character of the streetscape. The key factors councils assess are the height, the boundary treatment, and whether the design is sympathetic to the property and surrounding buildings. Our installers work regularly in London conservation areas and can advise on designs that meet local planning guidelines without needing formal permission." },
      { question: "How do hardwood gates need to be maintained in London?", answer: "Iroko and oak gates should be oiled or re-stained every 12 to 24 months depending on aspect and exposure. South-facing gates in exposed positions will need attention more frequently. Accoya gates need treatment every 3 to 5 years due to the modified wood's superior dimensional stability. Annual hinge greasing and checking of automation components should be done regardless of timber type. Our network includes installers who offer maintenance contracts covering both woodwork and automation." },
    ],
  },
  {
    id: 'wrought-iron-gates',
    title: 'Wrought Iron Gates',
    slug: 'wrought-iron-gates',
    description: 'Traditional hand-forged wrought iron gates for London period homes, heritage properties, and conservation areas. Ornate scrollwork, fleur-de-lis finials, and bespoke designs that last generations.',
    image: '/images/gates/gate-wrought-iron-open-manor-spring-gardens.png',
    icon: 'Shield',
    color: 'sky',
    faqs: [
      { question: "What is the difference between wrought iron and mild steel gates?", answer: "True wrought iron is hand-forged by a blacksmith and has a fibrous, slag-inclusive structure that is more resistant to rust and fracture than cast iron. Mild steel is the modern equivalent used by most fabricators — it is rolled or pressed into sections and welded. For decorative driveway gates, most of what is called wrought iron today is actually mild steel, which is perfectly fine for the purpose. Genuine hand-forged wrought iron is available but commands a significant premium and is mainly used for restoration of historic properties." },
      { question: "How do wrought iron gates hold up against London weather?", answer: "All ferrous metal gates will rust without proper protection. The standard London specification is hot-dip galvanising followed by epoxy primer and polyester powder coat. This system provides a minimum 20-year corrosion protection guarantee and is the only appropriate treatment for gates in London's damp, polluted urban environment. Cheaper gates use zinc spray primers which fail within 5 to 10 years. Our installers will specify the correct protective system as part of every quote." },
      { question: "Can I get a bespoke design to match my Victorian property?", answer: "Absolutely, and this is where wrought iron gates excel. London's Victorian housing stock is perfectly complemented by ornate railings, scroll work, and period details that no other material can replicate authentically. Our fabricators can match existing railings, reproduce period patterns from photographs, or design entirely new gates that are sympathetic to the property's character. Most will provide detailed CAD drawings or 3D renders before fabrication begins." },
    ],
  },
  {
    id: 'pedestrian-side-gates',
    title: 'Pedestrian and Side Gates',
    slug: 'pedestrian-side-gates',
    description: 'Matching pedestrian gates, side access gates, and wicket gates for London properties. Secure foot access without opening the main driveway gate — available in all materials and with optional automation.',
    image: '/images/gates/gate-wrought-iron-open-golden-hour-curved-drive.png',
    icon: 'Users',
    color: 'emerald',
    faqs: [
      { question: "What is the difference between a pedestrian gate and a wicket gate?", answer: "A pedestrian gate is a standalone single gate installed in a separate opening — usually alongside the main driveway gate — specifically for foot access. A wicket gate is a smaller gate built into one leaf of the main driveway gate itself, allowing people to walk through without opening the full gate. Both serve the same purpose; the right choice depends on your boundary layout and how much of the main gate leaf you want to use for the cut-out." },
      { question: "Can a side gate be automated separately from the main gate?", answer: "Yes. Pedestrian gates can be fitted with their own compact motor, keypad, or intercom system and operated completely independently of the main driveway gate. This is ideal for properties where a family member may need regular foot access while the main gate is closed. The two systems can also be integrated so the same remote or intercom can open either gate depending on which button is pressed." },
      { question: "What heights and materials are available for London side gates?", answer: "Side gates for London properties typically run from 1.5 metres to 2 metres high — above 2 metres usually requires planning permission. We offer side gates in all the same materials as main driveway gates: aluminium, mild steel, wrought iron, hardwood, and composite. Matching the side gate material and finish to the main gate creates a cohesive boundary design that significantly improves kerb appeal and property value." },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);