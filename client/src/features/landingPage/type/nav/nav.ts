export interface MenuItem {
  id: string;
  title: string;
  className?: string;
  tabs?: MenuTab[];
  submenuItems?: SubmenuItem[];
}

export interface MenuTab {
  title: string;
  submenuItems: SubmenuItem[] | { column1: SubmenuItem[]; column2: SubmenuItem[] };
  promo?: PromoItem;
}


export interface SubmenuItem {
  href: string;
  title: string;
  description: string;
  target?: string;
}

export interface PromoItem {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  srcSet?: string;
  sizes?: string;
  target?: string;
}

export interface TabItem {
  title: string;
}

export interface DropdownProps {
  item: MenuItem;
  isContactUs?: boolean;
}