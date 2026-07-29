import Link from 'next/link';
import { MapPin, Shield, Building2, FileText, BookOpen } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

const POPULAR_LOCATIONS = [
  { label: 'Gates in Barnet',     href: '/location/barnet/' },
  { label: 'Gates in Richmond',   href: '/location/richmond/' },
  { label: 'Gates in Bromley',    href: '/location/bromley/' },
  { label: 'Gates in Wimbledon',  href: '/location/wimbledon/' },
  { label: 'Gates in Ealing',     href: '/location/ealing/' },
  { label: 'Gates in Kensington', href: '/location/kensington/' },
  { label: 'Gates in Harrow',     href: '/location/harrow/' },
  { label: 'Gates in Hampstead',  href: '/location/hampstead/' },
];

const ACCESS_CONTROL = [
  { label: 'Video Intercoms',  href: '/services/access-control/video-intercoms/' },
  { label: 'Keypad Entry',     href: '/services/access-control/keypad-entry-systems/' },
  { label: 'GSM Phone Entry',  href: '/services/access-control/gsm-phone-entry/' },
  { label: 'ANPR Systems',     href: '/services/access-control/anpr-systems/' },
];

const COMMERCIAL = [
  { label: 'Industrial Security Gates', href: '/commercial/industrial-security-gates/' },
  { label: 'School Gate Systems',       href: '/commercial/school-gate-systems/' },
  { label: 'Car Park Barriers',         href: '/commercial/car-park-barriers/' },
  { label: 'Heavy-Duty Sliding Gates',  href: '/commercial/heavy-duty-sliding-gates/' },
];

const PLANNING_BOROUGHS = [
  { label: 'Barnet Planning Guide',      href: '/local-regulations/barnet/' },
  { label: 'Camden Planning Guide',      href: '/local-regulations/camden/' },
  { label: 'Islington Planning Guide',   href: '/local-regulations/islington/' },
  { label: 'Richmond Planning Guide',    href: '/local-regulations/richmond-upon-thames/' },
  { label: 'Westminster Planning Guide', href: '/local-regulations/westminster/' },
  { label: 'RBKC Planning Guide',        href: '/local-regulations/kensington-and-chelsea/' },
];

export function Footer() {
  const residentialServices = services.filter(s => s.slug !== 'commercial-gates');

  return (
    <footer className="bg-brand-950 border-t-[3px] border-brand-900">

      {/* Main grid */}
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 py-16 border-b border-brand-800/50">

          {/* Brand — spans 2 cols */}
          <div className="lg:col-span-2">
            <div className="font-syne font-extrabold text-[clamp(12px,3.6vw,16px)] text-white tracking-tight mb-3">
              DRIVEWAY<span className="text-brand-400">GATES</span>.LONDON
            </div>
            <p className="text-[13px] text-brand-400 leading-relaxed mb-4 font-light">
              We design, supply and install driveway gates for homeowners and businesses
              across every London borough.
            </p>
          </div>

          {/* Gate Types */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4">Gate Types</h4>
            <ul className="space-y-0.5">
              {residentialServices.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`}
                    className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors leading-snug font-light">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Access Control + Commercial */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4 flex items-center gap-1.5">
              <Shield className="w-3 h-3" /> Access Control
            </h4>
            <ul className="space-y-0.5 mb-6">
              <li>
                <Link href="/services/access-control/" className="block py-1.5 text-[13px] text-brand-200 hover:text-white transition-colors font-semibold">
                  All Systems →
                </Link>
              </li>
              {ACCESS_CONTROL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4 flex items-center gap-1.5">
              <Building2 className="w-3 h-3" /> Commercial
            </h4>
            <ul className="space-y-0.5">
              <li>
                <Link href="/commercial/" className="block py-1.5 text-[13px] text-brand-200 hover:text-white transition-colors font-semibold">
                  All Commercial →
                </Link>
              </li>
              {COMMERCIAL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Locations
            </h4>
            <ul className="space-y-0.5">
              {POPULAR_LOCATIONS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/location/" className="block py-1.5 text-[13px] text-brand-200 hover:text-white transition-colors font-semibold">
                  All 114 areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Planning + Guides */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4 flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> Planning Guides
            </h4>
            <ul className="space-y-0.5 mb-6">
              {PLANNING_BOROUGHS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/local-regulations/" className="block py-1.5 text-[13px] text-brand-200 hover:text-white transition-colors font-semibold">
                  All boroughs →
                </Link>
              </li>
            </ul>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-400 mb-4 flex items-center gap-1.5">
              <BookOpen className="w-3 h-3" /> Gate Guides
            </h4>
            <ul className="space-y-0.5">
              <li><Link href="/guides/driveway-gate-costs-london/"        className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">Gate Costs London</Link></li>
              <li><Link href="/guides/swing-vs-sliding-gates/"             className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">Swing vs Sliding Gates</Link></li>
              <li><Link href="/guides/wood-vs-aluminium-gates/"            className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">Wood vs Aluminium</Link></li>
              <li><Link href="/guides/how-to-manually-open-electric-gate/" className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">Manual Gate Release</Link></li>
              <li><Link href="/guides/uk-gate-safety-laws/"               className="block py-1.5 text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-light">UK Gate Safety Laws</Link></li>
              <li><Link href="/guides/" className="block py-1.5 text-[13px] text-brand-200 hover:text-white transition-colors font-semibold">All guides →</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-brand-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link href="/contact/"         className="inline-block py-1.5 hover:text-brand-200 transition-colors">Contact</Link>
            <Link href="/privacy/"         className="inline-block py-1.5 hover:text-brand-200 transition-colors">Privacy Policy</Link>
            {/* Terms of Service link removed: /terms/ has no route and 404'd from every
                page. Restore this line once app/terms/page.tsx exists. */}
            <Link href="/sitemap.xml"      className="inline-block py-1.5 hover:text-brand-200 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
