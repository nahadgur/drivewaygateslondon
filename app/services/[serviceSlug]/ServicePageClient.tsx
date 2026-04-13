'use client';

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, Search, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_SERVICES } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });
import { PricingSection } from '@/components/PricingSection';

/* ── Inline content data (unchanged from original) ── */
const serviceContent: Record<string, { intro: string[]; benefits: { title: string; desc: string }[]; candidateIntro: string; candidates: string[]; process: { title: string; desc: string }[] }> = {
  'electric-sliding': { intro: ["Electric sliding gates are the go-to solution for London driveways where space is tight. Instead of swinging open and taking up room in front of or behind the entrance, a sliding gate moves horizontally along your boundary wall or fence. This makes them perfect for short driveways, sloped approaches, and properties where cars park close to the gate line. They are the most common gate type fitted on new-build London developments for exactly this reason.","The gate runs on a ground track or, for cantilever systems, on an overhead rail. A motor drives the gate smoothly along the track at the press of a remote, keypad code, or phone app. Modern sliding gate motors are quiet, fast, and equipped with safety sensors that stop the gate immediately if anything is in the way. Most systems fully open a 4-metre gate in under 15 seconds.","One thing to be aware of is that sliding gates need clear space to one side of the opening. If your driveway entrance is 4 metres wide, you need roughly 4.5 metres of unobstructed fence or wall for the gate to slide into. Our London installers will assess your space during the free site survey and recommend the best configuration, including cantilever options for sites where a ground track is not practical."], benefits: [{ title: 'Space Efficient', desc: 'No swing arc means the gate works perfectly on short driveways, near-road properties, and steep approaches where swing gates would block the pavement.' },{ title: 'Handles Large Openings', desc: 'Sliding gates can cover much wider openings than swing gates. Openings of 5 to 8 metres are straightforward.' },{ title: 'Works on Slopes', desc: 'While the track itself must be level, the driveway can slope. Experienced installers build a level track bed even on gradients.' },{ title: 'Smooth, Quiet Operation', desc: 'Modern sliding gate motors use belt-drive or rack-and-pinion systems that are virtually silent.' }], candidateIntro: 'Electric sliding gates are typically the best choice if:', candidates: ['Your driveway is short and there is not enough room for gates to swing inward','Your driveway slopes down from the road toward the house','You need to cover a wide opening of 5 metres or more','You have a boundary wall or fence alongside the entrance','You want a sleek, modern look that sits flat when open'], process: [{ title: 'Site Survey and Measurement', desc: 'Your installer visits, measures the opening, checks available slide space, assesses ground conditions, and discusses design options.' },{ title: 'Design, Fabrication, and Track Prep', desc: 'The gate is fabricated to your spec. Groundwork begins: track laying, motor post foundation, electrical conduit.' },{ title: 'Gate Installation and Automation', desc: 'The gate is hung on the track, the motor and drive system fitted, safety sensors and intercoms wired.' },{ title: 'Commissioning and Handover', desc: 'Full testing of gate travel, safety systems, and access controls. Manual release and remote pairing explained.' }] },
  'electric-swing': { intro: ["Electric swing gates are the most popular choice for London residential driveways. They consist of a single or double gate leaf that swings open, typically inward onto the property, powered by underground or ram-arm motors. The classic look of a pair of swing gates opening as you approach is hard to beat.","Automation options range from underground motors that are completely hidden (ideal for a clean look) to ram-arm systems that mount on the back of the gate and post. Both types work with remote controls, keypads, intercoms, and smart phone apps.","The main consideration with swing gates is clearance. You need enough space for the gate to swing fully open without hitting parked cars, walls, or the driveway surface."], benefits: [{ title: 'Classic Aesthetic', desc: 'Nothing beats the look of a well-crafted pair of swing gates. They suit every property style from period homes to contemporary builds.' },{ title: 'Lower Cost Than Sliding', desc: 'Swing gate installations are generally £500 to £2,000 less than equivalent sliding systems.' },{ title: 'Hidden Motor Options', desc: 'Underground motors sit beneath the post cap and are completely invisible when the gate is closed.' },{ title: 'Easy Pedestrian Access', desc: 'Most designs include a built-in wicket gate or separate pedestrian gate leaf.' }], candidateIntro: 'Electric swing gates are usually the right choice if:', candidates: ['Your driveway has enough room for the gate leaves to swing fully open inward','Your driveway is relatively flat or has only a gentle gradient','You want a traditional double-gate appearance with modern automation','Your gate opening is up to 5 metres wide','You value aesthetics and want the option of a completely hidden motor'], process: [{ title: 'Survey and Design', desc: 'Your installer measures the opening, checks swing clearance, assesses pillar condition, and discusses gate material and motor type.' },{ title: 'Post and Foundation Work', desc: 'If new posts are needed, they are set in concrete with steel reinforcement. Motor foundations are excavated.' },{ title: 'Gate Hanging and Motor Fitting', desc: 'The gate leaves are hung on heavy-duty hinges, motors fitted, and all automation and safety equipment wired.' },{ title: 'Testing and Handover', desc: 'The gate is tested for smooth operation, correct safety stops, and access control programming.' }] },
  'wooden-gates': { intro: ["Wooden driveway gates bring a warmth and natural character to London properties that metal simply cannot replicate. The most popular hardwoods for London gates are iroko, European oak, and western red cedar.","One of the biggest advantages of wooden gates is design versatility. Timber can be shaped, routed, and finished on site if needed.","With the right timber and proper treatment, hardwood gates last 25 years or more. Accoya, a modified softwood with a 50-year manufacturer guarantee, is becoming increasingly popular in London."], benefits: [{ title: 'Natural Beauty', desc: 'No other material matches the warmth, texture, and character of real wood. Timber gates age gracefully.' },{ title: 'Endless Design Flexibility', desc: 'Wood can be cut, shaped, and finished in virtually any style.' },{ title: 'Privacy and Sound Reduction', desc: 'Solid timber gates provide excellent visual screening and reduce road noise.' },{ title: 'Sustainable Material Choice', desc: 'Responsibly sourced hardwood is a renewable material with a far lower carbon footprint than steel or aluminium.' }], candidateIntro: 'Wooden driveway gates may be the right choice if:', candidates: ['You want a warm, natural aesthetic that complements a garden or period property','Privacy is a priority and you prefer a solid gate design','You like the idea of a bespoke design unique to your home','You are happy to maintain the timber with occasional re-oiling or staining','You want to match existing woodwork, fencing, or garden structures'], process: [{ title: 'Consultation and Timber Selection', desc: 'Your installer discusses design options, shows timber samples, and recommends the best species for your budget.' },{ title: 'Bespoke Fabrication', desc: 'The gates are handcrafted in the workshop. This typically takes 3 to 5 weeks.' },{ title: 'Installation and Finishing', desc: 'Gates are hung on galvanised hinges, treated with the specified oil or stain, and any automation fitted.' },{ title: 'Aftercare Guidance', desc: 'Your installer provides a maintenance schedule and recommends specific treatment products.' }] },
  'metal-gates': { intro: ["Metal driveway gates offer London homeowners the widest range of styles, from ornate Victorian wrought iron scrollwork to ultra-modern flat-bar designs. Steel is the most popular for bespoke gates because it balances strength, design flexibility, and cost.","Every reputable London installer hot-dip galvanises steel and iron gates before applying a powder coat finish. This two-stage protection process means the gate is virtually immune to rust for 20 years or more.","Design-wise, metal gates can be as simple or as elaborate as you want. Most London fabricators will produce CAD drawings or 3D renders so you can see exactly how the gate will look on your property."], benefits: [{ title: 'Maximum Durability', desc: 'Galvanised and powder-coated metal gates last 25 years or more with virtually no maintenance.' },{ title: 'Any Style Imaginable', desc: 'From Victorian scrollwork to ultra-modern horizontal bars, metal can be fabricated into any design.' },{ title: 'Strongest Security', desc: 'Steel and iron are inherently stronger than wood. A well-built metal gate provides genuine resistance to forced entry.' },{ title: 'Low Maintenance', desc: 'Once galvanised and coated, metal gates need almost nothing. An annual wash with soapy water is usually sufficient.' }], candidateIntro: 'Metal driveway gates are often the best option if:', candidates: ['Security is a top priority and you want the strongest possible physical barrier','You prefer a low-maintenance gate that needs virtually no upkeep','You want a contemporary or traditional ornate design','Your property is in a conservation area where a specific heritage style is required','You want laser-cut patterns, house numbers, or personalised design elements'], process: [{ title: 'Design Consultation', desc: 'Your installer visits, discusses styles, shows portfolio examples.' },{ title: 'Detailed Design and Approval', desc: 'A full CAD drawing or 3D render is produced showing the gate on your property.' },{ title: 'Fabrication and Finishing', desc: 'The gate is built, hot-dip galvanised for rust protection, and powder coated. This takes 3 to 6 weeks.' },{ title: 'Installation and Commissioning', desc: 'The gate is installed on posts, automation fitted, and all safety and access systems tested.' }] },
  'automated-systems': { intro: ["If you already have manual driveway gates and want to add electric operation, a gate automation retrofit is one of the most popular home upgrades in London right now.","The automation package typically includes the motor, a pair of safety photocells, a control board, two remote handsets, and a manual release key. On top of that you can add intercoms, keypads, proximity card readers, and Wi-Fi modules.","The installation is straightforward for an experienced engineer. For swing gates it usually takes one day."], benefits: [{ title: 'Never Leave Your Car', desc: 'Open and close your gates from the comfort of your vehicle with a remote or phone app.' },{ title: 'See Who is at the Gate', desc: 'Video intercom systems let you see and speak to visitors from inside your house or on your phone.' },{ title: 'Smart Home Integration', desc: 'Connect your gate to Alexa, Google Home, Ring, or Apple HomeKit.' },{ title: 'Retain Your Existing Gates', desc: 'If you love the look of your current gates, automation lets you keep them exactly as they are.' }], candidateIntro: 'Gate automation is right for you if:', candidates: ['You have existing manual gates that are structurally sound and well hung','You are tired of getting out of the car to open and close your gates','You want to add intercom or video entry to your property','You want smart phone control and integration with your home security system','You are looking for a cost-effective upgrade that adds value and convenience'], process: [{ title: 'Gate Assessment', desc: 'Your installer checks the condition, weight, and hinge quality of your existing gates.' },{ title: 'Motor and Access Specification', desc: 'The right motor type is selected for your gate weight and type.' },{ title: 'Installation and Wiring', desc: 'Motors are fitted, photocells installed, intercom wired, and the control board programmed. Typically 1 to 2 days.' },{ title: 'Commissioning and Training', desc: 'The complete system is tested, remotes paired, smart app configured, and you get a full walkthrough.' }] },
};

