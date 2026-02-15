"use client";

import { CreditCard, Users, History } from "lucide-react";

const InfoCard = ({ number, title, text, icon: Icon }) => (
  <div 
    className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
  >
    <div className="absolute top-6 right-8 text-5xl font-black text-slate-300 group-hover:text-emerald-600 transition-all">
      0{number}
    </div>

    <div className="relative z-10 mb-8 w-14 h-14 flex items-center justify-center">
      <div className="absolute inset-0 bg-emerald-50 border border-emerald-600/20 rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:bg-emerald-600"></div>
      <div className="relative z-10 text-emerald-600 group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
    </div>

    <div className="relative z-10 flex flex-col gap-3">
      <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-all">
        {title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>

    <div className="mt-auto pt-6">
      <div className="h-1 w-12 bg-emerald-200 rounded-full group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500"></div>
    </div>
  </div>
);

export default function CardsSection() {
  const cards = [
    {
      number: 1,
      title: "Especialistas em Crédito",
      text: "Atuamos com foco total em soluções financeiras inteligentes. Analisamos seu caso de forma estratégica para renegociar dívidas e reduzir juros.",
      icon: CreditCard,
    },
    {
      number: 2,
      title: "Atendimento Humanizado",
      text: "Aqui você não é apenas um número. Nosso atendimento é próximo, transparente e personalizado, respeitando sua realidade em cada etapa.",
      icon: Users,
    },
    {
      number: 3,
      title: "Vidas Transformadas",
      text: "Já ajudamos centenas de pessoas a reorganizar suas finanças, recuperar o crédito e retomar a tranquilidade com compromisso real.",
      icon: History,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Adicionado */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Por que escolher a <span className="text-emerald-600">Liberty Cred?</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Combinamos expertise jurídica e financeira para oferecer o suporte que você precisa para recomeçar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              number={card.number}
              title={card.title}
              text={card.text}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}