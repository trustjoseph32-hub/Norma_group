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
