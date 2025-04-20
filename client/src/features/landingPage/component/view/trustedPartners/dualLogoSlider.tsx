import LogoSlider from './LogoSlider';
import { enterpriseLogos, partnerLogos } from '@/features/landingPage/lib/tustedPartners/logoData';

export default function DualLogosSlider() {
  return (
    <section className="acf-dual-logos-slider py-8 px-4 bg-gray-50">
      <div className="acf-dual-logos-slider__row flex flex-wrap max-w-7xl mx-auto justify-center">
        <div className="acf-dual-logos-slider__col flex-1 min-w-[300px]">
          <LogoSlider
            title="Trusted by enterprises"
            logos={enterpriseLogos}
            slideWidth="228px"
          />
        </div>
        <div className="hidden tablet:block w-px bg-red-300 mx-4 my-2"></div>
        
        <div className="acf-dual-logos-slider__col hidden tablet:block flex-1 min-w-[300px]">
          <LogoSlider
            title="Our partners"
            logos={partnerLogos}
            slideWidth="136px"
            className="hidden tablet:block"
          />
        </div>
      </div>
    </section>
  );
}