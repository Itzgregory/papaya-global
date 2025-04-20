import Link from 'next/link';
import { footerMenus } from '@/features/landingPage/lib/footer/footerData';

const FooterWorkforceSolutions: React.FC = () => {
  return (
    <div className="h-full">
      <h3 className="text-white text-md font-medium mb-4 uppercase">Workforce Solutions</h3>
      <ul className="space-y-2">
        {footerMenus.find(m => m.title === "Workforce Solutions")?.items.map(item => (
          <li key={item.id}>
            <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterWorkforceSolutions;
