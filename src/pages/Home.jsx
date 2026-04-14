import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import mainImage from '../assets/images/main.png';
import FAQ from '../components/FAQ'; 

const Home = ({ onContactClick }) => {
  const navigate = useNavigate();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[500px] md:min-h-[650px] flex items-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={mainImage} 
            alt="Геодезичні роботи Глобус Ко" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full text-white py-12">
          <div className="max-w-3xl" data-aos="fade-right" data-aos-delay={isMobile ? "200" : "0"}>
            <span className="bg-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-[10px] sm:text-sm font-bold mb-6 inline-block backdrop-blur-md border border-white/10 uppercase tracking-widest">
              Професійний інжиніринг та геодезія
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              Точність, що <br className="hidden sm:block" /> будує майбутнє
            </h1>
            <p className="text-base sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl opacity-90">
              ТОВ "Глобус КО" — лідер у сфері землеустрою та оцінки майна в Чернівецькій області з 2012 року.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onContactClick} 
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-2xl active:scale-95 text-center"
              >
                Замовити консультацію
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto border-2 border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center active:scale-95 shadow-lg"
              >
                Наші послуги
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. СТАТИСТИКА */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {[
            { n: "500+", t: "Об'єктів" },
            { n: "14", t: "Років досвіду" },
            { n: "100%", t: "Точність" },
            { n: "24/7", t: "Підтримка" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="text-center group" 
              data-aos="zoom-in" 
              data-aos-delay={isMobile ? i * 50 : 0}
            >
              <div className="text-3xl md:text-6xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform italic">{item.n}</div>
              <div className="text-gray-400 font-bold uppercase tracking-tighter text-[9px] md:text-xs">{item.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ОБЛАДНАННЯ */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8" data-aos={isMobile ? "fade-up" : "fade-right"}>
              <div className="space-y-3">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs italic">Технологічна перевага</span>
                <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-tight">
                  Працюємо з обладнанням <br /> світового класу
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                  Ми інвестуємо в найсучасніші прилади, щоб ви отримували результат з точністю до міліметра.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-4">
                {[
                  { title: "GNSS-приймачі", desc: "Супутниковий моніторинг." },
                  { title: "Тахеометри", desc: "Лазерна точність вимірів." },
                  { title: "Дрони DJI", desc: "3D-моделювання місцевості." },
                  { title: "Трасошукачі", desc: "Пошук підземних мереж." }
                ].map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md" 
                    data-aos="fade-up" 
                    data-aos-delay={isMobile ? i * 80 : 0}
                  >
                    <div className="text-blue-600 font-bold mt-1">✓</div>
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm md:text-base">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0" data-aos={isMobile ? "fade-up" : "fade-left"}>
              <div className="absolute -inset-4 bg-blue-50 rounded-[2rem] md:rounded-[4rem] -rotate-2 -z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070" 
                alt="Професійне обладнання" 
                className="relative z-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl object-cover h-[300px] md:h-[550px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ЕТАПИ РОБОТИ */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-12" data-aos={isMobile ? "fade-up" : ""}>Шлях вашого проєкту</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Заявка", d: "Обговорюємо умови." },
              { t: "Виїзд", d: "Заміри на ділянці." },
              { t: "Камералка", d: "Підготовка креслень." },
              { t: "Результат", d: "Готові документи." }
            ].map((step, i) => (
              <div 
                key={i} 
                data-aos={isMobile ? "flip-left" : "fade-up"} 
                data-aos-delay={isMobile ? i * 100 : 0} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-black mb-6 mx-auto transition-transform hover:rotate-12">
                  {i + 1}
                </div>
                <h3 className="font-bold text-xl mb-2 text-blue-900">{step.t}</h3>
                <p className="text-gray-500 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION*/}
      <FAQ />

      {/* 6. CTA БЛОК */}
      <section className="py-12 md:py-24 px-4 sm:px-6" data-aos={isMobile ? "zoom-in" : ""}>
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">Готові розпочати?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-base md:text-xl">
              Отримайте консультацію інженера-землевпорядника вже сьогодні.
            </p>
            <button 
              onClick={onContactClick} 
              className="w-full sm:w-auto bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-lg"
            >
              Надіслати запит
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;