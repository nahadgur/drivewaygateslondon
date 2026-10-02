export interface CommercialService {
  id: string;
  slug: string;
  title: string;
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
  "updatedDate": "2026-10-02",
  "id": "industrial-security-gates",
  "slug": "industrial-security-gates",
  "title": "Industrial Security Gates",
  "metaTitle": "Industrial Security Gates London | Heavy-Duty Sliding & Swing Gates",
  "metaDescription": "Industrial gate systems for London sites. Discuss vehicle access, operating frequency, security requirements and aftercare before specifying equipment.",
  "description": "Industrial gate systems for London sites. Discuss vehicle access, operating frequency, security requirements and aftercare before specifying equipment.",
  "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop",
  "typicalClients": [
    "Warehouses and distribution centres",
    "Manufacturing facilities",
    "Industrial estates",
    "Transport and logistics depots",
    "Recycling and waste management sites"
  ],
  "intro": [
    "Start with the site requirements: vehicle types, busiest arrival periods, clear opening, security objectives and routes for people on foot. Include delivery drivers and contractors who may not know the site.",
    "Discuss the gate layout and access controls together. Existing ground conditions, supports, power and the space for vehicles to wait can affect the installation scope. A site survey should establish which arrangements are suitable before you order equipment.",
    "If your brief requires a tested security rating or a named certification, ask for evidence for the exact proposed product and configuration. Do not treat the appearance of a gate or a general supplier claim as proof of that requirement."
  ],
  "benefits": [
    {
      "title": "Vehicle movement",
      "desc": "Assess the approach, turning room and clear opening for the vehicles using the entrance."
    },
    {
      "title": "Operating demand",
      "desc": "Give the installer the expected frequency and busiest periods so they can select equipment for the proposed duty."
    },
    {
      "title": "Access control",
      "desc": "Agree how staff, visitors and delivery drivers gain entry and who manages permissions."
    },
    {
      "title": "Aftercare",
      "desc": "Request written maintenance, fault-response and call-out terms. No response time applies unless it is agreed in the service contract."
    }
  ],
  "faqs": [
    {
      "question": "Can you quote for a gate with a specified security rating?",
      "answer": "Share the requirement with the enquiry. The proposed product and configuration need supporting evidence, and availability must be confirmed before a quotation promises a particular rating."
    },
    {
      "question": "Is emergency call-out cover included?",
      "answer": "Ask for the available support arrangements, charges and response terms in writing. Installation does not establish an automatic emergency-service agreement."
    },
    {
      "question": "What should we prepare for the survey?",
      "answer": "Provide the site layout, vehicle types, operating hours, access requirements and any known constraints. Identify who will approve the specification and look after the system after handover."
    }
  ]
},
  {
  "updatedDate": "2026-10-02",
  "id": "school-gate-systems",
  "slug": "school-gate-systems",
  "title": "School Gate Systems",
  "metaTitle": "School Gate Systems London | Automated Security Gates for Schools",
  "metaDescription": "School entrance gate planning and installation in London, with vehicle movement, pedestrian access and day-to-day management considered together.",
  "description": "School entrance gate planning and installation in London, with vehicle movement, pedestrian access and day-to-day management considered together.",
  "image": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop",
  "typicalClients": [
    "Primary schools",
    "Secondary schools and academies",
    "Special educational needs schools",
    "Multi-academy trusts",
    "Independent schools and colleges"
  ],
  "intro": [
    "School entrances serve pupils, parents, staff and deliveries at different times of day. Discuss the arrival and collection periods, walking routes, visitor checks and vehicle access with the people who manage the site.",
    "The installer needs to assess the entrance and foreseeable users before proposing equipment and protective measures. A list of sensors or a general claim of compliance does not establish that a particular installation is suitable.",
    "Agree the handover with the school’s responsible person: user instructions, operating arrangements, records, training and the process for reporting faults. Confirm maintenance and any support contract in writing."
  ],
  "benefits": [
    {
      "title": "Pedestrian routes",
      "desc": "Consider children and adults approaching on foot alongside vehicles and delivery access."
    },
    {
      "title": "Controlled entry",
      "desc": "Define who approves visitors and how staff manage opening and closing during the school day."
    },
    {
      "title": "Compatibility checks",
      "desc": "Confirm intercom, CCTV or visitor-system compatibility against the actual proposed equipment before including it in the scope."
    },
    {
      "title": "Procurement documents",
      "desc": "Share the school’s procurement and insurance requirements at enquiry stage so availability of the required documentation can be checked."
    }
  ],
  "faqs": [
    {
      "question": "Can the gate connect to our existing visitor or CCTV system?",
      "answer": "Compatibility needs to be checked using the existing and proposed equipment details. Do not assume that a named software product or recorder can integrate with any gate controller."
    },
    {
      "question": "How often should school gates be serviced?",
      "answer": "Agree maintenance based on the installed equipment, instructions, use and risk assessment. Ask the responsible contractor to document the schedule and the checks required between visits."
    },
    {
      "question": "What happens if the gate develops a fault?",
      "answer": "Follow the agreed site procedure and the installation-specific instructions. Identify who can take the system out of use and arrange competent assessment; confirm any response commitment separately in the support terms."
    }
  ]
},
  {
  "updatedDate": "2026-10-02",
  "id": "car-park-barriers",
  "slug": "car-park-barriers",
  "title": "Car Park Barriers and Access Control",
  "metaTitle": "Car Park Barriers London | Automated Barrier Systems for London Car Parks",
  "metaDescription": "Car-park barriers and entry controls for London premises. Plan vehicle flow, visitor access and support arrangements around the site.",
  "description": "Car-park barriers and entry controls for London premises. Plan vehicle flow, visitor access and support arrangements around the site.",
  "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
  "typicalClients": [
    "Office buildings with employee parking",
    "Retail parks and shopping centres",
    "Residential developments with basement parking",
    "NHS and healthcare sites",
    "Airports and transport hubs"
  ],
  "intro": [
    "A barrier can manage vehicle entry to a car park, but the layout also needs to account for people on foot, cyclists and drivers who stop to request access. Review the approach, waiting space and exit route before choosing a product.",
    "Discuss whether staff, residents, visitors or paying customers use the car park. Decide who grants access and how authorised people enter when a credential or connection fails. Include deliveries and any shared entrances in the brief.",
    "Identify the proposed controller, reader or intercom in the quotation. ANPR, ticketing and payment integrations depend on the selected systems and connectivity. Confirm subscriptions, administration and data-handling responsibilities before ordering."
  ],
  "benefits": [
    {
      "title": "Traffic flow",
      "desc": "Assess opening demand, waiting space and the effect of queues on the entrance and surrounding roads."
    },
    {
      "title": "Visitor access",
      "desc": "Choose a process for visitors and deliveries that the people managing the site can operate."
    },
    {
      "title": "Equipment scope",
      "desc": "Specify the barrier, supports, power, protective measures and entry controls as a complete installation."
    },
    {
      "title": "Ongoing costs",
      "desc": "Compare service charges, connectivity fees, replacement credentials and support terms as well as installation cost."
    }
  ],
  "faqs": [
    {
      "question": "Does a barrier provide the same security as a closed gate?",
      "answer": "A barrier controls vehicle passage but may leave access around or beneath it. Define the site’s security requirement before deciding whether a barrier, gate or combined arrangement is suitable."
    },
    {
      "question": "Can you include number-plate recognition?",
      "answer": "Discuss the desired use and provide the site layout. Equipment compatibility, visibility, connectivity and permission management need checking before the proposed scope is confirmed."
    },
    {
      "question": "What should a barrier quotation include?",
      "answer": "Ask for the equipment specification, groundworks, power, access controls, commissioning, handover and making good, with VAT, exclusions and ongoing charges stated."
    }
  ]
},
  {
  "updatedDate": "2026-10-02",
  "id": "heavy-duty-sliding-gates",
  "slug": "heavy-duty-sliding-gates",
  "title": "Heavy-Duty Commercial Sliding Gates",
  "metaTitle": "Heavy-Duty Commercial Sliding Gates London | Large Openings, HGV Rated",
  "metaDescription": "Commercial sliding gate installation in London. Assess the opening, side space, supports and operating demand for your business entrance.",
  "description": "Commercial sliding gate installation in London. Assess the opening, side space, supports and operating demand for your business entrance.",
  "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop",
  "typicalClients": [
    "Builders merchants and trade counters",
    "Commercial vehicle depots",
    "Food distribution and cold store facilities",
    "Recycling and waste transfer stations",
    "NHS supply chain and hospital service yards"
  ],
  "intro": [
    "A commercial sliding gate needs space beyond the vehicle opening for its movement and support arrangement. Check the full travel area, nearby fencing, pedestrian routes and access for maintenance before choosing the gate.",
    "Tracked and cantilever arrangements have different groundworks and support requirements. Ask for a proposed layout showing the opening, gate travel and supports. A cantilever design does not remove the need for sufficient space alongside the entrance.",
    "Provide the anticipated operating frequency and peak periods. The designer should assess the gate, drive system and protective measures together for the site. Ask for the actual equipment limits rather than assuming that the label heavy-duty promises a fixed number of operations."
  ],
  "benefits": [
    {
      "title": "Measured layout",
      "desc": "Confirm the usable vehicle opening and the space needed for movement and supports."
    },
    {
      "title": "Groundwork scope",
      "desc": "Identify foundations, track if applicable, drainage, access to power and reinstatement work."
    },
    {
      "title": "Site use",
      "desc": "Include vehicle types, operating demand, people on foot and the way visitors request entry."
    },
    {
      "title": "Handover and maintenance",
      "desc": "Agree user instructions, inspection arrangements and the procedure for a fault before the system enters use."
    }
  ],
  "faqs": [
    {
      "question": "Is a cantilever gate suitable for any commercial entrance?",
      "answer": "No. Suitability depends on the available side space, supports, ground conditions, opening and site use. Ask for a measured design that identifies the proposed arrangement."
    },
    {
      "question": "How many times per day can the gate operate?",
      "answer": "The selected equipment and operating conditions determine its limits. Give the installer your busiest expected periods and ask for confirmation that the proposed system suits that demand."
    },
    {
      "question": "Can an existing commercial sliding gate be upgraded?",
      "answer": "An assessment is needed to identify what can be retained and what needs changing. Condition, supports, movement, controls and site-specific risks all affect the proposed work."
    }
  ]
},
];

export function getCommercialBySlug(slug: string): CommercialService | undefined {
  return commercialServices.find(s => s.slug === slug);
}
