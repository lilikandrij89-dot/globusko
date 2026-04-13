import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Щоб знати, яка сторінка активна

  // Функція для закриття меню при кліку на посилання
  const closeMenu = () => setIsOpen(false);

  // Ефект для зміни стилю навбару при скролі
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Перевірка, чи посилання активне
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Головна', path: '/' },
    { name: 'Послуги', path: '/services' },
    { name: 'Про нас', path: '/about' },
    { name: 'Контакти', path: '/contacts' },
  ];

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' 
        : 'bg-white py-4'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex justify-between items-center">
          
          {/* Логотип */}
          <Link to="/" onClick={closeMenu} className="group flex items-center space-x-1">
            <span className="text-xl sm:text-2xl font-black text-blue-900 italic uppercase tracking-tighter transition-transform group-hover:scale-105">
              Глобус<span className="text-blue-600 group-hover:text-blue-500">КО</span>
            </span>
          </Link>
          
          {/* Десктопне меню */}
          <div className="hidden md:flex items-center space-x-1 text-sm lg:text-base">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="ml-4 pl-4 border-l border-gray-200">
              <button 
                onClick={onContactClick}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
              >
                Зв'язатися
              </button>
            </div>
          </div>

          {/* Бургер-кнопка */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-blue-900 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-blue-900 transition-all duration-300 origin-right ${isOpen ? 'w-6 -rotate-45 translate-y-[1px]' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-blue-900 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-blue-900 transition-all duration-300 origin-right ${isOpen ? 'w-6 rotate-45 -translate-y-[1px]' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Мобільне меню */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-gray-100 ${
        isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="px-6 py-10 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={closeMenu} 
              className={`text-2xl font-black py-2 transition-colors ${
                isActive(link.path) ? 'text-blue-600' : 'text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={() => { onContactClick(); closeMenu(); }}
            className="mt-6 w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 active:scale-95"
          >
            Зв'язатися з нами
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;