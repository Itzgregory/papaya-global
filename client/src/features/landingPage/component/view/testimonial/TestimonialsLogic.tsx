'use client';
import { useState, useEffect } from 'react';
import { testimonialsData } from '@/features/landingPage/lib/testimonials/testimonialData';

export default function useTestimonialsLogic() {
  const [activeTab, setActiveTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveTab(prev => prev < testimonialsData.length ? prev + 1 : 1);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      setActiveTab(prev => distance > 0 
        ? Math.min(prev + 1, testimonialsData.length)
        : Math.max(prev - 1, 1)
      );
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const activeTestimonial = testimonialsData.find(item => item.id === activeTab) || testimonialsData[0];

  return {
    isMobile,
    activeTab,
    activeTestimonial,
    testimonialsData,
    setActiveTab,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}