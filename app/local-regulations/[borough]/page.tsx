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
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Driveway Gate Planning Permission in ${borough.name} — What You Need to Know`,
    description: `Complete guide to driveway gate planning rules in ${borough.name}. Conservation areas, Article 4 directions, permitted development rights, and what requires a planning application.`,
    url: `${siteConfig.url}/local-regulations/${borough.slug}/`,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    about: {
      '@type': 'LocalBusiness',
      name: `Driveway Gate Installers ${borough.name}`,
      areaServed: { '@type': 'City', name: borough.name, addressCountry: 'GB' },
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[
              { label: 'Planning Guides', href: '/local-regulations/' },
              { label: borough.name },
            ]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <MapPin className="w-4 h-4" /> {borough.name} Planning Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                Driveway Gate Planning in <span className="text-brand-400">{borough.name}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {borough.intro}
              </p>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="bg-white border-b border-gray-100 py-8">
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Conservation Areas', value: borough.conservationAreas.toString() },
                { label: 'Article 4 Directions', value: borough.article4Directions ? 'Yes — check your street' : 'No' },
                { label: 'Standard 2m Rule', value: borough.article4Directions ? 'May not apply' : 'Applies' },
                { label: 'Planning Complexity', value: borough.article4Directions ? 'Higher' : 'Standard' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-display font-bold text-brand-600 mb-1">{value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <div className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-10">

                {/* Article 4 alert */}
                {borough.article4Directions && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h2 className="font-bold text-gray-900 mb-2">Article 4 Directions Apply in {borough.name}</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {borough.name} has Article 4 directions that remove standard permitted development rights for boundary changes in some or all residential areas. A gate that would require no planning permission in most London boroughs may need a formal application here. Always verify your specific street before commissioning any work.
                      </p>
                    </div>
                  </div>
                )}

                {/* Key rules */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Key Planning Rules in {borough.name}
                  </h2>
                  <div className="space-y-3">
                    {borough.keyRules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <FileText className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local notes */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    Local Context
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{borough.localNotes}</p>
                </div>

                {/* Common issues */}
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Common Planning Issues in {borough.name}
                  </h2>
                  <div className="space-y-3">
                    {borough.commonIssues.map((issue, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-sm leading-relaxed">{issue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard rules recap */}
                <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
                  <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-600" /> National Permitted Development Baseline
                  </h2>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>✓ Gates adjacent to a highway — permitted without planning permission up to <strong>1 metre</strong> tall</p>
                    <p>✓ Gates on non-highway boundaries — permitted without planning permission up to <strong>2 metres</strong> tall</p>
                    <p>✗ Conservation areas, Article 4 directions, listed buildings, and some local policies override these rules</p>
                    <p>✗ Always check with {borough.name} Council planning department if you are unsure</p>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-6">

                {/* CTA */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-display font-bold text-gray-900 mb-2">Get a Quote in {borough.name}</h3>
                  <p className="text-gray-500 text-sm mb-5">Vetted installers who know {borough.name} planning rules inside out.</p>
                  <button onClick={() => setIsModalOpen(true)} className="w-full btn-primary text-center text-sm">
                    Request a Free Call Back →
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">Call back within 2 hours · No obligation</p>
                </div>

                {/* Gate services */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-4">Gate Services in {borough.name}</h3>
                  <ul className="space-y-2">
                    {services.slice(0, 6).map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}/`} className="text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other boroughs */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-4">Other Borough Guides</h3>
                  <ul className="space-y-2">
                    {otherBoroughs.map(b => (
                      <li key={b.slug}>
                        <Link href={`/local-regulations/${b.slug}/`} className="text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors flex items-center gap-1">
                          {b.name}
                          {b.article4Directions && <span className="text-[9px] bg-amber-100 text-amber-700 px-1 rounded font-bold">A4</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/local-regulations/" className="inline-flex items-center gap-1 text-xs text-brand-600 font-bold mt-3 hover:underline">
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
