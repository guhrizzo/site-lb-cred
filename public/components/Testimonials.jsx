"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "João Martins",
      initials: "JM",
      text: "Não acreditava mais que conseguiria recuperar meu crédito. A Liberty CRED foi rápida, clara e extremamente profissional. Em pouco tempo eu vi o resultado.",
    },
    {
      name: "Carlos Henrique",
      initials: "CH",
      text: "Equipe extremamente preparada. Resolveram minha situação com rapidez e segurança. Recomendo de olhos fechados.",
    },
    {
      name: "Ricardo Almeida",
      initials: "RA",
      text: "Processo rápido e sem muita burocracia. Atendimento diferenciado e suporte impecável durante todo o tempo.",
    },
    {
      name: "Ana Paula Ferreira",
      initials: "AF",
      text: "Fui acompanhada em cada etapa do processo, não teve enrolação e nem taxas extras. Além da rapidez, nota 10 para a equipe!",
    },
    {
      name: "Mariana Souza",
      initials: "MS",
      text: "Tive muita paciência e apoio por parte da equipe. Meu score estava baixo e hoje já vejo resultados reais. Gratidão à Liberty CRED!",
    },
    {
      name: "Fernanda Lima",
      initials: "FL",
      text: "Passei por um momento muito difícil, mas a Liberty CRED trouxe segurança e tranquilidade. Profissionais comprometidos e transparentes.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold border border-emerald-600/30 tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
            Depoimentos
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Resultados que falam <span className="text-emerald-600">por si</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            A satisfação de quem retomou sua liberdade financeira com a nossa ajuda.
          </p>
        </div>

        {/* Grid de Comentários - Agora alinhado corretamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Estrelas e Aspas */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <Quote size={28} className="text-slate-100 group-hover:text-emerald-100 transition-colors" />
                </div>

                {/* Texto do Depoimento */}
                <p className="text-slate-600 leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Assinatura Simples */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <span className="font-bold text-slate-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}