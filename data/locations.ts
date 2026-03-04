export const LOCATIONS: Record<string, string[]> = {
  "North London": [
    "Barnet", "Enfield", "Finchley", "Muswell Hill", "Highgate",
    "Hampstead", "Totteridge", "Whetstone", "Mill Hill", "East Finchley",
    "Crouch End", "Southgate", "Winchmore Hill", "Wood Green", "Palmers Green",
    "Cockfosters", "Hadley Wood", "Friern Barnet", "Arnos Grove", "Bounds Green",
  ],

  "South London": [
    "Bromley", "Croydon", "Dulwich", "Wimbledon", "Kingston upon Thames",
    "Sutton", "Beckenham", "Chislehurst", "Blackheath", "Streatham",
    "Clapham", "Tooting", "Crystal Palace", "Norwood", "Lewisham",
    "Mitcham", "Purley", "Morden", "New Malden", "Sidcup",
  ],

  "East London": [
    "Ilford", "Romford", "Hornchurch", "Upminster", "Wanstead",
    "Woodford", "Chigwell", "Stratford", "Barking", "Dagenham",
    "Bexley", "Eltham", "Woolwich", "Walthamstow", "Leyton",
    "Chingford", "Loughton", "Buckhurst Hill", "Harold Wood", "Rainham",
  ],

  "West London": [
    "Ealing", "Chiswick", "Acton", "Hounslow", "Twickenham",
    "Richmond", "Kew", "Brentford", "Isleworth", "Northolt",
    "Greenford", "Hanwell", "Southall", "Feltham", "Hampton",
    "Teddington", "Sunbury", "Shepperton", "Uxbridge", "Ruislip",
  ],

  "Central London": [
    "Kensington", "Chelsea", "Westminster", "Mayfair", "Belgravia",
    "Notting Hill", "Holland Park", "St Johns Wood", "Primrose Hill", "Marylebone",
    "Knightsbridge", "Pimlico", "Fitzrovia", "Bloomsbury",
  ],

  "Outer London": [
    "Harrow", "Stanmore", "Edgware", "Pinner", "Northwood",
    "Orpington", "Bexleyheath", "Welling", "Erith", "Dartford",
    "Hayes", "West Drayton", "Hillingdon", "Ickenham", "Eastcote",
    "Coulsdon", "Caterham", "Banstead", "Epsom", "Surbiton",
  ],
};

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCityBySlug(slug: string): string | undefined {
  const allCities = Object.values(LOCATIONS).flat();
  return allCities.find(city => toSlug(city) === slug);
}

export function getRegionForCity(cityName: string): string | undefined {
  for (const [region, cities] of Object.entries(LOCATIONS)) {
    if (cities.includes(cityName)) return region;
  }
  return undefined;
}

export function getAllCitySlugs(): string[] {
  return Object.values(LOCATIONS).flat().map(city => toSlug(city));
}
