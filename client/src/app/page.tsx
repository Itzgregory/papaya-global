import HeroCard from '@/features/landingPage/component/view/hero/HeroCard';
import DualLogosSlider from '@/features/landingPage/component/view/trustedPartners/dualLogoSlider';
import PaymentWorkForceRender from '@/features/landingPage/component/view/paymentWorkForce/paymentAndWorkfroce';
import PediaSection from '@/features/landingPage/component/view/PediaSection/pediaSection';
import BannerSection from '@/features/landingPage/component/view/banner/BannerSection';
import TestimonialsSection from '@/features/landingPage/component/view/testimonial/TestimonilasSection';

export default function Home() {
    return (
        <section>
          <HeroCard />
          <DualLogosSlider />
          <PaymentWorkForceRender />
          <TestimonialsSection />
          <BannerSection/>
          <PediaSection />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Papaya Global',
                description: 'Global payroll and payment solutions',
              }),
            }}
          />
        </section>
      );
    }