'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, PoundSterling, BarChart3, Wrench } from 'lucide-react';
import { guides, getGuideBySlug, type GuidePillar } from '@/data/guides';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';

const PILLAR_ICON: Record<GuidePillar, React.ReactNode> = {
  'Pricing & Costs':               <PoundSterling className="w-4 h-4" />,
  'Comparison & Buying':           <BarChart3 className="w-4 h-4" />,
  'Maintenance & Troubleshooting': <Wrench className="w-4 h-4" />,
  'Safety & Compliance':           <ShieldCheck className="w-4 h-4" />,
};

const PILLAR_COLOR: Record<GuidePillar, string> = {
  'Pricing & Costs':               'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Comparison & Buying':           'bg-sky-50 text-sky-700 border-sky-200',
  'Maintenance & Troubleshooting': 'bg-amber-50 text-amber-700 border-amber-200',
  'Safety & Compliance':           'bg-rose-50 text-rose-700 border-rose-200',
};

export default function GuidePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedService = guide.relatedServiceSlug
    ? services.find(s => s.slug === guide.relatedServiceSlug)
    : null;

  const relatedGuides = (guide.relatedGuides ?? [])
    .map(slug => guides.find(g => g.slug === slug))
    .filter(Boolean) as typeof guides;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    url: `${siteConfig.url}/guides/${guide.slug}/`,
    datePublished: guide.publishDate,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    image: guide.featuredImage,
  };

  // Build TOC from sections
  const hasSections = guide.sections.length > 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <div className="relative h-[360px] md:h-[440px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={guide.featuredImage} alt={guide.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-width pb-10">
            <Link href="/guides/" className="inline-flex items-center gap-1 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 hover:text-brand-200 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to guides
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${PILLAR_COLOR[guide.pillar]}`}>
                {PILLAR_ICON[guide.pillar]}
                {guide.pillar}
              </span>
              <span className="flex items-center gap-1 text-gray-300 text-xs">
                <Clock className="w-3 h-3" /> {guide.readingMinutes} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-4xl leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <article className="lg:col-span-2">
              <Breadcrumbs items={[
                { label: 'Guides', href: '/guides/' },
                { label: guide.pillar, href: `/guides/?pillar=${encodeURIComponent(guide.pillar)}` },
                { label: guide.title },
              ]} />

              {/* Intro */}
              {guide.intro && (
                <p className="text-lg text-gray-600 leading-relaxed mt-6 mb-8 pb-8 border-b border-gray-100">
                  {guide.intro}
                </p>
              )}

              {/* Table of Contents */}
              {hasSections && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-brand-500" />
                    <span className="font-bold text-gray-900 text-sm">In this guide</span>
                  </div>
                  <ol className="space-y-2">
                    {guide.sections.map((section, i) => (
                      <li key={i}>
                        <a
                          href={`#section-${i}`}
                          className="flex items-start gap-2 text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors"
                        >
                          <span className="font-bold text-gray-400 flex-shrink-0 w-5">{i + 1}.</span>
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    {guide.faqs.length > 0 && (
                      <li>
                        <a href="#faqs" className="flex items-start gap-2 text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors">
                          <span className="font-bold text-gray-400 flex-shrink-0 w-5">{guide.sections.length + 1}.</span>
                          Frequently Asked Questions
                        </a>
                      </li>
                    )}
                  </ol>
                </div>
              )}

              {/* Sections */}
              {guide.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="mb-12 scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-5">
                    {section.heading}
                  </h2>
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed mb-5 text-base">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {/* FAQs */}
              {guide.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-28 mt-12 pt-10 border-t border-gray-100">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQ faqs={guide.faqs} />
                </div>
              )}

              {/* Related guides */}
              {relatedGuides.length > 0 && (
                <div className="mt-12 pt-10 border-t border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-5">Related guides</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedGuides.map(g => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}/`}
                        className="group flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-brand-200 transition-all bg-white"
                      >
                        <div className="h-28 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={g.featuredImage}
                            alt={g.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 flex-grow">
                          <p className="text-xs font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2 mb-2">
                            {g.title}
                          </p>
                          <span className="text-brand-600 text-xs font-bold flex items-center gap-1">
                            Read <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* Lead CTA */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-500 mb-2">Free Matching Service</p>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2 leading-snug">
                    Ready to get gate quotes?
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">
                    Compare up to 3 vetted London installers — free, no obligation.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center text-sm">
                    Request a Free Call Back →
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Call back within 2 hours · No spam
                  </p>
                </div>

                {/* Contextual service CTA */}
                {relatedService && (
                  <div className="bg-brand-900 p-6 rounded-2xl border border-brand-700">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 mb-2">Relevant Service</p>
                    <h3 className="text-base font-display font-bold text-white mb-2 leading-snug">
                      {relatedService.title}
                    </h3>
                    <p className="text-brand-200 text-xs leading-relaxed mb-5">
                      {relatedService.description}
                    </p>
                    <Link
                      href={`/services/${relatedService.slug}/`}
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all"
                    >
                      See {relatedService.title} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {/* All guides link */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Browse All Guides</p>
                  <div className="space-y-2">
                    {guides.filter(g => g.slug !== guide.slug).slice(0, 6).map(g => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}/`}
                        className="block text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors leading-snug"
                      >
                        {g.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/guides/" className="inline-flex items-center gap-1 text-xs text-brand-600 font-bold mt-4 hover:underline">
                    View all guides <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
