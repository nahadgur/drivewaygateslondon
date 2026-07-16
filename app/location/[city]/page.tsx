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

  const title = `Driveway Gates in ${cityName} | Installation, Free Quotes`;
  const description = `Driveway gate installation in ${cityName}, London. We design, supply and install electric, wooden, and metal gates. Free site survey and written quote.`;
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
    serviceType: 'Driveway gate installation',
    name: `Driveway Gate Installation in ${cityName}`,
    description: `Design, supply and installation of driveway gates in ${cityName}, London. Electric, wooden, and metal gates with free site surveys and written quotes.`,
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
      description: 'Free site survey and written quote, no obligation.',
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
