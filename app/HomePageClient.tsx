'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users, CreditCard, Zap } from 'lucide-react';
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
import { HOMEPAGE_FAQS as homepageFaqs } from '@/data/site';

const topAreas = ['Barnet', 'Richmond', 'Wimbledon', 'Bromley', 'Ealing', 'Hampstead', 'Kensington', 'Chiswick', 'Croydon', 'Harrow', 'Ilford', 'Kingston upon Thames'];

const WHY_ITEMS = [
  { n: '01', icon: <Shield className="w-5 h-5 text-brand-500" />, title: 'Genuine Security', desc: 'A properly installed gate is the most visible deterrent you can add. It stops cold callers, blocks opportunistic access, and gives you control over who enters your property. Insurance companies take note too.' },
  { n: '02', icon: <Sparkles className="w-5 h-5 text-brand-500" />, title: 'Instant Kerb Appeal', desc: 'A well-designed gate is the first thing visitors see. It frames your property, signals quality, and creates a sense of arrival. Estate agents consistently list gates among the top features that boost perceived value.' },
  { n: '03', icon: <Zap className="w-5 h-5 text-brand-500" />, title: 'Effortless Access', desc: 'With electric automation, you never need to leave your car in the rain. Open your gates from a remote, keypad, intercom, or your phone. Some systems detect your car as you approach and open automatically.' },
  { n: '04', icon: <Users className="w-5 h-5 text-brand-500" />, title: 'Child & Pet Safety', desc: 'Gates create a defined boundary that keeps young children and dogs safely within your property. No more worrying about a toddler wandering toward the road or a dog slipping out when the postman arrives.' },
  { n: '05', icon: <Globe className="w-5 h-5 text-brand-500" />, title: 'Added Property Value', desc: 'Quality driveway gates typically add 5% or more to a London property value. On a £750,000 home, that is a potential £37,500 uplift for an investment of £5,000 to £10,000. Few home improvements offer a better return.' },
  { n: '06', icon: <Calendar className="w-5 h-5 text-brand-500" />, title: 'Privacy on Your Terms', desc: 'Solid or semi-solid gate designs screen your driveway and front garden from the street. In London, where properties are close together, this visual privacy makes a noticeable difference to how your outdoor space feels.' },
];

const ELECTRIC_PROS  = ['Open and close from your car, phone, or keypad', 'Integrated safety sensors protect children and pets', 'Intercom and video entry systems available', 'Consistent, smooth operation in all weather', 'Smart home integration with Alexa, Google Home, Ring', 'Battery backup keeps gates working during power cuts', 'Deters intruders with visible automation', 'Adds more property value than manual gates'];
const MANUAL_CONS = ['Must get out of the car to open and close', 'No safety sensors or auto-reverse features', 'No intercom or remote access possible', 'Gates can swing in wind if not latched properly', 'No smart home connectivity', 'Lower upfront cost but no convenience benefit', 'Still provides a physical security barrier', 'Can be automated later at additional cost'];

/* ── Section wrapper ── */
function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-width">{children}</div>
    </section>
  );
}

/* ── Section header ── */
function SectionHead({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="craft-label">{label}</div>
      <h2 className="craft-h2">{title}</h2>
    </div>
  );
}

