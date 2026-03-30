export interface AccessControlService {
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
}

export const accessControlServices: AccessControlService[] = [
  {
    id: 'video-intercoms',
    slug: 'video-intercoms',
    title: 'Video Intercom Systems',
    metaTitle: 'Video Intercom Systems for Driveway Gates London | Gate Entry Cameras',
    metaDescription: 'Install a video intercom on your London driveway gate. See and speak to visitors from your phone anywhere in the world. Comelit, Hikvision, and Ring integrations available.',
    description: 'See and speak to visitors at your gate from your smartphone, tablet, or indoor monitor — from anywhere in the world. Video intercoms are now the standard access control addition for automated London driveway gates.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1170&auto=format&fit=crop',
    intro: [
      "A video intercom transforms how you manage access to your property. Instead of walking to the gate to see who is there, you answer the call on your smartphone from anywhere — the kitchen, the office, or abroad — see the visitor on a live HD video feed, and press a button to open the gate if you choose to. The whole interaction takes seconds and leaves a timestamped log of every entry attempt.",
      "The London market is currently dominated by three main players: Comelit, Hikvision, and Ring. Each has distinct strengths. Comelit systems are the professional installer standard — robust, reliable, and designed for integration with any gate motor brand. Hikvision offers the best camera resolution and ANPR add-on capability at a competitive price point. Ring is the consumer-friendly option that integrates with existing Ring doorbells and the Amazon Alexa ecosystem.",
      "Our installers assess your gate type, existing wiring, and access requirements during the site survey and recommend the most appropriate system. All video intercom installations include the gate-side camera unit, power supply, either a wired or WiFi connection to your property, and full programming of the gate motor integration. App setup and testing is included as standard.",
    ],
    benefits: [
      { title: 'Remote Gate Control from Anywhere', desc: 'Open your gate from your phone whether you are in the garden, the office, or another country. Delivery drivers, contractors, and guests can be let in without you needing to be present.' },
      { title: 'Full HD Camera with Night Vision', desc: 'Modern video intercoms record at 1080p or higher with infrared night vision. You see a clear image of every visitor regardless of time or lighting conditions.' },
      { title: 'Timestamped Entry Log', desc: 'Every gate opening is logged with a timestamp and, on most systems, a snapshot or short video clip. Invaluable for security review and evidence in the event of an incident.' },
      { title: 'Works with Existing Gate Motors', desc: 'Video intercoms can be retrofitted to any existing automated gate. The system connects to your current motor control board without replacing any automation components.' },
    ],
    faqs: [
      { question: "Which video intercom brand is best for London homes?", answer: "Comelit is the professional standard in London for reliability and motor integration. Hikvision offers the best camera quality and is the best choice if you want ANPR or extensive CCTV integration. Ring is best if you already use Ring products and want a single app for doorbells and the gate. Our installers will recommend the right system for your setup during the site survey." },
      { question: "Can I use the intercom when I am not at home?", answer: "Yes. All modern video intercom systems connect to your smartphone via WiFi or 4G and send push notifications when someone presses the call button. You can see the live camera feed, speak two-way with the visitor, and open the gate remotely from anywhere with an internet connection." },
      { question: "How does the intercom connect to the gate motor?", answer: "The intercom control board has a dry contact relay output that connects to the same input the gate remote uses. When you press the open button in the app or on an indoor monitor, the relay closes, and the motor receives exactly the same signal as a standard remote button press. The connection is simple and works with every gate motor brand." },
    ],
  },
  {
    id: 'keypad-entry-systems',
    slug: 'keypad-entry-systems',
    title: 'Keypad Entry Systems',
    metaTitle: 'Gate Keypad Entry Systems London | PIN Code Driveway Gate Access',
    metaDescription: 'Add a keypad to your London driveway gate for PIN code access. Weatherproof, multi-user systems with audit trails. Works with all gate motor brands.',
    description: 'PIN code access for your driveway gate — no remote needed. Weatherproof keypads support multiple user codes, guest codes, and access time restrictions. Ideal for households, rental properties, and commercial premises.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop',
    intro: [
      "A keypad entry system gives everyone who needs access to your gate a simple, reliable way to open it without a remote or smartphone. You enter a PIN code, the gate opens. No app updates, no dead batteries, no lost remotes. For households with multiple drivers, rental properties, or any site where controlled access by multiple people is needed, a keypad is often the most practical solution.",
      "Modern gate keypads are far more sophisticated than basic PIN pads. Multi-user systems allow you to assign different PIN codes to different people, set time-restricted access windows for contractors or cleaning teams, and review an access log showing which code was used at what time. Proximity readers — where a fob or card is held near the unit rather than a PIN being typed — are available as an alternative or complement to keypad entry.",
      "All keypads in our installer network are IP65 rated or better for weatherproofing, backlit for night use, and anti-vandal rated where required. Wired keypads connect directly to the gate motor control board. Wireless keypads use encrypted radio transmission and require only a power source. Our installers recommend the right type based on your gate layout and the distance from the gate post to the property.",
    ],
    benefits: [
      { title: 'No Remote Required', desc: 'PIN code access works without any device. Useful for guests, contractors, and regular visitors who should not have a permanent remote but need reliable gate access.' },
      { title: 'Multiple User Codes', desc: 'Assign individual PIN codes to family members, cleaners, and regular visitors. Delete or change any code instantly without reprogramming the whole system.' },
      { title: 'Time-Restricted Access', desc: 'Set specific time windows for individual codes — for example, a contractor code that only works Monday to Friday 8am to 5pm. Access outside those hours is automatically refused.' },
      { title: 'Weatherproof and Vandal-Resistant', desc: 'All units installed by our network are IP65 rated minimum. Anti-vandal keypad covers and armoured cable options are available for sites with higher security requirements.' },
    ],
    faqs: [
      { question: "How many PIN codes can I have on one keypad?", answer: "Most residential grade keypads support between 10 and 100 individual user codes. Commercial grade systems support 1,000 or more. For most London homes, a 10 to 50 user system is more than adequate. Your installer will recommend a unit sized appropriately for your requirements." },
      { question: "Can I add a keypad to my existing automated gate?", answer: "Yes. A keypad can be retrofitted to any automated gate with an existing motor. The keypad connects to the relay input on the motor control board — the same connection used by the remote receiver. A power supply is needed at the gate post, which your installer will wire from the property during installation." },
      { question: "What happens if someone enters the wrong code repeatedly?", answer: "Most keypads have a lockout function that disables the keypad for a set period after a configurable number of incorrect attempts — typically three to five wrong PINs triggers a 5 to 15 minute lockout. This prevents brute force code guessing. An alert can also be sent to your phone via a connected intercom or smart home system." },
    ],
  },
  {
    id: 'gsm-phone-entry',
    slug: 'gsm-phone-entry',
    title: 'GSM Phone Entry Systems',
    metaTitle: 'GSM Gate Openers London | Open Your Gate by Phone Call',
    metaDescription: 'Open your London driveway gate with a phone call or text message. GSM gate openers need no WiFi and work via mobile network. Ideal for remote properties and reliable backup access.',
    description: 'Open your gate from anywhere using a standard phone call or text message — no internet required. GSM gate openers use the mobile network and are the most reliable access method for London properties with poor WiFi at the gate.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1170&auto=format&fit=crop',
    intro: [
      "A GSM gate opener is one of the most practically useful access control additions you can make to an automated gate. The device fits inside or alongside your gate motor, contains a SIM card, and opens the gate when it receives a call or text from an authorised mobile number. No internet connection, no app, no WiFi at the gate post — just a phone call.",
      "The system works on a whitelist of authorised numbers. You add the phone numbers of people who are allowed to open the gate. When they call the GSM unit, it recognises their number, opens the gate, and hangs up. The caller is never charged because the call does not connect in the conventional sense — the system identifies the caller ID and rejects the call while triggering the gate. Some units also accept text commands, useful for adding or removing users remotely.",
      "GSM systems are particularly popular for London properties where the gate post is far from the house and running a stable data connection to the post is impractical, for holiday homes where reliable gate opening from a distance is needed, and as a backup access method alongside a primary video intercom. Most units run on a pay-as-you-go SIM with minimal monthly data usage.",
    ],
    benefits: [
      { title: 'Works Without Internet', desc: 'GSM gate openers use the mobile network, not WiFi. No router, no cables, no data connection at the gate post. If you have a mobile signal, the gate opens.' },
      { title: 'Free to Call From Your Phone', desc: 'The gate opener identifies your caller ID and rejects the call before it connects. You are never charged for the call, and neither is the gate SIM billed for incoming calls.' },
      { title: 'Whitelist Up to 1,000 Numbers', desc: 'Add or remove authorised numbers by text message from the admin phone. No app, no computer, no engineer visit required. Manage access from anywhere instantly.' },
      { title: 'Reliable Backup Access', desc: 'Pair a GSM unit with your primary video intercom or keypad as a backup. If WiFi fails, the gate can always be opened via phone call.' },
    ],
    faqs: [
      { question: "What SIM card does a GSM gate opener need?", answer: "Any standard UK SIM card works. Most installers recommend a pay-as-you-go SIM from a network with strong local coverage. Data usage is minimal — the system uses SMS for user management and incoming call identification for gate opening. A top-up of a few pounds per year is typical for light residential use." },
      { question: "Can I open the gate if I am abroad?", answer: "Yes. As long as your phone can make an international call to the UK number of the gate SIM, the system works identically. Most UK mobile plans include calls to UK numbers while roaming. The gate opens within two seconds of the system recognising your number." },
      { question: "How many phone numbers can I authorise?", answer: "Entry-level units support 200 authorised numbers. Mid-range units support 500 to 1,000. For most residential properties, 200 is more than sufficient. Numbers are added and removed by sending a specific SMS command from the administrator phone — no engineer visit required." },
    ],
  },
  {
    id: 'anpr-systems',
    slug: 'anpr-systems',
    title: 'ANPR Gate Entry Systems',
    metaTitle: 'ANPR Gate Entry London | Automatic Number Plate Recognition Driveway',
    metaDescription: 'Hands-free gate entry for your London driveway using automatic number plate recognition. Register your vehicles and the gate opens automatically as you arrive.',
    description: 'Register your vehicle plates and your gate opens automatically as you arrive — no remote, no app, no button. ANPR systems are the premium hands-free access solution for high-end London residential and commercial properties.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1170&auto=format&fit=crop',
    intro: [
      "Automatic Number Plate Recognition gate entry is the ultimate in hands-free access control. A camera mounted at the gate entrance reads the number plate of approaching vehicles and cross-references it against a whitelist of registered plates. If the plate matches, the gate opens automatically. The vehicle never needs to stop, the driver never needs to reach for a remote, and the gate opens before the car arrives at the threshold.",
      "ANPR systems have dropped significantly in price over the past five years and are now a realistic option for residential London properties as well as commercial sites. The camera and processing unit are weatherproof and designed for continuous outdoor use. Plate recognition works in all lighting conditions, including darkness with infrared illumination. Most systems maintain an access log with a timestamped image of every plate read, whether authorised or not.",
      "Our London installers work with several ANPR providers depending on your requirements and budget. Residential systems start from around £1,500 fully installed and are ideal for households with two or more regularly driven vehicles. Commercial systems with multiple camera positions, vehicle tracking, and integration into site security management platforms are also available through our commercial installer network.",
    ],
    benefits: [
      { title: 'Completely Hands-Free Entry', desc: 'Drive up to your gate and it opens. No remote, no app, no button. The gate is open before you reach it and closes automatically behind you.' },
      { title: 'Works in All Conditions', desc: 'ANPR cameras use infrared illumination for night reading and are IP67 weatherproof. Rain, fog, and low light do not affect recognition accuracy on a quality system.' },
      { title: 'Timestamped Vehicle Access Log', desc: 'Every plate read — authorised or not — is logged with a timestamp and image. The access log is invaluable for security review and can be used as evidence in the event of an incident.' },
      { title: 'Scalable to Multiple Cameras', desc: 'Start with a single entry camera and expand to cover exit, car park, or secondary access points. Multiple cameras share a single management platform and access database.' },
    ],
    faqs: [
      { question: "How accurate is ANPR plate recognition?", answer: "Quality ANPR systems achieve greater than 98% recognition accuracy in good conditions. Accuracy drops slightly in adverse conditions — heavy rain, very dirty plates, unusual plate fonts, or plates positioned at extreme angles. Most systems have a fallback access method (keypad or intercom) for the rare cases where the plate is not read correctly." },
      { question: "Can I add temporary plates for guests or contractors?", answer: "Yes. Most ANPR management platforms let you add a plate to the whitelist with an expiry date and time. A contractor plate can be granted access for a specific week, a guest plate for a weekend visit, and both are automatically removed when the window expires without any manual deletion." },
      { question: "Does an ANPR system require planning permission?", answer: "The gate itself follows normal permitted development rules — under 2 metres tall on most residential properties without a formal application. The ANPR camera is typically mounted at gate post height and does not require separate planning permission. However, if your camera captures images of public areas beyond your boundary, you may have GDPR obligations around CCTV signage and data retention. Your installer will advise on the specific requirements for your installation." },
    ],
  },
];

export function getAccessControlBySlug(slug: string): AccessControlService | undefined {
  return accessControlServices.find(s => s.slug === slug);
}
