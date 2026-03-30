import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { siteConfig, FAQS_SERVICES } from '@/data/site';
import { ServicePageClient } from './ServicePageClient';

interface Props { params: { serviceSlug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};

  const title = `${service.title} in London | Vetted Installers, Free Quotes`;
  const description = `Find vetted ${service.title.toLowerCase()} specialists across London. Free site survey, free quotes, 50+ installs per installer. Compare up to 3 experienced local professionals.`;
  const url = `${siteConfig.url}/services/${service.slug}/`;

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

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in London`,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}/`,
    serviceType: service.title,
    areaServed: { '@type': 'AdministrativeArea', name: 'London', addressCountry: 'GB' },
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
  };

  const combinedFaqs = [...(service.faqs || []), ...FAQS_SERVICES];
  const faqSchema = combinedFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: combinedFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ServicePageClient params={params} />
    </>
  );
}
