import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Землевпорядні роботи", desc: "Розробка проектів відведення ділянок, зміна цільового призначення.", icon: "🏗️" },
  { title: "Експертна оцінка ділянок", desc: "Визначення ринкової вартості об'єктів нерухомості для продажу чи застави.", icon: "📊" },
  { title: "Нормативна оцінка пунктів", desc: "Розрахунок для податкової звітності та оренди в межах населених пунктів.", icon: "🏠" },
  { title: "Нормативна оцінка ділянок", desc: "Оцінка земель сільськогосподарського призначення для паїв та агробізнесу.", icon: "🚜" },
  { title: "Земельні аукціони", desc: "Професійна підготовка повного пакету документів для успішних торгів.", icon: "🔨" },
  { title: "Аерофотознімальні роботи", desc: "Високоточна зйомка з дронів DJI Enterprise для створення ортофотопланів.", icon: "🚁" },
  { title: "Геодезичні та топографічні", desc: "Топографічна зйомка М 1:500, винесення меж ділянки в натуру.", icon: "📐" },
  { title: "Містобудівна документація", desc: "Розробка детальних планів територій (ДПТ) та планів зонування.", icon: "🏙️" },
  { title: "Ґрунтові обстеження", desc: "Детальний аналіз якості, складу та родючості ґрунту на ваших ділянках.", icon: "🌱" }
];

const Services = () => {
  // Визначаємо, чи пристрій мобільний, щоб прибрати затримку на ПК
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white min-h-screen"
    >
      {/* Шапка сторінки — на ПК з'являється миттєво */}
      <section className="bg-blue-900 py-16 md:py-24 text-center text-white px-6">
        <div className="max-w-4xl mx-auto" data-aos={isMobile ? "fade-down" : ""}>
          <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Наші Послуги</h1>
          <p className="text-blue-100 text-sm md:text-lg leading-relaxed opacity-90 font-medium">
            ТОВ "ГЛОБУС КО" забезпечує повний юридичний та технічний супровід 
            вашої нерухомості. Працюємо професійно, швидко та згідно з законом.
          </p>
        </div>
      </section>

      {/* Сітка послуг */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={isMobile ? (i % 3) * 50 : 0} 
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-blue-600/10"></div>
                
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  {s.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mb-3 text-blue-900 leading-tight">
                  {s.title}
                </h3>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                  {s.desc}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Детальніше 
                  <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA блок */}
      <section className="pb-20 px-6 bg-slate-50" data-aos={isMobile ? "fade-up" : ""}>
        <div className="max-w-4xl mx-auto bg-white border-2 border-dashed border-blue-200 rounded-[2.5rem] p-10 text-center shadow-xl shadow-blue-900/5">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Не знайшли потрібну послугу?</h3>
          <p className="text-gray-500 mb-8">Ми виконуємо індивідуальні запити будь-якої складності. Просто зателефонуйте нам.</p>
          <a 
            href="tel:+380501234567" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-700 transition shadow-xl shadow-blue-200 active:scale-95"
          >
            Консультація спеціаліста
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;