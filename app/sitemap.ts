import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { commercialServices } from '@/data/commercial';
import { LOCATIONS, toSlug } from '@/data/locations';
import { blogArticles } from '@/data/blog';
import { accessControlServices } from '@/data/access-control';
import { boroughRegulations } from '@/data/regulations';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

const residentialServices = services.filter(s => s.slug !== 'commercial-gates');
const allCities = Object.values(LOCATIONS).flat();

const CONTENT_LAST_UPDATED = new Date('2026-03-30');

// ── Priority scheme ────────────────────────────────────────────────────────────
// 1.0  — Primary page (homepage)
// 0.8  — Section hubs (services, locations, blog, guides, commercial, etc.)
// 0.6  — Individual content pages (articles, guides, service details, locations)
// 0.4  — Programmatic / cross-product pages (service × location)
//
// ── changeFrequency scheme ─────────────────────────────────────────────────────
// weekly   — homepage, blog hub (new content regularly)
// monthly  — section hubs, service pages, guides (occasional updates)
// monthly  — blog articles, guide articles (rarely updated after publish)
// yearly   — location pages, regulations, service×location (template-driven, stable)

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const homepage: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 1.0 },
  ];

  const hubs: MetadataRoute.Sitemap = [
    { url: `${base}/services/`,                lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/location/`,                lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/commercial/`,              lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides/`,                  lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/`,                    lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/services/access-control/`, lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/local-regulations/`,       lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact/`,                 lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'yearly',  priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = residentialServices.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const accessControlPages: MetadataRoute.Sitemap = accessControlServices.map(s => ({
    url: `${base}/services/access-control/${s.slug}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const commercialPages: MetadataRoute.Sitemap = commercialServices.map(s => ({
    url: `${base}/commercial/${s.slug}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const regulationPages: MetadataRoute.Sitemap = boroughRegulations.map(b => ({
    url: `${base}/local-regulations/${b.slug}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: new Date(g.updatedDate ?? g.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map(a => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(a.updatedDate ?? a.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = residentialServices.flatMap(service =>
    allCities.map(city => ({
      url: `${base}/services/${service.slug}/${toSlug(city)}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    }))
  );

  return [
    ...homepage,
    ...hubs,
    ...servicePages,
    ...accessControlPages,
    ...commercialPages,
    ...locationPages,
    ...regulationPages,
    ...guidePages,
    ...blogPages,
    ...serviceLocationPages,
  ];
}
