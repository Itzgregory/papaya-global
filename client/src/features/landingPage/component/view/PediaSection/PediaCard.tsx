import { PediaCard as PediaCardType } from '../../../type/pediaSection/pediaSection';
import { useState } from 'react';

interface PediaCardProps {
  card: PediaCardType;
  id?: string;
  index: number;
  className?: string;
}

export default function PediaCard({ card, index, className }: PediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isFirstCard = index === 0;
  const accentColor = isFirstCard ? 'text-red-500' : 'text-[#fed7d2]';
  const borderColor = isFirstCard ? 'border-red-500' : 'border-[#fed7d2]';
  
  const titleParts = card.title.split(' ');
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.length > 1 ? titleParts.slice(1).join(' ') : '';

  return (
    <div 
      className={`bg-[#15212f] p-4 custom-card shadow-md h-full border-2 transition-all duration-300 ${
        isHovered ? borderColor : 'border-transparent'
      } ${className || ''}`}
      style={{
        borderColor: isHovered ? (isFirstCard ? '#ef4444' : '#fed7d2') : 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-xs font-suisse font-semibold ${accentColor} mb-1`}>
        {card.label}
      </div>
      <h3 className="text-lg font-greed font-bold mb-1 flex items-center">
        <span className={isHovered ? accentColor : ''}>
          {firstWord}
        </span>
        {restOfTitle && <span className="ml-1">{restOfTitle}</span>}
        {!isHovered && (
          <>
            <span className={accentColor + " mx-1"}>{card.symbol}</span>
          </>
        )}
        {isHovered && <span className={`${accentColor} ml-1`}>.</span>}
      </h3>
      <div className="text-sm font-suisse text-papaya-gray mb-2 line-clamp-3">
        {card.description}
      </div>
      <a
        href={card.link}
        className="flex items-center text-white font-suisse font-semibold hover:underline text-sm group"
        aria-label={`Learn more about ${card.title}`}
      >
        {isHovered && (
          <span className={`mr-2 ${accentColor}`}>
            <svg
              className="w-3 h-3 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7-7 7"
              />
            </svg>
          </span>
        )}
        {card.linkText}
        <svg
          className="w-3 h-3 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
}