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
  "headline": "Video Intercoms for Gates in London",
  "metaTitle": "Video Intercoms for Gates in London | Driveway Gates London",
  "metaDescription": "Video intercoms for gates in London: see and speak to visitors from a monitor or your phone, two-wire, IP and 4G systems, cabling, recording and costs.",
  "description": "See and speak to visitors through a video-entry system specified for your gate, network and household.",
  "image": "/showcase/assets/content/video-intercoms-dd5d897.webp",
  "intro": [
    "A visitor presses the call button on a panel at the gate. The panel has a camera, microphone and speaker. The call rings on one or more screens inside the house and, on most modern systems, on your phone through an app. You see and speak to the visitor, then press a button to open the driveway gate, the pedestrian gate or both. The intercom simply tells the gate’s control panel to open, just like a remote. The gate’s own safety devices still control how it moves.",
    "Two-wire systems send video, audio and power along a single pair of cables. They’re robust and reliable over long distances, often more than 100 metres, which suits long drives. They’re also ideal where an old intercom cable already runs from the gate to the house and can be reused. Comelit, Videx and Fermax all make well-regarded two-wire ranges. Many now add app calling through a gateway unit. IP systems run over network cable, usually a single external-grade Cat6 cable carrying data and power (Power over Ethernet) up to about 100 metres. They give the sharpest video, app calling, multiple monitors, recording and easy integration with CCTV, and are increasingly the default for new installations. Hikvision, Akuvox, 2N and DoorBird are common choices. Wireless and Wi-Fi systems avoid digging a cable trench, but a gate is often 20 to 50 metres from the house, sometimes behind brick walls and metal gates. Home Wi-Fi rarely reaches reliably. Where trenching isn’t practical, a point-to-point wireless link (a pair of small dishes) is far more dependable than Wi-Fi. For gates with no cable route at all, a 4G video intercom works over the mobile network instead. See GSM phone entry .",
    "Most of the work in a video intercom installation is the cable route. The cable runs in a duct, usually under the drive or along a boundary, from the gate to the point where it enters the house. If you’re having the drive relaid or new gates installed, put the duct in then. It costs far less than lifting paving later. We survey the route, check any existing cables and agree where the indoor monitor and network connection will go before quoting.",
    "Choose an external panel built for life outdoors on a street. It should be weatherproof (IP65 or better) and vandal-resistant, with a wide-angle camera, infrared night vision so you can see faces after dark, and wide dynamic range so a visitor isn’t just a silhouette against bright sky or headlights. Panels can include a keypad or fob reader, so the same unit handles visitors and residents. Mount the panel at around 1.4 to 1.5 metres for people on foot. For drivers, fit a second panel on a gooseneck post at car-window height, or mount it where the driver can reach it without leaving the car or stopping across the pavement. On commercial sites, a third panel at lorry-cab height is common. See car park barriers .",
    "Indoor monitors range from simple 4 or 7-inch screens to 10-inch touchscreens that can also show CCTV cameras. You can have several, such as one in the kitchen, one upstairs and one in a home office, and they can all ring together or in sequence. Monitors can also act as an internal intercom between rooms.",
    "App calling forwards the call to your phone, so you can let in a delivery driver or cleaner while you’re out. It relies on the gate panel having a network connection and your phone getting the notification. Expect a few seconds’ delay compared with an indoor monitor, and make sure the system will still ring the indoor monitor if your broadband goes down. Some apps need a subscription for remote access or cloud recordings. We’ll tell you exactly what’s included before you buy.",
    "The intercom connects to the gate’s control panel to open the gate. It can also connect to a second relay for an electric lock on a pedestrian gate . Most modern gate control panels from the main manufacturers accept an intercom without difficulty. Older or unusual ones sometimes need an interface or an upgrade, which we check at survey. If you want the intercom to show whether the gate is actually open or closed, that needs a gate position sensor wired back to the intercom, and not every system supports it.",
    "Many systems save a snapshot or short video clip each time someone calls, either on a memory card in the monitor, on a recorder or in the cloud. That’s useful for checking deliveries and visitors you missed. If the camera captures images beyond your property, such as the street or a neighbour’s house, data protection law applies even at home. The ICO’s guidance on domestic CCTV explains your responsibilities. We angle cameras to cover the visitor, not the pavement opposite, and many panels let you mask out areas you don’t want recorded.",
    "As a rough guide, a two-wire video intercom with one indoor monitor, connected to an existing gate, typically costs £900 to £2,000 installed. IP systems with app calling and multiple monitors usually cost £1,500 to £3,500. Premium panels with integrated keypads, fob readers and high-end cameras run £2,500 to £5,000. Trenching, ducting and reinstating the drive are itemised separately, and any app or cloud subscriptions are shown in the quote. Our intercom buying guide and Comelit vs Hikvision comparison go into the brands in more detail."
  ],
  "benefits": [
    {
      "title": "How it works",
      "desc": "A visitor presses the call button on a panel at the gate. The panel has a camera, microphone and speaker. The call rings on one or more screens inside the house and, on most modern systems, on your phone through an app. You see and speak to the visitor, then press a button to open the driveway gate, the pedestrian gate or both. The intercom simply tells the gate’s control panel to open, just like a remote. The gate’s own safety devices still control how it moves."
    },
    {
      "title": "Types of system",
      "desc": "Two-wire systems send video, audio and power along a single pair of cables. They’re robust and reliable over long distances, often more than 100 metres, which suits long drives. They’re also ideal where an old intercom cable already runs from the gate to the house and can be reused. Comelit, Videx and Fermax all make well-regarded two-wire ranges. Many now add app calling through a gateway unit. IP systems run over network cable, usually a single external-grade Cat6 cable carrying data and power (Power over Ethernet) up to about 100 metres. They give the sharpest video, app calling, multiple monitors, recording and easy integration with CCTV, and are increasingly the default for new installations. Hikvision, Akuvox, 2N and DoorBird are common choices. Wireless and Wi-Fi systems avoid digging a cable trench, but a gate is often 20 to 50 metres from the house, sometimes behind brick walls and metal gates. Home Wi-Fi rarely reaches reliably. Where trenching isn’t practical, a point-to-point wireless link (a pair of small dishes) is far more dependable than Wi-Fi. For gates with no cable route at all, a 4G video intercom works over the mobile network instead. See GSM phone entry ."
    },
    {
      "title": "Getting the signal to the house",
      "desc": "Most of the work in a video intercom installation is the cable route. The cable runs in a duct, usually under the drive or along a boundary, from the gate to the point where it enters the house. If you’re having the drive relaid or new gates installed, put the duct in then. It costs far less than lifting paving later. We survey the route, check any existing cables and agree where the indoor monitor and network connection will go before quoting."
    },
    {
      "title": "The gate panel",
      "desc": "Choose an external panel built for life outdoors on a street. It should be weatherproof (IP65 or better) and vandal-resistant, with a wide-angle camera, infrared night vision so you can see faces after dark, and wide dynamic range so a visitor isn’t just a silhouette against bright sky or headlights. Panels can include a keypad or fob reader, so the same unit handles visitors and residents. Mount the panel at around 1.4 to 1.5 metres for people on foot. For drivers, fit a second panel on a gooseneck post at car-window height, or mount it where the driver can reach it without leaving the car or stopping across the pavement. On commercial sites, a third panel at lorry-cab height is common. See car park barriers ."
    },
    {
      "title": "Inside the house",
      "desc": "Indoor monitors range from simple 4 or 7-inch screens to 10-inch touchscreens that can also show CCTV cameras. You can have several, such as one in the kitchen, one upstairs and one in a home office, and they can all ring together or in sequence. Monitors can also act as an internal intercom between rooms."
    },
    {
      "title": "Answering on your phone",
      "desc": "App calling forwards the call to your phone, so you can let in a delivery driver or cleaner while you’re out. It relies on the gate panel having a network connection and your phone getting the notification. Expect a few seconds’ delay compared with an indoor monitor, and make sure the system will still ring the indoor monitor if your broadband goes down. Some apps need a subscription for remote access or cloud recordings. We’ll tell you exactly what’s included before you buy."
    },
    {
      "title": "Linking to the gate",
      "desc": "The intercom connects to the gate’s control panel to open the gate. It can also connect to a second relay for an electric lock on a pedestrian gate . Most modern gate control panels from the main manufacturers accept an intercom without difficulty. Older or unusual ones sometimes need an interface or an upgrade, which we check at survey. If you want the intercom to show whether the gate is actually open or closed, that needs a gate position sensor wired back to the intercom, and not every system supports it."
    },
    {
      "title": "Recording and privacy",
      "desc": "Many systems save a snapshot or short video clip each time someone calls, either on a memory card in the monitor, on a recorder or in the cloud. That’s useful for checking deliveries and visitors you missed. If the camera captures images beyond your property, such as the street or a neighbour’s house, data protection law applies even at home. The ICO’s guidance on domestic CCTV explains your responsibilities. We angle cameras to cover the visitor, not the pavement opposite, and many panels let you mask out areas you don’t want recorded."
    },
    {
      "title": "Rough costs of video intercom systems in London",
      "desc": "As a rough guide, a two-wire video intercom with one indoor monitor, connected to an existing gate, typically costs £900 to £2,000 installed. IP systems with app calling and multiple monitors usually cost £1,500 to £3,500. Premium panels with integrated keypads, fob readers and high-end cameras run £2,500 to £5,000. Trenching, ducting and reinstating the drive are itemised separately, and any app or cloud subscriptions are shown in the quote. Our intercom buying guide and Comelit vs Hikvision comparison go into the brands in more detail."
    }
  ],
  "faqs": [
    {
      "question": "Can a video intercom work with my existing gate?",
      "answer": "Almost always, with modern gate control panels. Older or unusual control panels sometimes need an interface. We check the make and model at survey."
    },
    {
      "question": "Can I answer the gate from my phone?",
      "answer": "Yes, with an IP system or a two-wire system with an app gateway. You’ll need broadband at the house (or a 4G intercom), and some apps charge a subscription."
    },
    {
      "question": "Do I need a cable from the gate to the house?",
      "answer": "For the most reliable system, yes, run in a duct. Where that’s not possible, a point-to-point wireless link or a 4G intercom are good alternatives. Home Wi-Fi usually isn’t reliable enough."
    },
    {
      "question": "Can I reuse my old intercom cable?",
      "answer": "Often, with a two-wire system designed for exactly that. We test the existing cable first."
    },
    {
      "question": "Does it record visitors?",
      "answer": "Many systems save a snapshot or clip for every call. Continuous recording usually needs a CCTV recorder. Check which you’re getting before you buy."
    },
    {
      "question": "Can it open a pedestrian gate too?",
      "answer": "Yes. Most intercoms have two outputs, one for the driveway gate and one for a pedestrian gate lock."
    }
  ],
  "imageAlt": "Homeowner speaking to a visitor through a driveway-gate video intercom",
  "updatedDate": "2026-11-09"
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
      "title": "Cost of keypad entry for electric gates in London",
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
  "headline": "GSM Phone Entry for Gates in London",
  "metaTitle": "GSM Phone Entry for Gates in London | Driveway Gates London",
  "metaDescription": "GSM phone entry for gates in London: 4G openers and intercoms that open your gate from any mobile, user management, SIM costs, signal checks and prices.",
  "description": "Phone-based gate entry with the device, signal, SIM plan and user permissions checked for your entrance.",
  "image": "/showcase/assets/content/gsm-phone-entry-f32fe18.webp",
  "intro": [
    "A GSM gate opener is a small unit wired into the gate’s control panel. You store a list of authorised phone numbers in it. When one of those numbers calls the unit, it recognises the caller ID, rejects the call and opens the gate. The call is never answered, so it normally costs the caller nothing. Calls from unknown numbers are ignored. It’s the simplest and cheapest way to give lots of people keyless access. A GSM intercom adds a call panel at the gate for visitors. When someone presses the button, the unit rings your mobile (and then other numbers in turn if you don’t answer). You talk to the visitor and press a key on your phone to open the gate. Most GSM intercoms also work as an opener for authorised numbers. Video versions send a live picture to an app on your phone; see video intercoms .",
    "Depending on the model, a GSM unit holds anywhere from a few hundred to several thousand phone numbers. Better units let you restrict numbers to set days and times (a cleaner on Tuesday mornings only), set numbers to expire on a date, and keep a log of who opened the gate and when. Most are managed by text message, a phone app or a web portal, so you can add or remove someone in seconds from wherever you are. When a carer or tenant leaves, you delete their number and their access stops immediately. Some units can also tell you whether the gate actually opened. They do this by connecting to the gate’s position sensor and texting you a confirmation. That’s worth having if you open the gate remotely for deliveries and can’t see it.",
    "“GSM” originally meant the 2G mobile network, and many gate units still run on it. UK networks have now switched off 3G, and 2G will follow. The government’s agreement with the operators keeps 2G running until 2033 at the latest, but some services may wind down sooner. A unit bought today should be a 4G model, ideally one that supports voice calls over 4G (VoLTE), so it isn’t left stranded when older networks close. If you have an older 3G unit, it has almost certainly already stopped working. Ofcom’s switch-off guidance has the background.",
    "The unit needs a SIM card that supports the services it uses: voice calls for opening and intercom calls, and texts for programming and alerts. Data is also needed for app-based models. A cheap SIM-only contract of a few pounds a month is the most reliable choice. Pay-as-you-go SIMs work, but many networks deactivate them if they’re not topped up or used for several months. A pay-as-you-go SIM in a gate that’s only opened by free rejected calls can quietly expire. Auto top-up avoids that. Intercom calls to your mobile come out of the gate SIM’s allowance, so busy entrances need a plan with enough minutes. We record who owns the SIM and the admin account at handover. That way, if you move house or change installers, control of the system goes with the property and not with whoever set it up.",
    "The unit only works as well as the mobile signal where it’s installed. Before installation, we test signal strength on the network you’ll use, in the exact position of the unit. A good signal on your own phone in the house is not the same test. Gate posts, metal enclosures and basement car parks can block reception. Where signal is weak, an external antenna on a short cable to a better spot usually solves it, or a different network can be used. GSM entry doesn’t depend on home Wi-Fi or broadband, which is its big advantage over Wi-Fi gate systems. It does still need power. If the gate has battery backup, the GSM unit can usually run from it during a power cut. For the rare network outage, keep a remote or keypad as a backup way in. See keypad entry .",
    "GSM entry is as secure as the phones on its list. Keep the list up to date and remove numbers as soon as someone no longer needs access. Caller ID can in principle be faked, so for higher-security properties choose a unit that can require a PIN code during the call, or app control with proper log-in. Pairing GSM with a video intercom means you can see who you’re letting in rather than relying on a voice.",
    "GSM entry suits homes with lots of regular visitors, holiday lets and Airbnb properties, where guest numbers can be added for the length of a stay. It’s also popular for elderly relatives with carers visiting at different times, shared driveways and small blocks of flats, and rural or outbuilding gates where broadband doesn’t reach. It works with any modern electric gate or barrier, including swing gates , sliding gates and car park barriers .",
    "As a rough guide, a 4G GSM gate opener added to an existing electric gate typically costs £400 to £900 installed. An audio GSM intercom with a call panel is usually £900 to £1,800, and a 4G video intercom with app control £1,500 to £3,000. Add the SIM plan, usually a few pounds a month. Extra cabling, antennas and battery backup are itemised in the quote. Established makers such as AES, Videx and 2N all offer UK-supported 4G units."
  ],
  "benefits": [
    {
      "title": "Two kinds of GSM system",
      "desc": "A GSM gate opener is a small unit wired into the gate’s control panel. You store a list of authorised phone numbers in it. When one of those numbers calls the unit, it recognises the caller ID, rejects the call and opens the gate. The call is never answered, so it normally costs the caller nothing. Calls from unknown numbers are ignored. It’s the simplest and cheapest way to give lots of people keyless access. A GSM intercom adds a call panel at the gate for visitors. When someone presses the button, the unit rings your mobile (and then other numbers in turn if you don’t answer). You talk to the visitor and press a key on your phone to open the gate. Most GSM intercoms also work as an opener for authorised numbers. Video versions send a live picture to an app on your phone; see video intercoms ."
    },
    {
      "title": "Managing who can get in",
      "desc": "Depending on the model, a GSM unit holds anywhere from a few hundred to several thousand phone numbers. Better units let you restrict numbers to set days and times (a cleaner on Tuesday mornings only), set numbers to expire on a date, and keep a log of who opened the gate and when. Most are managed by text message, a phone app or a web portal, so you can add or remove someone in seconds from wherever you are. When a carer or tenant leaves, you delete their number and their access stops immediately. Some units can also tell you whether the gate actually opened. They do this by connecting to the gate’s position sensor and texting you a confirmation. That’s worth having if you open the gate remotely for deliveries and can’t see it."
    },
    {
      "title": "The network switch-off",
      "desc": "“GSM” originally meant the 2G mobile network, and many gate units still run on it. UK networks have now switched off 3G, and 2G will follow. The government’s agreement with the operators keeps 2G running until 2033 at the latest, but some services may wind down sooner. A unit bought today should be a 4G model, ideally one that supports voice calls over 4G (VoLTE), so it isn’t left stranded when older networks close. If you have an older 3G unit, it has almost certainly already stopped working. Ofcom’s switch-off guidance has the background."
    },
    {
      "title": "SIM cards and running costs",
      "desc": "The unit needs a SIM card that supports the services it uses: voice calls for opening and intercom calls, and texts for programming and alerts. Data is also needed for app-based models. A cheap SIM-only contract of a few pounds a month is the most reliable choice. Pay-as-you-go SIMs work, but many networks deactivate them if they’re not topped up or used for several months. A pay-as-you-go SIM in a gate that’s only opened by free rejected calls can quietly expire. Auto top-up avoids that. Intercom calls to your mobile come out of the gate SIM’s allowance, so busy entrances need a plan with enough minutes. We record who owns the SIM and the admin account at handover. That way, if you move house or change installers, control of the system goes with the property and not with whoever set it up."
    },
    {
      "title": "Signal, power and reliability",
      "desc": "The unit only works as well as the mobile signal where it’s installed. Before installation, we test signal strength on the network you’ll use, in the exact position of the unit. A good signal on your own phone in the house is not the same test. Gate posts, metal enclosures and basement car parks can block reception. Where signal is weak, an external antenna on a short cable to a better spot usually solves it, or a different network can be used. GSM entry doesn’t depend on home Wi-Fi or broadband, which is its big advantage over Wi-Fi gate systems. It does still need power. If the gate has battery backup, the GSM unit can usually run from it during a power cut. For the rare network outage, keep a remote or keypad as a backup way in. See keypad entry ."
    },
    {
      "title": "Security",
      "desc": "GSM entry is as secure as the phones on its list. Keep the list up to date and remove numbers as soon as someone no longer needs access. Caller ID can in principle be faked, so for higher-security properties choose a unit that can require a PIN code during the call, or app control with proper log-in. Pairing GSM with a video intercom means you can see who you’re letting in rather than relying on a voice."
    },
    {
      "title": "Where GSM works well",
      "desc": "GSM entry suits homes with lots of regular visitors, holiday lets and Airbnb properties, where guest numbers can be added for the length of a stay. It’s also popular for elderly relatives with carers visiting at different times, shared driveways and small blocks of flats, and rural or outbuilding gates where broadband doesn’t reach. It works with any modern electric gate or barrier, including swing gates , sliding gates and car park barriers ."
    },
    {
      "title": "Cost of GSM phone entry in London",
      "desc": "As a rough guide, a 4G GSM gate opener added to an existing electric gate typically costs £400 to £900 installed. An audio GSM intercom with a call panel is usually £900 to £1,800, and a 4G video intercom with app control £1,500 to £3,000. Add the SIM plan, usually a few pounds a month. Extra cabling, antennas and battery backup are itemised in the quote. Established makers such as AES, Videx and 2N all offer UK-supported 4G units."
    }
  ],
  "faqs": [
    {
      "question": "Will any SIM card work?",
      "answer": "Most standard SIMs from the main networks work, as long as the plan covers voice and text and suits the unit. Avoid data-only SIMs, and be careful with pay-as-you-go SIMs that expire if they’re not used."
    },
    {
      "question": "Does it cost anything to open the gate?",
      "answer": "With a standard GSM opener, no. The unit rejects your call, so it isn’t answered or charged. Intercom calls from the gate to your mobile use the gate SIM’s minutes."
    },
    {
      "question": "Do I need broadband or Wi-Fi?",
      "answer": "No. The unit uses the mobile network. It does need power, and a mobile signal at the gate."
    },
    {
      "question": "Will the network switch-off affect my system?",
      "answer": "3G units have already stopped working. 2G units will stop working by 2033 at the latest. Any new unit should be 4G with voice over 4G (VoLTE) support."
    },
    {
      "question": "How many people can I add?",
      "answer": "Usually hundreds and often thousands of numbers, depending on the model. Each one can be given time limits or removed individually."
    },
    {
      "question": "Can I open the gate from abroad?",
      "answer": "Yes. If your phone can make a call or use the app, it can open the gate from anywhere."
    }
  ],
  "imageAlt": "Homeowner opening a driveway gate remotely with a mobile phone",
  "updatedDate": "2026-11-09"
},
  {
  "id": "anpr-systems",
  "slug": "anpr-systems",
  "title": "ANPR Gate Entry Systems",
  "headline": "ANPR Gate Entry in London",
  "metaTitle": "ANPR Gate Entry in London | Driveway Gates London",
  "metaDescription": "ANPR gate entry in London: number plate recognition for electric gates and barriers, camera placement, visitor access, GDPR, safety and typical costs.",
  "description": "Number-plate entry planned around camera position, authorised vehicles, safe waiting and access-data management.",
  "image": "/showcase/assets/content/anpr-systems-34a9163.webp",
  "intro": [
    "A dedicated ANPR camera watches the approach to the gate. It uses infrared light to read the reflective number plate clearly, day or night. Software reads the registration and checks it against a list of authorised vehicles. If it matches, the system sends an open signal to the gate’s control panel, exactly like pressing a remote. Unknown plates are ignored, logged, or passed to an intercom so the driver can call the house or reception. This isn’t ordinary CCTV with software added. ANPR cameras use fast shutters and infrared lighting tuned to reading plates. A general security camera pointed at the drive will struggle, especially at night and with moving cars.",
    "Most of an ANPR system’s reliability comes down to where the camera goes. It needs a clear view of the front plate as the car approaches, from a fairly shallow angle. It’s typically mounted on a post or wall at around bumper-to-roof height, 3 to 10 metres from where the car will be when the plate is read. Too steep an angle, a camera looking into low sun or headlights, or a bend in the approach all reduce read rates. We survey the approach, test the position and set up the camera on site with real vehicles before handover.",
    "A well-installed system reads clean, standard UK plates very reliably. Reads fail on dirty or damaged plates, plates partly hidden by a towbar or bike rack, and illegal “show plates” with altered fonts or spacing. Foreign plates may also be missed. Motorbikes have no front plate, so they need another way in, or a camera placed to read the rear. That’s why every ANPR installation should keep a backup: a remote, keypad , GSM phone entry or intercom , so a missed read is a minor inconvenience, not a locked-out driver.",
    "With a barrier , ANPR feels almost seamless. The barrier opens in a few seconds and most cars barely stop. With a swing or sliding gate , the gate still takes 15 to 25 seconds to open, so you’ll usually wait a short time unless the camera reads your plate well before you reach the gate. Placing the camera further down the approach helps where there’s room. Either way, the gate is designed to open fully before you drive through, and the car should never be waiting on the pavement or road. Exit is usually automatic, triggered by a sensor loop in the drive or an exit button, so you don’t need a second camera unless you want exit logs.",
    "You manage the list of authorised plates through an app or web portal. Good systems make the everyday changes simple. You can add a new car, remove a sold one, or give a builder’s van access for the next three weeks only. Visitors expected on a particular day can be added with an expiry time, so their access stops automatically. Unknown vehicles can trigger the intercom or send a notification to your phone with a photo, so you can let them in with a tap. Many systems also tell you when a family member’s car has arrived home. For residential developments and commercial sites, sort out early who has permission to add and remove plates, how residents or staff register a new car, and how quickly leavers are removed. A list that’s never reviewed gradually lets in people who should no longer have access.",
    "ANPR handles vehicles you know about. For everyone else, pair it with an intercom placed where a visiting driver can reach it from the car window. Couriers and delivery drivers usually come in unknown vans, so a video intercom or GSM intercom that rings your phone is the practical answer. Our parcel delivery access guide covers this in more detail.",
    "Some ANPR systems do everything on the camera or a small unit on site, so they keep working if your internet goes down. Others use a cloud service for the plate list, the app and the logs, which makes remote management easy but adds a monthly subscription and depends on your connection. Many systems combine the two: plates are checked locally and synced from the cloud. We’ll explain which parts of the system you’re paying for monthly, and what still works if the subscription ends or the broadband fails.",
    "Number plates are personal data. On commercial sites and residential developments, the site operator is responsible for using ANPR lawfully under UK GDPR. That means signs telling drivers ANPR is in use, a clear reason for collecting the data, a set retention period for plate images and logs, and control over who can see them. For a private home, the ICO’s guidance is that data protection law applies if the camera captures images beyond your own property boundary, such as the public road. We aim cameras to cover your approach and as little of the street as possible, and set sensible retention periods by default. The ICO’s guidance on video surveillance sets out the full requirements.",
    "ANPR decides whether a car is allowed to enter. It doesn’t decide whether the gate is safe to move. That’s still the job of the gate’s photocells, safety edges and force limits , tested to BS EN 12453. ANPR also doesn’t stop a second car following the first through an open gate, so on sites where tailgating matters, the gate or barrier should close promptly behind each vehicle.",
    "As a rough guide, adding ANPR to an existing electric gate at a home typically costs £1,500 to £3,500 installed, including the camera, set-up and integration. Commercial and multi-lane installations are usually £2,500 to £6,000 per lane. Cloud-managed systems usually carry an ongoing subscription, often somewhere between £10 and £50 a month depending on features and the number of vehicles. Every quote sets out the equipment, installation and ongoing costs separately."
  ],
  "benefits": [
    {
      "title": "How ANPR works",
      "desc": "A dedicated ANPR camera watches the approach to the gate. It uses infrared light to read the reflective number plate clearly, day or night. Software reads the registration and checks it against a list of authorised vehicles. If it matches, the system sends an open signal to the gate’s control panel, exactly like pressing a remote. Unknown plates are ignored, logged, or passed to an intercom so the driver can call the house or reception. This isn’t ordinary CCTV with software added. ANPR cameras use fast shutters and infrared lighting tuned to reading plates. A general security camera pointed at the drive will struggle, especially at night and with moving cars."
    },
    {
      "title": "Camera position makes or breaks it",
      "desc": "Most of an ANPR system’s reliability comes down to where the camera goes. It needs a clear view of the front plate as the car approaches, from a fairly shallow angle. It’s typically mounted on a post or wall at around bumper-to-roof height, 3 to 10 metres from where the car will be when the plate is read. Too steep an angle, a camera looking into low sun or headlights, or a bend in the approach all reduce read rates. We survey the approach, test the position and set up the camera on site with real vehicles before handover."
    },
    {
      "title": "How reliable is it?",
      "desc": "A well-installed system reads clean, standard UK plates very reliably. Reads fail on dirty or damaged plates, plates partly hidden by a towbar or bike rack, and illegal “show plates” with altered fonts or spacing. Foreign plates may also be missed. Motorbikes have no front plate, so they need another way in, or a camera placed to read the rear. That’s why every ANPR installation should keep a backup: a remote, keypad , GSM phone entry or intercom , so a missed read is a minor inconvenience, not a locked-out driver."
    },
    {
      "title": "What it’s like to drive in",
      "desc": "With a barrier , ANPR feels almost seamless. The barrier opens in a few seconds and most cars barely stop. With a swing or sliding gate , the gate still takes 15 to 25 seconds to open, so you’ll usually wait a short time unless the camera reads your plate well before you reach the gate. Placing the camera further down the approach helps where there’s room. Either way, the gate is designed to open fully before you drive through, and the car should never be waiting on the pavement or road. Exit is usually automatic, triggered by a sensor loop in the drive or an exit button, so you don’t need a second camera unless you want exit logs."
    },
    {
      "title": "Managing vehicles",
      "desc": "You manage the list of authorised plates through an app or web portal. Good systems make the everyday changes simple. You can add a new car, remove a sold one, or give a builder’s van access for the next three weeks only. Visitors expected on a particular day can be added with an expiry time, so their access stops automatically. Unknown vehicles can trigger the intercom or send a notification to your phone with a photo, so you can let them in with a tap. Many systems also tell you when a family member’s car has arrived home. For residential developments and commercial sites, sort out early who has permission to add and remove plates, how residents or staff register a new car, and how quickly leavers are removed. A list that’s never reviewed gradually lets in people who should no longer have access."
    },
    {
      "title": "Visitors and deliveries",
      "desc": "ANPR handles vehicles you know about. For everyone else, pair it with an intercom placed where a visiting driver can reach it from the car window. Couriers and delivery drivers usually come in unknown vans, so a video intercom or GSM intercom that rings your phone is the practical answer. Our parcel delivery access guide covers this in more detail."
    },
    {
      "title": "Local or cloud-based",
      "desc": "Some ANPR systems do everything on the camera or a small unit on site, so they keep working if your internet goes down. Others use a cloud service for the plate list, the app and the logs, which makes remote management easy but adds a monthly subscription and depends on your connection. Many systems combine the two: plates are checked locally and synced from the cloud. We’ll explain which parts of the system you’re paying for monthly, and what still works if the subscription ends or the broadband fails."
    },
    {
      "title": "Data protection",
      "desc": "Number plates are personal data. On commercial sites and residential developments, the site operator is responsible for using ANPR lawfully under UK GDPR. That means signs telling drivers ANPR is in use, a clear reason for collecting the data, a set retention period for plate images and logs, and control over who can see them. For a private home, the ICO’s guidance is that data protection law applies if the camera captures images beyond your own property boundary, such as the public road. We aim cameras to cover your approach and as little of the street as possible, and set sensible retention periods by default. The ICO’s guidance on video surveillance sets out the full requirements."
    },
    {
      "title": "Safety",
      "desc": "ANPR decides whether a car is allowed to enter. It doesn’t decide whether the gate is safe to move. That’s still the job of the gate’s photocells, safety edges and force limits , tested to BS EN 12453. ANPR also doesn’t stop a second car following the first through an open gate, so on sites where tailgating matters, the gate or barrier should close promptly behind each vehicle."
    },
    {
      "title": "Cost of ANPR gate entry in London",
      "desc": "As a rough guide, adding ANPR to an existing electric gate at a home typically costs £1,500 to £3,500 installed, including the camera, set-up and integration. Commercial and multi-lane installations are usually £2,500 to £6,000 per lane. Cloud-managed systems usually carry an ongoing subscription, often somewhere between £10 and £50 a month depending on features and the number of vehicles. Every quote sets out the equipment, installation and ongoing costs separately."
    }
  ],
  "faqs": [
    {
      "question": "Will ANPR read every plate?",
      "answer": "It will read the vast majority of clean, standard UK plates when the camera is well positioned. Dirty, damaged, non-standard and foreign plates can fail, which is why a backup entry method is always included."
    },
    {
      "question": "Can cars drive straight in without stopping?",
      "answer": "With a fast barrier, nearly. With a swing or sliding gate, expect a short wait while the gate opens, unless the camera can read the plate well before you reach it."
    },
    {
      "question": "Does it work at night?",
      "answer": "Yes. ANPR cameras use infrared lighting and read plates in complete darkness."
    },
    {
      "question": "What about motorbikes?",
      "answer": "Motorbikes only have a rear plate, so a front-facing camera won’t read them. Use a remote or keypad, or a camera positioned to read the rear plate."
    },
    {
      "question": "What happens when I change my car?",
      "answer": "Remove the old registration and add the new one in the app. It takes seconds."
    },
    {
      "question": "Does ANPR replace the gate’s safety devices?",
      "answer": "No. It only sends the open command. Photocells, safety edges and force testing are still required."
    }
  ],
  "imageAlt": "Car approaching a London driveway gate fitted with ANPR access control",
  "updatedDate": "2026-11-09"
},
];

export const accessControlServices: AccessControlService[] = accessControlEntries.map(service => {
  const featured = accessControlFeaturedImages[service.slug];
  return featured ? { ...service, image: featured.src, imageAlt: featured.alt } : service;
});

export function getAccessControlBySlug(slug: string): AccessControlService | undefined {
  return accessControlServices.find(s => s.slug === slug);
}
