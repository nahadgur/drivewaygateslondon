'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Search } from 'lucide-react';
import { blogArticles } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });

const CATEGORIES = ['All', ...Array.from(new Set(blogArticles.map(a => a.category))).sort()];

export default function BlogIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = blogArticles
    .filter(a => activeCategory === 'All' || a.category === activeCategory)
    .filter(a => search.trim() === '' || a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>

        {/* Hero */}
        <section className="bg-brand-950 border-b-[3px] border-brand-900 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/gates/gate-hero-wrought-iron-sunset-cobblestone.png"
              alt="" className="w-full h-full object-cover opacity-10" style={{ filter: 'saturate(.5)' }} loading="eager" />
          </div>
          <div className="container-width py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                Driveway Gate Guides<br /><span className="text-brand-500">for London Homeowners</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed">
                Straight-talking advice on gate types, materials, automation, planning rules, and getting the best value in London.
              </p>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <div className="bg-brand-900 border-b-2 border-brand-700 sticky top-[76px] z-30">
          <div className="container-width py-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-0">
              {/* Category tabs */}
              <div className="flex overflow-x-auto scrollbar-none">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-4 font-syne font-bold text-[10.5px] tracking-[.1em] uppercase whitespace-nowrap border-b-2 transition-colors ${
                      activeCategory === cat ? 'text-white border-brand-500' : 'text-brand-500 border-transparent hover:text-brand-300'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
              {/* Search */}
              <div className="relative flex-shrink-0 border-l-2 border-brand-700/50">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-500" />
                <input type="text" placeholder="Search guides…"
                  value={search} onChange={e => setSearch(e.target.value)}
                  className="w-full sm:w-56 pl-10 pr-4 py-4 bg-transparent text-brand-200 placeholder-brand-600 text-xs font-syne font-bold tracking-[.04em] uppercase focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24">
          <div className="container-width">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-syne font-bold text-[12px] tracking-[.1em] uppercase text-brand-400 mb-4">No articles found</p>
                <button onClick={() => { setSearch(''); setActiveCategory('All'); }}
                  className="btn-secondary">Clear filters</button>
              </div>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <Link href={`/blog/${featured.slug}/`}
                    className="group block mb-10 border-2 border-brand-900 hover:border-brand-500 transition-colors overflow-hidden bg-brand-50">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-60 md:h-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-brand-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={featured.featuredImage} alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{ filter: 'saturate(.8)' }} loading="lazy" />
                        <div className="absolute top-0 left-0 bg-brand-900 px-3 py-1.5 font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-400">
                          {featured.category}
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="craft-label mb-4">Featured Guide</div>
                        <h2 className="font-syne font-extrabold uppercase tracking-tight text-brand-900 group-hover:text-brand-500 transition-colors leading-tight mb-4"
                          style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: '-.02em' }}>
                          {featured.title}
                        </h2>
                        <p className="text-brand-600 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-syne font-bold text-[10px] tracking-[.08em] uppercase text-brand-500">
                            <Calendar className="w-3 h-3" />
                            {new Date(featured.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          <span className="font-syne font-bold text-[11px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read guide <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px]">
                    {rest.map(article => (
                      <Link key={article.slug} href={`/blog/${article.slug}/`}
                        className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                        <div className="relative h-44 overflow-hidden border-b-2 border-brand-900">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={article.featuredImage} alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ filter: 'saturate(.8)' }} loading="lazy" />
                          <div className="absolute top-0 left-0 bg-brand-900 px-3 py-1.5 font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-400">
                            {article.category}
                          </div>
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                          <h3 className="font-syne font-bold text-[12.5px] tracking-tight uppercase text-brand-900 group-hover:text-brand-500 transition-colors mb-2 leading-snug line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-brand-600 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">{article.excerpt}</p>
                          <div className="flex items-center justify-between pt-3 border-t-2 border-brand-200">
                            <span className="flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.06em] uppercase text-brand-500">
                              <Calendar className="w-3 h-3" />
                              {new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                            <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                              Read <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* CTA */}
            <div className="mt-12 bg-brand-900 p-8 md:p-12 flex flex-col md:flex-row items-center md:justify-between gap-8">
              <div>
                <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Free Service</div>
                <h3 className="font-syne font-extrabold uppercase tracking-tight text-white"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', letterSpacing: '-.02em' }}>
                  Ready to Get Quotes for Your Driveway Gates?
                </h3>
                <p className="text-brand-300 text-sm mt-2 max-w-md">We match London homeowners with vetted, insured gate installers. Free, no obligation.</p>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
                Get 3 Free Quotes <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
