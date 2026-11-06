import { boroughRegulations } from '@/data/regulations';

// Local planning authority for each location page, used to link the borough
// planning guide. Only unambiguous cases are mapped: areas split between
// boroughs, outside Greater London, or in a borough without a guide fall back
// to the planning hub (/local-regulations/).
const townBorough: Record<string, string> = {
  // North London
  'Barnet': 'barnet', 'Enfield': 'enfield', 'Finchley': 'barnet', 'Muswell Hill': 'haringey',
  'Hampstead': 'camden', 'Totteridge': 'barnet', 'Whetstone': 'barnet', 'Mill Hill': 'barnet',
  'East Finchley': 'barnet', 'Crouch End': 'haringey', 'Southgate': 'enfield', 'Winchmore Hill': 'enfield',
  'Wood Green': 'haringey', 'Palmers Green': 'enfield', 'Hadley Wood': 'enfield', 'Friern Barnet': 'barnet',
  'Arnos Grove': 'enfield', 'Bounds Green': 'haringey',
  // South London
  'Bromley': 'bromley', 'Croydon': 'croydon', 'Dulwich': 'southwark', 'Wimbledon': 'merton',
  'Kingston upon Thames': 'kingston-upon-thames', 'Sutton': 'sutton', 'Beckenham': 'bromley',
  'Chislehurst': 'bromley', 'Streatham': 'lambeth', 'Tooting': 'wandsworth', 'Lewisham': 'lewisham',
  'Mitcham': 'merton', 'Purley': 'croydon', 'Morden': 'merton', 'New Malden': 'kingston-upon-thames',
  // East London
  'Stratford': 'newham', 'Eltham': 'greenwich', 'Woolwich': 'greenwich', 'Walthamstow': 'waltham-forest',
  'Leyton': 'waltham-forest', 'Chingford': 'waltham-forest',
  // West London
  'Ealing': 'ealing', 'Chiswick': 'hounslow', 'Acton': 'ealing', 'Hounslow': 'hounslow',
  'Twickenham': 'richmond-upon-thames', 'Richmond': 'richmond-upon-thames', 'Kew': 'richmond-upon-thames',
  'Brentford': 'hounslow', 'Isleworth': 'hounslow', 'Northolt': 'ealing', 'Greenford': 'ealing',
  'Hanwell': 'ealing', 'Southall': 'ealing', 'Feltham': 'hounslow', 'Hampton': 'richmond-upon-thames',
  'Teddington': 'richmond-upon-thames', 'Uxbridge': 'hillingdon', 'Ruislip': 'hillingdon',
  // Central London
  'Kensington': 'kensington-and-chelsea', 'Chelsea': 'kensington-and-chelsea', 'Westminster': 'westminster',
  'Mayfair': 'westminster', 'Belgravia': 'westminster', 'Notting Hill': 'kensington-and-chelsea',
  'Holland Park': 'kensington-and-chelsea', 'St Johns Wood': 'westminster', 'Primrose Hill': 'camden',
  'Marylebone': 'westminster', 'Pimlico': 'westminster', 'Bloomsbury': 'camden',
  // Outer London
  'Harrow': 'harrow', 'Stanmore': 'harrow', 'Pinner': 'harrow', 'Northwood': 'hillingdon',
  'Orpington': 'bromley', 'Hayes': 'hillingdon', 'West Drayton': 'hillingdon', 'Hillingdon': 'hillingdon',
  'Ickenham': 'hillingdon', 'Eastcote': 'hillingdon', 'Coulsdon': 'croydon', 'Surbiton': 'kingston-upon-thames',
};

export function getBoroughGuide(town: string): { name: string; href: string } | null {
  const slug = townBorough[town];
  const borough = slug ? boroughRegulations.find(b => b.slug === slug) : undefined;
  return borough ? { name: borough.name, href: `/local-regulations/${borough.slug}/` } : null;
}
