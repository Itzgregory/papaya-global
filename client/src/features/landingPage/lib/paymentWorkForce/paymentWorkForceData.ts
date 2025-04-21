import   {PaymentsWorkforceData} from '@/features/landingPage/type/PaymentWorkForce/PaymentWorrkforce'

  export const paymentsData: PaymentsWorkforceData = {
    id: 'payments',
    title: 'Designed to pay your workers, contractors, and vendors with guaranteed land dates',
    navLinks: [
      { href: '#payments', label: 'Payments', isActive: true },
      { href: '#workforce', label: 'Workforce', isActive: false },
    ],
    cards: [
      {
        href: '/payments/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004397-1.svg',
        iconAlt: 'Cross-border payment platform',
        iconWidth: 50,
        iconHeight: 50,
        title: 'Pay workers globally with local compliance',
      },
      {
        href: '/payments-connector/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004394.svg',
        iconAlt: 'Contractor payments',
        iconWidth: 50,
        iconHeight: 50,
        title: 'Transform HR/VMS/ERP data into global payments',
      },
      {
        href: '/workforce-payment-rails/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004395.svg',
        iconAlt: 'Authority payments',
        iconWidth: 50,
        iconHeight: 50,
        title: 'Low-fee global payments via J.P Morgan',
      },
      {
        href: '/split-payments/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004396.svg',
        iconAlt: 'Data connector',
        iconWidth: 50,
        iconHeight: 50,
        title: 'Split payments across currencies and accounts',
      },
      {
        href: '/payments-transparency/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2025/01/Frame-1000004480-1.png',
        iconAlt: '24/7 monitoring ensures on-time payments',
        iconWidth: 100,
        iconHeight: 100,
        webpSrc: 'https://www.papayaglobal.com/wp-content/uploads/2025/01/Frame-1000004480-1.png.webp',
        title: '24/7 monitoring ensures on-time payments',
      },
      {
        href: '/virtual-iban-account/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2025/01/Frame-1000004481-1.png',
        iconAlt: 'Segregated IBAN account protects your funds',
        iconWidth: 100,
        iconHeight: 100,
        webpSrc: 'https://www.papayaglobal.com/wp-content/uploads/2025/01/Frame-1000004481-1.png.webp',
        title: 'Segregated IBAN account protects your funds',
      },
    ],
    numbers: [
      {
        value: 34,
        before: '$',
        after: 'B+',
        description: 'Processed annually',
      },
      {
        value: 95,
        after: '%',
        description: 'Same day payment',
      },
      {
        value: 30,
        after: '%',
        description: 'Lower transaction fees',
      },
    ],
  };
  
  export const workforceData: PaymentsWorkforceData = {
    id: 'workforce',
    title: 'Manage all your payroll and payments on one intelligent platform, Workforce OS',
    description: 'Layer Papaya’s technology over your data and gain full control in 4 weeks',
    navLinks: [
      { href: '#payments', label: 'Payments', isActive: false },
      { href: '#workforce', label: 'Workforce', isActive: true },
    ],
    cards: [
      {
        href: '/platform/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004404.svg',
        iconAlt: 'Workforce OS SaaS platform',
        iconWidth: 51,
        iconHeight: 50,
        title: 'Workforce OS SaaS platform',
        description: 'Easily plug in your current payroll setup and unify your global payroll and payments.',
      },
      {
        href: '/platform/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004405.svg',
        iconAlt: 'EoR',
        iconWidth: 51,
        iconHeight: 50,
        title: 'EOR & AOR',
        description: 'Hire & pay anywhere without having a local entity.',
      },
      {
        href: 'https://www.papayaglobal.com/employer-of-record/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004403.svg',
        iconAlt: 'PayrollPlus',
        iconWidth: 51,
        iconHeight: 50,
        title: 'PayrollPlus',
        description: 'Manage payroll processing and payments globally in over 160 countries.',
      },
      {
        href: '/contingent-workforce-solutions/',
        iconSrc: 'https://www.papayaglobal.com/wp-content/uploads/2024/10/Frame-1000004406.svg',
        iconAlt: 'Contingent workforce',
        iconWidth: 51,
        iconHeight: 50,
        title: 'Contingent workforce',
        description: 'Transform your contingent workforce program with custom solutions.',
      },
    ],
    numbers: [
      {
        value: 97,
        after: '%',
        description: 'Faster global payroll processing',
      },
      {
        value: 95,
        after: '%',
        description: 'Same day payment',
      },
      {
        value: 4,
        description: 'Weeks to onboard your data',
      },
    ],
  };
