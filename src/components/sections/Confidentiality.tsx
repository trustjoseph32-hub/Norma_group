import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Shield } from 'lucide-react';

const rules = [
  "терапевтические встречи не записываются;",
  "записи встреч участникам не предоставляются;",
  "запрещены аудиозапись, видеозапись и скриншоты;",
  "нельзя передавать истории и личные сведения других участников;",
  "на встрече участник должен находиться в отдельном помещении;",
  "камера должна быть включена;",
  "участие в состоянии алкогольного или наркотического опьянения запрещено."
];

export const Confidentiality: React.FC = () => {
  return (
    <Section className="bg-white border-t border-black/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Shield className="mx-auto text-[var(--color-norma-accent)] mb-6" size={40} strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Безопасность группового пространства
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-norma-bg)] p-8 rounded-2xl border border-black/5">
            <h3 className="font-medium text-lg mb-6">Правила участия:</h3>
            <ul className="space-y-4">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--color-norma-text)]/80 text-sm md:text-base leading-tight">
                  <span className="text-[var(--color-norma-text)]/30 mt-1 shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col justify-center bg-[var(--color-norma-accent-light)]/30 p-8 rounded-2xl border border-[var(--color-norma-accent)]/10">
            <h3 className="font-medium text-lg mb-4">Психообразовательные материалы:</h3>
            <p className="text-[var(--color-norma-text)]/80 leading-relaxed">
              Короткие образовательные видео доступны только во время прохождения группы. После завершения цикла доступ закрывается.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
