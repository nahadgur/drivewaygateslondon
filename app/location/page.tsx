'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('@/components/LeadFormModal').then(m => m.LeadFormModal), { ssr: false });

export default function LocationIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero
          title="Find Gate Installers in Your Area"
          subtitle="Access London's most trusted network of driveway gate specialists. Vetted for experience, verified for quality."
          image="/images/gates/gate-wrought-iron-open-spring-avenue.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="py-16 md:py-24">
          <div className="container-width">
            {/* Search */}
            <div className="max-w-lg mb-12">
              <div className="craft-label">Search</div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400 w-4 h-4" />
                <input type="text" placeholder="Search your area or borough..."
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border-2 border-brand-200 bg-brand-50 text-brand-900 text-sm focus:outline-none focus:border-brand-500 transition" />
              </div>
            </div>

            {/* Regions */}
            <div className="space-y-14">
              {Object.entries(filteredLocations).map(([region, cities]) => (
                <div key={region}>
                  <div className="craft-label">{region}</div>
                  <h2 className="font-syne font-bold text-lg uppercase tracking-tight text-brand-900 mb-5">{region}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-2 border-brand-900 bg-brand-200 gap-[1px]">
                    {cities.map(city => (
                      <Link key={city} href={`/location/${toSlug(city)}/`} className="loc-chip">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-100 border-y-2 border-brand-200">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} title="Location FAQs" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
