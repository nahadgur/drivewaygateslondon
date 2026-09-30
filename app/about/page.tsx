import type { Metadata } from 'next';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const title = 'About Driveway Gates London';
const description = 'Founded in 2025 by Ben and Jack, Driveway Gates London provides electric and manual gates, automation, repairs and maintenance across London.';
const url = `${siteConfig.url}/about/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', siteName: siteConfig.name, locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: title,
    description,
    url,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      foundingDate: '2025',
      founder: [{ '@type': 'Person', name: 'Ben' }, { '@type': 'Person', name: 'Jack' }],
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema([{ name: 'About', href: '/about/' }])) }} />
    <ShowcasePage route="/about/" />
  </>;
}
