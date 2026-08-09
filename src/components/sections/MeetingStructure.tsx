import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const steps = [
  "Участник заполняет короткий бриф.",
  "При необходимости смотрит видео до 10 минут.",
  "Приходит на двухчасовую групповую встречу.",
  "Определяет личное наблюдение или эксперимент.",
  "Фиксирует динамику и получает курирующее сопровождение в чате."
];

const meetingDetails = [
  { label: "Чек-ин", desc: "Короткое обозначение состояния" },
  { label: "Динамика", desc: "Обсуждение изменений и отчётов" },
  { label: "Терапевтическая работа", desc: "Разбор актуальных запросов" },
  { label: "Перерыв", desc: "10 минут" },
  { label: "Практика или эксперимент", desc: "Работа с реакциями" },
  { label: "Интеграция", desc: "Присвоение опыта" }
];

export const MeetingStructure: React.FC = () => {
  const [meetingOpen, setMeetingOpen] = useState(false);

  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
          Как проходит одна неделя участника
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-[var(--color-norma-bg)] rounded-xl border border-black/5 items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--color-norma-accent-light)] text-[var(--color-norma-accent)] flex items-center justify-center shrink-0 font-medium">
                  {idx + 1}
                </div>
                <p className="text-[var(--color-norma-text)]/90 text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {/* Accordion for meeting structure */}
            <div className="bg-[var(--color-norma-bg)] rounded-2xl border border-[var(--color-norma-accent)]/20 shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setMeetingOpen(!meetingOpen)}
              >
                <span className="font-medium text-lg text-[var(--color-norma-text)]">Структура двухчасовой встречи</span>
                <ChevronDown className={`text-[var(--color-norma-accent)] transition-transform duration-300 ${meetingOpen ? 'rotate-180' : ''}`} size={24} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${meetingOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-3 pt-2 border-t border-black/5">
                  {meetingDetails.map((detail, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                      <span className="font-medium text-[var(--color-norma-text)] min-w-[180px]">{detail.label}:</span>
                      <span className="text-[var(--color-norma-text)]/70">{detail.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chat overview */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-medium text-lg mb-4 border-b border-black/5 pb-3">Поддержка в чате</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                <div>
                  <p className="font-medium text-[var(--color-norma-text)]/80 mb-2">Входит в сопровождение:</p>
                  <ul className="space-y-2 text-[var(--color-norma-text)]/70">
                    <li>• бриф-отчёты и вопросы</li>
                    <li>• фиксация наблюдений</li>
                    <li>• организационные моменты</li>
                    <li>• ответы в 12:00 и 19:00 (мск)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-norma-terracotta)]/90 mb-2">Требует отдельной работы:</p>
                  <ul className="space-y-2 text-[var(--color-norma-text)]/70">
                    <li>• индивидуальная терапия</li>
                    <li>• кризисные консультации</li>
                    <li>• глубокая работа с травмой</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-[var(--color-norma-text)]/60 mt-6 pt-4 border-t border-black/5 leading-relaxed">
                Работа в чате не предполагает проведения индивидуальной терапии в переписке. Тема может быть вынесена на групповую встречу или разобрана в рамках отдельно оплачиваемой сессии.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
