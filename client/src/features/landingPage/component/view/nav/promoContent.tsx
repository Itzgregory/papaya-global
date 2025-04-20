'use client';
import { useState } from 'react';
import { PromoItem } from '@/features/landingPage/type/nav/nav';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface PromoContentProps {
  promo: PromoItem;
  className?: string;
  iconType?: 'image' | 'svg';
  titleClassName?: string;
  descriptionClassName?: string;
  linkClassName?: string;
}

export default function PromoContent({
  promo,
  className = '',
  iconType = 'svg',
  titleClassName = 'text-base font-semibold text-papaya-black mb-1',
  descriptionClassName = 'text-sm text-gray-600 m-0',
  linkClassName = 'inline-flex items-center gap-1 text-sm font-medium text-blue-800 mt-2 hover:opacity-75 transition-opacity duration-300',
}: PromoContentProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={promo.href}
      className={`block ${className}`}
      target={promo.target}
      aria-label={`Read full story about ${promo.title}`}
    >
      <div className="relative w-full h-[200px] rounded-md overflow-hidden bg-gray-100">
        {!imageError ? (
          <Image
            src={promo.imageSrc}
            alt={promo.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className={titleClassName}>{promo.title}</h3>
        <p className={descriptionClassName}>{promo.description}</p>
        <span className={linkClassName}>
          Read full story
          {iconType === 'image' ? (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ml-2">
              <FaArrowRight className="w-3 h-[12px] text-white" />
            </span>
          ) : (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ml-2">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          )}
        </span>
      </div>
    </Link>
  );
}