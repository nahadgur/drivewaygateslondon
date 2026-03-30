'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { boroughRegulations } from '@/data/regulations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function LocalRegulationsHub() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restrictive = boroughRegulations.filter(b => b.article4Directions);
  const permissive  = boroughRegulations.filter(b => !b.article4Directions);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-16 md:py-24 relative z-10">
            <Breadcrumbs items={[{ label: 'London Gate Planning Guides' }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <FileText className="w-4 h-4" /> Borough Planning Guides
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Driveway Gate Planning<br /><span className="text-brand-400">by London Borough</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                London has 33 boroughs — and each has its own conservation areas, Article 4 directions, and gate planning rules. Find your borough below to understand exactly what you need before you install.
              </p>
            </div>
          </div>
        </section>

        {/* Key rules summary */}
        <section className="section-padding bg-white border-b border-gray-100">
          <div className="container-width">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">The UK Permitted Development Rules for Driveway Gates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, color: 'green', title: 'Under 1 metre', desc: 'Gates next to a highway (road or pavement) do not need planning permission if under 1 metre tall.' },
                { icon: CheckCircle, color: 'green', title: 'Under 2 metres', desc: 'Gates on non-highway boundaries do not need planning permission if under 2 metres tall.' },
                { icon: AlertCircle, color: 'amber', title: 'Exceptions apply', desc: 'Conservation areas, Article 4 directions, listed buildings, and some local policies override these rules.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className={`rounded-xl p-6 border ${color === 'green' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                  <Icon className={`w-6 h-6 mb-3 ${color === 'green' ? 'text-green-600' : 'text-amber-600'}`} />
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article 4 boroughs warning */}
        <section className="section-padding bg-amber-50 border-y border-amber-200">
          <div className="container-width">
            <div className="flex items-start gap-4 max-w-3xl mx-auto">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Article 4 Boroughs — Extra Care Required</h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  The following boroughs have Article 4 directions that remove standard permitted development rights for boundary changes in some or all residential areas. In these boroughs, a gate that would need no planning permission elsewhere may require a full application. Always check before commissioning work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {restrictive.map(b => (
                    <Link key={b.slug} href={`/local-regulations/${b.slug}/`} className="inline-flex items-center px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-xs font-semibold text-amber-800 hover:bg-amber-200 transition-colors">
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All boroughs grid */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">All London Borough Planning Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boroughRegulations.sort((a, b) => a.name.localeCompare(b.name)).map(borough => (
                <Link
                  key={borough.slug}
                  href={`/local-regulations/${borough.slug}/`}
                  className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{borough.name}</span>
                      {borough.article4Directions && (
                        <span className="inline-block px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded">Article 4</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{borough.conservationAreas} conservation areas</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need a Gate Installer Who Knows Your Borough?</h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Our vetted London installers know the local planning rules. They will advise on permitted development, identify any conservation area restrictions, and guide you through the application process if needed.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Find a Local Installer <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
