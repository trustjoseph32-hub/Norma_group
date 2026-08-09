const fs = require('fs');
const path = require('path');

const write = (filepath, content) => {
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content.trim() + '\n', 'utf8');
  console.log('Wrote', filepath);
};

write('src/App.tsx', `
import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { ForWhom } from './components/sections/ForWhom';
import { Mechanism } from './components/sections/Mechanism';
import { WhatHappens } from './components/sections/WhatHappens';
import { WhyGroup } from './components/sections/WhyGroup';
import { FormatDynamics } from './components/sections/FormatDynamics';
import { Therapist } from './components/sections/Therapist';
import { ApplicationSection } from './components/sections/ApplicationSection';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-norma-bg)] text-[var(--color-norma-text)] font-body selection:bg-[var(--color-norma-accent)]/20">
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Mechanism />
        <WhatHappens />
        <WhyGroup />
        <FormatDynamics />
        <Therapist />
        <ApplicationSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
`);

write('src/components/sections/Header.tsx', `
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowMobileCTA(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Для кого', href: '#audience' },
    { label: 'Механизм', href: '#mechanism' },
    { label: 'Формат', href: '#format' },
    { label: 'Ведущий', href: '#therapist' },
    { label: 'Вопросы', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
          isScrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }\`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wide text-[var(--color-norma-text)]">НОРМА</span>
            <span className="text-xs text-[var(--color-norma-text)]/70 uppercase tracking-widest font-semibold mt-0.5">Терапевтическая группа</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-base font-medium text-[var(--color-norma-text)]/80 hover:text-[var(--color-norma-text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Обсудить мой запрос
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden p-2 -mr-2 text-[var(--color-norma-text)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#F9F8F6] border-t border-black/5 shadow-lg shadow-black/5 py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-base font-medium text-[var(--color-norma-text)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button fullWidth onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Обсудить мой запрос
              </Button>
            </div>
          </div>
        )}
      </header>
      
      {/* Mobile Sticky CTA */}
      <div className={\`xl:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 \${showMobileCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}\`}>
        <Button fullWidth className="shadow-lg" size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
          Обсудить мой запрос
        </Button>
      </div>
    </>
  );
};
`);

