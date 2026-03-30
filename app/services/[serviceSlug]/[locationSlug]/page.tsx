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
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const allCities = Object.values(LOCATIONS).flat();

  const benefits = [
    { icon: <Award className="w-6 h-6" />, title: 'Verified Experienced Installers', desc: `Every ${cityName} installer in our network has completed 50 or more residential gate projects. That experience shows in the results.` },
    { icon: <Clock className="w-6 h-6" />, title: 'Survey Within a Week', desc: `Most ${cityName} installers offer free site survey slots within 7 days, including evenings and weekends.` },
    { icon: <Shield className="w-6 h-6" />, title: 'Full Insurance and Warranties', desc: 'Every installer carries public liability cover and provides written warranties on both the gate and the automation system.' },
    { icon: <Users className="w-6 h-6" />, title: 'Matched to Your Project', desc: `We do not send you a random list. We match you with ${cityName} installers who have specific experience with your gate type and property style.` },
  ];

  const installSteps = [
    `Book a free site survey at a vetted ${cityName} installer through our matching form`,
    'Your installer visits, measures up, discusses design and material options, and checks ground conditions',
    'You receive a detailed written quote with a clear breakdown of costs and a timeline',
    'Once approved, the gate is designed, fabricated, and delivered to site',
    'Installation takes 2 to 4 days: groundwork, gate fitting, automation, and finishing',
    'Full commissioning, safety testing, and handover with remotes and manual release training',
  ];

  const pageUrl = `${siteConfig.url}/services/${params.serviceSlug}/${params.locationSlug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${cityName}`,
    description: service.description,
    url: pageUrl,
    serviceType: service.title,
    areaServed: {
      '@type': 'City',
      name: cityName,
      addressCountry: 'GB',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: '+442081234567',
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName,
        addressRegion: 'London',
        addressCountry: 'GB',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free site survey and no-obligation quote',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Split Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-50" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Gate Types', href: '/services/' },
              { label: service.title, href: `/services/${service.slug}/` },
              { label: cityName }
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                  <MapPin className="w-4 h-4" /> Vetted Installers in {cityName}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title} in <span className="text-brand-400">{cityName}</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get matched with {cityName}&apos;s most experienced installers for {service.title.toLowerCase()}. Free site survey, free quotes, and up to 3 options at no cost.
                </p>
                <div className="space-y-4 mb-8">
                  {[`Specialists in ${cityName} who install this gate type regularly`, 'Compare up to 3 free quotes side by side', 'Every installer vetted with 50+ completed projects'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-400 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <span>Highly rated by {cityName} homeowners</span>
                </div>
              </div>
              <div>
                <HeroLeadForm city={cityName} service={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container-width py-16">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* SEO Intro */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  What to Expect From {service.title} in {cityName}
                </h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    {service.title} are one of the most commonly requested gate types among {cityName} homeowners. Our vetted installers in the area have fitted dozens of similar projects and understand the specific challenges that {cityName} properties present, from tight access to sloped driveways, period property restrictions, and London clay ground conditions. They will assess your property during a free site survey and recommend the best approach for your specific situation.
                  </p>
                  <p>
                    {cityName} homeowners also benefit from working with installers who know the local planning rules. While most driveway gates fall under permitted development, some London boroughs have additional guidelines around gate height, materials in conservation areas, and proximity to public highways. Our {cityName} installers handle these considerations routinely and will flag any issues during the survey.
                  </p>
                </div>
              </section>

              {/* Nearby Areas */}
              <NearbyAreasGrid cityName={cityName} serviceSlug={service.slug} serviceName={service.title} />

              {/* Installation Steps */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">How {service.title} Installation Works in {cityName}</h2>
                <div className="space-y-4">
                  {installSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                      <p className="text-gray-700 font-medium pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <PricingSection cityName={cityName} serviceId={service.id} serviceName={service.title} />

              {/* Why Choose */}
              <section className="mb-12">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Get {service.title} in {cityName} Through Us?</h3>
                <div className="space-y-3">
                  {[
                    `Every ${cityName} installer we list has been independently verified for experience, insurance, and warranty standards`,
                    'You get a free site survey with a detailed written quote before making any commitment',
                    `${cityName} installers in our network offer flexible scheduling including evenings and weekends`,
                    'Aftercare, warranties, and ongoing maintenance support are included as standard',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="mb-12">
                  <FAQ faqs={service.faqs} title={`${service.title} in ${cityName}: Common Questions`} />
                </div>
              )}

              {/* Reviews */}
              <section className="mt-12 mb-12">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What Homeowners Are Saying</h2>
                <Testimonials limit={2} />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Other Gate Types in {cityName}</h3>
                  <ul className="space-y-2 mb-8">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link href={`/services/${s.slug}/${params.locationSlug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                          {s.title} in {cityName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">{service.title} Elsewhere in London</h3>
                  <ul className="space-y-2">
                    {allCities.filter(c => c !== cityName).slice(0, 5).map(city => {
                      const slug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      return (
                        <li key={city}>
                          <Link href={`/services/${service.slug}/${slug}/`} className="block px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 text-gray-700 hover:text-brand-700 transition-all text-sm font-medium">
                            {service.title} in {city}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-display font-bold mb-3">From &pound;99/month</h3>
                  <p className="text-brand-100 text-sm mb-4">0% finance available at most {cityName} installers. Spread the cost of {service.title.toLowerCase()} over 6 to 36 months with nothing to pay upfront.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
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
