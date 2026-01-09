
import React, { useState, useEffect } from 'react';
import { MoveRight } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import UsageGallery from './components/UsageGallery';
import TechnicalSpecs from './components/TechnicalSpecs';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import Warranty from './components/Warranty';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) setShowSticky(true);
      else setShowSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
        
        <ScrollReveal>
          <Benefits />
        </ScrollReveal>

        <ScrollReveal>
          <UsageGallery />
        </ScrollReveal>

        <ScrollReveal>
          <TechnicalSpecs />
        </ScrollReveal>

        <ScrollReveal>
          <SocialProof />
        </ScrollReveal>

        <ScrollReveal>
          <Comparison />
        </ScrollReveal>

        <ScrollReveal>
          <Warranty />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-4 left-4 right-4 z-40 transition-all duration-500 md:hidden ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a href="#comprar" className="w-full bg-orange-600 text-white p-4 rounded-2xl shadow-2xl shadow-orange-500/50 flex items-center justify-between font-black uppercase text-sm tracking-tighter">
          <span>Garantir Promoção (-40%)</span>
          <MoveRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default App;
