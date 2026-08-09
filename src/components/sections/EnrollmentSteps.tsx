import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';

const steps = [
  {
    title: "Оставить короткую заявку",
    desc: "Указать контакт и в нескольких предложениях описать, что сейчас беспокоит сильнее всего."
  },
  {
    title: "Обсудить запрос",
    desc: "На коротком собеседовании мы познакомимся, уточним вашу ситуацию и определим, может ли группа быть полезна именно сейчас.",
    subtext: "Если другой формат помощи окажется более подходящим, я честно скажу об этом и предложу возможный вариант."
  },
  {
    title: "Подтвердить участие",
    desc: "Ознакомиться с правилами, выбрать вариант оплаты и закрепить место в группе.",
    subtext: "После подтверждения участия вы заполните небольшой опросник, на основе которого будет сформирована индивидуальная карта состояния и терапевтических целей."
  }
];

export const EnrollmentSteps: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-t border-black/5">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12 md:mb-16">
          Как попасть в группу
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl border border-black/5 relative shadow-sm flex flex-col h-full group hover:border-[var(--color-norma-accent)]/30 transition-colors">
                <div className="text-xl font-display font-medium text-[var(--color-norma-accent)] mb-4">
                  Шаг {idx + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-4">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 leading-relaxed">
                  {step.desc}
                </p>
                {step.subtext && (
                  <p className="mt-6 pt-6 border-t border-black/5 text-sm md:text-base text-[var(--color-norma-text)]/60 leading-relaxed">
                    {step.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/70 leading-relaxed mb-8">
              Предварительное собеседование помогает подобрать подходящий формат и не является полноценной терапевтической сессией.
            </p>
            
            <Button size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Понять, подходит ли мне группа
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
