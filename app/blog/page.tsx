'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function BlogIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Hero
          title="Driveway Gate Guides and Advice"
          subtitle="Expert articles on gate types, materials, automation, planning permission, and more. Coming soon."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          showCta={false}
          showTrust={false}
        />
        <section className="section-padding">
          <div className="container-width text-center py-16">
            <div className="max-w-lg mx-auto">
              <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Blog Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We are putting together expert guides on choosing the right driveway gates, understanding planning rules in London, comparing materials, and getting the most from your investment. Check back soon.
              </p>
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                Get Free Quotes in the Meantime
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
