"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Jobs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const phone = "5514998420710";
  const message =
    "Olá, vim pelo site da Liberty CRED e gostaria de falar com um especialista.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="lg:text-[55px] text-2xl font-bold text-slate-900 mb-4">
            Nossos Serviços
          </h2>
          <h3 className="lg:text-[18px] text-slate-600">
            Soluções Financeiras que Transformam Sua Vida
          </h3>
        </div>

        {/* Serviços */}
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <li data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl shadow-md p-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Limpeza de Nome
            </h4>
            <p className="text-sm text-green-600 mb-4">
              Amparo Jurídico Comercial
            </p>
            <p className="text-slate-600">
              Remoção de apontamentos indevidos em birôs como Serasa, SPC e Boa Vista,
              com base em leis como o Art. 42 do CDC.
            </p>
          </li>

          <li data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-2xl shadow-md p-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Negociação e Redução de Dívidas
            </h4>
            <p className="text-slate-600">
              Avaliamos suas dívidas e buscamos acordos estratégicos com descontos reais.
            </p>
          </li>

          <li data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-2xl shadow-md p-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Consultoria de Crédito
            </h4>
            <p className="text-slate-600">
              Orientação para melhorar seu score e recuperar seu acesso ao mercado de crédito.
            </p>
          </li>

          <li data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-2xl shadow-md p-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Intermediação Financeira
            </h4>
            <p className="text-slate-600">
              Acompanhamos e orientamos processos envolvendo financiamentos,
              dívidas bancárias e regularização financeira.
            </p>
          </li>

          <li data-aos="fade-up" data-aos-delay="500" className="bg-white rounded-2xl shadow-md p-8 border border-slate-200 md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              Auxílio para Acesso a Crédito
            </h4>
            <p className="text-slate-600">
              Preparamos você para conquistar limites maiores,
              crédito aprovado e vida financeira saudável.
            </p>
          </li>

        </ul>

        {/* CTA */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex justify-center mt-16"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-600 text-white px-10 py-4 rounded-xl
              font-semibold shadow-lg
              hover:bg-green-700 hover:scale-105
              transition
            "
          >
            Fale com um especialista
          </a>
        </div>

      </div>
    </section>
  );
}
