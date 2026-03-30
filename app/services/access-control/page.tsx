'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Smartphone, Hash, Phone, Camera } from 'lucide-react';
import { accessControlServices } from '@/data/access-control';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TrustBadges } from '@/components/TrustBadges';

const iconMap: Record<string, React.ReactNode> = {
  'video-intercoms': <Camera className="w-6 h-6" />,
  'keypad-entry-systems': <Hash className="w-6 h-6" />,
  'gsm-phone-entry': <Phone className="w-6 h-6" />,
  'anpr-systems': <Smartphone className="w-6 h-6" />,
};

export default function AccessControlHubPage() {
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
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: 'Access Control' }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <Shield className="w-4 h-4" /> Gate Access Control Systems
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Gate Access Control<br /><span className="text-brand-400">for London Properties</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                An automated gate needs a way to open it. From video intercoms and PIN keypads to phone-based GSM openers and fully hands-free ANPR plate recognition — find the right access control system for your London driveway.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 btn-primary text-base px-8 py-4"
              >
                Get Free Access Control Quotes <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Access Control Systems
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every automated gate needs reliable access control. Our London installer network covers the full spectrum — from simple keypads to full ANPR plate recognition systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessControlServices.map(service => (
                <Link
                  key={service.slug}
                  href={`/services/access-control/${service.slug}/`}
                  className="group block bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-brand-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-100 transition-colors">
                    {iconMap[service.slug]}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-brand-600 font-bold text-sm">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Not sure which system is right?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Tell us about your gate setup and we will match you with a London installer who can advise and quote on the best access control solution for your property.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary text-base px-8 py-4">
              Get Free Quotes
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
