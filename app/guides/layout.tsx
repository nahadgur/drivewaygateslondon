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
    images: [{ url: `${siteConfig.url}/images/guides/electric-driveway-gates-cost-london.webp`, width: 1536, height: 1024, alt: 'London homeowner reviewing an electric driveway-gate quote with an installer' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Guides for London Homeowners', description: 'Expert driveway gate guides for London — pricing, comparisons, maintenance, and safety.', images: [`${siteConfig.url}/images/guides/electric-driveway-gates-cost-london.webp`] },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
