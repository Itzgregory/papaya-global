export interface FooterMenuItem {
    id: string;
    label: string;
    href: string;
  }
  
  export interface FooterMenu {
    title: string;
    items: FooterMenuItem[];
  }
  
  export interface SocialLink {
    href: string;
    label: string;
    icon: 'youtube' | 'linkedin' | 'facebook' | 'twitter'; 
  }
  
  export interface Address {
    country: string;
    details: string;
  }
  
  export interface Language {
    code: string;
    label: string;
    href: string;
    icon?: string; 
  }