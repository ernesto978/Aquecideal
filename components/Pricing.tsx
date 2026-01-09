
import React from 'react';
import { Check, ShieldCheck, Zap, CreditCard, Award, Truck, Gift } from 'lucide-react';

const Pricing: React.FC = () => {
  // Usando a imagem principal do produto para todos os packs conforme solicitado ("só uma foto em cada pack")
  const productImg = "https://aquecideal.pt/wp-content/uploads/2026/01/32-5.png?auto=format&fit=crop&q=80&w=400";

  return (
    <section id="comprar" className="py-16 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-orange-600 font-black text-xs uppercase tracking-[0.2em] mb-4">
            <Award className="w-4 h-4" /> MEGA PROMOÇÃO OUTONO / INVERNO
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-stone-900 tracking-tighter">Escolha a sua Poupança</h2>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto">Mais de <span className="text-orange-600 font-bold">14,300 unidades</span> entregues em Portugal este mês.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Pack 1 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center group relative">
            <div className="mb-6 h-48 flex items-center justify-center">
              <img src={productImg} alt="1 Unidade" className="w-40 group-hover:rotate-3 transition-transform" />
            </div>
            <h3 className="text-xl font-black text-stone-900 mb-1 uppercase">1 UNIDADE</h3>
            <p className="text-stone-400 text-sm mb-6 uppercase font-bold tracking-wider">Ideal p/ Casa de Banho</p>
            <div className="mb-8">
              <div className="text-stone-400 line-through text-sm">Preço normal: 49,95€</div>
              <div className="text-5xl font-black text-stone-900 italic">34,95€</div>
              <div className="text-orange-600 text-xs font-black mt-1 uppercase tracking-widest">Poupa: 15€</div>
            </div>
            <div className="mb-8 space-y-2">
              <p className="text-stone-900 font-bold text-sm">34,95 € / unidade</p>
              <p className="text-stone-400 text-[10px] font-bold uppercase flex items-center justify-center gap-1">
                <Truck className="w-3 h-3" /> Acrescem os portes de envio
              </p>
            </div>
            <button className="w-full mt-auto py-5 bg-stone-900 text-white rounded-xl font-black hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
              COMPRAR JÁ
            </button>
          </div>
          
          {/* Pack Principal - 3 Unidades (O mais vendido) */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-orange-200 border-4 border-orange-500 flex flex-col items-center text-center relative scale-105 z-10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-8 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg animate-pulse whitespace-nowrap">
               O MAIS VENDIDO
            </div>
            <div className="mb-6 h-48 flex items-center justify-center relative">
               <img src={productImg} alt="Pack de 3" className="w-48 drop-shadow-2xl transition-transform hover:scale-110 duration-500" />
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-1 uppercase">3 UNIDADES</h3>
            <p className="text-stone-500 text-sm mb-4 font-bold uppercase tracking-widest">Aqueça a Casa Toda</p>
            
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-200 shadow-sm">
               <Gift className="w-3.5 h-3.5" /> OFERTA: Meias Quentes e Felpudas
            </div>

            <div className="mb-8 w-full p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
              <div className="text-stone-400 line-through text-sm">Preço normal: 149,85€</div>
              <div className="text-6xl font-black text-orange-600 tracking-tighter">79,85€</div>
              <div className="text-stone-900 text-xs font-black mt-2 uppercase tracking-widest">Poupa: 70€</div>
            </div>
            <div className="mb-8 space-y-2 text-center">
              <p className="text-orange-600 font-bold text-lg">26,62 € / unidade</p>
              <p className="text-stone-500 text-[10px] font-bold uppercase flex items-center justify-center gap-1">
                <Truck className="w-3 h-3" /> Acrescem os portes de envio
              </p>
            </div>
            <button className="w-full py-6 bg-orange-600 text-white rounded-2xl font-black text-2xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-300 flex items-center justify-center gap-3 group">
              COMPRAR JÁ
              <Zap className="w-6 h-6 fill-current group-hover:scale-125 transition-transform" />
            </button>
          </div>
          
          {/* Pack 2 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center group">
            <div className="mb-6 h-48 flex items-center justify-center">
               <img src={productImg} alt="Pack de 2" className="w-40 transition-transform group-hover:-rotate-3" />
            </div>
            <h3 className="text-xl font-black text-stone-900 mb-1 uppercase">2 UNIDADES</h3>
            <p className="text-stone-400 text-sm mb-4 uppercase font-bold tracking-wider">Ideal p/ 2 Quartos</p>
            
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-xl text-[10px] font-black uppercase tracking-widest border border-orange-200">
               <Gift className="w-3.5 h-3.5" /> OFERTA: Meias Quentes
            </div>

            <div className="mb-8">
              <div className="text-stone-400 line-through text-sm">Preço normal: 99,90€</div>
              <div className="text-5xl font-black text-stone-900 italic">59,90€</div>
              <div className="text-green-600 text-xs font-black mt-1 uppercase tracking-widest">Poupa: 40€</div>
            </div>
            <div className="mb-8 space-y-2">
              <p className="text-stone-900 font-bold text-sm">29,95 € / unidade</p>
              <p className="text-stone-400 text-[10px] font-bold uppercase flex items-center justify-center gap-1">
                <Truck className="w-3 h-3" /> Acrescem os portes de envio
              </p>
            </div>
            <button className="w-full mt-auto py-5 bg-stone-900 text-white rounded-xl font-black hover:bg-black transition-all flex items-center justify-center gap-3">
              COMPRAR JÁ
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
             <div className="flex items-center gap-2 font-black text-stone-900">
               <ShieldCheck className="w-6 h-6" /> COMPRA 100% SEGURA
             </div>
             <div className="flex items-center gap-2 font-black text-stone-900">
               <Truck className="w-6 h-6" /> ENTREGA EXPRESSO EM 24/48H
             </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 opacity-40 grayscale">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
             <div className="w-px h-4 bg-stone-300 mx-2"></div>
             <span className="text-[10px] font-black uppercase text-stone-600 flex items-center gap-2 italic">
               <CreditCard className="w-3.5 h-3.5" /> Mbway / Pag. Entrega
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
