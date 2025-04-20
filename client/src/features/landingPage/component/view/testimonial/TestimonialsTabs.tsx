import TestimonialsTabContent from './TestimonialsTabsContent';
import TestimonialsNav from './TestimonialsNav';
import {Testimonial} from '@/features/landingPage/type/testimonial/testimonial';
import Slider from 'react-slick';

interface TestimonialsTabsProps {
  testimonials: Testimonial[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export default function TestimonialsTabs({
  testimonials,
  activeTab,
  setActiveTab,
}: TestimonialsTabsProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveTab(current + 1),
  };

  return (
    <div className="acf-testimonials-tabs__tabs">
      <div className="acf-testimonials-tabs__tab-content js--testimonials-tab-mobile-slider">
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <TestimonialsTabContent
                key={testimonial.id}
                testimonial={testimonial}
                isActive={true} 
              />
            ))}
          </Slider>
        </div>
        <div className="hidden md:block">
          {testimonials.map((testimonial) => (
            <TestimonialsTabContent
              key={testimonial.id}
              testimonial={testimonial}
              isActive={testimonial.id === activeTab}
            />
          ))}
        </div>
      </div>
      <TestimonialsNav
        testimonials={testimonials}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}