import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAccessControlBySlug } from '@/data/access-control';
import { siteConfig } from '@/data/site';
import { AccessControlPageClient } from './AccessControlPageClient';

interface Props { params: { subSlug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getAccessControlBySlug(params.subSlug);
  if (!service) return {};

  const title = `${service.title} for Driveway Gates London | Installation & Quotes`;
  const description = `${service.description} Vetted London gate access control installers. Free site survey, free quotes, no obligation.`;
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
      images: [{ url: service.image.startsWith('http') ? service.image : `${siteConfig.url}${service.image}`, width: 1200, height: 630, alt: service.title }],
    },
    twitter: { card: 'summary_large_image', title, description },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <AccessControlPageClient params={params} />
    </>
  );
}
