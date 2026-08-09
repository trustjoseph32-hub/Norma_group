import React, { useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { motion, useReducedMotion } from 'motion/react';

const theses = [
  "Тревога становится постоянным фоном.",
  "Вы пытаетесь всё предусмотреть и контролировать.",
  "Тело остаётся в напряжении, нарушается сон.",
  "Сил становится меньше, наступает апатия."
];

export const ForWhom: React.FC = () => {
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
    <Section id="audience" className="bg-[var(--color-norma-accent-light)] py-24 md:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight max-w-[15ch]">
              Вы уже знаете этот цикл.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/80 max-w-[30ch] leading-relaxed font-light">
              Это не отсутствие дисциплины. Это устойчивый способ реагирования, который со временем начинает поддерживать сам себя.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            {theses.map((thesis, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: shouldAnimateMotion ? 40 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: shouldAnimateMotion ? idx * 0.1 : 0 }}
                className="py-6 border-b border-[var(--color-norma-text)]/10 md:bg-white md:p-12 md:rounded-[2rem] flex flex-row md:flex-col items-center md:items-start md:justify-between md:min-h-[16rem] md:h-64 md:shadow-sm md:border md:border-[var(--color-norma-text)]/5 gap-6 md:gap-0"
              >
                <span className="text-3xl md:text-5xl font-display text-[var(--color-norma-terracotta)]/60 md:text-[var(--color-norma-terracotta)]/40 font-light italic shrink-0">
                  0{idx + 1}
                </span>
                <p className="text-lg md:text-2xl font-medium text-[var(--color-norma-text)] md:mt-6 leading-snug">
                  {thesis}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
