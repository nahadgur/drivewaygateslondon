import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { commercialServices } from '@/data/commercial';
import { LOCATIONS, toSlug } from '@/data/locations';
import { blogArticles } from '@/data/blog';
import { accessControlServices } from '@/data/access-control';
import { boroughRegulations } from '@/data/regulations';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const now = new Date();

  // Exclude 'commercial-gates' — it lives at /commercial/, not /services/commercial-gates/
  const residentialServices = services.filter(s => s.slug !== 'commercial-gates');

  // ── Static hub pages ──────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services/`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/location/`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/commercial/`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/guides/`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/blog/`,                   lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${base}/services/access-control/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/local-regulations/`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // ── Service pages (/services/electric-sliding-gates/ etc) ─────────────────
  const servicePages: MetadataRoute.Sitemap = residentialServices.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // ── Access control pages ───────────────────────────────────────────────────
  const accessControlPages: MetadataRoute.Sitemap = accessControlServices.map(s => ({
    url: `${base}/services/access-control/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ── Commercial pages ───────────────────────────────────────────────────────
  const commercialPages: MetadataRoute.Sitemap = commercialServices.map(s => ({
    url: `${base}/commercial/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ── City location pages (/location/barnet/ etc) ────────────────────────────
  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Borough planning pages ─────────────────────────────────────────────────
  const regulationPages: MetadataRoute.Sitemap = boroughRegulations.map(b => ({
    url: `${base}/local-regulations/${b.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ── Guide pages ────────────────────────────────────────────────────────────
  const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: new Date(g.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Blog pages ─────────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogArticles.map(a => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(a.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Service × Location pages (/services/electric-sliding-gates/barnet/ etc)
  // These are the programmatic SEO core — 12 services × 114 cities = 1,368 pages
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of residentialServices) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.65,
      });
    }
  }

  return [
    ...staticPages,          //    8 pages
    ...servicePages,          //   12 pages
    ...accessControlPages,    //    4 pages
    ...commercialPages,       //    4 pages
    ...locationPages,         //  114 pages
    ...regulationPages,       //   27 pages
    ...guidePages,            //   12 pages
    ...blogPages,             //   29 pages
    ...serviceLocationPages,  // 1,368 pages
    // TOTAL: 1,578 pages
  ];
}
