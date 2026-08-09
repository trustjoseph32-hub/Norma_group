import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { motion, useReducedMotion } from 'motion/react';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <Section className="relative flex flex-col justify-center pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-none min-h-[100svh] lg:min-h-[90vh]">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-[var(--color-norma-bg)] pointer-events-none">
        
        {/* Soft, atmospheric therapy group image */}
        <motion.div 
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="absolute right-0 top-0 w-full md:w-[70%] h-full opacity-30 md:opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2500&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'sepia(10%) grayscale(10%)',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, black 80%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, black 80%, black 100%)',
            }}
          />
        </motion.div>
        
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-norma-bg)] via-[var(--color-norma-bg)]/90 to-transparent w-[80%]" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-[760px] flex flex-col gap-8 lg:gap-12">
          
          <div className="space-y-6">
            {/* H1 */}
            <h1 className="text-[clamp(2.75rem,8.5vw,5.5rem)] font-display font-medium text-[var(--color-norma-text)] leading-[1.05] tracking-tight">
              <motion.span initial={shouldAnimate ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">
                Перестать жить
              </motion.span>
              <motion.span initial={shouldAnimate ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block">
                в постоянном <span className="text-[var(--color-norma-terracotta)] italic font-light">напряжении</span>
              </motion.span>
            </h1>
          </div>
          
          <motion.div 
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 pt-6 lg:pt-8 border-t border-[var(--color-norma-text)]/15"
          >
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[var(--color-norma-text)]/90 leading-snug font-medium">
              Для тех, кто много тревожится, старается всё контролировать и в итоге остаётся без сил, сна и возможности расслабиться.
            </p>
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/70 leading-relaxed font-normal max-w-xl">
              За восемь недель мы разберём, что поддерживает именно ваше состояние, и начнём менять привычные реакции.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg rounded-full" 
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обсудить мой запрос
                </Button>
                
                <div className="flex flex-wrap sm:flex-col gap-x-4 gap-y-2 text-sm md:text-base font-medium text-[var(--color-norma-text)]/70">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-norma-terracotta)]"></span>
                      8 недель
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-norma-terracotta)]"></span>
                      8–12 участников
                    </span>
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-norma-terracotta)]"></span>
                    Онлайн
                  </span>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-[var(--color-norma-text)]/50 font-light mt-2 max-w-md">
                Короткая заявка и предварительное собеседование не обязывают участвовать.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

