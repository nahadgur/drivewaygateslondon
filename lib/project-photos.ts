import projectPhotos from '@/data/project-photos.json';

// Photographs supplied by the user as the client's previous work. Keep captions
// observational: locations, specifications and completion dates are unconfirmed.
const selections: Record<string, number[]> = {
  '/': [0, 1, 5, 6, 2, 3, 4, 7],
  '/services/electric-swing-gates/': [1, 0, 6, 4],
  '/services/metal-driveway-gates/': [2, 0, 5, 6],
  '/services/wrought-iron-gates/': [5, 3, 1, 7],
  '/services/pedestrian-side-gates/': [7, 1, 5],
  '/services/automated-gate-systems/': [1, 4],
  '/services/gate-automation-kits/': [4, 1],
};

const escape = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]!));

function photoFigure(index: number): string {
  const photo = projectPhotos.photos[index];
  const srcset = photo.variants.map(variant => `${variant.src} ${variant.width}w`).join(', ');
  return `<figure class="project-photo"><a href="${photo.src}" aria-label="${escape(`View full photograph: ${photo.title}`)}"><img src="${photo.src}" srcset="${srcset}" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1200px) calc(50vw - 48px), 552px" width="${photo.width}" height="${photo.height}" alt="${escape(photo.alt)}" loading="lazy" decoding="async"></a><figcaption><h3>${escape(photo.title)}</h3><p>${escape(photo.caption)}.</p></figcaption></figure>`;
}

export function addProjectPhotos(main: string, route: string): string {
  const indices = selections[route];
  if (!indices || main.includes('id="previous-gate-work"')) return main;
  const first = route === '/' ? indices.slice(0, 4) : indices;
  const more = route === '/' ? `<details class="project-photo-more"><summary>More photographs of our gate work</summary><div class="project-photo-grid">${indices.slice(4).map(photoFigure).join('')}</div></details>` : '';
  const gallery = `<section id="previous-gate-work" class="project-photo-section page-wrap" aria-labelledby="previous-gate-work-heading"><header class="project-photo-heading"><p class="eyebrow">Our gate work</p><h2 id="previous-gate-work-heading">See examples of our previous work</h2><p>Driveway gates, pedestrian entrances and work on site, photographed on our projects. Select a photograph to see the full image.</p></header><div class="project-photo-grid">${first.map(photoFigure).join('')}</div>${more}</section>`;
  // Keep the established enquiry banner directly after the photographs.
  const closing = main.search(/<section\b[^>]*class="[^"]*\b(?:quote-band|closing)\b/);
  return closing < 0 ? main + gallery : main.slice(0, closing) + gallery + main.slice(closing);
}
