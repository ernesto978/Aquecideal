
import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Aquecideal</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              O mini-aquecedor portátil que revolucionou o conforto em casa. Eficiência, segurança e design minimalista num só produto.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Porque o Aquecideal?</h4>
            <ul className="space-y-4 text-stone-400">
              <li>Leve e Portátil</li>
              <li>Consumo de 800W</li>
              <li>Aquece até 32º</li>
              <li>Silencioso</li>
              <li>Segurança Total</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5" /> geral@fitodireto.pt</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5" /> 211 511 511</li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Lisboa, Portugal</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Pronto para aquecer a sua vida?</h4>
            <a href="#comprar" className="block w-full text-center py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/50">
              Quero o meu Aquecideal
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm">
          <p>© 2026 Aquecideal. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Sobre nós</a>
            <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
