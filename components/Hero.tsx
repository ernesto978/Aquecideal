
import React from 'react';
import { ShieldCheck, MoveRight, Star, Zap, CheckCircle2, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#fff7ed_0%,transparent_40%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-black uppercase tracking-widest border border-green-100">
                <ShieldCheck className="w-3.5 h-3.5" /> Produto Original Aquecideal
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-[10px] font-black uppercase tracking-widest border border-orange-200 animate-pulse">
                <Gift className="w-3 h-3" /> OFERTA: Meias Quentes na compra de 2+ uni.
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-stone-900 leading-[1.05] tracking-tight">
              Aqueça qualquer divisão em <span className="text-orange-600">3 segundos.</span>
            </h1>
            
            <p className="text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Aproveite a <span className="text-orange-600 font-black">Mega Promoção Outono / Inverno</span>. O <span className="text-stone-900 font-bold">Aquecideal</span> é o mini-aquecedor cerâmico de 800W que consome até <span className="text-orange-600 font-bold">75% menos energia</span>.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#comprar" className="w-full sm:w-auto px-10 py-5 bg-orange-600 text-white rounded-2xl font-black text-xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 group">
                  OBTER DESCONTO
                  <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 sm:flex sm:justify-start gap-x-8 gap-y-4 text-stone-800 text-xs font-bold uppercase tracking-tight">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600" /> Baixo Consumo</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600" /> Visor LED Digital</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600" /> Silencioso</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600" /> Anti-Chama</div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 border-t border-stone-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=pt${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Cliente" />
                ))}
              </div>
              <div className="text-sm text-stone-500 font-medium">
                <span className="text-stone-900 font-bold">Votado #1</span> Aquecedor Portátil em Portugal (2023/24)
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-20 group perspective-1000">
              <img 
                src="https://aquecideal.pt/wp-content/uploads/2026/01/32-5.png?auto=format&fit=crop&q=80&w=800" 
                alt="Aquecideal Original" 
                className="w-full max-w-[580px] mx-auto drop-shadow-[0_50px_80px_rgba(234,88,12,0.4)] transition-all duration-700 hover:scale-[1.03]"
              />
              
              <div className="absolute top-0 right-4 lg:right-10 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-xl border border-orange-200 animate-float">
                <div className="text-center">
                  <span className="block text-[10px] font-black uppercase text-stone-400">Temp Máx</span>
                  <span className="text-3xl font-black text-orange-600 leading-none">32º</span>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40">
                <div className="w-1/2 h-1/2 mx-auto bg-[radial-gradient(ellipse_at_center,#fb923c_0%,transparent_70%)] blur-[40px] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
