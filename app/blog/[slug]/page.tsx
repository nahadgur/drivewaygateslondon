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
  return <BlogArticlePageClient params={params} />;
}
