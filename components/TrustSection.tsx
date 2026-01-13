import React from 'react';
import { ShieldCheck, HardHat, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const brands = ["Vaillant", "Viessmann", "Bosch", "Buderus", "Grohe"];

  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* Brand Logos Strip */}
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Unsere starken Partner
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
          {brands.map((brand) => (
            <div key={brand} className="text-xl md:text-2xl font-black text-slate-700 select-none">
              {brand}
            </div>
          ))}
        </div>

        {/* Cleanliness Promise */}
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border border-slate-200">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <span className="font-semibold text-slate-700">Bekannt in der Region</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-slate-300"></div>
           <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600">
              <HardHat size={24} />
            </div>
            <span className="font-semibold text-slate-700">Ehrlich & Pünktlich</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-slate-300"></div>
           <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Sparkles size={24} />
            </div>
            <span className="font-semibold text-slate-700">Saubere Baustelle garantiert</span>
          </div>
        </div>
        
        <p className="text-center text-slate-500 mt-4 text-sm italic">
          "Wir verlassen Ihr Zuhause so sauber, wie wir es selbst vorfinden wollen."
        </p>
      </div>
    </section>
  );
};