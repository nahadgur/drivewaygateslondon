'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Shield, Truck, School, ParkingSquare } from 'lucide-react';
import { commercialServices } from '@/data/commercial';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const iconMap: Record<string, React.ReactNode> = {
  'industrial-security-gates': <Shield className="w-6 h-6" />,
  'school-gate-systems':       <School className="w-6 h-6" />,
  'car-park-barriers':         <ParkingSquare className="w-6 h-6" />,
  'heavy-duty-sliding-gates':  <Truck className="w-6 h-6" />,
};

export default function CommercialHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-16 md:py-24">
            <Breadcrumbs items={[{ label: 'Commercial Gate Systems' }]} />
            <div className="max-w-3xl mt-6">
              <div className="font-display text-brand-800/40 leading-none mb-[-6px] select-none"
                style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>03</div>
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                Commercial Gate Systems<br /><span className="text-brand-500">for London Business Premises</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed mb-8">
                Heavy-duty automated gate systems for London industrial sites, schools, car parks, and commercial premises. Engineered for high-frequency use and serious security requirements.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-gold inline-flex items-center gap-2">
                Request a Commercial Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section className="py-16 md:py-24">
          <div className="container-width">
            <div className="craft-label">Solutions</div>
            <h2 className="craft-h2 mb-10">Commercial Gate Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900 bg-brand-900 gap-[2px]">
              {commercialServices.map(service => (
                <Link key={service.slug} href={`/commercial/${service.slug}/`}
                  className="group bg-brand-50 hover:bg-brand-100 p-8 transition-colors">
                  <div className="border border-brand-400/30 w-12 h-12 flex items-center justify-center text-brand-500 mb-5 group-hover:bg-brand-900 group-hover:text-brand-400 transition-colors">
                    {iconMap[service.slug]}
                  </div>
                  <h3 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-3 group-hover:text-brand-500 transition-colors">{service.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="mb-5">
                    <div className="font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-500 mb-2">Typical clients</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.typicalClients.slice(0, 3).map(c => (
                        <span key={c} className="px-2 py-0.5 border border-brand-300 text-brand-600 font-syne font-bold text-[10px] tracking-[.04em] uppercase">{c}</span>
                      ))}
                    </div>
                  </div>
                  <span className="font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1">
                    View details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why commercial differs */}
        <section className="py-16 bg-brand-100 border-y-2 border-brand-200">
          <div className="container-width">
            <div className="craft-label">Commercial vs Residential</div>
            <h2 className="craft-h2 mb-8">Why Commercial Gate Systems Are Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-brand-900 bg-brand-200 gap-[1px]">
              {[
                { title: 'Duty Cycle', desc: 'Residential gates open 10–20 times per day. Commercial sites may need 200+ operations. The motor, track, and hardware specification is completely different.' },
                { title: 'Vehicle Weight', desc: 'HGVs, forklifts, and commercial vehicles impose loading that destroys residential-grade track systems within weeks. Commercial engineering starts with ground loading.' },
                { title: 'Security Rating', desc: 'LPS 1175, SBD, and Secured by Design specifications are commercial requirements. Certified attack resistance is specified, tested, and documented.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-brand-50 p-7">
                  <div className="font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-900 mb-3">{title}</div>
                  <p className="text-brand-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Get a Quote</div>
              <h2 className="craft-h2 text-white">Get a Commercial Gate Quote</h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">Tell us about your site. We will match you with a London commercial gate installer experienced with your type of premises.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0">Request a Commercial Quote</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
