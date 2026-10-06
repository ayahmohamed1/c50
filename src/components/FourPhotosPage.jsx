import PageShell from './PageShell';
import ClientData from '../ClientData';
import { Heart } from 'lucide-react';

export default function FourPhotosPage({ onNext, onBack }) {
  const { heading, caption, subCaption, photos } = ClientData.fourPhotos;

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      {/* حاوية وسطية متوازنة تكبر الصور قليلاً وتضمن بقاء الأسهم ظاهرة بدون سكرول */}
      <div className="w-full max-w-[350px] sm:max-w-[385px] mx-auto flex flex-col items-center justify-center my-auto">
        
        <h2 className="font-display text-xs sm:text-sm tracking-[0.22em] uppercase text-[#3D271D] mb-1 text-center font-semibold">
          {heading || "OUR LITTLE WORLD"}
        </h2>
        
        {/* الخط الفاصل الفينتاج */}
        <div className="flex items-center gap-2.5 mb-2 w-36 mx-auto opacity-60">
          <div className="h-px flex-1 bg-[#8B4830]"></div>
          <Heart size={9} className="fill-[#8B4830] text-[#8B4830]" />
          <div className="h-px flex-1 bg-[#8B4830]"></div>
        </div>

        {/* شبكة الصور الأربعة بحجم وسط متناسق */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mb-3">
          {photos.map((src, i) => (
            <div 
              key={i} 
              className={`bg-[#FFFDF9] p-2 pb-4 shadow-polaroid border border-[#EBE1D5] rounded-[2px] transition-transform hover:scale-105 duration-200 ${
                i === 0 ? '-rotate-2' : i === 1 ? 'rotate-2' : i === 2 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              {/* فريم الصورة متوسّط ومعروض بـ object-contain حتى لا يُقص أي جزء من الصورة */}
              <div className="aspect-square w-full overflow-hidden bg-[#FAF4EC] rounded-[1px] flex items-center justify-center">
                <img 
                  src={typeof src === 'string' ? src : src?.src} 
                  alt={`Memory ${i + 1}`}
                  className="w-full h-full object-scale-down" 
                />
              </div>
            </div>
          ))}
        </div>

        {/* العبارات السفلية */}
        <div className="text-center flex flex-col items-center">
          <p className="font-script text-2xl sm:text-3xl text-[#3D271D] mb-0.5">
            {caption || "Together is my favorite place"}
          </p>
          {subCaption && (
            <p dir="auto" className="font-arabic text-sm text-[#856A5B] font-medium mb-0.5">
              {subCaption}
            </p>
          )}
          <Heart size={11} className="fill-[#8B4830] text-[#8B4830] mt-0.5" />
        </div>
      </div>
    </PageShell>
  );
}