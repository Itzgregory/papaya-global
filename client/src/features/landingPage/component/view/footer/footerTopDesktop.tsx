import FooterLogo from './footerLogo';
import FooterCTA from './footerCTA';
import FooterAddresses from './footerAddresses';
import FooterLanguageSelector from './footerLanguageSelector';
import FooterSocialLinks from './footerSocialLinks';
import { renderMenuItems } from '@/features/landingPage/lib/footer/footerUtils';

const FooterTopDesktop: React.FC = () => {
  return (
    <div className="o-footer__top pt-16 pb-12 bg-gray-900 min-h-[200px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-nowrap">
          <div className="w-1/5 pr-4 box-border">
            <div className="mb-8">
              <FooterLogo />
            </div>
            <div className="mb-8">
              <FooterCTA />
            </div>
            <div>
              <FooterAddresses />
            </div>
          </div>

          <div className="w-4/5 flex flex-nowrap box-border">
            <div className="w-1/4 px-2 box-border">
              <div className="mb-8">
                {renderMenuItems("Payments Solutions")}
              </div>
              <div>
                {renderMenuItems("Workforce Solutions")}
              </div>
            </div>

            <div className="w-1/4 px-2 box-border">
              <div className="mb-8">
                {renderMenuItems("Employment Models")}
              </div>
              <div>
                {renderMenuItems("Employment Services")}
              </div>
            </div>

            <div className="w-1/4 px-2 box-border">
              {renderMenuItems("Resources")}
            </div>
            <div className="w-1/4 px-2 box-border">
              {renderMenuItems("Company")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-8 border-t border-gray-700 pt-4">
          <div className="w-auto">
            <FooterLanguageSelector />
          </div>
          <div className="w-auto">
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopDesktop;