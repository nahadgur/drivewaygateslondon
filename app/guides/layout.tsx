import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Driveway Gate Guides for London Homeowners | Expert Advice Hub',
  description: 'Complete driveway gate guides for London — pricing, comparisons, maintenance, and safety compliance. Expert advice before you buy, install, or repair any gate in London.',
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: {
    title: 'Driveway Gate Guides for London Homeowners',
    description: 'Expert driveway gate guides covering pricing, comparisons, maintenance, and safety compliance for London properties.',
    url: `${siteConfig.url}/guides/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Driveway Gate Guides London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Guides for London Homeowners', description: 'Expert driveway gate guides for London — pricing, comparisons, maintenance, and safety.' },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
