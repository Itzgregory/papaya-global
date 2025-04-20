import { socialLinks } from '@/features/landingPage/lib/footer/footerData';
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const FooterSocialLinks: React.FC<{ className?: string }> = ({ className = "flex items-center space-x-4" }) => {
  const getIconComponent = (icon: string) => {
    switch(icon) {
      case 'twitter': return <FaTwitter className="w-4 h-4" />;
      case 'linkedin': return <FaLinkedin className="w-4 h-4" />;
      case 'facebook': return <FaFacebook className="w-4 h-4" />;
      case 'youtube': return <FaYoutube className="w-4 h-4" />;
      case 'instagram': return <FaInstagram className="w-4 h-4" />;
      default: return <FaTwitter className="w-4 h-4" />;
    }
  };

  return (
    <div className={className}>
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={link.label}
        >
          {getIconComponent(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default FooterSocialLinks;