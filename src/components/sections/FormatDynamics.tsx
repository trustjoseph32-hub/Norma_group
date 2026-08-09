import React, { useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { motion, useReducedMotion } from 'motion/react';

const timeline = [
  { time: "Недели 1–2", title: "Обнаружить свой цикл", desc: "Определяем, что запускает тревогу и чем поддерживается ваш цикл." },
  { time: "Недели 3–4", title: "Разобраться с телесными и эмоциональными реакциями", desc: "Учимся различать телесную реакцию, тревожные мысли и реальную ситуацию." },
  { time: "Недели 5–6", title: "Ослабить избегание и вернуть действия", desc: "Действия вопреки тревоге и снятие контроля." },
  { time: "Недели 7–8", title: "Закрепить изменения и подготовиться к откатам", desc: "Закрепляем рабочие способы и готовим план на случай отката." }
];

export const FormatDynamics: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimateMotion = !isMobile && !prefersReducedMotion;

  return (
    <Section id="format" className="bg-[var(--color-norma-bg)] py-24 md:py-32 border-none">
      <Container>
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Format column */}
            <motion.div 
              initial={{ opacity: 0, x: shouldAnimateMotion ? -50 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-12 md:mb-16 leading-[1.1]">
                Формат
              </h2>
              
              <div className="flex flex-col space-y-8 md:space-y-12">
                <div className="border-t border-[var(--color-norma-text)]/10 pt-6 md:pt-8">
                  <h3 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">8 встреч онлайн</h3>
                  <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/60 font-light">Раз в неделю, 2 часа</p>
                </div>
                <div className="border-t border-[var(--color-norma-text)]/10 pt-6 md:pt-8">
                  <h3 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">Еженедельная динамика</h3>
                  <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/60 font-light">Сон, энергия, интенсивность тревоги</p>
                </div>
                <div className="border-t border-[var(--color-norma-text)]/10 pt-6 md:pt-8">
                  <h3 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">Практика в жизни</h3>
                  <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/60 font-light">Наблюдения и эксперименты между встречами</p>
                </div>
              </div>
            </motion.div>
            
            {/* Timeline column */}
            <div className="lg:pl-16 lg:border-l border-[var(--color-norma-text)]/10">
              <motion.h2 
                initial={{ opacity: 0, y: shouldAnimateMotion ? 30 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-12 md:mb-16 leading-[1.1]"
              >
                Маршрут
              </motion.h2>
              
              <div className="space-y-6 md:space-y-8">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: shouldAnimateMotion ? 50 : 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: shouldAnimateMotion ? idx * 0.15 : 0 }}
                    className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-[var(--color-norma-text)]/5 flex flex-col justify-center"
                  >
                    <span className="text-sm md:text-base font-bold tracking-widest text-[var(--color-norma-accent)] uppercase mb-3 md:mb-4">
                      {item.time}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-norma-text)] mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 font-light">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
