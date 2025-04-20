'use client';
import { useState } from 'react';
import { DropdownItem } from  '@/features/landingPage/type/hero/hero';

interface HeroDropdownProps {
  items: DropdownItem[];
}


export default function HeroDropdown({ items }: HeroDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full laptop:w-48">
      <div
        className="flex items-center justify-between bg-gray-200 px-4 py-2 cursor-pointer border-b border-black text-gray-700 font-medium w-full hover:bg-gray-200 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        Choose
        <span className="ml-2">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8555 1.65313L6.05547 6.45312L1.25547 1.65312"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className="absolute z-[998] bg-white shadow-mega-menu rounded-lg mt-2 w-full border border-gray-200">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0">
              <a
                href={item.href}
                target={item.target || '_self'}
                className="block px-4 py-3 text-gray-700 text-sm font-medium hover:bg-papaya-red hover:text-papaya-red-accent transition-colors duration-200 rounded"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}