export const iappCredentials = ['CIPP/E', 'CIPP/US', 'CIPT', 'CIPM', 'FIP'] as const;

export const workspacePackages = [
  {
    name: 'Essential',
    price: '€800',
    billing: 'one-off',
    shortPrice: 'from €800 one-off',
    bestFor: 'Best for first structured setup',
    summary: 'Set up the core Notion GDPR Workspace with connected records and a cleaner starting structure.',
  },
  {
    name: 'Operational',
    price: '€1,600',
    billing: 'one-off',
    shortPrice: '€1,600 one-off',
    bestFor: 'Best for active privacy operations',
    summary: 'Broader implementation for teams that need stronger ownership, review routines, and linked records.',
  },
  {
    name: 'Growth',
    price: '€3,000',
    billing: 'one-off',
    shortPrice: '€3,000 one-off',
    bestFor: 'Best for broader rollout',
    summary: 'Wider workspace rollout for teams that need a more mature operating structure from the start.',
  },
] as const;

export const workspaceDetailedPackages = [
  {
    name: 'Essential',
    price: '€800',
    billing: 'one-off',
    bestFor: 'Teams that need the GDPR basics sorted',
    typicalTime: 'Within a week',
    onboardingLead: '2-hour quick start and customisation with expert',
    onboardingItems: [
      'Setup in your environment (Notion)',
      'Tour for 1 in-house owner',
      'Field customisation and setup',
    ],
    functionalityLead: null,
    functionalityItems: [
      'RoPA registers: Vendors, Systems, Assets, Transfers, Processing',
      'LIA, TIA and DPIA frameworks',
      'Subprocessors, DSAR and Data Breach registers',
      'Legal and configuration databases',
      'External-facing privacy page structure',
      'Basic AI-ready workspace capabilities',
      'Review logic for keeping records up to date',
    ],
    technicalSupport: 'Email (next business day)',
    immediateImplementation: 'Additional €500',
    additionalExpertHours: '€200 / hour',
    operationalCommitmentHours: '4 hours',
    operationalCommitmentItems: [
      '1h initial setup in Notion',
      '2h client session',
      '1h email support / light adjustments',
    ],
  },
  {
    name: 'Operational',
    price: '€1,600',
    billing: 'one-off',
    bestFor: 'Teams that want GDPR to run with minimal chasing',
    typicalTime: 'Within 2 weeks',
    onboardingLead: "In addition to 'Essential':",
    onboardingItems: [
      '2 x 1 hour weekly reviews with expert to customise setup',
      'Dedicated chat support (Slack or Google Chat) during onboarding period',
    ],
    functionalityLead: 'Everything in Essential plus:',
    functionalityItems: [
      'Brad AI workspace assistant setup',
      'Review and assessment queue',
      'Built-in task manager',
      'Operational dashboards',
      'Recurring review workflows',
      'Ownership and accountability structure',
    ],
    technicalSupport: 'Email and/or agreed business messaging channels (next business day)',
    immediateImplementation: 'Additional €800',
    additionalExpertHours: '€200 / hour',
    operationalCommitmentHours: '8 hours',
    operationalCommitmentItems: [
      '1h initial setup in Notion',
      '2h initial client session',
      '2h weekly review sessions',
      '1h Brad AI / workflow setup',
      '2h email and chat support',
    ],
  },
  {
    name: 'Growth',
    price: '€3,000',
    billing: 'one-off',
    bestFor: 'Teams that need stronger governance',
    typicalTime: 'Within 3 weeks',
    onboardingLead: "In addition to 'Operational':",
    onboardingItems: [
      'Full data migration based on company-provided documents',
      'Full set up of RoPA and other necessary databases based on company provided documents',
      '30-minute team training for up to 10 key users',
    ],
    functionalityLead: 'Everything in Operational plus:',
    functionalityItems: [
      'Policy Hub for internal policies',
      'Policy read / acknowledgement tracking',
      'Policy owners, review cycles and version structure',
      'Enhanced audit evidence views',
      'Management-ready governance dashboards',
    ],
    technicalSupport: 'Email and/or agreed business messaging channels (same business day)',
    immediateImplementation: 'Additional €1,500',
    additionalExpertHours: '€200 / hour',
    operationalCommitmentHours: '15 hours',
    operationalCommitmentItems: [
      '1h initial setup in Notion',
      '2h initial client session',
      '2h weekly review sessions',
      '6h data migration and workspace setup (including Brad AI)',
      '2h Policy Hub setup',
      '2h email and chat support',
    ],
  },
] as const;

export const workspaceComparisonRows = [
  {
    label: 'Price',
    values: ['€800 one-off', '€1,600 one-off', '€3,000 one-off'],
  },
  {
    label: 'Best for',
    values: ['First structured setup', 'Active privacy work', 'Broader rollout'],
  },
  {
    label: 'Delivery',
    values: ['Notion workspace now', 'Notion workspace now', 'Notion workspace now'],
  },
  {
    label: 'Scope emphasis',
    values: ['Core connected setup', 'Broader linked structure', 'Wider operating structure'],
  },
  {
    label: 'Workspace-buyer DPO discount',
    values: ['10% off DPO Essential', '12% off DPO Operational', '15% off DPO Growth'],
  },
] as const;

