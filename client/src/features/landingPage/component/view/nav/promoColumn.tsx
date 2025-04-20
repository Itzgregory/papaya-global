// src/features/landingPage/components/PromoColumn.tsx
import { PromoItem } from '@/features/landingPage/type/nav/nav';
import Link from 'next/link';
import PromoContent from './promoContent'; 

interface PromoColumnProps {
  promo: PromoItem;
}

export default function PromoColumn({ promo }: PromoColumnProps) {
  return (
    <div className="flex flex-col laptop:w-[260px]">
      <div className="container mx-auto px-0">
        <div className="flex items-center mb-6">
          <span className="flex-grow text-base font-medium text-papaya-black text-left">
            See all
          </span>
          <Link
            href="https://www.papayaglobal.com/blog/"
            className="text-sm text-papaya-blue hover:underline"
          >
            See all
          </Link>
        </div>
        <nav>
          <PromoContent
            promo={promo}
            className="mb-20 laptop:mb-20 last:mb-0"
            iconType="image"
            titleClassName="text-lg font-semibold text-papaya-black mb-1"
            linkClassName="inline-flex items-center gap-1 text-sm font-medium text-blue-800 mt-[21px] hover:opacity-75 transition-opacity duration-300"
          />
        </nav>
      </div>
    </div>
  );
}