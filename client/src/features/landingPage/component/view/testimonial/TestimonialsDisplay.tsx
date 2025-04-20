'use client';
import Head from 'next/head';
import TestimonialsIntro from './TestimonilasIntro';
import TestimonialsBox from './TestimonialsBox';
import TestimonialsMetrics from './TestimonialsMetric';
import TestimonialsNav from './TestimonialsNav';
import MobileTestimonialsNav from './TestimonialNavMobile';
import useTestimonialsLogic from './TestimonialsLogic';

export default function TestimonialsDisplay({
  isMobile,
  activeTab,
  activeTestimonial,
  testimonialsData,
  setActiveTab,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
}: ReturnType<typeof useTestimonialsLogic>) {
  return (
    <>
      <Head>
        {testimonialsData.map((testimonial) => (
          <link 
            key={testimonial.id}
            rel="preload" 
            href={testimonial.backgroundImage.src} 
            as="image" 
          />
        ))}
      </Head>
      <section 
        className={`acf-testimonials-tabs ${isMobile ? 'mobile-view' : ''}`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <div className="testimonials-container">
          <TestimonialsIntro />
          <div className="testimonials-content">
            <TestimonialsMetrics metrics={activeTestimonial.metrics} />
            <TestimonialsBox testimonial={activeTestimonial} />
          </div>
          
          {isMobile ? (
            <MobileTestimonialsNav
              testimonials={testimonialsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : (
            <TestimonialsNav
              testimonials={testimonialsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      </section>
    </>
  );
}