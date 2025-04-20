'use client';
import PediaCard from './PediaCard';
import PediaVideoPreview from './PediaVideoPreview';
import { pediaCards } from '../../../lib/pediaSection/pediaData';

export default function PediaSection() {
  return (
    <section className="py-8 bg-papaya-dark"> 
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col laptop:flex-row gap-4"> 
          <div className="flex flex-col gap-4 w-full laptop:w-auto">
            <div className="flex justify-center">
              <PediaCard 
                card={pediaCards[0]} 
                index={0} 
                className="w-full max-w-[400px] h-[180px]" 
              />
            </div>
            
            <div className="flex justify-center">
              <PediaCard 
                card={pediaCards[1]} 
                index={1} 
                className="w-full max-w-[400px] h-[180px]" 
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="w-full h-full max-w-[700px] ml-auto"> 
              <PediaVideoPreview 
                src="https://www.papayaglobal.com/wp-content/uploads/2024/09/Paymentscountrypedia-video.mp4"
                className="w-full h-full aspect-video object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}