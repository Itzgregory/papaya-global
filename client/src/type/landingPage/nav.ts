export interface NavContextType {
    activeMenu: string | null;
    setActiveMenu: (title: string | null) => void;
    activeTab: string | null;
    setActiveTab: (title: string | null) => void;
  }