write('src/components/sections/Hero.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative border-b border-black/5">
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-[var(--color-norma-accent)]/10 rounded-full opacity-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-[var(--color-norma-accent)]/10 rounded-full opacity-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-norma-accent-light)] rounded-full blur-[80px] opacity-40 -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm md:text-base font-semibold tracking-wider text-[var(--color-norma-accent)] uppercase">
            Закрытая терапевтическая группа · 8 недель
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[var(--color-norma-text)] leading-tight max-w-[20ch] mx-auto">
            Разобрать и начать менять цикл, который снова возвращает вас к тревоге и истощению
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 max-w-[60ch] mx-auto leading-relaxed">
            «НОРМА» — группа для тех, кто долго держится, контролирует себя и обстоятельства, а затем остаётся без сил, сна, интереса и возможности расслабиться.
          </p>
          
          <div className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/5 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/90 font-medium leading-relaxed">
              Мы не будем учиться просто «успокаиваться». Мы будем разбирать, что запускает ваше состояние, чем оно поддерживается и где можно начать реагировать иначе.
            </p>
          </div>
          
          {/* Parameters */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-4 pb-4 max-w-3xl mx-auto text-base md:text-lg text-[var(--color-norma-text)]/80 font-medium">
            <span>8 недель</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span>8–12 участников</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span>1 встреча в неделю</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span>24 000 ₽</span>
          </div>
          
          <div className="flex flex-col items-center space-y-4 pt-4">
            <Button size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Обсудить мой запрос
            </Button>
            
            <p className="text-sm md:text-base text-[var(--color-norma-text)]/60 max-w-[50ch] leading-relaxed text-center mt-3">
              Короткая заявка и предварительное собеседование. Это не обязывает участвовать.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/ForWhom.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const theses = [
  "Тревога стала постоянным внутренним фоном",
  "Вы пытаетесь контролировать риски, тело, близких и будущее",
  "На фоне напряжения ухудшаются сон и физическое состояние",
  "После долгой мобилизации приходят апатия, раздражение или истощение"
];

export const ForWhom: React.FC = () => {
  return (
    <Section id="audience" className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-12">
            Вы живёте в этом цикле, если:
          </h2>
          
          <div className="space-y-6 mb-12">
            {theses.map((thesis, idx) => (
              <div key={idx} className="flex items-start gap-4 border-b border-black/5 pb-6 last:border-0 last:pb-0">
                <span className="text-[var(--color-norma-accent)] mt-2 shrink-0 w-2 h-2 rounded-full bg-current" />
                <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/90 leading-tight">
                  {thesis}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-[var(--color-norma-accent-light)]/40 p-8 md:p-10 rounded-2xl border-l-4 border-[var(--color-norma-accent)] mt-12">
            <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/90 leading-relaxed font-medium">
              Это не слабость и не отсутствие дисциплины. Это устойчивый способ реагирования, который со временем начинает поддерживать сам себя.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/Mechanism.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { ArrowDown, PlayCircle } from 'lucide-react';

const cycleSteps = [
  "Тревога",
  "Контроль",
  "Телесное напряжение",
  "Истощение",
  "Апатия",
  "Самокритика"
];

export const Mechanism: React.FC = () => {
  return (
    <Section id="mechanism" className="bg-[var(--color-norma-text)] text-[var(--color-norma-bg)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Это не несколько случайных проблем. Это один цикл
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-[55ch]">
              Пока человек борется с каждым симптомом отдельно, общий механизм продолжает работать. На группе мы будем искать точки, в которых именно ваш цикл можно начать менять.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-[var(--color-norma-bg)]/5 aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
                <PlayCircle className="text-white opacity-80 group-hover:scale-110 transition-transform mb-4" size={64} strokeWidth={1} />
                <h3 className="text-white font-medium text-lg">
                  Почему тревога и истощение работают как единый механизм
                </h3>
              </div>
            </div>
          </div>
          
          <div className="relative py-8 flex justify-center lg:justify-end">
            <div className="flex flex-col items-center w-full max-w-sm space-y-3 relative z-10">
              {cycleSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full bg-[var(--color-norma-bg)]/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 text-center relative z-10">
                    <span className="font-medium text-white text-lg md:text-xl">{step}</span>
                  </div>
                  <div className="h-6 flex items-center justify-center relative z-0">
                    <ArrowDown className="text-white/30" size={24} />
                  </div>
                </React.Fragment>
              ))}
              <div className="w-full bg-[var(--color-norma-accent)] text-white px-6 py-4 rounded-xl text-center relative z-10 shadow-lg">
                <span className="font-medium text-lg md:text-xl">Новый виток тревоги</span>
              </div>
              
              {/* Return arrow line */}
              <div className="absolute left-[-20px] sm:left-[-40px] top-[30px] bottom-[30px] w-5 sm:w-10 border-l-2 border-t-2 border-b-2 border-white/20 rounded-l-3xl hidden sm:flex items-center justify-center pointer-events-none">
                <div className="absolute -top-[6px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-white/20 transform rotate-45 translate-x-[5px]" />
                <span className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-white/50 whitespace-nowrap tracking-wide">
                  возвращение к тревоге
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/WhatHappens.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const blocks = [
  {
    title: "Разберём ваш индивидуальный механизм",
    desc: "Триггеры, контроль, избегание, телесные реакции и путь к истощению."
  },
  {
    title: "Начнём менять привычную реакцию",
    desc: "Терапевтическая работа, когнитивные, телесные и поведенческие методы, наблюдения и действия между встречами."
  },
  {
    title: "Будем закреплять изменения в группе",
    desc: "Обратная связь, опыт других участников и формирование группового ресурса."
  }
];

export const WhatHappens: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-16">
            За восемь недель мы сделаем три вещи:
          </h2>
          
          <div className="space-y-12 mb-20">
            {blocks.map((block, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="text-[var(--color-norma-accent-light)] font-display font-bold text-7xl md:text-8xl leading-none select-none shrink-0 w-24">
                  0{idx + 1}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-norma-text)] mb-4">{block.title}</h3>
                  <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed max-w-[60ch]">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[var(--color-norma-bg)] p-8 md:p-10 rounded-3xl border border-black/5">
            <h3 className="text-xl md:text-2xl font-medium mb-6">В состав программы входят:</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-base md:text-lg text-[var(--color-norma-text)]/80 font-medium">
              <span className="flex items-center gap-2"><span className="text-[var(--color-norma-accent)]">•</span> 8 живых встреч</span>
              <span className="flex items-center gap-2"><span className="text-[var(--color-norma-accent)]">•</span> Индивидуальная карта состояния и целей</span>
              <span className="flex items-center gap-2"><span className="text-[var(--color-norma-accent)]">•</span> Еженедельный бриф</span>
              <span className="flex items-center gap-2"><span className="text-[var(--color-norma-accent)]">•</span> 3 коротких видео</span>
              <span className="flex items-center gap-2"><span className="text-[var(--color-norma-accent)]">•</span> Закрытый чат</span>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/WhyGroup.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const mechanisms = [
  { title: "Узнавание", desc: "Видеть свои реакции в опыте других." },
  { title: "Обратная связь", desc: "Замечать то, что не видно изнутри." },
  { title: "Совместное движение", desc: "Пробовать новое, опираясь на группу." },
  { title: "Закрепление", desc: "Видеть динамику, а не один сложный день." }
];

export const WhyGroup: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-text)] text-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-10 text-[var(--color-norma-bg)]">
            Индивидуальную проблему не всегда можно изменить в одиночку
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-16 max-w-[65ch]">
            В группе становятся видны привычные способы молчать, контролировать, подстраиваться, избегать, обесценивать себя и не принимать поддержку. Другие участники не просто слушают вашу историю — они помогают увидеть то, что невозможно увидеть изнутри.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {mechanisms.map((mech, idx) => (
              <div key={idx} className="border-t border-white/20 pt-6">
                <h3 className="text-lg md:text-xl font-medium text-[var(--color-norma-bg)] mb-3">{mech.title}</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">{mech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/FormatDynamics.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const formatPoints = [
  "Живая встреча раз в неделю",
  "2 часа с перерывом 10 минут",
  "Индивидуальный запрос",
  "Короткий еженедельный отчёт",
  "Наблюдения и действия между встречами",
  "Курирующее сопровождение в чате"
];

const trackingPoints = [
  "Интенсивность тревоги",
  "Качество сна",
  "Уровень энергии",
  "Телесные реакции",
  "Избегание",
  "Возвращение к повседневным действиям"
];

export const FormatDynamics: React.FC = () => {
  const [routeOpen, setRouteOpen] = useState(false);

  return (
    <Section id="format" className="bg-[var(--color-norma-bg)]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-10">
                Как устроена работа
              </h2>
              
              <ul className="space-y-4 mb-10">
                {formatPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[var(--color-norma-accent)] mt-2 shrink-0 w-2 h-2 rounded-full bg-current" />
                    <span className="text-lg md:text-xl text-[var(--color-norma-text)]/90 leading-tight">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Accordion */}
              <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden mt-8">
                <button 
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setRouteOpen(!routeOpen)}
                >
                  <span className="font-medium text-lg md:text-xl text-[var(--color-norma-text)]">Посмотреть маршрут восьми недель</span>
                  <ChevronDown className={\`text-[var(--color-norma-accent)] transition-transform duration-300 \${routeOpen ? 'rotate-180' : ''}\`} size={24} />
                </button>
                <div className={\`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out \${routeOpen ? 'max-h-[800px] pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'}\`}>
                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-black/5">
                    <div>
                      <h4 className="font-medium text-[var(--color-norma-accent)] mb-2">Недели 1–2</h4>
                      <p className="text-base md:text-lg text-[var(--color-norma-text)]/80">Увидеть механизм</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-norma-accent)] mb-2">Недели 3–4</h4>
                      <p className="text-base md:text-lg text-[var(--color-norma-text)]/80">Понять реакции тела и эмоций</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-norma-accent)] mb-2">Недели 5–6</h4>
                      <p className="text-base md:text-lg text-[var(--color-norma-text)]/80">Выйти из истощения и избегания</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-norma-accent)] mb-2">Недели 7–8</h4>
                      <p className="text-base md:text-lg text-[var(--color-norma-text)]/80">Закрепить свою систему</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm h-full">
                <h3 className="text-2xl font-display font-medium mb-6">Что мы будем отслеживать</h3>
                
                <ul className="space-y-3 mb-8 border-b border-black/5 pb-8">
                  {trackingPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-[var(--color-norma-accent)]/50 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                      <span className="text-base md:text-lg text-[var(--color-norma-text)]/80">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 leading-relaxed italic">
                  «Мы не будем оценивать работу только по ощущению „сегодня мне лучше или хуже“. У каждого участника будут свои наблюдаемые критерии динамики».
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/Therapist.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { groupConfig } from '../../config/groupConfig';

export const Therapist: React.FC = () => {
  return (
    <Section id="therapist" className="bg-white border-y border-black/5">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">
                Группу ведёт {groupConfig.therapistName}
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)]/90">Клинический психолог</p>
                <p className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)]/90">Более 10 лет частной практики</p>
                <p className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)]/90">Опыт индивидуальной и групповой терапии</p>
              </div>
              
              <div className="space-y-2 mb-10 text-base md:text-lg text-[var(--color-norma-text)]/60">
                <p>Подготовка в НИИ имени В. М. Бехтерева, гипнотерапевт NGH.</p>
                <p>В работе использует КПТ, EMDR/ДПДГ, гипнотерапию и телесно-дыхательные методы.</p>
              </div>
              
              <div className="bg-[var(--color-norma-bg)] p-6 md:p-8 rounded-2xl border-l-4 border-[var(--color-norma-accent)] relative">
                <p className="text-lg md:text-xl text-[var(--color-norma-text)]/90 leading-relaxed font-medium italic">
                  «Когда участники начинают видеть себя в опыте друг друга, давать честную обратную связь и замечать изменения, группа становится самостоятельным терапевтическим фактором».
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-norma-accent-light)] flex items-center justify-center shadow-lg border border-black/5">
                {/* Image Placeholder 4:5 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-norma-text)]/40 border-2 border-dashed border-[var(--color-norma-text)]/20 m-6 rounded-2xl">
                  <span className="font-medium text-lg">Фотография ведущего</span>
                  <span className="text-sm mt-2 font-mono">4:5 ratio</span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Mini-cases (Example placeholders) */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-black/5">
            <div className="bg-[var(--color-norma-bg)] p-8 rounded-2xl border border-black/5">
              <h3 className="font-medium text-lg md:text-xl mb-4">Случай из практики: постоянное напряжение</h3>
              <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 leading-relaxed mb-4">
                <strong>С чем пришёл:</strong> Постоянное ожидание худшего, невозможность расслабиться, плохой сон.<br/>
                <strong>Что поддерживало:</strong> Попытки контролировать всё вокруг, чтобы избежать тревоги.<br/>
                <strong>Изменения:</strong> Увидел цикл, научился останавливать контроль, сон стал восстанавливаться.
              </p>
            </div>
            <div className="bg-[var(--color-norma-bg)] p-8 rounded-2xl border border-black/5">
              <h3 className="font-medium text-lg md:text-xl mb-4">Случай из практики: выгорание и апатия</h3>
              <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 leading-relaxed mb-4">
                <strong>С чем пришёл:</strong> Периодические провалы в апатию, отсутствие сил, чувство вины за бездействие.<br/>
                <strong>Что поддерживало:</strong> Долгое терпение, игнорирование усталости и жестокая самокритика.<br/>
                <strong>Изменения:</strong> Снижение самокритики, появление сил на повседневные дела, умение отдыхать без вины.
              </p>
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/ApplicationSection.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';
import { CheckCircle } from 'lucide-react';

export const ApplicationSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    concern: '',
    consentData: false
  });

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
    <Section id="application" className="bg-[var(--color-norma-bg)]">
      <Container>
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-10">
                Формат, стоимость и участие
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl text-[var(--color-norma-text)]/90 font-medium mb-10">
                <p>8 недель • 8 встреч</p>
                <p>8–12 участников</p>
                <p>Закрытая группа • Онлайн</p>
                <p className="text-2xl md:text-3xl font-display pt-4">24 000 ₽</p>
                <p className="text-base md:text-lg text-[var(--color-norma-text)]/60 font-normal">или два платежа по 12 000 ₽</p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium mb-6">Путь участия:</h3>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-[var(--color-norma-text)] font-medium flex items-center justify-center shrink-0 border border-black/10">1</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium mb-1">Оставить короткую заявку</h4>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-[var(--color-norma-text)] font-medium flex items-center justify-center shrink-0 border border-black/10">2</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium mb-1">Обсудить запрос</h4>
                    <p className="text-base md:text-lg text-[var(--color-norma-text)]/70">Знакомимся на коротком созвоне и определяем, будет ли группа полезна.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white text-[var(--color-norma-text)] font-medium flex items-center justify-center shrink-0 border border-black/10">3</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-medium mb-1">Подтвердить участие</h4>
                    <p className="text-base md:text-lg text-[var(--color-norma-text)]/70 mb-2">Оплатить и закрепить место.</p>
                    <p className="text-sm md:text-base text-[var(--color-norma-text)]/60">После подтверждения участник заполняет опросник для карты состояния и целей.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-[var(--color-norma-accent)] mb-6" size={64} strokeWidth={1} />
                  <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">Заявка отправлена</h3>
                  <p className="text-base md:text-lg text-[var(--color-norma-text)]/80">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-medium mb-6">Оставить заявку</h3>
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-base font-medium">Имя <span className="text-red-500">*</span></label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base md:text-lg" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contact" className="block text-base font-medium">Telegram или телефон <span className="text-red-500">*</span></label>
                    <input required type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base md:text-lg" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="concern" className="block text-base font-medium">Кратко: что беспокоит сильнее всего <span className="text-red-500">*</span></label>
                    <textarea required id="concern" name="concern" rows={4} value={formData.concern} onChange={handleChange} className="w-full bg-[var(--color-norma-bg)] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[var(--color-norma-accent)] resize-none text-base md:text-lg" />
                  </div>
                  
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="consentData" required checked={formData.consentData} onChange={handleChange} className="mt-1 w-5 h-5 rounded text-[var(--color-norma-accent)] focus:ring-[var(--color-norma-accent)] border-black/20" />
                      <span className="text-sm md:text-base text-[var(--color-norma-text)]/70">
                        Согласие на <a href={groupConfig.dataProcessingConsentUrl} className="underline">обработку данных</a>.
                      </span>
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" size="lg" fullWidth disabled={status === 'submitting' || !formData.consentData}>
                      {status === 'submitting' ? 'Отправка...' : 'Обсудить мой запрос'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

write('src/components/sections/FAQ.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Нужен ли диагноз для участия?",
    a: "Наличие диагноза не обязательно. Мы отталкиваемся от вашего актуального состояния, симптомов и запроса, а не от клинических ярлыков."
  },
  {
    q: "Можно ли участвовать, если я принимаю препараты?",
    a: "Да. Медикаментозная поддержка часто сочетается с психотерапией. Важно упомянуть об этом на предварительном собеседовании."
  },
  {
    q: "Можно ли совмещать группу с индивидуальной терапией?",
    a: "Да, это возможно и часто усиливает эффект, если ваш индивидуальный терапевт не возражает против параллельной групповой работы."
  },
  {
    q: "Что делать, если я пропущу встречу?",
    a: "Пропущенные участником встречи не переносятся и не компенсируются. При отмене со стороны ведущего встреча переносится на другую дату."
  },
  {
    q: "Записываются ли встречи?",
    a: "Нет, для обеспечения безопасности и конфиденциальности мы не ведём видео- и аудиозапись групповых сессий."
  },
  {
    q: "Какие границы общения в чате?",
    a: "Чат предназначен для организационных вопросов, сдачи еженедельных брифов и коротких уточнений. Он не заменяет терапевтическую сессию. Ответы ведущего — дважды в день."
  },
  {
    q: "Когда группа может не подойти?",
    a: "Группа не рекомендуется при остром психотическом состоянии, активной химической зависимости, высоком суицидальном риске или потребности в экстренной помощи. Если вам нужен другой формат, мы обсудим это на собеседовании."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" className="bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
            Частые вопросы
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[var(--color-norma-bg)] rounded-2xl border border-black/5 overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => toggle(idx)}
                >
                  <span className="font-medium text-lg md:text-xl text-[var(--color-norma-text)] pr-4">{faq.q}</span>
                  <ChevronDown className={\`text-[var(--color-norma-accent)] transition-transform duration-300 shrink-0 \${openIndex === idx ? 'rotate-180' : ''}\`} size={24} />
                </button>
                <div className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${openIndex === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}\`}>
                  <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 pt-2 border-t border-black/5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

