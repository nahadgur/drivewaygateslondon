import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { boroughRegulations, getBoroughBySlug } from '@/data/regulations';
import { siteConfig } from '@/data/site';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface Props { params: { borough: string } }

export function generateStaticParams() {
  return boroughRegulations.map(b => ({ borough: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const borough = getBoroughBySlug(params.borough);
  if (!borough) return {};

  const title = `Driveway Gate Planning Permission in ${borough.name} | London Planning Guide`;
  const description = `Find official resources for driveway gate planning in ${borough.name}. Check the property, proposed boundary work, conservation status and relevant directions.`;
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Driveway Gate Planning in ${borough.name}`,
    description: borough.intro,
    url: `${siteConfig.url}/local-regulations/${borough.slug}/`,
    datePublished: '2025-01-01',
    dateModified: borough.reviewedDate,
    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/local-regulations/${borough.slug}/`,
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Local Regulations', href: '/local-regulations/' },
    { name: borough.name, href: `/local-regulations/${borough.slug}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ShowcasePage route={`/local-regulations/${params.borough}/`} />
    </>
  );
}
