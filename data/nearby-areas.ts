// Sub-locations and nearby areas for each London borough/area
// These are real neighbourhoods, suburbs, and nearby streets/villages
// Pages won't exist for these. They appear as a grid to capture long-tail search

export const nearbyAreas: Record<string, string[]> = {
  "Barnet": [
    "High Barnet", "New Barnet", "East Barnet", "Underhill", "Arkley",
    "Monken Hadley", "Chipping Barnet", "Whetstone", "Totteridge", "Oakleigh Park",
    "Brunswick Park", "Osidge", "Cockfosters", "Hadley Wood", "Barnet Gate",
    "Ducks Island", "Lyonsdown", "Potters Bar", "South Mimms", "Dancers Hill",
    "Kitts End", "Rowley Green", "Borehamwood", "Elstree", "Shenley",
  ],

  "Enfield": [
    "Enfield Town", "Enfield Chase", "Enfield Lock", "Enfield Wash", "Ponders End",
    "Edmonton", "Palmers Green", "Winchmore Hill", "Southgate", "Bush Hill Park",
    "Grange Park", "World's End", "Turkey Street", "Brimsdown", "Cockfosters",
    "Hadley Wood", "Crews Hill", "Clay Hill", "Bulls Cross", "Forty Hill",
    "Whitewebbs", "Freezywater", "Bullsmoor", "Carterhatch", "Chase Side",
  ],

  "Hampstead": [
    "West Hampstead", "South Hampstead", "Hampstead Garden Suburb", "Belsize Park", "Swiss Cottage",
    "Fortune Green", "Childs Hill", "Golders Green", "Cricklewood", "Kilburn",
    "Brondesbury", "Queens Park", "St Johns Wood", "Primrose Hill", "Gospel Oak",
    "Kentish Town", "Frognal", "Finchley Road", "Abbey Road", "Maida Vale",
    "Mapesbury", "Willesden Green", "Dollis Hill", "Hampstead Heath", "Parliament Hill",
  ],

  "Richmond": [
    "Richmond Hill", "Richmond Park", "East Sheen", "Mortlake", "North Sheen",
    "Kew", "Kew Gardens", "Ham", "Petersham", "Twickenham",
    "St Margarets", "Strawberry Hill", "Whitton", "Teddington", "Hampton",
    "Hampton Hill", "Hampton Court", "Hampton Wick", "Bushy Park", "Barnes",
    "Roehampton", "Putney", "Kingston", "Surbiton", "Thames Ditton",
    "Marble Hill", "Isleworth", "Hounslow", "Brentford", "Chiswick",
  ],

  "Wimbledon": [
    "Wimbledon Village", "Wimbledon Park", "South Wimbledon", "Wimbledon Chase", "Wimbledon Common",
    "Raynes Park", "Copse Hill", "Cottenham Park", "Merton Park", "Morden",
    "Colliers Wood", "Tooting", "Southfields", "Earlsfield", "Summerstown",
    "Putney", "Wandsworth", "Balham", "Kingston", "New Malden",
    "Motspur Park", "Worcester Park", "Malden Manor", "Bushey Mead", "West Barnes",
  ],

  "Bromley": [
    "Bromley Common", "Bromley North", "Bromley South", "Shortlands", "Bickley",
    "Sundridge", "Widmore", "Plaistow", "Hayes", "West Wickham",
    "Keston", "Farnborough", "Downe", "Biggin Hill", "Orpington",
    "Chislehurst", "Petts Wood", "St Paul's Cray", "St Mary Cray", "Crofton",
    "Locks Bottom", "Green Street Green", "Pratts Bottom", "Leaves Green", "Beckenham",
    "Eden Park", "Elmers End", "Anerley", "Crystal Palace", "Sydenham",
  ],

  "Croydon": [
    "South Croydon", "East Croydon", "West Croydon", "Addiscombe", "Shirley",
    "Selsdon", "Sanderstead", "Purley", "Coulsdon", "Kenley",
    "Caterham", "Warlingham", "Hamsey Green", "Riddlesdown", "Upper Norwood",
    "Thornton Heath", "Norbury", "Pollards Hill", "Waddon", "Beddington",
    "Wallington", "Carshalton", "Woodside", "Addington", "New Addington",
    "Forestdale", "Monks Orchard", "Spring Park", "Broad Green", "Selhurst",
  ],

  "Ealing": [
    "West Ealing", "South Ealing", "North Ealing", "Ealing Broadway", "Ealing Common",
    "Hanwell", "Northolt", "Greenford", "Perivale", "Alperton",
    "Sudbury", "Wembley", "Park Royal", "Acton", "North Acton",
    "East Acton", "West Acton", "Pitshanger", "Castlebar", "Hanger Hill",
    "Drayton Green", "Brentford", "Osterley", "Southall", "Norwood Green",
  ],

  "Chiswick": [
    "Chiswick High Road", "Bedford Park", "Turnham Green", "Gunnersbury", "Strand on the Green",
    "Grove Park", "Acton Green", "Brentford", "Kew Bridge", "Kew",
    "Hammersmith", "Shepherds Bush", "Barnes", "Mortlake", "East Sheen",
    "Richmond", "Isleworth", "Hounslow", "Osterley", "Syon Park",
    "Old Chiswick", "Dukes Meadows", "Ravenscourt Park", "Stamford Brook", "Castelnau",
  ],

  "Harrow": [
    "Harrow on the Hill", "North Harrow", "South Harrow", "West Harrow", "Harrow Weald",
    "Stanmore", "Belmont", "Queensbury", "Kenton", "Preston",
    "Wembley Park", "Kingsbury", "Canons Park", "Edgware", "Burnt Oak",
    "Colindale", "Wealdstone", "Headstone", "Pinner", "Hatch End",
    "Carpenders Park", "Bushey", "Oxhey", "Rayners Lane", "Eastcote",
  ],

  "Ilford": [
    "Ilford Lane", "Gants Hill", "Valentines", "Cranbrook", "Barkingside",
    "Aldborough Hatch", "Newbury Park", "Seven Kings", "Goodmayes", "Chadwell Heath",
    "Becontree", "Dagenham", "Romford", "Redbridge", "South Woodford",
    "Wanstead", "Snaresbrook", "Woodford", "Woodford Green", "Clayhall",
    "Fullwell Cross", "Hainault", "Chigwell", "Fairlop", "Little Heath",
  ],

  "Romford": [
    "Gidea Park", "Ardleigh Green", "Emerson Park", "Hornchurch", "Upminster",
    "Cranham", "Harold Hill", "Harold Wood", "Noak Hill", "Collier Row",
    "Chase Cross", "Rise Park", "Havering-atte-Bower", "Stapleford Abbotts", "Rainham",
    "Elm Park", "South Hornchurch", "Hacton", "Corbets Tey", "North Ockendon",
    "Brentwood", "Shenfield", "Dagenham", "Barking", "Rush Green",
  ],

  "Kensington": [
    "South Kensington", "West Kensington", "North Kensington", "Kensington High Street", "Earls Court",
    "Holland Park", "Notting Hill", "Ladbroke Grove", "Shepherds Bush", "Hammersmith",
    "Chelsea", "Knightsbridge", "Belgravia", "Pimlico", "Fulham",
    "Parsons Green", "Barons Court", "Olympia", "Brook Green", "Campden Hill",
    "Phillimore Gardens", "Gloucester Road", "Cromwell Road", "Palace Gate", "Hyde Park Gate",
  ],

  "Kingston upon Thames": [
    "Kingston Hill", "Kingston Vale", "Norbiton", "New Malden", "Old Malden",
    "Coombe", "Berrylands", "Tolworth", "Surbiton", "Long Ditton",
    "Thames Ditton", "Esher", "Claygate", "Chessington", "Hook",
    "Worcester Park", "Motspur Park", "Malden Manor", "Ham", "Richmond",
    "Hampton Wick", "Teddington", "Bushy Park", "Hampton Court", "Molesey",
  ],
};

// Fallback: for cities not in the detailed map above, generate nearby areas from LOCATIONS data
export function getNearbyAreas(cityName: string): string[] {
  // First check detailed map
  if (nearbyAreas[cityName]) return nearbyAreas[cityName];

  // Otherwise return empty. The component will handle "no sub-locations" gracefully
  return [];
}
