'use client';
import { useState, useEffect } from 'react';
import Submenu from './submenu';
import PromoColumn from './promoColumn';
import { DropdownProps, SubmenuItem } from '@/features/landingPage/type/nav/nav';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dropdown({ item }: DropdownProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (item.tabs?.length) setActiveTab(item.tabs[0].title);
  }, [item]);

  const hasSubmenuItems = (
    items: SubmenuItem[] | { column1: SubmenuItem[]; column2: SubmenuItem[] } | undefined
  ): boolean => {
    if (!items) return false;
    if (Array.isArray(items)) return items.length > 0;
    return items.column1.length > 0 || items.column2.length > 0;
  };

  const isTabbedMenu = (item.tabs ?? []).length > 0;
  const hasSubmenu = hasSubmenuItems(item.submenuItems);

  if (!isTabbedMenu && !hasSubmenu) return null;

  const dropdownHeight = isTabbedMenu ? '500.146px' : 'auto';

  return (
    <AnimatePresence>
      <div className="fixed inset-x-0 top-[56px] flex justify-center z-50 pointer-events-none">
        <motion.div
          className="pointer-events-auto bg-white shadow-mega-menu rounded-b-lg"
          style={{
            width: isTabbedMenu ? 'min(839px, 90vw)' : '300px',
            height: dropdownHeight 
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex p-4 h-full">
            {isTabbedMenu && item.tabs && (
              <div className="w-full laptop:w-1/3 border-r border-gray-200 pr-4">
                {item.tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-3 rounded ${
                      activeTab === tab.title
                        ? 'bg-[#ffe3e0] border border-black'
                        : 'hover:bg-[#ffe3e0] hover:border hover:border-black'
                    }`}
                    onClick={() => setActiveTab(tab.title)}
                    onMouseEnter={() => setActiveTab(tab.title)}
                  >
                    <span className="flex items-center justify-between text-base font-medium text-papaya-black">
                      {tab.title}
                      <svg
                        className="ml-2 w-4 h-4 text-papaya-black"
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
                  </div>
                ))}
              </div>
            )}
            
            {isTabbedMenu && activeTab && item.tabs && (
              <div className="w-2/3 pl-6 hidden laptop:block">
                {item.tabs.find((tab) => tab.title === activeTab) && (
                  <div className="flex gap-6 h-[calc(100%-32px)]">
                    <div className="flex-1">
                      <Submenu
                        items={
                          item.tabs.find((tab) => tab.title === activeTab)!.submenuItems
                        }
                      />
                    </div>
                    {item.tabs.find((tab) => tab.title === activeTab)?.promo && (
                      <PromoColumn
                        promo={item.tabs.find((tab) => tab.title === activeTab)!.promo!}
                      />
                    )}
                  </div>
                )}
              </div>
            )}

            {!isTabbedMenu && hasSubmenu && (
              <div className="p-4 grid grid-cols-1 laptop:grid-cols-2 gap-4 max-w-[300px]">
                <Submenu items={item.submenuItems} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}