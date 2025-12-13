"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br 
        from-emerald-900 via-green-800 to-green-600" />

      {/* Shapes geométricos */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_20%,transparent_20%),linear-gradient(300deg,rgba(255,255,255,0.05)_30%,transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.15)_25%,transparent_25%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">

        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          A Solução Financeira que Você Precisa, Simples, Transparente e Segura.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 max-w-xl text-lg text-emerald-100"
        >
          Renegocie dívidas, recupere seu crédito e organize sua vida financeira
          com apoio profissional, atendimento humanizado e estratégias que
          realmente funcionam.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 flex gap-4"
        >
          <button className="px-6 font-bold py-3 rounded-full border border-white/60 cursor-pointer hover:bg-white hover:text-emerald-900 transition">
            Quero uma consulta gratuita!
          </button>
        </div>

      </div>
    </section>
  );
}
