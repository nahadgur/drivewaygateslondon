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
  const referralServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#referral-service`,
    serviceType: 'Driveway gate installer referral service',
    name: `${siteConfig.name} — Vetted Gate Installer Referrals`,
    description: 'Free referral service that matches London homeowners with vetted, independent driveway gate installers. We do not install gates ourselves.',
    url: siteConfig.url,
    areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
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
      description: 'Free matching service — no obligation, no fee to the homeowner.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePageClient />
    </>
  );
}
