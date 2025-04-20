import FooterBottomMenu from './footerBottomMenu';
import FooterAccessibility from './footerAccessibility';
import FooterCopyright from './footerCopyright';
import { bottomMenu } from '@/features/landingPage/lib/footer/footerData';
import { FooterMenuItem } from '../../../type/footer/footer';

interface FooterBottomProps {
  menuItems?: FooterMenuItem[]; 
}

const FooterBottom: React.FC<FooterBottomProps> = ({ menuItems = bottomMenu }) => {
  return (
    <div className="o-footer__bottom bg-papaya-dark py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
          <FooterBottomMenu menuItems={menuItems} />
          <div className="flex items-center gap-4 ml-auto">
            <FooterAccessibility />
            <FooterCopyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;