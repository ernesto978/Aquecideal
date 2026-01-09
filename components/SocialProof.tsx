
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Martins",
    role: "Proprietária de Caravanas",
    text: "A nossa caravana ficou irresistivelmente quente mesmo em noites de neve. Ocupa zero espaço!",
    rating: 5
  },
  {
    name: "João Pereira",
    role: "Gestor",
    text: "Finalmente um aquecedor leve e eficiente para o meu escritório. Deixei de tremer de frio enquanto trabalho.",
    rating: 5
  },
  {
    name: "Maria Silva",
    role: "Reformada",
    text: "Perfeito para os meus pais — seguro e silencioso. Eles conseguem ligá-lo facilmente sem complicações.",
    rating: 5
  }
];

const SocialProof: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testemunhos" className="py-16 bg-orange-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-4 text-orange-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <h2 className="text-4xl font-bold text-stone-900">Aprovado por milhares de clientes.</h2>
        </div>
        
        <div className="relative bg-white p-12 rounded-[3rem] shadow-xl shadow-orange-100">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-4 text-center">
                  <p className="text-2xl italic text-stone-700 mb-8 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-xl text-stone-900">{t.name}</p>
                    <p className="text-orange-600 font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? 'bg-orange-600 w-8' : 'bg-stone-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
