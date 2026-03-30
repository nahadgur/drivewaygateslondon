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
            <div className="font-syne font-extrabold text-[16px] text-white tracking-tight mb-3">
              DRIVEWAY<span className="text-brand-500">GATES</span>.LONDON
            </div>
            <p className="text-[13px] text-brand-500 leading-relaxed mb-4 font-light">
              Independent matching service connecting London homeowners and businesses with vetted,
              experienced gate installers across every borough.
            </p>
            <p className="text-[11.5px] text-brand-700 italic border-l-2 border-brand-800 pl-3 leading-relaxed">
              We are a referral service. We connect you with independent gate installers.
              We do not carry out installations ourselves.
            </p>
          </div>

          {/* Gate Types */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4">Gate Types</h4>
            <ul className="space-y-2">
              {residentialServices.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`}
                    className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors leading-snug block font-light">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Access Control + Commercial */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4 flex items-center gap-1.5">
              <Shield className="w-3 h-3" /> Access Control
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/services/access-control/" className="text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-semibold">
                  All Systems →
                </Link>
              </li>
              {ACCESS_CONTROL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4 flex items-center gap-1.5">
              <Building2 className="w-3 h-3" /> Commercial
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/commercial/" className="text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-semibold">
                  All Commercial →
                </Link>
              </li>
              {COMMERCIAL.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Locations
            </h4>
            <ul className="space-y-2">
              {POPULAR_LOCATIONS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/location/" className="text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-semibold">
                  All 114 areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Planning + Guides */}
          <div>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4 flex items-center gap-1.5">
              <FileText className="w-3 h-3" /> Planning Guides
            </h4>
            <ul className="space-y-2 mb-6">
              {PLANNING_BOROUGHS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/local-regulations/" className="text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-semibold">
                  All boroughs →
                </Link>
              </li>
            </ul>
            <h4 className="font-syne font-bold text-[9px] tracking-[.2em] uppercase text-brand-500 mb-4 flex items-center gap-1.5">
              <BookOpen className="w-3 h-3" /> Gate Guides
            </h4>
            <ul className="space-y-2">
              <li><Link href="/guides/driveway-gate-costs-london/"        className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">Gate Costs London</Link></li>
              <li><Link href="/guides/swing-vs-sliding-gates/"             className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">Swing vs Sliding Gates</Link></li>
              <li><Link href="/guides/wood-vs-aluminium-gates/"            className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">Wood vs Aluminium</Link></li>
              <li><Link href="/guides/how-to-manually-open-electric-gate/" className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">Manual Gate Release</Link></li>
              <li><Link href="/guides/uk-gate-safety-laws/"               className="text-[13px] text-brand-500 hover:text-brand-300 transition-colors font-light">UK Gate Safety Laws</Link></li>
              <li><Link href="/guides/" className="text-[13px] text-brand-400 hover:text-brand-200 transition-colors font-semibold">All guides →</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-brand-700">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Matching service — not a gate installer.</p>
          <div className="flex gap-5">
            <Link href="/sitemap.xml"              className="hover:text-brand-400 transition-colors">Sitemap</Link>
            <Link href="/services/"                className="hover:text-brand-400 transition-colors">Gate Types</Link>
            <Link href="/services/access-control/" className="hover:text-brand-400 transition-colors">Access Control</Link>
            <Link href="/commercial/"              className="hover:text-brand-400 transition-colors">Commercial</Link>
            <Link href="/guides/"                  className="hover:text-brand-400 transition-colors">Guides</Link>
            <Link href="/location/"                className="hover:text-brand-400 transition-colors">Locations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
