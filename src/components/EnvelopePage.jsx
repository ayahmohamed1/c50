import ClientData from '../ClientData';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnvelopePage({ onOpen }) {
  const { eyebrow, heading, recipientName, buttonLabel, imageSrc, customImageSrc } = ClientData.envelope;

  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center py-8 px-4 text-[#3D271D] text-center overflow-hidden">
      
      {/* النص العلوي الإنجليزي */}
      <h3 className="font-display tracking-[0.25em] text-[12px] uppercase mb-2 text-[#856A5B] relative z-20">
        {eyebrow}
      </h3>
      
      {/* الخط الفاصل الفينتاج */}
      <div className="flex items-center gap-3 mb-4 w-44 mx-auto opacity-60 relative z-20">
        <div className="h-px flex-1 bg-[#8B4830]"></div>
        <Heart size={11} className="fill-[#8B4830] text-[#8B4830]" />
        <div className="h-px flex-1 bg-[#8B4830]"></div>
      </div>

      {/* الظرف مع أنيميشن النقر */}
      <motion.div 
        onClick={onOpen}
        whileHover={{ scale: 1.04, y: -4 }}
        whileTap={{ scale: 0.96 }}
        className="w-[230px] max-w-full mx-auto my-2 cursor-pointer relative z-10"
        title={buttonLabel}
      >
        <img 
          src={imageSrc || customImageSrc || "/envelope-image.png"} 
          alt="Vintage Envelope" 
          className="w-full h-auto object-contain drop-shadow-xl"
        />
        
        {/* زر التنبيه أسفل الظرف */}
        <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-[#FAF4EC] border border-[#8B4830]/30 text-[#8B4830] text-xs font-arabic-clean font-medium shadow-sm hover:bg-[#8B4830] hover:text-[#FAF4EC] transition-all">
          {buttonLabel || "اضغط لفتح الظرف ♡"}
        </div>
      </motion.div>

      {/* العنوان الفرعي */}
      <p className="font-display text-[12px] tracking-[0.18em] uppercase mt-4 mb-0.5 text-[#856A5B] relative z-20">
        {heading}
      </p>

      {/* اسم الإهداء بالخط العربي الأنيق الواضح */}
      <h1 dir="auto" className="font-arabic text-5xl sm:text-6xl my-2 text-[#3D271D] font-bold leading-normal relative z-20">
        {recipientName}
      </h1>
      
      {/* الخط الفاصل السفلي */}
      <div className="flex items-center gap-3 w-44 mx-auto opacity-60 relative z-20 mt-1">
        <div className="h-px flex-1 bg-[#8B4830]"></div>
        <Heart size={11} className="fill-[#8B4830] text-[#8B4830]" />
        <div className="h-px flex-1 bg-[#8B4830]"></div>
      </div>
      
    </div>
  );
}