import React from 'react';
import { Container } from '../ui/Layout';
import { groupConfig } from '../../config/groupConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--color-norma-bg)] border-t border-black/10 pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <span className="font-display font-bold text-2xl tracking-wide text-[var(--color-norma-text)] block mb-1">НОРМА</span>
            <span className="text-sm text-[var(--color-norma-text)]/70 uppercase tracking-widest font-semibold block mb-6">Терапевтическая группа</span>
          </div>
          
          <div>
            <h4 className="font-medium text-[var(--color-norma-text)] mb-4 text-lg">Ведущий</h4>
            <p className="text-base text-[var(--color-norma-text)]/80 mb-1">{groupConfig.therapistName}</p>
            <p className="text-base text-[var(--color-norma-text)]/70 mb-4">{groupConfig.therapistTitle}</p>
            <div className="space-y-2 text-base text-[var(--color-norma-text)]/80">
              <a href={`mailto:${groupConfig.emailContact}`} className="block hover:text-[var(--color-norma-text)] transition-colors">{groupConfig.emailContact}</a>
              <a href={`https://t.me/${groupConfig.telegramContact?.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="block hover:text-[var(--color-norma-text)] transition-colors">Telegram: {groupConfig.telegramContact}</a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-medium text-[var(--color-norma-text)] mb-4 text-lg">Документы</h4>
            <div className="space-y-3 text-base text-[var(--color-norma-text)]/80 flex flex-col">
              <a href={groupConfig.privacyPolicyUrl} className="hover:text-[var(--color-norma-text)] transition-colors inline-block w-fit">Политика конфиденциальности</a>
              <a href={groupConfig.dataProcessingConsentUrl} className="hover:text-[var(--color-norma-text)] transition-colors inline-block w-fit">Согласие на обработку персональных данных</a>
              <a href={groupConfig.publicOfferUrl} className="hover:text-[var(--color-norma-text)] transition-colors inline-block w-fit">Публичная оферта / Условия участия</a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-black/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-[var(--color-norma-text)]/50">
          <div>
            <p className="mb-2">© {currentYear} {groupConfig.therapistName}. Все права защищены.</p>
            <p>{groupConfig.legalDetails}</p>
          </div>
          
          <div className="max-w-xl md:text-right">
            <p className="leading-relaxed">
              Информация на сайте не является медицинской рекомендацией. Групповая психотерапия не заменяет экстренную, психиатрическую или медицинскую помощь.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
