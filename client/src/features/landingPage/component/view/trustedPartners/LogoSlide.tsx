import Image from 'next/image';
import { Logo, getImagePath } from '@/features/landingPage/lib/tustedPartners/logoData';
import { useState } from 'react';

interface LogoSlideProps {
  logo: Logo;
}

export default function LogoSlide({ logo }: LogoSlideProps) {
  const [imgSrc, setImgSrc] = useState<string>(logo.src);
  const [useFallback, setUseFallback] = useState<boolean>(false);

  const handleImageError = () => {
    if (logo.localFallback && !useFallback) {
      setImgSrc(getImagePath(logo.localFallback));
      setUseFallback(true);
    } else {
      setImgSrc('/api/placeholder/240/100');
    }
  };

  return (
    <div className="acf-dl-slider__slider-logo flex justify-center items-center p-2">
      {logo.webpSrc && !useFallback ? (
        <picture>
          <source 
            type="image/webp" 
            srcSet={getImagePath(logo.webpSrc)}
          />
          <Image
            src={getImagePath(imgSrc)}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="max-h-[98px] w-auto object-contain"
            decoding="async"
            loading="lazy"
            onError={handleImageError}
          />
        </picture>
      ) : (
        <Image
          src={getImagePath(imgSrc)}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="max-h-[98px] w-auto object-contain"
          decoding="async"
          loading="lazy"
          onError={handleImageError}
        />
      )}
    </div>
  );
}