'use client';
// ACCESS CONTROL HUB
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Camera, Hash, Phone, Smartphone } from 'lucide-react';
import { accessControlServices } from '@/data/access-control';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TrustBadges } from '@/components/TrustBadges';

const iconMap: Record<string, React.ReactNode> = {
  'video-intercoms':    <Camera className="w-6 h-6" />,
  'keypad-entry-systems': <Hash className="w-6 h-6" />,
  'gsm-phone-entry':    <Phone className="w-6 h-6" />,
  'anpr-systems':       <Smartphone className="w-6 h-6" />,
};

export default function AccessControlHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        {/* Hero */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-16 md:py-24">
            <Breadcrumbs items={[{ label: 'Gate Types', href: '/services/' }, { label: 'Access Control' }]} />
            <div className="max-w-3xl mt-6">
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                Gate Access Control<br /><span className="text-brand-500">for London Properties</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed mb-8">
                An automated gate needs a way to open it. From video intercoms and PIN keypads to GSM openers and ANPR plate recognition — find the right access control system for your London driveway.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-gold inline-flex items-center gap-2">
                Get Free Access Control Quotes <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section className="py-16 md:py-24">
          <div className="container-width">
            <div className="craft-label">Systems</div>
            <h2 className="craft-h2 mb-10">Access Control Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-brand-900 bg-brand-900 gap-[2px]">
              {accessControlServices.map(service => (
                <Link key={service.slug} href={`/services/access-control/${service.slug}/`}
                  className="group bg-brand-50 hover:bg-brand-100 p-8 transition-colors">
                  <div className="border border-brand-400/30 w-12 h-12 flex items-center justify-center text-brand-500 mb-5 group-hover:bg-brand-900 group-hover:text-brand-400 transition-colors">
                    {iconMap[service.slug]}
                  </div>
                  <h3 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-3 group-hover:text-brand-500 transition-colors">{service.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed mb-5">{service.description}</p>
                  <span className="font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Not Sure?</div>
              <h2 className="craft-h2 text-white">Not Sure Which System Is Right?</h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">Tell us about your gate setup and we will match you with a London installer who can advise on the best access control solution.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0">Get Free Quotes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
