import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { ContactPageClient } from './ContactPageClient';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const title = 'Contact Driveway Gates London | Get a Free Quote';
const description = 'Contact Driveway Gates London to be matched with a vetted gate installer near you. Fill out the form — a local installer calls you back, typically within 2 hours. Free, no obligation.';
const url = `${siteConfig.url}/contact/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_GB',
    images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Contact', href: '/contact/' },
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactPageClient />
    </>
  );
}
