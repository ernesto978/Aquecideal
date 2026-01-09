
import React from 'react';

const scenarios = [
  { 
    title: "Na sala", 
    img: "https://aquecideal.pt/wp-content/uploads/2025/01/happy-parent-couple-with-two-kids.jpg?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "No conforto do lar", 
    img: "https://aquecideal.pt/wp-content/uploads/2025/01/Aquecideal-temperatura.jpg?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Nas suas atividades favoritas", 
    img: "https://aquecideal.pt/wp-content/uploads/2025/01/expressive-senior-female-posing-indoor_344912-434.jpg?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Em viagem", 
    img: "https://aquecideal.pt/wp-content/uploads/2025/01/happy-nomad-couple-medium-shot-scaled.jpg?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "No escritório", 
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "No quarto", 
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" 
  },
];

const UsageGallery: React.FC = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-stone-900 mb-4 tracking-tighter">Um aquecedor para todos os espaços.</h2>
          <p className="text-xl text-stone-600 font-medium">Adaptável ao seu estilo de vida, onde quer que precise de conforto imediato.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-[2.5rem] aspect-square shadow-sm">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-black text-xl tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageGallery;
