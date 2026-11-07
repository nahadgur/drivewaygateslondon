export function serviceIntent(slug: string, city: string) {
  if (slug === 'gate-repair-and-maintenance') return {
    titleSuffix: 'Repairs & Servicing',
    description: `Electric gate fault finding, repairs and maintenance in ${city}. Describe the fault and agree inspection charges and repair scope before booking.`,
    lead: `Need help with existing electric gates in ${city}? Tell us what stopped working, the equipment you have and whether the entrance is accessible. Agree the investigation scope and any attendance charge before booking.`,
    footnotes: ['Existing gate systems', 'Agreed repair scope', 'Inspection charges confirmed'],
    overview: 'A repair starts with the reported fault and the condition of the complete installation. Share previous service records, recent changes and equipment details you can read without removing covers. Keep a faulty or unsafe gate out of use and obtain instructions specific to the installation.',
    guidance: 'Ask the contractor to distinguish the diagnosed fault, any safety concerns and optional improvements. Confirm parts support, responsibility for electrical work and safe access arrangements while repairs are pending.',
    checklist: ['Agree investigation and attendance charges before booking', 'Approve additional repairs and parts before work proceeds', 'Confirm temporary access arrangements and any retained equipment', 'Keep the findings, relevant checks and maintenance instructions'],
    processTitle: `How gate repairs are arranged in ${city}`,
    processLabel: 'Repair process',
    steps: [['Describe the fault', 'Explain the behaviour already observed, controls used and any access difficulty. Do not reproduce an unsafe fault.'], ['Agree the visit', 'Confirm attendance charges, the investigation scope and who can authorise repairs.'], ['Investigate the installation', 'A competent contractor assesses the reported fault and relevant mechanical, electrical and protective equipment.'], ['Approve the repair', 'Request findings and a written scope for the proposed parts and labour before additional work.'], ['Arrange safe access', 'Agree how the entrance will be left while awaiting parts or further work.'], ['Receive the handover', 'Keep the repair findings, relevant checks, operating instructions and aftercare terms.']],
    quoteChecklist: ['Attendance and investigation charges', 'Diagnosed fault and agreed repair scope', 'Parts, labour and relevant electrical work', 'Retained equipment and compatibility limitations', 'Checks, instructions and safe access arrangements', 'VAT, exclusions, parts availability and approval of additional work', 'Repair warranty and future maintenance terms'],
    quoteLink: '/services/gate-repair-and-maintenance/', quoteLinkText: 'Gate repair and maintenance',
    ctaHeading: `Need your gates repaired in ${city}?`, ctaText: 'Describe the fault and your access needs. Ask about the investigation and repair work your existing gates may need.',
  };
  if (slug === 'gate-automation-kits') return {
    titleSuffix: 'Automation for Existing Gates',
    description: `Gate automation for existing gates in ${city}. We assess the gates, supports and layout before agreeing motors, controls and installation work.`,
    lead: `Looking to automate existing gates in ${city}? Share photographs and details of the opening and supports. A site assessment establishes whether the gates are suitable and which automation, protective measures and related work are needed.`,
    footnotes: ['Existing gates assessed', 'Compatibility checked', 'Written automation scope'],
    overview: 'Retrofitting automation means assessing the gates already in place. The contractor needs to check their condition, movement, supports, surrounding clearances and suitability for powered operation before selecting equipment.',
    guidance: 'Do not assume that fitting a motor makes an existing entrance suitable. Ask which parts can remain, what needs alteration and how electrical work, access controls and protective measures fit into the complete installation.',
    checklist: ['Establish whether the existing gates and supports can be retained', 'Identify any gate, hinge or support alterations separately', 'Agree motors, controls, protective measures and electrical work', 'Include commissioning, user instructions and maintenance terms'],
    processTitle: `How an automation retrofit is planned in ${city}`,
    processLabel: 'Retrofit process',
    steps: [['Describe the existing entrance', 'Send photographs, gate details and the access methods you need.'], ['Assess suitability', 'Check gate condition, movement, supports, clearances and the site layout.'], ['Compare the proposal', 'Ask what remains, what needs alteration and why the proposed equipment is suitable.'], ['Agree the written scope', 'Separate retained gates from new automation, electrical work, protective devices and any groundworks.'], ['Fit the agreed system', 'Coordinate access while the specified alterations and automation installation take place.'], ['Complete the handover', 'Request commissioning records, user instructions, manual-release guidance and maintenance requirements for the completed installation.']],
    quoteChecklist: ['Existing gates and supports to be retained', 'Required hinge, support or gate alterations', 'Motors, controls and protective measures', 'Power supply, cabling, drainage and reinstatement where needed', 'Commissioning, records, instructions and handover', 'VAT, exclusions and agreed programme', 'Warranty terms for new equipment and limitations for retained parts'],
    quoteLink: '/blog/replace-gate-automation-without-replacing-gates/', quoteLinkText: 'Keeping gates while changing automation',
    ctaHeading: `Automate your existing gates in ${city}`, ctaText: 'Tell us about the gates you have and how you want to use them. Ask about suitability and the work needed for an automation retrofit.',
  };
  return null;
}
