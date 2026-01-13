import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PromoFlyerProps {
  onCtaClick: () => void;
}

export const PromoFlyer: React.FC<PromoFlyerProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-900/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-black to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-red-900/30">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content Side */}
            <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-2">
                Heizen war noch <br/>
                nie so <span className="text-red-600">SMART.</span>
              </h2>
              
              <div className="h-2 w-24 bg-red-600 mb-8 rounded-full"></div>

              <h3 className="text-2xl font-bold text-slate-200 mb-2">
                Wärmepumpe installieren. <br/>
                Kosten senken. <span className="text-red-500">Förderung sichern.</span>
              </h3>

              <div className="space-y-4 mt-8 mb-10">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 rounded-full p-1">
                    <Check className="text-white w-4 h-4" strokeWidth={4} />
                  </div>
                  <span className="text-lg text-slate-300 font-medium">Bis zu <span className="text-white font-bold">70% Heizkosten sparen</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 rounded-full p-1">
                    <Check className="text-white w-4 h-4" strokeWidth={4} />
                  </div>
                  <span className="text-lg text-slate-300 font-medium">Förderfähig – <span className="text-white font-bold">jetzt Zuschüsse sichern</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 rounded-full p-1">
                    <Check className="text-white w-4 h-4" strokeWidth={4} />
                  </div>
                  <span className="text-lg text-slate-300 font-medium">Leise & effizient – <span className="text-white font-bold">moderne Wärmetechnik</span></span>
                </div>
              </div>

              <button 
                onClick={onCtaClick}
                className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg shadow-red-900/50 transition-all hover:scale-105 flex items-center self-start gap-3"
              >
                Jetzt kostenlos beraten lassen!
                <ArrowRight />
              </button>
            </div>

            {/* Right Image Side */}
            <div className="lg:w-2/5 relative h-[400px] lg:h-auto">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 lg:bg-gradient-to-l"></div>
               <img 
                 src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000&auto=format&fit=crop" 
                 alt="Moderne Wärmepumpe Außeneinheit" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-6 right-6 z-20">
                  {/* Real Logo Overlay */}
                  <img 
                    src="/logo.png" 
                    alt="Wärme Pur" 
                    className="h-20 w-auto object-contain opacity-90 drop-shadow-xl"
                  />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};