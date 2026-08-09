import React from 'react';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { Marquee } from './components/ui/Marquee';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { ForWhom } from './components/sections/ForWhom';
import { Mechanism } from './components/sections/Mechanism';
import { WhatHappens } from './components/sections/WhatHappens';
import { WhyGroup } from './components/sections/WhyGroup';
import { FormatDynamics } from './components/sections/FormatDynamics';
import { Therapist } from './components/sections/Therapist';
import { ApplicationSection } from './components/sections/ApplicationSection';
import { Cases } from './components/sections/Cases';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--color-norma-bg)] text-[var(--color-norma-text)] font-body selection:bg-[var(--color-norma-accent)]/20">
        <Header />
        <main>
          <Hero />
          <ForWhom />
          <Marquee text="РАЗОМКНУТЬ ЦИКЛ · УВИДЕТЬ МЕХАНИЗМ · ИЗМЕНИТЬ РЕАКЦИЮ · " direction="left" />
          <Mechanism />
          <WhatHappens />
          <WhyGroup />
          <FormatDynamics />
          <Therapist />
          <Cases />
          <ApplicationSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
