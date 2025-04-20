'use client';
import { useNav } from '../../../../../lib/navContext';
import { menuItems } from '../../../lib/nav/menuItems';
import Link from 'next/link';
import { MenuItem } from '@/features/landingPage/type/nav/nav';
import Submenu from './submenu';
import MobilePromo from './promoMobile';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const { isMobileMenuOpen,  } = useNav();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openTabs, setOpenTabs] = useState<string[]>([]);

  const handleMenuToggle = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
    if (activeMenu !== menuId) {
      setOpenTabs([]);
    }
  };

  const handleTabToggle = (tabTitle: string) => {
    setOpenTabs((prev) =>
      prev.includes(tabTitle) ? prev.filter((t) => t !== tabTitle) : [...prev, tabTitle]
    );
  };

  return (
    <motion.div
      className={`fixed top-[56px] left-0 w-full h-[110vh] bg-white overflow-y-auto laptop:hidden z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      initial={{ x: '100%' }}
      animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3">
        <ul className="space-y-2">
          {menuItems.map((item: MenuItem) => (
            <li
              key={item.id}
              className={`relative full-width-pseudo border-b border-gray-300 ${
                activeMenu === item.id ? 'bg-[#ffe3e0]' : ''
              } ${item.id === 'contact-us' ? 'border-b-0' : ''} hover:bg-[#ffe3e0]`}
            >
              {item.id === 'contact-us' ? null : (
                <>
                  <button
                    onClick={() => handleMenuToggle(item.id)}
                    className={`flex items-center justify-between w-full py-1.5 px-3 text-lg font-medium transition-colors ${
                      activeMenu === item.id ? 'text-red-600' : 'text-papaya-black'
                    }`}
                    aria-expanded={activeMenu === item.id}
                  >
                    {item.title}
                    <span className="ml-2 text-lg font-light text-papaya-black">
                      {activeMenu === item.id ? '+' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeMenu === item.id && (
                      <motion.div
                        className="mt-1 pl-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.tabs ? (
                          item.tabs.map((tab, index) => (
                            <div key={index} className="border-b border-gray-300">
                              <button
                                onClick={() => handleTabToggle(tab.title)}
                                className="flex items-center justify-between w-full py-1 text-base font-medium text-papaya-black"
                              >
                                {tab.title}
                                <svg
                                  className={`ml-2 w-[50px] h-4 text-papaya-black transition-transform duration-300 ${
                                    openTabs.includes(tab.title) ? 'rotate-180' : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </button>
                              <AnimatePresence>
                                {openTabs.includes(tab.title) && (
                                  <motion.div
                                    className="pl-4 py-1"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Submenu items={tab.submenuItems} />
                                    {tab.promo && <MobilePromo promo={tab.promo} />}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))
                        ) : (
                          <Submenu items={item.submenuItems || []} />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="block py-1.5 text-lg font-medium text-papaya-black"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-1.5 bg-papaya-black text-white text-sm font-medium rounded-button hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-papaya-red focus:ring-offset-2 w-full justify-center"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}