// 32 London boroughs + City of London.
// Used for Schema.org areaServed arrays so search engines (and AI crawlers)
// can parse the explicit coverage footprint rather than a vague "London".
export const LONDON_BOROUGHS: string[] = [
  'Barking and Dagenham',
  'Barnet',
  'Bexley',
  'Brent',
  'Bromley',
  'Camden',
  'City of London',
  'Croydon',
  'Ealing',
  'Enfield',
  'Greenwich',
  'Hackney',
  'Hammersmith and Fulham',
  'Haringey',
  'Harrow',
  'Havering',
  'Hillingdon',
  'Hounslow',
  'Islington',
  'Kensington and Chelsea',
  'Kingston upon Thames',
  'Lambeth',
  'Lewisham',
  'Merton',
  'Newham',
  'Redbridge',
  'Richmond upon Thames',
  'Southwark',
  'Sutton',
  'Tower Hamlets',
  'Waltham Forest',
  'Wandsworth',
  'Westminster',
];

// Central London centroid (approximate — Charing Cross), 5-decimal precision.
export const LONDON_GEO = {
  latitude: 51.50735,
  longitude: -0.12776,
} as const;
