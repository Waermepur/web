import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HeatingType } from '../types';
import { Calculator } from 'lucide-react';

interface LeadCalculatorProps {
  onRequestClick: () => void;
}

export const LeadCalculator: React.FC<LeadCalculatorProps> = ({ onRequestClick }) => {
  const [area, setArea] = useState(140);
  const [year, setYear] = useState('1990');
  const [currentSystem, setCurrentSystem] = useState<HeatingType>(HeatingType.GAS);

  const calculation = useMemo(() => {
    // Rough estimation logic for demonstration
    const consumptionFactor = parseInt(year) < 1995 ? 150 : 80;
    
    // Price per kWh (approx average DE)
    const oldPrice = 0.14; 
    const newPriceEffective = 0.08; 

    const annualConsumption = area * consumptionFactor;
    
    const currentCost = Math.round(annualConsumption * oldPrice);
    const newCost = Math.round(annualConsumption * newPriceEffective);
    const savings = currentCost - newCost;

    return {
      currentCost,
      newCost,
      savings,
      data: [
        { name: 'Ihre Heizung', value: currentCost },
        { name: 'Wärmepumpe', value: newCost },
      ]
    };
  }, [area, year, currentSystem]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
             Wärmepumpen-Vergleichsrechner
           </h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Lohnt sich der Umstieg für Sie? Vergleichen Sie Ihre aktuelle Heizung direkt mit einer modernen Wärmepumpe.
           </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-700">
        
        {/* Input Section */}
        <div className="p-8 lg:p-12 w-full lg:w-1/2 bg-slate-800 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="text-red-500 w-8 h-8" />
            <h3 className="text-2xl font-black">Ihre Daten</h3>
          </div>
          <p className="text-slate-300 mb-8">
            Geben Sie Ihre Hausdaten ein für einen unverbindlichen Vergleich.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-300">Wohnfläche: <span className="text-white text-lg">{area} m²</span></label>
              <input 
                type="range" 
                min="50" 
                max="300" 
                step="10" 
                value={area} 
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-slate-300">Baujahr (ca.)</label>
              <select 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="1970">Vor 1980</option>
                <option value="1990">1980 - 1995</option>
                <option value="2000">1996 - 2010</option>
                <option value="2011">Nach 2010</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-slate-300">Aktuelle Heizung</label>
              <select 
                value={currentSystem} 
                onChange={(e) => setCurrentSystem(e.target.value as HeatingType)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value={HeatingType.GAS}>Gasheizung</option>
                <option value={HeatingType.OIL}>Ölheizung</option>
                <option value={HeatingType.ELECTRIC}>Nachtspeicher / Strom</option>
              </select>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="p-8 lg:p-12 w-full lg:w-1/2 bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Jährliche Energiekosten im Vergleich:</h3>
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={calculation.data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12, fontWeight: 600}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                    {calculation.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#94a3b8' : '#dc2626'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-end gap-2 mb-2">
               <span className="text-5xl font-black text-red-600">{calculation.savings} €</span>
               <span className="text-slate-500 font-medium mb-2">/ Jahr sparen*</span>
            </div>
            <p className="text-xs text-slate-400 mb-8">*Grobe Schätzung basierend auf Durchschnittswerten. Fördermittel nicht eingerechnet!</p>
          </div>

          <button 
            onClick={onRequestClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02]"
          >
            Jetzt Wärmepumpen-Angebot anfordern
          </button>
        </div>
      </div>
    </div>
  );
};