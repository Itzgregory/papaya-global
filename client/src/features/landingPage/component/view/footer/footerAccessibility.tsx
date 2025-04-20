'use client';
import { FaUniversalAccess } from 'react-icons/fa';

const FooterAccessibility: React.FC = () => {
  const openAccessibilityMenu = () => {
    if (typeof window !== 'undefined' && window.interdeal?.a11y?.openMenu) {
      window.interdeal.a11y.openMenu();
    } else {
      console.warn('Accessibility menu script not loaded');
    }
  };

  return (
    <div className="o-footer__accessibility">
      <button
        onClick={openAccessibilityMenu}
        className="o-footer__accessibility-button text-white hover:text-white/75 transition-colors duration-200"
        aria-label="Open accessibility menu"
      >
        <FaUniversalAccess className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FooterAccessibility;