
import React from 'react';
import { Layers, Thermometer, Wind, Clock, Cpu, Zap } from 'lucide-react';

const specs = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Visor Digital Inteligente",
    description: "Monitorize a temperatura exata em tempo real com o visor LED de alta visibilidade."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Timer Programável (12 Horas)",
    description: "Configure o desligamento automático e durma sem preocupações."
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Ajuste de 15º a 32º C",
    description: "Personalize o nível de calor ideal para o seu conforto com os botões +/-."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Ligação Direta à Parede",
    description: "Design Wall-Plug: sem cabos espalhados pelo chão, poupa espaço e evita tropeções."
  }
];

const TechnicalSpecs: React.FC = () => {
  return (
    <section id="especificacoes" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-[100px] opacity-40"></div>
            <img 
              src="https://aquecideal.pt/wp-content/uploads/2025/01/1-min.png?auto=format&fit=crop&q=80&w=800" 
              alt="Design Moderno e Limpo" 
              className="relative z-10 w-full rounded-[3rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white">
                   <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-black text-stone-400 uppercase tracking-widest">Tecnologia Cerâmica</p>
                  <p className="text-stone-900 font-bold">Segurança e Eficiência PTC</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <Layers className="w-3.5 h-3.5" /> Engenharia Avançada
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-stone-900 mb-6 leading-[1.1] tracking-tighter">Precisão digital no seu aquecimento.</h2>
              <p className="text-lg text-stone-600 font-medium">Esqueça os aquecedores manuais imprecisos. Com o Aquecideal, tem o controlo total na palma da mão, diretamente na tomada.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex flex-col gap-4 p-6 bg-stone-50 rounded-3xl border border-transparent hover:border-orange-100 hover:bg-orange-50/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-stone-900 mb-1">{spec.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
