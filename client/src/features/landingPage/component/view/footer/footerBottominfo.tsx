import Link from 'next/link';

const FooterBottomInfo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="o-footer__bottom-info text-footer-text text-[13px] leading-[1.8] pb-4">
        <p>
          Papaya Global’s payment services are offered through Azimo, Papaya’s licensed payments arm.
          Azimo is a payment services provider regulated in five Tier-1 jurisdictions.<br />
          These licenses allow Papaya, together with its partners, to provide workforce payments
          worldwide. For further information on Azimo’s licences worldwide, check our{' '}
          <Link
            href="/payment-licenses/"
            className="underline transition-colors duration-150 ease-in-out hover:text-white"
          >
            licensing page
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default FooterBottomInfo;