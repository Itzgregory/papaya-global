export interface NavLink {
    href: string;
    label: string;
    isActive: boolean;
  }

  export interface ListItem {
    icon: string; 
    title?: string; 
    description?: string; 
  }

  export interface Card {
    href: string;
    iconSrc: string;
    iconAlt: string;
    iconWidth: number;
    iconHeight: number;
    webpSrc?: string; 
    title: string;
    description?: string;
    listItems?: ListItem[];
  }
  
  export interface NumberItem {
    value: number;
    before?: string; 
    after?: string; 
    description: string;
  }
  
  export interface PaymentsWorkforceData {
    id: string; 
    title: string;
    description?: string;
    navLinks: NavLink[];
    cards: Card[];
    numbers: NumberItem[];
  }
  