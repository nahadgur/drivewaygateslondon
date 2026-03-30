import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Gate Access Control Systems London | Intercoms, Keypads, ANPR',
  description: 'Find vetted gate access control installers in London. Video intercoms, keypad entry, GSM phone openers, and ANPR systems. Free quotes from specialist engineers.',
  alternates: { canonical: `${siteConfig.url}/services/access-control/` },
  openGraph: {
    title: 'Gate Access Control Systems London',
    description: 'Video intercoms, keypad entry, GSM phone openers, and ANPR systems from vetted London specialists.',
    url: `${siteConfig.url}/services/access-control/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Gate Access Control London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Gate Access Control Systems London', description: 'Video intercoms, keypad entry, GSM phone openers, and ANPR systems.' },
};

export default function AccessControlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
