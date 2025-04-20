import { FooterMenu, FooterMenuItem, SocialLink, Address, Language } from '../../type/footer/footer';

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.youtube.com/c/papayaglobal',
    label: 'YouTube',
    icon: 'youtube',
  },
  {
    href: 'https://www.linkedin.com/company/papaya-global/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://www.facebook.com/papayag/',
    label: 'Facebook',
    icon: 'facebook',
  },
  {
    href: 'https://twitter.com/Papaya_Global/',
    label: 'Twitter',
    icon: 'twitter',
  },
];

export const addresses: Address[] = [
  {
    country: 'USA',
    details: '9 TIMES SQUARE<br>200 West 41st Street<br>New York, New York 10036',
  },
  {
    country: 'Hong Kong',
    details: 'Flat/RM 1906 19/F, Lee Garden One,<br>33 Hysan Avenue, Causeway Bay',
  },
];

export const footerMenus: FooterMenu[] = [
  {
    title: 'Payments Solutions',
    items: [
      { id: '47571', label: 'Payments', href: '/payments/' },
      { id: '80718', label: 'Workforce Wallet', href: '/virtual-iban-account/' },
      { id: '55677', label: 'Payments Protection', href: '/payments-protection/' },
      { id: '56098', label: 'Licenses', href: '/payment-licenses/' },
      { id: '67904', label: 'Workforce Payments APIs', href: 'https://docs.papayaglobal.com/' },
    ],
  },
  {
    title: 'Workforce Solutions',
    items: [
      { id: '55678', label: 'Workforce Management', href: '/platform/' },
      { id: '47565', label: 'Connectors', href: '/connectors/' },
      { id: '47566', label: 'Employee Portal', href: '/employee-app/' },
      { id: '47567', label: 'JE Reconciliation', href: '/je-reconciliation/' },
      { id: '34837', label: 'Workforce Analytics', href: '/data-and-insights/' },
      { id: '47570', label: 'GDPR', href: '/gdpr/' },
      { id: '47569', label: 'Data Security', href: '/security-and-privacy/' },
    ],
  },
  {
    title: 'Employment Models',
    items: [
      { id: '55673', label: 'International Payroll', href: '/global-payroll/' },
      { id: '49929', label: 'Employer of Record', href: '/employer-of-record/' },
      { id: '55697', label: 'Contractors', href: '/contractor-management/' },
      { id: '55679', label: 'Agents of Record', href: '/agent-of-record/' },
    ],
  },
  {
    title: 'Employment Services',
    items: [
      { id: '20742', label: 'Global Equity', href: '/global-equity/' },
      { id: '20756', label: 'Global Benefits', href: '/global-benefits/' },
      { id: '20743', label: 'Global Immigration', href: '/global-immigration/' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { id: '58177', label: 'Library', href: '/library/' },
      { id: '47438', label: 'Blog', href: '/blog/' },
      { id: '47443', label: 'Glossary', href: '/glossary/' },
      { id: '71415', label: 'Academy', href: '/academy/' },
      { id: '55680', label: 'Countrypedia', href: '/countrypedia/' },
      { id: '55683', label: 'Paymentspedia', href: '/paymentspedia/' },
      { id: '83697', label: 'Competitor Comparison', href: '/competitor-comparison/' },
      { id: '47440', label: 'FAQs', href: '/faqs/' },
      { id: '47451', label: 'What is Global Payroll', href: '/what-is-global-payroll/' },
      { id: '47452', label: 'What is a Global PEO', href: '/blog/what-is-a-peo/' },
      { id: '47453', label: 'What is an Employer of Record', href: '/blog/employer-of-record-explained/' },
    ],
  },
  {
    title: 'Company',
    items: [
      { id: '19096', label: 'About Us', href: '/about/' },
      { id: '19097', label: 'Careers', href: '/careers/' },
      { id: '19098', label: 'Media & Press', href: '/in-the-media/' },
      { id: '20503', label: 'Team', href: '/team/' },
      { id: '35635', label: 'Support', href: '/s/' },
      { id: '53766', label: 'WhatsApp +1 (888) 316-4994', href: 'https://wa.me/+18883164994' },
      { id: '35636', label: 'Contact Us', href: '/contact-us/' },
      { id: '50904', label: 'Online Affiliate', href: '/partnerships/' },
      { id: '80185', label: 'Partnerships', href: '/partners/' },
    ],
  },
];

export const bottomMenu: FooterMenuItem[] = [
  { id: '19076', label: 'Privacy', href: '/privacy/' },
  { id: '19077', label: 'Terms', href: '/terms/' },
  { id: '19078', label: 'Payment Processing', href: '/payroll-payments-guide/' },
  { id: '22792', label: 'Wallet and Payment Processors', href: '/payment-processors/' },
  { id: '22793', label: 'Accessibility', href: '/accessibility-statement/' },
  { id: '24136', label: 'Cookies Policy', href: '/cookies-policy/' },
  { id: '61270', label: 'Papaya Standards', href: '/papaya-commitments/' },
];

export const languages: Language[] = [
  { code: 'en', label: 'English', href: '#' },
  { code: 'es', label: 'Español', href: '/es/' },
  { code: 'de', label: 'Deutsch', href: '/de/' },
  { code: 'fr', label: 'Français', href: '/fr/' },
];