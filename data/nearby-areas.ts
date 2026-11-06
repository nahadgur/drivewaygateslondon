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

  // Added 2 November 2026: lists for the remaining service areas. Each
  // area's own neighbourhoods come first, then neighbouring areas.
  "Finchley": [
    "Church End", "Finchley Central", "North Finchley", "West Finchley", "Woodside Park",
    "Tally Ho Corner", "East Finchley", "Hendon",
  ],

  "Muswell Hill": [
    "Fortis Green", "Alexandra Park", "Cranley Gardens", "Coldfall", "Rookfield",
    "East Finchley", "Crouch End", "Highgate",
  ],

  "Highgate": [
    "Highgate Village", "Dartmouth Park", "Holly Lodge Estate", "Highgate West Hill", "North Hill",
    "Archway", "Crouch End", "Hampstead",
  ],

  "Totteridge": [
    "Totteridge Village", "Totteridge Common", "Totteridge Green", "Woodside Park", "Whetstone",
    "Mill Hill", "High Barnet",
  ],

  "Whetstone": [
    "Oakleigh Park", "Woodside Park", "Totteridge", "Friern Barnet", "North Finchley",
    "Brunswick Park", "East Barnet",
  ],

  "Mill Hill": [
    "Mill Hill Broadway", "Mill Hill Village", "Mill Hill East", "Highwood Hill", "Holcombe Hill",
    "Copthall", "Edgware", "Totteridge",
  ],

  "East Finchley": [
    "Fortis Green", "Hampstead Garden Suburb", "Church End", "Muswell Hill", "Highgate",
    "Finchley",
  ],

  "Crouch End": [
    "Hornsey", "Stroud Green", "Crouch Hill", "Hornsey Rise", "Harringay",
    "Highgate", "Muswell Hill",
  ],

  "Southgate": [
    "Southgate Green", "Oakwood", "New Southgate", "Grovelands", "Arnos Grove",
    "Winchmore Hill", "Cockfosters",
  ],

  "Winchmore Hill": [
    "Grange Park", "Bush Hill Park", "Southgate", "Palmers Green", "Edmonton",
    "Enfield",
  ],

  "Wood Green": [
    "Noel Park", "Turnpike Lane", "Alexandra Park", "Bounds Green", "Harringay",
    "Hornsey", "Tottenham",
  ],

  "Palmers Green": [
    "Bowes Park", "Winchmore Hill", "Southgate", "Arnos Grove", "Bounds Green",
    "Edmonton",
  ],

  "Cockfosters": [
    "Hadley Wood", "Oakwood", "Trent Park", "East Barnet", "Southgate",
    "Monken Hadley",
  ],

  "Hadley Wood": [
    "Monken Hadley", "Cockfosters", "High Barnet", "East Barnet", "Potters Bar",
    "Barnet",
  ],

  "Friern Barnet": [
    "New Southgate", "Colney Hatch", "Brunswick Park", "Whetstone", "North Finchley",
    "Arnos Grove", "Muswell Hill",
  ],

  "Arnos Grove": [
    "New Southgate", "Bowes Park", "Southgate", "Palmers Green", "Friern Barnet",
    "Bounds Green",
  ],

  "Bounds Green": [
    "Bowes Park", "Alexandra Park", "New Southgate", "Wood Green", "Palmers Green",
    "Muswell Hill",
  ],

  "Dulwich": [
    "Dulwich Village", "East Dulwich", "West Dulwich", "Herne Hill", "Peckham Rye",
    "Sydenham Hill", "Tulse Hill", "Crystal Palace",
  ],

  "Sutton": [
    "Cheam", "Carshalton", "Carshalton Beeches", "Belmont", "Rose Hill",
    "Worcester Park", "Wallington", "Banstead",
  ],

  "Beckenham": [
    "Elmers End", "Eden Park", "Park Langley", "Shortlands", "Clock House",
    "West Wickham", "Bromley",
  ],

  "Chislehurst": [
    "Elmstead", "Mottingham", "Bickley", "Petts Wood", "St Pauls Cray",
    "Sidcup", "Orpington",
  ],

  "Blackheath": [
    "Blackheath Village", "Blackheath Park", "Westcombe Park", "Kidbrooke", "Lee",
    "Greenwich", "Lewisham",
  ],

  "Streatham": [
    "Streatham Hill", "Streatham Common", "Streatham Park", "Streatham Vale", "Norbury",
    "Brixton Hill", "Tooting",
  ],

  "Clapham": [
    "Clapham Common", "Clapham Old Town", "Clapham North", "Clapham Park", "Battersea",
    "Stockwell", "Balham",
  ],

  "Tooting": [
    "Tooting Bec", "Tooting Broadway", "Furzedown", "Totterdown Fields", "Balham",
    "Earlsfield", "Colliers Wood",
  ],

  "Crystal Palace": [
    "Upper Norwood", "Anerley", "Penge", "Sydenham", "Gipsy Hill",
    "South Norwood", "Dulwich",
  ],

  "Norwood": [
    "West Norwood", "South Norwood", "Upper Norwood", "Norwood Junction", "Tulse Hill",
    "Gipsy Hill", "Selhurst",
  ],

  "Lewisham": [
    "Ladywell", "Catford", "Hither Green", "Brockley", "Lee",
    "Blackheath",
  ],

  "Mitcham": [
    "Cricket Green", "Pollards Hill", "Figges Marsh", "Eastfields", "Colliers Wood",
    "Beddington", "Morden",
  ],

  "Purley": [
    "Kenley", "Riddlesdown", "Sanderstead", "Woodcote", "Coulsdon",
    "Wallington",
  ],

  "Morden": [
    "Morden Park", "Lower Morden", "St Helier", "Merton Park", "Raynes Park",
    "Rose Hill", "Mitcham",
  ],

  "New Malden": [
    "Motspur Park", "Old Malden", "Coombe", "Berrylands", "Norbiton",
    "Raynes Park", "Worcester Park",
  ],

  "Sidcup": [
    "Lamorbey", "Blackfen", "Foots Cray", "Longlands", "Ruxley",
    "Albany Park", "Chislehurst",
  ],

  "Hornchurch": [
    "Emerson Park", "Elm Park", "South Hornchurch", "Ardleigh Green", "Squirrels Heath",
    "Harold Wood", "Upminster",
  ],

  "Upminster": [
    "Cranham", "Corbets Tey", "Upminster Bridge", "North Ockendon", "Emerson Park",
    "Hornchurch",
  ],

  "Wanstead": [
    "Snaresbrook", "Aldersbrook", "Redbridge", "South Woodford", "Leytonstone",
    "Ilford",
  ],

  "Woodford": [
    "Woodford Green", "Woodford Wells", "Woodford Bridge", "South Woodford", "Highams Park",
    "Buckhurst Hill",
  ],

  "Chigwell": [
    "Chigwell Row", "Grange Hill", "Hainault", "Lambourne End", "Woodford Bridge",
    "Buckhurst Hill",
  ],

  "Stratford": [
    "Maryland", "Forest Gate", "West Ham", "Plaistow", "Leyton",
    "Bow",
  ],

  "Barking": [
    "Barking Riverside", "Upney", "Gascoigne", "Creekmouth", "Becontree",
    "Ilford", "Dagenham",
  ],

  "Dagenham": [
    "Becontree", "Becontree Heath", "Chadwell Heath", "Rush Green", "Dagenham East",
    "Rainham", "Barking",
  ],

  "Bexley": [
    "Bexley Village", "Joydens Wood", "Albany Park", "Blackfen", "Bexleyheath",
    "Welling", "Sidcup",
  ],

  "Eltham": [
    "Avery Hill", "New Eltham", "Well Hall", "Falconwood", "Mottingham",
    "Kidbrooke", "Shooters Hill",
  ],

  "Woolwich": [
    "Royal Arsenal", "Woolwich Common", "Plumstead", "Charlton", "Shooters Hill",
    "Thamesmead",
  ],

  "Walthamstow": [
    "Walthamstow Village", "Higham Hill", "Hale End", "Wood Street", "Chapel End",
    "Highams Park", "Leyton",
  ],

  "Leyton": [
    "Leytonstone", "Lea Bridge", "Cann Hall", "Bakers Arms", "Walthamstow",
    "Stratford",
  ],

  "Chingford": [
    "Chingford Mount", "Chingford Hatch", "North Chingford", "South Chingford", "Highams Park",
    "Sewardstone",
  ],

  "Loughton": [
    "Debden", "High Beach", "Theydon Bois", "Buckhurst Hill", "Chigwell",
  ],

  "Buckhurst Hill": [
    "Loughton", "Woodford Wells", "Woodford Green", "Chigwell", "High Beach",
  ],

  "Harold Wood": [
    "Harold Hill", "Harold Park", "Gidea Park", "Ardleigh Green", "Hornchurch",
    "Brentwood",
  ],

  "Rainham": [
    "Rainham Village", "Wennington", "South Hornchurch", "Elm Park", "Aveley",
    "Dagenham",
  ],

  "Acton": [
    "East Acton", "North Acton", "South Acton", "West Acton", "Acton Green",
    "Bedford Park", "Ealing Common",
  ],

  "Hounslow": [
    "Hounslow West", "Hounslow Central", "Lampton", "Heston", "Cranford",
    "Whitton", "Isleworth",
  ],

  "Twickenham": [
    "Strawberry Hill", "St Margarets", "East Twickenham", "Whitton", "Fulwell",
    "Teddington", "Isleworth",
  ],

  "Kew": [
    "Kew Green", "North Sheen", "Mortlake", "Richmond", "Brentford",
    "Chiswick",
  ],

  "Brentford": [
    "Brentford Dock", "Brentford End", "Kew Bridge", "Gunnersbury", "Syon Park",
    "Isleworth", "Chiswick",
  ],

  "Isleworth": [
    "Old Isleworth", "Spring Grove", "Osterley", "St Margarets", "Hounslow",
    "Brentford", "Twickenham",
  ],

  "Northolt": [
    "Northolt Village", "Wood End", "Yeading", "Greenford", "South Ruislip",
    "Hayes",
  ],

  "Greenford": [
    "Perivale", "Sudbury Hill", "Northolt", "Hanwell", "Southall",
  ],

  "Hanwell": [
    "Hanwell Village", "Boston Manor", "West Ealing", "Northfields", "Southall",
    "Greenford",
  ],

  "Southall": [
    "Norwood Green", "Dormers Wells", "Hanwell", "Greenford", "Hayes",
    "Heston",
  ],

  "Feltham": [
    "Bedfont", "Hanworth", "Feltham Hill", "Hatton", "Ashford",
    "Sunbury",
  ],

  "Hampton": [
    "Hampton Hill", "Hampton Wick", "Hampton Court", "Hanworth", "Teddington",
    "Sunbury",
  ],

  "Teddington": [
    "Hampton Wick", "Hampton Hill", "Fulwell", "Strawberry Hill", "Twickenham",
    "Kingston upon Thames",
  ],

  "Sunbury": [
    "Sunbury Village", "Lower Sunbury", "Sunbury Common", "Upper Halliford", "Ashford",
    "Shepperton", "Hampton",
  ],

  "Shepperton": [
    "Upper Halliford", "Lower Halliford", "Littleton", "Laleham", "Sunbury",
    "Walton-on-Thames", "Chertsey",
  ],

  "Uxbridge": [
    "Cowley", "Hillingdon", "Ickenham", "Harefield", "Denham",
    "Yiewsley", "West Drayton",
  ],

  "Ruislip": [
    "Ruislip Manor", "South Ruislip", "Ruislip Gardens", "West Ruislip", "Eastcote",
    "Ickenham", "Northwood",
  ],

  "Chelsea": [
    "Sloane Square", "World's End", "Chelsea Harbour", "Brompton", "South Kensington",
    "Belgravia", "Knightsbridge",
  ],

  "Westminster": [
    "St James's", "Victoria", "Pimlico", "Belgravia", "Mayfair",
    "Soho", "Covent Garden",
  ],

  "Mayfair": [
    "Grosvenor Square", "Berkeley Square", "Shepherd Market", "St James's", "Marylebone",
    "Soho",
  ],

  "Belgravia": [
    "Eaton Square", "Belgrave Square", "Chester Square", "Victoria", "Knightsbridge",
    "Pimlico", "Chelsea",
  ],

  "Notting Hill": [
    "Ladbroke Grove", "Pembridge", "Portobello", "Westbourne Grove", "Bayswater",
    "Holland Park", "Kensington",
  ],

  "Holland Park": [
    "Campden Hill", "Brook Green", "Olympia", "Shepherds Bush", "Notting Hill",
    "Kensington",
  ],

  "St Johns Wood": [
    "Swiss Cottage", "Maida Vale", "Lord's", "Regent's Park", "Primrose Hill",
    "Marylebone",
  ],

  "Primrose Hill": [
    "Chalk Farm", "Belsize Park", "Camden Town", "Regent's Park", "St Johns Wood",
    "Swiss Cottage",
  ],

  "Marylebone": [
    "Marylebone Village", "Dorset Square", "Portman Square", "Baker Street", "Regent's Park",
    "Fitzrovia", "Mayfair",
  ],

  "Knightsbridge": [
    "Brompton", "Hans Town", "South Kensington", "Belgravia", "Chelsea",
    "Kensington",
  ],

  "Pimlico": [
    "Victoria", "Millbank", "Belgravia", "Westminster", "Chelsea",
    "Vauxhall",
  ],

  "Fitzrovia": [
    "Marylebone", "Bloomsbury", "Soho", "Euston", "Regent's Park",
  ],

  "Bloomsbury": [
    "Russell Square", "Holborn", "King's Cross", "Fitzrovia", "Covent Garden",
    "Clerkenwell",
  ],

  "Stanmore": [
    "Great Stanmore", "Little Stanmore", "Canons Park", "Belmont", "Harrow Weald",
    "Queensbury", "Edgware",
  ],

  "Edgware": [
    "Burnt Oak", "Canons Park", "Queensbury", "Stanmore", "Mill Hill",
    "Elstree",
  ],

  "Pinner": [
    "Pinner Village", "Pinner Green", "Hatch End", "Pinnerwood Park", "Rayners Lane",
    "Eastcote", "Northwood Hills",
  ],

  "Northwood": [
    "Northwood Hills", "Moor Park", "Ruislip", "Eastcote", "Pinner",
    "Harefield",
  ],

  "Orpington": [
    "Petts Wood", "Farnborough", "Green Street Green", "Chelsfield", "Locksbottom",
    "Crofton", "St Mary Cray",
  ],

  "Bexleyheath": [
    "Barnehurst", "Upton", "Blendon", "Welling", "Bexley",
    "Crayford",
  ],

  "Welling": [
    "East Wickham", "Falconwood", "Blackfen", "Bexleyheath", "Shooters Hill",
    "Plumstead",
  ],

  "Erith": [
    "Northumberland Heath", "Belvedere", "Slade Green", "Barnehurst", "Crayford",
    "Thamesmead",
  ],

  "Dartford": [
    "Wilmington", "Stone", "Greenhithe", "Darenth", "Crayford",
    "Bexley", "Swanley",
  ],

  "Hayes": [
    "Hayes Town", "Hayes End", "Botwell", "Yeading", "Harlington",
    "Southall", "West Drayton",
  ],

  "West Drayton": [
    "Yiewsley", "Harmondsworth", "Sipson", "Cowley", "Hayes",
    "Uxbridge",
  ],

  "Hillingdon": [
    "Hillingdon Heath", "Colham Green", "Uxbridge", "Ickenham", "Hayes",
    "Cowley",
  ],

  "Ickenham": [
    "Swakeleys", "West Ruislip", "Ruislip", "Hillingdon", "Uxbridge",
    "Harefield",
  ],

  "Eastcote": [
    "Eastcote Village", "Ruislip Manor", "Rayners Lane", "Northwood Hills", "Ruislip",
    "Pinner",
  ],

  "Coulsdon": [
    "Old Coulsdon", "Chipstead", "Hooley", "Woodmansterne", "Purley",
    "Kenley",
  ],

  "Caterham": [
    "Caterham on the Hill", "Caterham Valley", "Whyteleafe", "Chaldon", "Woldingham",
    "Kenley",
  ],

  "Banstead": [
    "Nork", "Burgh Heath", "Tattenham Corner", "Woodmansterne", "Chipstead",
    "Belmont",
  ],

  "Epsom": [
    "Ewell", "Stoneleigh", "Epsom Downs", "Langley Vale", "Horton",
    "Banstead",
  ],

  "Surbiton": [
    "Berrylands", "Tolworth", "Southborough", "Long Ditton", "Thames Ditton",
    "Kingston upon Thames",
  ],
};

// Fallback: for cities not in the detailed map above, generate nearby areas from LOCATIONS data
export function getNearbyAreas(cityName: string): string[] {
  // First check detailed map
  if (nearbyAreas[cityName]) return nearbyAreas[cityName];

  // Otherwise return empty. The component will handle "no sub-locations" gracefully
  return [];
}
