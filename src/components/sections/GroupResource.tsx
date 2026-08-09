import React from 'react';
import { Container, Section } from '../ui/Layout';

const steps = [
  {
    num: "01",
    title: "Узнавание",
    text: "Вижу собственные реакции в историях других и перестаю считать себя неправильным."
  },
  {
    num: "02",
    title: "Обратная связь",
    text: "Другие замечают то, что я привык не видеть, рационализировать или обесценивать."
  },
  {
    num: "03",
    title: "Совместное движение",
    text: "Когда один решается на новое действие, группе легче пробовать собственные изменения."
  },
  {
    num: "04",
    title: "Закрепление",
    text: "Группа помогает замечать путь и не оценивать весь процесс по одному сложному дню."
  }
];

export const GroupResource: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Почему группа усиливает индивидуальную работу
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-black/5 h-full relative overflow-hidden group hover:border-[var(--color-norma-accent)]/30 transition-colors">
              <div className="text-6xl md:text-7xl font-display font-bold text-[var(--color-norma-accent-light)] absolute -top-4 -right-4 opacity-50 select-none">
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-5 relative z-10">{step.title}</h3>
              <p className="text-[var(--color-norma-text)]/80 text-base md:text-lg leading-relaxed relative z-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center bg-[var(--color-norma-accent-light)]/40 p-8 md:p-12 rounded-3xl border border-[var(--color-norma-accent)]/10">
          <p className="text-xl md:text-2xl font-display font-medium text-[var(--color-norma-text)] leading-relaxed">
            Общий терапевтический процесс создаёт условия, в которых индивидуальные изменения могут закрепляться быстрее и устойчивее.
          </p>
        </div>
      </Container>
    </Section>
  );
};
