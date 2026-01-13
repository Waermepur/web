import React from 'react';
import { MapPin, Users, Wrench, Trophy } from 'lucide-react';

export const USPSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-2xl"></div>
                {/* Badge Slogan */}
                <div className="absolute -top-6 -right-6 z-20 bg-slate-900 text-white p-4 rounded-xl shadow-xl border-2 border-red-600 rotate-3 transform hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 font-black text-lg uppercase">
                        <Trophy className="text-red-600" size={24} />
                        Einmal mit Profis!
                    </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop" 
                  alt="Wärme Pur Team"
                  className="relative z-10 rounded-2xl shadow-2xl w-full"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
              Warum Lünen, Dortmund, Köln und Kunden über die Grenzen hinaus uns vertrauen:
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">25 Jahre Expertise</h3>
                  <p className="text-slate-600">Wir üben nicht mehr, wir können das. Seit einem Vierteljahrhundert liefern wir Qualität, die bleibt.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <Wrench size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Alles aus einer Hand</h3>
                  <p className="text-slate-600">Sie haben einen Ansprechpartner, kein Chaos. Wir koordinieren alle Gewerke für Sie.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">NRW-Weit & Regional</h3>
                  <p className="text-slate-600">Ob Lünen, Dortmund oder Köln – unsere Flotte ist für Sie unterwegs. Schnell, zuverlässig und nah.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                <p className="font-bold text-red-900 italic">"EINMAL MIT PROFIS !!!!"</p>
                <p className="text-sm text-red-700 mt-1">– Das ist nicht nur ein Spruch, das ist unser Anspruch.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};