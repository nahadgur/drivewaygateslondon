import { accessControlFeaturedImages } from './featuredImages';

export interface AccessControlService {
  id: string;
  slug: string;
  title: string;
  /** Page H1 and title-tag phrase when it differs from the card title. */
  headline?: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  imageAlt?: string;
  updatedDate?: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

const accessControlEntries: AccessControlService[] = [
  {
  "id": "video-intercoms",
  "slug": "video-intercoms",
  "title": "Video Intercom Systems",
  "metaTitle": "Video Intercom Systems | Driveway Gates London",
  "metaDescription": "See and speak to visitors through a video-entry system specified for your gate, network and household.",
  "description": "See and speak to visitors through a video-entry system specified for your gate, network and household.",
  "image": "/showcase/assets/content/video-intercoms-dd5d897.webp",
  "intro": [
    " Discuss indoor monitors, phones and the people who need to answer. Confirm whether you need live video only, recordings or gate-position feedback. These functions vary by product and configuration.  Ask to see the proposed call and release sequence, including what happens when nobody answers. Plan deliveries and pedestrian access alongside vehicle entry. ",
    " Survey power, cable routes, camera position, lighting and the required network connection. App access may depend on broadband or a mobile service as well as power at the entrance.  Confirm the exact interface with the gate controller. An intercom is not automatically compatible with every existing motor or control board. Changes need assessment and commissioning with the complete entrance. ",
    " Agree who owns the administrator account, how residents are added and removed, and how recovery works. Confirm subscriptions, storage, recording settings and any remote-access charges.  Position cameras with neighbouring property and the public area in mind. Ask what privacy controls apply and obtain advice on the responsibilities of the operator where needed. ",
    " Use our  intercom buying guide  and  documented product comparison . Confirm offered brands and model availability in your quotation.  Send photographs and any safely accessible equipment details when you  discuss your entrance . Include installation, programming, user training and support in the agreed scope. "
  ],
  "benefits": [
    {
      "title": "Choose where calls should ring",
      "desc": " Discuss indoor monitors, phones and the people who need to answer. Confirm whether you need live video only, recordings or gate-position feedback. These functions vary by product and configuration.  Ask to see the proposed call and release sequence, including what happens when nobody answers. Plan deliveries and pedestrian access alongside vehicle entry. "
    },
    {
      "title": "Check the site connection",
      "desc": " Survey power, cable routes, camera position, lighting and the required network connection. App access may depend on broadband or a mobile service as well as power at the entrance.  Confirm the exact interface with the gate controller. An intercom is not automatically compatible with every existing motor or control board. Changes need assessment and commissioning with the complete entrance. "
    },
    {
      "title": "Keep control of accounts and recordings",
      "desc": " Agree who owns the administrator account, how residents are added and removed, and how recovery works. Confirm subscriptions, storage, recording settings and any remote-access charges.  Position cameras with neighbouring property and the public area in mind. Ask what privacy controls apply and obtain advice on the responsibilities of the operator where needed. "
    },
    {
      "title": "Compare the specified equipment",
      "desc": " Use our  intercom buying guide  and  documented product comparison . Confirm offered brands and model availability in your quotation.  Send photographs and any safely accessible equipment details when you  discuss your entrance . Include installation, programming, user training and support in the agreed scope. "
    }
  ],
  "faqs": [
    {
      "question": "Can a video intercom work with my existing gate?",
      "answer": "The installer needs to check the existing controller, wiring, condition and proposed interface. Compatibility cannot be promised from the motor brand alone."
    },
    {
      "question": "Can I answer remotely?",
      "answer": "Some configurations support remote calls through an app. Confirm the required connection, account, charges and failure arrangements for the specified model."
    },
    {
      "question": "Does every system record visitors?",
      "answer": "No. Recording, event logs, storage and subscriptions vary. Request the exact functions and privacy settings."
    }
  ],
  "imageAlt": "Homeowner speaking to a visitor through a driveway-gate video intercom",
  "updatedDate": "2026-10-02"
},
  {
  "id": "keypad-entry-systems",
  "slug": "keypad-entry-systems",
  "title": "Keypad Entry Systems",
  "headline": "Keypad Entry for Electric Gates in London",
  "metaTitle": "Keypad Entry for Electric Gates in London | Driveway Gates London",
  "metaDescription": "Keypad entry for electric gates in London: wired or wireless keypads, separate codes for visitors, placement, fitting to existing gates and typical prices.",
  "description": "A keypad for your automated gate, with a separate code for each family member, cleaner or trade, and codes you can delete when access is no longer needed.",
  "image": "/showcase/assets/content/keypad-entry-systems-3bfb451.webp",
  "intro": [
    "A wired keypad is connected by cable to your gate’s control panel and runs off the same power supply. It’s the most reliable option and needs no batteries. If the keypad sits on a post away from the pillar, though, a cable duct has to be laid under the driveway or verge. On a new installation that’s simple to plan in. On a finished block-paved drive it means lifting and relaying a strip of paving. A wireless keypad runs on batteries and sends a coded radio signal to a receiver in the control panel. There’s no digging, so it’s the usual choice when you’re adding a keypad to a gate that’s already installed. Expect to change the batteries roughly every one to two years. On very thick brick pillars or long driveways the signal range needs testing on site first. There’s also the question of where the codes are stored. A standalone keypad stores them itself and is programmed at the keypad. An app-managed keypad lets you add, delete and schedule codes from your phone, which is useful if you’re often away or let the property.",
    "Basic keypads hold a handful of codes. Better models hold hundreds, each one separate, so you can remove the cleaner’s access without changing the code the family uses. Some also support time windows (a code that only works on Tuesday mornings, for example), codes that expire on a set date, and a log of which code was used and when. When we hand the system over, we suggest six-digit codes rather than four. We also suggest a separate code for each regular visitor and a lockout after several wrong entries. We change the installer’s default master code in front of you, so nobody but you can reprogramme the keypad. Codes you give to people outside the household should be changed every so often. Worn buttons on a keypad that’s been used for years can show which numbers are in the code.",
    "For drivers, the keypad goes on a gooseneck post on the driver’s side, at roughly car-window height (about a metre). It’s set back far enough that the car waits clear of the gate while it opens. This matters most with outward-opening swing gates, where the post has to sit beyond the arc of the gate leaves. For people on foot, a keypad on the pillar beside a pedestrian gate at about chest height works well. Many London front gardens are shallow. If there’s no room for a car to pull off the road before the gate, a driver using a keypad ends up waiting across the pavement. In that case a remote or ANPR for residents, with the keypad kept for visitors on foot, is often a better arrangement. If you’re in a conservation area, check our borough planning guides before adding a post to the front of the property. Keypads facing the street need backlit keys for use after dark, a rain hood, and a rating of IP65 or higher for weather sealing. Where vandalism is a concern, look for an impact rating of IK08 or above.",
    "Most gate control panels from the main brands (BFT, CAME, FAAC, Nice and others) have an input that a keypad can trigger, so adding one is usually straightforward. On the survey we check that the control panel has a spare input and enough power, we plan the cable or radio route, and we test the gate’s safety devices. A keypad is another way to start the gate moving. It does nothing to stop the gate hitting a person or a car. That’s the job of the photocells and safety edges required under BS EN 12453, and we won’t connect a keypad to a gate that isn’t safe to run automatically. If the power goes off, a keypad on mains power stops working along with the gate, unless the system has battery backup. Make sure everyone who needs to get in knows how to release the gate manually , or has a key to the pedestrian gate.",
    "As a rough guide, a wireless keypad added to an existing automated gate typically costs £250 to £450 fitted. A wired keypad on a gooseneck post, including ducting and making good, usually comes to £500 to £1,000, depending on distance and the surface that has to be cut. App-managed keypads with scheduling and access logs sit at the upper end or above. We give a fixed written price after the survey.",
    "A keypad suits people you trust to let themselves in. If you want to see and speak to visitors before opening the gate, look at video intercoms . If you’d rather open the gate from your mobile wherever you are, GSM phone entry does that, and many homes combine it with a keypad. For couriers specifically, see our parcel delivery access guide ."
  ],
  "benefits": [
    {
      "title": "Wired or wireless",
      "desc": "A wired keypad is connected by cable to your gate’s control panel and runs off the same power supply. It’s the most reliable option and needs no batteries. If the keypad sits on a post away from the pillar, though, a cable duct has to be laid under the driveway or verge. On a new installation that’s simple to plan in. On a finished block-paved drive it means lifting and relaying a strip of paving. A wireless keypad runs on batteries and sends a coded radio signal to a receiver in the control panel. There’s no digging, so it’s the usual choice when you’re adding a keypad to a gate that’s already installed. Expect to change the batteries roughly every one to two years. On very thick brick pillars or long driveways the signal range needs testing on site first. There’s also the question of where the codes are stored. A standalone keypad stores them itself and is programmed at the keypad. An app-managed keypad lets you add, delete and schedule codes from your phone, which is useful if you’re often away or let the property."
    },
    {
      "title": "Codes, users and visitors",
      "desc": "Basic keypads hold a handful of codes. Better models hold hundreds, each one separate, so you can remove the cleaner’s access without changing the code the family uses. Some also support time windows (a code that only works on Tuesday mornings, for example), codes that expire on a set date, and a log of which code was used and when. When we hand the system over, we suggest six-digit codes rather than four. We also suggest a separate code for each regular visitor and a lockout after several wrong entries. We change the installer’s default master code in front of you, so nobody but you can reprogramme the keypad. Codes you give to people outside the household should be changed every so often. Worn buttons on a keypad that’s been used for years can show which numbers are in the code."
    },
    {
      "title": "Where the keypad goes",
      "desc": "For drivers, the keypad goes on a gooseneck post on the driver’s side, at roughly car-window height (about a metre). It’s set back far enough that the car waits clear of the gate while it opens. This matters most with outward-opening swing gates, where the post has to sit beyond the arc of the gate leaves. For people on foot, a keypad on the pillar beside a pedestrian gate at about chest height works well. Many London front gardens are shallow. If there’s no room for a car to pull off the road before the gate, a driver using a keypad ends up waiting across the pavement. In that case a remote or ANPR for residents, with the keypad kept for visitors on foot, is often a better arrangement. If you’re in a conservation area, check our borough planning guides before adding a post to the front of the property. Keypads facing the street need backlit keys for use after dark, a rain hood, and a rating of IP65 or higher for weather sealing. Where vandalism is a concern, look for an impact rating of IK08 or above."
    },
    {
      "title": "Adding a keypad to an existing gate",
      "desc": "Most gate control panels from the main brands (BFT, CAME, FAAC, Nice and others) have an input that a keypad can trigger, so adding one is usually straightforward. On the survey we check that the control panel has a spare input and enough power, we plan the cable or radio route, and we test the gate’s safety devices. A keypad is another way to start the gate moving. It does nothing to stop the gate hitting a person or a car. That’s the job of the photocells and safety edges required under BS EN 12453, and we won’t connect a keypad to a gate that isn’t safe to run automatically. If the power goes off, a keypad on mains power stops working along with the gate, unless the system has battery backup. Make sure everyone who needs to get in knows how to release the gate manually , or has a key to the pedestrian gate."
    },
    {
      "title": "What it costs",
      "desc": "As a rough guide, a wireless keypad added to an existing automated gate typically costs £250 to £450 fitted. A wired keypad on a gooseneck post, including ducting and making good, usually comes to £500 to £1,000, depending on distance and the surface that has to be cut. App-managed keypads with scheduling and access logs sit at the upper end or above. We give a fixed written price after the survey."
    },
    {
      "title": "Keypad, intercom or phone entry?",
      "desc": "A keypad suits people you trust to let themselves in. If you want to see and speak to visitors before opening the gate, look at video intercoms . If you’d rather open the gate from your mobile wherever you are, GSM phone entry does that, and many homes combine it with a keypad. For couriers specifically, see our parcel delivery access guide ."
    }
  ],
  "faqs": [
    {
      "question": "Can I give a delivery driver or tradesperson a temporary code?",
      "answer": "Yes, with a keypad that supports timed or expiring codes. You set the code to work for a set period and it stops working after that. Basic standalone keypads can’t do this, so tell us at survey stage if you need it."
    },
    {
      "question": "How many codes can a keypad hold?",
      "answer": "It depends on the model. Entry-level keypads hold a few codes, while mid-range and app-managed units hold hundreds, each separate from the others."
    },
    {
      "question": "What if someone finds out a code?",
      "answer": "Delete that code or change it. You don’t need to change anyone else’s, as long as each person has their own code. A lockout after repeated wrong entries stops anyone trying codes until one works."
    },
    {
      "question": "Does the keypad work in a power cut?",
      "answer": "Only if the gate has battery backup. Otherwise use the manual release or the pedestrian gate key until power is restored."
    },
    {
      "question": "Can you fit a keypad to a gate someone else installed?",
      "answer": "Usually, yes. We check the control panel, the power supply and the gate’s safety devices on the survey first."
    }
  ],
  "imageAlt": "Homeowner entering a PIN on a driveway-gate keypad in London",
  "updatedDate": "2026-11-07"
},
  {
  "id": "gsm-phone-entry",
  "slug": "gsm-phone-entry",
  "title": "GSM Phone Entry Systems",
  "metaTitle": "GSM Phone Entry Systems | Driveway Gates London",
  "metaDescription": "Phone-based gate entry with the device, signal, SIM plan and user permissions checked for your entrance.",
  "description": "Phone-based gate entry with the device, signal, SIM plan and user permissions checked for your entrance.",
  "image": "/showcase/assets/content/gsm-phone-entry-f32fe18.webp",
  "intro": [
    " Discuss whether you want authorised callers to request opening, a visitor intercom that calls residents, or both. Ask how the proposed system identifies a caller and what happens if nobody answers.  A phone command does not confirm physical gate position. Agree how the household recognises a failed opening and how visitors obtain help. ",
    " Identify the exact device and the voice, SMS or data services it needs. Check the SIM provider’s requirements, tariff and account-expiry conditions. Calls or messages should not be described as universally free.  Read  Ofcom’s mobile-network retirement guidance  and obtain product-specific support information. The word GSM is often used for phone entry generally; confirm which network technology the proposed unit actually uses. ",
    " Test the proposed service at the equipment location. Plan the power supply, antenna and cable route. A phone on a different network is not a complete signal test for the installation.  Phone entry may avoid dependence on home Wi-Fi, but it still depends on its own network, equipment and power. Agree a fallback for outages and confirm any backup maintenance. ",
    " Record who owns the SIM and administrator account. Demonstrate adding and removing users using the supplied instructions. Confirm recurring charges and how support handles a change of phone number or ownership.  Read the  phone-entry buying checklist  or compare  intercom options  before you  discuss your entrance . "
  ],
  "benefits": [
    {
      "title": "Decide how phone entry should work",
      "desc": " Discuss whether you want authorised callers to request opening, a visitor intercom that calls residents, or both. Ask how the proposed system identifies a caller and what happens if nobody answers.  A phone command does not confirm physical gate position. Agree how the household recognises a failed opening and how visitors obtain help. "
    },
    {
      "title": "Confirm the supported network and plan",
      "desc": " Identify the exact device and the voice, SMS or data services it needs. Check the SIM provider’s requirements, tariff and account-expiry conditions. Calls or messages should not be described as universally free.  Read  Ofcom’s mobile-network retirement guidance  and obtain product-specific support information. The word GSM is often used for phone entry generally; confirm which network technology the proposed unit actually uses. "
    },
    {
      "title": "Survey signal and fallback access",
      "desc": " Test the proposed service at the equipment location. Plan the power supply, antenna and cable route. A phone on a different network is not a complete signal test for the installation.  Phone entry may avoid dependence on home Wi-Fi, but it still depends on its own network, equipment and power. Agree a fallback for outages and confirm any backup maintenance. "
    },
    {
      "title": "Hand over account control",
      "desc": " Record who owns the SIM and administrator account. Demonstrate adding and removing users using the supplied instructions. Confirm recurring charges and how support handles a change of phone number or ownership.  Read the  phone-entry buying checklist  or compare  intercom options  before you  discuss your entrance . "
    }
  ],
  "faqs": [
    {
      "question": "Will any SIM work?",
      "answer": "Check the model, supported network services and tariff terms together. Not every SIM or plan supports every gate device."
    },
    {
      "question": "Is phone entry independent of power and broadband?",
      "answer": "It may not need home broadband, but the gate and phone-entry equipment still need power and the required mobile service."
    },
    {
      "question": "Are opening calls free?",
      "answer": "That depends on how the product handles calls and the applicable tariffs. Confirm the charges rather than assuming a missed-call arrangement."
    }
  ],
  "imageAlt": "Homeowner opening a driveway gate remotely with a mobile phone",
  "updatedDate": "2026-10-02"
},
  {
  "id": "anpr-systems",
  "slug": "anpr-systems",
  "title": "ANPR Gate Entry Systems",
  "metaTitle": "ANPR Gate Entry Systems | Driveway Gates London",
  "metaDescription": "Number-plate entry planned around camera position, authorised vehicles, safe waiting and access-data management.",
  "description": "Number-plate entry planned around camera position, authorised vehicles, safe waiting and access-data management.",
  "image": "/showcase/assets/content/anpr-systems-34a9163.webp",
  "intro": [
    "ANPR reads a vehicle registration and checks it against access permissions. It does not establish who is driving or prevent a second vehicle following the first. Decide where the driver waits and how entry works if a plate is not read. Do not assume a vehicle can drive through without stopping. Camera recognition, the command to the controller and safe gate movement are separate parts of the sequence. Include visitors, deliveries and pedestrian access in the plan.",
    "Survey camera position, approach angle, lighting, headlight glare, stopping distance and the expected plate types. Ask the supplier to demonstrate the proposed equipment under the conditions that matter at your site. A manufacturer’s performance figure under defined test conditions is not a guarantee for every vehicle or weather condition. Agree a keypad, intercom or other authorised fallback.",
    "Decide who can add, remove and review authorised registrations. Confirm expiry for temporary vehicles, administrator access and account recovery. Ask whether the system records images or events, where it stores them and how long it keeps them. Where data-protection law applies, the operator must address the purpose, lawful use, notice, retention and access controls. Consult ICO video-surveillance guidance . A product label does not make the whole installation compliant.",
    "Include camera and controller models, network and power, gate interface, subscriptions, commissioning and user training. Confirm ongoing support and the effect of connection or power failure. Compare video entry and keypads for visitors. Send your entrance layout and expected use when you discuss your entrance.",
    "User Permission arrangement to agree Fallback to plan Resident or regular staff vehicle Who enters and removes registrations, including replacement cars. An authorised alternative if a plate is not recognised. Expected visitor Whether a temporary registration can be approved and expired. An intercom call or staffed confirmation. Delivery driver Whether the vehicle is known in advance and who accepts the delivery. A safe waiting point and a way to contact the recipient. Contractor or hired vehicle Time-limited access if supported, with a named approver. A process for an unexpected registration change. Do not publish a broad permanent permission list simply to reduce administration. Ask the supplier to demonstrate adding, correcting and removing a registration using the proposed system. Agree which person handles a resident changing car at short notice.",
    "Draw the vehicle approach, waiting point and path through the entrance. Explain whether the same gate serves both directions and how a departing vehicle interacts with an arriving one. Include the busiest expected period rather than only a single test car on an empty driveway. Ask the installer what triggers entry, how exit works and which component determines whether the gate can move safely. An accepted registration is permission to request entry; it is not confirmation that a person or another vehicle is clear of the gate. Agree what happens when the network, recognition service or power is unavailable. Specify the authorised fallback and the person who receives a fault report. Avoid leaving an unexpected visitor with no way to call for help from the waiting position.",
    "Request camera, processing and controller models, installation work, connectivity, licences and support terms in the quotation. Confirm which functions run locally and which depend on another service. Ask what changes if a subscription ends or the site changes its broadband provider. The site operator should understand whether images, registrations and access events are retained, who can retrieve them and how deletion works. Record administration and account recovery arrangements at handover. Review access permissions when staff, residents or contractors leave, rather than allowing an old vehicle list to become the default."
  ],
  "benefits": [
    {
      "title": "Plan the approach and fallback",
      "desc": " ANPR reads a vehicle registration and checks it against access permissions. It does not establish who is driving or prevent a second vehicle following the first. Decide where the driver waits and how entry works if a plate is not read.  Do not assume a vehicle can drive through without stopping. Camera recognition, the command to the controller and safe gate movement are separate parts of the sequence. Include visitors, deliveries and pedestrian access in the plan. "
    },
    {
      "title": "Check recognition at the actual entrance",
      "desc": " Survey camera position, approach angle, lighting, headlight glare, stopping distance and the expected plate types. Ask the supplier to demonstrate the proposed equipment under the conditions that matter at your site.  A manufacturer’s performance figure under defined test conditions is not a guarantee for every vehicle or weather condition. Agree a keypad, intercom or other authorised fallback. "
    },
    {
      "title": "Manage permissions and records",
      "desc": " Decide who can add, remove and review authorised registrations. Confirm expiry for temporary vehicles, administrator access and account recovery. Ask whether the system records images or events, where it stores them and how long it keeps them.  Where data-protection law applies, the operator must address the purpose, lawful use, notice, retention and access controls. Consult  ICO video-surveillance guidance . A product label does not make the whole installation compliant. "
    },
    {
      "title": "Specify the complete installation",
      "desc": " Include camera and controller models, network and power, gate interface, subscriptions, commissioning and user training. Confirm ongoing support and the effect of connection or power failure.  Compare  video entry  and  keypads  for visitors. Send your entrance layout and expected use when you  discuss your entrance . "
    }
  ],
  "faqs": [
    {
      "question": "Will ANPR read every plate?",
      "answer": "Recognition depends on the camera, setup, approach, lighting, plate condition and supported plate formats. Test the actual proposal and agree a fallback."
    },
    {
      "question": "Can cars enter without stopping?",
      "answer": "Do not assume this. The design must provide a suitable approach and waiting arrangement while recognition and safe gate movement take place."
    },
    {
      "question": "Does ANPR replace gate safety devices?",
      "answer": "No. Permission to enter is separate from the protective measures and checks required for the powered entrance."
    }
  ],
  "imageAlt": "Car approaching a London driveway gate fitted with ANPR access control",
  "updatedDate": "2026-10-13"
},
];

export const accessControlServices: AccessControlService[] = accessControlEntries.map(service => {
  const featured = accessControlFeaturedImages[service.slug];
  return featured ? { ...service, image: featured.src, imageAlt: featured.alt } : service;
});

export function getAccessControlBySlug(slug: string): AccessControlService | undefined {
  return accessControlServices.find(s => s.slug === slug);
}
