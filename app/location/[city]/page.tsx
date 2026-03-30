import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { CityPageClient } from './CityPageClient';

interface Props { params: { city: string } }

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
  return <CityPageClient params={params} />;
}
