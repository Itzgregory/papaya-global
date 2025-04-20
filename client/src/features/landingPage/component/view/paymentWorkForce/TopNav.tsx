import Link from 'next/link';
import {NavLink} from '@/features/landingPage/type/PaymentWorkForce/PaymentWorrkforce';

interface TopNavProps {
  navLinks: NavLink[];
}

export default function TopNav({ navLinks }: TopNavProps) {
  return (
    <nav className="c-acf-payments-workforce-top-nav flex justify-center gap-4">
      {navLinks.map((link, index) => (
        link.isActive ? (
          <span
            key={index}
            className="c-acf-payments-workforce-top-nav__link is-active text-papaya-black font-semibold px-4 py-2 border border-red-500 bg-[#fff3f3] rounded-button-new"
          >
            {link.label}
          </span>
        ) : (
          <Link
            key={index}
            href={link.href}
            className="c-acf-payments-workforce-top-nav__link text-papaya-black px-4 py-2 border border-black bg-white rounded-button-new hover:border-red-500 hover:bg-[#fff3f3] transition-colors js--payments-workforce-anchor"
          >
            {link.label}
          </Link>
        )
      ))}
    </nav>
  );
}
