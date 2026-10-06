import PageShell from './PageShell';
import ClientData from '../ClientData';

export default function MessagePage({ onNext, onBack }) {
  const { body, bgImage } = ClientData.message;

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      {/* تصميم ورقة الرسالة الفينتاج القديمة بالخلفية المخصصة التي تم رفعها */}
      <div className="relative w-full max-w-[350px] sm:max-w-[390px] aspect-[576/1024] mx-auto flex items-center justify-center select-none my-auto">
        
        {/* صورة الورقة القديمة ذات الحواف المحروقة والزهور */}
        <img 
          src={bgImage || "/letter-bg.png"} 
          alt="Vintage Parchment Letter" 
          className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(61,39,29,0.3)] pointer-events-none"
        />

        {/* نص الرسالة أو القصيدة مكتوب في قلب الورقة بخط عربي أنيق وواضح */}
        <div 
          dir="rtl" 
          className="relative z-10 w-[82%] max-w-[300px] flex items-center justify-center font-arabic text-[#2E180E] text-[18px] sm:text-[21px] font-bold leading-[2.3] sm:leading-[2.5] text-center whitespace-pre-line tracking-wide px-3 select-text"
        >
          {body}
        </div>
      </div>
    </PageShell>
  );
}