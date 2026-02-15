"use client";

import { CheckCircle2, ShieldCheck, TrendingUp, Handshake, Landmark } from "lucide-react";

export default function Jobs() {
  const phone = "5514998420710";
  const message = "Olá, vim pelo site da Liberty CRED e gostaria de falar com um especialista.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const services = [
    {
      title: "Limpeza de Nome",
      desc: "Remoção de apontamentos indevidos (Serasa, SPC, Boa Vista) com amparo no Art. 42 do CDC.",
      tag: "Amparo Jurídico",
      icon: <ShieldCheck size={30} />,
      delay: 100
    },
    {
      title: "Redução de Dívidas",
      desc: "Negociações estratégicas com credores para obter descontos reais e liquidação de débitos.",
      icon: <Handshake size={30} />,
      delay: 200
    },
    {
      title: "Consultoria de Score",
      desc: "Orientação técnica para elevar sua pontuação e recuperar o poder de compra no mercado.",
      icon: <TrendingUp size={30} />,
      delay: 300
    },
    {
      title: "Intermediação Bancária",
      desc: "Suporte completo em processos de financiamentos e regularização de dívidas bancárias.",
      icon: <Landmark size={30} />,
      delay: 400
    },
    {
      title: "Acesso a Crédito",
      desc: "Estratégias personalizadas para conquista de limites maiores e aprovações de crédito.",
      icon: <CheckCircle2 size={30} />,
      delay: 500
    }
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold border border-emerald-600/30 tracking-wider text-emerald-600 uppercase bg-emerald-50 rounded-full">
            Nossa Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Soluções Financeiras <span className="text-emerald-600">Inteligentes</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Recupere sua liberdade financeira com processos transparentes, seguros e validados juridicamente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-8 relative w-16 h-16 flex items-center justify-center">
                  {/* Fundo que rotaciona */}
                  <div className="absolute inset-0 bg-emerald-50 border border-emerald-600/20 rounded-2xl transition-all duration-500 group-hover:rotate-12 group-hover:bg-emerald-600"></div>
                  
                  {/* Ícone estático com cor dinâmica */}
                  <div className="relative z-10 transition-all duration-300 text-emerald-600 group-hover:text-white group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                
                {service.tag && (
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                    {service.tag}
                  </span>
                )}
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed italic">
                  "{service.desc}"
                </p>
              </div>
            </div>
          ))}

          <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
            <h4 className="text-2xl font-bold mb-4">Pronto para recomeçar?</h4>
            <p className="text-emerald-100 mb-8 text-sm">Fale agora com um consultor e tire suas dúvidas gratuitamente.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-emerald-600 py-4 rounded-2xl font-bold shadow-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
            >
              Consultoria Grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}