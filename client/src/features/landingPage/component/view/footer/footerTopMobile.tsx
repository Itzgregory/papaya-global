import FooterLogo from './footerLogo';
import FooterCTA from './footerCTA';
import FooterAddresses from './footerAddresses';
import FooterLanguageSelector from './footerLanguageSelector';
import { renderMenuItems } from '@/features/landingPage/lib/footer/footerUtils';

const FooterTopMobile: React.FC = () => {
  return (
    <div className="o-footer__top pt-6 pb-8 bg-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col space-y-8">
         
          <div className="w-full">
            <FooterLogo />
          </div>

          
          <div className="w-full">
            <FooterCTA />
          </div>

         
          <div className="w-full">
            <FooterAddresses />
          </div>

         
          <div className="w-full">
            {renderMenuItems("Payments Solutions")}
          </div>

         
          <div className="w-full">
            {renderMenuItems("Workforce Solutions")}
          </div>

          
          <div className="w-full">
            {renderMenuItems("Employment Models")}
          </div>

         
          <div className="w-full">
            {renderMenuItems("Employment Services")}
          </div>

         
          <div className="w-full">
            {renderMenuItems("Resources")}
          </div>

         
          <div className="w-full">
            {renderMenuItems("Company")}
          </div>
        </div>

       
        <div className="flex flex-col w-full mt-8 border-t border-gray-700 pt-4 space-y-4">
          <div className="w-full">
            <FooterLanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopMobile;