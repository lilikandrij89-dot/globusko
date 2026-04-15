import React, { useState } from 'react';

const Modal = ({ onClose }) => {
  // 1. Стан для зберігання даних форми
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Стан для візуального відображення процесу відправки
  const [status, setStatus] = useState('idle');

  // 2. Функція для оновлення стану при вводі тексту
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Функція відправки на твій Serverless бекенд
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
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Помилка:", error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-[2rem] sm:rounded-3xl shadow-2xl overflow-hidden relative animate-slideUp max-h-[95vh] flex flex-col">
        
        {/* Кнопка закриття */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 transition text-3xl md:text-2xl p-2 z-10"
        >
          ✕
        </button>
        
        <div className="p-6 sm:p-10 overflow-y-auto">
          {status === 'success' ? (
            // Вікно успіху
            <div className="py-12 text-center animate-fadeIn">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-blue-900 mb-2">Дякуємо!</h2>
              <p className="text-gray-500">Ваша заявка вже в нашого інженера. Очікуйте дзвінка.</p>
            </div>
          ) : (
            // Сама форма
            <>
              <header className="mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-blue-900 mb-2 leading-tight">
                  Швидка заявка
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  Залиште контакти, і наш інженер зателефонує вам протягом 15 хвилин.
                </p>
              </header>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 ml-1">Ім'я</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Як до вас звертатися?" 
                    className="w-full p-3 sm:p-4 bg-blue-50/50 rounded-xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 ml-1">Телефон</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+38 (0__) ___ __ __" 
                    className="w-full p-3 sm:p-4 bg-blue-50/50 rounded-xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 ml-1">Повідомлення</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишіть ваше питання..." 
                    className="w-full p-3 sm:p-4 bg-blue-50/50 rounded-xl border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none resize-none h-24 sm:h-32 transition-all"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className={`w-full ${status === 'loading' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-4 rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2`}
                >
                  {status === 'loading' ? 'Відправляємо...' : 'Відправити запит'}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center font-bold">Помилка відправки. Спробуйте ще раз.</p>
                )}
              </form>

              <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-widest">
                Натискаючи кнопку, ви погоджуєтесь на обробку даних
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;