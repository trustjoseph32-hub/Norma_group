const fs = require('fs');
const path = require('path');

const write = (filepath, content) => {
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content.trim() + '\n', 'utf8');
  console.log('Wrote', filepath);
};

// ... the first batch ...

// index.css
write('src/index.css', `
@import "tailwindcss";

@theme {
  --font-display: "Playfair Display", serif;
  --font-body: "Plus Jakarta Sans", sans-serif;

  --color-norma-bg: #F9F8F6;
  --color-norma-text: #1C2A29;
  --color-norma-accent: #4A6760;
  --color-norma-accent-light: #E8EDE9;
  --color-norma-terracotta: #C17767;
}

@layer base {
  body {
    background-color: var(--color-norma-bg);
    color: var(--color-norma-text);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 17px;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
  }
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`);

// App.tsx
write('src/App.tsx', `
import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Recognition } from './components/sections/Recognition';
import { AnxietyCycle } from './components/sections/AnxietyCycle';
import { MeaningOfNorma } from './components/sections/MeaningOfNorma';
import { GroupResource } from './components/sections/GroupResource';
import { IndividualRoute } from './components/sections/IndividualRoute';
import { ProgramTimeline } from './components/sections/ProgramTimeline';
import { MeetingStructure } from './components/sections/MeetingStructure';
import { Outcomes } from './components/sections/Outcomes';
import { Therapist } from './components/sections/Therapist';
import { AudienceFit } from './components/sections/AudienceFit';
import { Pricing } from './components/sections/Pricing';
import { EnrollmentSteps } from './components/sections/EnrollmentSteps';
import { ApplicationForm } from './components/sections/ApplicationForm';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-norma-bg)] text-[var(--color-norma-text)] font-body selection:bg-[var(--color-norma-accent)]/20">
      <Header />
      <main>
        <Hero />
        <Recognition />
        <AnxietyCycle />
        <MeaningOfNorma />
        <GroupResource />
        <IndividualRoute />
        <ProgramTimeline />
        <MeetingStructure />
        <Outcomes />
        <Therapist />
        <AudienceFit />
        <Pricing />
        <EnrollmentSteps />
        <ApplicationForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
`);

// components/sections/Header.tsx
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
    { label: 'Как проходит работа', href: '#how-it-works' },
    { label: 'Ведущий', href: '#therapist' },
    { label: 'Формат', href: '#format' },
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
              Понять, подходит ли мне группа
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
                Понять, подходит ли мне группа
              </Button>
            </div>
          </div>
        )}
      </header>
      
      {/* Mobile Sticky CTA */}
      <div className={\`xl:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 \${showMobileCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}\`}>
        <Button fullWidth className="shadow-lg" size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
          Понять, подходит ли мне группа
        </Button>
      </div>
    </>
  );
};
`);

