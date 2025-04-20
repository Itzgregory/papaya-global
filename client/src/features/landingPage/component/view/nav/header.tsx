'use client';
import { ReactNode, useState, useRef, useEffect } from 'react';
import { NavProvider } from '../../../../../lib/navContext';
import Logo from './logo';
import MegaMenu from './megaMenu';
import MobileMenuButton from './mobileMenuButton';
import MobileMenu from './MobileMenu';
import DesktopSearchInput from './searchInputDesktop';
import MobileSearchInput from './searchInputMobile';
import { FaGlobe, FaPlus, FaMinus } from 'react-icons/fa';
import Link from 'next/link';

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export default function Header({ }: HeaderProps) {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const loginDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
        setLoginDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavProvider>
      <header
        className="fixed inset-x-0 top-0 z-50 bg-white shadow-md border-b border-gray-200 h-14 flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center px-5">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="hidden laptop:block">
                <MegaMenu />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden laptop:block">
                <DesktopSearchInput />
              </div>
              <div className="laptop:hidden">
                <MobileSearchInput />
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-papaya-black size-4" />
                
                <div className="relative hidden laptop:block" ref={loginDropdownRef}>
                  <button
                    onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                    className="flex items-center px-3 py-2 text-sm font-medium text-papaya-black transition-colors rounded-md border border-gray-200 "
                  >
                    Login
                    {loginDropdownOpen ? (
                      <FaMinus className="ml-2 text-xs" />
                    ) : (
                      <FaPlus className="ml-2 text-xs" />
                    )}
                  </button>
                  
                  {loginDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
                      <Link
                        href="/login/workforce-os"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:border-red-300  transition-colors"
                        onClick={() => setLoginDropdownOpen(false)}
                      >
                        Workforce OS
                      </Link>
                      <Link
                        href="/login/payment-os"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:border-red-300 transition-colors"
                        onClick={() => setLoginDropdownOpen(false)}
                      >
                        Payment OS
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="hidden laptop:inline-flex items-center px-4 py-1.5 bg-papaya-black text-white text-sm font-medium rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Contact Us
                </Link>
                <MobileMenuButton />
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </NavProvider>
  );
}