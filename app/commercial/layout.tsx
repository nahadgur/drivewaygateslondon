import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: 'Commercial Gates in London | Industrial, Schools, Car Parks' },
  description: 'Commercial gates in London: industrial security gates, school gates, car park barriers, heavy-duty sliding gates and access control, installed around your site.',
  alternates: { canonical: `${siteConfig.url}/commercial/` },
  openGraph: {
    title: 'Commercial Gates in London',
    description: 'We install industrial security gates, school gate systems, car park barriers, and heavy-duty sliding gates across London.',
    url: `${siteConfig.url}/commercial/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Commercial Gate Systems London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Gates in London', description: 'We install industrial security gates, school gate systems, and car park barriers across London.' },
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
