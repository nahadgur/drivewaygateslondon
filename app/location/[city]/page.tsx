import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, toSlug, getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { CityPageClient } from './CityPageClient';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface Props { params: { city: string } }

export function generateStaticParams() {
  return Object.values(LOCATIONS).flat().map(city => ({ city: toSlug(city) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return {};

  const title = `Driveway Gates in ${cityName} | Vetted Installers, Free Quotes`;
  const description = `Find vetted driveway gate installers in ${cityName}, London. Every installer has 50+ completed residential projects. Free site survey, free quotes for electric, wooden, and metal gates.`;
  const url = `${siteConfig.url}/location/${params.city}/`;

  return {
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
      images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: `Driveway Gates in ${cityName}` }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function CityPage({ params }: Props) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Driveway gate installer referral service',
    name: `Driveway Gate Installer Referrals in ${cityName}`,
    description: `Free referral service matching homeowners in ${cityName}, London with vetted, independent driveway gate installers. We do not install gates ourselves.`,
    url: `${siteConfig.url}/location/${params.city}/`,
    image: `${siteConfig.url}/og-image.jpg`,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'City', name: 'London', addressCountry: 'GB' },
    },
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free matching service — no obligation, no fee to the homeowner.',
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Locations', href: '/location/' },
    { name: cityName, href: `/location/${params.city}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient params={params} />
    </>
  );
}
