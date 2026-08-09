import React from 'react';
import { Container, Section } from '../ui/Layout';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  "Письменно описывает свой запрос",
  "Проходит психологическое тестирование",
  "Проходит короткое собеседование",
  "Получает карту состояния и целей",
  "Определяет наблюдаемые признаки изменений"
];

const mapItems = [
  "проявления тревоги и подавленности",
  "телесные реакции",
  "триггеры",
  "способы контроля и избегания",
  "сон, энергия и активность",
  "ресурсы",
  "критерии изменений"
];

export const IndividualRoute: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Общая группа — индивидуальная карта состояния и терапевтических целей
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed mb-2">
            До начала группы каждый участник:
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-[var(--color-norma-bg)] rounded-xl border border-black/5 items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--color-norma-accent)] text-white flex items-center justify-center shrink-0 font-medium text-sm">
                  {idx + 1}
                </div>
                <p className="text-[var(--color-norma-text)]/90 text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-[var(--color-norma-text)] text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-xl">
              <h3 className="text-2xl font-display mb-6 text-[var(--color-norma-bg)]">
                В карте фиксируются:
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {mapItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--color-norma-accent)] shrink-0 mt-1" size={20} />
                    <span className="text-white/90 text-base md:text-lg leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-white/20 pt-6">
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Карта формируется на основе запроса и психологического тестирования. Она не является медицинским диагнозом, а помогает удерживать индивидуальные цели и отслеживать динамику.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
