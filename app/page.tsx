import Footer from '../public/components/footer';
import Hero from '../public/components/hero';
import "aos/dist/aos.css";
import CardsSection from '../public/components/cardsSection'
import Jobs from '../public/components/jobs'
import Testimonials from '../public/components/Testimonials'
import WhatsAppButton from '../public/components/WhatsAppButton'
import Process from '../public/components/Process'
import CTAFinal from '../public/components/CTAFinal'
import AboutSection from '../public/components/AboutSection'
import Diferencias from '../public/components/Diferencias'

export default function Home() {

  const phone = "5514998420710";
  const message =
    "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  return (
    <div className="">
        <WhatsAppButton />
        <Hero />
        <CardsSection />
        <AboutSection />
      <div>
        
        <div
          className="">
          <Jobs />
        </div>
      </div>
      <Process />
      <Diferencias />
      
      <div className="">

      </div>
      <section id="depoimentos" className="">
        <Testimonials />
      </section>
      
      <CTAFinal />
      <Footer />
    </div>
  );
}
