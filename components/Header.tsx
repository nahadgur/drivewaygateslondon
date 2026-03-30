'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Shield, FileText, Building2, Camera, Hash, Phone, Zap, BookOpen } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

const ACCESS_CONTROL_LINKS = [
  { label: 'Video Intercoms',      slug: 'video-intercoms',      Icon: Camera },
  { label: 'Keypad Entry Systems', slug: 'keypad-entry-systems', Icon: Hash },
  { label: 'GSM Phone Entry',      slug: 'gsm-phone-entry',      Icon: Phone },
  { label: 'ANPR Systems',         slug: 'anpr-systems',         Icon: Zap },
];

const COMMERCIAL_LINKS = [
  { label: 'Industrial Security Gates', slug: 'industrial-security-gates' },
  { label: 'School Gate Systems',       slug: 'school-gate-systems' },
  { label: 'Car Park Barriers',         slug: 'car-park-barriers' },
  { label: 'Heavy-Duty Sliding Gates',  slug: 'heavy-duty-sliding-gates' },
];

const TICKER_ITEMS = [
  'AUTOMATED GATES', 'SWING GATES', 'SLIDING GATES', 'BI-FOLD GATES',
  'ACCESS CONTROL', 'FREE SITE SURVEY', 'ALL LONDON BOROUGHS', '4.9 STAR RATED',
];

