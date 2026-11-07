import { serviceImage } from '@/lib/service-images';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { accessControlServices, getAccessControlBySlug } from '@/data/access-control';
import { siteConfig, organizationRef } from '@/data/site';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import { fitTitle, fitDescription } from '@/lib/seo-title';

interface Props { params: { subSlug: string } }

export function generateStaticParams() {
  return accessControlServices.map(s => ({ subSlug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getAccessControlBySlug(params.subSlug);
  if (!service) return {};

  const image = serviceImage(`/services/access-control/${service.slug}/`);
  const title = fitTitle(service.headline ?? `${service.title} for Driveway Gates in London`, ['Free Quotes']);
  const description = fitDescription([service.metaDescription, 'Installed across London.', 'Free site survey and written quote.']);
  const url = `${siteConfig.url}/services/access-control/${service.slug}/`;

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

export default function AccessControlPage({ params }: Props) {
  const service = getAccessControlBySlug(params.subSlug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/access-control/${service.slug}/`,
    serviceType: service.title,
    image: `${siteConfig.url}${serviceImage(`/services/access-control/${service.slug}/`).src}`,
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
    { name: 'Services', href: '/services/' },
    { name: 'Access Control', href: '/services/access-control/' },
    { name: service.title, href: `/services/access-control/${service.slug}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ShowcasePage route={`/services/access-control/${params.subSlug}/`} />
    </>
  );
}
