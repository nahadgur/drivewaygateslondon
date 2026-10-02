// data/blog.ts

import { blogFeaturedImages } from './featuredImages';
import preparedRepairArticles from './repair-articles.json';

export interface ContentBlock {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
  href?: string;
  source?: string;
  items?: string[];
  articles?: { slug: string; title: string; image?: string }[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  /** Opt in to a bespoke HTML title without changing existing indexed titles. */
  useMetaTitle?: boolean;
  metaDescription: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  featuredImage: string;
  featuredImageAlt?: string;
  featuredImageWidth?: number;
  featuredImageHeight?: number;
  excerpt: string;
  relatedServiceSlug?: string;
  /** When true the article is excluded from listings, sitemap, and static
   *  generation, so it 404s in production. Used to stage drafts before launch. */
  draft?: boolean;
  content: ContentBlock[];
}

const blogArticleEntries: BlogArticle[] = [
  ...preparedRepairArticles,
  {
  "slug": "bi-fold-vs-sliding-gates-london",
  "relatedServiceSlug": "electric-sliding-gates",
  "title": "Bi-fold vs Sliding Gates for Short Driveways",
  "metaTitle": "Bi-fold vs Sliding Gates for Short Driveways | Driveway Gates London",
  "metaDescription": "Compare folding clearance and sliding run-back space without relying on a universal opening-speed or space-saving claim.",
  "category": "Gate Types",
  "publishDate": "2026-03-16",
  "featuredImage": "/images/blog/bi-fold-vs-sliding-gates-london.webp",
  "excerpt": "Compare folding clearance and sliding run-back space without relying on a universal opening-speed or space-saving claim.",
  "content": [
    {
      "type": "h2",
      "text": "Compare two different movement paths"
    },
    {
      "type": "p",
      "text": "Bi-fold leaves fold as they swing, reducing the depth occupied by some designs compared with a single full-length swing leaf. Sliding gates move alongside the opening and need a clear path beside it. Both arrangements need supports and space for their moving parts."
    },
    {
      "type": "p",
      "text": "For a short drive, draw the parked vehicle, its doors, the gate’s entire movement and a pedestrian route. Ask the installer to mark the dimensions of the actual mechanism rather than applying a percentage saving from another product."
    },
    {
      "type": "h2",
      "text": "Check folding joints and side space"
    },
    {
      "type": "p",
      "text": "Folding designs need assessment around intermediate hinges and the area where the panels gather. Sliding designs need assessment along the run-back area and between the leaf and nearby walls or fencing."
    },
    {
      "type": "p",
      "text": "If one sliding leaf will not fit beside the entrance, compare <a href=\"/blog/telescopic-gates-space-saving-london/\">telescopic panels</a>. More panels change the support, movement and maintenance requirements; they do not make the surrounding space irrelevant."
    },
    {
      "type": "h2",
      "text": "Include slopes and everyday access"
    },
    {
      "type": "p",
      "text": "Ground levels may interfere with a folding swing path or require changes to a sliding layout. Discuss drainage, parked-car position, visitors and bins. Ask what happens during manual release, particularly on a slope."
    },
    {
      "type": "p",
      "text": "Opening time depends on the selected equipment, travel and safe operation. Do not choose a layout on a universal two-second promise. A demonstration should show the proposed arrangement, including its stopping and closing behaviour."
    },
    {
      "type": "h2",
      "text": "Get comparable proposals"
    },
    {
      "type": "p",
      "text": "Request drawings, product models, groundworks, protective measures and service arrangements for both options. Use the <a href=\"/guides/swing-vs-sliding-gates/\">swing and sliding comparison</a> for the broader layout questions, then compare the complete quotations using our <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a>."
    }
  ],
  "featuredImageAlt": "Installer checking a compact bi-fold driveway gate at a London home",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "telescopic-gates-space-saving-london",
  "relatedServiceSlug": "electric-sliding-gates",
  "title": "Telescopic Driveway Gates for Limited Side Space",
  "metaTitle": "Telescopic Driveway Gates for Limited Side Space | Driveway Gates London",
  "metaDescription": "Understand overlapping sliding panels, run-back space and the measurements needed for a telescopic gate.",
  "category": "Gate Types",
  "publishDate": "2026-03-16",
  "featuredImage": "/images/blog/telescopic-gates-space-saving-london.webp",
  "excerpt": "Understand overlapping sliding panels, run-back space and the measurements needed for a telescopic gate.",
  "content": [
    {
      "type": "h2",
      "text": "How overlapping panels use space"
    },
    {
      "type": "p",
      "text": "A telescopic arrangement uses multiple sliding panels that overlap as they open. It can reduce the clear length needed beside an opening compared with one long leaf, but the stored panels still occupy space and need a suitable support system."
    },
    {
      "type": "p",
      "text": "Ask for the opening width, stored width and depth, panel overlap and full travel path on a drawing. There is no single clearance factor that covers every number of panels and mechanism."
    },
    {
      "type": "h2",
      "text": "Compare tracked and supported layouts"
    },
    {
      "type": "p",
      "text": "The quotation should identify how the panels run, how they connect and what foundations or tracks the arrangement needs. Check drainage, surface levels and maintenance access along the whole path."
    },
    {
      "type": "p",
      "text": "Tell the installer about parked vehicles, meter boxes, planting and pedestrian routes beside the gate. An apparently unused strip of garden may still be needed for access or safe separation from moving parts."
    },
    {
      "type": "h2",
      "text": "Assess the gaps between panels"
    },
    {
      "type": "p",
      "text": "Overlapping leaves introduce moving gaps as well as the closing edge across the entrance. The installer needs to assess reachable trapping and shearing points, surrounding fences and the way people use the driveway."
    },
    {
      "type": "p",
      "text": "Ask how the proposal protects these areas and how the completed installation will be checked. A photocell at the front does not assess every hazard. See <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\">HSE guidance on powered-gate design</a>."
    },
    {
      "type": "h2",
      "text": "Compare other compact arrangements"
    },
    {
      "type": "p",
      "text": "Use a measured drawing to compare telescopic, <a href=\"/blog/bi-fold-vs-sliding-gates-london/\">bi-fold</a> and conventional <a href=\"/services/electric-sliding-gates/\">sliding gates</a>. Include parking and visitor waiting space, then compare groundworks, service access and manual operation."
    },
    {
      "type": "p",
      "text": "Send approximate dimensions and photographs when you <a href=\"/contact/\">discuss your entrance</a>. The survey should establish a feasible layout before you choose a finish or motor."
    }
  ],
  "featuredImageAlt": "Telescopic sliding gate opening across a compact London driveway",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "automated-gates-sloping-driveways-london",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Automated Gates on Sloping Driveways in London",
  "metaTitle": "Automated Gates on Sloping Driveways in London | Driveway Gates London",
  "metaDescription": "Compare the questions a survey must resolve on a sloping driveway, including movement space, supports, drainage and safe manual operation.",
  "category": "Installation",
  "publishDate": "2026-03-16",
  "featuredImage": "/images/blog/automated-gates-sloping-driveways-london.webp",
  "excerpt": "Compare the questions a survey must resolve on a sloping driveway, including movement space, supports, drainage and safe manual operation.",
  "content": [
    {
      "type": "h2",
      "text": "Measure the slope where the gate will move"
    },
    {
      "type": "p",
      "text": "A driveway can rise or fall across the entrance, along the drive, or both. The survey needs to establish the actual levels, movement area, boundary position and where vehicles and people will wait. A photograph or one gradient figure cannot establish a suitable design."
    },
    {
      "type": "p",
      "text": "Tell the installer about drainage problems, previous ground movement and any changes planned to paving or parking. These details can affect the gate layout and the order of the work."
    },
    {
      "type": "h2",
      "text": "Questions for a swing-gate layout"
    },
    {
      "type": "p",
      "text": "A swing gate needs clearance through its full movement. If the ground rises behind the entrance, the leaf may meet the surface or leave a changing gap. The assessment should consider the hinge arrangement, supports, parked vehicles and risks created by the movement."
    },
    {
      "type": "p",
      "text": "Do not assume a rising hinge or a more powerful motor resolves the problem. Ask the installer to explain the proposed geometry and protective measures. Compare <a href=\"/services/electric-swing-gates/\">electric swing-gate options</a> after the site constraints are understood."
    },
    {
      "type": "h2",
      "text": "Questions for a sliding layout"
    },
    {
      "type": "p",
      "text": "A sliding gate requires a suitable travel path and room beside the opening. Tracked, cantilever and multi-panel arrangements have different support and space requirements. The survey should assess levels, drainage, foundations and the surroundings along that path."
    },
    {
      "type": "p",
      "text": "A sliding design is not automatically suitable merely because a driveway slopes. Request a drawing showing movement and clearances. Discuss <a href=\"/services/electric-sliding-gates/\">sliding-gate installation</a> with the actual site measurements."
    },
    {
      "type": "h2",
      "text": "Plan for manual release and uncontrolled movement"
    },
    {
      "type": "p",
      "text": "Gravity or wind can move a gate when it is freed from its drive. The design must account for safe operation and the circumstances in which manual release is used. Ask how the gate is controlled and secured, and which situations require an engineer."
    },
    {
      "type": "p",
      "text": "Keep people and vehicles clear of a gate that moves unexpectedly. Do not disengage a damaged or unstable gate to see whether it rolls or swings. Follow the installed system’s user instructions; a generic release sequence cannot account for your slope."
    },
    {
      "type": "h2",
      "text": "Supports, groundworks and permissions"
    },
    {
      "type": "p",
      "text": "Foundation dimensions, reinforcement and drainage need to suit the proposed gate and site. Do not use a standard depth, rebar spacing or weight threshold from a web article as the construction design. The contractor should identify any specialist structural or ground advice needed."
    },
    {
      "type": "p",
      "text": "Check applicable planning and highway constraints before ordering. Gate width alone does not provide a universal planning-permission test. Consult <a href=\"https://www.planningportal.co.uk/permission/common-projects/fences-gates-and-garden-walls/planning-permission/\" target=\"_blank\" rel=\"noopener noreferrer\">Planning Portal guidance on gates and boundaries</a> and the authority responsible for the property."
    },
    {
      "type": "h2",
      "text": "What to request with the quote"
    },
    {
      "type": "p",
      "text": "Ask for the gate layout, material, supports, drive, protective measures, drainage, electrical work and surface reinstatement to be identified. Confirm work required from other trades and the checks, documents and training included at handover."
    },
    {
      "type": "p",
      "text": "Use our <a href=\"/guides/electric-driveway-gates-cost-london/\">installed-cost checklist</a> to compare scope, then <a href=\"/contact/\">request a survey</a>. The safety basis is a site-specific assessment; see <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/safety.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on powered-gate safety</a>."
    },
    {
      "type": "h2",
      "text": "Frequently Asked Questions"
    },
    {
      "type": "h3",
      "text": "Can a sloping driveway have electric gates?"
    },
    {
      "type": "p",
      "text": "A suitable arrangement may be possible, but it depends on measured levels, space, supports, movement and the safety assessment. A survey should establish the options."
    },
    {
      "type": "h3",
      "text": "Are sliding gates always the answer on a slope?"
    },
    {
      "type": "p",
      "text": "No. The travel path, side space, support arrangement and surroundings still need assessment. Compare actual layouts rather than choosing from the gradient alone."
    },
    {
      "type": "h3",
      "text": "Can stronger motors compensate for a poor layout?"
    },
    {
      "type": "p",
      "text": "Do not treat motor power as a substitute for suitable geometry, supports and protective measures. The complete system needs assessment."
    }
  ],
  "featuredImageAlt": "Gate installer measuring the gradient of a sloping London driveway",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "outward-swinging-gates-uk-rules",
  "relatedServiceSlug": "electric-swing-gates",
  "title": "Can Driveway Gates Open Outwards in London?",
  "metaTitle": "Can Driveway Gates Open Outwards in London? | Driveway Gates London",
  "metaDescription": "Check the highway boundary and the gate’s full movement before choosing an outward-opening layout.",
  "category": "Planning & Regulations",
  "publishDate": "2026-03-17",
  "featuredImage": "/images/blog/outward-swinging-gates-uk-rules.webp",
  "excerpt": "Check the highway boundary and the gate’s full movement before choosing an outward-opening layout.",
  "content": [
    {
      "type": "h2",
      "text": "Establish where the highway ends"
    },
    {
      "type": "p",
      "text": "An outward-opening gate can project beyond the property into a pavement or road. The visible edge of paving does not necessarily establish the legal highway boundary. Show the proposed swept path to the highway authority before choosing the layout."
    },
    {
      "type": "p",
      "text": "Section 153 of the <a href=\"https://www.legislation.gov.uk/ukpga/1980/66/section/153\">Highways Act 1980</a> addresses doors and gates opening onto a street. Obtain advice on the actual boundary and proposal rather than relying on an invented pavement clearance or fine amount."
    },
    {
      "type": "h2",
      "text": "Planning and vehicle access are separate checks"
    },
    {
      "type": "p",
      "text": "Gate height, listed status, withdrawn rights and the boundary work can affect planning requirements. A dropped kerb or vehicle crossing involves a separate highway enquiry. One approval does not settle all those matters."
    },
    {
      "type": "p",
      "text": "Use our <a href=\"/blog/do-i-need-a-dropped-kerb-for-a-driveway-gate-london/\">dropped-kerb guide</a> and <a href=\"/local-regulations/\">council planning directory</a> to prepare the questions."
    },
    {
      "type": "h2",
      "text": "Compare layouts that fit inside the site"
    },
    {
      "type": "p",
      "text": "If an inward swing conflicts with a rising driveway or a parked car, ask for a measured comparison with sliding or folding options. Include pedestrians, visitors waiting to enter and manual operation."
    },
    {
      "type": "p",
      "text": "See the <a href=\"/guides/swing-vs-sliding-gates/\">swing versus sliding guide</a> and <a href=\"/blog/automated-gates-sloping-driveways-london/\">sloping-driveway advice</a>. Changing the motor does not resolve a boundary conflict."
    }
  ],
  "featuredImageAlt": "Surveyor measuring a driveway boundary beside a London pavement",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "underground-gate-motors-london",
  "relatedServiceSlug": "electric-swing-gates",
  "title": "Underground Gate Motors for London Driveways",
  "metaTitle": "Underground Gate Motors for London Driveways | Driveway Gates London",
  "metaDescription": "Compare concealed swing-gate automation by drainage, hinge geometry, maintenance access and installation scope.",
  "category": "Automation",
  "publishDate": "2026-03-17",
  "featuredImage": "/images/blog/underground-gate-motors-london.webp",
  "excerpt": "Compare concealed swing-gate automation by drainage, hinge geometry, maintenance access and installation scope.",
  "content": [
    {
      "type": "h2",
      "text": "What underground gate automation means"
    },
    {
      "type": "p",
      "text": "An underground swing-gate operator places much of the drive assembly in a foundation box near the hinge. This can reduce the equipment visible on the leaf, which may suit an entrance where appearance matters. Covers, release arrangements and other controls can remain visible."
    },
    {
      "type": "p",
      "text": "The operator is one part of the entrance. The installer still needs to assess the gate, hinges, supports, exposure and movement. Concealing a motor does not make an unsuitable gate ready for automation."
    },
    {
      "type": "h2",
      "text": "Drainage and access belong in the design"
    },
    {
      "type": "p",
      "text": "Ask how the foundation box will drain at your property and who provides that work. Tell the installer about standing water and previous flooding. Discuss how the covers will remain accessible after paving, planting or resurfacing."
    },
    {
      "type": "p",
      "text": "The quotation should identify excavation, foundations, cable routes, drainage and reinstatement. Ask how future maintenance or replacement can take place without unnecessary damage to the finished driveway."
    },
    {
      "type": "h2",
      "text": "Compare visible operators too"
    },
    {
      "type": "p",
      "text": "An above-ground arm may involve a different set of alterations and maintenance access. Compare both options against the hinge geometry, required opening angle and appearance of the whole entrance."
    },
    {
      "type": "p",
      "text": "Request the proposed model and its suitability assessment. Voltage alone does not tell you whether a motor uses a hydraulic mechanism or what upkeep it needs. Follow the instructions for the specified equipment."
    },
    {
      "type": "h2",
      "text": "Keep release and handover practical"
    },
    {
      "type": "p",
      "text": "Ask for a demonstration of the actual manual release and how the leaf is controlled and secured afterwards. Keep the correct key and instructions accessible. Do not assume that every underground release sits in the same place."
    },
    {
      "type": "p",
      "text": "Explore <a href=\"/services/electric-swing-gates/\">electric swing gates</a> and our <a href=\"/guides/automation-kit-installation-prices/\">retrofit quotation guide</a>. For an existing fault, arrange <a href=\"/services/gate-repair-and-maintenance/\">repair assessment</a> before opening a motor enclosure."
    }
  ],
  "featuredImageAlt": "Engineer servicing an underground motor beneath a wrought-iron gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "article-4-directions-gate-planning-permission",
  "relatedServiceSlug": "metal-driveway-gates",
  "title": "Article 4 Directions and Driveway Gate Planning Permission",
  "metaTitle": "Article 4 Directions and Driveway Gate Planning Permission | Driveway Gates London",
  "metaDescription": "Check the mapped property and the rights withdrawn by a direction before changing your front boundary.",
  "category": "Planning & Regulations",
  "publishDate": "2026-03-17",
  "featuredImage": "/images/blog/article-4-directions-gate-planning-permission.webp",
  "excerpt": "Check the mapped property and the rights withdrawn by a direction before changing your front boundary.",
  "content": [
    {
      "type": "h2",
      "text": "Read the direction for the address"
    },
    {
      "type": "p",
      "text": "An Article 4 direction removes specified permitted development rights in a defined area or at specified properties. Its existence somewhere in a borough does not establish the rules for your gate. Obtain the actual direction, map, schedule and effective date from the planning authority."
    },
    {
      "type": "p",
      "text": "Check whether the withdrawn rights cover the proposed boundary work. Camden’s <a href=\"https://www.camden.gov.uk/article-4-directions1\">Article 4 directory</a> separates different kinds of directions and links to the relevant records; use your own authority’s equivalent."
    },
    {
      "type": "h2",
      "text": "Check other controls separately"
    },
    {
      "type": "p",
      "text": "Conservation-area designation, listed status and conditions on earlier planning permissions are separate checks. The position beside a highway and the proposed height can also affect the gate proposal. A neighbour’s replacement gate is not proof that your work is permitted."
    },
    {
      "type": "p",
      "text": "Start with the <a href=\"/local-regulations/\">council planning directory</a> and <a href=\"https://www.planningportal.co.uk/permission/common-projects/fences-gates-and-garden-walls/planning-permission/\">general gate planning guidance</a>. Ask the authority which information it needs for your address."
    },
    {
      "type": "h2",
      "text": "Prepare a clear enquiry"
    },
    {
      "type": "p",
      "text": "Provide a site plan, photographs of the existing boundary and a drawing of the proposed gate, pillars and opening direction. Include dimensions, materials and any excavation, paving or access changes."
    },
    {
      "type": "p",
      "text": "Ask whether a formal application, consent or certificate is appropriate. Retain the written response and any conditions with the quotation. Set the installation programme after the required checks."
    }
  ],
  "featuredImageAlt": "Homeowner and surveyor reviewing gate plans on a Victorian London street",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "conservation-area-gate-planning-london",
  "relatedServiceSlug": "metal-driveway-gates",
  "title": "Designing Driveway Gates in a Conservation Area",
  "metaTitle": "Designing Driveway Gates in a Conservation Area | Driveway Gates London",
  "metaDescription": "Use the actual conservation appraisal and property constraints to plan changes to a historic front boundary.",
  "category": "Planning & Regulations",
  "publishDate": "2026-03-18",
  "featuredImage": "/images/blog/conservation-area-gate-planning-london.webp",
  "excerpt": "Use the actual conservation appraisal and property constraints to plan changes to a historic front boundary.",
  "content": [
    {
      "type": "h2",
      "text": "Identify what gives the boundary its character"
    },
    {
      "type": "p",
      "text": "Photograph the existing gate, railings, piers and adjacent frontage. Note original details you want to retain and damage that needs repair. Find the council’s conservation-area appraisal or management guidance for the actual address."
    },
    {
      "type": "p",
      "text": "Avoid assuming that all period homes need the same metalwork, colour or dimensions. A new gate should be discussed in the context of that boundary and the applicable planning controls."
    },
    {
      "type": "h2",
      "text": "Separate design choices from permission"
    },
    {
      "type": "p",
      "text": "Check conservation designation, any Article 4 direction, listed status and existing conditions. Demolition or alteration of a boundary can raise a different question from adding automation. Ask the planning authority to identify the process for the complete proposal."
    },
    {
      "type": "p",
      "text": "Our <a href=\"/blog/article-4-directions-gate-planning-permission/\">Article 4 guide</a> explains how to read a direction. Use the <a href=\"/local-regulations/\">council directory</a> to locate the responsible authority."
    },
    {
      "type": "h2",
      "text": "Consider repair before replacement"
    },
    {
      "type": "p",
      "text": "Ask a suitable metalworker or joiner to assess the existing gate and supports. Retaining sound fabric may be an option, but condition and safe operation must guide the proposal. Compare repair, replacement and automation as separate pieces of work."
    },
    {
      "type": "p",
      "text": "Our <a href=\"/blog/wrought-iron-gate-restoration-london/\">metal-gate restoration guide</a> covers material identification and finish questions. Do not remove historic features before the necessary advice or consent."
    },
    {
      "type": "h2",
      "text": "Show the complete proposed entrance"
    },
    {
      "type": "p",
      "text": "Drawings should show gate proportions, infill, pillars, finish and opening path. Include visible controls, cable routes, drainage and groundworks. A concealed motor still needs foundations and maintenance access."
    },
    {
      "type": "p",
      "text": "Agree who obtains permissions and which approved details govern fabrication. Compare the quotation against those drawings before ordering."
    },
    {
      "type": "p",
      "text": "Further reading: <a href=\"https://www.planningportal.co.uk/permission/common-projects/fences-gates-and-garden-walls/planning-permission/\">Planning Portal gate and boundary guidance</a>."
    }
  ],
  "featuredImageAlt": "Gate specialist discussing sympathetic ironwork in a London conservation area",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},

  {
  "slug": "tree-protection-orders-gate-installation",
  "relatedServiceSlug": "wooden-driveway-gates",
  "title": "Tree Preservation Orders and Driveway Gate Groundworks",
  "metaTitle": "Tree Preservation Orders and Driveway Gate Groundworks | Driveway Gates London",
  "metaDescription": "Check protected-tree constraints before planning gate posts, foundations, drainage or cable routes near front-garden trees.",
  "category": "Planning & Regulations",
  "publishDate": "2026-03-18",
  "featuredImage": "/images/blog/tree-protection-orders-gate-installation.webp",
  "excerpt": "Check protected-tree constraints before planning gate posts, foundations, drainage or cable routes near front-garden trees.",
  "content": [
    {
      "type": "h2",
      "text": "Check the tree and proposed work before excavation"
    },
    {
      "type": "p",
      "text": "Gate posts, foundations, tracks, drainage and cable routes can affect nearby trees as well as the entrance. Start by identifying the trees and discussing the proposed work with the local planning authority and a competent arboricultural adviser where needed."
    },
    {
      "type": "p",
      "text": "Check Tree Preservation Orders, conservation-area status and relevant conditions on existing planning permissions. Do not assume permission for a gate authorises all work affecting a tree."
    },
    {
      "type": "h2",
      "text": "What a Tree Preservation Order can restrict"
    },
    {
      "type": "p",
      "text": "A Tree Preservation Order protects specified trees, groups or woodlands. Government guidance identifies prohibited activities without the authority’s written consent, including cutting down, topping, lopping, uprooting, wilful damage and destruction. It also explains that cutting roots can require consent."
    },
    {
      "type": "p",
      "text": "The work, exemptions and procedure need checking for the actual circumstances. Consult <a href=\"https://www.gov.uk/guidance/tree-preservation-orders-and-trees-in-conservation-areas\" target=\"_blank\" rel=\"noopener noreferrer\">GOV.UK guidance on protected trees</a> and the relevant local authority before carrying out work."
    },
    {
      "type": "h2",
      "text": "Conservation-area trees need a separate check"
    },
    {
      "type": "p",
      "text": "A tree can be subject to conservation-area controls even where it is not covered by a Tree Preservation Order. Notification requirements and exceptions depend on the circumstances. Ask the council which process applies and allow for it before agreeing a start date."
    },
    {
      "type": "p",
      "text": "A borough label or generic website statement cannot confirm the status of your tree. Keep the authority’s response, any consent and its conditions with the project records."
    },
    {
      "type": "h2",
      "text": "Give the adviser the full entrance layout"
    },
    {
      "type": "p",
      "text": "Show the proposed gate, supports, motor or track, power cable, drainage and paving changes. Include temporary construction access, storage and vehicle movements. An excavation outside the visible canopy is not automatically clear of roots."
    },
    {
      "type": "p",
      "text": "Ask the arboricultural adviser and gate contractor to coordinate the required protection area, access restrictions and construction method. Do not substitute a simple trunk-distance formula or a permitted percentage of root loss for that assessment."
    },
    {
      "type": "h2",
      "text": "Agree the method and responsibilities in writing"
    },
    {
      "type": "p",
      "text": "The proposal should identify who will obtain information or consent, which work is permitted, the protection arrangements and any supervision required. Where the layout needs to change to avoid harm, update the gate drawings and quotation before construction."
    },
    {
      "type": "p",
      "text": "This article does not prescribe air-spading pressures, root barriers or a universal foundation detail. Those choices need site-specific advice. Do not cut exposed roots or alter the agreed method to keep a gate job moving; stop the affected work and obtain advice."
    },
    {
      "type": "h2",
      "text": "Prepare the enquiry and compare the scope"
    },
    {
      "type": "p",
      "text": "Send the property location, photographs from accessible positions and a description of the entrance work you want. Share tree reports, council responses and existing plans if you have them. Ask which specialist work falls within the gate quotation and which needs a separate appointment."
    },
    {
      "type": "p",
      "text": "Our <a href=\"/guides/electric-driveway-gates-cost-london/\">gate quotation checklist</a> helps identify exclusions. <a href=\"/contact/\">Discuss the gate project</a> before commissioning equipment that may not fit the agreed protected-tree layout."
    },
    {
      "type": "h2",
      "text": "Frequently Asked Questions"
    },
    {
      "type": "h3",
      "text": "Does a gate project need checks for nearby tree roots?"
    },
    {
      "type": "p",
      "text": "Yes. Foundations, tracks, cables, drainage and construction access can affect roots. Check protected status and obtain competent advice for the proposed work before excavation."
    },
    {
      "type": "h3",
      "text": "Does gate planning permission automatically allow root cutting?"
    },
    {
      "type": "p",
      "text": "Do not assume that it does. Ask the local authority which permissions, tree consents, conditions or notifications apply to the actual work."
    },
    {
      "type": "h3",
      "text": "Can I use a standard distance from the trunk for the gate post?"
    },
    {
      "type": "p",
      "text": "A generic distance is not a site design. Ask the relevant adviser and contractor to establish the protection and construction arrangements for the tree and entrance."
    }
  ],
  "featuredImageAlt": "Arborist and gate contractor inspecting tree roots beside a driveway",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "smart-gate-integration-ring-nest-control4",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Connecting Driveway Gates to Ring, Nest and Control4",
  "metaTitle": "Connecting Driveway Gates to Ring, Nest and Control4 | Driveway Gates London",
  "metaDescription": "Check the exact access device, controller and regional support before promising smart-home gate control.",
  "category": "Smart & Security",
  "publishDate": "2026-03-19",
  "featuredImage": "/images/blog/smart-gate-integration-ring-nest-control4.webp",
  "excerpt": "Check the exact access device, controller and regional support before promising smart-home gate control.",
  "content": [
    {
      "type": "h2",
      "text": "Separate visitor video from gate control"
    },
    {
      "type": "p",
      "text": "A camera can show a visitor without providing a compatible command to the gate. A command can request opening without confirming the leaf’s position. Write down which functions you need: answer a visitor, grant access, see gate status or manage temporary users."
    },
    {
      "type": "p",
      "text": "Ask the installer to identify every device, interface, app and subscription involved. Have the gate engineer assess unattended operation as part of the complete system."
    },
    {
      "type": "h2",
      "text": "Ring: check the actual access product"
    },
    {
      "type": "p",
      "text": "Ring’s <a href=\"https://uk.ring.com/support/articles/q5f60/Ring-Access-Controller-Pro-Information\">Access Controller Pro information</a> describes a relay-triggered access device. That does not establish that a Ring doorbell alone will control your gate, or that a particular product and service are supported for your UK installation."
    },
    {
      "type": "p",
      "text": "Use Ring’s <a href=\"https://ring.com/gb/en/support/articles/xwk4u/Ring-Intercom-Support\">Intercom compatibility guidance</a> for an existing intercom, then confirm the exact gate-side interface and regional availability before ordering."
    },
    {
      "type": "h2",
      "text": "Nest: do not infer gate compatibility"
    },
    {
      "type": "p",
      "text": "Google’s <a href=\"https://support.google.com/googlehome/answer/9247132?hl=en\">Nest doorbell compatibility guidance</a> warns that integrated intercom and gate-control systems typically do not work with the doorbell. A separate video feed should not be described as a supported gate-opening integration."
    },
    {
      "type": "p",
      "text": "If an installer proposes an additional controller, request its manufacturer-supported connection, account requirements and failure behaviour. Do not rely on a future Matter or mobile-network feature promise."
    },
    {
      "type": "h2",
      "text": "Control4: specify the complete system"
    },
    {
      "type": "p",
      "text": "Control4 documents <a href=\"https://www.control4.com/solutions/products/door-stations\">video door stations</a> for visitor communication. Ask the integrator for the proposed door station, controller, software requirements and configured gate-control function. Record any licence or remote-access charges."
    },
    {
      "type": "p",
      "text": "Before handover, demonstrate visitor calls, authorised release, access removal and recovery after connection loss. Compare the resulting scope with a dedicated <a href=\"/guides/best-intercom-systems/\">gate intercom</a>. These examples are compatibility checks, not a statement that Driveway Gates London supplies each brand."
    }
  ],
  "featuredImageAlt": "Home technology installer configuring smart driveway-gate controls",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "video-intercom-comelit-vs-hikvision",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Comelit vs Hikvision Gate Intercoms: Compare the Actual System",
  "metaTitle": "Comelit vs Hikvision Gate Intercoms: Compare the Actual System | Driveway Gates London",
  "metaDescription": "Compare documented intercom components, wiring and account requirements instead of choosing a brand by unsupported rankings.",
  "category": "Smart & Security",
  "publishDate": "2026-03-19",
  "featuredImage": "/images/blog/video-intercom-comelit-vs-hikvision.webp",
  "excerpt": "Compare documented intercom components, wiring and account requirements instead of choosing a brand by unsupported rankings.",
  "content": [
    {
      "type": "h2",
      "text": "Compare a complete visitor workflow"
    },
    {
      "type": "p",
      "text": "Start with where the call should ring, whether you need video on a phone or indoor screen, and how you will grant access. Include more than one resident and a fallback for someone without an app."
    },
    {
      "type": "p",
      "text": "Request the outdoor station, indoor unit, power supply, network equipment and gate-release interface in each quotation. A monitor and a door station perform different roles and are not direct substitutes."
    },
    {
      "type": "h2",
      "text": "A documented Comelit example"
    },
    {
      "type": "p",
      "text": "Comelit identifies the <a href=\"https://pro.comelitgroup.com/en-ie/product/6741w\">6741W Mini Wi-Fi monitor</a> as a component for Simplebus 2 video-entry systems. Its <a href=\"https://comelitgroup.com/comelit-app-smart-registration/\">app registration guidance</a> names compatible devices. Confirm the complete outdoor-station and interface arrangement for a gate installation."
    },
    {
      "type": "p",
      "text": "This gives an existing Simplebus household a specific configuration to investigate. It does not prove compatibility with an unrelated controller or establish the full system cost."
    },
    {
      "type": "h2",
      "text": "A documented Hikvision example"
    },
    {
      "type": "p",
      "text": "Hikvision’s <a href=\"https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000083/S000000129/S000000131/OFR002275/M000058902/Data_Sheet/DS-KV6113-WPE1C-Video-Intercom-Villa-Door-Station_Datasheet_20231019.pdf\">DS-KV6113-WPE1(C) datasheet</a> describes a villa door station with a 2 MP camera, standard PoE and Hik-Connect support. Use the exact model suffix when comparing specifications."
    },
    {
      "type": "p",
      "text": "Ask which indoor station or other components the proposed setup needs, how calls and recording work with the chosen firmware, and how the gate connection will be commissioned. The datasheet is not a promise about every Hikvision model."
    },
    {
      "type": "h2",
      "text": "Choose on support and ownership"
    },
    {
      "type": "p",
      "text": "Compare the demonstration, cable routes, ongoing charges, account ownership and the process for removing users. Confirm recording and privacy arrangements for your actual entrance. No intercom brand makes every installation automatically compliant."
    },
    {
      "type": "p",
      "text": "Ask the supplier to confirm availability, supported updates and warranty terms. These product examples are not an endorsement, price offer or confirmation that we supply either configuration. Use our <a href=\"/guides/best-intercom-systems/\">intercom checklist</a> when discussing <a href=\"/services/access-control/video-intercoms/\">video-entry installation</a>."
    }
  ],
  "featuredImageAlt": "Installer comparing two video intercom options for a London driveway gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "gsm-gate-openers-london",
  "relatedServiceSlug": "gate-automation-kits",
  "title": "GSM Gate Openers: Network, SIM and Access Checks",
  "metaTitle": "GSM Gate Openers: Network, SIM and Access Checks | Driveway Gates London",
  "metaDescription": "Check phone-entry compatibility, signal, SIM costs and account ownership before adding a mobile gate opener.",
  "category": "Smart & Security",
  "publishDate": "2026-03-19",
  "featuredImage": "/images/blog/gsm-gate-openers-london.webp",
  "excerpt": "Check phone-entry compatibility, signal, SIM costs and account ownership before adding a mobile gate opener.",
  "content": [
    {
      "type": "h2",
      "text": "Separate phone entry from visitor calling"
    },
    {
      "type": "p",
      "text": "Some gate controllers recognise an authorised phone number and request an opening when it calls. An intercom also lets a visitor speak to a resident. Ask which function the proposed device provides, whether it uses voice, SMS or data, and what the caller experiences."
    },
    {
      "type": "p",
      "text": "A remote command does not confirm that the entrance is clear or the gate has opened. Discuss how the complete system manages unattended operation and how you will know whether a fault has prevented movement."
    },
    {
      "type": "h2",
      "text": "Check the device, SIM and network together"
    },
    {
      "type": "p",
      "text": "Ask for the exact device model and supported network technologies. Confirm the SIM plan permits its required services and how the unit handles caller identification. A label saying 4G does not, by itself, confirm support for the voice service your network uses."
    },
    {
      "type": "p",
      "text": "Mobile operators are retiring older networks. Check <a href=\"https://www.ofcom.org.uk/phones-and-broadband/coverage-and-speeds/3g-switch-off\">Ofcom’s current switch-off guidance</a> and obtain the equipment supplier’s migration advice. Avoid buying an older controller solely because a SIM currently connects."
    },
    {
      "type": "h2",
      "text": "Survey the signal and ongoing costs"
    },
    {
      "type": "p",
      "text": "Test service at the gate position on the proposed network. Discuss the enclosure, antenna location, cable route and power supply with the installer. Nearby buildings and the installed position can affect the result."
    },
    {
      "type": "p",
      "text": "Confirm monthly charges, call or data allowances, top-up rules and what happens if an account expires. Ask whose name holds the SIM and how the household can change numbers or recover administrator access."
    },
    {
      "type": "h2",
      "text": "Hand over access management"
    },
    {
      "type": "p",
      "text": "Request a demonstration of adding and removing authorised users using the actual manual. Remove default credentials, restrict administrator access and arrange a backup entry method. Keep account recovery information with your gate records."
    },
    {
      "type": "p",
      "text": "For installation, see <a href=\"/services/access-control/gsm-phone-entry/\">GSM phone entry</a>. Compare visitor workflows in our <a href=\"/guides/best-intercom-systems/\">intercom guide</a>. A failing controller belongs in a <a href=\"/services/gate-repair-and-maintenance/\">repair assessment</a> rather than a generic SMS reset sequence."
    },
    {
      "type": "h2",
      "text": "Frequently Asked Questions"
    },
    {
      "type": "h3",
      "text": "Will any UK SIM work?"
    },
    {
      "type": "p",
      "text": "No universal compatibility claim is reliable. Check the device, network, required voice/SMS/data services and tariff restrictions together."
    }
  ],
  "featuredImageAlt": "Technician installing a cellular phone module in a gate control cabinet",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},

  {
  "slug": "solar-powered-gate-automation-london",
  "relatedServiceSlug": "gate-automation-kits",
  "title": "Can Solar Power Run a Driveway Gate in London?",
  "metaTitle": "Can Solar Power Run a Driveway Gate in London? | Driveway Gates London",
  "metaDescription": "Assess winter generation, shade, standby loads and backup arrangements before choosing solar gate automation.",
  "category": "Automation",
  "publishDate": "2026-03-20",
  "featuredImage": "/images/blog/solar-powered-gate-automation-london.webp",
  "excerpt": "Assess winter generation, shade, standby loads and backup arrangements before choosing solar gate automation.",
  "content": [
    {
      "type": "h2",
      "text": "Start with the complete electrical load"
    },
    {
      "type": "p",
      "text": "List the motors, controller, intercom, receiver, sensors and any lighting or heaters. Record movement demand and the equipment that remains powered while the gate waits. The number of opening cycles alone cannot determine the required panel and battery."
    },
    {
      "type": "p",
      "text": "Use measured consumption or specifications for the exact equipment. Our <a href=\"/guides/electric-gate-running-costs/\">running-cost calculation</a> separates movement from standby demand."
    },
    {
      "type": "h2",
      "text": "Design for the site and winter use"
    },
    {
      "type": "p",
      "text": "Ask the designer to assess panel location, orientation, shading and seasonal generation. Trees, buildings and winter sunlight can change the available energy. An annual generation average does not establish reliable operation through a run of poor weather."
    },
    {
      "type": "p",
      "text": "The proposal should state expected use, assumptions for low-generation periods and the battery reserve. Request a site-specific calculation rather than a generic panel, voltage and battery shopping list."
    },
    {
      "type": "h2",
      "text": "Agree the fallback before ordering"
    },
    {
      "type": "p",
      "text": "Ask what happens when the battery reaches its operating limit, how you receive a warning and what access remains possible. Confirm charging arrangements, battery replacement and safe manual operation."
    },
    {
      "type": "p",
      "text": "A solar supply does not remove the need to assess gate movement, supports or protective measures. The installer must consider the complete powered entrance and how it behaves during a power shortage."
    },
    {
      "type": "h2",
      "text": "Compare the lifetime scope"
    },
    {
      "type": "p",
      "text": "Price the solar equipment, mounting, cabling, batteries, maintenance and replacement alongside a suitable mains-supply proposal. Include trenching and reinstatement for the mains option. A payback claim needs those actual costs and load assumptions."
    },
    {
      "type": "p",
      "text": "Send the gate location, photographs and expected use when you <a href=\"/contact/\">discuss your entrance</a>. Ask for equipment availability and supported configurations in writing before purchasing a kit."
    }
  ],
  "featuredImageAlt": "Installer mounting a solar panel for an automated timber driveway gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},

  {
  "slug": "anthracite-grey-gate-trends-london",
  "relatedServiceSlug": "metal-driveway-gates",
  "title": "Choosing Anthracite Grey for Driveway Gates",
  "metaTitle": "Choosing Anthracite Grey for Driveway Gates | Driveway Gates London",
  "metaDescription": "Compare colour samples, sheen and surrounding materials before specifying an anthracite gate finish.",
  "category": "Design",
  "publishDate": "2026-03-21",
  "featuredImage": "/images/blog/anthracite-grey-gate-trends-london.webp",
  "excerpt": "Compare colour samples, sheen and surrounding materials before specifying an anthracite gate finish.",
  "content": [
    {
      "type": "h2",
      "text": "Use a physical sample"
    },
    {
      "type": "p",
      "text": "Ask for the proposed coating colour reference, sheen and texture on the actual gate material. A screen image changes with display settings and lighting. Two finishes described as anthracite can look different beside brick, stone or render."
    },
    {
      "type": "p",
      "text": "Place a sample outside in sun and shade. Check it beside existing window frames and doors rather than assuming that the same colour name guarantees a visual match."
    },
    {
      "type": "h2",
      "text": "Specify the complete entrance"
    },
    {
      "type": "p",
      "text": "Include gate leaves, posts, hinges, visible motor covers and the pedestrian entrance in the finish schedule. Ask which components come from different manufacturers and whether slight variations are expected."
    },
    {
      "type": "p",
      "text": "For a wood-effect or two-tone design, inspect the joint between finishes and the rear face. Request a drawing showing the areas to receive each finish."
    },
    {
      "type": "h2",
      "text": "Compare upkeep and repair options"
    },
    {
      "type": "p",
      "text": "Ask for cleaning instructions, touch-up advice and written coating terms. Dark colour alone does not establish how much dust will show or how long the finish will last. Avoid choosing on unsourced trend or maintenance percentages."
    },
    {
      "type": "p",
      "text": "Compare <a href=\"/services/aluminium-driveway-gates/\">aluminium</a> and <a href=\"/services/metal-driveway-gates/\">other metal gates</a> using the actual construction and coating specification. Bring your preferred sample when you <a href=\"/contact/\">discuss your entrance</a>."
    }
  ],
  "featuredImageAlt": "Anthracite-grey aluminium driveway gate at a compact London home",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "accoya-wood-gates-london",
  "relatedServiceSlug": "wooden-driveway-gates",
  "title": "Accoya Wood for Driveway Gates",
  "metaTitle": "Accoya Wood for Driveway Gates | Driveway Gates London",
  "metaDescription": "Understand modified timber, gate construction, coating care and the difference between material and installation warranties.",
  "category": "Materials",
  "publishDate": "2026-03-21",
  "featuredImage": "/images/blog/accoya-wood-gates-london.webp",
  "excerpt": "Understand modified timber, gate construction, coating care and the difference between material and installation warranties.",
  "content": [
    {
      "type": "h2",
      "text": "What Accoya is"
    },
    {
      "type": "p",
      "text": "Accoya starts as softwood and undergoes acetylation, a modification process. It is not a naturally occurring hardwood or a chemical-free treatment. Read the manufacturer’s <a href=\"https://www.accoya.com/faq/is-accoya-hardwood-or-softwood/\">material explanation</a> when comparing it with other timber options."
    },
    {
      "type": "p",
      "text": "Specify the actual wood product in the quotation. The appearance of a finished gate also depends on its boards, joints, frame and coating."
    },
    {
      "type": "h2",
      "text": "Assess the finished gate"
    },
    {
      "type": "p",
      "text": "Ask how the joiner has designed the gate for its width, weight and movement. Discuss the supports, fittings and exposure alongside the timber choice. Material properties alone cannot guarantee that a complete gate will never move, split or need adjustment."
    },
    {
      "type": "p",
      "text": "View a finish sample beside the property. Decide whether you want a painted surface, visible grain or a weathered appearance, and request the care schedule for that choice."
    },
    {
      "type": "h2",
      "text": "Read each warranty separately"
    },
    {
      "type": "p",
      "text": "Request the current manufacturer terms for the supplied material and the separate terms for fabrication, finish, fittings, installation and automation. Confirm what a claim covers, exclusions, records required and any labour charges."
    },
    {
      "type": "p",
      "text": "A timber warranty does not automatically cover coatings, hinges or the workmanship of a finished gate. Check the documents linked from <a href=\"https://www.accoya.com/uk/faqs/owning-accoya/\">Accoya’s ownership guidance</a> against the proposed application."
    },
    {
      "type": "h2",
      "text": "Compare like-for-like alternatives"
    },
    {
      "type": "p",
      "text": "Use the same dimensions, board layout, finish and automation scope to compare Accoya with other <a href=\"/services/wooden-driveway-gates/\">wooden gates</a>. Our <a href=\"/guides/aluminium-vs-wooden-driveway-gates/\">timber and aluminium comparison</a> includes wood-effect options. Ask for product availability and written terms before deciding."
    }
  ],
  "featuredImageAlt": "Joiner checking an Accoya-style timber driveway gate after wet weather",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "minimalist-steel-slat-gates-london",
  "relatedServiceSlug": "metal-driveway-gates",
  "title": "Steel Slat Driveway Gates: Privacy and Design Choices",
  "metaTitle": "Steel Slat Driveway Gates: Privacy and Design Choices | Driveway Gates London",
  "metaDescription": "Plan slat spacing, sightlines, frame details and safe movement for a contemporary entrance.",
  "category": "Design",
  "publishDate": "2026-03-21",
  "featuredImage": "/images/blog/minimalist-steel-slat-gates-london.webp",
  "excerpt": "Plan slat spacing, sightlines, frame details and safe movement for a contemporary entrance.",
  "content": [
    {
      "type": "h2",
      "text": "View the gaps from more than one angle"
    },
    {
      "type": "p",
      "text": "Slat width, depth and spacing change how much you can see through the gate. Ask for a sample or drawing showing views from the street, inside the garden and approaching at an angle. A straight-on photograph may hide gaps visible from elsewhere."
    },
    {
      "type": "p",
      "text": "Balance privacy with the view needed to leave the driveway. Include the height of a seated driver and pedestrians approaching along the pavement in the design discussion."
    },
    {
      "type": "h2",
      "text": "Draw the frame and rear face"
    },
    {
      "type": "p",
      "text": "Confirm the arrangement of frames, slats, joints and fixings on both sides. Ask how the pedestrian gate, posts and adjacent fencing will align. Horizontal and vertical designs can create different visual proportions, but neither orientation alone establishes structural performance."
    },
    {
      "type": "p",
      "text": "Discuss any accessible openings or footholds as part of the entrance assessment. Decorative spacing is not a substitute for checking hazards around powered movement."
    },
    {
      "type": "h2",
      "text": "Specify structure and finish"
    },
    {
      "type": "p",
      "text": "A closely boarded gate needs assessment for dimensions, exposure, supports and drive requirements. Ask the fabricator to specify the actual metal and corrosion-protection system, including treatment of joints and cut edges."
    },
    {
      "type": "p",
      "text": "Compare the proposed finish sample and written maintenance instructions. Explore <a href=\"/services/metal-driveway-gates/\">metal gate options</a> and <a href=\"/blog/anthracite-grey-gate-trends-london/\">colour selection</a> before finalising the quotation."
    }
  ],
  "featuredImageAlt": "Installers fitting a minimalist steel-slat gate to brick pillars",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "wrought-iron-gate-restoration-london",
  "relatedServiceSlug": "gate-repair-and-maintenance",
  "title": "Restoring Metal Driveway Gates in London",
  "metaTitle": "Restoring Metal Driveway Gates in London | Driveway Gates London",
  "metaDescription": "Assess the material, structure and finish before choosing repair, repainting, automation or replacement.",
  "category": "Restoration",
  "publishDate": "2026-03-22",
  "featuredImage": "/images/blog/wrought-iron-gate-restoration-london.webp",
  "excerpt": "Assess the material, structure and finish before choosing repair, repainting, automation or replacement.",
  "content": [
    {
      "type": "h2",
      "text": "Identify the metal and original details"
    },
    {
      "type": "p",
      "text": "A traditional appearance does not prove a gate is wrought iron. Ask a metalwork specialist to identify the material, previous repairs and the condition of leaves, hinges, fixings and supports. Photograph decorative details before work begins."
    },
    {
      "type": "p",
      "text": "A finish can hide loss of section or damaged joints. Separate cosmetic work from structural repair in the assessment, and keep people away from a gate that is unstable."
    },
    {
      "type": "h2",
      "text": "Agree preparation and repair methods"
    },
    {
      "type": "p",
      "text": "The proposed method should suit the metal, condition and existing coatings. Ask how the contractor will assess unknown old paint and manage dust, waste and nearby surfaces. Do not start abrasive stripping or heating from a generic restoration recipe."
    },
    {
      "type": "p",
      "text": "If the boundary is listed or has conservation controls, check required advice or consent before removing fabric. Read our <a href=\"/blog/conservation-area-gate-planning-london/\">conservation-area guide</a> and record any conditions in the scope."
    },
    {
      "type": "h2",
      "text": "Choose a finish for the exterior gate"
    },
    {
      "type": "p",
      "text": "Compare physical samples for colour, sheen and texture. Ask how the coating system treats joints, edges, repaired areas and the back face. Confirm which preparation and coating stages form part of the quotation."
    },
    {
      "type": "p",
      "text": "For a period entrance, compare the gate with the railings, piers and house details. There is no universal heritage-grade finish that replaces an assessment of the actual material and conservation context. Request care instructions and written finish terms."
    },
    {
      "type": "h2",
      "text": "Assess automation separately"
    },
    {
      "type": "p",
      "text": "A restored appearance does not establish suitability for powered movement. Ask for assessment of the hinges, supports, geometry, exposure and hazards around the opening before adding a drive."
    },
    {
      "type": "p",
      "text": "Compare repair and replacement proposals with equivalent finishing and handover scope. Discuss <a href=\"/services/metal-driveway-gates/\">metal gate options</a> or <a href=\"/services/gate-repair-and-maintenance/\">gate repairs</a> using photographs and your existing service records."
    }
  ],
  "featuredImageAlt": "Restoration specialist removing rust from a London wrought-iron gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},

  {
  "slug": "driveway-gate-property-value-london",
  "relatedServiceSlug": "electric-swing-gates",
  "title": "Do Driveway Gates Add Value to a London Home?",
  "metaTitle": "Do Driveway Gates Add Value to a London Home? | Driveway Gates London",
  "metaDescription": "Consider appearance, parking and upkeep without assuming a guaranteed sale-price increase.",
  "category": "Buying Guide",
  "publishDate": "2026-03-24",
  "featuredImage": "/images/blog/driveway-gate-property-value-london.webp",
  "excerpt": "Consider appearance, parking and upkeep without assuming a guaranteed sale-price increase.",
  "content": [
    {
      "type": "h2",
      "text": "Separate enjoyment from resale value"
    },
    {
      "type": "p",
      "text": "You may want a gate for privacy, appearance or control over access. Those reasons can justify a project without assuming that a buyer will repay its cost. We do not have evidence for a fixed percentage uplift or guaranteed return on a gate installation."
    },
    {
      "type": "p",
      "text": "Ask local estate agents or a valuer how the proposed entrance fits the property and its likely buyers. Describe the actual layout, parking space and maintenance requirements rather than asking about gates in general."
    },
    {
      "type": "h2",
      "text": "Make the entrance work well"
    },
    {
      "type": "p",
      "text": "A gate should leave suitable room for parking, turning and pedestrian access. Consider visitor calls, deliveries, bins and power cuts. Buyers may ask how easily the entrance works and what it costs to maintain."
    },
    {
      "type": "p",
      "text": "Compare designs that suit the frontage and avoid sacrificing usable parking just to fit a preferred opening style. Our <a href=\"/guides/swing-vs-sliding-gates/\">layout guide</a> explains the space checks."
    },
    {
      "type": "h2",
      "text": "Keep the project evidence"
    },
    {
      "type": "p",
      "text": "Keep the permissions or relevant checks, product information, quotation, handover records and service history. Confirm whether warranties transfer and whether access accounts can be handed to a new owner."
    },
    {
      "type": "p",
      "text": "Set the budget around the benefits you want and the <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a>. Treat any resale estimate as advice about your particular property, not a sales promise attached to the gate."
    }
  ],
  "featuredImageAlt": "Homeowner and estate agent viewing a gated London property frontage",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "driveway-gates-noise-reduction-london",
  "relatedServiceSlug": "wooden-driveway-gates",
  "title": "Will Driveway Gates Reduce Traffic Noise?",
  "metaTitle": "Will Driveway Gates Reduce Traffic Noise? | Driveway Gates London",
  "metaDescription": "Consider the complete boundary and the location of the noise before buying gates for acoustic performance.",
  "category": "Buying Guide",
  "publishDate": "2026-03-24",
  "featuredImage": "/images/blog/driveway-gates-noise-reduction-london.webp",
  "excerpt": "Consider the complete boundary and the location of the noise before buying gates for acoustic performance.",
  "content": [
    {
      "type": "h2",
      "text": "Do not budget on an untested decibel claim"
    },
    {
      "type": "p",
      "text": "A gate may change the openness of the front boundary, but its appearance and weight do not establish a particular reduction in traffic noise. Sound can reach the property around and above the entrance, through gaps and by routes unrelated to the gate."
    },
    {
      "type": "p",
      "text": "Ask for acoustic evidence that fits the actual proposal before paying for a promised numerical improvement. A result from another property cannot establish the outcome at yours."
    },
    {
      "type": "h2",
      "text": "Assess the whole frontage"
    },
    {
      "type": "p",
      "text": "Show an acoustic adviser the road, gate position, adjoining walls, ground levels and the windows or garden area you want to protect. Explain when the disturbance occurs and whether the gate would be open during those periods."
    },
    {
      "type": "p",
      "text": "Gate, fence and planting claims cannot simply be added together into a total reduction. Consider the boundary as a whole and compare practical options for the particular source and receiving location."
    },
    {
      "type": "h2",
      "text": "Check design trade-offs"
    },
    {
      "type": "p",
      "text": "A closed gate affects views, airflow and wind exposure, and must still provide a suitable entrance for people and vehicles. Ask the gate installer to coordinate any acoustic proposal with the supports, movement and protective measures."
    },
    {
      "type": "p",
      "text": "Choose <a href=\"/services/metal-driveway-gates/\">gate materials</a> and layout for the complete entrance. If noise reduction is the main objective, obtain the acoustic assessment before ordering a gate on that promise."
    }
  ],
  "featuredImageAlt": "Acoustic surveyor checking traffic noise behind a solid driveway gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "automated-gate-home-insurance",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Electric Driveway Gates and Home Insurance",
  "metaTitle": "Electric Driveway Gates and Home Insurance | Driveway Gates London",
  "metaDescription": "Ask your insurer how an automated gate affects your policy instead of assuming a premium discount or automatic cover.",
  "category": "Buying Guide",
  "publishDate": "2026-03-24",
  "featuredImage": "/images/blog/automated-gate-home-insurance.webp",
  "excerpt": "Ask your insurer how an automated gate affects your policy instead of assuming a premium discount or automatic cover.",
  "content": [
    {
      "type": "h2",
      "text": "Ask about your own policy"
    },
    {
      "type": "p",
      "text": "There is no insurance discount we can promise for adding a driveway gate. Contact your insurer or broker before relying on the gate as a policy security measure. Describe the proposed installation and any change to property access."
    },
    {
      "type": "p",
      "text": "Ask whether you need to notify them when the work is complete and whether the policy contains conditions about operation, locking or maintenance. Request confirmation that you can keep with your policy documents."
    },
    {
      "type": "h2",
      "text": "Clarify what damage and costs are covered"
    },
    {
      "type": "p",
      "text": "Ask how the policy treats the gate, motors, controls and underground services. Discuss accidental impact, storm or flood damage, electrical faults, wear, theft and the applicable excesses. These are questions for the insurer, not a list of guaranteed cover."
    },
    {
      "type": "p",
      "text": "Check whether a damaged gate that blocks the entrance requires a particular claims process before you arrange repairs. A product warranty and an insurance policy cover different risks."
    },
    {
      "type": "h2",
      "text": "Keep useful records"
    },
    {
      "type": "p",
      "text": "Retain the quotation, installed product details, invoice, handover information and service records. Take photographs of the completed entrance and record changes to the equipment."
    },
    {
      "type": "p",
      "text": "Use our <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a> to keep the installed scope clear. If you need <a href=\"/services/gate-repair-and-maintenance/\">repair work</a>, agree the inspection charge and authorisation arrangements while checking any insurer requirements."
    }
  ],
  "featuredImageAlt": "Homeowner photographing automated-gate security features for insurance",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},


  {
  "slug": "do-i-need-a-dropped-kerb-for-a-driveway-gate-london",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Do You Need a Dropped Kerb for a Driveway Gate?",
  "metaTitle": "Do You Need a Dropped Kerb for a Driveway Gate? | Driveway Gates London",
  "metaDescription": "Check vehicle-crossing approval separately from gate planning, paving and ownership permissions.",
  "category": "Planning & Regulations",
  "publishDate": "2026-06-22",
  "featuredImage": "/images/blog/do-i-need-a-dropped-kerb-for-a-driveway-gate-london.webp",
  "excerpt": "Check vehicle-crossing approval separately from gate planning, paving and ownership permissions.",
  "content": [
    {
      "type": "h2",
      "text": "A gate does not authorise driving across a pavement"
    },
    {
      "type": "p",
      "text": "If vehicles will cross a public footway to reach the property, check the vehicle-crossing requirements with the highway authority. An existing opening, gravel drive or gate is not proof that the crossing is approved."
    },
    {
      "type": "p",
      "text": "Use the <a href=\"https://www.gov.uk/apply-dropped-kerb\">GOV.UK dropped-kerb service</a> to find the relevant council. Ask about an existing crossing as well as a proposed new or widened one."
    },
    {
      "type": "h2",
      "text": "Show the complete access arrangement"
    },
    {
      "type": "p",
      "text": "Provide photographs, the property address and a plan showing the gate, parking space, road and pavement. Identify street trees, utility covers, lamps and other features near the proposed crossing."
    },
    {
      "type": "p",
      "text": "Ask the authority for its current eligibility rules, application process, approved work arrangements and charges. Do not book pavement work on the basis of another borough’s dimensions or a generic online price."
    },
    {
      "type": "h2",
      "text": "Keep the permissions separate"
    },
    {
      "type": "p",
      "text": "Check planning requirements for the gate and entrance, highway approval for the crossing, and ownership or lease restrictions. The responsible authority should confirm which processes apply to your address and road."
    },
    {
      "type": "p",
      "text": "Paving and drainage need their own design. Read our <a href=\"/blog/front-garden-paving-suds-london/\">front-garden paving guide</a> and include approved crossover work and surface reinstatement in the <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a>."
    }
  ],
  "featuredImageAlt": "Surveyor measuring a London pavement and kerb for driveway access",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "gate-motor-humming-not-moving",
  "relatedServiceSlug": "gate-repair-and-maintenance",
  "title": "Why Your Gate Motor Is Humming but Not Moving",
  "metaTitle": "Why Your Gate Motor Is Humming but Not Moving | Driveway Gates London",
  "metaDescription": "A humming gate motor needs diagnosis. Learn what you can observe safely, when to stop using the gate and what to tell a repair engineer.",
  "category": "Maintenance",
  "publishDate": "2026-03-23",
  "featuredImage": "/images/blog/gate-motor-humming-not-moving.webp",
  "excerpt": "A humming gate motor needs diagnosis. Learn what you can observe safely, when to stop using the gate and what to tell a repair engineer.",
  "content": [
    {
      "type": "h2",
      "text": "Stop repeated attempts to open the gate"
    },
    {
      "type": "p",
      "text": "If the motor hums but the gate does not move, stop pressing the remote or entry control. The sound does not identify one particular fault, and repeated attempts can place further strain on the system. Keep people and vehicles clear of the gate and its movement area."
    },
    {
      "type": "p",
      "text": "If there is smoke, a burning smell, damaged wiring, a leaning gate or unexpected movement, stop using the entrance. Use the isolation arrangements in your user instructions only if you can reach and operate them safely. Do not open electrical covers or approach damaged equipment. Contact an engineer; if someone is trapped or there is immediate danger, call the emergency services."
    },
    {
      "type": "h2",
      "text": "What can cause a humming gate motor?"
    },
    {
      "type": "p",
      "text": "An obstruction, a mechanical problem, a drive fault or an electrical supply/control problem can prevent movement. A damaged hinge, wheel or running gear can change the load on the motor. Some motor designs also have components that can fail while the motor still makes a noise."
    },
    {
      "type": "p",
      "text": "An engineer needs the actual equipment details and an assessment of the complete entrance to distinguish these causes. Motor voltage, capacitor requirements and diagnostic readings vary by system. A generic internet voltage figure or replacement part is not a reliable diagnosis."
    },
    {
      "type": "h2",
      "text": "Useful observations without dismantling anything"
    },
    {
      "type": "p",
      "text": "From a safe position, note whether one leaf or both are affected, whether the problem happens when opening or closing, and which normal user control you tried. Record when the problem started and whether a power interruption, vehicle impact or recent work preceded it. Do not recreate an unsafe movement to obtain a video."
    },
    {
      "type": "p",
      "text": "Look for visible debris in a track, a displaced gate or a damaged fitting without entering a trapping zone or touching moving parts. If the system has a user display, note the message according to its instructions. These observations help the engineer plan a visit; they are not a reason to remove guards or test exposed terminals."
    },
    {
      "type": "h2",
      "text": "Manual release is specific to your system"
    },
    {
      "type": "p",
      "text": "Follow the supplied user instructions and handover training if you need to use manual release. A released gate can move under wind, gravity or its own weight. Do not release a damaged or unstable gate, or try to push a gate that resists movement."
    },
    {
      "type": "p",
      "text": "If you do not know how to control and secure it, keep the area clear and ask for assistance. Our <a href=\"/guides/how-to-manually-open-electric-gate/\">manual-release guide</a> explains what information to check before acting. Never bypass a safety device to get the entrance working."
    },
    {
      "type": "h2",
      "text": "What to ask the repair engineer"
    },
    {
      "type": "p",
      "text": "Send your postcode, a description of the fault and any safely accessible model details. Share maintenance records and photographs of the entrance taken from a safe position. Mention whether the gate is stuck open or closed and whether it affects access to the property."
    },
    {
      "type": "p",
      "text": "Ask what the diagnostic visit covers, what it costs and how further work will be approved. The findings should explain the cause, any wider safety concern, the proposed repair and how the system will be checked before being returned to use. Electrical testing, capacitor work, control adjustments and powered movement tests belong with a competent person."
    },
    {
      "type": "p",
      "text": "Request <a href=\"/services/gate-repair-and-maintenance/\">gate repair and maintenance</a>, or read our advice on <a href=\"/blog/repair-electric-gates-installed-by-another-company/\">changing gate repair companies</a> if records or support are missing."
    },
    {
      "type": "h2",
      "text": "After the repair"
    },
    {
      "type": "p",
      "text": "Keep the diagnosis, parts information and service records with the gate instructions. Ask the engineer to explain any changed operating arrangements and the recommended maintenance for your equipment. Confirm the repair warranty in writing rather than assuming it matches the original installation cover."
    },
    {
      "type": "p",
      "text": "Source: <a href=\"https://www.hse.gov.uk/work-equipment-machinery/powered-gates/responsibilities.htm\" target=\"_blank\" rel=\"noopener noreferrer\">HSE guidance on responsibilities</a>. A humming noise alone does not establish whether a repair or replacement is needed."
    },
    {
      "type": "h2",
      "text": "Frequently Asked Questions"
    },
    {
      "type": "h3",
      "text": "Can I keep trying the remote?"
    },
    {
      "type": "p",
      "text": "Stop repeated attempts when the motor runs or hums without moving the gate. Keep clear and arrange assessment rather than trying to force operation."
    },
    {
      "type": "h3",
      "text": "Does humming mean the capacitor has failed?"
    },
    {
      "type": "p",
      "text": "Not necessarily. Causes vary with the motor and installation. A competent engineer needs to diagnose the fault; do not open the motor or replace electrical parts from a generic online suggestion."
    },
    {
      "type": "h3",
      "text": "Can you assess gates installed by another company?"
    },
    {
      "type": "p",
      "text": "Send the equipment details and fault description so we can discuss an assessment. Confirm the visit scope and charges before booking."
    }
  ],
  "featuredImageAlt": "Repair engineer diagnosing a stationary sliding-gate motor",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
  "slug": "electric-gate-parcel-delivery-access-london",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Parcel and Delivery Access Through Electric Gates",
  "metaTitle": "Parcel and Delivery Access Through Electric Gates | Driveway Gates London",
  "metaDescription": "Choose a delivery routine that works when you are home, away or unable to answer an intercom.",
  "category": "Smart & Security",
  "publishDate": "2026-06-23",
  "featuredImage": "/images/blog/electric-gate-parcel-delivery-access-london.webp",
  "excerpt": "Choose a delivery routine that works when you are home, away or unable to answer an intercom.",
  "content": [
    {
      "type": "h2",
      "text": "Choose where parcels should go"
    },
    {
      "type": "p",
      "text": "Decide whether a courier should enter the driveway or leave a parcel at an accessible delivery point outside the powered gate. Give clear instructions that do not require climbing, reaching through the gate or leaving goods in its movement path."
    },
    {
      "type": "p",
      "text": "Consider pedestrian access and the position of a parcel box before adding an entry device. A delivery routine should also work when you cannot answer a call."
    },
    {
      "type": "h2",
      "text": "Manage codes and visitor calls"
    },
    {
      "type": "p",
      "text": "A keypad can offer temporary or separately managed codes if the selected product supports them. Check how codes expire and how you remove access. Avoid placing a permanent household code in public delivery notes."
    },
    {
      "type": "p",
      "text": "A video or phone intercom lets you speak with the visitor, subject to the installed connection and app features. Notifications, recordings and remote release vary by model and account. Request a demonstration rather than assuming they are included."
    },
    {
      "type": "h2",
      "text": "Keep movement and access separate"
    },
    {
      "type": "p",
      "text": "Letting a visitor in does not confirm that the gate’s path is clear. The installation needs protective measures for the actual entrance, and users need instructions on where to wait and move. Do not ask a courier to hold a powered leaf open or obstruct a sensor."
    },
    {
      "type": "p",
      "text": "Agree an alternative for network or power failure. Keep manual release to trained users following the supplied instructions, rather than sharing a generic release sequence with delivery drivers."
    },
    {
      "type": "h2",
      "text": "Choose the equipment around the routine"
    },
    {
      "type": "p",
      "text": "Compare <a href=\"/services/access-control/keypad-entry-systems/\">keypad access</a>, <a href=\"/services/access-control/video-intercoms/\">video entry</a> and <a href=\"/services/access-control/gsm-phone-entry/\">phone entry</a>. Check account ownership and recurring charges in the quotation. Our <a href=\"/guides/uk-electric-gate-safety-laws/\">gate safety guide</a> explains the handover information to request."
    }
  ],
  "featuredImageAlt": "Courier using an intercom to deliver a parcel through an electric gate",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
    slug: 'running-power-to-a-gate-no-boundary-mains-london',
    draft: true,
    relatedServiceSlug: 'automated-gate-systems',
    title: 'Running Power to a Gate When There Is No Boundary Mains in London',
    metaTitle: 'Powering a Gate With No Boundary Mains | London',
    metaDescription: 'How to get power to an automated driveway gate when there is no mains at the boundary. SWA cable runs, voltage drop, trenching a paved London front garden, and reinstatement.',
    category: 'Installation',
    publishDate: '2026-07-02',
    featuredImage: '/images/gates/gate-automation-intercom-evening-lighting.png',
    excerpt: 'Most London front boundaries have no mains supply, so an automated gate needs a cable run from the house to the pillar. Here is how that run is sized, buried, and reinstated across a paved front garden without tripping the gate or the regulations.',
    content: [
      { type: 'h2', text: 'Why the gate has no power to start with' },
      { type: 'p', text: 'A gate motor needs a permanent supply, and on almost every London property the nearest mains is inside the house, not at the boundary. The consumer unit sits in a hallway cupboard or under the stairs, and the gate pillar can be ten, fifteen or twenty metres away across a paved or gravelled front garden. Nothing at the boundary carries power on its own, so the job is really about getting a safe, correctly sized cable from the house out to the pillar and terminating it where the control board lives.' },
      { type: 'p', text: 'That single fact drives most of the cost and most of the disruption. The motor itself is the easy part. The awkward part is the trench, the cable and the reinstatement of whatever surface you have to lift, which on a typical London frontage is block paving or a poured resin bound drive rather than open soil.' },
      { type: 'p', text: 'It is worth separating this from the off-grid route. If digging a run from the house is genuinely impractical, a self-contained setup can work instead, and we cover when the sums add up in the piece on [solar powered gate automation](/blog/solar-powered-gate-automation-london/). For most London driveways though, a wired supply from the house is more reliable through a grey winter and is the default we price against.' },
      { type: 'h2', text: 'What the cable run actually involves' },
      { type: 'p', text: 'The standard way to carry power outdoors is steel wire armoured cable, usually shortened to SWA. The steel braid under the outer sheath gives it the mechanical protection a buried cable needs, so it can be laid directly in a trench rather than threaded through separate conduit for its whole length. At each end it terminates into a brass gland that grips the armour and, outdoors, seals against water.' },
      { type: 'p', text: 'Burial depth is not a free choice. Industry practice, backed by guidance such as the outdoor wiring advice from [Electrical Safety First](https://www.electricalsafetyfirst.org.uk/professional-resources/wiring-regulations/new-rewired-and-similar-installations/), is a minimum of around 450mm under a garden and around 600mm under a driveway or anywhere vehicles cross, laid on a bed of sand clear of sharp stones with yellow and black warning tape run above it so a future spade finds the tape before the cable.' },
      { type: 'p', text: 'Cable size matters as much as depth, because a long run loses voltage along its length. A thin cable that would be fine over three metres can drop enough voltage over twenty metres to leave the motor sluggish or the control board resetting. This is why we step up the conductor size for longer runs rather than defaulting to the smallest cable that carries the current. The same voltage-drop thinking applies to the choice between above-ground and underground motors, which is set out in the guide to [underground gate motors for London driveways](/blog/underground-gate-motors-london/).' },
      { type: 'table', text: 'Run length (house to pillar) | Typical residential approach | Why\nUnder 10m | 1.5mm or 2.5mm SWA | Voltage drop stays within limits on a light gate load\n10m to 20m | 2.5mm SWA, sized on the day | Longer run, drop starts to matter\nOver 20m | 4mm SWA or larger | Voltage drop becomes the deciding factor, not current' },
      { type: 'p', text: 'Every outdoor circuit also has to sit behind 30mA RCD protection, and adding a new circuit to feed the gate is notifiable work under the building regulations rather than a job you can wire and forget. The government guidance in [Approved Document P](https://www.gov.uk/government/publications/electrical-safety-approved-document-p) explains what counts as notifiable and why a registered electrician either self-certifies the work or it gets notified to building control. That certificate is not bureaucracy for its own sake; it is what proves the buried cable and its protection were installed correctly if you ever sell the house.' },
      { type: 'h2', text: 'The London complication: the trench crosses a paved front garden' },
      { type: 'p', text: 'On a rural plot the trench runs through soil and grass, and reinstatement means raking the turf back. In London the front garden is usually already a driveway. The cable has to cross block paving, resin bound gravel, concrete or a mix of all three, and every one of those surfaces has to be lifted and put back. That reinstatement is often the largest single line on the quote, well ahead of the cable itself.' },
      { type: 'p', text: 'Block paving is the most forgiving. Individual blocks lift out, the trench is dug, the cable laid, and the same blocks are relaid over sand, so a careful job leaves almost no scar. Resin bound and poured concrete are less kind, because you cannot lift and replace them tidily. You cut a channel, run the cable, and patch, and a patch in a continuous surface is always visible to some degree even when it is done well. Knowing which surface you have changes both the price and the finish, so it is worth flagging early.' },
      { type: 'list', items: [
        'Block paving: lift, trench, relay the same blocks. Cleanest reinstatement.',
        'Resin bound or concrete: cut a channel and patch. Expect a visible seam even on a good job.',
        'Shared or party boundary: if the run passes close to a neighbour boundary or a shared drive, agree the route before anyone digs.'
      ] },
      { type: 'p', text: 'Route planning also has to dodge what is already under a London frontage. Older streets carry gas, water and sometimes lead runs close to the surface, and hitting one turns a cable job into an emergency. We trace the cleanest line from the consumer unit to the pillar, keep clear of known services, and treat the shortest straight line as a starting point rather than a rule.' },
      { type: 'h2', text: 'Where the cable joins the house' },
      { type: 'p', text: 'The indoor end of the run needs a proper origin, not a spur off the nearest socket. The usual arrangement is a dedicated way in the consumer unit or a suitably protected connection point, from which the SWA leaves the house through a cored hole and drops into the trench. Getting from the board to the outside wall is frequently the fiddly bit in a terraced house, because the board is central and the route to an external wall runs through the fabric of the building.' },
      { type: 'p', text: 'At the gate end the SWA terminates into the control box, where it feeds the board, the motor and the safety devices. Photocells and a safe edge run off the same supply, and they are not optional; a powered gate that can trap a person has to detect an obstruction and stop, which is a legal duty rather than a nicety. Building that protection in from the first fix is far cheaper than retrofitting it, and it is one of the reasons a wired supply with a decent control box is worth doing once and doing properly.' },
      { type: 'h2', text: 'What it costs and how to keep it sensible' },
      { type: 'p', text: 'As an indicative range, the power side of a London gate installation, meaning the trench, the SWA cable, the electrical work and the reinstatement, commonly lands somewhere between roughly 600 and 1,800 pounds, with the surface you have to reinstate and the length of the run doing most of the moving. A short run under block paving sits near the bottom. A long run cut through resin bound gravel sits near the top. These are ballpark figures and any real number comes from a survey, but they show where the money goes, and the full picture is broken down in the guide to the [total cost of an automated driveway gate in London](/guides/electric-driveway-gates-cost-london/).' },
      { type: 'p', text: 'The most effective way to keep the cost down is to bundle the trench with any other groundwork. If the frontage is being repaved, the dropped kerb widened or the drainage redone, running the gate cable in the same open ground is a fraction of the price of coming back later to dig a fresh trench through a finished surface. Sequencing the work so the cable goes in while the ground is already open is the single biggest saving on offer.' },
      { type: 'p', text: 'The details that let us price your job accurately are the distance from the consumer unit to the pillar, the surface the cable has to cross, and whether the route runs near a neighbour boundary. Those three answers turn a vague estimate into a firm written quote. The wider [automated gate systems](/services/automated-gate-systems/) service page sets out how the supply ties into the rest of the installation, and the [gate automation kits](/services/gate-automation-kits/) page covers the motor and control gear the cable ultimately feeds.' },
      { type: 'p', text: 'If you want a figure for your own frontage, send us the run length, the surface, and a photo of where the consumer unit sits, and we will quote the power run and the gate together rather than in two disconnected visits.' },
    ]
  },
  {
  "slug": "front-garden-paving-suds-london",
  "relatedServiceSlug": "automated-gate-systems",
  "title": "Front Garden Paving, Drainage and Driveway Gates",
  "metaTitle": "Front Garden Paving, Drainage and Driveway Gates | Driveway Gates London",
  "metaDescription": "Coordinate the paving, water route and gate foundations before changing a front garden entrance.",
  "category": "Planning & Regulations",
  "publishDate": "2026-07-02",
  "featuredImage": "/images/blog/front-garden-paving-suds-london.webp",
  "excerpt": "Coordinate the paving, water route and gate foundations before changing a front garden entrance.",
  "content": [
    {
      "type": "h2",
      "text": "Check the scope of the paving rules"
    },
    {
      "type": "p",
      "text": "Planning Portal explains that traditional impermeable front-garden paving over five square metres needs planning permission where water does not run to a permeable area. Its <a href=\"https://www.planningportal.co.uk/permission/common-projects/paving-your-front-garden/\">front-garden paving guidance</a> also sets out limits and exceptions to permitted development."
    },
    {
      "type": "p",
      "text": "Check property type, listed status, planning conditions and any Article 4 direction before assuming that a permeable surface settles the planning question. Ask the authority about the actual proposal."
    },
    {
      "type": "h2",
      "text": "Design where the water will go"
    },
    {
      "type": "p",
      "text": "Tell the contractor about ponding, flooding and the current falls. Ask for the proposed surface build-up, drainage route and maintenance arrangements. A permeable top surface needs a suitable underlying design to work as intended."
    },
    {
      "type": "p",
      "text": "Coordinate the paving with gate tracks, motor boxes, supports and cable routes. Avoid setting final paving levels before those details have been agreed."
    },
    {
      "type": "h2",
      "text": "Treat the vehicle crossing separately"
    },
    {
      "type": "p",
      "text": "Changing the garden surface does not authorise driving across the public footway. Check the <a href=\"/blog/do-i-need-a-dropped-kerb-for-a-driveway-gate-london/\">dropped-kerb requirements</a> and any approval for a new or altered crossing."
    },
    {
      "type": "p",
      "text": "Ask the quotation to distinguish paving, drainage, gate groundworks and highway work. Record who obtains each permission and who reinstates disturbed surfaces."
    },
    {
      "type": "h2",
      "text": "Keep the system maintainable"
    },
    {
      "type": "p",
      "text": "Request cleaning and care instructions for the selected paving and drainage. Identify covers and access points that must remain reachable after the gate is installed."
    },
    {
      "type": "p",
      "text": "Consult the government’s <a href=\"https://www.gov.uk/government/publications/permeable-surfacing-of-front-gardens-guidance\">permeable-surfacing guidance</a> and use the <a href=\"/guides/electric-driveway-gates-cost-london/\">installed gate cost guide</a> to compare the complete entrance scope."
    }
  ],
  "featuredImageAlt": "Contractor demonstrating permeable driveway paving beside new gate posts",
  "updatedDate": "2026-10-02",
  "useMetaTitle": true
},
  {
    slug: 'vehicle-crossover-cost-timeline-london',
    draft: true,
    relatedServiceSlug: 'automated-gate-systems',
    title: 'What a Vehicle Crossover Costs and How Long It Takes in London',
    metaTitle: 'Dropped Kerb Cost and Timeline | London Crossover',
    metaDescription: 'What a vehicle crossover really costs in London, the application fee, the construction charge, and the weeks from applying to a usable dropped kerb before you fit a gate.',
    category: 'Planning & Regulations',
    publishDate: '2026-07-02',
    featuredImage: '/images/gates/gate-swing-open-night-stone-pillars-drive.png',
    excerpt: 'A driveway gate is only useful once a car can legally reach it, and on a road-parked London frontage that means a council vehicle crossover first. Here is what the crossover costs, the fee-then-quote sequence, and the weeks it adds before the gate goes on.',
    content: [
      { type: 'h2', text: 'The crossover is the bill people forget to budget for' },
      { type: 'p', text: 'When a London homeowner prices a driveway gate, the gate and its automation are usually the only figures in their head. If the car currently parks on the road and has to mount a full kerb to reach the front garden, there is a second bill they have not counted, and it often lands before the gate is even ordered. That bill is the vehicle crossover, the lowered and strengthened section of pavement the council builds so a car can cross the footway legally. Whether you [need a dropped kerb for a driveway gate](/blog/do-i-need-a-dropped-kerb-for-a-driveway-gate-london/) turns on that single question of how the car reaches the drive, and where the answer is yes, the crossover has to be paid for and built before the gate earns its keep.' },
      { type: 'p', text: 'It matters because the crossover is council-run highways work, not something a gate installer can bundle in. That separation is not just a legal nicety; it changes when the money goes out and who you are dealing with. The gate quote comes from us. The crossover charge comes from the council, on the council timetable, and the two rarely line up neatly.' },
      { type: 'h2', text: 'How the charging actually works' },
      { type: 'p', text: 'Almost every London borough splits the cost into two stages, and understanding the split stops the fees feeling like a surprise. The first stage is a non-refundable application or administration fee that buys you a site inspection and an estimate. You pay this to find out whether a crossover is even feasible at your frontage and what the construction will cost. It is not a deposit against the works; if the council refuses the crossover on highway-safety grounds, that fee is gone.' },
      { type: 'p', text: 'The second stage is the construction charge itself, quoted after the inspection and payable before the borough contractor turns up to build. Across London boroughs the application fee sits somewhere in the region of roughly 60 to 475 pounds depending on the council, and the construction charge for a standard single crossover commonly starts somewhere around 1,700 pounds and climbs from there. The London Borough of Bexley, for one, publishes its schedule openly, with an application fee and a construction charge that [starts from a set figure subject to the size of the works](https://www.bexley.gov.uk/services/parking-transport-and-streets/dropped-kerbs-and-crossovers/costs-timescales-and-how-apply-dropped-kerb). Every borough sets its own numbers, so treat these as indicative ranges and read your own council page for the exact figures.' },
      { type: 'table', text: 'Stage | What you pay for | Indicative London range\nApplication or admin fee | Site inspection and a written estimate | Roughly 60 to 475 pounds, non-refundable\nConstruction charge | The borough contractor building the crossover | From around 1,700 pounds, rising with size and street furniture\nExtras | Moving a lamp column, tree, chamber or parking sign | Added on top, quoted case by case' },
      { type: 'p', text: 'The extras are where a straightforward crossover turns expensive. If a lamp column, a street tree, a utility chamber or a stretch of controlled parking bay sits in the way, moving or reworking it is charged separately and often runs into four figures on its own. This is why two neighbours on the same road can be quoted very different numbers for what looks like the same job.' },
      { type: 'h2', text: 'The timeline from application to a usable kerb' },
      { type: 'p', text: 'The weeks matter as much as the pounds, because the crossover sets the pace for the whole project. After you submit the application and the fee, the council inspects the site and issues an estimate, and that first step commonly takes around three weeks. Once you accept the estimate and pay the construction charge, the works are typically scheduled to commence within around fourteen weeks, and longer where street furniture or another authority has to be involved. Put the two together and a from-scratch crossover realistically takes a few months from first application to a kerb you can drive over.' },
      { type: 'list', items: [
        'Apply and pay the fee, then wait for a site inspection and estimate, commonly around three weeks.',
        'Accept the estimate and pay the construction charge to join the works schedule.',
        'Works normally commence within around fourteen weeks of that payment, longer if a lamp column, tree or chamber has to move.',
        'Only once the kerb is built and signed off can a car legally cross the footway to the new driveway.'
      ] },
      { type: 'p', text: 'That lead time is the practical reason to start the crossover early rather than treating it as a finishing touch. If you order a gate first, you can end up with a finished, automated entrance and no legal way to drive a car up to it for weeks. Sequencing the council application ahead of, or alongside, the gate design keeps the two strands from colliding.' },
      { type: 'h2', text: 'Where the crossover meets the gate budget' },
      { type: 'p', text: 'It helps to see the crossover as one line in a larger frontage budget rather than a standalone shock. On a typical from-scratch London project the frontage swallows the paving, any drainage the surface needs, the pillar foundations, the power run and the crossover, and only then the gate and its automation. The full breakdown of the gate side sits in the guide to the [total cost of an automated driveway gate in London](/guides/electric-driveway-gates-cost-london/), and the crossover is the council-controlled figure that sits outside it. Reading the two together gives you the real all-in number.' },
      { type: 'p', text: 'There is a genuine saving in coordinating the groundworks. If the frontage is being dug up for paving or drainage anyway, having the pillar bases and the gate power cable go in while the ground is open is far cheaper than trenching a finished driveway later. The crossover itself is council work on the pavement side of the boundary, but the gate-side groundworks it triggers are worth planning as a single job. On a shallow frontage the geometry of the entrance also drives the gate choice, because a gate that swings out over the footway is not permitted and a gate that swings in eats parking depth, which pushes many homes towards a sliding, telescopic or inward-sensing arrangement. Fitting a pair of [electric swing gates](/services/electric-swing-gates/) that open inward on sensors is one common answer, and the right choice depends on how much depth the crossover leaves behind the kerb.' },
      { type: 'p', text: 'Before you commit to anything, the borough detail is worth checking directly, because classified roads, conservation areas and Article 4 streets all change whether a crossover is even granted. The council is the only body that can confirm feasibility, and our borough-by-borough notes on [London local planning and highway rules](/local-regulations/) are a sensible orientation before you make that call and pay the application fee. A plain walkthrough of how to [apply for a dropped kerb through your council](https://www.homebuilding.co.uk/advice/dropped-kerbs) points you at the right local team and the licence you will need.' },
      { type: 'p', text: 'When you know the access is deliverable, that is where we come in. Send us your frontage details using the form on this page, and we will quote the gate and its automation around whatever crossover timeline your council sets. We do not carry out the crossover itself, but we make sure the gate is planned so it is ready to go the moment the kerb is signed off.' }
    ]
  },
  {
    slug: 'minimum-driveway-depth-for-a-gate-london',
    draft: true,
    relatedServiceSlug: 'electric-sliding-gates',
    title: 'Minimum Driveway Depth for a Gate on a Shallow London Frontage',
    metaTitle: 'Minimum Driveway Depth for a Gate | London',
    metaDescription: 'How much driveway depth a London gate really needs, why councils expect a car to sit clear of the pavement, and which gate types work when the frontage is under five metres.',
    category: 'Planning & Regulations',
    publishDate: '2026-07-02',
    featuredImage: '/images/gates/gate-aluminium-sliding-vertical-bar-stone-pillars.png',
    excerpt: 'Plenty of London frontages are too shallow to park a car clear of the pavement, and that single measurement decides both whether a crossover is granted and which gate can actually close behind the car. Here is the depth to aim for and what to do when you fall short.',
    content: [
      { type: 'h2', text: 'The measurement that decides everything' },
      { type: 'p', text: 'Before the gate style, before the material, before the automation, there is one number that quietly governs a London front-garden project: the usable depth of the driveway, measured from the back edge of the pavement to the house or to wherever the car has to stop. That depth decides whether a car can sit entirely off the footway, which is the test the council applies to a crossover, and it also decides which gate can physically close behind a parked car. On a deep suburban plot none of this bites. On a shallow inner-London frontage it is the whole game.' },
      { type: 'p', text: 'The reason the council cares is straightforward. A crossover exists so a vehicle can leave the road and park clear of the pavement, not so it can hang over the footway with its boot in the path of pushchairs and pedestrians. If the driveway is too shallow to hold the car clear, the borough can refuse the crossover, and without the crossover the gate has nothing to close across. So the depth question comes first, ahead of any decision about the gate itself.' },
      { type: 'h2', text: 'How much depth a parked car actually needs' },
      { type: 'p', text: 'There is no single national figure, because each local highway authority sets its own standard, but the design guidance converges on a familiar range. A driveway meant to hold one car clear of the pavement is commonly expected to be at least around 4.8 to 5 metres deep, and many authorities design to a parking bay of roughly 2.5 metres wide by 5 metres long. Some go slightly longer to give a comfortable margin for larger cars. The Planning Portal sets out the general expectation that a hard-standing should let a vehicle stand off the highway, in its guidance on [paving a front garden and off-street parking](https://www.planningportal.co.uk/permission/common-projects/paving-your-front-garden/planning-permission).' },
      { type: 'p', text: 'The five-metre figure is not arbitrary. It reflects the length of an ordinary family car plus a little clearance, and highway design standards used by councils reflect the same thinking. Published design guidance such as a local authority parking standard, for example the off-street parking dimensions in the [Bristol residential parking design guidance](https://services.bristol.gov.uk/files/documents/4243-03-1-1-off-street-parking-spaces-and-private-drives/file), works to comparable bay sizes, which is why the rough five-metre depth crops up again and again even though the wording differs borough to borough.' },
      { type: 'table', text: 'Frontage depth (kerb to obstruction) | What it realistically holds | Gate implication\nUnder 4 metres | A car will overhang the pavement | Crossover often refused; gate secondary to the depth problem\n4 to 5 metres | One small to mid car, tight | Inward-swing gate eats parking; slide or fold usually needed\n5 metres and over | One car clear of the footway | Most gate types workable if width allows' },
      { type: 'p', text: 'Measure the honest depth before you fall in love with a gate design. Take it from the back of the kerb to the nearest fixed obstruction, whether that is the house wall, a bay window, a bin store or a step, because the car has to stop before it hits any of them while still sitting clear of the pavement. It is the tightest of those distances, not the widest, that governs what you can do.' },
      { type: 'h2', text: 'Why depth dictates the gate type, not just the parking' },
      { type: 'p', text: 'This is where a lot of shallow-frontage projects come unstuck. A swing gate needs somewhere to swing, and it cannot swing outward over a public footway, so on a shallow drive it has to swing inward, into the very space the car needs to park. A pair of swing leaves can steal a metre or more of parking depth at full open, which on a five-metre frontage is the difference between a car sitting clear and a car sitting proud of the kerb. The gate that was supposed to secure the parking ends up preventing it.' },
      { type: 'p', text: 'This is exactly why shallow London frontages lean so heavily on space-saving mechanisms. A sliding gate runs parallel to the boundary and takes nothing off the parking depth, and where there is not even enough side room to slide, a folding or telescopic system stacks into a fraction of the space. The way [telescopic gates save space on a small driveway](/blog/telescopic-gates-space-saving-london/) is precisely this, splitting the leaf so it retracts into a short run rather than a full gate width. Gradient adds another wrinkle, because a sloping approach changes how a gate hangs and swings, a problem worked through for [automated gates on a sloping driveway](/blog/automated-gates-sloping-driveways-london/).' },
      { type: 'p', text: 'There is also the pedestrian question. On a shallow frontage a full vehicle gate that has to open every time someone walks in is a nuisance, so many homes pair a slim [pedestrian side gate](/services/pedestrian-side-gates/) with the main gate, letting people come and go without cycling the driveway gate at all. That side gate needs its own sliver of frontage, which is one more claim on a depth that is already tight.' },
      { type: 'h2', text: 'What to do when the frontage is genuinely too shallow' },
      { type: 'p', text: 'Some London frontages simply will not hold a car clear of the pavement no matter how the gate is arranged, and it is better to know that at the measuring stage than after paying an application fee. If the honest depth is under four metres, a crossover is likely to be refused and the sensible move is to check feasibility with the council before spending anything. If it is marginal, in the four to five metre band, the gate choice becomes the lever that makes the parking work, and a sliding or telescopic system is usually the only way to keep the car clear once the gate is closed.' },
      { type: 'list', items: [
        'Measure kerb-to-obstruction at the tightest point, not the widest.',
        'Aim for a car to sit fully clear of the footway; around five metres is the usual target.',
        'On a marginal depth, pick a gate that adds nothing to the parking footprint, so a slide or fold rather than an inward swing.',
        'If the depth cannot hold a car clear, check crossover feasibility with the council before committing to a gate.'
      ] },
      { type: 'p', text: 'When your frontage has the depth, or a space-saving gate makes it work, that is where we help. Tell us the kerb-to-house measurement and the width you have using the form on this page, and we will specify a gate that closes cleanly behind a car parked fully off the pavement, rather than one that fights the space you have.' }
    ]
  },
  {
    slug: 'controlled-parking-zones-secured-off-street-parking-london',
    draft: true,
    relatedServiceSlug: 'gate-repair-and-maintenance',
    title: 'Controlled Parking Zones and the Value of Secured Off-Street Parking in London',
    metaTitle: 'CPZ and Secured Off-Street Parking Value | London',
    metaDescription: 'How a controlled parking zone changes the value of a private driveway in London, why a gated off-street space beats a permit, and what a secured frontage does for resale.',
    category: 'Planning & Regulations',
    publishDate: '2026-07-02',
    featuredImage: '/images/gates/gate-aluminium-swing-open-contemporary-mansion.png',
    excerpt: 'In a London controlled parking zone a private off-street space is worth far more than the paving it sits on. Here is how CPZs change the value of a driveway, why a permit is not a substitute, and what a gated frontage does for resale.',
    content: [
      { type: 'h2', text: 'Why parking is scarcer than it looks on a London street' },
      { type: 'p', text: 'On most inner-London streets you cannot simply park outside your own house whenever you like. Large parts of the capital sit inside a controlled parking zone, a CPZ, where kerbside space is regulated by permit and time restriction rather than left open. Residents buy an annual permit to use marked bays during controlled hours, visitors pay, and the supply of bays is deliberately smaller than the number of cars that would like them. In that setting a private off-street space stops being a convenience and becomes a genuinely scarce asset.' },
      { type: 'p', text: 'The rules behind CPZs are set locally and enforced hard. London Councils explains how the permit and bay system works across the boroughs in its overview of [how to park your car in London](https://www.londoncouncils.gov.uk/services/parking-services/how-park-your-car-london), and the detail varies street to street. What is consistent is the direction of travel: kerbside space is being managed ever more tightly, which quietly raises the worth of any parking that sits behind your own boundary and outside the council system entirely.' },
      { type: 'h2', text: 'A resident permit is not the same as a driveway' },
      { type: 'p', text: 'It is tempting to think a resident permit and a driveway do the same job. They do not. A permit is a licence to hunt for a space in a shared bay during controlled hours, not a guarantee of a space, and it is worthless the moment the bays are full. It also does nothing outside its own zone, and it disappears if you move. A driveway is different in kind: it is your space, always available, and it belongs to the property rather than to you.' },
      { type: 'p', text: 'There is a sharper edge to this in parts of London. Some newer homes are granted planning permission on the express condition that residents will not be eligible for a parking permit at all, typically through a Section 106 agreement or unilateral undertaking that a council uses to stop new development adding pressure to already-stretched bays. Planning lawyers are explicit about it, setting out how [car-free developments remove the right to a permit](https://www.keystonelaw.com/keynotes/use-of-s106-planning-obligations-restrictions-on-car-parking) as a condition of consent. For a household in one of those properties, off-street parking is not a nice-to-have; it is the only place they can legally keep a car near home. A private driveway, and a gate to secure it, is the whole answer rather than an upgrade.' },
      { type: 'h2', text: 'What the gate adds on top of the space' },
      { type: 'p', text: 'A driveway solves the where-to-park problem. A gate solves the harder problems that come with keeping a car on a busy street: casual theft, opportunist damage, and the steady creep of other people using your hard-standing when you are out. A closed, automated gate turns an open frontage into a defined private space that a stranger cannot roll a bike into or reverse a van across. On a CPZ street, where kerbside frustration runs high, that boundary is doing real work.' },
      { type: 'p', text: 'It also changes how the car itself is protected. A gate that stays shut except when you are entering or leaving keeps the vehicle inside a controlled zone, and pairing it with number-plate recognition so it opens for your own car and stays shut for everyone else is a common London setup, worked through for [ANPR gate entry on a London driveway](/services/access-control/anpr-systems/). The gate and its automation are the difference between a driveway anyone can drift onto and a secured space that behaves like part of the house. A well-specified pair of [automated gate systems](/services/automated-gate-systems/) is what makes that boundary reliable day to day rather than a gate you leave propped open because cycling it is a chore.' },
      { type: 'h2', text: 'What secured parking does for the property' },
      { type: 'p', text: 'The value shows up twice, in daily life and at resale. Day to day, a secured off-street space removes the permit renewal, the circling for a bay, and the low-grade anxiety of leaving a car on a contested street. At sale, a private gated driveway is one of the features London buyers actively filter for, precisely because they understand what parking is worth in a CPZ. It widens the pool of buyers to include the ones who would not consider a permit-only home, and it tends to support the asking price rather than being haggled away.' },
      { type: 'list', items: [
        'In a CPZ a permit only lets you compete for a shared bay; a driveway is a guaranteed space that belongs to the house.',
        'Some London homes are barred from permits by a planning condition, so off-street parking is the only legal option.',
        'A gate turns an open frontage into a defined, defensible space and keeps the car inside it.',
        'Gated off-street parking widens the buyer pool and supports resale value on a controlled street.'
      ] },
      { type: 'p', text: 'The resale angle is worth taking seriously, because a gate is one of the few frontage improvements that tends to return more than it costs on a parking-starved street, a point drawn out in the look at how a gate affects [driveway gate property value in London](/blog/driveway-gate-property-value-london/). Kept in good order, an automated gate is a long-term asset rather than a fitting that dates, and regular servicing protects the value as much as the mechanism.' },
      { type: 'p', text: 'If your street sits in a controlled parking zone and you are weighing up whether a gate is worth it, the honest answer usually turns on how scarce kerbside space is where you live and whether you are eligible for a permit at all. Tell us about your frontage and your street using the form on this page, and we will secure your off-street parking with a gate specified for the space and the security you actually need.' }
    ]
  },
];

export const blogArticles: BlogArticle[] = blogArticleEntries.map(article => {
  const featured = blogFeaturedImages[article.slug];
  return {
    ...article,
    ...(featured ? { featuredImage: featured.src, featuredImageAlt: featured.alt } : {}),
    // Old autoblogging inline images are intentionally removed. Each article
    // now has one relevant, high-quality featured photograph.
    content: article.content.filter(block => block.type !== 'image'),
  };
});

/** Live articles only (drafts excluded). Use for listings, sitemap, and routing. */
export const publishedArticles: BlogArticle[] = blogArticles.filter(a => !a.draft);

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return publishedArticles.find(a => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return publishedArticles.map(a => a.slug);
}
