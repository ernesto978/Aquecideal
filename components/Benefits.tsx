
import React from 'react';
import { Smartphone, Feather, Zap, Volume2 } from 'lucide-react';

const benefits = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Portátil (18 cm)",
    description: "Design compacto que cabe perfeitamente em qualquer divisão da casa."
  },
  {
    icon: <Feather className="w-8 h-8" />,
    title: "Super leve (500 g)",
    description: "Transporta facilmente com uma só mão para onde quer que precises de calor."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Económico (800W)",
    description: "Alta eficiência energética: mais calor com muito menos consumo elétrico."
  },
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: "Seguro e silencioso",
    description: "Perfeito para famílias, crianças e idosos. Aquece sem ruído incomodativo."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-stone-50 rounded-[2rem] hover:bg-orange-50 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