// components/sections/Hero.tsx
write('src/components/sections/Hero.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-[var(--color-norma-accent)]/10 rounded-full opacity-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-[var(--color-norma-accent)]/10 rounded-full opacity-50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-norma-accent-light)] rounded-full blur-[80px] opacity-40 -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-sm md:text-base font-semibold tracking-wider text-[var(--color-norma-accent)] uppercase">
            Закрытая терапевтическая онлайн-группа · {groupConfig.durationWeeks} недель
          </p>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/70 font-medium max-w-[60ch] mx-auto">
              Когда тревога не отпускает, а после длительного напряжения всё чаще наступает истощение
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[var(--color-norma-text)] leading-tight max-w-[20ch] mx-auto">
              Вернуться в состояние, в котором не приходится всё время справляться с собой
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 max-w-[65ch] mx-auto leading-relaxed">
            Группа «НОРМА» для тех, кого изматывает тревога, чьё тело реагирует на постоянное напряжение, и кто снова проваливается в апатию или выгорание.
          </p>
          
          {/* Parameters row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4 pb-2 max-w-3xl mx-auto">
            {[
              \`\${groupConfig.durationWeeks} недель\`,
              groupConfig.meetingFrequency,
              groupConfig.meetingDuration,
              groupConfig.groupSize,
              groupConfig.format,
              'Индивидуальная карта состояния и целей'
            ].map((param, i) => (
              <div key={i} className="flex items-center text-sm md:text-base text-[var(--color-norma-text)]/80 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">
                {param}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center space-y-4 pt-6">
            <div className="flex flex-col items-center">
              <Button size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
                Понять, подходит ли мне группа
              </Button>
              <span className="text-sm text-[var(--color-norma-text)]/60 mt-3 font-medium">
                Короткая заявка и предварительное собеседование
              </span>
            </div>
            
            <p className="text-sm text-[var(--color-norma-text)]/60 max-w-[50ch] leading-relaxed text-center mt-2">
              Заполнение короткой заявки не обязывает участвовать. После неё мы договоримся о предварительном собеседовании.
            </p>
            <a 
              href="#how-it-works" 
              className="mt-6 inline-block text-base font-medium text-[var(--color-norma-accent)] hover:text-[var(--color-norma-text)] transition-colors underline underline-offset-4"
            >
              Как будет проходить работа
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/Recognition.tsx
write('src/components/sections/Recognition.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const quotes = [
  "Даже когда объективно всё нормально, я не могу полностью расслабиться.",
  "Я постоянно прокручиваю возможные проблемы и пытаюсь всё предусмотреть.",
  "На фоне напряжения начинает реагировать тело, и это пугает меня ещё сильнее.",
  "Я долго держусь, а потом будто выключаюсь: нет сил, желаний и интереса.",
  "Отдых не помогает — я либо продолжаю тревожиться, либо виню себя за бездействие.",
  "Мне становится лучше, но через некоторое время всё повторяется."
];

export const Recognition: React.FC = () => {
  return (
    <Section id="audience" className="bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
          Возможно, вы узнаете себя
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {quotes.map((quote, idx) => (
            <div 
              key={idx} 
              className="bg-[var(--color-norma-bg)] p-6 md:p-8 rounded-2xl flex flex-col justify-center border border-black/5"
            >
              <p className="text-[var(--color-norma-text)]/90 leading-relaxed text-base md:text-lg font-medium">
                «{quote}»
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed bg-[var(--color-norma-accent-light)]/50 p-6 md:p-8 rounded-xl max-w-[70ch] mx-auto">
            Это может выглядеть как несколько разных проблем. Но нередко тревога, телесные реакции, апатия и выгорание оказываются частями одного повторяющегося механизма.
          </p>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/AnxietyCycle.tsx
write('src/components/sections/AnxietyCycle.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { ArrowDown } from 'lucide-react';

const cycleSteps = [
  "Тревога и ожидание угрозы",
  "Контроль и попытка всё предусмотреть",
  "Телесное напряжение и нарушение сна",
  "Истощение",
  "Апатия, раздражительность или подавленность",
  "Самокритика и попытка снова заставить себя"
];

export const AnxietyCycle: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Почему это снова повторяется
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed mb-10 max-w-[65ch]">
              Человек может пытаться отдельно бороться с тревожными мыслями, бессонницей, телесными симптомами или отсутствием сил. В группе мы исследуем не только отдельные проявления, но и механизм, который связывает их между собой и поддерживает именно ваше состояние.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-[var(--color-norma-text)] aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-xl max-w-lg">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
                <h3 className="text-white font-medium text-lg max-w-sm leading-snug">
                  Почему тревога, телесные реакции и истощение могут поддерживать один повторяющийся цикл
                </h3>
              </div>
            </div>
          </div>
          
          <div className="relative py-4">
            {/* Cycle Visualization */}
            <div className="flex flex-col items-center max-w-md mx-auto space-y-2 relative">
              {cycleSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full bg-white px-6 py-4 rounded-xl shadow-sm border border-black/5 text-center relative z-10">
                    <span className="font-medium text-[var(--color-norma-text)] text-base md:text-lg">{step}</span>
                  </div>
                  <div className="h-6 flex items-center justify-center relative z-0">
                    <ArrowDown className="text-[var(--color-norma-accent)]/50" size={24} />
                  </div>
                </React.Fragment>
              ))}
              <div className="w-full bg-[var(--color-norma-accent-light)] px-6 py-4 rounded-xl border border-[var(--color-norma-accent)]/20 text-center relative z-10">
                <span className="font-medium text-[var(--color-norma-accent)] text-base md:text-lg">Новый виток тревоги</span>
              </div>
              
              {/* Return arrow line */}
              <div className="absolute left-[-24px] top-[28px] bottom-[28px] w-8 border-l-2 border-t-2 border-b-2 border-[var(--color-norma-accent)]/30 rounded-l-2xl hidden sm:block pointer-events-none">
                <div className="absolute -top-[5px] right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--color-norma-accent)]/30 transform rotate-45 translate-x-[4px]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/MeaningOfNorma.tsx