const RESIDENTIAL_SERVICES = services.filter(s => s.slug !== 'commercial-gates');

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); setMobileSection(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleSection = (key: string) =>
    setMobileSection(prev => (prev === key ? null : key));

  return (
    <>
      {/* Ticker */}
      <div className="bg-brand-900 border-b-2 border-brand-700 overflow-hidden py-2.5">
        <div className="flex animate-ticker w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-syne font-bold text-[10.5px] tracking-[.18em] uppercase text-brand-400 px-8 whitespace-nowrap">
              {item}
              {i % 1 === 0 && <span className="text-brand-700 ml-8">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-brand-50 border-b-[3px] border-brand-900">
        <div className="container-width">
          <div className="flex items-center justify-between h-[76px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 leading-none">
              <span className="font-syne font-extrabold text-[17px] tracking-tight text-brand-900">
                DRIVEWAY<span className="text-brand-500">GATES</span>.LONDON
              </span>
              <span className="block font-syne font-bold text-[9px] tracking-[.14em] uppercase text-brand-500 mt-0.5">
                Specialist Matching Service
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {/* Gate Types dropdown */}
              <div className="relative group">
                <Link href="/services/" className="flex items-center gap-1 px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                  Gate Types <ChevronDown className="w-3 h-3" />
                </Link>
                <div className="absolute top-full left-0 w-[480px] bg-brand-50 border-2 border-brand-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-1 group-hover:translate-y-0 z-50 p-4">
                  <div className="grid grid-cols-2 gap-0.5">
                    {RESIDENTIAL_SERVICES.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`}
                        className="block px-3 py-2 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-700 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t-2 border-brand-200">
                    <Link href="/services/" className="font-syne font-bold text-[10px] tracking-[.1em] uppercase text-brand-500 hover:text-brand-700">
                      View all gate types →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Access Control dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                  <Shield className="w-3 h-3" /> Access <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-brand-50 border-2 border-brand-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-1 group-hover:translate-y-0 z-50 p-2">
                  <Link href="/services/access-control/" className="block px-3 py-2.5 font-syne font-bold text-[11px] tracking-[.06em] uppercase text-brand-500 hover:bg-brand-900 hover:text-brand-50 transition-colors mb-1">
                    All Access Control →
                  </Link>
                  {ACCESS_CONTROL_LINKS.map(({ label, slug, Icon }) => (
                    <Link key={slug} href={`/services/access-control/${slug}/`}
                      className="flex items-center gap-2 px-3 py-2 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-700 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                      <Icon className="w-3 h-3 flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Commercial dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                  <Building2 className="w-3 h-3" /> Commercial <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-brand-50 border-2 border-brand-900 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-1 group-hover:translate-y-0 z-50 p-2">
                  <Link href="/commercial/" className="block px-3 py-2.5 font-syne font-bold text-[11px] tracking-[.06em] uppercase text-brand-500 hover:bg-brand-900 hover:text-brand-50 transition-colors mb-1">
                    All Commercial →
                  </Link>
                  {COMMERCIAL_LINKS.map(({ label, slug }) => (
                    <Link key={slug} href={`/commercial/${slug}/`}
                      className="block px-3 py-2 font-syne font-bold text-[11px] tracking-[.04em] uppercase text-brand-700 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/location/" className="px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                Locations
              </Link>
              <Link href="/local-regulations/" className="flex items-center gap-1 px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                <FileText className="w-3 h-3" /> Planning
              </Link>
              <Link href="/guides/" className="flex items-center gap-1 px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                <BookOpen className="w-3 h-3" /> Guides
              </Link>
              <Link href="/blog/" className="px-3.5 py-3 font-syne font-bold text-[12px] tracking-[.06em] uppercase text-brand-800 border-r border-brand-200 hover:bg-brand-900 hover:text-brand-50 transition-colors">
                Blog
              </Link>

              <button onClick={onOpenModal} className="ml-4 btn-primary text-[11px] !py-2.5 !px-5">
                Get Free Quotes
              </button>
            </nav>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-brand-900 transition-all duration-250 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-brand-900 transition-all duration-250 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-brand-900 transition-all duration-250 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav — full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-brand-950 overflow-y-auto">
          {/* Close */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-800">
            <span className="font-syne font-extrabold text-[15px] text-brand-50 tracking-tight">
              DRIVEWAY<span className="text-brand-500">GATES</span>.LONDON
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-brand-400 hover:text-brand-50 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="px-6 py-6 flex flex-col">
            {/* Gate Types */}
            <div className="border-b border-brand-800/60">
              <button onClick={() => toggleSection('services')} className="w-full flex items-center justify-between py-4 font-syne font-bold text-lg text-brand-100 text-left">
                Gate Types
                <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'services' && (
                <div className="pb-3 grid grid-cols-2 gap-1">
                  {RESIDENTIAL_SERVICES.map(s => (
                    <Link key={s.id} href={`/services/${s.slug}/`}
                      className="py-2 px-3 font-syne font-bold text-[11px] tracking-[.05em] uppercase text-brand-400 hover:text-brand-50 hover:bg-brand-800 transition-colors">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Access Control */}
            <div className="border-b border-brand-800/60">
              <button onClick={() => toggleSection('access')} className="w-full flex items-center justify-between py-4 font-syne font-bold text-lg text-brand-100 text-left">
                Access Control
                <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform ${mobileSection === 'access' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'access' && (
                <div className="pb-3 space-y-1">
                  {ACCESS_CONTROL_LINKS.map(({ label, slug }) => (
                    <Link key={slug} href={`/services/access-control/${slug}/`}
                      className="block py-2 font-syne font-bold text-[11px] tracking-[.05em] uppercase text-brand-400 hover:text-brand-50 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Commercial */}
            <div className="border-b border-brand-800/60">
              <button onClick={() => toggleSection('commercial')} className="w-full flex items-center justify-between py-4 font-syne font-bold text-lg text-brand-100 text-left">
                Commercial
                <ChevronDown className={`w-5 h-5 text-brand-500 transition-transform ${mobileSection === 'commercial' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'commercial' && (
                <div className="pb-3 space-y-1">
                  {COMMERCIAL_LINKS.map(({ label, slug }) => (
                    <Link key={slug} href={`/commercial/${slug}/`}
                      className="block py-2 font-syne font-bold text-[11px] tracking-[.05em] uppercase text-brand-400 hover:text-brand-50 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/location/"          className="py-4 font-syne font-bold text-lg text-brand-100 border-b border-brand-800/60 hover:text-brand-400 transition-colors">Locations</Link>
            <Link href="/local-regulations/" className="py-4 font-syne font-bold text-lg text-brand-100 border-b border-brand-800/60 hover:text-brand-400 transition-colors">Planning Guides</Link>
            <Link href="/guides/"            className="py-4 font-syne font-bold text-lg text-brand-100 border-b border-brand-800/60 hover:text-brand-400 transition-colors">Gate Guides</Link>
            <Link href="/blog/"              className="py-4 font-syne font-bold text-lg text-brand-100 border-b border-brand-800/60 hover:text-brand-400 transition-colors">Blog</Link>

            <button
              onClick={() => { onOpenModal?.(); setMobileOpen(false); }}
              className="mt-8 btn-gold text-sm !py-4 w-full justify-center"
            >
              Get Free Quotes
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
