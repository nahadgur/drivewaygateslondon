'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, PoundSterling, Wrench, ShieldCheck, BarChart3 } from 'lucide-react';
import { guides, GUIDE_PILLARS, type GuidePillar } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const PILLAR_META: Record<GuidePillar, { icon: React.ReactNode; color: string; desc: string }> = {
  'Pricing & Costs': {
    icon: <PoundSterling className="w-5 h-5" />,
    color: 'emerald',
    desc: 'Full price breakdowns — what gates actually cost in London, including installation and ongoing running costs.',
  },
  'Comparison & Buying': {
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'sky',
    desc: 'Side-by-side comparisons to help you choose the right gate type, material, and access control system.',
  },
  'Maintenance & Troubleshooting': {
    icon: <Wrench className="w-5 h-5" />,
    color: 'amber',
    desc: 'Practical guides for keeping gates working — and diagnosing what has gone wrong when they stop.',
  },
  'Safety & Compliance': {
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'rose',
    desc: 'UK safety law, force testing requirements, and compliance obligations explained clearly.',
  },
};

const PILLAR_COLORS: Record<string, string> = {
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  sky:     'bg-sky-50 border-sky-200 text-sky-700',
  amber:   'bg-amber-50 border-amber-200 text-amber-700',
  rose:    'bg-rose-50 border-rose-200 text-rose-700',
};

export default function GuidesHubPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState<GuidePillar | 'All'>('All');

  const filtered = active === 'All'
    ? guides
    : guides.filter(g => g.pillar === active);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          <div className="container-width py-16 md:py-24 relative z-10">
            <Breadcrumbs items={[{ label: 'Guides' }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <BookOpen className="w-4 h-4" /> Driveway Gate Guides
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                The Complete Driveway<br />
                <span className="text-brand-400">Gate Guide Hub</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Everything you need to know before buying, installing, or maintaining a driveway gate in London — written by people who install them every day.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar cards */}
        <section className="bg-white border-b border-gray-100 py-10">
          <div className="container-width">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GUIDE_PILLARS.map(pillar => {
                const meta  = PILLAR_META[pillar];
                const count = guides.filter(g => g.pillar === pillar).length;
                const colorClass = PILLAR_COLORS[meta.color];
                return (
                  <button
                    key={pillar}
                    onClick={() => setActive(active === pillar ? 'All' : pillar)}
                    className={`text-left p-5 rounded-xl border transition-all ${
                      active === pillar
                        ? colorClass + ' ring-2 ring-offset-1 ring-current'
                        : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                      active === pillar ? 'bg-white/60' : 'bg-white border border-gray-200'
                    }`}>
                      <span className={active === pillar ? '' : 'text-gray-500'}>{meta.icon}</span>
                    </div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{pillar}</div>
                    <div className="text-xs text-gray-500">{count} guides</div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guides grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">

            {/* Pillar description */}
            {active !== 'All' && (
              <div className="mb-8 flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${PILLAR_COLORS[PILLAR_META[active].color]}`}>
                  {PILLAR_META[active].icon}
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900 text-xl mb-1">{active}</h2>
                  <p className="text-gray-500 text-sm">{PILLAR_META[active].desc}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(guide => {
                const meta  = PILLAR_META[guide.pillar];
                const colorClass = PILLAR_COLORS[meta.color];
                return (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}/`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={guide.featuredImage}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${colorClass}`}>
                        {meta.icon}
                        {guide.pillar}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-brand-600 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {guide.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" /> {guide.readingMinutes} min read
                        </span>
                        <span className="inline-flex items-center gap-1 text-brand-600 font-bold text-xs">
                          Read guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-width text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to get quotes?</h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Our guides help you make the right decision. When you are ready, we match you with vetted London installers — free and no obligation.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2">
              Get Free Quotes <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
