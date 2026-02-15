"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const phone = "5514998659046";
  const message = "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0.1 });

    if (footer) observer.observe(footer);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`
        fixed bottom-[30px] right-[30px] z-1000
        w-[60px] h-[60px] rounded-full
        flex items-center justify-center
        transition-all duration-300 cubic-bezier(0.175, 0.885, 0.32, 1.275)
        text-white no-underline group
        ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
        ${scrolled ? "bg-emerald-600 shadow-xl" : "bg-[#25D366] shadow-[0px_8px_16px_rgba(37,211,102,0.3)]"}
        hover:scale-110 hover:-translate-y-[5px] hover:bg-[#1ebe5d] hover:shadow-[0px_12px_20px_rgba(37,211,102,0.4)]
      `}
    >
      {/* Efeito de Pulso (Ondas) */}
      <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] animate-[ping_2s_infinite] -z-10 opacity-70" />

      {/* Ícone */}
      <MessageCircle size={30} strokeWidth={2.5} />

      {/* Badge de Notificação (Estilo iOS) */}
      <span className="
        absolute -top-0.5 -right-0.5
        bg-[#ff3b30] text-white text-[12px] font-bold
        w-5 h-5 rounded-full
        flex items-center justify-center
        border-2 border-white shadow-sm
      ">
        1
      </span>

      {/* Tooltip (Aparece no Hover - Desktop) */}
      <span className="
        absolute right-[75px] whitespace-nowrap
        bg-[#333] text-white px-[15px] py-2 rounded-lg text-[14px]
        opacity-0 invisible transition-all duration-300
        group-hover:opacity-100 group-hover:visible group-hover:right-20
        hidden md:block
      ">
        Fale conosco
        {/* Triângulo do Tooltip */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#333] rotate-45" />
      </span>
    </a>
  );
}
