import { NavLink } from  '@/features/landingPage/type/hero/hero';

interface HeroTopNavProps {
  links: NavLink[];
  className?: string;
}


export default function HeroTopNav({ links }: HeroTopNavProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-4 my-[100px]" role="navigation">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.target || '_self'}
          className="bg-transparent border border-papaya-black rounded-button px-4 py-2 text-papaya-black font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}