'use client';
import Image from 'next/image';
import Link from 'next/link';

const FooterLogo: React.FC = () => {
  return (
    <div className="o-footer__logo order-2 w-[191px] h-[39px] flex items-center">
      <Link href="/" aria-current="page">
        <Image
          src="/asset/landingPage/papaya-new-logo.svg" 
          alt="Papaya Global logo"
          width={191}
          height={39}
          className="h-full w-auto object-contain"
          onError={(e) => {
            console.error('Failed to load logo image');
            e.currentTarget.src = '/images/fallback-logo.svg';
          }}
        />
      </Link>
    </div>
  );
};

export default FooterLogo;