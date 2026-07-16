import type { Metadata } from 'next';
import { siteConfig, HOMEPAGE_FAQS } from '@/data/site';
import { LONDON_BOROUGHS, LONDON_GEO } from '@/data/boroughs';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  title: "Driveway Gates London | Supply & Installation, Free Quotes",
  description: "Driveway gate design, supply and installation across London. Electric sliding gates, swing gates, wooden gates, metal gates, automation, and repairs. Free site survey and written quote.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Driveway Gates London | Supply & Installation, Free Quotes",
    description: "Driveway gate design, supply and installation across London. Free site survey and written quote.",
    url: siteConfig.url,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Driveway Gates London | Supply & Installation, Free Quotes",
    description: "Driveway gate design, supply and installation across London. Free site survey and written quote.",
  },
};

export default function HomePage() {
  const installationServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#installation-service`,
    serviceType: 'Driveway gate installation',
    name: `${siteConfig.name} — Driveway Gate Supply & Installation`,
    description: 'Design, supply and installation of driveway gates across London, including electric and automated systems, wooden and metal gates, gate automation retrofits, repairs and servicing.',
    url: siteConfig.url,
    areaServed: [
      { '@type': 'City', name: 'London', addressCountry: 'GB' },
      ...LONDON_BOROUGHS.map(borough => ({
        '@type': 'AdministrativeArea' as const,
        name: borough,
        containedInPlace: { '@type': 'City', name: 'London', addressCountry: 'GB' },
      })),
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LONDON_GEO.latitude,
      longitude: LONDON_GEO.longitude,
    },
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/android-chrome-512x512.png`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free site survey and written quote. No obligation.',
      availability: 'https://schema.org/InStock',
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(installationServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePageClient />
    </>
  );
}
