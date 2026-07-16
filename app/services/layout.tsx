import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Driveway Gate Types for London Homes | All Gate Specialists',
  description: 'Browse every type of driveway gate we install in London: electric sliding, swing, wooden, metal, bi-fold, and automated systems. Free site survey and written quote.',
  alternates: { canonical: `${siteConfig.url}/services/` },
  openGraph: {
    title: 'Driveway Gate Types for London Homes',
    description: 'Browse every type of driveway gate we install in London. Free site survey and written quote.',
    url: `${siteConfig.url}/services/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Driveway Gate Types London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Types for London Homes', description: 'Browse every type of driveway gate available in London.' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
