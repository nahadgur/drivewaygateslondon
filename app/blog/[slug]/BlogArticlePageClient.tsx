'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, ExternalLink, MapPin } from 'lucide-react';
import type { BlogArticle, ContentBlock } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });

/* ── Inline markdown-link parser: [text](url) rendered inline in prose.
   Internal (root-relative) links use next/link; external links open in a new tab.
   Backward-compatible: plain text with no [..](..) is returned unchanged. ── */
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (href.startsWith('/')) {
      out.push(<Link key={`il-${k++}`} href={href} className="text-brand-600 underline underline-offset-2 hover:text-brand-500 transition-colors">{label}</Link>);
    } else {
      out.push(<a key={`il-${k++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 hover:text-brand-500 transition-colors">{label}</a>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

interface BlogArticlePageClientProps {
  article: BlogArticle;
  relatedService: { slug: string; title: string; description: string } | null;
  serviceList: { slug: string; title: string }[];
  articleImageMap: Record<string, string>;
}

/* ── Inline CTA ── */
function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="my-10 border-2 border-brand-900 bg-brand-50">
      <div className="bg-brand-900 px-5 py-3 font-syne font-bold text-[9px] tracking-[.18em] uppercase text-brand-400">
        Free Site Survey
      </div>
      <div className="px-7 py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-syne font-bold text-[13px] tracking-[.04em] uppercase text-brand-900 mb-1">
            Ready to get a driveway gate quote?
          </h3>
          <p className="text-brand-600 text-sm">We install across London. Free site survey and written quote, no obligation.</p>
        </div>
        <button onClick={onOpenModal} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ── Content renderer ── */
function ContentRenderer({ blocks, onOpenModal, articleImageMap }: { blocks: ContentBlock[]; onOpenModal: () => void; articleImageMap: Record<string, string> }) {
  let h2Count = 0;
  let ctaInsertBeforeH2 = -1;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === 'h2') {
      h2Count++;
      if (h2Count === 2) ctaInsertBeforeH2 = i;
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
              <h2 key={i} className="font-syne font-bold tracking-tight text-brand-900 mt-10 mb-5 border-b-2 border-brand-200 pb-3"
                style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', letterSpacing: '-.01em' }}>
                {block.text}
              </h2>
            );
            break;

          case 'h3':
            elements.push(
              <h3 key={i} className="font-syne font-bold text-[15px] tracking-tight text-brand-900 mt-8 mb-3">
                {block.text}
              </h3>
            );
            break;

          case 'p':
            elements.push(
              <p key={i} className="text-brand-700 leading-relaxed mb-5 text-sm">{renderInline(block.text ?? '')}</p>
            );
            break;

          case 'list':
            elements.push(
              <ul key={i} className="my-5 space-y-2">
                {(block.items ?? []).map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-brand-700">
                    <span className="text-brand-500 font-bold flex-shrink-0 mt-0.5">→</span>
                    {renderInline(item)}
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
                    const featuredImage = a.image || articleImageMap[a.slug];
                    return (
                      <Link key={a.slug} href={`/blog/${a.slug}/`}
                        className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                        {featuredImage && (
                          <div className="relative h-32 overflow-hidden border-b-2 border-brand-900">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={featuredImage} alt={a.title}
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

export function BlogArticlePageClient({ article, relatedService, serviceList, articleImageMap }: BlogArticlePageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const furtherReading = article.content.filter(b => b.type === 'external-link');

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>

        <div className="relative w-full aspect-[3/2] md:aspect-[21/9] overflow-hidden border-b-[3px] border-brand-900 bg-brand-100">
          <Image src={article.featuredImage} alt={article.featuredImageAlt || article.title}
            fill className="object-cover" priority sizes="100vw" />
        </div>

        {/* Article heading */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-10 md:py-14">
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
            <h1 className="font-syne font-bold tracking-tight text-white max-w-4xl leading-tight"
              style={{ fontSize: 'clamp(24px, 4vw, 38px)', letterSpacing: '-.01em' }}>
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <ContentRenderer blocks={article.content} onOpenModal={() => setIsModalOpen(true)} articleImageMap={articleImageMap} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">

                <div className="border-2 border-brand-900 p-6 bg-brand-50">
                  <div className="craft-label">Free Quote</div>
                  <h3 className="font-syne font-bold text-sm uppercase tracking-tight text-brand-900 mb-3">Get your free gate quotes</h3>
                  <p className="text-brand-600 text-sm mb-5">Free site survey and written quote from our London team. No obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full justify-center">Get a Free Quote</button>
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
                    {serviceList.map(service => (
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
      </main>
      <Footer />
    </>
  );
}
