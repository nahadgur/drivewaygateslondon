'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, PoundSterling, BarChart3, Wrench } from 'lucide-react';
import { guides, getGuideBySlug, type GuidePillar } from '@/data/guides';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';

const PILLAR_ICON: Record<GuidePillar, React.ReactNode> = {
  'Pricing & Costs':               <PoundSterling className="w-4 h-4" />,
  'Comparison & Buying':           <BarChart3 className="w-4 h-4" />,
  'Maintenance & Troubleshooting': <Wrench className="w-4 h-4" />,
  'Safety & Compliance':           <ShieldCheck className="w-4 h-4" />,
};

export function GuidePageClient({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedService = guide.relatedServiceSlug ? services.find(s => s.slug === guide.relatedServiceSlug) : null;
  const relatedGuides  = (guide.relatedGuides ?? []).map(slug => guides.find(g => g.slug === slug)).filter(Boolean) as typeof guides;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        {/* Hero */}
        <div className="relative h-[360px] md:h-[440px] overflow-hidden border-b-[3px] border-brand-900">
          <Image src={guide.featuredImage} alt={guide.title} fill className="object-cover" style={{ filter: 'saturate(.7)' }} priority
            sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-width pb-10">
            <Link href="/guides/" className="inline-flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.15em] uppercase text-brand-400 mb-4 hover:text-brand-200 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to guides
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-400">
                {PILLAR_ICON[guide.pillar]} {guide.pillar}
              </span>
              <span className="flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.08em] uppercase text-brand-400">
                <Clock className="w-3 h-3" /> {guide.readingMinutes} min read
              </span>
            </div>
            <h1 className="font-syne font-extrabold uppercase tracking-tight text-white max-w-4xl leading-tight"
              style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '-.02em' }}>
              {guide.title}
            </h1>
          </div>
        </div>

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.pillar }, { label: guide.title }]} />

              {guide.intro && (
                <p className="text-brand-700 leading-relaxed mt-6 mb-8 pb-8 border-b-2 border-brand-200" style={{ fontSize: '16px' }}>
                  {guide.intro}
                </p>
              )}

              {/* TOC */}
              {guide.sections.length > 0 && (
                <div className="border-2 border-brand-900 mb-10">
                  <div className="bg-brand-900 px-5 py-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                    <span className="font-syne font-bold text-[9.5px] tracking-[.18em] uppercase text-brand-400">In This Guide</span>
                  </div>
                  <ol className="p-5 space-y-2">
                    {guide.sections.map((section, i) => (
                      <li key={i}>
                        <a href={`#section-${i}`}
                          className="flex items-start gap-2.5 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
                          <span className="text-brand-400 flex-shrink-0 w-5">{i + 1}.</span>
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    {guide.faqs.length > 0 && (
                      <li>
                        <a href="#faqs" className="flex items-start gap-2.5 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
                          <span className="text-brand-400 flex-shrink-0 w-5">{guide.sections.length + 1}.</span>
                          FAQs
                        </a>
                      </li>
                    )}
                  </ol>
                </div>
              )}

              {/* Sections */}
              {guide.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="mb-12 scroll-mt-28">
                  <h2 className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mb-5 border-b-2 border-brand-200 pb-3"
                    style={{ fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '-.02em' }}>
                    {section.heading}
                  </h2>
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-brand-600 leading-relaxed mb-5 text-sm [&_a]:text-brand-500 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-700"
                      dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              ))}

              {guide.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-28 mt-12 pt-10 border-t-2 border-brand-200">
                  <FAQ faqs={guide.faqs} title="Frequently Asked Questions" />
                </div>
              )}

              {relatedGuides.length > 0 && (
                <div className="mt-12 pt-10 border-t-2 border-brand-200">
                  <div className="craft-label">Related Guides</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px]">
                    {relatedGuides.map(g => (
                      <Link key={g.slug} href={`/guides/${g.slug}/`}
                        className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                        <div className="h-28 overflow-hidden border-b-2 border-brand-900">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={g.featuredImage} alt={g.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ filter: 'saturate(.8)' }} loading="lazy" />
                        </div>
                        <div className="p-4 flex-grow">
                          <p className="font-syne font-bold text-[11px] uppercase tracking-tight text-brand-900 group-hover:text-brand-500 transition-colors leading-snug line-clamp-2 mb-2">{g.title}</p>
                          <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1">
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
              <div className="sticky top-28 space-y-4">
                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Free Matching Service</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-2">Ready to Get Gate Quotes?</h3>
                  <p className="text-brand-600 text-sm mb-5">Compare up to 3 vetted London installers — free, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Request a Free Call Back</button>
                  <p className="text-center text-xs text-brand-500 mt-3">Within 2 hours · No spam</p>
                </div>

                {relatedService && (
                  <div className="bg-brand-900 p-6 border-2 border-brand-700">
                    <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Relevant Service</div>
                    <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-white mb-2">{relatedService.title}</h3>
                    <p className="text-brand-300 text-xs leading-relaxed mb-5">{relatedService.description}</p>
                    <Link href={`/services/${relatedService.slug}/`}
                      className="btn-gold w-full justify-center inline-flex items-center gap-2">
                      See {relatedService.title} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                <div className="border-2 border-brand-200 p-5 bg-brand-50">
                  <div className="craft-label">All Guides</div>
                  <div className="space-y-1">
                    {guides.filter(g => g.slug !== guide.slug).slice(0, 6).map(g => (
                      <Link key={g.slug} href={`/guides/${g.slug}/`}
                        className="block py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.03em] uppercase text-brand-600 hover:text-brand-500 transition-colors leading-snug">
                        {g.title}
                      </Link>
                    ))}
                  </div>
                  <Link href="/guides/" className="inline-flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 mt-4 hover:text-brand-700">
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
