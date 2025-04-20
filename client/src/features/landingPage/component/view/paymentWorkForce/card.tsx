'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaImage } from 'react-icons/fa'; // Fallback icon from react-icons
import { Card, ListItem } from '@/features/landingPage/type/PaymentWorkForce/PaymentWorrkforce';

interface MainNavCardProps {
  card: Card;
}

export default function MainNavCard({ card }: MainNavCardProps) {
  const sessionKey = `failedImages_${Date.now()}`;

  const [failedImages, setFailedImages] = useState<{ [key: number]: boolean }>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(sessionKey);
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(sessionKey, JSON.stringify(failedImages));
    }
  }, [failedImages, sessionKey]);

  const handleImageError = (index: number) => {
    const iconUrl = card.listItems && card.listItems[index] ? card.listItems[index].icon : 'unknown';
    console.error(`Failed to load image for list item ${index}: ${iconUrl}`);
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Link
      href={card.href}
      className="flex items-start p-4 bg-white shadow hover:shadow-md transition-shadow group relative overflow-hidden rounded-xl gap-4 hover:z-10"
    >
      <div className="flex-shrink-0 w-12 h-12 relative">
        {card.webpSrc ? (
          <picture>
            <source type="image/webp" srcSet={card.webpSrc} />
            <Image
              src={card.iconSrc}
              alt={card.iconAlt}
              width={card.iconWidth}
              height={card.iconHeight}
              className="object-contain w-full h-full"
              decoding="async"
              loading="lazy"
            />
          </picture>
        ) : (
          <Image
            src={card.iconSrc}
            alt={card.iconAlt}
            width={card.iconWidth}
            height={card.iconHeight}
            className="object-contain w-full h-full"
            decoding="async"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex-1 min-w-0 relative">
        <h6 className="text-lg font-semibold text-red-600 break-words">{card.title}</h6>
        {card.description && (
          <p className="text-black text-sm mt-1 break-words">{card.description}</p>
        )}
  
        {card.listItems && card.listItems.length > 0 && (
          <ul className="mt-2 space-y-2">
            {card.listItems.map((item: ListItem, index: number) => (
              <li
                key={index}
                className={`${index >= 3 ? 'hidden tablet:block' : 'block'}`}
              >
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-4 h-4 relative mt-0.5">
                    {failedImages[index] ? (
                      <FaImage className="w-full h-full text-gray-400" />
                    ) : (
                      <Image
                        src={item.icon}
                        alt={item.title ? `${item.title} icon` : 'List item icon'}
                        fill
                        className="object-contain opacity-80"
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    {item.title && (
                      <h6 className="text-xs font-medium text-red-600 break-words">
                        {item.title}
                      </h6>
                    )}
                    {item.description && (
                      <p className="text-[10px] text-black leading-tight break-words">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
  
        <div className="
          block mt-3
          tablet:absolute tablet:bottom-0 tablet:right-0 tablet:opacity-0 tablet:group-hover:opacity-100 
          tablet:transition-opacity tablet:duration-200
        ">
          <span className="text-red-600 text-sm font-medium hover:underline">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}