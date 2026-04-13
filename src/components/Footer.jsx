import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 border-b border-slate-800 pb-12">
        
        {/* Колонка 1: Лого та опис */}
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="text-2xl font-black italic uppercase tracking-wider text-center sm:text-left">
            Глобус<span className="text-blue-500">КО</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed text-center sm:text-left max-w-md mx-auto sm:mx-0">
            Професійні рішення у сфері геодезії, землеустрою та оцінки майна. 
            Працюємо на результат з гарантією точності по всій Чернівецькій області.
          </p>
        </div>

        {/* Колонка 2: Навігація */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="font-bold text-lg text-blue-100">Навігація</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Головна</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Послуги</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">Про нас</Link></li>
            <li><Link to="/contacts" className="hover:text-blue-400 transition-colors">Контакти</Link></li>
          </ul>
        </div>

        {/* Колонка 3: Контакти */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="font-bold text-lg text-blue-100">Контакти</h4>
          <div className="text-slate-400 text-sm space-y-3 inline-block sm:block text-left">
            <p className="flex items-center gap-3">
              <span className="text-blue-500">📍</span> 
              м. Новоселиця, вул. Героїв Майдану, 15
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">📞</span> 
              +38 (095) 566-15-00
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-500">✉️</span> 
              globus.ko.office@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Нижня частина: Копірайт */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-center items-center text-slate-500 text-[10px] md:text-xs gap-4 uppercase tracking-widest">
        <p className="text-center md:text-left">
          © 2026 ТОВ "ГЛОБУС КО". Всі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;