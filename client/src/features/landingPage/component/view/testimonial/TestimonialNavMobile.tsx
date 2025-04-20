import React from 'react';
import { Testimonial } from '@/features/landingPage/type/testimonial/testimonial';

interface MobileTestimonialsNavProps {
  testimonials: Testimonial[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}

export default function MobileTestimonialsNav({ 
  testimonials, 
  activeTab, 
  setActiveTab 
}: MobileTestimonialsNavProps) {
  return (
    <div className="mobile-testimonials-nav">
      <div className="pagination-dots">
        {testimonials.map((testimonial) => (
          <button
            key={testimonial.id}
            className={`pagination-dot ${activeTab === testimonial.id ? 'active' : ''}`}
            onClick={() => setActiveTab(testimonial.id)}
            aria-label={`Go to slide ${testimonial.id}`}
          />
        ))}
      </div>
    </div>
  );
}