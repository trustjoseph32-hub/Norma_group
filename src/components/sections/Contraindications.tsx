import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Info } from 'lucide-react';

const contraindications = [
  "непосредственном риске причинения вреда себе;",
  "остром психотическом состоянии;",
  "маниакальном эпизоде;",
  "тяжёлой зависимости в активной фазе;",
  "состоянии, требующем срочной медицинской или психиатрической помощи;",
  "невозможности соблюдать конфиденциальность;",
  "невозможности регулярно присутствовать на встречах."
];

export const Contraindications: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-10 text-center">
            Иногда начать лучше с другого формата помощи
          </h2>
          
          <div className="bg-[var(--color-norma-bg)] p-8 md:p-12 rounded-3xl border border-black/5">
            <p className="text-lg text-[var(--color-norma-text)]/90 font-medium mb-8">
              Группа не является основным форматом при:
            </p>
            
            <ul className="space-y-4 mb-10">
              {contraindications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--color-norma-text)]/80">
                  <span className="text-[var(--color-norma-text)]/40 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 p-6 bg-white rounded-xl border border-[var(--color-norma-accent)]/20 items-start">
              <Info className="text-[var(--color-norma-accent)] shrink-0 mt-1" size={24} />
              <p className="text-base text-[var(--color-norma-text)]/80 leading-relaxed">
                На предварительном собеседовании мы обсудим ваш запрос и определим, может ли группа быть полезна сейчас. Если другой формат будет безопаснее и эффективнее, я честно скажу об этом и предложу возможное направление дальнейшей помощи.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
