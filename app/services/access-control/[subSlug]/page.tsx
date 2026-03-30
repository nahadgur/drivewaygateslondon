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
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/access-control/${service.slug}/`,
    serviceType: service.title,
    areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.image} alt="" className="w-full h-full object-cover opacity-40" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          </div>
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Gate Types', href: '/services/' },
              { label: 'Access Control', href: '/services/access-control/' },
              { label: service.title },
            ]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{b.title} — {b.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <HeroLeadForm service={service.title} />
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-6">
                {service.intro.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">{para}</p>
                ))}

                {/* Benefits */}
                <div className="mt-10">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Why Choose {service.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-display font-bold text-gray-900 mb-3">Get a Free Quote</h3>
                  <p className="text-gray-500 text-sm mb-5">Compare vetted London installers — no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary text-center">
                    Request a Call Back →
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">Call back within 2 hours · 100% free</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-4">Other Access Control Systems</h3>
                  <ul className="space-y-2.5">
                    {otherServices.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/access-control/${s.slug}/`} className="text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors">
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

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <FAQ faqs={service.faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to add {service.title}?</h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Get matched with a vetted London installer who specialises in gate access control systems.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Request a Free Call Back <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
