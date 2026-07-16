import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Driveway Gate Installation Across London | Areas We Cover',
  description: 'Driveway gate installation in every London borough. Search by area to see how we work near you. Free site survey and written quote.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    title: 'Driveway Gate Installation Across London',
    description: 'Driveway gate installation in every London borough. Free site survey and written quote.',
    url: `${siteConfig.url}/location/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Driveway Gate Installation London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Driveway Gate Installation Across London', description: 'Driveway gate installation in every London borough. Free site survey and written quote.' },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
