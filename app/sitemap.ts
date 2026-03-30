import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { blogArticles } from '@/data/blog';
import { accessControlServices } from '@/data/access-control';
import { boroughRegulations } from '@/data/regulations';
import { commercialServices } from '@/data/commercial';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services/`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/location/`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/blog/`,              lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${base}/services/access-control/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/local-regulations/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/commercial/`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Service × Location pages
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
  }

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = blogArticles.map(a => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(a.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Access control pages
  const accessControlPages: MetadataRoute.Sitemap = accessControlServices.map(s => ({
    url: `${base}/services/access-control/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Borough regulation pages
  const regulationPages: MetadataRoute.Sitemap = boroughRegulations.map(b => ({
    url: `${base}/local-regulations/${b.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Commercial pages
  const commercialPages: MetadataRoute.Sitemap = commercialServices.map(s => ({
    url: `${base}/commercial/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
    ...blogPages,
    ...accessControlPages,
    ...regulationPages,
    ...commercialPages,
  ];
}
