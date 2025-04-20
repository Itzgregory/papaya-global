import { useNav } from '../../../../../lib/navContext';
import { MenuTab as MenuTabType } from '@/features/landingPage/type/nav/nav';
import Submenu from './submenu';
import PromoColumn from './promoColumn';

interface MenuTabProps {
  tab: MenuTabType;
}

export default function MenuTab({ tab }: MenuTabProps) {
  const { activeTab, setActiveTab } = useNav();
  const isActive = activeTab === tab.title;

  const handleTabClick = () => {
    setActiveTab(isActive ? null : tab.title);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer p-3 rounded hover:bg-gray-50 ${
          isActive ? 'bg-gray-50' : ''
        }`}
        onClick={handleTabClick}
      >
        <span className="flex items-center justify-between text-base font-medium text-papaya-black">
          {tab.title}
          <span
            className={`ml-2 text-sm font-light text-papaya-black transition-transform duration-300 ${
              isActive ? 'rotate-90' : ''
            }`}
          >
            +
          </span>
        </span>
      </div>

      {isActive && (
        <div className="min-h-tab-content laptop:flex laptop:gap-6">
          <div
            className={`${
              tab.title === 'Industry' ? 'grid grid-cols-2 gap-4' : 'flex-1'
            }`}
          >
            <Submenu items={tab.submenuItems} />
          </div>
          {tab.promo && <PromoColumn promo={tab.promo} />}
        </div>
      )}
    </div>
  );
}