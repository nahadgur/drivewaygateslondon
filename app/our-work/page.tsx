import type { Metadata } from 'next';
import { ShowcasePage } from '@/components/showcase/ShowcasePage';
import { ProjectPhotoViewer } from '@/components/showcase/ProjectPhotoViewer';
import projectPhotos from '@/data/project-photos.json';
import { siteConfig, organizationRef } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const title = 'Our Work | Driveway Gates London';
const description = 'See photographs of our previous driveway gate and pedestrian gate work, including metal gate designs, matching railings and work on site.';
const url = `${siteConfig.url}/our-work/`;
const image = projectPhotos.photos[0];

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', siteName: siteConfig.name, locale: 'en_GB', images: [{ url: `${siteConfig.url}${image.src}`, width: image.width, height: image.height, alt: image.alt }] },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteConfig.url}${image.src}`] },
};

export default function OurWorkPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: title,
    description, url, about: organizationRef,
    mainEntity: {
      '@type': 'ItemList', numberOfItems: projectPhotos.photos.length,
      itemListElement: projectPhotos.photos.map((photo, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: { '@type': 'ImageObject', contentUrl: `${siteConfig.url}${photo.src}`, name: photo.title, caption: photo.caption, width: photo.width, height: photo.height },
      })),
    },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema([{ name: 'Our work', href: '/our-work/' }])) }} />
    <ShowcasePage route="/our-work/" />
    <ProjectPhotoViewer />
  </>;
}
