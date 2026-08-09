import React from 'react';
import { Container, Section } from '../ui/Layout';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "Почему тревога не проходит, даже когда объективной опасности нет",
    topics: ["тревожная интерпретация", "телесная реакция", "контроль", "проверки", "избегание", "временное облегчение", "закрепление тревожного цикла"]
  },
  {
    title: "Как тревога и стресс связаны с телесными симптомами",
    topics: ["реакция нервной системы", "дыхание", "сердцебиение", "мышечное напряжение", "сон", "пищеварение", "внимание к телу", "страх симптома", "усиление ощущения"]
  },
  {
    title: "Почему после длительного напряжения приходят апатия и выгорание",
    topics: ["длительная мобилизация", "сверхконтроль", "истощение", "снижение активности", "чувство вины", "самокритика", "попытка заставить себя", "новый виток истощения"]
  }
];

export const Psychoeducation: React.FC = () => {
  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-center mb-16">
          Понять механизм, чтобы начать замечать его в своей жизни
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-[var(--color-norma-bg)] rounded-2xl border border-black/5 overflow-hidden flex flex-col group">
              {/* Video Thumbnail Placeholder */}
              <div className="aspect-[16/9] bg-[var(--color-norma-text)] relative flex items-center justify-center cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1 w-5 h-5" fill="currentColor" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded z-20 font-medium">
                  ~10 мин
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-medium text-[var(--color-norma-text)] mb-4 font-display">
                  {video.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {video.topics.slice(0, 5).map((topic, i) => (
                      <span key={i} className="text-xs bg-white text-[var(--color-norma-text)]/70 px-2 py-1 rounded border border-black/5">
                        {topic}
                      </span>
                    ))}
                    {video.topics.length > 5 && (
                      <span className="text-xs text-[var(--color-norma-accent)] px-2 py-1 font-medium">
                        и др.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--color-norma-accent-light)]/40 p-6 rounded-xl border border-[var(--color-norma-terracotta)]/20 mb-8">
            <p className="text-[var(--color-norma-text)]/90 leading-relaxed text-sm md:text-base">
              <strong>Телесные симптомы реальны.</strong> Психотерапия не заменяет медицинскую диагностику, а помогает исследовать процессы, которые могут дополнительно усиливать и поддерживать реакцию.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[var(--color-norma-accent)] font-medium text-sm md:text-base text-center mb-8 bg-[var(--color-norma-bg)] p-4 rounded-xl">
            <span>Видео</span>
            <span className="hidden sm:inline">→</span>
            <span className="sm:hidden">↓</span>
            <span>личное наблюдение</span>
            <span className="hidden sm:inline">→</span>
            <span className="sm:hidden">↓</span>
            <span>бриф-отчёт</span>
            <span className="hidden sm:inline">→</span>
            <span className="sm:hidden">↓</span>
            <span>групповое исследование</span>
            <span className="hidden sm:inline">→</span>
            <span className="sm:hidden">↓</span>
            <span>терапевтический эксперимент</span>
          </div>
          
          <p className="text-center text-sm text-[var(--color-norma-text)]/60">
            Материалы доступны только во время прохождения группы. После завершения основного цикла доступ закрывается.
          </p>
        </div>
      </Container>
    </Section>
  );
};
