import { useNav } from '@/lib/navContext';
import { ReactNode } from 'react';
import { TabItem as TabType } from '@/features/landingPage/type/nav/nav';

interface TabProps extends TabType {
  children: ReactNode;
}

export default function Tab({ title, children }: TabProps) {
  const { activeTab, setActiveTab } = useNav();

  const handleClick = () => {
    setActiveTab(activeTab === title ? null : title);
  };

  return (
    <div>
      <div
        className={`cursor-pointer p-3 rounded hover:bg-gray-50 ${
          activeTab === title ? 'bg-gray-50' : ''
        }`}
        onClick={handleClick}
      >
        <span className="text-base font-medium text-gray-800">{title}</span>
      </div>
      {activeTab === title && (
        <div className="mt-4" style={{ minHeight: '430.146px' }}>
          {children}
        </div>
      )}
    </div>
  );
}