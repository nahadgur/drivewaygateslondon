import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: 'Gate Access Control Systems London | Intercom, Keypad, ANPR' },
  description: 'Gate access control systems in London: video intercoms, keypads, GSM phone entry and ANPR, fitted to new or existing electric gates. Free site survey.',
  alternates: { canonical: `${siteConfig.url}/services/access-control/` },
  openGraph: {
    title: 'Gate Access Control Systems in London',
    description: 'Video intercoms, keypads, GSM phone entry and ANPR, fitted to new or existing electric gates across London.',
    url: `${siteConfig.url}/services/access-control/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Gate access control systems in London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Gate Access Control Systems in London', description: 'Video intercoms, keypads, GSM phone entry and ANPR for electric gates.' },
};

export default function AccessControlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
