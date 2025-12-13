import Footer from '../public/components/footer';
import Hero from '../public/components/hero';
import "aos/dist/aos.css";
import CardsSection from '../public/components/cardsSection'
import Jobs from '../public/components/jobs'
import Testimonials from '../public/components/Testimonials'
import WhatsAppButton from '../public/components/WhatsAppButton'

export default function Home() {

  const phone = "5514998420710";
  const message =
    "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  return (
    <div className="">
      <div className=''>
        <WhatsAppButton />
        <Hero />
        <div data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true" className="flex flex-col justify-center items-center">
          <h1 className='lg:text-5xl text-4xl font-bold lg:mt-16 lg:mb-16 mb-6 mt-6'>Nossos Diferenciais!</h1>
          <CardsSection />
        </div>
      </div>
      <div>
        <section data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true" className="bg-slate-100 py-20">
          <div className="max-w-6xl mx-auto px-6">

            <div className="border-l-4  border-green-500 pl-6">
              <h2 className='text-4xl font-bold text-green-500'>Quem é a Liberty CRED?</h2>
            </div>

            <p className='pt-6 pb-6 text-xl'>A Liberty CRED é uma empresa especializada em soluções financeiras inteligentes, atuando com ética, transparência e estratégia para ajudar pessoas a recuperarem crédito, reduzirem dívidas e tomarem decisões seguras.
              Nosso objetivo é oferecer caminhos reais, simples e eficientes — sem burocracia, sem promessas vazias e com total segurança.
            </p>
            <div className="border-l-4  border-green-500 pl-6">
              <h2 className='text-4xl font-bold text-green-500 '>Pontos Fortes</h2>
            </div>
            <ul className='pt-6 text-xl flex flex-col'>
              <li className='flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg> Consultoria personalizada
              </li>
              <li className='flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg> Processo seguro e amparado por legislação
              </li>
              <li className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>Equipe especializada
              </li>
              <li className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269q.546.226 1.144.33l-1.474-1.474q.104.597.33 1.144m2.614.386a5.5 5.5 0 0 0 1.173-.242L4.374 7.91a6 6 0 0 0-.296 1.118zm2.157-.672q.446-.25.838-.576L5.418 6.126a6 6 0 0 0-.587.826zm1.545-1.284q.325-.39.576-.837L6.953 4.83a6 6 0 0 0-.827.587l4.6 4.602Zm1.006-1.822q.183-.562.242-1.172L9.028 4.078q-.58.096-1.118.296l3.823 3.824Zm.186-2.642a5.5 5.5 0 0 0-.33-1.144 5.5 5.5 0 0 0-1.144-.33z" />
              </svg>Transparência total
              </li>
              <li className='flex items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
              </svg>Alta taxa de sucesso
              </li>
            </ul>
          </div>
          <div>

          </div>
        </section>
        <div
          className="">
          <Jobs />
        </div>
      </div>
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Cabeçalho */}
          <div
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="lg:text-4xl text-[27px] font-bold text-slate-900 mb-4">
              Como Funciona o Processo
            </h2>
            <h3 className="lg:text-xl text-[16px] text-slate-600">
              Como é o passo a passo na Liberty CRED?
            </h3>
          </div>

          {/* Steps */}
          <div className="relative grid gap-8 md:grid-cols-4">

            {/* Linha (desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-400" />

            {/* Step 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="relative bg-slate-50 rounded-2xl shadow-md p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Análise Gratuita
              </h4>
              <p className="text-slate-600">
                Você envia sua situação e fazemos um diagnóstico completo.
              </p>
            </div>

            {/* Step 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative bg-slate-50 rounded-2xl shadow-md p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Estratégia Personalizada
              </h4>
              <p className="text-slate-600">
                Montamos um plano específico para o seu caso, com alternativas reais e seguras.
              </p>
            </div>

            {/* Step 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative bg-slate-50 rounded-2xl shadow-md p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Execução
              </h4>
              <p className="text-slate-600">
                Damos andamento imediato no processo: negociação, acordos, pedidos de retirada, etc.
              </p>
            </div>

            {/* Step 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="relative bg-slate-50 rounded-2xl shadow-md p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Resultado
              </h4>
              <p className="text-slate-600">
                Você recebe acompanhamento e vê sua situação mudar de verdade.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Cabeçalho */}
          <div
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Por que a Liberty CRED é diferente?
            </h2>
            <h3 className="text-xl text-slate-600">
              A diferença está no cuidado com você.
            </h3>
          </div>

          {/* Card principal */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-slate-100 rounded-3xl p-4 md:p-12 shadow-lg"

          >
            <ul className="grid lg:gap-6 gap-5 md:grid-cols-2">

              <li data-aos="fade-right" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Atendimento humanizado
                </p>
              </li>

              <li data-aos="fade-right" data-aos-delay="50" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Zero enrolação e total clareza
                </p>
              </li>

              <li data-aos="fade-right" data-aos-delay="100" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Explicamos tudo que o mercado tenta esconder
                </p>
              </li>

              <li data-aos="fade-right" data-aos-delay="150" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Nada de taxas surpresa
                </p>
              </li>

              <li data-aos="fade-right" data-aos-delay="200" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Processo rápido e seguro
                </p>
              </li>
              <li
                data-aos="fade-right"
                data-aos-delay="300"
                className="flex items-start gap-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  Comunicação direta e sem letras miúdas
                </p>
              </li>

              <li data-aos="fade-right" data-aos-delay="250" className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700">
                  100% alinhado às leis do consumidor
                </p>
              </li>

              <li
                data-aos="fade-right"
                data-aos-delay="350"
                className="flex items-start gap-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </span>
                <p className="lg:text-lg text-[14px] text-slate-700 ">
                  Empresa que realmente luta pelo cliente
                </p>
              </li>


            </ul>
          </div>

        </div>
      </section>
      <div className="">

      </div>
      <section id="depoimentos" className="">
        <Testimonials />
      </section>
      
      <div>
        <section className="bg-slate-900 py-24">
          <div
            data-aos="zoom-in"
            className="max-w-6xl mx-auto px-6 text-center"
          >
            <h2 className="lg:text-5xl text-3xl font-bold text-white mb-6">
              Sua mudança financeira começa agora.
            </h2>

            <h3 className="lg:text-xl text-[18px] text-slate-300 mb-10 leading-relaxed">
              Dê o primeiro passo. A análise é gratuita, segura e pode transformar sua vida.
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="300"
              className="
    inline-block
    bg-green-600 hover:bg-green-700 text-white
    px-15 py-5 rounded-2xl
    lg:text-lg text-[12px]
    font-semibold
    shadow-xl
    transition-all duration-200 ease-in-out
    hover:scale-105
  "
            >
              QUERO MINHA CONSULTA GRATUITA
            </a>


            <p className="mt-6 lg:text-sm text-slate-400">
              Atendimento 100% confidencial • Sem compromisso • Dentro da lei
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
