import TestimonialsMetrics from './TestimonialsMetric';
import TestimonialsBox from './TestimonialsBox';
import { Testimonial } from '@/features/landingPage/type/testimonial/testimonial';


interface TestimonialsTabContentProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export default function TestimonialsTabContent({
  testimonial,
}: TestimonialsTabContentProps) {
  return (
    <div className="acf-testimonials-tab-content w-full">
      <div className="acf-testimonials-tab-content__grid flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-16">
        <TestimonialsMetrics metrics={testimonial.metrics} />
        <div className="acf-testimonials-tab-content__box w-full">
          <TestimonialsBox testimonial={testimonial} />
        </div>
      </div>
    </div>
  );
}