'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';
import { services } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';

export function CityPageClient({ params }: { params: { city: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main" tabIndex={-1} className="scroll-mt-24 outline-none">

        {/* Hero */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-12 md:py-20">
            <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
              <div>
                <div className="inline-flex items-center gap-2 border border-brand-500/30 text-brand-400 px-3 py-1 text-[11px] font-syne font-bold tracking-[.08em] uppercase mb-6">
                  <MapPin className="w-3 h-3" /> Driveway Gate Installation in {cityName}
                </div>
                <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                  Driveway Gates in <span className="text-brand-500">{cityName}</span>
                </h1>
                <p className="text-brand-300 text-lg leading-relaxed">
                  We design, supply and install driveway gates across {cityName}. Fill in the short form below, we call you back within 24 hours to arrange a free site survey, then you get a written fixed quote.
                </p>
              </div>
              <div><HeroLeadForm city={cityName} /></div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <div className="craft-label">Overview</div>
                <h2 className="craft-h2 mb-4">Driveway Gate Installation in {cityName}</h2>
                <div className="space-y-4 text-brand-700 text-sm leading-relaxed">
                  <p>If you are looking for driveway gates in {cityName}, you have come to the right place. We design, supply and install driveway gates ourselves, carry full public liability insurance, and provide a written warranty on every job. That means better engineering, cleaner finishes, and gates that work reliably for years.</p>
                  <p>We offer free site surveys in {cityName} as standard. We visit your property, measure up, discuss material and design options, assess ground conditions and any gradient issues, and provide a detailed written fixed quote with no hidden costs. There is no obligation to proceed at any stage.</p>
                </div>
              </section>

              {/* Gate types */}
              <section className="mb-16">
                <div className="craft-label">Services</div>
                <h2 className="craft-h2 mb-6">Gate Types Available in {cityName}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-brand-900 bg-brand-900 gap-[2px]">
                  {services.map(service => (
                    <Link key={service.id} href={`/services/${service.slug}/${params.city}/`}
                      className="group bg-brand-50 hover:bg-brand-100 transition-colors overflow-hidden">
                      <div className="h-36 overflow-hidden border-b-2 border-brand-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{ filter: 'saturate(.8)' }} loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-syne font-bold text-[12.5px] tracking-[.04em] uppercase text-brand-900 group-hover:text-brand-600 mb-1.5 transition-colors">
                          {service.title} in {cityName}
                        </h3>
                        <p className="text-xs text-brand-600 mb-3 line-clamp-2 leading-relaxed">{service.description}</p>
                        <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-600 flex items-center gap-1">
                          Get a free quote <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} />

              {/* Why choose */}
              <section className="mb-16">
                <div className="craft-label">Why Us</div>
                <h2 className="craft-h2 mb-6">Why {cityName} Homeowners Choose Us</h2>
                <div className="grid sm:grid-cols-2 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                  {[
                    { icon: <Star className="w-4 h-4" />, title: 'We Install Ourselves', desc: `We design, supply and install every gate with our own team. No subcontracting, no middlemen.` },
                    { icon: <Shield className="w-4 h-4" />, title: 'Gate Specialists', desc: `We are not general builders. Driveway gates and automation are all we do.` },
                    { icon: <Clock className="w-4 h-4" />, title: 'Fast Survey Bookings', desc: `We can usually arrange a free site survey in ${cityName} within 7 days, including evenings.` },
                    { icon: <CheckCircle className="w-4 h-4" />, title: 'Free Site Survey and Quote', desc: `Every consultation includes a full site survey and detailed written fixed quote at no cost.` },
                  ].map((item, i) => (
                    <div key={i} className="bg-brand-50 p-6 hover:bg-brand-100 transition-colors">
                      <div className="border border-brand-400/30 w-9 h-9 flex items-center justify-center text-brand-500 mb-3">{item.icon}</div>
                      <h3 className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-brand-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-brand-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              <div className="mb-12">
                <FAQ faqs={[...FAQS_LOCATION, ...FAQS_SERVICES]} title={`Driveway Gates in ${cityName}: Common Questions`} />
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Get a Quote</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-3">Get a Quote in {cityName}</h3>
                  <p className="text-brand-600 text-sm mb-5">Tell us what you need and we call you back within 24 hours to arrange a free site survey in {cityName}.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Get a Free Quote</button>
                  <div className="mt-5 pt-4 border-t-2 border-brand-200 space-y-3">
                    {[{ icon: <Clock className="w-3.5 h-3.5" />, text: 'Surveys available this week' },
                      { icon: <Shield className="w-3.5 h-3.5" />, text: 'We install every gate ourselves' },
                      { icon: <Star className="w-3.5 h-3.5" />, text: 'Full insurance and warranties' }].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="border border-brand-400/30 p-1.5 text-brand-500">{item.icon}</div>
                        <span className="text-xs text-brand-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-900 p-6 border-2 border-brand-700">
                  <div className="font-display text-3xl text-brand-400">From £99/month</div>
                  <p className="text-brand-300 text-sm mt-1 mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-gold w-full justify-center">Check Eligibility</button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <div className="bg-brand-900 p-8 md:p-12 mt-12 flex flex-col md:flex-row items-center md:justify-between gap-8">
            <div>
              <div className="craft-label text-brand-400">Get Started</div>
              <h2 className="craft-h2 text-white">Ready to Get Driveway Gates in {cityName}?</h2>
              <p className="text-brand-400 text-sm mt-2 max-w-lg">Fill in our 60-second form and we call you back within 24 hours to arrange a free site survey in {cityName}. Free survey, written fixed quote, zero obligation.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0">Get Your Free Quote</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
