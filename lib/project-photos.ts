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

export function photoFigure(index: number, showcase = false): string {
  const photo = projectPhotos.photos[index];
  const showcaseCopy = [
    ['Four panels, one consistent design', 'Straight bars and spear tops repeat across the driveway opening.'],
    ['An arched entrance with a side gate', 'The curved top line is paired with a separate pedestrian gate and matching spear-top bars.'],
    ['Straight lines between brick pillars', 'A flat top and evenly spaced bars give this entrance a simpler, more contemporary look.'],
    ['Matching gates and boundary railings', 'Another view of the same frontage, showing the continuous design above the brick wall.'],
    ['Gate operator work in progress', 'A closer view of the operator arrangement during work on site.'],
    ['Driveway and pedestrian entrances', 'Coordinated rings and spear-top detailing carry across both openings.'],
    ['An open view through the entrance', 'Vertical bars and spear-top detailing sit between the brick gate pillars.'],
    ['A defined entrance to the side passage', 'The pedestrian gate and flanking panels follow the passage between the walls.'],
  ];
  const [title, caption] = showcase ? showcaseCopy[index] : [photo.title, photo.caption];
  const srcset = photo.variants.map(variant => `${variant.src} ${variant.width}w`).join(', ');
  return `<figure class="project-photo"><a href="${photo.src}" aria-label="${escape(`View full photograph: ${title}`)}"><img src="${photo.src}" srcset="${srcset}" sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1200px) calc(50vw - 48px), 552px" width="${photo.width}" height="${photo.height}" alt="${escape(photo.alt)}" loading="lazy" decoding="async">${showcase ? '<span class="project-photo-view" aria-hidden="true">View full image</span>' : ''}</a><figcaption><h3>${escape(title)}</h3><p>${escape(caption.replace(/\.$/, ''))}.</p></figcaption></figure>`;
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
  const gallery = route === '/' ? homeBento() : `<section id="previous-gate-work" class="project-photo-section page-wrap" aria-labelledby="previous-gate-work-heading"><header class="project-photo-heading"><p class="eyebrow">Our gate work</p><h2 id="previous-gate-work-heading">See examples of our previous work</h2><p>Driveway gates, pedestrian entrances and work on site, photographed on our projects. Select a photograph to see the full image.</p></header><div class="project-photo-grid">${indices.map(index => photoFigure(index)).join('')}</div><a class="project-showcase-text-link" href="/our-work/">See the full showcase</a></section>`;
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
    { id: 'four-panel-gates', title: 'Four-panel driveway gates', text: 'Straight bars and spear tops give all four panels a consistent look across the opening. The second image captures work in progress, with the gate operators visible on the driveway side.', photos: [0, 4] },
    { id: 'ornamental-frontage', title: 'Ornamental gates and matching railings', text: 'The driveway gates, pedestrian entrance and boundary railings share the same rings and spear-top detailing. Brick pillars break up the frontage while the metalwork carries a continuous pattern between them.', photos: [5, 3] },
    { id: 'arched-gates', title: 'Arched gates with a pedestrian entrance', text: 'The curved top gives the driveway entrance a distinct outline, with a separate gate alongside for access on foot. The view from inside shows how the gates sit between the boundary walls and where the operators are positioned.', photos: [1] },
    { id: 'straight-top-gate', title: 'A straight-top metal gate', text: 'A flat top and evenly spaced vertical bars create a clean outline against the brick pillars. The open-bar design leaves the house and driveway visible through the entrance.', photos: [2] },
    { id: 'spear-top-gates', title: 'Spear-top driveway gates', text: 'Spear-top detailing gives this entrance a traditional finish while leaving a view through to the drive. The black metalwork sits between brick pillars, with the gate profile following the line of the frontage.', photos: [6] },
    { id: 'pedestrian-gate', title: 'A gate for a side passage', text: 'The gate and side panels fill the passage between the walls, giving this entrance its own defined opening. When choosing a similar gate, consider what needs to pass through it, including people, bins or bicycles, alongside the appearance.', photos: [7] },
  ];
  const sections = groups.map(group => `<section id="${group.id}" class="work-project"><header><h2>${group.title}</h2><p>${group.text}</p></header><div class="project-photo-grid${group.photos.length === 1 ? ' work-single-photo' : ''}">${group.photos.map(index => photoFigure(index, true)).join('')}</div></section>`).join('');
  return `<header class="work-showcase-header page-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Our work</span></nav><p class="eyebrow">Driveway Gates London</p><h1>Our gate work</h1><p class="work-showcase-lead">Explore real examples of our driveway gate and pedestrian gate work. Look at the shapes, finishes and matching details, then tell us what you have in mind for your own entrance.</p><nav class="work-project-jumps" aria-label="Browse the photographs">${groups.map(group => `<a href="#${group.id}">${group.title}</a>`).join('')}</nav></header><section class="quote-band lead-quote"><div><h2>Seen a style that could work at your home?</h2><p>Tell us about your opening, the look you prefer and whether you need new gates or work on an existing entrance. Use the form below to discuss your project.</p></div><a class="button light" href="#enquiry">Get a Free Quote</a></section><div class="page-wrap work-projects">${sections}<section class="work-related-services"><h2>Find the right service for your gate project</h2><nav aria-label="Gate services"><a href="/services/metal-driveway-gates/">Metal driveway gates</a><a href="/services/electric-swing-gates/">Electric swing gates</a><a href="/services/wrought-iron-gates/">Traditional iron-style gates</a><a href="/services/pedestrian-side-gates/">Pedestrian and side gates</a><a href="/services/gate-automation-kits/">Automation for existing gates</a><a href="/services/gate-repair-and-maintenance/">Repairs and maintenance</a></nav></section></div>`;
}
