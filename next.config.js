/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/blog/bi-fold-vs-sliding-gates-and-which-system-works-best-for-short-london-driveways/', destination: '/blog/bi-fold-vs-sliding-gates-london/', permanent: true },
      { source: '/blog/the-no-swing-solution-and-how-telescopic-gates-save-space-in-tight-front-gardens/', destination: '/blog/telescopic-gates-space-saving-london/', permanent: true },
      { source: '/blog/sloping-driveways-and-how-to-install-automated-gates-on-uneven-london-terrain/', destination: '/blog/automated-gates-sloping-driveways-london/', permanent: true },
      { source: '/blog/sidewalk-encroachment-and-how-to-navigate-uk-rules-on-outward-swinging-gates/', destination: '/blog/outward-swinging-gates-uk-rules/', permanent: true },
      { source: '/blog/underground-motors-and-why-discreet-automation-is-the-best-choice-for-period-london-homes/', destination: '/blog/underground-gate-motors-london/', permanent: true },
      { source: '/blog/article-4-directions-and-whether-you-need-planning-permission-for-a-new-gate-in-london/', destination: '/blog/article-4-directions-gate-planning-permission/', permanent: true },
      { source: '/blog/conservation-area-compliance-and-how-to-design-wrought-iron-gates-that-meet-council-standards/', destination: '/blog/conservation-area-gate-planning-london/', permanent: true },
      { source: '/blog/heritage-grade-finishes-and-how-to-balance-modern-automation-with-victorian-aesthetics/', destination: '/blog/heritage-gate-finishes-victorian-homes/', permanent: true },
      { source: '/blog/tree-protection-orders-and-how-gate-groundworks-can-affect-front-garden-trees/', destination: '/blog/tree-protection-orders-gate-installation/', permanent: true },
      { source: '/blog/smart-entry-in-2026-and-how-to-integrate-your-driveway-gate-with-ring-nest-and-control4/', destination: '/blog/smart-gate-integration-ring-nest-control4/', permanent: true },
      { source: '/blog/video-intercom-showdown-and-whether-comelit-or-hikvision-is-better-for-london-homes/', destination: '/blog/video-intercom-comelit-vs-hikvision/', permanent: true },
      { source: '/blog/gsm-gate-openers-and-why-you-should-be-able-to-open-your-london-gate-from-anywhere/', destination: '/blog/gsm-gate-openers-london/', permanent: true },
      { source: '/blog/automatic-number-plate-recognition-and-whether-your-driveway-is-ready-for-hands-free-entry/', destination: '/blog/anpr-gate-entry-london/', permanent: true },
      { source: '/blog/solar-powered-gate-automation-and-whether-london-gets-enough-sun-for-it-to-work-well/', destination: '/blog/solar-powered-gate-automation-london/', permanent: true },
      { source: '/blog/aluminium-vs-timber-gates-and-why-londoners-are-choosing-wood-effect-metal/', destination: '/blog/aluminium-vs-timber-gates-london/', permanent: true },
      { source: '/blog/why-anthracite-grey-still-dominates-london-driveway-gate-trends-in-2026/', destination: '/blog/anthracite-grey-gate-trends-london/', permanent: true },
      { source: '/blog/accoya-wood-gates-and-how-to-stop-timber-gates-warping-in-damp-london-winters/', destination: '/blog/accoya-wood-gates-london/', permanent: true },
      { source: '/blog/minimalist-steel-slat-gates-and-why-private-contemporary-designs-are-growing-in-london/', destination: '/blog/minimalist-steel-slat-gates-london/', permanent: true },
      { source: '/blog/how-a-bespoke-driveway-gate-can-increase-your-london-property-value/', destination: '/blog/driveway-gate-property-value-london/', permanent: true },
      { source: '/blog/can-installing-an-automated-gate-lower-your-home-insurance-premium/', destination: '/blog/automated-gate-home-insurance/', permanent: true },
      { source: '/blog/can-solid-driveway-gates-help-reduce-london-traffic-noise/', destination: '/blog/driveway-gates-noise-reduction-london/', permanent: true },
      { source: '/blog/restoring-wrought-iron-gates-and-how-to-bring-old-london-railings-back-to-life/', destination: '/blog/wrought-iron-gate-restoration-london/', permanent: true },
      { source: '/blog/force-testing-explained-and-why-your-gate-installer-must-legally-test-impact-power/', destination: '/blog/gate-force-testing-legal-requirements/', permanent: true },
      { source: '/blog/safety-photocells-vs-safety-ribs-and-which-gate-safety-tech-protects-kids-and-pets-better/', destination: '/blog/gate-safety-photocells-vs-safety-ribs/', permanent: true },
      { source: '/blog/how-to-manually-open-an-electric-gate-during-a-power-cut/', destination: '/blog/manual-gate-release-power-cut/', permanent: true },
      { source: '/blog/the-annual-service-checklist-for-preventing-gate-failure-during-a-london-freeze/', destination: '/blog/annual-gate-service-checklist-london/', permanent: true },
      { source: '/blog/how-to-budget-for-driveway-gate-installation-electricity-and-servicing-in-london/', destination: '/blog/driveway-gate-installation-costs-london/', permanent: true },
      { source: '/blog/the-total-cost-of-owning-an-automated-gate-in-london-in-2026/', destination: '/blog/automated-gate-total-cost-london/', permanent: true },
      { source: '/blog/why-your-gate-motor-is-humming-but-not-moving/', destination: '/blog/gate-motor-humming-not-moving/', permanent: true },
      // Guide slug redirects
      { source: '/guides/uk-gate-safety-laws/', destination: '/guides/uk-electric-gate-safety-laws/', permanent: true },
      { source: '/guides/driveway-gate-costs-london/', destination: '/guides/electric-driveway-gates-cost-london/', permanent: true },
      { source: '/guides/wood-vs-aluminium-gates/', destination: '/guides/aluminium-vs-wooden-driveway-gates/', permanent: true },
      { source: '/guides/gate-motor-humming-fix/', destination: '/guides/electric-gate-motor-humming-but-not-moving/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
