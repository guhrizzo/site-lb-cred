import Footer from '../public/components/footer';
import Hero from '../public/components/hero';
import "aos/dist/aos.css";
import CardsSection from '../public/components/cardsSection'

export default function Home() {

  return (
    <div className="">
      <div className=''>
        <Hero />
        <div data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true" className="flex flex-col justify-center items-center">
          <h1 className='text-5xl font-bold mt-16 mb-16'>Nossos Diferenciais!</h1>
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

        <h2>NOSSOS SERVIÇOS</h2>
        <h3>Soluções Financeiras que Transformam Sua Vida
        </h3>
        <ul>
          <li>
            <p> Limpeza de Nome (Amparo Jurídico Comercial)</p>
            <p>Remoção de apontamentos indevidos em birôs como Serasa, SPC e Boa Vista, com base em leis como o Art. 42 do CDC.
            </p>
          </li>
          <li>
            <p> Negociação e Redução de Dívidas
            </p>
            <p>Avaliamos suas dívidas e buscamos acordos estratégicos com descontos reais.
            </p>
          </li>
          <li>
            <p> Consultoria de Crédito
            </p>
            <p>Orientação para melhorar seu score e recuperar seu acesso ao mercado de crédito.
            </p>
          </li>
          <li>
            <p> Intermediação Financeira
            </p>
            <p>Acompanhamos e orientamos processos envolvendo financiamentos, dívidas bancárias e regularização financeira.
            </p>
          </li>
          <li>
            <p>  Auxílio para Acesso a Crédito
            </p>
            <p>Preparamos você para conquistar limites maiores, crédito aprovado e vida financeira saudável.
            </p>
          </li>
        </ul>
        <button>Falar com um especialista</button>
      </div>
      <div>
        <h2>COMO FUNCIONA O PROCESSO</h2>
        <h3>Como é o passo a passo na Liberty CRED?</h3>

        <p>Análise Gratuita</p>
        <p>Você envia sua situação e fazemos um diagnóstico completo.</p>

        <p>Estratégia Personalizada</p>
        <p>Montamos um plano específico para o seu caso, com alternativas reais e seguras.</p>

        <p>Execução</p>
        <p>Damos andamento imediato no processo: negociação, acordos, pedidos de retirada, etc.</p>

        <p>Resultado</p>
        <p>Você recebe acompanhamento e vê sua situação mudar de verdade.</p>
      </div>
      <div>
        <h2>POR QUE A LIBERTY CRED É DIFERENTE?</h2>
        <h3>A diferença está no cuidado com você.</h3>
        <ul>
          <li>Atendimento humanizado</li>
          <li>Zero enrolação e total clareza</li>
          <li>Explicamos tudo que o mercado tenta esconder</li>
          <li>Nada de taxas surpresa</li>
          <li>Processo rápido e seguro</li>
          <li>100% alinhado às leis do consumidor</li>
          <li>Empresa que realmente luta pelo cliente</li>
        </ul>
      </div>
      <div>
        <h2>Resultados que falam por si</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia sequi tempore nisi distinctio doloribus saepe non maiores dolores. Dolores quae veritatis nobis ipsam nostrum animi iste est tempore. Accusamus!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt repellat nesciunt ut sapiente dicta aliquid animi repellendus non autem tenetur voluptatem ducimus magnam officiis eos reiciendis, recusandae ratione consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius quasi soluta, consequatur nemo adipisci at fuga quidem magni, mollitia unde molestiae, dolor magnam quaerat facilis sit enim maiores blanditiis.</p>
      </div>
      <div>
        <h2>Sua mudança financeira começa agora.</h2>
        <h3>Dê o primeiro passo. A análise é gratuita, segura e pode transformar sua vida.</h3>
        <button>
          QUERO MINHA CONSULTA GRATUITA
        </button>
      </div>
      <Footer />
    </div>
  );
}
