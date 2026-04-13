import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import About from './pages/About'; 
import Modal from './components/Modal';

// 1. Автоматичний скрол вгору при зміні сторінки
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Компонент для обгортки сторінок анімацією переходу
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Окремий компонент для контенту, щоб працював useLocation
function AnimatedRoutes({ setModalOpen }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home onContactClick={() => setModalOpen(true)} /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><Contacts /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

 useEffect(() => {
    // Перевіряємо, чи це мобільний пристрій (ширина менше 768px)
    const isMobile = window.innerWidth < 768;

    AOS.init({
      // На ПК анімація триває 800мс, на мобілці — 400мс (швидше)
      duration: isMobile ? 400 : 800,
      
      // На ПК анімація спрацьовує майже одразу (offset: 0)
      // На мобілці — коли блок на 50px зайшов у видимість
      offset: isMobile ? 50 : 0,
      
      // На ПК анімація запускається без затримки
      // На мобілці можна лишити невелику, або теж прибрати
      delay: isMobile ? 50 : 0,
      
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  return (
    <Router>
      {/* 2. Додаємо компонент скролу всередину Роутера */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-900">
        <Navbar onContactClick={() => setModalOpen(true)} />
        
        <main className="flex-grow">
          <AnimatedRoutes setModalOpen={setModalOpen} />
        </main>

        <Footer />

        {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;