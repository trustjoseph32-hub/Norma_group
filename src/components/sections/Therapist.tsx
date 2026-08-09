import React, { useRef, useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { groupConfig } from '../../config/groupConfig';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export const Therapist: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimateMotion = !isMobile && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, shouldAnimateMotion ? 1.1 : 1]);

  return (
    <Section id="therapist" className="bg-white py-24 md:py-32 border-none overflow-hidden">
      <Container>
        <div ref={ref} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: shouldAnimateMotion ? 50 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-4 md:mb-6">
                Ведущий
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-[var(--color-norma-terracotta)]">
                {groupConfig.therapistName}
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl font-medium text-[var(--color-norma-text)]">
                Клинический психолог, гипнотерапевт
              </p>
              <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/70 font-light leading-relaxed max-w-lg">
                Более 10 лет частной практики. НИИ Бехтерева. КПТ, EMDR.
              </p>
            </div>
            
            <div className="text-xl md:text-2xl font-light leading-relaxed text-[var(--color-norma-text)]/80 max-w-lg pt-12 border-t border-[var(--color-norma-text)]/10">
              <p>
                Я работаю с состояниями, в которых тревога, телесные реакции и истощение поддерживают друг друга. В группе мы не ограничиваемся обсуждением проблемы: участники наблюдают собственные реакции, получают обратную связь и проверяют новые способы действия между встречами.
              </p>
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-[var(--color-norma-bg)] border border-[var(--color-norma-text)]/5 flex flex-col justify-center items-center shadow-lg group">
              <motion.div style={{ scale: imgScale }} className="absolute inset-0 bg-[var(--color-norma-accent-light)] flex flex-col items-center justify-center origin-bottom">
                {groupConfig.therapistPhotoUrl ? (
                  <img 
                    src={groupConfig.therapistPhotoUrl} 
                    alt={groupConfig.therapistName}
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <span className="font-display text-2xl text-[var(--color-norma-text)]/30">
                      Фотография
                    </span>
                    <span className="font-mono text-sm text-[var(--color-norma-text)]/20 mt-2">
                      [ 4:5 Портрет ]
                    </span>
                  </>
                )}
              </motion.div>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
