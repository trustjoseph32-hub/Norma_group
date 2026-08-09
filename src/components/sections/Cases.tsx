import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { groupConfig } from '../../config/groupConfig';
import { ChevronDown } from 'lucide-react';

const cases = [
  {
    cameWith: "[ Описание состояния, с которым пришел клиент, его основной запрос и симптоматика ]",
    supportedBy: "[ Описание механизма: какие действия, реакции или избегание поддерживали тревогу и истощение ]",
    inWork: "[ Краткое описание процесса работы: на что был направлен фокус, какие способы реагирования проверяли ]",
    changes: "[ Наблюдаемые изменения, новые способы справляться с тревогой, изменение уровня энергии ]",
    source: "[ Индивидуальная терапия / Группа / Интенсив ]"
  },
  {
    cameWith: "[ Описание состояния, с которым пришел клиент, его основной запрос и симптоматика ]",
    supportedBy: "[ Описание механизма: какие действия, реакции или избегание поддерживали тревогу и истощение ]",
    inWork: "[ Краткое описание процесса работы: на что был направлен фокус, какие способы реагирования проверяли ]",
    changes: "[ Наблюдаемые изменения, новые способы справляться с тревогой, изменение уровня энергии ]",
    source: "[ Индивидуальная терапия / Группа / Интенсив ]"
  }
];

export const Cases: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!groupConfig.showCases) {
    return null;
  }

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="cases" className="bg-white py-24 md:py-32 border-none">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-12 md:mb-16 text-center leading-[1.1]">
            Примеры работы
          </h2>
          
          <div className="space-y-6">
            {cases.map((caseItem, idx) => (
              <div key={idx} className="bg-[var(--color-norma-bg)] rounded-[2rem] border border-[var(--color-norma-text)]/5 overflow-hidden">
                <button 
                  className="w-full px-8 py-6 md:p-8 flex items-center justify-between text-left focus:outline-none hover:bg-black/5 transition-colors"
                  onClick={() => toggle(idx)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pr-8">
                    <span className="font-display font-medium text-2xl md:text-3xl text-[var(--color-norma-text)]">Кейс {idx + 1}</span>
                    <span className="text-sm md:text-base font-medium text-[var(--color-norma-accent)] uppercase tracking-widest">{caseItem.source}</span>
                  </div>
                  <ChevronDown className={`text-[var(--color-norma-text)]/40 transition-transform duration-500 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} size={32} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 md:px-8 md:pb-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold tracking-widest text-[var(--color-norma-text)]/40 uppercase mb-3">С чем пришёл</h4>
                        <p className="text-lg text-[var(--color-norma-text)]/80 leading-relaxed font-light">{caseItem.cameWith}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold tracking-widest text-[var(--color-norma-text)]/40 uppercase mb-3">Что поддерживало состояние</h4>
                        <p className="text-lg text-[var(--color-norma-text)]/80 leading-relaxed font-light">{caseItem.supportedBy}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold tracking-widest text-[var(--color-norma-text)]/40 uppercase mb-3">Что происходило в работе</h4>
                        <p className="text-lg text-[var(--color-norma-text)]/80 leading-relaxed font-light">{caseItem.inWork}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold tracking-widest text-[var(--color-norma-accent)] uppercase mb-3">Изменения</h4>
                        <p className="text-lg text-[var(--color-norma-text)] font-medium leading-relaxed">{caseItem.changes}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
