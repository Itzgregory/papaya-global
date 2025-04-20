// src/lib/navContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavContextType {
  // Main menu activation
  activeMenu: string | null;
  setActiveMenu: (menuId: string | null) => void;
  
  // Tab activation within a menu item
  activeTab: string | null;
  setActiveTab: (title: string | null) => void;
  
  // Mobile menu state
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Close tabs when menu changes
  const handleMenuChange = (menuId: string | null) => {
    setActiveMenu(menuId);
    if (activeMenu !== menuId) {
      setActiveTab(null);
    }
  };

  return React.createElement(
    NavContext.Provider,
    { 
      value: { 
        activeMenu, 
        setActiveMenu: handleMenuChange, 
        activeTab, 
        setActiveTab,
        isMobileMenuOpen,
        setMobileMenuOpen
      } 
    },
    children
  );
}

export function useNav(): NavContextType {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
}