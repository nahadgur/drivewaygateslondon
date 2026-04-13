import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commercialServices, getCommercialBySlug } from '@/data/commercial';
import { siteConfig } from '@/data/site';
import { CommercialPageClient } from './CommercialPageClient';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return commercialServices.map(s => ({ slug: s.slug }));
}

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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/commercial/${service.slug}/`,
    serviceType: service.title,
    areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Commercial', href: '/commercial/' },
    { name: service.title, href: `/commercial/${service.slug}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CommercialPageClient params={params} />
    </>
  );
}
