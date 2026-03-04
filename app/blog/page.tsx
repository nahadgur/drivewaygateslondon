'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogArticles } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function BlogIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sorted = [...blogArticles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Hero
          title="Driveway Gate Guides and Advice"
          subtitle="Expert articles on gate types, materials, automation, planning permission, maintenance, and getting the best value from your installation."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          showCta={false}
          showTrust={false}
        />

        <section className="section-padding">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sorted.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}/`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={article.publishDate}>
                        {new Date(article.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </time>
                    </div>
                    <h2 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-5 flex-grow line-clamp-3">{article.excerpt}</p>
                    <span className="text-brand-600 font-bold text-sm flex items-center gap-1 mt-auto">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
