'use client';
import { PromoItem } from '@/features/landingPage/type/nav/nav';
import PromoContent from './promoContent'; 

interface MobilePromoProps {
  promo: PromoItem;
}

export default function MobilePromo({ promo }: MobilePromoProps) {
  return (
    <div className="mt-4">
      <PromoContent
        promo={promo}
        className="mb-4"
        iconType="svg"
      />
    </div>
  );
}