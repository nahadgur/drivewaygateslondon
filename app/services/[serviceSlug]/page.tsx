import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
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
  return <ServicePageClient params={params} />;
}
