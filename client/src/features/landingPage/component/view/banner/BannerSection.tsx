import Head from 'next/head';
import BannerGradient from './BannerGradient';
import BannerImage from './BannerImage';
import BannerContent from './BannerContent';

export default function BannerSection() {
  return (
    <>
      <Head>
        <link rel="preload" href="/asset/landingPage/academy-homepage-banner.png" as="image" />
      </Head>
      <section className="flex flex-col min-h-[838px] pb-[30px] pt-[30px] relative tablet:justify-center tablet:pb-[90px] tablet:pt-[90px] desktop:min-h-[960px]">
        <BannerGradient />
        <BannerImage
          desktopSrc="/asset/landingPage/academy-homepage-banner.png"
          mobileSrc="/asset/landingPage/academy-homepage-banner-mobile.png"
          alt="Payroll and Payments academy"
        />
        <div className="mx-auto w-full max-w-full px-[15px] mobile:max-w-[550px] tablet:max-w-[720px] laptop:max-w-[950px] desktop:max-w-[1200px] large-desktop:max-w-[1430px]">
          <BannerContent
            logoSrc="/asset/landingPage/academy-hero-logo-1.svg"
            subtitle="Payroll & Payments"
            title="Academy"
            description="Become a master of global payroll & payments with lessons from the world's leading experts."
            ctaText="Start learning"
            ctaHref="/academy/"
          />
        </div>
      </section>
    </>
  );
}