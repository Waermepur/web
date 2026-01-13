import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, ShieldCheck, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
      {/* 
        WICHTIG: Bitte laden Sie Ihre Logo-Datei als 'logo.png' in den public-Ordner hoch.
      */}
      <img 
        src="/logo.png" 
        alt="Wärme Pur GmbH" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );

  return (
    <>
      {/* Top Bar - "Upper Area" Filler */}
      <div className="bg-zinc-900 text-slate-300 text-xs py-2 hidden md:block border-b border-zinc-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-red-500"/> Meisterbetrieb seit 25 Jahren</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-red-500"/> Notdienst verfügbar</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:Info@wärmepur.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={14} /> Info@wärmepur.com
            </a>
            <span className="text-zinc-600">|</span>
            <span className="font-bold text-white">Lünen • Dortmund • NRW</span>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl border-zinc-800' : 'bg-black py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Area */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white hover:text-red-500 font-medium text-sm uppercase tracking-wider transition-colors">Leistungen</a>
            <a href="#calculator" className="text-white hover:text-red-500 font-medium text-sm uppercase tracking-wider transition-colors">Spar-Rechner</a>
            
            <div className="h-8 w-px bg-zinc-800"></div>

            <div className="flex items-center gap-2 text-white font-bold group cursor-pointer">
              <div className="bg-zinc-800 p-2 rounded-full group-hover:bg-red-600 transition-colors">
                 <Phone className="w-4 h-4 text-white" />
              </div>
              <a href="tel:+491732515382" className="hover:text-red-400 transition-colors whitespace-nowrap">+49 173 25 15 382</a>
            </div>
            <button 
              onClick={onContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-none font-bold text-sm uppercase tracking-widest transition-transform hover:scale-105 border-2 border-red-600"
            >
              Angebot
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-red-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-zinc-800 p-4 flex flex-col gap-4 shadow-2xl h-screen">
            <a href="#services" className="text-white text-xl font-bold p-4 border-b border-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>LEISTUNGEN</a>
            <a href="#calculator" className="text-white text-xl font-bold p-4 border-b border-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>HEIZUNGS-RECHNER</a>
            <a href="tel:+491732515382" className="flex items-center gap-3 text-white text-xl font-bold p-4 bg-zinc-900 rounded-lg">
              <Phone className="w-5 h-5 text-red-500" />
              +49 173 25 15 382
            </a>
            <button 
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-red-600 text-white w-full py-4 rounded-lg font-black text-xl uppercase"
            >
              Angebot anfordern
            </button>
          </div>
        )}
      </header>
    </>
  );
};