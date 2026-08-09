import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export const Marquee: React.FC<{ text: string, direction?: 'left' | 'right' }> = ({ text, direction = 'left' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reduce translation range to make it slower, as requested
  const x = useTransform(scrollYProgress, [0, 1], direction === 'left' ? [100, -100] : [-100, 100]);

  const shouldAnimate = !isMobile && !prefersReducedMotion;
  
  if (isMobile) {
    return null;
  }

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-12 md:py-24 border-y border-[var(--color-norma-text)]/5 flex items-center justify-center">
      <motion.div style={{ x: shouldAnimate ? x : 0 }} className="whitespace-nowrap">
        <span className="text-[60px] md:text-[140px] font-display font-medium text-[var(--color-norma-text)]/5 tracking-tighter uppercase leading-none">
          {text} {text} {text} {text}
        </span>
      </motion.div>
    </div>
  );
};
