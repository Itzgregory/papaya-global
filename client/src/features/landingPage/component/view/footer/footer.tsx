import FooterTop from './footerTop';
import FooterBottomInfo from './footerBottominfo';
import FooterBottom from './footerBottom';

const Footer: React.FC = () => {
  return (
    <footer className="o-footer bg-papaya-dark text-white">
      <div className="container mx-auto px-4 max-w-[1200px]"> 
        <FooterTop />
        <hr className="border-t border-papaya-footer-border my-4" />
        <FooterBottomInfo />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;