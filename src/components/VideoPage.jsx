import { useState, useRef } from 'react';
import PageShell from './PageShell';
import ClientData from '../ClientData';
import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoPage({ onBack, goHome }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { heading, caption, subCaption, videoSrc, poster } = ClientData.video;

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <PageShell onNext={goHome} onBack={onBack}>
      <h2 className="font-display text-sm sm:text-base tracking-[0.22em] uppercase text-[#3D271D] mb-1.5 text-center font-semibold">
        {heading || "ONE MORE THING"}
      </h2>
      
      {/* الخط الفاصل الفينتاج */}
      <div className="flex items-center gap-3 mb-5 w-44 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#8B4830]"></div>
        <Heart size={11} className="fill-[#8B4830] text-[#8B4830]" />
        <div className="h-px flex-1 bg-[#8B4830]"></div>
      </div>

      {/* إطار الفيديو بحجم أكبر ومصمم لعرض الفيديو كاملاً دون أي قص */}
      <div className="w-full max-w-[460px] sm:max-w-[500px] aspect-video sm:aspect-[16/10] relative bg-black rounded-lg shadow-vintage overflow-hidden mb-6 border-[6px] sm:border-[8px] border-[#FFFDF9] mx-auto flex items-center justify-center">
        
        {!isPlaying && (
          <div 
            onClick={handlePlayClick}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF4EC]/85 backdrop-blur-md flex items-center justify-center border-2 border-white shadow-2xl text-[#8B4830]"
            >
              <Play size={32} className="fill-[#8B4830] text-[#8B4830] ml-1.5" />
            </motion.div>
          </div>
        )}

        <video 
          ref={videoRef} 
          controls 
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-contain relative z-0 bg-black"
          poster={poster || undefined}
        >
          <source src={videoSrc || "/video.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* العبارات الختامية الرومانسية */}
      <div className="text-center flex flex-col items-center">
        <p className="font-script text-3xl sm:text-4xl mb-1 text-[#3D271D]">
          {caption || "A little memory, just for you"}
        </p>
        {subCaption && (
          <p dir="auto" className="font-arabic text-base sm:text-lg text-[#856A5B] font-medium mb-1">
            {subCaption}
          </p>
        )}
        <Heart size={15} className="fill-[#8B4830] text-[#8B4830] mt-1" />
      </div>
    </PageShell>
  );
}