import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBoroughBySlug } from '@/data/regulations';
import { siteConfig } from '@/data/site';
import { BoroughPageClient } from './BoroughPageClient';

interface Props { params: { borough: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const borough = getBoroughBySlug(params.borough);
  if (!borough) return {};

  const title = `Driveway Gate Planning Permission in ${borough.name} | London Planning Guide`;
  const description = `Complete guide to driveway gate planning rules in ${borough.name}. ${borough.conservationAreas} conservation areas${borough.article4Directions ? ', Article 4 directions apply' : ''}. Understand permitted development rights before you install.`;
  const url = `${siteConfig.url}/local-regulations/${borough.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: siteConfig.name,
      locale: 'en_GB',
      images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function BoroughPlanningPage({ params }: Props) {
  const borough = getBoroughBySlug(params.borough);
  if (!borough) notFound();
  return <BoroughPageClient params={params} />;
}
