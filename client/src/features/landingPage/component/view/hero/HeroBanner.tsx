'use client';
import HeroTopNav from './HeroTopNav';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroDropdown from './HeroDropdown';
import HeroButton from './HeroButton';
import HeroVideo from './HeroVideo';
import { HeroBannerProps } from  '@/features/landingPage/type/hero/hero';



export default function HeroBanner({
  topNavLinks,
  title,
  description,
  dropdownItems,
  button,
  desktopVideo,
  mobileVideo,
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[600px] tablet:min-h-[700px] flex justify-center">
      <HeroVideo videoSrc={desktopVideo} className="absolute inset-0 w-full h-full hidden laptop:block" />
      <HeroVideo videoSrc={mobileVideo} className="absolute inset-0 w-full h-full block laptop:hidden" />
      <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4 mt-5">
        <HeroTopNav links={topNavLinks} />
        <HeroTitle title={title} />
        <div className="flex flex-col laptop:flex-row items-center justify-center gap-4 mb-6">
          <HeroDescription description={description} />
          <HeroDropdown items={dropdownItems} />
        </div>
        <HeroButton {...button} />
      </div>
    </section>
  );
}