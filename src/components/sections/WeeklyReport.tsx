import React from 'react';
import { Container, Section } from '../ui/Layout';
import { CheckSquare } from 'lucide-react';

const reportItems = [
  "общее состояние",
  "уровень тревоги",
  "уровень подавленности или апатии",
  "уровень энергии",
  "качество сна",
  "выраженность телесных симптомов",
  "значимые события",
  "действия, которые помогали",
  "сложности",
  "главное изменение",
  "задача на следующую неделю"
];

export const WeeklyReport: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Чтобы не забывать собственный прогресс
            </h2>
            <p className="text-lg text-[var(--color-norma-text)]/80 leading-relaxed mb-6">
              Раз в неделю участник заполняет короткий отчёт продолжительностью 5–10 минут.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-black/5 mb-8">
              <p className="text-[var(--color-norma-text)]/90 leading-relaxed font-medium italic">
                Каждый новый отчёт сопоставляется с предыдущими. Это помогает не оценивать весь процесс по одному тяжёлому дню, замечать небольшие изменения, отличать временный откат от общего ухудшения и видеть закономерности.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Simple Mockup */}
            <div className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
              <div className="bg-[var(--color-norma-text)] p-4 text-white">
                <div className="text-sm opacity-60 mb-1">Неделя 3</div>
                <div className="font-medium">Еженедельный бриф-отчёт</div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {reportItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-[var(--color-norma-bg)] border border-[var(--color-norma-accent)]/10 px-2.5 py-1 rounded text-xs text-[var(--color-norma-text)]/70">
                      <CheckSquare size={12} className="text-[var(--color-norma-accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 opacity-50">
                  <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                  <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                  <div className="h-10 w-full bg-gray-100 rounded-lg mt-4 border border-dashed border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
