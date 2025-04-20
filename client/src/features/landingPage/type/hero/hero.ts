export interface NavLink {
    href: string;
    label: string;
    target?: string;
  }
  
  export interface DropdownItem {
    href: string;
    label: string;
    target?: string;
  }
  
  export interface HeroBannerProps {
    topNavLinks: NavLink[];
    title: string;
    description: string;
    dropdownItems: DropdownItem[];
    button: NavLink;
    desktopVideo: string;
    mobileVideo: string;
  }