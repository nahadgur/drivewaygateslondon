import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { GuidePageClient } from './GuidePageClient';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};

  const url = `${siteConfig.url}/guides/${guide.slug}/`;

  return {
    title: `${guide.title} | Driveway Gates London`,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url,
      type: 'article',
      siteName: siteConfig.name,
      locale: 'en_GB',
      images: [{ url: guide.featuredImage, width: 1200, height: 630, alt: guide.title }],
      publishedTime: guide.publishDate,
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.metaDescription },
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();
  return <GuidePageClient params={params} />;
}
