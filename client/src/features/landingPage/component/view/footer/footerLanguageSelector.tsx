'use client';
import { FaGlobe } from 'react-icons/fa';
import { languages } from '@/features/landingPage/lib/footer/footerData';

const FooterLanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center mb-4 md:mb-0">
      <FaGlobe className="text-gray-400 mr-2" />
      <select 
        className="bg-transparent text-blue-400 text-sm border-none focus:ring-0 cursor-pointer"
        defaultValue="en"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-transparent text-blue-400">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FooterLanguageSelector;