import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PageShell({ children, onNext, onBack, hideNav = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full min-h-[100dvh] flex flex-col justify-between py-6 px-4 sm:px-6 relative"
    >
      <div className="flex-1 w-full max-w-md sm:max-w-xl mx-auto flex flex-col items-center justify-center text-[#3D271D]">
        {children}
      </div>

      {!hideNav && (
        <div className="w-full max-w-md sm:max-w-xl mx-auto flex items-center justify-between mt-6 pt-3 pb-2 px-2 border-t border-[#3D271D]/10">
          <button 
            onClick={onBack} 
            aria-label="الصفحة السابقة"
            className="w-10 h-10 rounded-full bg-[#8B4830] hover:bg-[#6D3421] text-[#FAF4EC] flex items-center justify-center shadow-md active:scale-95 transition-all"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>
          
          <div className="flex gap-2 items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-[#8B4830] opacity-35"></div>
             <div className="w-4 h-1.5 rounded-full bg-[#8B4830]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-[#8B4830] opacity-35"></div>
          </div>

          <button 
            onClick={onNext} 
            aria-label="الصفحة التالية"
            className="w-10 h-10 rounded-full bg-[#8B4830] hover:bg-[#6D3421] text-[#FAF4EC] flex items-center justify-center shadow-md active:scale-95 transition-all"
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </motion.div>
  );
}