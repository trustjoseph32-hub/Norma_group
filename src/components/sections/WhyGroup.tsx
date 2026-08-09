import React, { useEffect, useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { motion, useReducedMotion } from 'motion/react';

const mechanisms = [
  { title: "Узнавание", desc: "Видеть свои реакции в опыте других." },
  { title: "Отражение", desc: "Замечать то, что не видно изнутри." },
  { title: "Опора", desc: "Пробовать новое вместе с группой." },
  { title: "Динамика", desc: "Видеть прогресс, а не единичные срывы." }
];

export const WhyGroup: React.FC = () => {
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
    <Section className="bg-[#B56D5E] text-white py-24 md:py-40 rounded-[2.5rem] mx-4 md:mx-12 my-12 overflow-hidden relative">
      {/* Meaningful visualization of group field: interconnected dots */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <g className={shouldAnimateMotion ? "animate-[pulse_10s_ease-in-out_infinite]" : ""}>
            <circle cx="20" cy="30" r="1.5" fill="currentColor" />
            <circle cx="40" cy="70" r="1.5" fill="currentColor" />
            <circle cx="75" cy="40" r="1.5" fill="currentColor" />
            <circle cx="85" cy="80" r="1.5" fill="currentColor" />
            <circle cx="50" cy="20" r="1.5" fill="currentColor" />
            
            <path d="M 20 30 L 50 20 L 75 40 L 85 80 L 40 70 Z M 20 30 L 40 70 L 75 40" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" />
          </g>
        </svg>
      </div>
      
      <div className="absolute inset-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(74,103,96,0.3),transparent_50%)]"></div>

      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: shouldAnimateMotion ? 30 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] max-w-[18ch]"
            >
              Группа показывает то, что в одиночку остаётся незаметным.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: shouldAnimateMotion ? 30 : 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: shouldAnimateMotion ? 0.2 : 0 }}
              className="lg:col-span-5 lg:pl-12 lg:border-l border-white/20"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                В группе становятся видны привычные способы молчать, контролировать, избегать, обесценивать себя и не принимать поддержку. Другие участники помогают заметить то, что невозможно увидеть изнутри.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {mechanisms.map((mech, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: shouldAnimateMotion ? 40 : 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: shouldAnimateMotion ? idx * 0.15 : 0 }}
                className="border-t border-white/30 pt-6 md:pt-8"
              >
                <div className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/50 mb-4 md:mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 md:mb-4">{mech.title}</h3>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">{mech.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