export function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);


  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={open} />

      <main>

        {/* ── Hero ── */}
        <Hero
          title="London's Most Trusted Driveway Gate Installers, Compared"
          subtitle="We vet every installer so you do not have to. Get matched with experienced, fully insured gate specialists near you. Free site survey, free quotes, zero cost to use our service."
          image="/images/gates/gate-wrought-iron-open-misty-morning-manor.png"
          onOpenModal={open}
        />

        {/* ── Trust Bar ── */}
        <TrustBadges />

        {/* ── Intro ── */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left copy */}
            <div>
              <div className="craft-label">About Our Service</div>
              <h2 className="craft-h2 mb-6">
                Secure Your London Property<br />
                With the Right Gates
                <span className="block font-display font-normal not-italic text-brand-500 mt-1"
                  style={{ fontSize: '.68em', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0 }}>
                  — done properly, first time.
                </span>
              </h2>
              <div className="space-y-4 text-brand-700 leading-relaxed" style={{ fontSize: '15.5px' }}>
                <p>Driveway gates are one of the most effective upgrades you can make to a London property. They add a layer of security that deters opportunistic intruders, keep children and pets safely within the boundary, and create a strong first impression that adds real value to your home.</p>
                <p>The London market has grown significantly, driven by rising property values and homeowner demand for security and kerb appeal. Automation is now the norm — most homeowners opt for electric operation with intercom and remote control access.</p>
                <p>Here is the part most homeowners miss: <strong className="text-brand-900 font-bold">not all gate installers are equal.</strong> The difference between an experienced specialist and a general builder is enormous. We only list installers who have completed 50 or more residential gate installations.</p>
              </div>
              <button onClick={open} className="btn-primary mt-8">Get Free Quotes</button>
            </div>

            {/* Right: standards box + free box */}
            <div>
              <div className="ruled-border">
                <div className="bg-brand-900 px-5 py-3 font-syne font-bold text-[9.5px] tracking-[.2em] uppercase text-brand-400">
                  Our Installer Standards — Who Makes the Network
                </div>
                {[
                  'Minimum 50 residential gate installations',
                  'Current public liability insurance',
                  'Written warranty on gates & automation',
                  'Verified customer reviews on file',
                  'UK Machinery Directive safety compliance',
                ].map((item, i, arr) => (
                  <div key={i} className={`flex items-center gap-3 px-5 py-4 text-sm text-brand-700 ${i < arr.length - 1 ? 'border-b border-brand-200' : ''}`}>
                    <span className="text-brand-500 font-bold flex-shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-brand-500 px-6 py-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-display text-5xl text-white leading-none">Free</div>
                  <div className="text-sm text-white/75 mt-1">Our service costs you nothing at any stage</div>
                </div>
                <button onClick={open} className="bg-white text-brand-700 font-syne font-bold text-xs tracking-[.1em] uppercase px-6 py-3 hover:bg-brand-50 transition-colors flex-shrink-0">
                  Get Quotes
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Why ── */}
        <Section className="bg-brand-100 border-y-2 border-brand-200">
          <SectionHead
            label="Why Install Driveway Gates"
            title={<>Six Reasons London Homeowners<br />Are Installing Driveway Gates</>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900">
            {WHY_ITEMS.map(({ n, title, desc }, i) => (
              <div key={i}
                className={`p-7 transition-colors hover:bg-brand-100
                  ${i % 3 !== 2 ? 'lg:border-r-2 lg:border-brand-200' : ''}
                  ${i % 2 !== 1 ? 'sm:border-r-2 sm:border-brand-200 lg:border-r-0' : ''}
                  ${i < 3 ? 'border-b-2 border-brand-200' : ''}
                  ${i % 2 === 1 ? 'sm:border-r-0' : ''}
                  ${i < 4 ? 'sm:border-b-2 sm:border-brand-200' : ''}
                  ${i < 3 ? 'lg:border-b-2' : 'lg:border-b-0'}
                `}
              >
                <div className="font-display text-5xl text-brand-200 leading-none mb-3">{n}</div>
                <div className="font-syne font-bold text-[13px] tracking-[.06em] uppercase text-brand-900 mb-2">{title}</div>
                <p className="text-[13px] text-brand-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Pricing ── */}
        <Section>
          <SectionHead
            label="Pricing Guide 2026"
            title={<>What London Homeowners<br />Actually Pay for Driveway Gates</>}
          />
          <p className="text-brand-700 mb-8 max-w-2xl" style={{ fontSize: '15.5px' }}>
            Every project is different, but these are the price ranges you will see from experienced installers across London. As the capital, prices sit at the upper end nationally.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-[3px] border-brand-900">
                  <th className="py-3 pr-5 text-left font-syne font-bold text-[9.5px] tracking-[.16em] uppercase text-brand-600">Gate Type</th>
                  <th className="py-3 pr-5 text-left font-syne font-bold text-[9.5px] tracking-[.16em] uppercase text-brand-600">Price Range</th>
                  <th className="py-3 pr-5 text-left font-syne font-bold text-[9.5px] tracking-[.16em] uppercase text-brand-600 hidden md:table-cell">Install Time</th>
                  <th className="py-3 text-left font-syne font-bold text-[9.5px] tracking-[.16em] uppercase text-brand-600 hidden lg:table-cell">Includes</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr key={tier.slug} className="border-b border-brand-200 hover:bg-brand-100 transition-colors">
                    <td className="py-4 pr-5 font-syne font-bold text-[13px] text-brand-900">{tier.treatment}</td>
                    <td className="py-4 pr-5">
                      <span className="font-display text-[18px] text-brand-500 font-semibold">
                        £{tier.priceFrom.toLocaleString()} – £{tier.priceTo.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 pr-5 text-brand-700 hidden md:table-cell">{tier.typicalDuration}</td>
                    <td className="py-4 text-brand-600 text-xs hidden lg:table-cell">{tier.alignerSets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Finance strip */}
          <div className="bg-brand-900 px-7 py-6 mt-0.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-500 mb-1">0% Finance Available</div>
              <div className="font-display text-4xl text-white leading-none">From £{financeInfo.monthlyFrom}/month</div>
              <div className="text-xs text-brand-400 mt-1">Over {financeInfo.spreadOver} at 0% APR — subject to status</div>
            </div>
            <button onClick={open} className="btn-gold flex-shrink-0">Get Your Free Quote</button>
          </div>

          {/* Includes */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="border-2 border-brand-200 p-6">
              <div className="font-syne font-bold text-[10px] tracking-[.16em] uppercase text-brand-700 mb-4">Every Quote Includes</div>
              <ul className="space-y-2">
                {treatmentIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-700">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-50 border-2 border-brand-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-brand-600" />
                <div className="font-syne font-bold text-[10px] tracking-[.16em] uppercase text-brand-700">Spread the Cost at 0%</div>
              </div>
              <p className="text-sm text-brand-600 leading-relaxed mb-3">{financeInfo.description}</p>
              <div className="bg-white border-2 border-brand-200 p-4">
                <div className="font-display text-3xl text-brand-500 font-semibold">From £{financeInfo.monthlyFrom}/month</div>
                <div className="text-xs text-brand-500 mt-1">Over {financeInfo.spreadOver} at 0% APR</div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Gate Types / Services ── */}
        <Section className="bg-brand-100 border-y-2 border-brand-200">
          <SectionHead
            label="Gate Types"
            title={<>Which Type of Driveway Gate<br />Is Right for Your Property?</>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900 gap-[2px] bg-brand-900">
            {services.map(service => (
              <article key={service.id} className="svc-card group">
                <Link href={`/services/${service.slug}/`} className="block h-44 overflow-hidden border-b-2 border-brand-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image} alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'saturate(.8)' }}
                    loading="lazy"
                  />
                </Link>
                <div className="p-5">
                  <Link href={`/services/${service.slug}/`}>
                    <h3 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-1.5 hover:text-brand-500 transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-brand-600 text-xs leading-relaxed mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t-2 border-brand-200">
                    <Link href={`/services/${service.slug}/`}
                      className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center hover:text-brand-700 transition-colors">
                      Find installers <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <button onClick={open} className="bg-brand-900 hover:bg-brand-500 text-brand-50 font-syne font-bold text-[10px] tracking-[.08em] uppercase py-1.5 px-3 transition-colors">
                      Get 3 Quotes
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ── How It Works ── */}
        <Section>
          <SectionHead
            label="How It Works"
            title={<>From Form to Free Site Survey<br />in Under 24 Hours</>}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-brand-900 bg-brand-200 gap-[1px]">
            {[
              { n: '01', title: 'Tell Us What You Need', desc: 'Fill in a 60-second form with your London area, the type of gate you want, and your rough budget. We only share your details with installers we match you with — nobody else.' },
              { n: '02', title: 'We Find Your Best Options', desc: 'We filter our network of vetted London installers by gate type, distance, availability, and customer ratings. You get the best 2 to 3 matches for your project — not a generic list.' },
              { n: '03', title: 'Installers Arrange Free Surveys', desc: 'Matched installers contact you within 24 hours to arrange a free site survey. Every survey includes full measurements, a design consultation, and a written quote. No obligation to proceed.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-brand-50 p-8 md:p-10">
                <div className="font-display text-7xl text-brand-200 leading-none mb-4">{n}</div>
                <h3 className="font-syne font-bold text-[13.5px] tracking-[.06em] uppercase text-brand-900 mb-3">{title}</h3>
                <p className="text-sm text-brand-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-900 px-8 py-7 mt-0.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-500 mb-2">Why This Service Exists</div>
              <p className="text-sm text-brand-300 leading-relaxed max-w-lg">
                Finding a good gate installer in London is harder than it should be. Search results are clogged with generic directories and companies that subcontract everything. We have done that legwork for every installer in our network so you do not have to.
              </p>
            </div>
            <button onClick={open} className="btn-gold flex-shrink-0">Get Free Quotes</button>
          </div>
        </Section>

        {/* ── Electric vs Manual ── */}
        <Section className="bg-brand-100 border-y-2 border-brand-200">
          <SectionHead
            label="Electric vs Manual"
            title={<>Electric Gates vs Manual Gates:<br />The Honest Comparison</>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900">
            <div className="p-7 md:border-r-2 border-b-2 md:border-b-0 border-brand-200">
              <h3 className="font-syne font-bold text-sm tracking-[.08em] uppercase text-brand-500 mb-5 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Electric Automated Gates
              </h3>
              <ul className="space-y-3">
                {ELECTRIC_PROS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-brand-700 border-b border-brand-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7">
              <h3 className="font-syne font-bold text-sm tracking-[.08em] uppercase text-brand-300 mb-5">◻ Manual (Non-Automated) Gates</h3>
              <ul className="space-y-3">
                {MANUAL_CONS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-brand-400 border-b border-brand-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-brand-300 font-bold mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-brand-700 mt-6 text-sm leading-relaxed max-w-4xl">
            The upfront cost difference between manual and automated gates is typically £1,200 to £3,000. For most London homeowners, that extra investment pays for itself in daily convenience, added property value, and improved security. If budget is tight, many of our installers offer manual gates with pre-wired posts so you can add automation later without digging everything up.
          </p>
        </Section>

        {/* ── Testimonials ── */}
        <Section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="craft-label">Customer Reviews</div>
              <h2 className="craft-h2">What London Homeowners Say</h2>
              <p className="text-brand-600 text-sm mt-2">Real experiences from people who used our free matching service.</p>
            </div>
            <button onClick={open} className="btn-primary self-start md:self-auto whitespace-nowrap">Get Matched Free</button>
          </div>
          <Testimonials limit={3} />
          <div className="bg-brand-900 px-7 py-5 mt-0.5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <span className="font-display text-5xl text-white leading-none">4.9</span>
              <div>
                <div className="text-brand-500 text-lg tracking-[2px]">★★★★★</div>
                <div className="font-syne font-bold text-[10px] tracking-[.14em] uppercase text-brand-400 mt-0.5">200+ Verified Reviews</div>
              </div>
            </div>
            <button onClick={open} className="btn-gold">Get Matched Free</button>
          </div>
        </Section>

        {/* ── Locations ── */}
        <Section className="bg-brand-100 border-y-2 border-brand-200">
          <SectionHead
            label="Coverage"
            title={<>Find Gate Installers in<br />Your Part of London</>}
          />
          <p className="text-brand-600 text-sm mb-8 max-w-2xl">
            We cover every London borough and surrounding area. Each location page shows which gate types are popular locally, what homeowners pay, and how to book a free site survey.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-2 border-brand-900 bg-brand-200 gap-[1px]">
            {topAreas.map(city => (
              <Link key={city} href={`/location/${toSlug(city)}/`} className="loc-chip">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                {city}
              </Link>
            ))}
          </div>
          <div className="mt-5">
            <Link href="/location/" className="font-syne font-bold text-[11px] tracking-[.12em] uppercase text-brand-500 hover:text-brand-700 transition-colors">
              Browse all 114 London areas →
            </Link>
          </div>
        </Section>

        {/* ── FAQ ── */}
        <Section>
          <div className="max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Your Driveway Gate Questions, Answered" />
          </div>
        </Section>

        {/* ── Final CTA ── */}
        <section className="bg-brand-900">
          <div className="container-width py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div className="max-w-xl">
                <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Get Started — Free</div>
                <h2 className="craft-h2 text-white mb-4">
                  Your Perfect Driveway Gates<br />Start With the{' '}
                  <span className="text-brand-500">Right Installer.</span>
                </h2>
                <p className="text-brand-400 text-sm leading-relaxed">
                  Fill in our 60-second form and let London&apos;s top gate installers come to you. Free quotes, free site surveys, zero strings attached.
                </p>
                <div className="flex flex-wrap gap-4 mt-5 text-xs text-brand-600">
                  {['Always 100% free', '50+ installs per installer', 'Full insurance guaranteed'].map(item => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <button onClick={open} className="btn-gold !text-sm !py-4 !px-10">Compare Installers Free</button>
                <Link href="/services/"
                  className="btn-secondary !border-brand-500/40 !text-brand-400 hover:!bg-brand-800 hover:!text-brand-50 !text-sm !py-4 !px-10 text-center">
                  Browse Gate Types
                </Link>
                <span className="text-[11px] text-brand-600 text-center font-syne tracking-[.06em]">60 seconds · No obligation</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
