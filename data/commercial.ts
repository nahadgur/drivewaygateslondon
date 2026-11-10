export interface CommercialService {
  id: string;
  slug: string;
  title: string;
  /** Page H1 and title-tag phrase when it differs from the card title. */
  headline?: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  typicalClients: string[];
  updatedDate?: string;
}

export const commercialServices: CommercialService[] = [
  {
  "updatedDate": "2026-11-07",
  "id": "industrial-security-gates",
  "slug": "industrial-security-gates",
  "title": "Industrial Security Gates",
  "metaTitle": "Industrial Security Gates in London | Driveway Gates London",
  "metaDescription": "Industrial security gates in London: cantilever sliding, speed and swing gates, LPS 1175 ratings, lorry access and access control, with typical costs.",
  "description": "Industrial gate systems for London sites. Discuss vehicle access, operating frequency, security requirements and aftercare before specifying equipment.",
  "image": "/images/services/industrial-security-gates-illustration.webp",
  "typicalClients": [
    "Warehouses and distribution centres",
    "Manufacturing facilities",
    "Industrial estates",
    "Transport and logistics depots",
    "Recycling and waste management sites"
  ],
  "intro": [
    "Cantilever sliding gates are the standard choice for industrial entrances. The gate hangs from rollers on posts beside the opening instead of running on a ground track, so grit, ice, pallets and debris can’t jam it. A single leaf can span a very wide opening, comfortably wide enough for an articulated lorry. The trade-off is space. The gate needs a straight run alongside the fence, longer than the opening itself, because part of the frame acts as a counterweight. Our heavy-duty sliding gates page covers these in more detail.",
    "Tracked sliding gates run on a rail set in the ground. They need less run-back than a cantilever gate, but the track has to be kept clear. That makes them a weaker choice for yards with loose material or heavy plant crossing the threshold.",
    "Speed gates are bi-folding gates driven by powerful motors. They open in a few seconds rather than the 20 to 30 seconds a typical sliding gate takes. They suit busy entrances where vehicles would otherwise queue onto the road, and sites where tailgating through a slow-closing gate is a security problem. They fold back within their own posts, so they need very little side space. They cost more than a sliding gate.",
    "Swing gates are the cheapest powered option and work where there’s room for the leaves to open fully without clashing with waiting or turning vehicles. Wide leaves with solid infill catch the wind badly, so on exposed sites they need heavier hinges and operators, or a different gate type.",
    "Barriers control vehicles but don’t secure a perimeter. Many sites use a barrier for the busy working day and a gate to lock the site at night. See car park barriers ."
  ],
  "benefits": [
    {
      "title": "Security ratings",
      "desc": "If your insurer, landlord or tender asks for a rated gate, you’ll normally see one of two standards. LPS 1175 (from the Loss Prevention Certification Board) rates how long a gate or fence resists a deliberate forced attack, and with what tools. Lower ratings cover hand tools; higher ones cover extended attack with powered cutting equipment. Hostile vehicle mitigation ratings (PAS 68, IWA 14 and ISO 22343) are crash-tested ratings for stopping a vehicle being driven through the entrance. They’re usually only needed for critical infrastructure and high-risk sites. A rating applies to the exact tested product, including its posts, foundations and locking. A heavy-looking palisade gate isn’t rated just because it looks strong. If you need a rating, we’ll supply the certification for the specific gate and configuration in the quote. Most sites don’t need a formal rating. For them, the practical choices are what count: anti-climb mesh (358 mesh is the common high-security standard) or triple-pointed steel palisade, a height of 2.4 to 3 metres, no horizontal rails on the outside to climb, and shrouded hinges and locks that can’t easily be cut."
    },
    {
      "title": "Planning for lorries and busy periods",
      "desc": "Tell us the largest vehicle that uses the entrance and how it arrives. A 16.5-metre articulated lorry needs room to swing in. It also needs somewhere to wait while the gate opens that isn’t across the pavement or the road. On many London sites, that means setting the gate back from the boundary so the longest vehicle can stand clear of the highway. Peak traffic matters as much as total traffic. A depot where 20 vans return at the end of a shift needs a faster gate and smarter access control than a warehouse with the same number of movements spread across the day. Motors are selected for their duty rating, meaning how many cycles an hour they can run without overheating. That’s why a domestic gate motor fails quickly on an industrial site. Keep people on foot separate from vehicles. A pedestrian gate or turnstile beside the vehicle entrance stops staff and visiting drivers walking through the path of a moving gate."
    },
    {
      "title": "Access control for staff, fleet and visitors",
      "desc": "ANPR cameras open the gate automatically for registered vehicles. They’re ideal for fleet and staff parking (see ANPR systems ). Staff on foot use fobs or cards, which can be cancelled individually and can log who came in and when. Visiting drivers use an intercom to reception or the gatehouse. For lorries, the intercom needs a second, higher panel at cab height, so the driver doesn’t have to climb down onto a live entrance. On multi-tenant industrial estates, an intercom with a directory lets visitors call the right unit. Each tenant manages their own staff fobs, and the estate manager controls the gate itself."
    },
    {
      "title": "Installation on a working site",
      "desc": "Most industrial sites can’t simply close for a week. We phase the work so one side of the entrance stays usable, put temporary fencing in overnight where the perimeter is opened up, and schedule groundworks and gate hanging around your deliveries and shift patterns. Before work starts, we agree a method statement covering traffic management, pedestrian routes and who on your side is the point of contact. Heavier gates and fast motors may need a new three-phase or upgraded power supply. We identify that at survey so it doesn’t hold up the programme. At handover you get operating instructions, training for the people who’ll run the entrance, safety test records and a log of who controls access permissions."
    },
    {
      "title": "Cost of industrial security gates in London",
      "desc": "As a rough guide, a powered cantilever sliding gate for a typical industrial entrance costs £12,000 to £30,000 installed, depending on width, height, foundations and access control. Speed gates usually cost £20,000 to £45,000. LPS 1175 rated gates cost significantly more than unrated equivalents. Every quote is itemised and fixed in writing after survey."
    },
    {
      "title": "Servicing and breakdowns",
      "desc": "High-use gates wear quickly and should be serviced every quarter, with safety devices and closing forces tested at each visit. Under HSE guidance on powered gates , the site operator is responsible for keeping them safe, and written service records are your evidence that you have. We offer service contracts with the visit frequency and breakdown response times set out in writing. For a gate that’s already faulty, see gate repair and servicing ."
    }
  ],
  "faqs": [
    {
      "question": "Can you supply a gate with an LPS 1175 rating?",
      "answer": "Yes. Tell us the rating your insurer or specification requires, and the quote will include the certification for the exact gate and configuration."
    },
    {
      "question": "Is emergency call-out included?",
      "answer": "Not automatically. Breakdown response is part of a service contract, with the response times and charges set out in writing. Sites that can’t operate with the gate down usually choose a contract with a guaranteed response."
    },
    {
      "question": "What should we have ready for the survey?",
      "answer": "A site plan if you have one, the largest vehicle using the entrance, your operating hours and busiest periods, and how staff, visitors and deliveries currently get in. It also helps to know who will sign off the specification and who will manage the gate afterwards."
    },
    {
      "question": "Can you replace the gate but keep our existing fencing?",
      "answer": "Often, yes. We check the condition of the posts and fence at survey, because a powered industrial gate puts far more load on its supports than a manual one."
    }
  ],
  "headline": "Industrial Security Gates in London"
},
  {
  "updatedDate": "2026-11-07",
  "id": "school-gate-systems",
  "slug": "school-gate-systems",
  "title": "School Gate Systems",
  "metaTitle": "School Gates and Entrance Security in London | Driveway Gates London",
  "metaDescription": "School gates and entrance security in London: separate vehicle and pedestrian routes, controlled visitor entry, fire-safe locking and typical costs.",
  "description": "School entrance gate planning and installation in London, with vehicle movement, pedestrian access and day-to-day management considered together.",
  "image": "/images/services/school-gate-systems-illustration.webp",
  "typicalClients": [
    "Primary schools",
    "Secondary schools and academies",
    "Special educational needs schools",
    "Multi-academy trusts",
    "Independent schools and colleges"
  ],
  "intro": [
    "Most schools work best with vehicle and pedestrian routes kept separate. The vehicle gate stays shut during arrival and collection, when the pavement is busiest with children. Staff parking and deliveries are timed around those windows, or routed through a second entrance if the site has one.",
    "Pedestrian gates are usually left open for the morning arrival period and then locked. From then on, visitors enter only through a controlled point: a gate with a video intercom to the school office, released remotely once the visitor has been identified. On larger sites, an airlock (a small fenced holding area between the outer gate and the building) stops a visitor reaching the playground or entrance until reception has let them through the second gate. Staff use a fob, card or code. Fobs and cards are easiest to manage, because a lost or leaver’s fob is cancelled without changing anyone else’s access.",
    "Fire safety has to be planned in from the start. Any electrically locked gate on an escape route needs to release when the fire alarm sounds, or have a clearly marked manual release. That decision is made with the school’s fire risk assessment, not after the gate is installed. Vehicle gates also need a way for the fire brigade to get in out of hours, usually a key switch or a link to the alarm system."
  ],
  "benefits": [
    {
      "title": "Choosing the right gates",
      "desc": "For vehicle entrances where children walk nearby, sliding gates are usually the better choice. They don’t swing out across the pavement or playground, and they handle wide openings well. Any powered gate on a school site needs photocells and safety edges , and closing forces must be tested against BS EN 12453. Mesh or bar infill needs guarding where it slides past posts, so small fingers can’t be trapped. The gate’s speed and the automatic closing delay are set with the school’s daily routine in mind, not left at the factory defaults. Pedestrian gates are generally manual, with hydraulic self-closers and an electric lock. They should have anti-finger-trap hinges and a lock that holds firmly against a determined push. Under the Equality Act, the gate opening, the push buttons and the intercom need to work for wheelchair users and parents with buggies. That affects the gate width and the height at which controls are mounted. The fencing and gates should match in height and design. School perimeters are typically 2.0 to 2.4 metres high, in weldmesh or vertical-bar railings with no climbable horizontal rails on the outside. Powder-coated finishes in the school’s colours are standard."
    },
    {
      "title": "Linking to your existing systems",
      "desc": "Many schools already have a visitor management system, CCTV or a door entry system on the main building. Gate intercoms and access control can often be linked to those, or managed from the same software, so the office has one screen for the gate and the front door. Whether that’s possible depends on the specific products. We check the exact model numbers at survey stage, rather than promising a link we haven’t confirmed."
    },
    {
      "title": "Installation around the school year",
      "desc": "Groundworks, ducting and gate installation are planned for half-terms and the summer holiday, so the site is never left without a secure perimeter while pupils are in. Larger projects are often phased over two holidays. Summer is the busiest time of year for school contractors, so getting in touch in spring gives you the most choice of dates."
    },
    {
      "title": "Procurement and paperwork",
      "desc": "We provide what schools, academy trusts and local authorities normally need: a site-specific risk assessment and method statement, insurance certificates, DBS checks for staff working on site, and drawings for approval. At handover you get operating instructions, staff training on daily use and emergency release, and the records your premises team needs. If you’re buying through a framework or need several quotes for your procurement rules, tell us at enquiry stage."
    },
    {
      "title": "Cost of school gates and entrance security in London",
      "desc": "As a rough guide, a powered sliding vehicle gate for a school entrance typically costs £8,000 to £20,000 installed, depending on width, groundworks and access control. A controlled pedestrian gate with an electric lock, self-closer and video intercom is usually £3,000 to £7,000. Airlock entrances, new perimeter fencing and links to existing systems are priced after survey. Every quote is itemised and fixed in writing."
    },
    {
      "title": "Maintenance",
      "desc": "Powered gates on a school site should be serviced at least every six months. That means a full safety check, force testing, adjustment and a written record each visit. HSE guidance on powered gates makes clear that whoever controls the site is responsible for keeping them safe. Between services, the premises team should check daily that the safety devices work and that nothing is damaged. We show them what to look for at handover. For existing gates that are faulty or out of service, see gate repair and servicing ."
    }
  ],
  "faqs": [
    {
      "question": "Can the gate connect to our existing visitor system or CCTV?",
      "answer": "Often, yes, but it depends on the exact products. Send us the make and model of your current system and we’ll confirm what can link to it before it goes into the quote."
    },
    {
      "question": "Should our vehicle gate be swing or sliding?",
      "answer": "Sliding in most cases, because it doesn’t swing out across the pavement or playground and needs less clear space. Swing gates can suit narrow entrances away from pedestrian routes."
    },
    {
      "question": "What happens if the gate breaks down during the school day?",
      "answer": "Your premises team will be shown how to make the gate safe and open or lock it by hand. Response times for call-outs are set out in writing in the service agreement."
    },
    {
      "question": "Can you replace just the gate and keep our fencing?",
      "answer": "Usually. We check the condition of the existing posts and fencing at survey and tell you if anything needs strengthening to carry a powered gate."
    },
    {
      "question": "Do we need planning permission?",
      "answer": "Schools often have permitted development rights for gates and fencing, but height limits, conservation areas and listed buildings can change that. Our borough planning guides are a starting point, and we can advise on your site."
    }
  ],
  "headline": "School Gates and Entrance Security in London"
},
  {
  "updatedDate": "2026-11-07",
  "id": "car-park-barriers",
  "slug": "car-park-barriers",
  "title": "Car Park Barriers and Access Control",
  "metaTitle": "Car Park Barriers and Access Control in London | Driveway Gates London",
  "metaDescription": "Car park barriers and access control in London: boom, high-speed and folding-arm barriers, induction loops, ANPR and fobs, layout, GDPR and typical costs.",
  "description": "Car-park barriers and entry controls for London premises. Plan vehicle flow, visitor access and support arrangements around the site.",
  "image": "/images/services/car-park-barriers-illustration.webp",
  "typicalClients": [
    "Office buildings with employee parking",
    "Retail parks and shopping centres",
    "Residential developments with basement parking",
    "NHS and healthcare sites",
    "Airports and transport hubs"
  ],
  "intro": [
    "A standard boom barrier has a single straight arm, typically 3 to 6 metres long, and suits most surface car parks. It’s the cheapest and simplest option, and a good barrier opens in around three to six seconds.",
    "High-speed barriers open in a second or two. They’re for busy entrances where a queue would otherwise back up onto the road, such as staff car parks at shift change and retail sites at peak times.",
    "Folding-arm barriers have a hinged arm that folds as it rises, so it fits under a low ceiling. They’re the usual answer for underground and multi-storey car parks with limited headroom, often paired with a height-restriction bar at the entrance so oversized vans don’t hit the structure.",
    "Skirted barriers have a hanging mesh or rail skirt below the arm, which stops pedestrians, cyclists and mopeds slipping underneath. They’re useful where the barrier is the only control on the entrance.",
    "For higher-security sites, rising bollards or road blockers stop a vehicle physically rather than just signalling it to stop. They cost considerably more."
  ],
  "benefits": [
    {
      "title": "How vehicles are detected",
      "desc": "Most barriers rely on induction loops: wire loops cut into the road surface that sense the metal of a car above them. A safety loop under the arm stops it coming down onto a vehicle. An exit loop can lift the barrier automatically for cars leaving the site, so nobody needs a fob to get out. A closing loop lowers the arm as soon as each car has passed, which cuts down tailgating. Photocells add a second layer of protection, especially for higher vehicles and pedestrians."
    },
    {
      "title": "How drivers get in",
      "desc": "ANPR (automatic number plate recognition) reads the number plate and lifts the barrier for registered vehicles. There’s nothing to hand out, and visitors can be pre-registered through an online portal by reception or residents. It needs a well-positioned camera and good lighting, and it struggles with dirty or non-standard plates. Most sites keep a back-up method alongside it. See ANPR systems . Long-range tags stick to the windscreen and are read from several metres away. They’re very reliable and fast, so they suit staff and residents who arrive every day. Proximity fobs and cards are read by a post-mounted reader at window height. They’re cheap and easy to manage, but the driver has to stop and reach out. Intercoms let visitors and delivery drivers call reception, a concierge or a remote monitoring service, who then lifts the barrier. A video intercom lets staff see who they’re letting in. GSM phone entry lets authorised users open the barrier by calling it from their mobile. On pay-to-park sites, ticketing and payment are handled by specialist parking management systems. We install and maintain the barriers and detection and work alongside the payment provider you choose."
    },
    {
      "title": "Layout and queuing",
      "desc": "The barrier should sit far enough back from the road that a car waiting at it, plus any car behind, is fully off the highway. On busy sites that may mean space for two or three cars. Reader posts and intercoms are set at driver’s-window height and positioned so the driver can reach them without leaving the car. Entry and exit lanes with a central island are easier to manage than a single shared lane. People on foot should have their own route beside the barrier, not one that crosses in front of a moving arm."
    },
    {
      "title": "ANPR and your data",
      "desc": "Number plates are personal data, so an ANPR system brings legal duties under UK GDPR. You’ll need signs telling drivers that ANPR is in use, a clear policy on how long plate data is kept, and someone responsible for who can see it. We set the system up with sensible retention settings and can advise on signage. The legal responsibility sits with the site operator."
    },
    {
      "title": "Barrier or gate?",
      "desc": "A barrier controls vehicles but doesn’t secure a site. Anyone on foot can walk round it, and a determined driver can drive through it. Many sites use a barrier for the working day and a sliding or swing gate to lock the car park at night. If you need to keep people out as well as cars, see industrial security gates or heavy-duty sliding gates ."
    },
    {
      "title": "Installation",
      "desc": "A barrier is bolted to a concrete base, with ducting for power and control cables. Induction loops are cut into the road surface and sealed. Most single-lane installations take one day on site, with the entrance closed for part of it. We plan the work for quiet periods, evenings or weekends where the car park can’t close during the day. At handover, the site team is shown how to manage users, release the barrier by hand, and what to do if the arm is hit. Powered barriers come under the same safety standards and HSE guidance as powered gates. That means safety loops and photocells, recorded safety tests, and regular servicing."
    },
    {
      "title": "Cost of car park barriers in London",
      "desc": "As a rough guide, a standard barrier with induction loops and a fob reader typically costs £3,000 to £6,000 installed, per lane. High-speed and folding-arm barriers usually cost £5,000 to £9,000. Adding ANPR is typically £2,500 to £6,000 per lane, plus an ongoing software or support subscription on most systems. Look at the running costs too: replacement fobs or tags, SIM connectivity for intercoms and GSM units, software licences and service contracts. Every quote sets these out separately, so you can compare like with like."
    },
    {
      "title": "Servicing and damage",
      "desc": "Barriers on busy car parks cycle hundreds of times a day and should be serviced two to four times a year. Arms do get hit. A good barrier has a breakaway arm fixing that protects the motor when that happens, and keeping a spare arm on site means the entrance is back in use the same day. For a barrier that’s already faulty, see gate repair and servicing ."
    }
  ],
  "faqs": [
    {
      "question": "Does a barrier give the same security as a gate?",
      "answer": "No. A barrier controls vehicles, but people on foot can walk round it. Use a gate, or a barrier plus a gate locked out of hours, if you need to secure the site itself."
    },
    {
      "question": "Can you add number plate recognition to an existing barrier?",
      "answer": "Usually, yes. We check the barrier’s controller, the camera position and the power and network connections at survey. Older barriers sometimes need a new controller to work reliably with ANPR."
    },
    {
      "question": "What happens if the power fails?",
      "answer": "The barrier can be lifted by hand with a release key. Battery backup or a setting that raises the arm on power loss is worth considering for sites where vehicles must always be able to leave."
    },
    {
      "question": "What should a barrier quotation include?",
      "answer": "The barrier model, groundworks, loops, access control equipment, commissioning, training and making good, with VAT, exclusions and any ongoing subscriptions or service charges shown separately. Ours do."
    },
    {
      "question": "Can the barrier work with an underground car park’s low ceiling?",
      "answer": "Yes. A folding-arm barrier rises within a much lower height than a straight arm. We measure the clear headroom at survey."
    }
  ],
  "headline": "Car Park Barriers and Access Control in London"
},
  {
  "updatedDate": "2026-11-07",
  "id": "heavy-duty-sliding-gates",
  "slug": "heavy-duty-sliding-gates",
  "title": "Heavy-Duty Commercial Sliding Gates",
  "metaTitle": "Heavy-Duty Commercial Sliding Gates in London | Driveway Gates London",
  "metaDescription": "Heavy-duty commercial sliding gates in London: cantilever, tracked, telescopic and bi-parting gates, duty-rated motors, safety standards and typical costs.",
  "description": "Commercial sliding gate installation in London. Assess the opening, side space, supports and operating demand for your business entrance.",
  "image": "/images/services/heavy-duty-sliding-gates-illustration.webp",
  "typicalClients": [
    "Builders merchants and trade counters",
    "Commercial vehicle depots",
    "Food distribution and cold store facilities",
    "Recycling and waste transfer stations",
    "NHS supply chain and hospital service yards"
  ],
  "intro": [
    "The first decision is how the gate is supported, and that’s mostly decided by how much space you have beside the opening.",
    "Cantilever gates hang from two roller carriages fixed to a concrete foundation beside the opening. Nothing touches the ground across the entrance itself. Lorries cross a clean threshold, and grit, ice and debris can’t stop the gate. To balance, the gate needs a tail behind the opening, usually around 40 to 50 percent of the opening’s width. An 8-metre opening therefore needs roughly 12 metres of straight, level fence line for the gate to slide back along. Cantilever is the first choice for most commercial sites where that space exists.",
    "Tracked gates run on wheels along a steel rail set into or bolted onto the ground. They only need side space roughly equal to the opening, so they fit where a cantilever won’t. The catch is the track itself. It has to be kept clear and needs drainage, and on sites with heavy plant, loose aggregate or frequent ice it becomes the weak point.",
    "Telescopic gates split into two or more leaves that slide over each other. That roughly halves the side space needed, which helps on tight London plots where the boundary turns a corner or meets a building close to the entrance.",
    "Bi-parting gates use two sliding leaves meeting in the middle. They suit very wide openings, or sites with space on both sides of the entrance but not enough on either side for a single gate."
  ],
  "benefits": [
    {
      "title": "Motors, speed and duty",
      "desc": "A commercial sliding gate typically weighs anywhere from 500 kg to over two tonnes, depending on width, height and infill. The motor is chosen by two numbers. One is the maximum gate weight it can drive. The other is its duty rating, meaning how many cycles an hour it can run without overheating. A motor sized for a domestic drive on a busy commercial entrance burns out, often within months. For busy sites we use three-phase motors with inverter (variable-speed) drives. These start and stop the gate gently, which takes the shock out of the rack, rollers and frame, and they can run the gate faster through the middle of its travel. Lighter-use sites can run on single-phase power. If your site doesn’t have a three-phase supply near the entrance, the survey flags it early, because it affects both cost and programme. The drive rack should be galvanised steel on any commercial gate. Nylon racks are fine on light domestic gates but wear quickly under heavy loads."
    },
    {
      "title": "Infill and wind",
      "desc": "Open infill such as 358 anti-climb mesh, steel palisade or vertical bars keeps the gate light and lets wind pass through. Solid cladding gives privacy and hides the yard, but it turns the gate into a sail. A solid 10-metre gate in an exposed position puts large sideways loads on its posts and rollers, so it needs a heavier structure and motor. If you want screening, perforated or louvred panels are often a better compromise than fully solid sheeting."
    },
    {
      "title": "Safety",
      "desc": "Sliding gates are dangerous in two places: the closing edge, where the gate meets the catch post, and the points where it slides past fixed posts and rollers, where hands and arms can be drawn in. Every gate we install has safety edges on the leading and trailing edges and photocells on both sides of the opening. Mesh is covered with fine guarding where the gate passes the posts. Closing forces are tested and recorded against BS EN 12453. A powered commercial gate must also meet the product standard BS EN 13241 and be supplied with the matching UKCA or CE marking and declaration. Ask for those documents from any installer. The HSE’s guidance on powered gates makes clear that whoever controls the site is responsible for keeping a powered gate safe. Regular servicing with written records is how you show you’ve done that."
    },
    {
      "title": "Groundworks and installation",
      "desc": "A cantilever gate stands on a reinforced concrete foundation beam that carries the whole weight of the gate on two points. Getting it level and the right size matters more than anything else on the job. We also lay ducting for power and control cables, plus drainage for tracked gates. London sites often have shallow services, so we scan for buried cables and pipes before digging. Installation usually takes two visits. The first covers groundworks and foundations. The second, about a week later once the concrete has cured, is for hanging the gate, fitting the motor and commissioning. On sites that have to stay operational, the old gate or temporary fencing stays in place until the new gate is working."
    },
    {
      "title": "Upgrading an existing sliding gate",
      "desc": "Plenty of commercial sliding gates have a sound frame but a tired or underpowered motor, worn rollers, or no modern safety devices. In those cases, a new motor, new carriages and safety edges can give the gate years more life for a fraction of the cost of a replacement. Where the structure itself is failing, or a tracked gate keeps jamming, we’ll tell you so. A replacement cantilever gate is often cheaper over five years than repairing an unsuitable gate again and again. For faults on a gate you already have, see gate repair and servicing ."
    },
    {
      "title": "Access control",
      "desc": "Sliding gates work with every type of access control: ANPR for fleet and staff vehicles, fobs and cards, video intercoms for visitors (with a second cab-height panel for lorry drivers), and GSM phone entry for opening from a mobile. For broader planning of security, traffic and pedestrian routes on an industrial site, see industrial security gates ."
    },
    {
      "title": "Cost of heavy-duty commercial sliding gates in London",
      "desc": "As a rough guide, a powered cantilever gate for a 6-metre opening typically costs £10,000 to £18,000 installed. Openings of 10 metres and over usually run from £18,000 to £35,000, depending on height, infill, groundworks and power supply. Tracked gates generally come in somewhat cheaper. Replacing the motor on a sound existing gate is usually £2,500 to £6,000. Every quote is itemised and fixed in writing after survey."
    }
  ],
  "faqs": [
    {
      "question": "Is a cantilever gate suitable for any commercial entrance?",
      "answer": "No. It needs a clear, fairly level run beside the opening, usually about one and a half times the opening’s width. If you don’t have that, a tracked, telescopic or bi-parting gate is the alternative. The survey measures this precisely."
    },
    {
      "question": "How many times a day can the gate run?",
      "answer": "That depends on the motor’s duty rating, not the gate. Tell us your busiest hour as well as your daily total, and we’ll specify a motor rated above that demand."
    },
    {
      "question": "What happens in a power cut?",
      "answer": "The motor has a manual release, so the gate can be pushed open by hand. Battery backup can keep the gate running for a limited number of cycles, and is worth having on sites where vehicles must keep moving."
    },
    {
      "question": "Can you upgrade our existing sliding gate?",
      "answer": "Often, yes. We assess the frame, foundation, rollers and motor and tell you what can be kept. Adding safety edges and photocells to an older gate is one of the most common upgrades we do."
    },
    {
      "question": "How long does installation take?",
      "answer": "Usually two site visits about a week apart, so the foundations can cure. Wider gates or projects with new power supplies or extensive groundworks take longer, and the quote sets out the programme."
    }
  ],
  "headline": "Heavy-Duty Commercial Sliding Gates in London"
},
];

export function getCommercialBySlug(slug: string): CommercialService | undefined {
  return commercialServices.find(s => s.slug === slug);
}
