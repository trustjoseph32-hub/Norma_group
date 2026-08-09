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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#F9F8F6]/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
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
      <div className={`xl:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${showMobileCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <Button fullWidth className="shadow-lg" size="lg" onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}>
          Обсудить мой запрос
        </Button>
      </div>
    </>
  );
};
