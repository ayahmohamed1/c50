import { useState, useRef, useEffect } from 'react';
import PageShell from './PageShell';
import ClientData from '../ClientData';
import { Heart, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SongPage({ onNext, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const { heading, title, artist, coverArt, audioSrc, footerLine, footerLineArabic } = ClientData.song;

  // تشغيل / إيقاف الأغنية
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Audio play prevented or file not ready:", err);
      });
    }
  };

  // تقديم 10 ثواني
  const forward10 = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration || 0);
    }
  };

  // ترجيع 10 ثواني
  const backward10 = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  // تحديث الوقت الحالي
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // تحميل مدة الأغنية
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  // السحب أو الضغط على شريط الصوت
  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // تنسيق الثواني لصيغة دقيقة:ثانية (0:00)
  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display text-sm sm:text-base tracking-[0.22em] uppercase text-[#3D271D] mb-1 text-center font-semibold">
        {heading || "A SONG FOR YOU"}
      </h2>
      
      {/* الخط الفاصل الفينتاج */}
      <div className="flex items-center gap-3 mb-4 w-40 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#8B4830]"></div>
        <Heart size={10} className="fill-[#8B4830] text-[#8B4830]" />
        <div className="h-px flex-1 bg-[#8B4830]"></div>
      </div>

      {/* تصميم أسطوانة فينتاج كلاسيكية تدور بنعومة عند التشغيل */}
      <div className="relative my-2 flex items-center justify-center">
        {/* حواف الأسطوانة السوداء الكلاسيكية الفينتاج */}
        <motion.div 
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#1A120E] p-2.5 relative flex items-center justify-center shadow-vintage border-4 border-[#2A1D16]"
        >
          {/* خطوط الجروفز الفينتاج للأسطوانة */}
          <div className="absolute inset-2 rounded-full border border-white/5 pointer-events-none"></div>
          <div className="absolute inset-5 rounded-full border border-white/5 pointer-events-none"></div>
          <div className="absolute inset-8 rounded-full border border-white/5 pointer-events-none"></div>

          {/* صورة الغلاف في مركز الأسطوانة */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden relative shadow-inner border-2 border-[#FAF4EC]">
            <img 
              src={coverArt || "/cover.png"} 
              alt="Song cover" 
              className="w-full h-full object-cover" 
            />
            {/* ثقب مركز الأسطوانة الفينتاج */}
            <div className="absolute inset-0 m-auto w-3.5 h-3.5 rounded-full bg-[#1A120E] border-2 border-[#FAF4EC] shadow-inner"></div>
          </div>
        </motion.div>
      </div>

      {/* تفاصيل التراك والتحكم بالصوت */}
      <div className="text-center w-full max-w-xs mt-3">
        <h3 className="font-display text-xl sm:text-2xl font-bold mb-0.5 text-[#3D271D]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-body text-[#856A5B] mb-3 flex items-center justify-center gap-1.5 font-medium">
          {artist} <Heart size={10} className="fill-[#8B4830] text-[#8B4830] opacity-80" />
        </p>

        {/* شريط التقدم التفاعلي (Interactive Progress Bar) */}
        <div 
          onClick={handleSeek}
          className="w-full h-2 bg-[#E4D7C8] rounded-full mb-1.5 relative cursor-pointer group transition-all"
          title="اضغط للتخطي"
        >
          <div 
            className="h-full bg-[#8B4830] rounded-full relative group-hover:bg-[#6D3421] transition-all"
            style={{ width: `${progressPercent}%` }}
          >
            {/* مؤشر النقطة الصغيرة */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#8B4830] border-2 border-[#FAF4EC] rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* أرقام الوقت التفاعلية */}
        <div className="flex justify-between font-body text-[11px] text-[#856A5B] mb-4 font-semibold px-0.5">
          <span>{formatTime(currentTime)}</span>
          <span>{duration ? formatTime(duration) : '3:45'}</span>
        </div>

        {/* أزرار التحكم بالمشغل */}
        <div className="flex items-center justify-center gap-6 mb-4">
          {/* ترجيع 10 ثواني */}
          <button 
            onClick={backward10}
            aria-label="ارجاع 10 ثواني"
            className="text-[#8B4830] hover:text-[#3D271D] hover:scale-110 active:scale-95 transition-all"
          >
            <SkipBack size={22} className="fill-current" />
          </button>
          
          {/* زر التشغيل والإيقاف الكبير */}
          <button 
            onClick={togglePlay}
            aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
            className="w-13 h-13 p-3 bg-[#8B4830] hover:bg-[#6D3421] rounded-full flex items-center justify-center shadow-vintage text-[#FAF4EC] active:scale-95 transition-all"
          >
            {isPlaying ? 
              <Pause size={22} className="fill-[#FAF4EC]" /> : 
              <Play size={22} className="fill-[#FAF4EC] ml-0.5" />
            }
          </button>
          
          {/* تقديم 10 ثواني */}
          <button 
            onClick={forward10}
            aria-label="تقديم 10 ثواني"
            className="text-[#8B4830] hover:text-[#3D271D] hover:scale-110 active:scale-95 transition-all"
          >
            <SkipForward size={22} className="fill-current" />
          </button>
        </div>

        {/* العبارة الإنجليزية والعربية أسفل المشغل */}
        <div className="px-2">
          <p className="font-script text-3xl sm:text-4xl text-[#3D271D] leading-tight mb-1">
            {footerLine || "Because every song reminds me of you..."}
          </p>
          {footerLineArabic && (
            <p dir="auto" className="font-arabic text-base sm:text-lg text-[#856A5B] font-medium">
              {footerLineArabic}
            </p>
          )}
        </div>

        {/* عنصر الصوت الفعلي */}
        <audio 
          ref={audioRef} 
          src={audioSrc || "/song.mp3"} 
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </PageShell>
  );
}