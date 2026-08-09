import React from 'react';
import { Container, Section } from '../ui/Layout';

export const MeaningOfNorma: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">
            Не соответствовать чужой норме, а вернуться к своей
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/90 leading-relaxed mb-10 max-w-[65ch] mx-auto">
            «НОРМА» — это не состояние, в котором человек всегда спокоен, продуктивен и доволен собой. Это способность переживать напряжение, восстанавливаться после нагрузки, принимать решения и участвовать в собственной жизни, не расходуя большую часть сил на борьбу с собой.
          </p>
          
          <div className="bg-[var(--color-norma-accent-light)]/40 p-8 md:p-10 rounded-2xl border border-[var(--color-norma-accent)]/20 inline-block text-left">
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/90 leading-relaxed font-medium">
              Результатом становится не идеальное состояние, а увеличение управляемости: я лучше понимаю происходящее со мной и могу раньше влиять на собственный цикл.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
