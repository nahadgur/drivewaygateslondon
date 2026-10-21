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

export function photoFigure(index: number): string {
  const photo = projectPhotos.photos[index];
  const srcset = photo.variants.map(variant => `${variant.src} ${variant.width}w`).join(', ');
  return `<figure class="project-photo"><a href="${photo.src}" aria-label="${escape(`View full photograph: ${photo.title}`)}"><img src="${photo.src}" srcset="${srcset}" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1200px) calc(50vw - 48px), 552px" width="${photo.width}" height="${photo.height}" alt="${escape(photo.alt)}" loading="lazy" decoding="async"></a><figcaption><h3>${escape(photo.title)}</h3><p>${escape(photo.caption)}.</p></figcaption></figure>`;
}

function homeBento(): string {
  const tiles = [
    { index: 0, style: 'feature', anchor: 'four-panel-gates', label: 'Four-panel driveway gates' },
    { index: 5, style: 'frontage', anchor: 'ornamental-frontage', label: 'Gates & matching railings' },
    { index: 1, style: 'arched', anchor: 'arched-gates', label: 'An arched entrance' },
    { index: 7, style: 'pedestrian', anchor: 'pedestrian-gate', label: 'Side gates' },
  ];
  const cards = tiles.map(tile => {
    const photo = projectPhotos.photos[tile.index];
    const sources = photo.variants.map(variant => `${variant.src} ${variant.width}w`).join(', ');
    return `<a class="work-bento-tile work-bento-${tile.style}" href="/our-work/#${tile.anchor}" aria-label="${escape(`See our work: ${tile.label}`)}"><img src="${photo.src}" srcset="${sources}" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 50vw, 65vw" width="${photo.width}" height="${photo.height}" alt="${escape(photo.alt)}" loading="lazy" decoding="async"><span class="work-bento-caption">${escape(tile.label)}</span></a>`;
  }).join('');
  return `<section id="previous-gate-work" class="project-photo-section home-work-section page-wrap" aria-labelledby="previous-gate-work-heading"><header class="home-work-heading"><div><p class="eyebrow">Our gate work</p><h2 id="previous-gate-work-heading">A closer look at our work</h2><p>Driveway gates, matching railings and pedestrian entrances, photographed on our projects.</p></div><a class="button work-showcase-link" href="/our-work/">View our work</a></header><div class="work-bento">${cards}</div></section>`;
}

export function addProjectPhotos(main: string, route: string): string {
  const indices = selections[route];
  if (!indices || main.includes('id="previous-gate-work"')) return main;
  const gallery = route === '/' ? homeBento() : `<section id="previous-gate-work" class="project-photo-section page-wrap" aria-labelledby="previous-gate-work-heading"><header class="project-photo-heading"><p class="eyebrow">Our gate work</p><h2 id="previous-gate-work-heading">See examples of our previous work</h2><p>Driveway gates, pedestrian entrances and work on site, photographed on our projects. Select a photograph to see the full image.</p></header><div class="project-photo-grid">${indices.map(photoFigure).join('')}</div><a class="project-showcase-text-link" href="/our-work/">See the full showcase</a></section>`;
  if (route === '/') {
    const introduction = main.indexOf('<section class="inspiration"');
    if (introduction >= 0) return main.slice(0, introduction) + gallery + main.slice(introduction);
  }
  // Keep the established enquiry banner directly after the photographs.
  const closing = main.search(/<section\b[^>]*class="[^"]*\b(?:quote-band|closing)\b/);
  return closing < 0 ? main + gallery : main.slice(0, closing) + gallery + main.slice(closing);
}

export function ourWorkContent(): string {
  const groups = [
    { id: 'four-panel-gates', title: 'Four-panel driveway gates', text: 'Black metal gates with spear-top bars and a four-panel arrangement. The second photograph shows work in progress beside the gate operators.', photos: [0, 4] },
    { id: 'ornamental-frontage', title: 'Ornamental gates and matching railings', text: 'Two views of the same frontage, showing the driveway entrance, matching pedestrian gate and railings above the brick boundary wall.', photos: [5, 3] },
    { id: 'arched-gates', title: 'Arched gates with a pedestrian entrance', text: 'A view from inside the driveway, showing the arched gates, matching pedestrian entrance and visible gate operators.', photos: [1] },
    { id: 'straight-top-gate', title: 'A straight-top metal gate', text: 'Vertical bars and a straight top line between brick pillars, photographed from the pavement.', photos: [2] },
    { id: 'spear-top-gates', title: 'Spear-top driveway gates', text: 'Black metal driveway gates set between brick pillars, with an open-bar design that leaves a view through to the drive.', photos: [6] },
    { id: 'pedestrian-gate', title: 'A gate for a side passage', text: 'A black metal pedestrian gate across a paved passage between walls. The photograph shows the gate, side panels and surrounding entrance.', photos: [7] },
  ];
  const sections = groups.map(group => `<section id="${group.id}" class="work-project"><header><h2>${group.title}</h2><p>${group.text}</p></header><div class="project-photo-grid${group.photos.length === 1 ? ' work-single-photo' : ''}">${group.photos.map(photoFigure).join('')}</div></section>`).join('');
  return `<header class="work-showcase-header page-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Our work</span></nav><p class="eyebrow">Driveway Gates London</p><h1>Our gate work</h1><p class="work-showcase-lead">A closer look at driveway gates, pedestrian entrances and matching railings from our previous work. These photographs show both finished entrances and work on site.</p><nav class="work-project-jumps" aria-label="Browse the photographs">${groups.map(group => `<a href="#${group.id}">${group.title}</a>`).join('')}</nav></header><section class="quote-band lead-quote"><div><h2>Have an entrance in mind?</h2><p>Tell us about your driveway or pedestrian entrance and the gate work you need. You can share the style you like when you enquire.</p></div><a class="button light" href="#enquiry">Get a Free Quote</a></section><div class="page-wrap work-projects">${sections}<section class="work-related-services"><h2>Explore the options for your entrance</h2><nav aria-label="Gate services"><a href="/services/metal-driveway-gates/">Metal driveway gates</a><a href="/services/electric-swing-gates/">Electric swing gates</a><a href="/services/wrought-iron-gates/">Traditional iron-style gates</a><a href="/services/pedestrian-side-gates/">Pedestrian and side gates</a><a href="/services/gate-automation-kits/">Automation for existing gates</a><a href="/services/gate-repair-and-maintenance/">Repairs and maintenance</a></nav></section></div>`;
}
