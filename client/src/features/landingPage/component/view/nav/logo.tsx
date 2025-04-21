'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// we will dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div className="w-[191px] h-[39px]" /> 
});

export default function Logo() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const loadAnimation = async () => {
      try {
        const response = await fetch('/animation/animatedlogo.json');
        if (!response.ok) throw new Error('Failed to load animation');
        const data = await response.json();
        if (mounted) setAnimationData(data);
      } catch (error) {
        console.error('Error loading animation:', error);
        if (mounted) setShowAnimation(false); 
      }
    };

    const timer = setTimeout(() => {
      if (mounted) {
        setShowAnimation(true);
        loadAnimation();
      }
    }, 10000); 

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mr-4 laptop:mr-8 logo-container">
      <Link href="/" className="block" rel="home">
        <div className="relative w-[191px] h-[39px]">
          {/* Static logo that shows by default */}
          <Image
            width={191}
            height={39}
            src="https://www.papayaglobal.com/wp-content/uploads/2023/02/papaya-new-logo.svg"
            className={`w-auto h-auto transition-opacity duration-300 ${
              showAnimation ? 'opacity-0' : 'opacity-100'
            }`}
            alt="Papaya Global logo"
            priority
          />
          
          {/* Animated logo */}
          <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
            showAnimation && animationData ? 'opacity-100' : 'opacity-0'
          }`}>
            {showAnimation && animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
