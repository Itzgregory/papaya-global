import Link from 'next/link';
import { footerMenus } from '@/features/landingPage/lib/footer/footerData';

export const renderMenuItems = (menuTitle: string) => {
  const menu = footerMenus.find(m => m.title === menuTitle);
  if (!menu) return null;

  return (
    <>
      <h3 className="text-white text-md font-medium mb-4 uppercase">{menuTitle}</h3>
      <ul className="space-y-2">
        {menu.items.map(item => (
          <li key={item.id}>
            <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};