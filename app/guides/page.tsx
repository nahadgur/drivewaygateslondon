'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, PoundSterling, Wrench, ShieldCheck, BarChart3 } from 'lucide-react';
import { guides, GUIDE_PILLARS, type GuidePillar } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const PILLAR_META: Record<GuidePillar, { icon: React.ReactNode; label: string }> = {
  'Pricing & Costs':               { icon: <PoundSterling className="w-4 h-4" />, label: 'Pricing' },
  'Comparison & Buying':           { icon: <BarChart3 className="w-4 h-4" />,     label: 'Buying' },
  'Maintenance & Troubleshooting': { icon: <Wrench className="w-4 h-4" />,        label: 'Maintenance' },
  'Safety & Compliance':           { icon: <ShieldCheck className="w-4 h-4" />,   label: 'Safety' },
};

export default function GuidesHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState<GuidePillar | 'All'>('All');

  const filtered = active === 'All' ? guides : guides.filter(g => g.pillar === active);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <section className="bg-brand-950 border-b-[3px] border-brand-900">
          <div className="container-width py-16 md:py-24">
            <Breadcrumbs items={[{ label: 'Guides' }]} />
            <div className="max-w-3xl mt-6">
              <div className="font-display text-brand-800/40 leading-none mb-[-6px] select-none" style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>04</div>
              <h1 className="font-syne font-extrabold uppercase tracking-tight text-white mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.02, letterSpacing: '-.02em' }}>
                The Complete Driveway<br /><span className="text-brand-500">Gate Guide Hub</span>
              </h1>
              <p className="text-brand-300 text-lg leading-relaxed">
                Everything you need to know before buying, installing, or maintaining a driveway gate in London — written by people who install them every day.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar filter */}
        <div className="bg-brand-900 border-b-2 border-brand-700">
          <div className="container-width py-0">
            <div className="flex overflow-x-auto">
              <button onClick={() => setActive('All')}
                className={`px-6 py-4 font-syne font-bold text-[11px] tracking-[.1em] uppercase whitespace-nowrap border-b-2 transition-colors ${active === 'All' ? 'text-white border-brand-500' : 'text-brand-500 border-transparent hover:text-brand-300'}`}>
                All Guides ({guides.length})
              </button>
              {GUIDE_PILLARS.map(pillar => (
                <button key={pillar} onClick={() => setActive(active === pillar ? 'All' : pillar)}
                  className={`flex items-center gap-2 px-6 py-4 font-syne font-bold text-[11px] tracking-[.1em] uppercase whitespace-nowrap border-b-2 transition-colors ${active === pillar ? 'text-white border-brand-500' : 'text-brand-500 border-transparent hover:text-brand-300'}`}>
                  {PILLAR_META[pillar].icon}
                  {PILLAR_META[pillar].label} ({guides.filter(g => g.pillar === pillar).length})
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-brand-100 border-b-2 border-brand-200">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-brand-900 bg-brand-900 gap-[2px]">
              {filtered.map(guide => (
                <Link key={guide.slug} href={`/guides/${guide.slug}/`}
                  className="group bg-brand-50 hover:bg-brand-100 flex flex-col transition-colors overflow-hidden">
                  <div className="relative h-44 overflow-hidden border-b-2 border-brand-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={guide.featuredImage} alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: 'saturate(.8)' }} loading="lazy" />
                    <div className="absolute top-0 left-0 bg-brand-900 px-3 py-1.5 font-syne font-bold text-[9px] tracking-[.16em] uppercase text-brand-400 flex items-center gap-1.5">
                      {PILLAR_META[guide.pillar].icon}
                      {PILLAR_META[guide.pillar].label}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-syne font-bold text-[13px] tracking-tight uppercase text-brand-900 leading-snug mb-3 group-hover:text-brand-500 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-brand-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">{guide.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t-2 border-brand-200">
                      <span className="flex items-center gap-1 font-syne font-bold text-[10px] tracking-[.06em] uppercase text-brand-500">
                        <Clock className="w-3 h-3" /> {guide.readingMinutes} min
                      </span>
                      <span className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-900 py-20">
          <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="craft-label" style={{ color: 'var(--brand-500)' }}>Ready?</div>
              <h2 className="craft-h2 text-white">Ready to Get Quotes?</h2>
              <p className="text-brand-400 text-sm mt-3 max-w-md">When you are ready, we match you with vetted London installers — free and no obligation.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-gold flex-shrink-0 inline-flex items-center gap-2">
              Get Free Quotes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
