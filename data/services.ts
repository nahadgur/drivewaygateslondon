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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1170&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1170&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop',
    icon: 'Users',
    color: 'rose',
    faqs: [
      { question: "How often should driveway gates be serviced?", answer: "We recommend a full service every 12 months. This covers motor lubrication, safety sensor testing, hinge adjustment, track cleaning for sliding gates, intercom checks, and a general structural inspection. Annual servicing catches small problems before they become expensive repairs and keeps your manufacturer warranty valid." },
      { question: "My gate is making a grinding noise. What should I do?", answer: "A grinding noise usually indicates debris in the track (for sliding gates), worn motor gears, or misaligned hinges. Stop using the gate on auto mode until an engineer inspects it, as forcing a misaligned gate can damage the motor. Use the manual release to open and close it in the meantime. Most London engineers can attend within 24 to 48 hours." },
      { question: "How much does a gate repair callout cost?", answer: "Most London gate engineers charge a callout fee of £80 to £150 depending on the area, plus parts and labour. Common repairs like motor replacement, sensor realignment, or intercom fixes typically cost £200 to £600 all in. For older systems where parts are discontinued, upgrading the motor unit may be more cost-effective than sourcing rare spares." },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
