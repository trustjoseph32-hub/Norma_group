import React, { useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { motion, useReducedMotion } from 'motion/react';

const blocks = [
  {
    title: "Увидеть механизм",
    desc: "Определить триггеры, контроль, избегание и путь к истощению."
  },
  {
    title: "Изменить реакцию",
    desc: "Работать с мыслями, эмоциями, телом и действиями в момент запуска цикла."
  },
  {
    title: "Закрепить новый опыт",
    desc: "Использовать обратную связь и групповой ресурс, чтобы замечать, проверять и повторять новые способы реагирования."
  }
];

export const WhatHappens: React.FC = () => {
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
    <Section className="bg-[var(--color-norma-bg)] py-24 md:py-32 border-none">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: shouldAnimateMotion ? 30 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium">
              3 этапа работы
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {blocks.map((block, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: shouldAnimateMotion ? 50 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: shouldAnimateMotion ? idx * 0.2 : 0 }}
                className={`bg-white p-8 md:p-12 rounded-[2rem] shadow-sm flex flex-col border border-[var(--color-norma-text)]/5 ${idx === 1 ? 'md:mt-12 lg:mt-16' : ''} ${idx === 2 ? 'md:mt-24 lg:mt-32' : ''}`}
              >
                <div className="text-[var(--color-norma-terracotta)]/30 font-display font-light text-6xl md:text-7xl lg:text-8xl mb-8 md:mb-12">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-norma-text)] mb-4">{block.title}</h3>
                <p className="text-xl text-[var(--color-norma-text)]/70 leading-relaxed font-light mt-auto">
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
