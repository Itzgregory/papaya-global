import { addresses } from '@/features/landingPage/lib/footer/footerData';
import { Address } from '../../../type/footer/footer';

const FooterAddresses: React.FC = () => {
  return (
    <div className="o-footer__address-box leading-6 mt-8 order-3 md:mt-11 md:order-4">
      {addresses.map((address: Address, index: number) => (
        <div key={index} className="o-footer__address-item mb-8 last:mb-0">
          <h6 className="o-footer__address-country text-white font-suisse text-[13px] font-normal leading-[1.8]">
            {address.country}
          </h6>
          <p
            className="o-footer__address font-suisse text-gray-400 text-sm leading-[1.8]"
            dangerouslySetInnerHTML={{ __html: address.details }}
          />
        </div>
      ))}
    </div>
  );
};

export default FooterAddresses;