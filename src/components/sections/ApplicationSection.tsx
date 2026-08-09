import React, { useState, useEffect } from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';
import { CheckCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export const ApplicationSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    concern: '',
    consentData: false
  });
  
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimateMotion = !isMobile && !prefersReducedMotion;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <Section id="application" className="bg-[var(--color-norma-bg)] py-24 md:py-32 border-none">
      <Container>
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: shouldAnimateMotion ? -50 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-12 md:mb-16 leading-[1.1]">
                Присоединиться <br/>к группе
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-xl md:text-2xl text-[var(--color-norma-text)] font-light mb-12 md:mb-16">
                <p>8 недель • 8 встреч</p>
                <p>8–12 участников</p>
                <p>Закрытый формат • Онлайн</p>
                <div className="pt-6 md:pt-8 border-t border-[var(--color-norma-text)]/10 mt-6 md:mt-8">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-display font-medium">24 000 ₽</p>
                  <p className="text-lg md:text-xl text-[var(--color-norma-text)]/60 mt-2">или два платежа по 12 000 ₽</p>
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">Как это работает:</h3>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-norma-text)] text-[var(--color-norma-bg)] font-medium flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Оставить заявку</h4>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-norma-text)] text-[var(--color-norma-bg)] font-medium flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Обсудить запрос</h4>
                    <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 font-light">На предварительном собеседовании.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-norma-text)] text-[var(--color-norma-bg)] font-medium flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Подтвердить участие</h4>
                    <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 font-light mb-2">Закрепляем место.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: shouldAnimateMotion ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: shouldAnimateMotion ? 0.2 : 0 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-[var(--color-norma-text)]/5 shadow-xl"
            >
              {status === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle className="mx-auto text-[var(--color-norma-accent)] mb-8" size={80} strokeWidth={1} />
                  <h3 className="text-3xl md:text-4xl font-display font-medium mb-4">Заявка отправлена</h3>
                  <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 font-light">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="text-3xl font-display font-medium mb-8">Заявка на участие</h3>
                  
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-lg md:text-xl font-medium text-[var(--color-norma-text)]/80">Имя <span className="text-[var(--color-norma-terracotta)]">*</span></label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-norma-accent)] text-lg transition-shadow" />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="contact" className="block text-lg md:text-xl font-medium text-[var(--color-norma-text)]/80">Telegram или телефон <span className="text-[var(--color-norma-terracotta)]">*</span></label>
                    <input required type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-norma-accent)] text-lg transition-shadow" />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="concern" className="block text-lg md:text-xl font-medium text-[var(--color-norma-text)]/80">С чем хотелось бы поработать <span className="text-[var(--color-norma-terracotta)]">*</span></label>
                    <textarea required id="concern" name="concern" rows={4} value={formData.concern} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border-none rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-norma-accent)] resize-none text-lg transition-shadow" />
                  </div>
                  
                  <div className="pt-2">
                    <label className="flex items-start gap-4 cursor-pointer">
                      <input type="checkbox" name="consentData" required checked={formData.consentData} onChange={handleChange} className="mt-1.5 w-5 h-5 md:w-6 md:h-6 shrink-0 rounded text-[var(--color-norma-accent)] focus:ring-[var(--color-norma-accent)] border-black/20" />
                      <span className="text-base md:text-lg text-[var(--color-norma-text)]/60 font-light">
                        Согласие на <a href={groupConfig.dataProcessingConsentUrl} className="underline hover:text-[var(--color-norma-text)]">обработку данных</a>.
                      </span>
                    </label>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      variant={(formData.name.trim() && formData.contact.trim() && formData.concern.trim() && formData.consentData) ? 'secondary' : 'primary'}
                      size="lg" 
                      className="w-full py-6 text-xl rounded-full transition-colors duration-300" 
                      disabled={status === 'submitting' || !formData.consentData}
                    >
                      {status === 'submitting' ? 'Отправка...' : 'Обсудить мой запрос'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
            
          </div>
        </div>
      </Container>
    </Section>
  );
};
