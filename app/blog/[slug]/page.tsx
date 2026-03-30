'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import { blogArticles, getArticleBySlug, type ContentBlock } from '@/data/blog';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

/* ── Inline CTA ── */
function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="my-10 border-2 border-brand-900 bg-brand-50">
      <div className="bg-brand-900 px-5 py-3 font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-400">
        Free Matching Service
      </div>
      <div className="px-7 py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-1">
            Ready to get driveway gate quotes?
          </h3>
          <p className="text-brand-600 text-sm">Get matched with vetted London installers — no obligation, no cost.</p>
        </div>
        <button onClick={onOpenModal} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
          Get 3 Free Quotes <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Content renderer ── */
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
      imageQueue[currentH2Index].push({ src: block.src ?? '', alt: block.alt ?? '' });
    }
  }

  return (
    <div>
      {blocks.map((block, i) => {
        if (block.type === 'image' || block.type === 'internal-link' || block.type === 'external-link' || block.type === 'cta') return null;

        const elements: React.ReactNode[] = [];

        if (i === ctaInsertBeforeH2) {
          elements.push(<BlogCtaBanner key="cta-inject" onOpenModal={onOpenModal} />);
        }

        switch (block.type) {
          case 'h2':
            elements.push(
              <h2 key={i} className="font-syne font-extrabold uppercase tracking-tight text-brand-900 mt-10 mb-5 border-b-2 border-brand-200 pb-3"
                style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', letterSpacing: '-.02em' }}>
                {block.text}
              </h2>
            );
            if (imageQueue[i]) {
              imageQueue[i].forEach((img, imgIdx) => {
                elements.push(
                  <div key={`img-${i}-${imgIdx}`} className="my-6 border-2 border-brand-900 overflow-hidden aspect-[16/9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ filter: 'saturate(.8)' }} loading="lazy" />
                  </div>
                );
              });
            }
            break;

          case 'h3':
            elements.push(
              <h3 key={i} className="font-syne font-bold text-[14px] tracking-[.04em] uppercase text-brand-900 mt-8 mb-3">
                {block.text}
              </h3>
            );
            break;

          case 'p':
            elements.push(
              <p key={i} className="text-brand-700 leading-relaxed mb-5 text-sm">{block.text}</p>
            );
            break;

          case 'list':
            elements.push(
              <ul key={i} className="my-5 space-y-2">
                {(block.items ?? []).map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-brand-700">
                    <span className="text-brand-500 font-bold flex-shrink-0 mt-0.5">→</span>
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
              <div key={i} className="my-8 overflow-x-auto border-2 border-brand-900">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-900">
                      {headerCells.map((cell, j) => (
                        <th key={j} className="px-5 py-3 font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-400 border-r border-brand-700 last:border-r-0 whitespace-nowrap">
                          {cell.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bodyRows.map((row, ri) => (
                      <tr key={ri} className={`${ri % 2 === 0 ? 'bg-brand-50' : 'bg-brand-100'} hover:bg-brand-200 transition-colors`}>
                        {row.split(' | ').map((cell, j) => (
                          <td key={j} className="px-5 py-3.5 text-brand-700 text-xs border-t border-brand-200 border-r border-brand-200 last:border-r-0 align-top">
                            {cell.trim()}
                          </td>
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
              <div key={i} className="mt-12 pt-8 border-t-2 border-brand-200">
                <div className="craft-label">Related Articles</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px] mt-4">
                  {(block.articles ?? []).map(a => {
                    const fullArticle = blogArticles.find(art => art.slug === a.slug);
                    return (
                      <Link key={a.slug} href={`/blog/${a.slug}/`}
                        className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                        {fullArticle?.featuredImage && (
                          <div className="relative h-32 overflow-hidden border-b-2 border-brand-900">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={fullArticle.featuredImage} alt={a.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              style={{ filter: 'saturate(.8)' }} loading="lazy" />
                          </div>
                        )}
                        <div className="p-4 flex-grow flex flex-col">
                          <h4 className="font-syne font-bold text-[11px] uppercase tracking-tight text-brand-900 group-hover:text-brand-500 transition-colors leading-snug line-clamp-2 mb-3">
                            {a.title}
                          </h4>
                          <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1 mt-auto">
                            Read <ArrowRight className="w-3 h-3" />
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

  const relatedService = article.relatedServiceSlug ? services.find(s => s.slug === article.relatedServiceSlug) : null;
  const furtherReading = article.content.filter(b => b.type === 'external-link');
  const bottomRelated  = blogArticles
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
      <main>

        {/* Hero */}
        <div className="relative h-[380px] md:h-[480px] overflow-hidden border-b-[3px] border-brand-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.featuredImage} alt={article.title}
            className="w-full h-full object-cover" style={{ filter: 'saturate(.7)' }} loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-width pb-10">
            <Link href="/blog/" className="inline-flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.15em] uppercase text-brand-400 mb-4 hover:text-brand-200 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Back to blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="border border-brand-500/30 bg-brand-500/10 px-3 py-1 font-syne font-bold text-[9.5px] tracking-[.12em] uppercase text-brand-400">
                {article.category}
              </span>
              <span className="flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.08em] uppercase text-brand-500">
                <Calendar className="w-3 h-3" />
                {new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="font-syne font-extrabold uppercase tracking-tight text-white max-w-4xl leading-tight"
              style={{ fontSize: 'clamp(22px, 3.5vw, 42px)', letterSpacing: '-.02em' }}>
              {article.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <ContentRenderer blocks={article.content} onOpenModal={() => setIsModalOpen(true)} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">

                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Free Quote</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-3">Get your free gate quotes</h3>
                  <p className="text-brand-600 text-sm mb-5">Compare up to 3 vetted London installers — free, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Find Installers</button>
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
                  <div className="craft-label">Our Services</div>
                  <ul className="space-y-1">
                    {services.map(service => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}/`}
                          className="block py-2 border-b border-brand-100 last:border-0 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-600 hover:text-brand-500 transition-colors">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {furtherReading.length > 0 && (
                  <div className="border-2 border-brand-200 p-5 bg-brand-50">
                    <div className="flex items-center gap-2 mb-3">
                      <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
                      <div className="craft-label mb-0">Further Reading</div>
                    </div>
                    <ul className="space-y-2">
                      {furtherReading.map((link, i) => (
                        <li key={i}>
                          <a href={link.href ?? ''} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-brand-600 hover:text-brand-500 underline underline-offset-2 transition-colors block leading-snug">
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

        {/* Bottom related */}
        {bottomRelated.length > 0 && (
          <section className="py-16 bg-brand-100 border-t-2 border-brand-200">
            <div className="container-width">
              <div className="craft-label">More Articles</div>
              <h2 className="craft-h2 mb-8">More articles you might like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px]">
                {bottomRelated.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}/`}
                    className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                    <div className="relative h-40 overflow-hidden border-b-2 border-brand-900">
                      {a.featuredImage
                        // eslint-disable-next-line @next/next/no-img-element
                        ? <img src={a.featuredImage} alt={a.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ filter: 'saturate(.8)' }} loading="lazy" />
                        : <div className="w-full h-full bg-brand-200" />
                      }
                      <div className="absolute top-0 left-0 bg-brand-900 px-3 py-1.5 font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-400">
                        {a.category}
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-syne font-bold text-[12.5px] uppercase tracking-tight text-brand-900 group-hover:text-brand-500 transition-colors mb-2 leading-snug">
                        {a.title}
                      </h3>
                      <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1 mt-auto pt-2">
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
