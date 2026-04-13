import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { commercialServices } from '@/data/commercial';
import { LOCATIONS, toSlug } from '@/data/locations';
import { blogArticles } from '@/data/blog';
import { accessControlServices } from '@/data/access-control';
import { boroughRegulations } from '@/data/regulations';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

// Exclude 'commercial-gates' — it lives at /commercial/, not /services/commercial-gates/
const residentialServices = services.filter(s => s.slug !== 'commercial-gates');
const allCities = Object.values(LOCATIONS).flat();

// ── Sitemap index: id 0 = core pages, ids 1–N = one per residential service ──
export async function generateSitemaps() {
  return [
    { id: 0 }, // static + blog + guides + locations + regulations + commercial + access-control
    ...residentialServices.map((_, i) => ({ id: i + 1 })),
  ];
}

// Fixed date for pages that don't change often (services, locations, regulations)
// Update this when content on these template pages is materially changed
const CONTENT_LAST_UPDATED = new Date('2026-03-30');

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // ── Sitemap 0: all non-programmatic pages ─────────────────────────────────
  if (id === 0) {
    const staticPages: MetadataRoute.Sitemap = [
      { url: `${base}/`,                          lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 1.0 },
      { url: `${base}/services/`,                 lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
      { url: `${base}/location/`,                 lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
      { url: `${base}/commercial/`,               lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.8 },
      { url: `${base}/guides/`,                   lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.85 },
      { url: `${base}/blog/`,                     lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'daily',   priority: 0.8 },
      { url: `${base}/services/access-control/`,  lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.8 },
      { url: `${base}/local-regulations/`,        lastModified: CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    ];

    const servicePages: MetadataRoute.Sitemap = residentialServices.map(s => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }));

    const accessControlPages: MetadataRoute.Sitemap = accessControlServices.map(s => ({
      url: `${base}/services/access-control/${s.slug}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

    const commercialPages: MetadataRoute.Sitemap = commercialServices.map(s => ({
      url: `${base}/commercial/${s.slug}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

    const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
      url: `${base}/location/${toSlug(city)}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const regulationPages: MetadataRoute.Sitemap = boroughRegulations.map(b => ({
      url: `${base}/local-regulations/${b.slug}/`,
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

    const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
      url: `${base}/guides/${g.slug}/`,
      lastModified: new Date(g.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    const blogPages: MetadataRoute.Sitemap = blogArticles.map(a => ({
      url: `${base}/blog/${a.slug}/`,
      lastModified: new Date(a.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [
      ...staticPages,
      ...servicePages,
      ...accessControlPages,
      ...commercialPages,
      ...locationPages,
      ...regulationPages,
      ...guidePages,
      ...blogPages,
    ];
  }

  // ── Sitemaps 1–N: service × location pages (one sitemap per service) ──────
  const serviceIndex = id - 1;
  const service = residentialServices[serviceIndex];
  if (!service) return [];

  return allCities.map(city => ({
    url: `${base}/services/${service.slug}/${toSlug(city)}/`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));
}
