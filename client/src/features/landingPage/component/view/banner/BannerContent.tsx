import Image from 'next/image';
import Link from 'next/link';

interface BannerContentProps {
  logoSrc: string;
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export default function BannerContent({
  logoSrc,
  subtitle,
  title,
  description,
  ctaText,
  ctaHref,
}: BannerContentProps) {
  return (
    <div className=" relative text-center z-[3] laptop:mx-16 tablet:text-left">
      <div className="mb-4 mx-auto w-[135px] tablet:mx-0 tablet:w-[193px]">
        <Image
          src={logoSrc}
          alt="Payroll and payments logo"
          width={150}
          height={140}
          className="w-auto h-auto laptop:mx-30"
        />
      </div>
      <h4 className="text-white font-bold text-[36px] leading-[1.01] font-[greed] tablet:text-[56px] laptop:text-[64px] desktop:text-[72px]">
        {subtitle}
      </h4>
      <h2 className="text-[#EC2B2B] font-bold text-[76px] leading-[1.01] mb-2 font-[greed] tablet:mb-3 laptop:text-[100px] desktop:text-[150px]">
        {title}
      </h2>
      <div className="acf-image-banner-content__description">
        <p className="mb-4">{description}</p>
      </div>
      <Link
        href={ctaHref}
        className="inline-block rounded-[37px] border-none cursor-pointer text-base font-semibold tracking-[-0.02em] leading-6 px-[30px] py-[11px] transition-all duration-300 ease-in-out bg-[#F93030] border-2 border-[#F93030] text-white no-underline hover:no-underline"
      >
        {ctaText}
      </Link>
    </div>
  );
}