import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Snowflake } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] bg-black flex items-center overflow-hidden pt-10 md:pt-0 border-b border-zinc-900">
      {/* Custom Animations */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes energy-pulse {
            0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
          }
          @keyframes flow-line {
            0% { stroke-dashoffset: 400; opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          .animate-energy-pulse {
            animation: energy-pulse 4s ease-in-out infinite;
          }
          .animate-flow {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: flow-line 3s linear infinite;
          }
          .delay-1000 { animation-delay: 1s; }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>

      {/* Strict Background - No Blur, just clean dark or subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80"></div>
      
      {/* Red Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-red-600 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-red-600 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
            
            <div className="flex flex-wrap items-center gap-4 mb-6 animate-in slide-in-from-left-4 duration-700 fade-in">
               <div className="inline-flex items-center gap-3">
                  <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.5)]">Neuheit</div>
                  <span className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Die Zukunft des Heizens</span>
               </div>
               
               {/* Repositioned Rating (Small & Subtle) */}
               <div className="hidden md:flex items-center gap-1.5 border-l border-zinc-800 pl-4">
                  <div className="flex text-red-600">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-xs text-zinc-500 font-bold">Top Bewertung</span>
               </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              WÄRME<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">PUR.</span>
            </h1>
            
            <div className="h-1 w-24 bg-red-600 mb-8"></div>

            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-lg leading-relaxed font-light">
              <strong className="text-white">Effizienz trifft Design.</strong><br/>
              Tauschen Sie Ihre alte Heizung gegen unsere Premium-Wärmepumpe. Leise, stark und bis zu 70% förderfähig.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <button 
                onClick={onCtaClick}
                className="group relative overflow-hidden bg-white text-black px-8 py-4 font-black text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <span className="relative z-10">Angebot sichern</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   Angebot sichern <ArrowRight size={20} />
                </span>
              </button>
              
              <a 
                href="#calculator"
                className="group flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white hover:border-red-600 hover:text-red-500 transition-colors font-bold uppercase tracking-wider"
              >
                <Zap size={18} />
                Spar-Rechner
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-zinc-800 pt-8">
               <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="block text-white">Extrem Leise</strong>
                    <span className="text-sm text-zinc-500">Kaum hörbar im Betrieb</span>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 mt-1 shrink-0" size={20} />
                  <div>
                    <strong className="block text-white">Smart Home Ready</strong>
                    <span className="text-sm text-zinc-500">Steuerung per App</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Product Image Section - Animated */}
          <div className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2">
            
            {/* Pulsing Background Glow */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-red-600/20 to-transparent rounded-full blur-[90px] pointer-events-none animate-energy-pulse"></div>

            {/* Energy Flow Visualization Lines (Abstract SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none scale-110 z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cold Air In (Blue) */}
              <path d="M50,350 C100,300 150,320 200,200" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" className="animate-flow opacity-0" />
              <path d="M20,380 C80,330 130,350 180,230" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" className="animate-flow delay-1000 opacity-0" />
            </svg>

            {/* Floating Product Image Container */}
            <div className="relative z-10 w-full max-w-xl animate-float-slow group cursor-pointer">
               {/* 
                  HIER DAS PNG EINFÜGEN:
                  Tauschen Sie den untenstehenden Link gegen den Pfad zu Ihrer Bilddatei aus.
               */}
               <img 
                 src="https://images.unsplash.com/photo-1624823183489-0d986d5e1d40?q=80&w=1000&auto=format&fit=crop" 
                 alt="Wärme Pur Design Wärmepumpe" 
                 className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
               />

               {/* Polar Fox / Efficiency Badge */}
               <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-12 z-20">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 pr-5 rounded-2xl shadow-2xl flex items-center gap-3 transition-transform hover:scale-105">
                    {/* Placeholder for Fox Image or Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center shadow-inner border border-white">
                       <Snowflake className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Polar-Effizienz</div>
                      <div className="text-blue-200 text-xs">Leistung bis -25°C</div>
                    </div>
                 </div>
               </div>
               
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};