write('src/components/sections/MeaningOfNorma.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

export const MeaningOfNorma: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">
            Не соответствовать чужой норме, а вернуться к своей
          </h2>
          
          <p className="text-xl md:text-2xl text-[var(--color-norma-text)]/90 leading-relaxed mb-10 max-w-[65ch] mx-auto">
            «НОРМА» — это не состояние, в котором человек всегда спокоен, продуктивен и доволен собой. Это способность переживать напряжение, восстанавливаться после нагрузки, принимать решения и участвовать в собственной жизни, не расходуя большую часть сил на борьбу с собой.
          </p>
          
          <div className="bg-[var(--color-norma-accent-light)]/40 p-8 md:p-10 rounded-2xl border-l-4 border-[var(--color-norma-accent)] inline-block text-left">
            <p className="text-lg md:text-xl text-[var(--color-norma-text)]/90 leading-relaxed font-medium">
              Результатом становится не идеальное состояние, а увеличение управляемости: я лучше понимаю происходящее со мной и могу раньше влиять на собственный цикл.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/GroupResource.tsx
write('src/components/sections/GroupResource.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const steps = [
  {
    num: "01",
    title: "Узнавание",
    text: "Вижу собственные реакции в историях других и перестаю считать себя неправильным."
  },
  {
    num: "02",
    title: "Обратная связь",
    text: "Другие замечают то, что я привык не видеть, рационализировать или обесценивать."
  },
  {
    num: "03",
    title: "Совместное движение",
    text: "Когда один решается на новое действие, группе легче пробовать собственные изменения."
  },
  {
    num: "04",
    title: "Закрепление",
    text: "Группа помогает замечать путь и не оценивать весь процесс по одному сложному дню."
  }
];

export const GroupResource: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Почему группа усиливает индивидуальную работу
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 h-full relative overflow-hidden group hover:border-[var(--color-norma-accent)]/30 transition-colors">
              <div className="text-6xl font-display font-bold text-[var(--color-norma-accent-light)] absolute -top-4 -right-4 opacity-50 select-none">
                {step.num}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-norma-text)] mb-4 relative z-10">{step.title}</h3>
              <p className="text-[var(--color-norma-text)]/80 text-base md:text-lg leading-relaxed relative z-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl font-display font-medium text-[var(--color-norma-text)] leading-relaxed">
            Общий терапевтический процесс создаёт условия, в которых индивидуальные изменения могут закрепляться быстрее и устойчивее.
          </p>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/IndividualRoute.tsx
write('src/components/sections/IndividualRoute.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  "Письменно описывает свой запрос",
  "Проходит психологическое тестирование",
  "Проходит короткое собеседование",
  "Получает карту состояния и целей",
  "Определяет наблюдаемые признаки изменений"
];

const mapItems = [
  "проявления тревоги и подавленности",
  "телесные реакции",
  "триггеры",
  "способы контроля и избегания",
  "сон, энергия и активность",
  "ресурсы",
  "критерии изменений"
];

