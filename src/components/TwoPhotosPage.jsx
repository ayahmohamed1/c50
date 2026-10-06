import PageShell from './PageShell';
import ClientData from '../ClientData';
import { Heart } from 'lucide-react';

export default function TwoPhotosPage({ onNext, onBack }) {
  const { heading, caption, subCaption, photos } = ClientData.twoPhotos;
  
  const photo1 = typeof photos[0] === 'string' ? photos[0] : photos[0]?.src;
  const photo2 = typeof photos[1] === 'string' ? photos[1] : photos[1]?.src;

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display text-sm sm:text-base tracking-[0.22em] uppercase text-[#3D271D] mb-1.5 text-center font-semibold">
        {heading || "OUR FIRST MEMORIES"}
      </h2>
      
      {/* الخط الفاصل الفينتاج */}
      <div className="flex items-center gap-3 mb-5 w-44 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#8B4830]"></div>
        <Heart size={10} className="fill-[#8B4830] text-[#8B4830]" />
        <div className="h-px flex-1 bg-[#8B4830]"></div>
      </div>

      {/* حاوية الصورتين البولارويد بحجم أكبر وأوضح */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 w-full max-w-[480px] sm:max-w-[520px] mx-auto my-3 px-1 sm:px-2">
        
        {/* الصورة الأولى (مائلة لليسار ومكبرة) */}
        <div className="relative w-[49%] sm:w-[48%] bg-[#FFFDF9] p-3 sm:p-3.5 pb-9 sm:pb-12 shadow-polaroid -rotate-5 transition-transform hover:rotate-0 hover:scale-105 duration-300 border border-[#EBE1D5]">
          {/* شريط لزق فينتاج شفاف */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FAF2E6]/85 backdrop-blur-sm shadow-sm rotate-[-4deg] border-t border-b border-[#3D271D]/10"></div>
          <img 
            src={photo1} 
            alt="Memory 1" 
            className="w-full aspect-[4/5] object-cover rounded-[1px]" 
          />
        </div>

        {/* الصورة الثانية (مائلة لليمين ونازلة قليلاً ومكبرة) */}
        <div className="relative w-[49%] sm:w-[48%] bg-[#FFFDF9] p-3 sm:p-3.5 pb-9 sm:pb-12 shadow-polaroid rotate-3 mt-10 transition-transform hover:rotate-0 hover:scale-105 duration-300 border border-[#EBE1D5]">
          {/* شريط لزق فينتاج شفاف */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FAF2E6]/85 backdrop-blur-sm shadow-sm rotate-[3deg] border-t border-b border-[#3D271D]/10"></div>
          <img 
            src={photo2} 
            alt="Memory 2" 
            className="w-full aspect-[4/5] object-cover rounded-[1px]" 
          />
        </div>

      </div>

      {/* الكلمات الرومانسية السفلية بالإنجليزية والخط العربي الشيك */}
      <div className="mt-8 text-center flex flex-col items-center">
        <p className="font-script text-5xl sm:text-6xl text-[#3D271D] mb-1">
          {caption || "You & Me"}
        </p>
        {subCaption && (
          <p dir="auto" className="font-arabic text-lg sm:text-xl text-[#856A5B] font-medium mt-1 mb-2">
            {subCaption}
          </p>
        )}
        <Heart size={14} className="fill-[#8B4830] text-[#8B4830] mt-1" />
      </div>
    </PageShell>
  );
}