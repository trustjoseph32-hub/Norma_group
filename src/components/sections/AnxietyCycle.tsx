import React from 'react';
import { Container, Section } from '../ui/Layout';
import { ArrowDown } from 'lucide-react';

const cycleSteps = [
  "Тревога и ожидание угрозы",
  "Контроль и попытка всё предусмотреть",
  "Телесное напряжение и нарушение сна",
  "Истощение",
  "Апатия, раздражительность или подавленность",
  "Самокритика и попытка снова заставить себя"
];

export const AnxietyCycle: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Почему это снова повторяется
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed mb-10 max-w-[65ch]">
              Человек может пытаться отдельно бороться с тревожными мыслями, бессонницей, телесными симптомами или отсутствием сил. В группе мы исследуем не только отдельные проявления, но и механизм, который связывает их между собой и поддерживает именно ваше состояние.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-[var(--color-norma-text)] aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-xl max-w-lg">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
                <h3 className="text-white font-medium text-lg max-w-sm leading-snug">
                  Почему тревога, телесные реакции и истощение могут поддерживать один повторяющийся цикл
                </h3>
              </div>
            </div>
          </div>
          
          <div className="relative py-4">
            {/* Cycle Visualization */}
            <div className="flex flex-col items-center max-w-md mx-auto space-y-2 relative">
              {cycleSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full bg-white px-6 py-4 rounded-xl shadow-sm border border-black/5 text-center relative z-10">
                    <span className="font-medium text-[var(--color-norma-text)] text-base md:text-lg">{step}</span>
                  </div>
                  <div className="h-6 flex items-center justify-center relative z-0">
                    <ArrowDown className="text-[var(--color-norma-accent)]/50" size={24} />
                  </div>
                </React.Fragment>
              ))}
              <div className="w-full bg-[var(--color-norma-accent-light)] px-6 py-4 rounded-xl border border-[var(--color-norma-accent)]/20 text-center relative z-10">
                <span className="font-medium text-[var(--color-norma-accent)] text-base md:text-lg">Новый виток тревоги</span>
              </div>
              
              {/* Return arrow line */}
              {/* impeccable-disable-next-line side-tab, border-accent-on-rounded */}
              <div className="absolute left-[-24px] sm:left-[-40px] top-[28px] bottom-[28px] w-6 sm:w-10 border-l-2 border-t-2 border-b-2 border-[var(--color-norma-accent)]/60 rounded-l-3xl hidden sm:flex items-center justify-center pointer-events-none">
                <div className="absolute -top-[6px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-[var(--color-norma-accent)]/60 transform rotate-45 translate-x-[5px]" />
                <span className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-[var(--color-norma-accent)] whitespace-nowrap opacity-90 tracking-wide">
                  возвращение к тревоге и ожиданию угрозы
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
