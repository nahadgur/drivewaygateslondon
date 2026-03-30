'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, MapPin, Star, Clock, Shield, Award, Users } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Testimonials } from '@/components/Testimonials';
import { LeadFormModal } from '@/components/LeadFormModal';
import { PricingSection } from '@/components/PricingSection';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';

export default function ServiceLocationPage({ params }: { params: { serviceSlug: string; locationSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service  = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();

  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `${service.title} in ${cityName}`, description: service.description,
    url: `${siteConfig.url}/services/${params.serviceSlug}/${params.locationSlug}/`,
    serviceType: service.title,
    areaServed: { '@type': 'City', name: cityName, addressCountry: 'GB' },
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>

        {/* Craftsman hero */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-10" loading="eager" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: service.title, href: `/services/${service.slug}/` }, { label: cityName }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
              <div>
                <div className="inline-flex items-center gap-2 border border-brand-500/30 bg-brand-500/10 text-brand-400 px-3 py-1 text-[11px] font-syne font-bold tracking-[.08em] uppercase mb-6">
                  <MapPin className="w-3 h-3" /> Vetted Installers in {cityName}
                </div>
                <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(26px, 4vw, 50px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                  {service.title} in {cityName}
                </h1>
                <p className="text-brand-300 text-lg mb-8 leading-relaxed">
                  Get matched with {cityName}&apos;s most experienced installers. Free site survey, free quotes, up to 3 options at no cost.
                </p>
                <div className="space-y-2">
                  {[`Specialists in ${cityName} for this gate type`, 'Compare up to 3 free quotes', 'Every installer vetted with 50+ projects'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span className="font-syne font-bold text-[11px] tracking-[.06em] uppercase text-brand-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div><HeroLeadForm city={cityName} service={service.title} /></div>
            </div>
          </div>
        </section>

        <div className="container-width py-16">
          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-2 border-brand-900 bg-brand-200 gap-[1px] mb-16">
            {[
              { icon: <Award className="w-5 h-5" />, title: 'Verified Specialists', desc: `Every ${cityName} installer has 50+ completed residential projects.` },
              { icon: <Clock className="w-5 h-5" />, title: 'Survey Within a Week', desc: `Most ${cityName} installers offer slots within 7 days.` },
              { icon: <Shield className="w-5 h-5" />, title: 'Insured & Warranted', desc: 'Every installer carries public liability cover and written warranties.' },
              { icon: <Users className="w-5 h-5" />, title: 'Matched to Your Project', desc: `Installers with specific experience with your gate type in ${cityName}.` },
            ].map((b, i) => (
              <div key={i} className="bg-brand-50 p-6">
                <div className="border border-brand-400/30 w-10 h-10 flex items-center justify-center text-brand-500 mb-3">{b.icon}</div>
                <h3 className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-brand-900 mb-1">{b.title}</h3>
                <p className="text-sm text-brand-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <section className="mb-12">
                <div className="craft-label">Overview</div>
                <h2 className="craft-h2 mb-4">What to Expect From {service.title} in {cityName}</h2>
                <div className="space-y-4 text-brand-700 leading-relaxed text-sm">
                  <p>{service.title} are one of the most commonly requested gate types among {cityName} homeowners. Our vetted installers understand the specific challenges that {cityName} properties present — from tight access to sloped driveways, period property restrictions, and London clay ground conditions.</p>
                  <p>{cityName} homeowners also benefit from working with installers who know the local planning rules. Most driveway gates fall under permitted development, but some London boroughs have additional guidelines. Our {cityName} installers handle these routinely and will flag any issues during the survey.</p>
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              <section className="mb-12">
                <div className="craft-label">Process</div>
                <h2 className="craft-h2 mb-6">How {service.title} Installation Works in {cityName}</h2>
                <div className="border-2 border-brand-900 bg-brand-200 gap-[1px] flex flex-col">
                  {[
                    `Book a free site survey at a vetted ${cityName} installer through our matching form`,
                    'Your installer visits, measures up, discusses design and material options, and checks ground conditions',
                    'You receive a detailed written quote with a clear cost breakdown and timeline',
                    'Once approved, the gate is designed, fabricated, and delivered to site',
                    'Installation takes 2 to 4 days: groundwork, gate fitting, automation, and finishing',
                    'Full commissioning, safety testing, and handover with remotes and manual release training',
                  ].map((step, i) => (
                    <div key={i} className="bg-brand-50 p-5 flex gap-4">
                      <div className="font-display text-3xl text-brand-200 leading-none flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                      <p className="text-sm text-brand-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              <section className="mb-12">
                <div className="craft-label">Why Us</div>
                <h2 className="craft-h2 mb-4">Why Get {service.title} in {cityName} Through Us?</h2>
                <div className="space-y-2">
                  {[
                    `Every ${cityName} installer has been independently verified for experience, insurance, and warranty standards`,
                    'You get a free site survey with a detailed written quote before any commitment',
                    `${cityName} installers offer flexible scheduling including evenings and weekends`,
                    'Aftercare, warranties, and ongoing maintenance support are included as standard',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 border-b-2 border-brand-100 py-3 last:border-b-0">
                      <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              <section className="mb-12">
                <div className="craft-label">Reviews</div>
                <h2 className="craft-h2 mb-6">What Homeowners Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Other Gate Types in {cityName}</div>
                  <ul className="space-y-1 mb-6">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${params.locationSlug}/`}
                          className="block px-3 py-2.5 border-b border-brand-100 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-700 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="craft-label">{service.title} Elsewhere</div>
                  <ul className="space-y-1">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => (
                      <li key={city}>
                        <Link href={`/services/${service.slug}/${toSlug(city)}/`}
                          className="block px-3 py-2 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-700 hover:text-brand-500 transition-colors">
                          {service.title} in {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-900 p-6 border-2 border-brand-700">
                  <div className="font-display text-3xl text-brand-400">From £99/month</div>
                  <p className="text-brand-300 text-sm mt-1 mb-4">0% finance available. Spread the cost over 6 to 36 months.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-gold w-full justify-center">Get Free Quotes</button>
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
