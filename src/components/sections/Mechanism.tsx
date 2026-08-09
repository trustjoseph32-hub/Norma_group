import React, { useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { motion, useReducedMotion } from 'motion/react';

const cycleSteps = [
  "Тревога",
  "Контроль",
  "Телесное напряжение",
  "Истощение",
  "Апатия и самокритика",
  "Новый виток тревоги"
];

export const Mechanism: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimateMotion = !isMobile && !prefersReducedMotion;

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveStep(-1);
      return;
    }
    
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 1100);
    
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <Section id="mechanism" className="bg-white py-24 md:py-32 overflow-hidden border-none">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          <div className="space-y-10">
            <motion.h2 
              initial={shouldAnimateMotion ? { opacity: 0, x: -50 } : false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] max-w-[15ch]"
            >
              Пока вы справляетесь с симптомами по отдельности, механизм продолжает работать целиком.
            </motion.h2>
            <motion.p 
              initial={shouldAnimateMotion ? { opacity: 0, x: -50 } : false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--color-norma-text)]/70 leading-relaxed max-w-lg font-light"
            >
              В группе мы найдём точки, в которых именно ваш цикл поддерживается, и начнём менять привычную реакцию.
            </motion.p>
          </div>
          
          <div className="relative pl-8 md:pl-12">
            
            {/* Vertical line connecting steps */}
            <div className="absolute left-[39px] md:left-[55px] top-[16px] md:top-[20px] bottom-[16px] md:bottom-[20px] w-[2px] bg-[var(--color-norma-text)]/10 z-0" />
            
            {/* Return loop line */}
            {/* impeccable-disable-next-line side-tab, border-accent-on-rounded */}
            <div className={`absolute left-2 md:left-4 top-[16px] md:top-[20px] bottom-[16px] md:bottom-[20px] w-[32px] md:w-[40px] border-l-2 border-y-2 rounded-l-[1.5rem] transition-colors duration-500 z-0 ${(activeStep === 6 || activeStep === -1) ? 'border-[var(--color-norma-accent)] text-[var(--color-norma-accent)]' : 'border-[var(--color-norma-text)]/10 text-[var(--color-norma-text)]/10'}`}>
              <svg 
                className="absolute -top-[4px] -right-[1px] w-[10px] h-[10px]" 
                viewBox="0 0 10 10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M 4 1 L 9 5 L 4 9" />
              </svg>
            </div>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              {cycleSteps.map((step, idx) => {
                const isCurrent = activeStep === idx;
                const isStatic = activeStep === -1;
                
                return (
                  <motion.div 
                    key={idx} 
                    initial={shouldAnimateMotion ? { opacity: 0, x: 30 } : false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: shouldAnimateMotion ? idx * 0.15 : 0 }}
                    className="relative flex items-center gap-6 md:gap-8 cursor-default"
                  >
                    <div className="w-4 h-4 shrink-0 flex items-center justify-center bg-white z-10">
                      <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isCurrent ? 'bg-[var(--color-norma-accent)] scale-[1.7] shadow-[0_0_12px_rgba(74,103,96,0.5)]' : isStatic ? 'bg-[var(--color-norma-accent)]' : 'bg-[var(--color-norma-text)]/20'}`} />
                    </div>
                    <h3 className={`font-display text-2xl md:text-3xl transition-colors duration-500 ${isCurrent || isStatic ? 'text-[var(--color-norma-text)] font-medium' : 'text-[var(--color-norma-text)]/60'}`}>
                      {step}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
            
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
