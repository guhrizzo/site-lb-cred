"use client";

import { MessageCircle, ShieldCheck, TrendingUp, CreditCard, CheckCircle } from "lucide-react";

export default function Hero() {
  const phone = "5514998420710";
  const message = "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-[#020617]">
      
      {/* Background Pro: Luzes Suaves */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-600/10 blur-[130px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <ShieldCheck size={14} className="fill-emerald-400/20" />
              Solução 100% Segura e Legal
            </div>

            <h1 className="text-5xl md:text-[80px] font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Seu nome limpo, <br />
              <span className="text-emerald-500">sem burocracia.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Recupere seu crédito e organize sua vida financeira com estratégias que realmente funcionam e atendimento humanizado.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={22} />
                ANÁLISE GRATUITA AGORA
              </a>
              
              <div className="flex flex-col gap-1">
                <div className="flex text-yellow-500 gap-0.5">
                  {[...Array(5)].map((_, i) => <CheckCircle key={i} size={14} className=" text-yellow-500" />)}
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  +300 VIDAS TRANSFORMADAS
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Composição Visual Profissional (Substituindo o ícone grandão) */}
          <div className="relative hidden lg:block">
            {/* Card Principal de "Score" */}
            <div className="relative z-20 bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-4xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Previsão de Score</p>
                  <h4 className="text-white text-3xl font-black">+450 pontos</h4>
                </div>
                <div className="bg-emerald-500/20 p-3 rounded-2xl text-emerald-500">
                  <TrendingUp size={32} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <span>Análise Atual</span>
                  <span className="text-emerald-500">Meta Atingível</span>
                </div>
              </div>
            </div>

            {/* Elementos Decorativos Flutuantes */}
            <div className="absolute -top-10 -right-10 z-30 bg-emerald-600 p-6 rounded-4xl shadow-xl animate-bounce-slow">
              <CreditCard size={40} className="text-white" />
            </div>

            <div className="absolute -bottom-6 -left-6 z-30 bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white text-sm font-bold tracking-tight">Análise em tempo real ativa</span>
              </div>
            </div>

            {/* Círculos de Brilho Atrás */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}