export function ServicePageClient({ params }: { params: { serviceSlug: string } }) {
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
  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>

        {/* Split hero — text left, image right */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_480px] border-b-[3px] border-brand-900 min-h-[60vh] lg:min-h-[82vh]">

          {/* Text side */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-14 lg:py-16 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-brand-900 bg-brand-50">
            <div className="mb-4">
              <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: service.title }]} />
            </div>
            <h1 className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 54px)', lineHeight: 1.02, letterSpacing: '-.025em' }}>
              {service.title}
            </h1>
            <p className="text-brand-700 mb-10 max-w-lg leading-relaxed" style={{ fontSize: 'clamp(15px, 1.5vw, 17px)' }}>
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary !text-[12px] !py-3.5 !px-7">
                Get Free Quotes
              </button>
              <Link href="/services/" className="btn-secondary !text-[12px] !py-3.5 !px-7">
                All Gate Types
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {['Compare up to 3 free quotes', 'Every installer vetted and insured', `${totalCities}+ London locations`].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  <span className="font-syne font-bold text-[11px] tracking-[.08em] uppercase text-brand-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative overflow-hidden bg-brand-200 min-h-[280px] lg:min-h-0">
            <Image src={service.image} alt={service.title}
              fill className="object-cover"
              style={{ filter: 'saturate(.85)' }} priority
              sizes="(max-width: 1024px) 100vw, 480px" />
            <div className="absolute top-0 left-0 bg-brand-900 px-4 py-2 font-syne font-bold text-[9.5px] tracking-[.2em] uppercase text-brand-400">
              Featured Install
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-brand-900 px-5 py-4 flex flex-wrap gap-4">
              {[['500+', 'Installations'], ['4.9★', 'Rated'], ['32', 'Boroughs'], ['Free', 'Survey']].map(([n, l]) => (
                <div key={l} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-500" />
                  <span className="text-brand-300 text-[11.5px] font-body">
                    <strong className="text-brand-200">{n}</strong> {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges />

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">

              {/* Intro */}
              <section className="mb-14">
                <div className="craft-label">Overview</div>
                <h2 className="craft-h2 mb-6">{service.title}: What You Need to Know</h2>
                <div className="space-y-4 text-brand-700 leading-relaxed" style={{ fontSize: '15.5px' }}>
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-14">
                <div className="craft-label">Benefits</div>
                <h2 className="craft-h2 mb-6">Benefits of {service.title}</h2>
                <div className="grid sm:grid-cols-2 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                  {content.benefits.map((b, i) => (
                    <div key={i} className="bg-brand-50 p-6 hover:bg-brand-100 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-brand-500 font-bold">✓</span>
                        <h3 className="font-syne font-bold text-[12.5px] tracking-[.04em] uppercase text-brand-900">{b.title}</h3>
                      </div>
                      <p className="text-sm text-brand-600 leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Locations */}
              <section className="mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div>
                    <div className="craft-label">Coverage</div>
                    <h2 className="craft-h2">Find {service.title} Installers Across London</h2>
                  </div>
                  <button onClick={() => setShowLocations(!showLocations)}
                    className="flex items-center gap-2 font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-500 hover:text-brand-700 whitespace-nowrap">
                    {showLocations ? 'Hide locations' : `All ${totalCities}+ areas`}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <div className="mb-5 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400 w-4 h-4" />
                    <input type="text" placeholder="Search your area..."
                      value={searchQuery}
                      onChange={e => { setSearchQuery(e.target.value); if (!showLocations) setShowLocations(true); }}
                      className="w-full pl-11 pr-4 py-3 border-2 border-brand-200 bg-brand-50 text-brand-900 text-sm focus:outline-none focus:border-brand-500 transition" />
                  </div>
                </div>
                {showLocations && (
                  <div className="space-y-8 pb-4">
                    {Object.entries(filteredLocations).map(([region, cities]) => (
                      <div key={region}>
                        <h3 className="font-syne font-bold text-[11px] tracking-[.12em] uppercase text-brand-600 mb-3">{region}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                          {cities.map(city => (
                            <Link key={city} href={`/services/${service.slug}/${toSlug(city)}/`}
                              className="bg-brand-50 px-3 py-2 font-syne font-bold text-[11px] tracking-[.03em] uppercase text-brand-700 hover:bg-brand-900 hover:text-brand-50 transition-colors flex items-center gap-1.5">
                              <MapPin className="w-2.5 h-2.5 text-brand-500 flex-shrink-0" />
                              <span className="truncate">{city}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {!showLocations && (
                  <p className="text-sm text-brand-600">
                    Search your area above or <button onClick={() => setShowLocations(true)} className="text-brand-500 font-bold hover:underline">browse all locations</button> to find installers near you.
                  </p>
                )}
              </section>

              {/* Candidate section */}
              <section className="mb-14">
                <div className="craft-label">Is It Right for You?</div>
                <h2 className="craft-h2 mb-4">Are {service.title} Right for Your Property?</h2>
                <p className="text-brand-700 text-sm mb-5">{content.candidateIntro}</p>
                <div className="border-2 border-brand-900">
                  <div className="bg-brand-900 px-5 py-2.5 font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400">Checklist</div>
                  {content.candidates.map((c, i, arr) => (
                    <div key={i} className={`flex items-start gap-3 px-5 py-4 text-sm text-brand-700 ${i < arr.length - 1 ? 'border-b border-brand-200' : ''}`}>
                      <span className="text-brand-500 font-bold flex-shrink-0">✓</span>{c}
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section className="mb-14">
                <div className="craft-label">Installation Process</div>
                <h2 className="craft-h2 mb-6">How the Installation Works</h2>
                <div className="border-2 border-brand-900 bg-brand-200 gap-[1px] flex flex-col">
                  {content.process.map((step, i) => (
                    <div key={i} className="bg-brand-50 p-6 flex gap-5">
                      <div className="font-display text-4xl text-brand-200 leading-none flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                      <div>
                        <div className="font-syne font-bold text-[12.5px] tracking-[.04em] uppercase text-brand-900 mb-1">{step.title}</div>
                        <p className="text-sm text-brand-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection serviceId={service.id} serviceName={service.title} />

              <div className="mb-14">
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>

              <section className="mb-14">
                <div className="craft-label">Reviews</div>
                <h2 className="craft-h2 mb-6">What Homeowners Say</h2>
                <Testimonials limit={3} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Free Match</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-3">Get Matched for {service.title}</h3>
                  <p className="text-brand-600 text-sm mb-5">Free, no-obligation match with vetted installers in your area.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Find an Installer</button>
                  <div className="mt-5 pt-4 border-t-2 border-brand-200 space-y-3">
                    {[{ icon: <Clock className="w-3.5 h-3.5" />, text: 'Surveys available this week' },
                      { icon: <Shield className="w-3.5 h-3.5" />, text: '50+ installs per installer' },
                      { icon: <Star className="w-3.5 h-3.5" />, text: '4.9 average rating' }].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="border border-brand-400/30 p-1.5 text-brand-500">{item.icon}</div>
                        <span className="text-xs text-brand-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-900 p-6 border-2 border-brand-700">
                  <div className="font-display text-3xl text-brand-400 font-semibold">From £99/month</div>
                  <p className="text-brand-300 text-sm mt-1 mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-gold w-full justify-center">Get Free Quotes</button>
                </div>

                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">Other Gate Types</div>
                  <div className="space-y-2">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`}
                        className="flex items-center gap-2 text-sm text-brand-600 hover:text-brand-900 transition-colors py-1 border-b border-brand-100 last:border-0">
                        <ArrowRight className="w-3 h-3 flex-shrink-0" /> {s.title}
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
