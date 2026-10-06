import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ClientData from './ClientData';
import EnvelopePage from './components/EnvelopePage';
import TwoPhotosPage from './components/TwoPhotosPage';
import MessagePage from './components/MessagePage';
import SongPage from './components/SongPage';
import FourPhotosPage from './components/FourPhotosPage';
import VideoPage from './components/VideoPage';

const PAGES = ['envelope', 'twoPhotos', 'message', 'song', 'fourPhotos', 'video'];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.title = ClientData.siteTitle || "Our Little World";
  }, []);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, PAGES.length - 1));
  const back = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const goHome = () => setCurrentIndex(0);

  const current = PAGES[currentIndex];

  return (
    <div className="w-full min-h-[100dvh] bg-[#F5ECE1] text-[#3D271D] relative grain-bg overflow-x-hidden flex flex-col justify-between">
      <AnimatePresence mode="wait">
        {current === 'envelope' && <EnvelopePage key="env" onOpen={next} />}
        {current === 'twoPhotos' && <TwoPhotosPage key="2p" onNext={next} onBack={back} />}
        {current === 'message' && <MessagePage key="msg" onNext={next} onBack={back} />}
        {current === 'song' && <SongPage key="song" onNext={next} onBack={back} />}
        {current === 'fourPhotos' && <FourPhotosPage key="4p" onNext={next} onBack={back} />}
        {current === 'video' && <VideoPage key="vid" onBack={back} goHome={goHome} />}
      </AnimatePresence>
    </div>
  );
}