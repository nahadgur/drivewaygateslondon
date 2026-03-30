import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'London Driveway Gate Planning Rules by Borough | Permitted Development Guide',
  description: 'Understand driveway gate planning rules for every London borough. Conservation areas, Article 4 directions, permitted development heights, and when you need a planning application.',
  alternates: { canonical: `${siteConfig.url}/local-regulations/` },
  openGraph: {
    title: 'London Driveway Gate Planning Rules by Borough',
    description: 'Conservation areas, Article 4 directions, permitted development heights — gate planning rules for all 33 London boroughs.',
    url: `${siteConfig.url}/local-regulations/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'London Gate Planning Rules' }],
  },
  twitter: { card: 'summary_large_image', title: 'London Driveway Gate Planning Rules by Borough', description: 'Gate planning rules for all 33 London boroughs — conservation areas, Article 4 directions explained.' },
};

export default function LocalRegulationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
