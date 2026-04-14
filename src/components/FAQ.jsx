import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left gap-4 hover:bg-blue-50/30 transition-colors px-4 rounded-xl"
      >
        <span className="text-lg md:text-xl font-bold text-blue-900 leading-tight">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-blue-600 text-2xl flex-shrink-0"
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-gray-600 leading-relaxed md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Які документи потрібні для оцінки майна?",
      answer: "Для фізичних осіб зазвичай потрібні: паспорт та ІПН власника, правовстановлюючий документ (договір купівлі-продажу, свідоцтво про право на спадщину тощо) та технічний паспорт."
    },
    {
      question: "Скільки часу триває розробка технічної документації?",
      answer: "Терміни залежать від складності об'єкта. В середньому розробка триває від 3 до 10 робочих днів після отримання всіх необхідних документів та вимірів."
    },
    {
      question: "Чи працюєте ви по всій Чернівецькій області?",
      answer: "Так, ТОВ 'Глобус КО' надає послуги на всій території Чернівецької області. Ми маємо мобільні групи, які виїжджають на об'єкти в будь-який район."
    },
    {
      question: "Чи сертифіковані ваші спеціалісти?",
      answer: "Безумовно. Усі наші фахівці мають діючі кваліфікаційні сертифікати інженерів-землевпорядників та оцінювачів, що дозволяє нам надавати послуги згідно з законодавством України."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 italic">
            Поширені питання
          </h2>
          <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-50/50 rounded-[2.5rem] p-4 md:p-8 border border-blue-50 shadow-sm">
          {faqs.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;