'use client';
import { useState, useEffect, useRef } from 'react';
import { menuItems } from '../../../lib/nav/menuItems';
import Dropdown from './dropdown';
import { MenuItem } from '@/features/landingPage/type/nav/nav';

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <div className="hidden laptop:block" ref={menuRef}>
      <nav>
        <ul className="flex space-x-6 items-center">
          {menuItems.map((item: MenuItem) => (
            <li
              key={item.id}
              className={`relative ${item.className || ''} ${
                activeMenu === item.id ? 'is-active' : ''
              }`}
            >
              <button
                onClick={() => handleMenuToggle(item.id)}
                className={`flex items-center px-2 py-2 text-sm font-medium transition-colors ${
                  activeMenu === item.id
                    ? 'text-black'
                    : activeMenu
                    ? 'text-gray-500'
                    : 'text-papaya-black hover:text-papaya-grey'
                }`}
                aria-expanded={activeMenu === item.id}
              >
                {item.title}
                <span className="ml-2 text-sm font-light text-papaya-black">
                  {activeMenu === item.id ? '-' : '+'}
                </span>
              </button>
              {activeMenu === item.id && <Dropdown item={item} />}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}