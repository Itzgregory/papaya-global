'use client';
import { useState, useRef, useEffect } from 'react';

export default function DesktopSearchInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [leftPosition, setLeftPosition] = useState(0);
  const [animationOrigin, setAnimationOrigin] = useState({ bottom: 0, right: 0 });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const logo = document.querySelector('.logo-container');
      if (logo) {
        const logoRect = logo.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setLeftPosition(logoRect.right - containerRect.left);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setAnimationOrigin({
        bottom: rect.bottom,
        right: rect.right
      });
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? 'Close search' : 'Open search'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15.5 15.5M15.5 15.5C17.1569 13.8431 18 11.5369 18 9C18 6.46313 17.1569 4.15687 15.5 2.5C13.8431 0.843146 11.5369 0 9 0C6.46313 0 4.15687 0.843146 2.5 2.5C0.843146 4.15687 0 6.46313 0 9C0 11.5369 0.843146 13.8431 2.5 15.5C4.15687 17.1569 6.46313 18 9 18C11.5369 18 13.8431 17.1569 15.5 15.5Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {(isOpen || isClosing) && (
        <div
          className="absolute top-0 h-full flex items-center bg-white border-b border-black"
          style={{
            left: `${leftPosition}px`,
            right: '0',
            animation: isClosing 
              ? 'search-collapse 0.3s ease-out forwards' 
              : 'search-expand 0.3s ease-out forwards',
            transformOrigin: `${animationOrigin.right}px ${animationOrigin.bottom}px`,
          }}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15.5 15.5M15.5 15.5C17.1569 13.8431 18 11.5369 18 9C18 6.46313 17.1569 4.15687 15.5 2.5C13.8431 0.843146 11.5369 0 9 0C6.46313 0 4.15687 0.843146 2.5 2.5C0.843146 4.15687 0 6.46313 0 9C0 11.5369 0.843146 13.8431 2.5 15.5C4.15687 17.1569 6.46313 18 9 18C11.5369 18 13.8431 17.1569 15.5 15.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-20 text-sm focus:outline-none"
            autoFocus
          />

          {searchValue && (
            <button
              type="submit"
              className="absolute right-10 top-1/2 -translate-y-1/2 p-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <button
            onClick={handleClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
            aria-label="Close search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes search-expand {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes search-collapse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}