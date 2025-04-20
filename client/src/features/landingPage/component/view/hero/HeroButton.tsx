import { NavLink } from  '@/features/landingPage/type/hero/hero';

export default function HeroButton({ href, label, target }: NavLink) {
  return (
    <a
      href={href}
      target={target || '_self'}
      className="inline-block px-6 py-3 rounded-button-new font-medium custom-margin text-center text-red-700 bg-papaya-active-light-button hover:bg-papaya-red-hover transition-colors duration-200 w-full mobile:w-auto"
    >
      {label}
    </a>
  );
}