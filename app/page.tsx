import type { Metadata } from 'next';
import { siteConfig, HOMEPAGE_FAQS } from '@/data/site';
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
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
    priceRange: '££',
    openingHours: 'Mo-Su 08:00-20:00',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePageClient />
    </>
  );
}
