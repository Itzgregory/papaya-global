'use client';
import { motion, animate } from 'framer-motion';
import { NumberItem } from '@/features/landingPage/type/PaymentWorkForce/PaymentWorrkforce';
import { useEffect, useState, useMemo } from 'react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  delay?: number;
}

const AnimatedNumber = ({ value, prefix = '', delay = 0 }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== 'number' || isNaN(value)) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 2,
      delay: delay / 1000, 
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value, delay]);

  return (
    <motion.span
      className="text-sm tablet:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {prefix}{count.toLocaleString()}
    </motion.span>
  );
};

export default function NumbersSection({ numbers }: { numbers: NumberItem[] }) {
  const processedNumbers = useMemo(() => numbers.map((item) => {
    const numericMatch = item.before?.match(/([\d.,]+)/);
    const numericBefore = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, '')) : 0;
    const symbol = item.before?.replace(/[\d.,]/g, '').trim() || '';
    
    return {
      ...item,
      numericBefore,
      symbol
    };
  }), [numbers]);

  return (
    <div className="flex flex-row overflow-x-auto gap-4 tablet:gap-4 mt-6 tablet:mt-12 relative snap-x snap-mandatory hide-scrollbar">
      {processedNumbers.map((item, index) => (
        <div
          key={`${item.value}-${index}`}
          className="flex-shrink-0 w-full mobile:w-1/2 tablet:w-1/3 px-3 tablet:px-3 snap-center relative after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-red-500 last:after:hidden"
        >
          <div className="text-center">
            <div className="flex justify-center items-baseline gap-1 text-xl tablet:text-3xl font-bold text-gray-900">
              {item.before && (
                <AnimatedNumber 
                  value={item.numericBefore} 
                  prefix={item.symbol}
                  delay={index * 200}
                />
              )}
              <motion.span
                className="text-black-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.value}
              </motion.span>
              {item.after && (
                <span className="text-sm tablet:text-lg">{item.after}</span>
              )}
            </div>
            <p className="text-gray-600 mt-1 tablet:mt-3 text-xs tablet:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}