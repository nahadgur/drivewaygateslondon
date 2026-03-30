import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Driveway Gate Installers Across London | Find Local Specialists',
  description: 'Find vetted driveway gate installers in every London borough. Search by area to get matched with local specialists for free site surveys and quotes.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    title: 'Driveway Gate Installers Across London',
    description: 'Find vetted driveway gate installers in every London borough. Search by area for free site surveys and quotes.',
    url: `${siteConfig.url}/location/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Driveway Gate Installers London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Installers Across London', description: 'Find vetted driveway gate installers in every London borough.' },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
