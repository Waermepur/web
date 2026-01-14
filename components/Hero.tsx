import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Snowflake } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] bg-black flex items-center overflow-hidden pt-10 md:pt-0 border-b border-zinc-900">

      {/* Animations */}
      <style>{`
        @keyframes float-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes energy-pulse {
          0%,100% { opacity: .25; transform: translate(-50%,-50%) scale(1); }
          50% { opacity: .55; transform: translate(-50%,-50%) scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-energy-pulse { animation: energy-pulse 4s ease-in-out infinite; }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80" />
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-red-600 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-red-600 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Neuheit
              </span>
              <span className="text-zinc-400 text-sm uppercase tracking-wider">
                Die Zukunft des Heizens
              </span>
              <div className="hidden md:flex items-center gap-1.5 border-l border-zinc-800 pl-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-red-600" />
                ))}
                <span className="text-xs text-zinc-500 font-bold ml-2">
                  Top Bewertung
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              WÄRME<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                PUR.
              </span>
            </h1>

            <div className="h-1 w-24 bg-red-600 mb-8" />

            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-lg">
              <strong className="text-white">Effizienz trifft Design.</strong><br />
              Tauschen Sie Ihre alte Heizung gegen unsere Premium-Wärmepumpe.
              Leise, stark und bis zu <strong>70 % förderfähig</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <button
                onClick={onCtaClick}
                className="group relative overflow-hidden bg-white text-black px-8 py-4 font-black text-lg uppercase tracking-wider flex items-center gap-3"
              >
                Angebot sichern
                <ArrowRight size={20} />
                <span className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Angebot sichern <ArrowRight size={20} />
                </span>
              </button>

              <a
                href="#calculator"
                className="flex items-center gap-2 px-8 py-4 border border-zinc-700 text-white hover:border-red-600 hover:text-red-500 transition-colors font-bold uppercase tracking-wider"
              >
                <Zap size={18} />
                Spar-Rechner
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
              <div className="flex gap-3">
                <CheckCircle className="text-red-600 mt-1" />
                <div>
                  <strong className="text-white block">Extrem leise</strong>
                  <span className="text-sm text-zinc-500">Kaum hörbar</span>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-red-600 mt-1" />
                <div>
                  <strong className="text-white block">Smart Home</strong>
                  <span className="text-sm text-zinc-500">App-Steuerung</span>
                </div>
              </div>
            </div>
          </div>

          {/* BILD BEREICH (ehemals Video) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative flex justify-center">

            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/20 to-transparent rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 animate-energy-pulse" />

            <div className="relative z-10 w-full max-w-xl animate-float-slow">
              <img
                src="/pumpe.png"
                alt="Wärme Pur Wärmepumpe"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-12 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 pr-5 rounded-2xl shadow-2xl flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center">
                  <Snowflake className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Polar-Effizienz</div>
                  <div className="text-blue-200 text-xs">Leistung bis −25 °C</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
