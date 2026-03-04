'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users, CreditCard, Award, Zap } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topAreas = ['Barnet', 'Richmond', 'Wimbledon', 'Bromley', 'Ealing', 'Hampstead', 'Kensington', 'Chiswick', 'Croydon', 'Harrow', 'Ilford', 'Kingston upon Thames'];

const homepageFaqs = [
  { question: "How much do driveway gates cost in London?", answer: "Prices vary significantly depending on what you choose. A basic pair of manual wooden gates, installed, starts around £2,500. Electric swing gates with automation typically range from £3,500 to £10,000. Premium electric sliding gates with full automation and intercom systems can run from £4,500 to £12,000 or more. The biggest price drivers are material (wood, steel, aluminium, wrought iron), gate width, automation spec, and whether the design is off-the-shelf or bespoke. Nearly all our London installers offer 0% finance so you can spread the cost." },
  { question: "Do I need planning permission for driveway gates in London?", answer: "In most cases, no. Gates under 2 metres tall that open inward onto your property usually fall under permitted development rights. If your gate is next to a classified road and over 1 metre tall, you may need permission. Listed buildings and conservation areas have stricter rules, and some London boroughs have specific local guidelines. Your installer will check all of this during the free site survey and handle any applications if needed." },
  { question: "How long does a driveway gate installation take?", answer: "A standard installation takes 2 to 4 working days. Day one covers groundwork, post holes, and foundations. Day two is gate hanging, motor fitting, and wiring. Days three and four handle finishing, intercom setup, and commissioning. If you are replacing existing gates and the posts are in good condition, it can be quicker. Bespoke fabricated gates may need 4 to 6 weeks lead time for manufacturing before the installation starts." },
  { question: "What type of gate is best for a London driveway?", answer: "It depends on your space and priorities. If your driveway is short or slopes toward the road, electric sliding gates are usually the best option because they do not need swing clearance. If you have plenty of room in front of or behind the opening, electric swing gates are the most popular and tend to be slightly cheaper. Wooden gates suit period properties. Metal gates work well for modern and Victorian homes alike. Your installer will recommend the best option during the free site survey." },
  { question: "Can I automate my existing manual gates?", answer: "In most cases, yes. If your gates are structurally sound and properly hung, a motor system can be retrofitted for £1,200 to £3,500 depending on the gate type and weight. The installer will check the hinges, gate condition, and pillar strength during the site visit. Some older wooden gates may need hinge upgrades, and very heavy wrought iron gates might require a more powerful motor, but these are straightforward adjustments." },
  { question: "How does your free matching service work?", answer: "We are not gate installers. We are a free matching service that connects London homeowners with vetted, experienced gate installers. You fill in a short form telling us your area, gate type, and rough budget. We match you with up to 3 installers who specialise in your requirements and cover your postcode. They contact you directly to arrange a free site survey. You pay us nothing at any stage. Installers pay us a referral fee only if you go ahead with the work." },
  { question: "What should I look for in a gate installer?", answer: "Experience is the single biggest factor. You want an installer who has completed dozens of residential gate projects, not someone who does the odd gate between other trades. Check that they carry public liability insurance, offer written warranties on both the gate and the automation, and can show you examples of previous work in London. Every installer in our network has completed at least 50 residential gate installations and meets all of these criteria." },
  { question: "Are electric gates safe for children and pets?", answer: "Yes, provided they are installed correctly with the required safety features. All gate automation installed in the UK must comply with the Machinery Directive and relevant standards. This means photocells to detect objects in the gate path, safety edges that stop the gate if it hits resistance, and auto-reverse functionality. Our installers fit all of these as standard and will commission the safety systems before handover." },
  { question: "How do I maintain my driveway gates?", answer: "For automated gates, an annual service is recommended. This covers motor lubrication, safety sensor testing, hinge adjustment, track cleaning for sliding gates, and a general structural check. For the gate itself, wooden gates need re-staining or oiling every 1 to 2 years depending on exposure. Metal gates with powder coating need very little upkeep beyond an occasional wash. Most of our installers offer maintenance packages from around £150 per year." },
  { question: "What happens if there is a power cut?", answer: "Every automated gate system includes a manual release mechanism so you can open the gates by hand during a power failure. Many modern motors also have battery backup that keeps the gate operational for 20 to 50 cycles after the mains power goes out. If power cuts are a concern in your area, solar-powered options are also available. Your installer will walk you through the manual release and backup options during handover." },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="London's Most Trusted Driveway Gate Installers, Compared"
          subtitle="We vet every installer so you do not have to. Get matched with experienced, fully insured gate specialists near you. Free site survey, free quotes, zero cost to use our service."
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* What Are Driveway Gates */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">Secure Your London Property With the Right Driveway Gates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Driveway gates are one of the most effective upgrades you can make to a London property. They add a layer of security that deters opportunistic intruders, keep children and pets safely within the boundary, and create a strong first impression that adds real value to your home. Whether you are after a pair of traditional hardwood swing gates or a sleek aluminium sliding system with smart phone control, the right installation transforms how you use your property.
                </p>
                <p>
                  The London market for driveway gates has grown significantly in recent years, driven by rising property values and homeowner demand for security and kerb appeal. Materials range from sustainably sourced hardwoods like iroko and oak, through to hot-dip galvanised steel, powder-coated aluminium, and classic wrought iron. Automation is now the norm rather than the exception, with most homeowners opting for electric operation with intercom and remote control access.
                </p>
                <p>
                  Here is the part most homeowners miss: <strong>not all gate installers are equal</strong>. The difference between an experienced specialist who has fitted hundreds of residential gates and a general builder who does the odd gate job is enormous. It shows in the engineering, the finish, the reliability of the automation, and how the gate looks and performs five years down the line. We only list installers who have completed 50 or more residential gate installations because the quality gap is too significant to overlook.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { tier: 'Premium Installer', cases: '100+ residential installs', desc: 'Handles complex projects including sloped driveways, listed properties, and bespoke fabrication. Full automation and intercom expertise.', listed: true },
                  { tier: 'Experienced Installer', cases: '50+ residential installs', desc: 'Proven track record across standard swing and sliding gate projects. Competent with all common automation systems.', listed: true },
                  { tier: 'General Builder', cases: 'Under 50 installs', desc: 'May lack specialist gate engineering knowledge. Not included in our London network.', listed: false },
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${item.listed ? 'bg-brand-50 border-brand-100' : 'bg-gray-50 border-gray-200 opacity-50'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 text-sm">{item.tier}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.listed ? 'bg-brand-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                        {item.listed ? 'In Network' : 'Not Listed'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{item.cases}</div>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
                <div className="bg-gray-900 text-white p-5 rounded-xl mt-2">
                  <div className="text-sm font-bold mb-1">Why does experience matter?</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    An experienced gate installer understands load calculations, ground conditions, drainage, safety compliance, and automation integration. They anticipate problems before they happen and engineer solutions that last. We do the vetting so you get proven specialists without spending hours researching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Driveway Gates */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Six Reasons London Homeowners Are Installing Driveway Gates</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Driveway gates are no longer just for large country estates. London homeowners across every borough are adding them for security, convenience, and property value. Here is why.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Shield className="w-6 h-6 text-brand-500" />, title: 'Genuine Security', desc: 'A properly installed gate is the most visible deterrent you can add. It stops cold callers, blocks opportunistic access, and gives you control over who enters your property. Insurance companies take note too.' },
                { icon: <Sparkles className="w-6 h-6 text-brand-500" />, title: 'Instant Kerb Appeal', desc: 'A well-designed gate is the first thing visitors see. It frames your property, signals quality, and creates a sense of arrival. Estate agents consistently list gates among the top features that boost perceived value.' },
                { icon: <Zap className="w-6 h-6 text-brand-500" />, title: 'Effortless Access', desc: 'With electric automation, you never need to leave your car in the rain. Open your gates from a remote, keypad, intercom, or your phone. Some systems even detect your car as you approach and open automatically.' },
                { icon: <Users className="w-6 h-6 text-brand-500" />, title: 'Child and Pet Safety', desc: 'Gates create a defined boundary that keeps young children and dogs safely within your property. No more worrying about a toddler wandering toward the road or a dog slipping out when the postman arrives.' },
                { icon: <Globe className="w-6 h-6 text-brand-500" />, title: 'Added Property Value', desc: 'Quality driveway gates typically add 5% or more to a London property value. On a £750,000 home, that is a potential £37,500 uplift for an investment of £5,000 to £10,000. Few home improvements offer a better return.' },
                { icon: <Calendar className="w-6 h-6 text-brand-500" />, title: 'Privacy on Your Terms', desc: 'Solid or semi-solid gate designs screen your driveway and front garden from the street. In London, where properties are close together, this visual privacy makes a noticeable difference to how your outdoor space feels.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">What London Homeowners Actually Pay for Driveway Gates</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Every project is different, but these are the price ranges you will see from experienced installers across London. As the capital, prices sit at the upper end nationally. The quality of installer you get through our network justifies the investment.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-brand-50 text-left">
                    <th className="px-5 py-3 font-bold text-gray-900">Gate Type</th>
                    <th className="px-5 py-3 font-bold text-gray-900">Price (GBP)</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden md:table-cell">Install Time</th>
                    <th className="px-5 py-3 font-bold text-gray-900 hidden lg:table-cell">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr key={tier.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-4 font-bold text-gray-900">{tier.treatment}</td>
                      <td className="px-5 py-4"><span className="font-bold text-brand-600">&pound;{tier.priceFrom.toLocaleString()} to &pound;{tier.priceTo.toLocaleString()}</span></td>
                      <td className="px-5 py-4 text-gray-700 hidden md:table-cell">{tier.typicalDuration}</td>
                      <td className="px-5 py-4 text-gray-600 text-xs hidden lg:table-cell">{tier.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Every Quote Includes</h3>
                <ul className="space-y-2">
                  {treatmentIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-brand-600" />
                  <h3 className="font-bold text-gray-900 text-sm">Spread the Cost at 0% Interest</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{financeInfo.description}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="text-xl font-display font-bold text-brand-600">From &pound;{financeInfo.monthlyFrom}/month</div>
                  <span className="text-xs text-gray-500">Over {financeInfo.spreadOver} at 0% APR</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              A specialist gate installer may cost slightly more than a general builder, but their engineering knowledge, attention to detail, and aftercare support mean fewer problems down the line. Most homeowners find the difference in quality is immediately obvious and well worth the investment. Our service is free, so compare up to 3 quotes and decide for yourself.
            </p>
          </div>
        </section>

        {/* Gate Types / Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Which Type of Driveway Gate is Right for You?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every London property is different, and the best gate depends on your driveway layout, budget, and style preferences. Browse the options below and find local specialists for each type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <article key={service.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <Link href={`/services/${service.slug}/`} className="block h-44 overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <Link href={`/services/${service.slug}/`}>
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-1.5 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-2 flex-grow">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                      <Link href={`/services/${service.slug}/`} className="text-brand-600 font-medium text-sm flex items-center hover:underline">
                        Find installers <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button onClick={() => setIsModalOpen(true)} className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors">
                        Get 3 Quotes
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">From Form to Free Site Survey in Under 24 Hours</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are not gate installers. We are a free matching service that connects London homeowners with the right specialist for their project. No fees, no obligation, no hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { step: 1, title: "Tell Us What You Need", desc: "Fill in a 60-second form with your London area, the type of gate you want, and your rough budget. We only share your details with installers we match you with." },
                { step: 2, title: "We Find Your Best Options", desc: "We filter our network of vetted London installers by gate type, distance, availability, and customer ratings. You get the best 2 to 3 matches for your project." },
                { step: 3, title: "Installers Arrange Free Surveys", desc: "Matched installers contact you within 24 hours to arrange a free site survey. Every survey includes a full measurement, design consultation, and written quote." },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                    <span className="text-2xl font-display font-bold text-brand-600">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-lg mb-3">Why this service exists</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Finding a good gate installer in London is harder than it should be. Search results are clogged with generic directories and companies that subcontract everything. You end up calling five or six firms, waiting for callbacks, and trying to figure out who actually knows what they are doing. We have done that legwork for every installer in our network.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We cover installers from Barnet down to Bromley, Ealing across to Ilford. The service costs you nothing. We earn a referral fee from the installer only if you choose to go ahead with the project. If you decide it is not for you, nobody pays a thing.
                  </p>
                </div>
                <div className="text-center">
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">Get Your Free Quotes</button>
                  <p className="text-xs text-gray-500 mt-2">100% free. No obligation. 60 seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electric vs Manual Comparison */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">Electric Gates vs Manual Gates: The Honest Comparison</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Both options secure your property. The difference is how they fit into your daily routine. For the majority of London homeowners, the convenience of electric gates makes them the clear winner.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-brand-100">
                <h3 className="font-display font-bold text-brand-600 text-lg mb-4">Electric Automated Gates</h3>
                <ul className="space-y-2.5">
                  {['Open and close from your car, phone, or keypad', 'Integrated safety sensors protect children and pets', 'Intercom and video entry systems available', 'Consistent, smooth operation in all weather', 'Smart home integration with Alexa, Google Home, Ring', 'Battery backup keeps gates working during power cuts', 'Deters intruders with visible automation', 'Adds more value to your property than manual gates'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-display font-bold text-gray-400 text-lg mb-4">Manual (Non-Automated) Gates</h3>
                <ul className="space-y-2.5">
                  {['Must get out of the car to open and close', 'No safety sensors or auto-reverse features', 'No intercom or remote access possible', 'Gates can swing in wind if not latched properly', 'No smart home connectivity', 'Lower upfront cost but no convenience benefit', 'Still provides a physical security barrier', 'Can be automated later at additional cost'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-4xl">
              The upfront cost difference between manual and automated gates is typically £1,200 to £3,000. For most London homeowners, that extra investment pays for itself in daily convenience, added property value, and improved security. If budget is tight, many of our installers offer manual gates now with pre-wired posts so you can add automation later without digging everything up again.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">What London Homeowners Say</h2>
                <p className="text-gray-600">Real experiences from people who used our free matching service to find their gate installer.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary whitespace-nowrap self-start md:self-auto">Get Matched Free</button>
            </div>
            <Testimonials limit={5} />
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">Find Gate Installers in Your Part of London</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              We cover every London borough and surrounding area. Each location page shows which gate types are popular locally, what homeowners in your area pay, and how to book a free site survey.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {topAreas.map(city => (
                <Link key={city} href={`/location/${toSlug(city)}/`} className="group flex items-center gap-3 bg-white hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-xl p-4 transition-all">
                  <div className="w-9 h-9 bg-brand-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-brand-500" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-gray-900 group-hover:text-brand-700 text-sm block">Gates in {city}</span>
                    <span className="text-[11px] text-gray-500">Installers and prices</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/location/" className="text-brand-600 font-semibold text-sm hover:underline">Browse all London locations &rarr;</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Your Driveway Gate Questions, Answered" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="container-width text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Your Perfect Driveway Gates Start With the Right Installer</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Fill in our 60-second form and let London&apos;s top gate installers come to you. Free quotes, free site surveys, zero strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-10 !py-4">Compare Installers Free</button>
              <Link href="/services/" className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white/20 text-lg !px-10 !py-4">
                Browse Gate Types
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {['Always 100% free', '50+ installs per installer', 'Full insurance guaranteed'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-400" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
