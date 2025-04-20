import Link from 'next/link';
import { FooterMenuItem } from '../../../type/footer/footer';

interface FooterBottomMenuProps {
  menuItems: FooterMenuItem[];
}

const FooterBottomMenu: React.FC<FooterBottomMenuProps> = ({ menuItems }) => {
  return (
    <nav className="c-footer-bottom-menu">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 list-none justify-start">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item whitespace-nowrap">
            <Link
              href={item.href}
              className="text-footer-text text-gray-400 text-sm leading-[1.8] transition-colors duration-150 ease-in-out hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterBottomMenu;