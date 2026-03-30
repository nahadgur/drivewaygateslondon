import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Commercial Gate Systems London | Industrial, Schools, Car Parks',
  description: 'Heavy-duty commercial gate systems for London businesses. Industrial security gates, school gate systems, car park barriers, and heavy-duty sliding gates. Free commercial quotes.',
  alternates: { canonical: `${siteConfig.url}/commercial/` },
  openGraph: {
    title: 'Commercial Gate Systems London',
    description: 'Industrial security gates, school gate systems, car park barriers, and heavy-duty sliding gates from vetted London specialists.',
    url: `${siteConfig.url}/commercial/`,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: 'Commercial Gate Systems London' }],
  },
  twitter: { card: 'summary_large_image', title: 'Commercial Gate Systems London', description: 'Industrial security gates, school gate systems, car park barriers from vetted London specialists.' },
};

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
