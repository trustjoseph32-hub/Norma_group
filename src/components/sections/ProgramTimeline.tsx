import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Users, FilePieChart, PlayCircle, NotebookPen } from 'lucide-react';

const elements = [
  { icon: <Users size={28} />, title: "Живые терапевтические встречи" },
  { icon: <FilePieChart size={28} />, title: "Карта состояния и еженедельная динамика" },
  { icon: <PlayCircle size={28} />, title: "Короткие объясняющие видео" },
  { icon: <NotebookPen size={28} />, title: "Наблюдения и эксперименты между встречами" }
];

const stages = [
  {
    weeks: "Недели 1–2",
    title: "Увидеть свой механизм",
    video: "Почему тревога сохраняется",
    tasks: [
      "определить исходную точку",
      "увидеть триггеры, контроль и избегание",
      "сформулировать критерии изменений"
    ]
  },
  {
    weeks: "Недели 3–4",
    title: "Понять реакции тела и эмоций",
    video: "Как напряжение связано с телесными симптомами",
    tasks: [
      "исследовать связь тревоги и телесных реакций",
      "распознавать страх симптомов",
      "пробовать новые способы регуляции"
    ]
  },
  {
    weeks: "Недели 5–6",
    title: "Выйти из истощения и избегания",
    video: "Почему после длительной мобилизации наступает истощение",
    tasks: [
      "увидеть цикл внутреннего давления",
      "постепенно восстанавливать активность",
      "работать с самокритикой и чувством вины"
    ]
  },
  {
    weeks: "Недели 7–8",
    title: "Закрепить свою систему",
    video: null,
    tasks: [
      "определить ранние признаки ухудшения",
      "выделить поддерживающие действия",
      "сформировать личный план после группы"
    ]
  }
];

export const ProgramTimeline: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-10">
            Как устроена работа за восемь недель
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {elements.map((el, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-black/5 flex flex-col items-center text-center gap-3">
                <div className="text-[var(--color-norma-accent)]">{el.icon}</div>
                <span className="text-sm md:text-base font-medium text-[var(--color-norma-text)]/90 leading-tight">{el.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="text-8xl font-display font-bold text-[var(--color-norma-accent)]">
                  {idx + 1}
                </span>
              </div>
              
              <span className="inline-block px-3 py-1 bg-[var(--color-norma-accent-light)] text-[var(--color-norma-accent)] text-sm font-medium rounded-full mb-4 w-fit">
                {stage.weeks}
              </span>
              <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-6 font-display relative z-10">
                {stage.title}
              </h3>
              
              <ul className="space-y-3 mb-8 relative z-10 flex-grow">
                {stage.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-norma-accent)] opacity-70 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                    <span className="text-[var(--color-norma-text)]/80 text-base leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
              
              {stage.video && (
                <div className="mt-auto bg-[var(--color-norma-bg)] p-4 rounded-xl border border-[var(--color-norma-accent)]/10 flex items-start gap-3 relative z-10">
                  <PlayCircle className="text-[var(--color-norma-accent)] shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="text-xs text-[var(--color-norma-text)]/60 font-medium mb-1 uppercase tracking-wider">Видео</div>
                    <div className="text-sm md:text-base text-[var(--color-norma-text)]/90 leading-tight font-medium">{stage.video}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm md:text-base text-[var(--color-norma-text)]/60">
            Материалы доступны участникам во время прохождения группы.
          </p>
        </div>
      </Container>
    </Section>
  );
};
