
import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    q: "Qual é o consumo real do Aquecideal?",
    a: "O Aquecideal consome apenas 800W, o que representa uma poupança de cerca de 70% comparado com radiadores tradicionais de 2500W. É a solução mais eficiente para aquecimento localizado (quartos e salas)."
  },
  {
    q: "Posso deixar ligado durante a noite?",
    a: "Sim. O aparelho possui um timer programável até 12 horas e proteção contra sobreaquecimento. Desliga-se automaticamente assim que atinge a temperatura definida ou o tempo programado."
  },
  {
    q: "Qual é o prazo de entrega em Portugal?",
    a: "Temos stock em Portugal. O envio é feito via transportadora expresso e demora normalmente entre 24h a 48h úteis (Continente) e um pouco mais para as Ilhas."
  },
  {
    q: "Como funciona o pagamento na entrega?",
    a: "É simples: faz a encomenda no site e apenas paga o valor ao estafeta no momento em que este lhe entrega o produto em mãos. Sem riscos!"
  },
  {
    q: "Posso ajustar a temperatura exata?",
    a: "Sim, o visor LED digital permite-lhe escolher a temperatura grau a grau, entre os 15ºC e os 32ºC, para um conforto personalizado."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
            <MessageSquare className="w-4 h-4" /> Dúvidas Comuns
          </div>
          <h2 className="text-4xl font-black text-stone-900">Perguntas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none transition-colors hover:bg-stone-50"
              >
                <span className={`text-lg font-black transition-colors ${openIndex === i ? 'text-orange-600' : 'text-stone-900'}`}>{faq.q}</span>
                {openIndex === i ? <Minus className="text-orange-600 w-5 h-5" /> : <Plus className="text-stone-300 w-5 h-5" />}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 animate-fadeIn">
                  <p className="text-stone-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
