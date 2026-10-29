import { serviceImage } from '@/lib/service-images';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { commercialServices, getCommercialBySlug } from '@/data/commercial';
import { siteConfig, organizationRef } from '@/data/site';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return commercialServices.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getCommercialBySlug(params.slug);
  if (!service) return {};

  const image = serviceImage(`/commercial/${service.slug}/`);
  const title = `${service.title} in London | Commercial Gate Specialists`;
  const description = service.metaDescription;
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
      images: [{ url: `${siteConfig.url}${image.src}`, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}${image.src}`] },
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
    provider: organizationRef,
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
      <ShowcasePage route={`/commercial/${params.slug}/`} />
    </>
  );
}
