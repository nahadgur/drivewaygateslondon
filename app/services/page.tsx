'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ServicesIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero
          title="Driveway Gate Types for London Homes"
          subtitle="From electric sliding gates to traditional hardwood swing gates, find the right option for your property and get matched with a specialist installer."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          showCta={false} showTrust={false}
        />

        <section className="py-16 md:py-24">
          <div className="container-width">
            <div className="craft-label">All Gate Types</div>
            <h2 className="craft-h2 mb-10">Browse Every Gate Type<br />We Cover in London</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900 bg-brand-900 gap-[2px]">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`}
                  className="group bg-brand-50 hover:bg-brand-100 flex gap-0 transition-colors overflow-hidden">
                  <div className="w-36 h-36 overflow-hidden flex-shrink-0 border-r-2 border-brand-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: 'saturate(.8)' }} loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 group-hover:text-brand-500 mb-2 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-brand-600 mb-4 line-clamp-2 leading-relaxed">{service.description}</p>
                    <span className="font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1">
                      Find installers <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Free Service</div>
              <h2 className="craft-h2 text-white">Not Sure Which Gate<br /><span className="text-brand-500">Is Right for You?</span></h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">Tell us about your property and we will match you with an installer who can advise and quote — free and no obligation.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0">Get Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
