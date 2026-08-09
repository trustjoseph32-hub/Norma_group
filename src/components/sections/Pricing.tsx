import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';
import { CheckCircle2, Calendar, Clock, CreditCard } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section id="format" className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto bg-[var(--color-norma-text)] text-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-8 md:p-12 lg:p-14">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-10 text-[var(--color-norma-bg)]">
                Формат участия
              </h2>
              
              <ul className="space-y-4 mb-10">
                {[
                  `${groupConfig.durationWeeks} недель`,
                  `${groupConfig.meetingsCount} живых онлайн-встреч`,
                  `продолжительность — ${groupConfig.meetingDuration}`,
                  `закрытая группа (${groupConfig.groupSize})`,
                  `индивидуальная карта состояния и терапевтических целей`,
                  `еженедельные бриф-отчёты`,
                  `три психообразовательных видео`,
                  `сопровождение в закрытом чате`
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-base md:text-lg">
                    <CheckCircle2 className="text-[var(--color-norma-bg)] opacity-70 shrink-0 mt-1" size={20} />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-white/50 border-t border-white/20 pt-6">
                * Дополнительный четырёхнедельный цикл не входит в основную стоимость и формируется только при запросе участников.
              </p>
            </div>
            
            <div className="bg-[var(--color-norma-bg)] text-[var(--color-norma-text)] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <div className="mb-8">
                <div className="text-sm md:text-base font-medium tracking-wider uppercase text-[var(--color-norma-accent)] mb-2">
                  Основной цикл
                </div>
                <div className="text-4xl md:text-5xl font-display font-medium mb-6">
                  {groupConfig.fullPrice.toLocaleString('ru-RU')} ₽
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <CreditCard size={20} className="text-[var(--color-norma-text)]/50" />
                    <span className="font-medium">Полная оплата — {groupConfig.fullPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <div className="flex items-center gap-3 text-base md:text-lg">
                    <CreditCard size={20} className="text-[var(--color-norma-text)]/50" />
                    <span className="font-medium">Два платежа по {groupConfig.installmentPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-10 text-sm md:text-base text-[var(--color-norma-text)]/70 leading-relaxed">
                <p>Участие происходит по предоплате.</p>
                <p>Пропущенные участником встречи не пересчитываются и не переносятся, поскольку группа является закрытой, а место закрепляется на весь оплаченный период.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-black/5 mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-[var(--color-norma-accent)]" />
                  <span className="text-base md:text-lg font-medium">Старт: <span className="font-normal">{groupConfig.startDate}</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[var(--color-norma-accent)]" />
                  <span className="text-base md:text-lg font-medium">Время: <span className="font-normal">{groupConfig.weekday}</span></span>
                </div>
              </div>
              
              <Button size="lg" fullWidth onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
                Понять, подходит ли мне группа
              </Button>
            </div>
            
          </div>
        </div>
      </Container>
    </Section>
  );
};
