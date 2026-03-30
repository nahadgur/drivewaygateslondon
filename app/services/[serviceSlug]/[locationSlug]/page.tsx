import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { ServiceLocationPageClient } from './ServiceLocationPageClient';

interface Props { params: { serviceSlug: string; locationSlug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service  = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName} | Vetted Installers, Free Quotes`;
  const description = `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}. Every installer has 50+ completed residential projects. Free site survey, free quotes, no obligation.`;
  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;

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
      images: [{ url: service.image.startsWith('http') ? service.image : `${siteConfig.url}${service.image}`, width: 1200, height: 630, alt: `${service.title} in ${cityName}` }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service  = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${cityName}`,
    description: service.description,
    url: `${siteConfig.url}/services/${params.serviceSlug}/${params.locationSlug}/`,
    serviceType: service.title,
    areaServed: { '@type': 'City', name: cityName, addressCountry: 'GB' },
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, url: siteConfig.url },
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ServiceLocationPageClient params={params} />
    </>
  );
}
