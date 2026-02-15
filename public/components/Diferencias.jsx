"use client";

import { 
  HeartHandshake, 
  Zap, 
  ShieldCheck, 
  HandCoins, 
  Gavel, 
  MessageSquareQuote, 
  Eye, 
  UserPlus 
} from "lucide-react";

export default function Diferenciais() {
  const diferenciais = [
    { text: "Atendimento humanizado", icon: <HeartHandshake size={24} /> },
    { text: "Zero enrolação e total clareza", icon: <Zap size={24} /> },
    { text: "Verdades sobre o mercado", icon: <Eye size={24} /> },
    { text: "Nada de taxas surpresa", icon: <HandCoins size={24} /> },
    { text: "Processo rápido e seguro", icon: <ShieldCheck size={24} /> },
    { text: "Comunicação direta", icon: <MessageSquareQuote size={24} /> },
    { text: "Amparado pela legislação", icon: <Gavel size={24} /> },
    { text: "Lutamos pelo seu nome", icon: <UserPlus size={24} /> },
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold border border-emerald-600/30 tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
              Diferenciais Liberty
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              O que nos torna <span className="text-emerald-600 text-shadow-sm">únicos</span> no mercado?
            </h3>
          </div>
          
        </div>
        <p className="text-slate-500 max-w-sm md:text-left border-l-2  border-emerald-500 px-4 mb-12">
            Tratamos cada caso como se fosse o nosso, com transparência e rapidez.
        </p>

        {/* Grid de Cards Interativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diferenciais.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-slate-300 bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-300/80 bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all duration-300 mb-4">
                {item.icon}
              </div>
              <p className="font-bold text-slate-800 leading-tight group-hover:text-emerald-600 transition-all">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}