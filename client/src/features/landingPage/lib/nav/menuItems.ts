import { MenuItem } from '@/features/landingPage/type/nav/nav';

export const menuItems: MenuItem[] = [
  {
    id: 'menu-item-1',
    title: 'Payment Solutions',
    className: 'menu-item--payment-solutions',
    tabs: [
      {
        title: 'Payments OS',
        submenuItems: [
          {
            href: '/payments/',
            title: 'Platform',
            description: 'SaaS platform to simplify global payments',
          },
          {
            href: '/virtual-iban-account/',
            title: 'Virtual IBAN account',
            description: 'Centralized funding, global pay outs',
          },
          {
            href: '/payments-protection/',
            title: 'Fraud prevention',
            description: 'Protecting your payments',
          },
          {
            href: '/workforce-payment-rails/',
            title: 'Optimized rails',
            description: 'Designed for cross-border payments',
          },
          {
            href: '/payments-connector/',
            title: 'Payment connector',
            description: 'Local data to global payments',
          },
          {
            href: '/payments-transparency/',
            title: 'Payments transparency',
            description: 'For funds, process, and fees',
          },
        ],
        promo: {
          href: '/blog/real-time-payments-in-business-transactions/',
          imageSrc: '/wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1.webp',
          imageAlt: 'credit card payment',
          title: 'Real-Time Payments',
          description: 'Real-time payments might be the next biggest trend in business transactions. Here is everything you need to know',
          srcSet: '/wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1.webp 2048w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1-300x124.webp 300w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1-1024x422.webp 1024w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1-768x317.webp 768w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x844.jpg-1-1536x633.webp 1536w',
          sizes: '(max-width: 2048px) 100vw, 2048px',
        },
      },
      {
        title: 'Cross-border Payments',
        submenuItems: [
          {
            href: '/payments/',
            title: 'Global payments',
            description: 'Tech to streamline global payments',
          },
          {
            href: '/payments-coverage/',
            title: 'Coverage',
            description: 'Pay anywhere',
          },
          {
            href: '/payment-licenses/',
            title: 'Licenses',
            description: 'From Tier-1 jurisdictions',
          },
          {
            href: '/why-workforce-payments/',
            title: 'Workforce payments',
            description: 'Optimize your biggest expense',
          },
        ],
        promo: {
          href: '/blog/running-a-payment-rfp-process-the-ultimate-step-by-step-guide-2025/',
          imageSrc: '/wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--scaled.jpg',
          imageAlt: 'Payments RFP Guide 2025',
          title: 'Payments RFP Guide 2025',
          description: 'Selecting the right payment provider ensures global efficiency and compliance. An RFP process helps define needs, compare options, and choose a scalable, cost-effective solution.',
          srcSet: '/wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--scaled.jpg 2560w, /wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--300x124.jpg 300w, /wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--1024x423.jpg 1024w, /wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--768x317.jpg 768w, /wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--1536x634.jpg 1536w, /wp-content/uploads/2025/03/Running-a-Payment-RFP-Process_--2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'APIs',
        submenuItems: [
          {
            href: '/payment-api/',
            title: 'Payments API',
            description: 'Integrated into you tech stack',
          },
          {
            href: 'https://docs.papayaglobal.com/',
            title: 'API documentation',
            description: 'Information for developers',
          },
        ],
        promo: {
          href: '/blog/papaya-globals-unique-paytech/',
          imageSrc: '/wp-content/uploads/2024/10/HERO-9-2048x844.jpg.webp',
          imageAlt: 'Payment graph',
          title: 'Papaya Globals Unique Paytech',
          description: 'Papaya Global, the only PayTech designed for cross-border payroll payments, is leading the charge',
          srcSet: '/wp-content/uploads/2024/10/HERO-9-2048x844.jpg.webp 2048w, /wp-content/uploads/2024/10/HERO-9-2048x844.jpg-300x124.webp 300w, /wp-content/uploads/2024/10/HERO-9-2048x844.jpg-1024x422.webp 1024w, /wp-content/uploads/2024/10/HERO-9-2048x844.jpg-768x317.webp 768w, /wp-content/uploads/2024/10/HERO-9-2048x844.jpg-1536x633.webp 1536w',
          sizes: '(max-width: 2048px) 100vw, 2048px',
        },
      },
      {
        title: 'Payment Services',
        submenuItems: [
          {
            href: '/contractor-management/',
            title: 'Contractor payments',
            description: 'Manage and pay invoices',
          },
          {
            href: '/split-payments/',
            title: 'Split payments',
            description: 'Pay to multiple accounts',
          },
          {
            href: '/authority-payments/',
            title: 'Authority payments',
            description: 'Automate global authority payments',
          },
          {
            href: '/worker-wallets/',
            title: 'Worker wallets',
            description: 'Wallets for your global workforce',
          },
          {
            href: '/paymentspedia/',
            title: 'Paymentspedia',
            description: 'Country payment data',
          },
          {
            href: '/knowledge-base/',
            title: 'Knowledge base',
            description: 'Accurate information and guides',
          },
        ],
        promo: {
          href: '/blog/understanding-payment-in-lieu-of-notice-5-pilon-benefits/',
          imageSrc: '/wp-content/uploads/2024/10/uk-bg.jpg.webp',
          imageAlt: 'UK bridge',
          title: '5 PILON benefits',
          description: 'Discover how payment in lieu of notice works and how it benefits workers and employers alike',
          srcSet: '/wp-content/uploads/2024/10/uk-bg.jpg.webp 1920w, /wp-content/uploads/2024/10/uk-bg.jpg-300x169.webp 300w, /wp-content/uploads/2024/10/uk-bg.jpg-1024x576.webp 1024w, /wp-content/uploads/2024/10/uk-bg.jpg-768x432.webp 768w, /wp-content/uploads/2024/10/uk-bg.jpg-1536x864.webp 1536w',
          sizes: '(max-width: 1920px) 100vw, 1920px',
        },
      },
      {
        title: 'Locations',
        submenuItems: [
          {
            href: '/paymentspedia/',
            title: 'PaymentsPedia',
            description: 'Worldwide payments insights',
          },
          {
            href: '/payments-coverage/canada/',
            title: 'Pay from Canada',
            description: 'Fund in CAD, pay worldwide',
          },
          {
            href: '/payments-coverage/hong-kong/',
            title: 'Pay from Hong Kong',
            description: 'Streamline your global payments',
          },
        ],
        promo: {
          href: '/blog/the-smart-way-for-canadian-companies-to-pay-workers/',
          imageSrc: '/wp-content/uploads/2024/10/Group-1000004334-1.png',
          imageAlt: 'Blog',
          title: 'Canadian Companies employees payment',
          description: 'Learn how Canadian companies pay global workers in emerging markets',
          srcSet: '/wp-content/uploads/2024/10/Group-1000004334-1.png 1601w, /wp-content/uploads/2024/10/Group-1000004334-1-300x200.png 300w, /wp-content/uploads/2024/10/Group-1000004334-1-1024x682.png 1024w, /wp-content/uploads/2024/10/Group-1000004334-1-768x512.png 768w, /wp-content/uploads/2024/10/Group-1000004334-1-1536x1024.png 1536w',
          sizes: '(max-width: 1601px) 100vw, 1601px',
        },
      },
      {
        title: 'Industry',
        submenuItems: {
          column1: [
            {
              href: '/industry/',
              title: 'All industries',
              description: 'Payments & Payroll Industries',
            },
            {
              href: '/industry/maritime/',
              title: 'Maritime',
              description: 'Empowering maritime shipping companies',
            },
            {
              href: '/industry/oil-and-gas/',
              title: 'Oil and gas',
              description: 'Manage in 160+ countries',
            },
            {
              href: '/industry/igaming/',
              title: 'IGaming',
              description: 'Competitive FX rates and low fees',
            },
            {
              href: '/industry/staffing-firms-and-msps/',
              title: 'Staffing firms & msps',
              description: 'Streamline global payments',
            },
          ],
          column2: [
            {
              href: '/industry/freelancer-marketplaces/',
              title: 'Freelancer marketplaces',
              description: 'Solve payment delays and currency issues',
            },
            {
              href: '/industry/bpo-companies/',
              title: 'BPO companies',
              description: 'Reduce costs and complexity',
            },
            {
              href: '/industry/multinational-companies/',
              title: 'Multinational companies',
              description: 'Simplify complex cross-border transactions',
            },
            {
              href: '/industry/payroll-processors-accounting-firms/',
              title: 'Accounting firms',
              description: 'Payroll processors accounting firms',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'menu-item-2',
    title: 'Workforce Solutions',
    className: 'menu-item--workforce',
    tabs: [
      {
        title: 'Workforce OS',
        submenuItems: {
          column1: [
            { href: '/platform/', title: 'Platform', description: 'Payroll & Payments' },
            { href: '/connectors/', title: 'Connectors', description: 'Connected payroll is easy' },
            { href: '/data-validation/', title: 'Data validation', description: 'AI-powered accuracy' },
            { href: '/data-and-insights/', title: 'Workforce analytics', description: 'Comprehensive data insights loop' },
            { href: '/embedded-ai/', title: 'Embedded AI', description: 'Powering efficiency' },
          ],
          column2: [
            { href: '/employee-app/', title: 'Employee portal', description: 'Mobile or web payslips and more' },
            { href: '/je-reconciliation/', title: 'JE automation', description: 'Close the loop' },
            { href: '/security-and-privacy/', title: 'Data Security', description: 'Industry leading security standards' },
            { href: '/support/', title: 'Papaya 360 Support', description: 'Personalized, expert assistance' },
            { href: '/time-and-attendance/', title: 'Time & Attendance', description: 'Reporting made easy' },
          ],
        },
      },
      {
        title: 'PayrollPlus',
        submenuItems: {
          column1: [
            { href: '/global-payroll/', title: 'Global payroll', description: 'Manage payroll in 160+ countries' },
            { href: '/papaya-direct/', title: 'Papaya direct', description: 'Dedicated, boots-on-ground experts' },
            { href: '/shadow-payroll/', title: 'Shadow payroll', description: 'Real-time automated process' },
            { href: '/usa-workforce/', title: 'US solutions', description: 'Payroll, PEO and benefits' },
            { href: '/global-equity/', title: 'Equity management', description: 'Attract top talent' },
          ],
          column2: [
            { href: '/global-benefits/', title: 'Global benefits', description: 'Health plans anywhere in the world' },
            { href: '/global-immigration/', title: 'Immigration', description: 'Support their entire journey' },
            { href: '/countrypedia/', title: 'Countrypedia', description: 'For funds, process, and fees' },
            { href: '/knowledge-base/', title: 'Knowledge base', description: 'Accurate information and guides' },
          ],
        },
      },
      {
        title: 'Contractor solutions',
        submenuItems: [
          { href: '/payments/', title: 'Payments', description: 'Pay contractors anywhere' },
          { href: '/contractor-management/', title: 'Contractor management', description: 'Contractor management made easy' },
          { href: '/agent-of-record/', title: 'Agent of Record (AOR)', description: 'Hire and pay with peace of mind' },
          { href: '/contractor-management/', title: 'Private Entrepreneur', description: 'Engage contractors in Eastern Europe' },
          { href: '/knowledge-base/', title: 'Knowledge base', description: 'Accurate information and guides' },
        ],
        promo: {
          href: '/contractor-classification/',
          imageSrc: '/wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-scaled.jpg',
          imageAlt: 'How CFOs Can Leverage Workforce Payments blog',
          title: 'Contractor classification',
          description: 'AI-driven, supported by experts',
          srcSet: '/wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-scaled.jpg 2560w, /wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-300x124.jpg 300w, /wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-1024x423.jpg 1024w, /wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-768x317.jpg 768w, /wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-1536x634.jpg 1536w, /wp-content/uploads/2024/04/How-CFOs-Can-Leverage-Workforce-Payments-blog-2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'EOR & AOR',
        submenuItems: {
          column1: [
            { href: '/employer-of-record/', title: 'Employer of Record (EOR)', description: 'Global hiring made simple' },
            { href: '/agent-of-record/', title: 'Agent of record (AOR)', description: 'Hire and pay with peace of mind' },
            { href: '/papaya-direct/', title: 'Papaya direct', description: 'Dedicated, boots-on-ground experts' },
            { href: '/global-benefits/', title: 'Global benefits', description: 'Health plans anywhere in the world' },
          ],
          column2: [
            { href: '/global-immigration/', title: 'Immigration', description: 'Support their entire journey' },
            { href: '/global-equity/', title: 'Equity management', description: 'Attract top talent' },
            { href: '/knowledge-base/', title: 'Knowledge base', description: 'Accurate information and guides' },
          ],
        },
      },
      {
        title: 'Contingent Workforces',
        submenuItems: [
          { href: '/contingent-workforce-solutions/', title: 'Contingent workforce solutions', description: 'For streamlined, compliant operations' },
          { href: '/knowledge-base/', title: 'Knowledge base', description: 'Accurate information and guides' },
          { href: '/papaya-direct/', title: 'Local teams', description: 'Dedicated, boots-on-ground experts' },
          { href: '/contractor-classification/', title: 'Contractor classification', description: 'AI-driven, supported by experts' },
          { href: '/payments/', title: 'Workforce payments', description: 'Easily pay contingent workers' },
        ],
        promo: {
          href: '/blog/complexities-of-global-contingent-worker-management/',
          imageSrc: '/wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg.webp',
          imageAlt: 'Global contingent worker management illustration',
          title: 'Global Contingent Worker Management',
          description: 'Navigating the Complexities of Global Contingent Worker Management',
          srcSet: '/wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg.webp 2048w, /wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg-300x124.webp 300w, /wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg-1024x422.webp 1024w, /wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg-768x317.webp 768w, /wp-content/uploads/2024/12/Hero-1300x536_export_x_3-6-2048x844.jpg-1536x633.webp 1536w',
          sizes: '(max-width: 2048px) 100vw, 2048px',
        },
      },
      {
        title: 'Industry',
        submenuItems: {
          column1: [
            { href: '/industry/', title: 'All industries', description: 'Payments & Payroll Industries' },
            { href: '/industry/maritime/', title: 'Maritime', description: 'Empowering maritime shipping companies' },
            { href: '/industry/oil-and-gas/', title: 'Oil and gas', description: 'Manage in 160+ countries' },
            { href: '/industry/igaming/', title: 'IGaming', description: 'Competitive FX rates and low fees' },
            { href: '/industry/staffing-firms-and-msps/', title: 'Staffing firms & msps', description: 'Streamline global payments' },
          ],
          column2: [
            { href: '/industry/freelancer-marketplaces/', title: 'Freelancer marketplaces', description: 'Solve payment delays and currency issues' },
            { href: '/industry/bpo-companies/', title: 'BPO companies', description: 'Reduce costs and complexity' },
            { href: '/industry/multinational-companies/', title: 'Multinational companies', description: 'Simplify complex cross-border transactions' },
            { href: '/industry/payroll-processors-accounting-firms/', title: 'Accounting firms', description: 'Payroll processors accounting firms' },
          ],
        },
      },
    ],
  },
  {
    id: 'menu-item-3',
    title: 'Partnership',
    className: 'menu-item--partnership',
    submenuItems: [
      {
        href: '/partners/',
        title: 'Papaya Partners',
        description: 'Explore our growing partner network',
      },
      {
        href: '/connectors/',
        title: 'Connectors',
        description: 'Fast and secure platform integrations',
      },
      {
        href: '/partners/strategic-and-referral-partners/',
        title: 'Strategic & Growth Partners',
        description: 'Our partners directory',
      },
    ],
  },
  {
    id: 'menu-item-4',
    title: 'Pricing',
    className: 'menu-item--pricing',
    submenuItems: [],
  },
  {
    id: 'menu-item-5',
    title: 'Resources',
    className: 'menu-item--resources',
    tabs: [
      {
        title: 'Knowledge',
        submenuItems: {
          column1: [
            { href: '/library/', title: 'Library', description: 'Whitepapers, ebooks, videos, and more' },
            { href: '/academy/', title: 'Academy', description: 'Get 80+ free lessons' },
            { href: '/countrypedia/', title: 'Countrypedia', description: 'Country payroll data' },
            { href: '/paymentspedia/', title: 'Paymentspedia', description: 'Country payments data' },
            { href: '/blog/', title: 'All blogs', description: 'Information you can use' },
            { href: '/glossary/', title: 'All Glossary', description: 'Everything about workforce' },
            // { href: '/features-page/', title: 'Features Release', description: 'New features & announcements' },
          ],
          column2: [],
        },
        promo: {
          href: '/academy/',
          imageSrc: '/wp-content/uploads/2024/07/Group-1000004320-1.png',
          imageAlt: 'Navigating the complexities of global payroll',
          title: 'Payroll & Payments academy',
          description: 'Lessons from the worlds leading experts',
          srcSet: '/wp-content/uploads/2024/07/Group-1000004320-1.png 1042w, /wp-content/uploads/2024/07/Group-1000004320-1-300x173.png 300w, /wp-content/uploads/2024/07/Group-1000004320-1-1024x590.png 1024w, /wp-content/uploads/2024/07/Group-1000004320-1-768x442.png 768w, /wp-content/uploads/2024/07/Group-1000004320-1-1536x884.png 1536w',
          sizes: '(max-width: 1042px) 100vw, 1042px',
        },
      },
      {
        title: 'Competitors Comparisons',
        submenuItems:[
          { href: '/competitor-comparison/', title: 'All comparisons', description: 'Compare our solutions' },
            { href: '/competitor-comparison/compare-papaya-global-payments-vs-ebury/', title: 'Payments OS vs. Ebury', description: 'See how Papaya Global compares' },
            { href: '/competitor-comparison/compare-papaya-global-payments-vs-custom-bank-files/', title: 'Payments OS vs. Bank files', description: 'See how Papaya Global compares' },
            { href: '/competitor-comparison/compare-papaya-global-payments-vs-convera/', title: 'Payments OS vs. Convera', description: 'See how Papaya Global compares' },
            { href: '/competitor-comparison/adp-vs-papaya-global/', title: 'Workforce OS vs. ADP', description: 'See how Papaya Global compares' },
            { href: '/competitor-comparison/ceridian-vs-papaya-global/', title: 'Workforce OS vs. Dayforce', description: 'See how Papaya Global compares' },
            { href: '/competitor-comparison/deel-vs-papaya-global/', title: 'Workforce OS vs. Deel', description: 'See how Papaya Global compares' },
        ],
        promo: {
          href: '/blog/top-alternatives-to-wise/',
          imageSrc: '/wp-content/uploads/2025/04/Hero-1300x536_export_x_3-scaled.jpg',
          imageAlt: 'Cross-border Payment Methods',
          title: 'Top Alternatives to Wise',
          description: 'The top five alternatives to Wise for MSP payments',
          srcSet: '/wp-content/uploads/2025/04/Hero-1300x536_export_x_3-scaled.jpg 2560w, /wp-content/uploads/2025/04/Hero-1300x536_export_x_3-300x125.jpg 300w, /wp-content/uploads/2025/04/Hero-1300x536_export_x_3-1024x426.jpg 1024w, /wp-content/uploads/2025/04/Hero-1300x536_export_x_3-768x319.jpg 768w, /wp-content/uploads/2025/04/Hero-1300x536_export_x_3-1536x639.jpg 1536w, /wp-content/uploads/2025/04/Hero-1300x536_export_x_3-2048x852.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'Tools',
        submenuItems:  [
            { href: '/cost-calculator/', title: 'Cost Calculator', description: 'See real cost of global employment' },
            { href: '/global-payroll-and-payments-rfp/', title: 'RFP Template', description: 'Identify the best partner for your needs' },
            { href: '/iban/', title: 'IBAN checker and calculator', description: 'Validate IBAN for payments' },
          ],
        promo: {
          href: '/blog/local-rails-vs-swift/',
          imageSrc: '/wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-scaled.jpg',
          imageAlt: 'Local Rails vs. International Options– which is best for workforce payments_',
          title: 'Local Rails vs SWIFT',
          description: 'Local rails to deliver cost effective and quick payments to employees',
          srcSet: '/wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-scaled.jpg 2560w, /wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-300x124.jpg 300w, /wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-1024x422.jpg 1024w, /wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-768x317.jpg 768w, /wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-1536x634.jpg 1536w, /wp-content/uploads/2025/02/Local-Rails-vs.-International-Options–-which-is-best-for-workforce-payments_-2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'Case Studies',
        submenuItems: {
          column1: [
            { href: '/case-studies/', title: 'All Case Studies', description: 'In their own words' },
            { href: '/case-studies/global-people/', title: 'Global People', description: '7X Faster payments' },
            { href: '/case-studies/cato-networks/', title: 'Cato Networks', description: 'Efficient handle international payroll' },
            { href: '/case-studies/sentinelone/', title: 'Sentinelone', description: 'Automation and global expansion' },
            { href: '/case-studies/within3/', title: 'Within3', description: 'Efficient, time-saving and cost-effective' },
            { href: '/case-studies/dynamic-yield/', title: 'Dynamic Yield', description: 'Improved grow and scale' },
            { href: '/case-studies/papaya-global-transformed-an-oil-and-gas-company/', title: 'Oil and Gas', description: 'Automate, Save, Simplify, Thrive' },
          ],
          column2: [
            { href: '/case-studies/papaya-global-transformed-a-shipping-company/', title: 'Shipping Company', description: 'Employee satisfaction improvement' },
            { href: '/case-studies/cyberark/', title: 'Cyberark', description: 'Streamline, automate and unify' },
            { href: '/case-studies/kong/', title: 'Kong', description: 'Compliant and secure technology' },
            { href: '/case-studies/datadog/', title: 'DataDog', description: 'Improved control and visibility' },
            { href: '/case-studies/rubrik/', title: 'Rubrik', description: 'Easier and faster onboarding' },
            { href: '/case-studies/teach-for-all/', title: 'Teach for all', description: 'Expand, Support, Comply, Succeed' },
            { href: '/case-studies/bright-machines/', title: 'Bright Machines', description: 'Paid on time' },
          ],
        },
      },
      {
        title: 'Featured Payment Blogs',
        submenuItems: [
            { href: '/blog/category/payments/', title: 'All payment blogs', description: 'The latest on global payments' },
            { href: '/blog/how-to-pay-employees/', title: 'Global employee payments', description: 'How to pay your employees' },
            { href: '/blog/how-to-pay-international-contractors/', title: 'Global contractor payments', description: 'How to pay international contractors' },
            { href: '/blog/cross-border-payments/', title: 'Cross-border payments', description: 'Understanding payment processes' },
            { href: '/blog/why-global-payroll-payments-are-failing/', title: 'Simplyfing global payments', description: 'Challenges and solutions' },
            { href: '/blog/differences-between-bpo-and-managed-services/', title: 'BPO vs. Managed Service Provider', description: 'Which is best for you' },
        ],
        promo: {
          href: '/blog/how-to-pay-employees/',
          imageSrc: '/wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x845.jpg',
          imageAlt: 'How to pay your employees',
          title: 'Global employee payments',
          description: 'How to pay your employees',
          srcSet: '/wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-2048x845.jpg 2048w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-300x124.jpg 300w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-1024x422.jpg 1024w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-768x317.jpg 768w, /wp-content/uploads/2024/10/Hero-1300x536_export_x_3-3-1536x634.jpg 1536w',
          sizes: '(max-width: 2048px) 100vw, 2048px',
        },
      },
      {
        title: 'Featured Global Payroll Blogs',
        submenuItems: [
            { href: '/blog/category/payroll/', title: 'All global payroll blogs', description: 'The latest on global payroll' },
            { href: '/what-is-global-payroll/', title: 'Global payroll', description: 'Challenges and solutions' },
            { href: '/blog/why-payroll-payments-are-hidden-advantage/', title: 'Payroll payments', description: 'The hidden advantage' },
            { href: '/blog/what-is-payroll-outsourcing/', title: 'Payroll outsourcing', description: 'All you need to know' },
          ],
        promo: {
          href: '/blog/what-is-global-payroll/',
          imageSrc: '/wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-scaled.jpg',
          imageAlt: 'Payroll payments',
          title: 'Global payroll & payments evolution',
          description: 'The Challenges and Opportunities in Payroll Payments',
          srcSet: '/wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-scaled.jpg 2560w, /wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-300x124.jpg 300w, /wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-1024x422.jpg 1024w, /wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-768x317.jpg 768w, /wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-1536x634.jpg 1536w, /wp-content/uploads/2024/02/SEO_-Payroll-payments-blog-post-2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'Featured EoR Blogs',
        submenuItems: [
            { href: '/blog/category/eor/', title: 'All EoR blogs', description: 'The latest on EOR' },
            { href: '/blog/employer-of-record-explained/', title: 'Employer Of Record', description: 'All you need to know' },
            { href: '/blog/employer-of-record-in-the-philippines/', title: 'EOR in the Philippines', description: 'Learn about EOR in the Philippines' },
            { href: '/blog/employer-of-record-in-canada/', title: 'EOR in the Canada', description: 'Learn about EOR in the Canada' },
            { href: '/blog/employer-of-record-in-india/', title: 'EOR in the India', description: 'Learn about EOR in India' },
            { href: '/blog/employer-of-record-in-spain/', title: 'Employer Of Record in Spain', description: 'Learn about EOR in Spain' },
            { href: '/blog/employer-of-record-in-the-netherlands/', title: 'Employer Of Record in the Netherlands', description: 'Learn about EOR in the Netherlands' },
            { href: '/blog/employer-of-record-in-singapore/', title: 'Employer Of Record in Singapore', description: 'Learn about EOR in Singapore' },
          ],
        promo: {
          href: '/blog/the-aor-advantage-when-hiring-global-contractors/',
          imageSrc: '/wp-content/uploads/2023/12/HERO-AOR-scaled.jpg',
          imageAlt: 'The AOR Advantage: Risk Mitigation When Hiring Global Contractors',
          title: 'Agent of record vs. Employer of record',
          description: 'Learn and choose between EOR and AOR services',
          srcSet: '/wp-content/uploads/2023/12/HERO-AOR-scaled.jpg 2560w, /wp-content/uploads/2023/12/HERO-AOR-300x124.jpg 300w, /wp-content/uploads/2023/12/HERO-AOR-1024x422.jpg 1024w, /wp-content/uploads/2023/12/HERO-AOR-768x317.jpg 768w, /wp-content/uploads/2023/12/HERO-AOR-1536x634.jpg 1536w, /wp-content/uploads/2023/12/HERO-AOR-2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
      {
        title: 'Featured Contractor Blogs',
        submenuItems:  [
            { href: '/blog/category/contractor-management/', title: 'All Contractor blogs', description: 'The latest on contractors' },
            { href: '/blog/how-to-pay-international-contractors/', title: 'Pay international contractors', description: 'International contractors payments & compliance' },
            { href: '/blog/how-to-hire-independent-contractors/', title: 'Hire independent contractors', description: 'Hire contractor process globally' },
            { href: '/blog/international-contractors-pros-and-cons/', title: 'International contractors pros & cons', description: 'International contractors digitally evolved diverse' },
            { href: '/blog/immigration-trends-and-contingent-workforce-growth/', title: 'Immigration trends impacts', description: 'Contingent workforce are evolving' },
            { href: '/blog/the-challenges-and-opportunities-of-managing-a-global-contingent-workforce/', title: 'Global Contingent Workforce', description: 'Global contractor flexibility & growing' },
            { href: '/blog/aor-vs-contractor-management-tools/', title: 'AoR vs contractor', description: 'Platforms, compliance, costs, services' },
          ],
        promo: {
          href: '/blog/aor-vs-contractor-management-tools/',
          imageSrc: '/wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-scaled.jpg',
          imageAlt: 'AOR or Contractor Tools – Which is Right for Your Company blog',
          title: 'AOR or Contractor Tools – Which is Right for Your Company',
          description: 'Learn about the differences between AOR and contractor management tools',
          srcSet: '/wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-scaled.jpg 2560w, /wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-300x124.jpg 300w, /wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-1024x422.jpg 1024w, /wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-768x317.jpg 768w, /wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-1536x634.jpg 1536w, /wp-content/uploads/2024/03/AOR-or-Contractor-Tools-–-Which-is-Right-for-Your-Company-blog-2048x845.jpg 2048w',
          sizes: '(max-width: 2560px) 100vw, 2560px',
        },
      },
    ],
  },
  {
    id: 'menu-item-6',
    title: 'Company',
    className: 'menu-item--company',
    tabs: [
      {
        title: 'Who We Are',
        submenuItems: [
          { href: '/about/', title: 'About Us', description: 'The story of Papaya Global' },
          { href: '/team/', title: 'Team', description: 'Get to know our team of Papayers' },
          { href: '/in-the-media/', title: 'Media & Press', description: 'The latest press about us' },
          { href: '/contact-us/', title: 'Get in Touch', description: 'Reach out to a Papaya rep' },
          { href: '/careers/', title: 'Careers', description: "We're hiring. Join our incredible quest!" },
        ],
        promo: {
          href: '/partners/',
          imageSrc: '/wp-content/uploads/2024/11/Frame-1000004338.jpg',
          imageAlt: 'partners',
          title: 'Technology, Strategic & Referral partners',
          description: 'Papaya’s network of innovative partnerships',
          srcSet: '/wp-content/uploads/2024/11/Frame-1000004338.jpg 412w, /wp-content/uploads/2024/11/Frame-1000004338-300x150.jpg 300w',
          sizes: '(max-width: 412px) 100vw, 412px',
        },
      },
    ],
  },
];