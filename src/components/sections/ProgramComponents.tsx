import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Users, FilePieChart, PlayCircle, NotebookPen } from 'lucide-react';

const components = [
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: "Живые терапевтические встречи",
    desc: "Восемь онлайн-встреч по два часа. Работа с актуальными состояниями, тревожными реакциями, психосоматическими проявлениями, избеганием, истощением и повторяющимися жизненными циклами."
  },
  {
    icon: <FilePieChart size={32} strokeWidth={1.5} />,
    title: "Диагностика и динамика",
    desc: "Индивидуальная карта до начала и короткий еженедельный бриф, позволяющий видеть изменения на фоне предыдущих недель."
  },
  {
    icon: <PlayCircle size={32} strokeWidth={1.5} />,
    title: "Краткое психообразование",
    desc: "Три видео продолжительностью до 10 минут помогают понять механизмы тревоги, телесных реакций и выгорания."
  },
  {
    icon: <NotebookPen size={32} strokeWidth={1.5} />,
    title: "Работа между встречами",
    desc: "Небольшие наблюдения, практики и терапевтические эксперименты, связанные с индивидуальным запросом."
  }
];

export const ProgramComponents: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">
          Четыре элемента одного терапевтического процесса
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {components.map((comp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-norma-accent-light)] text-[var(--color-norma-accent)] flex items-center justify-center mb-6">
                {comp.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-norma-text)] mb-4">
                {comp.title}
              </h3>
              <p className="text-[var(--color-norma-text)]/70 leading-relaxed text-base">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[var(--color-norma-text)]/80 leading-relaxed italic font-medium">
            Это не четыре самостоятельных продукта. Каждый элемент подготавливает и усиливает живую групповую работу.
          </p>
        </div>
      </Container>
    </Section>
  );
};
