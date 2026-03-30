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
  { label: 'Video Intercoms',     href: '/services/access-control/video-intercoms/' },
  { label: 'Keypad Entry',        href: '/services/access-control/keypad-entry-systems/' },
  { label: 'GSM Phone Entry',     href: '/services/access-control/gsm-phone-entry/' },
  { label: 'ANPR Systems',        href: '/services/access-control/anpr-systems/' },
];

const COMMERCIAL = [
  { label: 'Industrial Security Gates', href: '/commercial/industrial-security-gates/' },
  { label: 'School Gate Systems',       href: '/commercial/school-gate-systems/' },
  { label: 'Car Park Barriers',         href: '/commercial/car-park-barriers/' },
  { label: 'Heavy-Duty Sliding Gates',  href: '/commercial/heavy-duty-sliding-gates/' },
];

const PLANNING_BOROUGHS = [
  { label: 'Barnet Planning Guide',   href: '/local-regulations/barnet/' },
  { label: 'Camden Planning Guide',   href: '/local-regulations/camden/' },
  { label: 'Islington Planning Guide',href: '/local-regulations/islington/' },
  { label: 'Richmond Planning Guide', href: '/local-regulations/richmond-upon-thames/' },
  { label: 'Westminster Planning Guide', href: '/local-regulations/westminster/' },
  { label: 'RBKC Planning Guide',     href: '/local-regulations/kensington-and-chelsea/' },
];

export function Footer() {
  const residentialServices = services.filter(s => s.slug !== 'commercial-gates');

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">

          {/* Brand — spans 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold text-sm">DG</div>
              <span className="font-display font-bold text-lg text-white">Driveway Gates London</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Independent matching service connecting London homeowners and businesses with vetted, experienced gate installers across every borough.
            </p>
            <p className="text-xs text-gray-500 italic border-l-2 border-gray-700 pl-3">
              Driveway Gates London is a referral service. We connect you with independent gate installers. We do not carry out installations ourselves.
            </p>
          </div>

          {/* Gate Types */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Gate Types</h4>
            <ul className="space-y-2 text-sm">
              {residentialServices.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brand-400 transition-colors leading-snug block">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Access Control + Commercial */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-400" /> Access Control
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/services/access-control/" className="hover:text-brand-400 transition-colors font-medium">All Systems →</Link></li>
              {ACCESS_CONTROL.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-brand-400" /> Commercial
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/commercial/" className="hover:text-brand-400 transition-colors font-medium">All Commercial →</Link></li>
              {COMMERCIAL.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations + Planning */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-400" /> Locations
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {POPULAR_LOCATIONS.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link></li>
              ))}
              <li><Link href="/location/" className="hover:text-brand-400 transition-colors font-medium">All 114 areas →</Link></li>
            </ul>
          </div>

          {/* Planning guides */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-400" /> Planning Guides
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {PLANNING_BOROUGHS.map(l => (
                <li key={l.href}><Link href={l.href} className="hover:text-brand-400 transition-colors">{l.label}</Link></li>
              ))}
              <li><Link href="/local-regulations/" className="hover:text-brand-400 transition-colors font-medium">All boroughs →</Link></li>
            </ul>

            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-400" /> Gate Guides
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/driveway-gate-costs-london/"         className="hover:text-brand-400 transition-colors">Gate Costs London</Link></li>
              <li><Link href="/guides/swing-vs-sliding-gates/"              className="hover:text-brand-400 transition-colors">Swing vs Sliding Gates</Link></li>
              <li><Link href="/guides/wood-vs-aluminium-gates/"             className="hover:text-brand-400 transition-colors">Wood vs Aluminium Gates</Link></li>
              <li><Link href="/guides/how-to-manually-open-electric-gate/"  className="hover:text-brand-400 transition-colors">Manual Gate Release</Link></li>
              <li><Link href="/guides/uk-gate-safety-laws/"                 className="hover:text-brand-400 transition-colors">UK Gate Safety Laws</Link></li>
              <li><Link href="/guides/"                                     className="hover:text-brand-400 transition-colors font-medium">All guides →</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. We are a matching service, not a gate installer.</p>
          <div className="flex gap-6">
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
            <Link href="/services/"           className="hover:text-gray-300">Gate Types</Link>
            <Link href="/services/access-control/" className="hover:text-gray-300">Access Control</Link>
            <Link href="/commercial/"         className="hover:text-gray-300">Commercial</Link>
            <Link href="/guides/"             className="hover:text-gray-300">Guides</Link>
            <Link href="/local-regulations/"  className="hover:text-gray-300">Planning</Link>
            <Link href="/location/"           className="hover:text-gray-300">Locations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
