import React from 'react';
import { Container, Section } from '../ui/Layout';

const outcomes = [
  {
    title: "В понимании себя",
    items: [
      "увидеть собственный повторяющийся цикл",
      "раньше замечать ухудшение",
      "лучше различать тревогу и реальную угрозу"
    ]
  },
  {
    title: "В состоянии",
    items: [
      "снизить общее внутреннее напряжение",
      "спокойнее относиться к части телесных ощущений",
      "вернуть часть энергии"
    ]
  },
  {
    title: "В поведении",
    items: [
      "уменьшить избегание",
      "вернуться к отдельным делам",
      "раньше останавливаться до истощения"
    ]
  },
  {
    title: "В дальнейшей жизни",
    items: [
      "сформировать систему саморегуляции",
      "знать свои уязвимые ситуации",
      "иметь план действий при ухудшении"
    ]
  }
];

export const Outcomes: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">
          Возможные изменения
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {outcomes.map((group, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white p-6 rounded-2xl shadow-sm border border-black/5">
              <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-6 border-b border-black/10 pb-4">
                {group.title}
              </h3>
              <ul className="space-y-4 flex-grow">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-norma-text)]/80 text-base md:text-lg leading-snug">
                    <span className="text-[var(--color-norma-accent)] mt-1 opacity-50 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
