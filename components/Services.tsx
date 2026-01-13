import React from 'react';
import { Flame, Droplets, Wind, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onServiceClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const services: ServiceItem[] = [
    {
      id: 'heating',
      title: 'Heizen & Sparen',
      description: 'Raus aus Öl & Gas. Wir installieren effiziente Wärmepumpen, die Ihren Geldbeutel schonen und vom Staat gefördert werden.',
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      imageUrl: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop' // Modern home heating context
    },
    {
      id: 'bath',
      title: 'Ihr Traum-Bad',
      description: 'Vom Abriss bis zur letzten Fuge. Badsanierung ohne Stress – auch barrierefrei. Wir planen Ihre Wellness-Oase.',
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop' // Modern bathroom
    },
    {
      id: 'climate',
      title: 'Prima Klima',
      description: 'Schlafen Sie wieder gut. Leise Klimaanlagen und frische Luft für Ihr Zuhause. Installation und Wartung aus einer Hand.',
      icon: <Wind className="w-8 h-8 text-cyan-500" />,
      imageUrl: 'https://images.unsplash.com/photo-1618222033621-e0c660706213?q=80&w=800&auto=format&fit=crop' // Clean interior with AC
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Unsere Lösungen für Ihr Zuhause
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kein Fachchinesisch. Wir lösen Ihr Problem schnell, zuverlässig und nachhaltig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={onServiceClick}
            >
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/95 p-3 rounded-xl shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-red-600 font-bold group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};