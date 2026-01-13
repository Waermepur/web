import React from 'react';
import { Leaf, PiggyBank, Sun, PlayCircle } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background elements - Adapted to CI */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Leaf size={16} />
            <span>Nachhaltiges Handwerk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Gut für das Klima.<br/>
            <span className="text-red-600">Besser für Ihren Geldbeutel.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Als Handwerker tragen wir Verantwortung für Brambauer und die Umwelt. Wir setzen auf modernste Technologien, 
            die Emissionen senken und Ihre Heizkosten langfristig minimieren.
          </p>
        </div>

        {/* Video Explainer Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white ring-1 ring-slate-200 group">
             {/* Responsive Video Container (16:9) */}
             <div className="relative w-full pt-[56.25%] bg-black">
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?q=80&w=1200&auto=format&fit=crop"
                >
                  {/* 
                      WICHTIG: Das Video muss 'waermepumpe.mp4' heißen und im public-Ordner liegen.
                   */}
                  <source src="/waermepumpe.mp4" type="video/mp4" />
                  Ihr Browser unterstützt dieses Video-Format nicht.
                </video>
             </div>
          </div>
          
          {/* Video Info Caption (Moved below video to not obstruct controls) */}
          <div className="mt-6 flex items-center justify-center gap-4 text-slate-800">
             <div className="flex-shrink-0 bg-red-100 rounded-full p-3 text-red-600">
                <PlayCircle size={28} fill="currentColor" className="text-red-600/20" />
             </div>
             <div className="text-left">
                 <span className="block font-bold text-lg leading-tight">So funktioniert das Prinzip Wärmepumpe</span>
                 <span className="text-sm text-slate-500">Einfach erklärt: Die Technik der Zukunft in wenigen Minuten.</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-red-200 transition-colors group">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">CO₂ massiv senken</h3>
            <p className="text-slate-600">
              Mit einer modernen Wärmepumpe sparen Sie bis zu 70% CO₂ gegenüber einer alten Ölheizung ein. Ein echter Beitrag zum Klimaschutz direkt aus Ihrem Keller.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-red-200 transition-colors group">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Sun size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unabhängig werden</h3>
            <p className="text-slate-600">
              Machen Sie sich frei von steigenden Gas- und Ölpreisen. Nutzen Sie die kostenlose Energie der Umwelt und machen Sie Ihr Zuhause zukunftssicher.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-red-200 transition-colors group">
             <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <PiggyBank size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Staatlich gefördert</h3>
            <p className="text-slate-600">
              Der Staat zahlt mit! Wir sind Experten für Fördermittel und helfen Ihnen dabei, die maximale Förderung für Ihre neue umweltfreundliche Heizung zu sichern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};