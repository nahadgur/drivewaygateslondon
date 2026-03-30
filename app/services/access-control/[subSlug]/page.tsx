'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { accessControlServices, getAccessControlBySlug } from '@/data/access-control';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TrustBadges } from '@/components/TrustBadges';
import { FAQ } from '@/components/FAQ';
import Link from 'next/link';

export default function AccessControlPage({ params }: { params: { subSlug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = getAccessControlBySlug(params.subSlug);
  if (!service) notFound();

  const otherServices = accessControlServices.filter(s => s.slug !== service.slug);
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.title, description: service.description,
    url: `${siteConfig.url}/services/access-control/${service.slug}/`,
    serviceType: service.title, areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
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
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: 'Access Control', href: '/services/access-control/' }, { label: service.title }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
              <div>
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
              <div className="lg:col-span-2 space-y-5">
                {service.intro.map((para, i) => (
                  <p key={i} className="text-brand-700 leading-relaxed" style={{ fontSize: '15.5px' }}>{para}</p>
                ))}
                <div className="mt-10">
                  <div className="craft-label">Why Choose</div>
                  <h2 className="craft-h2 mb-6">Why Choose {service.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="bg-brand-50 p-6 hover:bg-brand-100 transition-colors">
                        <h3 className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-brand-900 mb-2">{b.title}</h3>
                        <p className="text-brand-600 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10">
                  <FAQ faqs={service.faqs} title={`${service.title} FAQs`} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Free Quote</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-3">Get a Free Quote</h3>
                  <p className="text-brand-600 text-sm mb-5">Compare vetted London installers — no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Request a Call Back</button>
                  <p className="text-center text-xs text-brand-500 mt-3">Within 2 hours · 100% free</p>
                </div>
                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">Other Systems</div>
                  <ul className="space-y-1">
                    {otherServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/access-control/${s.slug}/`}
                          className="block py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
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
          <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Get Started</div>
              <h2 className="craft-h2 text-white">Ready to Add {service.title}?</h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">Get matched with a vetted London installer who specialises in gate access control systems.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
              Request a Free Call Back <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
