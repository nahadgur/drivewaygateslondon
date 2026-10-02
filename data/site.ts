export const siteConfig = {
  name: 'Driveway Gates London',
  domain: 'drivewaygateslondon.co.uk',
  url: 'https://www.drivewaygateslondon.co.uk',

  // The inbound line, in national display format. phoneHref below derives the
  // dialled form, so the displayed number and the link can never disagree.
  // Every phone link on the site is hidden while this is empty.
  phone: '020 3773 1310' as string,
  email: 'hello@drivewaygateslondon.co.uk',

  // The office. Held in parts so the schema can emit streetAddress and
  // postalCode separately, which is what Google reads. Use addressOneLine
  // below wherever it is displayed, so the page and the schema can never
  // disagree about it.
  //
  // This is the NAP address. If it changes, it has to change in the Google
  // Business Profile and every directory listing on the same day, or the
  // inconsistency costs local rankings.
  //
  // Full office postcode confirmed by the business owner.
  address: {
    street: '22 Bedford Square',
    locality: 'London',
    outward: 'WC1B',
    postcode: 'WC1B 3HH' as string,
  },

  // Centroid of the office postcode (postcodes.io, WC1B 3HH). This is where the
  // office is, not where the work happens: the service area is areaServed.
  geo: { latitude: 51.51929, longitude: -0.13095 },

  // When the phone is answered. The schema reads these, so the hours on the
  // page and the hours Google sees can never disagree.
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },

  // Keyless Google map embed, so there is no API key to manage. Zoom 15 puts
  // the square and its surrounding streets in frame.
  map: { zoom: 15 },
  description: 'Driveway gate design, supply and installation across London. Electric sliding gates, swing gates, wooden and metal gates, automation, and repairs. Free site surveys and written quotes.',
  tagline: 'Driveway Gate Installation Across London',
};

/**
 * The one business entity. layout.tsx emits the full LocalBusiness node under
 * this @id on every page, so anything that names the business in schema
 * (provider, author, publisher) uses organizationRef and resolves to that node
 * instead of declaring a second, thinner business beside it.
 */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

export const organizationRef = {
  '@type': 'LocalBusiness',
  '@id': ORGANIZATION_ID,
  name: siteConfig.name,
  url: siteConfig.url,
} as const;

/**
 * The phone number as a tel: href. National format in, E.164 out: strip the
 * spacing, drop the trunk zero and prefix the country code. Empty while there
 * is no number, so a caller can test it exactly like siteConfig.phone.
 */
export const addressOneLine = [
  siteConfig.address.street,
  siteConfig.address.locality,
  siteConfig.address.postcode || siteConfig.address.outward,
]
  .filter(Boolean)
  .join(', ');

export const phoneHref = siteConfig.phone
  ? `tel:+44${siteConfig.phone.replace(/\D/g, '').replace(/^0/, '')}`
  : '';

export const trustBadges = [
  {
    "title": "Design, Supply & Install",
    "description": "Discuss the full installation scope from survey to handover",
    "icon": "Award"
  },
  {
    "title": "Written Scope",
    "description": "Confirm products, work and exclusions before ordering",
    "icon": "ShieldCheck"
  },
  {
    "title": "Free Site Surveys",
    "description": "Discuss a free installation survey for your property",
    "icon": "UserCheck"
  },
  {
    "title": "Itemised Quotes",
    "description": "Compare the agreed scope, VAT and payment terms",
    "icon": "PoundSterling"
  }
];

export const FAQS_HOME = [
  {
    "question": "Do you handle the whole installation yourselves?",
    "answer": "We design, supply and install driveway gates across London. Your written quotation should identify the work included, any specialist appointments and responsibilities from survey to handover."
  },
  {
    "question": "How do I get started?",
    "answer": "Send your postcode, gate type and a description of the work through our enquiry form. We will contact you to discuss the project and arrange the next steps."
  },
  {
    "question": "Is there a cost for the survey or quote?",
    "answer": "We offer a free site survey and written installation quote with no obligation to proceed. For an existing fault or specialist assessment, agree any inspection charge before booking."
  }
];

export const FAQS_SERVICES = [
  {
    "question": "How long does a driveway gate installation take?",
    "answer": "The programme depends on fabrication, supports, groundworks, electrical work and the agreed gate specification. Ask for the proposed lead time and installation schedule in your written quotation."
  },
  {
    "question": "Do I need planning permission for driveway gates?",
    "answer": "Check the proposed height, position beside a highway, listed status, conservation-area controls, any Article 4 direction and planning conditions with the relevant authority. The rules depend on the property and work; opening inward alone does not establish permission."
  },
  {
    "question": "What warranty do you offer?",
    "answer": "Ask for the written terms for the proposed gate, finish, automation and installation before ordering. Confirm duration, exclusions, maintenance conditions, labour and call-out charges, and who handles a claim."
  }
];

export const FAQS_LOCATION = [
  {
    "question": "Which parts of London do you cover?",
    "answer": "We serve London and surrounding areas. Send the property postcode and the work you need so we can confirm coverage and arrangements for your project."
  },
  {
    "question": "Do you carry insurance and warranties?",
    "answer": "Request the insurance details relevant to the proposed work and the written warranty terms before accepting a quotation. Confirm what is covered, any exclusions and who to contact if a problem arises."
  },
  {
    "question": "What if my area is not listed?",
    "answer": "Send your postcode and project details so we can confirm whether we can help at your address."
  }
];

export const HOMEPAGE_FAQS = [
  {
    "question": "How much do driveway gates cost in London?",
    "answer": "The total depends on the measured entrance, gate material and design, supports, groundworks, electrical supply and manual or automated operation. Request an itemised quotation with VAT, exclusions and payment terms stated."
  },
  {
    "question": "Do I need planning permission for driveway gates in London?",
    "answer": "Check the proposed height, position beside a highway, listed status, conservation-area controls, any Article 4 direction and planning conditions with the relevant authority. The rules depend on the property and work; opening inward alone does not establish permission."
  },
  {
    "question": "How long does a driveway gate installation take?",
    "answer": "The programme depends on fabrication, supports, groundworks, electrical work and the agreed gate specification. Ask for the proposed lead time and installation schedule in your written quotation."
  },
  {
    "question": "What type of gate is best for a London driveway?",
    "answer": "The survey should compare movement space, gradient, supports, parking and pedestrian access alongside your preferred appearance. The suitable material and opening layout depend on the complete entrance."
  },
  {
    "question": "Can I automate my existing manual gates?",
    "answer": "Possibly, after assessment of the gate, supports, movement, surrounding hazards and proposed equipment. Ask what repairs or alterations are needed and compare the complete retrofit scope before buying motors."
  },
  {
    "question": "Do you supply the gates as well as install them?",
    "answer": "We design, supply and install driveway gates and also discuss automation, repairs and maintenance. The written quotation will set out the agreed products, work, exclusions and handover arrangements."
  },
  {
    "question": "Are electric gates safe for children and pets?",
    "answer": "A powered entrance needs a site-specific assessment, suitable protective measures and checks of the completed system. Children and pets must be considered in that assessment. A generic list of sensors does not by itself establish safety."
  },
  {
    "question": "What happens if there is a power cut?",
    "answer": "Follow the user instructions for your installed system. Manual release and backup arrangements differ by product, and releasing a gate can allow uncontrolled movement. If you are unsure how to operate and secure it safely, keep clear and seek assistance."
  }
];
