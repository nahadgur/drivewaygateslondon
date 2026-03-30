import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCommercialBySlug } from '@/data/commercial';
import { siteConfig } from '@/data/site';
import { CommercialPageClient } from './CommercialPageClient';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getCommercialBySlug(params.slug);
  if (!service) return {};

  const title = `${service.title} in London | Commercial Gate Specialists`;
  const description = `${service.description} Vetted commercial gate installers across London. Free site survey and no-obligation quote.`;
  const url = `${siteConfig.url}/commercial/${service.slug}/`;

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
      images: [{ url: service.image.startsWith('http') ? service.image : `${siteConfig.url}${service.image}`, width: 1200, height: 630, alt: service.title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function CommercialServicePage({ params }: Props) {
  const service = getCommercialBySlug(params.slug);
  if (!service) notFound();
  return <CommercialPageClient params={params} />;
}
