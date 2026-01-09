
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Warranty: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-md">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">100% Satisfação ou Reembolso — Sem riscos.</h2>
        <p className="text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
          Experimente o Aquecideal durante 30 dias. Se não sentir a diferença no seu conforto, devolvemos o valor total. Sem perguntas.
        </p>
      </div>
    </section>
  );
};

export default Warranty;
