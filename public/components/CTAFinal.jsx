"use client";

import { MessageCircle, ShieldCheck, Zap } from "lucide-react";

export default function CTAFinal() {
  const phone = "5514998420710";
  const message = "Olá, vim pelo site da Liberty CRED e gostaria de falar com um especialista.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fundo com gradiente profundo e efeito de luz */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge de Confiança */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
          <Zap size={14} className="fill-emerald-400" />
          Ação Imediata
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
          Sua mudança financeira <br className="hidden md:block" />
          <span className="text-emerald-500">começa agora.</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Dê o primeiro passo para recuperar sua tranquilidade. A análise é <span className="text-white font-semibold">gratuita, segura</span> e totalmente dentro da lei.
        </p>

        {/* Botão Ultra-Resaltado */}
        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative flex items-center gap-3
              bg-emerald-600 hover:bg-emerald-500 text-white
              px-16 py-6 rounded-2xl
              text-lg md:text-xl font-extrabold
              shadow-[0_20px_50px_rgba(16,185,129,0.3)]
              hover:shadow-[0_20px_60px_rgba(16,185,129,0.5)]
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <MessageCircle size={24} className="group-hover:animate-bounce transition-all hidden lg:flex" />
            QUERO MINHA CONSULTA GRATUITA
          </a>

          {/* Itens de Confiança Minimalistas */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              100% Confidencial
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              Sem Compromisso
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              Processo Legalizado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}