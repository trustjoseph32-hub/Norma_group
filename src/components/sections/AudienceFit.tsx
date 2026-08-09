import React from 'react';
import { Container, Section } from '../ui/Layout';

const fitItems = [
  "тревожность стала постоянным фоном",
  "вы не можете прекратить мысленно контролировать риски",
  "тело реагирует на напряжение",
  "вы проживаете повторяющиеся эпизоды истощения",
  "прежние способы справляться перестали работать"
];

const contraindications = [
  "остром психотическом состоянии",
  "непосредственном риске причинения вреда себе",
  "маниакальном эпизоде",
  "тяжёлой зависимости в активной фазе",
  "состоянии, требующем срочной медицинской помощи"
];

export const AudienceFit: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-t border-black/5">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">
              Группа может подойти, если:
            </h2>
            <ul className="space-y-4">
              {fitItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[var(--color-norma-accent)] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-[var(--color-norma-text)]/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[var(--color-norma-accent-light)]/30 p-8 md:p-10 rounded-3xl border border-[var(--color-norma-accent)]/10">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">
              Сначала может понадобиться другой формат:
            </h2>
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/90 mb-6 font-medium">
              Группа не является основным форматом помощи при:
            </p>
            <ul className="space-y-4 mb-8">
              {contraindications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--color-norma-text)]/80">
                  <span className="text-[var(--color-norma-text)]/40 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[var(--color-norma-text)]/70 leading-relaxed border-t border-[var(--color-norma-accent)]/20 pt-6">
              На предварительном собеседовании мы обсудим ваш запрос и определим, может ли группа быть полезна сейчас. Если другой формат будет безопаснее и эффективнее, мы открыто это обсудим.
            </p>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
