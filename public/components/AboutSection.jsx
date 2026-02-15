"use client";

import { UserCheck, ShieldCheck, Users, Eye, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    { icon: <UserCheck size={20} />, text: "Consultoria personalizada" },
    { icon: <ShieldCheck size={20} />, text: "Processo 100% legalizado" },
    { icon: <Users size={20} />, text: "Equipe especializada" },
    { icon: <Eye size={20} />, text: "Transparência total" },
    { icon: <TrendingUp size={20} />, text: "Alta taxa de sucesso" },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Texto Institucional */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold border border-emerald-600/30 tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
              Institucional
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Quem é a <span className="text-emerald-600">Liberty CRED?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Somos especialistas em <span className="text-slate-900 font-semibold">soluções financeiras inteligentes</span>. Atuamos com ética e estratégia para ajudar pessoas a recuperarem seu poder de compra e tomarem decisões seguras.
              </p>
              <p>
                Nosso objetivo é oferecer caminhos reais e eficientes — sem burocracia, sem promessas vazias e com total amparo legal.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Pontos Fortes em Cards */}
          <div className="relative">
            {/* Decoração de fundo */}
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-3xl -rotate-2 -z-10" />
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                Nossos Diferenciais
              </h3>

              <div className="grid gap-4">
                {strengths.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors border border-emerald-600/20 duration-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium md:text-lg">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}