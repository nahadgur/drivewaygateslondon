'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Shield, Truck, School, ParkingSquare, ChevronRight } from 'lucide-react';
import { commercialServices } from '@/data/commercial';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const iconMap: Record<string, React.ReactNode> = {
  'industrial-security-gates': <Shield className="w-6 h-6" />,
  'school-gate-systems': <School className="w-6 h-6" />,
  'car-park-barriers': <ParkingSquare className="w-6 h-6" />,
  'heavy-duty-sliding-gates': <Truck className="w-6 h-6" />,
};

export default function CommercialHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-16 md:py-24 relative z-10">
            <Breadcrumbs items={[{ label: 'Commercial Gate Systems' }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <Building2 className="w-4 h-4" /> Commercial Gate Systems London
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Commercial Gate Systems<br /><span className="text-brand-400">for London Business Premises</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Heavy-duty automated gate systems for London industrial sites, schools, car parks, and commercial premises. Engineered for high-frequency use, large openings, and serious security requirements.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 btn-primary text-base px-8 py-4"
              >
                Request a Commercial Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Commercial Gate Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Commercial gate systems have fundamentally different requirements from residential installations. Our London commercial installer network covers the full range of business gate applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commercialServices.map(service => (
                <Link
                  key={service.slug}
                  href={`/commercial/${service.slug}/`}
                  className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-100 transition-colors">
                      {iconMap[service.slug]}
                    </div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 text-sm">{service.description}</p>
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Typical clients</p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.typicalClients.slice(0, 3).map(c => (
                          <span key={c} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{c}</span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm">
                      View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why commercial differs */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-4xl">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
              Why Commercial Gate Systems are Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Duty Cycle', desc: 'Residential gates open 10–20 times per day. Commercial sites may need 200+ operations. The motor, track, and hardware specification is completely different.' },
                { title: 'Vehicle Weight', desc: 'HGVs, forklifts, and commercial vehicles impose loading that destroys residential-grade track systems within weeks. Commercial engineering starts with ground loading.' },
                { title: 'Security Rating', desc: 'LPS 1175, SBD, and Secured by Design specifications are commercial requirements. Certified attack resistance is specified, tested, and documented.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Get a Commercial Gate Quote
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Tell us about your site and requirements. We will match you with a London commercial gate installer experienced with your type of premises.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
              Request a Commercial Quote <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
