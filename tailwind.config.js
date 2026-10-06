/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vintage: {
          bg: '#F5ECE1',       // خلفية بيج دافئة وأنيقة
          surface: '#FAF4EC',  // كارت بيج ناعم
          paper: '#FFFDF9',    // ورقة عاجية
          ink: '#3D271D',      // بني قهوة عتيق فاخر للنصوص
          text: '#4A3326',     // بني شيك
          muted: '#856A5B',    // بني ترابي ناعم للعناوين الفرعية
          accent: '#8B4830',   // بني تيراكوتا / نحاسي عتيق للزراير
          accentHover: '#6D3421',
          gold: '#C09358',     // لمسة ذهبية عتيقة
          border: '#E4D7C8',   // بوردر بيج كلاسيكي
        },
        brand: {
          bg: '#F5ECE1',
          ink: '#3D271D',
          accent: '#8B4830',
          paper: '#FFFDF9',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Cormorant Garamond"', 'serif'],
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        'arabic-clean': ['"Cairo"', 'sans-serif'],
        ruqaa: ['"Aref Ruqaa"', 'cursive'],
      },
      boxShadow: {
        polaroid: '0 12px 28px -6px rgba(61, 39, 29, 0.22), 0 4px 10px -3px rgba(61, 39, 29, 0.12)',
        vintage: '0 20px 40px -10px rgba(61, 39, 29, 0.28), 0 6px 16px rgba(61, 39, 29, 0.1)',
      }
    },
  },
  plugins: [],
}