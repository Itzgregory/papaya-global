import { SubmenuItem } from '@/features/landingPage/type/nav/nav';
import Link from 'next/link';

export default function SubmenuItemComponent({
  href,
  title,
  description,
  target,
}: SubmenuItem) {
  return (
    <li
      className="pb-1 laptop:pb-0 mb-1 laptop:mb-0 laptop:last:mb-0 hover:bg-[#ffe3e0] laptop:hover:border laptop:hover:border-black rounded transition-colors"
    >
      <Link href={href} className="block px-3 py-1 laptop:py-2 text-papaya-black" target={target}>
        <p className="text-base font-medium">{title}</p>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </Link>
    </li>
  );
}