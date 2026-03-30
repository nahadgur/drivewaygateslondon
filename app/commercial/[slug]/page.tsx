'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { commercialServices, getCommercialBySlug } from '@/data/commercial';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TrustBadges } from '@/components/TrustBadges';
import { FAQ } from '@/components/FAQ';

export default function CommercialServicePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getCommercialBySlug(params.slug);
  if (!service) notFound();

  const otherServices = commercialServices.filter(s => s.slug !== service.slug);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.title, description: service.description,
    url: `${siteConfig.url}/commercial/${service.slug}/`,
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-brand-950 border-b-[3px] border-brand-900 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-10" loading="eager" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Commercial', href: '/commercial/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
              <div>
                <div className="inline-flex items-center gap-2 border border-brand-500/30 text-brand-400 px-3 py-1 text-[11px] font-syne font-bold tracking-[.08em] uppercase mb-6">
                  <Building2 className="w-3 h-3" /> Commercial Gate Systems
                </div>
                <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                  style={{ fontSize: 'clamp(26px, 4vw, 50px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                  {service.title}
                </h1>
                <p className="text-brand-300 text-lg leading-relaxed mb-8">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-1.5" />
                      <span className="text-brand-300 text-sm">{b.title} — {b.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div><HeroLeadForm service={service.title} /></div>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section className="py-16 md:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-6">
                {service.intro.map((para, i) => (
                  <p key={i} className="text-brand-700 leading-relaxed" style={{ fontSize: '15.5px' }}>{para}</p>
                ))}
                <div className="mt-8">
                  <div className="craft-label">Typical Clients</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.typicalClients.map(c => (
                      <span key={c} className="px-3 py-1.5 border-2 border-brand-300 text-brand-700 font-syne font-bold text-[11px] tracking-[.06em] uppercase">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="craft-label">Key Features</div>
                  <h2 className="craft-h2 mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="bg-brand-50 p-6 hover:bg-brand-100 transition-colors">
                        <h3 className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-brand-900 mb-2">{b.title}</h3>
                        <p className="text-brand-600 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <FAQ faqs={service.faqs} title="Frequently Asked Questions" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Get a Quote</div>
                  <p className="text-brand-600 text-sm mb-5">Vetted London commercial gate installers — no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Request a Call Back</button>
                  <p className="text-center text-xs text-brand-500 mt-3">Within 2 hours · No obligation</p>
                </div>
                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">Other Commercial Services</div>
                  <ul className="space-y-1">
                    {otherServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/commercial/${s.slug}/`}
                          className="block py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Get Started</div>
              <h2 className="craft-h2 text-white">Ready to Discuss Your Commercial Project?</h2>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
              Request a Commercial Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