export const workspaceWhatYouGet = [
  {
    title: 'Connected records',
    text: 'A workspace built to link core GDPR records instead of leaving them in disconnected files.',
  },
  {
    title: 'Clearer ownership',
    text: 'A structure that supports owners, review points, and follow-up work inside one working setup.',
  },
  {
    title: 'Notion now',
    text: 'The current full workspace offer is available now in Notion, with other workspace versions still coming soon.',
  },
] as const;

export const workspaceFlow = [
  'Vendors',
  'Systems',
  'Assets',
  'Transfers',
  'TIAs',
  'Processing Activities',
  'LIAs / DPIAs',
] as const;

export const dpoPackages = [
  {
    name: 'Essential',
    price: '€200',
    billing: '/month',
    shortPrice: 'from €200/month',
    bestFor: 'Best for light-touch privacy support',
    summary: 'For teams that need a formally appointed DPO and light-touch privacy support.',
    points: [
      'Appointed DPO for 1 entity in 1 jurisdiction',
      'Up to 1 hour/month of DPO support*',
      '1 x 30-minute monthly sync call',
      'Annual light GDPR health check**',
      'Asynchronous support via email (next business day)',
    ],
  },
  {
    name: 'Operational',
    price: '€700',
    billing: '/month',
    shortPrice: '€700/month',
    bestFor: 'Best for practical support and follow-up',
    summary: 'For teams that want GDPR work to keep moving with practical support and follow-up.',
    points: [
      'Appointed DPO for 1 entity in 1 jurisdiction',
      'Up to 4 hours/month of DPO support*',
      '1 x 30-minute monthly sync call',
      'Annual thorough GDPR health check**',
      'Asynchronous support via email and/or agreed business messaging channels (next business day)',
      'Relevant Workspace and GDPR training updates, where applicable.',
    ],
  },
  {
    name: 'Growth',
    price: '€1,200',
    billing: '/month',
    shortPrice: '€1,200/month',
    bestFor: 'Best for stronger governance and faster support',
    summary: 'For teams that need more active DPO involvement, stronger governance, and faster support.',
    points: [
      'Appointed DPO for 1 entity in 1 jurisdiction',
      'Up to 8 hours/month of DPO support*',
      '2 x 30-minute monthly sync calls, or 1 x 60-minute monthly sync call',
      'Annual thorough GDPR health check + Priority Action plan**',
      'Priority support via email and/or agreed business messaging channels (same business day)',
      'Priority phone support for urgent privacy matters during and outside business hours***',
      'Relevant Workspace and GDPR training updates, where applicable.',
    ],
  },
] as const;

export const dpoPackageNotes = [
  '* Includes sync calls, preparation, follow-up, email/messaging support, document review, incident/DSAR/vendor support, and general privacy work.',
  '** Based on available information and the monthly DPO relationship.',
  '*** Out-of-hours support hours are charged as an add-on.',
] as const;

export const dpoAddOns = [
  {
    name: 'Extra legal entity',
    price: '€100/month',
    summary: 'Add support for an extra legal entity.',
  },
  {
    name: 'Extra jurisdiction coverage',
    price: '€50/month',
    summary: 'Add support for an extra jurisdiction.',
  },
  {
    name: 'Extra support hours',
    price: '€200/hour',
    summary: 'Additional support time outside package scope.',
  },
  {
    name: 'Urgent out-of-hours support',
    price: '€300/hour',
    summary: 'Urgent support outside normal business hours.',
  },
] as const;

export const workspaceBuyerDpoDiscounts = [
  { package: 'DPO Essential', discount: '10% off' },
  { package: 'DPO Operational', discount: '12% off' },
  { package: 'DPO Growth', discount: '15% off' },
] as const;

export const trainingOffer = {
  price: '€17/employee',
  fullPrice: '€17 per employee',
  minimum: 'Minimum 10 people',
  bulkDiscount: '20% discount for 100+ participants',
  bestFor: 'Best for team rollouts',
} as const;

export const trainingIncluded = [
  '30 videos',
  '30 questions',
  'Completion/test logs',
  'Quick start and launch guidance',
] as const;

export const trainingExtras = [
  { name: 'Separate team customisation', price: '€100/team' },
  { name: 'Immediate implementation', price: '€300' },
  { name: 'Custom videos/quiz sections', price: '€250/topic' },
] as const;

export const trainingDeliveryFormats = [
  { name: 'Notion', status: 'Available now' },
  { name: 'Google Workspace', status: 'Available now' },
] as const;

export const trainingModules = [
  {
    title: 'Data protection basics',
    text: 'Personal data, data subjects, and the privacy principles teams need to understand.',
  },
  {
    title: 'Rights and requests',
    text: 'How requests should be recognised, routed, and handled inside the business.',
  },
  {
    title: 'Data handling',
    text: 'Safer handling of personal data inside real day-to-day workflows.',
  },
  {
    title: 'Breach response',
    text: 'What teams should do when something goes wrong and how to escalate quickly.',
  },
  {
    title: 'Security practices',
    text: 'Password hygiene, device handling, and safer working behaviour around personal data.',
  },
  {
    title: 'Third-party data',
    text: 'Working with vendors and external partners without losing sight of privacy responsibility.',
  },
] as const;

export const customQuoteTriggers = [
  'Need a coming-soon workspace version in Confluence or Google Workspace',
  'Need multiple legal entities or broader jurisdiction coverage',
  'Need separate team customisation for training',
  'Need custom videos or quiz sections by topic',
] as const;
