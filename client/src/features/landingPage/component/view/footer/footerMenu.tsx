import Link from 'next/link';
import { footerMenus } from '@/features/landingPage/lib/footer/footerData';

const FooterMenus: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="h-full">
        <h3 className="text-white text-md font-medium mb-4 uppercase">Payment Solutions</h3>
        <ul className="space-y-2">
          {footerMenus.find(m => m.title === "Payments Solutions")?.items.map(item => (
            <li key={item.id}>
              <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full">
        <h3 className="text-white text-md font-medium mb-4 uppercase">Employment Models</h3>
        <ul className="space-y-2">
          {footerMenus.find(m => m.title === "Employment Models")?.items.map(item => (
            <li key={item.id}>
              <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full">
        <h3 className="text-white text-md font-medium mb-4 uppercase">Resources</h3>
        <ul className="space-y-2">
          {footerMenus.find(m => m.title === "Resources")?.items.map(item => (
            <li key={item.id}>
              <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full">
        <h3 className="text-white text-md font-medium mb-4 uppercase">Company</h3>
        <ul className="space-y-2">
          {footerMenus.find(m => m.title === "Company")?.items.map(item => (
            <li key={item.id}>
              <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterMenus;