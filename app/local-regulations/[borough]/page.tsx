'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, CheckCircle, ArrowRight, FileText, MapPin } from 'lucide-react';
import { boroughRegulations, getBoroughBySlug } from '@/data/regulations';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function BoroughPlanningPage({ params }: { params: { borough: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const borough = getBoroughBySlug(params.borough);
  if (!borough) notFound();

  const otherBoroughs = boroughRegulations
    .filter(b => b.slug !== borough.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Driveway Gate Planning Permission in ${borough.name} — What You Need to Know`,
    description: `Complete guide to driveway gate planning rules in ${borough.name}. Conservation areas, Article 4 directions, permitted development rights.`,
    url: `${siteConfig.url}/local-regulations/${borough.slug}/`,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>

        {/* Hero */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-12 md:py-20">
            <Breadcrumbs items={[{ label: 'Planning Guides', href: '/local-regulations/' }, { label: borough.name }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 border border-brand-500/30 text-brand-400 px-3 py-1 font-syne font-bold text-[11px] tracking-[.08em] uppercase mb-6">
                <MapPin className="w-3 h-3" /> {borough.name} Planning Guide
              </div>
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-4"
                style={{ fontSize: 'clamp(26px, 4vw, 50px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                Driveway Gate Planning in <span className="text-brand-500">{borough.name}</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed">{borough.intro}</p>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <div className="bg-brand-900 border-b-2 border-brand-700">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-700/40">
              {[
                { label: 'Conservation Areas',   value: borough.conservationAreas.toString() },
                { label: 'Article 4 Directions', value: borough.article4Directions ? 'Yes — check your street' : 'No' },
                { label: 'Standard 2m Rule',     value: borough.article4Directions ? 'May not apply' : 'Applies' },
                { label: 'Planning Complexity',  value: borough.article4Directions ? 'Higher' : 'Standard' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center py-6 px-4">
                  <div className="font-display text-3xl text-brand-400 leading-none mb-1">{value}</div>
                  <div className="font-syne font-bold text-[9px] tracking-[.14em] uppercase text-brand-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="py-16 md:py-24">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-10">

                {/* Article 4 alert */}
                {borough.article4Directions && (
                  <div className="border-2 border-brand-700 bg-brand-100 p-6 flex items-start gap-4">
                    <AlertCircle className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-syne font-bold text-[12px] tracking-[.04em] uppercase text-brand-900 mb-2">Article 4 Directions Apply in {borough.name}</div>
                      <p className="text-brand-700 text-sm leading-relaxed">
                        {borough.name} has Article 4 directions that remove standard permitted development rights for boundary changes in some or all residential areas. A gate that would require no planning permission in most London boroughs may need a formal application here. Always verify your specific street before commissioning any work.
                      </p>
                    </div>
                  </div>
                )}

                {/* Key rules */}
                <div>
                  <div className="craft-label">Key Rules</div>
                  <h2 className="craft-h2 mb-6">Key Planning Rules in {borough.name}</h2>
                  <div className="space-y-2">
                    {borough.keyRules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-3 border-b-2 border-brand-100 py-4 last:border-b-0">
                        <FileText className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-brand-700 text-sm leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local context */}
                <div>
                  <div className="craft-label">Local Context</div>
                  <h2 className="craft-h2 mb-4">Local Context</h2>
                  <p className="text-brand-700 leading-relaxed" style={{ fontSize: '15.5px' }}>{borough.localNotes}</p>
                </div>

                {/* Common issues */}
                <div>
                  <div className="craft-label">Watch Out For</div>
                  <h2 className="craft-h2 mb-6">Common Planning Issues in {borough.name}</h2>
                  <div className="space-y-3">
                    {borough.commonIssues.map((issue, i) => (
                      <div key={i} className="flex items-start gap-3 border-b-2 border-brand-100 py-3 last:border-b-0">
                        <AlertCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-brand-600 text-sm leading-relaxed">{issue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* National baseline */}
                <div className="border-2 border-brand-900 bg-brand-50">
                  <div className="bg-brand-900 px-5 py-3 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-400" />
                    <span className="font-syne font-bold text-[9.5px] tracking-[.18em] uppercase text-brand-400">National Permitted Development Baseline</span>
                  </div>
                  <div className="p-6 space-y-2 text-sm text-brand-700">
                    <p>✓ Gates adjacent to a highway — permitted up to <strong className="text-brand-900">1 metre</strong> tall</p>
                    <p>✓ Gates on non-highway boundaries — permitted up to <strong className="text-brand-900">2 metres</strong> tall</p>
                    <p>✗ Conservation areas, Article 4 directions, listed buildings override these rules</p>
                    <p>✗ Always check with {borough.name} Council planning department if you are unsure</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Get a Quote in {borough.name}</div>
                  <p className="text-brand-600 text-sm mb-5">Vetted installers who know {borough.name} planning rules inside out.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Request a Free Call Back</button>
                  <p className="text-center text-xs text-brand-500 mt-3">Within 2 hours · No obligation</p>
                </div>

                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">Gate Services in {borough.name}</div>
                  <ul className="space-y-1">
                    {services.slice(0, 6).map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}/`}
                          className="block py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">Other Borough Guides</div>
                  <ul className="space-y-1">
                    {otherBoroughs.map(b => (
                      <li key={b.slug}>
                        <Link href={`/local-regulations/${b.slug}/`}
                          className="flex items-center gap-2 py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
                          {b.name}
                          {b.article4Directions && (
                            <span className="font-syne font-bold text-[8px] tracking-[.08em] uppercase px-1 bg-brand-200 text-brand-700">A4</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/local-regulations/" className="inline-flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 mt-3 hover:text-brand-700">
                    View all boroughs <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
