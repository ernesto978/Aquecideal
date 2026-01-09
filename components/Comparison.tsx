
import React from 'react';
import { Check, X } from 'lucide-react';

const rows = [
  { label: "Consumo Energético", cool: "Baixo (800W)", old: "Alto (+2000W)" },
  { label: "Tamanho", cool: "18 cm (Portátil)", old: "Grande e Pesado" },
  { label: "Segurança", cool: "Corte Automático", old: "Risco de Incêndio" },
  { label: "Portabilidade", cool: "Cabe numa mala", old: "Difícil de mover" },
  { label: "Ruído", cool: "Silencioso", old: "Barulhento" },
  { label: "Preço / Benefício", cool: "Excelente", old: "Caro de manter" }
];

const Comparison: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Por que escolher o Aquecideal?</h2>
        </div>
        
        <div className="bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100">
          <div className="grid grid-cols-3 bg-stone-900 text-white p-8">
            <div className="text-lg font-bold">Característica</div>
            <div className="text-center text-orange-400 font-bold text-xl uppercase tracking-wider">Aquecideal</div>
            <div className="text-center text-stone-500 font-bold uppercase tracking-wider">Tradicionais</div>
          </div>
          
          <div className="divide-y divide-stone-200">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-8 items-center hover:bg-stone-100/50 transition-colors">
                <div className="font-bold text-stone-700">{row.label}</div>
                <div className="flex justify-center flex-col items-center">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-green-700">{row.cool}</span>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-1">
                    <X className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-red-700">{row.old}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