export const IndividualRoute: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Общая группа — индивидуальная карта состояния и целей
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-norma-text)]/80 leading-relaxed mb-2">
            До начала группы каждый участник:
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-[var(--color-norma-bg)] rounded-xl border border-black/5 items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--color-norma-accent)] text-white flex items-center justify-center shrink-0 font-medium text-sm">
                  {idx + 1}
                </div>
                <p className="text-[var(--color-norma-text)]/90 text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-[var(--color-norma-text)] text-white p-8 md:p-10 rounded-2xl h-full flex flex-col justify-center shadow-xl">
              <h3 className="text-2xl font-display mb-6 text-[var(--color-norma-bg)]">
                В карте фиксируются:
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {mapItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--color-norma-accent)] shrink-0 mt-1" size={20} />
                    <span className="text-white/90 text-base md:text-lg leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-white/20 pt-6">
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Карта формируется на основе запроса и психологического тестирования. Она не является медицинским диагнозом, а помогает удерживать индивидуальные цели и отслеживать динамику.
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

// components/sections/ProgramTimeline.tsx
write('src/components/sections/ProgramTimeline.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Users, FilePieChart, PlayCircle, NotebookPen } from 'lucide-react';

const elements = [
  { icon: <Users size={28} />, title: "Живые терапевтические встречи" },
  { icon: <FilePieChart size={28} />, title: "Карта состояния и еженедельная динамика" },
  { icon: <PlayCircle size={28} />, title: "Короткие объясняющие видео" },
  { icon: <NotebookPen size={28} />, title: "Наблюдения и эксперименты между встречами" }
];

const stages = [
  {
    weeks: "Недели 1–2",
    title: "Увидеть свой механизм",
    video: "Почему тревога сохраняется"
  },
  {
    weeks: "Недели 3–4",
    title: "Понять реакции тела и эмоций",
    video: "Как напряжение связано с телесными симптомами"
  },
  {
    weeks: "Недели 5–6",
    title: "Выйти из истощения и избегания",
    video: "Почему после длительной мобилизации наступает истощение"
  },
  {
    weeks: "Недели 7–8",
    title: "Закрепить свою систему",
    video: null
  }
];

export const ProgramTimeline: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-10">
            Как устроена работа за восемь недель
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {elements.map((el, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-black/5 flex flex-col items-center text-center gap-3">
                <div className="text-[var(--color-norma-accent)]">{el.icon}</div>
                <span className="text-sm md:text-base font-medium text-[var(--color-norma-text)]/90 leading-tight">{el.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="text-8xl font-display font-bold text-[var(--color-norma-accent)]">
                  {idx + 1}
                </span>
              </div>
              
              <span className="inline-block px-3 py-1 bg-[var(--color-norma-accent-light)] text-[var(--color-norma-accent)] text-sm font-medium rounded-full mb-4 w-fit">
                {stage.weeks}
              </span>
              <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-6 font-display relative z-10">
                {stage.title}
              </h3>
              
              {stage.video && (
                <div className="mt-auto bg-[var(--color-norma-bg)] p-4 rounded-xl border border-[var(--color-norma-accent)]/10 flex items-start gap-3 relative z-10">
                  <PlayCircle className="text-[var(--color-norma-accent)] shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="text-xs text-[var(--color-norma-text)]/60 font-medium mb-1 uppercase tracking-wider">Видео</div>
                    <div className="text-sm md:text-base text-[var(--color-norma-text)]/90 leading-tight font-medium">{stage.video}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm md:text-base text-[var(--color-norma-text)]/60">
            Материалы доступны участникам во время прохождения группы.
          </p>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/MeetingStructure.tsx
write('src/components/sections/MeetingStructure.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const steps = [
  "Участник заполняет короткий бриф.",
  "При необходимости смотрит видео до 10 минут.",
  "Приходит на двухчасовую групповую встречу.",
  "Определяет личное наблюдение или эксперимент.",
  "Фиксирует динамику и получает курирующее сопровождение в чате."
];

const meetingDetails = [
  { label: "Чек-ин", desc: "Короткое обозначение состояния" },
  { label: "Динамика", desc: "Обсуждение изменений и отчётов" },
  { label: "Терапевтическая работа", desc: "Разбор актуальных запросов" },
  { label: "Перерыв", desc: "10 минут" },
  { label: "Практика или эксперимент", desc: "Работа с реакциями" },
  { label: "Интеграция", desc: "Присвоение опыта" }
];

export const MeetingStructure: React.FC = () => {
  const [meetingOpen, setMeetingOpen] = useState(false);

  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
          Как проходит одна неделя участника
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-[var(--color-norma-bg)] rounded-xl border border-black/5 items-center">
                <div className="w-8 h-8 rounded-full bg-[var(--color-norma-accent-light)] text-[var(--color-norma-accent)] flex items-center justify-center shrink-0 font-medium">
                  {idx + 1}
                </div>
                <p className="text-[var(--color-norma-text)]/90 text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {/* Accordion for meeting structure */}
            <div className="bg-[var(--color-norma-bg)] rounded-2xl border border-[var(--color-norma-accent)]/20 shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setMeetingOpen(!meetingOpen)}
              >
                <span className="font-medium text-lg text-[var(--color-norma-text)]">Структура двухчасовой встречи</span>
                <ChevronDown className={\`text-[var(--color-norma-accent)] transition-transform duration-300 \${meetingOpen ? 'rotate-180' : ''}\`} size={24} />
              </button>
              <div className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${meetingOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}\`}>
                <ul className="space-y-3 pt-2 border-t border-black/5">
                  {meetingDetails.map((detail, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row sm:gap-2 text-sm md:text-base">
                      <span className="font-medium text-[var(--color-norma-text)] min-w-[180px]">{detail.label}:</span>
                      <span className="text-[var(--color-norma-text)]/70">{detail.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chat overview */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-medium text-lg mb-4 border-b border-black/5 pb-3">Поддержка в чате</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
                <div>
                  <p className="font-medium text-[var(--color-norma-text)]/80 mb-2">Входит в сопровождение:</p>
                  <ul className="space-y-2 text-[var(--color-norma-text)]/70">
                    <li>• бриф-отчёты и вопросы</li>
                    <li>• фиксация наблюдений</li>
                    <li>• организационные моменты</li>
                    <li>• ответы в 12:00 и 19:00 (мск)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-norma-terracotta)]/90 mb-2">Требует отдельной работы:</p>
                  <ul className="space-y-2 text-[var(--color-norma-text)]/70">
                    <li>• индивидуальная терапия</li>
                    <li>• кризисные консультации</li>
                    <li>• глубокая работа с травмой</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-[var(--color-norma-text)]/60 mt-6 pt-4 border-t border-black/5 leading-relaxed">
                Работа в чате не предполагает проведения индивидуальной терапии в переписке. Тема может быть вынесена на групповую встречу или разобрана в рамках отдельно оплачиваемой сессии.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/Outcomes.tsx
write('src/components/sections/Outcomes.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const outcomes = [
  {
    title: "В понимании себя",
    items: [
      "увидеть собственный повторяющийся цикл",
      "раньше замечать ухудшение",
      "лучше различать тревогу и реальную угрозу"
    ]
  },
  {
    title: "В состоянии",
    items: [
      "снизить общее внутреннее напряжение",
      "спокойнее относиться к части телесных ощущений",
      "вернуть часть энергии"
    ]
  },
  {
    title: "В поведении",
    items: [
      "уменьшить избегание",
      "вернуться к отдельным делам",
      "раньше останавливаться до истощения"
    ]
  },
  {
    title: "В дальнейшей жизни",
    items: [
      "сформировать систему саморегуляции",
      "знать свои уязвимые ситуации",
      "иметь план действий при ухудшении"
    ]
  }
];

export const Outcomes: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-y border-black/5">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">
          Возможные изменения
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {outcomes.map((group, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white p-6 rounded-2xl shadow-sm border border-black/5">
              <h3 className="text-xl md:text-2xl font-medium text-[var(--color-norma-text)] mb-6 border-b border-black/10 pb-4">
                {group.title}
              </h3>
              <ul className="space-y-4 flex-grow">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-norma-text)]/80 text-base md:text-lg leading-snug">
                    <span className="text-[var(--color-norma-accent)] mt-1 opacity-50 shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/Therapist.tsx
write('src/components/sections/Therapist.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';

const credentials = [
  "клинический психолог",
  "подготовка в НИИ имени В. М. Бехтерева",
  "гипнотерапевт NGH",
  "более 10 лет частной практики",
  "в работе использует КПТ, EMDR/ДПДГ, гипнотерапию и телесно-дыхательные методы",
  "опыт индивидуальной и групповой терапии"
];

export const Therapist: React.FC = () => {
  return (
    <Section id="therapist" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-8">
              Группу ведёт {groupConfig.therapistName}
            </h2>
            
            <ul className="space-y-3 mb-10">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--color-norma-text)]/90 text-base md:text-lg">
                  <span className="text-[var(--color-norma-accent)] mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-[var(--color-norma-bg)] p-6 md:p-8 rounded-2xl border border-black/5 relative mb-10">
              <p className="text-lg text-[var(--color-norma-text)]/90 leading-relaxed italic font-medium relative z-10">
                «В этой группе для меня важно не только работать с отдельными запросами, но и постепенно создавать общий ресурс. Когда участники начинают видеть себя в опыте друг друга, давать честную обратную связь и замечать изменения, группа становится самостоятельным терапевтическим фактором.»
              </p>
            </div>
            
            <Button size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Понять, подходит ли мне группа
            </Button>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-norma-accent-light)] flex items-center justify-center shadow-lg border border-black/5">
              {/* Image Placeholder 4:5 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-norma-text)]/40 border-2 border-dashed border-[var(--color-norma-text)]/20 m-6 rounded-2xl">
                <span className="font-medium text-lg">Фотография ведущего</span>
                <span className="text-sm mt-2 font-mono">4:5 ratio</span>
              </div>
              {/* <img src="/images/therapist.jpg" alt={groupConfig.therapistName} className="w-full h-full object-cover" /> */}
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

// -------------------------------------------------------------
// NEW BATCH
// -------------------------------------------------------------

// components/sections/AudienceFit.tsx
write('src/components/sections/AudienceFit.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';

const fitItems = [
  "тревожность стала постоянным фоном",
  "вы не можете прекратить мысленно контролировать риски",
  "тело реагирует на напряжение",
  "вы проживаете повторяющиеся эпизоды истощения",
  "прежние способы справляться перестали работать"
];

const contraindications = [
  "остром психотическом состоянии",
  "непосредственном риске причинения вреда себе",
  "маниакальном эпизоде",
  "тяжёлой зависимости в активной фазе",
  "состоянии, требующем срочной медицинской помощи"
];

export const AudienceFit: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-t border-black/5">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">
              Группа может подойти, если:
            </h2>
            <ul className="space-y-4">
              {fitItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[var(--color-norma-accent)] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-[var(--color-norma-text)]/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[var(--color-norma-accent-light)]/30 p-8 md:p-10 rounded-3xl border border-[var(--color-norma-accent)]/10">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8">
              Сначала может понадобиться другой формат:
            </h2>
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/90 mb-6 font-medium">
              Группа не является основным форматом помощи при:
            </p>
            <ul className="space-y-4 mb-8">
              {contraindications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--color-norma-text)]/80">
                  <span className="text-[var(--color-norma-text)]/40 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm md:text-base text-[var(--color-norma-text)]/70 leading-relaxed border-t border-[var(--color-norma-accent)]/20 pt-6">
              На предварительном собеседовании мы обсудим ваш запрос и определим, может ли группа быть полезна сейчас. Если другой формат будет безопаснее и эффективнее, мы открыто это обсудим.
            </p>
          </div>
          
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/Pricing.tsx
write('src/components/sections/Pricing.tsx', `
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
                  \`\${groupConfig.durationWeeks} недель\`,
                  \`\${groupConfig.meetingsCount} живых онлайн-встреч\`,
                  \`продолжительность — \${groupConfig.meetingDuration}\`,
                  \`закрытая группа (\${groupConfig.groupSize})\`,
                  \`индивидуальная диагностическая карта\`,
                  \`еженедельные бриф-отчёты\`,
                  \`три психообразовательных видео\`,
                  \`сопровождение в закрытом чате\`
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
                <p>Участие происходит по предоплате. Место закрепляется за участником на весь оплаченный период.</p>
                <p>Пропущенные встречи не переносятся (группа закрытая). При отмене встречи ведущим — она переносится на другую дату.</p>
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
`);

// components/sections/EnrollmentSteps.tsx
write('src/components/sections/EnrollmentSteps.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';

const steps = [
  {
    title: "Короткая заявка",
    desc: "Краткое описание запроса."
  },
  {
    title: "Тестирование",
    desc: "Формирование карты состояния."
  },
  {
    title: "Собеседование",
    desc: "Проверка, подходит ли формат."
  },
  {
    title: "Подтверждение участия",
    desc: "Оплата и закрепление места."
  }
];

export const EnrollmentSteps: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-bg)] border-t border-black/5">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">
          Как попасть в группу
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-black/5 relative shadow-sm">
                <div className="text-2xl font-display font-bold text-[var(--color-norma-accent)] mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg md:text-xl font-medium text-[var(--color-norma-text)] mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-[var(--color-norma-text)]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-[var(--color-norma-text)]/80 leading-relaxed mb-8 font-medium italic">
              Предварительное собеседование не является полноценной терапевтической консультацией.
            </p>
            
            <Button size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Понять, подходит ли мне группа
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/ApplicationForm.tsx
write('src/components/sections/ApplicationForm.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { groupConfig } from '../../config/groupConfig';
import { CheckCircle, Shield } from 'lucide-react';

export const ApplicationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    concern: '',
    preferredContact: 'telegram',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              Информация конфиденциальна.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-[var(--color-norma-bg)] p-6 md:p-10 rounded-3xl border border-black/5 shadow-sm">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-base font-medium text-[var(--color-norma-text)]">Имя <span className="text-red-500">*</span></label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact" className="block text-base font-medium text-[var(--color-norma-text)]">Телефон или Telegram <span className="text-red-500">*</span></label>
                <input required type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] text-base" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="concern" className="block text-base font-medium text-[var(--color-norma-text)]">Кратко: что беспокоит сильнее всего <span className="text-red-500">*</span></label>
              <textarea required id="concern" name="concern" rows={4} value={formData.concern} onChange={handleChange} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-norma-accent)] focus:ring-1 focus:ring-[var(--color-norma-accent)] resize-none text-base" />
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
                <input type="checkbox" name="consentData" required checked={formData.consentData} onChange={handleChange} className="mt-1.5 w-4 h-4 rounded text-[var(--color-norma-accent)] focus:ring-[var(--color-norma-accent)]" />
                <span className="text-sm md:text-base text-[var(--color-norma-text)]/70 leading-relaxed">
                  Я даю согласие на <a href={groupConfig.dataProcessingConsentUrl} className="underline hover:text-[var(--color-norma-text)]">обработку персональных данных</a> и принимаю <a href={groupConfig.privacyPolicyUrl} className="underline hover:text-[var(--color-norma-text)]">политику конфиденциальности</a>.
                </span>
              </label>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-base">
                Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.
              </div>
            )}

            <div className="pt-4 flex flex-col items-center">
              <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full md:w-auto min-w-[200px]">
                {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
              </Button>
              <p className="mt-4 text-sm md:text-base text-[var(--color-norma-text)]/60 text-center max-w-lg leading-relaxed">
                Отправка заявки не означает автоматическое зачисление. Сначала мы уточним запрос и договоримся о предварительном собеседовании.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/FAQ.tsx
write('src/components/sections/FAQ.tsx', `
import React, { useState } from 'react';
import { Container, Section } from '../ui/Layout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Нужен ли официальный диагноз?",
    a: "Нет. Важнее актуальное состояние и то, как оно влияет на вашу жизнь. При этом группа не заменяет медицинскую диагностику."
  },
  {
    q: "Можно ли участвовать, если я принимаю препараты?",
    a: "Да, если состояние позволяет участвовать в группе. Назначенные препараты нельзя отменять или изменять самостоятельно."
  },
  {
    q: "Можно ли совмещать группу с индивидуальной терапией?",
    a: "В большинстве случаев можно. Это обсуждается на предварительном собеседовании."
  },
  {
    q: "Придётся ли рассказывать группе всё?",
    a: "Нет. Участник сам регулирует степень открытости, но терапевтическая работа требует готовности постепенно говорить о значимых переживаниях."
  },
  {
    q: "Что будет, если я пропущу встречу?",
    a: "Пропущенные участником встречи не переносятся. Группа закрытая, а место закрепляется за участником на весь оплаченный период."
  },
  {
    q: "Будут ли записи встреч?",
    a: "Нет. Терапевтические встречи не записываются для сохранения строгой конфиденциальности."
  },
  {
    q: "Каковы границы работы в чате?",
    a: "Чат предназначен для отчётов, наблюдений, организационных вопросов и получения короткой обратной связи от ведущего (обычно 2 раза в день). Индивидуальная терапия в переписке не проводится."
  },
  {
    q: "Что делать при остром кризисе?",
    a: "Группа не является форматом для экстренной помощи. При состояниях, угрожающих жизни, необходимо обращаться за медицинской или психиатрической помощью."
  },
  {
    q: "Подойдёт ли группа при телесных симптомах?",
    a: "Группа может работать с психологическими процессами, усиливающими телесные реакции, но она не заменяет обследование и лечение у врача."
  },
  {
    q: "Что произойдёт после восьми недель?",
    a: "Группа подведёт итоги основного цикла. При запросе участников может быть сформирован дополнительный четырёхнедельный цикл для закрепления (оплачивается отдельно)."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-[var(--color-norma-bg)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-12">
          Вопросы и правила участия
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={\`bg-white rounded-2xl border transition-colors \${isOpen ? 'border-[var(--color-norma-accent)]/30 shadow-sm' : 'border-black/5 hover:border-black/10'}\`}
              >
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-lg text-[var(--color-norma-text)] pr-4">{faq.q}</span>
                  <ChevronDown className={\`shrink-0 transition-transform duration-300 text-[var(--color-norma-accent)] \${isOpen ? 'rotate-180' : ''}\`} size={24} />
                </button>
                <div 
                  className={\`px-6 overflow-hidden transition-all duration-300 ease-in-out \${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}\`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-[var(--color-norma-text)]/70 text-base md:text-lg leading-relaxed border-t border-black/5 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/FinalCTA.tsx
write('src/components/sections/FinalCTA.tsx', `
import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section className="bg-[var(--color-norma-text)] text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-8 text-[var(--color-norma-bg)] leading-tight max-w-[20ch] mx-auto">
            Не обязательно ждать следующего срыва или полного истощения
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Первый шаг — не обещание немедленно изменить всю жизнь. Это возможность описать происходящее с вами и понять, подходит ли вам данный терапевтический формат.
          </p>
          
          <div className="flex flex-col items-center">
            <Button size="lg" className="bg-[var(--color-norma-bg)] text-[var(--color-norma-text)] hover:bg-white" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
              Понять, подходит ли мне группа
            </Button>
            
            <p className="mt-6 text-sm md:text-base text-white/50 max-w-md leading-relaxed">
              Короткая заявка не обязывает участвовать. После неё мы договоримся о предварительном собеседовании.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
`);

// components/sections/Footer.tsx
write('src/components/sections/Footer.tsx', `
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
            <span className="text-xs text-[var(--color-norma-text)]/70 uppercase tracking-widest font-semibold block mb-6">Терапевтическая группа</span>
          </div>
          
          <div>
            <h4 className="font-medium text-[var(--color-norma-text)] mb-4 text-lg">Ведущий</h4>
            <p className="text-base text-[var(--color-norma-text)]/80 mb-1">{groupConfig.therapistName}</p>
            <p className="text-base text-[var(--color-norma-text)]/70 mb-4">{groupConfig.therapistTitle}</p>
            <div className="space-y-2 text-base text-[var(--color-norma-text)]/80">
              {groupConfig.emailContact && !groupConfig.emailContact.includes('example.com') && (
                <a href={\`mailto:\${groupConfig.emailContact}\`} className="block hover:text-[var(--color-norma-text)] transition-colors">{groupConfig.emailContact}</a>
              )}
              {groupConfig.telegramContact && !groupConfig.telegramContact.includes('username') && (
                <a href="#" className="block hover:text-[var(--color-norma-text)] transition-colors">Telegram: {groupConfig.telegramContact}</a>
              )}
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
            {groupConfig.companyDetails && (
              <p>{groupConfig.companyDetails}</p>
            )}
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
`);
