
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Zap, Clock, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 12, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Promo Bar */}
      <div className="bg-orange-600 text-white py-2 px-4 flex justify-center items-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
        <span className="flex items-center gap-1">
          <Zap className="w-3 h-3 fill-current" /> 
          MEGA PROMOÇÃO OUTONO / INVERNO: -40% HOJE
        </span>
        <span className="hidden sm:inline opacity-30">|</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          TERMINA EM: <span className="text-white">{timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
        </span>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-stone-900 rounded-xl flex items-center justify-center">
                <Zap className="text-orange-500 w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter text-stone-900">
                AQUECIDEAL<span className="text-orange-600">.PT</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-bold">
              <a href="#beneficios" className="text-stone-500 hover:text-orange-600 transition-colors">Benefícios</a>
              <a href="#especificacoes" className="text-stone-500 hover:text-orange-600 transition-colors">Tecnologia</a>
              <a href="#comprar" className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg">
                Comprar Agora
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span> Stock em PT
                </span>
                <span className="text-[9px] text-stone-400 font-medium">Entrega em 24/48h</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
