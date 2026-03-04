'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, Search, CheckCircle, ArrowRight, ChevronDown, Award, Users, CreditCard, Sparkles } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { PricingSection } from '@/components/PricingSection';

const serviceContent: Record<string, { intro: string[]; benefits: { title: string; desc: string }[]; candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[] }> = {
  'electric-sliding': {
    intro: [
      "Electric sliding gates are the go-to solution for London driveways where space is tight. Instead of swinging open and taking up room in front of or behind the entrance, a sliding gate moves horizontally along your boundary wall or fence. This makes them perfect for short driveways, sloped approaches, and properties where cars park close to the gate line. They are the most common gate type fitted on new-build London developments for exactly this reason.",
      "The gate runs on a ground track or, for cantilever systems, on an overhead rail. A motor drives the gate smoothly along the track at the press of a remote, keypad code, or phone app. Modern sliding gate motors are quiet, fast, and equipped with safety sensors that stop the gate immediately if anything is in the way. Most systems fully open a 4-metre gate in under 15 seconds.",
      "One thing to be aware of is that sliding gates need clear space to one side of the opening. If your driveway entrance is 4 metres wide, you need roughly 4.5 metres of unobstructed fence or wall for the gate to slide into. Our London installers will assess your space during the free site survey and recommend the best configuration, including cantilever options for sites where a ground track is not practical.",
    ],
    benefits: [
      { title: 'Space Efficient', desc: 'No swing arc means the gate works perfectly on short driveways, near-road properties, and steep approaches where swing gates would block the pavement or scrape the ground.' },
      { title: 'Handles Large Openings', desc: 'Sliding gates can cover much wider openings than swing gates. Openings of 5 to 8 metres are straightforward, making them ideal for double-width driveways and properties with commercial vehicle access.' },
      { title: 'Works on Slopes', desc: 'While the track itself must be level, the driveway can slope. Experienced installers build a level track bed even on gradients, or use trackless cantilever systems to bypass the problem entirely.' },
      { title: 'Smooth, Quiet Operation', desc: 'Modern sliding gate motors use belt-drive or rack-and-pinion systems that are virtually silent. Your neighbours will not hear a thing, even with multiple openings per day.' },
    ],
    candidateIntro: "Electric sliding gates are typically the best choice if:",
    candidates: [
      "Your driveway is short and there is not enough room for gates to swing inward",
      "Your driveway slopes down from the road toward the house",
      "You need to cover a wide opening of 5 metres or more",
      "You have a boundary wall or fence alongside the entrance for the gate to slide behind",
      "You want a sleek, modern look that sits flat against the boundary when open",
    ],
    process: [
      { title: 'Site Survey and Measurement', desc: 'Your installer visits, measures the opening, checks available slide space, assesses ground conditions, and discusses material and design options.' },
      { title: 'Design, Fabrication, and Track Prep', desc: 'The gate is designed and fabricated to your spec. Groundwork begins on site: track laying, motor post foundation, and electrical conduit.' },
      { title: 'Gate Installation and Automation', desc: 'The gate is hung on the track, the motor and drive system fitted, and safety sensors, remotes, and any intercom wired in.' },
      { title: 'Commissioning and Handover', desc: 'Full testing of the gate travel, safety systems, and access controls. You are walked through the manual release, remote pairing, and maintenance basics.' },
    ],
  },
  'electric-swing': {
    intro: [
      "Electric swing gates are the most popular choice for London residential driveways. They consist of a single or double gate leaf that swings open, typically inward onto the property, powered by underground or ram-arm motors. The classic look of a pair of swing gates opening as you approach is hard to beat, and they suit everything from Victorian terraces to modern detached homes.",
      "Automation options range from underground motors that are completely hidden beneath the gate post (ideal for a clean look) to ram-arm systems that mount on the back of the gate and post (more affordable and easier to maintain). Both types work with remote controls, keypads, intercoms, and smart phone apps. Safety photocells and auto-reverse are fitted as standard to protect people, pets, and vehicles.",
      "The main consideration with swing gates is clearance. You need enough space for the gate to swing fully open without hitting parked cars, walls, or the driveway surface. If your driveway slopes, the gate needs to clear the gradient as it swings. Experienced London installers deal with these challenges daily and will recommend the right motor type and hinge configuration during the survey.",
    ],
    benefits: [
      { title: 'Classic Aesthetic', desc: 'Nothing beats the look of a well-crafted pair of swing gates. They suit every property style from period homes to contemporary builds and come in wood, metal, or a combination of both.' },
      { title: 'Lower Cost Than Sliding', desc: 'Swing gate installations are generally £500 to £2,000 less than equivalent sliding systems because there is no ground track, less groundwork, and simpler motor mounting.' },
      { title: 'Hidden Motor Options', desc: 'Underground motors sit beneath the post cap and are completely invisible when the gate is closed. This gives a clean, uncluttered look that many London homeowners prefer.' },
      { title: 'Easy Pedestrian Access', desc: 'Most swing gate designs include a built-in wicket gate or a separate pedestrian gate leaf. This lets people walk through without opening the full driveway gate.' },
    ],
    candidateIntro: "Electric swing gates are usually the right choice if:",
    candidates: [
      "Your driveway has enough room for the gate leaves to swing fully open inward",
      "Your driveway is relatively flat or has only a gentle gradient",
      "You want a traditional double-gate appearance with modern automation",
      "Your gate opening is up to 5 metres wide (beyond that, sliding is usually better)",
      "You value aesthetics and want the option of a completely hidden motor",
    ],
    process: [
      { title: 'Survey and Design', desc: 'Your installer measures the opening, checks the swing clearance, assesses pillar condition, and discusses gate material, style, and motor type.' },
      { title: 'Post and Foundation Work', desc: 'If new posts are needed, they are set in concrete with steel reinforcement. Motor foundations are excavated and conduit run for power and intercom cables.' },
      { title: 'Gate Hanging and Motor Fitting', desc: 'The gate leaves are hung on heavy-duty hinges, the motor arms or underground units fitted, and all automation and safety equipment wired.' },
      { title: 'Testing and Handover', desc: 'The gate is tested for smooth operation, correct safety stops, and access control programming. You receive remotes, keypads, and a full operational walkthrough.' },
    ],
  },
  'wooden-gates': {
    intro: [
      "Wooden driveway gates bring a warmth and natural character to London properties that metal simply cannot replicate. Whether you are after a rustic tongue-and-groove design for a cottage-style home or a sleek, contemporary horizontal-slat gate for a modern build, timber offers a huge range of design possibilities. The most popular hardwoods for London gates are iroko, European oak, and western red cedar, each with different grain patterns, durability ratings, and price points.",
      "One of the biggest advantages of wooden gates is their versatility in design. Unlike metal gates that need specialist fabrication for every variation, timber can be shaped, routed, and finished on site if needed. This makes bespoke designs more accessible and often more affordable. A skilled joiner can build a one-off gate that perfectly matches the architectural style of your property, right down to matching existing woodwork, fencing, or garden structures.",
      "The question most London homeowners ask about wooden gates is longevity. With the right timber and proper treatment, hardwood gates last 25 years or more. Iroko is naturally oily and resists moisture without heavy treatment. Oak weathers to a beautiful silver-grey if left untreated, or can be oiled to retain its golden colour. Accoya, a modified softwood with a 50-year manufacturer guarantee, is becoming increasingly popular in London for homeowners who want maximum lifespan with minimal maintenance.",
    ],
    benefits: [
      { title: 'Natural Beauty', desc: 'No other material matches the warmth, texture, and character of real wood. Timber gates age gracefully and develop a patina that improves with time, especially in London garden settings.' },
      { title: 'Endless Design Flexibility', desc: 'Wood can be cut, shaped, and finished in virtually any style. From ornate Georgian panels to clean Scandinavian lines, timber gives you more design freedom than any other material.' },
      { title: 'Privacy and Sound Reduction', desc: 'Solid timber gates provide excellent visual screening and reduce road noise more effectively than metal or slatted designs. Ideal for London streets where properties are close together.' },
      { title: 'Sustainable Material Choice', desc: 'Responsibly sourced hardwood is a renewable material with a far lower carbon footprint than steel or aluminium. FSC-certified timber is available from all our London installers.' },
    ],
    candidateIntro: "Wooden driveway gates may be the right choice if:",
    candidates: [
      "You want a warm, natural aesthetic that complements a garden or period property",
      "Privacy is a priority and you prefer a solid gate design",
      "You like the idea of a bespoke design that is unique to your home",
      "You are happy to maintain the timber with occasional re-oiling or staining",
      "You want to match existing woodwork, fencing, or garden structures",
    ],
    process: [
      { title: 'Consultation and Timber Selection', desc: 'Your installer discusses design options, shows timber samples, and recommends the best species for your budget, style, and maintenance preferences.' },
      { title: 'Bespoke Fabrication', desc: 'The gates are handcrafted in the workshop to your exact specifications. This typically takes 3 to 5 weeks depending on complexity and timber availability.' },
      { title: 'Installation and Finishing', desc: 'Gates are hung on galvanised hinges, treated with the specified oil, stain, or paint, and any automation is fitted and wired.' },
      { title: 'Aftercare Guidance', desc: 'Your installer provides a maintenance schedule, recommends specific treatment products, and may offer an annual maintenance package to keep the timber in top condition.' },
    ],
  },
  'metal-gates': {
    intro: [
      "Metal driveway gates offer London homeowners the widest range of styles, from ornate Victorian wrought iron scrollwork to ultra-modern flat-bar designs with horizontal slats. The three main metals used are mild steel, aluminium, and wrought iron, each with different strengths. Steel is the most popular for bespoke gates because it balances strength, design flexibility, and cost. Aluminium is lightweight and completely rust-proof. Wrought iron is hand-forged and suits traditional properties.",
      "Every reputable London installer hot-dip galvanises steel and iron gates before applying a powder coat finish. This two-stage protection process means the gate is virtually immune to rust for 20 years or more, even in London's damp and polluted atmosphere. Aluminium does not rust at all and only needs a powder coat for colour. The result is a gate that looks pristine with almost no maintenance beyond an occasional wash.",
      "Design-wise, metal gates can be as simple or as elaborate as you want. Flat-bar contemporary designs with clean lines and geometric patterns are hugely popular in London right now. Traditional estate-style gates with curved tops, finials, and scrollwork remain a strong choice for period properties. Most London fabricators will produce CAD drawings or 3D renders of your design so you can see exactly how the gate will look on your property before committing.",
    ],
    benefits: [
      { title: 'Maximum Durability', desc: 'Galvanised and powder-coated metal gates last 25 years or more with virtually no maintenance. They handle London weather, pollution, and daily use without degrading.' },
      { title: 'Any Style Imaginable', desc: 'From Victorian scrollwork to ultra-modern horizontal bars, metal can be fabricated into any design. Laser cutting allows intricate patterns and personalised details that are impossible in other materials.' },
      { title: 'Strongest Security', desc: 'Steel and iron are inherently stronger than wood or composite materials. A well-built metal gate is a serious physical barrier that provides genuine resistance to forced entry.' },
      { title: 'Low Maintenance', desc: 'Once galvanised and coated, metal gates need almost nothing. An annual wash with soapy water is usually sufficient. No staining, oiling, or repainting for decades.' },
    ],
    candidateIntro: "Metal driveway gates are often the best option if:",
    candidates: [
      "Security is a top priority and you want the strongest possible physical barrier",
      "You prefer a low-maintenance gate that needs virtually no upkeep",
      "You want a contemporary or traditional ornate design that would be difficult in wood",
      "Your property is in a conservation area where a specific heritage style is required",
      "You want laser-cut patterns, house numbers, or personalised design elements",
    ],
    process: [
      { title: 'Design Consultation', desc: 'Your installer visits, discusses styles, shows portfolio examples, and may create initial sketches or CAD drawings on the spot.' },
      { title: 'Detailed Design and Approval', desc: 'A full CAD drawing or 3D render is produced showing the gate on your property. You approve the design, dimensions, and colour before fabrication begins.' },
      { title: 'Fabrication and Finishing', desc: 'The gate is built in the workshop, hot-dip galvanised for rust protection, and powder coated in your chosen RAL colour. This takes 3 to 6 weeks.' },
      { title: 'Installation and Commissioning', desc: 'The gate is installed on new or existing posts, automation fitted, and all safety and access systems tested and handed over.' },
    ],
  },
  'automated-systems': {
    intro: [
      "If you already have manual driveway gates and want to add the convenience of electric operation, a gate automation retrofit is one of the most popular home upgrades in London right now. Modern motor systems can be fitted to most existing gates, whether they are wood, metal, or a combination, provided the gates are structurally sound and properly hung.",
      "The automation package typically includes the motor (underground, ram-arm, or sliding track depending on your gate type), a pair of safety photocells, a control board, two remote handsets, and a manual release key. On top of that, you can add intercom systems with video, keypads with PIN codes, proximity card readers, and Wi-Fi modules that let you open the gate from your phone anywhere in the world. Most London homeowners opt for at least a basic intercom so they can see and speak to visitors before buzzing them in.",
      "The installation is straightforward for an experienced engineer. For swing gates, it usually takes one day: fitting the motor arms or underground units, wiring the control board, installing the photocells and any intercom, and programming the remotes. Sliding gate automation may take a little longer if a new ground track is needed. Either way, you go from manual gates to full electric operation with minimal disruption.",
    ],
    benefits: [
      { title: 'Never Leave Your Car', desc: 'Open and close your gates from the comfort of your vehicle with a remote or phone app. On rainy London mornings, this alone makes the investment worthwhile.' },
      { title: 'See Who is at the Gate', desc: 'Video intercom systems let you see and speak to visitors from inside your house or on your phone. You can buzz in deliveries, guests, or tradespeople without walking to the gate.' },
      { title: 'Smart Home Integration', desc: 'Connect your gate to Alexa, Google Home, Ring, or Apple HomeKit. Set schedules, receive open/close alerts, check gate status, and control access from anywhere.' },
      { title: 'Retain Your Existing Gates', desc: 'If you love the look of your current gates, automation lets you keep them exactly as they are while adding electric convenience. No need to replace gates that are in good condition.' },
    ],
    candidateIntro: "Gate automation is right for you if:",
    candidates: [
      "You have existing manual gates that are structurally sound and well hung",
      "You are tired of getting out of the car to open and close your gates",
      "You want to add intercom or video entry to your property",
      "You want smart phone control and integration with your home security system",
      "You are looking for a cost-effective upgrade that adds value and convenience",
    ],
    process: [
      { title: 'Gate Assessment', desc: 'Your installer checks the condition, weight, and hinge quality of your existing gates to confirm they are suitable for automation.' },
      { title: 'Motor and Access Specification', desc: 'The right motor type is selected for your gate weight and type. Intercom, keypad, and smart home options are discussed and specified.' },
      { title: 'Installation and Wiring', desc: 'Motors are fitted, safety photocells installed, intercom or keypad wired, and the control board programmed. This typically takes 1 to 2 days.' },
      { title: 'Commissioning and Training', desc: 'The complete system is tested, remotes paired, smart app configured, and you are given a full walkthrough including manual release and troubleshooting basics.' },
    ],
  },
  'gate-repair': {
    intro: [
      "Even the best driveway gates need occasional attention. Motors wear out, hinges stiffen, safety sensors drift out of alignment, and London weather takes its toll on finishes and moving parts. When your gate stops working properly, you need an engineer who can diagnose the problem quickly and fix it without unnecessary replacement of expensive components.",
      "Our London repair network covers everything from emergency callouts for gates stuck open or closed, through to routine annual servicing that prevents problems before they start. Common repairs include motor replacement, gearbox rebuilds, hinge realignment, safety sensor calibration, intercom fixes, remote reprogramming, and control board replacements. Most issues can be resolved in a single visit.",
      "Annual servicing is the best way to extend the life of your gate system and avoid unexpected breakdowns. A typical service visit covers motor lubrication, track cleaning and inspection for sliding gates, hinge adjustment and greasing, safety sensor testing, battery backup check, intercom function test, and a visual inspection of the gate structure and finish. It takes about an hour and catches small problems before they escalate into expensive repairs.",
    ],
    benefits: [
      { title: 'Fast Response Times', desc: 'Most London gate engineers in our network can attend within 24 to 48 hours for urgent repairs. Some offer same-day emergency callouts for gates stuck open or in a dangerous position.' },
      { title: 'All Brands and Systems', desc: 'Our engineers work with every major gate motor brand including FAAC, BFT, CAME, Nice, and Beninca. They carry common spare parts on the van to resolve most issues in a single visit.' },
      { title: 'Honest Diagnostics', desc: 'A good engineer diagnoses first and recommends only what is needed. If a sensor recalibration fixes the problem, they will not try to sell you a new motor. Every repair comes with a clear explanation of what went wrong and how to prevent it recurring.' },
      { title: 'Preventative Servicing', desc: 'Annual maintenance packages catch wear and tear early, keeping your gate running smoothly and preserving your manufacturer warranty. Prevention is always cheaper than repair.' },
    ],
    candidateIntro: "You may need gate repair or servicing if:",
    candidates: [
      "Your gate is making unusual noises, moving slowly, or stopping mid-travel",
      "The gate does not respond to the remote, keypad, or intercom",
      "Safety sensors are triggering false stops or the gate reverses for no reason",
      "The gate is stuck open or closed and you cannot operate it manually",
      "It has been more than 12 months since your last service",
    ],
    process: [
      { title: 'Diagnostic Visit', desc: 'The engineer inspects the gate, motor, control board, and safety systems to identify the root cause of the problem. You get a clear explanation and repair quote on the spot.' },
      { title: 'Repair or Part Replacement', desc: 'Most repairs are completed during the initial visit. If parts need ordering, the engineer will make the gate safe and functional in manual mode until the follow-up visit.' },
      { title: 'Testing and Safety Check', desc: 'After the repair, the full system is tested including motor travel limits, safety sensor responses, and all access controls.' },
      { title: 'Service Report', desc: 'You receive a written report of the work done, any parts replaced, and recommendations for ongoing maintenance to prevent future issues.' },
    ],
  },
};

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const content = serviceContent[service.id] || serviceContent['electric-swing'];
  const relatedServices = services.filter(s => s.id !== service.id);

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  const totalCities = Object.values(LOCATIONS).flat().length;

  const combinedFaqs = [
    ...(service.faqs || []),
    ...FAQS_SERVICES,
  ];

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero with form */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-40" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {['Compare up to 3 free quotes', 'Every installer vetted and insured', `${totalCities}+ London locations covered`].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">

              {/* Long-form intro */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{service.title}: What You Need to Know</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Benefits of {service.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="bg-brand-100 p-2 rounded-lg text-brand-600 flex-shrink-0 h-fit">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                        <p className="text-sm text-gray-600">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Locations */}
              <section className="mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">Find {service.title} Installers Across London</h2>
                    <p className="text-gray-600">
                      We have vetted installers for {service.title.toLowerCase()} in over {totalCities} areas across London.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowLocations(!showLocations)}
                    className="flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline self-start md:self-auto whitespace-nowrap"
                  >
                    {showLocations ? 'Hide locations' : `Show all ${totalCities}+ locations`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="mb-6 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your area..."
                      value={searchQuery}
                      onChange={(e) => { setSearchQuery(e.target.value); if (!showLocations) setShowLocations(true); }}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${showLocations ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!showLocations}
                >
                  <div className="space-y-8 pb-4">
                    {Object.entries(filteredLocations).map(([region, cities]) => (
                      <div key={region}>
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{region}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                          {cities.map(city => (
                            <Link
                              key={city}
                              href={`/services/${service.slug}/${toSlug(city)}/`}
                              className="group flex items-center gap-2 p-2.5 bg-gray-50 rounded-lg hover:bg-brand-50 transition-all border border-gray-100 hover:border-brand-200"
                            >
                              <MapPin className="w-3 h-3 text-brand-400 flex-shrink-0" />
                              <span className="text-gray-700 group-hover:text-brand-700 text-xs font-medium truncate">{city}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {!showLocations && (
                  <p className="text-sm text-gray-500">
                    Search for your area above or <button onClick={() => setShowLocations(true)} className="text-brand-600 font-medium hover:underline">browse all locations</button> to find {service.title.toLowerCase()} installers near you.
                  </p>
                )}
              </section>

              {/* Am I a candidate? */}
              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Are {service.title} Right for Your Property?</h2>
                <p className="text-gray-600 mb-4">{content.candidateIntro}</p>
                <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  The best way to find out is a free site survey. Your installer will assess your driveway, discuss options, and give you a clear recommendation based on your property layout, budget, and preferences.
                </p>
              </section>

              {/* Process */}
              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">The Installation Process</h2>
                <div className="space-y-4">
                  {content.process.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-0.5">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <PricingSection serviceId={service.id} serviceName={service.title} />

              {/* FAQs */}
              <div className="mb-14">
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>

              {/* Testimonials */}
              <section className="mb-14">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Say</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get Matched for {service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm">Free, no-obligation match with vetted installers in your area.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find an Installer</button>
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                    {[
                      { icon: <Clock className="w-4 h-4 text-brand-500" />, text: "Surveys available this week" },
                      { icon: <Shield className="w-4 h-4 text-brand-500" />, text: "50+ installs per installer" },
                      { icon: <Star className="w-4 h-4 text-brand-500" />, text: "4.9 average rating" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-brand-100 p-1.5 rounded-full">{item.icon}</div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 text-white p-6 rounded-2xl">
                  <h3 className="font-display font-bold mb-2">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Other Gate Types</h3>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                        <ArrowRight className="w-3 h-3" /> {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
