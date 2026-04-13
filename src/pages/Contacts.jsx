import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacts = () => {
  // 1. Стан для форми
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Перевірка на мобільний пристрій
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // 2. Обробник змін у полях
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Відправка форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' }); // Очищуємо форму
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Помилка:", error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="py-12 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Форма зворотного зв'язку */}
        <div
          className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-50"
          data-aos={isMobile ? "fade-right" : ""}
          data-aos-duration="400"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-blue-900 italic">Зв’яжіться з нами</h2>
          
          {status === 'success' ? (
            <div className="bg-blue-50 p-8 rounded-3xl text-center animate-fadeIn border border-blue-100">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Повідомлення надіслано!</h3>
              <p className="text-blue-700 text-sm">Ми зв'яжемося з вами найближчим часом.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-blue-600 font-bold text-sm underline"
              >
                Надіслати ще одне
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-8 font-medium">
                Маєте питання щодо меж ділянки чи оцінки майна? Напишіть нам, і ми проконсультуємо вас безкоштовно.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 uppercase ml-2 tracking-widest">Ваше ім'я</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Андрій"
                    className="w-full p-4 bg-blue-50/50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 uppercase ml-2 tracking-widest">Телефон</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+38 (0__ ) ___ __ __"
                    className="w-full p-4 bg-blue-50/50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 uppercase ml-2 tracking-widest">Питання</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишіть вашу задачу..."
                    className="w-full p-4 bg-blue-50/50 rounded-2xl border-2 border-transparent focus:border-blue-500 focus:bg-white transition-all outline-none resize-none h-32"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  className={`w-full ${status === 'loading' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl shadow-blue-200`}
                >
                  {status === 'loading' ? 'Відправка...' : 'Надіслати повідомлення'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center font-bold">❌ Помилка. Спробуйте ще раз.</p>
                )}
              </form>
            </>
          )}
        </div>

        {/* Контактна інформація та Карта */}
        <div className="space-y-10" data-aos={isMobile ? "fade-left" : ""} data-aos-duration="400">
          <div className="bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-8 italic text-blue-400 uppercase tracking-widest">Контакти офісу</h3>
            <div className="space-y-6 text-base md:text-lg">
              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">📍</span>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-widest mb-1">Адреса</p>
                  <p className="font-medium">м. Новоселиця, вул. Героїв Майдану, 15</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">📞</span>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-widest mb-1">Телефон</p>
                  <p className="font-medium hover:text-blue-400 transition-colors">+38 (050) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">✉️</span>
                <div>
                  <p className="font-bold text-blue-100 uppercase text-xs tracking-widest mb-1">E-mail</p>
                  <p className="font-medium hover:text-blue-400 transition-colors">globus.ko.office@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative"
            data-aos={isMobile ? "zoom-in" : ""}
            data-aos-duration="300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5746766432076!2d26.2625298!3d48.3303102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473390f19c30d321%3A0x4426543b562a1c6a!2z0LLRg9C70LjRhtGPINCT0LXRgNC-0ZfQsiDQnNCw0LnQtNCw0L3RgywgMTUsINCd0L7QstC-0YHQtdC70LjRhtGPLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQuy4sIDYwMzA0!5e0!3m2!1suk!2sua!4v1711234567890!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ТОВ Глобус Ко на карті"
              className="grayscale-[0.2] contrast-[1.1]" 
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;