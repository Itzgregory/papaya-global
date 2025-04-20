'use client';
import { useNav } from '../../../../../lib/navContext';


export default function MobileMenuButton() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useNav();

  return (
    <button
      className="laptop:hidden p-2"
      onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d={isMobileMenuOpen ? 'M18 6L6 18M6 6L18 18' : 'M3 12H21M3 6H21M3 18H21'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}