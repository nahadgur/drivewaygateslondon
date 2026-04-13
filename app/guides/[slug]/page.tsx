import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { GuidePageClient } from './GuidePageClient';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

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
      images: [{ url: guide.featuredImage.startsWith('http') ? guide.featuredImage : `${siteConfig.url}${guide.featuredImage}`, width: 1200, height: 630, alt: guide.title }],
      publishedTime: guide.publishDate,
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.metaDescription },
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    url: `${siteConfig.url}/guides/${guide.slug}/`,
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    image: {
      '@type': 'ImageObject',
      url: guide.featuredImage.startsWith('http') ? guide.featuredImage : `${siteConfig.url}${guide.featuredImage}`,
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
      '@id': `${siteConfig.url}/guides/${guide.slug}/`,
    },
  };

  const faqSchema = guide.faqs && guide.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Guides', href: '/guides/' },
    { name: guide.title, href: `/guides/${guide.slug}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuidePageClient params={params} />
    </>
  );
}
