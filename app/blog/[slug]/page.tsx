'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, ChevronUp, Tag } from 'lucide-react';
import { blogArticles, getArticleBySlug, type ContentBlock } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';

function BlogCtaBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-r from-brand-900 to-brand-800 shadow-xl relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 via-brand-500 to-transparent" />
      <div className="px-8 py-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-400 mb-1">Free Matching Service</p>
          <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-1">Ready to Get Driveway Gate Quotes?</h3>
          <p className="text-brand-200 text-sm">Get matched with vetted London installers. No obligation, no cost.</p>
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
  return (
    <div className="prose prose-gray max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-10 mb-4">{block.text}</h2>;
          case 'h3':
            return <h3 key={i} className="text-xl md:text-2xl font-display font-bold text-gray-900 mt-8 mb-3">{block.text}</h3>;
          case 'p':
            return <p key={i} className="text-gray-600 leading-relaxed mb-5">{block.text}</p>;
          case 'image':
            return (
              <div key={i} className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={block.src} alt={block.alt} className="w-full h-auto" loading="lazy" />
              </div>
            );
          case 'list':
            return (
              <ul key={i} className="my-6 pl-6 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="text-gray-600 leading-relaxed list-disc marker:text-brand-500">{item}</li>
                ))}
              </ul>
            );
          case 'cta':
            return <BlogCtaBanner key={i} onOpenModal={onOpenModal} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = blogArticles
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

        {/* Featured Image Header */}
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

        {/* Article Content */}
        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <ContentRenderer blocks={article.content} onOpenModal={() => setIsModalOpen(true)} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get Your Free Gate Quotes</h3>
                  <p className="text-gray-600 text-sm mb-5">Compare up to 3 vetted London installers. Free, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full btn-primary text-center">Find Installers</button>
                </div>

                {related.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {related.map(a => (
                        <Link key={a.slug} href={`/blog/${a.slug}/`} className="group block">
                          <div className="flex gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={a.featuredImage} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2">{a.title}</h4>
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{a.category}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles Grid */}
        {related.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-width">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">More Articles You Might Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(a => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}/`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={a.featuredImage} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
