import Image from 'next/image';
import { Testimonial } from '@/features/landingPage/type/testimonial/testimonial';

interface TestimonialsNavProps {
  testimonials: Testimonial[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}

export default function TestimonialsNav({ testimonials, activeTab, setActiveTab }: TestimonialsNavProps) {
  return (
    <div className="testimonials-nav">
      {testimonials.map((testimonial) => (
        <button
          key={testimonial.id}
          className={`testimonials-nav-btn ${activeTab === testimonial.id ? 'active' : ''}`}
          onClick={() => setActiveTab(testimonial.id)}
          aria-label={`Go to slide ${testimonial.id}`}
        >
          <div className="nav-logo-container">
            <Image
              src={testimonial.navLogos.default.src}
              alt={testimonial.navLogos.default.alt}
              width={156} 
              height={61} 
              className="nav-logo-default"
              unoptimized
            />
            <Image
              src={testimonial.navLogos.active.src}
              alt={testimonial.navLogos.active.alt}
              width={156} 
              height={61}
              className="nav-logo-active"
              unoptimized
            />
          </div>
        </button>
      ))}
    </div>
  );
}