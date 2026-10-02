import type { Metadata } from 'next';
import { siteConfig, HOMEPAGE_FAQS, organizationRef } from '@/data/site';
import { LONDON_BOROUGHS } from '@/data/boroughs';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';

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
    provider: organizationRef,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free site survey and written quote. No obligation.',
      availability: 'https://schema.org/InStock',
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: siteConfig.hours.days,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
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
      <ShowcasePage route="/" />
    </>
  );
}
