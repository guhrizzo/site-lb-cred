import { Search, PenTool, Zap, Trophy } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Análise Gratuita",
      desc: "Diagnóstico completo do seu CPF ou CNPJ para identificar restrições.",
      icon: <Search size={24} />,
    },
    {
      title: "Estratégia",
      desc: "Plano personalizado com as melhores vias legais para seu caso.",
      icon: <PenTool size={24} />,
    },
    {
      title: "Execução Ágil",
      desc: "Intervenção imediata e negociações diretas com os órgãos.",
      icon: <Zap size={24} />,
    },
    {
      title: "Resultado Real",
      desc: "Conclusão do processo e sua liberdade financeira retomada.",
      icon: <Trophy size={24} />,
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho Minimalista */}
        <div className="mb-16">
          <h2 className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold border border-emerald-600/30 tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
            Passo a passo
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">
            Como funciona a <span className="text-emerald-600">Liberty CRED</span>
          </h3>
        </div>

        {/* Grid de Passos */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300"
            >
              {/* Número em Marca d'água (UX: Guia visual sutil) */}
              <span className="absolute top-4 right-6 text-6xl font-black text-slate-300/50 group-hover:text-emerald-100 transition-colors">
                0{index + 1}
              </span>

              {/* Ícone com fundo minimalista */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-600 text-white mb-6 ">
                {step.icon}
              </div>

              {/* Texto */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Barra de progresso visual no rodapé do card */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-slate-200 rounded-t-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500 w-0 group-hover:w-full" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}