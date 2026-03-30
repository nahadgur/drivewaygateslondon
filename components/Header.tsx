'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, ChevronDown, Shield, FileText, Building2, Camera, Hash, Phone, Zap } from 'lucide-react';
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

const RESIDENTIAL_SERVICES = services.filter(s => s.slug !== 'commercial-gates');

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled]         = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); setMobileSection(null); }, [pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const toggleSection = (key: string) =>
    setMobileSection(prev => (prev === key ? null : key));

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-900 text-brand-50 py-2 px-4 text-sm hidden md:block">
        <div className="container-width flex justify-between items-center">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Vetted Driveway Gate Installers Across London
          </span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-shadow duration-200 ${scrolled ? 'shadow-md border-gray-200' : 'shadow-sm border-gray-100'}`}>
        <div className="container-width">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Driveway Gates London" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none text-gray-900">Driveway Gates</span>
                <span className="text-xs text-brand-500 font-semibold tracking-widest uppercase">London</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">

              <Link href="/" className="px-3 py-2 text-sm text-gray-600 hover:text-brand-600 font-medium rounded-lg hover:bg-brand-50 transition-colors">
                Home
              </Link>

              {/* Gate Types mega-dropdown */}
              <div className="relative group">
                <Link href="/services/" className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 group-hover:text-brand-600 font-medium rounded-lg group-hover:bg-brand-50 transition-colors">
                  Gate Types <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <div className="absolute top-full left-0 w-[540px] bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 p-4">
                  <div className="grid grid-cols-2 gap-1">
                    {RESIDENTIAL_SERVICES.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <Link href="/services/" className="text-xs text-brand-600 font-bold hover:underline">View all gate types →</Link>
                  </div>
                </div>
              </div>

              {/* Access Control dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 group-hover:text-brand-600 font-medium rounded-lg group-hover:bg-brand-50 transition-colors">
                  <Shield className="w-3.5 h-3.5" /> Access Control <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 p-2">
                  <Link href="/services/access-control/" className="block px-4 py-2.5 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg mb-1">
                    All Access Control →
                  </Link>
                  {ACCESS_CONTROL_LINKS.map(({ label, slug, Icon }) => (
                    <Link key={slug} href={`/services/access-control/${slug}/`}
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
                      <Icon className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Commercial dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 group-hover:text-brand-600 font-medium rounded-lg group-hover:bg-brand-50 transition-colors">
                  <Building2 className="w-3.5 h-3.5" /> Commercial <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 z-50 p-2">
                  <Link href="/commercial/" className="block px-4 py-2.5 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg mb-1">
                    All Commercial →
                  </Link>
                  {COMMERCIAL_LINKS.map(({ label, slug }) => (
                    <Link key={slug} href={`/commercial/${slug}/`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/location/" className="px-3 py-2 text-sm text-gray-600 hover:text-brand-600 font-medium rounded-lg hover:bg-brand-50 transition-colors">
                Locations
              </Link>

              <Link href="/local-regulations/" className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-brand-600 font-medium rounded-lg hover:bg-brand-50 transition-colors">
                <FileText className="w-3.5 h-3.5" /> Planning
              </Link>

              <Link href="/blog/" className="px-3 py-2 text-sm text-gray-600 hover:text-brand-600 font-medium rounded-lg hover:bg-brand-50 transition-colors">
                Blog
              </Link>

              <button onClick={onOpenModal} className="ml-2 btn-primary text-sm !py-2.5 !px-5 rounded-full">
                Get Free Quotes
              </button>
            </nav>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">

              <Link href="/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Home</Link>

              {/* Gate Types */}
              <div>
                <button onClick={() => toggleSection('services')} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  Gate Types
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'services' && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    {RESIDENTIAL_SERVICES.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="block py-2 px-3 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg">{s.title}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Access Control */}
              <div>
                <button onClick={() => toggleSection('access')} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  Access Control
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'access' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'access' && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    <Link href="/services/access-control/" className="block py-2 px-3 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg">All Access Control</Link>
                    {ACCESS_CONTROL_LINKS.map(({ label, slug }) => (
                      <Link key={slug} href={`/services/access-control/${slug}/`} className="block py-2 px-3 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg">{label}</Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Commercial */}
              <div>
                <button onClick={() => toggleSection('commercial')} className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  Commercial
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === 'commercial' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSection === 'commercial' && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    <Link href="/commercial/" className="block py-2 px-3 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg">All Commercial</Link>
                    {COMMERCIAL_LINKS.map(({ label, slug }) => (
                      <Link key={slug} href={`/commercial/${slug}/`} className="block py-2 px-3 text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg">{label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/location/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Locations</Link>
              <Link href="/local-regulations/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Planning Guides</Link>
              <Link href="/blog/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Blog</Link>

              <div className="pt-4 px-3">
                <button onClick={() => { onOpenModal?.(); setMobileOpen(false); }} className="block w-full btn-primary text-center">
                  Get Free Quotes
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
