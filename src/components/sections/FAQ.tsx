import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Нужен ли диагноз для участия?",
    a: "Наличие диагноза не обязательно. Мы отталкиваемся от вашего актуального состояния, симптомов и запроса, а не от клинических ярлыков."
  },
  {
    q: "Можно ли участвовать, если я принимаю препараты?",
    a: "Да. Медикаментозная поддержка часто сочетается с психотерапией. Важно упомянуть об этом на предварительном собеседовании."
  },
  {
    q: "Что делать, если я пропущу встречу?",
    a: "Пропущенные встречи не переносятся. При отмене со стороны ведущего встреча переносится на другую дату."
  },
  {
    q: "Записываются ли встречи?",
    a: "Нет, для обеспечения безопасности и конфиденциальности мы не ведём видео- и аудиозапись групповых сессий."
  },
  {
    q: "Что происходит в чате?",
    a: "Чат служит для общения между встречами: вы можете делиться наблюдениями, получать поддержку от участников и задавать вопросы ведущему."
  },
  {
    q: "Когда нужен другой формат помощи?",
    a: "Группа не подходит при острых кризисных состояниях, сильных депрессивных эпизодах или если вам сейчас требуется исключительно индивидуальное внимание специалиста."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" className="bg-white py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-16">
            Частые вопросы
          </h2>
          
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[var(--color-norma-text)]/10">
                <button 
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggle(idx)}
                >
                  <span className="font-medium text-2xl md:text-3xl text-[var(--color-norma-text)] pr-8">{faq.q}</span>
                  <ChevronDown className={`text-[var(--color-norma-accent)] transition-transform duration-500 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} size={32} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 leading-relaxed max-w-[55ch] font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
