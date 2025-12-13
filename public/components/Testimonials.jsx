"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="lg:text-4xl text-[25px] font-bold text-slate-900 mb-4">
            Resultados que falam por si
          </h2>
          <p className="lg:text-xl text-[16px] text-slate-600">
            Veja o que nossos clientes dizem sobre a experiência com a Liberty CRED
          </p>
        </div>

        {/* Comentários */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Comentário 1 */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">JM</div>
              <span className="font-semibold text-slate-900">João Martins</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Não acreditava mais que conseguiria recuperar meu crédito.
              A Liberty CRED foi rápida, clara e extremamente profissional.
              Em pouco tempo eu vi o resultado.
            </p>
          </div>

          {/* Comentário 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">AP</div>
              <span className="font-semibold text-slate-900">Ana Paula Ferreira</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Fui acompanhada em cada etapa do processo, não teve enrolação
              e nem taxas extras. Além da rapidez, nota 10 para a equipe!
            </p>
          </div>

          {/* Comentário 3 */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">CH</div>
              <span className="font-semibold text-slate-900">Carlos Henrique</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Equipe extremamente preparada.
              Resolveram minha situação com rapidez e segurança.
              Recomendo de olhos fechados.
            </p>
          </div>

          {/* Comentário 4 */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">MS</div>
              <span className="font-semibold text-slate-900">Mariana Souza</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Tive muita paciência e apoio por parte da equipe.
              Meu score estava baixo e hoje já vejo resultados reais.
              Gratidão à Liberty CRED!
            </p>
          </div>

          {/* Comentário 5 */}
          <div data-aos="fade-up" data-aos-delay="500" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">RA</div>
              <span className="font-semibold text-slate-900">Ricardo Almeida</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Processo rápido e sem muita burocracia.
              Atendimento top demais!
            </p>
          </div>

          {/* Comentário 6 */}
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">FL</div>
              <span className="font-semibold text-slate-900">Fernanda Lima</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Passei por um momento muito difícil, mas a Liberty CRED trouxe
              segurança e tranquilidade. Profissionais comprometidos e transparentes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
