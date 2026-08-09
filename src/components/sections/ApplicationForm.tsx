import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';
import { CheckCircle, Shield, ArrowLeft, ArrowRight } from 'lucide-react';

export const ApplicationForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    preferredContact: 'telegram',
    concern: '',
    consentData: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (formData.name && formData.contact && formData.consentData) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleNext();
      return;
    }
    
    setStatus('submitting');
    
    // Simulate webhook request
    setTimeout(() => {
      console.log('Form data (demo mode):', formData);
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <Section id="application" className="bg-white">
        <Container>
          <div className="max-w-2xl mx-auto bg-[var(--color-norma-bg)] p-10 md:p-16 rounded-3xl text-center border border-[var(--color-norma-accent)]/20 shadow-sm">
            <CheckCircle className="mx-auto text-[var(--color-norma-accent)] mb-6" size={64} strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Заявка отправлена</h2>
            <p className="text-[var(--color-norma-text)]/80 text-lg md:text-xl leading-relaxed">
              Мы изучим информацию и свяжемся с вами, чтобы договориться о предварительном собеседовании.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="application" className="bg-white">
      <Container>
        
        {/* Safety Compact Block */}
        <div className="max-w-3xl mx-auto bg-[var(--color-norma-bg)] rounded-2xl p-6 md:p-8 mb-12 border border-black/5 flex flex-col sm:flex-row gap-6 items-start">
          <div className="bg-[var(--color-norma-accent-light)] p-4 rounded-xl shrink-0">
            <Shield className="text-[var(--color-norma-accent)]" size={32} />
          </div>
          <div>
            <h3 className="font-medium text-lg md:text-xl mb-3">Безопасность пространства</h3>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base text-[var(--color-norma-text)]/80">
              <li>• Встречи не записываются</li>
              <li>• Участники соблюдают конфиденциальность</li>
              <li>• Камера должна быть включена</li>
              <li>• Участие из отдельного помещения</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Короткая первичная заявка
            </h2>
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/70">
              Шаг {step} из 2. Информация конфиденциальна.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[var(--color-norma-bg)] p-6 md:p-10 rounded-3xl border border-black/5 shadow-sm relative overflow-hidden">
            
            <div className={`transition-all duration-300 ease-in-out ${step === 1 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 -translate-x-full absolute inset-0'}`}>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-base font-medium text-[var(--color-norma-text)]">Имя <span className="text-red-500">*</span></label>
                    <input required={step === 1} type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact" className="block text-base font-medium text-[var(--color-norma-text)]">Телефон или Telegram <span className="text-red-500">*</span></label>
                    <input required={step === 1} type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredContact" className="block text-base font-medium text-[var(--color-norma-text)]">Удобный способ связи <span className="text-red-500">*</span></label>
                  <select id="preferredContact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className="w-full md:w-1/2 bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base">
                    <option value="telegram">Telegram</option>
                    <option value="phone">Телефон</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consentData" required={step === 1} checked={formData.consentData} onChange={handleChange} className="mt-1.5 w-4 h-4 rounded text-[var(--color-norma-accent)] focus:ring-[var(--color-norma-accent)]" />
                    <span className="text-sm md:text-base text-[var(--color-norma-text)]/70 leading-relaxed">
                      Я даю согласие на <a href={groupConfig.dataProcessingConsentUrl} className="underline hover:text-[var(--color-norma-text)]">обработку персональных данных</a> и принимаю <a href={groupConfig.privacyPolicyUrl} className="underline hover:text-[var(--color-norma-text)]">политику конфиденциальности</a>.
                    </span>
                  </label>
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <Button type="button" onClick={handleNext} disabled={!formData.name || !formData.contact || !formData.consentData} size="lg" className="w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2">
                    Далее <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-300 ease-in-out ${step === 2 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-full'}`}>
              <div className="space-y-8">
                
                <div className="space-y-2">
                  <label htmlFor="concern" className="block text-base font-medium text-[var(--color-norma-text)]">Кратко опишите, что сейчас беспокоит вас сильнее всего <span className="text-red-500">*</span></label>
                  <textarea required={step === 2} id="concern" name="concern" rows={6} placeholder="Например, частая тревога, телесное напряжение, апатия..." value={formData.concern} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] resize-none text-base" />
                  <p className="text-sm text-[var(--color-norma-text)]/60 mt-2">
                    Достаточно нескольких предложений. Подробное тестирование проводится отдельно.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-base">
                    Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button type="button" onClick={handleBack} className="text-[var(--color-norma-text)]/60 hover:text-[var(--color-norma-text)] font-medium text-base flex items-center gap-2 px-4 py-2 transition-colors">
                    <ArrowLeft size={20} /> Назад
                  </button>
                  <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto min-w-[200px]">
                    {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </div>
                
                <p className="mt-6 text-sm text-[var(--color-norma-text)]/60 text-center max-w-lg mx-auto leading-relaxed">
                  Отправка заявки не означает автоматическое зачисление. Сначала мы уточним запрос и договоримся о предварительном собеседовании.
                </p>
              </div>
            </div>

          </form>
        </div>
      </Container>
    </Section>
  );
};
