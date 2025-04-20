import Link from 'next/link';
import FooterSocialLinks from './footerSocialLinks';

const FooterCTA: React.FC = () => {
  return (
    <div className="o-footer__cta-box order-3 w-full md:order-2">
      <div className="o-footer__cta mt-[21px] md:max-w-[390px]">
          <h2 className="o-footer__cta-title text-white font-greed text-xl font-bold leading-[1.08] mb-4 md:text-[26px] md:tracking-tight md:mb-4">
            Power up your payroll & payments
          </h2>
          <div className="o-footer__cta-description text-cta-desc font-suisse text-base font-normal leading-6 md:text-white/40">
            Boost productivity and performance, so you can focus on what matters—your business
          </div>
        <div className="o-footer__cta-btn-box flex items-center justify-between mt-5 xl:mt-4">
          <Link
            href="/schedule-a-demo/"
            className="c-button bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-[37px] font-semibold text-base tracking-tight leading-6 transition-colors duration-200"
          >
            Get a Demo
          </Link>
          <div className="tablet:hidden mt-4">
            <FooterSocialLinks className="flex items-center gap-x-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;