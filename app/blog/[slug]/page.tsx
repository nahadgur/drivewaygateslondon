'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { blogArticles, getArticleBySlug, type ContentBlock } from '@/data/blog';
import { services } from '@/data/services';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-brand-800 bg-gradient-to-r from-brand-900 to-brand-800 shadow-xl relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 via-brand-500 to-transparent" />
      <div className="px-8 py-8 md:px-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 mb-1">Free Matching Service</p>
          <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-1">Ready to get driveway gate quotes?</h3>
          <p className="text-brand-200 text-sm">Get matched with vetted London installers — no obligation, no cost.</p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Get 3 Free Quotes
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ContentRenderer({ blocks, onOpenModal }: { blocks: ContentBlock[]; onOpenModal: () => void }) {
  const imageQueue: { [h2Index: number]: { src: string; alt: string }[] } = {};
  let h2Count = 0;
  let currentH2Index = -1;
  let ctaInsertBeforeH2 = -1;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === 'h2') {
      h2Count++;
      currentH2Index = i;
      if (h2Count === 2) ctaInsertBeforeH2 = i;
    }
    if (block.type === 'image' && currentH2Index !== -1) {
      if (!imageQueue[currentH2Index]) imageQueue[currentH2Index] = [];
      // FIX: added ?? '' fallbacks to satisfy TypeScript (src/alt are string | undefined)
      imageQueue[currentH2Index].push({ src: block.src ?? '', alt: block.alt ?? '' });
    }
  }

  return (
    <div className="prose prose-gray max-w-none">
      {blocks.map((block, i) => {
        if (block.type === 'image') return null;
        if (block.type === 'internal-link' || block.type === 'external-link' || block.type === 'cta') return null;

        const elements: React.ReactNode[] = [];

        if (i === ctaInsertBeforeH2) {
          elements.push(<BlogCtaBanner key="cta-inject" onOpenModal={onOpenModal} />);
        }

        switch (block.type) {
          case 'h2':
            elements.push(
              <h2 key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-10 mb-4">
                {block.text}
              </h2>
            );
            if (imageQueue[i]) {
              imageQueue[i].forEach((img, imgIdx) => {
                elements.push(
                  <div key={`img-${i}-${imgIdx}`} className="my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                );
              });
            }
            break;

          case 'h3':
            elements.push(
              <h3 key={i} className="text-xl md:text-2xl font-display font-bold text-gray-900 mt-8 mb-3">
                {block.text}
              </h3>
            );
            break;

          case 'p':
            elements.push(
              <p key={i} className="text-gray-600 leading-relaxed mb-5">
                {block.text}
              </p>
            );
            break;

          case 'list':
            elements.push(
              <ul key={i} className="my-6 pl-6 space-y-2">
                {(block.items ?? []).map((item, j) => (
                  <li key={j} className="text-gray-600 leading-relaxed list-disc marker:text-brand-500">
                    {item}
                  </li>
                ))}
              </ul>
            );
            break;

          case 'table': {
            const rows = (block.text ?? '').split('\n').filter(r => r.trim());
            const headerCells = rows[0]?.split(' | ') || [];
            const bodyRows = rows.slice(1);
            elements.push(
              <div key={i} className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-md">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      {headerCells.map((cell, j) => (
                        <th key={j} className="px-5 py-4 font-semibold text-xs uppercase tracking-widest whitespace-nowrap border-r border-gray-700 last:border-r-0">{cell.trim()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bodyRows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? 'bg-white hover:bg-brand-50' : 'bg-gray-50 hover:bg-brand-50'} style={{ transition: 'background 0.15s' }}>
                        {row.split(' | ').map((cell, j) => (
                          <td key={j} className="px-5 py-3.5 text-gray-700 border-t border-gray-100 border-r border-gray-100 last:border-r-0 align-top">{cell.trim()}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            break;
          }

          case 'related-articles':
            elements.push(
              <div key={i} className="mt-12 pt-8 border-t border-gray-200 not-prose">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-6">Related articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(block.articles ?? []).map((a) => {
                    const fullArticle = blogArticles.find(art => art.slug === a.slug);
                    return (
                      <Link
                        key={a.slug}
                        href={`/blog/${a.slug}/`}
                        className="group flex flex-col rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-brand-200 transition-all bg-white"
                      >
                        {fullArticle?.featuredImage && (
                          <div className="relative h-32 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={fullArticle.featuredImage}
                              alt={a.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2 left-2 w-6 h-1 rounded-full bg-brand-500" />
                          </div>
                        )}
                        <div className="p-4 flex-grow flex flex-col">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2 mb-3">
                            {a.title}
                          </h4>
                          <span className="text-brand-600 text-xs font-bold uppercase tracking-wide flex items-center gap-1 mt-auto">
                            Read article <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
            break;

          default:
            break;
        }

        return elements.length > 0 ? <React.Fragment key={i}>{elements}</React.Fragment> : null;
      })}
    </div>
  );
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedService = article.relatedServiceSlug
    ? services.find(s => s.slug === article.relatedServiceSlug)
    : null;

  const furtherReading = article.content.filter(b => b.type === 'external-link');

  const bottomRelated = blogArticles
    .filter(a => a.slug !== article.slug)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (b.category === article.category && a.category !== article.category) return 1;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    .slice(0, 3);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-width pb-10">
            <Link href="/blog/" className="inline-flex items-center gap-1 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 hover:text-brand-200 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-gray-300 text-xs">
                <Calendar className="w-3 h-3" />
                {new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-4xl leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <ContentRenderer blocks={article.content} onOpenModal={() => setIsModalOpen(true)} />
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* CTA */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get your free gate quotes</h3>
                  <p className="text-gray-500 text-sm mb-5">Compare up to 3 vetted London installers — free, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">
                    Find Installers
                  </button>
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
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
                    >
                      See {relatedService.title} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {/* Service links */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900 text-sm">Our Services</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {services.map(service => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}/`}
                          className="text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors leading-snug"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Further Reading */}
                {furtherReading.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-sm">Further Reading</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {furtherReading.map((link, i) => (
                        <li key={i}>
                          <a
                            href={link.href ?? ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-600 hover:text-brand-800 hover:underline underline-offset-2 transition-colors leading-snug block"
                          >
                            {link.source ?? link.text ?? ''}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>

        {/* Bottom related articles */}
        {bottomRelated.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-width">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">More articles you might like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bottomRelated.map(a => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}/`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {a.featuredImage ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={a.featuredImage} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-200 via-brand-100 to-brand-50" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-brand-500/90 text-white text-[9px] font-bold uppercase rounded-full">{a.category}</span>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-base font-display font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 leading-snug">{a.title}</h3>
                      <span className="text-brand-600 font-bold text-xs flex items-center gap-1 mt-auto pt-2">
                        Read article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
