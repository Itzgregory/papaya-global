import { Testimonial } from '@/features/landingPage/type/testimonial/testimonial';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    metrics: [
      { title: '1275', description: 'active workers' },
      { title: '34', description: 'locations' },
    ],
    backgroundImage: {
      src: '/asset/landingPage/testimonial/bg/SentinelOne-1.png.webp',
      alt: 'SentinelOne',
      width: 1610,
      height: 856,
    },
    logo: {
      src: '/asset/landingPage/testimonial/logo/sentinal-one-white.png',
      alt: 'sentinalone',
      width: 312,
      height: 122,
    },
    quote:
      '“Whether it was payroll processing or end-to-end employment support, we had everything that we needed in one place with Papaya”.',
    author: 'Ana Kershaw, Senior HR partner',
    link: '/case-studies/sentinelone/',
    navLogos: {
      default: {
        src: '/asset/landingPage/testimonial/sentinal-one-color.png',
        alt: 'sentinalone',
        width: 313,
        height: 122,
      },
      active: {
        src: '/asset/landingPage/testimonial/sentinal-one-color.png',
        alt: 'sentinalone',
        width: 312,
        height: 122,
      },
    },
  },
  {
    id: 2,
    metrics: [
      { title: '212', description: 'active workers' },
      { title: '22', description: 'location' },
    ],
    backgroundImage: {
      src: '/asset/landingPage/testimonial/bg/Cato-Networks-1.jpg.webp',
      alt: 'Cato Networks',
      width: 800,
      height: 425,
    },
    logo: {
      src: '/asset/landingPage/testimonial/logo/cato-white.png',
      alt: 'cato',
      width: 312,
      height: 122,
    },
    quote:
      '“Papaya makes our lives easier. It helps us improve the payroll process; we save a lot of time, mainly because the information is more available, and we can do all the work in one place.”',
    author: 'Erez Hanuka, Director of Finance, Cato Networks',
    link: '/case-studies/cato-networks/',
    navLogos: {
      default: {
        src: '/asset/landingPage/testimonial/cato-color.png',
        alt: 'cato',
        width: 313,
        height: 122,
      },
      active: {
        src: '/asset/landingPage/testimonial/cato-color.png',
        alt: 'cato',
        width: 312,
        height: 122,
      },
    },
  },
  {
    id: 3,
    metrics: [
      { title: '104', description: 'active workers' },
      { title: '27', description: 'location' },
    ],
    backgroundImage: {
      src: '/asset/landingPage/testimonial/bg/DATADOG-1-1.png.webp',
      alt: 'DATADOG',
      width: 1610,
      height: 856,
    },
    logo: {
      src: '/asset/landingPage/testimonial/logo/datadog-white.png',
      alt: 'datadog',
      width: 312,
      height: 122,
    },
    quote:
      '”I now have full transparency over employee data, making it far easier to do the payroll. Every time I have a question, Papaya is here to answer, every time I need insight, it’s there for me to find. With our old provider, I was simply sending data to a closed system. With Papaya, I’m empowered to actually manage payroll effectively”',
    author: 'Aschta Pana, People Manager EMEA',
    link: '/case-studies/datadog/',
    navLogos: {
      default: {
        src: '/asset/landingPage/testimonial/datadog-gray.png',
        alt: 'datadog',
        width: 313,
        height: 122,
      },
      active: {
        src: '/asset/landingPage/testimonial/datadog-gray.png',
        alt: 'datadog',
        width: 312,
        height: 122,
      },
    },
  },
  {
    id: 4,
    metrics: [
      { title: '110', description: 'active workers' },
      { title: '22', description: 'location' },
    ],
    backgroundImage: {
      src: '/asset/landingPage/testimonial/bg/Kong-1-1.png.webp',
      alt: 'kong',
      width: 1610,
      height: 856,
    },
    logo: {
      src: '/asset/landingPage/testimonial/logo/kong-white.png',
      alt: 'kong',
      width: 312,
      height: 122,
    },
    quote:
      '“The guidance has been outstanding. With Papaya Global, we have a real partnership which is the only way to get the communication and support we need.”',
    author: '250-500 Employees',
    link: '/case-studies/kong/',
    navLogos: {
      default: {
        src: '/asset/landingPage/testimonial/kong-color.png',
        alt: 'kong',
        width: 312,
        height: 122,
      },
      active: {
        src: '/asset/landingPage/testimonial/kong-color.png',
        alt: 'kong',
        width: 312,
        height: 122,
      },
    },
  },
];