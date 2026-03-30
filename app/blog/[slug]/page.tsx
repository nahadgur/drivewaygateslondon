import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { BlogArticlePageClient } from './BlogArticlePageClient';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/blog/${article.slug}/`;

  return {
    title: `${article.title} | Driveway Gates London`,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      type: 'article',
      siteName: siteConfig.name,
      locale: 'en_GB',
      images: [{ url: article.featuredImage, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.publishDate,
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.metaDescription },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    url: `${siteConfig.url}/blog/${article.slug}/`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    image: {
      '@type': 'ImageObject',
      url: article.featuredImage,
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
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogArticlePageClient params={params} />
    </>
  );
}
