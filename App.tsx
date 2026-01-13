import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { USPSection } from './components/USPSection';
import { PromoFlyer } from './components/PromoFlyer';
import { SustainabilitySection } from './components/SustainabilitySection';
import { LeadCalculator } from './components/LeadCalculator';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onContactClick={openModal} />
      
      <main className="flex-grow">
        <Hero onCtaClick={openModal} />
        <TrustSection />
        <div id="services">
          <Services onServiceClick={openModal} />
        </div>
        <USPSection />
        <PromoFlyer onCtaClick={openModal} />
        <SustainabilitySection />
        <div id="calculator" className="bg-slate-900 py-16">
           <LeadCalculator onRequestClick={openModal} />
        </div>
      </main>

      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}