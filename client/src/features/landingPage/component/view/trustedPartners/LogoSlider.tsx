'use client';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import LogoSlide from './LogoSlide';
import { Logo } from '@/features/landingPage/lib/tustedPartners/logoData';

interface LogoSliderProps {
  title: string;
  logos: Logo[];
  slideWidth: string; 
  className?: string;
}


export default function LogoSlider({ title, logos, slideWidth, className }: LogoSliderProps) {
  return (
    <div className={`acf-dl-slider mb-6 ${className}`}>
      <h5 
        id={`${title.toLowerCase().replace(' ', '-')}-title`} 
        className="text-xl font-semibold text-papaya-black mb-4 text-center"
      >
        {title}
      </h5>
      <Swiper
        modules={[Autoplay]}
        direction="horizontal"
        loop={true}
        slidesPerView={5}
        spaceBetween={16}
        autoplay={{ 
          delay: 0, 
          disableOnInteraction: false,
          reverseDirection: true 
        }}
        speed={5000} 
        className="acf-dl-slider__slider"
        role="region"
        aria-labelledby={`${title.toLowerCase().replace(' ', '-')}-title`}
        breakpoints={{
          320: { slidesPerView: 1 },
          580: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} style={{ width: slideWidth }}>
            <LogoSlide logo={logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}