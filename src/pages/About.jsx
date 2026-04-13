import React from 'react';
import { motion } from 'framer-motion';
import certificateImg from '../assets/images/certificate_2018.jpg'; 

const About = () => {
  // Перевірка ширини екрана для оптимізації анімацій
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div 
      initial={{ opacity: 0, y: isMobile ? 10 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isMobile ? -10 : 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white"
    >
      {/* 1. Header сторінки — На ПК з'являється миттєво */}
      <section className="bg-blue-900 py-16 md:py-28 text-center text-white px-6">
        <div data-aos={isMobile ? "fade-down" : ""}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight">
            Наша Історія та Цінності
          </h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-sm md:text-lg leading-relaxed opacity-90">
            ТОВ "ГЛОБУС КО" — це команда сертифікованих інженерів з Новоселиці, 
            які забезпечують точність у кожному замері з 2012 року.
          </p>
        </div>
      </section>

      {/* 2. Основний контент */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        
        <div 
          className="relative order-2 lg:order-1" 
          data-aos={isMobile ? "fade-up" : "fade-right"}
          data-aos-duration={isMobile ? "400" : "800"}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" 
            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[300px] md:h-[500px] object-cover" 
            alt="Команда за роботою"
          />
          <div className="absolute -bottom-6 -right-6 w-32 md:w-64 h-32 md:h-64 bg-blue-600 rounded-3xl -z-0 opacity-10 animate-pulse"></div>
        </div>
        
        {/* Текстовий блок */}
        <div 
          className="space-y-6 md:space-y-8 order-1 lg:order-2" 
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay={isMobile ? "100" : "0"}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
            Про компанію
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 leading-tight">
            Чому обирають <br className="hidden md:block" /> саме нас?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Ми розуміємо, що земельні питання — це завжди відповідальність та стрес для власника. 
            Тому ми беремо на себе **повний цикл**: від польового виїзду до реєстрації документів.
          </p>
          
          <ul className="space-y-4 pt-2">
            {[
              "Сучасні тахеометри Leica та GPS-приймачі", 
              "Власна аерофотозйомка дронами", 
              "100% гарантія проходження експертизи"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-4 text-gray-700 group">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  ✓
                </span>
                <span className="font-semibold text-sm md:text-base italic">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Блок Сертифікатів */}
      <section className="bg-slate-50 py-20 md:py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div data-aos={isMobile ? "fade-up" : ""}>
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Наші сертифікати</h2>
            <p className="text-gray-500 mb-16 max-w-xl mx-auto">
              Діяльність компанії повністю ліцензована та відповідає державним стандартам України.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Реальний сертифікат */}
            <div 
              className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-3 transition-transform duration-300 w-full max-w-sm" 
              data-aos="zoom-in" 
              data-aos-delay={isMobile ? "100" : "0"}
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4 border border-gray-50">
                <img 
                   src={certificateImg} 
                   alt="Компанія року 2018" 
                   className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="font-bold text-blue-900 mb-1 text-sm md:text-base">Компанія року 2018</h4>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Національний сертифікат</p>
            </div>

            {/* Заглушки */}
            {[1, 2].map((n) => (
              <div 
                key={n} 
                data-aos="zoom-in" 
                data-aos-delay={isMobile ? n * 100 : 0} 
                className="w-full max-w-sm h-full bg-white/50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-300 p-8 min-h-[250px] md:min-h-[300px]"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 opacity-20">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg>
                </div>
                <p className="text-[9px] md:text-[10px] uppercase font-black tracking-[0.2em] text-center px-2">
                  Сертифікат інженера <br/> (в процесі додавання)
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Заключний CTA блок */}
      <section className="py-20 px-6 max-w-7xl mx-auto" data-aos={isMobile ? "fade-up" : "flip-up"}>
        <div className="bg-blue-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-white relative overflow-hidden">
             <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 italic">Ми знаємо ціну точності</h3>
                <p className="text-blue-200 text-sm md:text-base">Довірте свої земельні питання професіоналам</p>
             </div>
             <button className="w-full md:w-auto relative z-10 bg-blue-500 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-blue-400 transition shadow-2xl shadow-blue-900/50 active:scale-95 text-sm md:text-base">
                Зв'язатися з офісом
             </button>
        </div>
      </section>
    </motion.div>
  );
};

export default About;