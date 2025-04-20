import PatternSvg from './patternSvg';
import TopNav from './TopNav';
import MainNavCard from './card';
import NumbersSection from './NumbersSection';
import { PaymentsWorkforceData } from '@/features/landingPage/type/PaymentWorkForce/PaymentWorrkforce';

interface PaymentsWorkforceProps {
  data: PaymentsWorkforceData;
}

export default function PaymentsWorkforce({ data }: PaymentsWorkforceProps) {
  const hasOddCards = data.cards.length % 2 !== 0;
  const firstColumnCards = hasOddCards
    ? data.cards.slice(0, Math.ceil(data.cards.length / 2))
    : data.cards.slice(0, data.cards.length / 2);
  const secondColumnCards = hasOddCards
    ? data.cards.slice(Math.ceil(data.cards.length / 2), -1)
    : data.cards.slice(data.cards.length / 2);

  return (
    <section id={data.id} className="acf-payments-workforce py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="acf-payments-workforce__box relative bg-white p-8 rounded-lg shadow">
          <PatternSvg className="absolute inset-0 z-0" />
          <div className="text-center mb-8 relative z-10">
            <TopNav navLinks={data.navLinks} />
            <div className="acf-payments-workforce__intro mt-6">
              <h4 className="acf-payments-workforce__title text-2xl tablet:text-3xl font-bold text-papaya-black leading-tight">
                {data.title}
              </h4>
              {data.description && (
                <div className="acf-payments-workforce__description text-papaya-black mt-4">{data.description}</div>
              )}
            </div>
          </div>
          <div className="c-acf-payments-workforce-main-nav grid grid-cols-1 tablet:grid-cols-2 gap-6 mt-8">
            <div className="grid gap-6">
              {firstColumnCards.map((card, index) => (
                <MainNavCard key={index} card={card} />
              ))}
            </div>
            <div className="grid gap-6">
              {secondColumnCards.map((card, index) => (
                <MainNavCard key={index + firstColumnCards.length} card={card} />
              ))}
              {hasOddCards && (
                <div className="block tablet:hidden">
                  <MainNavCard card={data.cards[data.cards.length - 1]} />
                </div>
              )}
            </div>
          </div>
          <NumbersSection numbers={data.numbers} />
        </div>
      </div>
    </section>
  );
}