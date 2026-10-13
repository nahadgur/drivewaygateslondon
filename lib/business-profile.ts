import services from '@/data/business-services.json';
import { businessHoursLabel, siteConfig, ORGANIZATION_ID } from '@/data/site';

const esc = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!));

export const businessHoursHtml = `<div class="business-hours"><h3>Opening hours</h3><p>${esc(businessHoursLabel)}</p></div>`;

export const businessServiceCatalogue = {
  '@type': 'OfferCatalog',
  name: 'Driveway gate and access-control services',
  url: `${siteConfig.url}/services/#all-services`,
  itemListElement: services.map(service => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      url: `${siteConfig.url}${service.path}`,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'City', name: 'London' },
    },
  })),
};

export function renderBusinessServices(): string {
  const groups = Array.from(new Set(services.map(service => service.group)));
  return `<section class="business-service-catalogue" id="all-services" aria-labelledby="all-services-heading"><h2 id="all-services-heading">Our gate and access-control services</h2><p>Find the gate type, repair or entry system you need. We also design bespoke driveway gates around your entrance.</p><div class="business-service-groups">${groups.map(group => `<div class="business-service-group"><h3>${esc(group)}</h3><ul>${services.filter(service => service.group === group).map(service => `<li><a href="${esc(service.path)}">${esc(service.name)}</a></li>`).join('')}</ul></div>`).join('')}</div></section>`;
}
