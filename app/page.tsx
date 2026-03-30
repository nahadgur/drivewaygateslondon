import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  title: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
  description: "Find vetted, experienced driveway gate installers across London. Compare quotes for electric sliding gates, swing gates, wooden gates, metal gates, automation, and repairs. Free site survey, free service.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
    description: "Find vetted, experienced driveway gate installers across London. Free site survey, free quotes.",
    url: siteConfig.url,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Driveway Gates London | Vetted Gate Installers, Free Quotes",
    description: "Find vetted, experienced driveway gate installers across London. Free site survey, free quotes.",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
