export interface Logo {
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  localFallback?: string; 
}

export const getImagePath = (path: string): string => {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
};
  
  export const enterpriseLogos: Logo[] = [
    {
      src: '/asset/landingPage/trusties/Etoro-1.svg',
      alt: 'ETORO Logo',
      width: 238,
      height: 99,
      localFallback:'/asset/landingPage/trusties/Etoro-1.svg',
    },
    {
      src: '/asset/landingPage/trusties/INEOS-1.svg',
      alt: 'INEOS Logo',
      width: 218,
      height: 98,
    },
    {
      src:'/asset/landingPage/trusties/Shopify-logo-1.svg',
      alt: 'Shopify-logo',
      width: 275,
      height: 99,
    },
    {
      src: '/asset/landingPage/trusties/fiverr-1.svg',
      alt: 'Fiverr',
      width: 241,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/Acer-1.svg',
      alt: 'Acer',
      width: 227,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/yubico-1.svg',
      alt: 'yubico',
      width: 267,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/sodastream-1.svg',
      alt: 'sodastream',
      width: 308,
      height: 99,
    },
    {
      src: '/asset/landingPage/trusties/mobileye-1.svg',
      alt: 'mobileye',
      width: 331,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/dr-martens-1.svg',
      alt: 'dr martens',
      width: 219,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/china-telecom-1.svg',
      alt: 'china telecom',
      width: 239,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/wiz-logo-1.svg',
      alt: 'WIZ',
      width: 534,
      height: 196,
      webpSrc: '/asset/landingPage/trusties/wiz-logo-1.svg',
    },
    {
      src: '/asset/landingPage/trusties/general-dynamics-1.svg',
      alt: 'general dynamics',
      width: 271,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/airwalex-1.svg',
      alt: 'airwalex',
      width: 283,
      height: 98,
    },
    {
      src: '/asset/landingPage/trusties/toyota-1.svg',
      alt: 'toyota',
      width: 313,
      height: 98,
    },
  ];
  
  export const partnerLogos: Logo[] = [
    {
      src: '/asset/landingPage/partners/sap.png',
      alt: 'sap',
      width: 240,
      height: 100,
      localFallback: '/asset/landingPage/partners/sap.png',
    },
    {
      src: '/asset/landingPage/partners/jpMorgan.webp',
      alt: 'JP Morgan',
      width: 240,
      height: 100,
      webpSrc: '/asset/landingPage/partners/jpMorgan.webp',
      localFallback: '/asset/landingPage/partners/jpMorgan.webp',
    },
    {
      src: '/asset/landingPage/partners/bambo.png',
      alt: 'BambooHR',
      width: 240,
      height: 100,
      localFallback: '/asset/landingPage/partners/bambo.png'
    },
    {
      src: '/asset/landingPage/partners/expensify.png',
      alt: 'expensify',
      width: 240,
      height: 100,
      localFallback: '/asset/landingPage/partners/expensify.png'
    },
    {
      src: '/asset/landingPage/partners/ora.png',
      alt: 'ORACLE NETSUITE',
      width: 532,
      height: 196,
      localFallback: '/asset/landingPage/partners/ora.png'
    },
  ];
  