import React from 'react';
import { Container, Section } from '../ui/Layout';

const quotes = [
  "Даже когда объективно всё нормально, я не могу полностью расслабиться.",
  "Я постоянно прокручиваю возможные проблемы и пытаюсь всё предусмотреть.",
  "На фоне напряжения начинает реагировать тело, и это пугает меня ещё сильнее.",
  "Я долго держусь, а потом будто выключаюсь: нет сил, желаний и интереса.",
  "Отдых не помогает — я либо продолжаю тревожиться, либо виню себя за бездействие.",
  "Мне становится лучше, но через некоторое время всё повторяется."
];

export const Recognition: React.FC = () => {
  return (
    <Section id="audience" className="bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
          Возможно, вы узнаете себя
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {quotes.map((quote, idx) => (
            <div 
              key={idx} 
              className="bg-[var(--color-norma-bg)] p-6 md:p-8 rounded-2xl flex flex-col justify-center border border-black/5"
            >
              <p className="text-[var(--color-norma-text)]/90 leading-relaxed text-base md:text-lg font-medium">
                «{quote}»
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed bg-[var(--color-norma-accent-light)]/50 p-6 md:p-8 rounded-xl max-w-[70ch] mx-auto">
            Это может выглядеть как несколько разных проблем. Но нередко тревога, телесные реакции, апатия и выгорание оказываются частями одного повторяющегося механизма.
          </p>
        </div>
      </Container>
    </Section>
  );
};
