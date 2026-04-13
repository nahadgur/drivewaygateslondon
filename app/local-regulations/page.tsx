'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { boroughRegulations } from '@/data/regulations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function LocalRegulationsHub() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const restrictive = boroughRegulations.filter(b => b.article4Directions);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-16 md:py-24">
            <Breadcrumbs items={[{ label: 'London Gate Planning Guides' }]} />
            <div className="max-w-3xl mt-6">
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                Driveway Gate Planning<br /><span className="text-brand-500">by London Borough</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed">
                London has 33 boroughs — each with its own conservation areas, Article 4 directions, and gate planning rules. Find your borough below.
              </p>
            </div>
          </div>
        </section>

        {/* Key rules */}
        <section className="py-16 border-b-2 border-brand-200">
          <div className="container-width">
            <div className="craft-label">UK Permitted Development Rules</div>
            <h2 className="craft-h2 mb-8">The UK Permitted Development Rules for Driveway Gates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-brand-900 bg-brand-200 gap-[1px]">
              {[
                { icon: CheckCircle, ok: true, title: 'Under 1 metre', desc: 'Gates next to a highway do not need planning permission if under 1 metre tall.' },
                { icon: CheckCircle, ok: true, title: 'Under 2 metres', desc: 'Gates on non-highway boundaries do not need planning permission if under 2 metres tall.' },
                { icon: AlertCircle, ok: false, title: 'Exceptions apply', desc: 'Conservation areas, Article 4 directions, listed buildings, and some local policies override these rules.' },
              ].map(({ icon: Icon, ok, title, desc }) => (
                <div key={title} className="bg-brand-50 p-7">
                  <Icon className={`w-5 h-5 mb-3 ${ok ? 'text-brand-500' : 'text-brand-400'}`} />
                  <div className="font-syne font-bold text-[12.5px] tracking-[.04em] uppercase text-brand-900 mb-2">{title}</div>
                  <p className="text-brand-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article 4 warning */}
        <section className="py-12 bg-brand-100 border-y-2 border-brand-300">
          <div className="container-width">
            <div className="flex items-start gap-4 max-w-3xl">
              <AlertCircle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-2">Article 4 Boroughs — Extra Care Required</h2>
                <p className="text-brand-700 text-sm leading-relaxed mb-4">
                  These boroughs have Article 4 directions that remove standard permitted development rights for boundary changes. A gate that needs no planning permission elsewhere may require a full application here.
                </p>
                <div className="flex flex-wrap gap-2">
                  {restrictive.map(b => (
                    <Link key={b.slug} href={`/local-regulations/${b.slug}/`}
                      className="inline-flex items-center px-3 py-1 border-2 border-brand-700 font-syne font-bold text-[10px] tracking-[.08em] uppercase text-brand-800 hover:bg-brand-900 hover:text-brand-50 hover:border-brand-900 transition-colors">
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All boroughs */}
        <section className="py-16 md:py-24">
          <div className="container-width">
            <div className="craft-label">All Boroughs</div>
            <h2 className="craft-h2 mb-8">All London Borough Planning Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900 bg-brand-200 gap-[1px]">
              {boroughRegulations.sort((a, b) => a.name.localeCompare(b.name)).map(borough => (
                <Link key={borough.slug} href={`/local-regulations/${borough.slug}/`}
                  className="group bg-brand-50 hover:bg-brand-900 flex items-center justify-between p-5 transition-all">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-syne font-bold text-[12px] tracking-[.03em] uppercase text-brand-900 group-hover:text-white transition-colors">{borough.name}</span>
                      {borough.article4Directions && (
                        <span className="font-syne font-bold text-[8px] tracking-[.08em] uppercase px-1.5 py-0.5 bg-brand-700 text-brand-200 group-hover:bg-brand-500">Article 4</span>
                      )}
                    </div>
                    <span className="font-syne font-bold text-[10px] tracking-[.06em] uppercase text-brand-500 group-hover:text-brand-400">{borough.conservationAreas} conservation areas</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Find an Installer</div>
              <h2 className="craft-h2 text-white">Need a Gate Installer Who Knows Your Borough?</h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">Our vetted London installers know the local planning rules inside out. They will advise on permitted development and guide you through any application process.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0">Find a Local Installer</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
