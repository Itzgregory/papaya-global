import HeroBanner from '@/features/landingPage/component/view/hero/HeroBanner';
import { heroData } from '@/features/landingPage/lib/hero/heroData';

export default function HeroCard() {
  return (
      <HeroBanner
        topNavLinks={heroData.topNavLinks}
        title={heroData.title}
        description={heroData.description}
        dropdownItems={heroData.dropdownItems}
        button={heroData.button}
        desktopVideo={heroData.desktopVideo}
        mobileVideo={heroData.mobileVideo}
      />
  );
}