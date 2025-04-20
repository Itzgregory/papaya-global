import FooterTopMobile from './footerTopMobile';
import FooterTopDesktop from './footerTopDesktop';

const FooterTop: React.FC = () => {
  return (
    <>
      <div className="block tablet:hidden">
        <FooterTopMobile />
      </div>
      <div className="hidden tablet:block">
        <FooterTopDesktop />
      </div>
    </>
  );
};

export default FooterTop;