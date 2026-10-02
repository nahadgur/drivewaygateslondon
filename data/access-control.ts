import { accessControlFeaturedImages } from './featuredImages';

export interface AccessControlService {
  id: string;
  slug: string;
  title: string;
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
  "image": "/images/access-control/video-intercoms.webp",
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
  "metaTitle": "Keypad Entry Systems | Driveway Gates London",
  "metaDescription": "Code-based gate access with user management, weather exposure and controller compatibility specified for your property.",
  "description": "Code-based gate access with user management, weather exposure and controller compatibility specified for your property.",
  "image": "/images/access-control/keypad-entry-systems.webp",
  "intro": [
    " Decide who needs permanent access and who should have temporary permission. Ask whether the selected keypad supports separate users, expiry or time windows. Those functions vary by model.  Avoid one shared code for everyone if you need to remove an individual’s access. Agree who can change settings and how you recover administrator control. ",
    " Discuss pedestrian and driver use, reach, lighting and the position relative to moving leaves. Visitors should not need to reach through a gate or stand in its movement path to enter a code.  Confirm the enclosure rating, operating conditions and mounting requirements for the actual product. There is no single weather rating we can promise for every proposed keypad. ",
    " The installer needs to assess the control interface, power, wiring and the existing gate’s condition. Code acceptance requests entry; it does not replace the protective measures needed for powered movement.  Ask what happens after repeated incorrect attempts, loss of power or a controller fault. Agree an authorised alternative for residents and visitors. ",
    " Request model details, programming, instructions and written support terms. At handover, practise adding and removing a user, replacing the initial codes and recovering access.  Compare  video entry  for visitors you want to speak with and our  delivery-access guide  for couriers. Then  discuss your entrance . "
  ],
  "benefits": [
    {
      "title": "Choose how you will manage codes",
      "desc": " Decide who needs permanent access and who should have temporary permission. Ask whether the selected keypad supports separate users, expiry or time windows. Those functions vary by model.  Avoid one shared code for everyone if you need to remove an individual’s access. Agree who can change settings and how you recover administrator control. "
    },
    {
      "title": "Place the keypad for its users",
      "desc": " Discuss pedestrian and driver use, reach, lighting and the position relative to moving leaves. Visitors should not need to reach through a gate or stand in its movement path to enter a code.  Confirm the enclosure rating, operating conditions and mounting requirements for the actual product. There is no single weather rating we can promise for every proposed keypad. "
    },
    {
      "title": "Check the gate connection",
      "desc": " The installer needs to assess the control interface, power, wiring and the existing gate’s condition. Code acceptance requests entry; it does not replace the protective measures needed for powered movement.  Ask what happens after repeated incorrect attempts, loss of power or a controller fault. Agree an authorised alternative for residents and visitors. "
    },
    {
      "title": "Include setup and handover",
      "desc": " Request model details, programming, instructions and written support terms. At handover, practise adding and removing a user, replacing the initial codes and recovering access.  Compare  video entry  for visitors you want to speak with and our  delivery-access guide  for couriers. Then  discuss your entrance . "
    }
  ],
  "faqs": [
    {
      "question": "Can delivery codes expire automatically?",
      "answer": "Some models support expiry or time schedules. Specify that requirement and have the supplier demonstrate it before accepting the configuration."
    },
    {
      "question": "How many users can I add?",
      "answer": "Capacity and whether users have separate codes depend on the selected model. Confirm the limit in the product specification."
    },
    {
      "question": "Can a keypad be fitted to an existing gate?",
      "answer": "Compatibility, power, wiring and safe operation need assessment before installation."
    }
  ],
  "imageAlt": "Homeowner entering a PIN on a driveway-gate keypad in London",
  "updatedDate": "2026-10-02"
},
  {
  "id": "gsm-phone-entry",
  "slug": "gsm-phone-entry",
  "title": "GSM Phone Entry Systems",
  "metaTitle": "GSM Phone Entry Systems | Driveway Gates London",
  "metaDescription": "Phone-based gate entry with the device, signal, SIM plan and user permissions checked for your entrance.",
  "description": "Phone-based gate entry with the device, signal, SIM plan and user permissions checked for your entrance.",
  "image": "/images/access-control/gsm-phone-entry.webp",
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
  "image": "/images/access-control/anpr-systems.webp",
  "intro": [
    " ANPR reads a vehicle registration and checks it against access permissions. It does not establish who is driving or prevent a second vehicle following the first. Decide where the driver waits and how entry works if a plate is not read.  Do not assume a vehicle can drive through without stopping. Camera recognition, the command to the controller and safe gate movement are separate parts of the sequence. Include visitors, deliveries and pedestrian access in the plan. ",
    " Survey camera position, approach angle, lighting, headlight glare, stopping distance and the expected plate types. Ask the supplier to demonstrate the proposed equipment under the conditions that matter at your site.  A manufacturer’s performance figure under defined test conditions is not a guarantee for every vehicle or weather condition. Agree a keypad, intercom or other authorised fallback. ",
    " Decide who can add, remove and review authorised registrations. Confirm expiry for temporary vehicles, administrator access and account recovery. Ask whether the system records images or events, where it stores them and how long it keeps them.  Where data-protection law applies, the operator must address the purpose, lawful use, notice, retention and access controls. Consult  ICO video-surveillance guidance . A product label does not make the whole installation compliant. ",
    " Include camera and controller models, network and power, gate interface, subscriptions, commissioning and user training. Confirm ongoing support and the effect of connection or power failure.  Compare  video entry  and  keypads  for visitors. Send your entrance layout and expected use when you  discuss your entrance . "
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
  "updatedDate": "2026-10-02"
},
];

export const accessControlServices: AccessControlService[] = accessControlEntries.map(service => {
  const featured = accessControlFeaturedImages[service.slug];
  return featured ? { ...service, image: featured.src, imageAlt: featured.alt } : service;
});

export function getAccessControlBySlug(slug: string): AccessControlService | undefined {
  return accessControlServices.find(s => s.slug === slug);
}
