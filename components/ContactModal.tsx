import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-slate-900">
            {submitted ? 'Vielen Dank!' : 'Kostenloses Angebot anfordern'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Anfrage gesendet!</h4>
              <p className="text-slate-600 mb-6">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Zurück zur Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-slate-600 text-sm mb-4">
                Füllen Sie das Formular aus. Wir rufen Sie zurück, um einen Termin zu vereinbaren. Unverbindlich & kostenlos.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Vorname</label>
                  <input required type="text" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Max" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nachname</label>
                  <input required type="text" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Mustermann" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Telefonnummer (für Rückruf)</label>
                <input required type="tel" className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none" placeholder="02306 ..." />
              </div>

              <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-1">Worum geht es?</label>
                 <select className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none">
                   <option>Neue Heizung / Wärmepumpe</option>
                   <option>Badsanierung</option>
                   <option>Klimaanlage</option>
                   <option>Reparatur / Wartung</option>
                   <option>Sonstiges</option>
                 </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-600/20 transition-all mt-4"
              >
                Jetzt Absenden
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};